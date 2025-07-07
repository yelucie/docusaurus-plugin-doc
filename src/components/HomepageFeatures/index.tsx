import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import Translate from '@docusaurus/Translate';
import styles from "./styles.module.css";

type FeatureItem = {
  title: ReactNode;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Translate
        id="homepage.features.click.title"
        description="Title for the Click feature">
        Click
      </Translate>
    ),
    Svg: require("@site/static/img/undraw_coding.svg").default,
    description: (
      <Translate
        id="homepage.features.click.description"
        description="Description for the Click feature">
        Click on the Edit this page button in your documentation to start editing. No need to hunt for markdown files or navigate complex folder structures.
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.edit.title"
        description="Title for the Edit feature">
        Edit
      </Translate>
    ),
    Svg: require("@site/static/img/undraw_collection.svg").default,
    description: (
      <Translate
        id="homepage.features.edit.description"
        description="Description for the Edit feature">
        Edit your content with a WYSIWYG interface. See your changes in real-time as you type, format, and style your documentation.
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.publish.title"
        description="Title for the Publish feature">
        Publish
      </Translate>
    ),
    Svg: require("@site/static/img/undraw_co-working.svg").default,
    description: (
      <Translate
        id="homepage.features.publish.description"
        description="Description for the Publish feature">
        Your changes are saved and submitted for review before going live. Maintain quality control while streamlining your documentation workflow.
      </Translate>
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
