class Pieces {
	constructor(location, color, piece) {
		this.location = location;
		this.color = color;
		this.piece = piece;
	}
	
	move() {
		// MOVE FUNCTION
	}
}

class Pawn extends Pieces {
	constructor(location, color) {
		super(location, color, color+"P");
	}
}

class Rook extends Pieces {
	constructor(location, color) {
		super(location, color, color+"R");
	}
}

class Knight extends Pieces {
	constructor(location, color) {
		super(location, color, color+"N");
	}
}

class Bishop extends Pieces {
	constructor(location, color) {
		super(location, color, color+"B");
	}
}

class Queen extends Pieces {
	constructor(location, color) {
		super(location, color, color+"Q");
	}
}

class King extends Pieces {
	constructor(location, color) {
		super(location, color, color+"K");
	}
}

class Main {
	constructor() {	
		this.board = [];
	}
	
	setBoard() {
		let colorSwitch = {color: "w", pawnY: 2, y: 1};
		for (let count = 0; count < 2; count++) {
			for (let i = 1; i <= 8; i++) {
				this.board.push(new Pawn({x: i, y: colorSwitch.pawnY}, colorSwitch.color));
			}
			this.board.push(new Rook({x: 1, y: colorSwitch.y}, colorSwitch.color));
			this.board.push(new Knight({x: 2, y: colorSwitch.y}, colorSwitch.color));
			this.board.push(new Bishop({x: 3, y: colorSwitch.y}, colorSwitch.color));
			this.board.push(new King({x: 4, y: colorSwitch.y}, colorSwitch.color));
			this.board.push(new Queen({x: 5, y: colorSwitch.y}, colorSwitch.color));
			this.board.push(new Bishop({x: 6, y: colorSwitch.y}, colorSwitch.color));
			this.board.push(new Knight({x: 7, y: colorSwitch.y}, colorSwitch.color));
			this.board.push(new Rook({x: 8, y: colorSwitch.y}, colorSwitch.color));
			
			colorSwitch = {color: "b", pawnY: 7, y: 8};
		}
	}
	
	displayBoard() {
		let boardResult = "";
		for (let y = 8; y >= 1; y--) {
			for (let x = 1; x <= 8; x++) {
				let currentPiece = this.board.filter(piece => piece.location.x === x && piece.location.y === y)[0]
				if (currentPiece) {
					boardResult += currentPiece.piece + ', ';
				} else boardResult += 'xx, ';
			}
			boardResult += "\n";
		}
		console.log(boardResult);
	}
}

const Game = new Main();
Game.setBoard();
Game.displayBoard();
