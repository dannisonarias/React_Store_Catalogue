import React from 'react';
import {
  Dimmer, Loader, Image, Segment,
} from 'semantic-ui-react';

const SmallLoader = () => (
  <div>
    <Segment>
      <Dimmer active inverted>
        <Loader size='small'>Loading...</Loader>
      </Dimmer>
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
);

export default SmallLoader;
