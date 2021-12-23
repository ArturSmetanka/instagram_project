import React from 'react'
import { SafeAreaView, Text , StyleSheet,ScrollView} from 'react-native'
import Header from '../componets/home/Header'
import Stories from '../componets/home/Stories'
import Post from '../componets/Post'
import{ POSTS } from '../data/post'



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
