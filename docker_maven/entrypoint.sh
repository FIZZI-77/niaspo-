#!/bin/bash

node docker_maven/src/server.js &
echo "HTTP server started on port 8080"

tail -f /dev/null