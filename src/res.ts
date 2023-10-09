export const images: {
    id: string;
    img: HTMLImageElement;
}[] = [];

export const get_image = (id: string) => {
    return images.filter(img => img.id === id)[0].img;
}

export const load_image = (...arr: {
    id: string;
    src: string;
}[]) => {
    arr.forEach(({ id, src }) => {
        const img = new Image();
        img.src = src;
        images.push({ id, img });
    });
}