/**
	 * Function thats provides includes() functionality for Internet Explorer using indexOf()
	 * @param {array} container - An array to search through
	 * @param {any} value - The value to match in the array
	 */
	function includes(container, value) {
		var returnValue = false;
		var pos = container.indexOf(value);
		if (pos >= 0) {
			returnValue = true;
		}
		return returnValue;
	}