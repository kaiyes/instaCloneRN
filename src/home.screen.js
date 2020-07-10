import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topCard}>
				<Image
					style={styles.avatar}
					source={{
						uri:
							'https://pickaface.net/gallery/avatar/unr_willsmith_170130_2033_2pb8gtu.png',
					}}
				/>
				<View style={styles.infoCol}>
					<View style={styles.numberHolder}>
						<Text style={styles.number}>604</Text>
						<Text style={styles.subTitle}>posts</Text>
					</View>
					<View style={styles.numberHolder}>
						<Text style={styles.number}>35.8M</Text>
						<Text style={styles.subTitle}>followers</Text>
					</View>

					<View style={styles.numberHolder}>
						<Text style={styles.number}>152</Text>
						<Text style={styles.subTitle}>following</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	topCard: {
		paddingTop: hp('1%'),
		paddingLeft: wp('3%'),
		flexDirection: 'row',
	},
	avatar: {
		width: wp('20%'),
		height: wp('20%'),
		borderRadius: wp('10%'),
		borderWidth: 2,
		borderColor: 'magenta',
	},
	infoCol: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: hp('1%'),
	},
	numberHolder: {},
	number: {
		fontWeight: '500',
		fontSize: 20,
		textAlign: 'center',
	},
	subTitle: {
		color: 'gray',
	},
})
