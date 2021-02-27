import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const Page = ({children}) => {
  return <View style={styles.root}>{children}</View>;
};

export default Page;
