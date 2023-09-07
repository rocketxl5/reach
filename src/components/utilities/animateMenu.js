export default function animateMenu(e) {

    const checked = e.target.checked
    const span = document.querySelector('.mobile-nav-label')

    if (checked) {
        span.classList.add('crios')
    }

    if (!checked) {
        span.classList.remove('crios')
    }
}