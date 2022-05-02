const url = 'https://api.unsplash.com/search/photos?query=spring&per_page=1&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
async function  getData() {
const res = await fetch(url);
const data = await res.json();
console.log( data.urls.regular);
}
getData();
/*const img = document.createElement('img');
img.classList.add('gallery-img')
img.src = `getData()`;
img.alt = `image`;
galleryContainer.append(img);*/