import {
  Timeline,
  Header,
  BoxCreatePost,
  Form,
  PostsList,
  Post,
  LinkPost,
} from "./timelineStyle";
import logo from "../../assets/linkr.png";
import menu_vector from "../../assets/Vector (2).png";
import profile from "../../assets/image 3.png";
import timeline from "../../assets/timeline.png";
import img_link from "../../assets/image 4.png"

export default function TimelinePage() {
  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
        <div>
          <img src={menu_vector} alt="menu" className="menu" />
          <img
            src={profile}
            alt="profile_picture"
            className="profile_picture"
          />
        </div>
      </Header>
      <Timeline>
        <img src={timeline} alt="" />
        <BoxCreatePost>
          <div>
            <img
              src={profile}
              alt="profile_picture"
              className="profile_picture"
            />
            <p>What are you going to share today?</p>
          </div>
          <Form>
            <input
              type="text"
              className="url"
              placeholder="https://..."
              required
            />
            <input
              type="text"
              className="description"
              placeholder="Description"
            />
            <button>Publish</button>
          </Form>
          <PostsList>
            <Post>
              <div>
                <img
                  src={profile}
                  alt="profile_picture"
                  className="profile_picture"
                />
                <p>Juvenal Juvêncio</p>
              </div>
              <p className="description_post">Olha esse link, muito topeeeee</p>
              <LinkPost>
                <div className="link_details">
                  <h1>Título do link</h1>
                  <h2>descrição do link</h2>
                  <h3>url do link</h3>
                </div>
                <img src={img_link} alt="" className="link_img"/>
              </LinkPost>
            </Post>
          </PostsList>
        </BoxCreatePost>
      </Timeline>
    </>
  );
}
