import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, token, useCdn } from "../env";

export const readClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: "published",
});

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token,
});
