import Comment from "../../components/Comment";
import Header from "../../components/Header";
import Post from "../../components/Post";
import { ContainerHome } from "./styles";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";

const Home = () => {
  const [showComments, setShowComments] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);
  const {user} = useContext(UserContext)
  const context = useContext(UserContext)
  console.log(context)

  return (
    <>
      <Header />
      <ContainerHome>
        <div className="NovaPublicacao">
          <img src={user?.url_avatar} alt="" />
          <button>No que você está pensando?</button>
        </div>
        <Post showComments={showComments} setShowComments={setShowComments} like={like} setLike={setLike}/>
        <Comment />
      </ContainerHome>
    </>
  );
};

export default Home;
