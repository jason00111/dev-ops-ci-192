const saveButton = document.getElementsByClassName('save-button')[0]
const textArea = document.getElementsByClassName('text-area')[0]

saveButton.addEventListener('click', sendText)


function sendText () {
  const request = new XMLHttpRequest()
  request.addEventListener('load', data => {
    console.log('recieved data', data)
    console.log('data.responseText:', data.responseText)
    console.log('this.responseText:', this.responseText)
  })
  request.open('POST', '/save')
  request.send(textArea.value)
}
