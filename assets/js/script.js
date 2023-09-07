jQuery.noConflict();
jQuery(document).ready(function($){
								
							
function lightboxPhoto() {
	
	jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
			animationSpeed:'fast',
			slideshow:5000,
			theme:'light_rounded',
			show_title:false,
			overlay_gallery: false
		});
	
	}
	
		if(jQuery().prettyPhoto) {
	
		lightboxPhoto(); 
			
	}
	
	
if (jQuery().quicksand) {

 	// Clone applications to get a second collection
	var $data = $(".portfolio-area").clone();
	
	//NOTE: Only filter on the main portfolio page, not on the subcategory pages
	$('.portfolio-categ li').click(function(e) {
		$(".filter li").removeClass("active");	
		// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
		
		if (filterClass == 'all') {
			var $filteredData = $data.find('.portfolio-item2');
		} else {
			var $filteredData = $data.find('.portfolio-item2[data-type=' + filterClass + ']');
		}
		$(".portfolio-area").quicksand($filteredData, {
			duration: 600,
			adjustHeight: 'auto'
		}, function () {

				lightboxPhoto();
						});		
		$(this).addClass("active"); 			
		return false;
	});
	
}//if quicksand

});

//------------------------------------FORM------VALIDATION-----------------------------
function validateName(){
    var Name=document.getElementById("name").value
    var error=document.getElementById("error-name")
    if(Name.length<3)
    {
     error.innerHTML="Enter minimum 3 characters"
     error.style.color="red";
     return false;
    }
     else
     {
        error.innerHTML="Valid"
        error.style.color="green"
        return true;
    }
}
function validateEmail(){
    var Email=document.getElementById("email").value
    var error=document.getElementById("error-email")
    var emailstatus=/^[a-zA-Z0-9._%+-]+@gmail\.com$/
    if(Email.length<12)
    {
     error.innerHTML="Invalid Email"
     error.style.color="red";
     return false;
    }
     else if(Email.match(emailstatus))
     {
        error.innerHTML="Valid email"
        error.style.color="green"
        return true;
    }else
    {
        error.innerHTML="Invalid email"
        error.style.color="red"
        return false;
    }
}
function validateNumber(){
    var Number=document.getElementById("number").value
    var error=document.getElementById("error-num")
    var numberstatus=/^[0-9]{10}$/
    if(Number.length<10 || Number.length>10)
    {
     error.innerHTML="Invalid Number"
     error.style.color="red";
     return false;
    }
     else if(Number.match(numberstatus))
     {
        error.innerHTML="Valid email"
        error.style.color="green"
        return true;
    }
}
function submitform(){
	var Message=document.getElementById("message").value
	var Number=document.getElementById("number").value
	var numberstatus=/^[0-9]{10}$/
	var Email=document.getElementById("email").value
	var emailstatus=/^[a-zA-Z0-9._%+-]+@gmail\.com$/
	var Name=document.getElementById("name").value
	if(Number.match(numberstatus) && Email.match(emailstatus) && Name.length>=3 && Message.length>1)
	{
		alert("chill")
        //  $("#sent-message").show()
		 // $("#message" && "#number" && "#email" && "#name").clear()
		 
	}

}

