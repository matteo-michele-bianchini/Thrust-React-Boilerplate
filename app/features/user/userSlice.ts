import type User from '@/types/user'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    data: User | null
}

const initialState: UserState = {
    data: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.data = action.payload
        },
        deleteUser: (state) => {
            state.data = null
        }
    }
})

export const { setUser, deleteUser } = userSlice.actions
export default userSlice.reducer