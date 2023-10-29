import { faInstagram, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import Label from '~/components/Label';
import * as $ from './Styles';
import { useTranslation } from 'react-i18next';

function Footer() {
	const [percentDisplay, setPercentDisplay] = useState('opacity-transparent');

	function handleDisplay() {
		if (window.scrollY >= 1100) {
			setPercentDisplay('');
		} else {
			setPercentDisplay('opacity-transparent');
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', handleDisplay);

		return () => window.removeEventListener('scroll', handleDisplay);
	}, []);

	const { t } = useTranslation();
	return (
		<$.FooterSheet className={`footer-sheet ${percentDisplay}`}>
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
						{t('aboutus')}
					</Label>
					<Label
						className="pointer"
						style={{ color: 'var(--white)', marginBottom: '2rem' }}
					>
						{t('cooperate')}
					</Label>
					<Label
						className="pointer"
						style={{ color: 'var(--white)', marginBottom: '2rem' }}
					>
						{t('support')}
					</Label>
					<Label
						className="pointer"
						style={{ color: 'var(--white)', marginBottom: '2rem' }}
					>
						{t('termOfService')}
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
						src={'http://localhost:5000/aboutus'}
					>
						{t('companyInfo')}
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
						src={'http://localhost:5000/partnership'}
					>
						{t('advertisement')}
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
						src={'http://localhost:5000/feedback'}
					>
						{t('feedback')}
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
						src={'http://localhost:5000/privacy'}
					>
						{t('privacy')}
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
					>
						{t('introduce')}
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
						src={'http://localhost:5000/partnership'}
					>
						{t('business')}
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
						src={'http://localhost:5000/oversea'}
					>
						{t('feedbackSec')}
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
						src={'http://localhost:5000/termofuse'}
					>
						{t('termOfUse')}
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
					>
						{t('howToView')}
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
						src={'http://localhost:5000/preinstall'}
					>
						{t('install')}
					</Label>
					<Label
						className="hover-text-color pointer"
						style={{ lineHeight: '2.1rem', fontWeight: 'normal', color: 'var(--text-color-search)' }}
						src={'http://localhost:5000/support'}
					>
						{t('question')}
					</Label>
				</$.Grid>
			</$.CustomBg>
			<$.Copy className="copy">
				<$.CopyContent>
					<$.CopyRight className="copy-right">{t('copyright')}</$.CopyRight>
					<$.CopyRight className="copy-right">
						{t('useCookies')}
						<u>
							<Label
								src="./privacy-agreement"
								rseat="gdpr"
								data-pb="block=footer"
								aria-label="iq-privacy-agreement"
								style={{ fontSize: '1.2rem', color: 'var(--copy-color)' }}
							>
								{t('privacyPolicy')}
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
