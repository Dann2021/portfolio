/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


const Tabs = ({ tabs, id }) => {


  const [activeTab, setActiveTab] = useState(0);

  const ActiveComponent = tabs[activeTab].component;

  return (
    <div>
      {/* 🔹 Barre de tabs */}
      <div
        className="aff-flex mb-4 overx-auto"
        style={{
          position: "relative",
          gap: "1.5rem",
          padding: "1rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            style={{
              position: "relative",
              cursor: "pointer",
              color:
                activeTab === index
                  ? "var(--primary)"
                  : "var(--text-main)",
              fontWeight: activeTab === index ? 600 : 400,
              padding: "0.5rem 0",
            }}
          >

            <p className="taille-pt inter">{tab.label}</p>

            {activeTab === index && (
              <motion.div
                layoutId={`underline-${id}`}  // ✅ unique par instance
                style={{
                  position: "absolute",
                  height: 3,
                  background: "var(--primary)",
                  width: "100%",
                  bottom: 0,
                  left: 0,
                  borderRadius: 3,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* 🔹 Contenu animé */}
      <div style={{ padding: "1rem" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;