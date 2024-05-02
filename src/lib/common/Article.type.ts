import { type ArticleSection } from "./ArticleSection.type";

export type Article = {
  id: number,
  kicker: string,
  title: string,
  teaser: string,
  sections: Array<ArticleSection>
};