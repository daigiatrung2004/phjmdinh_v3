import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function useDebounced(value, timeDebounced = 0) {
	const [deBounced, setDebounced] = useState(value);

	useEffect(() => {
		if (value) {
			let id = setTimeout(() => {
				setDebounced(value);
			}, timeDebounced);
			return () => clearTimeout(id);
		} else {
			setDebounced(value);
		}
	}, [value, timeDebounced]);

	return deBounced;
}

useDebounced.propTypes = {
	value: PropTypes.string.isRequired,
	timeDebounced: PropTypes.number,
};

export default useDebounced;
