import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectCounter = createFeatureSelector<number>('count');
