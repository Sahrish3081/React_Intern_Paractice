import Footer from "./Footer";
import Header from "./Header";

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <h2>Why I'm Excited to Learn React</h2>

        <ol>
          <li>Build reusable components.</li>
          <li>Create fast and interactive user interfaces.</li>
          <li>Improve my frontend development skills.</li>
          <li>Prepare for React developer interviews.</li>
          <li>Build real-world projects.</li>
        </ol>
      </main>
      <Footer/>
    </>
  );
}
