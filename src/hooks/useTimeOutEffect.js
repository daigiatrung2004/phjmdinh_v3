import { useEffect, useState } from 'react';

function useTimeOutEffect(cleanUpFlag, timeout = 0) {
	const [isExpired, setIsExpired] = useState(cleanUpFlag);
	useEffect(() => {
		if (cleanUpFlag) {
			var id = setTimeout(() => {
				setIsExpired(false);
			}, timeout);
		} else {
			setIsExpired(cleanUpFlag);
			return clearTimeout(id);
		}
	}, [cleanUpFlag, timeout]);
	return isExpired;
}

export default useTimeOutEffect;
