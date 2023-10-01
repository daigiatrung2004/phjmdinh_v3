import './styles.css';

function Privacy() {
	return (
		<div className="landing global-container">
			<div className="global-header">
				<div className="overlay"></div>

				<div className="container">
					<div className="inner-container">
						<div className="branding">
							<a
								className="logo nf-logo-link n-logo"
								href="https://netflix.com"
								title="Netflix"
							>
								<svg
									className="netflix-svg"
									width="88px"
									height="32px"
									viewBox="0 0 111 30"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill="#e50914"
										d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z"
									></path>
								</svg>
								<svg
									className="n-svg"
									focusable="true"
									viewBox="225 0 552 1000"
									height="32px"
								>
									<defs>
										<radialGradient
											id="54260309-7575-46f4-a806-31673acf60fe-a"
											r="75%"
											gradientTransform="matrix(.38 0 .5785 1 .02 0)"
										>
											<stop
												offset="60%"
												stop-opacity=".3"
											></stop>
											<stop
												offset="90%"
												stop-opacity=".05"
											></stop>
											<stop
												offset="100%"
												stop-opacity="0"
											></stop>
										</radialGradient>
									</defs>
									<path
										d="M225 0v1000c60-8 138-14 198-17V0H225"
										fill="#b1060e"
									></path>
									<path
										d="M579 0v983c71 3 131 9 198 17V0H579"
										fill="#b1060e"
									></path>
									<path
										d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225"
										fill="url(#54260309-7575-46f4-a806-31673acf60fe-a)"
									></path>
									<path
										d="M225 0l349 983c76 3 136 9 203 17L423 0H225"
										fill="#e50914"
									></path>
								</svg>
							</a>
							<a
								className="helpcenter-logo"
								href="/en"
							>
								Help Center
							</a>
						</div>

						<div className="actions">
							<ul className="nav navbar-nav member-sign-in account-dropdown pull-right">
								<li className="dropdown">
									<a
										href="#"
										className="btn btn-med hc-profile-name dropdown-toggle"
										data-toggle="dropdown"
										role="button"
										aria-expanded="false"
									>
										Moh{' '}
									</a>
									<ul
										className="dropdown-menu"
										role="menu"
									>
										<li>
											<a
												href="https://netflix.com/YourAccount"
												className="your-account-link"
											>
												Account
											</a>
										</li>
										<li>
											<a
												href="https://netflix.com/SignOut?lnkctr=mL"
												className="signout-link"
											>
												Sign out of Netflix
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>

					<div className="logo-wrapper">
						<a
							className="helpcenter-logo"
							href="/en"
						>
							Help Center
						</a>
					</div>
				</div>
			</div>

			<div className="notifications">
				<div id="notification-holder">
					<div className="global-notifications"></div>
				</div>
			</div>

			<div id="personalization-placeholder"></div>

			<div className="global-content">
				<div className="container">
					<div className="breadcrumb-container multi-crumbs">
						<ul className="breadcrumb">
							<li>
								<a href="/en">
									<svg
										width="24px"
										height="24px"
										viewBox="0 0 24 24"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
									>
										<polygon points="16.3515625 11.1015625 16.3515625 12.25 9.2421875 12.25 12.4960938 15.53125 11.6757812 16.3515625 7 11.6757812 11.6757812 7 12.4960938 7.8203125 9.2421875 11.1015625"></polygon>
									</svg>
									Back to Help Home
								</a>
							</li>
						</ul>

						<div className="breadcrumb text-right">
							<button
								className="btn btn-med btn-lightgrey open-print-dialog"
								alt="Print"
							>
								<svg
									width="24px"
									height="24px"
									viewBox="0 0 24 24"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g
										stroke="none"
										stroke-width="1"
										fill="none"
										fill-rule="evenodd"
									>
										<path
											d="M19,8 L5,8 C3.34,8 2,9.34 2,11 L2,17 L6,17 L6,21 L18,21 L18,17 L22,17 L22,11 C22,9.34 20.66,8 19,8 Z M16,19 L8,19 L8,14 L16,14 L16,19 Z M19,12 C18.45,12 18,11.55 18,11 C18,10.45 18.45,10 19,10 C19.55,10 20,10.45 20,11 C20,11.55 19.55,12 19,12 Z M18,3 L6,3 L6,7 L18,7 L18,3 Z"
											id="Shape"
											fill="#221f1f"
											fill-rule="nonzero"
										></path>
									</g>
								</svg>
								<span className="hidden-mobile">Print</span>
							</button>
						</div>
					</div>

					<h1 className="kb-title">Privacy Statement</h1>

					<div className="pane-wrapper">
						<div className="left-pane">
							<section
								dir="LTR"
								className="kb-article kb-article-variant gradient"
								data-countries=",BD,TV,NP,TW,HK,PW,FM,NU,BN,NZ,SB,WF,BT,SG,ID,MH,WS,KH,KI,CC,MM,MN,MO,MP,MV,MY,GU,AS,TH,LA,NC,PF,TK,PG,TL,VN,NF,PH,TO,PK,PN,VU,LK,"
							>
								<div className="page-block">
									<div className="c-wrapper">
										<div>
											<p>
												This Privacy Statement explains our practices, including your choices,
												regarding the collection, use, and disclosure of certain information,
												including your personal information in connection with the Netflix
												service.
											</p>
											<h3>Contacting Us</h3>
											<p>
												If you have general questions about your account or how to contact
												customer service for assistance, please visit our online help center at{' '}
												<a href="https://help.netflix.com">help.netflix.com</a>. For questions
												specifically about this Privacy Statement, or our use of your personal
												information, cookies or similar technologies, please contact our Data
												Protection Officer/Privacy Office by email at{' '}
												<a href="mailto:privacy@netflix.com">privacy@netflix.com</a>.
											</p>
											<p>
												The data controller of your personal information is{' '}
												<a href="https://help.netflix.com/legal/corpinfo">Netflix Pte. Ltd</a>.
												Please note that if you contact us to assist you, for your safety and
												ours we may need to authenticate your identity before fulfilling your
												request.
											</p>
											<h3>Collection of Information</h3>
											<p>We receive and store information about you such as:</p>
											<ul>
												<li>
													<p>
														<strong>Information you provide to us:</strong> We collect
														information you provide to us which includes:
													</p>
													<ul>
														<li>
															<p>
																your name, email address, payment method(s), telephone
																number, and other identifiers you might use (such as an
																in-game name). We collect this information in a number
																of ways, including when you enter it while using our
																service, interact with our customer service, or
																participate in surveys or marketing promotions;
															</p>
														</li>
														<li>
															<p>
																information when you choose to provide ratings, taste
																preferences, account settings (including preferences set
																in the "Account" section of our website), or otherwise
																provide information to us through our service or
																elsewhere.
															</p>
														</li>
													</ul>
												</li>
												<li>
													<p>
														<strong>Information we collect automatically:</strong> We
														collect information about you and your use of our service, your
														interactions with us and our advertising, as well as information
														regarding your network, network devices, and your computer or
														other Netflix capable devices you might use to access our
														service (such as gaming systems, smart TVs, mobile devices, set
														top boxes, and other streaming media devices). This information
														includes:
													</p>
													<ul>
														<li>
															<p>
																your activity on the Netflix service, such as title
																selections, shows you have watched, search queries, and
																activity in Netflix games;{' '}
															</p>
														</li>
														<li>
															<p>
																your interactions with our emails and texts, and with
																our messages through push and online messaging channels;
															</p>
														</li>
														<li>
															<p>
																details of your interactions with our customer service,
																such as the date, time and reason for contacting us,
																transcripts of any chat conversations, and if you call
																us, your phone number and call recordings;
															</p>
														</li>
														<li>
															<p>
																device IDs or other unique identifiers, including for
																your network devices (such as your router), and devices
																that are Netflix capable on your network;{' '}
															</p>
														</li>
														<li>
															<p>
																resettable device identifiers (also known as advertising
																identifiers), such as those on mobile devices, tablets,
																and streaming media devices that include such
																identifiers (see the "Cookies and Internet Advertising"
																section below for more information);
															</p>
														</li>
														<li>
															<p>
																device and software characteristics (such as type and
																configuration), connection information including type
																(wifi, cellular), statistics on page views, referring
																source (for example, referral URLs), IP address (which
																can be used to tell us your general location, such as
																your city, state/province, and postal code), browser and
																standard web server log information;{' '}
															</p>
														</li>
														<li>
															<p>
																information collected via the use of cookies, web
																beacons and other technologies, including ad information
																(such as information on the availability and delivery of
																ads, the site URL, as well as the date and time). (See
																our "Cookies and Internet Advertising" section for more
																details.)
															</p>
														</li>
													</ul>
												</li>
												<li>
													<p>
														<strong>Information from partners: </strong>We collect
														information from other companies with whom you have a
														relationship (“Partners”). These Partners might include
														(depending on what services you use): your TV or internet
														service provider, or other streaming media device providers who
														make our service available on their device; mobile phone
														carriers or other companies who provide services to you and
														collect payment for the Netflix service for distribution to us
														or provide pre-paid promotions for the Netflix service; and
														voice assistant platform providers who enable interaction with
														our service through voice commands. The information Partners
														provide us varies depending on the nature of the Partner
														services, and may include:{' '}
													</p>
													<ul>
														<li>
															<p>
																search queries and commands applicable to Netflix that
																you make through Partner devices or voice assistant
																platforms;{' '}
															</p>
														</li>
														<li>
															<p>
																service activation information such as your email
																address or other contact information;{' '}
															</p>
														</li>
														<li>
															<p>
																IP addresses, device IDs or other unique identifiers, as
																well as associated pre-paid promotion, billing and user
																interface information, that support user authentication,
																the Netflix service registration experience, Partner
																payment processing, and the presentation of Netflix
																content to you through portions of the Partner user
																interface.{' '}
															</p>
														</li>
													</ul>
												</li>
												<li>
													<p>
														<strong>Information from other sources:</strong> We also obtain
														information from other sources. We protect this information
														according to the practices described in this Privacy Statement,
														plus any additional restrictions imposed by the source of the
														information. These sources vary over time, but could include:
													</p>
													<ul>
														<li>
															<p>
																service providers that help us determine a location
																based on your IP address in order to customize our
																service and for other uses consistent with this Privacy
																Statement;
															</p>
														</li>
														<li>
															<p>
																security service providers that provide us with
																information to secure our systems, prevent fraud and
																help us protect the security of Netflix accounts;
															</p>
														</li>
														<li>
															<p>
																payment service providers that provide us with payment
																or balance information, or updates to that information,
																based on their relationship with you;
															</p>
														</li>
														<li>
															<p>
																publicly-available sources such as publicly available
																posts on social media platforms and information
																available through public databases associating IP
																addresses with internet service providers (ISPs);
															</p>
														</li>
														<li>
															<p>
																third party services that you are signed into and that
																provide functions within Netflix games, such as
																multiplayer gameplay, leaderboards, and game saving
																options.
															</p>
														</li>
													</ul>
												</li>
											</ul>
											<h3>Use of Information</h3>
											<p>
												We use information to provide, analyze, administer, enhance and
												personalize our services and marketing efforts, to process your
												registration, your orders and your payments, and to communicate with you
												on these and other topics. For example, we use such information to:{' '}
											</p>
											<ul>
												<li>
													<p>
														provide you with customized and personalized viewing
														recommendations for movies, TV shows, and games we think will be
														of interest to you (collectively “content”);
													</p>
												</li>
												<li>
													<p>
														determine your general geographic location (such as your city,
														state/province, and postal code);
													</p>
												</li>
												<li>
													<p>provide localized content;</p>
												</li>
												<li>
													<p>
														determine your ISP to support network troubleshooting for you
														(we also use aggregated ISP information for operational and
														business purposes);
													</p>
												</li>
												<li>
													<p>
														help us quickly and efficiently respond to inquiries and
														requests;{' '}
													</p>
												</li>
												<li>
													<p>
														coordinate with Partners on making the Netflix service available
														to members and providing information to non members about the
														availability of the Netflix service, based on the specific
														relationship you have with the Partner;{' '}
													</p>
												</li>
												<li>
													<p>
														secure our systems, prevent fraud and help us protect the
														security of Netflix accounts;{' '}
													</p>
												</li>
												<li>
													<p>
														prevent, detect and investigate potentially prohibited or
														illegal activities, including fraud, and to enforce our terms
														(such as determining whether and for which Netflix signup offers
														you are eligible and determining whether a particular device is
														permitted to use the account consistent with our Terms of Use);
													</p>
												</li>
												<li>
													<p>
														analyze and understand our audience, improve our service
														(including our user interface experiences and service
														performance) and optimize content selection, recommendation
														algorithms and delivery;
													</p>
												</li>
												<li>
													<p>
														communicate with you concerning our service so that we can send
														you news about Netflix, details about new features and content
														available on Netflix, special offers, promotional announcements,
														consumer surveys, and to assist you with operational requests
														such as password reset requests. These communications may be by
														various methods, such as email, push notifications, text
														message, online messaging channels, and matched identifier
														communications (described below). Please see the "Your Choices"
														section of this Privacy Statement to learn how to set or change
														your communications preferences.
													</p>
												</li>
											</ul>
											<p>
												Our content recommendations system strives to predict what you will be
												in the mood to watch when you log in. However, our content
												recommendations system does not infer or attach socio-demographic
												information (like gender or race) to you. We have a Help article that
												explains how our content recommendations system works - spoilers: the
												biggest driver of these recommendations is what you actually choose to
												watch through our service. You can read the article at{' '}
												<a href="http://netflix.com/recommendations">
													netflix.com/recommendations
												</a>
												.
											</p>
											<h3>Disclosure of Information</h3>
											<p>
												We disclose your information for certain purposes and to third parties,
												as described below:
											</p>
											<ul>
												<li>
													<p>
														<strong>The Netflix family of companies:</strong> We share your
														information among the Netflix family of companies (
														<a href="https://help.netflix.com/legal/corpinfo">
															help.netflix.com/legal/corpinfo
														</a>
														) as needed for: providing you with access to our services;
														providing customer support; making decisions about service
														improvements; content development; and for other purposes
														described in the Use of Information section of this Privacy
														Statement.
													</p>
												</li>
												<li>
													<p>
														<strong>Service Providers:</strong> We use other companies,
														agents or contractors ("Service Providers") to perform services
														on our behalf or to assist us with the provision of services to
														you. For example, we engage Service Providers to provide
														marketing, advertising, communications, security, infrastructure
														and IT services, to customize, personalize and optimize our
														service, to provide bank account or balance information, to
														process credit card transactions or other payment methods, to
														provide customer service, to analyze and enhance information
														(including information about users' interactions with our
														service), and to process and administer consumer surveys. In the
														course of providing such services, these Service Providers may
														have access to your personal or other information. We do not
														authorize them to use or disclose your personal information
														except in connection with providing their services (which
														includes maintaining and improving their services).{' '}
													</p>
												</li>
												<li>
													<p>
														<strong>Partners:</strong> As described above, you may have a
														relationship with one or more of our Partners, in which case we
														may share certain information with them in order to coordinate
														with them on providing the Netflix service to members and
														providing information about the availability of the Netflix
														service. For example, depending on what Partner services you
														use, we may share information:
													</p>
													<ul>
														<li>
															<p>
																in order to facilitate Partner pre-paid promotions or
																collection of payment for the Netflix service for
																distribution to us;{' '}
															</p>
														</li>
														<li>
															<p>
																with Partners who operate voice assistant platforms that
																allow you to interact with our service using voice
																commands;
															</p>
														</li>
														<li>
															<p>
																so that content and features available in the Netflix
																service can be suggested to you in the Partner’s user
																interface. For members, these suggestions are part of
																the Netflix service and may include customized and
																personalized viewing recommendations.
															</p>
														</li>
													</ul>
												</li>
												<li>
													<p>
														<strong>Promotional offers:</strong> We may offer joint
														promotions or programs that, in order for your participation,
														will require us to share your information with third parties. In
														fulfilling these types of promotions, we may share your name and
														other information in connection with fulfilling the incentive.
														Please note that these third parties are responsible for their
														own privacy practices.
													</p>
												</li>
												<li>
													<p>
														<strong>Protection of Netflix and others:</strong> Netflix and
														its Service Providers may disclose and otherwise use your
														personal and other information where we or they reasonably
														believe such disclosure is needed to (a) satisfy any applicable
														law, regulation, legal process, or governmental request, (b)
														enforce applicable terms of use, including investigation of
														potential violations thereof, (c) detect, prevent, or otherwise
														address illegal or suspected illegal activities (including
														payment fraud), security or technical issues, or (d) protect
														against harm to the rights, property or safety of Netflix, its
														users or the public, as required or permitted by law.
													</p>
												</li>
												<li>
													<p>
														<strong>Business transfers:</strong> In connection with any
														reorganization, restructuring, merger or sale, or other transfer
														of assets, we will transfer information, including personal
														information, provided that the receiving party agrees to respect
														your personal information in a manner that is consistent with
														our Privacy Statement.
													</p>
												</li>
											</ul>
											<p>
												Whenever in the course of sharing information we transfer personal
												information to other countries, we will ensure that the information is
												transferred in accordance with this Privacy Statement and as permitted
												by the applicable laws on data protection. You can find out more about
												how we disclose and transfer your personal information internationally
												at this link:{' '}
												<a href="http://help.netflix.com/legal/personal-information-international-transfers">
													help.netflix.com/legal/personal-information-international-transfers
												</a>
												.
											</p>
											<p>
												You may also choose to disclose your information in the following ways:
											</p>
											<ul>
												<li>
													<p>
														certain portions of our service may contain a tool which gives
														you the option to share information by email, text message and
														social or other sharing applications, using the clients and
														applications on your smart device;
													</p>
												</li>
												<li>
													<p>
														social plugins and similar technologies allow you to share
														information; and
													</p>
												</li>
												<li>
													<p>
														through Netflix game features, such as multiplayer options and
														leaderboards.
													</p>
												</li>
											</ul>
											<p>
												Social plugins and social applications are operated by the social
												networks themselves, and are subject to their terms of use and privacy
												policies. Similarly, some of the Netflix game features mentioned above
												(such as multiplayer gameplay, leaderboards, and game saving options)
												may require use of a third-party service, which is subject to that
												service’s terms of use and privacy policy.
											</p>
											<h3>Access to Account and Profiles</h3>
											<ul>
												<li>
													<p>
														<strong>“Remember me” function:</strong> For ease of access to
														your account, you can use the "Remember me on this device"
														function when you log in to the website. This function uses
														technology that enables us to provide direct account access and
														to help administer the Netflix service without requiring reentry
														of any password or other user identification when your browser
														revisits the service.&nbsp;
													</p>
												</li>
												<li>
													<p>
														<strong>Giving others access to your account:</strong> If you
														share or otherwise allow others to have access to your account,
														they will be able to see shows you have watched, ratings,
														account information (including your email address or other
														information in the "Account" area of our website), and game
														related information (such as your in-game name and saved game
														progress). This remains true even if you use our profiles
														feature. You might have the option to use seamless account login
														through the Netflix mobile app, which enables login to the
														Netflix app on smart TVs, set top boxes, and other streaming
														media devices on the network to which you are connected. If you
														use that feature, those devices will remain signed into your
														account unless you later log out of those devices.
													</p>
												</li>
												<li>
													<p>
														<strong>Profiles:</strong> Profiles allow users to have a
														distinct, personalized Netflix experience, built around the
														movies and shows of interest to them, as well as separate watch
														histories. Please note that profiles are available to everyone
														who uses your Netflix account, so that anyone with access to
														your Netflix account can navigate to and use, edit or delete
														profiles. You should explain this to others with access to your
														account, and if you do not wish them to use or change your
														profile, be sure to let them know. Profile users may be offered
														the opportunity to add an email address, phone number or other
														information to the profile and will be provided with notice of
														collection and use at the time such information is requested
														(the Profile Privacy Notice applies (
														<a href="https://help.netflix.com/legal/profileprivacy">
															help.netflix.com/legal/profileprivacy
														</a>
														)). We have various parental controls available, you can learn
														more by reading our Help article located at{' '}
														<a href="https://help.netflix.com/node/264">
															help.netflix.com/node/264
														</a>
														.{' '}
													</p>
												</li>
												<li>
													<p>
														<strong>Profile Transfers:</strong> The profile transfer feature
														on your account allows you and users with access to your account
														to transfer an eligible profile from your account to a separate
														account (including information such as viewing history and
														recommendations). You can change the setting for this feature in
														the Settings section of your Account page. You can learn more by
														reading our Help article located at{' '}
														<a href="https://help.netflix.com/en/node/122698">
															help.netflix.com/node/122698
														</a>
														.
													</p>
												</li>
												<li>
													<p>
														<strong>Removing device access to your Netflix account:</strong>{' '}
														To remove access to your Netflix account from your devices,
														visit the "Account" section of our website, choose "Sign out of
														all devices," and follow the instructions to deactivate your
														devices (note, deactivation may not occur immediately). Where
														possible, users of public or shared devices should log out at
														the completion of each visit. If you sell or return a computer
														or Netflix ready device, you should log out and deactivate the
														device before doing so. If you do not maintain the security of
														your password or device, or fail to log out or deactivate your
														device, subsequent users may be able to access your account,
														including your personal information.
													</p>
												</li>
											</ul>
											<h3>Your Choices</h3>
											<p>
												<strong>Email and Text Messages.</strong> If you no longer want to
												receive certain communications from us via email or text message, simply
												access the "Communications Settings" option in the "Account" section of
												our website and uncheck those items to unsubscribe. Alternatively, click
												the "unsubscribe" link in the email or reply STOP (or as otherwise
												instructed) to the text message. Please note that you cannot unsubscribe
												from service-related correspondence from us, such as messages relating
												to your account transactions.
											</p>
											<p>
												<strong>Push Notifications.</strong> You can choose to receive mobile
												push notifications from Netflix. On some device operating systems, you
												will be automatically enrolled in the notifications. If you subsequently
												decide you no longer wish to receive these notifications, you can use
												your mobile device's settings functionality to turn them off. We also
												offer push notifications on certain web browsers. If you agree to
												receive those notifications and subsequently decide you no longer wish
												to receive these notifications, you can use your browser’s settings to
												turn them off.{' '}
											</p>
											<p>
												<strong>Matched Identifier Communications</strong> from Netflix. Some
												third party sites and apps allow us to reach our users with online
												promotions about our titles and services by sending a privacy protective
												identifier to the third party. A privacy protective identifier means we
												convert the original information (such as an email address or phone
												number) into a value to keep the original information from being
												revealed. The third party compares the privacy protective identifier to
												identifiers in its database and there will be a match only if you have
												used the same identifier (such as an email address) with Netflix and the
												third party. If there is a match, Netflix can then choose whether or not
												to send a given promotional communication to you on that third party
												site or app, and can optimize and better measure the effectiveness of
												online advertising. You can opt out in the “Marketing Communications”
												section of the “Account” section of our website.
											</p>
											<p>
												<strong>Behavioral Advertising.</strong>&nbsp;Behavioral advertisements
												are those that are selected based on your use and/or interactions with
												various unaffiliated third party apps or websites across the Internet
												(behavioral advertising). Netflix can advertise its services using
												behavioral advertising, and if you are using a browser, then certain
												cookies and web beacons can be used to collect information to help
												determine your likely interests. If you are using a mobile device,
												tablet, or streaming media device that includes a resettable device
												identifier, then that identifier can be used to help determine your
												likely interests. For your choices about behavioral ads from Netflix,
												please see the "Cookies and Internet Advertising" section (below).
											</p>
											<h3>
												<span id="cookies">Cookies and Internet Advertising</span>
											</h3>
											<p>
												We and our Service Providers use cookies and other technologies (such as
												web beacons), as well as resettable device identifiers, for various
												reasons. We want you to be informed about our use of these technologies,
												so this section explains the types of technologies we use, what they do,
												and your choices regarding their use.&nbsp;
											</p>
											<p>
												<strong>
													Cookies and similar technologies, web beacons, and resettable device
													identifiers
												</strong>
											</p>
											<p>
												Cookies are small information files that are commonly stored on your
												device when you browse and use websites and online services. We use
												other technologies such as browser storage and plugins (e.g., HTML5,
												IndexedDB, and WebSQL). Like cookies, these other technologies may store
												small amounts of information on your device. Web beacons (also known as
												clear gifs or pixel tags) often work in conjunction with cookies. In
												many cases, declining cookies will impair the effectiveness of web
												beacons associated with those cookies.{' '}
											</p>
											<p>
												If you use the Netflix app on a mobile device, tablet, or streaming
												media device, we may collect a resettable device identifier from your
												device. Resettable device identifiers (also known as advertising
												identifiers) are similar to cookies and are found on many mobile devices
												and tablets (for example, the "Identifier for Advertisers" (or IDFA) on
												Apple iOS devices and the "Google Advertising ID" on Android devices),
												and certain streaming media devices. Like cookies, resettable device
												identifiers are used to make online advertising more relevant and for
												analytics and optimization purposes.
											</p>
											<p>
												<strong>Why does Netflix use these technologies?</strong>
											</p>
											<p>
												We use these types of technologies for various reasons, like making it
												easy to access our services by remembering you when you return; to
												provide, analyze, understand and enhance the use of our services; to
												enforce our terms, prevent fraud; to improve site performance, monitor
												visitor traffic and actions on our site; and to deliver and tailor our
												marketing or advertising, and to understand interactions with our
												emails, marketing, and online ads on third party sites.
											</p>
											<p>
												To help you better understand how we use cookies and resettable device
												identifiers, please see the information below:
											</p>
											<ul>
												<li>
													<p>
														<strong>Essential cookies:</strong> These cookies are strictly
														necessary to provide our website or online service. For example,
														we and our Service Providers may use these cookies to
														authenticate and identify our members when they use our websites
														and applications so we can provide our service to them. They
														also help us to enforce our Terms of Use, prevent fraud and
														maintain the security of our service.&nbsp;
													</p>
												</li>
												<li>
													<p>
														<strong>Performance and functionality cookies:</strong> These
														cookies help us to customize and enhance your online experience
														with Netflix. For example, they help us to remember your
														preferences and prevent you from needing to re-enter information
														you previously provided (for example, during member sign up). We
														also use these cookies to collect information (such as popular
														pages, conversion rates, viewing patterns, click-through and
														other information) about our visitors' use of the Netflix
														service so that we can enhance and personalize our website and
														service and conduct market research. Deletion of these types of
														cookies may result in limited functionality of our
														service.&nbsp;
													</p>
												</li>
												<li>
													<p>
														<strong>
															Advertising cookies and resettable device identifiers:
														</strong>{' '}
														These cookies and resettable device identifiers use information
														about your use of this and other websites and apps, your
														response to ads and emails, and to deliver ads that are more
														relevant to you and for analytics and optimization
														purposes.&nbsp;
													</p>
												</li>
											</ul>
											<p>
												When we advertise our services on other websites or apps, some of the
												websites and apps where we advertise, as well as advertising technology
												companies that we use to purchase, deliver, optimize, and/or measure our
												advertisements (collectively “Advertising Partners”), may receive
												information from us as part of our campaign targeting, measurement, and
												optimization (e.g., steps completed in sign-up and site visit or app
												open/install information). Common uses of this type of information are
												to judge the effectiveness of and optimize ad campaigns, by allowing
												Advertising Partners to see when someone who saw an ad later signed up
												for our service. Another common use is to make sure we do not serve ads
												trying to get individuals to sign up for the Netflix service if they are
												already a Netflix user. Netflix uses contractual and technical measures
												designed to prevent Advertising Partners from accessing information
												regarding specific title selections you make, URLs you land on, or shows
												you have watched on our service. We do not share information about title
												selections or your shows you have watched on our service.
											</p>
											<h3>
												<strong>How can I exercise choice regarding these technologies?</strong>
											</h3>
											<ul>
												<li>
													<p>
														<span id="cookie-preferences">
															To exercise choice regarding cookies{' '}
														</span>
													</p>
													<p>
														For more information about cookies set through our website, as
														well as other types of online tracking (including the collection
														of information by third parties about your online activities
														over time and across third party websites or online services for
														online behavioral advertising), and to exercise choices
														regarding them, <a href="#cookie-preferences">click here</a>. At
														this time, we do not respond to web browser "do not track"
														signals.{' '}
													</p>
												</li>
												<li>
													<p>
														<strong>
															To exercise choice regarding resettable device identifiers
														</strong>
													</p>
													<p>
														To opt out of behavioral ads from Netflix in connection with a
														resettable device identifier on a mobile device, tablet, or
														streaming media devices, please configure the appropriate
														setting on your device (usually found under "privacy" or "ads"
														in your device's settings). You may still see Netflix ads on
														your device, but they will not be selected based on your likely
														interests.{' '}
													</p>
												</li>
												<li>
													<p>
														<strong>To exercise choice regarding other technologies</strong>
													</p>
													<p>
														There are a number of ways to exercise choice regarding
														technologies that are similar to cookies, such as browser
														storage and plugins (e.g., HTML5, IndexedDB, and WebSQL). For
														example, many popular browsers provide the ability to clear
														browser storage, commonly in the settings or preferences area;
														see your browser's help function or support area to learn more.
														Other technologies, such as Silverlight storage, may be cleared
														from within the application.{' '}
													</p>
												</li>
											</ul>
											<h3>
												<strong>Your Information and Rights</strong>
											</h3>
											<p>
												You can request access to your personal information, or correct or
												update out-of-date or inaccurate personal information we hold about you.
												You may also request that we delete personal information that we hold
												about you.
											</p>
											<p>
												When you visit the "Account" portion of our website, you have the
												ability to access and update a broad range of information about your
												account, including your contact information, your Netflix payment
												information, and various related information about your account (such as
												the content you have viewed and rated). You must be signed in to access
												the "Account" section.{' '}
											</p>
											<p>
												If you are the account owner, to download a copy of your personal
												information go to:{' '}
												<a
													target="_blank"
													href="https://www.netflix.com/account/getmyinfo"
												>
													netflix.com/account/getmyinfo
												</a>{' '}
												(you must be signed in to access the "Account" section), and follow the
												instructions.{' '}
											</p>
											<p>
												For other requests, or if you have a question regarding our privacy
												practices, please contact our Data Protection Officer/Privacy Office at{' '}
												<a href="mailto:privacy@netflix.com">privacy@netflix.com</a>. For more
												information about how to access your information, including our
												verification process, please reference this help article:{' '}
												<a href="https://help.netflix.com/en/node/100624">
													help.netflix.com/node/100624
												</a>
												. We respond to all requests we receive from individuals wishing to
												exercise their data protection rights in accordance with applicable data
												protection laws. Please also see the "Your Choices" section of this
												Privacy Statement for additional choices regarding your information.
											</p>
											<p>
												We may reject requests that are unreasonable or not required by law,
												including those that would be extremely impractical, could require
												disproportionate technical effort, or could expose us to operational
												risks such as enabling fraud.{' '}
											</p>
											<p>
												Retention of information: We may retain information as required or
												permitted by applicable laws and regulations, including to honor your
												choices, for our billing or records purposes and to fulfill the purposes
												described in this Privacy Statement. Specifically, we retain information
												for our legitimate interests and essential business purposes, such as
												operating, maintaining and improving our services; complying with our
												legal obligations; and exercising our legal rights and remedies,
												including enforcing our terms of use. Our retention of information is
												based on many factors such as your relationship with Netflix (for
												example, are you a Netflix current member); the nature of the
												information; compliance with our legal obligations; defending or
												resolving actual or anticipated legal claims. We take reasonable
												measures to destroy or de-identify personal information in a secure
												manner when it is no longer required. For information about deletion,
												removal and retention of information, please reference this help
												article:{' '}
												<a href="http://help.netflix.com/node/100625">
													help.netflix.com/node/100625
												</a>
												.
											</p>
											<p></p>
											<h3>Security</h3>
											<p>
												We use reasonable administrative, logical, physical and managerial
												measures to safeguard your personal information against loss, theft and
												unauthorized access, use and modification. These measures are designed
												to provide a level of security appropriate to the risks of processing
												your personal information.
											</p>
											<h3>Other Websites, Platforms and Applications</h3>
											<p>
												The Netflix service may be provided through and/or utilize features
												(such as the display of social media content, or the provision of voice
												controls) operated by third party platforms, or contain links to sites
												operated by third parties whose policies regarding the handling of
												information may differ from ours. For example, you may be able to access
												the Netflix service through platforms such as gaming systems, smart TVs,
												mobile devices, set top boxes and a number of other Internet connected
												devices. These websites and platforms have separate and independent
												privacy or data policies, privacy statements, notices and terms of use,
												which we recommend you read carefully. In addition, you may encounter
												third party applications that interact with the Netflix service.
											</p>
											<h3>Children</h3>
											<p>
												You must be at least 18 years of age or older to subscribe to the
												Netflix service. Minors may only use the service with the involvement,
												supervision, and approval of a parent or legal guardian.
											</p>
											<h3>Changes to This Privacy Statement</h3>
											<p>
												We will update this Privacy Statement from time to time in response to
												changing legal, regulatory or operational requirements. We will provide
												notice of any such changes (including when they will take effect) in
												accordance with law. Your continued use of the Netflix service after any
												such updates take effect will constitute acknowledgement and (as
												applicable) acceptance of those changes. If you do not wish to
												acknowledge or accept any updates to this Privacy Statement, you may
												cancel your use of the Netflix service. To see when this Privacy
												Statement was last updated, please see the "Last Updated" section below.
											</p>
											<p>
												To see the prior version of this document, please go to{' '}
												<a href="http://netflix.com/privacyupdates">
													netflix.com/privacyupdates
												</a>
												.
											</p>
											<p></p>
											<p></p>
											<p></p>
											<p></p>
											<p></p>
											<p></p>
										</div>
									</div>
								</div>

								<p>
									<strong>Last Updated:</strong> November 1, 2022
								</p>
							</section>
						</div>

						<div className="right-pane">
							<div className="wrapper"></div>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-push"></div>
		</div>
	);
}
export default Privacy;
