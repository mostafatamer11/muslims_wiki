import { FaBell, FaFire, FaSearch, FaUsers } from "react-icons/fa";
import { Post, ActivityBar } from "../../components/";

const Feed = () => {
  let iconsSizeOfAcitivityBar = 36;

  return (
    <div className="grid items-start grid-cols-4 gap-4 pt-40 min-h-screen mx-5 py-5">
      <div className="min-h-[80vh] sticky top-40 right-5 pl-4">
        <ActivityBar
          elements={[
            {
              text: "Explore",
              icon: <FaFire size={iconsSizeOfAcitivityBar} />,
            },
            {
              text: "Search",
              icon: <FaSearch size={iconsSizeOfAcitivityBar} />,
            },
            {
              text: "Activity",
              icon: <FaBell size={iconsSizeOfAcitivityBar} />,
            },
            {
              text: "Following",
              icon: <FaUsers size={iconsSizeOfAcitivityBar} />,
            },
          ]}
        />
      </div>
      <div
        className="bg-brown-100 rounded-12"
        style={{
          gridColumn: "2 / 4",
        }}
      >
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="min-h-[80vh] sticky top-40 left-5 pr-4">
        <h2 className="text-2xl mb-12 text-right">
          تابع هؤلاء
        </h2>
        <ul className="flex flex-col gap-4">
          <li className="flex flex-row-reverse gap-4 p-4 hover:bg-brown-100 px-3 rounded-12 py-5 transition-colors cursor-pointer">
            <div className="author-img w-14">
              {/* <img src="/user-author.png" alt="" /> */}
            </div>
            <div className="author-text">
              <h3 className="text-md font-normal mb-1">اسم المؤلف</h3>
              <span className="text-sm font-thin">مطور ويب</span>
            </div>
          </li>
          <li className="flex flex-row-reverse gap-4 p-4 hover:bg-brown-100 px-3 rounded-12 py-5 transition-colors cursor-pointer">
            <div className="author-img w-14">
              {/* <img src="/user-author.png" alt="" /> */}
            </div>
            <div className="author-text">
              <h3 className="text-md font-normal mb-1">اسم المؤلف</h3>
              <span className="text-sm font-thin">مطور ويب</span>
            </div>
          </li>
          <li className="flex flex-row-reverse gap-4 p-4 hover:bg-brown-100 px-3 rounded-12 py-5 transition-colors cursor-pointer">
            <div className="author-img w-14">
              {/* <img src="/user-author.png" alt="" /> */}
            </div>
            <div className="author-text">
              <h3 className="text-md font-normal mb-1">اسم المؤلف</h3>
              <span className="text-sm font-thin">مطور ويب</span>
            </div>
          </li>
          <li className="flex flex-row-reverse gap-4 p-4 hover:bg-brown-100 px-3 rounded-12 py-5 transition-colors cursor-pointer">
            <div className="author-img w-14">
              {/* <img src="/user-author.png" alt="" /> */}
            </div>
            <div className="author-text">
              <h3 className="text-md font-normal mb-1">اسم المؤلف</h3>
              <span className="text-sm font-thin">مطور ويب</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Feed;
