import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
const Header = () => {
  return (
    <View style={styles.header}>
          <Image source={require('../assets/icons/menu.png')} style={styles.icon} />
        <View style={styles.title}>
            <Image
            source={require('../assets/icons/music.png')}
            style={styles.innerImg}
            />
        <Text style={styles.titleText}>Music Adds</Text>
        </View>
        <Image
          source={require('../assets/icons/search.png')}
          style={styles.icon}
        />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    marginHorizontal: 10,
    width: 20,
    height: 20,
  },
  innerImg:{
    height: 20,
    width: 20,
    right: 10,
  },
  title:{
    flexDirection: 'row',
    
  },
  titleText:{
    color: "black",
    fontWeight: 'bold'
  }
});
