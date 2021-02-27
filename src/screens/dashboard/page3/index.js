import React from 'react';
import {Text} from 'react-native';
import Container from '../../../components/container';
import Page from '../../../components/page';

import styles from './styles';

const Page3 = () => {
  return (
    <Container>
      <Page>
        <Text style={styles.text}>Page 3</Text>
      </Page>
    </Container>
  );
};

export default Page3;
