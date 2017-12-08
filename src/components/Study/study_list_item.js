import React from "react";
import "./style.css";




export default function StudyListItem({selectedStudy}) {

  const bgImageStyle = { backgroundImage: `url(${selectedStudy.img})`};

  return (
    <div className="study__container">
      <div className="study__wrapper">
        <div className="study__thumnail--wrapper">
          <div className="study__thumnail--title">{selectedStudy.title}</div>
          <div className="study__thumnail--image" style={bgImageStyle} />
        </div>
        <div className="study__thumnail__text">
          <span>
            {selectedStudy.description}
          </span>
          <a href={selectedStudy.url} target="_blank"><p>{selectedStudy.url}</p></a>
        </div>
      </div>
    </div>
  );
}
