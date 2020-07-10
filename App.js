import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './src/home.screen'
import DetailScreen from './src/detail.screen'

const Stack = createStackNavigator()

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						title: 'Will Smith',
						headerTitleAlign: 'center',
						headerTintColor: 'black',
					}}
				/>
				<Stack.Screen
					name="Detail"
					component={DetailScreen}
					options={{
						title: 'Photo',
						headerTitleAlign: 'center',
						headerTintColor: 'black',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
