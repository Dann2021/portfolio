import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../composants/Header";
import Tabs from "../composants/Tabs";

export default function Home() {
  return (
    <>
      <Layout />
      <LayoutOutlet />
    </>
  );
}

function Layout() {
  return (
    <div
      className="p-2 mb-5"
      style={{ border: "1px solid var(--border-subtle)" }}
    >
      <Header
        profile="Économiste & développeur"
        nom="Dann Sloann"
        description="Salut, je suis Dann Sloann. Économiste de formation et développeur autodidacte, je construis des outils web avec React et Python, entre économie, banque et technologie."
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
        key={location.pathname} // ← change à chaque route
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
