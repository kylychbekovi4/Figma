import React from 'react';
import scss from '../homeSections/FirstMain.module.scss';
import firstLogo from '../../../assets/images/girl-photo.png';
import right_icon from '../../../assets/icons/arrow-small-right.svg';
import place_icon from '../../../assets/icons/location.svg';
import phone_icon from '../../../assets/icons/phone-call.svg';
import mail from '../../../assets/icons/mail.svg';
import ButtonBG from '../../ui/buttons/ButtonBG';

const FirstMain = () => {
	return (
		<section className={scss.DiveInto}>
			<div className="container">
				<div className={scss.parent_class}>
					<div className={scss.text_first}>
						<div className={scss.mediaa}>
							<p className={scss.h111}>
								<span className={scss.span_text}>Dive</span> Into The Depths
							</p>
							<p className={scss.h112}>
								Of <span className={scss.span_text2}>Virtual Reality</span>
							</p>
						</div>
						<div>
							<p className={scss.p1_text}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore nisl tincidunt
								eget. Lectus mauris eros in vitae .
							</p>
						</div>
						<div className={scss.button_right}>
							<div className={scss.button_fr}>
								<ButtonBG className={scss.button1}> BUILD YOUR WORLD</ButtonBG>
							</div>
							<img className={scss.right_logo} src={right_icon} alt="#" />
						</div>
					</div>
					{/* //! */}
					<div>
						<img className={scss.firstLogo} src={firstLogo} alt="#" />
					</div>
				</div>
				{/*  */}
				<div className={scss.Rectangle}>
					<div className={scss.locations}>
						<img className={scss.f_lokation} src={place_icon} alt="#" />
						<h2>Pay Us a Visit</h2>
						<p>Union St, Seattle, WA 98101, United States</p>
					</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1"
							height="117"
							viewBox="0 0 1 117"
							fill="none"
						>
							<path d="M0.5 116.5V0" stroke="#C0B7E8" stroke-opacity="0.33" />
						</svg>
					

					<div className={scss.text2}>
						<div>
							<img src={phone_icon} alt="#" />
						</div>
						<h2>Give Us a Call</h2>
						<p>(110) 1111-1010</p>
					</div>

					<div className={scss.text3}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1"
							height="117"
							viewBox="0 0 1 117"
							fill="none"
						>
							<path d="M0.5 116.5V0" stroke="#C0B7E8" stroke-opacity="0.33" />
						</svg>
					</div>
					<div lassName={scss.locations}>
						<img src={mail} alt="#" />
						<h2>Send Us a Message</h2>
						<p>Contact@HydraVTech.com</p>
					</div>
				</div>
			</div>

			{/* //! */}
		</section>
	);
};

export default FirstMain;
