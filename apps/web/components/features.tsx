import {
  IconNetwork,
  IconSearch,
  IconNote,
  IconSparkles,
} from "@tabler/icons-react";

const features = [
  {
    icon: IconNote,
    title: "Capture anything",
    description:
      "Notes, documents, links, and references — all in one structured workspace that adapts to how you think.",
  },
  {
    icon: IconNetwork,
    title: "See the connections",
    description:
      "Cortex surfaces relationships between your ideas automatically. Your knowledge becomes a graph, not a graveyard.",
  },
  {
    icon: IconSearch,
    title: "Search with meaning",
    description:
      "Find information by what it means, not just what it says. Semantic search understands context and intent.",
  },
  {
    icon: IconSparkles,
    title: "AI that knows your work",
    description:
      "Ask questions across your entire knowledge base. Get answers grounded in what you've actually written and saved.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Capabilities
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Built around how knowledge actually works
        </h2>

        <div className="mt-16 grid gap-y-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16">
          {features.map((feature) => (
            <div key={feature.title}>
              <feature.icon className="mb-3 size-5 text-muted-foreground" />
              <h3 className="text-[15px] font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
