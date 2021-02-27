import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';
import model from './model';
import styles from './styles';

const SideBar = () => {
  const navigation = useNavigation();
  const screen = useSelector((state) => state.navigator.currentRouteName);

  const handleNavigation = (destination) => {
    navigation.navigate(destination);
  };

  return (
    <View style={styles.root}>
      {model.map((item) => (
        <TouchableOpacity
          key={item.title}
          onPress={() => handleNavigation(item.title)}>
            <Icon
              style={screen === item.title ? styles.iconActive : styles.icon}
              name={item.icon}
              size={item.size}
              color={item.color}
            />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SideBar;
