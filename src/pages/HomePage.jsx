import Hero from "../components/Hero/Hero";
import Courses from "../components/Courses/Courses";
import Teachers from "../components/Teachers/Teachers";
import Scolarships from "../components/Scolarships/Scolarships";
import Feedbacks from "../components/Feedbacks/Feedbacks";

function HomePage() {
  return (
    <>
      <Hero />
      <Courses />
      <Teachers />
      <Scolarships />
      <Feedbacks />
    </>
  );
}

export default HomePage;
