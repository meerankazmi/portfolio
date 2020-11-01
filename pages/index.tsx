import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function IndexPage() {
  return (
    <div className="App px-20 mx-auto">
      <Hero />
      <Projects />
      <footer
        style={{ height: "5vh" }}
        className="text-center text-lg font-semibold"
      >
        Made with ❤️ with <span className="text-primary-light">NextJS</span>
      </footer>
    </div>
  );
}
