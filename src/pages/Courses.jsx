
import { ImageBox } from '../components/Box';
import Header from '../components/Header';
import product from '../images/product-course.png';
import sales from '../images/sales-course.png';
import mkt from '../images/mkt-course.png';
import '../style/Courses.css'

function Courses() {

    return (
        <section className='courses'>
            <Header text="MEUS CURSOS" />
            <h3>Cursos em Andamento</h3>
            <ImageBox src={product} title="Pacificação de produtos" info="Duração: 2h  | Status: disponível" />
            <h3>Cursos Disponíveis</h3>
            <ImageBox src={sales} title="Vendas Online" info="Duração: 3h  | Status: disponível" />
            <h3>Cursos Realizados</h3>
            <ImageBox src={mkt} title="Marketing Digital" info="Duração: 5h  | Status: finalizado" />
        </section>

    );
}

export default Courses;