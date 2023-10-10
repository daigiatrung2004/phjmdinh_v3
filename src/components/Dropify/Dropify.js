import * as $ from './Styles';
import { useDropzone } from 'react-dropzone';

function Dropify({ children, title }) {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
	return (
		<>
			{title && <$.Title>{title}</$.Title>}
			<$.DropZone {...getRootProps({ className: 'dropzone' })}>
				<input {...getInputProps()} />
				<p>{children}</p>
			</$.DropZone>
		</>
	);
}

export default Dropify;
