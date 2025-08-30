document.addEventListener('DOMContentLoaded', () => {
    const toggleDirectionButton = document.querySelector(".direction-toggle")
    const container = document.querySelector(".card-container")
    
    toggleDirectionButton.addEventListener('click', () => {
        container.classList.toggle('row')
        container.classList.toggle('column')
    })

    const changeTitleButton = document.querySelector(".change-title")
    const headerTitle = document.querySelector("h1")

    if (changeTitleButton) {
        changeTitleButton.addEventListener('click', () => {
            headerTitle.textContent = "HTML & CSS: Curso práctico avanzado"
        })
    }

    const colorToggleButton = document.querySelector(".color-toggle")
    const cards = document.querySelectorAll(".card")

    if (colorToggleButton) {
        colorToggleButton.addEventListener('click', () => {
            cards.forEach(card => {
                card.classList.toggle('color-alt')
            })
        })
    }

    const showImageButton = document.querySelector(".show-image")
    const THE_GOAT = document.querySelector('footer img')

    if (showImageButton && THE_GOAT) {
        showImageButton.addEventListener('click', () => {
            THE_GOAT.classList.toggle('visible')
        })
    }
})

