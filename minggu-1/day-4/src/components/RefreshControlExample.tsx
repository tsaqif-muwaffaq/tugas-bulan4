// File: components/RefreshControlExample.tsx
import React, { useState, useCallback } from 'react';
import { ScrollView, RefreshControl, Text, StyleSheet } from 'react-native';

const RefreshControlExample: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#3b82f6" />
      }>
      <Text style={styles.header}>🔄 RefreshControl Example</Text>
      <Text style={styles.text}>
        Pull down to trigger refresh. This is commonly used in ScrollView or FlatList to reload data.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f8fafc' },
  header: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1e293b',
    marginBottom: 12,
  },
  text: { fontSize: 16, color: '#475569', lineHeight: 22, textAlign: 'center' },
});

export default RefreshControlExample;
