import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDropzone } from 'react-dropzone';
import * as $ from './Styles';

function Dropify({ children, title }) {
	const { getRootProps, getInputProps } = useDropzone();
	return (
		<>
			{title && <$.Title>{title}</$.Title>}
			<$.DropZone {...getRootProps({ className: 'dropzone' })}>
				<input {...getInputProps()} />
				<$.TitleUpload>
					<div>
						<FontAwesomeIcon
							icon={faCloudArrowUp}
							style={{ fontSize: '4rem' }}
						/>
					</div>
					<p>{children}</p>
				</$.TitleUpload>
			</$.DropZone>
		</>
	);
}

export default Dropify;
