import React from 'react'
import { View, Text,StyleSheet, Image, TouchableOpacity} from 'react-native'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = () => (
    <View>
        <Header/>
        <FormikPostUploader/>
    </View>
)

const Header = () => (
    <View style = {styles.headerContainter} >
            <TouchableOpacity>
            <Image
                source={{uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png'}} 
                style = {{width: 30,height: 30}}
            />
            </TouchableOpacity>
            <Text style = {styles.headerText}> NEW POST </Text>
            <Text> </Text>
        </View>
)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    headerContainter: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    headerText:{
        color: 'white',
        fontWeight: '700',
        fontSize:20,
        marginRight: 25,


    },
})

export default AddNewPost