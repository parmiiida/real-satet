import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import images from '@/contsants/images'

const SignIn = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className='h-4/6 w-full resizeMode="contain"'/>

        <View className='px-10 ' >
          <Text className='text-base text-center font-rubik uppercase text-black-200'>Welcome to Real state</Text>

          <Text className='font-rubik-bold text-black-300 text-center mt-2'>
            Lets get you clsoer to {"\n"}
            Your Ideal Home
          </Text>
        </View>
      </ScrollView>
    </ SafeAreaView>
  )
}

export default SignIn