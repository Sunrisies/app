import {Button, Image, PermissionsAndroid, Text} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useEffect, useState} from 'react';
import {
  init,
  Geolocation,
  setInterval,
  setNeedAddress,
  addLocationListener,
  start,
  stop,
} from 'react-native-amap-geolocation';
export default ({navigation}: any) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [map, setMap] = useState<any>(null);
  useEffect(() => {});
  const openLaunchImageLibrary = async () => {
    const result = launchImageLibrary({}, res => {
      console.log(res, '获取图片数据');
      if (res.assets && res.assets.length > 0) {
        setImageUri(res.assets[0].uri);
      }
    });
    console.log(result, '点击了');
  };
  const openLaunchCamera = async () => {
    await launchCamera({}, res => {
      console.log(res, '点击了');
    });
  };
  const getLonLat = async () => {
    console.log('点击获取经纬度开始');
    // 对于 Android 需要自行根据需要申请权限
    await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    ]);
    console.log('点击获取经纬度');
    // 使用自己申请的高德 App Key 进行初始化
    await init({
      ios: '9bd6c82e77583020a73ef1af59d0c759',
      android: '07d9190f2bcc1ca128b50b42a0307964',
    });
    setNeedAddress(true);
    start();

    addLocationListener(location => {
      setMap(location);
      console.log(location)
    });
  };

  const setStop = () => {
    stop();
  };
  return (
    <>
      <Button
        title="demo"
        onPress={() => navigation.navigate('我的', {name: 'Jane'})}
      />
      <Button title="打开相机" onPress={openLaunchCamera}></Button>
      <Button title="打开相册" onPress={openLaunchImageLibrary}></Button>
      {imageUri && (
        <Image source={{uri: imageUri}} style={{width: 100, height: 100}} />
      )}
      <Button title="获取经纬度" onPress={getLonLat}></Button>
      <Button title="停止定位" onPress={setStop}></Button>
      <Text> {map && (JSON.stringify(map) || '没有获取到经纬度')}</Text>
    </>
  );
};
