import identifyFont from "../helpers/identifyFont.js"

/* Downloaders */

import instagramDownloader from "./instagram.js"
import tiktokDownloader from "./tiktok.js"
import xDownloader from "./x.js"
import youtubeDownloader from "./youtube.js"

const downloadProcessor = async (url, type) => {
    try {
        const font = identifyFont(url)

        console.log(`Proccesing: ${font} | ${url}`)

        if(font === 'instagram') {
            const results = await instagramDownloader(url, type)
            return results
        }

        if(font === 'tiktok') {
            const results = await tiktokDownloader(url, type)
            return results
        }

        if(font === 'x'){
            const results = await xDownloader(url, type)
            return results
        }

        if(font === 'youtube'){
            const results = await youtubeDownloader(url, type)
            return results
        }
    } catch (error) {
        console.error(error)
    }
}

export default downloadProcessor