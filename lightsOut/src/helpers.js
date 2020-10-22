function randomArr(num, numSquare) {
	let set = new Set();
	for(let i=0; num > set.size; i++) {
		set.add(Math.floor(Math.random() * numSquare));
	}
	
	return set;
}

export { randomArr };