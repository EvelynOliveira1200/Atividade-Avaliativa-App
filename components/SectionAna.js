import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

export default function Section({text}){
    return(
    <View styles={styles.section}>
        <Text styles={styles.sectionText}>{text}</Text>
    </View>
    );
}

const styles= StyleSheet.create({
    
});