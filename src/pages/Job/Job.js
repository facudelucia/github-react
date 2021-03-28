import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Helpers/Loader';
import CompanyInfo from '../../components/JobDetails/CompanyInfo/CompanyInfo';
import JobDescription from '../../components/JobDetails/JobDetails';
import JobFooter from '../../components/JobDetails/JobFooter/JobFooter';
import { LoaderWrapper, StyledContainer } from './Job.css';
import axios from "axios"
const Job = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "JOB_GET_REQUEST"
    });
    fetchSingleJob()
  }, [dispatch, id]);
  
  const fetchSingleJob = async () => {
    await axios.get(`https://ritter-cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`)
      .then(resp => {
        dispatch({
          type: "JOB_GET_SUCCESS",
          payload: resp.data,
        });
      })
      .catch(()=> {
        dispatch({
          type: "JOB_GET_FAILURE",
        })
      })
  }
  const { content: data, loading } = useSelector(store => store);

  return (
    <>
      {loading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <>
          <StyledContainer>
            <CompanyInfo data={data} />
            <JobDescription data={data} />
          </StyledContainer>
          <JobFooter data={data} />
        </>
      )}
    </>
  );
};

export default Job;