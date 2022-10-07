export const randomRGBA = () => {
    const round = Math.round, random = Math.random, s = 255
    return `rgba(${round(random() * s)}, ${round(random() * s)}, ${round(random() * s)}, 0.4)`
}