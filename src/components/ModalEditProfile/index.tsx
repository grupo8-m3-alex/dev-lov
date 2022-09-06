import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaEditProfile } from '../../validations/schemaEditProfile';
import Modal from 'react-modal';
import { IUser, UserContext } from '../../contexts/userContext';
import { LabelInputGroup, ModalEditContainer } from './styles';
import toast from 'react-hot-toast';
import { api } from '../../services/api';

Modal.setAppElement('#root');

interface IEditProfileForm {
  name: string;
  url_avatar: string;
  city: string;
  state: string;
  bio: string;
}

interface IModalEditProfileProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const ModalEditProfile = ({
  isModalOpen,
  closeModal,
}: IModalEditProfileProps) => {
  const { user, updateUser, posts, updatePost } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditProfileForm>({
    resolver: yupResolver(schemaEditProfile),
  });

  const editProfile = (data: IEditProfileForm) => {
    const toastSingIn = toast.loading('Atualizando Perfil...');
    if (user) {
      updateUser(user.id, data).then((resp) => {
        posts.forEach((post) => {
          const { name, url_avatar } = data;
          if (post.userId === user.id) {
            updatePost(post.id, { name, url_avatar });
          }

          const newComments = post.comments.map((comment) => {
            if (comment.user.userId === user.id) {
              return {
                id: comment.id,
                user: {
                  userId: comment.user.userId,
                  name: name,
                  url_avatar: url_avatar,
                  message: comment.user.message,
                  created_at: comment.user.created_at,
                  updated_at: comment.user.updated_at,
                },
              };
            }
            return comment;
          });

          updatePost(post.id, { comments: newComments });
        });

        api.get<IUser[]>('users').then(({ data: users }) => {
          users.forEach((item) => {
            const newFriends = item.friendsList.map((friend) => {
              if (friend.id === user.id) {
                return {
                  id: friend.id,
                  url_avatar: data.url_avatar,
                  name: data.name,
                  age: friend.age,
                };
              }
              return friend;
            });
            api.patch(`users/${item.id}`, { friendsList: newFriends });
          });
        });
        toast.success('Perfil Atualizado com sucesso', {
          id: toastSingIn,
        });
        closeModal();
      });
    }
  };

  return (
    <>
      <ModalEditContainer />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div>
          <div className="Header_modalAdd">
            <h3>Editar Perfil</h3>
            <button onClick={closeModal}>X</button>
          </div>
          <div className="imgaAndName">
            <img src={user?.url_avatar} alt="" />
            <span>{user?.name}</span>
          </div>
          <div>
            <form onSubmit={handleSubmit(editProfile)}>
              <LabelInputGroup>
                <label htmlFor="name">Nome: </label>
                <input
                  id="name"
                  placeholder="Informe seu nome"
                  {...register('name', {
                    value: user?.name,
                  })}
                />
                {errors.name && <span>{errors.name.message}</span>}
              </LabelInputGroup>
              <LabelInputGroup>
                <label htmlFor="url_avatar">Link do avatar:</label>
                <input
                  id="url_avatar"
                  placeholder="Informe o link do avatar"
                  {...register('url_avatar', {
                    value: user?.url_avatar,
                  })}
                />
                {errors.url_avatar && <span>{errors.url_avatar.message}</span>}
              </LabelInputGroup>
              <LabelInputGroup>
                <label htmlFor="city">Cidade:</label>
                <input
                  id="city"
                  placeholder="Informe sua cidade"
                  {...register('city', {
                    value: user?.city,
                  })}
                />
                {errors.city && <span>{errors.city.message}</span>}
              </LabelInputGroup>
              <LabelInputGroup>
                <label htmlFor="state">Estado:</label>
                <input
                  id="state"
                  placeholder="Informe seu estado:"
                  {...register('state', {
                    value: user?.state,
                  })}
                />
                {errors.state && <span>{errors.state.message}</span>}
              </LabelInputGroup>
              <LabelInputGroup>
                <label htmlFor="bio">Bio:</label>
                <input
                  id="bio"
                  placeholder="bio"
                  {...register('bio', {
                    value: user?.bio,
                  })}
                />
                {errors.bio && <span>{errors.bio.message}</span>}
              </LabelInputGroup>

              <div className="buttonContainer">
                <button type="submit" className="buttonPubli">
                  Editar
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalEditProfile;
