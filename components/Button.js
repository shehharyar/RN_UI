import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Button = ({children, onPress, mode,style }) => {
  return (
    <View style={style}>
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={[styles.button, mode === 'flat' && styles.flat]}>
        <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
          {children}
        </Text>
      </View>
    </Pressable>
  </View>
  )
}

export default Button;


const styles = StyleSheet.create({
    button: {
      borderRadius: 8,
      paddingVertical: 15,
      
      backgroundColor: '#290A52',
    },
    flat: {
        // opacity:0.45,

      backgroundColor: '#D4C3EB',
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
    flatText: {
      color: '#000000',
    },
    pressed: {
      opacity: 0.75,
      backgroundColor:'#413069',
      borderRadius: 4,
    },
  });