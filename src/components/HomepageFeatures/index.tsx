import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Click",
    Svg: require("@site/static/img/undraw_coding.svg").default,
    description: (
      <>
        Click on the <code>Edit this page</code> button in your documentation to
        start editing. No need to hunt for markdown files or navigate complex
        folder structures.
      </>
    ),
  },
  {
    title: "Edit",
    Svg: require("@site/static/img/undraw_collection.svg").default,
    description: (
      <>
        Edit your content with a WYSIWYG interface. See your changes in
        real-time as you type, format, and style your documentation.
      </>
    ),
  },
  {
    title: "Publish",
    Svg: require("@site/static/img/undraw_co-working.svg").default,
    description: (
      <>
        Your changes are saved and submitted for review before going live.
        Maintain quality control while streamlining your documentation workflow.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
