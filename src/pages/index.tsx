import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Hero from '@site/src/components/landing/Hero';
import LearningTracks from '@site/src/components/landing/LearningTracks';
import TopicGrid from '@site/src/components/landing/TopicGrid';
import ValueProps from '@site/src/components/landing/ValueProps';
import FeaturedPages from '@site/src/components/landing/FeaturedPages';
import GlossaryTeaser from '@site/src/components/landing/GlossaryTeaser';
import FinalCTA from '@site/src/components/landing/FinalCTA';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Hero />
      <LearningTracks />
      <TopicGrid />
      <ValueProps />
      <FeaturedPages />
      <GlossaryTeaser />
      <FinalCTA />
    </Layout>
  );
}
