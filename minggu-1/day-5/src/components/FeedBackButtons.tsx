import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, StyleSheet, Alert } from 'react-native';

const FeedbackButtons = () => {
  const handlePress = () => Alert.alert('Pressed!');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.opacityBtn}
        activeOpacity={0.8}
        onPress={handlePress}
      >
        <Text style={styles.text}>Opacity Feedback</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={styles.highlightBtn}
        activeOpacity={0.9}
        underlayColor="#F0F0F0"
        onPress={handlePress}
        onShowUnderlay={() => console.log('Show underlay')}
      >
        <Text style={styles.textAlt}>Highlight Underlay</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6FA',
    paddingHorizontal: 24,
    gap: 24,
  },
  opacityBtn: { 
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 12,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    minWidth: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlightBtn: { 
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#007AFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 4,
    minWidth: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { 
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  textAlt: { 
    color: '#007AFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
});

export default FeedbackButtons;
