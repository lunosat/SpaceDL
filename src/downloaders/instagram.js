import instagramGetUrl from 'instagram-url-direct'

const instagramDownloader = async (url, type) => {
    try {
        const { url_list } = await instagramGetUrl(url)
        // console.log(data)

        let results = []
        if(type === 'inline'){
            url_list.forEach((e, i)=> {
                results.push({
                    type: 'video',
                    id: i + 1,
                    video_url: e,
                    mime_type: 'video/mp4',
                    thumbnail_url: 'https://cdn6.aptoide.com/imgs/2/d/6/2d62805d3ab029990520f0ccebb0fad1_icon.jpg',
                    title: 'Instagram Vídeo'
                })
            });
        }

        if(type === 'direct'){
            results = url_list
        }
        return results
    } catch (error) {
        console.log(error)
    }
}

export default instagramDownloader