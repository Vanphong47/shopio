import "./main.css"
import { InfoWeb } from "../../components/Home/Infoweb/InfoWeb";
import { NavBar } from "../../components/Home/NavBar/NavBar";
import { Exclusive } from "../../components/Home/exclusive/Exclusive";
import { Collection } from "../../components/Home/collections/Collection";
import { BoxTitle } from "../../components/Home/BoxTitle/BoxTitle";
import { ProductOutstanding } from "../../components/Home/Outstanding/ProductOutstanding";
import { ListProduct } from "../../components/Home/ListProduct/ListProduct";
import { Footer } from "../../components/Home/Footer/Footer";
import shoplimited from "../../assets/images/Shop limited edition collaborations.png";
import selectedform from "../../assets/images/Selected from our Journal.png";
import getexclusive from "../../assets/images/Get exclusive offers in your inbox.png";
import { ImageMain } from "../../components/Home/ImageMain/ImageMain";
import { FormSearch } from "../../components/Home/Search/FormSearch";


export const HomePage = () => {
    return (
        <>
          <div className="app">
            <header className="header">
              <InfoWeb/>
              <NavBar/>
            </header>
            <Exclusive/>
            <Collection/>
            <BoxTitle
              title = "discover our items"
              content = {<img src={shoplimited}></img>}
            />
            <ProductOutstanding/>
            <ImageMain/>
            <BoxTitle
              title = "pick for you"
              content = {<img src={selectedform}></img>}
            />
            <ListProduct/>
            <ListProduct/>
            <BoxTitle
              title = "newsletter"
              content = {<img src={getexclusive}></img>}
            />
            <FormSearch/>
            <Footer/>
          </div>
        </>
    )
}