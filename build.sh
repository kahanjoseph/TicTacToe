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
  cp $OUTPUT_DIR/*.js $DIST_DIR/
  cp $OUTPUT_DIR/*.js.map $DIST_DIR/
else
  echo "Build failed: $OUTPUT_DIR directory not found"
  exit 1
fi