import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import OnasPage from "./pages/OnasPage";
import HarmonogramPage from "./pages/HarmonogramPage";
import PravidlaPage from "./pages/PravidlaPage";
import PropozicePage from "./pages/PropozicePage";
import HaficrossPage from "./pages/HaficrossPage";
import PrihlaskaHafiadaPage from "./pages/PrihlaskaHafiadaPage";
import PrihlaskaHaficrossPage from "./pages/PrihlaskaHaficrossPage";
import FotosoutezPage from "./pages/FotosoutezPage";
import FotogaleriePage from "./pages/FotogaleriePage";
import SponzoriPage from "./pages/SponzoriPage";
import KontaktPage from "./pages/KontaktPage";
import StartovkaPage from "./pages/StartovkaPage";
import VysledkyPage from "./pages/VysledkyPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="o-nas" element={<OnasPage />} />
        <Route path="harmonogram" element={<HarmonogramPage />} />
        <Route path="pravidla" element={<PravidlaPage />} />
        <Route path="propozice" element={<PropozicePage />} />
        <Route path="haficross" element={<HaficrossPage />} />
        <Route path="prihlaska-hafiada" element={<PrihlaskaHafiadaPage />} />
        <Route path="prihlaska-haficross" element={<PrihlaskaHaficrossPage />} />
        <Route path="fotosoutez" element={<FotosoutezPage />} />
        <Route path="fotogalerie" element={<FotogaleriePage />} />
        <Route path="sponzori" element={<SponzoriPage />} />
        <Route path="kontakt" element={<KontaktPage />} />
        <Route path="startovka" element={<StartovkaPage />} />
        <Route path="vysledky" element={<VysledkyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
