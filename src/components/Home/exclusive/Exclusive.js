import "./Exclusive.css";
import EastIcon from '@mui/icons-material/East';
export const Exclusive = () => {
  return (
    <>
      <div className="image-top">
        <div className="image-top__box">
        
        <div className="box-name"> <hr/> online exclusive</div>
        <div className="box-title"> A NEW LEGACY for LUXURY</div>
        <button className="box-button">
            Shop Now <EastIcon sx={{ fontSize: 15 }} className="shopnow-icon"/>
        </button>
        </div>
      </div>
    </>
  )
}