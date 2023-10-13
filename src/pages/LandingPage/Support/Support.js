import ToggleList from '~/components/ToggleList';
import * as $ from './Styles';
import * as dataset from './dataset';
import { Fragment } from 'react';

function Support() {
	return (
		<$.SuperSheet style={{ marginTop: '10rem', marginBottom: '10rem' }}>
			<$.Sheet>
				<h5>Về tài khoản</h5>
				<ToggleList subListItems={dataset.account_1}>Làm thế nào để liên kết email/SĐT?</ToggleList>
				<ToggleList subListItems={dataset.account_2}>Tôi có thể xem UID tài khoản ở đâu?</ToggleList>
				<ToggleList subListItems={dataset.account_3}>Làm thế nào để thay đổi mật khẩu tài khoản?</ToggleList>
				<ToggleList subListItems={dataset.account_4}>
					Làm thế nào để thay đổi email/số điện thoại liên kết?
				</ToggleList>
				<ToggleList subListItems={dataset.account_5}>Không thể đăng nhập vào tài khoản?</ToggleList>
				<$.SplitRange />
			</$.Sheet>
			<$.Sheet>
				<h5>Về thanh toán</h5>
				<ToggleList subListItems={dataset.payment_1}>Có những phương thức nào để mua VIP?</ToggleList>
				<ToggleList subListItems={dataset.payment_2}>Mua VIP như thế nào?</ToggleList>
				<ToggleList subListItems={dataset.payment_3}>Làm thế nào để quy đổi mã VIP?</ToggleList>
				<ToggleList subListItems={dataset.payment_4}>Làm thế nào để sử dụng mã ưu đãi?</ToggleList>
				<$.SplitRange />
			</$.Sheet>
			<$.Sheet>
				<h5>Về sự kiện</h5>
				<ToggleList subListItems={dataset.event_1}>
					Tôi đã mua gói khuyến mại, tại sao lại bị trừ phí?
				</ToggleList>
				<ToggleList subListItems={dataset.event_2}>
					Nếu tôi mua gói khuyến mại, thì tư cách hội viên trước đó của tôi sẽ thế nào?
				</ToggleList>
				<$.SplitRange />
			</$.Sheet>
		</$.SuperSheet>
	);
}

export default Support;
