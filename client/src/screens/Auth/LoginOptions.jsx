// import React from "react";
// import { useNavigate } from "react-router-dom";

// const loginOptions = [
//   {
//     label: "Login as student",
//     path: "/login",
//   },
//   {
//     label: "Login as admin",
//     path: "/login",
//   },
// ];

// const Desktop = () => {
//   const navigate = useNavigate();

//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.optionsContainer}>
//         {loginOptions.map((option, index) => (
//           <button
//             key={index}
//             style={styles.button}
//             onClick={() => handleNavigate(option.path)}
//           >
//             <div style={styles.box}></div>
//             <div style={styles.label}>{option.label}</div>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     backgroundColor: "white",

//     width: "100%",
//     minHeight: "100vh",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   optionsContainer: {
//     display: "flex",
//     gap: "200px",
//     alignItems: "flex-start",
//     flexWrap: "wrap",
//   },
//   button: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: "40px",
//     cursor: "pointer",
//     backgroundColor: "transparent",
//     border: "none",
//     padding: 0,
//   },
//   box: {
//     width: "260px",
//     height: "260px",
//     backgroundColor: "#d9d9d9",
//     borderRadius: "10px",
//     transition: "transform 0.3s ease, background-color 0.3s ease",
//   },
//   label: {
//     width: "210px",
//     fontFamily: "Inter, Helvetica, Arial, sans-serif",
//     fontWeight: "400",
//     color: "black",
//     fontSize: "24px",
//     textAlign: "center",
//   },
// };

// // Add hover effect dynamically
// document.addEventListener("mouseover", (e) => {
//   const box = e.target.closest("button div");
//   if (box) {
//     box.style.backgroundColor = "#bfbfbf";
//     box.style.transform = "scale(1.05)";
//   }
// });
// document.addEventListener("mouseout", (e) => {
//   const box = e.target.closest("button div");
//   if (box) {
//     box.style.backgroundColor = "#d9d9d9";
//     box.style.transform = "scale(1)";
//   }
// });

// export default Desktop;


import React from "react";
import { useNavigate } from "react-router-dom";

const loginOptions = [
  {
    label: "Login as student",
    path: "/login",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", // 👩‍🎓 Student image
  },
  {
    label: "Login as admin",
    path: "/login",
    image: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png", // 👨‍🏫 Instructor/Admin image
  },
];

const Desktop = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div style={styles.container}>
      <div style={styles.optionsContainer}>
        {loginOptions.map((option, index) => (
          <button
            key={index}
            style={styles.button}
            onClick={() => handleNavigate(option.path)}
            onMouseOver={(e) => handleHover(e, true)}
            onMouseOut={(e) => handleHover(e, false)}
          >
            <div style={{ ...styles.box }}>
              <img
                src={option.image}
                alt={option.label}
                style={styles.image}
              />
            </div>
            <div style={styles.label}>{option.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

// Hover effect handler
const handleHover = (e, isHovering) => {
  const box = e.currentTarget.querySelector("div");
  if (box) {
    box.style.backgroundColor = isHovering ? "#bfbfbf" : "#d9d9d9";
    box.style.transform = isHovering ? "scale(1.05)" : "scale(1)";
  }
};

const styles = {
  container: {
    backgroundColor: "white",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  optionsContainer: {
    display: "flex",
    gap: "200px",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  button: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    transition: "transform 0.3s ease",
  },
  box: {
    width: "260px",
    height: "260px",
    backgroundColor: "#d9d9d9",
    borderRadius: "10px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s ease, background-color 0.3s ease",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  label: {
    width: "210px",
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    fontWeight: "400",
    color: "black",
    fontSize: "24px",
    textAlign: "center",
  },
};

export default Desktop;
