import "./InfoWeb.css"
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

export const InfoWeb = () => {
  return (
    <>
      <div className="header__top">
        <div className="header__top-phone">
            8 (844) 880 - 33388
        </div>
        <div className="header__top-shopio">
            <img src="https://demo2.wpopal.com/shopio/wp-content/uploads/2021/12/logo.svg" alt="shopio" className="">
            </img>
            <span className="header__top-shopio-img">.</span> 
        </div>
        <div className="header-icon">
            <div className="icon">
              <SearchIcon sx={{ fontSize: 30 }}/>
            </div>
            <div className="icon">
              <PermIdentityIcon sx={{ fontSize: 30 }}/>
            </div>
            <div className="icon icon-position">
              <FavoriteBorderIcon sx={{ fontSize: 30 }}/>
              <span className="icon-number">1</span>
            </div>
            <div className="icon icon-position">
              <ContentPasteIcon sx={{ fontSize: 30 }}/>
              <span className="icon-number">0</span>
            </div>
        </div>
        </div>
    </>
  )
}