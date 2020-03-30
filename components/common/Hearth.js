import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Hearth({ style }) {
    return (
        <Image source={require('../../assets/images/heart_logo.png')} style={style || styles.headerImage} />
    );
}

const styles = StyleSheet.create({
    headerImage: {
        width: 26,
        height: 26,
    },
});