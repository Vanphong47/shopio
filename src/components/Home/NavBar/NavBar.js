import "./NavBar.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export const NavBar = () => {
  return (
    <>
      <div className="header__menu">
        <a className="header__menu-title header__menu-home">
            Home <KeyboardArrowDownIcon sx={{ fontSize: 15 }}/>
            <span className="header__menu-title-home"></span>
        </a>
        <a className="header__menu-title header__menu-shop">
          Shop <KeyboardArrowDownIcon sx={{ fontSize: 15 }}/>
          <div className="header__menu-title-shop"></div>
        </a>
        <a className="header__menu-title  header__menu-product">
            Product <KeyboardArrowDownIcon sx={{ fontSize: 15 }}/>
            <div className="featured"> featured</div>
            <div className="header__menu-title-product"></div>
        </a>
        <a className="header__menu-title  header__menu-blog">
            Blog <KeyboardArrowDownIcon sx={{ fontSize: 15 }}/>
            <div className="header__menu-title-blog"></div>
        </a>
        <a className="header__menu-title  header__menu-page">
            Pages <KeyboardArrowDownIcon sx={{ fontSize: 15 }}/>
            <div className="header__menu-title-page"></div>
        </a>
        <a className="header__menu-title ">
            Hot Deals 
            <div className="hot"> hot</div>
        </a>
      </div>
    </>
  )
}