import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import InfoUser from '../../components/InfoUser';
import ModalAddComment from '../../components/ModalAddComment';
import Posts from '../../components/Posts';
import { UserContext } from '../../contexts/userContext';
import { Container } from './styles';

const Profile = () => {
  const { user_id } = useParams();
  const { showAddComment } = useContext(UserContext);
  return (
    <Container>
      <Header />
      <main>
        <InfoUser id={Number(user_id)} />
        <Posts />
      </main>
      {showAddComment && <ModalAddComment />}
    </Container>
  );
};

export default Profile;
