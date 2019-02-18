import smoothscroll from 'smoothscroll-polyfill';

const scrollTo = event => {
  const [ , selector ] = event.target.href.split('#')
  if (!selector) return

  const el = document.getElementById(selector)
  if (!el) return

  event.preventDefault()
  el.scrollTo({ behavior: 'smooth' })
}

const setSmoothScrolls = (selector = '.smooth-scroll') => {
  if (!document.querySelectorAll) return
  for (const link of document.querySelectorAll(selector)) link.addEventListener('click', scrollTo)
}

const init = () => {
  smoothscroll.polyfill()
  setSmoothScrolls()
}

init()
