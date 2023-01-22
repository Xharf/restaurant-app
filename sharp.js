const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
 
const targetHeros = path.resolve(__dirname, 'src/public/images/heros');
const targetLogo = path.resolve(__dirname, 'src/public/images/logo');
const destinationHeros = path.resolve(__dirname, 'src/public/images/resized/heros');
const destinationLogo = path.resolve(__dirname, 'src/public/images/resized/logo');
 
if (!fs.existsSync(destinationHeros)) {
  fs.mkdirSync(destinationHeros);
}
 
fs.readdirSync(targetHeros)
    .forEach(image => {
      // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
      sharp(`${targetHeros}/${image}`)
          .resize(1080)
          .toFile(path.resolve(
              __dirname,
              `${destinationHeros}/${image.split('.').slice(0, -1).join('.')}-large.jpg`),
          );
 
      // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
      sharp(`${targetHeros}/${image}`)
          .resize(675)
          .toFile(path.resolve(
              __dirname,
              `${destinationHeros}/${image.split('.').slice(0, -1).join('.')}-small.jpg`),
          );
    });

if (!fs.existsSync(destinationLogo)) {
  fs.mkdirSync(destinationLogo);
}
 
fs.readdirSync(targetLogo)
    .forEach(image => {
      // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
      sharp(`${targetLogo}/${image}`)
          .resize(800)
          .toFile(path.resolve(
              __dirname,
              `${destinationLogo}/${image.split('.').slice(0, -1).join('.')}-large.jpg`),
          );
 
      // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
      sharp(`${targetLogo}/${image}`)
          .resize(480)
          .toFile(path.resolve(
              __dirname,
              `${destinationLogo}/${image.split('.').slice(0, -1).join('.')}-small.jpg`),
          );
    });