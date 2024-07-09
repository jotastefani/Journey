import { View, Text, Image } from "react-native"
import {Button} from "../components/button"

export default function Index(){
    return (
        <View className="flex-1 items-center justify-center ">
            <Image 
            source={require("@/assets/logo.png")} 
            className="h-8" 
            resizeMode="contain"
            />
            <Text className="text-zinc-400">
                Convide seus amigos e planeje sua próxima viagem
            </Text>            
        </View>
    )
}