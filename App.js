// Your React Native Service Booking App code here

import React from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Welcome to the Service Booking App!</Text>
      <Button title="Book a Service" onPress={() => alert('Service Booked!')} />
    </View>
  );
};

export default App;