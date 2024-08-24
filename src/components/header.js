import { header_img } from '../img/style';
import './components.css';

function Header() {
  return (
    <div className="Header">
      <img src={header_img} className="Header-img" alt="header" />
    </div>
  );
}

export default Header;
