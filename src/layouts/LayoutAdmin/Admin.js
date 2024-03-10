import ToggleList from '~/components/ToggleList';
import * as $ from './Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Admin({ children }) {
	return (
		<$.Container>
			<$.Header>
				<$.Username>
					<FontAwesomeIcon
						icon={faUser}
						style={{ fontSize: '2rem', color: 'white', marginBottom: '.3rem' }}
					/>
					<$.Name>Hi, Vu!</$.Name>
				</$.Username>
			</$.Header>
			<$.Navbar>
				<$.NavbarHeader />
				<$.List>
					<ToggleList
						transparentFlag={true}
						subListItems={['Chart']}
					>
						Trading View
					</ToggleList>
				</$.List>
			</$.Navbar>
			<$.Content className="content">{children}</$.Content>
		</$.Container>
	);
}

export default Admin;
