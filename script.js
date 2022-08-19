document.body.style.margin = 0
document.body.style.overflow = 'hidden'

console.log (window)
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

noStroke();
}

function draw() {
    background(255,0,0);
	fill(255);
    ellipse(200,200,50,50); //made a circle

	fill(255,0,0);
	square(145,175,50);

	fill(255);
	rect(183,175,20,50);

	fill(255);
	rect(165,192,20,15); //made a square
	square(174,202,15); 
	square(174,182,15);

}