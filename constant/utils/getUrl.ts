

const currentUrl = () => {
    if (typeof window !== "undefined") {
        let { href } = window.location || self.location || location
        return href
    }
}


export default currentUrl