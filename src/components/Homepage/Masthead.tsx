import { Group, Grid, Card } from "@mantine/core";

import Picture from "../../images/zoey.jpeg";
import CV from "../../files/Zoey Ki CV.pdf";

import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
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
            <h1>Zoey (Dayeon) Ki</h1>
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
                href="https://scholar.google.com/citations?user=1-zFF7PywAAAAJ&hl=en"
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
            CS Ph.D. Student @ University of Maryland
          </p>

          <p>
            Hi, I'm Zoey! I'm a second-year computer science Ph.D. student @
            University of Maryland, advised by{" "}
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
              Computational Linguistics and Information Processing (CLIP) Lab
            </a>
            . My research interests lie at the intersection of{" "}
            <b>multilingual</b>, <b>cross-cultural NLP</b>, and{" "}
            <b>machine translation</b>. 
            Through my research, I hope to develop methods that can effectively align language models with multilingual users, aiming to bridge the gap between them.
          </p>

          <p>
            Previously, I received my B.S. in statistics + computer
            science @ Korea University. As an undergrad, I worked with{" "}
            <a
              target="_blank"
              href="https://seominjoon.github.io/"
              title="Minjoon Seo"
            >
              Prof. Minjoon Seo
            </a>{" "}
            @ Language & Knowledge Lab and{" "}
            <a
              target="_blank"
              href="https://sites.google.com/site/jaegulchoo/"
              title="Jaegul Choo"
            >
              Prof. Jaegul Choo
            </a>{" "}
            @ Data and Visual Analytics Lab. 
            I've also interned at Adobe Research.
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
