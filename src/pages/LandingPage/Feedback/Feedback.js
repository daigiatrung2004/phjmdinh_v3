import Form from '~/components/Form';
import * as $ from './Styles';
import ToggleList from '~/components/ToggleList';
import Input from '~/components/Input';
import Dropify from '~/components/Dropify';
import TextArea from '~/components/TextArea';
import Images from '~/assets/images';

const problemMembers = [
	<label for="pb-member-1">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-1"
		/>
		<span> Thành viên đặt mua</span>
	</label>,
	<label for="pb-member-2">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-2"
		/>
		<span> Thành viên đặt mua</span>
	</label>,
	<label for="pb-member-3">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-3"
		/>
		<span> Thành viên đặt mua</span>
	</label>,
	<label for="pb-member-4">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-4"
		/>
		<span> Thành viên đặt mua</span>
	</label>,
	<label for="pb-member-5">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-5"
		/>
		<span> Thành viên đặt mua</span>
	</label>,
];

const problemAccount = [
	<label for="pb-member-1">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-1"
		/>
		<span> Không thể đăng nhập</span>
	</label>,
	<label for="pb-member-2">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-2"
		/>
		<span> Tài khoản bị đánh cắp</span>
	</label>,
	<label for="pb-member-3">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-3"
		/>
		<span> Tài khoản không liên kết được với email</span>
	</label>,
	<label for="pb-member-4">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-4"
		/>
		<span> Tài khoản không liên kết được với số điện thoại di động</span>
	</label>,
	<label for="pb-member-5">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-5"
		/>
		<span> Không thể tìm lại mật khẩu/sửa đổi mật khẩu</span>
	</label>,
	<label for="pb-member-5">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-5"
		/>
		<span> Khác</span>
	</label>,
];

const problemDisplay = [
	<label for="pb-member-1">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-1"
		/>
		<span> Hạn chế bản quyền không thể phát</span>
	</label>,
	<label for="pb-member-2">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-2"
		/>
		<span> Màn hình đen và hiển thị phát bị lỗi</span>
	</label>,
	<label for="pb-member-3">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-3"
		/>
		<span> Không có âm thanh, hình ảnh bình thường</span>
	</label>,
	<label for="pb-member-4">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-4"
		/>
		<span> Hình ảnh màn hình đen, âm thanh bình thường</span>
	</label>,
	<label for="pb-member-5">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-5"
		/>
		<span> Luôn trong trạng thái đệm</span>
	</label>,
	<label for="pb-member-5">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-5"
		/>
		<span> Chiếu tập nào đó, sẽ tự động nhảy về tập đầu tiên</span>
	</label>,
	<label for="pb-member-5">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-5"
		/>
		<span> Vấn đề tải xuống ở nửa màn hình dưới (chọn tập, giới thiệu v.v...)</span>
	</label>,
	<label for="pb-member-5">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-5"
		/>
		<span> Khác</span>
	</label>,
];

const problemLanguage = [
	<label for="pb-member-1">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-1"
		/>
		<span> Mục chọn không phụ đề</span>
	</label>,
	<label for="pb-member-2">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-2"
		/>
		<span> Phụ đề dịch sai</span>
	</label>,
	<label for="pb-member-3">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-3"
		/>
		<span> Phụ đề và âm thanh/hình ảnh không khớp</span>
	</label>,
	<label for="pb-member-4">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-4"
		/>
		<span> Phụ đề bị chồng chéo</span>
	</label>,
	<label for="pb-member-5">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-5"
		/>
		<span> Kiểu phụ đề (màu sắc, kích cỡ, font chữ)</span>
	</label>,
	<label for="pb-member-5">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-5"
		/>
		<span> Ngôn ngữ giao diện</span>
	</label>,
	<label for="pb-member-5">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-5"
		/>
		<span> Khác</span>
	</label>,
];

const problemDownOffline = [
	<label for="pb-member-1">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-1"
		/>
		<span> Do nguyên nhân bản quyền hoặc quyền hạn nên không thể lưu trữ tạm thời</span>
	</label>,
	<label for="pb-member-2">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-2"
		/>
		<span> Tải về thất bại, gợi ý mã lỗi</span>
	</label>,
	<label for="pb-member-3">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-3"
		/>
		<span> Video tải về không thể phát</span>
	</label>,
	<label for="pb-member-4">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-4"
		/>
		<span> Video tải về thất lạc</span>
	</label>,
	<label for="pb-member-5">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-5"
		/>
		<span> Khi tải về iQIYI được đặt ở trạng thái nền sẽ dừng tải về</span>
	</label>,
	<label for="pb-member-5">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-5"
		/>
		<span> Tải về ngắt quãng</span>
	</label>,
	<label for="pb-member-5">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-5"
		/>
		<span> Video tải về không xóa được</span>
	</label>,
	<label for="pb-member-5">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-5"
		/>
		<span> Video tải về không xóa được</span>
	</label>,
];

const problemContent = [
	<label for="pb-member-1">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-1"
		/>
		<span> Thiếu video</span>
	</label>,
	<label for="pb-member-2">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-2"
		/>
		<span> Video cập nhật không kịp thời</span>
	</label>,
	<label for="pb-member-3">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-3"
		/>
		<span> Khác</span>
	</label>,
];

const problemContentRecommend = [
	<label for="pb-member-1">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-1"
		/>
		<span> Đề xuất trang chủ, mô tả vấn đề:</span>
	</label>,
	<label for="pb-member-2">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-2"
		/>
		<span> Đề xuất trang phát, mô tả vấn đề:</span>
	</label>,
	<label for="pb-member-3">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-3"
		/>
		<span> Các vấn đề khác, mô tả vấn đề:</span>
	</label>,
];

const problemFlag = [
	<label for="pb-member-1">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-1"
		/>
		<span> Lag khi phát</span>
	</label>,
	<label for="pb-member-2">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-2"
		/>
		<span> Lag sau khi kích hoạt điện thoại</span>
	</label>,
	<label for="pb-member-3">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-3"
		/>
		<span> Thao tác giao diện bị lag</span>
	</label>,
	<label for="pb-member-4">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-4"
		/>
		<span> Khác</span>
	</label>,
];

const problemConflicts = [
	<label for="pb-member-1">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-1"
		/>
		<span> Thoát đột ngột khi phát</span>
	</label>,
	<label for="pb-member-2">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-2"
		/>
		<span> Thoát đột ngột khi kích hoạt phía người dùng</span>
	</label>,
	<label for="pb-member-3">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-3"
		/>
		<span> Chương trình không phản hồi, thoát đột ngột</span>
	</label>,
	<label for="pb-member-4">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-4"
		/>
		<span> Tải trang không thành công</span>
	</label>,
	<label for="pb-member-5">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-5"
		/>
		<span> Hình ảnh trang không thể hiển thị bình thường</span>
	</label>,
	<label for="pb-member-5">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-5"
		/>
		<span> Khác</span>
	</label>,
];

const problemPr = [
	<label for="pb-member-1">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-1"
		/>
		<span> Quảng cáo bị hiển thị lặp lại</span>
	</label>,
	<label for="pb-member-2">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-2"
		/>
		<span> Quảng cáo có nội dung gây cảm giác không thoải mái</span>
	</label>,
	<label for="pb-member-3">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-3"
		/>
		<span> Quảng cáo quá nhiều</span>
	</label>,
	<label for="pb-member-4">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-4"
		/>
		<span> Khác</span>
	</label>,
];

const problemOther = [
	<label for="pb-member-1">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-1"
		/>
		<span> Một phần lịch sử xem biến mất</span>
	</label>,
	<label for="pb-member-2">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-2"
		/>
		<span> Không thể xóa bỏ lịch sử xem</span>
	</label>,
	<label for="pb-member-3">
		<Input
			type="radio"
			name="pb-radio"
			id="pb-member-3"
		/>
		<span> Khác</span>
	</label>,
];

function Feedback() {
	return (
		<Form
			action="http://localhost:5000/"
			bgHeaderImg={Images.HeaderBgFeed}
			isHeaderFlag
			contentHeader={'Ý kiến phản hồi'}
		>
			<span>Phân loại vấn đề：</span>
			<ToggleList subListItems={problemMembers}>Vấn đề hội viên</ToggleList>
			<ToggleList subListItems={problemAccount}>Vấn đề tài khoản</ToggleList>
			<ToggleList subListItems={problemDisplay}>Vấn đề hiển thị</ToggleList>
			<ToggleList subListItems={problemLanguage}>Vấn đề về phụ đề & ngôn ngữ</ToggleList>
			<ToggleList subListItems={problemDownOffline}>Vấn đề tải về ngoại tuyến</ToggleList>
			<ToggleList subListItems={problemContent}>Vấn đề nội dung</ToggleList>
			<ToggleList subListItems={problemContentRecommend}>Vấn đề nội dung đề xuất</ToggleList>
			<ToggleList subListItems={problemFlag}>Vấn đề lag</ToggleList>
			<ToggleList subListItems={problemConflicts}>
				Vấn đề thoát đột ngột, tải về trang giao diện v.v...
			</ToggleList>
			<ToggleList subListItems={problemPr}>Vấn đề về quảng cáo</ToggleList>
			<ToggleList subListItems={problemMembers}>Khác</ToggleList>
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
