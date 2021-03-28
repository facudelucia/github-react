import { createSelector } from 'reselect';

const jobsListSelector = state => state;
const filterSelector = state => state;

export const jobsSelector = createSelector(
  [jobsListSelector, filterSelector],
  ({ jobs }, { count }) => {
    return jobs.slice(0, count);
  }
);