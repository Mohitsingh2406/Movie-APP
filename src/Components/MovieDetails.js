// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   Linking,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
// } from 'react-native';
// import { IMAGE_POSTER_URL } from '../config';
// import { GET } from '../Services/API';
// import Styles from '../Styles';
// import Loader from './Loader';
// import Icon from 'react-native-vector-icons/Entypo';
// import TrendingMovies from './TrendingMovies';
// import TrendingPeople from './TrendingPeople';

// const MovieDetails = (props) => {
//   const [loading, setLoading] = useState(true);
//   const [details, setDetails] = useState();

//   useEffect(() => {
//     const getDetails = async () => {
//       const data = await GET(`/movie/${props.route.params.movieId}`);
//       setDetails(data);
//       setLoading(false);
//     };

//     getDetails();
//   }, []);

//   const getGenre = () => {
//     return details.genres.map((genre, index) => (
//       <View style={Styles.genreContainer} key={index}>
//         <Text style={Styles.genre}>{genre.name}</Text>
//       </View>
//     ));
//   };

//   return (
//     <ScrollView style={Styles.sectionBg}>
//       {loading ? (
//         <Loader />
//       ) : (
//         <View>
//           <View>
//             <Image
//               source={{ uri: `${IMAGE_POSTER_URL}${details.backdrop_path}` }}
//               style={Styles.imageBg}
//             />
//           </View>
//           <Text style={Styles.detailsMovieTitle}>{details.original_title}</Text>
//           {details.homepage ? (
//             <View style={Styles.linkContainer}>
//               <TouchableOpacity
//                 onPress={() => {
//                   Linking.openURL(details.homepage);
//                 }}
//               >
//                 <Icon name="link" color="#fff" size={22} />
//               </TouchableOpacity>
//             </View>
//           ) : null}

//           <Text style={Styles.heading}>OVERVIEW</Text>
//           <Text style={Styles.overview}>{details.overview}</Text>

//           <View style={Styles.detailsContainer}>
//             <View>
//               <Text style={Styles.heading}>BUDGET</Text>
//               <Text style={Styles.details}>${details.budget}</Text>
//             </View>

//             <View>
//               <Text style={Styles.heading}>DURATION</Text>
//               <Text style={Styles.details}>{details.runtime} min.</Text>
//             </View>

//             <View>
//               <Text style={Styles.heading}>RELEASE DATE</Text>
//               <Text style={Styles.details}>{details.release_date}</Text>
//             </View>
//           </View>

//           <Text style={Styles.heading}>GENRE</Text>
//           <View style={{display: 'flex', flexDirection: 'row'}}>{getGenre()}</View>

//           <TrendingPeople
//             title="CAST"
//             url={`/movie/${props.route.params.movieId}/credits`}
//             isForPage="details"
//           />

//           <TrendingMovies
//             title="SIMILAR MOVIES"
//             navigation={props.navigation}
//             url={`/movie/${props.route.params.movieId}/similar`}
//           />
//         </View>
//       )}
//     </ScrollView>
//   );
// };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#151C26',
// //     padding: 10,
// //   },
// //   image: {
// //     width: '100%',
// //     height: 200,
// //     borderRadius: 10,
// //     marginBottom: 10,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: 10,
// //   },
// //   linkContainer: {
// //     alignItems: 'flex-end',
// //     marginBottom: 10,
// //   },
// //   heading: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     color: '#F4C10F',
// //     marginVertical: 10,
// //   },
// //   subHeading: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   overview: {
// //     fontSize: 16,
// //     color: '#969696',
// //     marginBottom: 10,
// //     lineHeight: 22,
// //   },
// //   detailsContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginVertical: 10,
// //   },
// //   detailsText: {
// //     fontSize: 16,
// //     color: '#fff',
// //   },
// //   genreList: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     marginBottom: 10,
// //   },
// //   genreContainer: {
// //     backgroundColor: '#F4C10F',
// //     borderRadius: 5,
// //     padding: 5,
// //     marginRight: 5,
// //     marginBottom: 5,
// //   },
// //   genreText: {
// //     fontSize: 14,
// //     color: '#151C26',
// //   },
// // });

// export default MovieDetails;

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {IMAGE_POSTER_URL} from '../config';
import {GET} from '../Services/API';
import Styles from '../Styles';
import Loader from './Loader';
import Icon from 'react-native-vector-icons/Entypo';
import Constants from '../Constants';
import TrendingMovies from './TrendingMovies';
import TrendingPeople from './TrendingPeople';

const MovieDetails = props => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();

  useEffect(() => {
    const getDetails = async () => {
      const data = await GET(`/movie/${props.route.params.movieId}`);
      setDetails(data);
      setLoading(false);
    };

    getDetails();
  }, []);

  const getGenre = () => {
    return details.genres.map(genre => (
      <View style={Styles.genreContainer}  >
        <Text style={Styles.genre}>{genre.name}</Text>
      </View>
    ));
  };

  return (
    <ScrollView style={Styles.sectionBg}>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <View>
            <Image
              source={{uri: `${IMAGE_POSTER_URL}${details.backdrop_path}`}}
              style={Styles.imageBg}
            />
          </View>
          <Text style={Styles.detailsMovieTitle}>{details.original_title}</Text>
          {details.homepage ? (
            <View style={Styles.linkContainer}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(details.homepage);
                }}>
                <Icon name="link" color={Constants.textColor} size={22} />
              </TouchableOpacity>
            </View>
          ) : null}

          <Text style={Styles.heading}>OVERVIEW</Text>
          <Text style={Styles.overview}>{details.overview}</Text>

          <View style={Styles.detailsContainer}>
            <View>
              <Text style={Styles.heading}>BUDGET</Text>
              <Text style={Styles.details}>$ {details.budget}</Text>
            </View>

            <View>
              <Text style={Styles.heading}>DURATION</Text>
              <Text style={Styles.details}>{details.runtime} min.</Text>
            </View>

            <View>
              <Text style={Styles.heading}>RELEASE DATE</Text>
              <Text style={Styles.details}>{details.release_date}</Text>
            </View>
          </View>

          <Text style={Styles.heading}>GENRE</Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            {getGenre()}
          </View>

          <TrendingPeople
            title="CAST"
            url={`/movie/${props.route.params.movieId}/credits`}
            isForPage="details"
          />

          <TrendingMovies
            title="SIMILAR MOVIES"
            navigation={props.navigation}
            url={`/movie/${props.route.params.movieId}/similar`}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default MovieDetails;