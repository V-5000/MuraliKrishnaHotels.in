var myImage = document.getElementById('mainImg_id');
var imageArray = ["resorces/blue_bathroom.jpeg","resorces/blue_hall.jpeg","resorces/blue_bedroom.jpeg"];
var imageIndex = 0;

function scrool() {
	document.getElementById("mainImg_id").setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex > imageArray.length-1) {
		imageIndex = 0
	}
}
