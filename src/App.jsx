import {
  Section,
  Container,
  BlogCard,
  Heading,
  Statistics,
  CryptoHistory,
  ForbesList,
} from 'components';
import dataArticle from './data/article.json';

import dataStats from "./data/stats.json"

import forbesData from './data/forbes.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard
          poster={dataArticle.poster}
          tag={dataArticle.tag}
          title={dataArticle.title}
          description={dataArticle.description}
          name={dataArticle.name}
          avatar={dataArticle.avatar}
          postedAt={dataArticle.postedAt}
        />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" 
          dataStats = {dataStats}
        />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList list={ forbesData } />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory />

      </Container>
    </Section>
  );
};
