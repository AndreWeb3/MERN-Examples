import Locations from './main/Locations'
import logo from '../images/logo.svg'
import '../styles/styles.css'

function Main() {
  return (
    <div className="main">
        <div className="logoContainer">
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="resultsContainer">
          <Locations />
        </div>

    </div>
  );
}

export default Main