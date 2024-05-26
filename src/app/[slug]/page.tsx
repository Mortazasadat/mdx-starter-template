import { Container } from "@/components/Container";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getBlogPosts } from "@/utils/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,

    image,
  } = post.metadata;

  return {
    title,
    description,
  };
}

export default function Blog({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <div>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 text-3xl dark:text-white font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              {post.metadata.title}
            </h1>
            <time
              dateTime={post.metadata.publishedAt}
              className="order-first dark:text-white text-sm text-neutral-950"
            >
              {formatDate(post.metadata.publishedAt)}
            </time>
            <div className="flex items-center  my-7 justify-center gap-x-5">
              <p className=" text-lg font-semibold dark:text-white text-neutral-950">
                {post.metadata.name}
              </p>
              <div>
                <Image
                  alt="i"
                  src="/angela-fisher.jpg"
                  className=" object-cover rounded-full"
                  height={50}
                  width={50}
                />
              </div>
            </div>
          </header>
        </div>

        <article className="prose max-w-4xl mx-auto">
          <CustomMDX source={post.content} className="" />
        </article>
      </Container>
    </>
  );
}
