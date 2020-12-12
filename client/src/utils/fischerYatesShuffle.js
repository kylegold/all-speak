// #############:
// Fischer-Yates-Shuffle;
// #############:

// Array Shuffler
// - Utility*
const Shuffle = array => {
	// Variables - how many remaining shuffles; output to back of array; random index;
	let m = array.length,
		t,
		i;
	// While there remain elements to shuffle…
	while (m) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);
		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
	return array;
};
module.exports = Shuffle;
