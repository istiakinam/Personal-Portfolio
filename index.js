const tabLinks = document.querySelectorAll('.tab-links')
const tabContents = document.querySelectorAll('.tab-contents')

tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        tabLinks.forEach(tabLink => tabLink.classList.remove('active-link'))
        link.classList.add('active-link')

        const id = link.id

        tabContents.forEach(content => content.classList.remove('active-tab'))
        
        tabContents.forEach(content => {
            if(content.id == id){
                content.classList.add('active-tab')
            }
        })
    })
});