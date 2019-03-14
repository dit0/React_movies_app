import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends React.Component {
  render(props) {
    return (
      <View style={styles.textcenter}>
        <Text style={styles.textcenter}>{this.props.title}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textcenter: {
     textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    alignSelf: 'stretch',

  },

});
