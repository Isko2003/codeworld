import logo from "../../assets/images/logo.png";
import style from "./footer.module.css";
import linkedin from "../../assets/icons/linkedin.png";
import instagram from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png";

const SPECIALTIES = [
  "Qrafik Dizayn",
  "UX/UI Dizayn",
  "Frontend",
  "Backend",
  "Data Analitika",
  "QA",
];

const SOCIAL_MEDIA = [
  { name: "LinkedIn", icon: linkedin, href: "#" },
  { name: "Instagram", icon: instagram, href: "#" },
  { name: "Facebook", icon: facebook, href: "#" },
];

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="w-4/5 mx-auto py-8">
        <div className={style.footerLogo}>
          <img src={logo} alt="Logo" className="brightness-0 invert" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 mt-6">
          {/* Specialties Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">İxtisaslar</h2>
            <ul className="flex flex-wrap gap-3 md:gap-4 text-sm md:text-base max-w-[230px]">
              {SPECIALTIES.map((specialty) => (
                <li key={specialty} className={style.specialityItem}>
                  {specialty}
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact Section */}
          <div className="right-footer md:justify-self-end">
            <div className={`${style.socialLogos} flex gap-4 mb-4`}>
              {SOCIAL_MEDIA.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className={style.socialIcon}
                  />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Digər</h2>
              <ul className="space-y-1">
                <li className={style.specialityItem}>Məxfilik</li>
                <li className={style.specialityItem}>Bizimlə Əlaqə</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
