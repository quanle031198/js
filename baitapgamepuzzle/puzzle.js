let Img = {
    imgData:[
        ["funny-cat1_part1x1.jpg", 
	"funny-cat1_part2x1.jpg", 
	"funny-cat1_part3x1.jpg", 
	"funny-cat1_part4x1.jpg", 
	"funny-cat1_part5x1.jpg"],
	["monkey_part1x1.jpg",
	"monkey_part2x1.jpg",
	"monkey_part3x1.jpg",
	"monkey_part4x1.jpg",
	"monkey_part5x1.jpg"],
	["panda_swap_part1x1.jpg",
	"panda_swap_part2x1.jpg",
	"panda_swap_part3x1.jpg",
	"panda_swap_part4x1.jpg",
	"panda_swap_part5x1.jpg"]
	],
    imgPos:[0,0,0,0,0]
}


function placeImage(imgpos1, imgToggle) {
	Images.imgPos[imgpos1 - 1] = imgToggle;        // Set image pointer in Object array
	var imageName = "#img" + imgpos1.toString();   // create JQUERY handler
	$(imageName).attr("src", "./img/" + Images.imgsDB[imgToggle][imgpos1 - 1]);
    
    console.log(imageName)
}
