const Img = document.getElementById('imgDog');
const btn = document.getElementById('clickImg');
const appendd = document.getElementById('imag')

function fetchDog(){
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data =>{
  Img.src = data.message;
  appendd.appendChild(Img)
})
.catch(error => console.error('Error:',error));
}
btn.addEventListener('click', fetchDog);
fetchDog();