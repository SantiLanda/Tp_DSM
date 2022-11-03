import React from 'react';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Text, theme } from 'galio-framework';

import materialTheme from '../../constants/Theme';


const GrButton = ({ gradient, onPress, children, style, ...props}) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0.2, 1]}
          style={[styles.gradient, style]}
          colors={[materialTheme.COLORS.GRADIENT_START, materialTheme.COLORS.GRADIENT_END]}
        >
      <Button onPress={onPress} style={styles.gradient, styles.btGr}>
        <Text style={textStyle}>
         {children}
        </Text>
      </Button>
    </LinearGradient>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  gradient: {
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 0,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center'
  },
  btGr: {
    display: 'flex',
    justifyContent: 'center',
        
  }
};

export default GrButton;
