import { LinkPost, PostStyled } from "./postStyled";

export default function Post({ post }) {
  const {
    post_comment,
    post_description,
    post_id,
    post_image,
    post_link,
    post_title,
    post_url,
    user_id,
    user_name,
    user_img_url,
  } = post;
  return (
    <PostStyled key={post_id}>
      <div className="info">
        <img
          src={user_img_url}
          alt="profile_picture"
          className="profile_picture_post"
        />
        <p>{user_name}</p>
      </div>
      <p className="description_post">{post_comment}</p>
      <a href={post_link} target="_blank">
        <LinkPost>
          <div className="link_details">
            <h1>{post_title}</h1>
            <h2>{post_description}</h2>
            <h3>{post_url}</h3>
          </div>
          <img src={post_image} alt="" className="link_img" />
        </LinkPost>
      </a>
    </PostStyled>
  );
}
