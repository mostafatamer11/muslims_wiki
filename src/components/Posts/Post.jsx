import "./style.css"

import {
  FaDotCircle as AuthorIcon,
  FaComment,
  FaHeart,
  FaThumbsUp,
} from "react-icons/fa";
import CommentInput from "./CommentInput";

const Post = ({ author, timestamp, reactions, text, active = true }) => {
  return (
    <div
      className="m-4 rounded-12 pb-16"
    >
      <div className="post-author">
        <div className="author">
          <div className={`author-img ${active ? "active" : ""}`}>
            {/* <img src="/user-author.png" alt="" /> */}
          </div>
          <div className="author-text">
            <h3 className="text-md font-normal mb-1">اسم المؤلف</h3>
            <span className="text-sm font-thin">مطور ويب</span>
          </div>
        </div>
        <div className="post-settings">
          <div className="icon py-1 rounded-8 cursor-pointer max-w-max">
            <img src="/mage_dots.png" alt="" />
          </div>
          <span className="timestamp">1hr</span>
        </div>
      </div>
      <div className="post-content">
        <p className="text-lg text-center px-6">Hello, Everyone. This is my first post here</p>
      </div>
      <div className="post-reactions">
        <ul className="reactions">
          <li className="icon py-1 rounded-8 cursor-pointer max-w-max">
            <img src="/icon-park-twotone_like.svg" alt="" />
            <span className="number">58</span>
          </li>
          <li className="icon py-1 rounded-8 cursor-pointer max-w-max">
            <img src="/mdi_like.svg" alt="" />
            <span className="number">61</span>
          </li>
          <li className="icon py-1 rounded-8 cursor-pointer max-w-max">
            <img src="/mdi_comments-text.svg" alt="" />
            <span className="number">12</span>
          </li>
        </ul>
        <CommentInput />
      </div>
    </div>
  );
};

export default Post;
