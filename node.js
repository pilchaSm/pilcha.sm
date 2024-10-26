const fs = require("fs");
const path = require("path");

const imageFolder = path.join(__dirname, "src/assets");

const outputFile = path.join(__dirname, "src/api/images.json");

const generateJSON = () => {
  fs.readdir(imageFolder, (err, files) => {
    if (err) {
      console.error("Error leyendo la carpeta de imágenes:", err);
      return;
    }

    const images = files
      .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
      .map((file) => ({
        name: file,
        path: `/assets/${file}`,
      }));

    fs.writeFile(outputFile, JSON.stringify(images, null, 2), (err) => {
      if (err) {
        console.error("Error al escribir el archivo JSON:", err);
      } else {
        console.log("Archivo JSON de imágenes generado correctamente.");
      }
    });
  });
};

generateJSON();
