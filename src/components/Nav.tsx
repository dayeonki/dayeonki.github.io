import { Group } from "@mantine/core";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function Nav(props: any) {
  const [selected, setSelected] = useState("about");
  const isHome = props.home;

  const [{ y }] = useWindowScroll();

  useEffect(() => {
    if (!isHome) {
      setSelected("about");
      return;
    }

    const curY = y as number;

    // find positions of each section
    const news = document.getElementById("news-section")?.offsetTop;
    const research = document.getElementById("research-section")?.offsetTop;
    const leadership = Math.min(
      document.getElementById("leadership-section")?.offsetTop ||
        document.body.scrollHeight,
      document.documentElement.offsetHeight -
        document.documentElement.clientHeight
    );
    const baking = Math.min(
      document.getElementById("baking-section")?.offsetTop ||
        document.body.scrollHeight,
      document.documentElement.offsetHeight -
        document.documentElement.clientHeight
    );
    const lowlight = Math.min(
      document.getElementById("lowlight-section")?.offsetTop ||
        document.body.scrollHeight,
      document.documentElement.offsetHeight -
        document.documentElement.clientHeight
    );

    if (leadership && curY > leadership - 150) {
      setSelected("leadership");
    } else if (news && curY > news - 150) {
      setSelected("news");
    } else if (research && curY > research - 150) {
      setSelected("research");
    } else if (lowlight && curY > lowlight - 150) {
      setSelected("lowlight");
    } else if (baking && curY > baking - 150) {
      setSelected("baking");
    } else {
      setSelected("about");
    }
  }, [y, isHome]);

  return (
    <>
      {isHome ? (
        <Group justify="center" id="nav" gap={"xl"}>
          <Link
            className={selected === "about" ? "selected" : ""}
            onClick={() => {
              setSelected("about");
              window.scrollTo(0, 0);
            }}
            to="/"
            title="about"
          >
            About
          </Link>
          <Link
            to="#news"
            className={selected === "news" ? "selected" : ""}
            onClick={() => setSelected("news")}
            title="news"
          >
            News
          </Link>
          <Link
            to="#research"
            className={selected === "research" ? "selected" : ""}
            onClick={() => setSelected("research")}
            title="research"
          >
            Research
          </Link>
          <Link
            to="#leadership"
            className={selected === "leadership" ? "selected" : ""}
            onClick={() => setSelected("leadership")}
            title="leadership"
          >
            Leadership
          </Link>
          <Link
            to="#baking"
            className={selected === "baking" ? "selected" : ""}
            onClick={() => setSelected("baking")}
            title="baking"
          >
            Baking
          </Link>
          <Link
            to="#lowlight"
            className={selected === "lowlight" ? "selected" : ""}
            onClick={() => setSelected("lowlight")}
            title="lowlight"
          >
            How I Fail
          </Link>
        </Group>
      ) : (
        <Group justify="center" id="nav" gap={"xl"}>
          <Link to="/" title="home">
            &larr; Back to Home
          </Link>
        </Group>
      )}
    </>
  );
}
export default Nav;
