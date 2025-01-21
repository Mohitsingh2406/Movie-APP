// import React from 'react';
// import { ActivityIndicator,View} from 'react-native';
// import Constants from '../Constants';

// const Loader = () => {
//   return (
//     <View>
//       <ActivityIndicator size="large" color={Constants.textColor} />
//     </View>
//   );
// };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#151C26', // Optional, change as needed
// //   },
// // });

// export default Loader;

import React from 'react';
import {ActivityIndicator} from 'react-native';
import Constants from '../Constants';

const Loader = () => {
  return <ActivityIndicator size="large" color={Constants.textColor} />;
};

export default Loader;