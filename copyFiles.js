const fs = require("fs-extra");

// Ruta de origen de los archivos fuera de la carpeta src
const sourceDir = "path-to-your-source-directory";

// Ruta de destino (carpeta de construcción)
const buildDir = "build";

// Copiar archivos desde sourceDir a buildDir
fs.copySync(sourceDir, buildDir, { overwrite: true });

console.log("Archivos copiados con éxito.");
