import { Time, Spacer, Title, Locations } from './JobInfo.css';

const JobHeader = ({ data }) => {
  return (
    <div>
      <Time>
        <p>{data.postedAt}</p>
        <Spacer />
        <p>{data.contract}</p>
      </Time>
      <Title as="h1">{data.position}</Title>
      <Locations>{data.location}</Locations>
    </div>
  );
};

export default JobHeader;