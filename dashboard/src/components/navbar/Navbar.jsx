import "./Navbar.css";
import thofLogo from "..//../assets/GoldGradientmedium.png";
import { LanguageOutlined, NotificationsOutlined, SettingsOutlined } from '@mui/icons-material';
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbarWrapper">
        <img src={thofLogo} alt="thof-logo" />
        <div className="rightContainer">
          <div className="topBarIconContainer">
          <NotificationsOutlined/>
          <span className="topIconBadge">1</span>
          </div>
          <div className="topBarIconContainer">
          <LanguageOutlined/>
          <span className="topIconBadge">3</span>
          </div>
          <div className="topBarIconContainer">
          <SettingsOutlined/>
          </div>
          <img src="https://cdn.pixabay.com/photo/2018/03/03/06/26/girl-3194977_960_720.jpg" alt="asian-girl" className="avatar" />
        </div>
      </div>
    </div>
  )
}
