import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: "hz7dvrij",
  dataset: "production",
  apiVersion: "2024-11-10",
  useCdn: false,
});