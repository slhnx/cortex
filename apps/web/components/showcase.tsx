"use client";

/**
 * Product showcase — the signature visual element.
 *
 * Renders a stylized knowledge graph visualization using SVG.
 * This communicates how Cortex connects information without
 * requiring a full product screenshot.
 */
export function Showcase() {
  const nodes = [
    { id: "a", x: 200, y: 80, label: "Design Systems", size: "lg" },
    { id: "b", x: 420, y: 140, label: "Component API", size: "sm" },
    { id: "c", x: 100, y: 220, label: "User Research", size: "md" },
    { id: "d", x: 340, y: 280, label: "Accessibility", size: "sm" },
    { id: "e", x: 520, y: 60, label: "Typography", size: "sm" },
    { id: "f", x: 160, y: 360, label: "Product Strategy", size: "md" },
    { id: "g", x: 440, y: 360, label: "Team Rituals", size: "sm" },
    { id: "h", x: 300, y: 180, label: "Color Theory", size: "sm" },
  ];

  const edges: [string, string][] = [
    ["a", "b"],
    ["a", "c"],
    ["a", "h"],
    ["b", "d"],
    ["b", "e"],
    ["c", "d"],
    ["c", "f"],
    ["d", "g"],
    ["f", "g"],
    ["h", "d"],
    ["e", "h"],
  ];

  const nodeMap: Record<string, (typeof nodes)[number]> = Object.fromEntries(
    nodes.map((n) => [n.id, n])
  );

  return (
    <section className="border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Knowledge graph
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ideas don&apos;t live in silos
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            Cortex maps the connections between everything you know —
            automatically.
          </p>
        </div>

        {/* Graph visualization */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-[620px] overflow-hidden rounded-xl border border-border/60 bg-card/50 p-4">
            <svg
              viewBox="0 0 620 440"
              className="h-auto w-full"
              aria-label="Knowledge graph visualization showing connected topics"
            >
              {/* Edges */}
              {edges.map(([from, to]) => {
                const a = nodeMap[from];
                const b = nodeMap[to];
                if (!a || !b) return null;
                return (
                  <line
                    key={`${from}-${to}`}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    className="stroke-border"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Nodes */}
              {nodes.map((node) => {
                const r = node.size === "lg" ? 8 : node.size === "md" ? 6 : 5;
                return (
                  <g key={node.id}>
                    {/* Glow */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={r + 8}
                      className="fill-primary/5"
                    />
                    {/* Dot */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={r}
                      className="fill-foreground/80"
                    />
                    {/* Label */}
                    <text
                      x={node.x}
                      y={node.y + r + 16}
                      textAnchor="middle"
                      className="fill-muted-foreground text-[11px] font-medium"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
