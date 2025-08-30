document.addEventListener('DOMContentLoaded', () => {
    const toggleDirectionButton = document.querySelector(".direction-toggle")
    const container = document.querySelector(".card-container")
    const changeTitleButton = document.querySelector(".change-title")
    const headerTitle = document.querySelector("h1")
    
    toggleDirectionButton.addEventListener('click', () => {
        container.classList.toggle('row')
        container.classList.toggle('column')
    })


    if (changeTitleButton) {
        changeTitleButton.addEventListener('click', () => {
            headerTitle.textContent = "HTML & CSS: Curso práctico avanzado"
        })
    }
})

