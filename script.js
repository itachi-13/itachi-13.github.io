// Scale Home section when scrolling
window.onscroll = function () {
    fixedHomeSection();
};

function fixedHomeSection() {
    if (window.innerWidth >= 992) {
        if (
            document.documentElement.scrollTop >= 100 &&
            document.documentElement.scrollTop < 470
        ) {
            var scale = 1 - (window.scrollY - 100) / 1850;
            document.querySelector(
                "#home .container"
            ).style.transform = `scale(${scale})`;
        } else if (document.documentElement.scrollTop < 100) {
            document.querySelector(
                "#home .container"
            ).style.transform = `scale(1)`;
        }
    } else if (window.innerWidth < 992 && window.innerWidth >= 768) {
        if (
            document.documentElement.scrollTop >= 100 &&
            document.documentElement.scrollTop < 800
        ) {
            var scale = 1 - (window.scrollY - 100) / 3500;
            document.querySelector(
                "#home .container"
            ).style.transform = `scale(${scale})`;
        } else if (document.documentElement.scrollTop < 100) {
            document.querySelector(
                "#home .container"
            ).style.transform = `scale(1)`;
        }
    }
}

// Highlight nav-item when reaching its section
const sections = document.querySelectorAll("section.section");
const navItems = document.querySelectorAll(".nav-link");

let currentNavItem = navItems[2];
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const sectionId = entry.target.getAttribute("id");
            const navItem = document.querySelector(`.${sectionId}`);
            if (entry.isIntersecting) {
                currentNavItem.classList.remove("nav-active");
                navItem.classList.add("nav-active");
                currentNavItem = navItem;
            }
        });
    },
    { threshold: 0.9 }
);

sections.forEach((section) => {
    observer.observe(section);
});

// Highlight Projects nav-item
const projectsSection = document.querySelector("section#projects");
const projectsNavItem = document.querySelector(".nav-link.projects");

const observer2 = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                currentNavItem.classList.remove("nav-active");
                projectsNavItem.classList.add("nav-active");
                currentNavItem = projectsNavItem;
            }
        });
    },
    { threshold: 0.2 }
);

observer2.observe(projectsSection);

// Keep About nam-item highlight when scrolling back
const aboutSection = document.querySelector("section#about");

const observer3 = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const sectionId = entry.target.getAttribute("id");
            const navItem = document.querySelector(`.${sectionId}`);
            if (!entry.isIntersecting) {
                navItem.classList.remove("nav-active");
            }
        });
    },
    { threshold: 0.3 }
);

observer3.observe(aboutSection);

// animate when get into viewport
const animatedElements = document.querySelectorAll(".scrolling-animation");

const observer4 = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("scrolling-animation");
            }
            // else {
            //   entry.target.classList.add('scrolling-animation');
            // }
        });
    },
    { threshold: 0.25 }
);

animatedElements.forEach((animatedElement) => {
    observer4.observe(animatedElement);
});

/** Projects results */

const skillsData = {
    all: { years: 4, projects: 7 },
    bootstrap: { years: 2, projects: 5 },
    tailwind: { years: 2, projects: 4 },
    typescript: { years: 2, projects: 3 },
    react: { years: 3, projects: 8 },
    nextjs: { years: 1, projects: 6 },
    nodejs: { years: 1, projects: 7 },
    flask: { years: 2, projects: 3 },
    docker: { years: 2, projects: 2 },
    postgresql: { years: 2, projects: 5 },
    mongodb: { years: 1, projects: 4 },
};

function clickSkill(element, skill) {
    let allProjects = document.querySelectorAll(".project-container");
    let projects = document.querySelectorAll(`.${skill}`);
    let resultsCount = document.querySelector(".results-count");

    if (skill === "all") {
        resultsCount.textContent = 7;
    } else {
        resultsCount.textContent = projects.length;
    }

    // Show/hide projects
    allProjects.forEach((project) => {
        if (skill === "all") {
            project.parentElement.classList.remove("hide-item");
        } else {
            if (project.classList.contains(skill)) {
                project.parentElement.classList.remove("hide-item");
            } else {
                project.parentElement.classList.add("hide-item");
            }
        }
    });

    // Highlight clicked skill
    let allSkills = document.querySelectorAll(".libraries ul li");
    allSkills.forEach((li) => li.classList.remove("active-skill"));
    element.classList.add("active-skill");

    // Update skill details
    const detail = skillsData[skill];
    document.getElementById("skill-name").textContent =
        skill.charAt(0).toUpperCase() + skill.slice(1);
    document.getElementById("skill-years").textContent = detail
        ? detail.years
        : "-";
    document.getElementById("skill-projects").textContent = detail
        ? detail.projects
        : "-";
}

// Testimonial Slider
let testimonialInterval;
testimonialInterval = setInterval(testimonialSliderRight, 5000);

function testimonialSliderRight() {
    let first = document.querySelector(".testimonial-container.first");
    let second = document.querySelector(".testimonial-container.second");
    let third = document.querySelector(".testimonial-container.third");
    let fourth = document.querySelector(".testimonial-container.fourth");
    let fifth = document.querySelector(".testimonial-container.fifth");
    let sixth = document.querySelector(".testimonial-container.sixth");

    first.classList.remove("first");
    first.classList.add("sixth");

    second.classList.remove("second");
    second.classList.add("first");

    third.classList.remove("third");
    third.classList.add("second");

    fourth.classList.remove("fourth");
    fourth.classList.add("third");

    fifth.classList.remove("fifth");
    fifth.classList.add("fourth");

    sixth.classList.remove("sixth");
    sixth.classList.add("fifth");
}

function testimonialSliderLeft() {
    let first = document.querySelector(".testimonial-container.first");
    let second = document.querySelector(".testimonial-container.second");
    let third = document.querySelector(".testimonial-container.third");
    let fourth = document.querySelector(".testimonial-container.fourth");
    let fifth = document.querySelector(".testimonial-container.fifth");
    let sixth = document.querySelector(".testimonial-container.sixth");

    first.classList.remove("first");
    first.classList.add("second");

    second.classList.remove("second");
    second.classList.add("third");

    third.classList.remove("third");
    third.classList.add("fourth");

    fourth.classList.remove("fourth");
    fourth.classList.add("fifth");

    fifth.classList.remove("fifth");
    fifth.classList.add("sixth");

    sixth.classList.remove("sixth");
    sixth.classList.add("first");
}

// Testimonial Slider on clicking
let next = document.querySelector(".right-arrow");
let pre = document.querySelector(".left-arrow");

next.addEventListener("click", () => {
    clearInterval(testimonialInterval);
    testimonialSliderRight();
    testimonialInterval = setInterval(testimonialSliderRight, 5000);
});

pre.addEventListener("click", () => {
    clearInterval(testimonialInterval);
    testimonialSliderLeft();
    testimonialInterval = setInterval(testimonialSliderLeft, 5000);
});

// Testimonial Slider on touching
let testimonial = document.querySelector(".testimonials-container");
let isScrollingHorizontally;
let startTouchX;

testimonial.addEventListener("touchstart", function (e) {
    startTouchX = e.touches[0].pageX;
    isScrollingHorizontally = false;
});

testimonial.addEventListener("touchmove", function (e) {
    const touchX = e.touches[0].pageX;

    if (touchX - startTouchX > 40 && !isScrollingHorizontally) {
        isScrollingHorizontally = true;
        clearInterval(testimonialInterval);
        testimonialSliderLeft();
        testimonialInterval = setInterval(testimonialSliderLeft, 5000);
    } else if (startTouchX - touchX > 40 && !isScrollingHorizontally) {
        isScrollingHorizontally = true;
        clearInterval(testimonialInterval);
        testimonialSliderRight();
        testimonialInterval = setInterval(testimonialSliderRight, 5000);
    }
});
