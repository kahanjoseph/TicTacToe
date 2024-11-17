#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

# Download and install sbt if not already installed
if ! command -v sbt &> /dev/null
then
  echo "sbt could not be found, installing..."
  curl -L -o sbt.zip $(curl -s https://api.github.com/repos/sbt/sbt/releases/latest | grep browser_download_url | grep -E 'sbt-.+\.zip' | cut -d '"' -f 4)
  unzip sbt.zip -d sbt
  export PATH=$PATH:$(pwd)/sbt/sbt/bin
fi

# Download and install npm dependencies
npm install

# Run the Vite build command, which triggers Scala.js build using sbt
npm run build