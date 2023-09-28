import fs from 'fs'

export const taskProcesses = {
   videoToBase64(videoPath) {
      const videoBuffer = fs.readFileSync(videoPath)
      const base64Video = videoBuffer.toString('base64')
      return base64Video
   },
}

// Example usage:
/*
const videoPath = 'cypress/video/test.mp4'
const base64Encoded = convertVideoToBase64(videoPath)
console.log(base64Encoded)
*/
