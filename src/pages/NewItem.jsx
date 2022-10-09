import { Input, SmallInput } from "../components/Input";
import { GreenButton } from '../components/Button';
import Header from '../components/Header';
import '../style/NewItem.css'

function NewItem() {

    return (
        <section>
            <Header text="NOVO ITEM" />
            <div className="newItemSmallInput">
                <SmallInput text="Valor R$" type="text" />
                <SmallInput text="Data" type="date" />
            </div>
            <div className="newItemInput">
                <Input text="Tipo" type="text" />
                <Input text="Descrição (opcional)" type="text" />
            </div>
            <GreenButton text="SALVAR" />
        </section>

    );
}

export default NewItem;