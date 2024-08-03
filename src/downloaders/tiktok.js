// import youtubedl from "youtube-dl-exec";
import TikTok from '@tobyg74/tiktok-api-dl'

const tiktokDownloader = async (url, type) => {
    try {
        const data = await TikTok.Downloader(url, {
            version: 'v1'
        })
        /* const data = await youtubedl.exec(url, {
            output: 'downloaded_tiktok_video.mp4' // Simplified output filename
        });*/

        if (!data.status) return new Error('status error')

        const results = []

        const desc = `Downloaded using Space Downloader\n\n@ludlbot@`
        console.log(desc)

        let id = 1

        if(type === 'inline'){
            for (let item in data.result) {
                console.log(item, data.result[item])
                if(item === 'music'){
                    results.push({
                        type: 'audio',
                        id: id,
                        audio_url: data.result[item].playUrl[0],
                        title: '🎶 Áudio',
                        caption: desc
                    })
                }
    
                if(item === 'video' || item === 'video1' || item === 'video2' || item === 'videoHD' || item === 'videoWatermark'){
                    results.push({
                        type: 'video',
                        id: id,
                        video_url: data.result[item].downloadAddr[0],
                        mime_type: 'video/mp4',
                        thumbnail_url: data.result[item].originCover[0],
                        title: '📹 Vídeo',
                        caption: desc
                    })
                }
                id++
            }
        }

        if(type === 'direct'){

        }
        // console.log(results)
        //console.log(data.video); 
        return results;
    } catch (error) {
        console.error(error);
    }
}

//tiktokDownloader('https://vm.tiktok.com/ZMrQ4Gokg/');
export default tiktokDownloader;
