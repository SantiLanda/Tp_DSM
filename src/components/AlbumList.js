import React, {Component, useEffect, useState} from 'react';
import {ScrollView, Text, View, FlatList} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


function AlbumList(props) {
  const [photoset, setState] = useState(null);
  useEffect(() => {
    axios
      .get(
        'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1'
      )
      .then((response) => {
        setState(response.data.photosets.photoset);
      });
  })

function renderAlbums(){
  
  const renderItem = ({ item }) => (
    <AlbumDetail
            navigation={props.navigation}
            key={item.id}
            title={item.title._content}
            albumId={item.id}
    />);

  return (
    
      <FlatList data={photoset} renderItem = {renderItem}
        keyExtractor={item => item.id}/>
  )
    /*<AlbumDetail
      navigation={props.navigation}
      key={album.id}
      title={album.title._content}
      albumId={album.id}
    />*/
};

if (!photoset) {
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

export default AlbumList;

/*
class AlbumList extends Component {
  state = {photoset: null};

  componentWillMount() {
    axios
      .get(
        'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1',
      )
      .then((response) =>
        this.setState({photoset: response.data.photosets.photoset}),
      );
  }

  renderAlbums() {
    return this.state.photoset.map((album) => (
      <AlbumDetail
        navigation={this.props.navigation}
        key={album.id}
        title={album.title._content}
        albumId={album.id}
      />
    ));
  }

  render() {
    console.log(this.state);

    if (!this.state.photoset) {
      return <Text>Loading...</Text>;
    }

    return (
      <View style={{flex: 1}}>
        <ScrollView>{this.renderAlbums()}</ScrollView>
      </View>
    );
  }
}

export default AlbumList; */
