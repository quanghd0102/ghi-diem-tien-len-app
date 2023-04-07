import React from 'react';
import {Text, Box, Button, Center} from 'native-base';
import Lottie from 'lottie-react-native';

const Home = ({navigation}) => {
  return (
    <Center w="100%" h="100%">
      <Center
        height={200}
        maxH="80%"
        width={{
          base: 200,
          lg: 250,
        }}
      >
        <Lottie
          source={require('../../assets/lottie-files/logo.json')}
          autoPlay
          loop
        />
      </Center>
    </Center>
  );
};

export default Home;
