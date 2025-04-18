import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';

interface Article {
  id: number;
  title: string;
  cover: string;
  category: {id: number; name: string};
  publish_time: string;
  views: number;
  is_top: boolean;
  tags: {id: number; name: string}[];
}
export default () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // 模拟API请求
  const fetchArticles = async () => {
    try {
      // 这里替换为真实API地址
      const {data} = await fetch(
        'https://api.chaoyang1024.top:2345/api/article?limit=11&page=1',
      ).then(response => response.json());
      //   const data = await response.json();
      console.log(data, 'data');
      setArticles(data);
    } catch (err) {
      setError('Failed to fetch articles', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={{flex: 1, backgroundColor: '#f5f5f5', padding: 16}}>
      <FlatList
        data={articles}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View
            className="w-10 h-10 bg-blue-500"
            style={{
              marginBottom: 20,
              padding: 12,
              backgroundColor: 'white',
              borderRadius: 8,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.2,
              shadowRadius: 4,
            }}>
            {/* 封面图 */}
            {!!item.cover && (
              <Image
                source={{uri: item.cover}}
                style={{
                  width: '100%',
                  height: 160,
                  borderRadius: 8,
                  marginBottom: 8,
                }}
              />
            )}

            {/* 文章标题 */}
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 8,
              }}>
              {item.title}
            </Text>

            {/* 分类信息 */}
            <Text
              style={{
                fontSize: 14,
                color: '#666',
                marginBottom: 4,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#333',
                }}>
                分类：
              </Text>
              {item.category.name}
            </Text>

            {/* 发布时间 */}
            <Text
              style={{
                fontSize: 14,
                color: '#666',
                marginBottom: 4,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#333',
                }}>
                发布时间：
              </Text>
              {item.publish_time}
            </Text>

            {/* 查看次数 */}
            <Text
              style={{
                fontSize: 14,
                color: '#666',
                marginBottom: 4,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#333',
                }}>
                查看次数：
              </Text>
              {item.views}
            </Text>

            {/* 标签 */}
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 8,
              }}>
              {item.tags.map((tag, index) => (
                <Text
                  key={index}
                  style={{
                    paddingVertical: 4,
                    paddingHorizontal: 8,
                    backgroundColor: '#e0e0e0',
                    borderRadius: 4,
                    fontSize: 12,
                    marginRight: 4,
                  }}>
                  {tag.name}
                </Text>
              ))}
            </View>

            {/* 是否置顶 */}
            {item.is_top && (
              <Text
                style={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  lineHeight: 20,
                  fontSize: 12,
                  color: 'white',
                  backgroundColor: 'black',
                  padding: 4,
                  borderRadius: 6,
                }}>
                置顶
              </Text>
            )}
          </View>
        )}
      />
    </View>
  );
};
