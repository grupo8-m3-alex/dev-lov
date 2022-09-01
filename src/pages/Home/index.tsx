import Comment from "../../components/Comment";
import Header from "../../components/Header";
import Post from "../../components/Post";
import { ContainerHome } from "./styles";
import { useState } from "react";

const Home = () => {
  const [showComments, setShowComments] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);
  return (
    <>
      <Header />
      <ContainerHome>
        <div className="NovaPublicacao">
          <img src="" alt="" />
          <button>No que você está pensando?</button>
        </div>
        <Post showComments={showComments} setShowComments={setShowComments} like={like} setLike={setLike}/>
        <Comment />
      </ContainerHome>
    </>
  );
};

export default Home;
