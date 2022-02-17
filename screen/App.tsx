import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import FindNumbers from './screen/FindNumbers';
import FindNumber_Notification from './screen/FindNumber_Notification';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="FindNumbers" 
          component={FindNumbers} 
          options={{ 
            title: 'FindNumbers',
            headerStyle: {
              backgroundColor: '#f4511e',
            }, 
          }}
           
        />
        <Stack.Screen 
          name="FindNumber_Notification" 
          component={FindNumber_Notification} 
          options={{ 
            title: 'FindNumber_Notification',
            headerStyle: {
              backgroundColor: '#f4511e',
            },  
          }} 
        />
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
