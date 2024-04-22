document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll("#link a").forEach(e=>{
        e.addEventListener("click", scrollNav)   
    })
    

    window.addEventListener('scroll', menuFijo)
})

function scrollNav(e) {
    const value = e.target.attributes.href.value;

    e.preventDefault();

    document.querySelector(value).scrollIntoView({
        behavior: "smooth"
    })
}

function menuFijo(){
    const menu = document.querySelector('#fixed');

    const observer = new IntersectionObserver(entries =>{
        if(entries[0].isIntersecting){
            console.log('Ya es visible');
            menu.classList.remove('fixed');
            menu.classList.add('opacity');
        }else{
            menu.classList.add('fixed');
            menu.classList.remove('opacity');
        }
    });
    observer.observe(document.querySelector('#contacto'));
}

