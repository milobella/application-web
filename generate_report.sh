#!/usr/bin/bash

commits=$(git log v1.1.0-dev3..HEAD --author="Renovate Bot" --format=%s --no-merges)
commits_without_version=$(echo ${commits} | sed "s/v[0-9]+\(.[0-9]+\)\{0,2\}//")

echo $commits_without_version