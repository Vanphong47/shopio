import "./BoxTitle.css";
export const BoxTitle = (props) => {
  const {title, content} = props;
  return (
    <>
      <div className="title"> 
        <div className="title__name">
        <div className="title__name-line"></div>
          {title}
        </div>
        <div className="title__content">
          {content}
        </div>
      </div>
    </>
  )
}