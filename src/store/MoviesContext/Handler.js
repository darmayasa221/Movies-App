const MoviesContextHandler = () => {
  const getNowPlaying = async (url) => {
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson;
  };
  const getUpcoming = async (url) => {
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson;
  };
  return [
    getNowPlaying,
    getUpcoming,
  ];
};

export default MoviesContextHandler;
