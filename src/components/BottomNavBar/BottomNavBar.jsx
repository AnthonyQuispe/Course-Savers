import "./BottomNavBar.scss";
import Image from "next/image";
import searchIcon from "../../assets/SearchIcon.svg";
import profileIcon from "../../assets/UserIcon.svg";
import settingsIcon from "../../assets/MenuIcon.svg";

export default function BottomNavBar() {
  return (
    <nav className="nav-bottom">
      <Image
        className="nav-bottom__icons"
        src={profileIcon}
        alt="Profile Icon"
        width={48}
        height={48}
      />
      <Image
        className="nav-bottom__icons"
        src={searchIcon}
        alt="Search Icon"
        width={48}
        height={48}
      />
      <Image
        className="nav-bottom__icons"
        src={settingsIcon}
        alt="Settings Icon"
        width={48}
        height={48}
      />
    </nav>
  );
}
