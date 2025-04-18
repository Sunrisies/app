import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from '@react-navigation/elements';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconMater from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './src/HomeScreen';
import userScreen from './src/userScreen';
import ArticleScreen from './src/pages/article';
// import './global.css';
import './src/styles/index.css';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {position: 'absolute'},
        header: ({options, route}) => {
          console.log('options', options);
          console.log('route', route);
          return null;
          // return (
          //   <View
          //     className="w-10 h-10 bg-blue-500 text-white"
          //     // style={{
          //     //   height: 50,
          //     //   justifyContent: 'center',
          //     //   alignItems: 'center',
          //     // }}
          //   >
          //     <Text className="text-lg border border-red-400 text-red">
          //       {route.name}11
          //     </Text>
          //   </View>
          // );
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
        component={ArticleScreen}
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
