const btn = document.querySelector('.button')
const clockEl = document.querySelector('.clock')
const hourEl = document.querySelector('.hour')
const minEl = document.querySelector('.min')
const secEl = document.querySelector('.sec')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')

btn.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    btn.innerHTML = 'Dark mode'
  } else {
    html.classList.add('dark')
    btn.innerHTML = 'Light mode'
  }
})

const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

const months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep','Oct','Nov', 'Dec']

function setTime() {
  const time = new Date()
  const date = time.getDate()
  const month = time.getMonth()
  const day = time.getDay()
  const hours = time.getHours()
  const minute = time.getMinutes()
  const seconds = time.getSeconds()
  const hours12 = hours % 12
  const ampm = hours >= 12 ? 'PM' :'AM'

  hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hours12, 0, 11, 0, 360)}deg)`

  minEl.style.transform = `translate(-50%,-100%) rotate(${scale(minute,0, 59, 0, 360)}deg)`

  secEl.style.transform = `translate(-50%,-100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

  timeEl.innerHTML=`${hours12}:${minute < 10 ? `0${minute}` : minute} ${ampm}`
  dateEl.innerHTML=`${days[day]} ,${months[month]} ${date}`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()
setInterval(setTime, 1000)
