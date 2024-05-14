document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll("#link a").forEach(e=>{
        e.addEventListener("click", scrollNav);   
    })
    window.addEventListener('scroll', menuFijo);
    consultarProyectos();
})

function scrollNav(e) {
    const value = e.target.attributes.href.value;

    e.preventDefault();

    document.querySelector(value).scrollIntoView({
        behavior: "smooth"
    });
}

function menuFijo(){
    const menu = document.querySelector('#fixed');

    const observer = new IntersectionObserver(entries =>{
        if(entries[0].isIntersecting){
    menu.classList.remove('fixed');
            menu.classList.add('opacity');
        }else{
            menu.classList.add('fixed');
            menu.classList.remove('opacity');
        }
    });
    observer.observe(document.querySelector('#contacto'));
}

function consultarProyectos(){

    const url = "proyectos.json";

    fetch(url)
        .then(res => res.json())
        .then(proyectos => mostrarProyectos(proyectos))
        .catch(err => console.log(err))
}

function mostrarProyectos(proyectos){
    const len = proyectos.length;
    const contenedor = document.querySelector('.contenedor-proyectos');

    for(let i=0;i<len;i++){
        const {img, link, github} = proyectos[i];

        contenedor.innerHTML += `
            <div class="card">
                <img src="${img}" alt="proyecto ${i}">
                
                <div class="proyecto-icon">
                    <a href="${link}" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 15l6 -6" />
                            <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                            <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                        </svg>
                    </a>
                    <a href="${github}" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                    </a>
                </div>
            </div>
        `;
        
    }
    

}
