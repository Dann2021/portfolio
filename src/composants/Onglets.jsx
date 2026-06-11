
import { motion } from "framer-motion";
import { useState } from "react";
import Lien from "./ui/Lien";

const Onglets = () => {
  const tabs = [
    { label: "about", chemin: "about" },
    { label: "competences", chemin: "competences" },
    { label: "projets", chemin: "projets" },
    { label: "contact", chemin: "contacts" },
   
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className={"aff-flex overx-auto"}
      style={{
        position: "relative",
        gap: "1.5rem",
        padding: "0.5rem",
      
      }}
    >
      {tabs.map((tab, index) => (
        <div
          key={index}
          style={{
            position: "relative",
            
          }}

          onClick={() => setActiveTab(index)}
        >
          <Lien
            chemin={tab.chemin}
            className="taille-pt tt-cap"
            style={{
              color:
                activeTab === index ? "var(--primary)" : "var(--text-main)",
              fontWeight: activeTab === index ? 600 : 400,
              padding: "0.5rem 0",
              display: "inline-block",
            }}
          >
            {tab.label}
          </Lien>

          {activeTab === index && (
            <motion.div
              layoutId="underline"
              style={{
                position: "absolute",
                height: 3,
                background: "var(--primary)",
                width: "100%",
                bottom: 0,
                left: 0,
                borderRadius: 3,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Onglets;