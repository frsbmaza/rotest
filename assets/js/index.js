/* Javascript */
// document load event
document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    // Utilities Functions
    var selector = function(selector, areAll) {
        var all = document.querySelectorAll(selector);
        var single = document.querySelector(selector);
        return areAll ? all : single;
    };

    // Accordion 

    const buttons = document.querySelectorAll("h3")
    const contents = document.querySelectorAll(".accordion-item .content");

    const setFirstItem = () => {
        const firstHeight = contents[0].children[0].offsetHeight;
        contents[0].style.height = firstHeight + "px";
        buttons[0].className = "active";
    };
    setFirstItem();

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            const index = i;
            for (let i = 0; i < buttons.length; i++) {
                if (index !== i) {
                    buttons[i].className = "";
                    contents[i].style.height = 0;
                }
            }

            console.log(contents[index]);

            buttons[index].classList.toggle("active");
            const contentHeight = contents[index].children[0].offsetHeight;
            contents[index].style.height =
                contents[index].offsetHeight > 0 ? 0 : contentHeight + "px";
        });
    };
});

jQuery(function() {
    jQuery(".typed").typed({
        strings: ["Office", "Desk", "Staff", "Team"],
        typeSpeed: 70,
        startDelay: 800,
        backDelay: 1200,
        backSpeed: 20,
        smartBackspace: 1,
        loop: true,
        cursorChar: "|",
        contentType: 'html', // or text
        // attribute to type (null == text)
        attr: null,
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    });
});