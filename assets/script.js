
// intercept clicks
;[...document.querySelectorAll('.wikibox a')].map($link => {
  $link.addEventListener('click', showNext)
})

// display next box
function showNext() {
  const $boxes = [...document.querySelectorAll('.wikibox')]
  const currIndex = $boxes.findIndex($box => $box.style.display === 'block')
  const nextIndex = currIndex === $boxes.length - 1 ? 0 : currIndex + 1

  const curr = $boxes[currIndex]
  const next = $boxes[nextIndex]

  curr.classList.add('fadeout')

  setTimeout(() => {
    next.style.display = 'block'
    next.addEventListener('animationend', onEnd)

    function onEnd() {
      curr.classList.remove('fadeout')
      curr.removeAttribute('style')
      next.removeEventListener('animationend')
    }
  }, 100)
}