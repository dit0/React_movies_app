import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../components/Header';

export default class NowPlayingScreen extends React.Component {
  state = {
    poster: '',
    name: '',
    popularity: '',
    releaseDate: '',
    overview: '',
  };
  static navigationOptions = {
    title: 'React Native Movie App',
  };
  componentDidMount() {
    this.load();
    this.props.navigation.addListener('willFocus', this.load);
  }
  load = () => {
    fechMovieData = async movie => {
      const api_key = '8367b1854dccedcfc9001204de735470';
      //const url = 'https://api.themoviedb.org/3/movie/76341?api_key=' + api_key;
      const url =
        'https://api.themoviedb.org/3/movie/now_playing?api_key=' +
        api_key +
        '&page=1';

      const api_call = await fetch(url);
      const data = await api_call.json();

      //console.log(data);

      const random =
        data.results[Math.floor(Math.random() * data.results.length)];

      //console.log(random);

      this.setState({
        poster: 'https://image.tmdb.org/t/p/original' + random.poster_path,
        name: random.title,
        popularity: random.popularity,
        releaseDate: random.release_date,
        overview: random.overview,
      });
    };

    fechMovieData();
  };

  render() {
    const { poster, name, popularity, releaseDate, overview } = this.state;
    return (
      <View style={styles.container}>
       <Header
          title={"Now Playing"}
          style={styles.textcenter}
        />
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
         <View>
         <Image
         style={{width: 200, height: 200}}
          source={{ uri: this.state.poster }}
        />
          </View>
         <View style={styles.info}>
            <Text>{this.state.name}</Text>
          </View>
          <View>
            <Text>Popularity: {this.state.popularity}</Text>
          </View>
          <View>
            <Text>Release Date{this.state.releaseDate}</Text>
          </View>
          <View style={styles.info}>
            <Text>{this.state.overview}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 30,
   textAlign: 'center',
   alignItems: 'center',
  },
  info: {
    marginTop: 15
  },
  
});
