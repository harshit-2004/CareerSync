import Option1 from "../assets/Option1.svg";
const OptionsCard = ({ collapsed, optionImage, optionLabel }) => {
  return (
    <div
      className="drawer-option hover:bg-[#EBEBFC] bg-white shadow-[3px_3px_4px_-2px_rgba(0,0,0,0.1)] hover:shadow-[8px_8px_4px_-2px_rgba(0,0,0,0.1)]"
      style={{
        color: "black",
        display: "flex",
        marginBottom: 12,
        width: "100%",
        alignItems:'start',
        padding:4,
        borderRadius:4,
      }}
    >
      {collapsed ? (
        <img src={optionImage} style={{ margin: "0 auto" }}></img>
      ) : (
        <div
          className="expanded-option"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img src={optionImage} style={{ marginLeft:8 }} />
          <span className= "font-oswald" style={{ marginLeft: 8, fontSize: 28 }}>{optionLabel}</span>
        </div>
      )}
    </div>
  );
};

export default OptionsCard;
