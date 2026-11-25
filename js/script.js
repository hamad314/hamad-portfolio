/* ==========================================================
   Portfolio of Hamad Ullah Mushwani - main script
   1. Your details (edit this part)
   2. Icons
   3. Build the page sections
   4. Interactions (menu, scroll, slider, form)
   ========================================================== */


/* ---------- 1. YOUR DETAILS - edit only this block ---------- */

const settings = {
  email: "hamadullah030298@gmail.com",
  phone: "+92 302 9820613",
  whatsapp: "923029820613", // number for the WhatsApp button (country code, no + or spaces)
  location: "Lal Qilal, Dir Lower, KPK, Pakistan",
  resume: "My_CV.pdf", // the CV file sits next to index.html
};

const socialLinks = [
  {
    icon: "linkedin",
    label: "LinkedIn",
    url: "#"
  },
  {
    icon: "github",
    label: "GitHub",
    url: "https://github.com/hamad314"
  },
  {
    icon: "youtube",
    label: "YouTube",
    url: "https://www.youtube.com/@hamadworldhistory"
  },
  {
    icon: "facebook",
    label: "Facebook",
    url: "https://web.facebook.com/profile.php?id=61556733840926"
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    url: "https://wa.me/923029820613"
  }
];

const projects = [
  {
    title: "Android Studio Project",
    description: "A complete Android app built with Kotlin and Firebase: user-friendly UI, real-time database and a full project walkthrough.",
    image: "images/project-android.jpg",
    tags: ["Android", "Kotlin", "Firebase"],
    github: "https://github.com/hamad314",
  },
  {
    title: "Video Editing + YouTube Automation",
    description: "Professional editing, YouTube strategy, SEO optimization and content ideas to create, optimize and grow a channel.",
    image: "images/project-video.jpg",
    tags: ["Premiere Pro", "After Effects", "CapCut"],
    github: "https://github.com/hamad314",
  },
  {
    title: "Web Development Project",
    description: "A modern, responsive website with dynamic features, database integration and an admin panel, with a live demo.",
    image: "images/project-web.jpg",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/hamad314",
  },
];

const testimonials = [
  {
    text: "Sample testimonial: replace this text with genuine feedback from a client or collaborator.",
    name: "Sayuru Tharanga",
    date: "10/08/2023"
  },
  {
    text: "Sample testimonial: describe the project, your role and the result delivered.",
    name: "John Deo",
    date: "15/09/2023"
  },
  {
    text: "Sample testimonial: add a third quote, or delete entries you don't need.",
    name: "Senuda Dilwan",
    date: "20/10/2023"
  }
];

const skills = [
  {
    badge: "TW",
    name: "Tailwind CSS",
    description: "Creating responsive, modern and clean layouts quickly using utility-first styling."
  },
  {
    badge: "JS",
    name: "JavaScript",
    description: "Writing efficient, modern and optimized code for both frontend and backend logic."
  },
  {
    badge: "Re",
    name: "React",
    description: "Building fast, interactive and component-based UIs with clean state management."
  },
  {
    badge: "No",
    name: "Node.js",
    description: "Developing scalable backend logic and high-performance server-side applications."
  },
  {
    badge: "Mo",
    name: "MongoDB",
    description: "Managing NoSQL databases with flexible schemas for high-performance data storage."
  },
  {
    badge: "H5",
    name: "HTML",
    description: "Creating clean, well-structured page layouts with semantic markup for better accessibility and SEO."
  }
];

const services = [
  {
    icon: "code",
    title: "Full-Stack Web Development",
    description: "End-to-end web applications using React, Node.js, Express and MongoDB with clean architecture."
  },
  {
    icon: "lay",
    title: "Frontend Development",
    description: "Fast, responsive and user-friendly interfaces built with React and modern UI frameworks like Tailwind CSS."
  },
  {
    icon: "srv",
    title: "Backend & API Development",
    description: "Secure and efficient REST APIs using Node.js and Express, optimized for scalability."
  },
  {
    icon: "db",
    title: "Database Design & Management",
    description: "Well-structured MongoDB databases with optimized queries, reliability and data integrity."
  },
  {
    icon: "lock",
    title: "Authentication & Authorization",
    description: "Secure login systems using JWT, role-based access control and best security practices."
  },
  {
    icon: "cart",
    title: "E-Commerce Development",
    description: "Product listings, cart systems, checkout flows and payment gateway integrations."
  },
  {
    icon: "zap",
    title: "Performance Optimization",
    description: "Improving load times, API response speed and overall application performance."
  },
  {
    icon: "cloud",
    title: "Deployment & Hosting Support",
    description: "Deploying applications on cloud platforms with proper environment setup and production-ready configuration."
  }
];


/* ---------- 2. ICONS (inner SVG paths) ---------- */

const iconPaths = {
  code: `<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>`,
  lay: `<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>`,
  srv: `<rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><path d="M6 7h.01M6 17h.01"/>`,
  db: `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>`,
  lock: `<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>`,
  cart: `<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/>`,
  zap: `<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>`,
  cloud: `<path d="M18 10h-1.3A8 8 0 109 20h9a5 5 0 000-10z"/>`,
  ext: `<path d="M7 17L17 7M8 7h9v9"/>`,
  mail: `<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>`,
  ph: `<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/>`,
  pin: `<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>`,
  dl: `<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>`,
  menu: `<path d="M3 6h18M3 12h18M3 18h18"/>`,
  l: `<path d="M15 18l-6-6 6-6"/>`,
  r: `<path d="M9 18l6-6-6-6"/>`,
  spark: `<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/>`,
  atom: `<circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2-2 0-7.4-4.5-11.9S5.8 1.8 3.8 3.8c-2 2 0 7.4 4.5 11.9s9.9 6.5 11.9 4.5z"/><path d="M15.7 15.7c4.5-4.5 6.5-9.9 4.5-11.9s-7.4 0-11.9 4.5-6.5 9.9-4.5 11.9 7.4 0 11.9-4.5z"/>`,
  brace: `<path d="M8 3H7a2 2 0 00-2 2v5a2 2 0 01-2 2 2 2 0 012 2v5a2 2 0 002 2h1M16 21h1a2 2 0 002-2v-5a2 2 0 012-2 2 2 0 01-2-2V5a2 2 0 00-2-2h-1"/>`,
  globe: `<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>`,
  play: `<polygon points="6 4 20 12 6 20"/>`,
};

// Returns a ready-to-use <svg> string for an icon name
function icon(name, size = 20) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name]}</svg>`;
}


/* Brand icons for the footer (filled shapes, 24x24) */
const brandIcons = {
  linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  github: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  youtube: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  facebook: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  whatsapp: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
};

function brandIcon(name, size = 18) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${brandIcons[name]}"/></svg>`;
}


/* ---------- Small helpers ---------- */

const $ = (selector) => document.querySelector(selector);

// Shows a small popup message at the bottom of the screen for ~3 seconds
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 3200);
}


/* ---------- 3. BUILD THE PAGE ---------- */

// Icons inside buttons and floating bubbles
$("#menu-toggle").innerHTML = icon("menu", 26);
$("#hire-btn").innerHTML = icon("spark", 16) + " Hire Me";
$("#collab-btn").innerHTML += icon("ext", 15);
$("#resume-btn").innerHTML = "Download Resume " + icon("dl", 16);
$("#prev-btn").innerHTML = icon("l", 20);
$("#next-btn").innerHTML = icon("r", 20);
document.querySelectorAll(".floating-icon[data-i]").forEach((bubble) => {
  bubble.innerHTML = icon(bubble.dataset.i, 22);
});

// Skills
$("#skills-grid").innerHTML = skills.map((skill) => `
  <div class="card skill-card reveal">
    <div class="skill-badge gradient-text">${skill.badge}</div>
    <h3>${skill.name}</h3>
    <p>${skill.description}</p>
  </div>`).join("");

// Services
$("#services-grid").innerHTML = services.map((service) => `
  <div class="card service-card reveal">
    ${icon(service.icon, 38)}
    <h3>${service.title}</h3>
    <p>${service.description}</p>
  </div>`).join("");

// Projects
$("#projects-grid").innerHTML = projects.map((project) => `
  <article class="card project-card reveal">
    <div class="project-thumb">
      <img src="${project.image}" alt="${project.title}" loading="lazy">
    </div>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    <div class="button-group">
      <a class="btn" href="${project.github}" data-placeholder>GitHub ${icon("ext", 14)}</a>
      <a class="btn" href="${project.live}" data-placeholder>Live Demo ${icon("ext", 14)}</a>
    </div>
  </article>`).join("");

// Contact details (email, phone, location)
$("#contact-list").innerHTML = [
  ["mail", settings.email],
  ["ph", settings.phone],
  ["pin", settings.location],
].map(([iconName, text]) => `<li>${icon(iconName)}<span>${text}</span></li>`).join("");

// Social links in the footer
$("#social-list").innerHTML = socialLinks.map((link) =>
  `<a href="${link.url}" data-placeholder aria-label="${link.label}">${brandIcon(link.icon)}</a>`).join("");

// Links that still have "#" as the address only show a reminder
document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-placeholder]");
  if (link && link.getAttribute("href") === "#") {
    event.preventDefault();
    showToast("Placeholder link: add your real URL at the top of script.js.");
  }
});

// Resume button
$("#resume-btn").onclick = () => {
  if (!settings.resume) {
    showToast("Resume not added yet: set settings.resume to your PDF file.");
    return;
  }
  const link = document.createElement("a");
  link.href = settings.resume;
  link.download = "Hamad-Ullah-Mushwani-CV.pdf";
  link.click();
};


/* ---------- 4. INTERACTIONS ---------- */

/* Mobile menu: open / close */
const navMenu = $("#nav-menu");
const menuToggle = $("#menu-toggle");

menuToggle.onclick = () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
};

// Close the menu after tapping any link
navMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", false);
  }
});


/* Highlight the nav link of the section currently on screen */
const sections = [...document.querySelectorAll("section[id]")];
const navLinks = [...navMenu.querySelectorAll("a:not(.btn)")];

// Sections without their own nav link are matched to the closest one
const navTarget = { skills: "about", testimonials: "projects" };

window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top < 140) current = section.id;
  });
  const activeId = navTarget[current] || current;
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + activeId);
  });
}, { passive: true });


/* Fade-in animation when an element scrolls into view */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));


/* Testimonials slider */
let currentTestimonial = 0;

function showTestimonial() {
  const item = testimonials[currentTestimonial];

  $("#testimonial-card").innerHTML = `
    <div class="stars" aria-label="5 out of 5 stars">★★★★★</div>
    <p>${item.text}</p>
    <div class="avatar">${item.name[0]}</div>
    <b>${item.name}</b>
    <small>${item.date}</small>
    <span class="sample-note">Sample content: not a verified review</span>`;

  $("#slider-dots").innerHTML = testimonials.map((_, index) => `
    <button class="${index === currentTestimonial ? "active" : ""}"
      aria-label="Show testimonial ${index + 1}" data-index="${index}"></button>`).join("");
}

$("#prev-btn").onclick = () => {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial();
};

$("#next-btn").onclick = () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial();
};

$("#slider-dots").onclick = (event) => {
  const dot = event.target.closest("button");
  if (dot) {
    currentTestimonial = Number(dot.dataset.index);
    showTestimonial();
  }
};

showTestimonial();


/* Contact form: check the fields, then send the message to WhatsApp or email */
const form = $("#contact-form");
const formStatus = $("#form-status");

// Returns the form values if everything is valid, otherwise shows the errors and returns null
function readForm() {
  const value = (id) => $("#" + id).value.trim();
  const errors = {};

  if (value("name").length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value("email"))) errors.email = "Enter a valid email address.";
  if (value("phone") && !/^[+\d\s()-]{7,20}$/.test(value("phone"))) errors.phone = "Enter a valid phone number.";
  if (value("message").length < 10) errors.message = "Message must be at least 10 characters.";

  // Show (or clear) the error text under every field
  ["name", "email", "phone", "company", "message"].forEach((field) => {
    const input = $("#" + field);
    input.nextElementSibling.textContent = errors[field] || "";
    input.setAttribute("aria-invalid", Boolean(errors[field]));
  });

  if (Object.keys(errors).length > 0) {
    formStatus.style.color = "#f87171";
    formStatus.textContent = "Please fix the highlighted fields.";
    return null;
  }

  formStatus.style.color = "#4ade80";
  return {
    name: value("name"),
    email: value("email"),
    phone: value("phone"),
    company: value("company"),
    message: value("message"),
  };
}

// The message text used for both WhatsApp and email
function buildMessage(data) {
  return (
    "Hello Hamad, I found you through your portfolio.\n\n" +
    data.message + "\n\n" +
    "Name: " + data.name + "\n" +
    "Email: " + data.email + "\n" +
    (data.phone ? "Phone: " + data.phone + "\n" : "") +
    (data.company ? "Company: " + data.company + "\n" : "")
  );
}

// Main button: opens WhatsApp with the message already typed
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = readForm();
  if (!data) return;

  formStatus.textContent = "Opening WhatsApp... just press send there.";
  window.open(`https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(buildMessage(data))}`, "_blank");
});

// Second button: opens the email app with the message already typed
$("#email-btn").addEventListener("click", () => {
  const data = readForm();
  if (!data) return;

  formStatus.textContent = "Opening your email app... just press send there.";
  const subject = encodeURIComponent("Portfolio enquiry from " + data.name);
  location.href = `mailto:${settings.email}?subject=${subject}&body=${encodeURIComponent(buildMessage(data))}`;
});
