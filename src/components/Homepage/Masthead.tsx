import { Group, Grid, Card } from "@mantine/core";

import Picture from "../../images/zoey.jpg";
import CV from "../../files/CV.pdf";

import { FaLinkedinIn, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import MyImage from "../MyImage";

function Masthead() {
  return (
    <div id="masthead">
      <Grid
        grow
        gutter={{ base: 20, xs: 25, sm: 40, md: 45, xl: 50 }}
        align="center"
      >
        <Grid.Col span={{ base: 12, sm: 5, md: 4, lg: 3 }}>
          <Card radius={"lg"} id="prof-pic-contain">
            <Card.Section>
              <MyImage
                src={Picture}
                id="prof-pic"
                title="Zoey Ki"
                alt="Picture of Zoey Ki"
              />
            </Card.Section>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 7, md: 8, lg: 9 }}>
          <Group justify="space-between" align="center" id="header-contain">
            <h1>Dayeon (Zoey) Ki</h1>
            <Group gap={"sm"} className="icons" justify="end">
              <a
                target="_blank"
                href="mailto:dayeonki@umd.edu"
                title="Email"
              >
                <FaEnvelope />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/zoey-ki/"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                target="_blank"
                href="https://x.com/zoeykii"
                title="X"
              >
                <FaTwitter />
              </a>
              <a
                target="_blank"
                href="https://scholar.google.com/citations?user=zFF7PywAAAAJ&hl=en"
                title="Google Scholar"
              >
                <FaGoogleScholar />
              </a>
              <a
                target="_blank"
                href="https://github.com/dayeonki/"
                title="Github"
              >
                <FaGithub />
              </a>
            </Group>
          </Group>

          <p className="monospace accent tagline grad2">
            CS Ph.D. Candidate @ University of Maryland
          </p>

          <p>
            Hi, I'm <b>Zoey</b>! ♥︎ I'm a third-year Computer Science Ph.D. candidate at the University of Maryland, advised by{" "}
            <a
              target="_blank"
              href="https://www.cs.umd.edu/~marine/"
              title="Marine Carpuat"
            >
              Prof. Marine Carpuat
            </a>{" "}
            in the{" "}
            <a
              target="_blank"
              href="https://wiki.umiacs.umd.edu/clip/index.php/Main_Page"
              title="CLIP Lab"
            >
              Computational Linguistics and Information Processing Lab.
            </a></p>

          <p>
            I study <b>how AI mediates human communication across languages and cultures, and how humans, in turn, learn to interpret and make decisions from <i>imperfect</i> AI outputs.</b>{" "}
            My research sits at the intersection of multilingual NLP and human-centered AI, where I combine methods from NLP, HCI, and statistics to design and evaluate multilingual systems and to measure their impact on human understanding and decision-making.{" "}
            My long-term goal is to make AI-mediated communication more trustworthy for diverse communities. 𐦂𖨆𐀪𖠋
          </p>

          <p>
            Previously, I received my Bachelors in Statistics and Computer Science at Korea University. During my undergraduate studies, I worked with{" "}
            <a
              target="_blank"
              href="https://seominjoon.github.io/"
              title="Minjoon Seo"
            >
              Prof. Minjoon Seo
            </a>{" "}
            in the Language & Knowledge Lab and{" "}
            <a
              target="_blank"
              href="https://sites.google.com/site/jaegulchoo/"
              title="Jaegul Choo"
            >
              Prof. Jaegul Choo
            </a>{" "}
            in the Data and Visual Analytics Lab.{" "}
          </p>
          <p>
            Aside from research, I enjoy cooking, running, and learning new languages. I'm currently learning French (<i>bonjour</i>!) and Chinese (<i>你好</i>!). Fun Fact: I lived in Beijing, China for 7 years and Prague, Czech Republic for 4 years ✈︎!{" "}
          </p>
          <p>
            You can find more information in my{" "}
            <a target="_blank" href={CV} title="CV">
              CV
            </a>
            .
          </p>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default Masthead;
