import React, { PureComponent} from 'react'
import { forEach, isNil } from 'lodash'
import {CheckBox, View, Text} from 'react-native'

class RadioGroup extends PureComponent{
    state = {
        value:undefined
    }
    chooseValue = (newValue) => {
        this.setState({ value: newValue})
    }
    prevValue = () => {
        this.shiftValue(-1)
    }
    nextValue = () => {
        this.shiftValue(1)
    }
    shiftValue = (pos) => {
        const { options } = this.props
        if(this.state.value === undefined){
            this.chooseValue(options[0].value)
        }
        options.forEach((opt, index)=>{
            if(opt.value === this.state.value){
                let newIndex = index += pos;
                if(newIndex < 0){
                    newIndex = options.length -1;
                }else if(newIndex === options.length){
                    newIndex = 0;
                }
                this.chooseValue(options[newIndex].value)
            }
        })
        
    }
    getChildrenFromProps = (options) => {
        const children  = [];
        forEach(options, (opt) => {
            children.push(<Radio 
                            key={`radio-${this.props.name}-${opt.value}`} 
                            name={opt.name} 
                            onNextValue={this.nextValue}
                            onPrevValue={this.prevValue}
                            onRadioSelect={this.chooseValue}
                            selected={opt.value === this.state.value}
                            value={opt.value}/>)
        })
        return children
    }

    render(){
        return <View accessibilityRole="radiogroup" 
                    children={ this.getChildrenFromProps(this.props.options) } />
    }
}

export default RadioGroup

function Radio(props){
    function clickLabel(){
        valueChange(true)
    }
    function keyUp(e){
        if(e.key === ' '){
            clickLabel()
        }else if(e.key === 'ArrowLeft' || e.key === 'ArrowUp'){
            props.onPrevValue()
        }else if(e.key === 'ArrowRight' || e.key === 'ArrowDown'){
            props.onNextValue()
        }
    }
    function valueChange(value){
        if(value){
            props.onRadioSelect(props.value)    
        }
    }
    const styles = {
        container: {
            marginBottom:5,
            flexDirection: 'row'
        },
        radioLabel: {
            paddingLeft:10
        }
    }
    return (
        <View style={styles.container}>            
            <CheckBox
                accessibilityRole="radio"
                nativeID={`radio-${props.value}`}
                onValueChange={valueChange}
                value={props.selected}
            /> 
            <Text accessibilityRole="label"
                htmlFor={`radio-${props.value}`}
                onKeyUp={ keyUp }
                onPress={ clickLabel }
                style={styles.radioLabel}>
                    {props.name}
            </Text>
        </View>
    )
}