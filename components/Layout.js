import Nav from "@components/Nav";
import Sidebar from "@components/Sidebar";
import "../node_modules/contentfull-belly-styles/styles.css";

export default function Layout({ children }) {
  return (
    <main className="home-grid">
      <Sidebar />

      <main>{children}</main>

      <style jsx global>{`
        :root {
          --sansSerif: "Quicksand", "Segoe UI", Candara, "DejaVu Sans",
            "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref",
            sans-serif;
        }
        *,
        html,
        body {
          box-sizing: border-box;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: "Quicksand";
        }
        #app {
          font-family: var(--sansSerif);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .built-with-text {
          font-size: 0.8rem;
        }
        .home-grid {
          display: grid;
          grid-template-columns: 200px 1fr;
        }
        .sidebar {
          height: 100vh;
          border-right: 1px solid #222;
          left: 0;
        }
      `}</style>
    </main>
  );
}
