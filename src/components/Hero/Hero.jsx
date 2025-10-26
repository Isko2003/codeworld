import style from "./hero.module.css";

const SPECIALTIES = [
  "Qrafik Dizayn",
  "UX/UI Design",
  "Frontend Proqramlaşdırma",
  "Backend Proqramlaşdırma",
  "Data Analitika",
];

const Hero = () => {
  return (
    <section
      className={`${style.heroSection} flex justify-center items-center mb-24`}
    >
      <div className="w-4/5 flex flex-col justify-center h-full lg:h-3/5">
        <h1 className="text-white font-bold text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-tight lg:leading-tight lg:w-4/5">
          Bizimlə təhsildə yeniliyə doğru addım at!
        </h1>

        <div className="mt-4">
          <p className="text-white font-semibold text-xl lg:text-4xl leading-relaxed md:leading-loose lg:leading-loose">
            Axtardığın ixtisaslar burda
          </p>
          <p className="text-white font-extralight flex gap-3 flex-wrap leading-relaxed mt-2">
            {SPECIALTIES.map((specialty) => (
              <span key={specialty}>{specialty}</span>
            ))}
          </p>
        </div>

        <button
          className={`${style.heroButton} font-semibold text-xl rounded-md mt-6 text-white w-44 hover:opacity-90 transition-opacity`}
        >
          Bizə qoşul
        </button>
      </div>
    </section>
  );
};

export default Hero;
