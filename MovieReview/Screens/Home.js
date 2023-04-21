import { View, Text, StyleSheet,Dimensions,TouchableOpacity,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import HeaderTab from '../Components/HeaderTab'
import MovieData from '../LocalDB/Movies'
import MovieView from '../Components/MovieView'
import Carousel,{ParallaxImage} from 'react-native-snap-carousel' 
import { useNavigation } from '@react-navigation/native'
import {firebase,db} from '../Firebase'

const Home = () => {

  const navigation = useNavigation()

  const [FBmovies,setFBmovies] = useState([])

  const [TrendingMovies,setTrendingMovies] = useState([])
  const [TopRatedMovies,setTopRatedMovies] = useState([])


  

  useEffect(() => {
    const unsubscribe = db.collection('Movies').onSnapshot((snapshot) => {
        setFBmovies(snapshot.docs.map(doc => ({
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
    return unsubscribe
},[])


useEffect(() => {
  const unsubscribe = db.collection('Trending').onSnapshot(snapshot => {
      setTrendingMovies(snapshot.docs.map(doc => ({
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
  return unsubscribe
},[])


useEffect(() => {
  const unsubscribe = db.collection('TopRated').onSnapshot(snapshot => {
      setTopRatedMovies(snapshot.docs.map(doc => ({
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
  return unsubscribe
},[])

useEffect(() =>{
  if(TrendingMovies){
    console.log(TrendingMovies)
  }
  
},[])


  const CarouselCardItem = (({item,index},parallaxProps) => {
    return (
        <TouchableOpacity key = {index} onPress = {() => navigation.navigate("ViewMovie",{
          Title: item.Title,
          Description: item.Description,
          Poster: item.Poster,
          //tags: item.tags,
          Rating: item.Rating,
          Summary: item.Summary,
          Date: item.ReleaseDate
      })}>
            <View style = {styles.Item}>
                <ParallaxImage 
                source = {{uri: item.Poster}}
                containerStyle = {styles.imageContainer}
                style = {styles.image}
                parallaxFactor = {0.4}
                {...parallaxProps}
                />
                {/* <Text style={{fontWeight: '700'}}>
                    { item.title }
                </Text> */}

            </View>
        </TouchableOpacity>
      )
})
const windowWidth = Dimensions.get("window").width
const SLIDE_WIDTH = Math.round(windowWidth/3.5)

const { width: screenWidth } = Dimensions.get('window')
const SLIDER_WIDTH = Dimensions.get('window').width + 80
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
const isCarousel = React.useRef(null)


  return (
   <View>
      <HeaderTab />
      {/* showsVerticalScrollIndicator  = 'false' */}
      <ScrollView >
      <View style = {styles.carouselContainer}>

        <Text style = {styles.LabelText}>Trending Movies</Text>

        <Carousel
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={TrendingMovies}
          renderItem={CarouselCardItem}
          hasParallaxImages={true}
          />
      </View>

     
      <View style = {styles.TrendingContainer}>
            <MovieView label = "Top Rated Movies" item = {TopRatedMovies} />
      </View>

      <View style = {styles.Allmovies}>
            <MovieView label = "Movies Today" item = {FBmovies} />
      </View>

    </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({

  carouselContainer: {
    marginTop: 20,
    marginBottom: 20,
  },

  image: {
   
    ...StyleSheet.absoluteFillObject,
  
    resizeMode: 'contain',
    
    
  },
  imageContainer: {
    flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
  },
  Item:{
  width: Dimensions.get('window').width - 100,
  height: Dimensions.get('window').width + 50,

    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    
    
    marginBottom: 10

  },

  LabelText: {
    fontWeight: '700',
        fontSize: 23,
        marginRight: 10,
        marginBottom: 15,
        marginLeft: 10,
  },

  Allmovies: {
    paddingBottom: 100,
  },

})

export default Home