const pola1 = S => {
	if (S % 2 === 0) {
		console.log('Input must be odd number ! (4n-1)')
		return
	}
	for (let row = 0; row < S; row++) {
		let line = ''
		for (let col = 0; col < S; col++) {
			if (col === 0 || col === S - 1) {
				line += '@'
			} else if (row === 1 || row % 2 === 1) {
				line += ' '
			} else if ((row === 0 || row % 4 === 0) && col === 1) {
				line += ' '
			} else if (row % 2 === 0 && row % 4 !== 0 && col === S - 2) {
				line += ' '
			} else {
				line += '@'
			}
		}
		console.log(line)
	}
}

pola1(13)
