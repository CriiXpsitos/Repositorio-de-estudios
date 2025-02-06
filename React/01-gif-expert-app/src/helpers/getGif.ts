export interface Gif {
    id: string;
    title: string;
    url: string;
}


export const getGifs = async (category: string): Promise<Gif[]> => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=QpUYVD8srznlQNp8cecSE9Gl2zeq335V&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs: Gif[] = data.map((img: any) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
};
