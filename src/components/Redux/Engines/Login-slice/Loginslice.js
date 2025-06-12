import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Config from '../../../../Api-service/config';

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(`${Config.API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        return thunkAPI.rejectWithValue(data.message || 'Login failed');
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Network error');  
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    emailSubmitted: false,
    loading: false,
    success: false,
    resendTimer: 0,
    error: null,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setEmailSubmitted: (state, action) => {
      state.emailSubmitted = action.payload;
    },
    setResendTimer: (state, action) => {
      state.resendTimer = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      
  },
});

export const { setEmail, setEmailSubmitted, setResendTimer } = loginSlice.actions;
export default loginSlice.reducer;
