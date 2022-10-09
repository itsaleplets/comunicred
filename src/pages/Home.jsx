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
			<Rating text="A SUA AVALIAÇÃO ESTÁ" rate="73" />
			<section className='homeBody'>
				<BigBox path="/loans"/>
				<div className='sectionBody'>
					<div>
						<SmallBox path="/invoices" src={note} text="Notas Fiscais"/>
						<SmallBox path="/my-business" src={business} text="Meu Negócio"/>
					</div>
					<div>
						<SmallBox path="/courses" src={collection} text="Meus Cursos"/>
						<SmallBox path="/community" src={poeple} text="Comunidade"/>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;