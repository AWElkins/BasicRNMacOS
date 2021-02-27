import React from 'react';
import {Text} from 'react-native';
import Container from '../../../components/container';
import Page from '../../../components/page';

import styles from './styles';

const Home = () => {
  return (
    <Container>
      <Page>
        <Text style={styles.text}>Home</Text>
      </Page>
    </Container>
  );
};

export default Home;
