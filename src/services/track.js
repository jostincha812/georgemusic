const axios = require("axios");
import platziMusicService from "./platzi-music";

const trackService = {};

trackService.search = q => {
  const type = "track";
  // Optionally the request above could also be done as
  axios
    .get(`${platziMusicService.baseUrl}/search`, {
      params: {
        q,
        type
      }
    })
    .then(response => {
      return response;
      // console.log(response);
    })
    .catch(error => {
      return error;
      // console.log(error);
    })
    .then(() => {
      // always executed
    });
};

export default trackService;
