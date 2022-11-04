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
      <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>
        <Text style={textStyle}>
         {children}
        </Text>
      </TouchableOpacity>
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
    borderWidth: 0,
    marginLeft: 5,
    marginRight: 5
  },
  gradient: {
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 0,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center'
  },
  btGr: {
    flex: 1,
    color: '#7fb026',
    borderWidth: 0,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    
    
    justifyContent: 'center',
        
  }
};

export default GrButton;
