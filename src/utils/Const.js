export const TMDBoptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDBKEY,
    }
  };
export const tmdbimage_url = "https://image.tmdb.org/t/p/w500";
export const netflixBG = "https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg";
export  function getRandomNumber(a) {
  return Math.floor(Math.random() * (a + 1));
 }