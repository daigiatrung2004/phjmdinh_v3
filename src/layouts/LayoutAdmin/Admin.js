import ToggleList from '~/components/ToggleList';
import * as $ from './Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Admin({ children }) {
	const [isShowNav, setIsShowNav] = useState(true);
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
				<$.Bars
					className="bars"
					onClick={() => setIsShowNav(!isShowNav)}
					isShowNav={isShowNav}
				>
					<FontAwesomeIcon
						icon={faBars}
						style={{ fontSize: '2rem', color: 'white', marginBottom: '.3rem' }}
					/>
				</$.Bars>
			</$.Header>
			<$.Navbar isShowNav={isShowNav}>
				<$.NavbarHeader />
				<$.List>
					<ToggleList
						transparentFlag={true}
						subListItems={['Chart']}
					>
						Trading View
					</ToggleList>
					<ToggleList
						transparentFlag={true}
						subListItems={['Create Films Info']}
					>
						Films Info
					</ToggleList>
				</$.List>
			</$.Navbar>
			<$.Content className="content">{children}</$.Content>
		</$.Container>
	);
}

export default Admin;
