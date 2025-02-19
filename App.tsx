import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from '@react-navigation/elements';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconMater from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './src/HomeScreen';
import userScreen from './src/userScreen';

const Article = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Article Screen</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {position: 'absolute'},
        header: ({options, route}) => {
          console.log('options', options);
          console.log('route', route);
          return (
            <View
              style={{
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>{route.name}</Text>
            </View>
          );
        },
      }}>
      <Tab.Screen
        name="首页"
        component={HomeScreen}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="文章"
        component={Article}
        options={{
          tabBarLabel: '文章',
          tabBarIcon: ({color, size}) => (
            <IconMater name="article" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="我的"
        component={userScreen}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({size, color}) => {
            return <Icon name="user" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingBottom: 10,
  },
  darkContainer: {
    backgroundColor: 'black',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'gray',
    fontSize: 12,
  },
});
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
