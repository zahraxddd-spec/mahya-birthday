// Tiny ambient twinkle effect: keep the page lightweight and simple.
document.querySelectorAll(".spark").forEach((spark, index) => {
  spark.style.animationDelay = `${index * 0.43}s`;
});
