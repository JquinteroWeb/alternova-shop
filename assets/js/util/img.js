const getImages = async (num = 1) => {
    
    const arrayImageUrl = [];
    const fakeImage = await fetch('https://fakestoreapi.com/products?limit=' + num);   
    
    const  images  = await fakeImage.json();
    Object.values(images).forEach(({image}) => {
        arrayImageUrl.push(image);
    });

    return arrayImageUrl;  
}

export {
    getImages
}