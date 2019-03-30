#!/usr/bin/env bash

#find . -mindepth 1 \( \
#  -path '*/node_modules' -o \
#  -path '*/.git' -o \
#  -path '*/build' \
#\) -prune -o \( \
#  ! -name README.md ! -name sample.txt \
#\) -type f -print

# cpio -p -dumv /b/
# This command finds all files in /Source/ and copies, while preserving the path, any files contained within.

find . -mindepth 1 \( \
  -path '*/static/*/*.js' \
\) -type f -print
