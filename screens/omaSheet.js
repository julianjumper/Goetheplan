import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { B, I } from './span';
const {width,height} = Dimensions.get("window");

const styles = StyleSheet.create({
  BigContainer: {
    backgroundColor: "red",
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  Container: {
    width: width/10,
    height: (2*height)/3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontWeight: 'bold'
  },
});

const Screen = (props) => (
<View style = {styles.BigContainer}>
<View style = {styles.Container}>
    <Text style={styles.header}>Klasse</Text>
    <Text style={styles.header}>{props.class}</Text>
</View>
</View>

);

export default Screen;
