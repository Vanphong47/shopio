import "./ListProduc.css";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import img10 from "../../../assets/images/image-10.png";
import img11 from "../../../assets/images/image-11.png";
import img12 from "../../../assets/images/image-12.png";
import img13 from "../../../assets/images/image-13.png";
import img14 from "../../../assets/images/image-14.png";
import img15 from "../../../assets/images/image-15.png";
import img16 from "../../../assets/images/image-16.png";
import img17 from "../../../assets/images/image-17.png";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
export const ListProduct = () => {
  return (
    <>
      <div className="product">
        <div className="product-list">
            <div className="product-img">
                <img src={img10}></img>
                <div className="product-img__icon">
                  <ShoppingCartOutlinedIcon className="Icon"/>
                  <span className="IconSpan"></span>
                  <FavoriteBorderOutlinedIcon className="Icon"/>
                  <span className="IconSpan"></span>
                  <CompareArrowsOutlinedIcon className="Icon"/>
                  <span className="IconSpan"></span>
                  <RemoveRedEyeOutlinedIcon className="Icon"/>
                </div>
                <div className="product-img__sale">
                    -39%
                </div>
            </div>
            <div className="product-box">
            <span className="product-name">
                Rings
            </span>
            <span className="product-content">
                Delicate diamond eternity ring
            </span>
            <div className="product-icon">
                <StarIcon sx={{ fontSize: 14 }} className="active"/>
                <StarIcon sx={{ fontSize: 14 }} className="active"/>
                <StarIcon sx={{ fontSize: 14 }} className="active"/>
                <StarIcon sx={{ fontSize: 14 }} className="active"/>
                <StarBorderIcon sx={{ fontSize: 14 }}/>
                <span className="product-number"> (3) </span>
            </div>
            <span className="product-price">
                $488.66
                <span className="product-price-old">$738.9</span> 
            </span>
            </div>
        </div>
        <div className="product-list">
            <div className="product-img">
              <img src={img11}></img>
              <div className="product-img__icon">
                    <ShoppingCartOutlinedIcon className="Icon"/>
                    <span className="IconSpan"></span>
                    <FavoriteBorderOutlinedIcon className="Icon"/>
                    <span className="IconSpan"></span>
                    <CompareArrowsOutlinedIcon className="Icon"/>
                    <span className="IconSpan"></span>
                    <RemoveRedEyeOutlinedIcon className="Icon"/>
              </div>
              <div className="product-img__sale">
                -39%
              </div>
            </div>
            <div className="product-box">
            <span className="product-name">
                Rings
            </span>
            <span className="product-content">
                Delicate diamond eternity ring
            </span>
            <div className="product-icon">
                <StarIcon sx={{ fontSize: 14 }} className="active"/>
                <StarIcon sx={{ fontSize: 14 }} className="active"/>
                <StarIcon sx={{ fontSize: 14 }} className="active"/>
                <StarIcon sx={{ fontSize: 14 }} className="active"/>
                <StarBorderIcon sx={{ fontSize: 14 }}/>
                <span className="product-number"> (3) </span>
            </div>
            <span className="product-price">
                $15.75
                <span className="product-price-old">$738.9</span>
            </span>
            </div>
        </div>
        <div className="product-list">
            <div className="product-img">
              <img src={img12}></img>
              <div className="product-img__icon">
                    <ShoppingCartOutlinedIcon className="Icon"/>
                    <span className="IconSpan"></span>
                    <FavoriteBorderOutlinedIcon className="Icon"/>
                    <span className="IconSpan"></span>
                    <CompareArrowsOutlinedIcon className="Icon"/>
                    <span className="IconSpan"></span>
                    <RemoveRedEyeOutlinedIcon className="Icon"/>
              </div>
            </div>
            <div className="product-box">
            <span className="product-name">
                Rings
            </span>
            <span className="product-content">
                Delicate diamond eternity ring
            </span>
            <div className="product-icon">
                <StarIcon sx={{ fontSize: 14 }} className="active"/>
                <StarIcon sx={{ fontSize: 14 }} className="active"/>
                <StarIcon sx={{ fontSize: 14 }} className="active"/>
                <StarIcon sx={{ fontSize: 14 }} className="active"/>
                <StarBorderIcon sx={{ fontSize: 14 }}/>
                <span className="product-number"> (3) </span>
            </div>
            <span className="product-price product-price-new">
                $15.75
            </span>
            </div>
        </div>
        <div className="product-list">
            <div className="product-img">
            <img src={img13}></img>
              <div className="product-img__icon">
                    <ShoppingCartOutlinedIcon className="Icon"/>
                    <span className="IconSpan"></span>
                    <FavoriteBorderOutlinedIcon className="Icon"/>
                    <span className="IconSpan"></span>
                    <CompareArrowsOutlinedIcon className="Icon"/>
                    <span className="IconSpan"></span>
                    <RemoveRedEyeOutlinedIcon className="Icon"/>
              </div>
            </div>
            <div className="product-box">
            <span className="product-name">
                Rings
            </span>
            <span className="product-content">
                Delicate diamond eternity ring
            </span>
            <div className="product-icon">
                <StarIcon sx={{ fontSize: 14 }} className="active"/>
                <StarIcon sx={{ fontSize: 14 }} className="active"/>
                <StarIcon sx={{ fontSize: 14 }} className="active"/>
                <StarIcon sx={{ fontSize: 14 }} className="active"/>
                <StarBorderIcon sx={{ fontSize: 14 }}/>
                <span className="product-number"> (3) </span>
            </div>
            <span className="product-price product-price-new">
                $15.75
            </span>
            </div>
        </div> 
      </div>
    </>
  )
}