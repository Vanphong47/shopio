import "./collections.css";
import EastIcon from '@mui/icons-material/East';
import handcrafted from "../../../assets/images/Handcrafted accessories.png";
import img2 from "../../../assets/images/image--2.png";
export const Collection = () => {
  return (
    <>
      <div className="image">
        <div className="image-left">
          <div className="image-left__title">
            <hr/> explore collections
          </div>
          {/* <img src={img2}></img> */}
        </div>
        {/* <div className="image-left__title">
          <hr/> explore collections
        </div> */}
        <div className="image-right">
        </div>
      </div>
      <div className="image-box">
        <div className="image-box__content">
          <div className="image-box__content-content">
            <img src={handcrafted} alt="anh"></img>
          </div>
          <a href="#" className="image-box__content-shopnow">
            Shop Now <EastIcon sx={{ fontSize: 15 }} className=""/>
          </a>
        </div>
      </div>
    </>
  )
}