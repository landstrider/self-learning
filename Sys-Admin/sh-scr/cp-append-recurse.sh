#!/usr/bin/env bash

for file in static/js/*.js
do
  cat "$file"
  echo
done >> ~/self-learning/Practice-Junk/main.js
