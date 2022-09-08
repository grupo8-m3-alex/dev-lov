import { useContext } from 'react';
import Header from '../../components/Header';
import InfoUser from '../../components/InfoUser';
import ModalAddComment from '../../components/ModalAddComment';
import Posts from '../../components/Posts';
import { UserContext } from '../../contexts/userContext';
import { Container } from './styles';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { showAddComment } = useContext(UserContext);
  return (
    <Container>
      <Header />
      <main>
        <InfoUser id={Number(user?.id)} />
        <Posts />
      </main>
      {showAddComment && <ModalAddComment />}
    </Container>
  );
};

export default Dashboard;
