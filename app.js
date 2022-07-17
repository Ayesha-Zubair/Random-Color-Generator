const btn=document.querySelector('button');
const h1=document.querySelector('h1');
btn.addEventListener('click', function() {
    const newColor = randomColors()
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const randomColors = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    if(r<100 && g<100 && b<100){
        h1.style.color = white;
    }
    return `rgb(${r},${g},${b})`;
}
