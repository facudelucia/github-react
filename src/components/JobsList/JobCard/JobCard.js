import moment from 'moment';
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
            src={data.company_logo ? data.company_logo : bgImage}
            alt={`${data.company} logo`}
          />
        </Logo>
        <Content>
          <Time>
            <p>{moment(new Date(data.created_at)).fromNow()}</p>
            <Spacer />
            <p>{data.type}</p>
          </Time>
          <Title>
            {data.title}
          </Title>
          <CompanyName>{data.company}</CompanyName>
          <Locations>{data.location}</Locations>
        </Content>
      </Link>

    </Wrapper>
  );
};

export default Job;