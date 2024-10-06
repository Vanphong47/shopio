import "./formSearch.css";
import EastIcon from '@mui/icons-material/East';
export const FormSearch = () => {
  return(
    <>
        <form>
            <div className="from-search">
            <input
                type="text" 
                placeholder="Enter your email ..."
                className="search"
            >
            </input>
            <a className="Subcribe">
              Subcribe <EastIcon/>
            </a>
            </div>
        </form>        
    </>
  )
}