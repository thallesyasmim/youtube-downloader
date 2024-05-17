import fs from 'fs'
import http from 'http'
import path from 'path'
import ytdl from 'ytdl-core'

async function downloadVideo(url: string) {
  console.time()
  const videoInfo = await ytdl.getInfo(url)
  console.log(videoInfo.formats)
  const format = ytdl.chooseFormat(videoInfo.formats, { quality: '18' })
  const outputFilePath = `${path.resolve(__dirname + '../../../uploads')}/${
    videoInfo.videoDetails.title
  }.${format.container}`
  const outputStream = fs.createWriteStream(outputFilePath)

  ytdl.downloadFromInfo(videoInfo, { format }).pipe(outputStream)

  outputStream.on('finish', () => {
    console.log(`Finished download: ${outputFilePath}`)
  })
  console.timeEnd()
}

http
  .createServer(async (_, res) => {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
  })
  .on('request', async (req, res) => {
    const [, url] = req.url?.split('?url=') ?? []
    // await downloadVideo(url)
    res.end(url)
  })
  .listen(3000, () => {
    console.info('Server is running!')
  })
