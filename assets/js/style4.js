            $(window).scroll(function() {
                $(this).scrollTop() > 200 ? $(".back-to-top").fadeIn() : $(".back-to-top").fadeOut()
            }),
            $(".back-to-top").hide().click(function() {
                return $("html, body").animate({
                    scrollTop: 0
                }, 1e3),
                !1
            });
            //<![CDATA[
            var no_image = "https://4.bp.blogspot.com/-SKh7CYM3lB0/WZlRLgH8wII/AAAAAAAACjQ/vx5PJdQYhSo136-Wg-A633KcElrfkHNNACLcBGAs/s1600/non.png"
              , month_format = [, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
            $(document).ready(function() {
                $(".bmcarousel").owlCarousel({
                    items: 1,
                    smartSpeed: 550,
                    nav: !0,
                    navText: ["", ""],
                    loop: !0,
                    autoplay: !0,
                    autoplaySpeed: 800,
                    dots: !0,
                    mouseDrag: !1,
                    singleItem: !0,
                    animateIn: "fadeIn",
                    animateOut: "fadeOut",
                    responsiveClass: !0,
                    responsive: {
                        0: {
                            items: 1,
                            nav: !1,
                            mouseDrag: !0
                        },
                        601: {
                            items: 1,
                            nav: !0
                        }
                    }
                })
            }),
            $(document).ready(function() {
                $(".boxtestimonial").owlCarousel({
                    items: 2,
                    smartSpeed: 550,
                    loop: !1,
                    autoplay: !1,
                    autoplaySpeed: 800,
                    dots: !0,
                    responsive: {
                        0: {
                            items: 1,
                            nav: !1
                        },
                        601: {
                            items: 2
                        }
                    }
                })
            }),
            $(document).ready(function() {
                $(".customer-parnert").owlCarousel({
                    smartSpeed: 550,
                    loop: !0,
                    autoplay: !0,
                    autoplaySpeed: 800,
                    dots: !1,
                    margin: 20,
                    mouseDrag: !0,
                    responsive: {
                        0: {
                            items: 2
                        },
                        601: {
                            items: 3
                        },
                        1e3: {
                            items: 5
                        }
                    }
                })
            }),
            $(".recent-projects .HTML .widget-content").each(function() {
                var f = $(this).find("span").attr("data-label")
                  , e = $(this).find("span").attr("data-no")
                  , h = $(this).prev("h3").text()
                  , v = $(this).parent().attr("id");
                $(this).find("span").attr("data-type").match("carousel") && $.ajax({
                    url: "/feeds/posts/default/-/" + f + "?alt=json-in-script&max-results=" + e,
                    type: "get",
                    dataType: "jsonp",
                    success: function(e) {
                        for (var t = "", a = '<div class="main-carousel">', s = 0; s < e.feed.entry.length; s++) {
                            for (var n = 0; n < e.feed.entry[s].link.length; n++)
                                if ("alternate" == e.feed.entry[s].link[n].rel) {
                                    t = e.feed.entry[s].link[n].href;
                                    break
                                }
                            var r, i = e.feed.entry[s].title.$t, o = e.feed.entry[s].category[0].term, l = (e.feed.entry[s].author[0].name.$t,
                            e.feed.entry[s].published.$t), c = l.substring(0, 4), d = l.substring(5, 7), u = l.substring(8, 10), p = (month_format[parseInt(d, 10)],
                            e.feed.entry[s].content.$t), m = $("<div>").html(p);
                            r = -1 < p.indexOf("//www.youtube.com/embed/") ? e.feed.entry[s].media$thumbnail.url : -1 < p.indexOf("<img") ? m.find("img:first").attr("src") : no_image,
                            a += '<li class="carousel-item"><a class="box-image" href="' + t + '" style="background:url(' + r + ') no-repeat center center;background-size: cover"><span class="carousel-overlay"/></a><div class="carousel-content"><div class="carousel-tag"><a class="icon ' + o + '" href="/search/label/' + o + '"></a></div><h2 class="recent-title"><a href="' + t + '">' + i + '</a></h2></div><div class="clear"/></li>'
                        }
                        a += "</div>",
                        $(".recent-projects .HTML .widget-content").each(function() {
                            $(this).parent().attr("id") == v && ($(this).html(a),
                            $(this).parent().addClass("carousel"),
                            $(this).prev("h3").html('<a href="/search/label/' + f + '">' + h + "</a>"),
                            $(this).prev("h3").wrap('<div class="box-title"></div>'),
                            $(".main-carousel").owlCarousel({
                                items: 2,
                                smartSpeed: 550,
                                nav: !0,
                                navText: ["", ""],
                                loop: !0,
                                margin: 30,
                                autoplay: !1,
                                autoplaySpeed: 800,
                                dots: !1,
                                responsiveClass: !0,
                                responsive: {
                                    0: {
                                        items: 1,
                                        dots: !0,
                                        nav: !1
                                    },
                                    600: {
                                        items: 2,
                                        dots: !0,
                                        nav: !1
                                    },
                                    1e3: {
                                        items: 4,
                                        dots: !1,
                                        loop: !1
                                    }
                                }
                            }),
                            $(this).find(".box-image").each(function() {
                                $(this).attr("style", function(e, t) {
                                    return t.replace("/default.jpg", "/mqdefault.jpg")
                                }).attr("style", function(e, t) {
                                    return t.replace("s72-c", "s1600")
                                })
                            }))
                        })
                    }
                })
            }),
            $(".recent-boxes .HTML .widget-content").each(function() {
                $(this).find("span").attr("data-label");
                var e = $(this).find("span").attr("data-no")
                  , v = ($(this).prev("h3").text(),
                $(this).parent().attr("id"));
                $(this).find("span").attr("data-type").match("carousel") && $.ajax({
                    url: "/feeds/posts/default/?alt=json-in-script&max-results=" + e,
                    type: "get",
                    dataType: "jsonp",
                    success: function(e) {
                        for (var t = "", a = '<div class="main-carousel">', s = 0; s < e.feed.entry.length; s++) {
                            for (var n = 0; n < e.feed.entry[s].link.length; n++)
                                if ("alternate" == e.feed.entry[s].link[n].rel) {
                                    t = e.feed.entry[s].link[n].href;
                                    break
                                }
                            var r, i = e.feed.entry[s].title.$t, o = e.feed.entry[s].category[0].term, l = e.feed.entry[s].author[0].name.$t, c = e.feed.entry[s].published.$t, d = c.substring(0, 4), u = c.substring(5, 7), p = c.substring(8, 10), m = month_format[parseInt(u, 10)] + " " + p + ", " + d, f = e.feed.entry[s].content.$t, h = $("<div>").html(f);
                            r = -1 < f.indexOf("//www.youtube.com/embed/") ? e.feed.entry[s].media$thumbnail.url : -1 < f.indexOf("<img") ? h.find("img:first").attr("src") : no_image,
                            a += '<li class="carousel-item"><a class="box-image" href="' + t + '" style="background:url(' + r + ') no-repeat center center;background-size: cover"><span class="carousel-overlay"/></a><div class="carousel-tag"><a href="/search/label/' + o + '">' + o + '</a></div><div class="carousel-content text-center"><span class="recent-date">' + m + '</span><span class="recent-read"><a href="' + t + '">Read Article</a></span> <h2 class="recent-title"><a href="' + t + '">' + i + '</a></h2></div><span class="recent-author text-center">Posted By: ' + l + '</span><div class="clr"/></li>'
                        }
                        a += "</div>",
                        $(".recent-boxes .HTML .widget-content").each(function() {
                            $(this).parent().attr("id") == v && ($(this).html(a),
                            $(this).parent().addClass("carousel"),
                            $(this).prev("h3").wrap('<div class="box-title"></div>'),
                            $(".main-carousel").owlCarousel({
                                items: 3,
                                smartSpeed: 550,
                                nav: !0,
                                navText: ["", ""],
                                loop: !0,
                                margin: 30,
                                autoplay: !0,
                                autoplaySpeed: 800,
                                dots: !1,
                                responsiveClass: !0,
                                responsive: {
                                    0: {
                                        items: 1,
                                        dots: !0,
                                        nav: !1
                                    },
                                    600: {
                                        items: 2,
                                        dots: !0,
                                        nav: !1
                                    },
                                    1e3: {
                                        items: 3,
                                        dots: !1,
                                        loop: !1
                                    }
                                }
                            }),
                            $(this).find(".box-image").each(function() {
                                $(this).attr("style", function(e, t) {
                                    return t.replace("/default.jpg", "/mqdefault.jpg")
                                }).attr("style", function(e, t) {
                                    return t.replace("s72-c", "s1600")
                                })
                            }))
                        })
                    }
                })
            });

            "use strict";
            $(function() {
                $("#load-grid").each(function() {
                    var d = $(this)
                      , a = d.data("load");
                    a && $("#load-grid").show(),
                    $("#load-grid").on("click", function(d) {
                        $("#load-grid").hide(),
                        $.ajax({
                            url: a,
                            success: function(d) {
                                var o = $(d).find(".bxposts");
                                o.find(".halaman-indeks").addClass("post-animated post-fadeInUp"),
                                $(".bxposts").append(o.html()),
                                a = $(d).find("#load-grid").data("load"),
                                a ? $("#load-grid").show() : ($("#load-grid").hide(),
                                $("#blog-pager .endmore").addClass("show"))
                            },
                            beforeSend: function() {
                                $("#blog-pager .loading").show()
                            },
                            complete: function() {
                                $("#blog-pager .loading").hide()
                            }
                        }),
                        d.preventDefault()
                    })
                })
            });

            //script to create sticky header 
            "use strict";
            function createSticky(e) {
                if ("undefined" != typeof e) {
                    var t = e.offset().top + 50
                      , c = jQuery(window);
                    c.on("scroll", function() {
                        c.scrollTop() > t ? e.addClass("stickyhead") : e.removeClass("stickyhead")
                    })
                }
            }
            jQuery(function() {
                createSticky(jQuery("#sticky-wrap"))
            });

            // youtube
            "use strict";
            !function(o) {
                "use strict";
                var e = o(document)
                  , u = function(o) {
                    if (o.match(/(youtube.com)/))
                        var e = "v="
                          , u = 1;
                    else if (o.match(/(youtu.be)/) || o.match(/(vimeo.com\/)+[0-9]/))
                        var e = "/"
                          , u = 3;
                    else if (o.match(/(vimeo.com\/)+[a-zA-Z]/))
                        var e = "/"
                          , u = 5;
                    return o = o.split(e)[u]
                };
                o.fn.YouTubePopUp = function(a) {
                    var p = o.extend({
                        autoplay: 1
                    }, a)
                      , t = o(this);
                    t.on("click", function(a) {
                        a.preventDefault();
                        var i = t.attr("href")
                          , c = u(i)
                          , n = c.replace(/(&)+(.*)/, "");
                        if (i.match(/(youtu.be)/) || i.match(/(youtube.com)/))
                            var m = "https://www.youtube.com/embed/" + n + "?autoplay=" + p.autoplay;
                        else if (i.match(/(vimeo.com\/)+[0-9]/) || i.match(/(vimeo.com\/)+[a-zA-Z]/))
                            var m = "https://player.vimeo.com/video/" + n + "?autoplay=" + p.autoplay;
                        var s = '<div class="YouTubePopUp-Wrap YouTubePopUp-animation"><div class="YouTubePopUp-Content"><span class="YouTubePopUp-Close"></span><iframe src="' + m + '" allowfullscreen></iframe></div></div>';
                        o("body").append(s),
                        o(".YouTubePopUp-Wrap").hasClass("YouTubePopUp-animation") && setTimeout(function() {
                            o(".YouTubePopUp-Wrap").removeClass("YouTubePopUp-animation")
                        }, 600),
                        e.on("click", ".YouTubePopUp-Wrap, .YouTubePopUp-Close", function() {
                            o(".YouTubePopUp-Wrap").addClass("YouTubePopUp-Hide").delay(515).queue(function() {
                                o(this).remove()
                            })
                        })
                    }),
                    e.on("keyup", function(e) {
                        27 == e.keyCode && o(".YouTubePopUp-Wrap:visible").click()
                    })
                }
            }(jQuery),
            $(function() {
                $(".js-modal-video").YouTubePopUp()
            });

            // accordion
            "use strict";
            var accordion = function() {
                var o = $(".js-accordion")
                  , c = o.find(".js-accordion-header")
                  , e = ($(".js-accordion-item"),
                {
                    speed: 400,
                    oneOpen: !1
                });
                return {
                    init: function(o) {
                        c.on("click", function() {
                            accordion.toggle($(this))
                        }),
                        $.extend(e, o),
                        e.oneOpen && $(".js-accordion-item.active").length > 1 && $(".js-accordion-item.active:not(:first)").removeClass("active"),
                        $(".js-accordion-item.active").find("> .js-accordion-body").show()
                    },
                    toggle: function(o) {
                        e.oneOpen && o[0] != o.closest(".js-accordion").find("> .js-accordion-item.active > .js-accordion-header")[0] && o.closest(".js-accordion").find("> .js-accordion-item").removeClass("active").find(".js-accordion-body").slideUp(),
                        o.closest(".js-accordion-item").toggleClass("active"),
                        o.next().stop().slideToggle(e.speed)
                    }
                }
            }();
            $(document).ready(function() {
                accordion.init({
                    speed: 300,
                    oneOpen: !0
                })
            });
            $("#toTop").click(function() {
                $("html,body").animate({
                    scrollTop: 0
                }, 500);
            });

            // Search
            "use strict";
            function LMsearchForm() {
                for (var t = document.getElementById("searchcontainer"), n = document.getElementById("search-terms"), e = document.querySelectorAll(".iconsearch-label"), c = 0; c < e.length; c++)
                    e[c].addEventListener("click", function(e) {
                        t.classList.toggle("opensearch"),
                        t.classList.contains("opensearch") || (n.blur(),
                        e.preventDefault()),
                        e.stopPropagation()
                    }, !1);
                n.addEventListener("click", function(e) {
                    e.stopPropagation()
                }, !1),
                document.addEventListener("click", function(e) {
                    t.classList.remove("opensearch"),
                    n.blur(),
                    e.stopPropagation()
                }, !1),
                document.addEventListener("keydown", function(e) {
                    "Escape" == e.key && (t.classList.remove("opensearch"),
                    n.blur())
                })
            }
            LMsearchForm();

            "use strict";
            $(function() {
                $("#main-menu").each(function() {
                    for (var e = $(this).find(".LinkList ul > li").children("a"), a = e.length, n = 0; a > n; n++) {
                        var t = e.eq(n)
                          , s = t.text();
                        if ("_" !== s.charAt(0)) {
                            var i = e.eq(n + 1)
                              , l = i.text();
                            if ("_" === l.charAt(0)) {
                                var u = t.parent();
                                u.append('<ul class="sub-menu m-sub"/>')
                            }
                        }
                        "_" === s.charAt(0) && (t.text(s.replace("_", "")),
                        t.parent().appendTo(u.children(".sub-menu")))
                    }
                    for (n = 0; a > n; n++)
                        t = e.eq(n),
                        s = t.text(),
                        "_" !== s.charAt(0) && (i = e.eq(n + 1),
                        l = i.text(),
                        "_" === l.charAt(0) && (u = t.parent(),
                        u.append('<ul class="sub-menu2 m-sub"/>'))),
                        "_" === s.charAt(0) && (t.text(s.replace("_", "")),
                        t.parent().appendTo(u.children(".sub-menu2")));
                    $("#main-menu ul li ul").parent("li").addClass("has-sub"),
                    $("#main-menu .widget").addClass("show-menu")
                }),
                $("#main-menu-nav").clone().appendTo(".mobile-menu"),
                $(".mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),
                $(".mobile-menu ul > li a").each(function() {
                    var e = $(this)
                      , a = e.attr("href").trim()
                      , n = a.toLowerCase()
                      , t = a.split("/")
                      , s = t[0];
                    n.match("mega-menu") && e.attr("href", "/search/label/" + s + "?&max-results=" + postPerPage)
                }),
                $(".slide-menu-toggle").on("click", function() {
                    $("body").toggleClass("nav-active")
                }),
                $(".mobile-menu ul li .submenu-toggle").on("click", function(e) {
                    $(this).parent().hasClass("has-sub") && (e.preventDefault(),
                    $(this).parent().hasClass("show") ? $(this).parent().removeClass("show").find("> .m-sub").slideToggle(170) : $(this).parent().addClass("show").children(".m-sub").slideToggle(170))
                }),
                $("#main-menu #main-menu-nav li").each(function() {
                    var e = $(this)
                      , a = e.find("a").attr("href").trim()
                      , n = e
                      , t = a.toLowerCase()
                      , s = a.split("/")
                      , i = s[0];
                    b(n, t, 5, i)
                })
            });

            "use strict";
            function toggleMenu() {
                overlay.classList.toggle("active"),
                menu.classList.toggle("active")
            }
            var overlay = document.querySelector(".overlay")
              , menu = document.querySelector(".menu");
            $(".sidebar-dropdown > a").click(function() {
                $(".sidebar-submenu").slideUp(200),
                $(this).parent().hasClass("active") ? ($(".sidebar-dropdown").removeClass("active"),
                $(this).parent().removeClass("active")) : ($(".sidebar-dropdown").removeClass("active"),
                $(this).next(".sidebar-submenu").slideDown(200),
                $(this).parent().addClass("active"))
            });

            !function(t) {
                "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
            }(function(t) {
                function e(t, e) {
                    return t.toFixed(e.decimals)
                }
                var o = function(e, i) {
                    this.$element = t(e),
                    this.options = t.extend({}, o.DEFAULTS, this.dataOptions(), i),
                    this.init()
                };
                o.DEFAULTS = {
                    from: 0,
                    to: 0,
                    speed: 1e3,
                    refreshInterval: 100,
                    decimals: 0,
                    formatter: e,
                    onUpdate: null,
                    onComplete: null
                },
                o.prototype.init = function() {
                    this.value = this.options.from,
                    this.loops = Math.ceil(this.options.speed / this.options.refreshInterval),
                    this.loopCount = 0,
                    this.increment = (this.options.to - this.options.from) / this.loops
                }
                ,
                o.prototype.dataOptions = function() {
                    var t = {
                        from: this.$element.data("from"),
                        to: this.$element.data("to"),
                        speed: this.$element.data("speed"),
                        refreshInterval: this.$element.data("refresh-interval"),
                        decimals: this.$element.data("decimals")
                    }
                      , e = Object.keys(t);
                    for (var o in e) {
                        var i = e[o];
                        "undefined" == typeof t[i] && delete t[i]
                    }
                    return t
                }
                ,
                o.prototype.update = function() {
                    this.value += this.increment,
                    this.loopCount++,
                    this.render(),
                    "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value),
                    this.loopCount >= this.loops && (clearInterval(this.interval),
                    this.value = this.options.to,
                    "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
                }
                ,
                o.prototype.render = function() {
                    var t = this.options.formatter.call(this.$element, this.value, this.options);
                    this.$element.text(t)
                }
                ,
                o.prototype.restart = function() {
                    this.stop(),
                    this.init(),
                    this.start()
                }
                ,
                o.prototype.start = function() {
                    this.stop(),
                    this.render(),
                    this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
                }
                ,
                o.prototype.stop = function() {
                    this.interval && clearInterval(this.interval)
                }
                ,
                o.prototype.toggle = function() {
                    this.interval ? this.stop() : this.start()
                }
                ,
                t.fn.countTo = function(e) {
                    return this.each(function() {
                        var i = t(this)
                          , n = i.data("countTo")
                          , s = !n || "object" == typeof e
                          , r = "object" == typeof e ? e : {}
                          , a = "string" == typeof e ? e : "start";
                        s && (n && n.stop(),
                        i.data("countTo", n = new o(this,r))),
                        n[a].call(n)
                    })
                }
            });

            $(".counter-timer").each(function() {
                var number = $(this).attr("data-to");
                $(this).countTo({
                    from: 0,
                    to: number,
                    speed: 1500,
                    refreshInterval: 10,
                    formatter: function(number, options) {
                        number = number.toFixed(options.decimals);
                        number = number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        return number;
                    }
                });
            });

            //]]>