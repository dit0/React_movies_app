import React from 'react';

import {
  ScrollView,
  Text,
  View,
  List,
  SegmentedControlIOS,
  StyleSheet,
  FlatList,
  SectionList,
} from 'react-native';

import ListItem from '../components/ListItem';
import Header from '../components/Header';

export default class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'React Native Movie App',
  };

  state = {
    response: ['test', 'test2'],
    selectedIndex: '',
    name: '',
    poster: '',
    overview: '',
    type: 'popular',
  };

  listData = async list => {
    const api_key = '8367b1854dccedcfc9001204de735470';
    const type = this.state.type;

    const url =
      'https://api.themoviedb.org/3/movie/' +
      this.state.type
        .toLocaleLowerCase()
        .split(' ')
        .join('_') +
      '?api_key=' +
      api_key +
      '&page=1';

    console.log(url);

    const api_call = await fetch(url);
    const data = await api_call.json();

    //console.log(url);

    // console.log(data);
    this.setState({
      response: data.results,
    });
  };

  render() {
    const {
      selectedIndex,
      name,
      poster,
      overview,
      type,
      response,
    } = this.state;
    //console.log(this.state.response);
    return (
      
      <View>
        <Header
          title={this.state.type + ' Movie List'}
          style={styles.textcenter}
        />
        <View style={styles.container}>
          <SegmentedControlIOS
            values={['Popular', 'Top Rated', 'Upcoming']}
            selectedIndex={this.state.selectedIndex}
            onChange={event => {
              this.setState({
                selectedIndex: event.nativeEvent.selectedSegmentIndex,
                type: event.nativeEvent.value,
              });
            }}
            onPress={this.listData()}
            style={styles.padding10}
          />
        </View>
        <View>
          <Text style={styles.textcenter}>{this.state.type}</Text>
          <ScrollView>
            <FlatList
              data={this.state.response}
              renderItem={({ item }) => (
                <ListItem
                  imgSource={item.poster_path} 
                  title={item.title}
                  overview={item.overview}
                />
              )}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',

  },
  textcenter: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    marginBottom:10,
    alignSelf: 'stretch',
  },
  padding10: {
    margin:10,
    marginBottom: 0,
  },
 
  
});
