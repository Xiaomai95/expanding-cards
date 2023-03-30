
// querySelector allows us to select anything in our document e.g. h1, p, class etc. 
// querySelectorAll selects all of what we put in brackets, in this case all the .gallery__image classes

const gallery__images = document.querySelectorAll('.gallery__image')
        
gallery__images.forEach((gallery__image) => {
    gallery__image.addEventListener('click', () => {
        removeActiveClasses()
        gallery__image.classList.add('active')
    })
})

function removeActiveClasses() {
    gallery__images.forEach((gallery__image) => {
        gallery__image.classList.remove('active')
    })
}

