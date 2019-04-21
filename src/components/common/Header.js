import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style = { viewStyle }>
      <Text style = { textStyle } >{props.headerText}</Text>  
    </View>    
  );
}

const styles = {
  viewStyle : {
    backgroundColor : '#de4532',
    justifyContent : 'center', //flex-start,center,flex-end, space-between, space-around
    alignItems : 'center', //flex-start,center,flex-end
    height : 70,
    paddingTop : 20,
    shadowColor : '#000',
    shadowOffset : { width : 0, height: 2},
    shadowOpacity : 0.2,
    shadowRadius: 2,
    elevation : 5,
    position : 'relative'
  },
  textStyle : {
    fontSize : 20,
    color : '#fff'
  }
}


export { Header };