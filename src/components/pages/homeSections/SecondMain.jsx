import React from 'react';
import scss from '../homeSections/SecondMain.module.scss';
import rightSvg from '../../../assets/icons/arrow-right.svg';
import imagesMan from '../../../assets/images/man-photo.png';
import ButtonBG from '../../ui/buttons/ButtonBG';

const SecondMain = () => {
	return (
		<>
			<section>
				<div className="container">
					<div className={scss.secondMainParent}>
						<div className={scss.secondMain_h1text}>
							<p className={scss.first_ptext}>INTRODUCTION</p>
							<p>TO HYDRA VR</p>
						</div>
						<div className={scss.imm}>
							<img className={scss.img_right} src={rightSvg} alt="#" />
						</div>
						<div className={scss.secondMain_ptext}>
							<p>
								Vitae sapien pellentesque habitant morbi tristique senectus et
								netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
								lectus. Mi sit amet mauris commodo quis imperdiet massa
								tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
								lectus sit amet est placerat in. Lectus magna fringilla urna
								porttitor rhoncus vitae.
							</p>
						</div>
					</div>
					{/*  */}
					<div className={scss.sanjar}>
						<div className={scss.father_second_secondMain}>
							<div className={scss.mann}>
								<img src={imagesMan} alt="" />
							</div>

							<div className={scss.father_second_secondMainm}>
								<div className={scss.h22h2}>
									<p className={scss.about}>ABOUT</p>
									<p className={scss.hydra_vr}>HYDRA VR</p>
								</div>
								<div className={scss.p_texts}>
									<p className={scss.p_textt}>
										Eget mi proin sed libero enim sed faucibus turpis. Nisl
										rhoncus mattis rhoncus urna neque viverra justo. Vivamus at
										augue eget arcu dictum. Ultrices gravida dictum fusce ut
										placerat orci. Aenean et tortor at risus viverra adipiscing
										at in. Mattis aliquam faucibus purus in massa. Est placerat
										in egestas erat imperdiet sed. Consequat semper viverra nam
										libero justo laoreet sit amet. Aliquam etiam erat velit
										scelerisque in dictum non consectetur a. Laoreet sit amet
										cursus sit amet. Vel eros donec ac odio tempor orci dapibus.
										Sem nulla pha retra diam sit amet nisl suscipit adipiscing
										bibendum. Leo a diam sollicitudi n tempor.
									</p>
								</div>
								<div className={scss.button_lets}>
									<ButtonBG>LET’S GET IN TOUCH</ButtonBG>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SecondMain;
