import { Alert } from "react-native"

const AsyncAlert = (title: string, message: string) => {
    return new Promise((resolve) => {
        Alert.alert(
            title,
            message,
            [
                {text: 'OK', onPress: () => resolve('OK') },
            ],
            { cancelable: false }
        )
    })
}    

export default AsyncAlert;