import React from 'react'
import { View, Text, StyleSheet , Image,TouchableOpacity} from 'react-native'


const Header = () => {
    return (
        <View>
            <TouchableOpacity>
                <Image
                style={styles.logo}
                source={require('../../pictures/Instagram-Logo.png')}
                    />
             </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',

    },
    logo: {
        
        width: 140,
        height: 100,
        resizeMode: 'contain',
    }
})

export default Header
