import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetResourcesParams {
  query: string;
  category: string;
  page: number;
}

export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({ type: "resource", query, category, page })}{title, "image": poster.asset->url, url, category, _id, views, slug}`
    );

    return resources;
  } catch (error) {
    console.error(error);
  }
};

export const getResourcesPlaylist = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resourcePlaylist"]{
        _id,
        title,
        resources[0...6]->{
          title,
          _id,
          url,
          "image": poster.asset->url,
          views,
          category
        }
      }`
    );

    return resources;
  } catch (error) {
    console.error(error);
  }
};
