import Image from "next/image";

const Header = () => {
  const logoSize = 30;
  return (
    <>
      <div id="headerContainer" className="row justify-center">
        <div className="row w-fit">
          <Image
            src="/logo.svg"
            alt="GT Design Club"
            height={logoSize}
            width={logoSize}
          />
          <span className="pl-2 text-lg">design club</span>
        </div>
      </div>
    </>
  );
};

export default Header;
