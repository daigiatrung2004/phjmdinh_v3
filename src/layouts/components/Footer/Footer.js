import Label from '~/components/Label';
import * as $ from './Styles';

function Footer() {
	return (
		<$.CustomBg
			// src="https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/hreiLoPysWG79TsyQgMzFKaOTF5.jpg"
			className="flex-center hover-footer"
			style={{
				backgroundColor: 'var(--bg-color-override)',
				overflow: 'hidden',
				height: '6rem',
				alignItems: 'start',
				paddingTop: '2rem',
			}}
		>
			<$.Grid className="grid">
				<Label
					className="pointer"
					style={{ color: 'var(--white)', marginBottom: '2rem' }}
				>
					Giới thiệu về chúng tôi
				</Label>
				<Label
					className="pointer"
					style={{ color: 'var(--white)', marginBottom: '2rem' }}
				>
					Hợp tác
				</Label>
				<Label
					className="pointer"
					style={{ color: 'var(--white)', marginBottom: '2rem' }}
				>
					Hỗ trợ và giúp đỡ
				</Label>
				<Label
					className="pointer"
					style={{ color: 'var(--white)', marginBottom: '2rem' }}
				>
					Điều khoản dịch vụ
				</Label>
				<Label
					className="hover-text-color pointer"
					style={{ lineHeight: '2.1rem', fontWeight: 'normal' }}
				>
					Thông tin công ty
				</Label>
				<Label
					className="hover-text-color pointer"
					style={{ lineHeight: '2.1rem', fontWeight: 'normal' }}
				>
					Đăng quảng cáo
				</Label>
				<Label
					className="hover-text-color pointer"
					style={{ lineHeight: '2.1rem', fontWeight: 'normal' }}
				>
					Phản ánh ý kiến
				</Label>
				<Label
					className="hover-text-color pointer"
					style={{ lineHeight: '2.1rem', fontWeight: 'normal' }}
				>
					Điểu khoản quyền riêng tư
				</Label>
				<Label
					className="hover-text-color pointer"
					style={{ lineHeight: '2.1rem', fontWeight: 'normal' }}
				>
					Giới thiệu dịch vụ sản phẩm
				</Label>
				<Label
					className="hover-text-color pointer"
					style={{ lineHeight: '2.1rem', fontWeight: 'normal' }}
				>
					Quan hệ kinh doanh
				</Label>
				<Label
					className="hover-text-color pointer"
					style={{ lineHeight: '2.1rem', fontWeight: 'normal' }}
				>
					Trung tâm phản hồi bảo mật
				</Label>
				<Label
					className="hover-text-color pointer"
					style={{ lineHeight: '2.1rem', fontWeight: 'normal' }}
				>
					Điều khoản sử dụng
				</Label>
				<Label
					className="hover-text-color pointer"
					style={{ lineHeight: '2.1rem', fontWeight: 'normal' }}
				>
					Cách xem
				</Label>
				<Label
					className="hover-text-color pointer"
					style={{ lineHeight: '2.1rem', fontWeight: 'normal' }}
				>
					Hợp tác cài đặt trước
				</Label>
				<Label
					className="hover-text-color pointer"
					style={{ lineHeight: '2.1rem', fontWeight: 'normal' }}
				>
					Câu hỏi thường gặp
				</Label>
			</$.Grid>
		</$.CustomBg>
	);
}

export default Footer;
