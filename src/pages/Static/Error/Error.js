import * as $ from './ErrorStyles';
import Background from '~/components/Background';
import Images from '~/assets/images';
import Button from '~/components/Button';
import Image from '~/components/Image';

function Error({ settings }) {
	const config = {
		title: 'No message !',
		background: '',
		detail: 'No message detail!',
		hasErrorType: false,
		errCode: '000',
		errMsg: 'Not exists error',
		isLeftImg: true,
		isRightImg: false,
		isCenterImg: false,
		leftImg: '',
		rightImg: '',
		centerImg: '',
		fallback: Images.noImage,
	};

	Object.assign(config, settings);

	return (
		<Background
			src={config.background}
			style={{ background: 'none' }}
		>
			<$.Content isCenterImg={config.isCenterImg}>
				{(config.isLeftImg || config.centerImg) && (
					<Image src={config.leftImg || config.centerImg || config.fallback} />
				)}
				<div>
					<$.Wrapper>
						{config.hasErrorType && <$.ErrorType>{`${config.errCode} : ${config.errMsg}`}</$.ErrorType>}
						<$.Title>{config.title}</$.Title>
						<$.Detail>{config.detail}</$.Detail>
					</$.Wrapper>
					<Button theme={{ type: 'primary', size: 'medium fullW' }}>Go to homepage</Button>
				</div>
				{config.isRightImg && <Image src={config.rightImg || config.fallback} />}
			</$.Content>
		</Background>
	);
}

export default Error;
