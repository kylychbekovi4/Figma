import React from 'react';
import scss from './Footer.module.scss';
import logo from '../../../assets/images/Vector.png';
import vector from '../../../assets/images/Vector 20.svg';
import facebook from '../../../assets/images/facebook.png';
import twitter from '../../../assets/images/twitter.png';
import linkedin from '../../../assets/images/linkedin.png';
import youtube from '../../../assets/images/youtube.png';
import insstagram from '../../../assets/images/instagram.png';
import pinterest from '../../../assets/images/pinterest.png';
import ButtonBG from '../../ui/buttons/ButtonBG';
import vector_17 from '../../../assets/images/Vector 17.png'

const Footer = () => {
	return (
		<>
			<section>
				<div className="container">
					<div className={scss.footer_parent}>
						<div className={scss.parrent}>
							<img src={logo} alt="" />
						</div>
						<img src={vector} alt="" />
						<div className={scss.footer_p}>
							<p>ABOUT</p>
							<p>SERVICES</p>
							<p>TECHNOLOGIES</p>
							<p>HOW TO</p>
							<p>JOIN HYDRA</p>
						</div>
						<img src={vector} alt="" />
						<div className={scss.footer_p}>
							<p>F.A.Q</p>
							<p>SITEMAP</p>
							<p>CONDITIONS</p>
							<p>LICENSES</p>
						</div>
						<img src={vector} alt="" />

						<div className={scss.footer_third}>
							<p>SOCIALIZE WITH HYDRA</p>
							<div className={scss.footer_img}>
							<img src={facebook} alt="" />
							<img src={twitter} alt="" />
							<img src={linkedin} alt="" />
							<img src={youtube} alt="" />
							<img src={insstagram} alt="" />
							<img src={pinterest} alt="" />

							</div>
							<ButtonBG>BUILD YOUR WORLD</ButtonBG>
						</div>
					</div>
					<div className={scss.lasst}>
						<img src={vector_17} alt="" />
						<p className={scss.p_last}>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </p>
					</div>
				</div>
			</section>
		</>
	);
};
export default Footer;
