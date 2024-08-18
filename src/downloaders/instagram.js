import youtubedl from "youtube-dl-exec"

const instagramDownloader = async (url, type) => {
    try {

        const data = await youtubedl(url, {
            dumpSingleJson: true,
            noCheckCertificates: true,
            noWarnings: true,
            preferFreeFormats: true,
            addHeader: ['referer:instagram.com', 'user-agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36']
        })

        let results = []
        let id = 1
        if (type === 'inline') {
            data.formats.forEach((e, i) => {
                if(e.format_note?.includes('DASH')){
                    return
                }
                if(e.ext === 'mp4'){
                    results.push({
                        type: 'video',
                        id: id,
                        video_url: e.url,
                        mime_type: 'video/mp4',
                        thumbnail_url: data.thumbnail,
                        title: `${data.title.slice(10)[0]} - 📹 Vídeo | ${e.resolution}`
                    })
                }

                if(e.ext === 'm4a'){
                    results.push({
                        type: 'audio',
                        id: id,
                        audio_url: e.url,
                        title: `${data.title.slice(10)[0]} - 🎶 Áudio | ${e.resolution}`,
                    })
                }

                id++
            });
        }

        if (type === 'direct') {
            results = data.formats
        }

        return results
    } catch (error) {
        console.log(error)
    }
}

export default instagramDownloader