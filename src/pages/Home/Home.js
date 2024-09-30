import "./main.css"
import "./base.css"
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EastIcon from '@mui/icons-material/East';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';


export const HomePage = () => {
    return (
        <>
          <div className="app">
            {/* header  */}
            <header className="header">
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
              <div className="line"></div>
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
            </header>
            {/* end header  */}


            {/* box-image  */}
            <div className="image-top">
              <div className="image-top__box">
                
                <div className="box-name"> <hr/> online exclusive</div>
                <div className="box-title"> A NEW LEGACY for LUXURY</div>
                <button className="box-button">
                  Shop Now <EastIcon sx={{ fontSize: 15 }} className="shopnow-icon"/>
                </button>
              </div>
            </div>
            {/* end box-image  */}

            <div className="image">
              <div className="image-left">
                <div className="image-left__title">
                  <hr/> explore collections
                </div>
              </div>
              <div className="image-right">
              </div>
            </div>
            
            <div className="image-box">
              <div className="image-box__content">
                <div className="image-box__content-content">
                  Handcrafted accessories
                </div>
                <a className="image-box__content-shopnow">
                  Shop Now <EastIcon sx={{ fontSize: 15 }} className=""/>
                </a>
              </div>
            </div>

            <div className="title"> 
              <div className="title__name">
                <div className="title__name-line"></div>
                discover our items
              </div>
              <div className="title__content">
                Shop limited edition collaborations
              </div>
            </div>

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
             {/* css tailwind  */}
            <div className="mx-auto mt-[30px] relative">
              <div className="grid grid-cols-2 gap-0">
                <div className="">
                  {/* <img className="w-full h-[990px] object-cover image-8"></img> */}
                  <div className="w-full h-[990px] image-8"></div>
                </div>
                <div className="m-auto">
                  <div className=" image-9"></div>
                </div>
              </div>
              <div className="absolute flex flex-col top-[12%] left-[55%]">
                <span className="uppercase text-[12px] font-[600] line-clamp-[24px]"> presonalized </span>
                <span className=""> the creation of your dreams </span>
                <span> View Collection </span>
              </div>
              <div className="grid grid-cols-2 gap-0">
                <div className="m-auto">
                  <div className=" image-9"></div>
                </div>
                <div className="">
                <div className="w-full h-[990px] image-10"></div>
                </div>
              </div>
            </div>
            {/* end tailwind  */}

            <div className="title"> 
              <div className="title__name">
                <div className="title__name-line"></div>
                pick for you
              </div>
              <div className="title__content">
                Selected from our Journal
              </div>
            </div>
            <div className="product">
              <div className="product-list">
                  <div className="product-img"></div>
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
                    </span>
                  </div>
              </div>
              <div className="product-list">
                  <div className="product-img"></div>
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
                    </span>
                  </div>
              </div>
              <div className="product-list">
                  <div className="product-img"></div>
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
                    </span>
                  </div>
              </div>
              <div className="product-list">
                  <div className="product-img"></div>
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
                    </span>
                  </div>
              </div>
              
            </div>
            <div className="product">
              <div className="product-list">
                  <div className="product-img"></div>
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
                    </span>
                  </div>
              </div>
              <div className="product-list">
                  <div className="product-img"></div>
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
                    </span>
                  </div>
              </div>
              <div className="product-list">
                  <div className="product-img"></div>
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
                    </span>
                  </div>
              </div>
              <div className="product-list">
                  <div className="product-img"></div>
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
                    </span>
                  </div>
              </div>
            </div>
            <div className="title"> 
              <div className="title__name">
                <div className="title__name-line"></div>
                newsletter
              </div>
              <div className="title__content">
              Get exclusive offers in your inbox
              </div>
            </div>

            <form>
              <div className="from-search">
                <input
                  type="text" 
                  placeholder="Enter your email ..."
                  className="search"
                >
                </input>
              </div>
            </form>
          </div>
        </>
    )
}