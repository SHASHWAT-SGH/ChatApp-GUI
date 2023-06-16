import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.nav1}>
        <View style={styles.logoWrapper}>
          <Text style={styles.logo}>MeChat</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Icon name="search" style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="bars" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.nav2}>
        <Text style={[styles.categories, styles.active]}>All Chat</Text>
        <Text style={styles.categories}>Group</Text>
        <Text style={styles.categories}>Calls</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#8870e6',
  },
  nav1: {
    paddingTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoWrapper: {marginLeft: 10},
  logo: {
    fontSize: 24,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  icon: {
    marginRight: 12,
    fontSize: 20,
    color: '#FFFFFF',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  nav2: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  categories: {
    fontSize: 18,
  },
  active: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 8,
    borderRadius: 6,
  },
});
