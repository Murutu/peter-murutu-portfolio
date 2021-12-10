function onClickHandler() {
  for (let link of document.querySelectorAll('nav li a')) {
    link.addEventListener('click', function (event) {
      document
        .querySelectorAll('nav li a ')
        .forEach(
          (el) =>
            (document.querySelector(
              `.${el.getAttribute('href').substring(1)}`,
            ).style.display = 'none'),
        )

      // get the link that was clicked and add the active class
      document.querySelector(
        `.${event.currentTarget.getAttribute('href').substring(1)}`,
      ).style.display = 'flex'

      // remove active class
      document
        .querySelectorAll('nav li a')
        .forEach((el) => el.classList.remove('active'))

      // add the active
      link.classList.add('active')
    })
  }
}
onClickHandler()

// forms spree
var form = document.getElementById('my-form')

async function handleSubmit(event) {
  event.preventDefault()
  var status = document.getElementById('my-form-status')
  var data = new FormData(event.target)
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      status.innerHTML = 'Thanks for your submission!'
      form.reset()
    })
    .catch((error) => {
      status.innerHTML = 'Oops! There was a problem submitting your form'
    })
}
form.addEventListener('submit', handleSubmit)
