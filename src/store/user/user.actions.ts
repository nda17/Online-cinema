import { AuthService } from '@/services/auth/auth.service'
import { toastrError } from '@/utils/api/toastr-error-redux'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from 'api/api.helpers'
import { toastr } from 'react-redux-toastr'
import { IAuthResponse, IEmailPassword } from './user.interface'

// register
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Registration', 'Completed successfully.')
			return response.data
		} catch (error) {
			toastrError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

//login
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Login', 'Completed successfully.')
			return response.data
		} catch (error) {
			toastrError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

//logout
export const logout = createAsyncThunk('auth/logout', async () => {
	toastr.info('Logout', 'Please login again.')
	await AuthService.logout()
})

//checkAuth
export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkAPI) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error(
					'Logout',
					'Your authorization is finished, please sign in again.'
				)
				thunkAPI.dispatch(logout())
			}
			return thunkAPI.rejectWithValue(error)
		}
	}
)
