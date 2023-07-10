import "./search.scss";
import Image from "next/image";
import academicMap from "../../../public/Academic_Map.svg";
import searchIcon from "../../../public/SearchIcon.svg";
import bookmarkIcon from "../../../public/Bookmark Component.svg";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";

export default function Home() {
  return (
    <main className="search">
      <div className="search__bookmark">
        <Image src={bookmarkIcon} alt="bookmark icon" width={40} height={40} />
        <p>Saves</p>
      </div>

      <div className="search-container">
        <div className="search-container__top">
          <h1 className="search__heading">QUICK SEARCH</h1>
          <Image
            className="search__map"
            src={academicMap}
            alt="academic map"
            width={30}
            height={30}
          />
        </div>
        <div className="search-container__dropdown">
          <label className="search__label">Term</label>
          <select className="search__dropdown">
            <option value="">Select</option>
            <option value="Fall">Fall</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
          </select>
        </div>
        <div className="search-container__dropdown">
          <label className="search__label">Course Number</label>
          <input className="search__dropdown" type="text" placeholder="" />
        </div>

        <div className="search-contianer__bottom">
          <div className="search-container__advanced">
            <p className="search-container__text">Advanced</p>
            <Image
              className="search-container__icon"
              src={searchIcon}
              alt="Search Icon"
              width={48}
              height={48}
            />
          </div>

          <button className="search__button">Search</button>
        </div>
      </div>
      <BottomNavBar />
    </main>
  );
}
