//<![CDATA[
    "use strict";
    function loadCSS(e, t, o) {
        "use strict";
        var i = window.document.createElement("link")
          , s = t || window.document.getElementsByTagName("script")[0];
        i.rel = "stylesheet",
        i.href = e,
        i.media = "only x",
        s.parentNode.insertBefore(i, s),
        setTimeout(function() {
            i.media = o || "all"
        })
    }
    loadCSS("https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css");
    //]]>