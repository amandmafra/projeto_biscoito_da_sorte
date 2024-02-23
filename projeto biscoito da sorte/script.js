document.querySelector('.cookie-fortune').addEventListener('click', function() {
  document.querySelector('.screen1').classList.toggle('hide');
  document.querySelector('.screen2').classList.toggle('hide');
  
  const message = document.querySelector('.screen2 .ticket');
  message.classList.remove('messageZoomIn'); 
  setTimeout(() => message.classList.add('messageZoomIn'), 10);
});

function openAnotherCookie() {
  document.querySelector('.screen1').classList.toggle('hide');
  document.querySelector('.screen2').classList.toggle('hide');
  
  const message = document.querySelector('.screen2 .ticket');
  message.classList.remove('messageZoomIn');
}

document.querySelector('.open-another-cookie').addEventListener('click', openAnotherCookie);
