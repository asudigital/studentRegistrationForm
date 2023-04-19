const birthInput = document.getElementById('Birth');
        
birthInput.addEventListener('blur', function() {
  let enteredDate = birthInput.value;
  const regex = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
  const match = enteredDate.match(regex);
  console.log(match);

  if (!match) {
    alert('Invalid date format. Please enter a date in the format dd-mm-yyyy.');
    birthInput.value = '';
    return;
  }

  let day = parseInt(match[1]);
  let month = parseInt(match[2]);
  const year = parseInt(match[3]);

  // Add leading zeros to day and month if necessary
  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;

  const currentDate = new Date();
  const enteredDateObj = new Date(year, month - 1, day);

  if (enteredDateObj > currentDate) {
    alert('Please enter a date in the past.');
    birthInput.value = '';
    return;
  }

  enteredDate = `${day}-${month}-${year}`;
  birthInput.value = enteredDate;
});

// localStorage

var use1 = document.getElementById("name").value;
var use2 = document.getElementById("Birth").value;
var use3 = document.getElementById("mail").value;
var use4 = document.getElementById("father").value;
var use5 = document.getElementById("mother").value;
var use6 = document.getElementById("gender").value;
var use7 = document.getElementById("nationality").value;
var use8 = document.getElementById("address").value;
var use9 = document.getElementById("country").value;


var  nameLocal = localStorage.setItem("use1",use1);
var  birthLocal = localStorage.setItem("Birth",Birth);
var  mailLocal = localStorage.setItem("mail",mail);
var  fatherLocal = localStorage.setItem("father",father);
var  motherLocal = localStorage.setItem("mother",mother);
var  genderLocal = localStorage.setItem("gender",gender);
var  nationalityLocal = localStorage.setItem("nationality",nationality);
var  addressLocal = localStorage.setItem("address",address);
var  countryLocal = localStorage.setItem("country",country);


var button = document.getElementById("class6")
button.addEventListener("click",()=>{
  console.log("hii")
})