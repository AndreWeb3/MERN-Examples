import Helloworld from './Main/Helloworld'
import logo from '../images/logo.svg'
import '../styles/styles.css'

function Main() {
  return (
    <div className="main">
        <div>
            <img src={logo} className="logo" alt="logo" />
        </div>
        <Helloworld />
    </div>
  );
}

export default Main