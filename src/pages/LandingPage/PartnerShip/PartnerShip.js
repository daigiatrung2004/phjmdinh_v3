import Input from '~/components/Input';
import * as $ from './Styles';
import Paragraph from '~/components/Paragraph';
import TextArea from '~/components/TextArea';
import DropDown from '~/components/DropDown';

function PartnerShip() {
	let options = [
		{
			text: 'Hợp tác thương mại',
			value: '0',
		},
		{
			text: 'Hợp tác quảng cáo',
			value: '1',
		},
		{
			text: 'Hợp tác nội dung',
			value: '2',
		},
	];
	return (
		<$.Sheet>
			<$.Main>
				<h2 className="title">Hợp tác thương mại</h2>
				<$.Description className={'primary'}>
					Cho dù là hợp tác về quảng cáo, thương mại, nội dung hay các đề án hợp tác về phương diện khác, chân
					thành hoan nghênh bạn gửi thư đến nhằm đảm bảo chất lượng dịch vụ tối ưu nhất, vui lòng điền hoàn
					chỉnh biểu mẫu sau, chúng tôi sẽ nhanh chóng liên hệ với bạn
				</$.Description>
				<$.Row>
					<Input
						type="text"
						labelText={'Họ'}
						width="32.6rem"
					/>
					<Input
						type="text"
						labelText={'Tên'}
						width="32.6rem"
					/>
				</$.Row>
				<$.Row>
					<Input
						type="text"
						labelText={'Email'}
						width="66rem"
					/>
				</$.Row>
				<$.Row>
					<DropDown
						labelText={'Loại hình hợp tác'}
						options={options}
						defaultText="Vui lòng chọn loại hình hợp tác"
						style={{ width: '66rem' }}
					/>
				</$.Row>
				<$.Row>
					<Input
						type="text"
						labelText={'Chủ đề thư'}
						width="66rem"
					/>
				</$.Row>
				<$.Row>
					<TextArea
						type="text"
						labelText={'Nội dung thư'}
						width="100%"
						placeholder="Giới hạn trong 3000 chữ"
						maxlength="3000"
						rows="7"
						cols="75"
					/>
				</$.Row>
			</$.Main>
		</$.Sheet>
	);
}

export default PartnerShip;
