Decode PEM encoded certificates in VSCode

## Package and install

Install Visual Studio Code Extension

`npm install -g vsce`

Package to a VSIX file (this wil generate a VSIX file in the same directory as packags.json)

`vsce package`

Install in Visual Studio Code

**Extensions -> More Action -> Install from VSIX**

Select the VSIX file generated from the previous step

## Requirements

* openssl

## Features

Decode the current file as PEM encoded certificate

* `ctrl+shift+p`
* Type `decode pem` and hit enter
* Decoded cert is written to output
