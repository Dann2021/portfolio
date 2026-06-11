import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../composants/Header";
import Tabs from "../composants/Tabs";

export default function Home() {
  return (
    <div>
      <Layout />
      <LayoutOutlet />
    </div>
  );
}

function Layout() {
  return (
    <div className="p-2 mb-5" style={{ border: "1px solid var(--border-subtle)" }}>
      <Header
        profile="Développeur web"
        nom="Dann Sloann"
        description="Salut je suis Dann Sloann — Développeur web & Backend | Je suis un jeune passionné par l'informatique et les nouvelles technologies."
      />
      <div className="over-auto">
        <Tabs />
      </div>
    </div>
  );
}

const LayoutOutlet = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}          // ← change à chaque route 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};