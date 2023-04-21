import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Screens/Home';
import ViewMovie from './Screens/ViewMovie';
import Search from './Screens/Search';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
   
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ViewMovie" component={ViewMovie} />
            <Stack.Screen name = "Search" component={Search} />
          </Stack.Navigator>
        </NavigationContainer>
    
   
   
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
