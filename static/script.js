function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

setTimeout(() => $(".bubbles").removeClass("opacity-0 blur-3xl"), 250);

$(".bubbles i").each(function (_, el) {
  $(el).css({
    "animation-duration": ` ${getRndInteger(5, 25)}s`,
  });
});
