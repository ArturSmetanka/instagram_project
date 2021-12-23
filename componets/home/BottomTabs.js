import React, { useState } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'


export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/ios-filled/50/ffffff/home.png',
        inactive: 'https://img.icons8.com/ios-filled/50/808080/home.png',
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios/50/ffffff/search.png',
        inactive: 'https://img.icons8.com/ios/50/808080/search.png',
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios/50/ffffff/instagram-reel.png',
        inactive: 'https://img.icons8.com/ios/50/808080/instagram-reel.png',
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/50/ffffff/external-shop-public-service-photo3ideastudio-lineal-photo3ideastudio.png',
        inactive: 'https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/50/808080/external-shop-public-service-photo3ideastudio-lineal-photo3ideastudio.png',
    },
    {
        name: 'Profile',
        active: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
        inactive: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    },
]

const BottomTabs = ({icons}) => {
    const [activeTab,setActiveTab] = useState('Home')
  
    const Icon = ({ icon })=> (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image  source ={{uri: activeTab == icon.name ? icon.active : icon.inactive}} 
            style = {[styles.icon,icon.name =='Profile'? styles.profilePic() : null,
            activeTab == 'Profile' && icon.name == activeTab ? styles.profilePic(activeTab) : null,
            ]} />
        </TouchableOpacity>
    )

    
    return (
        
        <View style={styles.wrapper}>
            <View style={{
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        }} />
                
            <View style = {styles.container}>
                {icons.map((icon,index)=>(
                    <Icon key={index} icon = {icon}/>
                ))}
            </View>
         </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        position:'absolute',
        width:'100%',
        bottom:'0%',
        zIndex:999,
        backgroundColor: '#000',

    },
    container: {
        flexDirection:'row',
        justifyContent: 'space-around',
        height: 50,
        alignItems:'center',

    },
    icon: {
        width:30,
        height:30,
    },
    profilePic:(activeTab = '') =>({
        borderRadius: 50,
        borderWidth: activeTab == 'Profile' ? 2 : 0,
        borderColor:'#fff'
    }),
})

export default BottomTabs
