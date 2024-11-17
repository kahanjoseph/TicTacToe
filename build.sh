#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

# Download and install sbt
curl -L -o sbt.zip $(curl -s https://api.github.com/repos/sbt/sbt/releases/latest | grep browser_download_url | grep -E 'sbt-.*.zip' | cut -d '"' -f 4)
unzip sbt.zip -d sbt
export PATH=$PATH:$(pwd)/sbt/sbt/bin

# Run the sbt command to build the Scala.js project using fullLinkJS
sbt livechart/fullLinkJS

# Locate the output directory for livechart project
OUTPUT_DIR=$(find "src/main/scala/ticTacToe/target/scala-3.3.3" -type d -name "livechart-opt")
DIST_DIR="dist"

if [ -d "$OUTPUT_DIR" ]; then
  mkdir -p $DIST_DIR

  # Copy all JS files and source maps to the dist directory
  find $OUTPUT_DIR -name "*.js" -exec cp {} $DIST_DIR/ \;
  find $OUTPUT_DIR -name "*.js.map" -exec cp {} $DIST_DIR/ \;

  # Dynamically create HTML with the correct script src
  JS_FILE=$(ls $DIST_DIR/*.js | awk -F/ '{print $NF}' | grep -v 'module' | head -n 1)
  echo "<html><head><title>Livechart</title></head><body><script type=\"module\" src=\"$JS_FILE\"></script></body></html>" > $DIST_DIR/index.html
else
  echo "Build failed: $OUTPUT_DIR directory not found"
  exit 1
fi