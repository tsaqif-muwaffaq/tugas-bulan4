import React from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableNativeFeedback, Platform, StyleSheet, Alert } from 'react-native';

const AdvancedTouches = () => {
  const handleLongPress = () => Alert.alert('Long Press!');
  const background = TouchableNativeFeedback.Ripple('#007AFF', true);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => Alert.alert('Pressed!')}
        onLongPress={handleLongPress}
        delayLongPress={1000}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      >
        <View style={styles.noFeedback}>
          <Text style={styles.textNoFeedback}>No Visual Feedback</Text>
        </View>
      </TouchableWithoutFeedback>

      {Platform.OS === 'android' && (
        <TouchableNativeFeedback
          background={background}
          onPress={() => Alert.alert('Native Ripple!')}
          useForeground={TouchableNativeFeedback.canUseNativeForeground()}
        >
          <View style={styles.nativeBtn}>
            <Text style={styles.textNative}>Android Native</Text>
          </View>
        </TouchableNativeFeedback>
      )}
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
    gap: 28,
  },
  noFeedback: { 
    backgroundColor: '#6C757D',
    paddingVertical: 16,
    paddingHorizontal: 36,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 4,
    minWidth: 200,
    alignItems: 'center',
  },
  nativeBtn: { 
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 36,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
    minWidth: 200,
    alignItems: 'center',
  },
  textNoFeedback: { 
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  textNative: { 
    color: '#007AFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
});

export default AdvancedTouches;
