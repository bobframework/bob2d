export const images = [];

export const get_image = (id) => {
    return images.filter(img => img.id === id)[0].img;
}

export const load_image = (...arr) => {
    arr.forEach(({ id, src }) => {
        const img = new Image();
        img.src = src;
        images.push({ id, img });
    });
}