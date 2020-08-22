const fs = require('fs');
const https = require('https');

const gw = require('./gw');

async function scrape() {
    
    const formattedPaintInfo = await Promise.all(gw.allPaints.map(async (paint) => {

        const svg = await downloadSvg(paint.svg);

        const path = `./paintimages/${paint.name}.svg`;

        const file = await saveFile(path, svg);
        
        const hexCode = getHexCodeFromFile(file);

        return { 
            ...paint,
            hexCode,
            filePath : path
        } ;
    }));

    await saveFile('./data/gw.json', JSON.stringify(formattedPaintInfo));
}

scrape();

/**
 * 
 * @param {String} file 
 * @returns {String}
 */
function getHexCodeFromFile(file) {
    const searchTerm = 'fill="#';
    const fillIndex = file.indexOf(searchTerm) + searchTerm.length;
    const hexCode = file.slice(fillIndex, fillIndex + 6);
    return `#${hexCode}`;
}

/**
 * 
 * @param {Object} paint 
 * @param {Buffer} data
 * @returns {String} 
 */
function saveFile(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) { reject(err) };

            const file = fs.readFileSync(path, 'utf8');
            resolve(file);
        });
    })
}

async function downloadSvg(url) {
    return new Promise((resolve, reject) => {
        let str = '';
        https.get(url, (res) => {
            res.on('data', d => str += d)
            res.on('end', () => resolve(str))
        })
        .on('error', reject);
    })
}