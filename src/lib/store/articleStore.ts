import { writable } from "svelte/store";
import { type Article } from "../common/Article.type";

export const selectedArticle = writable<Article | undefined>();

selectedArticle.subscribe((value) => {
  console.log('articleStore article:')
  console.log(value);
});