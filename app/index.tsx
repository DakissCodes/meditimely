import { View, Text, StyleSheet, TouchableOpacity, Button, Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from "@/screens/LandingScreen";
import SignUpEmailScreen from "@/screens/SignUpEmailScreen";
import SignUpInfoScreen from "@/screens/SignUpInfoScreen";
import HomeScreen from "@/screens/HomeScreen";
import LoginScreen from "@/screens/LoginScreen";
import {useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold} from "@expo-google-fonts/poppins";
const Stack = createNativeStackNavigator();
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import SearchScreen from "@/screens/SearchScreen";
import SpecialistInfoScreen from "@/screens/SpecialistsInfoScreen";
import DiseasesScreen from "@/screens/DiseasesScreen";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AppointmentScreen from "@/screens/AppointmentsScreen";
import SettingsScreen from "@/screens/SettingsScreen";
// import MaterialCommunityIconsfrom '@expo/vector-icons/MaterialCommunityIcons';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import { BottomNavigation} from 'react-native-paper';
import ScheduleAppointmentScreen from "@/screens/ScheduleAppointmentScreen";
// const theme = useTheme();
// theme.colors.secondaryContainer = "transparent"

function SpecialistInfoStack(props){
    return (
        <Stack.Navigator
        
        >
        

            <Stack.Screen
                name="Specialists More Info Home"
                component={SpecialistInfoScreen}
                options={{
                    headerTitleAlign: "center",
                    headerTitle: "Learn More",
                    headerStyle: {
                        
                        
                    },
                    headerTitleStyle: {
                        fontSize: 16,
                        fontFamily: "Poppins_600SemiBold"
                    }


                }}
            ></Stack.Screen>
            <Stack.Screen name="Diseases" component={DiseasesScreen}
                options={{
                    
                    header: () =>
            (
            <View style={{ 
                height:10,
                backgroundColor: "yellow",
                }}>
                <View>
                    <Text>TITLE</Text>
                    <Text>TITLE</Text>
                </View>
            </View>
            ),
  }}
            >
                
            </Stack.Screen>
        </Stack.Navigator>
        
    )
}

function MainScreen(props) {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#1F9FA2',
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                // borderTopRightRadius: 20,
                // borderTopLeftRadius: 20,
                elevation: 0,
                position: "absolute"
                // backgroundColor: "transparent l"
            }
        }}
        
        >
            <Tab.Screen 
            
            name="Home"
            component={HomeScreenStack}
            options={{
                tabBarLabel: "Home",
                tabBarIcon: ({color}) => (
                            
                            <MaterialIcons name="home" size={24} color={color} />
                ),
                // tabBarColor: "#1F9FA2",

            }}

            ></Tab.Screen>
            <Tab.Screen 
            name="Appointments" 
            component={AppointmentScreen}
            options={{
                headerShown: true,
                tabBarLabel: "Appointments",
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="list-alt" size={24} color={color} />
                ),
                // tabBarColor: "#1F9FA2",
                header: (props) => (
                    <View style={styles.appointmentsHeader}>
                        <View style={[styles.container]}>
                            <Text style={styles.headerAppointmentsText}>My Appointments</Text>
                        </View>

                    </View>

                ),

            }}
            ></Tab.Screen>
            <Tab.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{


                tabBarLabel: "Settings",
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="settings" size={24} color={color} />
                ),
                // tabBarColor: "#1F9FA2",

            }}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}
function HomeScreenStack(props) {
    return (
        <Stack.Navigator>
        
            <Stack.Screen
                name = "Home Screen"
                component={HomeScreen}
                
                options={{
                    // headerTitle: (props) => ,
                    header: (props) => (
                        <View style={styles.homeHeader}>
                            <View style={[styles.container, { flexDirection: "row", columnGap: 10 }]}>
                                <MaterialIcons name="account-circle" size={32} color="white" />
                                <Text style={styles.headerGreetText}>Welcome back, McAllen!</Text>
                                </View>
                            
                        </View>
                        
                    ),
                    headerShown: true,
                    // headerBackVisible: true,
                    headerTitle: "",
                    
                    headerStyle: {
                        backgroundColor: "#1F9FA2",
                        
                    },
                    headerTintColor: "white",
                    headerLeft: (props) => (
                        <View style={[styles.container, { flexDirection: "row", columnGap: 10 }]}>
                            <MaterialIcons name="account-circle" size={32} color="white" />
                            <Text style={styles.headerGreetText}>Welcome back, McAllen!</Text>
                        </View>
                )}}
            >
            </Stack.Screen>

            <Stack.Screen name="Search" component={SearchScreen}></Stack.Screen>
            <Stack.Screen 
            name="Specialists More Info" 
            component={SpecialistInfoStack}
            options={{
                headerShown: false
            }}
            ></Stack.Screen>
            <Stack.Screen name="Schedule" component={ScheduleAppointmentScreen}
            options={{
                headerTitleAlign: "center",
                headerTitle: "Schedule an Appointment",
                headerStyle: {
                    backgroundColor: "#1F9FA2"
                },
                headerTitleStyle: {
                    fontSize: 16,
                    fontFamily: "Poppins_600SemiBold"
                },
                headerTintColor: "white"

            }}
            

            ></Stack.Screen>
            

        </Stack.Navigator>
    )
}

function SignUpStack(props) {
    const navigation = useNavigation();


    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#1F9FA2",
            },
            headerTitle: "",
            headerTintColor: "white"
            
        }}
        >
            <Stack.Screen 
            name="Email Sign Up"  
            
            component={SignUpEmailScreen} 
            options= {{
                headerTitle: "",
                headerLeft: () => <TouchableOpacity onPress={() => navigation.navigate("Welcome")}><Text style={styles.headerBackText}>Cancel</Text></TouchableOpacity>,
                // headerStyle: {
                    
                // }

                
            }}
            />
            <Stack.Screen 
            name="Info Sign Up"
            component={SignUpInfoScreen}
            options={{
                headerTitle: "Profile",
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontFamily: "Poppins_600SemiBold",
                    fontSize: 16,
                },

            }}
        
        
            />
        </Stack.Navigator>
    );
}


export default function App() {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
        Poppins_600SemiBold
    });

    if (!fontsLoaded) {
        return null
    }

    return (

        <NavigationContainer
       independent={true}
       
        >
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        
        >

            
            {/* re routes to either login or sign up stack */}
            <Stack.Screen name="Welcome" component={LandingScreen}></Stack.Screen>

            <Stack.Screen name="Sign Up" component={SignUpStack}></Stack.Screen>

            <Stack.Screen 
            name="Login" component={LoginScreen}
            options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: "#1F9FA2",
                },
                headerTitle: "",
                headerTintColor: "white",
                headerTitle: "Login",
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontFamily: "Poppins_600SemiBold",
                    fontSize: 16,
                },
                
            }}
            

            ></Stack.Screen>

            <Stack.Screen
                options={{
                    headerShown: false,
                    headerBackVisible: false,
                }}
                name="Main" component={MainScreen}>

                
                </Stack.Screen>
        </Stack.Navigator>
            
        </NavigationContainer>
    )


}



const styles = StyleSheet.create({
    box: {
        height: 100,
        width: 200,
        padding: 20,
    },
    headerBackText: {
        fontFamily: "Poppins_600SemiBold",
        color: "white",
        fontSize: 16,
        marginLeft: 5
    },
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    headerGreetText: {
        color: "white",
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        alignSelf: "flex-end"
    },
    homeHeader: {
        height: 60,
        backgroundColor: "#0F9FA2",
        // flex: 0,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingHorizontal: 19
    },
    appointmentsHeader: {
        height: 60,
        backgroundColor: "#0F9FA2",
        // flex: 0,
        alignItems: 'center',
        justifyContent: "flex-end",
        paddingHorizontal: 19
        
    },
    headerAppointmentsText: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 16,
        textAlign: "center",
        color: "white",
        marginBottom: 12,
        
    }

})


