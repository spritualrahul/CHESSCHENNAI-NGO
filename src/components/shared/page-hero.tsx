import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
};

export function PageHero({ eyebrow, title, body, image }: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[64vh] overflow-hidden px-5 pt-36 text-white">
      <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,31,44,.86),rgba(6,31,44,.45)_48%,rgba(244,162,97,.28))]" />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-end pb-20 pt-20">
        <p className="eyebrow text-[var(--ches-orange)]">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-heading text-5xl font-extrabold leading-[1.02] md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">{body}</p>
      </div>
    </section>
  );
}
