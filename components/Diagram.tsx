import type {
  DiagramData,
  DiagramEdge,
  DiagramNode,
  NodeKind,
  Side,
} from "@/content/deliverableDocs";

/**
 * Box-and-arrow diagram rendered as inline SVG from plain data, so the
 * architecture pictures live in content/ and follow light/dark mode through
 * the CSS variables in app/globals.css.
 */

const LOOP_OFFSET = 28;
const CHAR_WIDTH = 5.9;

const nodeStyle: Record<NodeKind, React.CSSProperties> = {
  ours: { fill: "var(--surface)", stroke: "var(--accent-strong)", strokeWidth: 2 },
  inherited: {
    fill: "var(--background)",
    stroke: "var(--muted)",
    strokeWidth: 2,
    strokeDasharray: "7 4",
  },
  external: { fill: "var(--surface)", stroke: "var(--border)", strokeWidth: 2 },
};

const legend: { kind: NodeKind; label: string }[] = [
  { kind: "ours", label: "Our work" },
  { kind: "inherited", label: "Inherited from the client" },
  { kind: "external", label: "External" },
];

function anchor(node: DiagramNode, side: Side): [number, number] {
  switch (side) {
    case "t":
      return [node.x + node.w / 2, node.y];
    case "b":
      return [node.x + node.w / 2, node.y + node.h];
    case "l":
      return [node.x, node.y + node.h / 2];
    case "r":
      return [node.x + node.w, node.y + node.h / 2];
  }
}

function wrap(text: string, maxChars: number): string[] {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(" ")) {
    if (line && (line + " " + word).length > maxChars) {
      lines.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

type Route = {
  points: [number, number][];
  label: { x: number; y: number; anchor: "middle" | "start"; rotate?: boolean };
};

function route(edge: DiagramEdge, from: DiagramNode, to: DiagramNode): Route {
  const [ax, ay] = anchor(from, edge.fromSide);
  const [bx, by] = anchor(to, edge.toSide);
  const horizontal = edge.fromSide === "l" || edge.fromSide === "r";

  if (edge.fromSide === edge.toSide && horizontal) {
    const x =
      edge.fromSide === "l"
        ? Math.min(ax, bx) - LOOP_OFFSET
        : Math.max(ax, bx) + LOOP_OFFSET;
    return {
      points: [[ax, ay], [x, ay], [x, by], [bx, by]],
      label: { x: x - 6, y: (ay + by) / 2, anchor: "middle", rotate: true },
    };
  }

  if (horizontal) {
    if (ay === by) {
      return {
        points: [[ax, ay], [bx, by]],
        label: { x: (ax + bx) / 2, y: ay - 8, anchor: "middle" },
      };
    }
    const mx = (ax + bx) / 2;
    return {
      points: [[ax, ay], [mx, ay], [mx, by], [bx, by]],
      label: { x: mx, y: (ay + by) / 2, anchor: "middle" },
    };
  }

  if (ax === bx) {
    return {
      points: [[ax, ay], [bx, by]],
      label: { x: ax + 8, y: (ay + by) / 2 + 4, anchor: "start" },
    };
  }
  const my = (ay + by) / 2;
  return {
    points: [[ax, ay], [ax, my], [bx, my], [bx, by]],
    label: { x: (ax + bx) / 2, y: my - 6, anchor: "middle" },
  };
}

export function Diagram({
  data,
  title,
  showLegend = true,
}: {
  data: DiagramData;
  title: string;
  showLegend?: boolean;
}) {
  const byId = new Map(data.nodes.map((n) => [n.id, n]));
  const markerId = `arrow-${title.replace(/\W+/g, "-").toLowerCase()}`;

  return (
    <figure>
      <div className="overflow-x-auto rounded-lg border border-line bg-surface">
        <svg
          viewBox={`0 0 ${data.width} ${data.height}`}
          role="img"
          aria-label={title}
          className="h-auto w-full min-w-[600px]"
        >
          <title>{title}</title>
          <defs>
            <marker
              id={markerId}
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--muted)" }} />
            </marker>
          </defs>

          {data.groups.map((g) => (
            <g key={g.label}>
              <rect
                x={g.x}
                y={g.y}
                width={g.w}
                height={g.h}
                rx={12}
                style={
                  g.tone === "ours"
                    ? {
                        fill: "var(--accent)",
                        fillOpacity: 0.08,
                        stroke: "var(--accent)",
                        strokeWidth: 1.5,
                      }
                    : {
                        fill: "none",
                        stroke: "var(--muted)",
                        strokeWidth: 1.5,
                        strokeDasharray: "3 5",
                      }
                }
              />
              <text
                x={g.x + 14}
                y={g.y + 22}
                fontSize={12}
                fontWeight={600}
                style={{ fill: "var(--muted)" }}
              >
                {g.label}
              </text>
            </g>
          ))}

          {data.edges.map((edge) => {
            const from = byId.get(edge.from);
            const to = byId.get(edge.to);
            if (!from || !to) return null;
            const { points, label } = route(edge, from, to);
            return (
              <g key={`${edge.from}-${edge.to}-${edge.fromSide}${edge.toSide}`}>
                <polyline
                  points={points.map((p) => p.join(",")).join(" ")}
                  fill="none"
                  strokeWidth={1.75}
                  strokeLinejoin="round"
                  strokeDasharray={edge.dashed ? "6 4" : undefined}
                  markerEnd={`url(#${markerId})`}
                  style={{ stroke: "var(--muted)" }}
                />
                {edge.label ? (
                  <text
                    x={label.x}
                    y={label.y}
                    fontSize={11}
                    textAnchor={label.anchor}
                    transform={
                      label.rotate
                        ? `rotate(-90 ${label.x} ${label.y})`
                        : undefined
                    }
                    paintOrder="stroke"
                    strokeWidth={5}
                    strokeLinejoin="round"
                    style={{ fill: "var(--foreground)", stroke: "var(--surface)" }}
                  >
                    {edge.label}
                  </text>
                ) : null}
              </g>
            );
          })}

          {data.nodes.map((n) => {
            const lines = n.sub ? wrap(n.sub, Math.floor((n.w - 16) / CHAR_WIDTH)) : [];
            return (
              <g key={n.id}>
                <rect
                  x={n.x}
                  y={n.y}
                  width={n.w}
                  height={n.h}
                  rx={8}
                  style={nodeStyle[n.kind]}
                />
                <text
                  x={n.x + n.w / 2}
                  y={n.y + 25}
                  fontSize={13}
                  fontWeight={600}
                  textAnchor="middle"
                  style={{ fill: "var(--foreground)" }}
                >
                  {n.label}
                </text>
                {lines.map((line, i) => (
                  <text
                    key={i}
                    x={n.x + n.w / 2}
                    y={n.y + 43 + i * 14}
                    fontSize={11}
                    textAnchor="middle"
                    style={{ fill: "var(--muted)" }}
                  >
                    {line}
                  </text>
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {showLegend ? (
        <figcaption className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {legend.map((item) => (
            <span key={item.kind} className="inline-flex items-center gap-2">
              <svg width="22" height="14" aria-hidden="true">
                <rect
                  x="1"
                  y="1"
                  width="20"
                  height="12"
                  rx="3"
                  style={nodeStyle[item.kind]}
                />
              </svg>
              {item.label}
            </span>
          ))}
          <span className="inline-flex items-center gap-2">
            <svg width="26" height="14" aria-hidden="true">
              <line
                x1="1"
                y1="7"
                x2="25"
                y2="7"
                strokeWidth="1.75"
                strokeDasharray="6 4"
                style={{ stroke: "var(--muted)" }}
              />
            </svg>
            Control / file access
          </span>
        </figcaption>
      ) : null}

      <ul className="sr-only">
        {data.edges.map((e) => (
          <li key={`${e.from}-${e.to}`}>
            {byId.get(e.from)?.label} to {byId.get(e.to)?.label}
            {e.label ? `: ${e.label}` : ""}
          </li>
        ))}
      </ul>
    </figure>
  );
}
