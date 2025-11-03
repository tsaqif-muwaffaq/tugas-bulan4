// File: components/ScrollViewExample.tsx
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const ScrollViewExample: React.FC = () => {
  const colors = ['#fca5a5', '#fdba74', '#fde68a', '#a7f3d0', '#bfdbfe', '#ddd6fe'];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📜 ScrollView Example</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {colors.map((color, index) => (
          <View key={index} style={[styles.box, { backgroundColor: color }]}>
            <Text style={styles.boxText}>Box {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
  header: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1e293b',
    marginBottom: 12,
  },
  scrollContent: { paddingHorizontal: 16 },
  box: {
    width: 120,
    height: 120,
    marginRight: 12,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  boxText: { color: '#0f172a', fontWeight: '600' },
});

export default ScrollViewExample;
