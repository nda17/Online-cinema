import { IAuthResponse, ITokens } from '@/store/user/user.interface'
import Cookies from 'js-cookie'

//Helper function for adding to cookies
export const saveTokenToStorage = (data: ITokens) => {
	Cookies.set('accessToken', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
}

//Helper function for saving user to local storage
export const saveUserToStorage = (data: IAuthResponse) => {
	localStorage.setItem('user', JSON.stringify(data.user))
}

//Helper function for removing data from cookies
export const removeTokensFromStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}

//Helper function for removing user from local storage
export const removeUserFromStorage = () => {
	localStorage.removeItem('user')
}
