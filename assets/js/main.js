//Automatic Slider

var slideIndex =1;

showImage(slideIndex);

function plusIndex(n){
	slideIndex = slideIndex + n;
	showImage(slideIndex);
}

function currentSlide(n){
	showImage(slideIndex = n);
}


function showImage(n){
	// var slide = document.getElementsByClassName("slide");
	var slide = $(".slide");
	var dots = document.getElementsByClassName("dots");

	if(n> slide.length){
		slideIndex=1
	}

	if(n<1){
		slideIndex = slide.length
	}

	for(var i= 0; i<slide.length; i++){
		slide[i].style.display = "none";
	};
	slide[slideIndex-1].style.display = "block";

	for(var i=0; i <dots.length; i++){
		dots[i].className = dots[i].className.replace(" active","");
	}

	dots[slideIndex-1].className += " active";
}



autoSlide();
function autoSlide(){
	var slide = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dots");
	for(var i= 0; i<slide.length; i++){
		slide[i].style.display = "none";
	};
	if(slideIndex> slide.length){slideIndex=1};
	slide[slideIndex-1].style.display = "block";
	slideIndex++;
	setTimeout(autoSlide,9000)
}



// Form Validation

var $formSubmit =$('#newsLetterSubmit');
var message1 = $('#nameCheck');
var message2 = $('#emailCheck');
function validateUsername(){
	var name = $('#name').val();
	if(name===''){
		message1.html('<p>Field must be filed!</p>');
	}else{
		message1.html('<p>Cool Name!</p>');
	}	
}


function validateEmail(){
	var email = $('#email').val();
	console.log(email)
	if(name===' '){
		message2.html('<p>Field must be entered!</p>');
	}else{
		message2.html('<p>Thank You!</p>');
	}
}

function validateForm(){
validateUsername();
validateEmail();
}

$formSubmit.on('submit',function(e){
	e.preventDefault();
	validateForm();
})



