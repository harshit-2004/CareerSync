import Option1 from "../assets/Option1.svg";
const OptionsCard = ({ collapsed, optionImage, optionLabel }) => {
  return (
    <div
      className="drawer-option"
      style={{
        color: "black",
        display: "flex",
        marginBottom: 12,
        width: "100%",
        alignItems:'start',
        padding:2,
        borderRadius:80
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
          <img src={optionImage} style={{ justifySelf: "start" }} />
          <span style={{ marginLeft: 8, fontSize: 28 }}>{optionLabel}</span>
        </div>
      )}
    </div>
  );
};

export default OptionsCard;
