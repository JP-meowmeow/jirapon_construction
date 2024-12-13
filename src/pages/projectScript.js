document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("jumpToOurHomeDesktop")
    .addEventListener("click", () => {
      document
      .getElementById("ourHome")
      .scrollIntoView({ behavior: "smooth" });
    });
})
