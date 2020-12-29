import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Home({ navigation, route }) {
  const goToProductDetail = (e) => {
    navigation.navigate('ProductDetail');
  };
  return (
    <View style={styles.container}>
      <View style={styles.menu}></View>
      <Text>Home</Text>
      <Button onPress={goToProductDetail} title='제품상세'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    backgroundColor: '#111111',
    height: 150,
    width: '100%',
  },
});