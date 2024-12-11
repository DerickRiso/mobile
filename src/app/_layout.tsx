import { Stack } from "expo-router"
import { colors } from "@/styles/theme"

import {
    
} from "@expo-google-fonts/rubik"

export default function Layout() {
    return <Stack screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.gray[100] },
    }} />
}