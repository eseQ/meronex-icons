import CodeBlock from "@components/@core/code-block";
import Container from "@components/@core/container";
import Badges from "@components/pages/home/badges";
import ReactMarkdown from "react-markdown";

import LgGithubOctocat from "@meronex/icons/lg/LgGithubOctocat";
import LgNpm from "@meronex/icons/lg/LgNpm";
import { BRAND_TITLE, HOME_USAGE } from "@utils/constants";

import React from "react";

const CHANGELOG = require("@meronex/icons/CHANGELOG.md").default;

export default function HomePage() {
  const styleIcon = {
    top: "10px",
    fontSize: "35px",
    position: "relative",
  };
  return (
    <Container title={BRAND_TITLE}>
      <Badges />
      <p>
        Include popular icons in your React projects easily with react-icons,
        which utilizes ES6 imports that allows you to include only the icons
        that your project is using.
      </p>
      <h1>Installation</h1>
      <CodeBlock code={`npm install @meronex/icons --save`} />
      <h1>Usage</h1>
      <CodeBlock code={HOME_USAGE} />

      <ReactMarkdown source={CHANGELOG} />
      <h2>More info</h2>
      <p>
        <a href="https://github.com/aliogaili/meronex-icons" target={"_blank"}>
          <LgGithubOctocat style={styleIcon} /> &nbsp; Github Repo &#8599;
        </a>
      </p>
      <p>
        <a
          href="https://www.npmjs.com/package/@meronex/icons"
          target={"_blank"}
        >
          <LgNpm style={styleIcon} /> &nbsp; NPM Package &#8599;
        </a>
      </p>
    </Container>
  );
}
