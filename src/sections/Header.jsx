import images from "../images";
import Btn from "../components/Btn";

const Header = () => {
  return (
    <header
      className={`sm:bg-[url("images/bg-header-desktop.png")] max-sm:bg-[url("${images["header-desktop"]}")] bg-cover bg-no-repeat`}
    >
      <div className="section-container grid justify-items-center gap-10 py-24 sm:gap-12 sm:py-32">
        <img className="w-[100px] sm:w-[125px]" src={images.logo} alt="logo" />
        <div className="text-center">
          <h1 className="text-900 mb-4 font-semibold">
            A history of everything you copy
          </h1>
          <p className="text-600 max-w-[55ch]">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-5 sm:flex-row">
          <Btn text={"Download for iOS"} style={"btn--download_ios"} />
          <Btn text={"Download for Mac"} style={"btn--download_mac"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
