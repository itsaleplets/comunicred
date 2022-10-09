import React, { useContext } from 'react';
import '../style/Home.css'
import menu from '../images/menu.png';
import group from '../images/Group.png';
import coin from '../images/coin01.svg'
import bell from '../images/bell.png'

function HomeHeader() {
	return (
		<div>
			<section className='homeHeader'>
				<div>
					<img src={menu} alt="" />
					<img src={group} alt="" />
				</div>
				<div>
					<div>
						<img src={coin} width="35px" alt="" />
						<span>2500</span>
					</div>
					<img src={bell} width="25px" alt="" />
				</div>
			</section>
		</div>
	);
}

export default HomeHeader;