
let url = 'https://api.unsplash.com/search/photos?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

async function  getData() {
const res = await fetch(url);
const data = await res.json();
for (let i=0; i < 11; i++){
show(data.results[i].urls.regular);
}
}

getData();

function show (dataImg) {
const img = document.createElement('img');
img.classList.add('gallery-img')
img.src = dataImg;
img.alt = `image`;
grid.append(img);
}

function fin(u){
   
    var element = document.getElementById("grid");
    while (element.firstChild) {
    element.removeChild(element.firstChild);}
  
    let url = 'https://api.unsplash.com/search/photos?query='+u+'&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    async function  getData() {
        const res = await fetch(url);
        const data = await res.json();
        for (let i=0; i < 11; i++){
        show(data.results[i].urls.regular);
        }
        }
        
        getData();
        
        function show (dataImg) {
        const img = document.createElement('img');
        img.classList.add('gallery-img')
        img.src = dataImg;
        img.alt = `image`;
        grid.append(img);
        }
}