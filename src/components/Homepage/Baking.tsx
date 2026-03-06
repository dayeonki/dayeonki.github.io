import { Flex, Card } from "@mantine/core";
import saltbread from "../../images/baking/saltbread.jpeg";
import levain from "../../images/baking/levain.jpeg";
import filling from "../../images/baking/filling.jpeg";
import figjam from "../../images/baking/figjam.jpeg";
import carrotcake from "../../images/baking/carrotcake.jpeg";

import ball from "../../images/baking/ball.jpg";
import keylime from "../../images/baking/keylime.jpg";
import lemon from "../../images/baking/lemon.jpg";
import scones from "../../images/baking/scones.jpg";
import collection from "../../images/baking/collection.jpg";

import appleturn from "../../images/baking/appleturn.jpg";
import apple from "../../images/baking/apple.jpg";
import choco from "../../images/baking/choco.jpg";
import mugwort from "../../images/baking/mugwort.jpg";
import scone2 from "../../images/baking/scone2.jpg";

import collections2 from "../../images/baking/collections2.jpg";
import earlscone from "../../images/baking/earlscone.jpg";
import peach from "../../images/baking/peach.jpg";
import heartchoco from "../../images/baking/heartchoco.jpeg";
import cinamon from "../../images/baking/cinamon.jpg";

import MyImage from "../MyImage";


function Baking() {
    return (
      <section id="baking-section">
          <div className="anchor" id="baking"></div>
          <h2>Baking 🥐</h2>
          <p>
          I started baking in 2013 and quickly developed a deep passion for it.
          What began as baking for family and friends eventually inspired me to take it a step further professionally.
          I earned a national certificate in baking and pâtisserie in Korea and ran my own online bakery, <b>kkma bakery</b> (꼬꼬마 과자점, <i>ko-ko-ma bakery</i>), from 2022 to 2023.
          These days, I bake occasionally in my free time. Check out some of my favorite creations below! ◡̈
          </p>
          <Flex
                gap={8} // Reduced gap between items
                justify="center"
                align="center"
                direction="row"
                wrap="wrap" // Allow rows to wrap naturally
                style={{ rowGap: '5px' }} // Custom row gap for tighter rows
            >
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={saltbread} />
            </Card.Section>
            </Card>
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={levain} />
            </Card.Section>
            </Card>
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={filling} />
            </Card.Section>
            </Card>
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={figjam} />
            </Card.Section>
            </Card>
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={carrotcake} />
            </Card.Section>
            </Card>
        </Flex>

        <Flex
                gap={8} // Reduced gap between items
                justify="center"
                align="center"
                direction="row"
                wrap="wrap" // Allow rows to wrap naturally
                style={{ rowGap: '5px' }} // Custom row gap for tighter rows
            >
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={ball} />
            </Card.Section>
            </Card>
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={keylime} />
            </Card.Section>
            </Card>
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={lemon} />
            </Card.Section>
            </Card>
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={scones} />
            </Card.Section>
            </Card>
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={collection} />
            </Card.Section>
            </Card>
        </Flex>

        <Flex
                gap={8} // Reduced gap between items
                justify="center"
                align="center"
                direction="row"
                wrap="wrap" // Allow rows to wrap naturally
                style={{ rowGap: '5px' }} // Custom row gap for tighter rows
            >
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={appleturn} />
            </Card.Section>
            </Card>
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={apple} />
            </Card.Section>
            </Card>
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={choco} />
            </Card.Section>
            </Card>
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={mugwort} />
            </Card.Section>
            </Card>
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={scone2} />
            </Card.Section>
            </Card>
        </Flex>

        <Flex
                gap={8} // Reduced gap between items
                justify="center"
                align="center"
                direction="row"
                wrap="wrap" // Allow rows to wrap naturally
                style={{ rowGap: '5px' }} // Custom row gap for tighter rows
            >
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={collections2} />
            </Card.Section>
            </Card>
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={earlscone} />
            </Card.Section>
            </Card>
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={peach} />
            </Card.Section>
            </Card>
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={heartchoco} />
            </Card.Section>
            </Card>
            <Card radius={"lg"} style={{ width: '220px', height: '270px' }}>
            <Card.Section>
                <MyImage src={cinamon} />
            </Card.Section>
            </Card>
        </Flex>
    </section>
    );
  }
  
  export default Baking;
  