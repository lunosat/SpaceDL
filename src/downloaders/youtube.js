import youtubedl from "youtube-dl-exec"
import fs from "fs"

const youtubeDownloader = async (url, type) => {
    try {

        const data = await youtubedl(url, {
            dumpSingleJson: true,
            noCheckCertificates: true,
            noWarnings: true,
            preferFreeFormats: true,
            addHeader: ['referer:youtube.com', 'user-agent:googlebot']
        })

        console.log(data.formats)

        let results = []
        let id = 1
        if (type === 'inline') {
            data.formats.forEach((e, i) => {
                if(e.url.endsWith('m3u8')){
                  return
                }
                if(e.ext === 'mp4'){
                    results.push({
                        type: 'video',
                        id: id,
                        video_url: e.url,
                        mime_type: 'video/mp4',
                        thumbnail_url: data.thumbnail,
                        title: `${data.title.slice(10)[0]}} - 📹 Vídeo | ${e.resolution} | ${e.format}`
                    })
                }

                if(e.ext === 'm4a'){
                    results.push({
                        type: 'audio',
                        id: id,
                        audio_url: e.url,
                        title: `${data.title.slice(10)[0]} - 🎶 Áudio | ${e.resolution} | ${e.format}`,
                    })
                }

                if(e.ext === 'webm'){
                  results.push({
                      type: 'audio',
                      id: id,
                      audio_url: e.url,
                      title: `${data.title.slice(10)[0]} - 🎶 Áudio | ${e.resolution} | ${e.format}`,
                  })
              }

                id++
            });
        }

        if (type === 'direct') {
            results = data.formats
        }
        console.log(results)
        // fs.writeFileSync('youtube.json', JSON.stringify(data.formats))

        return results
    } catch (error) {
        console.log(error)
    }
}

export default youtubeDownloader