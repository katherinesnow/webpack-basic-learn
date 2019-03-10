export function isAndroid() {
    let __userAgent = navigator.userAgent
    return !!__userAgent.match(/Android/i)
}