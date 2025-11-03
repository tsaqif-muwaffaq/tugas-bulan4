// File: components/FlatListExample.tsx
import React, { useState, useCallback } from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ListRenderItem,
  ListRenderItemInfo,
} from 'react-native';

type Item = {
  id: string;
  title: string;
};

const FlatListExample: React.FC = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [data, setData] = useState<Item[]>(
    Array.from({ length: 20 }, (_, i) => ({ id: i.toString(), title: `Item ${i + 1}` }))
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setData(prev => [...prev, { id: Date.now().toString(), title: 'New Item' }]);
      setRefreshing(false);
    }, 1000);
  }, []);

  const renderItem: ListRenderItem<Item> = ({ item }: ListRenderItemInfo<Item>) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  // ✅ FIX: ubah tipe parameter pertama jadi ArrayLike<Item>
  const getItemLayout = (_data: ArrayLike<Item> | null | undefined, index: number) => ({
    length: 70,
    offset: 70 * index,
    index,
  });

  return (
    <FlatList<Item>
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      getItemLayout={getItemLayout}
      refreshing={refreshing}
      onRefresh={onRefresh}
      ListHeaderComponent={<Text style={styles.header}>🗂 FlatList Example</Text>}
      ListFooterComponent={<Text style={styles.footer}>End of FlatList</Text>}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingVertical: 16,
    backgroundColor: '#f8fafc',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1e293b',
    marginBottom: 12,
    paddingVertical: 16,
    backgroundColor: '#e0f2fe',
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e1',
    letterSpacing: 0.5,
  },
  item: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    color: '#0f172a',
    fontWeight: '500',
  },
  separator: {
    height: 10,
  },
  footer: {
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 14,
    color: '#64748b',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    marginTop: 8,
    backgroundColor: '#f1f5f9',
  },
});

export default FlatListExample;
