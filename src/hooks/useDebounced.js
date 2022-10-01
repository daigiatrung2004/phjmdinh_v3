import { useEffect, useState } from 'react';

function useDebounced(value, timeDebounced) {
	const [deBounced, setDebounced] = useState(value);

	useEffect(() => {
		let id = setTimeout(() => {
			setDebounced(value);
		}, timeDebounced);

		return () => clearTimeout(id);
	}, [value, timeDebounced]);

	return deBounced;
}

export default useDebounced;
