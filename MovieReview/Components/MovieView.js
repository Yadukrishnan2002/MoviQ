import { View, Text,StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const MovieView = ({label,item}) => {

    const navigation = useNavigation()

  return (
    <View style = {styles.container}>
      <Text style = {styles.labelText}>{label}</Text>
      
      {/* showsHorizontalScrollIndicator = 'False' */}
      <ScrollView horizontal style = {styles.MovieScroll} >
        {   
            item.map((movie,index) => (
                
                <TouchableOpacity key = {index} onPress = {() => navigation.navigate("ViewMovie",{
                    Title: movie.Title,
                    Description: movie.Description,
                    Poster: movie.Poster,
                    //tags: movie.tags,
                    Rating: movie.Rating,
                    Summary: movie.Summary,
                    Date: movie.ReleaseDate,

                })}>
                    <View style = {styles.MovieCard}>
                        <Image resizeMode='cover' source = {{uri: movie.Poster}} style = {styles.MoviePoster} />
                    </View>
                </TouchableOpacity>
            ))
        }

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        
    },

    labelText: {
        fontWeight: '700',
        fontSize: 23,
        marginRight: 10,
        marginBottom: 15,
        marginLeft: 10,
    },

    MovieScroll: {
        paddingLeft: 10,
    },

    MovieCard: {
        paddingRight: 20,
    },
    MoviePoster: {
        width: (Math.round((Dimensions.get('window').width * 35)/100)),
        height: 200,
        borderRadius: 10,
    }

})

export default MovieView