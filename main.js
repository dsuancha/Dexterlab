var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

function submitForm(event) {
  event.preventDefault(); // Prevent the form from submitting
  var Namesof = document.getElementById("Namesof").value;
  var Age = document.getElementById("Age").value;
  var Gender = document.getElementById("Gender").value;
  var Occupation = document.getElementById("Occupation").value;
  var Special_Ability = document.getElementById("Special_Ability").value;

  var raw = JSON.stringify({
    "Namesof": Namesof,
    "Age": Age,
    "Gender": Gender,
    "Occupation": Occupation,
    "Special_Ability": Special_Ability
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://10.90.81.69:5002/create", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

