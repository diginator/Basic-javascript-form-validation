const firstName = document.getElementById('fname').value;
const middleName = document.getElementById('mname').value;
const lastName = document.getElementById('lname').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const gender = document.getElementsByName("gender");
const vehicle = document.getElementsByName("vehicle");


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
       return true;
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
