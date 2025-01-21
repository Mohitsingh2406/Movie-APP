// import React from 'react';
// import { View } from 'react-native';
// import DiscoverMovies from './Components/DiscoverMovies';
// import Styles from './Styles';
// import TrendingPeople from './Components/TrendingPeople';
// import TrendingMovies from './Components/TrendingMovies';

// const Home = ({ navigation }) => {
//   return (
//     <View style={Styles.sectionBg}>
//       {/* Discover Movies Component */}
//       <DiscoverMovies navigation={navigation} />
      
//       {/* Trending People Section */}
//       <TrendingPeople title="Trending People" url="/trending/person/week" />
      
//       {/* Trending Movies Section */}
//       <TrendingMovies 
//         title="Trending Movies" 
//         url="/movie/top_rated" 
//         navigation={navigation} 
//       />
//     </View>
//   );
// };

//export default Home;
import React from 'react';
import {View} from 'react-native';
import DiscoverMovies from './Components/DiscoverMovies';
import Styles from './Styles';
import TrendingPeople from './Components/TrendingPeople';
import TrendingMovies from './Components/TrendingMovies';

const Home = props => {
  return (
    <View style={Styles.sectionBg}>
      <DiscoverMovies navigation={props.navigation} />
      <TrendingPeople title="Trending People" url="/trending/person/week" />
      <TrendingMovies
        title="Trending Movies"
        url="/movie/top_rated"
        navigation={props.navigation}
      />
    </View>
  );
};

export default Home;
