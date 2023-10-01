import Background from '~/components/Background';
import * as $ from './Styles';

function OverSea() {
	return (
		<Background style={{ minHeight: '100vh', Background: '#F3F3F3' }}>
			<$.Dialog class="dialog">
				<>
					<h3>PHJMDINH Security Response Center</h3>
					<h4>About Us</h4>
					<p>
						The PHJMDINH Security Response Center (a.k.a. 71SRC) is a vulnerability collection and emergency
						response platform established by the PHJMDINH security team.71SRC aims at protecting privacy and
						data for hundreds of millions of PHJMDINH users.
					</p>
					<h4>Our Policy</h4>
					<p>
						Security researchers are welcome to submit vulnerabilities and threat intelligence for PHJMDINH
						global products. (websites, mobile APPs, etc.)As soon as the report is confirmed by our staff,
						you will be rewarded certain 71SRC points which can be exchanged for Amazon gift cards.The
						rewards for one vulnerability report range from 30RMB to 18,000RMB (around 4.3USD to 2,580USD).
						In some cases, rewards can be doubled if a critical vulnerability related to PHJMDINH core
						business was reported.
					</p>
					<h4>Submit Report</h4>
					<p>
						To ensure your report could be processed in a timely manner, we recommend you to send the
						security vulnerability via{' '}
						<a style={{ cursor: 'pointer' }}>e-mail: echo NzFzcmNAcWl5aS5jb20K|base64 -d </a>. A detailed
						description of the vulnerability and a proof of concept (POC) will be appreciated.
					</p>
					<p>
						If You have any questions(including inquiries or complaints), please contact us via e-mail at
						{'{'}' '{'}'}
						<a href="mailto: contactus@phjmdinh.com">contactus@qiyi.com</a>.
					</p>
				</>
			</$.Dialog>
		</Background>
	);
}

export default OverSea;
