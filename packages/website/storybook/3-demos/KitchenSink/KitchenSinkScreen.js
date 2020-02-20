import React from 'react';
import { storiesOf } from '../../ui-explorer';
import { Button, StyleSheet, Text, View } from 'react-native';

const KitchenSinkScreen = () => (
  <View style={styles.container}>
    <View> 
        {/* placeholder for content blurbs, goal would be tabbable <p> tags */}
    </View>
    <View accessibilityRole="form">
      <View accessibilityRole="fieldset">
        <Text accessibilityRole="legend">Buttons</Text>
        <Button title="Sample Button" />
        <Button disabled={true} title="Disabled Button" />
      </View>
      <View accessibilityRole="fieldset">
        <Text accessibilityRole="legend">Text Inputs</Text>
          {/* placeholder for <input type="text"> and <textarea> examples */}
      </View>
      <View accessibilityRole="fieldset">
        <Text accessibilityRole="legend">Checkboxes</Text>
          {/* placeholder for <input type="checkbox"> examples */}
      </View>
      <View accessibilityRole="fieldset">
        <Text accessibilityRole="legend">Radios</Text>
          {/* placeholder for <input type="radio"> examples */}
      </View>
      <View accessibilityRole="fieldset">
        <Text accessibilityRole="legend">Submit</Text>
          {/* placeholder for <input type="submit"> examples */}
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', flex: 1 }
});

storiesOf('Example apps', module).add('Kitchen Sink', KitchenSinkScreen);
