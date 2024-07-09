import { View, Text, Image } from "react-native";

import { Input } from "@/components/input";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center px-5">
      <Image
        className="h-8"
        source={require("@/assets/logo.png")}
        resizeMode="contain"
      />

      <Text className="text-zinc-400 font-regular text-center text-lg mt-3">
        Convide seus amigos e planeje sua próxima viagem
      </Text>

      <View className="w-full bg-zinc-900 p-4 rounded-xl my-8 border border-zinc-800">
        <Input>
          <Input.Field placeholder="Pra onde?" />
        </Input>
      </View>
    </View>
  );
}
