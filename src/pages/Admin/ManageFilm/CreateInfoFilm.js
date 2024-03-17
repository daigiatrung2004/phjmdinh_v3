import Input from '~/components/Input';
import * as $ from './Styles';
import Dropify from '~/components/Dropify';
import Label from '~/components/Label';
import TextArea from '~/components/TextArea';
import DropDown from '~/components/DropDown';
import Button from '~/components/Button';

function CreateInfoFilm() {
	const optionsGenre = [
		{
			text: 'hành động',
			value: '1',
		},
		{
			text: 'Khoa học viễn tưởng',
			value: '2',
		},
		{
			text: 'Tâm lý tình cảm',
			value: '3',
		},
	];

	const optionsLanguage = [
		{
			text: 'hành động',
			value: '1',
		},
		{
			text: 'Khoa học viễn tưởng',
			value: '2',
		},
		{
			text: 'Tâm lý tình cảm',
			value: '3',
		},
	];

	const optionsLimit = [
		{
			text: 'Trên 18 tuổi',
			value: '1',
		},
		{
			text: 'Dưới 18 tuổi',
			value: '2',
		},
	];
	return (
		<$.Container>
			<h1>CREATE INFO FILM</h1>

			<$.Form>
				<Input
					type="text"
					labelText={'ID:'}
					disabled={'disabled'}
				/>
				<Input
					type="text"
					labelText={'Title:'}
				/>
				<Input
					type="text"
					labelText={'Originnal Title:'}
				/>
				<DropDown
					labelText="Limit Age:"
					options={optionsLimit}
					defaultText="Vui lòng chọn giới hạn độ tuổi"
					style={{ width: '66rem', color: 'black' }}
				/>
				<DropDown
					labelText="Original Language:"
					options={optionsGenre}
					defaultText="Vui lòng chọn thể loại phim"
					style={{ width: '66rem', color: 'black' }}
				/>
				<DropDown
					labelText="Genre:"
					options={optionsLanguage}
					defaultText="Vui lòng chọn thể loại phim"
					style={{ width: '66rem', color: 'black' }}
				/>
				<Input
					type="number"
					labelText={'Popularity:'}
				/>
				<Input
					type="date"
					labelText={'Realease Date:'}
				/>
				<Input
					type="text"
					labelText={'Vote Average:'}
				/>
				<Input
					type="number"
					labelText={'Vote Count:'}
				/>
				<TextArea
					title={'Overview:'}
					placeholder={'Tổng quan'}
					cols={'100'}
				></TextArea>
				<$.ProfilePath>
					<Label>Backdrop Image</Label>
					<Dropify>
						<h5>Nhấn chọn hoặc kéo thả hình ảnh</h5>
						<small>Chỉ hỗ trợ định dạng png, jpg, jpeg</small>
					</Dropify>
				</$.ProfilePath>
				<$.ProfilePath>
					<Label>Poster Image</Label>
					<Dropify>
						<h5>Nhấn chọn hoặc kéo thả hình ảnh</h5>
						<small>Chỉ hỗ trợ định dạng png, jpg, jpeg</small>
					</Dropify>
				</$.ProfilePath>
				<Button
					theme={{ type: 'primary rounded', size: 'large fullW' }}
					style={{ marginBottom: '2.5rem' }}
				>
					Create info
				</Button>
			</$.Form>
		</$.Container>
	);
}

export default CreateInfoFilm;
