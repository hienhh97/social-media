import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Share = () => {

  const { currentUser } = useContext(AuthContext)
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <input type="text" placeholder={`Bạn đang nghĩ gì vậy ${currentUser.name}?`} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Thêm ảnh</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Thêm địa điểm</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Gắn thẻ bạn bè</span>
            </div>
          </div>
          <div className="right">
            <button>Chia sẻ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;