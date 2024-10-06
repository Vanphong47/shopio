import "./ImageMain.css";
import image8 from "../../../assets/images/image-8.png";
import image9 from "../../../assets/images/image-9.png";
import image10 from "../../../assets/images/image-10.jpg";
import fine from "../../../assets/images/fine jewelry for every day.png";
import thecreation from "../../../assets/images/the creation of your dreams.png";
import EastIcon from '@mui/icons-material/East';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
export const ImageMain = () => {
  return (
    <>
      <div className="mainImage">
        <div className="mainImg">
            <div className="mainImg__left">
              <img src={image8} alt="ảnh"></img>
            </div>
            <div className="mainImg__right">
              <img src={image9} alt="ảnh" className="mainImg__right-img"></img>
              <div className="mainImg-box">
                <div className="mainImg-box__item">
                    <span className="mainImg-box__name">Ring</span>
                    <span className="mainImg-box__content">Smaill Grenite Lamp</span>
                    <div className="mainImg-box__icon">
                        <StarIcon sx={{ fontSize: 14 }} className="active"/>
                        <StarIcon sx={{ fontSize: 14 }} className="active"/>
                        <StarIcon sx={{ fontSize: 14 }} className="active"/>
                        <StarIcon sx={{ fontSize: 14 }} className="active"/>
                        <StarBorderIcon sx={{ fontSize: 14 }}/>
                    </div>
                    <span className="mainImg-box__price">$99.57</span>
                </div>
                <div className="mainImg-box-icon">
                  <ShoppingCartOutlinedIcon className="Icon"/>
                  <span className="IconSpan"></span>
                  <FavoriteBorderOutlinedIcon className="Icon"/>
                  <span className="IconSpan"></span>
                  <CompareArrowsOutlinedIcon className="Icon"/>
                  <span className="IconSpan"></span>
                  <RemoveRedEyeOutlinedIcon className="Icon"/>
                </div>
              </div>
            </div>
        </div>
        <div className="mainImg-content">
          <span className="mainImg-content__name">
            <span className="under"></span> presonalized 
          </span>
          <img src={thecreation}></img>
          <a href="#" className="mainImg-content__view">
            View Collection <EastIcon className="EastIcon"/>
          </a>
        </div>
      </div>

      <div className="mainImage">
        <div className="mainImg">
            <div className="mainImg__right">
              <img src={image9} alt="ảnh" className="mainImg__right-img"></img>
              <div className="mainImg-box mainImg-box-box">
                <div className="mainImg-box__item">
                    <span className="mainImg-box__name">Ring</span>
                    <span className="mainImg-box__content">Smaill Grenite Lamp</span>
                    <div className="mainImg-box__icon">
                        <StarIcon sx={{ fontSize: 14 }} className="active"/>
                        <StarIcon sx={{ fontSize: 14 }} className="active"/>
                        <StarIcon sx={{ fontSize: 14 }} className="active"/>
                        <StarIcon sx={{ fontSize: 14 }} className="active"/>
                        <StarBorderIcon sx={{ fontSize: 14 }}/>
                    </div>
                    <span className="mainImg-box__price">$99.57</span>
                </div>
                <div className="mainImg-box-icon">
                  <ShoppingCartOutlinedIcon className="Icon"/>
                  <span className="IconSpan"></span>
                  <FavoriteBorderOutlinedIcon className="Icon"/>
                  <span className="IconSpan"></span>
                  <CompareArrowsOutlinedIcon className="Icon"/>
                  <span className="IconSpan"></span>
                  <RemoveRedEyeOutlinedIcon className="Icon"/>
                </div>
              </div>
            </div>
            <div className="mainImg__left">
              <img src={image10} alt="ảnh"></img>
            </div>
        </div>
        <div className="mainImg-content">
          <span className="mainImg-content__name mainImg-content__name--div">
            <span className="under"></span> UNDER $150
          </span>
          <img src={fine}></img>
          <a href="#" className="mainImg-content__view mainImg-content__view--div">
            View Collection <EastIcon className="EastIcon"/>
          </a>
        </div>
      </div>
    </>
  )
}