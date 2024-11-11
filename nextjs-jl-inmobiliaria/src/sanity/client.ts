import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "hz7dvrij",
  dataset: "production",
  apiVersion: "2024-11-10",
  useCdn: false,
});