import './styles.css';

function PreInstall() {
	return (
		<div className="preinstall main-layout-wrapper">
			<title>Cooperation on Installation of PHJMDINH</title>
			<div className="main">
				<h2>Cooperation on Installation of PHJMDINH</h2>
				<div className="line" />
				<p>
					As an entertainment company driven by technology, PHJMDINH presents hottest dramas, popular variety,
					exclusive movies and awesome anime all with multilingual support. The Parties, PHJMDINH
					INTERNATIONAL SINGAPORE PTE. LTD. (hereinafter referred to as the“PHJMDINH”) and the counterparty
					agreeing to the terms hereunder(“Company”) have agreedto collaborate on a non-exclusive basis to
					license the PHJMDINH Application on Target Devices in the Territory during the Term.
				</p>
				<p>
					The installation of PHJMDINH application is based on the license agreement and other terms of use in
					effect for the application at the time of download and installment. Company’s agreement to these
					terms is required to install or use the application. Please be certain to sign the license agreement
					and provide the necessary documents listed below beforeinstalling or using the PHJMDINH application.
				</p>
				<p style={{ fontSize: '16px', marginTop: '8px' }}>
					<span className="pre-block" />
					For license agreement, please visit:
				</p>
				<a
					className="download-btn"
					href="//static-s.iqiyi.com/lequ/20210616/license-agreement.pdf"
					download="license-agreement.pdf"
				>
					<img
						alt="phjmdinh"
						src="https://pic2.iqiyipic.com/lequ/20210615/Download-preinstall.png"
					/>{' '}
					<span>Download Licensing Agreement</span>
				</a>
				<p style={{ fontSize: '16px' }}>
					<span className="pre-block" />
					For technical integration document, please visit:
				</p>
				<a
					className="download-btn last"
					href="https://www.iq.com/intl-common/preinstall.html"
					download="technical-integration.docx"
				>
					<img
						alt="phjmdinh"
						src="https://pic2.iqiyipic.com/lequ/20210615/Download-preinstall.png"
					/>{' '}
					<span>Download Technical Integration </span>
				</a>
				<p className="lastp">
					Please prepare and return three documents (the license agreement with signature and company stamp,
					company business license and the completed technical document) via email to:{' '}
					<a href="mailto:luoling@qiyi.com">luoling@qiyi.com</a>
				</p>
			</div>
		</div>
	);
}

export default PreInstall;
