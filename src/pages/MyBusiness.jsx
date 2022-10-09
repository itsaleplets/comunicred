import { GreenButton } from '../components/Button';
import Header from '../components/Header';
import BusinessItem from '../components/BusinessItem'
import { TextBox } from '../components/Box'
import '../style/MyBusiness.css'

function MyBusiness() {
	return (
        <div>
            <div className='myBusiness'>
                <Header text="MEU NEGÓCIO" />
                <TextBox />
                <GreenButton path="/new-item" text="+ INCLUIR NOVO ITEM"/>
            </div>
            <div className='history businessHistory'>
                <p>Histórico do Negócio</p>
                <div>
                    <button style={{backgroundColor:'#63C832'}}>Todas</button>
                    <button>Entradas</button>
                    <button>Saídas</button>
                </div>
                <span>Outubro</span>
            </div>
            
            <BusinessItem type="Venda de produto" value="+ R$ 120,00" date="05/10/22"/>
            <BusinessItem type="Mercadoria" value="- R$ 500,00" date="01/10/22"/>
            <BusinessItem type="Venda de produto" value="+ R$ 200,00" date="01/01/22"/>
        </div>

	);
}

export default MyBusiness;