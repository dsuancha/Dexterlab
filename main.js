var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

function submitForm(event) {
  event.preventDefault(); // Prevent the form from submitting

  var Name = document.getElementById("name").value;
  var Age = document.getElementById("age").value;
  var Gender = document.getElementById("gender").value;
  var Occupation = document.getElementById("occupation").value;
  var Special_Ability = document.getElementById("special_ability").value;
  var cedula = document.getElementById("cedula").value; // Corrected to retrieve the value

  var raw = JSON.stringify({
    "NameDexter": Name,
    "Age": Age,
    "Gender": Gender,
    "Occupation": Occupation,
    "Special": Special_Ability,
    "idDexter": cedula
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://10.90.100.40:3003/create", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
