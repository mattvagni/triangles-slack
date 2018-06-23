import React, { Component } from 'react';

import Divider from '../Divider';
import JoinForm from '../JoinForm';
import Heading from '../Heading';
import List from '../List';
import Text from '../Text';
import logo from './images/logo.svg';
import './reset.css';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__content">

          <img src={logo} alt='' aria-hidden className="app__logo" />

          <Heading level={1} isHero>Triangles</Heading>
          <Text size="large">A Slack community for designers in and around London.</Text>

          <Divider />

          <Heading level={1}>Code of Conduct</Heading>
          <Text><Text isBold isInline>TL;DR</Text> Respect each-other. Be kind. Have empathy.</Text>
          <Text>In the interest of fostering an open and welcoming environment, all members pledge to making participation in our community a harassment-free experience for everyone: regardless of age, appearance, ethnicity, gender identity, level of experience, nationality, race, religion, or sexual identity and orientation.</Text>

          <Heading level={3}>Examples of behaviour that contributes to creating a positive environment include:</Heading>
          <List
            items={[
              <Text isInline>Using welcoming and inclusive language.</Text>,
              <Text isInline>Being respectful of differing viewpoints and experiences.</Text>,
              <Text isInline>Showing empathy and kindness towards other community members.</Text>,
              <Text isInline>Gracefully accepting constructive feedback.</Text>
            ]}
          />

          <Heading level={3}>Examples of unacceptable behaviour by participants include:</Heading>
          <List
            items={[
              <Text isInline>The use of sexualised language or imagery and unwelcome sexual attention or advances.</Text>,
              <Text isInline>Trolling, insulting/derogatory comments, and personal or political attacks.</Text>,
              <Text isInline>Public or private harassment, deliberate intimidation, or threats.</Text>,
              <Text isInline>Publishing others’ private information without explicit permission. This includes any sort of “outing” of any aspect of someone’s identity without their consent.</Text>,
              <Text isInline>Publishing screenshots or quotes, without all quoted users’ *explicit* consent.</Text>,
              <Text isInline>Any of the above even when presented as “ironic” or “joking”.</Text>,
              <Text isInline>Unsolicited explanations under the assumption that someone doesn’t already know it. Don’t assume what people’s knowledge gaps are - ask before you teach.</Text>,
              <Text isInline>Same goes for unsolicited criticism or feedback. Ask first unless you are sure.</Text>,
              <Text isInline>Feigning or exaggerating surprise when someone admits to not knowing something.</Text>,
              <Text isInline>Other conduct which could reasonably be considered inappropriate in a professional or community setting.</Text>
            ]}
          />

          <Divider />

          <Heading level={2}>When something happens</Heading>
          <List
            items={[
              <Text isInline>Let the person know that what they did is not appropriate and ask them to stop and/or edit their message(s). You can use <code>?coc</code> as a shortcut for Slackbot to post a link to the Code of Conduct.</Text>,
              <Text isInline>That person should immediately stop the behaviour and correct the issue.</Text>,
              <Text isInline>If this doesn’t happen, or if you’re uncomfortable speaking up, contact the admins. You can do this by using <code>/report</code>. This will privately share a message with the admins. Alternatively you can message </Text>,
              <Text isInline>As soon as available, an admin will join, identify themselves, and take further action.</Text>
            ]}
          />
          <Text>When reporting, please include any relevant details, links, screenshots, context, or other information that may be used to better understand and resolve the situation.</Text>
          <Text isBold>The admin team will prioritise the well-being and comfort of the recipients of the violation over the comfort of the violator.</Text>

          <Divider />

          <Heading level={2}>3 Strikes</Heading>
          <List
            items={[
              <Text isInline>The admin will repeat the request to stop</Text>,
              <Text isInline>If the person doubles down or the behaviour in question is repeated at a later point, they will be told once more by the admin to stop.</Text>,
              <Text isInline>Next offence leads to immediate removal from the group.</Text>
            ]}
          />

          <JoinForm />
        </div>
      </div>
    );
  }
}

export default App;
