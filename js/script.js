function home() {
	$("#index-banner").show();
	$("#video").show();
	$('#video-link').attr("src", "https://www.youtube.com/embed/5YNdH8opPi4");
	$('.button-collapse').sideNav('hide');
	$("#index-banner-text").text("Your choice for professional Window Tinting for Automotive, Residential and Commercial needs.");
	$("#cards").show();
	$('#index-banner-image').attr("src", "images/Automotive.jpg");
	$("#auto-cards").hide();
	$("#residential-info").hide();
	$("#intro").hide();
	$("#auto-intro").hide();
	$("#commercial-info").hide();
	$("#middle-banner-text").text("Increase your homes aesthetics and comfort.");
	$('#middle-banner-image').attr("src", "images/house2.jpg");
	$('#call').text("Call us today about your window tinting needs. We can reduce the wear and tear on your heating and cooling system, and save on the utility bills! Cut the heat and glare while looking good at the same time.Trouble seeing the computer or TV screen? Our residential film is just what you need. Give us a call and we can work out all of the details.")
}


function automotive() {
	$('.button-collapse').sideNav('hide');
	$("#video").hide();
	$("#index-banner-text").text("Automotive Window Tinting");
	$('#index-banner-image').attr("src", "images/jeep-banner.jpg");
	$("#cards").hide();
	$("#residential-info").hide();
	$("#commercial-info").hide();
	$("#auto-cards").show();
	$("#middle-banner-text").text("Seamless Installation");
	$('#middle-banner-image').attr("src", "images/trucks.jpg");
	$("#intro").show();
	$('#call').text("At A Cut Above Window Tinting we make every effort install all film in solid, one-piece units. We take the time to mold the film into large, curved windows, creating a consistent and uniform appearance. Many installers may go with the faster 'seamed' installation techniques, creating thick lines across the window where the pieces of film were over-lapped or spots of light when the seams are attempted to be connected.  You will see and enjoy the more advanced techniques each time you view your vehicle and look out the rear view mirror.")
	$(".auto-intro").text("There are several reasons to tint your car windows from protecting again UV rays, increased safety and privacy to preserving your investment on your vehicle. Here are the top reasons to apply professionally installed window tinting on your vehicle today.");
	$('#video-link').attr("src", "https://www.youtube.com/embed/5YNdH8opPi4");
}

function residential() {
	$('.button-collapse').sideNav('hide');
	$("#video").show();
	$('#video-link').attr("src", "https://www.youtube.com/embed/5YNdH8opPi4?autoplay=1");
	$("#index-banner-text").text("Residential Window Tinting");
	$('#index-banner-image').attr("src", "images/room.jpg");
	$("#cards").hide();
	$("#auto-cards").hide();
	$("#residential-info").show();
	$("#commercial-info").hide();
	$("#middle-banner-text").text("Increase your homes aesthetics and comfort.");
	$('#middle-banner-image').attr("src", "images/house2.jpg");
	$("#intro").hide();
	$('#call').text("")
}

function commercial() {
	$('.button-collapse').sideNav('hide');
	$("#video").hide();
	$("#index-banner-text").text("Commercial Window Tinting");
	$('#index-banner-image').attr("src", "images/commercial4.jpg");
	$("#cards").hide();
	$("#auto-cards").hide();
	$("#residential-info").hide();
	$("#middle-banner-text").text("");
	$('#middle-banner-image').attr("src", "images/commercial5.jpg");
	$("#intro").show();
	$("#commercial-info").show();
	$(".auto-intro").text("Window film is a thin, multi-layered piece of optically clear film that is retrofitted to the inside surface of glass - sputter-coated with durable, exotic metals such as titanium, stainless steel, copper, gold, silver, nickel, chromium, aluminum and other alloys. The varying combinations of metals is what gives its exceptional performance capabilities and color.");
	$(".auto-intro").append("<br><br>")
	$(".auto-intro").append("Rest assured, window tints are protected with a scratch resistant coating, inspected using state-of-the-art equipment and put through some of the most stringent endurance tests - leaving you with the highest quality window film for your home or building. Have confidence knowing you selected a product that will endure the elements and perform to your satisfaction!")
	$('#video-link').attr("src", "https://www.youtube.com/embed/5YNdH8opPi4");
	$('#call').text("")
}

function contact() {
	$('.button-collapse').sideNav('hide');
}

$(function() {
	$('.car-card').matchHeight();
});

$(function() {
	$('.car-card2').matchHeight();
});

$(function() {
	$('.home-card').matchHeight();
});
