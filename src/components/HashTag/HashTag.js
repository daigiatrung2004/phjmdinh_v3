import * as $ from './Styles';

function HashTag({ children, externalChildren, isShowExtension = false, styleHovering = {}, ...attrs }) {
	var extension = {
		placement: 'left',
		style: {},
		children: '',
	};

	Object.assign(extension, externalChildren);
	return (
		<$.TagSheet
			hovering={styleHovering}
			{...attrs}
		>
			{isShowExtension && extension['placement'] == 'left' && <$.Extension>{extension['children']}</$.Extension>}
			{children}
			{isShowExtension && extension['placement'] == 'right' && <$.Extension>{extension['children']}</$.Extension>}
		</$.TagSheet>
	);
}

export default HashTag;
