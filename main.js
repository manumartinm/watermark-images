const fs = require('fs')
const sharp = require('sharp')
const path = require('path')

const imagesPath = path.join(__dirname, 'images')
const waterMark = path.join(__dirname, 'watermark.png')

fs.readdir(imagesPath, (err, files) => {

    files.map(file => {
        const filePath = path.join(imagesPath, file)

        sharp(filePath)
            .composite([{ input: waterMark, gravity: 'center' }])
            .toFile(`./watermarkimages/${file}`)        
    })
})