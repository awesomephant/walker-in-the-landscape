const fs = require('fs')
const outputPath = './_includes/prefetch.liquid';

console.log('Writing prefetch list...')
fs.readdir('./assets/images/', (err, files) => {
    let links = []
    files.forEach(f => {
        console.log(f)
        links.push(`<link rel="prefetch" href="/assets/images/${f}" />`)
    })

    console.log(`${links.length} images found.`)

    fs.writeFile(outputPath, links.join('\n'), (err) => {
        if (err) { console.log(err) }
        console.log(`Wrote prefetch list to ${outputPath}`)
    })
})