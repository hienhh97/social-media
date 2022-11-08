import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Tutorials from "../../assets/11.png";
import Fund from "../../assets/13.png";
import MenuItem from '@mui/material/MenuItem';
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <MenuItem className="user">
            <img
              src={currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
          </MenuItem>
          <MenuItem className="item">
            <img src={Friends} alt="" />
            <span>Bạn bè</span>
          </MenuItem>
          <MenuItem className="item">
            <img src={Groups} alt="" />
            <span>Nhóm</span>
          </MenuItem>
          <MenuItem className="item">
            <img src={Market} alt="" />
            <span>Mua sắm</span>
          </MenuItem>
          <MenuItem className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </MenuItem>
          <MenuItem className="item">
            <img src={Memories} alt="" />
            <span>Kỷ niệm</span>
          </MenuItem>
        </div>
        <hr />
        <div className="menu">
          <span>Lối tắt</span>
          <MenuItem className="item">
            <img src={Events} alt="" />
            <span>Sự kiện</span>
          </MenuItem>
          <MenuItem className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </MenuItem>
          <MenuItem className="item">
            <img src={Gallery} alt="" />
            <span>Bộ sưu tập</span>
          </MenuItem>
          <MenuItem className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </MenuItem>
        </div>
        <hr />
        <div className="menu">
          <span>Nội dung khác</span>
          <MenuItem className="item">
            <img src={Fund} alt="" />
            <span>Gây quỹ</span>
          </MenuItem>
          <MenuItem className="item">
            <img src={Tutorials} alt="" />
            <span>Hướng dẫn</span>
          </MenuItem>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;