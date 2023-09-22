function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);

    if(elements.length > instance){
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const btnContact = document.getElementById("btn");

link1.addEventListener('click', () => {
    scrollToElement('.container',1);
});

link2.addEventListener('click', () => {
    scrollToElement('.container', 2);
});

link3.addEventListener('click', () => {
    scrollToElement('.container', 3);
});

link4.addEventListener('click', () => {
    scrollToElement('body');
});

btnContact.addEventListener('click', () => {
    scrollToElement('.container', 4);
});

const sr = ScrollReveal ({
    distance: '25px',
    duration: 1800,
    reset: true
})

sr.reveal('.container',{delay:190, origin:'bottom'})