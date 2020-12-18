import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'

const HomeScreen = (props) => {
    console.log('uri ' + props.route.params.uri);
    return (
        <View>
            <Image style={{ width: 120, height: 120 }}
                source={{ uri: props.route.params.uri }}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
