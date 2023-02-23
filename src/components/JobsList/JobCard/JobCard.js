import { Link } from 'react-router-dom';
import bgImage from '../../../assets/desktop/CompanyLogo.png';
import {
  Wrapper,
  Logo,
  Content,
  Time,
  Spacer,
  Title,
  CompanyName,
  Locations,
} from './JobCard.css';

const Job = ({ data }) => {
  return (
    <Wrapper >
      <Link as={Link} to={`/job/${data.id}`}>
        <Logo>
          <img
            src={data.logo ? data.logo : bgImage}
            alt={`${data.company} logo`}
          />
        </Logo>
        <Content>
          <Time>
            <p>{data.postedAt}</p>
            <Spacer />
            <p>{data.contract}</p>
          </Time>
          <Title>
            {data.position}
          </Title>
          <CompanyName>{data.company}</CompanyName>
          <Locations>{data.location}</Locations>
        </Content>
      </Link>

    </Wrapper>
  );
};

export default Job;