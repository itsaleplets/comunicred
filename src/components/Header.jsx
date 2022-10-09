import '../style/Header.css'
import { useHistory } from "react-router-dom"
import arrow from '../images/arrow-left.png';

function Header(props) {
	const history = useHistory();
	return (
		<div className='header'>
			<img src={arrow} onClick={() => history.push('/home')} />
			<p>{props.text}</p>
		</div>
	);
}

export default Header;