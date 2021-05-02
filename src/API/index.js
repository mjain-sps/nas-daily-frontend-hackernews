import axios from "axios";
import { API_URL } from "../Constants";

//Function to get Story IDS
export const getStoryID = async (storyCategory) => {
  try {
    const resp = await axios.get(
      `${API_URL}/${storyCategory}.json/?print=pretty`
    );
    return resp;
  } catch (error) {
    return error;
  }
};

//Function to get complete stories
export const getFullStory = async (storyID) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/item/${storyID}.json/?print=pretty`
    );
    return data;
  } catch (error) {
    return error;
  }
};

//Function to get User Data
export const getUserData = async (userID) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/user/${userID}.json/?print=pretty`
    );
    return data;
  } catch (error) {
    return error;
  }
};
