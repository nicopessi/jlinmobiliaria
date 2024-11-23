import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: "hz7dvrij",
  dataset: "production",
  apiVersion: "2024-11-10",
  useCdn: false,
});

const builder = imageUrlBuilder(client);


export const urlFor = (source) => builder.image(source);