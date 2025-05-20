import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ProfileButtons = ({ onUpdate, onCancel }) => {
  return (
    <View style={styles.container}>
      <Button title="Update" onPress={onUpdate} color="#4CAF50" />
      <View style={styles.spacer} />
      <Button title="Cancel" onPress={onCancel} color="#F44336" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  spacer: {
    width: 20,
  },
});

export default ProfileButtons;