import React from 'react'
import { SafeAreaView, Text , StyleSheet,ScrollView} from 'react-native'
import Header from '../componets/home/Header'
import Stories from '../componets/home/Stories'
import Post from '../componets/home/Post'
import{ POSTS } from '../data/post'
import BottomTabs, { bottomTabIcons } from '../componets/home/BottomTabs'



const HomeScreen = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <Header/>
            <Stories/>
            <ScrollView>
                {POSTS.map((post,index)=>(
                     <Post post={post} key={index} />
                ))}
                
             </ScrollView>
            <BottomTabs icons ={bottomTabIcons}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
})

export default HomeScreen
