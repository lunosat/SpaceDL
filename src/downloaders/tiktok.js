import youtubedl from "youtube-dl-exec";
import TikTok from '@tobyg74/tiktok-api-dl'

const tiktokDownloader = async (url, type) => {
    try {
        const data = await youtubedl(url, {
            dumpSingleJson: true,
            noCheckCertificates: true,
            noWarnings: true,
            preferFreeFormats: true,
            addHeader: ['referer:tiktok.com', 'user-agent:googlebot']
        })

        const results = []

        let id = 1

        if(type === 'inline'){
            data.formats.forEach((e) => {
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
            })
        }

        if(type === 'direct'){

        }
        console.log(results)
        return results;
    } catch (error) {
        console.error(error);
    }
}

export default tiktokDownloader;
