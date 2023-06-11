export const FetchApi = async(url) => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        return data;
    } catch (error) {
        console.error(error)
    }
}