var form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit)

async function handleSubmit(event) {
  event.preventDefault();

  var status = document.querySelector(".yes");
  var statusMessage = document.getElementById("my-form-status-message");
  let allInputsFilled = true;
  var data = new FormData(event.target);

  var inputs = document.querySelectorAll('.custom-input');
  inputs.forEach(input =>{
    var inputElement = input.querySelector('.input');
    if(inputElement && inputElement.value.trim() === ''){
      allInputsFilled = false;
      input.querySelector('.icon-error').style.display = 'block';
      input.querySelector('.alert-error').style.display = 'block';
    } else {
      input.querySelector('.icon-error').style.display = 'none';
      input.querySelector('.alert-error').style.display = 'none';
    }
  });

  if(allInputsFilled){
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json'}
  }).then(response => {
    if (response.ok){
      status.style.display = 'block';
      statusMessage.innerHTML = "Mensagem recebida com sucesso!";
      form.reset();
      hideStatusMessage();
    } else {
      status.innerHTML = "Oops! There was a problem submitting your form";
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form";	
  });
  }else{
    status.innerHTML = "Preencha os campos em branco por favor";
  }



function hideStatusMessage() {
  setTimeout(function () {
      status.style.display = 'none';
      statusMessage.style.display = 'none';
  }, 4000);
}

}
