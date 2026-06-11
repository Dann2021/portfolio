// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useThemeContexte } from "../contexte/ThemeContext";
import Bouton from "./ui/Bouton";

export default function BoutonTheme({ title }) {
  // import du context pour mettre à jour la valeur du theme
  const { theme, setTheme } = useThemeContexte();

  // Synchronisation DOM + stockage

  // Toggle thème
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <Bouton
      title={title}
      onClick={toggleTheme}
      taille={"min"}
      theme={theme === "dark" ? "sombre" : "claire"}
      className={"bouton-icone ronde-1 toolbar-btn"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Sun size={14} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: -90, scale: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Moon size={14} />
          </motion.div>
        )}
      </AnimatePresence>
    </Bouton>
  );
};


