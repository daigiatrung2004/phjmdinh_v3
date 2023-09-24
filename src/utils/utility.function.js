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
				// console.log('swap data : left pointer=' + leftPointer + ', right pointer = ' + rightPointer);
				swap(arr, leftPointer, rightPointer);
			}
		}

		swap(arr, leftPointer, right);
		// console.log('arr:', arr);
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

function load() {
	window.isobjempty = isObjEmpty;
	Array.prototype.sortobj = sortObj;
}

export default load;
