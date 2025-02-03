import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-rubik font-bold text-3xl my-10">welcom to real state</Text>
      <Link href='./sign-in'> sign in</Link>
      <Link href='./explore'> explore</Link>
      <Link href='./profile'>profile</Link>
      <Link href='./properties/{id}'> properties</Link>

    </View>
  );
}
