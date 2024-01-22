import React from 'react';
import scss from '../homeSections/ThirdMain.module.scss';
import lastPhoto from '../../../assets/images/last-photo.png';
import unreal from '../../../assets/images/hydra-tech-1.png';
import unity from '../../../assets/images/hydra-tech-2.png';
import oculus from '../../../assets/images/hydra-tech-3.png';
import vive from '../../../assets/images/hydra-tech-4.png';

const ThirdMain = () => {
	return (
		<>
			<section>
				<div className="container">
					<div className={scss.pap}>
						<div className={scss.media_parent}>
							<img className={scss.last_photo} src={lastPhoto} alt="" />
							<div className={scss.p2_text}>
								<p className={scss.technologies}>TECHNOLOGIES & HARDWARE</p>
								<p className={scss.used_by_hyfra}>USED BY HYDRA VR.</p>
							</div>
						</div>
						<div className={scss.imgs_four}>
							<img src={unreal} alt="#" />
							<img src={unity} alt="#" />
							<img src={oculus} alt="#" />
							<img src={vive} alt="#" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ThirdMain;
