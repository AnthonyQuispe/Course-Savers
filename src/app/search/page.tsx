import "./search.scss";
import Image from "next/image";
import academicMap from "../../../public/Academic_Map.svg";

export default function Home() {
  return (
    <main className="search">
      <div className="search-container">
        <div className="search-container__top">
          <h1 className="search__heading">Quick Search</h1>
          <Image
            className="search__map"
            src={academicMap}
            alt="academic map"
            width={30}
            height={30}
          />
        </div>
        <div className="search-container__middle">
          <label className="search__label">Term</label>
          <select className="search__dropdown">
            <option value="classes">Math</option>
          </select>
          <label className="search__label">Course Number</label>
          <select className="search__dropdown">
            <option value="classes">12312312</option>
          </select>
        </div>
        <div className="search-contianer__bottom">
          {/* <Image></Image> */}
          <button className="search__button">Search</button>
        </div>
      </div>
    </main>
  );
}
