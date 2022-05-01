(function() {
  function findSubmit() {
    return document.querySelector('.js-submit')
  }

  function showAlert() {
    alert('You clicked the submit button!')
  }

  function showAlertOnClick() {
    var button = findSubmit()
    button.addEventListener('click', showAlert)
  }
  
  showAlertOnClick()
})()