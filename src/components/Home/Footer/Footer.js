
import "./Footer.css";
import bitmap from "../../../assets/images/Bitmap 1.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__box">
          <div className="footer__box-item ">
            <img src="https://demo2.wpopal.com/shopio/wp-content/uploads/2021/12/logo.svg" className="footer__box-item-img"></img>
            <span className="footer__box-item-phone">8 (844) 880 - 33388</span>
            <span className="footer__box-item-email">customer_support@example.com</span>
          </div>
          <div className="footer__box-item">
            <span className="footer__box-item-name">useful links</span>
            <ul>
              <li className="footer__box-item-li">Legal & Privacy</li>
              <li className="footer__box-item-li">Contact</li>
              <li className="footer__box-item-li">Gift Card</li>
              <li className="footer__box-item-li">Customer Service</li>
              <li className="footer__box-item-li">My Account</li>
            </ul>
          </div>
          <div className="footer__box-item">
          <span className="footer__box-item-name">useful links</span>
            <ul>
              <li className="footer__box-item-li">Legal & Privacy</li>
              <li className="footer__box-item-li">Contact</li>
              <li className="footer__box-item-li">Gift Card</li>
              <li className="footer__box-item-li">Customer Service</li>
              <li className="footer__box-item-li">My Account</li>
            </ul>          
          </div>
          <div className="footer__box-item">
          <span className="footer__box-item-name">useful links</span>
            <ul>
              <li className="footer__box-item-li">Legal & Privacy</li>
              <li className="footer__box-item-li">Contact</li>
              <li className="footer__box-item-li">Gift Card</li>
              <li className="footer__box-item-li">Customer Service</li>
              <li className="footer__box-item-li">My Account</li>
            </ul>          
          </div>
          <div className="footer__box-item">
            <span className="footer__box-item-name">Connect with us</span>
            <div className="footer__box-item-icon">
              <div className=" footer__box-item--icon">
               <FacebookRoundedIcon sx={{ fontSize: 20}} className="iconnn"/> 
              </div>
              <div className=" footer__box-item--icon">
               <TwitterIcon sx={{ fontSize: 20}} className="iconnn"/> 
              </div>              
              <div className=" footer__box-item--icon">
               <InstagramIcon sx={{ fontSize: 20}} className="iconnn"/> 
              </div>
              <div className=" footer__box-item--icon">
               <PinterestIcon sx={{ fontSize: 20}} className="iconnn"/> 
              </div>               
            </div>
            <span className="footer__box-item-name">Payment</span>
            <img src={bitmap}></img>
          </div>
        </div>
      </footer>
    </>
  )
}