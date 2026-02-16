// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        target.scrollIntoView({ behavior: 'smooth' })
    })
})

// Fade in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        }
    })
}, { threshold: 0.1 })

document.querySelectorAll('section').forEach(section => {
    observer.observe(section)
})

// Project filter
const filterBtns = document.querySelectorAll('.filter-btn')
const projectCards = document.querySelectorAll('.project-card')

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active from all buttons
        filterBtns.forEach(b => b.classList.remove('active'))
        // Add active to clicked button
        this.classList.add('active')

        const filter = this.getAttribute('data-filter')

        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block'
            } else {
                card.style.display = 'none'
            }
        })
    })
})