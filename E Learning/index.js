const qoutes = [
    "\"The only way to do great work is to love what you do.\" - Steve Jobs",
    "\"Life is what happens when you're busy making other plans.\" - John Lennon",
    "\"Success is not final, failure is not fatal: It is the courage to continue that counts.\" - Winston Churchill",
    "\"In the end, it's not the years in your life that count. It's the life in your years.\" - Abraham Lincoln",
    "\"The future belongs to those who believe in the beauty of their dreams.\" - Eleanor Roosevelt",
    "\"Believe you can and you're halfway there.\" - Theodore Roosevelt",
    "\"The best way to predict the future is to create it.\" - Peter Drucker",
    "\"The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.\" - Jordan Belfort",
    "\"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.\" - Albert Schweitzer",
    "\"The only limit to our realization of tomorrow will be our doubts of today.\" - Franklin D. Roosevelt",
    "\"The only place where success comes before work is in the dictionary.\" - Vidal Sassoon",
    "\"The only person you are destined to become is the person you decide to be.\" - Ralph Waldo Emerson",
    "\"The only true wisdom is in knowing you know nothing.\" - Socrates",
    "\"The only thing we have to fear is fear itself.\" - Franklin D. Roosevelt",
    "\"The only thing that is constant is change.\" - Heraclitus"
];
function displayRandomQuote() {
    const quoteElement = document.getElementById("text");
    const randomIndex = Math.floor(Math.random() * qoutes.length);
    quoteElement.innerText = qoutes[randomIndex];
}
function changeQuoteEvery5Seconds() {
    displayRandomQuote();
    setInterval(displayRandomQuote, 5000);
}
window.onload = changeQuoteEvery5Seconds;




const courses = [
    {
        imageUrl: "img/web.jpg",
        courseName: "Web Development Fundamentals",
        courseDescription: "Learn the basics of web development, including HTML, CSS, and JavaScript.",
        price: 49.99,
    }, {
        imageUrl: "img/pypro.jpg",
        courseName: "Python Programming",
        courseDescription: "A comprehensive guide to learn Python programming language.",
        price: 79.99,
    },
    {
        imageUrl: "img/DM.jpg",
        courseName: "Digital Marketing",
        courseDescription: "Discover the essentials of digital marketing and how to create effective online campaigns.",
        price: 59.99,
    },
    {
        imageUrl: "img/Ds.jpg",
        courseName: "Data Science Bootcamp",
        courseDescription: "Master the art of data science and machine learning with real-world projects.",
        price: 129.99,
    },
    {
        imageUrl: "img/gd.jpg",
        courseName: "Graphic Design Basics",
        courseDescription: "Learn the fundamentals of graphic design and create stunning visuals.",
        price: 69.99,
    },
    {
        imageUrl: "img/mad.jpg",
        courseName: "Mobile App Development",
        courseDescription: "Build cross-platform mobile apps using React Native and other tools.",
        price: 89.99,
    },
    {
        imageUrl: "img/PE.jpg",
        courseName: "Photography Essentials",
        courseDescription: "Capture breathtaking photos and master the art of photography.",
        price: 39.99,
    },
    {
        imageUrl: "img/bf.jpg",
        courseName: "Business Finance",
        courseDescription: "Learn financial concepts and strategies for better business decision-making.",
        price: 79.99,
    },
    {
        imageUrl: "img/smm.jpg",
        courseName: "Social Media Marketing",
        courseDescription: "Leverage social media platforms to grow your business and engage with your audience.",
        price: 69.99,
    },
    {
        imageUrl: "img/uix.jpg",
        courseName: "UI/UX Design",
        courseDescription: "Create intuitive user interfaces and design exceptional user experiences.",
        price: 99.99,
    },
    {
        imageUrl: "img/js.png",
        courseName: "JavaScript for Beginners",
        courseDescription: "Learn the fundamentals of JavaScript programming language.",
        price: 39.99,
      },
      {
        imageUrl: "img/ml.jpg",
        courseName: "Machine Learning Fundamentals",
        courseDescription: "An introduction to machine learning algorithms and techniques.",
        price: 99.99,
      },
      {
        imageUrl: "img/di.png",
        courseName: "Digital Illustration",
        courseDescription: "Master digital illustration techniques and create stunning artworks.",
        price: 49.99,
      },
      {
        imageUrl: "img/iosds.jpg",
        courseName: "iOS App Development with Swift",
        courseDescription: "Build iOS applications using Swift programming language.",
        price: 79.99,
      },
      {
        imageUrl: "img/sp.jpg",
        courseName: "Social Psychology",
        courseDescription: "Understand human behavior and social interactions.",
        price: 59.99,
      },
      {
        imageUrl: "img/and.jpg",
        courseName: "Android App Development",
        courseDescription: "Create Android apps with Java and Android Studio.",
        price: 89.99,
      },
      {
        imageUrl: "img/ai.jpg",
        courseName: "Artificial Intelligence Essentials",
        courseDescription: "Explore the basics of artificial intelligence and its applications.",
        price: 39.99,
      },
      {
        imageUrl: "img/dv.png",
        courseName: "Data Visualization with D3.js",
        courseDescription: "Learn how to create interactive data visualizations using D3.js library.",
        price: 79.99,
      },
      {
        imageUrl: "img/dp.jpg",
        courseName: "Digital Photography",
        courseDescription: "Capture stunning photos and master digital photography techniques.",
        price: 69.99,
      },
      {
        imageUrl: "img/if.jpg",
        courseName: "Introduction to Finance",
        courseDescription: "Get a basic understanding of finance concepts and principles.",
        price: 49.99,
      },
      {
        imageUrl: "img/rjs.jpg",
        courseName: "React.js Fundamentals",
        courseDescription: "Learn the basics of React.js library for building dynamic web applications.",
        price: 89.99,
      },
      {
        imageUrl: "img/bsg.jpg",
        courseName: "Business Strategy",
        courseDescription: "Develop effective business strategies for growth and success.",
        price: 79.99,
      },
      {
        imageUrl: "img/al.png",
        courseName: "Photography Editing with Adobe Lightroom",
        courseDescription: "Master photo editing using Adobe Lightroom software.",
        price: 59.99,
      },
    
];



function createCourseElement(course) {
    const courseDiv = document.createElement('div');
    courseDiv.classList.add('course-card'); 

    const image = document.createElement('img');
    image.src = course.imageUrl;
    image.alt = course.courseName;

    const heading = document.createElement('h3');
    heading.textContent = course.courseName;

    const description = document.createElement('p');
    description.textContent = course.courseDescription;

    const price = document.createElement('span');
    price.textContent = `Price:₹ ${course.price}`;

    const enrollBtn=document.createElement('button');
    enrollBtn.classList.add('enrolbtn');
    // enrollBtn.setAttribute('id','enrolbtn')
    enrollBtn.innerText='Enroll Now'

   
    courseDiv.appendChild(image);
    courseDiv.appendChild(heading);
    courseDiv.appendChild(description);
    courseDiv.appendChild(price);
    courseDiv.appendChild(enrollBtn);
    return courseDiv;
}




const courseContainer = document.querySelector('#course-container');


courses.forEach(course => {
    const courseElement = createCourseElement(course);
    courseContainer.appendChild(courseElement)
});





const wrapper = document.querySelector(".courses");
// const carousel = document.querySelector(".carousel");

const firstCardWidth = courseContainer.querySelector(".course-card").offsetWidth;
const arrowBtns = document.querySelectorAll(".courses i");
const carouselChildrens = [...courseContainer.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(courseContainer.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    courseContainer.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    courseContainer.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
courseContainer.classList.add("no-transition");
courseContainer.scrollLeft =courseContainer.offsetWidth;
courseContainer.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        courseContainer.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    courseContainer.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = courseContainer.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    courseContainer.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    courseContainer.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(courseContainer.scrollLeft === 0) {
        courseContainer.classList.add("no-transition");
        courseContainer.scrollLeft = courseContainer.scrollWidth - (2 * courseContainer.offsetWidth);
        courseContainer.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(courseContainer.scrollLeft) === courseContainer.scrollWidth - courseContainer.offsetWidth) {
        courseContainer.classList.add("no-transition");
        courseContainer.scrollLeft = courseContainer.offsetWidth;
        courseContainer.classList.remove("no-transition");
    }

    
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if 
    timeoutId = setTimeout(() => courseContainer.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

courseContainer.addEventListener("mousedown", dragStart);
courseContainer.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
courseContainer.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);