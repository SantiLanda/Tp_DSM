import React, {Component, useEffect} from 'react';
import {ScrollView, Text, View, FlatList} from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';
import {useSelector, useDispatch } from 'react-redux';
import {loadPhotos} from '../actions/actions';

/*
class PhotoList extends Component {
  state = {photos: null};

  componentWillMount() {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${this.props.route.params.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`,
      )
      .then((response) =>
        this.setState({photos: response.data.photoset.photo}),
      );
  }

  renderAlbums() {
    return this.state.photos.map((photo) => (
      <PhotoDetail
        key={photo.title}
        title={photo.title}
        imageUrl={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
      />
    ));
  }

  render() {
    console.log(this.state);

    if (!this.state.photos) {
      return (
        <View style={{flex: 1}}>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <ScrollView>{this.renderAlbums()}</ScrollView>
      </View>
    );
  }
}
*/

function PhotoList(props) {
  //const [photos, setPhotos] = useState(null)
  const photos = useSelector(store => store.photos);
  const photosLoaded = useSelector(store => store.photosLoaded)
  const dispatch = useDispatch();  
 
  useEffect(()=> {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${props.route.params.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`,
      )
      .then((response) =>
        dispatch(loadPhotos(response.data.photoset.photo)),
      );
  }
  )

  function renderAlbums() {
  
    const renderItem = ({ item }) => (
      <PhotoDetail
        key={item.title}
        title={item.title}
        imageUrl={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
      />);
    return(
      
      <FlatList data={photosLoaded} renderItem = {renderItem}
        keyExtractor={item => item.id}/>
        //keyExtractor={photo => photo.id}/>
    )
    };
  
  if (!photosLoaded) {
    return (
      <View style={{flex: 1}}>
        <Text style={{color:'#fff'}}>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      {renderAlbums()} 
    </View>
  );
} 

export default PhotoList;
