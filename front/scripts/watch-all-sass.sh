#!/bin/zsh
for src in app/templates/style.scss app/templates/*/src components/features/*/*/src; do
  if [ -f "$src" ] && [[ "$src" == *.scss ]]; then
    dist="${src%.scss}.css"
    npx sass --watch "$src":"${dist}" &
    continue
  fi
  if [ -d "$src" ]; then
    dist="${src/src/dist}"
    mkdir -p "$dist"
    npx sass --watch "$src":"$dist" &
  fi
done
wait
