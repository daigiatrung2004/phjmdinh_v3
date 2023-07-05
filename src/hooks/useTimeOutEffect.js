import { memo, useEffect, useState } from 'react';

function useTimeOutEffect(cleanUpFlag, timeout = 0) {
	const [isExpired, setIsExpired] = useState(cleanUpFlag);
	useEffect(() => {
		console.log('cleanUpFlag in hooks:', cleanUpFlag, 'timeout:', timeout);
		if (cleanUpFlag) {
			var id = setTimeout(() => {
				setIsExpired(false);
				// console.log('isExpired in hooks:', isExpired);
			}, timeout);
		} else {
			setIsExpired(cleanUpFlag);
			return clearTimeout(id);
		}
	}, [cleanUpFlag]);
	return isExpired;
}

export default useTimeOutEffect;
