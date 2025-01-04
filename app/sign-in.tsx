import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  View,
} from "react-native";


const Auth = () => {

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="bg-red-500">hello world</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Auth;
