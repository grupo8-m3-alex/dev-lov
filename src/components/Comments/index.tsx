import { ContainerComment } from './styles';

const Comments = ({ value }: any) => {
  return (
    <ContainerComment>
      <div className="HeadComment">
        <img src={value?.user?.url_avatar} alt="" />
        <h2>{value?.user?.name}</h2>
      </div>
      <div className="TextComment">
        <p>{value?.user?.message}</p>
      </div>
    </ContainerComment>
  );
};

export default Comments;
