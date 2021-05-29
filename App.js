import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import Post from './src/components/Post';
/* import HomeScreen from './src/screens/HomeScreen';
 */
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/*         <HomeScreen />
         */}
        <Post />
      </SafeAreaView>
    </>
  );
};

export default App;
