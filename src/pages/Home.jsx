import '../style/Home.css'
import HomeHeader from '../components/HomeHeader';
import { BigBox, SmallBox } from '../components/Box';
import Rating from '../components/Rating';
import note from '../images/note_add.png'
import poeple from '../images/people_alt.png'
import business from '../images/add_business.png'
import collection from '../images/collections_bookmark.png'

function Home() {
	return (
		<div className='home'>
			<HomeHeader />
			<Rating />
			<section className='homeBody'>
				<BigBox path="/loans"/>
				<div className='sectionBody'>
					<div>
						<SmallBox src={note} text="Notas Fiscais"/>
						<SmallBox src={business} text="Meu Negócio"/>
					</div>
					<div>
						<SmallBox src={collection} text="Meus Cursos"/>
						<SmallBox src={poeple} text="Comunidade"/>
					</div>
				</div>

			</section>
		</div>
	);
}

export default Home;