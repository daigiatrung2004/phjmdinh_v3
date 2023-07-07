import * as $ from './Styles';
import AceEditor from 'react-ace';
// import listReactFiles from 'list-react-files';

function PageTool() {
	console.log('dirname:', __dirname);

	// listReactFiles(`D:\\reactjs\\projects\\personals\\phjmdinh_v3\\src\\components`).then(files => console.log(files));

	return (
		<>
			<AceEditor
				placeholder="Placeholder Text"
				mode="javascript"
				// theme="monokai"
				name="blah2"
				fontSize={14}
				showPrintMargin={true}
				showGutter={true}
				highlightActiveLine={true}
				value={`function onLoad(editor) {
	  console.log("i've loaded");
	}`}
				setOptions={{
					enableBasicAutocompletion: false,
					enableLiveAutocompletion: false,
					enableSnippets: false,
					showLineNumbers: true,
					tabSize: 2,
				}}
			/>
		</>
	);
}

export default PageTool;
