import React from 'react';
import { identity } from 'lodash';
import { storiesOf } from '../../ui-explorer';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import RadioGroup from './RadioGroup';
import CheckBoxExample from './CheckBoxExample';

const KitchenSinkScreen = () => (
    <View style={styles.container}>
      <View> 
          {/* placeholder for content blurbs, goal would be tabbable <p> tags */}
      </View>
      <View accessibilityRole="form">
        <View accessibilityRole="fieldset" style={styles.fieldset}>
          <Text accessibilityRole="legend">Paragraphs</Text>
          <Text style={styles.p} tabindex={0}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis vestibulum placerat. Fusce a urna sit amet magna scelerisque lobortis. </Text>
          <Text style={styles.p} tabindex={0}>Aenean fermentum congue ultricies. Morbi eget neque vitae mauris congue imperdiet. Suspendisse et ex lorem. Donec nulla sem, maximus quis arcu ac, congue dignissim eros. Nunc et turpis sit amet sapien auctor congue. Nam non mi id dui maximus aliquam.</Text>
          <Text style={styles.p} tabindex={0}>Vivamus accumsan arcu id quam tincidunt tincidunt sed sodales tellus. Nulla ut gravida orci, et malesuada risus. Cras semper volutpat quam ac interdum. </Text>
        </View>
        <View accessibilityRole="fieldset" style={styles.fieldset}>
          <Text accessibilityRole="legend">Buttons</Text>
          <Button onPress={identity} style={ styles.button } title="Sample Button" />
          <Button disabled={true} onPress={identity} style={ styles.button } title="Disabled Button" />
        </View>
        <View accessibilityRole="fieldset" style={styles.fieldset}>
          <Text accessibilityRole="legend">Text Inputs</Text>
          <Text accessibilityRole="label"
                htmlFor="singlelineTextInput"
                style={ styles.textInputLabels } >
                  {'<input type="text"'}
          </Text>
          <TextInput nativeID="singleLineTextInput" style={styles.textInput}/>
          <Text accessibilityRole="label"
                htmlFor="multilineTextInput"
                style={ styles.textInputLabels }>
                  {'<textarea>'}
          </Text>
          <TextInput multiline={true} nativeId="multiLineTextInput" style={[ styles.textInput, styles.textarea ] }/>
        </View>
        <View accessibilityRole="fieldset" style={styles.fieldset}>
          <Text accessibilityRole="legend">Checkboxes</Text>
          <CheckBoxExample checked={true} domID="checkbox1" label="Checkbox 1" />
          <CheckBoxExample checked={false} domID="checkbox2" label="Checkbox 2" />
          <CheckBoxExample checked={true} disabled={true} domID="checkbox2" label="Checkbox 3"/>
          <CheckBoxExample checked={false} disabled={true} domID="checkbox2" label="Checkbox 4"/>
        </View>
        <View accessibilityRole="fieldset" style={styles.fieldset}>
          <Text accessibilityRole="legend">Radio Group</Text>
          <RadioGroup name="radios"
            options={[
              { value: 'radio1', name: 'Radio 1' },
              { value: 'radio2', name: 'Radio 2' },
              { value: 'radio3', name: 'Radio 3' },
            ]}
          />
        </View>
        <View accessibilityRole="fieldset" style={styles.fieldset}>
          <Text accessibilityRole="legend">Submit</Text>
          <Button accessibilityRole='submit'
                  style={ styles.button } 
                  title="Form Submit Input" />
          <Button accessibilityRole='submit'
                  disabled={true}
                  style={ styles.button } 
                  title="Disabled Form Submit Input" />
        </View>
      </View>
    </View>
  )


const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  fieldset:{
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    padding:20,
    width: 350,
    flexDirection:'row',
    flexWrap: 'wrap'
  },
  button:{
    display:'inline',
    padding:5
  },
  textInput: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    padding:5,
    width:'100%',
  },
  textarea: {
    height:100,
  },
  textInputLabels: {
    fontSize:12,
    color:'#999999'
  },
  p: {
    marginBottom:10
  }
});

storiesOf('Example apps', module).add('Kitchen Sink', KitchenSinkScreen);
