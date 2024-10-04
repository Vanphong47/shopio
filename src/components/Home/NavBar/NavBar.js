import "./NavBar.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export const NavBar = () => {
  return (
    <>
      <div className="header__menu">
        <a className="header__menu-title">
            Home <ArrowDropDownIcon sx={{ fontSize: 15 }}/>
        </a>
        <a className="header__menu-title">
            Shop <ArrowDropDownIcon sx={{ fontSize: 15 }}/>
        </a>
        <a className="header__menu-title tag">
            Product <ArrowDropDownIcon sx={{ fontSize: 15 }}/>
            <div className="featured"> featured</div>
        </a>
        <a className="header__menu-title">
            Blog <ArrowDropDownIcon sx={{ fontSize: 15 }}/>
        </a>
        <a className="header__menu-title">
            Pages <ArrowDropDownIcon sx={{ fontSize: 15 }}/>
        </a>
        <a className="header__menu-title tag">
            Hot Deals <ArrowDropDownIcon sx={{ fontSize: 15 }}/>
            <div className="hot"> hot</div>
        </a>
      </div>
    </>
  )
}