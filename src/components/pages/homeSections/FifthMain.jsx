import React from 'react';
import scss from '../homeSections/FifthMain.module.scss';
import ButtonBG from '../../ui/buttons/ButtonBG';

const FifthMain = () => {
	return (
		<>
			<section>
				<div className="container">
					<div className={scss.sectionSix}>
						<div className={scss.sectionSixHeader}>
							<p>JOIN HYDRA</p>
							<svg className={scss.svgg}
								xmlns="http://www.w3.org/2000/svg"
								width="414"
								height="2"
								viewBox="0 0 414 2"
								fill="none"
							>
								<path d="M0 1H414" stroke="url(#paint0_linear_13_46)" />
								<defs>
									<linearGradient
										id="paint0_linear_13_46"
										x1="414"
										y1="1.00238"
										x2="0"
										y2="1"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#343045" />
										<stop offset="0.348958" stop-color="#C0B7E8" />
										<stop offset="0.6875" stop-color="#8176AF" />
										<stop offset="1" stop-color="#343045" />
									</linearGradient>
								</defs>
							</svg>
							<p>Let’s Build Your VR Experience</p>
						</div>

						<div className={scss.inputs}>
							<div className={scss.title}>
								<input placeholder="First Name" type="text" />
								<input placeholder="Last Name" type="text" />
							</div>
							<div className={scss.title}>
								<input placeholder="Email" type="text" />
								<input placeholder="Phone number" type="text" />
							</div>
						</div>

						<div className={scss.widget}>
							<input
								className={scss.inputFive}
								placeholder="Subjet"
								type="text"
							/>
							<input
								className={scss.inputSix}
								type="text"
								placeholder="Tell Us Something"
							/>
						</div>
            <div className={scss.button_last}>
              <ButtonBG>SEND TO HYDRA</ButtonBG>
            </div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FifthMain;
