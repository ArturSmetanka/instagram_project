import React, { useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'


export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/ios-filled/50/ffffff/home.png',
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios/50/ffffff/search.png',
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios/50/ffffff/instagram-reel.png',
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/50/ffffff/external-shop-public-service-photo3ideastudio-lineal-photo3ideastudio.png',
    },
    {
        name: 'Home',
        active: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    },
]

const BottomTabs = ({icons}) => {
    const [activeTab,setActiveTab] = useState('Home')
  
    const Icon = ({ icon })=> (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image  source ={{uri: icon.active}} style = {styles.icon} />
        </TouchableOpacity>
    )

    
    return (
        <View style={styles.wrapper}>
            
                
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

    },
    container: {
        flexDirection:'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,

    },
    icon: {
        width:30,
        height:30,
    },
})

export default BottomTabs
