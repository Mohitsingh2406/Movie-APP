// // import React, {useEffect, useState} from 'react';
// // import {View, Text} from 'react-native';
// // import {GET} from '../Services/API';
// // import {SliderBox} from 'react-native-image-slider-box';
// // import {IMAGE_POSTER_URL} from '../config';
// // import Constants from '../Constants';

// // const DiscoverMovies = props => {
// //   const [movies, setMovies] = useState([]);
// //   const [images, setImages] = useState([]);

// //   useEffect(() => {
// //     const getMovies = async () => {
// //       const response = await GET('/discover/movie');
// //       setMovies(response.results);

// //       const images = response.results.map(
// //         data => `${IMAGE_POSTER_URL}${data.backdrop_path}`,
// //       );

// //       let backImages = [];
// //       for (let i = 0; i < 10; ++i) {
// //         backImages = [...backImages, images[i]];
// //       }

// //       setImages(backImages);
// //     };

// //     getMovies();
// //   }, []);

// //   return (
// //     <View>
// //       <SliderBox
// //         images={images}
// //         dotColor={Constants.secondaryColor}
// //         onCurrentImagePressed={index =>
// //           props.navigation.navigate('movieDetails', {movieId: movies[index].id})
// //         }
// //       />
// //     </View>
// //   );
// // };

// // export default DiscoverMovies;

// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import { SliderBox } from 'react-native-image-slider-box';
// import { GET } from '../Services/API'; // Ensure the GET function is correctly implemented
// import { IMAGE_POSTER_URL } from '../config'; // Ensure this constant is correctly set up
// import Constants from '../Constants'; // Ensure this contains secondaryColor

// const DiscoverMovies = (props) => {
//   const [movies, setMovies] = useState([]);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     // Fetch movies when the component is mounted
//     const getMovies = async () => {
//       try {
//         const response = await GET('/discover/movie'); // Replace with your actual API endpoint
//         if (response && response.results) {
//           setMovies(response.results);

//           // Extract image URLs from the API response
//           const images = response.results.map(
//             (data) => `${IMAGE_POSTER_URL}${data.backdrop_path}`
//           );

//           // Limit the images to the first 10
//           const backImages = images.slice(0, 10);
//           setImages(backImages);
//         }
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//       }
//     };

//     getMovies();
//   }, []);

//   // return (
//   //   <View>
//   //     {images.length > 0 ? (
//   //       <SliderBox
//   //         images={images}
//   //         dotColor={Constants.secondaryColor}
//   //         onCurrentImagePressed={(index) =>
//   //           props.navigation.navigate('movieDetails', {
//   //             movieId: movies[index].id,
//   //           })
//   //         }
//   //       />
//   //     ) : (
//   //       <Text>Loading movies...</Text>
//   //     )}
//   //   </View>
//   // );
// };

// export default DiscoverMovies;

import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {GET} from '../Services/API';
import {SliderBox} from 'react-native-image-slider-box';
import {IMAGE_POSTER_URL} from '../config';
import Constants from '../Constants';

const DiscoverMovies = props => {
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await GET('/discover/movie');
      setMovies(response.results);

      const images = response.results.map(
        data => `${IMAGE_POSTER_URL}${data.backdrop_path}`,
      );

      let backImages = [];
      for (let i = 0; i < 10; ++i) {
        backImages = [...backImages, images[i]];
      }

      setImages(backImages);
    };

    getMovies();
  }, []);

  // return (
  //   <View>
  //     <SliderBox
  //       images={images}
  //       dotColor={Constants.secondaryColor}
  //       onCurrentImagePressed={index =>
  //         props.navigation.navigate('movieDetails', {movieId: movies[index].id})
  //       }
  //     />
  //   </View>
  // );
};

export default DiscoverMovies;
