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
          <Text><Text isBold isInline>TL;DR</Text> Respect each other. Be kind. Have empathy.</Text>
          <Text>In the interest of fostering an open and welcoming environment, all members pledge to make participation in our community a harassment-free experience for everyone: regardless of age, appearance, ethnicity, gender identity, level of experience, nationality, race, religion, or sexual identity and orientation.</Text>

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
              <Text isInline>Any of the above even when presented as “ironic” or “joking”.</Text>,
              <Text isInline>Publishing screenshots or quotes, without all quoted users’ <strong>explicit</strong> consent.</Text>,
              <Text isInline>Unsolicited explanations under the assumption that someone doesn’t already know it. Don’t assume what people’s knowledge gaps are - ask before you teach.</Text>,
              <Text isInline>Same goes for unsolicited design critique or feedback. Ask first.</Text>,
              <Text isInline>Feigning or exaggerating surprise when someone admits to not knowing something.</Text>,
              <Text isInline>Other conduct which could reasonably be considered inappropriate in a professional or community setting.</Text>
            ]}
          />

          <Divider />

          <Heading level={1}>When something happens</Heading>
          <List
            items={[
              <Text isInline>Let the person know that what they did is not appropriate and ask them to stop and/or edit their message(s). You can use <code>?coc</code> as a shortcut for Slackbot to post a link to the Code of Conduct.</Text>,
              <Text isInline>That person should immediately stop the behaviour, own up and apologize if appropriate.</Text>,
              <Text isInline>If this doesn’t happen, or if you’re uncomfortable speaking up, contact the admins. You can do this by using <code>/report</code>. This will privately share a message with the admins.</Text>,
              <Text isInline>As soon as available, an admin will join, identify themselves, and take further action.</Text>
            ]}
          />
          <Text>When reporting, please include any relevant details, context, or other information that may be used to better understand and resolve the situation.</Text>
          <Text isBold>The admin team will prioritise the well-being and comfort of the recipients of the violation over the comfort of the violator.</Text>

          <Heading level={2}>3 strikes</Heading>
          <List
            items={[
              <Text isInline>The admin will repeat the request to stop</Text>,
              <Text isInline>If the person doubles down or the behaviour in question is repeated at a later point, they will be told once more by the admin to stop.</Text>,
              <Text isInline>Next offence leads to immediate removal from the group.</Text>
            ]}
          />

          <Text>Admin's may skip any of these steps depending on the situation and severity of what happened.</Text>

          <Heading level={2}>Apologise for mistakes</Heading>
          <Text>Should you catch yourself behaving disrespectfully, or be confronted as such, listen intently, own up to your words and actions, and apologize accordingly. No one is perfect, and even well-intentioned people make mistakes.</Text>
          <Text>What matters is how you handle them and that you avoid repeating them in the future.</Text>

          <Divider />

          <Heading level={1}>Privacy</Heading>
          <Text>This community is not a public space. However, no one has signed an non-disclosure agreement to participate, and you should not presume anything you say here will remain private, so act accordingly.</Text>
          <Text>If you want to publicly disclose anything discussed, use the <a href="https://www.chathamhouse.org/chatham-house-rule" rel="noopener noreferrer" target="_blank">Chatham House Rule</a> as a guideline.</Text>
          <Text>Alternatively you must seek out the <strong>explicit</strong> permission from the originator of the content in order to share any content.</Text>

          <JoinForm />

          <Text size="small" isCentered>Found a typo? Having any issues? <Text size="small" isInline noWrap><a href="https://github.com/mattvagni/triangles-slack/issues/new" rel="noopener noreferrer" target="_blank">Open a GitHub issue</a></Text></Text>
          <Text size="small" isCentered>If you need a private way to get in touch you can email us: <a href="mailto:triangles.slack@gmail.com">triangles.slack@gmail.com</a></Text>
          <Text size="small" isCentered>This Code of Conduct is adapted from <a href="https://wealljs.org/code-of-conduct" target="_blank" rel="noopener noreferrer">WeAllJS</a> and the <a href="https://github.com/randsleadershipslack/documents-and-resources/blob/master/code-of-conduct.md" target="_blank" rel="noopener noreferrer">Rands Leadership Slack</a>. Both are <strong>great</strong> communities and totally worth checking out.</Text>
        </div>
      </div>
    );
  }
}

export default App;
