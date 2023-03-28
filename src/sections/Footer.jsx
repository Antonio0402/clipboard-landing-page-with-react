import { IconFacebook, IconInsta, IconTwitter } from "../socialIcons";
import NavLink from "../components/NavLink";
import { links } from "../data/data";
import images from "../images";

const Footer = () => {
  return (
    <>
      <footer className="bg-grayish/20 text-grayish-blue">
        <div className="section-container grid items-center justify-items-center gap-8 py-8 sm:grid-cols-[auto_1fr_auto] sm:justify-items-start sm:gap-36 sm:py-10">
          <img
            className="max-w-[44px] sm:max-w-[60px]"
            src={images.logo}
            alt="logo"
          />
          <nav>
            <ul className="grid items-center gap-6 max-sm:text-center sm:grid-cols-3">
              {links.map((link, idx) => {
                return <NavLink key={idx} text={link} />;
              })}
            </ul>
          </nav>
          <div className="flex gap-4">
            <a className="hover:cursor-pointer [&_path]:hover:fill-primary-dark">
              <IconFacebook />
            </a>
            <a className="hover:cursor-pointer [&_path]:hover:fill-primary-dark">
              <IconInsta />
            </a>
            <a className="hover:cursor-pointer [&_path]:hover:fill-primary-dark">
              <IconTwitter />
            </a>
          </div>
        </div>
      </footer>
      <p className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Antonio</a>.
      </p>
    </>
  );
};

export default Footer;
