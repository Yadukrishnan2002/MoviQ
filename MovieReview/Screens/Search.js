import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView, Dimensions } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import {firebase,db} from '../Firebase'
import { Title } from 'react-native-paper'


const Search = () => {

const navigation = useNavigation()

    const[movies,setMovies] = useState(null)
    const[search,setSearch] = useState('')
    const[result,setResult] = useState(null)

    useEffect(() => {
        db.collection('Movies').onSnapshot(snapshot => {
            setMovies(snapshot.docs.map(doc => ({
                id: doc.id,
                Title: doc.data().Title,
                Description: doc.data().Description,
                Summary: doc.data().Summary,
                Rating: doc.data().Rating,
                ReleaseDate: doc.data().ReleaseDate,
                Poster: doc.data().Poster,
                Popularity: doc.data.Popularity,
                }))
            )
        })
    },[])


    useEffect(() => {
        db.collection('Movies').onSnapshot(snapshot => {
            setMovies(snapshot.docs.map(doc => ({
                id: doc.id,
                Title: doc.data().Title,
                Description: doc.data().Description,
                Summary: doc.data().Summary,
                Rating: doc.data().Rating,
                ReleaseDate: doc.data().ReleaseDate,
                Poster: doc.data().Poster,
                Popularity: doc.data.Popularity,
                }))
            )
        })
        if(movies != undefined){
            const finalresult = movies.filter(result => {
                return result.Title.toLowerCase().indexOf(search.toLowerCase()) !== -1
            })
            setResult(finalresult)
            console.log(finalresult);
        }
    },[search])


  return (
    <View style = {styles.Container}>
       <View style = {styles.HeaderSection}>

            <View style = {styles.HeaderSectionImage}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='contain' source = {{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxklEQVR4nOWSMQoCMRBFHyts9DS5gWxlrWUaj6On0NIDWIjWHkA8hGLnEbIEppBl3SyZpNEPH0KK/2Z+Av+oCrDASmzlLlt4A7iOba7weU+4k02KhTtgWaIWl6OiakR4k/rIsVqchE9SwqfAAXiLj8A61+RBe8B3fPuAqMKRqX2P78AitZYxAA9cpEKVdgMAD5wAowHMgGtpSC2/Zwhy1tZlZNKim5gRkC1K1ZG6XlpADPIgk8yXuja5AAgkdP4Uh3PY7kfVAgLIatoyNJx1AAAAAElFTkSuQmCC'}} style = {styles.Logo}/>
                </TouchableOpacity>
            </View>
            
            <View style = {styles.HeaderSectionTitle}>
                <Text style = {styles.SearchText}>Search</Text>
            </View>
       </View>

       <View style = {styles.SearchWrapper}> 
            <View style = {styles.SearchBox}>
                <Image source={{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChklEQVR4nO2Zu24TQRSGPxeElgYbEVIYHoECCJdXQAIH+YKECA+AxEVESAl0wAsgUUEKpCiiIDFKDYGGS96AhhZSBZGQ2MFwpH+lKQxi8czYu+wnjbTy5f/3jPecOTOGgoKR5AAwDcwDa8A6sKPxBfig9y4DFUaQM0Ab6AC9vxz22WXgNCPAEWDFubku8Aq4BhwDysAeDbs+DlwHVvXZ5HsvgMPDCqIFfNWNfAPuAftTfN8Cuw9sSmMDaBCZOWc2F4DxAbQOAYuO3iyRuCvDH7ouedK9CuzGCqYlIzOsBdCfcoKpEzCxk5y4FcoEmHFyphrCYMXJiZCUnJxph1gneqowE4RnXJWwB5zyKdyWqJXYWFhpNs8ln21HRwtYmnViUGyd6aq9seuBuaKZeUl8Xsv7kg+xeYlZ2xGbG/J+7ENsTWLWO8VmUt7vfIitSyxmfiRU5P3Zh9i2xMaIz155f89LIBt5ebQ++kx22xTF5qS8rQznovw+8iE2LTHbnsbmjbzP+XpOkxbFS6uQskXpAPt8iS5rZqyRi8UDeVpL740TEt0aQht/1Ld425khX/v0fpj2M3k9D2FQ1cLU03Y0FLflYSeTB0OZNJzDBzso8M0F5/DhLIGZdYKZ8fSYlfRLJEHs6sSGWMEkOWOHbP/KhJMT7rDS2yQCdSdnNlWa06wzZZXYLacx7PYJpkEEqk41S4xX1VpMajEd06jotZvqndybXlBiN4cZDDqyWUr5t4JtD572aUZ/F0ydiJR1UPAEeK8Suq3F7RPwFniom/rTtqAxCsH4wsp7p08wF8lRMC0yyFSegqn9D8E0yWgwO0UwGSkAc2SU885jdoeMU4v5d3ZBwa8Z+Ak4rhMJLuUtjQAAAABJRU5ErkJggg=="}} style = {styles.SearchIcon} />
                <TextInput style = {styles.searchInput} value = {search} onChangeText={(search) => setSearch(search)} placeholder='Search for a Movie' placeholderTextColor={'#7f7f7f'} />
            </View>
       </View>

       <View style = {styles.MovieDisplay}>
            {
                search != '' && result && (
                    
                    <View style = {styles.ResultMovies}>
                        <Text style = {styles.topMatchText}>Top Matches</Text>
                        <ScrollView>
                            <View style = {styles.ResultWrapper}>
                                {
                                    result.map((movie,index) => {
                                        return(
                                            <TouchableOpacity key={index} onPress={() => navigation.navigate("ViewMovie",{
                                                Title: movie.Title,
                                                Description: movie.Description,
                                                Poster: movie.Poster,
                                                //tags: movie.tags,
                                                Rating: movie.Rating,
                                                Summary: movie.Summary,
                                                Date: movie.ReleaseDate,
                                            })}>
                                                <View style = {styles.MovieCard}>
                                                    <Image resizeMode='cover' source = {{uri: movie.Poster}} style = {styles.MoviePoster}/>
                                                </View>

                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        </ScrollView>
                    </View>   
                )
            }
       </View>

    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    Container: {
        marginTop: 40,
    },
    Logo: {
        width: 30,
        height: 30,
    },
    HeaderSection: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },
    SearchText: {
        fontSize: 24,
        fontWeight: '600',
    },
    HeaderSectionTitle: {
        marginLeft: 15,
    },
    SearchIcon: {
        width: 20,
        height: 20,
        marginLeft: 20,
    },
    SearchBox: {
        flexDirection: 'row',
        backgroundColor: '#cacbcc',
        height: 45,
        borderRadius: 15,
        alignItems: 'center'
    },
    SearchWrapper: {
        marginTop: 10,
        padding: 10,
    },
    searchInput: {
        marginLeft: 15,
    },
    MoviePoster: {
        width: (Math.round(Dimensions.get('window').width * 35) / 100),
        height: 200,
        borderRadius: 10,
    },
    ResultWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
    },
    MovieCard: {
        padding: 20,
       
    },
    topMatchText: {
        marginLeft: 30,
        fontSize: 20,
        fontWeight: '600',
        marginTop: 20,
    },
})