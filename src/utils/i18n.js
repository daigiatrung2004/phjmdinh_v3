import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

i18next
	.use(initReactI18next)
	.use(I18nextBrowserLanguageDetector)
	.init({
		debug: true,
		fallbackLng: 'vi',
		resources: {
			vi: {
				translation: {
					// header
					recommendation: 'Đề xuất',
					history: 'Lịch sử xem',
					language: 'Ngôn ngữ',
					account: 'Tài khoản của tôi',
					accountContent: 'Đăng nhập để theo dõi các nội dung mới nhất',
					promote: 'Khuyên mãi có thời hạn',
					filmsOther: 'Khác',
					searchFilm: 'Tìm kiếm',

					// content
					recommendHot: 'Đề xuất hot',
					trending: 'Xu hướng',
					release: 'Mới ra',
					upcoming: 'Sắp ra',

					// footer
					aboutus: 'Giới thiệu về chúng tôi',
					cooperate: 'Hợp tác',
					support: 'Hỗ trợ và giúp đỡ',
					termOfService: 'Điều khoản dịch vụ',
					companyInfo: 'Thông tin công ty',
					advertisement: 'Đăng quảng cáo',
					feedback: 'Phản ánh ý kiến',
					privacy: 'Điểu khoản quyền riêng tư',
					introduce: 'Giới thiệu dịch vụ sản phẩm',
					business: 'Quan hệ kinh doanh',
					feedbackSec: 'Trung tâm phản hồi bảo mật',
					termOfUse: 'Điều khoản sử dụng',
					howToView: 'Cách xem',
					install: 'Hợp tác cài đặt trước',
					question: 'Câu hỏi thường gặp',
					copyright: 'Copyright © 2021 iQiyi All Rights Reserved',
					privacyPolicy: 'Chính sách quyền riêng tư PHJMDINH',
					useCookies:
						'Chúng tôi sử dụng Cookies để cải thiện trải nghiệm sử dụng của bạn. Nếu bạn tiếp tục sử dụng trang web của chúng tôi, có nghĩa là bạn đồng ý chúng tôi sử dụng Cookies.',

					// tab
					uniqueContent: 'Nội dung đặc sắc',
					performer: 'Diễn viên',
					collectionFilm: 'Tuyển tập phim và truyền hình',
					recommendForU: 'Đề xuất cho bạn',
					eposide: 'Chọn tập',

					// navbar mobile
					signinoutMb: 'Đăng nhập / Đăng ký',
					settingsUserMb: 'Cài đặt cá nhân',
					languageMb: 'Tiếng Việt',
					collectionMb: 'Sưu tập của tôi',
					bookFilmMb: 'Phim đặt trước',
					subtitle: 'Bản dịch phụ đề',
				},
			},
			en: {
				translation: {
					// header
					recommendation: 'Recommendations',
					history: 'history',
					language: 'Language',
					account: 'My Account',
					accountContent: 'Log in to follow the latest content',
					promote: 'Promotion for a limited time',
					filmsOther: 'Other',
					searchFilm: 'Search',

					// content
					recommendHot: 'Hot recommendation',
					trending: 'Trending',
					release: 'New Release',
					upcoming: 'Upcoming',

					// footer
					aboutus: 'About Us',
					cooperate: 'Cooperate',
					support: 'Support And Help',
					termOfService: 'Terms Of Service',
					companyInfo: 'Company Information',
					advertisement: 'Advertisement',
					feedback: 'Feedback',
					privacy: 'Privacy Terms',
					introduce: 'Introducing Product Services',
					business: 'Business Relations',
					feedbackSec: 'Security Response Center',
					termOfUse: 'Terms Of Use',
					howToView: 'How To View',
					install: 'Collaborative pre-installation',
					question: 'Frequently asked questions',
					copyright: 'Copyright © 2021 iQiyi All Rights Reserved',
					privacyPolicy: 'PHJMDINH Privacy Policy',
					useCookies:
						'We use Cookies to improve your user experience. If you continue to use our website, you agree to our use of Cookies.',

					// tab
					eposide: 'Eposide',
					uniqueContent: 'Unique Content',
					performer: 'Performer',
					collectionFilm: 'Collection Film',
					recommendForU: 'Recommend For You',

					// navbar mobile
					signinoutMb: 'Log in / Sign up',
					settingsUserMb: 'Privacy setting',
					languageMb: 'English',
					collectionMb: 'collection',
					bookFilmMb: 'Pre-order movies',
					subtitle: 'Subtitle',
				},
			},
		},
	});
