import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { $axios } from "../lib";

export const fetchUserById = createAsyncThunk(
  "app/fetchUserById",
  async (id) => {
    const user = await $axios.get(`/users/${id}`);
    return user;
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState: {
    theme: "light",
    auth: null,
    error: null,
  },
  reducers: {
    changeTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    login: (state, action) => {
      state.auth = {
        isAuthenticated: true,
        // user: { id: 1, name: "John Doe", email: "john.doe@example.com" },
        user: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.auth = { isAuthenticated: true, user: action.payload };
    });

    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const { changeTheme, login } = appSlice.actions;
export const appReducer = appSlice.reducer;
