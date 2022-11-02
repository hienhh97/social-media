import { useContext, useRef } from "react";
import "./stories.scss"
import { storiesList } from "../../dumbData";
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
        200,
        storyRef.current.clientWidth * 1.5,
        sliderRef.current.scrollLeft
      )
    }
  }

  const handleClickLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(sliderRef.current,
        200,
        - storyRef.current.clientWidth * 1.5,
        sliderRef.current.scrollLeft
      )
    }
  }

  return (
    <div className="stories" >
      <div
        className="slider"
        ref={sliderRef}
      >

        {/*My story*/}
        <div className="story" ref={storyRef} >
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>

        {/*Friends stories*/}
        {storiesList.map(story => (
          <div className="story" key={story.id} ref={storyRef} >
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        ))}
      </div>
      <div className="left-arrow" onClick={handleClickLeft}>
        <ArrowBackIosOutlined />
      </div>
      <div className="right-arrow" onClick={handleClickRight}>
        <ArrowForwardIosOutlined />
      </div>
    </div>
  )
}

export default Stories;