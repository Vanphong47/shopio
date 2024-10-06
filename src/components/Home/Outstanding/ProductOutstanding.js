import "./ProductOutstanding.css";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import img5 from "../../../assets/images/image-5.png"
import img6 from "../../../assets/images/image-6.png"
import img7 from "../../../assets/images/image-7.png"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
export const ProductOutstanding = () => {
  return (
    <>
      <div className="block">
        <div className="block-box">
        <div className="block-box__image">
          <img src={img5} className=""></img>
          <div className="block-icon">
            <ShoppingCartOutlinedIcon className="Icon"/>
            <span className="IconSpan"></span>
            <FavoriteBorderOutlinedIcon className="Icon"/>
            <span className="IconSpan"></span>
            <CompareArrowsOutlinedIcon className="Icon"/>
            <span className="IconSpan"></span>
            <RemoveRedEyeOutlinedIcon className="Icon"/>
          </div>
        </div>
        <div className="block-box__content">
            <span className="block-box__name">
            Rings
            </span>
            <span className="block-content">
            Delicate diamond eternity ring
            </span>
            <div className="block-box__icon">
            <StarIcon sx={{ fontSize: 14 }} className="active"/>
            <StarIcon sx={{ fontSize: 14 }} className="active"/>
            <StarIcon sx={{ fontSize: 14 }} className="active"/>
            <StarIcon sx={{ fontSize: 14 }} className="active"/>
            <StarBorderIcon sx={{ fontSize: 14 }}/>
            <span className="block-box__number"> (3) </span>
            </div>
            <span className="block-price">
            $15.75
            </span>
        </div>
        </div>

        <div className="block-box">
        <div className="block-box__image">
          <img src={img6}></img>
          <div className="block-icon">
            <ShoppingCartOutlinedIcon className="Icon"/>
            <span className="IconSpan"></span>
            <FavoriteBorderOutlinedIcon className="Icon"/>
            <span className="IconSpan"></span>
            <CompareArrowsOutlinedIcon className="Icon"/>
            <span className="IconSpan"></span>
            <RemoveRedEyeOutlinedIcon className="Icon"/>
          </div>
        </div>
        <div className="block-box__content">
            <span className="block-box__name">
            earings
            </span>
            <span className="block-content">
            Dior large crystal half hoop earrings
            </span>
            <div className="block-box__icon">
            <StarIcon sx={{ fontSize: 14 }} className="active"/>
            <StarIcon sx={{ fontSize: 14 }} className="active"/>
            <StarIcon sx={{ fontSize: 14 }} className="active"/>
            <StarIcon sx={{ fontSize: 14 }} className="active"/>
            <StarBorderIcon sx={{ fontSize: 14 }}/>
            <span className="block-box__number"> (3) </span>
            </div>
            <span className="block-price">
            $15.75
            </span>
        </div>
        </div>

        <div className="block-box">
        <div className="block-box__image">
          <img src={img7}></img>
          <div className="block-icon">
            <ShoppingCartOutlinedIcon className="Icon"/>
            <span className="IconSpan"></span>
            <FavoriteBorderOutlinedIcon className="Icon"/>
            <span className="IconSpan"></span>
            <CompareArrowsOutlinedIcon className="Icon"/>
            <span className="IconSpan"></span>
            <RemoveRedEyeOutlinedIcon className="Icon"/>
          </div>
        </div>
        <div className="block-box__content">
            <span className="block-box__name">
            necklace
            </span>
            <span className="block-content">
            Il leone medallion necklace
            </span>
            <div className="block-box__icon">
            <StarIcon sx={{ fontSize: 14 }} className="active"/>
            <StarIcon sx={{ fontSize: 14 }} className="active"/>
            <StarIcon sx={{ fontSize: 14 }} className="active"/>
            <StarIcon sx={{ fontSize: 14 }} className="active"/>
            <StarBorderIcon sx={{ fontSize: 14 }}/>
            <span className="block-box__number"> (3) </span>
            </div>
            <span className="block-price">
            $15.75
            </span>
        </div>
        </div>
      </div>
    </>
  )
}