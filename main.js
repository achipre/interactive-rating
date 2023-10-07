const button = document.querySelector('#submit')
const inputs = document.querySelectorAll('input')
const labels = document.querySelectorAll('label')
const first = document.querySelector('.stepOne')
const second = document.querySelector('.success')
const number = document.querySelector('#numberSelected')

let numberSelect
inputs.forEach(input => input.addEventListener('change', (e) => {
  numberSelect = e.target.id
  return numberSelect
}))
const selection = () => {
  if (numberSelect === undefined) return
  first.classList.add('hidden')
  second.classList.remove('hidden')
  console.log(numberSelect)
  console.log(number)
  number.textContent = numberSelect
}

button.addEventListener('click', selection)