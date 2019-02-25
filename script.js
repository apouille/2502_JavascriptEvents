
//1) Fonctionnalité 1
 
// Step 1 :  Find and store the element we want to listen to events on.

let clickerFooter = document.getElementsByTagName("footer")[0];

// Step 2 :  Define the function that will respond to the event.
let i = 0
let onFooterClick =  function(){
	i = i+1;
	console.log( "Clic numéro" + i);

};

// Step 3 : Add the event listener for the element and function

clickerFooter.addEventListener("click", onFooterClick);

//2) Fonctionnalité 2

// Step 1 :  Find and store the element we want to listen to events on.
let navbarHeader = document.getElementById("navbarHeader");
let navbarToggler = document.getElementsByClassName("navbar-toggler")[0];
// console.log(document.getElementById("navbarHeader"));

// Step 2 :  Define the function that will respond to the event.

let onNavbarTogglerClick = function(){
	navbarHeader.classList.toggle("collapse");
}

// Step 3 : Add the event listener for the element and function

navbarToggler.addEventListener("click", onNavbarTogglerClick);


//3) Fonctionnalité 3


// Step 1 :  Find and store the element we want to listen to events on.

let firstCard = document.getElementsByClassName("card mb-4 box-shadow")[0];
console.log(document.getElementsByClassName("card mb-4 box-shadow")[0]);

let firstCardEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
console.log(document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]);

// Step 2 :  Define the function that will respond to the event.

let changeColor = function(){
	firstCardEdit.style.color = "red";
}

// Step 3 : Add the event listener for the element and function

firstCardEdit.addEventListener("click",changeColor);


//4) Fonctionnalité 4

// Step 1 :  Find and store the element we want to listen to events on.

let secondCard = document.querySelectorAll('.row .col-md-4')[1]
let secondCardEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
console.log(document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1]);

// Step 2 :  Define the function that will respond to the event.

// Step 3 : Add the event listener for the element and function

secondCardEdit.addEventListener("click", function(){
	secondCard.style.color == "green" ? secondCard.style.color = "black" : secondCard.style.color = "green";
	});


//5) Fonctionnalité 5

// Step 1 :  Find and store the element we want to listen to events on.

let navbar = document.getElementsByClassName("navbar")[0]

navbar.addEventListener("dblclick", function(){
	document.styleSheets[0].disabled == true ? document.styleSheets[0].disabled = false : document.styleSheets[0].disabled = true;
});	

// Step 2 :  Define the function that will respond to the event.


// Step 3 : Add the event listener for the element and function
