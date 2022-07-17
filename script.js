const text = document.querySelector('.text-area')
const button = document.querySelector('.count-button')
const textCounter = document.querySelector('.counter')

button.addEventListener('click', (e) =>{
    e.preventDefault()

    const textContent = text.value
    let i = 0
    let counter = 0;

    while(i < textContent.length){
        if(textContent[i] == ' '){
            counter++;
        }   
        i++;     
    }

    textCounter.innerHTML = `${counter+1} Palavra(s)`
})