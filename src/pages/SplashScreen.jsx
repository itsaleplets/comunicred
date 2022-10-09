import '../style/SplashScreen.css';
import logo from "../images/Comunicred.svg";
import cover from "../images/screen-splach.jpg";

function SplashScreen() {

  return (
    <img className='splash-logo' src={cover} alt="test" />
  );
}

export default SplashScreen;