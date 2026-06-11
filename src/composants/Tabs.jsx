import { motion } from "framer-motion";
import { useState } from "react";
import Lien from "./ui/Lien";

const TABS = [
  { label: "about",       chemin: "about"      },
  { label: "compétences", chemin: "competences" },
  { label: "projets",     chemin: "projets"     },
  { label: "contact",     chemin: "contacts"    },
 
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
    className={"aff-flex ai-mil overx-auto"}
      style={{
        gap          : "0.2rem",
        padding      : "0.3rem",
       // background   : "var(--bg-elevated)",
       // borderRadius : "var(--radius-md)",
        //border       : "1px solid var(--border-subtle)",
        width        : "fit-content",
      }}
    >
      {TABS.map((tab, index) => {
        const isActive = activeTab === index;

        return (
          <div
            key={tab.chemin}
            onClick={() => setActiveTab(index)}
            style={{ position: "relative", cursor: "pointer" }}
          >

            {/* ── Background pill animé ─────────────────────── */}
            {isActive && (
              <motion.div
                layoutId="tab-bg"
                className="absolue inset-0"
                style={{
                  background  : "var(--bg-surface)",
                  borderRadius: "calc(var(--radius-md) - 2px)",
                  border      : "1px solid var(--border-dim)",
                  boxShadow   : "var(--shadow-sm), inset 0 1px 0 rgba(79,172,254,0.08)",
                }}
                transition={{
                  type     : "spring",
                  stiffness: 500,
                  damping  : 35,
                }}
              />
            )}

            {/* ── Lien ─────────────────────────────────────── */}
            <Lien
              chemin={tab.chemin}
              className="relative aff-inline-block tt-cap ls-3"
              style={{
                zIndex       : 1, 
                padding      : "0.4rem 1rem",
                color        : isActive ? "var(--text-primary)" : "var(--text-muted)",
                fontWeight   : isActive ? 600 : 400,
                fontSize     : "var(--fs-sm)",
                fontFamily   : "var(--font-display)",
                whiteSpace   : "nowrap",
                transition   : "color 200ms ease",
                userSelect   : "none",
              }}
            >
              {tab.label}
            </Lien>

          </div>
        );
      })}
    </div>
  );
};

export default Tabs;