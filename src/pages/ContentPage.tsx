import Profile from "../components/Profile/Profile";
import Stats from "../components/Stats/Stats";
import Team from "../components/Team/Team";
import Content from "../ui/Content";

const ContentPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-3 lg:flex-row">
      <Content>
        <Team />
        <Stats />
      </Content>
      <Profile />
    </div>
  );
};

export default ContentPage;
