import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
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
import { SimpleLineIcons, MaterialIcons } from '@expo/vector-icons'

export default function DetailScreen({ route }) {
	const { image } = route.params

	return (
		<View style={styles.container}>
			<View style={styles.userRow}>
				<Image source={{ uri: image }} style={styles.avatar} />
				<Text style={styles.userNameText}>SomeUserName</Text>
			</View>

			<Image source={{ uri: image }} style={styles.image} />

			<View style={styles.iconRow}>
				<View style={styles.leftSide}>
					<TouchableOpacity>
						<SimpleLineIcons
							name="heart"
							size={24}
							color="black"
							style={styles.icon}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<SimpleLineIcons
							name="paper-plane"
							size={24}
							color="black"
							style={styles.icon}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<MaterialIcons
							name="chat-bubble-outline"
							size={24}
							color="black"
							style={styles.icon}
						/>
					</TouchableOpacity>
				</View>

				<TouchableOpacity>
					<MaterialIcons
						name="bookmark-border"
						size={24}
						color="black"
						style={styles.icon}
					/>
				</TouchableOpacity>
			</View>

			<Text style={styles.likeText}>35 likes</Text>

			<Text style={styles.bodyText}>
				a productivity channel can really be a wonderful thing to
				manage. Also, it's a great way to promote our productivity app
			</Text>

			<View style={styles.tagRow}>
				<Text style={styles.hashTag}>#productivity</Text>
				<Text style={styles.hashTag}>#diy</Text>
				<Text style={styles.hashTag}>#app</Text>
			</View>

			<Text style={styles.dateText}>10th July, 2020</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	image: {
		width: wp('100%'),
		height: hp('50%'),
	},
	avatar: {
		width: wp('10%'),
		height: wp('10%'),
		borderRadius: wp('5%'),
		borderWidth: 2,
		borderColor: 'white',
		marginRight: wp('1%'),
	},
	userRow: {
		flexDirection: 'row',
		paddingLeft: wp('3%'),
		marginVertical: wp('3%'),
		alignItems: 'center',
	},
	userName: {},
	iconRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: wp('3%'),
		marginTop: hp('1%'),
	},
	icon: {
		marginRight: wp('2%'),
	},
	leftSide: {
		flexDirection: 'row',
	},

	likeText: {
		marginLeft: wp('3%'),
		marginVertical: hp('1%'),
	},
	bodyText: {
		marginHorizontal: wp('3%'),
	},

	tagRow: {
		flexDirection: 'row',
	},
	hashTag: {
		color: 'dodgerblue',
		marginRight: wp('1%'),
		marginLeft: wp('3%'),
		marginVertical: hp('1%'),
	},

	dateText: {
		color: 'gray',
		marginLeft: wp('3%'),
	},
})
