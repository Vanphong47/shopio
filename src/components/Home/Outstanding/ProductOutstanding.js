import "./ProductOutstanding.css";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
export const ProductOutstanding = () => {
  return (
    <>
      <div className="block">
        <div className="block-box">
        <div className="block-box__image">
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
      </div>
    </>
  )
}