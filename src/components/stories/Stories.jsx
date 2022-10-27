import { useContext, useRef } from "react";
import "./stories.scss"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import { AuthContext } from "../../context/authContext"
import { SmoothHorizontalScrolling } from "../../untils";

const Stories = () => {

  const { currentUser } = useContext(AuthContext)
  const sliderRef = useRef();
  const storyRef = useRef();

  const handleClickRight = () => {
    const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(sliderRef.current,
        250,
        storyRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      )
    }
  }

  const handleClickLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(sliderRef.current,
        250,
        - storyRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      )
    }
  }

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Nguyễn A",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "Lê B",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "Lê B",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "Lê B",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 5,
      name: "Haaland",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 6,
      name: "Bruno Ferrari",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },

  ];

  return (
    <div className="stories">
      <div className="left-arrow" onClick={handleClickLeft}>
        <ArrowBackIosOutlined />
      </div>
      <div className="slider" ref={sliderRef}>
        <div className="story" ref={storyRef}>
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
        {stories.map(story => (
          <div className="story" key={story.id} ref={storyRef}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        ))}
      </div>
      <div className="right-arrow" onClick={handleClickRight}>
          <ArrowForwardIosOutlined />
      </div>
    </div>
  )
}

export default Stories;