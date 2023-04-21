import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import React,{useState} from 'react'
import HeaderTabViewMovie from '../Components/HeaderTabViewMovie'
import Cover from '../Components/Cover'

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
  } from 'react-native-chart-kit';


  const MyPieChart = () => {
    return (
      <>
        <Text style={styles.header}>Pie Chart</Text>
        <PieChart
          data={[
            {
              name: 'Seoul',
              population: 21500000,
              color: 'rgba(131, 167, 234, 1)',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'Toronto',
              population: 2800000,
              color: '#F00',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'New York',
              population: 8538000,
              color: '#ffffff',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'Moscow',
              population: 11920000,
              color: 'rgb(0, 0, 255)',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
          ]}
          width={Dimensions.get('window').width - 16}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute //for the absolute number remove if you want percentage
        />
      </>
    );
  };


const ViewMovie = ({navigation,route}) => {

    console.log(route)
    const [Title,setTitle] = useState(route.params.Title)
    const [Description,setDescription] = useState(route.params.Description)
    const [Poster, setPoster] = useState(route.params.Poster)
    const [tags,setTags] = useState(['Action','Drama','Thriller'])
    // const [tags,setTags] = useState(route.params.tags)
    const [Rating, setRating] = useState(route.params.Rating)
    const [Summary,setSummary] = useState(route.params.Summary)
    const [Date,setDate] = useState(route.params.Date)






  
  return (
    <View>
    <HeaderTabViewMovie navigation={navigation} title = {Title}/>
    {/* showsVerticalScrollIndicator  = 'false' */}
      <ScrollView >
            <View style = {styles.CoverImage}>
                <Cover title = {Title} body = {Description} imgUrl = {Poster} tags = {tags} score = {Rating} review = {Summary} date = {Date}/>
            </View>

            <View style = {styles.MovieContent}>

                <View style = {styles.DescriptionContainer}>
                    <Text style = {styles.DescriptionTitle}>Description</Text>
                    <View style = {styles.DescriptionBodyContainer}> 
                        <Text style = {styles.DescriptionBody}>{Description}</Text>
                    </View>
                   
                </View> 

                <View style = {styles.ReviewContainer}>
                    <Text style = {styles.ReviewTitle}>Film Critique</Text>

                    <View style = {styles.ReviewBodyContainer}>
                        <Text style = {styles.ReviewBody}>{Summary}</Text>
                    </View>

                </View>

                {/* <View style = {styles.ReviewGraph}>

                    <MyPieChart />

                </View> */}

                
                
            </View>

            
            
      </ScrollView>
      
    </View>
  )
}

export default ViewMovie

const styles = StyleSheet.create({
    

    MovieContent: {
        backgroundColor: 'rgba(255,255,255,1)',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height + (0.1 * Dimensions.get('window').height)
    },

    DescriptionContainer: {
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
    },

    DescriptionBodyContainer: {
        paddingTop: 10,
       
    },

    DescriptionTitle: {
        fontSize: 22,
        fontWeight: '600',
        paddingTop: 5,
    },

    DescriptionBody: {
        fontSize: 16
    },

    ReviewContainer: {
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 20,
        margin: 15,
        marginTop: 30,
        borderRadius: 20,
        backgroundColor: 'rgba(230, 230, 230,1)',

        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        
    },
    ReviewTitle: {
        fontSize: 22,
        fontWeight: '700',
        paddingTop: 5,
    },

    ReviewBodyContainer: {
        paddingTop: 10,
    },
    ReviewBody: {
        fontSize: 16,
        fontWeight: '500',
    },

    ReviewGraph: {
        marginTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
    header: {
        textAlign: 'center',
        fontSize: 18,
        padding: 16,
        
    },


})