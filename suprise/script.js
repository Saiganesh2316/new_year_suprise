function goTo(target) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(
    typeof target === "number"
      ? "screen" + target
      : "screen" + target
  ).classList.add("active");
}
