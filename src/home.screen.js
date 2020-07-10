import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableOpacity,
} from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topCard}>
				<View style={styles.avatarHolder}>
					<Image
						style={styles.avatar}
						source={{
							uri:
								'https://pickaface.net/gallery/avatar/unr_willsmith_170130_2033_2pb8gtu.png',
						}}
					/>
				</View>

				<View style={styles.infoCol}>
					<View style={styles.topRow}>
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

					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Message</Text>
					</TouchableOpacity>
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
	avatarHolder: {
		width: wp('29%'),
	},
	avatar: {
		width: wp('25%'),
		height: wp('25%'),
		borderRadius: wp('12.5%'),
		borderWidth: 2,
		borderColor: 'magenta',
	},
	infoCol: {
		marginTop: hp('1%'),
		flex: 1,
	},
	topRow: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	number: {
		fontWeight: '500',
		fontSize: 20,
		textAlign: 'center',
	},
	subTitle: {
		color: 'gray',
	},
	button: {
		borderColor: 'silver',
		borderWidth: 1,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: hp('1.5%'),
	},
	buttonText: {
		color: '#162129',
		paddingVertical: hp('1%'),
	},
})
