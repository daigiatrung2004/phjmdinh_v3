import * as $ from './Styles';
import { useDropzone } from 'react-dropzone';

function Dropify({ children }) {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
	return (
		<$.DropZone {...getRootProps({ className: 'dropzone' })}>
			<input {...getInputProps()} />
			<p>{children}</p>
		</$.DropZone>
	);
}

export default Dropify;
