import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as $ from './Styles';
import { useDropzone } from 'react-dropzone';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

function Dropify({ children, title }) {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
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
