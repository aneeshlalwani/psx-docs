import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Hero from '@site/src/components/landing/Hero';
import LearningTracks from '@site/src/components/landing/LearningTracks';
import TopicGrid from '@site/src/components/landing/TopicGrid';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Hero />
      <LearningTracks />
      <TopicGrid />
    </Layout>
  );
}
