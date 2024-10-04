$(document).ready(() => {
    $(".search-cross").hide()

    $(".search-cross").click(() => {
        $(".search").val("")
        $(".search-cross").hide()
    })

    $(".search").on("input", () => {
        if ($(".search").val().length > 0 && $(".search-cross").is(":hidden")) {
            $(".search-cross").show()
        } else if ($(".search").val().length == 0 && $(".search-cross").is(":visible")) {
            $(".search-cross").hide()
        }
    })

    $(".search-cross").mouseover(() => {
        // Changes the clear button icon 
        $(".search-cross .light-cross").css({"visibility": "hidden"})
        $(".search-cross .dark-cross").css({"visibility": "visible"})
    })

    $(".search-cross").mouseout(() => {
        // Changes the clear button icon 
        $(".search-cross .light-cross").css({"visibility": "visible"})
        $(".search-cross .dark-cross").css({"visibility": "hidden"})
    })

    $(".search").focusin(() => {
        // Makes hints visible when focus the search
        $(".search-hints").css("visibility", "visible")

        // Changes color of the search when focus the search
        $(".search-panel").addClass("focused-search")

        // Animation of deployment of the hints field
        $(".search-hints").animate({height: `${$(".hint-content-items").height() < 300 ? $(".hint-content-items").height() : 300}px`}, 400)
        
        // Animation of the dividing line
        $(".hint-line").animate({width: "230px"}, 400)
    })

    $(".search").focusout(() => {
        $(".search-hints").animate({height: "0"}, 400, () => {
            $(".search-hints").css("visibility", "hidden")
            $(".search-panel").removeClass("focused-search")
        })
        $(".hint-line").animate({width: "0"}, 400)
    })
})
