import rightArrow from "../../assets/icons/rightArrow.png";
import pencil from "../../assets/icons/pencil.png";
import design from "../../assets/icons/design.png";
import frontend from "../../assets/icons/frontend.png";
import backend from "../../assets/icons/backend.png";
import data from "../../assets/icons/data.png";
import quality from "../../assets/icons/quality.png";
import style from "./courses.module.css";
import line from "../../assets/icons/line.png";

const COURSES = [
  {
    id: 1,
    title: "Qrafik Dizayn",
    icon: pencil,
    description: "Fərqlənən loqolar, posterlər və brend vizualları yaradın.",
  },
  {
    id: 2,
    title: "UX/UI Dizayn",
    icon: design,
    description:
      "Tədqiqatdan prototipə qədər intuitiv, istifadəçi mərkəzli interfeyslər dizayn edin.",
  },
  {
    id: 3,
    title: "Frontend",
    icon: frontend,
    description:
      "HTML, CSS və JavaScript ilə responsiv veb interfeyslər qurun.",
  },
  {
    id: 4,
    title: "Backend",
    icon: backend,
    description:
      "API-lər hazırlayın, verilənlər bazalarını idarə edin və server-tərəfi məntiqini idarə edin.",
  },
  {
    id: 5,
    title: "Data Analitika",
    icon: data,
    description:
      "Məlumatları toplayın, təmizləyin və qərarvermə üçün vizuallaşdırın.",
  },
  {
    id: 6,
    title: "QA",
    icon: quality,
    description:
      "Məhsul keyfiyyətini əl ilə və avtomatlaşdırılmış testlərlə təmin edin.",
  },
];

const Courses = () => {
  return (
    <section className="w-4/5 mx-auto mb-24">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-3xl font-semibold">Kurslarımız</h2>
        <img src={rightArrow} alt="rightArrow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COURSES.map((course) => (
          <div
            key={course.id}
            className={`${style.courseCard} h-[135px] rounded-2xl cursor-pointer transition-transform hover:scale-105`}
          >
            <div
              className={`${style.topCard} flex justify-between items-center h-[88px] px-5`}
            >
              <h3 className="font-medium">{course.title}</h3>
              <img src={course.icon} alt={course.title} />
            </div>

            <div className={style.bottomArea}>
              <div className={style.lineWrap}>
                <img src={line} alt="line" />
              </div>
              <div className={style.descWrap}>
                <p className="text-center text-sm px-3">{course.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
