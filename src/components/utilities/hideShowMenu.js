export default function hideShowMenu(header) {

    const handleChange = (header) => {
        header.classList.toggle('unchecked')
        header.classList.toggle('checked')
    }
    return { handleChange }
}