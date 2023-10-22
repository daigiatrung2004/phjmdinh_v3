// check object is empty
function isObjEmpty(obj) {
	return Object.keys(obj).length === 0 && obj.constructor === Object;
}

// sort array have item is object
function sortObj(propObjCP) {
	function swap(arr, index1, index2) {
		var tmp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = tmp;
	}

	function partition(arr, left, right, privot) {
		var leftPointer = left - 1;
		var rightPointer = right;

		while (true) {
			while (arr[++leftPointer][propObjCP] < privot) {
				// nothing
			}

			while (rightPointer > 0 && arr[--rightPointer][propObjCP] > privot) {
				// nothing
			}

			if (leftPointer >= rightPointer) {
				break;
			} else {
				swap(arr, leftPointer, rightPointer);
			}
		}

		swap(arr, leftPointer, right);
		return leftPointer;
	}

	function quickSort(arr, left, right) {
		if (left >= right) {
			return;
		} else {
			let privot = arr[right][propObjCP];
			let pointerPartition = partition(arr, left, right, privot);
			quickSort(arr, left, pointerPartition - 1);
			quickSort(arr, pointerPartition + 1, right);
			return arr;
		}
	}

	return quickSort(this, 0, this.length - 1);
}

export function isNum(data) {
	return typeof data === 'number' || !Number.isNaN(parseInt(data));
}

function repeat(str, repeatChar, length) {
	let lengthRepeat = length - str.length < 0 ? 0 : length - str.length;
	return str + repeatChar.repeat(lengthRepeat);
}

export function convertHEXToRGB(str) {
	if (!str || str[0] !== '#') {
		throw new Error('format HEX not correct');
	}

	str = str.replace('#', '');

	if (str.length < 8) {
		str = repeat(str, 'f', 8);
	}

	const comma = ',';

	let DecCd = {
		0: 0,
		1: 1,
		2: 2,
		3: 3,
		4: 4,
		5: 5,
		6: 6,
		7: 7,
		8: 8,
		9: 9,
		a: 10,
		b: 11,
		c: 12,
		d: 13,
		e: 14,
		f: 15,
	};

	let opacity = DecCd[str[7]] * 1 + DecCd[str[6]] * 16;
	let blue = DecCd[str[5]] * 1 + DecCd[str[4]] * 16;
	let green = DecCd[str[3]] * 1 + DecCd[str[2]] * 16;
	let red = DecCd[str[1]] * 1 + DecCd[str[0]] * 16;
	return 'rgba(' + red + comma + green + comma + blue + comma + (opacity / 255).toFixed(2) + ')';
}

function processConvertDecToHex(num) {
	let arr = [];
	let hexCd = {
		0: '0',
		1: '1',
		2: '2',
		3: '3',
		4: '4',
		5: '5',
		6: '6',
		7: '7',
		8: '8',
		9: '9',
		10: 'a',
		11: 'b',
		12: 'c',
		13: 'd',
		14: 'e',
		15: 'f',
	};
	while (true) {
		let residual = num % 16;
		num = Math.floor(num / 16);
		if (num === 0) {
			arr.push(hexCd[residual]);
			if (arr.length < 2) {
				arr.push('0');
			}
			arr.reverse();
			return arr.join('');
		}
		arr.push(hexCd[residual]);
	}
}

export function convertRGBToHEX(red, green, blue, opacity) {
	if (!opacity) {
		opacity = 1;
	}

	if (!isNum(red) || !isNum(green) || !isNum(blue) || !isNum(opacity)) {
		throw new Error('red or green or blue or opacity is not type number!');
	}

	if (red > 255) {
		// rgb decimal
		// hex thap luc phan
		red = 255;
	} else if (red < 0) {
		red = 0;
	}

	if (green > 255) {
		green = 255;
	} else if (green < 0) {
		green = 0;
	}

	if (blue > 255) {
		blue = 255;
	} else if (blue < 0) {
		blue = 0;
	}

	if (opacity > 1) {
		opacity = Math.round(opacity / 100);
	}
	red = processConvertDecToHex(red);
	green = processConvertDecToHex(green);
	blue = processConvertDecToHex(blue);
	opacity = processConvertDecToHex(opacity * 255);
	return '#' + red + green + blue + opacity;
}

function load() {
	window.isobjempty = isObjEmpty;
	// eslint-disable-next-line
	Array.prototype.sortobj = sortObj;
}

export default load;
