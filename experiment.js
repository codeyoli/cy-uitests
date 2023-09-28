import fs from 'fs'

function videoToBase64(videoPath) {
   const videoBuffer = fs.readFileSync(videoPath)
   const base64Video = videoBuffer.toString('base64')
   return base64Video
}

let result = videoToBase64('./cypress/videos/smoke.cy.js.mp4')
console.log('RESULT', result)
