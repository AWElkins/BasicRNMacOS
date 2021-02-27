import React from 'react';
import {Text} from 'react-native';
import Container from '../../../components/container';
import Page from '../../../components/page';

import styles from './styles';

const Page1 = () => {
  return (
    <Container>
      <Page>
        <Text style={styles.text}>Page 1</Text>
      </Page>
    </Container>
  );
};

export default Page1;
