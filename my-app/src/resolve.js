const templates = [
    [/www\.thinglink\.com\/(?:scene)(?:card)?\/(\d+)/, 'https://www.thinglink.com/card/$1'],
    [/www\.thinglink\.com\/(?:video|media)(?:card)?\/(\d+)/, 'https://www.thinglink.com/mediacard/$1'],
    [/www\.youtube\.com\/watch\?v=([\w-]+)/, 'https://www.youtube.com/embed/$1'],
    [/youtu.be\/([\w-]+)/, 'https://www.youtube.com/embed/$1'],
    [/vimeo\.com\/(\d+)/, 'https://player.vimeo.com/video/$1'],
    [/flipgrid\.com\/s\/(\w+)/, 'https://flipgrid.com/s/$1'],
    [/giphy\.com\/gifs\/.*-(\w+)/, 'https://giphy.com/embed/$1'],
]

function cleanUrl(url) {
    const match = /(?:(?:https?:)?\/\/)?(.*)/.exec(url)
    return match[1]
}

export function resolveTag(url) {
    const cleanedUrl = cleanUrl(url)
    for (const template of templates) {
        const match = template[0].exec(cleanedUrl)
        if (match !== null) {
            return template[1].replace(/\$(\d+)/g, (m, index) => match[index])
        }
    }
    return url
}