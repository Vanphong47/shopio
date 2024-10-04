import "./main.css"
import EastIcon from '@mui/icons-material/East';
import { InfoWeb } from "../../components/Home/Infoweb/InfoWeb";
import { NavBar } from "../../components/Home/NavBar/NavBar";
import { Exclusive } from "../../components/Home/exclusive/Exclusive";
import { Collection } from "../../components/Home/collections/Collection";
import { BoxTitle } from "../../components/Home/BoxTitle/BoxTitle";
import { ProductOutstanding } from "../../components/Home/Outstanding/ProductOutstanding";
import { ListProduct } from "../../components/Home/ListProduct/ListProduct";
import { Footer } from "../../components/Home/Footer/Footer";




export const HomePage = () => {
    return (
        <>
          <div className="app">
            {/* header  */}
            <header className="header">
              <InfoWeb/>
              <div className="line"></div>
              <NavBar/>
            </header>
            {/* end header  */}


            {/* box-image  */}
            <Exclusive/>
            {/* end box-image  */}
            <Collection/>
            
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

            <BoxTitle
              title = "discover our items"
              content = "Shop limited edition collaborations"
            />

            <ProductOutstanding/>

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

            <BoxTitle
              title = "pick for you"
              content = "Selected from our Journal"
            />

            <ListProduct/>

            <ListProduct/>

            <BoxTitle
              title = "newsletter"
              content = "Get exclusive offers in your inbox"
            />

            <form>
              <div className="from-search">
                <input
                  type="text" 
                  placeholder="Enter your email ..."
                  className="search"
                >
                </input>
              </div>
              {/* <a path="#">
                Subscribe 
              </a> */}
            </form>

            <Footer/>
          </div>
        </>
    )
}