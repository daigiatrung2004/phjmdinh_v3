import Images from '~/assets/images';
import Dropify from '~/components/Dropify';
import Form from '~/components/Form';
import TextArea from '~/components/TextArea';
import ToggleList from '~/components/ToggleList';
import * as dataset from './dataset';

function Feedback() {
	return (
		<Form
			action="http://localhost:5000/"
			bgHeaderImg={Images.HeaderBgFeed}
			isHeaderFlag
			contentHeader={'Ý kiến phản hồi'}
		>
			<span>Phân loại vấn đề：</span>
			<ToggleList subListItems={dataset.problemMembers}>Vấn đề hội viên</ToggleList>
			<ToggleList subListItems={dataset.problemAccount}>Vấn đề tài khoản</ToggleList>
			<ToggleList subListItems={dataset.problemDisplay}>Vấn đề hiển thị</ToggleList>
			<ToggleList subListItems={dataset.problemLanguage}>Vấn đề về phụ đề & ngôn ngữ</ToggleList>
			<ToggleList subListItems={dataset.problemDownOffline}>Vấn đề tải về ngoại tuyến</ToggleList>
			<ToggleList subListItems={dataset.problemContent}>Vấn đề nội dung</ToggleList>
			<ToggleList subListItems={dataset.problemContentRecommend}>Vấn đề nội dung đề xuất</ToggleList>
			<ToggleList subListItems={dataset.problemFlag}>Vấn đề lag</ToggleList>
			<ToggleList subListItems={dataset.problemConflicts}>
				Vấn đề thoát đột ngột, tải về trang giao diện v.v...
			</ToggleList>
			<ToggleList subListItems={dataset.problemPr}>Vấn đề về quảng cáo</ToggleList>
			<ToggleList subListItems={dataset.problemMembers}>Khác</ToggleList>
			<TextArea
				title={'Miêu tả vấn đề：'}
				placeholder={'Vui lòng cung cấp tên phim và số tập có vấn đề để chúng tôi có thể hỗ trợ bạn nhanh hơn.'}
				cols="120"
				rows="6"
			></TextArea>
			<Dropify>
				<h5>Nhấn chọn hoặc kéo thả hình ảnh</h5>
				<small>Chỉ hỗ trợ định dạng png, jpg, jpeg</small>
			</Dropify>
		</Form>
	);
}

export default Feedback;
