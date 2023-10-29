const tabLinks = document.querySelectorAll('.tab-links')
const tabContents = document.querySelectorAll('.tab-contents')
const icons = document.querySelectorAll('.services-list i')
const sideMenu = document.getElementById('sidemenu')
const backToTop = document.getElementById('backToTop')

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

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('fa-bounce')
        icon.classList.toggle('fa-shake')
    })
})

function closeMenu() {
    sideMenu.style.right = "-200px"
}
function openMenu() {
    sideMenu.style.right = "0"
}

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0
    })
})

window.addEventListener('scroll', () => {
    if(window.scrollY > 200) {
        backToTop.style.display = 'block'
    } else {
        backToTop.style.display = 'none'
    }
})

const msg = document.getElementById('msg')
const scriptURL = 'https://script.google.com/macros/s/AKfycbwemFeLLfSlTWwwsBU5PHGZ_oTRp0UUD09NhZoqdCEakSrmkqMskJFl_Ia3Iie5p9puVg/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = 'Message sent successfully!'
        setTimeout(function() {
            msg.innerHTML = ''
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })