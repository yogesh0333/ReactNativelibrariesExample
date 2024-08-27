import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function CodeScreen() {
  return (
    <WebView
      source={{
        uri: 'https://github.com/yogesh0333/ReactNativelibrariesExample/tree/main/ReactNativeNavigation',
      }}
      style={{flex: 1}}
    />
  );
}

const styles = StyleSheet.create({});
