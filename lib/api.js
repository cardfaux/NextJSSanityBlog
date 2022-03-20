import client, { previewClient } from './sanity';
import imageUrlBuilder from '@sanity/image-url';

// get blog data start
const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  coverImage,
`;

const builder = imageUrlBuilder(client);
const getClient = (preview) => (preview ? previewClient : client);

export function urlFor(source) {
  return builder.image(source);
}

// offset = how many data you want to skip, limit = how many date you want to fetch
export async function getAllBlogs() {
  const results = await client.fetch(
    `*[_type == "blog"] | order(date desc) {${blogFields}}`
  );
  return results;
}

export async function getPaginatedBlogs(
  { offset = 0, date = 'desc' } = { offset: 0, date: 'desc' }
) {
  const results = await client.fetch(
    `*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${
      offset + 6
    }]`
  );
  return results;
}

export const onBlogUpdate = (slug) => {
  const client = getClient(true);
  return client.listen(
    `*[_type == "blog" && slug.current == $slug] {
    ${blogFields}
    content[]{..., "asset": asset->}
  }`,
    { slug }
  );
};

export async function getBlogBySlug(slug, preview) {
  const currentClient = getClient(preview);
  const result = await currentClient
    .fetch(
      `*[_type == "blog" && slug.current == $slug] {
      ${blogFields}
      content[]{..., "asset": asset->}
    }`,
      { slug }
    )
    .then((res) => (preview ? (res?.[1] ? res[1] : res[0]) : res?.[0]));

  return result;
}
// get blog data stop

// get project data start
const projectFields = `
  projectTitle,
  projectSubtitle,
  'slug': slug.current,
  date,
  'coverImage': projectImage.asset->url
`;
export async function getAllProjects() {
  const results = await client.fetch(`*[_type == "project"]{ ${projectFields} }`);
  return results;
}

export async function getProjectBySlug(slug) {
  const result = await client
    .fetch(
      `*[_type == "project" && slug.current == $slug] {
      ${projectFields}
    }`,
      { slug }
    )
    .then((res) => res?.[0]);

  return result;
}
// get project data stop
