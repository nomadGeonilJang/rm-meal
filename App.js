import React from 'react';
import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,  StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={{flex:1, marginTop:StatusBar.currentHeight}}>
        <View style={styles.container}>
          <Text>Search</Text>
        </View>
        <View style={styles.container}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto"/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
