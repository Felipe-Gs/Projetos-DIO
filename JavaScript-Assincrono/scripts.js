const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

//aero function
const getCats = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
    
        return json.webpurl;
    }
    catch(e){
        console.log(e.message);
    }
};

const loadImg = async () =>{
    catImg.src = await getCats();
}

//função clicar
catBtn.addEventListener('click', loadImg);

//começar ja com uma imagem carregada
loadImg();