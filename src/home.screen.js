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

export default function HomeScreen() {
	const [images, setImages] = useState([])
	const [loading, setLoading] = useState(false)
	const [page, setPage] = useState(1)
	const [refreshing, setRefreshing] = useState(false)

	function Card(item) {
		return (
			<TouchableOpacity>
				<Image source={{uri: item.webformatURL}} style={styles.card} />
			</TouchableOpacity>
		)
	}

	async function fetch_images() {
		const data = await fetch(
			`https://pixabay.com/api/?key=17418+flowers&image_type=photo&page=${page}`,
			{
				method: 'GET',
			}
		)
		const jsonifiedData = await data.json()
		return jsonifiedData.hits
	}

	async function fetchMore() {
		setRefreshing(true)
		await setPage(page => page + 1)
		let newImages = await fetch_images()
		if (newImages[0].id != images[0].id) {
			await setImages([...images, ...newImages])
		}
		setRefreshing(false)
	}

	useEffect(() => {
		;(async function fetchData() {
			setLoading(true)
			let imageArray = await fetch_images()
			setImages(imageArray)
			setLoading(false)
		})()
	}, [])

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.infoCard}>
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

					<View style={styles.buttonHolder}>
						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonText}>Message</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.button}>
							<Ionicons
								name="md-person"
								size={24}
								color="black"
								style={styles.icon}
							/>
							<AntDesign
								name="check"
								size={18}
								color="royalblue"
								style={styles.icon2}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<View style={styles.nameCard}>
				<Text style={styles.name}>Will Smith</Text>
				<Text style={styles.professionText}>Artist</Text>
				<Text style={styles.bodyText}>
					New playground. Same kid from West Philly.
				</Text>
				<View style={styles.basicRow}>
					<Text style={styles.followText}>Followed by </Text>
					<TouchableOpacity>
						<Text style={styles.followerText}>therock</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.scrollViewContainer}>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.scrollView}
				>
					{new Array(10).fill(1).map((item, index) => (
						<TouchableOpacity>
							<Image
								style={styles.avatarSecond}
								source={{
									uri:
										'https://pickaface.net/gallery/avatar/unr_willsmith_170130_2033_2pb8gtu.png',
								}}
							/>
							<Text style={styles.channelNameText}>Channel</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>

			<TouchableOpacity style={styles.emailHolder}>
				<Text style={styles.emailText}>Email</Text>
			</TouchableOpacity>

			<FlatList
				data={images}
				keyExtractor={item => item.id}
				numColumns={3}
				ListFooterComponent={() =>
					refreshing ? (
						<ActivityIndicator
							size={'small'}
							color={'slateblue'}
							style={styles.indicator}
						/>
					) : null
				}
				onEndReached={() => fetchMore()}
				onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 0.7}
				renderItem={({item}) => Card(item)}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	infoCard: {
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
		marginBottom: hp('1%'),
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
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: wp('2%'),
	},
	buttonText: {
		color: '#162129',
		paddingVertical: hp('1%'),
		paddingHorizontal: wp('17%'),
	},
	buttonHolder: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginRight: wp('3%'),
	},
	icon: {
		paddingVertical: hp('.5%'),
		marginLeft: wp('2%'),
	},
	icon2: {
		marginRight: wp('1%'),
	},

	nameCard: {
		marginTop: hp('2%'),
		paddingLeft: wp('3%'),
	},
	name: {
		color: '#162129',
		fontWeight: '500',
		fontSize: 18,
	},
	professionText: {
		color: 'silver',
		fontSize: 18,
		marginVertical: hp('.5%'),
	},
	bodyText: {
		color: 'black',
		fontSize: 17,
		fontWeight: '300',
	},
	followText: {
		color: 'silver',
		fontSize: 14,
		marginVertical: hp('.6%'),
	},
	basicRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	followerText: {
		color: '#162129',
		fontWeight: '500',
		fontSize: 14,
	},
	scrollViewContainer: {
		height: hp('13%'),
	},
	avatarSecond: {
		width: wp('14%'),
		height: wp('14%'),
		borderRadius: wp('7%'),
		borderWidth: 2,
		borderColor: 'white',
		marginRight: wp('5%'),
	},
	scrollView: {
		paddingLeft: wp('3%'),
		marginTop: hp('2%'),
	},
	channelNameText: {
		width: wp('15%'),
		flexWrap: 'wrap',
		color: 'dimgray',
	},

	emailHolder: {
		borderWidth: 0.5,
		borderColor: 'silver',
		justifyContent: 'center',
		alignItems: 'center',
	},
	emailText: {
		paddingVertical: hp('1%'),
		color: 'dodgerblue',
		fontSize: 18,
	},

	card: {
		width: wp('33%'),
		height: wp('30%'),
		marginRight: 1,
		marginBottom: 1,
	},
})
