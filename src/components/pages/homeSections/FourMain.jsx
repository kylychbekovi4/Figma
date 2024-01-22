import React from 'react';
import scss from '../homeSections/FourMain.module.scss';
import rightSvgg from '../../../assets/icons/arrow-right.svg';
import right_iconn from '../../../assets/icons/arrow-small-right.svg';

const FourMain = () => {
	return (
		<>
			<section>
				<div className="container">
					<div className={scss.parrentt}>
						<div>
							<p className={scss.how_we_build}>HOW WE BUILD</p>
							<div className={scss.two_p_img}>
								<p className={scss.with_hydra_vr}>WITH HYDRA VR?</p>
								<img src={rightSvgg} alt="#" />
							</div>
						</div>
						<div className={scss.pp_texts}>
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

					{/* //!  */}
					<div className={scss.m_top}>
						<div className={scss.san}>
							<div>01</div>
							<div>02</div>
							<div>03</div>
							<div>04</div>
						</div>


						{/* //! last */}
						<div className={scss.four_Main_parent}>
							<div className={scss.flex}>
								<img src={right_iconn} alt="" />
								<div>
									<p>3D Conception </p>
									<p>& Design</p>
								</div>
							</div>
							<div className={scss.flex}>
								<img src={right_iconn} alt="" />
								<div>
									<p>3D Conception </p>
									<p>& Design</p>
								</div>
							</div>
							<div className={scss.flex}>
								<img src={right_iconn} alt="" />
								<div>
									<p>3D Conception </p>
									<p>& Design</p>
								</div>
							</div>
							<div className={scss.flex}>
								<img src={right_iconn} alt="" />
								<div>
									<p>3D Conception </p>
									<p>& Design</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FourMain;
