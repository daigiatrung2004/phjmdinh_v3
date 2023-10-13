import Label from '~/components/Label';
import * as $ from './Styles';
import { faInstagram, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
	return (
		<$.FooterSheet className="footer-sheet">
			<$.CustomBg
				// src="https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/hreiLoPysWG79TsyQgMzFKaOTF5.jpg"
				className="flex-center hover-footer"
				style={{
					backgroundColor: 'var(--bg-color-override)',
					overflow: 'hidden',
					height: '100%',
					alignItems: 'start',
					paddingTop: '2rem',
					maxHeight: '20rem',
				}}
			>
				<$.Grid className="grid">
					<Label
						className="pointer footer"
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
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
						src={'http://localhost:5000/aboutus'}
					>
						Thông tin công ty
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
						src={'http://localhost:5000/partnership'}
					>
						Đăng quảng cáo
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
						src={'http://localhost:5000/feedback'}
					>
						Phản ánh ý kiến
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
						src={'http://localhost:5000/privacy'}
					>
						Điểu khoản quyền riêng tư
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
					>
						Giới thiệu dịch vụ sản phẩm
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
						src={'http://localhost:5000/partnership'}
					>
						Quan hệ kinh doanh
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
						src={'http://localhost:5000/oversea'}
					>
						Trung tâm phản hồi bảo mật
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
						src={'http://localhost:5000/termofuse'}
					>
						Điều khoản sử dụng
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
					>
						Cách xem
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
						src={'http://localhost:5000/preinstall'}
					>
						Hợp tác cài đặt trước
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
					>
						Câu hỏi thường gặp
					</Label>
				</$.Grid>
			</$.CustomBg>
			<$.Copy className="copy">
				<$.CopyContent>
					<$.CopyRight className="copy-right">Copyright © 2021 iQiyi All Rights Reserved</$.CopyRight>
					<$.CopyRight className="copy-right">
						Chúng tôi sử dụng Cookies để cải thiện trải nghiệm sử dụng của bạn. Nếu bạn tiếp tục sử dụng
						trang web của chúng tôi, có nghĩa là bạn đồng ý chúng tôi sử dụng Cookies. Đọc{' '}
						<u>
							<Label
								src="./privacy-agreement"
								rseat="gdpr"
								data-pb="block=footer"
								aria-label="iq-privacy-agreement"
								style={{ fontSize: '1.2rem', color: 'var(--copy-color)' }}
							>
								Chính sách quyền riêng tư PHJMDINH
							</Label>
						</u>
					</$.CopyRight>
				</$.CopyContent>
				<div className="get-app-two">
					<$.App>
						<$.Social src={'https://www.facebook.com/'}>
							<$.Icon icon={faSquareFacebook}></$.Icon>
						</$.Social>
						<$.Social src={'https://www.facebook.com/'}>
							<$.Icon icon={faInstagram}></$.Icon>
						</$.Social>
						<$.Social src={'https://www.facebook.com/'}>
							<$.Icon icon={faTwitter}></$.Icon>
						</$.Social>
					</$.App>
				</div>
			</$.Copy>
		</$.FooterSheet>
	);
}

export default Footer;
