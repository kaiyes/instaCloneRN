import {StatusBar} from 'expo-status-bar'
import React, {useState, useEffect} from 'react'
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableOpacity,
	ScrollView,
	FlatList,
	ActivityIndicator,
} from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import {Ionicons, AntDesign} from '@expo/vector-icons'

export default function DetailScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.name}> Detail page</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
})
