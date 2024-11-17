   #!/bin/bash

   # Download and install sbt
   curl -L -o sbt.zip $(curl -s https://api.github.com/repos/sbt/sbt/releases/latest | grep browser_download_url | grep -E 'sbt-.*.zip' | cut -d '"' -f 4)
   unzip sbt.zip -d sbt
   export PATH=$PATH:$(pwd)/sbt/sbt/bin

   # Build the Scala.js project
   sbt fullOptJS

   # Move the build output to the public directory
   mkdir -p public
   cp -r target/scala-2.13/* public/