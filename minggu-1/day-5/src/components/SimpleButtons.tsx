import React from 'react';
import { View, Text, Button, Pressable, StyleSheet, Alert } from 'react-native';

const SimpleButtons = () => {
  const handlePress = () => Alert.alert('Pressed!');

  return (
    <View style={styles.container}>
      <Button title="Button Sederhana" onPress={handlePress} color="#007AFF" />
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressed
        ]}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Text style={styles.text}>Pressable Custom</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6FA', // lebih lembut dari sebelumnya
    paddingHorizontal: 24,
    gap: 28,
  },
  pressable: { 
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 12,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 180,
  },
  pressed: { 
    opacity: 0.9,
    transform: [{ scale: 0.97 }],
    shadowOpacity: 0.15,
  },
  text: { 
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
});

export default SimpleButtons;
