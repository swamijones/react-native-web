import React, {PureComponent} from 'react';
import { CheckBox, Text, View } from 'react-native';

class CheckBoxExample extends PureComponent{
    state = {
        checked:this.props.checked 
    }

    toggleBox = (val) => {
        if(!this.props.disabled){
            this.setState((prevState) => ({ checked: !prevState.checked }))
        }
    }
    keyPress = (e) => {
        if(e.key === ' '){
            this.toggleBox()
        }
    }
    styles = {
        container: {
            marginBottom:5,
            flexDirection: 'row'
        },
        checkbox: {
            marginRight:10
        }
    }
    render(){
        return <View style={ this.styles.container }>             
                <Text accessibilityRole="label"
                    htmlFor={ this.props.domID}
                    onKeyPress={this.keyPress} 
                    onPress={this.toggleBox} > 
                    <CheckBox disabled={this.props.disabled}
                        domID={this.props.domID} 
                        onValueChange={ this.toggleBox }
                        style={this.styles.checkbox} 
                        value={this.state.checked} />      
                    {this.props.label}
                    </Text> 
            </View>
    }
}

export default CheckBoxExample;