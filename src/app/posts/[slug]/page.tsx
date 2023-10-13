/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-underscore-dangle */
import Link from "next/link";
import { notFound } from "next/navigation";

import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "contentlayer/generated";

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

export const generatedStaticParams = async () => {
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
};

export const generatedMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
};

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article>
      <div>
        <time dateTime={post.date}>
          {new Intl.DateTimeFormat("en-US").format(new Date(post.date))}
        </time>
        <h1>{post.title}</h1>
      </div>
      <MDXContent components={mdxComponents} />
    </article>
  );
}
