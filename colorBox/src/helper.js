function randomNum() {
	return Math.floor(Math.random() * 256);
}

function randomColor() {
	return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
}


export { randomColor };