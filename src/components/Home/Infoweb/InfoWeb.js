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
            8(844)880 - 33388
        </div>
        <a className="header__top-shopio">
            shopio
        </a>
        <div className="header-icon">
            <div className="icon">
            <SearchIcon sx={{ fontSize: 20 }}/>
            </div>
            <div className="icon">
            <PermIdentityIcon sx={{ fontSize: 20 }}/>
            </div>
            <div className="icon">
            <FavoriteBorderIcon sx={{ fontSize: 20 }}/>
            </div>
            <div className="icon">
            <ContentPasteIcon sx={{ fontSize: 20 }}/>
            </div>
        </div>
        </div>
    </>
  )
}