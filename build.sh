#!/bin/bash
echo "Building HDR Tool..."

rm -rf build/*
cp src/* build/

# Now copy to your portfolio repo
cp -R build/* ../portfolio-site/hdr-tool/
cd ../portfolio-site
git add hdr-tool/
git commit -m "Update HDR Tool"
git push

