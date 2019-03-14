import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

export default class ListItem extends React.Component {
  state = {
    imgSource: '',
    title: '',
  };

  render(props) {
    return (
      <View style={styles.container}>
        {this.props.imgSource && (
          <View style={styles.containerPic}>
            <Image
              style={styles.pic}
              source={{
                uri:
                  'https://image.tmdb.org/t/p/original' + this.props.imgSource,
              }}
            />
          </View>
        )}
        {this.props.imgProfile && (
          <View style={styles.containerPic}>
            <Image
              style={styles.pic}
              source={{
                uri:
                  'https://image.tmdb.org/t/p/original' + this.props.imgProfile,
              }}
            />
          </View>
        )}
        <View style={styles.containerTxt}>
        {this.props.title && (

          <View style={styles.containerTitle}>
            <Text style={{ justifyContent: 'flex-end', fontWeight: 'bold' }}>
              {this.props.title}
            </Text>
          </View>
        )}
        {this.props.name && (
          <View style={styles.containerTitle}>
            <Text style={{ justifyContent: 'flex-end' }}>
              {this.props.name}
            </Text>
          </View>
        )}
        <View style={styles.containerDesc}>
          <Text style={{}}>{this.props.overview}</Text>
        </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
   
    marginBottom: 20,
    maringTop: 20,
  },
  containerDesc:{
flex:1,
  },
  containerTxt: {
    flex:1
  },
  containerPic: {
    marginRight: 10,
    flex:1,
    marginLeft: 20,
  },

  pic: {
    width: "100%",
    height: 100,
    flex:1,
  },
  containerTitle:{
    marginBottom: 20,
     fontWeight: 'bold',
  },
});
