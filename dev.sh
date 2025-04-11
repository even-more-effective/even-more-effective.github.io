#!/bin/bash

# Simple script to detect if we're running in Docker and use the appropriate config

if [ -f "/.dockerenv" ] || grep -q docker /proc/1/cgroup 2>/dev/null; then
  echo "Docker environment detected, using docker.config.mjs"
  npm run dev:docker -- --host 0.0.0.0
else
  echo "Local environment detected, using standard config"
  npm run dev -- --host 0.0.0.0
fi