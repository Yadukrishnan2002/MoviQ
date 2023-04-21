import { View, Text, StyleSheet,SafeAreaView, Image,TouchableOpacity } from 'react-native'
import React from 'react'

const HeaderTabViewMovie = ({navigation,title}) => {
  return (
    <View style = {styles.container}>
        <View style = {styles.Header}>
            <View style = {styles.TextIconsContainer}>
                <View style = {styles.LogoWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image resizeMode='contain' source = {{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxklEQVR4nOWSMQoCMRBFHyts9DS5gWxlrWUaj6On0NIDWIjWHkA8hGLnEbIEppBl3SyZpNEPH0KK/2Z+Av+oCrDASmzlLlt4A7iOba7weU+4k02KhTtgWaIWl6OiakR4k/rIsVqchE9SwqfAAXiLj8A61+RBe8B3fPuAqMKRqX2P78AitZYxAA9cpEKVdgMAD5wAowHMgGtpSC2/Zwhy1tZlZNKim5gRkC1K1ZG6XlpADPIgk8yXuja5AAgkdP4Uh3PY7kfVAgLIatoyNJx1AAAAAElFTkSuQmCC'}} style = {styles.Logo}/>
                    </TouchableOpacity>
                   
                </View>
                <View style = {styles.TitleContainer}>
                   <Text style = {styles.TitleText}>{title}</Text>
                </View>
                
            </View>
            {/* <View style = {styles.SearchIconWrapper}>
                <TouchableOpacity>  
                    <Image source={{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChklEQVR4nO2Zu24TQRSGPxeElgYbEVIYHoECCJdXQAIH+YKECA+AxEVESAl0wAsgUUEKpCiiIDFKDYGGS96AhhZSBZGQ2MFwpH+lKQxi8czYu+wnjbTy5f/3jPecOTOGgoKR5AAwDcwDa8A6sKPxBfig9y4DFUaQM0Ab6AC9vxz22WXgNCPAEWDFubku8Aq4BhwDysAeDbs+DlwHVvXZ5HsvgMPDCqIFfNWNfAPuAftTfN8Cuw9sSmMDaBCZOWc2F4DxAbQOAYuO3iyRuCvDH7ouedK9CuzGCqYlIzOsBdCfcoKpEzCxk5y4FcoEmHFyphrCYMXJiZCUnJxph1gneqowE4RnXJWwB5zyKdyWqJXYWFhpNs8ln21HRwtYmnViUGyd6aq9seuBuaKZeUl8Xsv7kg+xeYlZ2xGbG/J+7ENsTWLWO8VmUt7vfIitSyxmfiRU5P3Zh9i2xMaIz155f89LIBt5ebQ++kx22xTF5qS8rQznovw+8iE2LTHbnsbmjbzP+XpOkxbFS6uQskXpAPt8iS5rZqyRi8UDeVpL740TEt0aQht/1Ld425khX/v0fpj2M3k9D2FQ1cLU03Y0FLflYSeTB0OZNJzDBzso8M0F5/DhLIGZdYKZ8fSYlfRLJEHs6sSGWMEkOWOHbP/KhJMT7rDS2yQCdSdnNlWa06wzZZXYLacx7PYJpkEEqk41S4xX1VpMajEd06jotZvqndybXlBiN4cZDDqyWUr5t4JtD572aUZ/F0ydiJR1UPAEeK8Suq3F7RPwFniom/rTtqAxCsH4wsp7p08wF8lRMC0yyFSegqn9D8E0yWgwO0UwGSkAc2SU885jdoeMU4v5d3ZBwa8Z+Ak4rhMJLuUtjQAAAABJRU5ErkJggg=="}} style = {styles.SearchIcon} />
                </TouchableOpacity>
            </View> */}
  
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 30,
  
        backgroundColor: '#f0f0f0'

    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        borderRadius: 15,
        width: '100%',
        zIndex: 1000,
        paddingBottom: 5
    },

    TextIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    SearchIcon: {
        width: 25,
        height: 25,
        
    },
    
    LogoWrapper: {
        marginLeft: 20,
     
    },

    Logo: {
        width: 30,
        height: 30,
    },

    SearchIconWrapper: {
        marginRight: 20,
        paddingBottom: 10,


    
    },

    TitleContainer:{
        justifyContent: 'center',
        paddingLeft: 15,
        
    }, 

    TitleText: {
        fontSize: 18,
        fontWeight:'600'
    },

    


})

export default HeaderTabViewMovie