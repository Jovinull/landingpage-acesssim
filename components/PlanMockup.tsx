"use client";
import { motion, useReducedMotion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";

type Finding = {
  n: number;
  title: string;
  detail: string;
  status: "warn" | "ok";
};

const findings: Finding[] = [
  { n: 1, title: "Área de giro insuficiente", detail: "Banheiro · Ø 1,50 m não atendido", status: "warn" },
  { n: 2, title: "Bacia sanitária", detail: "Barras de apoio não identificadas", status: "warn" },
  { n: 3, title: "Porta do banheiro", detail: "Vão livre abaixo do recomendado", status: "warn" },
  { n: 4, title: "Área de giro", detail: "Quarto · Ø 1,50 m livre", status: "ok" },
  { n: 5, title: "Porta de entrada", detail: "Vão livre adequado", status: "ok" },
];

const WARN = "#ff7a3a";
const OK = "#34d399";

export default function PlanMockup() {
  const reduce = useReducedMotion();
  const appear = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { delay: 1.1 + i * 0.25, duration: 0.4 },
        };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-px rounded-[20px] bg-gradient-to-b from-white/15 to-white/0" />
      <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-ink-900/90 shadow-[0_40px_120px_-20px_rgba(8,176,255,0.25)] backdrop-blur">
        {/* barra da janela */}
        <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="flex-1 truncate text-center font-mono text-[11px] text-zinc-500">
            accesssim / projetos / quarto-master.png
          </div>
          <span className="hidden items-center gap-1 rounded-full bg-brand-500/10 px-2 py-0.5 text-[11px] text-brand-300 sm:inline-flex">
            <Sparkles className="h-3 w-3" /> IA
          </span>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px]">
          {/* planta */}
          <div className="relative border-b border-white/[0.06] p-4 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="bg-blueprint absolute inset-0 opacity-60" />
            <div className="relative">
              <svg viewBox="0 0 560 380" className="h-auto w-full" role="img" aria-label="Planta de um quarto com banheiro analisada pela AccessSim">
                <g className="fill-white/[0.02] stroke-white/30" strokeWidth="1.5">
                  {/* cama e criados */}
                  <rect x="110" y="26" width="130" height="160" rx="4" />
                  <rect x="120" y="36" width="52" height="22" rx="3" />
                  <rect x="178" y="36" width="52" height="22" rx="3" />
                  <line x1="110" y1="92" x2="240" y2="92" />
                  <rect x="70" y="28" width="34" height="34" rx="2" />
                  <rect x="246" y="28" width="34" height="34" rx="2" />
                  {/* mesa */}
                  <circle cx="92" cy="286" r="26" />
                  <circle cx="126" cy="318" r="11" />
                  {/* armário */}
                  <rect x="150" y="328" width="150" height="26" rx="2" />
                  <line x1="225" y1="328" x2="225" y2="354" />
                  {/* banheiro: box, pia, bacia */}
                  <rect x="370" y="28" width="162" height="62" rx="3" />
                  <circle cx="500" cy="59" r="4" />
                  <rect x="372" y="112" width="40" height="50" rx="6" />
                  <ellipse cx="392" cy="137" rx="12" ry="16" />
                  <rect x="512" y="114" width="22" height="38" rx="3" />
                  <ellipse cx="496" cy="133" rx="17" ry="13" />
                </g>

                {/* paredes */}
                <g className="stroke-white/80" strokeWidth="6" strokeLinecap="square" fill="none">
                  <path d="M20 20 H540 V360 H480 M420 360 H20 V240 M20 120 V20" />
                  <path d="M360 20 V200 H380 M422 200 H540" />
                </g>
                {/* janela */}
                <g className="stroke-white/50" strokeWidth="1.5">
                  <line x1="16" y1="120" x2="16" y2="240" />
                  <line x1="24" y1="120" x2="24" y2="240" />
                </g>
                {/* portas */}
                <g className="stroke-white/45" strokeWidth="1.5" fill="none">
                  <path d="M380 200 V242" />
                  <path d="M380 242 A42 42 0 0 0 422 200" strokeDasharray="3 4" />
                  <path d="M480 360 V300" />
                  <path d="M480 300 A60 60 0 0 0 420 360" strokeDasharray="3 4" />
                </g>

                {/* anotações da IA */}
                <motion.g {...appear(0)} style={{ transformOrigin: "450px 150px" }}>
                  <circle cx="450" cy="150" r="41" fill={`${WARN}14`} stroke={WARN} strokeWidth="1.5" strokeDasharray="5 4" />
                </motion.g>
                <motion.g {...appear(1)} style={{ transformOrigin: "507px 133px" }}>
                  <rect x="474" y="104" width="66" height="58" rx="6" fill="none" stroke={WARN} strokeWidth="1.5" />
                </motion.g>
                <motion.g {...appear(2)} style={{ transformOrigin: "401px 222px" }}>
                  <rect x="374" y="190" width="54" height="60" rx="6" fill="none" stroke={WARN} strokeWidth="1.5" />
                </motion.g>
                <motion.g {...appear(3)} style={{ transformOrigin: "300px 250px" }}>
                  <circle cx="300" cy="250" r="41" fill={`${OK}10`} stroke={OK} strokeWidth="1.5" strokeDasharray="5 4" />
                </motion.g>
                <motion.g {...appear(4)} style={{ transformOrigin: "450px 330px" }}>
                  <rect x="414" y="294" width="72" height="72" rx="6" fill="none" stroke={OK} strokeWidth="1.5" />
                </motion.g>

                {/* marcadores numerados */}
                {[
                  { n: 1, x: 420, y: 118, c: WARN },
                  { n: 2, x: 540, y: 104, c: WARN },
                  { n: 3, x: 374, y: 250, c: WARN },
                  { n: 4, x: 330, y: 220, c: OK },
                  { n: 5, x: 414, y: 294, c: OK },
                ].map((m, i) => (
                  <motion.g key={m.n} {...appear(i)} style={{ transformOrigin: `${m.x}px ${m.y}px` }}>
                    <circle cx={m.x} cy={m.y} r="10" fill={m.c} />
                    <text x={m.x} y={m.y + 3.5} textAnchor="middle" fontSize="11" fontWeight="600" fill="#05070a" fontFamily="var(--font-geist-mono)">
                      {m.n}
                    </text>
                  </motion.g>
                ))}

                <text x="290" y="376" textAnchor="middle" fontSize="9" className="fill-white/30" fontFamily="var(--font-geist-mono)">
                  QUARTO + BANHEIRO · ESC 1:50
                </text>
              </svg>

              {/* linha de varredura */}
              {!reduce && (
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div
                    className="h-full w-full"
                    style={{ animation: "scan 3.2s cubic-bezier(.4,0,.2,1) 0.4s infinite" }}
                  >
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-400 to-transparent shadow-[0_0_20px_4px_rgba(8,176,255,0.45)]" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* painel de resultados */}
          <div className="p-4 text-left sm:p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white">Resultado da análise</span>
              <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[11px] text-emerald-300">Concluída</span>
            </div>
            <p className="mt-1 text-xs text-zinc-500">3 pontos de atenção · 2 itens adequados</p>

            <ul className="mt-5 space-y-2">
              {findings.map((f, i) => (
                <motion.li
                  key={f.n}
                  initial={reduce ? false : { opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + i * 0.25, duration: 0.4 }}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-semibold text-ink-950 ${
                      f.status === "warn" ? "bg-accent-400" : "bg-emerald-400"
                    }`}
                  >
                    {f.n}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 text-[13px] font-medium text-zinc-100">
                      {f.title}
                    </div>
                    <div className="text-xs text-zinc-500">{f.detail}</div>
                  </div>
                  {f.status === "warn" ? (
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                  ) : (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  )}
                </motion.li>
              ))}
            </ul>

            <p className="mt-5 border-t border-white/[0.06] pt-4 text-[11px] leading-relaxed text-zinc-500">
              Possíveis não conformidades para revisão do profissional responsável.
            </p>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-zinc-600">Interface ilustrativa.</p>
    </div>
  );
}
