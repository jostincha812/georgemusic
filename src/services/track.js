import platziMusicService from "./platzi-music";

async function trackService(query) {
  let response = await fetch(
    `${platziMusicService.baseUrl}/search?q=${query}&type=track`
  );
  let data = await response.json();
  return data;
}

export default trackService;
