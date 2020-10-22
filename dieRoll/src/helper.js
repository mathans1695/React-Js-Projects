function randomNum(min, max) {
	return Math.floor(Math.random() * (max-min)) + min;
}

export { randomNum };