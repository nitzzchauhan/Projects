import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate an async API call with createAsyncThunk
export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 1000);  // Simulates a 1-second delay
    });
  }
);

// Define the slice
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'idle',
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

console.log(counterSlice.getSelectors())

// Export actions generated from the slice
export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
