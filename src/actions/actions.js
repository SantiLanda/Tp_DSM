import axios from 'axios';

export const loadPhotos = (albumId) => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`,
      )
      .then((response) =>
        //setPhotos(response.data.photoset.photo),
        return { type: "PHOTOS", payload: response.data.photoset.photo };
      );
  };
