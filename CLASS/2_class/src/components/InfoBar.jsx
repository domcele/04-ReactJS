import "./InfoBarStyle.css";
import location from "../assets/location.svg";
import email from "../assets/email.svg";
import mobile from "../assets/mobile.svg";

const InfoBar = ({
  altInfoLoc,
  altInfoEm,
  altInfoCont,
  infographLoc,
  infographEm,
  infographCont,
  infographComp,
  infographPren,
  infographFil,
  infographLang,
}) => {
  return (
    <div className="infoBarContainer">
      <div className="infoBarList">
        <div className="infoBarLocation">
          <img src={location} alt={altInfoLoc} />
          <p>{infographLoc}</p>
        </div>
        <div className="infoBarEmail">
          <img src={email} alt={altInfoEm} />
          <p>{infographEm}</p>
        </div>
        <div className="infoBarContacts">
          <img src={mobile} alt={altInfoCont} />
          <p>{infographCont}</p>
        </div>
      </div>
      <div className="infoBarList">
        <div>
          <p>{infographComp}</p>
        </div>
        <div>
          <p>{infographPren}</p>
        </div>
        <div>
          <p>{infographFil}</p>
        </div>
        <div>
          <p>{infographLang}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
