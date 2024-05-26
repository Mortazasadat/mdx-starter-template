import clsx from "clsx";

import { Container } from "@/components/Container";

export function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <Container
      className={clsx("mt-32 sm:mt-36 lg:mt-40", centered && "text-center")}
    >
      <div>
        <h1>
          <span className="block dark:text-white font-display text-base font-semibold text-neutral-950">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              "mt-6  block max-w-5xl dark:text-white text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl",
              centered && "mx-auto"
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            "mt-6 max-w-3xl text-xl dark:text-gray-300 text-neutral-600",
            centered && "mx-auto"
          )}
        >
          {children}
        </div>
      </div>
    </Container>
  );
}
