import "./rightBar.scss";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { friendslist } from "../../dumbData";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Gợi ý cho bạn</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://danviet.mediacdn.vn/upload/4-2019/images/2019-10-10/Khong-phai-Hang-long-thap-bat-chuong-day-moi-la-tuyet-hoc-giup-Tieu-Phong-ap-che-quan-hung-tai-Tu-Hi-271-1570721305-width576height313.jpg"
                alt=""
              />
              <span>Kiều Minh Phong</span>
            </div>
            <div className="buttons">
              <button><PersonAddAltIcon /></button>
              <button><HighlightOffIcon /></button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://static1.dienanh.net/upload/202110/00b0c172-3e92-4f66-91f0-159e49d4067c.jpg"
                alt=""
              />
              <span>Dương Xuân Quá</span>
            </div>
            <div className="buttons">
              <button><PersonAddAltIcon /></button>
              <button><HighlightOffIcon /></button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Bạn bè đang hoạt động</span>
          {friendslist.map(friend => (
            <div className="user">
              <div className="userInfo">
                <img
                  src={friend.img}
                  alt=""
                />
                <div className="online" />
                <span>{friend.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;