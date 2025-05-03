import { useState } from "react";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const courses = [
    {
      id: 1,
      title: "Free Course",
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
    <div className="px-[20%] py-[2%] flex flex-col gap-5">
      {/* Dropdown for selecting category */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="select"
      >
        <option value="All">All Category</option>
        <option value="Free">Free</option>
        <option value="Premium">Premium</option>
      </select>

      {/* Display filtered courses */}
      <div className="">
        <div className="grid grid-cols-3 gap-5">
          {filteredCourses.map((course) => (
            <div key={course.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[200px] object-cover"
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
    </div>
  );
};

export default Courses;
