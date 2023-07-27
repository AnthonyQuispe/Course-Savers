'use client'

import Image from "next/image";
import downArrowIcon from "../../../public/icons/down-arrow-icon.png";
import upArrowIcon from "../../../public/icons/up-arrow-icon.png";
import infoIcon from "../../../public/icons/info-icon.png";
import { useState } from "react";

const CourseItem = ({ opacity }: {opacity: string}) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div>
            <div className={`flex flex-col items-stretch px-6 bg-GrayPurp ${opacity}`}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <h2 className="text-xl font-semibold">NURS 101</h2>
                        <Image onClick={() => setShowDetails(!showDetails)} src={!showDetails ? downArrowIcon : upArrowIcon} alt="toggle details arrow" />
                    </div>
                    <div className="flex items-center">
                        <Image className="w-5 h-5" src={infoIcon} alt="more info button" />
                        <h2 className="pl-8 underline font-extrabold text-DarkPurp">Add</h2>
                    </div>
                </div>
            </div>
            {showDetails && <div className="flex bg-white p-6 text-[20px]">
            <div className="pr-6 font-medium">
                <p>Dates:</p>
                <p>Status:</p>
                <p>When:</p>
                <p>Instructor:</p>
                <p>Credits:</p>
                <p>Cost:</p>
            </div>
            <div className=" font-light">
                <p>Jan 1st - Jun 12th</p>
                <p>Open</p>
                <p>M, W @ 11a -12p</p>
                <p>Dr. Thornberry</p>
                <p>3</p>
                <p>$400</p>
            </div>
        </div>}
    </div>
    )
};


export default function ResultsClassElement() {
    return (
        <div>
            <CourseItem opacity=""/>
            <CourseItem opacity="opacity-40" />
            <CourseItem opacity="opacity-40" />
        </div>
    )
}





// import Image from "next/image";
// import downArrowIcon from "../../../../public/icons/down-arrow-icon.png";
// import upArrowIcon from "../../../../public/icons/up-arrow-icon.png";
// import infoIcon from "../../../../public/icons/info-icon.png";
// import { useState } from "react";
// import courses, { Course } from "../../../data/courses";

// interface CourseItemProps {
//   course: Course;
//   selected: boolean;
//   onSelect: () => void;
// }

// const CourseItem: React.FC<CourseItemProps> = ({ course, selected, onSelect }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const opacity = selected ? "" : "opacity-40";

//   return (
//     <div onClick={onSelect}>
//       <div className={`flex flex-col items-stretch px-6 bg-GrayPurp ${opacity}`}>
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <h2 className="text-xl font-semibold">{course.name}</h2>
//             <Image onClick={() => setShowDetails(!showDetails)} src={downArrowIcon} alt="toggle details arrow" />
//           </div>
//           <div className="flex items-center">
//             <Image className="w-5 h-5" src={infoIcon} alt="more info button" />
//             <h2 className="pl-8 underline font-extrabold text-DarkPurp">Add</h2>
//           </div>
//         </div>
//       </div>
//       {showDetails && (
//         <div className="flex bg-white p-6 text-[20px]">
//           <div className="pr-6 font-medium">
//             <p>Dates:</p>
//             <p>Status:</p>
//             <p>When:</p>
//             <p>Instructor:</p>
//             <p>Credits:</p>
//             <p>Cost:</p>
//           </div>
//           <div className="font-light">
//             <p>Jan 1st - Jun 12th</p>
//             <p>Open</p>
//             <p>M, W @ 11a -12p</p>
//             <p>Dr. Thornberry</p>
//             <p>3</p>
//             <p>$400</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default function ResultsClassElement() {
//   const [selectedCourse, setSelectedCourse] = useState(0);

//     return console.log(courses);
    

//   return (
//     <div>
//       {courses.map((course) => (
//         <CourseItem
//           key={course.id}
//           course={course}
//           selected={course.id === selectedCourse}
//           onSelect={() => setSelectedCourse(course.id)}
//         />
//       ))}
//     </div>
//   );
// }