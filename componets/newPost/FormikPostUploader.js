import React, { useState } from 'react'
import { View, Text, Image, TextInput, Button } from 'react-native'
import * as Yup from 'yup'
import { Formik, formik } from 'formik'

const PLACEHOLDER_IMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThhFX3DpnjA_BzIxlPlDGeqZXofbexVw8aWR7Of8RVZ50tITW384hvjIWxPsFX7w1c-FU&usqp=CAU'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit.')
})

const FormikPostUploader = () => {
    const[thumbnailURL, setThumbnailURL] = useState(PLACEHOLDER_IMG)
    return (
        <Formik
            initialValues = {{caption: '', imageUrl: ''}}
            onSubmit = {(values) => console.log(values)}
            validationSchema={uploadPostSchema}
            validateOnMount = {true}
            >
            {({ handleBlur, handleChange,handleSubmit,values, errors,isValid}) => 
                <>
                    <View style = {{
                        margin: 20, 
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        
                        }}>
                        <Image source={{uri: thumbnailURL ? thumbnailURL :PLACEHOLDER_IMG }} 
                        style = {{ width: 100, height: 100 }}/>
                    
                        <View style = {{flex:1,marginLeft: 12}}>
                            <TextInput 
                            style = {{color: 'white', fontSize: 20}}
                            placeholder='Write a caption...' placeholderTextColor={'gray'}
                            multiline={true}
                            onChangeText={handleChange('caption')}
                            onBlur={handleBlur('caption')}
                            value={values.caption}
                            />
                         </View>
                       
                    </View>
                    <View 
                        style={{
                            borderTopColor: 'gray',
                            borderTopWidth: 0.2,
                        }}> 
                            <TextInput 
                            onChange={e=> setThumbnailURL(e.nativeEvent.text)}
                            style = {{color: 'white', fontSize: 18}}
                            placeholder='Enter image URL' placeholderTextColor={'gray'}
                            onChangeText={handleChange('imageUrl')}
                            onBlur={handleBlur('imageUrl')}
                            value={values.imageUrl}
                            />

                            {errors.imageUrl && (
                                <Text style = {{fontSize: 10, color: 'red'}}>
                                    {errors.imageUrl}
                                </Text>
                            )}

                            <Button  onPress={handleSubmit} title='Share' disabled = {!isValid} />
                    </View>
                </>
            }

        </Formik>
    )
}

export default FormikPostUploader
