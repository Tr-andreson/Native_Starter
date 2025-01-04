import { Slot } from "expo-router";


export default function AppLayout() {
  // const { loading, isLogged } = useGlobalContext();

  // if (loading) {
  //   return (
  //     <SafeAreaView className="bg-white h-full flex justify-center items-center">
  //       <ActivityIndicator className="text-primary-300" size="large" />
  //     </SafeAreaView>
  //   );
  // }

  // if (!isLogged) {
  //   return <Redirect href="/sign-in" />;
  // }

  return <Slot />;
}
