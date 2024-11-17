#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

# Download and install sbt
curl -L -o sbt.zip $(curl -s https://api.github.com/repos/sbt/sbt/releases/latest | grep browser_download_url | grep -E 'sbt-.*.zip' | cut -d '"' -f 4)
unzip sbt.zip -d sbt
export PATH=$PATH:$(pwd)/sbt/sbt/bin

# Run the sbt command to build the Scala.js project using fullLinkJS
sbt livechart/fullLinkJS

# Check if the output directory exists and move the build output to the public directory
OUTPUT_DIR="src/main/scala/ticTacToe/target/scala-3.3.3"
PUBLIC_DIR="public"

if [ -d "$OUTPUT_DIR" ]; then
  mkdir -p $PUBLIC_DIR
  cp $OUTPUT_DIR/*.js $PUBLIC_DIR/
  cp $OUTPUT_DIR/*.js.map $PUBLIC_DIR/
else
  echo "Build failed: $OUTPUT_DIR directory not found"
  exit 1
fi