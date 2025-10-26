import rightArrow from "../../assets/icons/rightArrow.png";
import student from "../../assets/images/student.png";
import style from "./feedbacks.module.css";

const FEEDBACKS_DATA = [
  {
    id: 1,
    name: "Vesper",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipisicing elit quisque faucibus.",
  },
  {
    id: 2,
    name: "Vesper",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit quisque faucibus. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
  },
  {
    id: 3,
    name: "Vesper",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ipsum dolor sit amet Lorem ipsum consectetur adipiscing elit quisque faucibus.",
  },
  {
    id: 4,
    name: "Vesper",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipisicing elit quisque faucibus.",
  },
];

const Feedbacks = () => {
  return (
    <section className={`${style.feedbackSection} w-4/5 mx-auto mb-24`}>
      <div className="flex items-center gap-2 mb-8">
        <h2 className="text-3xl font-semibold">Tələbələrimizin Rəyləri</h2>
        <img src={rightArrow} alt="rightArrow" />
      </div>

      <div className="grid grid-cols-[290px_1fr] gap-8 p-8 bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] rounded-2xl max-lg:grid-cols-1 max-lg:gap-6 max-md:p-6 max-sm:p-4">
        <div
          className={`${style.studentImage} rounded-xl overflow-hidden max-lg:max-w-[290px] max-lg:mx-auto max-sm:max-w-full`}
        >
          <img
            src={student}
            alt="Tələbə şəkli"
            className="w-full h-auto block object-cover"
          />
        </div>

        <div
          className={`${style.feedbackItems} grid grid-cols-2 gap-6 max-lg:grid-cols-1`}
        >
          {FEEDBACKS_DATA.map((feedback) => (
            <div
              key={feedback.id}
              className={`${style.feedbackItem} p-6 rounded-xl transition-all duration-300 border-l-4 border-transparent hover:-translate-y-1 max-md:p-5 max-sm:p-4 cursor-pointer`}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3 max-md:text-lg">
                {feedback.name}
              </h3>
              <p className="text-base leading-relaxed text-gray-600 max-md:text-sm">
                {feedback.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
