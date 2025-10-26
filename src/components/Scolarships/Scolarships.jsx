import rightArrow from "../../assets/icons/rightArrow.png";
import secondline from "../../assets/icons/secondline.png";
import designsecond from "../../assets/icons/designsecond.png";
import style from "./scolarships.module.css";

const SCHOLARSHIPS_DATA = [
  {
    id: 1,
    title: "Akademik Təqaüd",
    description:
      "Yüksək nəticə göstərən və tədrisdə fəallığı ilə seçilən tələbələrə təqdim olunur.",
  },
  {
    id: 2,
    title: "Sosial Dəstək Təqaüdü",
    description:
      "Maddi imkanı məhdud olan, lakin öyrənmək həvəsi güclü olan tələbələr üçün nəzərdə tutulub.",
  },
  {
    id: 3,
    title: "Erkən Qeydiyyat Endirimi",
    description:
      "Semestr başlamazdan əvvəl qeydiyyatdan keçən tələbələr üçün xüsusi endirimlər tətbiq olunur.",
  },
  {
    id: 4,
    title: "Qızlar üçün IT Dəstəyi Proqramı",
    description:
      "Texnologiya və dizayn sahəsində təhsil alan xanım tələbələr üçün qismən təqaüd imkanı yaradır.",
  },
];

const Scolarships = () => {
  return (
    <section className="w-4/5 mx-auto mb-24">
      <div className="flex items-center gap-2 mb-8">
        <h2 className="text-3xl font-semibold">Təqaüdlər</h2>
        <img src={rightArrow} alt="rightArrow" />
      </div>

      <div>
        <div className="flex justify-center mb-6">
          <img src={secondline} alt="line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SCHOLARSHIPS_DATA.map((scholarship) => (
            <div
              key={scholarship.id}
              className={`${style.scolarshipCard} p-5 rounded-md h-[400px] transition-transform hover:scale-105 cursor-pointer`}
            >
              <div className="flex gap-6 items-start">
                <img src={designsecond} alt="design" width={90} height={90} />
                <img src={rightArrow} alt="rightArrow" />
              </div>

              <div className="mt-14">
                <h3 className="mb-3 font-semibold text-xl">
                  {scholarship.title}
                </h3>
                <p className="text-gray-700">{scholarship.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 mb-6">
          <img src={secondline} alt="line" />
        </div>

        <div className="flex justify-end">
          <button
            className={`${style.applyButton} transition-opacity hover:opacity-90`}
          >
            İndi müraciət et
          </button>
        </div>
      </div>
    </section>
  );
};

export default Scolarships;
