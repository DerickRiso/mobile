import { View, Text } from "react-native"

export default function Index(){
    return (
        // Dentro de um return apenas um elemento pai possui retorno (view)
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            <Text style={{ fontSize: 22 }}>Hello React Native</Text>
        </View>
    )
}
