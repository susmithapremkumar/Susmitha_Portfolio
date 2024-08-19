import project1 from "../assets/Projects/bigmart.jpeg";
import project2 from "../assets/Projects/book.jpeg";
import project3 from "../assets/Projects/email.jpeg";
import project4 from "../assets/Projects/virtualmouse.jpeg";


export const INTERNSHIPS = [
    {
        year: "June 2023 - August 2023",
        role: "Machine Learning",
        company: "INeuron.ai",
        description: "I created an online store sales prediction by utilizing the technologies I learned - Python and their Libraries, Machine Learning Algorithms, and Frontend.",
        technologies: ["Numpy", "Flask", "Scikit-Learn", "Matplotlib", "Linear Regression"],
    },


    {
        year: "July 2023 - August 2023",
        role: "Data science",
        company: "Oasis Infobyte",
        description: "I gained knowledge about how to utilize Matplotlib for visualization, Numpy for multidimensional arrays, CV2 for computer recognition, and Tensorflow for model training.",
        technologies: ["Tensorflow", "Matplotlib", "CV2", "Numpy"],
    },
    
    {
        year: "June 2022 - July 2022",
        role: "Data Analytics",
        company : "Academy of Skill Development",
        description: "This Internship involves experience in Data Collection, Cleaning, Visualization and Basic Statistical Analysis. Collaborated with cross-functional teams to develop data-driven strategies and business decision-making.",
        technologies: ["Pandas", "Numpy", "Seaborn", "Matplotlib"],
    },
]

export const PROJECTS = [
    {
        title: "Big-Mart Sales Prediction",
        image: project1,
        description: "Designed and developed machine learning models to predict sales, deployed the final model as a web application on Render, providing actionable sales forecasts that enhanced inventory management and strategic planning.",
        technologies: ["Python", "Statistics", "Scikit-Learn", "Render"],
        link: "https://sales-analysis.onrender.com/",
    },
    {
        title: "Book Recommendation System",
        image: project2,
        description: "A fully functional book recommend featuring the analyzed user behavior and book metadata. To implement collaborative filtering and content-based filtering algorithms.",
        technologies: ["JavaScript","Python","Seaborn"],
    },
    {
        title: "Email Spam Detection",
        image: project3, 
        description: "The model extracts features like keywords, sender information, and frequency patterns, then classifies emails as spam or not based on these features. It learns from labeled data, improving accuracy in distinguishing between legitimate emails and spam.",
        technologies: ["Python", "Pandas", "Numpy"],
    },
    {
        title: "Virtual Mouse and Hand Gesture",
        image: project4,
        description: "The project utilizes OpenCV and MediaPipe to detect and track hand movements, enabling gesture-based cursor control and click actions. This system allows for touchless interaction with a computer, enhancing user experience and accessibility.",
        technologies: ["Python", "OpenCV", "CNN"],
    }
]

export const CONTACTS = {
        address: "Chennai, TamilNadu, INDIA.",
        phoneNo: "+91 7010613238",
        email: "susprem03@gmail.com"
    }
    