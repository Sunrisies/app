import {  RouteProp } from "@react-navigation/native";
import { Text, View } from "react-native";
type ParamList = {
  YourScreenName: { name: string }; // 替换为你的屏幕名称
};
export default ({ route }:{route:RouteProp<ParamList>}) => {
  console.log(route);
  const params = route.params;
  return (
    <View >
      <Text>John Doe</Text>
      <Text>Software Engineer</Text>
      <Text>名称:{params && params.name}</Text>
    </View>
  );
};
