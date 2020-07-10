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
import styled from 'styled-components/native'

const Container = styled.View`
	background: white;
	flex: 1;
`

const UserRow = styled.View`
	display: flex;
	flex-direction: row;
	padding-left: 3%;
	margin-vertical: 3%;
	align-items: center;
`

const Avatar = styled.Image`
	width: 40px;
	height: 40px;
	border-radius: 20px;
	border-width: 2px;
	border-color: white;
	margin-right: 1%;
`

const MainImage = styled.Image`
	width: 100%;
	height: 50%;
`

const UserName = styled.Text`
	color: black;
	font-size: 17px;
	font-weight: bold;
`

const LikeText = styled.Text`
	color: black;
	font-size: 14px;
	margin-left: 3%;
	margin-vertical: 1%;
`

const HashTagText = styled.Text`
	color: dodgerblue;
	margin-right: 1%;
	margin-left: 3%;
	margin-vertical: 3%;
`

const BodyText = styled.Text`
	margin-horizontal: 3%;
`

const DateText = styled.Text`
	color: gray;
	margin-left: 3%;
`

const IconRow = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-horizontal: 3%;
	margin-top: 3%;
`

const LeftSide = styled.View`
	display: flex;
	flex-direction: row;
`

export default function DetailScreen({ route }) {
	const { image } = route.params

	return (
		<Container>
			<UserRow>
				<Avatar source={{ uri: image }} />
				<UserName>SomeUserName </UserName>
			</UserRow>

			<MainImage source={{ uri: image }} />

			<IconRow>
				<LeftSide>
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
				</LeftSide>

				<TouchableOpacity>
					<MaterialIcons
						name="bookmark-border"
						size={24}
						color="black"
						style={styles.icon}
					/>
				</TouchableOpacity>
			</IconRow>

			<LikeText>35 likes</LikeText>

			<BodyText>
				a productivity channel can really be a wonderful thing to
				manage. Also, it's a great way to promote our productivity app
			</BodyText>

			<LeftSide>
				<HashTagText>#productivity</HashTagText>
				<HashTagText>#diy</HashTagText>
				<HashTagText>#app</HashTagText>
			</LeftSide>

			<DateText>10th July, 2020</DateText>
		</Container>
	)
}

const styles = StyleSheet.create({
	icon: {
		marginRight: wp('2%'),
	},
})
