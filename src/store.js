import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    { id: 1, name: 'CSPM Executive Dashboard', widgets: [] },
    { id: 2, name: 'CWPP Dashboard', widgets: [] },
    // Add other categories as needed
  ],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(category => category.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(category => category.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    },
  },
});

export const { addWidget, removeWidget } = dashboardSlice.actions;

const store = configureStore({
  reducer: {
    dashboard: dashboardSlice.reducer,
  },
});

export default store;
