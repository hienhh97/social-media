import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="center">
            <span>Hua Hien</span>
            <button>follow</button>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Hanoi, Vietnam</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>https://github.com/hienhh97</span>
              </div>
            </div>
          </div>
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
              facebook.com/huahien2409
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
              facebook.com/huahien2409
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
              facebook.com/huahien2409

            </a>
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;