// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Declare AOS
    const AOS = window.AOS
  
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 800,
      easing: "ease",
      once: false,
      mirror: false,
    })
  
    // Declare particlesJS
    const particlesJS = window.particlesJS
  
    // Initialize Particles.js
    
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#00ff66",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#00ff66",
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 0.5,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        })
      }
  
    // Declare VanillaTilt
    const VanillaTilt = window.VanillaTilt
  
    // Initialize VanillaTilt for service cards
    if (typeof VanillaTilt !== "undefined") {
      VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
      })
    }
  
    // Custom cursor
    const cursor = document.querySelector(".cursor")
    const cursorFollower = document.querySelector(".cursor-follower")
  
    if (window.innerWidth > 768) {
      document.addEventListener("mousemove", (e) => {
        cursor.style.display = "block"
        cursorFollower.style.display = "block"
  
        cursor.style.left = e.clientX + "px"
        cursor.style.top = e.clientY + "px"
  
        // Delayed follower effect
        setTimeout(() => {
          cursorFollower.style.left = e.clientX + "px"
          cursorFollower.style.top = e.clientY + "px"
        }, 100)
      })
  
      document.addEventListener("mouseout", () => {
        cursor.style.display = "none"
        cursorFollower.style.display = "none"
      })
  
      // Cursor effects on hover
      const links = document.querySelectorAll("a, button, .service-card, .project-card")
  
      links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          cursor.style.transform = "translate(-50%, -50%) scale(1.5)"
          cursor.style.borderWidth = "1px"
          cursorFollower.style.width = "30px"
          cursorFollower.style.height = "30px"
        })
  
        link.addEventListener("mouseleave", () => {
          cursor.style.transform = "translate(-50%, -50%) scale(1)"
          cursor.style.borderWidth = "2px"
          cursorFollower.style.width = "40px"
          cursorFollower.style.height = "40px"
        })
      })
  
      document.addEventListener("mousedown", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(0.8)"
        cursorFollower.style.transform = "translate(-50%, -50%) scale(0.8)"
      })
  
      document.addEventListener("mouseup", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)"
        cursorFollower.style.transform = "translate(-50%, -50%) scale(1)"
      })
    }
  
    // Mobile navigation
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  
    // Sticky header
    const header = document.querySelector("header")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.style.padding = "15px 0"
        header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)"
      } else {
        header.style.padding = "20px 0"
        header.style.boxShadow = "none"
      }
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          const headerHeight = header.offsetHeight
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Animate skill bars
    const skillBars = document.querySelectorAll(".skill-progress")
  
    function animateSkillBars() {
      skillBars.forEach((bar) => {
        const progress = bar.getAttribute("data-progress")
        bar.style.width = progress
      })
    }
  
    // Check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect()
      return rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0
    }
  
    // Check skills section on scroll
    window.addEventListener("scroll", () => {
      const skillsSection = document.querySelector(".skills")
      if (skillsSection && isInViewport(skillsSection)) {
        animateSkillBars()
      }
    })
  
    // Check on load
    window.addEventListener("load", () => {
      const skillsSection = document.querySelector(".skills")
      if (skillsSection && isInViewport(skillsSection)) {
        animateSkillBars()
      }
    })
  
    // Projects filter
    const filterButtons = document.querySelectorAll(".filter-btn")
    const projectCards = document.querySelectorAll(".project-card")
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"))
  
        // Add active class to clicked button
        button.classList.add("active")
  
        const filter = button.getAttribute("data-filter")
  
        // Filter projects
        projectCards.forEach((card) => {
          if (filter === "all" || card.getAttribute("data-category") === filter) {
            card.style.display = "block"
            setTimeout(() => {
              card.style.opacity = "1"
              card.style.transform = "translateY(0)"
            }, 100)
          } else {
            card.style.opacity = "0"
            card.style.transform = "translateY(20px)"
            setTimeout(() => {
              card.style.display = "none"
            }, 300)
          }
        })
      })
    })
  
    // Form submission
    const contactForm = document.getElementById("contactForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Here you would typically send the form data to a server
        // For this example, we'll just log it and show a success message
        console.log("Form submitted:", { name, email, subject, message })
  
        // Show success message
        const formGroups = document.querySelectorAll(".form-group")
        formGroups.forEach((group) => (group.style.display = "none"))
  
        const submitBtn = contactForm.querySelector('button[type="submit"]')
        submitBtn.style.display = "none"
  
        const successMessage = document.createElement("div")
        successMessage.className = "success-message"
        successMessage.innerHTML = `
                  <i class="fas fa-check-circle" style="color: var(--primary-color); font-size: 3rem; margin-bottom: 20px;"></i>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out, ${name}. I'll get back to you soon.</p>
              `
        successMessage.style.textAlign = "center"
        successMessage.style.padding = "30px"
  
        contactForm.appendChild(successMessage)
  
        // Reset form after 5 seconds
        setTimeout(() => {
          contactForm.reset()
          formGroups.forEach((group) => (group.style.display = "block"))
          submitBtn.style.display = "block"
          successMessage.remove()
        }, 5000)
      })
    }
  
    // Typing effect for hero section
    const typingElement = document.querySelector(".hero-text h2 .highlight")
    if (typingElement) {
      const roles = ["Frontend Developer", "UI/UX Designer", "Web Developer"]
      let roleIndex = 0
      let charIndex = 0
      let isDeleting = false
      let typingSpeed = 100
  
      function typeEffect() {
        const currentRole = roles[roleIndex]
  
        if (isDeleting) {
          typingElement.textContent = currentRole.substring(0, charIndex - 1)
          charIndex--
          typingSpeed = 50
        } else {
          typingElement.textContent = currentRole.substring(0, charIndex + 1)
          charIndex++
          typingSpeed = 100
        }
  
        if (!isDeleting && charIndex === currentRole.length) {
          isDeleting = true
          typingSpeed = 1000 // Pause at the end
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false
          roleIndex = (roleIndex + 1) % roles.length
          typingSpeed = 500 // Pause before typing next role
        }
  
        setTimeout(typeEffect, typingSpeed)
      }
  
      // Start the typing effect
      setTimeout(typeEffect, 1000)
    }
  
    // Parallax effect
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset
  
      // Parallax for hero section
      const heroSection = document.querySelector(".hero")
      if (heroSection) {
        heroSection.style.backgroundPositionY = scrollPosition * 0.5 + "px"
      }
  
      // Parallax for elements
      document.querySelectorAll(".parallax").forEach((element) => {
        const speed = element.getAttribute("data-speed") || 0.2
        element.style.transform = `translateY(${scrollPosition * speed}px)`
      })
    })
  
    // Project hover effect - 3D tilt
    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const cardRect = card.getBoundingClientRect()
        const cardCenterX = cardRect.left + cardRect.width / 2
        const cardCenterY = cardRect.top + cardRect.height / 2
        const mouseX = e.clientX - cardCenterX
        const mouseY = e.clientY - cardCenterY
  
        // Calculate rotation based on mouse position
        const rotateY = (mouseX / (cardRect.width / 2)) * 5 // Max 5 degrees
        const rotateX = -(mouseY / (cardRect.height / 2)) * 5 // Max 5 degrees
  
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
      })
  
      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)"
      })
    })
  })
  