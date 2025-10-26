import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import rightArrow from "../../assets/icons/rightArrow.png";
import teacherfirst from "../../assets/images/teacherfirst.jpg";
import teachersecond from "../../assets/images/teachersecond.png";
import teacherthird from "../../assets/images/teacherthird.jpg";
import teacherfourth from "../../assets/images/teacherfourth.jpg";
import style from "./teachers.module.css";

const TEACHERS_DATA = [
  {
    id: 1,
    image: teacherfirst,
    name: "James Bond",
    specialty: "Qrafik Dizayner",
  },
  {
    id: 2,
    image: teachersecond,
    name: "Katniss Everdeen",
    specialty: "Frontend Müəllimi",
  },
  {
    id: 3,
    image: teacherthird,
    name: "Jack Sparrow",
    specialty: "Backend Müəllimi",
  },
  {
    id: 4,
    image: teacherfourth,
    name: "Jane Foster",
    specialty: "Qrafik Dizayner",
  },
  {
    id: 5,
    image: teacherfirst,
    name: "James Bond",
    specialty: "Qrafik Dizayner",
  },
  {
    id: 6,
    image: teachersecond,
    name: "Katniss Everdeen",
    specialty: "Frontend Müəllimi",
  },
];

const Teachers = () => {
  return (
    <section className="w-4/5 mx-auto mb-24">
      <div className="flex items-center gap-2 mb-8">
        <h2 className="text-3xl font-semibold">Müəllimlərimiz</h2>
        <img src={rightArrow} alt="rightArrow" />
      </div>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={24}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        grabCursor
        style={{ paddingBottom: "32px" }}
      >
        {TEACHERS_DATA.map((teacher) => (
          <SwiperSlide key={teacher.id}>
            <div className="h-min cursor-pointer">
              <div
                className={`${style.teacherImgWrapper} rounded-md overflow-hidden`}
              >
                <img
                  src={teacher.image}
                  alt={`${teacher.name} - ${teacher.specialty}`}
                  className="w-full block object-cover"
                />
              </div>
              <div className={`${style.teacherInfo} mt-4`}>
                <h3 className="text-xl font-semibold text-center">
                  {teacher.name}
                </h3>
                <p className="text-gray-600 text-center">{teacher.specialty}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Teachers;
