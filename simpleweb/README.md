# Simpleweb

Added node file structure.

## Dockerfile

Builds alpine node image (stripped down node). It then copies the package.json file. This checks if the package.json file has changed from the cached image. If it hasn't changed, `npm install` then uses the cached version which doesn't take any time. Then the rest of the files are copies. This means that we can change the source code and have some nice 'rebuild' times without having to install the node modules every time.
