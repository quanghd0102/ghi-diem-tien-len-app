import React from 'react';
import {Text, Box} from 'native-base';

const Game = ({navigation, route}) => {
  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Text>Game screen</Text>
      <Text>This is {route.params.name}'s profile</Text>;
    </Box>
  );
};

export default Game;
