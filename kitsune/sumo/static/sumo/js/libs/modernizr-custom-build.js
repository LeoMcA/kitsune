/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-input-localstorage-video-domprefixes-setclasses !*/
!(function (e, n, a) {
  function o(e, n) {
    return typeof e === n;
  }
  function t() {
    var e, n, a, t, s, i, c;
    for (var p in l)
      if (l.hasOwnProperty(p)) {
        if (
          ((e = []),
          (n = l[p]),
          n.name &&
            (e.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (a = 0; a < n.options.aliases.length; a++)
            e.push(n.options.aliases[a].toLowerCase());
        for (t = o(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++)
          (i = e[s]),
            (c = i.split(".")),
            1 === c.length
              ? (Modernizr[c[0]] = t)
              : (!Modernizr[c[0]] ||
                  Modernizr[c[0]] instanceof Boolean ||
                  (Modernizr[c[0]] = new Boolean(Modernizr[c[0]])),
                (Modernizr[c[0]][c[1]] = t)),
            r.push((t ? "" : "no-") + c.join("-"));
      }
  }
  function s(e) {
    var n = p.className,
      a = Modernizr._config.classPrefix || "";
    if ((f && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var o = new RegExp("(^|\\s)" + a + "no-js(\\s|$)");
      n = n.replace(o, "$1" + a + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((n += " " + a + e.join(" " + a)),
      f ? (p.className.baseVal = n) : (p.className = n));
  }
  function i() {
    return "function" != typeof n.createElement
      ? n.createElement(arguments[0])
      : f
      ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0])
      : n.createElement.apply(n, arguments);
  }
  var r = [],
    l = [],
    c = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, n) {
        var a = this;
        setTimeout(function () {
          n(a[e]);
        }, 0);
      },
      addTest: function (e, n, a) {
        l.push({ name: e, fn: n, options: a });
      },
      addAsyncTest: function (e) {
        l.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = c),
    (Modernizr = new Modernizr()),
    Modernizr.addTest("localstorage", function () {
      var e = "modernizr";
      try {
        return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
      } catch (n) {
        return !1;
      }
    });
  var p = n.documentElement,
    f = "svg" === p.nodeName.toLowerCase(),
    u = "Moz O ms Webkit",
    d = c._config.usePrefixes ? u.toLowerCase().split(" ") : [];
  (c._domPrefixes = d),
    Modernizr.addTest("video", function () {
      var e = i("video"),
        n = !1;
      try {
        (n = !!e.canPlayType),
          n &&
            ((n = new Boolean(n)),
            (n.ogg = e
              .canPlayType('video/ogg; codecs="theora"')
              .replace(/^no$/, "")),
            (n.h264 = e
              .canPlayType('video/mp4; codecs="avc1.42E01E"')
              .replace(/^no$/, "")),
            (n.webm = e
              .canPlayType('video/webm; codecs="vp8, vorbis"')
              .replace(/^no$/, "")),
            (n.vp9 = e
              .canPlayType('video/webm; codecs="vp9"')
              .replace(/^no$/, "")),
            (n.hls = e
              .canPlayType('application/x-mpegURL; codecs="avc1.42E01E"')
              .replace(/^no$/, "")));
      } catch (a) {}
      return n;
    });
  var m = i("input"),
    v = "autocomplete autofocus list placeholder max min multiple pattern required step".split(
      " "
    ),
    g = {};
  (Modernizr.input = (function (n) {
    for (var a = 0, o = n.length; o > a; a++) g[n[a]] = !!(n[a] in m);
    return g.list && (g.list = !(!i("datalist") || !e.HTMLDataListElement)), g;
  })(v)),
    t(),
    s(r),
    delete c.addTest,
    delete c.addAsyncTest;
  for (var y = 0; y < Modernizr._q.length; y++) Modernizr._q[y]();
  e.Modernizr = Modernizr;
})(window, document);
