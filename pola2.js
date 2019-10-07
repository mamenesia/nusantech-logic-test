const pola2 = S => {
	if (S % 2 === 0) {
		console.log('Input must be odd number ! (2n-1)')
		return
	}

	for (let row = 0; row < S; row++) {
		let line = ''
		for (let col = 0; col < S; col++) {
			if (row <= Math.floor(S / 2)) {
				if (row % 2 === 0) {
					if (col < S - row && col > row + 1) {
						line += '@'
					} else {
						line += col % 2 === 0 ? '@' : ' '
					}
				} else {
					if (col < S - row && col > row + 1) {
						line += ' '
					} else {
						line += col % 2 === 0 ? '@' : ' '
					}
				}
			} else {
				if (row % 2 === 0) {
					if (col <= row && col > S - row - 1) {
						line += '@'
					} else {
						line += col % 2 === 0 ? '@' : ' '
					}
				} else {
					if (col <= row && col >= S - row - 1) {
						line += ' '
					} else {
						line += col % 2 === 0 ? '@' : ' '
					}
				}
			}
		}
		console.log(line)
	}
}

pola2(15)
