import React from 'react';
import {
  ScrollView,
  Text,
  View,
  SegmentedControlIOS,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';

import ListItem from '../components/ListItem';
import Header from '../components/Header';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'React Native Movie App',
  };
  state = {
    response: ['test', 'test2'],
    selectedIndex: '',
    text: '',
    poster: '',
    overview: '',
    type: 'Movie',
    knowfor: '',
  };

  listSearch = async list => {
    // list.preventDefault();

    const api_key = '8367b1854dccedcfc9001204de735470';
    const type = this.state.type;

    //const url = 'https://api.themoviedb.org/3/movie/76341?api_key=' + api_key;
    const url =
      'https://api.themoviedb.org/3/search/' +
      this.state.type.toLocaleLowerCase() +
      '?api_key=' +
      api_key +
      '&language=en-US&query=' +
      this.state.text
        .toLocaleLowerCase()
        .split(' ')
        .join('%20') +
      '&page=1';

    // console.log(url);

    const api_call = await fetch(url);
    const data = await api_call.json();

    // console.log(data);
    this.setState({
      response: data.results,
    });
  };

  render() {
    return (
      <View>
        <Header
          title={this.state.type + ' List'}
          style={styles.textcenter}
        />
        <View style={styles.container}>
          <SegmentedControlIOS
            values={['Movie', 'Person', 'Tv']}
            selectedIndex={this.state.selectedIndex}
            onChange={event => {
              this.setState({
                selectedIndex: event.nativeEvent.selectedSegmentIndex,
                type: event.nativeEvent.value,
              });
            }}
            onPress={this.listSearch()}
            style={styles.padding10}
          />

          <Text style={styles.textcenter}>Search for: {this.state.type}</Text>
        </View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom:10, }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          onChange={this.listSearch}
        />
        <View>
          <ScrollView>
            <FlatList
              data={this.state.response}
              renderItem={({ item }) => (
                <ListItem
                  imgSource={item.poster_path}
                  imgProfile={item.profile_path}
                  title={item.title}
                  name={item.name}
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
    marginTop: 10,
    marginBottom:0,
    alignSelf: 'stretch',
  },
  padding10: {
     margin:10,
    marginBottom: 0,
    
  },
});
