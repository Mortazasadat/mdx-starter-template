import { Border } from "@/components/Border";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { ThemeToggle } from "@/components/ThemeToggle";
import { formatDate, getBlogPosts } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  let allBlogs = getBlogPosts();

  return (
    <div className="pb-32">
      <PageIntro eyebrow="Blogs" title="The lates blog and articles">
        <p>Stay up-to-date with the latest industry news.</p>
      </PageIntro>

      <Container>
        <div className="space-y-24 lg:space-y-20">
          {allBlogs.map((post) => (
            <div>
              <article>
                <Border className="pt-16 ">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className=" text-2xl dark:text-white font-semibold text-neutral-950">
                        <Link href={`/${post.slug}`}>
                          {post.metadata.title}
                        </Link>
                      </h2>
                      <dl className="lg:absolute dark:text-white lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                        <dt className="sr-only">Published</dt>
                        <dd className="absolute dark:text-white left-0 top-0 text-sm text-neutral-950 lg:static">
                          <time dateTime={post.metadata.publishedAt}>
                            {formatDate(post.metadata.publishedAt, false)}
                          </time>
                        </dd>
                        <dt className="sr-only">Author</dt>
                        <dd className="mt-6 flex gap-x-4">
                          <div className="flex-none h-14 w-14 overflow-hidden rounded-xl ">
                            <Image
                              alt="i"
                              src="/angela-fisher.jpg"
                              className=" object-cover grayscale"
                              height={200}
                              width={200}
                            />
                          </div>

                          <div className="text-sm dark:text-white text-neutral-950">
                            <div className="font-semibold">
                              {/* {post.author.name} */}
                              {post.metadata.name}
                            </div>
                            <div>{post.metadata.role} </div>
                          </div>
                        </dd>
                      </dl>
                      <p className="mt-6 max-w-2xl dark:text-gray-300 text-base text-neutral-600">
                        {post.metadata.summary}
                      </p>
                      <Button
                        href={`/${post.slug}`}
                        aria-label={`Read more: ${post.metadata.title}`}
                        className="mt-8 dark:bg-white dark:text-black"
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
