import { useContext, useEffect } from 'react';
import { useDispatch, useSelector, ReactReduxContext } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header/Header';
import useTheme from '../hooks/useTheme';
import GlobalStyle from '../theme/GlobalStyle';
import { darkTheme, lightTheme } from '../theme/themes';
import axios from "axios"
const MainTemplate = ({ children }) => {
  const { page, filters } = useSelector(store => store);
  const darkThemeEnabled = useTheme();
  const {store} = useContext(ReactReduxContext)
  const dispatch = useDispatch();
  const fetchJobs = async () => {
    dispatch({
      type: "JOBSLIST_GET_REQUEST",
    });
    await axios.get('https://ritter-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json', {
      params: {
        description:store.getState().filters.description,
        location:store.getState().filters.location,
        type:store.getState().filters.type,
        page,
      },
    })
      .then(resp => {
        dispatch({
          type: "JOBSLIST_GET_SUCCESS",
          payload: resp.data
        });
      })
      .catch(() => {
        dispatch({
          type: "JOBSLIST_GET_FAILURE",
        });
      })
  }
  useEffect(() => {
    fetchJobs()
  }, [dispatch, filters]);

  return (
    <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default MainTemplate;