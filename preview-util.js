var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
    return typeof A
}
: function(A) {
    return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
}
  , game_step = ((o => {
    function i() {
        return new RegExp(/(.*?)\.?([^\.]*?)\.(gl|com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/)
    }
    function a(A, e) {
        var t = A.charAt(0)
          , e = e.split(t);
        return t === A ? e : e[(A = parseInt(A.substring(1), 10)) < 0 ? e.length + A : A - 1]
    }
    function r(A, e) {
        for (var t, n = A.charAt(0), o = e.split("&"), i = [], a = {}, r = A.substring(1), c = 0, s = o.length; c < s; c++)
            if ("" !== (i = (i = o[c].match(/(.*?)=(.*)/)) || [o[c], o[c], ""])[1].replace(/\s/g, "")) {
                if (i[2] = (t = i[2] || "",
                decodeURIComponent(t.replace(/\+/g, " "))),
                r === i[1])
                    return i[2];
                (t = i[1].match(/(.*)\[([0-9]+)\]/)) ? (a[t[1]] = a[t[1]] || [],
                a[t[1]][t[2]] = i[2]) : a[i[1]] = i[2]
            }
        return n === A ? a : a[r]
    }
    o.MW_URL = function(A, e) {
        var t, n = {};
        if ("tld?" === A)
            return i();
        if (e = e || o.location.toString(),
        !A)
            return e;
        if (A = A.toString(),
        t = e.match(/^mailto:([^\/].+)/))
            n.protocol = "mailto",
            n.email = t[1];
        else {
            if ((t = (e = (t = e.match(/(.*?)\/#\!(.*)/)) ? t[1] + t[2] : e).match(/(.*?)#(.*)/)) && (n.hash = t[2],
            e = t[1]),
            n.hash && A.match(/^#/))
                return r(A, n.hash);
            if ((t = e.match(/(.*?)\?(.*)/)) && (n.query = t[2],
            e = t[1]),
            n.query && A.match(/^\?/))
                return r(A, n.query);
            if ((t = e.match(/(.*?)\:?\/\/(.*)/)) && (n.protocol = t[1].toLowerCase(),
            e = t[2]),
            (t = e.match(/(.*?)(\/.*)/)) && (n.path = t[2],
            e = t[1]),
            n.path = (n.path || "").replace(/^([^\/])/, "/$1"),
            (A = A.match(/^[\-0-9]+$/) ? A.replace(/^([^\/])/, "/$1") : A).match(/^\//))
                return a(A, n.path.substring(1));
            if ((t = (t = a("/-1", n.path.substring(1))) && t.match(/(.*?)\.([^.]+)$/)) && (n.file = t[0],
            n.filename = t[1],
            n.fileext = t[2]),
            (t = e.match(/(.*)\:([0-9]+)$/)) && (n.port = t[2],
            e = t[1]),
            (t = e.match(/(.*?)@(.*)/)) && (n.auth = t[1],
            e = t[2]),
            n.auth && (t = n.auth.match(/(.*)\:(.*)/),
            n.user = t ? t[1] : n.auth,
            n.pass = t ? t[2] : void 0),
            n.hostname = e.toLowerCase(),
            "." === A.charAt(0))
                return a(A, n.hostname);
            i() && (t = n.hostname.match(i())) && (n.tld = t[3],
            n.domain = t[2] ? t[2] + "." + t[3] : void 0,
            n.sub = t[1] || void 0),
            n.port = n.port || ("https" === n.protocol ? "443" : "80"),
            n.protocol = n.protocol || ("443" === n.port ? "https" : "http")
        }
        return A in n ? n[A] : "{}" === A ? n : void 0
    }
}
)(window, document),
(t => {
    t.MW_GET_QUERY_STRING = function(A) {
        var e = t.location.search.substr(1);
        return 0 < (e = new URLSearchParams(e).getAll(A)).length && 1 === e.length ? e.map(function(A) {
            return decodeURIComponent(A)
        })[0] : 1 < e.length ? e.map(function(A) {
            return decodeURIComponent(A)
        }) : null
    }
}
)(window, document),
(t => {
    t.MW_GET_QUERY_STRING = function(A) {
        var e = t.location.search.substr(1);
        return 0 < (e = new URLSearchParams(e).getAll(A)).length && 1 === e.length ? e.map(function(A) {
            return decodeURIComponent(A)
        })[0] : 1 < e.length ? e.map(function(A) {
            return decodeURIComponent(A)
        }) : null
    }
}
)(window, document),
window.MW_ITA_COVER = {
    mapVideoNodes: {},
    isPSVideo: function() {
        var A = window.UIRoot && window.UIRoot.getChild("gamePlay");
        return !!(A && A.VideosManager && A.VideosManager.mapVideoNodes && "{}" !== JSON.stringify(A.VideosManager.mapVideoNodes)) && (this.mapVideoNodes = A.VideosManager.mapVideoNodes,
        !0)
    },
    reloadAllPSVideo: function() {
        for (var A in this.mapVideoNodes)
            if (this.mapVideoNodes[A])
                for (var e in this.mapVideoNodes[A])
                    this.reloadPSVideo(e)
    },
    reloadPSVideo: function(A) {
        var e = window.qc_game && window.qc_game.nodePool
          , e = e && e.find(A);
        e && e.Video && e.Video.loadVideo()
    },
    isWechat: function() {
        return -1 < window.navigator.userAgent.toLowerCase().indexOf("micromessenger")
    },
    isItaVideo: function() {
        return !!(1 === Number(window.MW_GET_QUERY_STRING("itavideo")) || this.isPSVideo() && this.isWechat())
    },
    addCover: function() {
        var A = document.createElement("div")
          , e = document.createElement("style")
          , t = (A.innerHTML = '<div class="click-layer"><div class="click-layer-hand"><img src="data:image/png;base64,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" alt=""><div class="tips">Click to play</div></div></div>',
        e.innerHTML = ".click-layer{position:fixed;top:0;left:0;bottom:0;right:0;z-index:999999;opacity:.8;background:-moz-linear-gradient(-45deg,rgba(250,190,80,0.8) 0,rgba(249,129,59,0.8) 100%);background:-webkit-linear-gradient(-45deg,rgba(250,190,80,0.8) 0,rgba(249,129,59,0.8) 100%);background:linear-gradient(135deg,rgba(250,190,80,0.8) 0,rgba(249,129,59,0.8) 100%)}.click-layer-hand{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center;color:#fff;font-size:30px;font-weight:700}@-webkit-keyframes guideMove{0%{opacity:0;-webkit-transform:translateY(0) translateZ(10px);transform:translateY(0)}20%{opacity:.6;-webkit-transform:translateY(-5px) translateZ(10px);transform:translateY(-5px)}50%{opacity:.8;-webkit-transform:translateY(-10px) translateZ(10px);transform:translateY(-10px)}70%{opacity:.6;-webkit-transform:translateY(-15px) translateZ(10px);transform:translateY(-15px)}100%{opacity:0;-webkit-transform:translateY(-20px) translateZ(10px);transform:translateY(-20px)}}@-moz-keyframes guideMove{0%{opacity:0;-moz-transform:translateY(0) translateZ(10px);transform:translateY(0)}20%{opacity:.6;-moz-transform:translateY(-5px) translateZ(10px);transform:translateY(-5px)}50%{opacity:.8;-moz-transform:translateY(-10px) translateZ(10px);transform:translateY(-10px)}70%{opacity:.6;-moz-transform:translateY(-15px) translateZ(10px);transform:translateY(-15px)}100%{opacity:0;-moz-transform:translateY(-20px) translateZ(10px);transform:translateY(-20px)}}@keyframes guideMove{0%{opacity:0;transform:translateY(0) translateZ(10px)}20%{opacity:.6;transform:translateY(-5px) translateZ(10px)}50%{opacity:.8;transform:translateY(-10px) translateZ(10px)}70%{opacity:.6;transform:translateY(-15px) translateZ(10px)}100%{opacity:0;transform:translateY(-20px) translateZ(10px)}}.click-layer-hand img{position:relative;display:block;margin:0 auto;animation:guideMove 1.5s linear infinite;-webkit-animation:guideMove 1.5s linear infinite}",
        document.documentElement.appendChild(A),
        document.documentElement.appendChild(e),
        this);
        document.querySelector(".click-layer").addEventListener("click", function() {
            var A;
            t.isPSVideo() && t.isWechat() && t.reloadAllPSVideo(),
            window.showView ? (A = new CustomEvent("webviewshow",{
                bubbles: !0,
                cancelable: !0,
                composed: !0
            }),
            console.log("发送webviewshow事件"),
            document.dispatchEvent(A)) : window.gameStart(),
            document.querySelector(".click-layer").remove()
        })
    }
},
(A => {
    function o(A) {
        function e(A, e) {
            var t = A;
            "" === (A = (A = e).replace(/\[|(].)|\]/g, ".").split("."))[A.length - 1] && A.pop();
            for (var n, o = 0, i = (e = A).length; o < i; o++) {
                if (o === i - 1)
                    return t[e[o]];
                if (!Array.isArray(t[e[o]]) && (n = t[e[o]],
                "[object Object]" !== Object.prototype.toString.call(n)))
                    return;
                t = t[e[o]]
            }
        }
        var t;
        return (t = {
            configuration: function(A) {
                var e;
                this.conf = {
                    locale: ("string" == typeof A.locale ? A.locale : navigator.language).toLowerCase(),
                    fallbackLocale: A.fallback_locale || "en",
                    languages: A.languages
                },
                this.conf.locale = (e = this.conf.locale,
                A = Object.keys(A.languages),
                e = e.toLowerCase(),
                !A.some(function(A) {
                    return A.toLowerCase() === e
                }) && e.indexOf("-") ? (console.warn("没有找到指定的语言" + e + "，但是找到了该语言的父集语言，将使用父集语言" + e.split("-")[0]),
                e.split("-")[0]) : e)
            },
            get: function(A) {
                return e(this.conf.languages, this.conf.locale + "." + A) ? e(this.conf.languages, this.conf.locale + "." + A) : (console.warn("没有找到" + this.conf.locale + "语言下的" + A + "，将使用兜底语言的" + A),
                e(this.conf.languages, this.conf.fallbackLocale + "." + A) ? e(this.conf.languages, this.conf.fallbackLocale + "." + A) : void console.warn("没有找到（当前语言+兜底语言）当前语言下的" + A))
            }
        }).configuration(A),
        t
    }
    var e;
    function i(A) {
        return "[object Object]" === Object.prototype.toString.call(A)
    }
    function a(A) {
        try {
            return JSON.parse(A)
        } catch (A) {
            return console.error(A),
            null
        }
    }
    (e = A.UF || {}).extend = function(A, e) {
        var t = arguments.length
          , n = A || {};
        "object" !== (void 0 === n ? "undefined" : _typeof(n)) && "function" != typeof n && (n = {}),
        1 === t && (n = this,
        o--);
        for (var o = 1; o < t; o++) {
            var i, a = arguments[o];
            for (i in a)
                Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i])
        }
        return n
    }
    ,
    A.UF || (A.UF = e),
    i(A.MW_CONFIG) && !A.MW_CONFIG_I18N && (A.MW_CONFIG_I18N = (e => {
        var t, n;
        if (i(e))
            return "string" != typeof e.fallback_locale ? {
                get: function(A) {
                    return e[A]
                },
                getAppName: function() {
                    return e.app_name || ""
                },
                getAppDesc: function() {
                    return e.app_desc || ""
                },
                getAppIcon: function() {
                    return e.app_icon || ""
                }
            } : i((e = A.UF.extend(e, {
                languages: a(e.languages) || {}
            })).languages) ? (t = o({
                fallback_locale: e.fallback_locale,
                languages: e.languages,
                locale: e.locale
            }),
            n = a(e.app_icons) || {},
            {
                get: t.get.bind(t),
                getAppName: function() {
                    return t.get("app_name")
                },
                getAppDesc: function() {
                    return t.get("app_desc")
                },
                getAppIcon: function() {
                    var A = t.get("app_icon");
                    if (A && n[A])
                        return n[A];
                    console.warn("没有找到图标")
                }
            }) : void 0;
        console.error("conf 必须是一个对象")
    }
    )(A.MW_CONFIG))
}
)(window, document),
(t => {
    t.MW_GET_QUERY_STRING = function(A) {
        var e = t.location.search.substr(1);
        return 0 < (e = new URLSearchParams(e).getAll(A)).length && 1 === e.length ? e.map(function(A) {
            return decodeURIComponent(A)
        })[0] : 1 < e.length ? e.map(function(A) {
            return decodeURIComponent(A)
        }) : null
    }
}
)(window, document),
window.MW_LOADING = {
    interval: 38.947,
    index: 0,
    stopTimer: !1,
    getAssetsUrl: function(A) {
        return 1 === Number(window.MW_GET_QUERY_STRING("mw_test")) ? "https://jssdk-test.rayjump.com/m-sdk-util/dist/assets/" + A : "https://play.rayjump.com/util/assets/" + A
    },
    assets: "",
    setHtml: function() {
        var A = ""
          , e = ""
          , t = "";
        if (window.MW_CONFIG)
            try {
                e = window.MW_CONFIG_I18N.getAppName(),
                A = window.MW_CONFIG_I18N.getAppIcon()
            } catch (A) {
                console.log(A)
            }
        return t = '<img id="loading-icon" class="loading-pic" src="' + this.assets + '" alt="">',
        e && A && (t += '<div class="app-info-wrap"><div class="app-info"><div class="app-icon"><img src="' + A + '" alt=""></div> <div class="app-name">' + e + "</div></div></div>"),
        t
    },
    addPlaceholder: function() {
        var A = document.createElement("div");
        A.id = "loader-placeholder",
        A.className = "loader-placeholder-wrap",
        window.document.body.appendChild(A)
    },
    addLoading: function() {
        var A = this;
        A.addPlaceholder(),
        document.querySelector("#loader-placeholder").innerHTML = A.setHtml(),
        A.addScaleClass(),
        window.addEventListener("resize", function() {
            A.setLoadingPosition()
        }),
        A.setLoadingPosition()
    },
    setWithoutLogoMode: function() {
        this.assets = this.getAssetsUrl("loading-rep.gif"),
        this.newassets = this.getAssetsUrl("loading-n-rep.gif");
        var A = document.querySelector("#mtg-package-loading .mw-loading-pic");
        A && (A.style.display = "none"),
        function A() {
            var e = document.querySelector("#MV_logo");
            console.log(e, "is logo"),
            e ? e.style.display = "none" : setTimeout(function() {
                A()
            }, 100)
        }(),
        A && (A.src = this.newassets,
        A.className = "mw-loading-pic show")
    },
    getScale: function() {
        return document.getElementsByTagName("meta") && document.getElementsByTagName("meta").viewport && document.getElementsByTagName("meta").viewport.content && -1 !== document.getElementsByTagName("meta").viewport.content.replace(/ /g, "").indexOf("initial-scale=0.5") ? 2 : 1
    },
    isPortrait: function() {
        var A = "portrait";
        return "orientation"in window && "onorientationchange"in window && window.self === window.top ? (180 !== orientation && 0 !== orientation || (A = "portrait"),
        90 !== orientation && -90 !== orientation || (A = "landscape")) : A = window.innerWidth > window.innerHeight ? "landscape" : "portrait",
        "portrait" === A
    },
    addStyle: function() {
        var A = document.createElement("style");
        A.type = "text/css",
        A.innerHTML = '@charset "UTF-8";.loader-placeholder-wrap{position:fixed;top:0;bottom:0;left:0;right:0;z-index:10000;background:#000;font-family:Arial,sans-serif}.loader-placeholder-wrap .app-info-wrap{position:absolute;bottom:5%;background:rgba(255,255,255,0.6);border-radius:10px;left:4%;right:4%;height:65px;line-height:65px;text-align:center}.loader-placeholder-wrap .app-icon{float:left}.loader-placeholder-wrap .app-icon img{margin-top:10px;margin-left:10px;width:45px;height:45px;border-radius:27.778%;float:left}.loader-placeholder-wrap .app-name{padding-left:15px;padding-right:15px;overflow:hidden;font-size:16px;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis;color:#000}.loader-placeholder-wrap .app-info{overflow:hidden;width:auto;max-width:100%;display:inline-block}.loading_forcePortrait .app-info-wrap{-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);margin-top:-65px}.loading_forcePortrait .loading-pic{top:50%;left:auto;right:10%;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}@media only screen and (orientation:portrait){.loading-pic{position:absolute;top:20%;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:55%}}@media only screen and (orientation:landscape){.app-info-wrap{left:10%;right:10%;bottom:5%;text-align:center}.app-info{width:auto;max-width:100%;display:inline-block}.loading-pic{position:absolute;top:15%;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:30%;max-width:380px}}body.scale-sm .app-info-wrap{height:130px;line-height:130px;border-radius:20px}body.scale-sm .app-name{font-size:32px;padding-left:30px;padding-right:30px}body.scale-sm .app-icon img{margin-top:20px;margin-left:20px;width:90px;height:90px}body.scale-sm .loading_forcePortrait .app-info-wrap{margin-top:-130px}#__vconsole{display:none!important}#mtg-package-loading .mw-loading-pic.show{display:block!important}',
        window.document.head.appendChild(A)
    },
    addClass: function(A, e) {
        new RegExp("" + e).test(A.className) || (A.className += " " + e)
    },
    removeClass: function(A, e) {
        e = new RegExp("" + e);
        e.test(A.className) && (A.className = A.className.replace(e, ""))
    },
    addScaleClass: function() {
        2 === this.getScale() && this.addClass(document.body, "scale-sm")
    },
    setLoadingPosition: function() {
        document.querySelector("#loader-placeholder") && (window.MW_CONFIG && window.MW_CONFIG.alway_landscape && this.isPortrait() ? this.setForcePortrait() : this.removeForcePortrait())
    },
    setForcePortrait: function() {
        var A = document.querySelector("#loader-placeholder")
          , e = window.innerHeight
          , t = document.querySelector("#loader-placeholder .app-info-wrap")
          , n = document.querySelector("#loader-placeholder .loading-pic");
        t && (t.style.width = .8 * e + "px",
        t.style.top = .1 * e + "px"),
        n && (n.style.marginTop = "-" + n.offsetWidth / 2 + "px"),
        this.addClass(A, "loading_forcePortrait")
    },
    removeForcePortrait: function() {
        var A = document.querySelector("#loader-placeholder")
          , A = (this.removeClass(A, "loading_forcePortrait"),
        document.querySelector("#loader-placeholder .app-info-wrap"))
          , e = document.querySelector("#loader-placeholder .loading-pic");
        A && A.removeAttribute("style"),
        e && e.removeAttribute("style")
    },
    init: function() {
        var A = this;
        this.assets = this.getAssetsUrl("loading.gif"),
        A.addStyle(),
        A.checkIsWithoutLogo() && A.setWithoutLogoMode(),
        document.querySelector("#mtg-package-loading") || A.addLoading(),
        window.MW_CONFIG && "dsp" === window.MW_CONFIG.channel && window.addEventListener("load", function() {
            A.removeLoading()
        })
    },
    checkIsWithoutLogo: function() {
        return console.log(Number(window.MW_GET_QUERY_STRING("n_logo"))),
        0 == window.MW_GET_QUERY_STRING("n_logo")
    },
    removeLoading: function() {
        var A = document.querySelector("#loader-placeholder");
        A && (A.style.display = "none"),
        this.stopTimer = !0
    }
},
( () => {
    console.log("预览组件监听 window message 事件");
    var e = "function" == typeof window.forceMuted
      , t = null;
    function n(A) {
        "stop" === A.action && (e ? window.forceMuted(!0) : (t && clearInterval(t),
        t = setInterval(function() {
            "function" == typeof window.stopAllSound && window.stopAllSound()
        }, 100))),
        "recovery" === A.action && (e ? window.forceMuted(!1) : (t && clearInterval(t),
        "function" == typeof window.recoveryAllSound && window.recoveryAllSound()))
    }
    window.addEventListener("message", function(A) {
        "previewer" === (A = A.data || {}).target && 3 === (A = A.data).type && n(A)
    })
}
)(),
( () => {
    function A(A) {
        function r(A, e) {
            return A << e | A >>> 32 - e
        }
        function c(A, e) {
            var t = 2147483648 & A
              , n = 2147483648 & e
              , o = 1073741824 & A
              , i = 1073741824 & e
              , A = (1073741823 & A) + (1073741823 & e);
            return o & i ? 2147483648 ^ A ^ t ^ n : o | i ? 1073741824 & A ? 3221225472 ^ A ^ t ^ n : 1073741824 ^ A ^ t ^ n : A ^ t ^ n
        }
        function e(A, e, t, n, o, i, a) {
            return A = c(A, c(c(e & t | ~e & n, o), a)),
            c(r(A, i), e)
        }
        function t(A, e, t, n, o, i, a) {
            return A = c(A, c(c(e & n | t & ~n, o), a)),
            c(r(A, i), e)
        }
        function n(A, e, t, n, o, i, a) {
            return A = c(A, c(c(e ^ t ^ n, o), a)),
            c(r(A, i), e)
        }
        function o(A, e, t, n, o, i, a) {
            return A = c(A, c(c(t ^ (e | ~n), o), a)),
            c(r(A, i), e)
        }
        function i(A) {
            for (var e = "", t = "", n = 0; n <= 3; n++)
                e += (t = "0" + (A >>> 8 * n & 255).toString(16)).substr(t.length - 2, 2);
            return e
        }
        Array();
        for (var a, s, d, l, w = (A => {
            for (var e, t = A.length, n = 16 * (1 + ((n = t + 8) - n % 64) / 64), o = Array(n - 1), i = 0, a = 0; a < t; )
                i = a % 4 * 8,
                o[e = (a - a % 4) / 4] = o[e] | A.charCodeAt(a) << i,
                a++;
            return o[e = (a - a % 4) / 4] = o[e] | 128 << (i = a % 4 * 8),
            o[n - 2] = t << 3,
            o[n - 1] = t >>> 29,
            o
        }
        )(A = (A => {
            A = A.replace(/\r\n/g, "\n");
            for (var e = "", t = 0; t < A.length; t++) {
                var n = A.charCodeAt(t);
                n < 128 ? e += String.fromCharCode(n) : e = 127 < n && n < 2048 ? (e += String.fromCharCode(n >> 6 | 192)) + String.fromCharCode(63 & n | 128) : (e = (e += String.fromCharCode(n >> 12 | 224)) + String.fromCharCode(n >> 6 & 63 | 128)) + String.fromCharCode(63 & n | 128)
            }
            return e
        }
        )(A)), h = 1732584193, g = 4023233417, I = 2562383102, p = 271733878, E = 0; E < w.length; E += 16)
            h = e(a = h, s = g, d = I, l = p, w[E + 0], 7, 3614090360),
            p = e(p, h, g, I, w[E + 1], 12, 3905402710),
            I = e(I, p, h, g, w[E + 2], 17, 606105819),
            g = e(g, I, p, h, w[E + 3], 22, 3250441966),
            h = e(h, g, I, p, w[E + 4], 7, 4118548399),
            p = e(p, h, g, I, w[E + 5], 12, 1200080426),
            I = e(I, p, h, g, w[E + 6], 17, 2821735955),
            g = e(g, I, p, h, w[E + 7], 22, 4249261313),
            h = e(h, g, I, p, w[E + 8], 7, 1770035416),
            p = e(p, h, g, I, w[E + 9], 12, 2336552879),
            I = e(I, p, h, g, w[E + 10], 17, 4294925233),
            g = e(g, I, p, h, w[E + 11], 22, 2304563134),
            h = e(h, g, I, p, w[E + 12], 7, 1804603682),
            p = e(p, h, g, I, w[E + 13], 12, 4254626195),
            I = e(I, p, h, g, w[E + 14], 17, 2792965006),
            h = t(h, g = e(g, I, p, h, w[E + 15], 22, 1236535329), I, p, w[E + 1], 5, 4129170786),
            p = t(p, h, g, I, w[E + 6], 9, 3225465664),
            I = t(I, p, h, g, w[E + 11], 14, 643717713),
            g = t(g, I, p, h, w[E + 0], 20, 3921069994),
            h = t(h, g, I, p, w[E + 5], 5, 3593408605),
            p = t(p, h, g, I, w[E + 10], 9, 38016083),
            I = t(I, p, h, g, w[E + 15], 14, 3634488961),
            g = t(g, I, p, h, w[E + 4], 20, 3889429448),
            h = t(h, g, I, p, w[E + 9], 5, 568446438),
            p = t(p, h, g, I, w[E + 14], 9, 3275163606),
            I = t(I, p, h, g, w[E + 3], 14, 4107603335),
            g = t(g, I, p, h, w[E + 8], 20, 1163531501),
            h = t(h, g, I, p, w[E + 13], 5, 2850285829),
            p = t(p, h, g, I, w[E + 2], 9, 4243563512),
            I = t(I, p, h, g, w[E + 7], 14, 1735328473),
            h = n(h, g = t(g, I, p, h, w[E + 12], 20, 2368359562), I, p, w[E + 5], 4, 4294588738),
            p = n(p, h, g, I, w[E + 8], 11, 2272392833),
            I = n(I, p, h, g, w[E + 11], 16, 1839030562),
            g = n(g, I, p, h, w[E + 14], 23, 4259657740),
            h = n(h, g, I, p, w[E + 1], 4, 2763975236),
            p = n(p, h, g, I, w[E + 4], 11, 1272893353),
            I = n(I, p, h, g, w[E + 7], 16, 4139469664),
            g = n(g, I, p, h, w[E + 10], 23, 3200236656),
            h = n(h, g, I, p, w[E + 13], 4, 681279174),
            p = n(p, h, g, I, w[E + 0], 11, 3936430074),
            I = n(I, p, h, g, w[E + 3], 16, 3572445317),
            g = n(g, I, p, h, w[E + 6], 23, 76029189),
            h = n(h, g, I, p, w[E + 9], 4, 3654602809),
            p = n(p, h, g, I, w[E + 12], 11, 3873151461),
            I = n(I, p, h, g, w[E + 15], 16, 530742520),
            h = o(h, g = n(g, I, p, h, w[E + 2], 23, 3299628645), I, p, w[E + 0], 6, 4096336452),
            p = o(p, h, g, I, w[E + 7], 10, 1126891415),
            I = o(I, p, h, g, w[E + 14], 15, 2878612391),
            g = o(g, I, p, h, w[E + 5], 21, 4237533241),
            h = o(h, g, I, p, w[E + 12], 6, 1700485571),
            p = o(p, h, g, I, w[E + 3], 10, 2399980690),
            I = o(I, p, h, g, w[E + 10], 15, 4293915773),
            g = o(g, I, p, h, w[E + 1], 21, 2240044497),
            h = o(h, g, I, p, w[E + 8], 6, 1873313359),
            p = o(p, h, g, I, w[E + 15], 10, 4264355552),
            I = o(I, p, h, g, w[E + 6], 15, 2734768916),
            g = o(g, I, p, h, w[E + 13], 21, 1309151649),
            h = o(h, g, I, p, w[E + 4], 6, 4149444226),
            p = o(p, h, g, I, w[E + 11], 10, 3174756917),
            I = o(I, p, h, g, w[E + 2], 15, 718787259),
            g = o(g, I, p, h, w[E + 9], 21, 3951481745),
            h = c(h, a),
            g = c(g, s),
            I = c(I, d),
            p = c(p, l);
        return (i(h) + i(g) + i(I) + i(p)).toLowerCase()
    }
    window.UF = window.UF || {},
    (e = window.UF || {}).extend = function(A, e) {
        var t = arguments.length
          , n = A || {};
        "object" !== (void 0 === n ? "undefined" : _typeof(n)) && "function" != typeof n && (n = {}),
        1 === t && (n = this,
        o--);
        for (var o = 1; o < t; o++) {
            var i, a = arguments[o];
            for (i in a)
                Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i])
        }
        return n
    }
    ,
    window.UF || (window.UF = e),
    (e = window.UF || {}).layerTips = function(A) {
        var e;
        document.querySelector(".layerTip") || ((e = document.createElement("div")).className = "layerTip",
        e.innerText = A || "默认信息",
        e.setAttribute("style", "position: fixed; top: 50%; left: 50%; z-index: 10000; background-color: rgba(0, 0, 0, 0.5); color: #fff; font-size: 12px; padding: 5px 10px; transform: translate(-50%, -50%);"),
        document.body.appendChild(e),
        setTimeout(function() {
            e.remove()
        }, 5e3))
    }
    ,
    window.UF || (window.UF = e);
    var e = {
        addStyle: function(A, e) {
            var t = document.createElement("style");
            e && (t.id = e),
            t.type = "text/css",
            document.querySelector("head").appendChild(t),
            t.appendChild(document.createTextNode(A))
        },
        createDom: function(A) {
            var e = document.createElement("div");
            return e.className = A,
            e
        },
        css: function(A, e, t) {
            if (A.length)
                for (var n = 0, o = A.length; n < o; n++)
                    A[n].style.key = t;
            else
                A.style[e] = t
        },
        hasClass: function(A, e) {
            var t = A.className.split(/\s+/)
              , n = 0;
            for (n in t)
                if (t[n] == e)
                    return !0;
            return !1
        },
        addClass: function(A, e) {
            new RegExp("" + e).test(A.className) || (A.className += " " + e)
        },
        rmClass: function(A, e) {
            e = new RegExp("" + e);
            e.test(A.className) && (A.className = A.className.replace(e, ""))
        },
        autoFixTargetMeta: function(n) {
            var A = document.querySelectorAll("meta")
              , o = 0;
            if (A.forEach(function(A, e) {
                var t = A.getAttribute(n)
                  , A = A.getAttribute("name");
                !t && A !== n || (o = 1)
            }),
            console.log(o),
            !o) {
                var e = "";
                switch (!0) {
                case "charset" === n:
                    e = '<meta charset="utf-8" />',
                    document.head.innerHTML = document.head.innerHTML + e;
                    break;
                case "viewport" === n:
                    e = '<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>',
                    document.head.innerHTML = document.head.innerHTML + e
                }
            }
        },
        getDeviceScreen: function() {
            var A = document.createElement("div")
              , e = {};
            return A.setAttribute("style", "position: fixed; top: 0px; left: 0px; right: 0px; bottom: 0px; z-index: -1;"),
            document.body.appendChild(A),
            e.width = A.offsetWidth,
            e.height = A.offsetHeight,
            A.remove(),
            e
        },
        parseHTML: function(A) {
            var e = document.implementation.createHTMLDocument()
              , t = e.createElement("base");
            return t.href = document.location.href,
            e.head.appendChild(t),
            e.body.innerHTML = A,
            e.body.children
        },
        checkIsIpad: function() {
            var A = navigator.userAgent
              , e = -1 === A.indexOf("Android")
              , t = -1 != A.indexOf("Safari") && -1 != A.indexOf("Version")
              , A = -1 != A.indexOf("iPhone") && -1 != A.indexOf("Version");
            return t && !A && e && "ontouchend"in document
        }
    }
      , t = {
        ajax: function(A) {
            var e = A.type
              , t = A.url
              , n = A.data
              , o = A.time
              , i = A.success
              , a = A.failed
              , r = A.timeout
              , c = null
              , c = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
              , e = e.toUpperCase();
            if ("object" == (void 0 === n ? "undefined" : _typeof(n))) {
                var s, d = "";
                for (s in n)
                    d += s + "=" + n[s] + "&";
                n = d.replace(/&$/, "")
            }
            "GET" == (e = e.toUpperCase()) ? (n ? c.open("GET", t + "?" + n, !0) : c.open("GET", t, !0),
            c.send()) : "POSTJSON" == e ? (c.open("POST", t, !0),
            c.setRequestHeader("Content-type", "application/json"),
            c.send(n)) : "POST" == e && (c.open("POST", t, !0),
            c.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
            c.send(n)),
            o && (c.timeout = o),
            c.ontimeout = function(A) {
                r && r()
            }
            ,
            c.onreadystatechange = function() {
                4 == c.readyState && (200 == c.status ? (c.responseText,
                i(c.responseText)) : a && a(c.responseText))
            }
        },
        XMLHttpGET: function(A, e, t) {
            e = e ? A + "?" + e : A,
            A = new XMLHttpRequest;
            A.open("GET", e, !0),
            A.send(),
            t && (A.onload = function() {
                t()
            }
            )
        },
        ImgHttpGET: function(A, e, t, n) {
            var e = e ? A + "?" + e : A
              , o = new Image;
            o.onload = function() {
                t && t(),
                o = null
            }
            ,
            o.onerror = function() {
                n && n(),
                o = null
            }
            ,
            o.src = e
        },
        reportUrl: function(A) {
            var e = document.createElement("script");
            e.setAttribute("type", "text/javascript"),
            e.src = A,
            document.body.appendChild(e)
        },
        reportUrlByType: function(A) {
            var e = A.type
              , t = A.urls
              , n = A.resolve
              , o = A.reject
              , i = this
              , A = {
                h5: function() {
                    t.forEach(function(A) {
                        i.reportUrl(A)
                    }),
                    n && n()
                },
                sdk: function() {
                    var A = t.map(function(A) {
                        return {
                            url: A
                        }
                    });
                    window.MW_INIT.videoBridgeReportUrls(A, n, o)
                }
            };
            A[e] && A[e]()
        }
    }
      , n = {
        isCanBCVersion: function(A) {
            var e = ""
              , e = -1 !== A.indexOf("MI_") ? A.replace("MI_", "") : -1 !== A.indexOf("MAL_") ? A.replace("MAL_", "") : A;
            return this.device().isAndroid ? 0 < this.compareVersion(e, "999.0.0") : 0 <= this.compareVersion(e, "6.8.1")
        },
        getPlayableCurrentLang: function() {
            function A(e, A) {
                return e = e.toLowerCase(),
                !A.some(function(A) {
                    return A.toLowerCase() === e
                }) && e.indexOf("-") ? (console.warn("没有找到指定的语言" + e + "，但是找到了该语言的父集语言，将使用父集语言" + e.split("-")[0]),
                e.split("-")[0]) : e
            }
            var e = A(("string" == typeof window.MW_CONFIG.locale ? window.MW_CONFIG.locale : window.navigator.language).toLowerCase(), Object.keys(window.MW_CONFIG.languages));
            return A(window.MW_CONFIG.languages[e] ? e : window.MW_CONFIG.fallback_locale || "en", Object.keys(window.MW_CONFIG.languages))
        },
        compareTargetVersion: function(A, e) {
            var t = ""
              , t = -1 !== A.indexOf("MI_") ? A.replace("MI_", "") : -1 !== A.indexOf("MAL_") ? A.replace("MAL_", "") : A;
            return this.compareVersion(t, e)
        },
        cookCampaignForAndroidApkInfo: function(n, A, o) {
            A = A.replace("MAL_", "");
            if (A.indexOf(",") && (A = A.split(",")[0]),
            this.device().isAndroid && 0 <= this.compareVersion(A, "15.5.3")) {
                for (var e = 0; e < n.length; e++)
                    n[e].apk_info || (n[e].apk_info = {});
                if (n.length && void 0 === n[0].apk_info && n[0].apk_info.app_ver) {
                    for (var t = {}, i = 0; i < n.length; i++)
                        n[i].apk_info && n[i].apk_info.perm_desc && 0 < n[i].apk_info.perm_desc.length && n[i].id && (t[n[i].id] = n[i].apk_info.perm_desc);
                    window.mv_utils.hybirdEvent({
                        sClass: "ConfirmationJsBridgePlugin",
                        hybirdFn: "translatePermission",
                        params: {
                            permissionMap: t
                        },
                        succ: function(A) {
                            if (0 === A.code)
                                for (var e = A.data.permissionMap, t = 0; t < n.length; t++)
                                    e[n[t].id] && (n[t].apk_info.ori_perm_all = e[n[t].id].concat(n[t].apk_info.ori_perm_desc || []));
                            o(n),
                            console.log("ConfirmationJsBridgePlugin - translatePermissionList - success", A),
                            o(n)
                        },
                        err: function(A) {
                            console.error("ConfirmationJsBridgePlugin - translatePermissionList - error", A),
                            o(n)
                        }
                    })
                } else
                    o(n)
            } else
                o(n)
        },
        fnIsPortrait: function() {
            var A = window.UF.getDeviceScreen();
            return "portrait" === (A.width > A.height ? "landscape" : "portrait")
        },
        autoMoreOfferFold: function() {
            var e = 20;
            (function A() {
                setTimeout(function() {
                    e <= 0 || (document.querySelector(".m-more-offer-wrap") ? document.querySelector(".m-more-offer-wrap").classList.remove("offer-active") : (e--,
                    A()))
                }, 500)
            }
            )()
        },
        compareVersion: function(A, e) {
            var t = A.split(".")
              , n = e.split(".")
              , o = t[0] - n[0];
            return 0 == o && A !== e ? this.compareVersion(t.splice(1).join("."), n.splice(1).join(".")) : o
        },
        checkIsLessVersion: function(A, e) {
            var t;
            return !A || (A.indexOf(",") && (A = A.split(",")[0]),
            this.device().isiOS ? -1 === A.indexOf("MI_") || (t = A.replace("MI_", ""),
            this.compareVersion(t, e ? e.ios : "4.8.0") < 0) : -1 === A.indexOf("MAL_") || (t = A.replace("MAL_", ""),
            this.compareVersion(t, e ? e.android : "9.3.0") < 0))
        },
        getQueryString: function(A) {
            A = new RegExp("(^|&)" + A + "=([^&]*)(&|$)","i"),
            A = window.location.search.substr(1).match(A);
            return null != A ? decodeURIComponent(A[2]) : null
        },
        jsonToQuery: function(e) {
            return e ? (A => {
                for (var e = [], t = 0; t < A.length; t++)
                    A[t] && e.push(A[t]);
                return e
            }
            )(Object.keys(e).map(function(A) {
                return void 0 === e[A] ? "" : A + "=" + e[A]
            })).join("&") : ""
        },
        hex_md5: A,
        throttle: function(A, e) {
            A.tId && clearTimeout(A.tId),
            A.tId = setTimeout(function() {
                A.call(e)
            }, 300)
        },
        isEmptyObject: function(A) {
            return 0 === Object.keys(A).length
        },
        isEmpty: function(A) {
            return void 0 === A || !A && 0 != A || !A && void 0 !== A && 0 != A
        },
        getOsVersion: function(A) {
            var A = A || navigator.userAgent
              , e = "";
            return -1 < A.indexOf("Mac OS X") ? e = (A.match(/OS [\d._]*/gi) + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".") : -1 < A.indexOf("Android") || -1 < A.indexOf("Linux") ? e = A.substr(A.indexOf("Android") + 8, A.indexOf(";", A.indexOf("Android")) - A.indexOf("Android") - 8) : -1 < A.indexOf("BB10") ? e = A.substr(A.indexOf("BB10") + 5, A.indexOf(";", A.indexOf("BB10")) - A.indexOf("BB10") - 5) : A.indexOf("IEMobile") && (e = A.substr(A.indexOf("IEMobile") + 9, A.indexOf(";", A.indexOf("IEMobile")) - A.indexOf("IEMobile") - 9)),
            e
        },
        _get: function(A, e, t) {
            e = (Array.isArray(e) ? e : e.replace(/\[/g, ".").replace(/\]/g, "").split(".")).reduce(function(A, e) {
                return (A || {})[e]
            }, A);
            return this.isEmpty(e) ? t : e
        },
        device: function() {
            var A = window.navigator.userAgent;
            return {
                isAndroid: -1 < A.indexOf("Android") || -1 < A.indexOf("Adr"),
                isiOS: !!A.match(/.+Mac OS X/)
            }
        },
        browserType: function() {
            function A(A) {
                return A.test(t)
            }
            function e(A) {
                return (t.match(A) + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".")
            }
            var t = navigator.userAgent.toLowerCase()
              , n = "unknown"
              , o = (A(/windows|win32|win64|wow32|wow64/gi) ? n = "windows" : A(/macintosh|macintel/gi) ? n = "macos" : A(/x11/gi) ? n = "linux" : A(/android|adr/gi) ? n = "android" : A(/ios|iphone|ipad|ipod|iwatch/gi) && (n = "ios"),
            "unknown");
            return "windows" === n ? A(/windows nt 5.0|windows 2000/gi) ? o = "2000" : A(/windows nt 5.1|windows xp/gi) ? o = "xp" : A(/windows nt 5.2|windows 2003/gi) ? o = "2003" : A(/windows nt 6.0|windows vista/gi) ? o = "vista" : A(/windows nt 6.1|windows 7/gi) ? o = "7" : A(/windows nt 6.2|windows 8/gi) ? o = "8" : A(/windows nt 6.3|windows 8.1/gi) ? o = "8.1" : A(/windows nt 10.0|windows 10/gi) && (o = "10") : "macos" === n ? o = e(/os x [\d._]+/gi) : "android" === n ? o = e(/android [\d._]+/gi) : "ios" === n && (o = e(/os [\d._]+/gi)),
            {
                systemVs: o,
                system: n
            }
        },
        urlParse: function(A) {
            var e = []
              , t = {};
            if (-1 !== A.indexOf("?")) {
                A = A.split("?")[1];
                if (-1 !== A.indexOf("&"))
                    for (var e = A.split("&"), n = 0; n < e.length; n++)
                        t[e[n].split("=")[0]] = e[n].split("=")[1];
                else
                    t[A.split("=")[0]] = A.split("=")[1]
            }
            return t
        },
        parseCode: function() {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
              , n = "vSoajc7dRzpWifGyNxZnV5k+DHLYhJ46lt0U3QrgEuq8sw/XMeBAT2Fb9P1OIKmC";
            return {
                encode64: function(A) {
                    var A = window.btoa(A)
                      , e = "";
                    return (A = A.split("")).map(function(A) {
                        -1 != t.indexOf(A) ? e += n.split("")[t.indexOf(A)] : e += A
                    }),
                    e
                },
                decode64: function(A) {
                    var e = "";
                    A.split("").map(function(A) {
                        -1 != n.indexOf(A) ? e += t.split("")[n.indexOf(A)] : e += A
                    });
                    try {
                        return window.atob(e)
                    } catch (A) {
                        return ""
                    }
                }
            }
        },
        isURL: function(A) {
            return new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(A)
        },
        fnGetScale: function() {
            return document.querySelector("meta[name=viewport]") && document.querySelector("meta[name=viewport]").getAttribute("content") && -1 !== document.querySelector("meta[name=viewport]").getAttribute("content").replace(/ /g, "").indexOf("initial-scale=0.5") ? 2 : 1
        },
        getLanguageType: function() {
            var A = navigator.language.toLocaleLowerCase()
              , e = 1;
            switch (!0) {
            case "zh-cn" == A:
            case "zh" == A:
                e = 1;
                break;
            case "zh-hk" == A:
            case "zh-tw" == A:
                e = 2;
                break;
            default:
                e = 3
            }
            return e
        },
        log: function(A) {
            if ("string" == typeof A)
                console.log("%c" + A, "color:#fff;background:#26a69a;padding:3px 6px;");
            else if ("object" === (void 0 === A ? "undefined" : _typeof(A)) && A.text) {
                var e = A.style || "";
                if (!e) {
                    var t = "";
                    switch (A.bgColor) {
                    case "green":
                        t = "#26a69a";
                        break;
                    case "blue":
                        t = "#1b95e0";
                        break;
                    case "red":
                        t = "#ee6e73";
                        break;
                    default:
                        t = A.bgColor || "#000"
                    }
                    e = "color:#fff;background:" + t + ";padding:3px 6px;"
                }
                console.log("%c" + A.text, e)
            }
        },
        setUrlQuery: function(A, e) {
            if (!A)
                return "";
            if (e) {
                var t, n = [];
                for (t in e)
                    n.push(t + "=" + e[t]);
                A = -1 !== A.indexOf("?") ? A + "&" + n.join("&") : A + "?" + n.join("&")
            }
            return A
        },
        checkPlayableInit: function(e) {
            window.MW_CONFIG.PlInitData ? e(window.MW_CONFIG.PlInitData) : document.addEventListener("PLAYABLE:PlInitData", function(A) {
                e(A.detail)
            }, !1)
        },
        getPlProducers: function() {
            return window.Luna ? 1 : document.querySelector("#pf-logo-gear") ? 2 : window.resMap && document.querySelector("#splash") ? 3 : window.vsdk_config && document.querySelector("#loading") ? 4 : window.boot && window.boot.preload ? 5 : 0
        },
        getHigherCloseTime: function(A) {
            return A.video_skip_result && 1 === Number(A.video_skip_result) ? "0" : window.UF.getQueryString("close_time")
        },
        mutePLVoice: function(A) {
            A && 1 === Number(A.playVideoMute) && window.MW_INIT && window.MW_INIT.stopAllSound()
        },
        isRenderH5CloseBtn: function(A) {
            var e = !0;
            return e = window.UF.checkIsLessVersion(A, {
                ios: "3.9.0",
                android: "9.3.0"
            }) ? !1 : e
        },
        getPureSDKVersion: function(A) {
            var e;
            return "" === A ? console.log("当前传入的版本号为空，不再处理，直接返回") : (A = "string" == typeof (A = (A = String(A)).split("_").slice(-1)[0]) && A.split(",")[0],
            this.device().isAndroid && "string" == typeof A && ("." === (e = A.slice(0, -1)).slice(-1) ? console.log("当前版本号后缀只有一位, 推测应该是安卓测试包, 不再尝试截取") : (console.log("当前版本号后缀大于一位, 推测应该是安卓渠道包, 在返回的版本号中移除渠道标识"),
            A = e))),
            A
        },
        switchCnOrGlobalDomainByInitData: function(A) {
            return 1 === Number(window.UF._get(window.MW_CONFIG.PlInitData, "device.re_domain")) ? A.replace(/rayjump/, "mtgglobals") : A
        },
        addHttpsProtocol: function(A) {
            return A = 0 !== A.indexOf("https://") && 0 !== A.indexOf("http://") ? "https://" + A : A
        },
        removeHttpsProtocol: function(A) {
            return A.replace(/^https?:\/\//, "")
        },
        addUrlPath: function(A, e) {
            return A ? e ? "/" === A.slice(-1) && "/" === e.charAt(0) ? A + e.slice(1) : "/" !== A.slice(-1) && "/" !== e.charAt(0) ? A + "/" + e : A + e : A : e
        },
        replaceUrl: function(A, e) {
            return A && this.isURL(A) ? A : e
        }
    }
      , o = ["click", "touchmove", "touchstart", "touchend", "mousedown", "mouseup", "pointerup", "pointerdown"]
      , i = {
        stopPropagation: function(e) {
            o.map(function(A) {
                e.addEventListener(A, function(A) {
                    A.stopPropagation()
                })
            })
        },
        bindForPropagation: function(e, t, A) {
            o.forEach(function(A) {
                A !== t && e.addEventListener(A, function(A) {
                    A.stopPropagation(),
                    A.preventDefault()
                })
            }),
            t && A && e.addEventListener(t, A, !0)
        }
    };
    window.UF.extend(window.UF, e),
    window.UF.extend(window.UF, t),
    window.UF.extend(window.UF, n),
    window.UF.extend(window.UF, i)
}
)(),
window.PlInstallReturn = {
    init: function(A) {
        var e = "globalClick" === A.type || "autoClick" === A.type || "youdaoClick" === A.type;
        if (e && window.MW_CONFIG.install_return_action) {
            var t = {}
              , e = window.MW_CONFIG.install_return_action.split(",")
              , n = void 0
              , n = A.position && 1 <= Number(A.position) ? parseInt(A.position, 10) - 1 : ("undefined" === String(A.position) || "" === A.position || console.error(A.position, "异常安装位置值，请联系开发确认"),
            0);
            switch (e.forEach(function(A, e) {
                t[e] = A
            }),
            document.body.getAttribute("data-return-config") && this.resetGlobalSetting(document.body.getAttribute("data-return-config")),
            t[n] && document.body.setAttribute("data-return-config", t[n]),
            !0) {
            case "return-releaseup" === t[n]:
                this.initGlobalReleaseUp();
                break;
            case "return-touchdown" === t[n]:
                this.initGlobalTouchDown();
                break;
            case "return-end-1" === t[n]:
                this.initReturnEnd(!0);
                break;
            case "return-end-2" === t[n]:
                this.initReturnEnd(!1)
            }
        }
    },
    install: function() {
        window.UF.throttle(function() {
            window.install && window.install()
        }, 100)
    },
    initGlobalReleaseUp: function() {
        window.MW_CONFIG.disable_global_click || (window.addEventListener("touchend", this.install),
        window.addEventListener("mouseup", this.install))
    },
    initGlobalTouchDown: function() {
        window.MW_CONFIG.disable_global_click || (window.addEventListener("touchstart", this.install),
        window.addEventListener("mousedown", this.install))
    },
    resetGlobalSetting: function(A) {
        switch (!0) {
        case "return-releaseup" === A:
            window.removeEventListener("touchend", this.install),
            window.removeEventListener("mouseup", this.install);
            break;
        case "return-touchdown" === A:
            window.removeEventListener("touchstart", this.install),
            window.removeEventListener("mousedown", this.install)
        }
    },
    initReturnEnd: function(A) {
        var e = "PLAYABLE:redirect";
        e = new CustomEvent(e,{
            detail: {
                type: "ending",
                params: [A]
            }
        }),
        document.dispatchEvent(e)
    }
},
window.MW_PREVIEWLAYER = {
    content: ["This page indicates that your creative has correctly setup click-through functionality.", "When users click on your ad, they will not see this page, and will instead be sent to your destination URL.", "Questions? Reach out to support@mindworks-creative.com.", "Want ad inspiration? Visit our "],
    show: function() {
        var A = document.querySelector(".mw-preview-layer");
        A && window.UF.css(A, "display", "block")
    },
    hide: function() {
        var A = document.querySelector(".mw-preview-layer");
        window.UF.css(A, "display", "none")
    },
    init: function() {
        var A, e, t;
        window.UF.getQueryString("previewlayer") && 0 === Number(window.UF.getQueryString("previewlayer")) || (t = document.querySelector("body"),
        A = this,
        window.UF.addStyle(".mw-preview-layer{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#fff;z-index:1000000;display:none;overflow:auto;padding-bottom:48px;text-align:left}.mw-preview-layer a{text-decoration:none;color:#f5ae00}.mw-preview-layer *{margin:0;padding:0;font-size:12px!important;color:#333}.mw-preview-layer h3{padding:0 12.8%;height:18%;background-image:linear-gradient(to right,#fdcf14,#f6b817);margin:0;display:table;width:100%;margin-bottom:48px;box-sizing:border-box}.mw-preview-layer h3 span{color:#fff;vertical-align:middle;font-size:28px;display:table-cell}.mw-preview-layer .mw-preview-layer-content{padding:0 12.8%;font-size:14px;line-height:24px;margin-bottom:48px}.mw-preview-layer .mw-preview-layer-content .desc{margin-bottom:48px}.mw-preview-layer .mw-preview-layer-foot{padding:0 12.8%}.mw-preview-layer .mw-preview-layer-foot .back{height:40px;line-height:40px;border-radius:4px;font-size:14px;color:#666;background-color:#f6f8fb;border:1px solid #ddd;padding:8px 16px;cursor:pointer}.mw-preview-layer .mw-preview-layer-foot .back:hover{opacity:.8}"),
        (e = window.UF.createDom("mw-preview-layer-wrapper")).innerHTML = this.template({
            content: this.content
        }),
        t.appendChild(e),
        window.UF.stopPropagation(e),
        (t = document.querySelector(".mw-preview-layer-foot .back")) && t.addEventListener("click", function() {
            A.hide()
        }))
    },
    template: function(A) {
        var e, t = "";
        Array.prototype.join;
        return t += '<div class="mw-preview-layer">\n  <h3><span>Success！</span></h3>\n  <div class="mw-preview-layer-content">\n    <div class="desc">\n      <p>' + (null == (e = A.content[0]) ? "" : e) + "</p>\n      <p>" + (null == (e = A.content[1]) ? "" : e) + '</p>\n    </div>\n    <div class="question">\n      <p>' + (null == (e = A.content[2]) ? "" : e) + "</p>\n      <p>" + (null == (e = A.content[3]) ? "" : e) + '<a href="https://www.mindworks-creative.com/work">Work</a>.</p>\n    </div>\n  </div>\n  <div class="mw-preview-layer-foot">\n    <span class="back">Back</span>\n  </div>\n</div>\n'
    }
},
( () => {
    function t(A, e) {
        window.parent !== window && window.parent.postMessage({
            type: "PLAYABLE:SENDPOINT",
            data: {
                pointName: A,
                data: e || {}
            }
        }, "*")
    }
    window.HttpAPI = {
        allowPoint: []
    },
    window.HttpAPI.sendPoint = function(A, e) {
        -1 === window.HttpAPI.allowPoint.indexOf(A) && (window.HttpAPI.allowPoint.push(A),
        t(A, e || {}),
        (e = ["ws", "ir"]).every(function(A) {
            return -1 < window.HttpAPI.allowPoint.indexOf(A)
        })) && -1 < e.indexOf(A) && (t("gs"),
        document.addEventListener("click", function A(e) {
            t("fc"),
            document.removeEventListener("click", A, !0)
        }, !0))
    }
    ,
    window.HttpAPI.sendPoint("pv"),
    window.HttpAPI.sendPoint("ws")
}
)(),
window.MUTIL = {
    dispatchEventList: [],
    dispatch: function(A, e) {
        var t = void 0
          , t = e ? new CustomEvent(A,{
            detail: e
        }) : new Event(A);
        document.dispatchEvent(t),
        -1 === window.MUTIL.dispatchEventList.indexOf(A) && window.MUTIL.dispatchEventList.push(A)
    },
    on: function(A, e, t, n) {
        A.addEventListener(e, t, n || !1)
    },
    off: function(A, e, t, n) {
        A.removeEventListener(e, t, n || !1)
    }
},
( (e, t) => {
    t.addEventListener("PLAYABLE:gameStart", function() {
        var A = e.MW_GET_QUERY_STRING("scene");
        A && (e.ps && e.ps.GameState && e.ps.GameState.SCENECHANGE && e.ps.mainState && e.ps.mainState.dispatch && t.addEventListener("PLAYABLE:switchScene", function(A) {
            A = A.detail.scene;
            e.ps.mainState.dispatch(e.ps.GameState.SCENECHANGE, A)
        }),
        t.dispatchEvent(new CustomEvent("PLAYABLE:switchScene",{
            detail: {
                scene: String(A)
            }
        })),
        setTimeout(function() {
            console.log("mwSwitchScene:" + A)
        }, 500))
    })
}
)(window, document),
(A => {
    var t = {
        init_layout: null,
        init_orientation: 2,
        operation: []
    };
    function e(A, e) {
        t.operation.push({
            type: A,
            value: e,
            timestamp: Date.now()
        })
    }
    A.MV_AUTO_PLAYABLE_TEST = {
        autoPlayable: t,
        recordHookData: function(A) {
            var e = t.operation[t.operation.length - 1];
            void 0 !== e && "tap" === e.type ? (e.type = A,
            e.tap_timestamp = e.timestamp,
            e.timestamp = Date.now()) : t.operation.push({
                type: A,
                value: null,
                timestamp: Date.now()
            })
        },
        recordOperationData: e,
        sendData: function() {
            A.parent.postMessage({
                type: "auto_playable",
                data: t
            }, "*")
        }
    },
    A.addEventListener("pointerdown", function(A) {
        e("tap", A.x + "," + A.y)
    }, !0),
    A.addEventListener("resize", function() {
        t.operation.push({
            type: "resize",
            value: A.innerWidth + "*" + A.innerHeight,
            timestamp: Date.now()
        })
    }, !1),
    t.init_layout = A.innerWidth + "*" + A.innerHeight
}
)(window, document),
window.MW_CONFIG || (window.MW_CONFIG = {
    alway_portrait: !1,
    alway_landscape: !1,
    logo_position: "right",
    render_type: "1"
}),
0)
  , isMouseDown = !1
  , countStep = function() {
    game_step++
}
  , countMove = function() {
    !isMouseDown || this.time && Date.now() - this.time < 600 || (this.time = Date.now(),
    game_step++)
};
function addGameStepListener() {
    document.addEventListener("click", countStep, !0),
    document.addEventListener("mousedown", function() {
        isMouseDown = !0
    }, !0),
    document.addEventListener("mouseup", function() {
        isMouseDown = !1
    }, !0),
    document.addEventListener("mousemove", countMove, !0)
}
function removeGameStepListener() {
    document.removeEventListener("click", countStep, !0),
    document.removeEventListener("mousemove", countMove, !0)
}
function gameEnd() {
    console.log("game end"),
    window.MV_AUTO_PLAYABLE_TEST.recordHookData("game_end"),
    removeGameStepListener(),
    window.HttpAPI && window.HttpAPI.sendPoint("ge"),
    window.MUTIL && window.MUTIL.dispatch("PLAYABLE:ending"),
    window.MW_INIT.emitCheckData({
        type: "game_end",
        value: 1
    }),
    window.parent.postMessage({
        type: window.MW_PREVIEWER_LIFECYCLE.gameEnd
    }, "*")
}
function install(A) {
    if (A && window.PlInstallReturn && window.PlInstallReturn.init(A),
    A && A.type) {
        A = A.type;
        if ("globalClick" === A && window.MW_CONFIG.disable_global_click)
            return;
        if ("youdaoClick" === A && window.MW_CONFIG.disable_yd_click)
            return;
        if ("autoClick" === A && window.MW_CONFIG.disable_auto_click)
            return
    }
    window.MV_AUTO_PLAYABLE_TEST.recordHookData("install"),
    window.HttpAPI && window.HttpAPI.sendPoint("is"),
    window.MUTIL && window.MUTIL.dispatch("PLAYABLE:install"),
    window.MW_INIT.emitCheckData({
        type: "install",
        value: 1
    }),
    window.MW_INIT._isPreviewTrue() && window.MW_PREVIEWLAYER && window.MW_PREVIEWLAYER.show(),
    console.log("install"),
    window.parent.postMessage({
        type: window.MW_PREVIEWER_LIFECYCLE.install
    }, "*")
}
function gameReady() {
    window.HttpAPI && window.HttpAPI.sendPoint("ir"),
    window.MUTIL && window.MUTIL.dispatch("PLAYABLE:gameReady");
    try {
        window.ps && window.UIRoot && window.UIRoot.relayout && window.UIRoot.relayout()
    } catch (A) {
        console.log(A)
    }
    var A, e;
    window.postMessage({
        type: window.MW_PREVIEWER_LIFECYCLE.gameReady
    }, "*"),
    window.MW_INIT.gameReadyCalled || (window.MW_INIT.gameReadyCalled = !0,
    window.MW_INIT._hasLoading() ? (A = {
        gameStart: window.gameStart
    },
    window.gameStart = function() {
        A.gameStart && A.gameStart.call(window, arguments),
        console.log("移除 loading"),
        1 === Number(window.MW_INIT.getQueryString("loading")) ? window.MW_LOADING && window.MW_LOADING.removeLoading() : 2 === Number(window.MW_INIT.getQueryString("loading")) && window.MindWorks_LOADING && window.MindWorks_LOADING.removeLoading()
    }
    ) : window.MW_INIT.removeDefaultLoading(),
    window.MW_INIT.review(),
    window.MW_INIT.emitCheckData({
        type: "game_ready",
        value: 1
    }),
    window.MW_INIT._isPreview() && (window.gameStart && "function" == typeof window.gameStart ? (window.MW_INIT.emitCheckData({
        type: "game_start",
        value: 1
    }),
    window.MW_ITA_COVER.isItaVideo() || (window.gameStart(),
    document.dispatchEvent(new Event("PLAYABLE:gameStart")),
    addGameStepListener(),
    console.log("PLAYABLE:gameStart"))) : window.MW_INIT.emitCheckData({
        type: "game_start",
        value: 0
    }),
    window.gameClose && "function" == typeof window.gameClose ? window.MW_INIT.emitCheckData({
        type: "game_close",
        value: 1
    }) : window.MW_INIT.emitCheckData({
        type: "game_close",
        value: 0
    })),
    window.parent.postMessage({
        type: window.MW_PREVIEWER_LIFECYCLE.gameReady
    }, "*"),
    e = window,
    document,
    setTimeout(function() {
        var A;
        e.MW_GET_QUERY_STRING("continue") && ("ending" === (A = e.MW_GET_QUERY_STRING("continue")) && (A = "end"),
        console.log("gameReady 根据 URL 上的 continue 参数跳转至指定阶段", A),
        e.postMessage({
            action: "navigate",
            scene: A
        }, "*"))
    }, 1e3),
    window.MV_AUTO_PLAYABLE_TEST.recordOperationData("game_ready", null))
}
function gameRetry() {
    window.MUTIL && window.MUTIL.dispatch("PLAYABLE:gameRetry"),
    console.log("game retry"),
    window.MW_INIT.emitCheckData({
        type: "game_retry",
        value: 1
    }),
    window.parent.postMessage({
        type: window.MW_PREVIEWER_LIFECYCLE.gameRetry
    }, "*")
}
window.MW_PREVIEWER_LIFECYCLE = {
    gameReady: "previewer:gameReady",
    install: "previewer:install",
    gameRetry: "previewer:gameRetry",
    gameEnd: "previewer:gameEnd"
},
window.MindWorks_LOADING = {
    icon: "data:image/gif;base64,R0lGODlhbAAGAff/APLt4vmxIvm1Kv3Na/Pr3Ozk1Pn38/r17O3q4/zUg+jDd+S9bP/BO/azKuvm2/vz5P/Scem5V9S8iv+5JOzhy/zcnPzszPv7+vzks/7jrPzx293Wx/r59//Qavu+Qv/JU9jDmPvGWf/ai9vOtPvu0uPUtf63JO3Rmv3qxOPbzPrNcvPjxOXaxNi5d/61IvTcrPa+TPXq1PWrFuvdwuLVu/b18/Het/fEXfbz7frluuvbu/vWivHv6vPMe/Tivf/ipPveot3RuPTEY/axJd3NrPOtIv66LfPUlP7CRe3CafPmy/LOhvG9VfXSjP7FUf/KWf/YhPm3Mf++Ofby6vbw5PTKc//FTePLnOvTov+6KP+9MePOpOvVquXe0u/o3PLVmv39+/mzI/7BQf/NYf/KXf++NezMjP37+eXSrPXao+3atPHFaf67Mf/gnPe1Md3BiPPx7vq6OP/OZPf39evOlOfi2u7s6dzKpf7CSePDgv7pvf/BM+7Kgfrfqf6/Pv/ITOTKlP/NXfq5Nf/WfP+9Lf/FSf7HVPa7Q/fBVPnnw/Dn0//el+neyfnu2u24S/q1Jv7akf/LYf/FRf769f+9KOfh1f7Sd/fJbPfpzObYveLFi/m7PPrRfvm/SOrn4PrJZffRhP/Vd/a5O/fZnfu5MffhtO+1PvrCUeHWwfnGYPjOeP358v/EQOfRpNXDofrBTf3DTPu9PfPz8frZl//dkPjWktnHo/3TfPXz8O/Zq/DGcf27M/v48f3blv3LZP/NV/Px6/746/HWofj17/vBSfvReM3Bq/nDVvWvJNPGq/W3Of/otuDGk+jOmv/ZfejXs+fJjPvJYejHg//ALvvFVfu1IvvYkPu3Lf3DT//JRPy9OtbJsO2sKf/SYPOvIv/99+6wMuG2Xefl4PC2QvfIZ/vKXPu9NfWvIvexIv39/fevIvWvIPWtIv///////f/9/fuzIv27N/y/RvuzJffAT/vFUvStHvi3Nv/YdPy3KvDQj/WxKPu7Mu+/XvSuIv///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMjlFNTE2REEyMEMxMUU4OEFBQjlBNjg0NkREQ0E0MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMjlFNTE2RUEyMEMxMUU4OEFBQjlBNjg0NkREQ0E0MiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIyOUU1MTZCQTIwQzExRTg4QUFCOUE2ODQ2RERDQTQyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIyOUU1MTZDQTIwQzExRTg4QUFCOUE2ODQ2RERDQTQyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMy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",
    addPlaceholder: function() {
        var A = document.createElement("div");
        A.id = "loader-placeholder",
        window.document.body.appendChild(A)
    },
    fnGetScale: function() {
        return document.querySelector("meta[name=viewport]") && document.querySelector("meta[name=viewport]").getAttribute("content") && -1 !== document.querySelector("meta[name=viewport]").getAttribute("content").replace(/ /g, "").indexOf("initial-scale=0.5") ? 2 : 1
    },
    fnIsPortrait: function() {
        var A = "";
        return "orientation"in window && "onorientationchange"in window && window.self === window.top ? (180 !== orientation && 0 !== orientation || (A = "portrait"),
        90 !== orientation && -90 !== orientation || (A = "landscape")) : A = window.innerWidth > window.innerHeight ? "landscape" : "portrait",
        "portrait" === A
    },
    addECLoading: function() {
        var A = document.createElement("div")
          , e = (A.id = "newloader",
        A.className = "loading",
        window.document.getElementById("loader-placeholder").appendChild(A),
        document.createElement("img"))
          , t = (e.src = this.icon,
        45 * this.fnGetScale())
          , t = (e.width = t,
        2 === this.fnGetScale() && (t = document.body,
        n = "scale-sm",
        new RegExp("" + n).test(t.className) || (t.className += " " + n)),
        A.appendChild(e),
        document.createElement("span"))
          , n = (t.innerHTML = "Loading...",
        A.appendChild(t),
        document.createElement("style"))
          , o = (n.type = "text/css",
        n.innerHTML = '#loader-placeholder.f-dn{display:none}#loader-placeholder{z-index:100000;position:fixed;left:0;right:0;top:0;bottom:0;background:#000;-webkit-transition:opacity 1s ease-in-out;-moz-transition:opacity 1s ease-in-out;-ms-transition:opacity 1s ease-in-out;-o-transition:opacity 1s ease-in-out;opacity:1}#loader-placeholder.s-hide{opacity:0}#newloader{width:230px;height:246px;position:absolute;top:50%;left:50%;margin-left:-115px;margin-top:-123px;z-index:1;color:#fff;font-weight:700;font-family:Arial,sans-serif;font-size:20px}#newloader img{width:" + _w + "px}#newloader *{display:block;margin:20px auto}#newloader .fallback,#newloader .icon{border-radius:10px;width:122px;height:122px}#newloader .fallback{background-size:122px 122px}#newloader .icon{background-size:122px 122px}#newloader span{text-align:center}#loader{display:none}.eCLoading_forcePortrait{margin-left:-123px;margin-top:-115px;transform:rotate(90deg);-ms-transform:rotate(90deg);-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-o-transform:rotate(90deg)}',
        window.document.head.appendChild(n),
        this);
        window.addEventListener("resize", function() {
            o.setLoadingPosition()
        }),
        o.setLoadingPosition()
    },
    setLoadingPosition: function() {
        window.MW_CONFIG.alway_landscape && this.fnIsPortrait() ? document.getElementById("newloader") && (document.getElementById("newloader").className = "eCLoading_forcePortrait") : document.getElementById("newloader") && (document.getElementById("newloader").className = "")
    },
    init: function() {
        this.addPlaceholder(),
        this.addECLoading()
    },
    removeLoading: function() {
        document.getElementById("loader-placeholder").className = "f-dn"
    }
},
window.M_LOGO = {
    mtgAssets: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAAAjCAYAAACgoylBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEIyMzJENEVGNDIwMTFFN0FGNEM5QzE2M0E1NjBBOEUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEIyMzJENERGNDIwMTFFN0FGNEM5QzE2M0E1NjBBOEUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5OENCMkUyQ0IyRTYxMUU3OTFBOEM0OTU1MDE4N0YyRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5OENCMkUyREIyRTYxMUU3OTFBOEM0OTU1MDE4N0YyRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PorMyaQAAA8oSURBVHja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",
    mwAssets: "data:image/png;base64,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",
    fnIsPortrait: function() {
        var A = "";
        return "orientation"in window && "onorientationchange"in window && window.self === window.top ? (180 !== orientation && 0 !== orientation || (A = "portrait"),
        90 !== orientation && -90 !== orientation || (A = "landscape")) : A = window.innerWidth > window.innerHeight ? "landscape" : "portrait",
        "portrait" === A
    },
    fnGetScale: function() {
        return document.querySelector("meta[name=viewport]") && document.querySelector("meta[name=viewport]").getAttribute("content") && -1 !== document.querySelector("meta[name=viewport]").getAttribute("content").replace(/ /g, "").indexOf("initial-scale=0.5") ? 2 : 1
    },
    addLogo: function(A) {
        var e = this
          , t = document.createElement("div")
          , n = (t.id = "MV_logo",
        t.className = "loading",
        window.document.body.appendChild(t),
        document.createElement("img"))
          , A = (1 === A ? n.src = this.mtgAssets : 2 === A && (t.style = "left: 0; right: auto;",
        n.src = this.mwAssets),
        t.appendChild(n),
        95 * e.fnGetScale())
          , t = (n.width = A,
        document.createElement("style"));
        t.type = "text/css",
        t.innerHTML = '#MV_logo{z-index:99;position:absolute;right:5px;bottom:5px}#MV_logo img{vertical-align:bottom}#MV_logo.s-left{left:0;right:auto}#MV_logo.s-center{left:50%;margin-left:-" + _w / 2 + " px;right:auto}#MV_logo.s-alwaysRight{left:0;right:auto;bottom:" + _w + "px;transform:rotate(90deg);transform-origin:0 100%;-ms-transform:rotate(90deg);-ms-transform-origin:0 100%;-webkit-transform:rotate(90deg);-webkit-transform-origin:0 100%;-moz-transform:rotate(90deg);-moz-transform-origin:0 100%;-o-transform:rotate(90deg);-o-transform-origin:0 100%}#MV_logo.s-alwaysLeft{left:0;right:auto;bottom:auto;top:-30px;transform:rotate(90deg);transform-origin:0 100%;-ms-transform:rotate(90deg);-ms-transform-origin:0 100%;-webkit-transform:rotate(90deg);-webkit-transform-origin:0 100%;-moz-transform:rotate(90deg);-moz-transform-origin:0 100%;-o-transform:rotate(90deg);-o-transform-origin:0 100%}#MV_logo.s-alwaysCenter{left:0;right:auto;bottom:50%;margin-bottom:" + _w / 2 + "px;transform:rotate(90deg);transform-origin:0 100%;-ms-transform:rotate(90deg);-ms-transform-origin:0 100%;-webkit-transform:rotate(90deg);-webkit-transform-origin:0 100%;-moz-transform:rotate(90deg);-moz-transform-origin:0 100%;-o-transform:rotate(90deg);-o-transform-origin:0 100%}#MV_logo.s-alwaysTopRight{left:auto;right:-90px;bottom:auto;top:80px;transform:rotate(270deg);transform-origin:0 100%;-ms-transform:rotate(270deg);-ms-transform-origin:0 100%;-webkit-transform:rotate(270deg);-webkit-transform-origin:0 100%;-moz-transform:rotate(270deg);-moz-transform-origin:0 100%;-o-transform:rotate(270deg);-o-transform-origin:0 100%}',
        window.document.head.appendChild(t),
        e.setLogoPosition(),
        window.addEventListener("resize", function() {
            e.setLogoPosition()
        })
    },
    setLogoPosition: function() {
        switch (window.MW_CONFIG.logo_position) {
        case "left":
            window.MW_CONFIG.alway_landscape && this.fnIsPortrait() ? document.getElementById("MV_logo").className = "s-alwaysLeft" : document.getElementById("MV_logo").className = "s-left";
            break;
        case "center":
            window.MW_CONFIG.alway_landscape && this.fnIsPortrait() ? document.getElementById("MV_logo").className = "s-alwaysCenter" : document.getElementById("MV_logo").className = "s-center";
            break;
        case "right":
            window.MW_CONFIG.alway_landscape && this.fnIsPortrait() ? document.getElementById("MV_logo").className = "s-alwaysRight" : document.getElementById("MV_logo").className = ""
        }
    }
},
window.MW_INIT = ( () => {
    var e = {
        init: function() {
            window.performance && window.performance.getEntries && setTimeout(function() {
                A(function(A) {
                    console.log("开始检查", A),
                    0 < A.reviewResult.length && n(A)
                })
            }, 1e3)
        },
        addErrorListener: function() {
            var e = this;
            window.addEventListener("error", function(A) {
                return e.emitCheckData({
                    type: "code",
                    value: 0,
                    msg: "存在error信息",
                    errorMsg: A.message
                }),
                !1
            }, !1)
        },
        emitCheckData: function(A) {
            var e = {
                reviewResult: []
            };
            e.reviewResult.push(A),
            n(e)
        },
        checkDone: function() {
            window.MV_AUTO_PLAYABLE_TEST.sendData(),
            t("previewer:done", {
                game_step: game_step
            })
        }
    };
    function t(A, e) {
        window.parent.postMessage({
            type: A,
            data: e
        }, "*")
    }
    function n(A) {
        t("previewer:review", A)
    }
    function A(A) {
        console.log("Performance entries", window.performance.getEntries());
        e = window.performance.getEntries();
        var e = JSON.parse(JSON.stringify(e)).filter(function(A) {
            var e, t;
            return console.log("entry:", A),
            !((A => {
                if ("string" != typeof A)
                    console.warn("传入参数非字符串");
                else {
                    if (0 === A.indexOf("https://mmp-cdn.rayjump.com/") && /\.json$/.test(A))
                        return 1;
                    for (var e = ["https://h5.talkingdata.com/", "http://h5.talkingdata.com/", "https://pro.ip-api.com/", "http://pro.ip-api.com/", "https://logger.playablefactory.app/", "http://logger.playablefactory.app/", "https://logger2.playablefactory.app", "http://logger2.playablefactory.app"], t = 0; t < e.length; t++)
                        if (0 === A.indexOf(e[t]))
                            return 1
                }
            }
            )(A.name) || (t = "favicon.ico",
            (e = A.name).indexOf(t) === e.length - t.length) || A.name === location.href || "resource" !== A.entryType || (/^blob:/.test(A.name) ? (console.log("blob 对象 url 不需要检测"),
            1) : (-1 < A.name.indexOf("preview-util.js") || -1 < A.name.indexOf("preview_util.js")) && (console.log("检测脚本 url 不需要检测"),
            1)))
        });
        function t(e) {
            return ["xmlhttprequest", "fetch", "script", "img"].some(function(A) {
                return A === e.initiatorType
            }) && void 0 === window.MW_URL("fileext", e.name)
        }
        console.log("过滤后的 Performance entries：", e);
        var n = e.some(function(e) {
            if ("script" === e.initiatorType && -1 < e.name.indexOf(location.host))
                return !1;
            if ((!["xmlhttprequest", "fetch", "script", "img"].some(function(A) {
                return A === e.initiatorType
            }) || void 0 === window.MW_URL("fileext", e.name)) && ((!window.Luna || !t(e)) && !window.Luna && t(e)))
                return !1;
            return console.log("=======外链资源", e),
            !0
        })
          , o = 0 === e.filter(function(A) {
            if ("script" !== A.initiatorType)
                return !!window.Luna && t(A)
        }).length
          , i = [];
        !0 === n ? (console.log("有外链", e),
        i.push({
            type: "outer_chain",
            value: 0,
            status: "检测不通过",
            msg: "请把素材依赖的代码与资源放在本地，不能存在在线请求的资源。"
        })) : i.push({
            type: "outer_chain",
            value: 1,
            status: "检测通过",
            msg: "请把素材依赖的代码与资源放在本地，不能存在在线请求的资源。"
        }),
        !1 == o ? (console.log("除js和html外的文件都需要处理成base64", e),
        i.push({
            type: "base64",
            value: 0,
            status: "检测不通过",
            msg: "除js和html外的文件都需要处理成base64"
        })) : i.push({
            type: "base64",
            value: 1,
            status: "检测通过",
            msg: "除js和html外的文件都需要处理成base64"
        }),
        A && A({
            reviewResult: i,
            entries: e
        })
    }
    return {
        loadingIcon: "data:image/gif;base64,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/v7+/v7+/v7+////////////////////////////////////////////////////////////////////////////////////////CP4AAQgcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gw4odS7as2bNo06qNaCPKmTuOQuX6JezYMmvqsikj1ksWJ0d62HBhYmLtTxZXEvHCq66x48eQIzsuJqkKCMM2TaiJ5Uyy58+ggzWC0gGzSx6BgG0Dzbq15GynkphGaSIPMte4c0M+RmfEbJFNXGnTTbx4NlOyf2+sfbu4c+fG5FxWXpEEpGzPsz/PRuoI9Yga8P5I004+e68Y3xlGQKOsvPvtgjSkRygD2Pv7z48lny8wgh3s+AVYHCgl8AfDLwImWFwzZqQ3h4IQFtfLDL9xsEuEGOqWDQ+mrWBMhiDiFk0NhvWwDIbW8BKKIWxQIYQNLYQAAAk0HKFFG4NkIoswEf6yFhYABriNMZyoQeJEHjhRSC9B3mdDWoEI6IwpZBS2UQZC2HFLZ+5dgtYk+DFTSBAlaUFMecicVch72+xyRQUpKXFhdseY9WB5zTDSgks2nDJcccOUlUZ52QyygUw0IEicl2OJsZp2rKxgkxrP6EbDWED8+dwyS+Rkgii49TLWCe1lB4qMOyVxDGvX9DAWL/7ZNUMFUFF6xsyTYq35HDEpCBUDLZApk8cHYzWRnSyHEoVDGHYEMkZZJYznHCH87WSIc9lgUa1OH1xTnDadbpvTE99OIa5OYxC3jRjn6hQHcWm0q5MauiUir04gaMraLvfuhItrxiTbL040VApaMy4MvNMPTQYLg8I8RdGMZMawAHFPHRiSjGO2aHsxUCTwIN/HJJds8skop6zyyiy37PLLMMcs88w012zzzTjnrPPOPPfs889ABy300EQXbfTRSCet9NJMN+3001BHLfXUVFdt9dVYZ6311lx37fXXYIct9thkl2322WinrZwQcZSB69c0RFJqY8dA4bUQ3krGCv7XQTQMWSlav5A3aJ1gzcGHrnFodS653WF1H7oBTrWjuoFC9RT6usZo1Etk7loZUhvhd2vVZBA1FKO3xkjUbTz3jArQJvEDUpBkt19YaMzZ2C9rCPzTBrJkBwdZsXjWzB9A7YC4c6SMdcG/oB1TBE8XBOJ5bsSYLtadrXFSIE4yBKOdM5KKhcHEuDUDek0kSHJ9btfkQNYaElIY0wZ9MJYdNrOTNYpz2mCFd1pSgTXMLTvZMIJZSKGdYajBdyVRgSA2RqhwlcUU5YmGI/Y0kgtcIRfv+5YT0HIHNgkDEqTpiAnKkAqDvecaAzzLChL0i0IsYWQS8QAS2pAJ+wgoGf5HSksvIqSMX9jiEn1IgxNuUJgQtMAGQpgCGwbRiV1QEEK/sJJaahCNEHkRNLLA4Vp4gI0vmvExiFCODYZ4Ri8u4wnpOQP62hihUUwnPSTwBB0VxIwRiisIq9rjfUzhm3ZloA+pE2RugDEEhbWAjYokDjHM9TEkvCKEkXzMMdh1MhY4QlqZhEybrHCBlXGgDYEM5TMegR6YQUF3dGzGJqCgvZnNABOJVJAyJqEEOOVMA0fAAy64pKBjLAIIQ5sBGjixvOxc4xebiAMTULA0FuyACWSYQyE4cQtfIKOM1ljGMYbxC1xQwg5b+AE11cbOdrrznfCMpzznSc962vOe+BTMpz73yc9++vOfAA2oQAdK0NkEBAAh+QQAAwAAACwAAAAAyADIAIcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgIFBQUICAgLCwsNDQ0REREaGhoeHh4lJSUqKiosLCwuLi4vLy8vLy8wMDAwMDAxMTExMTExMTExMTEyMjIyMjIyMjIyMjIzMzMzMzMzMzMzMzMzMzM0NDQ0NDQ0NDQ0NDQ1NTU1NTU1NTU2NjY2NjY3Nzc3Nzc4ODg4ODg4ODg5OTk5OTk5OTk5OTk6Ojo6Ojo8PDxAQEBERERISEhLS0tNTU1PT09QUFBRUVFSUlJTU1NUVFRVVVVWVlZXV1dXV1dYWFhZWVlbW1tcXFxdXV1eXl5gYGBhYWFiYmJjY2NkZGRlZWVlZWVmZmZmZmZmZmZnZ2doaGhoaGhpaWlqampra2tsbGxtbW1tbW1ubm5vb29wcHBxcXFzc3N1dXV3d3d6enp8fHx/f3+CgoKDg4OEhISFhYWGhoaGhoaHh4eHh4eIiIiIiIiIiIiIiIiJiYmJiYmKioqLi4uLi4uMjIyNjY2Ojo6Pj4+Pj4+QkJCRkZGRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmcnJyenp6goKCioqKjo6OkpKSlpaWmpqanp6eoqKioqKiqqqqqqqqrq6urq6usrKytra2urq6vr6+wsLCxsbGzs7O0tLS3t7e3t7e4uLi5ubm5ubm6urq6urq7u7u7u7u7u7u8vLy8vLy9vb2+vr7AwMDCwsLGxsbKysrOzs7U1NTa2trf39/h4eHj4+Pl5eXm5ubn5+fp6enq6urq6urr6+vs7Ozt7e3u7u7v7+/y8vL09PT29vb39/f4+Pj5+fn6+vr7+/v8/Pz+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7///////////////////////////////////////////////////////////////////////////////////////////8I/gABCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTqo3YAckYRrKKHUvGrNq2dHjxYkP2K1ShOFRsrAUq4kskYtPyKl7MuDGyU3qegBhck8kjYtkaa97MOZ0zS0wot8zAxFPizqhTL7YWSgoH0SZHdLqmurbtvNk2jYAd0omw28CDF+OygbdGDWWQBV8efFqiycYpXgjDjLn14OA8fYgeUYny6+CB/mfjU5z7QhG3wqsP3gzMBfMHNQwCt74+8GLQ4Qsk8d2+/9rZtKGfBnx489+Btv2yXXQhHIPgg7Vd04VxV3AD4YWqgaIBZRkwguGHqRHjwVod1AJhMrIUQsYSMYTwQQcFgRDEE2XsAUs0DyYTQlohJPPfMZ6oIVhFIoDhiY/+XbPEWSHQtl42rWzxWkch2MGLf2GUxUF/4KXyREkcXPFLfXOQ5Up42ESS30kgJAKNehOGFQJ41twBY0sb2FFNeFeEZYV131ByJ0wd8IHNdeA0AdYfzNGyY00eUAJeaF7pEZw1VOgkgoPMRTNiV1sAV8unOmnwB33LZeLVD7ZhIwZQ/kQos1w4u3GVAZec6ShUB78Ft4hXLYSD2jCDBpVBJ8Gl8tUenXWCFB3AGQNWqI1V82pS1NaGS1gxpIIjXsxsQmpSXtimB1kiIFEsU+WqRoR+QoUhbGfbwiuUGJ0tM669PymxZ2POxMAvUSBcuVghUw5M1AZM7HEGEQkrLPHEFFds8cUYZ6zxxhx37PHHIIcs8sgkl2zyySinrPLKLLfs8sswxyzzzDTXbPPNOOes88489+zzz0AHLfTQRBdt9NFIJ6300kw37fTTUEct9dRUV2311VhnrfXWXHft9ddghy322FWBoMS6U5NAy6F4HQPJvk9jolk0TkitSWduQC0F/mrhbPF0M6px8dQHTdwxRwpjiWAbFkyF0Gte2DgSlh23VaEUH5sJA3dWngBnx1EcyNJZMhFrxSxwo2w4FAi4agaIV10sZ8zmOxFhjWrerJmVB2wDB42iPmnQxze27eEVHtZ5UvpNDQLniVcayMqcMu/idMEddwEXzFdMgBeK7jEtwWlwsYDVBPHWbZMI2iyFMMt1dYT1BPrWVWOH6izZsAqq1iEuP//WeUYgwDeSC0CBGOqRBVmoAEDrhOMWUshAAZVAieqoRxnL+0oTeheea7ziDSLwCBMs8a31VKMEZxkB4PyjDFCcIYQVQYIegnEgZBBQLB8wxoOuQQs+rEEK/kgIQbE68IEQxGAJYxhELFpnH1lkkCwbeB+IpqiZQrxnMBdYBBW3iJdtWI43TngTFz+EjEcZxwOiG+ODwBEI/HHHC05So32U0QJ+fWBMclRPODJRnoFVAUl5ZA4xBEYxDbThGYEEDjKgkDEOGCqRqXmGGiS4MQ/cQXqQZAwyytDHjl3ACbeYFyTDQQtKkSwElODgGI+BhxuKbANP8EQJQYQMPpixZRlQgiMAWcNOeMGVLvsAE/AgivFZBxvEeMQTaJezE0DBDX/4xC2Q8a+8bKMazEjGMYoxC0eUQQkLIps4x0nOcprznOhMpzrXyc52uvOd8IynPOdJz3ra8574BsynPgsSEAAh+QQAAwAAACwAAAAAyADIAIcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEDAwMFBQUGBgYHBwcICAgJCQkKCgoMDAwNDQ0ODg4PDw8RERETExMaGhoaGhobGxscHBwcHBwdHR0eHh4fHx8fHx8gICAgICAiIiIjIyMkJCQlJSUmJiYoKCgpKSkqKiorKystLS0uLi4wMDAyMjIzMzM2NjY4ODg6Ojo8PDw+Pj5AQEBBQUFCQkJDQ0NERERFRUVFRUVGRkZHR0dISEhJSUlKSkpLS0tNTU1OTk5PT09PT09RUVFSUlJUVFRVVVVWVlZWVlZXV1dYWFhZWVlaWlpaWlpbW1tbW1tbW1tcXFxcXFxdXV1eXl5eXl5fX19gYGBhYWFhYWFiYmJjY2NkZGRlZWVmZmZnZ2dnZ2doaGhoaGhoaGhqampra2tsbGxubm5vb29wcHBycnJ0dHR1dXV3d3d5eXl6enp8fHx9fX1/f3+BgYGCgoKEhISFhYWGhoaHh4eIiIiJiYmKioqMjIyNjY2Pj4+RkZGRkZGSkpKSkpKSkpKTk5OTk5OTk5OTk5OTk5OUlJSUlJSVlZWWlpaWlpaXl5eYmJiZmZmZmZmampqbm5ucnJyenp6fn5+hoaGioqKjo6OkpKSlpaWmpqaoqKipqamqqqqrq6utra2vr6+xsbGzs7Ozs7O0tLS2tra3t7e5ubm6urq8vLy+vr7Dw8PGxsbIyMjJycnKysrLy8vNzc3Ozs7Pz8/R0dHS0tLU1NTV1dXW1tbX19fZ2dnb29vf39/i4uLl5eXn5+fp6enr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT29vb4+Pj5+fn6+vr9/f3+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7///////////////////////////////////////////////////8I/gABCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2hHaggBI0ePGSDSQg1BRVGuYcukzdvLl++0ZLpgiSq0BofcoBRyzEnFrK/jx5D3auNliQyNCYdvgpCDS1vkz6Afa9OlCElmmB/W4PIWurXrvtRMQdFwGuUHNLe6vd7Ne142V1481BYZAtO23sh7bxM1Y3jHEJm4JZ+O/FYS5xhJbJJOvXtvZGsy/mCXSIITd+/oeTcLg3k8QwyW0stPDoyHe4Uggs3fjzwVifsG0dAMfwTyhg0aABKkTIEM7lZLXADe0OCErkWzBIB5UKhhaKFs4B4iFGrTDDG6EMNMNhv2hcwJ442ynzOv7CGEDf8hBAIMO4SRSTEUPpMDdoOg58siUahQUQdHCJKLZwRmc+FwPkz3zS531LhRBUeA8gx/3szh3DW96VLHCCQFYQk0+/ExHCi7jWJkSmcIM58dtWHwS2jduOmSDqac110atYHQGGTdiMJiTCGU8o1333hR2wd+6MVXNIi8SdMNuaBHhXNR/HGHDjt5UY13OySYEwi0dPcMhKbe5MU0/tTt0l6rNqFKnSO05uQHdVjkilMWrCG3DQ2+3oQEk99RUKxNPSDLmx/L2iSEbsrBEG1NTgTL2y7X1kSFtrsB2u1MfSBHzQfjzpRqb5ikK5MHy/Q2zazuulTDcbwpUW9MePR2x74wTaDfbnIADNMM1LomrsEu7fqaEwy/RAGPrTGjbMQu9aAwxjC5EVomHMe0SGTf6BGyTEzo4pgrQZxMEw55+NGEcC7XbPPNOOes88489+zzz0AHLfTQRBdt9NFIJ6300kw37fTTUEct9dRUV2311VhnrfXWXHft9ddghy322GSXbfbZaKf9dQugou1BIcjm0ivZNgz4WDNTiG0E/oqReXME2CG0ps2PXn/i2i/0Zh34a/9yncRu2liatRe85cK1Hb2NsfXjBrKg9QRb8oaMeFkbghwrWodADXJ4aL0Gct5EofUuyHVDRNYw4MubNj5kXS5y2RBuNQXEJIfND1jHoDtv3oCB9RbUIZK41JlQF8sFw985HTKGVR1CNNR5U4gFVQ/hXTLC3xRCFHfUAQWrmaGBXihk1jTEK4+F0txpcqDHDSPwc0kQVEYyfZ3mDunRxies1RIhEBA02GBgZv4wn1xsKiVI4MVukjEcEM3HGZsgwsVC0oI/IAM5t6tNHha1H2qUwgkY6AgJ9CCn6YTCOUtw1ny4AYxPsCEH/uSbSAzSMIpkoIdbzsGB3SYkjFDkwQtAiEEHDjKCGgRhD7GQlHx0MZ4Q1DBFe8mGMkrUDB0SCBfuwUAkwMhGvqDuPkFwRhvB2Lb7eMAVc9SQ5Vq1hVHlsUDIqF+rQNAJcP3xiFMslgxmcUj0VOMP4/JB8Rpprj/QbFwTAMOgKNkaaljSYBa4wgM5+RhPXjJiMFjE6ki5F1PazAJLEAX4DpkNVkyBNjqjgJmWuKFaTiGGQeOBIHDhxwJpAxW/TJoLsKAIXfCNOtnYRSTOcIMKRI0GZSBEKGChi2RoETaAeQUoArEFGYANBDLggQ1CoLZ2uvOd8IynPOdJz3ra8574FcynPvfJz376858ADahAB0rQgjIlIAAh+QQAAwAAACwAAAAAyADIAIcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgIDAwMEBAQHBwcJCQkKCgoMDAwNDQ0ODg4QEBARERESEhITExMVFRUWFhYYGBgbGxsgICAiIiIiIiIjIyMjIyMkJCQkJCQkJCQlJSUlJSUmJiYmJiYnJycnJycoKCgpKSkrKyssLCwvLy8zMzM1NTU2NjY3Nzc4ODg5OTk7Ozs8PDw9PT0/Pz9AQEBBQUFCQkJDQ0NDQ0NERERERERGRkZISEhKSkpLS0tNTU1OTk5PT09QUFBRUVFSUlJTU1NUVFRVVVVWVlZXV1dZWVlZWVlZWVlZWVlaWlpaWlpaWlpbW1tbW1tcXFxcXFxdXV1dXV1dXV1dXV1eXl5eXl5eXl5fX19fX19gYGBhYWFiYmJkZGRmZmZoaGhqampra2tsbGxtbW1ubm5vb29wcHBxcXFycnJycnJzc3N0dHR1dXV3d3d4eHh6enp7e3t9fX1/f3+BgYGCgoKDg4OEhISGhoaIiIiJiYmLi4uMjIyNjY2Ojo6QkJCRkZGSkpKTk5OUlJSVlZWWlpaWlpaXl5eZmZmZmZmZmZmampqampqbm5ucnJycnJydnZ2enp6fn5+goKChoaGioqKkpKSmpqaoqKiqqqqrq6usrKyurq6wsLCysrK0tLS3t7e6urq7u7u9vb2+vr6/v7/AwMDBwcHCwsLCwsLDw8PDw8PExMTExMTFxcXGxsbGxsbHx8fIyMjJycnLy8vNzc3Q0NDT09PV1dXX19fZ2dna2trc3Nzd3d3e3t7f39/h4eHj4+Pl5eXo6Ojp6enr6+vt7e3v7+/w8PDy8vL09PT19fX29vb4+Pj7+/v+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7///////////////////////////////////////////////////////////////////////////////8I/gABCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2hJcggBwwaPGSE0pH0KYkgbRKmEXWPHt69fa82IyarkRkeFuUBnrGkUq5rfx5Aj902G6g8SC4htPvCxaJnkz6Aja2O1hkNmmDI6UQvNuvXjWnVCnFYJQhQ317hzs3NVZLZJEo51C3dNTM0E3yE5MBvO3DW0P6aRdxzVvLrrSiaka3yQzbr30NxA/n3QfhHI9/Ogr/k5Tn7iGPTwJTeb0l6ikfj4If+iUf8hjfwA9sWNIRL0xxAHASbITjAkGLjQIgoGaI0ZDiakQXDNRUPMLcZIE+FjpWBQ4UE6TOPaMIvMQcUPMnhwEAcv7GBGIaock6Axso1Y0ArNfGaMI05sYBEMarCSXzQ16FjQBoVE01cxm0zhIkcWTHEKNvBhg4SSLk1BDHxtcOkSEr6gJ4eYLgUhy3lsoOkSD8J814WbLTnQhTPWbeMEnS1VEEh3zW0zBJ8thQBMddi8QChLEQCyTXPIHLboSjQo09wqk7JUQSvN2ZHpSg84wtw2OHy60hq3CQfNlKaiVIQ1/sOp0qpKNGApnBGzptSDNsI1w16uJiGRam6CAIuSGcJtk6OxJR0i3CvMmhTBoboNGi1JIKyWmyzXllSEcDl0S5ImurEi7kgYaItbDOeKpIZup7Qr0i65cTOevB+t8ChufeALkie5LePvRykM25oOA3uESm6aJNxRDLld86vDGd2S25wUa4RGbqRkrFEFe7nmi8cabYLbMyRnlANuxaScUTGuNeIyRlK4xsTMGAXDmjKS4lyRDqFhI4PPGFERcmRNEJ1RCzo/5kqpSmukAyKrjFLHDFFnrfXWXHft9ddghy322GSXbfbZaKet9tpst+3223BfNEMaeighYtwArOFk/l/ZQNIz2zAYIxkxy6ptgY2fTQMD20aGFsvaM7jWW9p+nKg2ta0libZnrkWSNiy4UVPg2eTiFgXaG+Nm7tkVANoaN9mdLUpuo6BtHm6wo40nbqKgLUi9sZcdgm6toN04bk+cHXlu0Pw99iu6PXJ2D7pxY23Z9OZGDQhmf6tbMKOTHadujpiNw3Btll16vXuSjYGHuglaNhXDZRMu2ZwKhw2uY3sAf/VpIJsPDJabQpBtEM0xxcS85oBcNIcYigqbB6DRnGzUwQFhywEBdUML7oENWdWxBh7C1zU5eMcYPABb5bwzint1zRDfwYYkgrc1SpyHG6sAQtcIAZ9hfMEk/jOIoJveAx9rkOIJzsMIBpKwCMyxQxSLQxMP1AWfVqRhaBXhgBMgMQzQYExMJuAcgJCxikOkgQcviA5BPFADKOChEaoAholcgwg3ZeAUH/KLNIyRC2R8Z3JoGgOs8hgfYmDQTYYiZHySRycJCGJfivROsQilgx5F0jq9W1QFCOG6SwqnFp8CASk8OZxMfsoGTSOla4KQKyiUSZWhaZmxaFAKSMLSL9howbVAgAgM3ZIdSROXBeRgKVgO437yygEhvhTJV2whYyCYAyxsiZ9pjEIKmHEZBXIQh06MzzrX+IUm6JBCrtFADZGIBTGa4UvIYIMYqliEHI4gArVpIAQzMOCBDWAQAg4sEG8ADahAB0rQghr0oAhNqEIXytCGOvShEI2oRCdK0Ypa9KIY/VpAAAAh+QQAAwAAACwAAAAAyADIAIcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgICAgIDAwMDAwMDAwMHBwcHBwcHBwcHBwcICAgICAgICAgJCQkJCQkJCQkJCQkJCQkKCgoKCgoLCwsMDAwNDQ0ODg4PDw8QEBARERESEhITExMUFBQVFRUWFhYXFxcYGBgZGRkbGxscHBwdHR0eHh4fHx8gICAhISEiIiIkJCQmJiYoKCgqKiorKystLS0vLy8yMjI0NDQ2NjY5OTk7Ozs+Pj5AQEBCQkJERERGRkZISEhMTExOTk5QUFBSUlJUVFRVVVVWVlZWVlZXV1dYWFhZWVlZWVlaWlpbW1tbW1tcXFxeXl5fX19hYWFjY2NlZWVmZmZnZ2dnZ2doaGhpaWlpaWlqampra2tsbGxtbW1ubm5ubm5vb29vb29vb29wcHBxcXFycnJzc3N0dHR2dnZ3d3d4eHh5eXl6enp6enp7e3t8fHx8fHx9fX1+fn5+fn5+fn5/f39/f39/f3+AgICAgICAgICBgYGBgYGCgoKCgoKDg4OEhISGhoaIiIiKioqNjY2QkJCSkpKUlJSWlpaYmJiZmZmampqbm5ucnJydnZ2enp6fn5+fn5+hoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCwsLCxsbGysrK0tLS1tbW2tra3t7e4uLi6urq7u7u8vLy+vr6/v7/AwMDBwcHDw8PExMTHx8fLy8vOzs7R0dHT09PU1NTW1tbZ2dnb29ve3t7f39/h4eHj4+Pk5OTl5eXn5+fp6enq6urs7Ozv7+/y8vL19fX39/f39/f4+Pj4+Pj4+Pj5+fn5+fn5+fn5+fn5+fn6+vr6+vr7+/v8/Pz9/f3+/v7+/v7+/v7+/v7+/v7+/v7///////////////////////////////////////////////////////////////////////////8I/gABCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTqqUIZZQwYsiWQat2rV27as+SEQPGStIaJ0BGrC26p67dw4gTK26nTBWbIoN9bii1uLLlxMH6BImc89Xlz6CXTUrCmWYR0KhBQyMEozRMYqljXxZ3yohrljhk674cTMntlKd3C18M7Mhvk06GK1e8y/ZxkUOWS0ecqvVzkNOma69mBsJ1j5u0/osfBuQ7RxvVxGsXJ8f8RiXm1Gu3hcJ9RjDW5E9vBtn+xRWTLKOfdHb4lxEKRiBBBBA5wGACAC30cAQUYugxiSi3QDMgYrN4YGBKPawBS34DDrPChypRYEQgwJAjnzI3oMhSC4pQo940P8jIkgdnKCOeNUjoyBIEUAijXTdBCsmSEa7Et9w1RCjZ0hA+LldNjlKutMEkTg4njQ5ZLsnMcs3MEOZKHlhyjnLFUHDmSkhoONwlb650winKYVHnSo8Md40Pe6oERpeyKVNCoCk1gY1wsyCaEhLdCLeFoyg5Uc5u0zxIqUlXrKkbJZueRMZu5WwWakmV7DbMqSVRMMxu/mCwStIMNsoGjZuyioQEoaiFketIfujGjHe/hgSbbFMUG1JwsRmjbEid6MbEsx+5QGJqsFD7UbCxiaOCth2Z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pKSkpqamp6enp6enqKioqKioqKioqampqampqampqqqqqqqqqqqqq6urq6urq6urrKysrKysrq6ur6+vsLCwsbGxsrKytbW1t7e3ubm5vLy8v7+/w8PDx8fHy8vLz8/P1NTU2tra39/f4uLi5OTk5ubm5+fn6enp6urq7Ozs7u7u7+/v8fHx8vLy8/Pz9fX19vb29/f39/f3+Pj4+fn5+fn5+vr6+/v7+/v7/Pz8/f39/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+////////////////////////////////////////////////////////CP4AAQgcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gw4odS7as2bNo06pdy7at27dw48qdKxCIGDVDXNBlWmMUNXmAAat6sffoDVaBEwOOxqTw0BuqxCme/C2H4583XkmezDlZiMs7SUTiTDowHNA5hSgrzfoXapstQLGeTe01TR7MZs/eZlumGm+6ZyPr/fJEr+C6cRFvqSMZct1flq/Usu357GPSVSayPjscjuwoHf5xZ80MCPiTo8eTHtXivMlM6id70yTDvUlG8RPPr2+/ZJf8gQ1TQ38mAREOgM1oQaBJN/wVXziRnLBgSTDkFh8zPkxYkgjI5CeMXhqSxEl84gySQYgkGREfNOahOFIK0KinzAwukoSKjPzVGBITOOooEgkxcgcNjT6GZMh43OxQZEgvXMPdOE4sGZJs3M0hJUg4jMOda1d+JAx3zIAYVgtbWALMJWjokNQS47UYlhjWKDYOJSYcZQx3kIj1QjClLXNDUTxwl4wHYv0iHKFDncJdhmH9p1ueQr3A3S5jOYMckUABYl04NogVw3OFBJWBpc9dMhYSzzETlBLWXQPDWP5JWFcEUIo+JwlZMlinyk8dVGPdgGRF85w37fXE43PDmGXoc2b4dONzV5iVhXXE9NQBNs85w4FZHUzz3Dcl8OSEdY+gJYl1T/CEiXU9oKWDdabu1CFyy6h1J707nWCdI2rVYV2nObH6HA9qvfscGjrhh1w0bD3zHCs6EfMcpWvVGtxwOHHwzXNtsMXFc+KceFMO1hG8Vg3WWXbTscFlI/JacSK3BU5qPCeMWxIjtwhO6QUHKVuWPJcKTr4c7FYYNuM0b3BNuKUictjdVB1yara1w3P12lSCdSK4NcNz3NzkwrdveWBdnTV9ipw1cMUcHA020fAcw2+thtyfNdmQKv5cziEHd00kI5cMXHYHl+NMVyOHsVsOI0cY4M8N/pavyK1gk9rBVQMXcMh1bZN1iLKVgnU4eeu3W4kHNw1OfQfXbltUPBe1TcU8N3NbcDyn3E3HIdeIW5c8V+5NkDwXDM7M4uRocHSvpfFzSuCUenAxsNWDdd/d5MFmwVXB1hrPZbOt0s95wlYtyOpksW7QsCUscoro1EbKagWO3BE6BfqclWkhArKEOglScJKVltbpZnY5GQXIXnUWgyFnEjy5gnUMgZZFWCd6O1mBdZqBlsLppjY9GYZ1omCWKFjnFD5xg3WOV5acIWcJPomBlpDjDc+JxX6Z68BPloUcN4UlFf7WQQVQBIYcP4zFBgd6TpR+koFmPGcQY+kdcp4xvp8IAnpi8QF3BCGUGHBvNo8Dy72Qw41iBSV4uuGFWExoHU0QpQQG5Aw2DteVFDjxX0XZwRcnowaxkII7NzMKD47RmSu8zCtPs04SkvKF2skjGaggoZ4a95xidOkjvBiPyS65kdxx5xWc5IgTZjgsTIXyIj3gxngYccqM1EAa44EGAFtZkRrckTveo2VFcvA+7ghRlxTxAeW404wUAHMiWlDleMbhw2M2BASayA+/nPkQGBAyPoOipkN8IMDxSANY2lTICSSRRPVw43XhTMgWSBUfKKUzITUQIYDkwYZ3HmQGnM/gHIAwYc+CzMATG5unPMzXT4HkgIcC/V1BNwAIZQpUHoAoqED891B5jCMMEgUADaYmUHHcTqJFe6gzgpBRAHRgj/EZBgMz6sD8jEMRGyipQJYXn2jMSqYC0QKAThFGnGJOUM3EKQDiqJtsBAIEQjUITXUjjL8l1SDACI4wbvrUg7ygm3LqxSarihAYFOKWgVFF9rjaECM84heeIAMdycrWtrr1rXCNq1znSte62vWueM2rXvfK17769a+ADaxgB0vYwhr2sIhNrGIXy9iaBAQAIfkEAAMAAAAsAAAAAMgAyACHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAwMDAwMDBAQEBAQEBAQEBQUFBQUFBQUFBQUFBgYGCAgIDAwMEBAQFRUVHh4eHx8fICAgISEhIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqLCwsLi4uLy8vMDAwMTExMTExMjIyMjIyMzMzNDQ0NDQ0NTU1NjY2Nzc3Nzc3ODg4ODg4OTk5Ojo6PDw8PDw8PT09Pj4+Pz8/Pz8/QEBAQUFBQUFBQUFBQkJCQkJCQ0NDQ0NDRERERUVFRkZGR0dHSUlJTExMTk5OUFBQUlJSVFRUVlZWWVlZW1tbXV1dX19fYGBgYGBgYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYmJiYmJiYmJiYmJiY2NjY2NjY2NjZGRkZGRkZmZmZ2dnaWlpampqbGxsbW1tbm5ubm5ub29vcnJydHR0eHh4enp6fX19gYGBg4ODhYWFh4eHioqKjo6Oj4+PkJCQkpKSk5OTlJSUlpaWl5eXmJiYmJiYmZmZmZmZmZmZmpqampqampqampqampqampqam5ubm5ubm5ubnJycnJycnJycnJycnZ2dnZ2dnZ2dnp6enp6en5+fn5+foKCgoaGhoaGhoqKio6OjpKSkpqamp6enqKioqqqqq6urrKysra2trq6urq6ur6+vsLCwsbGxsrKys7Ozs7OztLS0tbW1tra2uLi4urq6vLy8vb29wMDAwsLCxMTExsbGx8fHycnJzMzMzs7O1NTU2tra4ODg4uLi5OTk5ubm6Ojo6urq7Ozs7e3t7+/v7+/v8PDw8fHx8vLy8vLy8/Pz8/Pz9PT09PT09fX19vb29/f3+fn5+fn5+/v7/f39/v7+/v7+/v7+/v7+////////////////////////////////////////////////////////////////////////////////////////////////CP4AAQgcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gw4odS7as2bNo06pdmzZEl0G3aiGCwjbqCjaolqHbyxfdKxB1l+5Q9KyvYb7KRAQ2CmJPssOQ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qampqqqqq6urra2trq6ur6+vsbGxsrKys7OztLS0tbW1t7e3ubm5urq6u7u7vLy8vb29vr6+wMDAwsLCxcXFyMjIzMzMz8/P0dHR1NTU1tbW19fX2dnZ2tra3Nzc39/f4uLi5eXl5+fn6urq7e3t7u7u7+/v8fHx8vLy8/Pz9fX19fX19vb29vb29/f3+Pj4+fn5+vr6+vr6+vr6+vr6+vr6+/v7+/v7+/v7+/v7+/v7/Pz8/Pz8/f39/v7+/v7+/v7+/v7+/v7+////////////////////////////////////////////////////////////CP4AAQgcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gw4odS7as2bNo06qNqMNJnE+5hhVT5izatXjXho1qshapETu4msUbTLiw4cGmTPQNykPNLGqHI0uO50zFYp4/DAmezDnyrMs4aew51rm05CmgaSbBZbp15GCpYV6IMsy1bcPRYrfcQGbZ7d+FQ+hWGcUZ8OODRQw/SQMYcuTMlpf0sMjbc+SwpI+cYvw6ciTaQf6CgOX9eajwH334Ln/cmXD0HMFoY3+81Hv4GTuYon+7ml6++GnEAjH8HQaNMKYAYkUSReQgAwoBelTDZvyRM4wmT1gWYUlFSMNfNaIw0cGGKCmBDXvXpOLEBiSmVEU65UnDx30tnjRFedHk8UGNKi0B43PkaLIjjykdwc11wthApEo7WPOcM1IsqVIM0TzXypBSntRBMshpM0aWKsWCXDI3gJkSGciNMqKZJ/nwzXF0sImSCN39doacKPFyHBh4niTGcV/2WZIKkP22h6AmjQIcKIiWdARw2TU6UgZc3vZLBpKOVMdvzYCQqUgf3GXbN0B8KlIev6lhakgdVGlbLv6rhqTGbdRoGGtHGTxzG5+3esTFbcL0+hGBrqVTprAc0XDbJMh2NIht1nja7EZ1mtbItBs96po3LGCr0Se2ieJtRhlM4xo7M4yLERK29aIuRnvY9sW7F+Xi2jdY0ivRBaKaVou+FRVhWxUAU+SGbfkW/BB5rR2j8ETMuMbowxBl8KNpVlAMkbKupauxQ0q4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/v7+/v7+/v7+/v7+/v7+/v7+////////////////////////////////////////////////////////////////////CP4AAQgcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gw4odS7as2bNoRWYAoUKGDSFCZohI+zTDDi+IQhF7x7ev33famBXTtSkPlxwc6AKV8UWTsb+QI0u2BmwRE8U3R7QZRU2y58+Rr4X68gHzyw9jdoEDzbq132+otlwwndLLKde4c/O9JqkG7ZEhEnXWTTw3sTUefne08am48+KgRii/GIELsOfYiV/TMp0iFmTZw/4Tj9Idogxd4tPnTja7/EIQl9TLx43HvUIs1ubrZw3M/kEPoOwn4Gfa+FdQFNIMqKBkMBgIQAaYLCghZCAYuMIxE/Z1DTPGAPMLMchIk418xBjYw3ACRjMKI2AYMZdCLlyRByjFYLeIf1hws58ynXzxgkUYTMHIMKvhFk1i7u2hnzKJzODRB1x44tpl7nUi3zSO7ECSB2xgKJk0U9g3inrEeKESE2P+JUpp7jUnHihDuHTDHYQQkocN/sUX3igNOihTH+EJ44OfM5GRnTJdEDqTE+FgRwkGisoUQjXPVUNFpDJFcJ1zrISAqUyNPJfIpzJN4dw3ZpIKUweUEpfNE/6qxsRJcdngECtMQRS3DRC3vhSBl7lxk0SvL/1BnDfkEduSCzrqFoayLolCHCjQtjRDo7kV0161KkmbGzYrcLvStbolKq5KoeiGy7kqkYvbNiewm1KAubUhL0oQjIhbifeedINuPfR7Ehu52SLwSW/kFvDBJQGBGysMn9Qsa1pGXBIerVFrcUkTACtZNMltXBIKe3lGpcglXZAuZMcIgXJKV3QC3jvHvWzzzTjnrPPOPPfs889ABy300EQXbfTRSCet9NJMN+3001BHLfXUVFdt9dVYZ6311lx37fXX3dkAhya2PLLFBl1vcAm2fWUjxtY0NOMZKmxajcHMnnGCtf4mrVVMdQ6u+WK1La6BAwHVPeTm5NTo4cbF1EnolizUEDyGWzaHRy2HbppIfcI2uX2jgtS46LaJ1FzoJnrUJeSX2yVRXzCMbt28+DS9uUkStRnEVVN301V4Q9wXUCfRDXGCPw0E6LS78HQN+uqmx9NRYFMcMhE43cY3xXFDQ9MQzOqcuUu/EMxzsDMthjbPDTPB0h+wgp01JSg9wRuuO7eNrUlj4XFx3RgW0mTwi/B8owr2cYEYHmELTYjBUy2ZQinSQ77u5CEyoIBCSjawhv9hBwzu+YAwPpMMPEhnJFDARPTEQzz33IY14PhFHnzTER88whnzyUac3JMG4jDjEv5XyIBFZEAGUERjP81YnHuYgR1igCIPVnAeQloABC2kIRGbYAWK9kMM25XHBTmMBjKI8YtibDFDp0Cbf76QoQxxow6Z848Y2ighYsiAUA6jo4C8gYj3EeoCetwPMmgYKSkFMj3WkMO2IgWCaxwyO9xoBJJUdYZHOgccnYgXsb7gSEu6hhuYiAG3QiA+T3qGGoioELs+EAfLmbIvyDADpA4WhE2wz5LZ4AQCRaYBMGyqjdfoxBUW+bITeIETyhgQN3jRByFk72cvAIMRxQOOYDBiCkI8WgiA0IU9cEIXxWAG8zwjjFAQogs5uNoIZgAXG8hABR+YJdjmSc962vOe+B7Mpz73yc9++vOfAA2oQAdK0IIa9KAITahCF6qogAAAIfkEAAMAAAAsAAAAAMgAyACHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAgICAwMDBAQEBQUFBQUFBgYGBwcHCQkJDAwMDQ0NEBAQEBAQEREREhISExMTExMTFRUVFxcXGRkZGhoaGxsbHBwcHR0dHh4eHx8fICAgISEhISEhIiIiIiIiIiIiIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqKysrLi4uMTExNDQ0Nzc3OTk5Ozs7PDw8Pj4+Pz8/QEBAQUFBQ0NDQ0NDQ0NDRERERERERUVFRUVFRUVFRkZGSEhISkpKTExMTU1NT09PUVFRUlJSU1NTVFRUVVVVV1dXWVlZW1tbXFxcXV1dX19fYGBgYWFhYWFhYmJiY2NjZGRkZWVlZ2dnaGhoaWlpa2trbGxsbW1tbm5ub29vb29vcHBwcXFxcnJyc3Nzc3NzdHR0dnZ2d3d3eHh4eXl5enp6e3t7fHx8fX19fX19fn5+f39/gICAgoKChISEhYWFhoaGh4eHiIiIiYmJioqKi4uLjIyMjY2Njo6Oj4+PkJCQkZGRk5OTlJSUlZWVlpaWl5eXmJiYmZmZm5ubnJycnZ2dnp6en5+foKCgoaGhoaGhoqKio6OjpKSkpaWlpqamp6enp6enqKioqKioqKioqampqampqqqqq6urq6urrKysra2tr6+vsLCwsbGxs7OztLS0tra2t7e3urq6vLy8vr6+wMDAxMTEx8fHycnJy8vLzs7O0NDQ0tLS1NTU19fX2dnZ2tra3Nzc3d3d39/f4eHh4+Pj5OTk5ubm6Ojo6enp6urq6+vr7Ozs7e3t7e3t7u7u7u7u8/Pz+fn5/Pz8/f39/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+////////////////////////////////////////////////////////////////////////////////////////////////CP4AAQgcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gw4odS7as2bNo06qVaALIljuVbPkalswZNnTYmg3jNYtTIz5qtjQhsRboCiyIdt1Fx7ix48eQGROLZMVD4Zs+9NiCFrmzZ8/BGk3hcNnlhSiUln1ezTpytlVHSqMUISbW4ta4czM+ZieEbJE+VmnTTbx4NlNGfnOcQIVX8efQjdHxrdyiFGHQs0PPVqpIdYk/ev5pH5+dV47vDW/EIs9++yAN6BGWyDS8vf3iyZLHJ0jm9v3/uoUiwn4erAfggcRRIwZ6QzSD4IPE8bKDcnZsA+GFuWHzQ2kVjILhh7hZM+FaIogHoTS5dEKIGlMEwcMKIAAggg5EaNHGIJjMgt2DuqyFgzIHahNMJV7QQFEHURTCSzb/cZNCWkj4xx4zmVzRAUcZBIFHLda0dwdaVdx3DB49lPTFMOR5chYS9Y23DS1QqLRELtpZYtYQTI4nzSEquNQDKm3q5khZQEhZHDaCbCCTDr8UVwVZPRhK3CpP0jTBGV3ilgxZJUSj3TNI5CRCKLitMVYGwWgnimU7DYHMav6xVDCWh9BFQwVQgGQKGSVkzZFdMIQFFcIkbWbzSRBkIZGdK4oWBYMQRrA6Vgq6EifIfjtl8lw2WWCrUwmB4qZNqN7m5Ehx2jxabk6+EMeNFuvqpAtxZsSrk4G4JWKvTmrktssE++bkQbidGXNlwDnVwho2LSCs0wnEfGbNhg7r1IEtnUHDQ8U9UWGMY8SwcTDHPfUQhhxAkKzyyiy37PLLMMcs88w012zzzTjnrPPOPPfs889ABy300EQXbfTRSCet9NJMN+3001BHLfXUVFdt9dVYZ6311lx37fXXYIct9thkl2322WinrfbabLft9tvVbfADdWZzQAbGjClzCP5pY/MwTWTRTCH2DtU+pk0TYLtAzWrYpNy1BmiyFozXsuRmAtd86Fav1lFwoxseWgsh6WdtZF1ocWRgfTpx2aBw9erERXJ1FaOvZk2wYoWghiBrOF5UH9kRMRYQdDqGDSOVAqVBK9mpMdYQtQMClA/FZKfJ8LUzZswQPQGi3S9kRdwaJwPiRMOO0DlTflhS6DYNGDaB4Eie0FFz3lipRng/TBroUXhx1igTWaCjDVcIryUUMIODxoMNH5gle6wZxhmadZISAAJI5MkG98zyDPJgQxIuKIkUFGYfxJ1FFO3hhjAeMZqOlIAMqPibfayBLLRA4UC+KAS5JhKCJszhE/7i+48xjKQWzjzIGb+gxSX8YIYo+IAwIGBBD4RQBTYYIhS6MOKDeCGttByBfiAKY2RGIavLfFGMaGwMN/KgHB04J41hZIZ+qkMGGcIRQpfgG3pE4Ik7ImgZ3ilXEF7lR/toQo/lyoAfwFjI5/SCYgFjwRsbSZxfmJBjRYiFhSjJGmJcwWUqaMT/OImObdRCCgCDGQfYcAxSMsYZhOhTzSYgheIVchdauMDOcIAJCALIGq0gQwmApgEiaGZxCNqGLwQRBAogLQdl4MTHyGONWwCiCSNzmgp+0IQv0KEQnKhFL5JhKGwMgxaSoAMWRgS3drrznfCMpzznSc962vOe+BXMpz73yc9++vOfAA2oQAdK0IJeJiAAIfkEAAMAAAAsAAAAAMgAyACHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAgICAwMDAwMDBwcHDg4ODg4ODw8PEBAQEBAQEhISExMTExMTExMTFBQUFBQUFRUVFhYWFhYWGBgYGRkZGxsbHBwcHR0dHx8fISEhIyMjJCQkJiYmJycnKioqLCwsLy8vMTExNDQ0NjY2OTk5Ozs7PT09Pz8/QUFBQ0NDQ0NDRUVFRkZGR0dHSUlJS0tLTExMTk5OT09PUVFRUlJSU1NTVFRUVVVVVlZWV1dXWFhYWFhYWVlZWVlZWVlZWlpaWlpaW1tbW1tbW1tbXFxcXV1dXV1dXl5eX19fYGBgYWFhYmJiY2NjZWVlZ2dnaWlpa2trbW1tb29vcHBwcXFxcXFxcnJycnJycnJyc3NzdHR0dXV1dnZ2dnZ2d3d3d3d3eHh4eXl5eXl5enp6e3t7e3t7fHx8fX19fX19fn5+gICAgoKCg4ODhYWFh4eHiYmJiYmJiYmJioqKioqKioqKioqKi4uLjIyMjY2NjY2Njo6Oj4+PkJCQkZGRkpKSlJSUlpaWmZmZnJycnZ2dn5+foqKipKSkpqamp6enp6enqKioqampqampqqqqqqqqqqqqq6urq6urq6urrKysrKysrKysra2tra2tr6+vsLCwsrKys7OztLS0tLS0tbW1tra2uLi4ubm5urq6u7u7vLy8vLy8vb29vr6+v7+/wMDAwsLCw8PDxcXFysrKzs7O0tLS1dXV29vb39/f4+Pj5ubm6Ojo6+vr7Ozs7u7u7+/v8PDw8fHx8vLy9PT09fX19/f3+Pj4+fn5+vr6+/v7+/v7/Pz8/f39/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+////////////////////////////////////////////////////////////////////////////////////////////CP4AAQgcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gw4odS7as2bNo06qNuALIGUm2jCVb1kxatnR48UZLpquToTRMdKwFqsMMpmLW8ipezLgxsk9zjrgYXHMJpmONM2vejJcZpSGUW2oIsika59OoGVcr9UVEaJM8JDVLTbt23m6ngLwGuUEKZtvAgSMz42G3Rg9olgVfHjwaoxjGK2ogM5u5deDfNqmIHhFI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m5ubm5ucnJydnZ2enp6fn5+goKCioqKkpKSmpqaoqKiqqqqsrKyurq6wsLCysrKysrKzs7Ozs7Ozs7O0tLS0tLS0tLS0tLS1tbW1tbW1tbW1tbW3t7e4uLi6urq7u7u8vLy9vb2/v7/BwcHCwsLCwsLDw8PExMTExMTGxsbIyMjLy8vOzs7T09PX19fc3Nzf39/h4eHi4uLk5OTl5eXm5ubo6Ojq6urr6+vt7e3u7u7x8fHy8vLz8/P19fX39/f8/Pz+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7///////////////////////////////////////////////////////////////////////////////////////////////8I/gABCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2hHfiihQgYPIDhUkEj7lMUSO4xOFbOGrq/fv9OSFcslCU4PukGD3NEUjO/fx5Aj9zUmao8REIhthrASSprkz6AjWyvlZW7ml1pwhV7NGnIuOyhOqwxSrLXt2+iy0VIiQXbJK7iD3z6GZ4TvkDKuCV/e2lqlGMc9GmNOvbUuKdE16qjOnbUwHtkv/vbpTj50qBThKQorz16ytUEh0kes3b7+42VA5D/EZL+/32yMfKAfQ1b4ZyA6x+wwoEISTHdgf9gEksGCCCXBnTPF+GIMNA8+9ksJFB6Uh23BGFJHFUHEAKJBJcAARBqGpHKMgci8EKJBUYAmjCFHxFcRDXSoVt80Q9xYkAyg/CUMIkr4uBEJZJxSnxxGGgRDDiWFQAZ95D1SpUtCpJINeaH09iVLLEziWHWdnOmSCZpgwx0jbrpEgy7cBVKnS1DMSJ0de7bEASNjMtdEoC0N4Qxz1aiAKEsl0MJcMRw8yhIfzH1iKUtSKCfcGpuuxINnwVmDXqgpreAnbrWgqpIJ/qveVoWrKaWwKG7NOElrSTJQE1wku6I0RKG2ZaNDsCdhitsvyJ50S3BENFvSCMksKy2vntpW5LUjjXgbs9yKdIGDtgURrkg+4JbLuSIl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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        TRIGGER_EVENT: {
            game_end: !1,
            game_ready: !1,
            game_retry: !1,
            install: !1
        },
        _isPreview: function() {
            var A = !0;
            return A = "false" === this.getQueryString("preview") ? !1 : A
        },
        _isPreviewTrue: function() {
            var A = !1;
            return A = "true" === this.getQueryString("preview") ? !0 : A
        },
        _isItaVideo: function() {
            return 1 === Number(this.getQueryString("itavideo"))
        },
        _hasLoading: function() {
            return !this.getQueryString("loading") || 0 !== Number(this.getQueryString("loading"))
        },
        _hasLogo: function() {
            return !(!this.getQueryString("logo") || 0 === Number(this.getQueryString("logo")))
        },
        _hasReview: function() {
            return !(!this.getQueryString("review") || 1 !== Number(this.getQueryString("review")))
        },
        addDefaultLoading: function() {
            var A = document.createElement("div")
              , e = document.createElement("style")
              , t = '<div id="loading-layer"><img id="loading-icon" class="loading-pic" src="' + this.loadingIcon + '" alt=""></div>';
            A.innerHTML = t,
            e.innerHTML = "#loading-layer{position:fixed;top:0;left:0;bottom:0;right:0;background:#000;z-index:10000}#loading-icon{width:50px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}",
            document.documentElement.appendChild(A),
            document.documentElement.appendChild(e)
        },
        removeDefaultLoading: function() {
            document.querySelector("#loading-layer") && document.querySelector("#loading-layer").remove()
        },
        review: function() {
            this._hasReview() && (console.log("开始检查（如果 URL 的查询参数 review=1，则会执行检查）"),
            e.init())
        },
        errorListener: function() {
            this._hasReview() && e.addErrorListener()
        },
        messageListener: function() {
            var e = this;
            this._hasReview() && window.addEventListener("message", function(A) {
                A.data && "previewer:review" === A.data.type && A.data.data && A.data.data.reviewResult && A.data.data.reviewResult.no_game_retry && (e.TRIGGER_EVENT.game_retry = !0)
            })
        },
        emitCheckData: function(A) {
            this._hasReview() && (this.TRIGGER_EVENT[A.type] = !0,
            e.emitCheckData(A),
            this.checkTriggerEvent())
        },
        checkTriggerEvent: function() {
            this.TRIGGER_EVENT.game_end && this.TRIGGER_EVENT.game_ready && this.TRIGGER_EVENT.install && this.TRIGGER_EVENT.game_retry && this.checkDone()
        },
        checkDone: function() {
            e.checkDone()
        },
        getQueryString: window.MW_GET_QUERY_STRING,
        isWechatAndPSVideo: function() {
            return window.ps && window.ps.VideosManager && window.ps.Video && window.ps.Video.__ability && -1 !== window.ps.Video.__ability.indexOf("mp4") && window.MW_ITA_COVER.isWechat()
        },
        init: function() {
            var A = this;
            A._hasLoading() ? (console.log("加载 loading（如果 URL 的查询参数 loading=0，则没有loading）"),
            1 === Number(A.getQueryString("loading")) ? window.MW_LOADING && window.MW_LOADING.init() : 2 === Number(A.getQueryString("loading")) && window.MindWorks_LOADING && window.MindWorks_LOADING.init()) : window.MW_INIT.addDefaultLoading(),
            A._hasLogo() && window.M_LOGO.addLogo(Number(A.getQueryString("logo"))),
            A.errorListener(),
            A.messageListener(),
            window.addEventListener("load", function() {
                var t;
                A._isPreview() && (window.MW_PREVIEWLAYER && window.MW_PREVIEWLAYER.init(),
                t = function() {
                    (A._isItaVideo() || window.MW_ITA_COVER.isItaVideo()) && window.MW_ITA_COVER.addCover()
                }
                ,
                (A.isWechatAndPSVideo() ? function A() {
                    var e = window.UIRoot && window.UIRoot.getChild("gamePlay");
                    e && e.VideosManager && document.querySelector("video") ? t() : setTimeout(function() {
                        A()
                    }, 5e3)
                }
                : t)())
            })
        }
    }
}
)(),
window.MW_INIT.init(),
(A => {
    A.layerTips = function(A) {
        var e;
        document.querySelector(".layerTip") || ((e = document.createElement("div")).className = "layerTip",
        e.innerText = A || "默认信息",
        e.setAttribute("style", "position: fixed; top: 50%; left: 50%; z-index: 10000; background-color: rgba(0, 0, 0, 0.5); color: #fff; font-size: 12px; padding: 5px 10px; transform: translate(-50%, -50%);"),
        document.body.appendChild(e),
        setTimeout(function() {
            e.remove()
        }, 5e3))
    }
    ,
    window.UF || (window.UF = A)
}
)(window.UF || {}),
window.MW_INIT.gameReadyCalled = !1,
function n(o, i, a) {
    function r(e, A) {
        if (!i[e]) {
            if (!o[e]) {
                var t = "function" == typeof require && require;
                if (!A && t)
                    return t(e, !0);
                if (c)
                    return c(e, !0);
                throw (A = new Error("Cannot find module '" + e + "'")).code = "MODULE_NOT_FOUND",
                A
            }
            t = i[e] = {
                exports: {}
            },
            o[e][0].call(t.exports, function(A) {
                return r(o[e][1][A] || A)
            }, t, t.exports, n, o, i, a)
        }
        return i[e].exports
    }
    for (var c = "function" == typeof require && require, A = 0; A < a.length; A++)
        r(a[A]);
    return r
}({
    1: [function(A, e, t) {
        var n, a = this && this.__assign || function() {
            return (a = Object.assign || function(A) {
                for (var e, t = 1, n = arguments.length; t < n; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (A[o] = e[o]);
                return A
            }
            ).apply(this, arguments)
        }
        , r = this && this.__awaiter || function(A, a, r, c) {
            return new (r = r || Promise)(function(t, e) {
                function n(A) {
                    try {
                        i(c.next(A))
                    } catch (A) {
                        e(A)
                    }
                }
                function o(A) {
                    try {
                        i(c.throw(A))
                    } catch (A) {
                        e(A)
                    }
                }
                function i(A) {
                    var e;
                    A.done ? t(A.value) : ((e = A.value)instanceof r ? e : new r(function(A) {
                        A(e)
                    }
                    )).then(n, o)
                }
                i((c = c.apply(A, a || [])).next())
            }
            )
        }
        , w = this && this.__generator || function(n, o) {
            var i, a, r, c = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, s = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
            return s.next = A(0),
            s.throw = A(1),
            s.return = A(2),
            "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function A(t) {
                return function(A) {
                    var e = [t, A];
                    if (i)
                        throw new TypeError("Generator is already executing.");
                    for (; c = s && e[s = 0] ? 0 : c; )
                        try {
                            if (i = 1,
                            a && (r = 2 & e[0] ? a.return : e[0] ? a.throw || ((r = a.return) && r.call(a),
                            0) : a.next) && !(r = r.call(a, e[1])).done)
                                return r;
                            switch (a = 0,
                            (e = r ? [2 & e[0], r.value] : e)[0]) {
                            case 0:
                            case 1:
                                r = e;
                                break;
                            case 4:
                                return c.label++,
                                {
                                    value: e[1],
                                    done: !1
                                };
                            case 5:
                                c.label++,
                                a = e[1],
                                e = [0];
                                continue;
                            case 7:
                                e = c.ops.pop(),
                                c.trys.pop();
                                continue;
                            default:
                                if (!(r = 0 < (r = c.trys).length && r[r.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === e[0] && (!r || e[1] > r[0] && e[1] < r[3]))
                                    c.label = e[1];
                                else if (6 === e[0] && c.label < r[1])
                                    c.label = r[1],
                                    r = e;
                                else {
                                    if (!(r && c.label < r[2])) {
                                        r[2] && c.ops.pop(),
                                        c.trys.pop();
                                        continue
                                    }
                                    c.label = r[2],
                                    c.ops.push(e)
                                }
                            }
                            e = o.call(n, c)
                        } catch (A) {
                            e = [6, A],
                            a = 0
                        } finally {
                            i = r = 0
                        }
                    if (5 & e[0])
                        throw e[1];
                    return {
                        value: e[0] ? e[1] : void 0,
                        done: !0
                    }
                }
            }
        }
        ;
        n = function(A, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var l = A("./utils")
              , n = A("./index.type")
              , s = {
                position: "position",
                eulerAngles: "eulerAngles",
                scale: "scale"
            };
            var d = {
                x: "x",
                y: "y",
                z: "z"
            };
            function o(A) {
                window.parent !== window && window.parent.postMessage({
                    type: n.ModelEditorProtocol,
                    data: A
                }, "*")
            }
            var i = {
                ModelPreviewInstance: null,
                replaceMode: 1 === Number(window.MW_GET_QUERY_STRING("pre_replace")),
                replaceData: window.MW_GET_QUERY_STRING("pre_data"),
                modelPreviewMode: 1 === Number(window.MW_GET_QUERY_STRING("model_preview")),
                modelPath: window.MW_GET_QUERY_STRING("model_path"),
                disabledReference: 1 === Number(window.MW_GET_QUERY_STRING("disabled_preview_reference")),
                disabledStatistic: 1 === Number(window.MW_GET_QUERY_STRING("disabled_preview_statistic")),
                disabledGrid: 1 === Number(window.MW_GET_QUERY_STRING("disabled_preview_grid")),
                disabledOperation: 1 === Number(window.MW_GET_QUERY_STRING("disabled_preview_operation")),
                disabledAnimation: 1 === Number(window.MW_GET_QUERY_STRING("disabled_preview_animation")),
                startupConfig: 1 === Number(window.MW_GET_QUERY_STRING("startup_config")),
                replaceStatus: !1,
                checkIsSupportReplace: function() {
                    return Boolean(window.assetsPackage) && this.modelPreviewMode && this.replaceMode
                },
                continueRender: function() {
                    this.replaceStatus = !0
                },
                createModel: function(A) {
                    this.ModelPreviewInstance = ModelPreview.create(this.modelPath, A),
                    this.addBridgeListener()
                },
                init: function() {
                    return r(this, void 0, void 0, function() {
                        var t;
                        return w(this, function(A) {
                            switch (A.label) {
                            case 0:
                                t = this,
                                A.label = 1;
                            case 1:
                                return (A.trys.push([1, 6, , 7]),
                                this.checkIsSupportReplace()) ? (Array.isArray(this.replaceData) || (this.replaceData = [this.replaceData]),
                                this.replaceData && this.replaceData.length ? (this.modelPreviewMode && this.createModel(function() {
                                    return new Promise(function(e) {
                                        (function A() {
                                            !0 === t.replaceStatus ? e() : setTimeout(A, 100)
                                        }
                                        )()
                                    }
                                    )
                                }),
                                [4, this.replaceDataToAssets()]) : [3, 3]) : [3, 4];
                            case 2:
                                A.sent(),
                                A.label = 3;
                            case 3:
                                return [3, 5];
                            case 4:
                                this.modelPreviewMode && this.createModel(null),
                                A.label = 5;
                            case 5:
                                return [3, 7];
                            case 6:
                                return A.sent(),
                                console.error("替换资源失败"),
                                [3, 7];
                            case 7:
                                return [2]
                            }
                        })
                    })
                },
                replaceDataToAssets: function() {
                    return r(this, void 0, void 0, function() {
                        var t, n, o, i, a, r, c, s, d;
                        return w(this, function(A) {
                            switch (A.label) {
                            case 0:
                                this.replaceData = this.replaceData.map(function(A) {
                                    return JSON.parse(A)
                                }),
                                t = 0,
                                n = this.replaceData,
                                A.label = 1;
                            case 1:
                                if (!(t < n.length))
                                    return [3, 5];
                                if ("gameConfig" !== (o = n[t]).type || !window.assetsPackage.gameConfig_json || !o.value)
                                    return [3, 2];
                                i = {};
                                try {
                                    i = JSON.parse(window.assetsPackage.gameConfig_json)
                                } catch (A) {
                                    console.warn("assetsPackage.gameConfig_json 数据非标准的 json 字符串")
                                }
                                return window.UF._get(i, o.key) && (i = (0,
                                l.set)(i, o.key, JSON.parse(o.value))),
                                window.assetsPackage.gameConfig_json = JSON.stringify(i),
                                [3, 4];
                            case 2:
                                return "assetsPackage" !== o.type ? [3, 4] : [4, (0,
                                l.fetchBinaryFile)(o.value).then()];
                            case 3:
                                for (i = A.sent(),
                                e = o.key,
                                a = Object.keys(window.assetsPackage).find(function(A) {
                                    return -1 !== A.indexOf(e)
                                }),
                                window.assetsPackage[a] = i,
                                r = "",
                                c = 0,
                                s = Object.entries(window.assetsKeyMap); c < s.length; c++)
                                    if ((d = s[c])[1] === a) {
                                        r = d[0];
                                        break
                                    }
                                window.assetsMap[r] = i,
                                A.label = 4;
                            case 4:
                                return t++,
                                [3, 1];
                            case 5:
                                return this.continueRender(),
                                [2]
                            }
                            var e
                        })
                    })
                },
                addBridgeListener: function() {
                    var e = this;
                    e.modelPreviewMode && (this.ModelPreviewInstance.on(ModelPreview.ReadyEvent, function(A) {
                        mvPlayable.gameEvent.gameReady(),
                        e.disabledReference && e.ModelPreviewInstance.dispatch(ModelPreview.ModuleEnableEvent, "reference", !1),
                        e.disabledStatistic && e.ModelPreviewInstance.dispatch(ModelPreview.ModuleEnableEvent, "statistic", !1),
                        e.disabledGrid && e.ModelPreviewInstance.dispatch(ModelPreview.ModuleEnableEvent, "grid", !1),
                        e.disabledOperation && e.ModelPreviewInstance.dispatch(ModelPreview.ModuleEnableEvent, "operation", !1),
                        e.disabledAnimation && e.ModelPreviewInstance.dispatch(ModelPreview.ModuleEnableEvent, "animation", !1),
                        e.startupConfig && e.assignmentModel(A),
                        o({
                            type: n.ModelEditorProtocolDataType.previewReady,
                            data: a(a({}, A), {
                                partialRefresh: !1
                            })
                        }),
                        console.log("mwSwitchModel")
                    }),
                    this.ModelPreviewInstance.on(ModelPreview.OnAnimationEventChangedEvent, function(A, e, t) {
                        o({
                            type: n.ModelEditorProtocolDataType.linkageUpdate,
                            data: {
                                linkageType: n.LinkageUpdateType.animationEventChangedEvent,
                                index: A,
                                time: e,
                                type: t
                            }
                        })
                    }))
                },
                modelModifyConfig: function() {
                    var A = {};
                    if (window.assetsPackage["resource/config/modelModifyConfig.json"])
                        try {
                            A = JSON.parse(window.assetsPackage["resource/config/modelModifyConfig.json"])
                        } catch (A) {
                            console.warn("assetsPackage.modelModifyConfig 数据非标准的 json 字符串")
                        }
                    return A
                },
                assignmentModel: function(e) {
                    var A, t, n, o = this, i = o.modelModifyConfig();
                    if (Object.keys(i).length) {
                        if (e.transform && e.transform.id && i.transforms && i.transforms.length && i.transforms.some(function(A) {
                            return JSON.stringify(A.id) === JSON.stringify(e.transform.id)
                        }) && (n = i.transforms.find(function(A) {
                            return JSON.stringify(A.id) === JSON.stringify(e.transform.id)
                        })).value.forEach(function(A, e) {
                            var t, n;
                            o.ModelPreviewInstance.dispatch(ModelPreview.TransformEvent, (t = e,
                            n = Object.keys(s),
                            s[n[Math.floor(t / 3)]]), (n = e,
                            t = Object.keys(d),
                            d[t[n % 3]]), A)
                        }),
                        e.material && e.material.id && e.material.hsv && (n = e.material.hsv,
                        (n = i.materials && i.materials.length && i.materials.some(function(A) {
                            return JSON.stringify(A.id) === JSON.stringify(e.material.id) && A.hsvs
                        }) ? i.materials.find(function(A) {
                            return JSON.stringify(A.id) === JSON.stringify(e.material.id) && A.hsvs
                        }).hsvs : n).forEach(function(A, t) {
                            A && A.length && A.forEach(function(A, e) {
                                o.ModelPreviewInstance.dispatch(ModelPreview.HsvEvent, t, e, A)
                            })
                        })),
                        e.material && e.material.id && e.material.shaderParams) {
                            var a, r, c = e.material.shaderParams;
                            for (a in c = i.materials && i.materials.length && i.materials.some(function(A) {
                                return JSON.stringify(A.id) === JSON.stringify(e.material.id) && A.shaderParams
                            }) ? i.materials.find(function(A) {
                                return JSON.stringify(A.id) === JSON.stringify(e.material.id) && A.shaderParams
                            }).shaderParams : c)
                                c.hasOwnProperty(a) && (r = c[a],
                                this.ModelPreviewInstance.dispatch(ModelPreview.ShaderParamEvent, a, r))
                        }
                        e.animation && e.animation.id && (e.animation.speed || e.animation.events && e.animation.events.length) && (A = e.animation.speed,
                        t = e.animation.events,
                        i.animations) && i.animations.length && i.animations.some(function(A) {
                            return JSON.stringify(A.id) === JSON.stringify(e.animation.id)
                        }) && ("number" == typeof (A = (n = i.animations.find(function(A) {
                            return JSON.stringify(A.id) === JSON.stringify(e.animation.id)
                        })).speed ? n.speed : A) && o.ModelPreviewInstance.dispatch(ModelPreview.AnimationSpeedChangedEvent, A),
                        t = n.events || t) && t.length && t.forEach(function(A, e) {
                            A && o.ModelPreviewInstance.dispatch(ModelPreview.AnimationEventChangedEvent, e, A)
                        })
                    }
                }
            };
            document.addEventListener("DOMContentLoaded", function() {
                i.init().then()
            }),
            window.addEventListener("message", function(A) {
                if (A.data && A.data.type && A.data.type === n.ModelEditorProtocol) {
                    var e = A.data.data;
                    switch (e.type) {
                    case n.ModelEditorProtocolDataType.transformType:
                        i.ModelPreviewInstance.dispatch(ModelPreview.TransformEvent, e.data.transformType, e.data.vectorKey, e.data.value);
                        break;
                    case n.ModelEditorProtocolDataType.hsvType:
                        i.ModelPreviewInstance.dispatch(ModelPreview.HsvEvent, e.data.indexPart, e.data.indexHsv, e.data.value);
                        break;
                    case n.ModelEditorProtocolDataType.cameraAdapt:
                        mvPlayable.dispatchEventListener("cameraAdapt", e.data.type, e.data.ratio, e.data.propertyName, e.data.value);
                        break;
                    case n.ModelEditorProtocolDataType.cameraOrbit:
                        mvPlayable.dispatchEventListener("cameraOrbit", e.data.name, e.data.propertyName, e.data.value);
                        break;
                    case n.ModelEditorProtocolDataType.shaderParam:
                        i.ModelPreviewInstance.dispatch(ModelPreview.ShaderParamEvent, e.data.key, e.data.value);
                        break;
                    case n.ModelEditorProtocolDataType.playAnimation:
                        var t = e.data.path;
                        (t ? i.ModelPreviewInstance.setAnimation(t).then(function(A) {
                            o({
                                type: n.ModelEditorProtocolDataType.previewReady,
                                data: {
                                    animation: A,
                                    partialRefresh: !0
                                }
                            })
                        }) : (console.log("置空动作"),
                        i.ModelPreviewInstance.setAnimation().then(function(A) {
                            o({
                                type: n.ModelEditorProtocolDataType.previewReady,
                                data: {
                                    animation: A,
                                    partialRefresh: !0
                                }
                            })
                        }))).catch(function() {
                            console.log("播放动画失败")
                        });
                        break;
                    case n.ModelEditorProtocolDataType.setMaterial:
                        t = e.data.path;
                        (t ? i.ModelPreviewInstance.setMaterial(t).then(function(A) {
                            o({
                                type: n.ModelEditorProtocolDataType.previewReady,
                                data: {
                                    material: A,
                                    partialRefresh: !0
                                }
                            })
                        }) : (console.log("置空材质，返回默认材质内容"),
                        i.ModelPreviewInstance.setMaterial().then(function(A) {
                            o({
                                type: n.ModelEditorProtocolDataType.previewReady,
                                data: {
                                    material: A,
                                    partialRefresh: !0
                                }
                            })
                        }))).catch(function() {
                            console.log("播放材质失败")
                        });
                        break;
                    case n.ModelEditorProtocolDataType.animationSpeedChangedEvent:
                        i.ModelPreviewInstance.dispatch(ModelPreview.AnimationSpeedChangedEvent, e.data.speed);
                        break;
                    case n.ModelEditorProtocolDataType.animationEventChangedEvent:
                        i.ModelPreviewInstance.dispatch(ModelPreview.AnimationEventChangedEvent, e.data.index, e.data.time);
                        break;
                    case n.ModelEditorProtocolDataType.moduleEnableEvent:
                        i.ModelPreviewInstance.dispatch(ModelPreview.ModuleEnableEvent, e.data.key, e.data.value)
                    }
                }
            }),
            window.editorBridge = i
        }
        ,
        "object" === (void 0 === e ? "undefined" : _typeof(e)) && "object" === _typeof(e.exports) ? n(A, t) : "function" == typeof define && define.amd && define(["require", "exports", "./utils", "./index.type"], n)
    }
    , {
        "./index.type": 2,
        "./utils": 3
    }],
    2: [function(A, e, t) {
        var n;
        n = function(A, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.TransformType = e.HSVValueType = e.AdaptRatioType = e.LinkageUpdateType = e.ModelEditorProtocolDataType = e.ModelEditorProtocol = void 0,
            e.ModelEditorProtocol = "PLAYABLE:model-editor",
            e.ModelEditorProtocolDataType = {
                previewReady: "previewReady",
                transformType: "transform",
                hsvType: "hsv",
                cameraAdapt: "cameraAdapt",
                cameraOrbit: "cameraOrbit",
                shaderParam: "shaderParam",
                playAnimation: "playAnimation",
                setMaterial: "setMaterial",
                animationSpeedChangedEvent: "animationSpeedChangedEvent",
                animationEventChangedEvent: "animationEventChangedEvent",
                linkageUpdate: "linkageUpdate",
                moduleEnableEvent: "ModuleEnableEvent"
            },
            e.LinkageUpdateType = {
                animationEventChangedEvent: 0,
                0: "animationEventChangedEvent"
            },
            e.AdaptRatioType = {
                IPhone6_Landscape: 17787,
                17787: "IPhone6_Landscape",
                IPhone6_Portrait: 5622,
                5622: "IPhone6_Portrait",
                IPhoneX_Landscape: 21653,
                21653: "IPhoneX_Landscape",
                IPhoneX_Portrait: 4618,
                4618: "IPhoneX_Portrait",
                IPad_Landscape: 13333,
                13333: "IPad_Landscape",
                IPad_Portrait: 7500,
                7500: "IPad_Portrait"
            },
            e.HSVValueType = {
                Hue: 0,
                0: "Hue",
                Saturation: 1,
                1: "Saturation",
                Brightness: 2,
                2: "Brightness"
            },
            e.TransformType = {
                translate: 0,
                0: "translate",
                rotate: 1,
                1: "rotate",
                scale: 2,
                2: "scale"
            }
        }
        ,
        "object" === (void 0 === e ? "undefined" : _typeof(e)) && "object" === _typeof(e.exports) ? n(0, t) : "function" == typeof define && define.amd && define(["require", "exports"], n)
    }
    , {}],
    3: [function(A, e, t) {
        var n;
        n = function(A, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.set = function(A, e, t) {
                for (var n = e.split("."), o = A, i = 0; i < n.length - 1; i++) {
                    var a = n[i];
                    o[a] || (o[a] = {}),
                    o = o[a]
                }
                return o[n[n.length - 1]] = t,
                A
            }
            ,
            e.fetchBinaryFile = function(A) {
                return new Promise(function(t, n) {
                    var o = new XMLHttpRequest;
                    o.open("GET", A, !0),
                    o.responseType = "arraybuffer",
                    o.onload = function() {
                        var A, e;
                        200 === o.status ? (A = (A => {
                            for (var e = "", t = new Uint8Array(A), n = t.byteLength, o = 0; o < n; o++)
                                e += String.fromCharCode(t[o]);
                            return btoa(e)
                        }
                        )(o.response),
                        "application/json" === o.getResponseHeader("content-type") ? (e = atob(A),
                        t(e)) : t(A)) : n(new Error("Request failed with status ".concat(o.status)))
                    }
                    ,
                    o.onerror = function() {
                        n(new Error("Failed to fetch file"))
                    }
                    ,
                    o.send()
                }
                )
            }
        }
        ,
        "object" === (void 0 === e ? "undefined" : _typeof(e)) && "object" === _typeof(e.exports) ? n(0, t) : "function" == typeof define && define.amd && define(["require", "exports"], n)
    }
    , {}]
}, {}, [1]);
