import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";
import { setToken as _setToken, getToken } from "@/utils"

const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || ''
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      _setToken(action.payload)
    }
  }
})

const { setToken } = userStore.actions

const userReducer = userStore.reducer

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    // 发送异步请求
    const res = await request.post('/authorizations', loginForm)
    // 提交同步action进行token的存入
    dispatch(setToken(res.data.token))
  }
}

export { setToken, fetchLogin }

export default userReducer