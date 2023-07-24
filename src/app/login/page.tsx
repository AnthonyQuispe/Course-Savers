import NavComponent from "../../components/navComponent/page";

export default function Home() {
  return (
    <main className="search bg-BG_Color w-screen h-screen flex items-center justify-center">
      <div className="max-w-[18.75rem] rounded-3xl flex flex-col justify-evenly items-center absolute top-160 rounded-25 w-11/12 h-3/6 shadow-md bg-BG_Color ">
        <div className=" w-full flex justify-evenly items-end px-4">
          <h1 className=" text-DarkPurp text-screen-titles font-bold text-2xl">
            LOG IN
          </h1>
        </div>
        <div className="flex flex-col w-4/5">
          <label className="search__label text-BlackText">School Email</label>
          <input
            className=" w-73vw h-14 text-DarkGrayTxt bg-InputGray text-20px font-Poppins font-normal rounded-20px p-0.25rem border-none rounded-2xl	"
            type="text"
            placeholder=""
          />
        </div>
        <div className="flex flex-col w-4/5">
          <label className="search__label text-BlackText">Password</label>
          <input
            className=" w-73vw h-14 text-DarkGrayTxt bg-InputGray text-20px font-Poppins font-normal rounded-20px p-0.25rem border-none rounded-2xl	"
            type="text"
            placeholder=""
          />
        </div>
        <div className="w-4/5 flex items-center justify-evenly">
          <p className="text-PrimaryPurp underline font-bold text[1.375rem]">
            Sign Up
          </p>
          <button className="rounded-full  search__button bg-PrimaryPurp shadow-md rounded-36px flex items-center justify-center gap-10 text-White font-Poppins font-bold h-14 w-34vw p-3.25rem border-none text[1.375rem]	px-[1.5rem]	">
            Log In
          </button>
        </div>
      </div>
      <div>
        <p className="text-PrimaryPurp underline font-bold text[1.375rem]">
          Sign Up
        </p>
      </div>
      {/* <p className="absolute z-1 bottom-4 text-DarkGrayTxt">
          Forgot Password?
        </p> */}

      <NavComponent />
    </main>
  );
}
