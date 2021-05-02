import React, { useEffect, useState } from "react";

//import the API
import { getFullStory } from "../API";

//import components
import Loader from "../Components/Loader";
import Messages from "../Components/Messages";

function Story({ storyID, pageNumber }) {
  //Define useState Constants
  const [storyComplete, setStoryComplete] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  //Define useEffect to fetch complete story on getting Story ID
  useEffect(() => {
    getFullStory(storyID)
      .then((resp) => setStoryComplete(resp))
      .catch((error) => {
        setErrorMessage(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        );
      });
  }, [pageNumber, storyID]);

  //Function which returns last updated
  function renderTime(params) {
    const postTime = new Date(params * 1000).getHours();
    const currentTime = new Date().getHours();
    const diff = currentTime - postTime;
    return diff;
  }

  return errorMessage ? (
    <Messages>{errorMessage}</Messages>
  ) : !storyComplete ? (
    <Loader></Loader>
  ) : (
    <React.Fragment>
      <div className="story--content">
        <h5 className="story--title">{storyComplete.title}</h5>
        <p className="story--body">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <p className="story--footer">
          <span>
            {storyComplete.time &&
              `${renderTime(storyComplete.time)} hours ago`}
          </span>
          <span>&nbsp;|&nbsp;</span>
          <span>{storyComplete.descendants} comments</span>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Story;
