import React, { useEffect, useState } from "react";

//import modules
import { Link } from "react-router-dom";

//import components
import Messages from "../Components/Messages";
import Loader from "../Components/Loader";
import Story from "../Components/Story";

//import API
import { getStoryID } from "../API";

function HomeScreen({ location, history }) {
  //Set state constants
  const [storyIDS, setStoryIDS] = useState(null);
  const [pageIndex, setPageIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  //useEffect to get Story Headers
  useEffect(() => {
    getStoryID("topstories")
      .then((resp) => setStoryIDS(resp))
      .catch((error) =>
        setErrorMessage(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );

    //set page
    if (!location.search) {
      setPageIndex(1);
    } else {
      setPageIndex(parseInt(location.search.split("=")[1]));
    }
  }, [location.search]);
  return (
    <div className="homescreen-wrapper">
      {errorMessage ? (
        <Messages>{errorMessage}</Messages>
      ) : !storyIDS ? (
        <Loader></Loader>
      ) : (
        storyIDS &&
        storyIDS.length > 0 && (
          <React.Fragment>
            <div className="story--wrapper">
              {storyIDS
                .slice((pageIndex - 1) * 5, pageIndex * 5)
                .map((element, index) => {
                  return (
                    <Story
                      storyID={element}
                      pageNumber={pageIndex}
                      index={index}
                    />
                  );
                })}
            </div>
            <div className="load--more__button">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  history.push(`/?p=${pageIndex + 1}`);
                }}
              >
                Load More
              </button>
            </div>
          </React.Fragment>
        )
      )}
    </div>
  );
}

export default HomeScreen;
