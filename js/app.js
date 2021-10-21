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
