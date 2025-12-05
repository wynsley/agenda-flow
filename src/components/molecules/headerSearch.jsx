import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./headerSearch.module.css";

function HeaderSearch() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const text = query.trim().toLowerCase();
    if (!text) return;

    // 🔍 RUTAS AUTOMÁTICAS SEGÚN PALABRAS CLAVE
    if (
      text.includes("evento") ||
      text.includes("eventos") ||
      text.includes("calendario")
    ) {
      return navigate("/calendario");
    }

    if (text.includes("tarea") || text.includes("tareas")) {
      return navigate("/tareas");
    }

    if (
      text.includes("configuracion") ||
      text.includes("configuración") ||
      text.includes("ajustes") ||
      text.includes("settings")
    ) {
      return navigate("/settings");
    }

    // 🔎 Si no coincide con nada → búsqueda normal
    navigate(`/buscar?query=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSearch} className={styles.search}>
      <div className={styles.inputWrapper}>
        <Search className={styles.icon} onClick={handleSearch} />

        <input
          type="text"
          placeholder="Buscar..."
          className={styles.input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  );
}

export { HeaderSearch };
