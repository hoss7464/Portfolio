import GlobalStyle from "./Core-Ui/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Helpers/ScrollToTop";
import {
  AppContainer,
  AppLayout,
  Profile,
  ProfileSection1,
  ProfileSection2,
  SlightBox,
  AvatarBox,
  Avatar,
  AvatarImg,
  TimelineBox,
} from "./Core-Ui/AppElement";
import Resume from "./Pages/Resume/index";
import Project from "./Pages/Project/index";
import Contact from "./Pages/Contact/index";
import ProfileImage from "./Assets/Images/2.jpg";
import CustomTimeline from "./Components/CustomTimeline/index";
import FixedFile from "./Components/FixedFile";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <GlobalStyle />
        <FixedFile />
        <AppContainer>
          <Profile>
            <ProfileSection1>
              <AvatarBox>
                <Avatar>
                  <AvatarImg src={ProfileImage} />
                </Avatar>
              </AvatarBox>
              <SlightBox />
            </ProfileSection1>
            <ProfileSection2>
              <TimelineBox>
                <CustomTimeline />
              </TimelineBox>
            </ProfileSection2>
          </Profile>

          <AppLayout>
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AppLayout>
        </AppContainer>
      </Router>
    </>
  );
}

export default App;
