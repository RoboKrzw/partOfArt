let left = document.getElementById('leftlion');
let right = document.getElementById('rightlion');
let span = document.getElementById('spanlion');

window.addEventListener('scroll', function(){
    let scroll = window.pageYOffset;
    
    let speed = left.dataset.speed;
    let scale = span.dataset.scale;
    let speed1 = span.dataset.speed1;
    left.style.transform = `translateY(${scroll * speed}px)`;
    right.style.transform = `translateY(${scroll * speed}px)`;
    // span.style.transform = `scale(${scroll * scale +1}, ${scroll * scale +1})`;
    // span.style.transform += `translateY(${scroll * speed1}px)`;


    console.log(scroll);

    // let value = window.scrollY;

    // left.style.top = value * 0,5 + 'px';
})