import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import Isabella from "../pages/Isabella/Isabella";
import ProfileIsabella from "../pages/Isabella/ProfileIsabella"; 

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Isabella">
            <Stack.Screen name="Isabella" component={Isabella} />
            <Stack.Screen name="Profile Isabella" component={ProfileIsabella} />
        </Stack.Navigator>
    );
}