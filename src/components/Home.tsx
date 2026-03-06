import { Stack } from "@mantine/core";
import Masthead from "./Homepage/Masthead";
import Research from "./Homepage/Research";
import News from "./Homepage/News";
import Leadership from "./Homepage/Leadership";
import Baking from "./Homepage/Baking";
import Lowlight from "./Homepage/Lowlight";

function Home() {
  return (
    <Stack id="home" className="fade-in">
      <Masthead />
      <News />
      <Research />
      <Leadership />
      <Baking />
      <Lowlight />
    </Stack>
  );
}

export default Home;
