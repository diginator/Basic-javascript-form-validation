
const submit = document.getElementById("submit");
//submit.disabled = true;
const firstName = document.getElementById('fname');
const middleName = document.getElementById('mname').value;
const lastName = document.getElementById('lname');
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const gender = document.getElementsByName("gender");
const vehicle = document.getElementsByName("vehicle");
const form = document.getElementById("form");
const emptySpan = document.getElementsByClassName('empty-msg')[0];
const errorSpan = document.getElementsByClassName('error-msg')[0];

function validation() {
    if (firstName == "" || middleName == "" || lastName ==""  || !firstName.match(/[a-zA-Z]/) || !middleName.match(/[a-zA-Z]/) || !lastName.match(/[a-zA-Z]/))
    {
       alert("Please fill a valid name")
       return false;
    }
            
    if (phone == "" || isNaN(phone))
    { 
        alert("Enter a valid phone number")
        return false;
    }
    else if (!(gender[0].checked || gender[1].checked)) {
        alert("Gender value must checked")
        return false;
    }  
    else if (!(vehicle[0].checked || vehicle[1].checked || vehicle[2].checked)) {
        alert("Please select atleast one vehicle option")
        return false;
    }  
    else { 
       alert("Proceed");
       submit.disabled = false;
       return true;
    };
        
};

function validateFirstName() {
    if (firstName.value == "") {
        firstName.classList.add("input-error");
        emptySpan.classList.remove("display-none");
    }
    else if (!firstName.value.match(/[a-zA-Z]/)) {
        firstName.classList.add("input-error");
        errorSpan.classList.remove("display-none");
    }
    else {
        firstName.classList.add("input-valid");
        errorSpan.classList.add("display-none");
    }
};

function validateLastName() {
    if (lastName.value == "") {
        lastName.classList.add("input-error");
        emptySpan.classList.remove("display-none");
    }
    else if (!lastName.value.match(/[a-zA-Z]/)) {
        lastName.classList.add("input-error");
        errorSpan.classList.remove("display-none");
    }
    else {
        last.classList.add("input-valid");
        errorSpan.classList.add("display-none");
    };
};


    var select = document.getElementById("states");
    var state = ["Himachal", "Punjab", "Haryana"];
    var options = "";
   
    for(let i = 0; i<state.length; i++) {
        options += "<option value="+state[i]+">" + state[i] + "</option>";
    };

    select.innerHTML = options; 

function newFunction() {
    return '#form input';
}

function myCity() {
    var selectedState = document.getElementById("states").value;
    var selectedCity = document.getElementById("cities");
    

    if (selectedState=="Himachal"){
        var citi = ["Shimla", "Solan", "Kasauli"]
    }
    else if (selectedState=="Punjab"){
        var citi = ["Patiala", "Ludhiana", "Mohali"]
    }
    else if (selectedState=="Haryana"){
        var citi = ["Gurugram", "Karnal", "Panchkula"]
    }
    else {}

    var options = "";
    for(let i = 0; i<citi.length; i++) {
    options += "<option>" + citi[i] + "</option>";
    };

    selectedCity.innerHTML = options;
}



function date() {
    var display = document.getElementById("joining").value;
    document.getElementById("displayDate").innerHTML = display;
  }



//Get modal element
var modal = document.getElementById("simpleModal");
var closeBtn = document.getElementsByClassName("closeBtn")[0];

//modalBtn.addEventListener('click', openModal);
window.addEventListener('click', outsideClose);

// function openModal(){
//     modal.style.display = "block";
//     setTimeout(function(){
//         modal.style.display = "none";
//         }, 5000);
// }

function closeModal(){
        modal.style.display = "none";
}

function outsideClose(e) {
    if(e.target == modal){    
        modal.style.display = "none";
    }
}

function submitForm() {
    if (!validation()){
        return false;
    }
    else{
    openModal();
    };

};


function checkForm() {
    if (validation()) {
        submit.disabled = false;
    } 
}


// const inputs = document.querySelectorAll('input');    
// const allInputs = {};
    
//     for (var i = 0; i < inputs.length; i++) {
//       allInputs = inputs[i].value;
//     };
//     console.log(allInputs);


// const isRequired = value;
//     if(value === ''){
//     return false;
//     }
//     else {
//     return true;
//     };

