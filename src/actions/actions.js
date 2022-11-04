import axios from 'axios';

export const loadPhotos = (photos) => { 
return { type: "PHOTOS", payload: photos };};
