import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header/Header';
import useTheme from '../hooks/useTheme';
import GlobalStyle from '../theme/GlobalStyle';
import { darkTheme, lightTheme } from '../theme/themes';
import axios from "axios"
const MainTemplate = ({ children }) => {
  const { filters } = useSelector(store => store);
  const darkThemeEnabled = useTheme();
  const dispatch = useDispatch();
  const fetchJobs = async () => {
    dispatch({
      type: "JOBSLIST_GET_REQUEST",
    });
    await axios.get('./data.json')
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