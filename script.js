
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();

const form = document.getElementById("applicationForm");
const formMessage = document.getElementById("formMessage");

// Replace this with the college's real email address.
const collegeEmail = "YOUR-COLLEGE-EMAIL@example.com";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (collegeEmail.includes("YOUR-COLLEGE-EMAIL")) {
    formMessage.textContent =
      "Please contact the college to configure its email address.";
    return;
  }

  const data = new FormData(form);

  const subject = encodeURIComponent(
    "College Course Enquiry"
  );

  const body = encodeURIComponent(
    "Name: " + data.get("studentName") + "\n" +
    "Email: " + data.get("studentEmail") + "\n" +
    "Course: " + data.get("course") + "\n" +
    "Message: " + data.get("message")
  );

  window.location.href =
    "mailto:" + collegeEmail +
    "?subject=" + subject +
    "&body=" + body;

  formMessage.textContent =
    "Your email app should open. Review and send the email to complete your enquiry.";
});
