function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

$(".bubbles i").each(function(_, el) {
	$(el).css({
		"animation-duration": `calc(100s / ${getRndInteger(10, 30)})`,
	})
})

$(".bubbles").removeClass("opacity-0 blur-3xl")
