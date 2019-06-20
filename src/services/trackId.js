import platziMusicService from "./platzi-music";

async function trackServiceGetById(id) {
  let response = await fetch(`${platziMusicService.baseUrl}/tracks/${id}`);
  let data = await response.json();
  return data;
}

export default trackServiceGetById;
