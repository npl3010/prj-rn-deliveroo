import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function AppContainer(props) {
    return (
        <View style={styles.appContainer}>
            <Text className="text-green-800">Hello, world!</Text>
        </View>
    );
}

export default AppContainer;