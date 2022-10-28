import { useContext, useRef, useState, useEffect } from "react";
import "./stories.scss"
import {storiesList} from "../../dumbData";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import { AuthContext } from "../../context/authContext"
import { SmoothHorizontalScrolling } from "../../untils";

const Stories = () => {

  const { currentUser } = useContext(AuthContext)
  const sliderRef = useRef();
  const storyRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);

  const handleClickRight = () => {
    const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(sliderRef.current,
        150,
        storyRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      )
    }
  }

  const handleClickLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(sliderRef.current,
        150,
        - storyRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      )
    }
  }
  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handleClickRight();
      if (dragMove > dragDown) handleClickLeft();
    }
  }, [dragDown, dragMove, isDrag]);

  const onDragStart = e => {
    setIsDrag(true);
    setDragDown(e.screenX)
  }

  const onDragEnd = e => {
    setIsDrag(false);
  }

  const onDragEnter = e => {
    setDragMove(e.screenX);
  }

  return (
    <div className="stories" draggable='false'>
      <div className="left-arrow" onClick={handleClickLeft}>
        <ArrowBackIosOutlined />
      </div>
      <div
        className="slider"
        ref={sliderRef}
        draggable='true'
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        >

        {/*My story*/}
        <div className="story" ref={storyRef} draggable='false'>
          <img src={currentUser.profilePic} alt="" draggable='false' />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>

        {/*Friends stories*/}
        {storiesList.map(story => (
          <div className="story" key={story.id} ref={storyRef} draggable='false'>
            <img src={story.img} alt="" draggable='false' />
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