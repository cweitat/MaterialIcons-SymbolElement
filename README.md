# Material Icons Symbol Element
Generate list of Material Icons to symbols elements for Web usage with Gulp
**Current Version: 4.0.0**

## No time to read and DIY?
Pre-generated SVGs are in the `dest` folder for download.

## Material Icons Types
https://material.io/resources/icons/

 - Filled (default)
 - Outlined
 - Rounded
 - Two Toned
 - Sharp

Download latest icon pack from https://github.com/google/material-design-icons

## Steps

 1. Download the repo
 2. Install the packages with `npm i`
 3. Run command at root of project with `grunt`

## Quick commands

Feeling lazy? Just copy & paste the command for respective icon type. File will be generated out in `dest` folder, named `src.svg`.

    grunt materialicons
    grunt materialiconsoutlined
    grunt materialiconsround
    grunt materialiconssharp
    grunt materialiconstwotone
    
References

 - https://github.com/google/material-design-icons/blob/f40051c7a11568a0e51fc693d1b4e5e96dfe218e/sprites/README.md
 - https://github.com/w0rm/gulp-svgstore
