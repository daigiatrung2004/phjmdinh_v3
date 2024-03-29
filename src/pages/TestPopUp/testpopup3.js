import Form from '~/components/Form';
import ToggleList from '~/components/ToggleList';

import './test2.css';
import Dropify from '~/components/Dropify/Dropify';

function TestPopUp3() {
	const list = [
		'Thành viên đặt mua',
		'Quyền lợi thành viên',
		'Thành viên phát tải về',
		'Hoạt động thành viên',
		'Khác',
	];
	return (
		<>
			<Form isHeaderFlag>
				<ToggleList subListItems={list}>Vấn đề hội viên</ToggleList>
				<ToggleList subListItems={list}>Vấn đề hội viên</ToggleList>
				<ToggleList subListItems={list}>Vấn đề hội viên</ToggleList>
				<ToggleList subListItems={list}>Vấn đề hội viên</ToggleList>
				<ToggleList subListItems={list}>Vấn đề hội viên</ToggleList>
				<Dropify title={'Tải ảnh lên:'}>Drag and drop a files here, or click</Dropify>
			</Form>
		</>
	);
}

export default TestPopUp3;
