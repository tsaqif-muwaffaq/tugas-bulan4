// File: components/SectionListExample.tsx
import React from 'react';
import { SectionList, Text, View, StyleSheet } from 'react-native';

type SectionData = {
  title: string;
  data: string[];
};

const sections: SectionData[] = [
  { title: 'Fruits', data: ['Apple', 'Banana', 'Cherry'] },
  { title: 'Vegetables', data: ['Carrot', 'Broccoli', 'Spinach'] },
  { title: 'Drinks', data: ['Water', 'Juice', 'Tea'] },
];

const SectionListExample: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.header}>📑 SectionList Example</Text>
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeader}>{title}</Text>
      )}
      contentContainerStyle={styles.listContent}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
  listContent: { paddingHorizontal: 16 },
  header: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1e293b',
    marginBottom: 12,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#e0f2fe',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    color: '#0f172a',
    marginTop: 8,
  },
  item: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  itemText: { fontSize: 16, color: '#0f172a' },
});

export default SectionListExample;
