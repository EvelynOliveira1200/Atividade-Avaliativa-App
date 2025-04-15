import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import Isabella from "../pages/Isabella/Isabella";
import AnaBeatriz from "../pages/AnaBeatriz/AnaBeatriz";
import Giovanna from "../pages/Giovanna/Giovanna"
import Evelyn from "../pages/Evelyn/Evelyn"
import Laura from "../pages/Laura/Laura";




const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator initialRouteName="Isabella Page">
            <Tab.Screen
                name="Isabella Page"
                component={Isabella}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="AnaBeatriz Page"
                component={AnaBeatriz}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="add" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Laura Page"
                component={Laura}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="add" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Evelyn page" 
                component={Evelyn} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="add" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
            name="Alba page"
            component={Giovanna}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="add" color={color} size={size}/>
                ),
            }}
            />
        </Tab.Navigator>
    );
}