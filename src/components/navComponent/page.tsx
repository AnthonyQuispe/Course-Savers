import Image from "next/image";
import searchIcon from "../../../public/SearchIcon.svg";
import profileIcon from "../../../public/UserIcon.svg";
import settingsIcon from "../../../public/MenuIcon.svg";

export default function NavComponent() {
  return (
    <nav className="flex justify-evenly w-full bg-GrayPurp fixed bottom-0">
      <Image
        className=" w-15vw h-6vh"
        src={profileIcon}
        alt="Profile Icon"
        width={48}
        height={48}
      />
      <Image
        className="w-15vw h-6vh"
        src={searchIcon}
        alt="Search Icon"
        width={48}
        height={48}
      />
      <Image
        className="w-15vw h-6vh"
        src={settingsIcon}
        alt="Settings Icon"
        width={48}
        height={48}
      />
    </nav>
  );
}
