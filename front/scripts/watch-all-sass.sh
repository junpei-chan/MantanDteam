#!/bin/zsh
for src in app/templates/*/src components/features/*/*/src; do
  if [ -d "$src" ]; then
    dist="${src/src/dist}"
    mkdir -p "$dist"
    npx sass --watch "$src":"$dist" &
  fi
done
wait
