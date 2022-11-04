import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderRadius: 2,
    padding: 5,
    backgroundColor: '#242424',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;
