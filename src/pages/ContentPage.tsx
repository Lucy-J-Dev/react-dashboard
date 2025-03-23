import Profile from "../components/Profile/Profile";
import Stats from "../components/Stats/Stats";
import Team from "../components/Team/Team";
import Content from "../ui/Content";

const ContentPage = () => {
  return (
    <>
      <Content>
        <div className="flex flex-col gap-3 lg:flex-row">
          <Team />
        </div>
        <Stats />
      </Content>
      <Profile />
    </>
  );
};

export default ContentPage;
