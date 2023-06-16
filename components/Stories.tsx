import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
// import stories from '../assets/stories';

const Stories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Stories</Text>
      <ScrollView horizontal style={styles.storyContainer}>
        <View style={styles.story}>
          <TouchableOpacity style={styles.userIconContainer}>
            <Image
              source={{
                uri: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png',
              }}
              style={styles.userIcon}
            />
          </TouchableOpacity>
          <Text style={styles.name}>name</Text>
        </View>

        <View style={styles.story}>
          <TouchableOpacity style={styles.userIconContainer}>
            <Image
              source={{
                uri: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png',
              }}
              style={styles.userIcon}
            />
          </TouchableOpacity>
          <Text style={styles.name}>name</Text>
        </View>
        <View style={styles.story}>
          <TouchableOpacity style={styles.userIconContainer}>
            <Image
              source={{
                uri: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png',
              }}
              style={styles.userIcon}
            />
          </TouchableOpacity>
          <Text style={styles.name}>name</Text>
        </View>
        <View style={styles.story}>
          <TouchableOpacity style={styles.userIconContainer}>
            <Image
              source={{
                uri: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png',
              }}
              style={styles.userIcon}
            />
          </TouchableOpacity>
          <Text style={styles.name}>name</Text>
        </View>
        <View style={styles.story}>
          <TouchableOpacity style={styles.userIconContainer}>
            <Image
              source={{
                uri: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png',
              }}
              style={styles.userIcon}
            />
          </TouchableOpacity>
          <Text style={styles.name}>name</Text>
        </View>
        <View style={styles.story}>
          <TouchableOpacity style={styles.userIconContainer}>
            <Image
              source={{
                uri: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png',
              }}
              style={styles.userIcon}
            />
          </TouchableOpacity>
          <Text style={styles.name}>name</Text>
        </View>
        <View style={styles.story}>
          <TouchableOpacity style={styles.userIconContainer}>
            <Image
              source={{
                uri: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png',
              }}
              style={styles.userIcon}
            />
          </TouchableOpacity>
          <Text style={styles.name}>name</Text>
        </View>
        <View style={styles.story}>
          <TouchableOpacity style={styles.userIconContainer}>
            <Image
              source={{
                uri: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png',
              }}
              style={styles.userIcon}
            />
          </TouchableOpacity>
          <Text style={styles.name}>name</Text>
        </View>
        <View style={styles.story}>
          <TouchableOpacity style={styles.userIconContainer}>
            <Image
              source={{
                uri: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png',
              }}
              style={styles.userIcon}
            />
          </TouchableOpacity>
          <Text style={styles.name}>name</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#feffff',
    paddingTop: 10,
  },
  heading: {
    color: 'black',
    marginHorizontal: 8,
    fontSize: 17,
    fontWeight: 'bold',
  },
  storyContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  story: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    paddingBottom: 10,
  },
  userIconContainer: {},
  userIcon: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  name: {
    color: 'black',
  },
});
