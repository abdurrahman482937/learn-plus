import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase.config";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleMakeRead = async () => {
    let ref = doc(db, "courses", "free");
    const snap = await getDoc(ref);
    console.log(snap.data());
  };
  useEffect(() => {
    handleMakeRead();
  }, []);
  const courses = [
    {
      id: 1,
      title: "  ",
      description: "Free course description goes here.",
      category: "Free",
      image:
        "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/63bd0d36c9895a001ca7d0a6.webp",
    },
    {
      id: 2,
      title: "Premium Course",
      description: "Premium course description goes here.",
      category: "Premium",
      image:
        "https://sunnahit.com/wp-content/uploads/2023/08/best-freelancing-course-in-bangladesh.webp",
    },
    // Add more courses as needed
  ];

  // Filter courses based on the selected category
  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="lg:px-[20%] px-[5%] py-[2%] flex flex-col gap-5 z-0">
      {/* Dropdown for selecting category */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="select w-40 cursor-pointer "
      >
        <option value="All">All Category</option>
        <option value="Free">Free</option>
        <option value="Premium">Premium</option>
      </select>

      {/* Display filtered courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
        {filteredCourses.map((course) => (
          <div key={course.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-auto object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{course.title}</h2>
              <p>{course.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
