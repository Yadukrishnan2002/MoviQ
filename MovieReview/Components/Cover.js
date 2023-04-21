import { StyleSheet, Text, View,Dimensions,TouchableOpacity,Image, ImageBackground } from 'react-native'
import React,{useEffect, useState} from 'react'



const Cover = ({title,body,imgUrl,tags,score,date}) => {
    console.log(tags)


    //Function used to generate Month name from Month number
    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
      
        return date.toLocaleString('en-US', { month: 'long' });
      }


    const [year,month,day] = date.split('-')
 

    const [textMonth,setTextMonth] = useState([])

    //Assigns Month name to the variable 
    useEffect(()=> {
        setTextMonth(getMonthName(parseInt(month,10)))
    },[])

   
    //converting numbe

    //To dynamically update the score card color according to the score of the movie
    const getBackgroundColor = () => {
        let color;
        
        if(score >= 0 && score <= 4.0){
            color = 'rgba(255, 25, 0,1)'
        }
        else if(score > 4.0 && score <=6.0){
            color = 'rgba(255, 136, 0,1)'
        }
        else if(score > 6.0 && score <=7.5){
            color = 'rgba(220, 232, 2,1)'
        }
        else if(score > 7.5 && score <= 9.0){
            color = 'rgba(4, 227, 0,1)'
        }
        else if(score > 9.0){
            color = 'rgba(0, 191, 255,1)'
        }
    
        console.log(color);
        return color;
    };

    const scoreCardstyle = () => {
        return {
            
            backgroundColor: getBackgroundColor(),
            width: '20%',
            height: '40%',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            marginTop: Dimensions.get('window').height - ((0.97 * Dimensions.get('window').height) ),
        }
    }


  return (
   <View style = {styles.container}>

        <View style = {styles.ImageContainer}>
            <View >
                <ImageBackground source = {{uri: imgUrl}}  style={styles.Image}>

                    <View style = {styles.OverlayContainer}>

                        <View style = {styles.TitleContainer}>
                            <Text style = {styles.Title}>{title}</Text> 
                        </View>

                        <View style = {styles.ScoreTagAddWrapper}>

                            <View style = {scoreCardstyle()}>
                                <Text style = {styles.ScoreText}>{score}</Text>
                            </View>


                            <View style = {styles.TagsDateContainer}>
                                <View style = {styles.TagsContainer}>
                                    
                                    {   
                                        tags.slice(0,3).map((tag,index) => {
                                            if(index + 1 == tags.length){
                                                return (
                                                    <Text style = {styles.TagText} key = {index}>{tag}</Text>
                                                )
                                            }else{
                                                return (
                                                    <Text style = {styles.TagText} key = {index}>{tag} - </Text>
                                                )
                                            }
                                        })
                                    }

                                    
                            
                                
                                </View>

                                <View style = {styles.DateContainer}>
                                    <Text style = {styles.DateText}>{day} {textMonth} {year}</Text>
                                </View>
                            </View>
                                
                                
                                
                            
                            

                            <View style = {styles.AddButtonWrapper}>
                                <TouchableOpacity>
                                    <Image source = {{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC80lEQVR4nO2bUUtTYRjH132zD9Ck5n0a2qX2HdS+Q7ivkLo+QCyoGWMIrbssb1qXwfBCBTFCKZ0g4s2YMzIUdtUcv3jpodY41Nx7nu287P2DIMft/f3fvzvP+5yz98RiXl5eXl5eXt0KGAYmgRkgBaSBLLAKlICP8nMIHAFV4DtwwR9dyLGqvOaw5X0lGSsrY6eEZZjDsX4IuAvkgFP6r5p4GevFxIeAZaBJ9GQ85YG45kf9M9HXLpAIe/JxGdgV7QE3wgxgGfeUD7PgNXFPxvNoGAHkcFdLYQRQw12dhFH5XVf3KwJwX9HYeAtnQpEzZRPAA0Vjt1o4SUXOrE0AKUVj8bYOU0tzNgE8VjL1A7jWxjLHNJS2CeCFkqlaAEvrwiprE8Cqkqn9AFZZibViE8Cakqn1ANaGEqtkE8CWkql3AayiEmvTJoBdJVMvA1gFJdYnmwAOlEw9CWBllFh7NgEcK5l6FMBaUGId2QRQ7VVzoth0VWwCOOsC2JA1vSyV/T3wCngKzMtERwJYI/K3eTkdClIY182yKWOasa+qbzYB1DuEjAO3TUvbNaxzT0PCMsxOVLeBXXZCCHWGV/PXiRo2gMtBD6A+6KfAWYeQvxKXgrUvBawoBS3znyKYjGIRrKKjlCvL4LGSqQVXGqEDJVMZV1rhHSVThQCWaZYidzG0pWSqGMAyHWPkLofXlExtBLBMtY/cDZG3SqbKPaw3r20CWFIydRrA+qrEemYTQFrJVKP1trj5vcsmp6sl9yoBzKGn322z2cygyHloE8CsorFkj74am7EJYErR2EQL554iZ9ImgATuKzHIGySqVpM38ltkYGygN0kZyQ5M15SLhbxRcgd39CX023P8WhFc2C1q/lE3Q5182ychH9Ga0JQ9jddj2gJGZffISb9nLR7MRdsd9Yn/49QwDy9My7XDIvAceAN8ALblwYeyPAxRkYcjzlsmcS7HKvKasrxnW8ZYkTEXhTEtzHB3hXt5eXl5ecUGSj8BjbSWDw7hDP8AAAAASUVORK5CYII=" }} style = {styles.AddButton} />
                                </TouchableOpacity>
                            </View>
                            
                            

                        </View>


                        

                        

                    </View>
                    

                </ImageBackground>
            </View>

           
        </View>

   </View>  
  )
}

export default Cover

const styles = StyleSheet.create({
    ImageContainer: {
        
    },

    Image: {
       backgroundColor : 'rgba(0,0,0,0.1)',
       width: Dimensions.get('window').width,
       height: Dimensions.get('window').height - (0.4 * Dimensions.get('window').height),
     
        
    },
    
    OverlayContainer: {
        marginBottom: 0,
        backgroundColor: 'rgba(0,0,0,0.9)',
        width: '100%',
        height: '40%',
        marginTop: Dimensions.get('window').height - ((0.62 * Dimensions.get('window').height)  ),
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignSelf:'center',

    },

    Title: {
        color: 'white',
        fontSize: 23,
        fontWeight: '700',
    },

    TitleContainer: {
        alignItems: 'center',
        marginTop: 20,
    },

    ScoreContainer: {
       
       
        
    },

    ScoreText: {
        color: 'white',
        fontSize: 32,
        fontWeight: '900'
    },

    TagsContainer: {
        backgroundColor: 'rgba(227, 227, 227,1)',
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: Dimensions.get('window').height - ((0.98 * Dimensions.get('window').height) ),
        flexDirection: 'row',
        
    },

    ScoreTagAddWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        
    },

    AddButtonWrapper: {
        paddingRight: 28
    },
    

    AddButton: {
        width: 30,
        height: 30,
        marginTop: Dimensions.get('window').height - ((0.95 * Dimensions.get('window').height) ),
    },

    TagText: {
        fontWeight: '700',
        fontSize: 12,
    },

    DateContainer: {
       paddingTop: 20
    },

    DateText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
    },

    TagsDateContainer: {
        flexDiretion: 'column',
        width: '40%',
        alignItems: 'center'
    },


  
})