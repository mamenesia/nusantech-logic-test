const pola4 = S => {
	if (S % 2 === 0) {
		console.log('Input must be odd number ! (4n-1)')
		return
	}

	for (let row = 0; row < S; row++) {
		let line = ''
		for (let col = 0; col < S; col++) {
			if (col % 4 === 0 && row === 1 && col !== 0 && col !== S - 1) {
				line += ' '
			} else if (row % 4 === 0) {
				if (col <= S - 3 && col >= S - row) {
					line += '@'
				} else {
					line += col % 2 === 0 ? '@' : ' '
				}
			} else if (row % 2 === 0 && row % 4 !== 0) {
				if (col < S && col >= S - row) {
					line += '@'
				} else {
					line += col % 2 === 0 ? '@' : ' '
				}
			} else {
				if (col <= S - 3 && col >= S - row) {
					line += ' '
				} else {
					line += col % 2 === 0 ? '@' : ' '
				}
			}
		}
		console.log(line)
	}
}

pola4(15)
