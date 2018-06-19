import React, { Component } from 'react';

import Heading from '../Heading';
import List from '../List';
import Text from '../Text';
import './reset.css';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Heading level={1}>Heading level 1</Heading>
        <Text>
          {'Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus. Integer posuere.'}
        </Text>
        <Heading level={2}>Heading level 2</Heading>
        <Text>
          {'Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus. Integer posuere.'}
        </Text>
        <Heading level={3}>Heading level 3</Heading>
        <Text>
          {'Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.'}
        </Text>
        <List
          items={[
            <Text isInline>Nulla vitae elit libero, a pharetra augue.</Text>,
            <Text isInline>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</Text>,
            <Text isInline>Vestibulum id ligula porta felis euismod semper.</Text>,
            <Text isInline>Aenean eu leo quam. Pellentesque ornare sem lacinia vestibulum.</Text>
          ]}
        />
      </div>
    );
  }
}

export default App;
