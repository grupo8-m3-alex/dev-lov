import { Content } from "./styles";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import { RiEyeCloseLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { color } from "@mui/system";

interface IComments {
  showComments: boolean;
  setShowComments: any;
  like: boolean;
  setLike: any;
}

const Post = ({ showComments, setShowComments, like, setLike }: IComments) => {
  const handleComments = () => {
    setShowComments(!showComments)
  }

  const handleLike = () => {
    setLike(!like)
  }

  return (
    <Content>
      <div className="HeadPost">
        <div className="InfoUser">
          <img src="" alt="" />
          <h2>Name user</h2>
        </div>
        <button>
          <HiDotsHorizontal />
        </button>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos
        inventore fuga quam ut et atque blanditiis quas consequuntur
        exercitationem! Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Expedita voluptate provident modi laudantium quae perferendis nam
        doloremque distinctio eum, eveniet quaerat dolorum unde voluptatem ea
        sequi veniam illo laboriosam impedit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sit eligendi quisquam commodi consequatur
        necessitatibus, omnis inventore deleniti! Magni, atque officia ut, cum
        ex commodi aut culpa omnis nulla quisquam aspernatur?
      </p>
      <div className="Buttons">
        <div className="LeftButtons">
          <button id="btnOne" onClick={() => handleLike()}>
            {like === false ? (<BiLike />) : (<BiLike color="blue"/>)}
            <span>Curtir</span>
          </button>
          <button id="btnTwo">
            <FaRegComment />
            <span>Comentar</span>
          </button>
          <button id="btnThree" onClick={() => handleComments()}>
            {showComments === false ? (
              <>
                <MdOutlineRemoveRedEye />
                <span>Ver comentários</span>
              </>
            ) : (
              <>
                <RiEyeCloseLine />
                <span>Esconder comentários</span>
              </>
            )}
          </button>
        </div>
        <button id="addFriend">
          <BsHeartFill size={22} />
        </button>
      </div>
    </Content>
    // a condicional para mostrar os comentários ficarão aqui
  );
};

export default Post;
