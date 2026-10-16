index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Shinning Stars Computer College offers practical computer training and digital skills.">
  <title>Shinning Stars Computer College</title>
  <link rel="stylesheet" href="style.css">
  <script src="script.js" defer></script>
</head>
<body>
  <header class="header">
    <a class="logo" href="#home">Shinning Stars</a>

    <button class="menu-toggle" id="menuToggle"
      aria-label="Toggle navigation" aria-expanded="false">
      ☰
    </button>

    <nav id="navigation">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#courses">Courses</a>
      <a href="#admissions">Admissions</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="home">
      <p class="eyebrow">LEARN • PRACTISE • GROW</p>
      <h1>Build Your Future With Digital Skills</h1>
      <p>
        Welcome to Shinning Stars Computer College.
        Learn practical computer skills to prepare for
        education, employment and business.
      </p>
      <a class="button" href="#courses">Explore Our Courses</a>
      <a class="button button-light" href="#admissions">
        Apply for Admission
      </a>
    </section>

    <section class="section" id="about">
      <h2>About Our College</h2>
      <p>
        Shinning Stars Computer College is dedicated to
        practical computer education and digital skills.
        Our goal is to help learners gain knowledge and
        confidence through hands-on training.
      </p>
    </section>

    <section class="section shaded" id="courses">
      <h2>Our Courses</h2>
      <p>Explore some of the training areas we offer.</p>

      <div class="course-grid">
        <article class="course-card">
          <h3>Computer Packages</h3>
          <p>Learn Word, Excel, PowerPoint and other
            essential office applications.</p>
        </article>

        <article class="course-card">
          <h3>Web Development</h3>
          <p>Learn HTML, CSS and JavaScript to create
            modern websites.</p>
        </article>

        <article class="course-card">
          <h3>Computer Applications</h3>
          <p>Develop practical digital literacy and
            everyday computer skills.</p>
        </article>
      </div>
      <p class="notice">
        Confirm current course availability and fees with the college.
      </p>
    </section>

    <section class="section" id="admissions">
      <h2>Admissions Are Open</h2>
      <p>
        Interested in joining us? Contact the college to
        confirm the next intake, course duration, fees and
        registration requirements.
      </p>
      <a class="button" href="#contact">Enquire About Admission</a>
    </section>

    <section class="section shaded" id="contact">
      <h2>Contact Us</h2>
      <p>Have a question about our courses or admissions?</p>

      <form id="applicationForm">
        <label for="studentName">Your full name</label>
        <input id="studentName" name="studentName"
          type="text" required>

        <label for="studentEmail">Your email</label>
        <input id="studentEmail" name="studentEmail"
          type="email" required>

        <label for="course">Course of interest</label>
        <select id="course" name="course" required>
          <option value="">Choose a course</option>
          <option>Computer Packages</option>
          <option>Web Development</option>
          <option>Computer Applications</option>
        </select>

        <label for="message">Message</label>
        <textarea id="message" name="message"
          rows="4" placeholder="Ask us a question"></textarea>

        <button class="button" type="submit">
          Send Enquiry
        </button>

        <p id="formMessage" role="status"></p>
      </form>
    </section>
  </main>

  <footer class="footer">
    <p>© <span id="year"></span> Shinning Stars Computer College</p>
    <p>Empowering learners through digital skills.</p>
  </footer>
</body>
</html>
