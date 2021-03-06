import React from 'react'
import { View, Text , StyleSheet, Image} from 'react-native'
import Divider from 'react-native-divider'
import { TouchableOpacity } from 'react-native'

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl:
        'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
        likedImageUrl:'https://img.icons8.com/emoji/96/000000/heart-suit.png'
    },
    {
        name: 'Comment',
        imageUrl:
        'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-comment-chat-flatart-icons-outline-flatarticons-2.png',
        
    },
    {
        name: 'Share',
        imageUrl:
        'https://img.icons8.com/external-outline-juicy-fish/60/ffffff/external-share-arrows-outline-outline-juicy-fish.png',
        
    },
    {
        name: 'Save',
        imageUrl:
        'https://img.icons8.com/ios/50/ffffff/instagram-new--v1.png',
        
    },
]


const Post = ({post}) => {
    return (
        <View style={{
            borderTopColor: 'gray',
            borderTopWidth: 1,
            }}> 
        <View style = {{marginBottom: 30}}>
          
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style = {{marginHorizontal: 15, marginTop: 10}}>
          
                <PostFooter/>
                <Likes post ={post}/>
                <Caption post = {post}/>
                <CommentsSection post = {post} />
                <Comments post={post}/>
            </View>
        </View>
        </View>
    )
}

const PostHeader = ({post}) => (
    
    

    <View 
    style = {{  flexDirection:'row',
                justifyContent:'space-between',
                margin: 5,
                alignItems: 'center',
                
    }}>
        
        <View style={{flexDirection: 'row',alignItems:'center'}}>
        
            <Image source={{uri: post.profile_picture}} style = {styles.story} />
            <Text style = {{color: 'white',marginLeft: 5,fontWeight:'700' }}>{post.user}</Text>
        </View>
       
        <Text style = {{color: 'white', fontWeight: 'bold' }}>...</Text>

    </View>
   
)

const PostImage = ({post}) =>(
    <View 
    style ={{
        width: '100%',
        height: 400,
    }}>
        <Image source = {{uri: post.imageUrl}} 
        style={{height: '100%', resizeMode: 'cover'}}
        />
    </View>

)

const PostFooter = () => (
    <View style ={{flexDirection: 'row',justifyContent: 'space-between'}}>
        <View style = {styles.leftFooterIconsContainer}>
            <Icon imgStyle={ styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl}/>
            <Icon imgStyle={ styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl}/>
            <Icon imgStyle={ styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl}/>
        </View>
        <View>
        <Icon imgStyle={ styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl}/>
        </View>
    </View>
   
)

const Icon = ({imgStyle,imgUrl}) => (
    <TouchableOpacity>
        <Image style = {imgStyle} source={{uri: imgUrl}}/>
    </TouchableOpacity>
)

const Likes = ({post}) => (
    <View style = {{ flexDirection: 'row', marginTop: 4}}>
     <Text style={{color: 'white',fontWeight: 'bold'}}> {post.likes.toLocaleString('en')}</Text>
    </View>
)

const Caption = ({post}) => (
    <View style = {{marginTop: 5}}> 
    <Text style = {{color :'white'}}>
       <Text style = {{fontWeight:'bold'}}>{post.user}</Text> 
       <Text> {post.caption}</Text> 
        
     </Text>
     </View>
)

const CommentsSection = ({post}) => (
    <View style = {{marginTop: 5}}>
        <Text style ={{color: 'gray'}}>
            View all comments
        </Text>
    </View>
)

const Comments = ({post}) => (
    <>
    {post.commets.map((comment, index) => (
        <View key = {index} style = {{flexDirection: 'row', marginTop: 5}}>
            <Text style = {{color: 'white'}}> 
                <Text style = { { fontWeight: 'bold'}}>{comment.user}</Text>
                 {' '}{comment.comment}
            </Text>
        </View>
    ))}
    </>
)

const styles = StyleSheet.create({
    story:{
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501',
    },
    footerIcon :{
        width: 33,
        height: 33,
    },
    leftFooterIconsContainer:{
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between',
    }
})



export default Post
