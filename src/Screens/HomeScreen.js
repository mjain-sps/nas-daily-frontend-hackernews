import React, { useEffect, useState } from "react";

//import components
import Messages from "../Components/Messages";
import Loader from "../Components/Loader";
import Story from "../Components/Story";

//import API
import { getStoryID } from "../API";

function HomeScreen({ location, history, match }) {
  //Set state constants
  const [storyIDS, setStoryIDS] = useState(null);
  const [pageIndex, setPageIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  //useEffect to get Story Headers.
  //Based on the story category(which i get from the navbar Links), I will fetch story headers.
  //Once story headers are fetched, I get complete stories and render them using Story Component
  useEffect(() => {
    getStoryID(
      match.params.category ? match.params.category : "topstories"
    ).then((resp) => {
      if (resp.statusText === "OK") {
        setStoryIDS(resp.data);
      } else {
        setErrorMessage(
          resp.response && resp.response.data.message
            ? resp.response.data.message
            : resp.message
        );
      }
    });

    //set page
    if (!location.search) {
      setPageIndex(1);
    } else {
      setPageIndex(parseInt(location.search.split("=")[1]));
    }
  }, [location.search, match.params]);

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
                .slice((pageIndex - 1) * 3, pageIndex * 3)
                .map((element, index) => {
                  return (
                    <Story
                      storyID={element}
                      pageNumber={pageIndex}
                      key={index}
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
