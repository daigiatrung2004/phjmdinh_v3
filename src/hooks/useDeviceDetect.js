import { useEffect, useState } from 'react';

function useDeviceDetect() {
	const [device, setDevice] = useState('');
	useEffect(() => {
		const userAgent = navigator ? navigator.userAgent : '';
		if (/Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/gim.test(userAgent)) {
			setDevice('mobile');
		} else if (/iPad|Tablet/gim.test(userAgent)) {
			setDevice('tablet');
		} else {
			setDevice('desktop');
		}
	}, []);

	return device;
}

export default useDeviceDetect;
