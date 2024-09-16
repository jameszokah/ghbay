import { Image, StyleSheet, Platform, ImageBackground, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CountryDropDown } from '@/components/CountryDropDown';
import { SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import { Text } from '@/components/ui/text';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { SearchInput } from '@/components/SearchInput';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  const GITHUB_AVATAR_URI = 'https://github.com/jameszokah.png';

  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerTitle: 'GHBAY', headerTransparent: true, headerBlurEffect: 'systemChromeMaterialLight', headerStyle: { backgroundColor: 'transparent' }, headerTitleStyle: {
      fontWeight: 'bold', fontSize: 30
    },
    headerRight: () => (
      <View className='flex flex-row items-center gap-2 w-full justify-end' style={{ marginRight: 16, flex: 1, justifyContent: 'center' }}>
        <Text>James</Text>
        <Avatar alt="James">
          <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
          <AvatarFallback>
            <Text>JZ</Text>
          </AvatarFallback>
        </Avatar>
      </View>
    ),
   });
  }, [navigation]);
  
  return (
    <>
    {/* <SafeAreaView className='flex-1' /> */}
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <ImageBackground
          source={require('@/assets/images/red-pattern-bg.jpg')}
          // style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}
          resizeMode="cover"
          className='flex-1 justify-center items-center w-full h-full'
        >
          <View className='flex-1 justify-center items-center w-full h-full'>
            <CountryDropDown />
            <SearchInput />
          </View>  
        </ImageBackground>
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
