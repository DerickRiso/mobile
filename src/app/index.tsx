import { View, Text } from "react-native"

import { Welcome } from "@/components/welcome" 

export default function Index(){
    return (
        // Dentro de um return apenas um elemento pai possui retorno (view)
        <View
        style={{flex: 1, padding: 40, gap: 40}}>
            <Welcome />
        </View>
    )
}
