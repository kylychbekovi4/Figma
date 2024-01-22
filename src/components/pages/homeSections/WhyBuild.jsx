import React from 'react';
import scss from '../Style.module.scss';
import { data } from '../../../data/whyBuildData';
import ButtonBG from '../../ui/buttons/ButtonBG';
import rightSvg from '../../../assets/icons/arrow-right.svg';
import arrow_smaill from '../../../assets/icons/arrow-small-right.svg';

const WhyBuild = () => {
	return (
		<>
			<section className={scss.why_build}>
				<div className="container">
					<div className={scss.display}>
						<div>
							<p className={scss.why_build}>WHY BUILD</p>
							<div className={scss.p_img}>
								<p className={scss.with_hydra}>TO HYDRA VR</p>
								<img className={scss.m_img}  src={rightSvg} alt="" />
							</div>
						</div>
						<div>
							<p className={scss.p_ozan}>
								Vitae sapien pellentesque habitant morbi tristique senectus et
								netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
								lectus. Mi sit amet mauris commodo quis imperdiet massa
								tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
								lectus sit amet est placerat in. Lectus magna fringilla urna
								porttitor rhoncus vitae.
							</p>
						</div>
					</div>


					<div className={scss.cards}>
						{data.map((item, index) => (
							<div key={index} className={scss.card}>
								<img src={item.img} alt={item.title} />
								<h1 className={scss.title}>{item.title}</h1>
								<hr className={scss.hr_c}></hr >
								<p className={scss.text}>{item.text}</p>
								<div className={scss.button_ago}>
									<ButtonBG>TRY IT NOW</ButtonBG>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};
export default WhyBuild;
