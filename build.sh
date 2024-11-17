#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

# Download and install npm dependencies
npm install

# Run the Vite build command
npm run build