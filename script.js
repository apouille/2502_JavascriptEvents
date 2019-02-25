
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

let navbarHeader = document.getElementById("navbarHeader");
let navbarToggler = document.getElementsByClassName("navbar-toggler")[0];
// console.log(document.getElementById("navbarHeader"));

let onNavbarTogglerClick = function(){
	navbarHeader.classList.toggle("collapse");
}

navbarToggler.addEventListener("click", onNavbarTogglerClick);

//3) Fonctionnalité 3


let firstCardText = document.querySelector(".card-text");
let firstCardEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
// console.log(document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]);


let changeColor = function(){
	firstCardText.style.color = "red";
}

firstCardEdit.addEventListener("click",changeColor);


//4) Fonctionnalité 4


let secondCardEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
let secondCardText = document.querySelectorAll(".card-text")[1]
let colorStatus = false; // déclaration couleur de départ

// console.log(document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1]);

function changeColor2(){
	if (colorStatus === false){ // si on est sur la couleur de départ, on change en vert 
		secondCardText.style.color = "green";
		colorStatus = true; 
	}
	else { // si la couleur est verte, revenir sur la couleur de départ
		secondCardText.style.color = ""; 
		colorStatus = false; 
	}
}

secondCardEdit.addEventListener("click", changeColor2);


//5) Fonctionnalité 5


let navbar = document.getElementsByClassName("navbar")[0];
let bootstrap = document.getElementsByTagName("link")[0];
let bootstrapStatus = false; // déclaration bootstrap de départ

function removeStyle(){
	if (bootstrapStatus === false){ // s'il y a du bootstrap, alors enlever le CDN 
		bootstrap.href = "";
		bootstrapStatus = true;
	}
	else { // s'il n'y a pas de bootstrap, alors remettre le lien CDN
		bootstrap.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
		bootstrapStatus = false;
	}
}

navbar.addEventListener("dblclick", removeStyle);




