(() => {
  function j(e) {
    if (e === null || e === !0 || e === !1) return NaN;
    var t = Number(e);
    return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
  }
  function o(e, t) {
    if (t.length < e)
      throw new TypeError(
        e +
          " argument" +
          (e > 1 ? "s" : "") +
          " required, but only " +
          t.length +
          " present"
      );
  }
  function n(e) {
    o(1, arguments);
    var t = Object.prototype.toString.call(e);
    return e instanceof Date || (typeof e == "object" && t === "[object Date]")
      ? new Date(e.getTime())
      : typeof e == "number" || t === "[object Number]"
      ? new Date(e)
      : ((typeof e == "string" || t === "[object String]") &&
          typeof console != "undefined" &&
          (console.warn(
            "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"
          ),
          console.warn(new Error().stack)),
        new Date(NaN));
  }
  function D(e, t) {
    o(2, arguments);
    var a = n(e),
      r = j(t);
    return isNaN(r) ? new Date(NaN) : (r && a.setDate(a.getDate() + r), a);
  }
  function v(e) {
    var t = new Date(
      Date.UTC(
        e.getFullYear(),
        e.getMonth(),
        e.getDate(),
        e.getHours(),
        e.getMinutes(),
        e.getSeconds(),
        e.getMilliseconds()
      )
    );
    return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
  }
  function p(e, t) {
    o(2, arguments);
    var a = n(e),
      r = n(t),
      i = a.getTime() - r.getTime();
    return i < 0 ? -1 : i > 0 ? 1 : i;
  }
  function S(e, t) {
    o(2, arguments);
    var a = n(e),
      r = n(t),
      i = a.getFullYear() - r.getFullYear(),
      s = a.getMonth() - r.getMonth();
    return i * 12 + s;
  }
  function I(e, t) {
    return o(2, arguments), n(e).getTime() - n(t).getTime();
  }
  var q = {
      ceil: Math.ceil,
      round: Math.round,
      floor: Math.floor,
      trunc: function (e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e);
      },
    },
    J = "trunc";
  function C(e) {
    return e ? q[e] : q[J];
  }
  function b(e) {
    o(1, arguments);
    var t = n(e);
    return t.setHours(23, 59, 59, 999), t;
  }
  function T(e) {
    o(1, arguments);
    var t = n(e),
      a = t.getMonth();
    return (
      t.setFullYear(t.getFullYear(), a + 1, 0), t.setHours(23, 59, 59, 999), t
    );
  }
  function W(e) {
    o(1, arguments);
    var t = n(e);
    return b(t).getTime() === T(t).getTime();
  }
  function k(e, t) {
    o(2, arguments);
    var a = n(e),
      r = n(t),
      i = p(a, r),
      s = Math.abs(S(a, r)),
      d;
    if (s < 1) d = 0;
    else {
      a.getMonth() === 1 && a.getDate() > 27 && a.setDate(30),
        a.setMonth(a.getMonth() - i * s);
      var u = p(a, r) === -i;
      W(n(e)) && s === 1 && p(e, r) === 1 && (u = !1),
        (d = i * (s - Number(u)));
    }
    return d === 0 ? 0 : d;
  }
  function w(e, t, a) {
    o(2, arguments);
    var r = I(e, t) / 1e3;
    return C(a == null ? void 0 : a.roundingMethod)(r);
  }
  var B = {
      lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds",
      },
      xSeconds: { one: "1 second", other: "{{count}} seconds" },
      halfAMinute: "half a minute",
      lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes",
      },
      xMinutes: { one: "1 minute", other: "{{count}} minutes" },
      aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
      xHours: { one: "1 hour", other: "{{count}} hours" },
      xDays: { one: "1 day", other: "{{count}} days" },
      aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
      xWeeks: { one: "1 week", other: "{{count}} weeks" },
      aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
      xMonths: { one: "1 month", other: "{{count}} months" },
      aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
      xYears: { one: "1 year", other: "{{count}} years" },
      overXYears: { one: "over 1 year", other: "over {{count}} years" },
      almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
    },
    K = function (e, t, a) {
      var r,
        i = B[e];
      return (
        typeof i == "string"
          ? (r = i)
          : t === 1
          ? (r = i.one)
          : (r = i.other.replace("{{count}}", t.toString())),
        a != null && a.addSuffix
          ? a.comparison && a.comparison > 0
            ? "in " + r
            : r + " ago"
          : r
      );
    },
    N = K;
  function g(e) {
    return function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        a = t.width ? String(t.width) : e.defaultWidth,
        r = e.formats[a] || e.formats[e.defaultWidth];
      return r;
    };
  }
  var G = {
      full: "EEEE, MMMM do, y",
      long: "MMMM do, y",
      medium: "MMM d, y",
      short: "MM/dd/yyyy",
    },
    Z = {
      full: "h:mm:ss a zzzz",
      long: "h:mm:ss a z",
      medium: "h:mm:ss a",
      short: "h:mm a",
    },
    $ = {
      full: "{{date}} 'at' {{time}}",
      long: "{{date}} 'at' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}",
    },
    ee = {
      date: g({ formats: G, defaultWidth: "full" }),
      time: g({ formats: Z, defaultWidth: "full" }),
      dateTime: g({ formats: $, defaultWidth: "full" }),
    },
    H = ee;
  var te = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: "P",
    },
    ae = function (e, t, a, r) {
      return te[e];
    },
    Q = ae;
  function c(e) {
    return function (t, a) {
      var r = a || {},
        i = r.context ? String(r.context) : "standalone",
        s;
      if (i === "formatting" && e.formattingValues) {
        var d = e.defaultFormattingWidth || e.defaultWidth,
          u = r.width ? String(r.width) : d;
        s = e.formattingValues[u] || e.formattingValues[d];
      } else {
        var l = e.defaultWidth,
          x = r.width ? String(r.width) : e.defaultWidth;
        s = e.values[x] || e.values[l];
      }
      var f = e.argumentCallback ? e.argumentCallback(t) : t;
      return s[f];
    };
  }
  var re = {
      narrow: ["B", "A"],
      abbreviated: ["BC", "AD"],
      wide: ["Before Christ", "Anno Domini"],
    },
    se = {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["Q1", "Q2", "Q3", "Q4"],
      wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    },
    ne = {
      narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    oe = {
      narrow: ["S", "M", "T", "W", "T", "F", "S"],
      short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },
    ie = {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night",
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night",
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night",
      },
    },
    de = {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night",
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night",
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night",
      },
    },
    fe = function (e, t) {
      var a = Number(e),
        r = a % 100;
      if (r > 20 || r < 10)
        switch (r % 10) {
          case 1:
            return a + "st";
          case 2:
            return a + "nd";
          case 3:
            return a + "rd";
        }
      return a + "th";
    },
    ue = {
      ordinalNumber: fe,
      era: c({ values: re, defaultWidth: "wide" }),
      quarter: c({
        values: se,
        defaultWidth: "wide",
        argumentCallback: function (e) {
          return e - 1;
        },
      }),
      month: c({ values: ne, defaultWidth: "wide" }),
      day: c({ values: oe, defaultWidth: "wide" }),
      dayPeriod: c({
        values: ie,
        defaultWidth: "wide",
        formattingValues: de,
        defaultFormattingWidth: "wide",
      }),
    },
    R = ue;
  function h(e) {
    return function (t) {
      var a =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = a.width,
        i = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
        s = t.match(i);
      if (!s) return null;
      var d = s[0],
        u = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
        l = Array.isArray(u)
          ? me(u, function (m) {
              return m.test(d);
            })
          : le(u, function (m) {
              return m.test(d);
            }),
        x;
      (x = e.valueCallback ? e.valueCallback(l) : l),
        (x = a.valueCallback ? a.valueCallback(x) : x);
      var f = t.slice(d.length);
      return { value: x, rest: f };
    };
  }
  function le(e, t) {
    for (var a in e) if (e.hasOwnProperty(a) && t(e[a])) return a;
  }
  function me(e, t) {
    for (var a = 0; a < e.length; a++) if (t(e[a])) return a;
  }
  function Y(e) {
    return function (t) {
      var a =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = t.match(e.matchPattern);
      if (!r) return null;
      var i = r[0],
        s = t.match(e.parsePattern);
      if (!s) return null;
      var d = e.valueCallback ? e.valueCallback(s[0]) : s[0];
      d = a.valueCallback ? a.valueCallback(d) : d;
      var u = t.slice(i.length);
      return { value: d, rest: u };
    };
  }
  var xe = /^(\d+)(th|st|nd|rd)?/i,
    pe = /\d+/i,
    ce = {
      narrow: /^(b|a)/i,
      abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
      wide: /^(before christ|before common era|anno domini|common era)/i,
    },
    he = { any: [/^b/i, /^(a|c)/i] },
    je = {
      narrow: /^[1234]/i,
      abbreviated: /^q[1234]/i,
      wide: /^[1234](th|st|nd|rd)? quarter/i,
    },
    ge = { any: [/1/i, /2/i, /3/i, /4/i] },
    ve = {
      narrow: /^[jfmasond]/i,
      abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
      wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
    },
    ye = {
      narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i,
      ],
      any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i,
      ],
    },
    Me = {
      narrow: /^[smtwf]/i,
      short: /^(su|mo|tu|we|th|fr|sa)/i,
      abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
      wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
    },
    Oe = {
      narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
      any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
    },
    De = {
      narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
      any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
    },
    Se = {
      any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i,
      },
    },
    Ie = {
      ordinalNumber: Y({
        matchPattern: xe,
        parsePattern: pe,
        valueCallback: function (e) {
          return parseInt(e, 10);
        },
      }),
      era: h({
        matchPatterns: ce,
        defaultMatchWidth: "wide",
        parsePatterns: he,
        defaultParseWidth: "any",
      }),
      quarter: h({
        matchPatterns: je,
        defaultMatchWidth: "wide",
        parsePatterns: ge,
        defaultParseWidth: "any",
        valueCallback: function (e) {
          return e + 1;
        },
      }),
      month: h({
        matchPatterns: ve,
        defaultMatchWidth: "wide",
        parsePatterns: ye,
        defaultParseWidth: "any",
      }),
      day: h({
        matchPatterns: Me,
        defaultMatchWidth: "wide",
        parsePatterns: Oe,
        defaultParseWidth: "any",
      }),
      dayPeriod: h({
        matchPatterns: De,
        defaultMatchWidth: "any",
        parsePatterns: Se,
        defaultParseWidth: "any",
      }),
    },
    L = Ie;
  var be = {
      code: "en-US",
      formatDistance: N,
      formatLong: H,
      formatRelative: Q,
      localize: R,
      match: L,
      options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
    },
    E = be;
  function P(e, t) {
    if (e == null)
      throw new TypeError(
        "assign requires that input parameter not be null or undefined"
      );
    t = t || {};
    for (var a in t)
      Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e;
  }
  function A(e) {
    return P({}, e);
  }
  var X = 1440,
    Te = 2520,
    F = 43200,
    We = 86400;
  function y(e, t) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    o(2, arguments);
    var r = a.locale || E;
    if (!r.formatDistance)
      throw new RangeError("locale must contain formatDistance property");
    var i = p(e, t);
    if (isNaN(i)) throw new RangeError("Invalid time value");
    var s = A(a);
    (s.addSuffix = Boolean(a.addSuffix)), (s.comparison = i);
    var d, u;
    i > 0 ? ((d = n(t)), (u = n(e))) : ((d = n(e)), (u = n(t)));
    var l = w(u, d),
      x = (v(u) - v(d)) / 1e3,
      f = Math.round((l - x) / 60),
      m;
    if (f < 2)
      return a.includeSeconds
        ? l < 5
          ? r.formatDistance("lessThanXSeconds", 5, s)
          : l < 10
          ? r.formatDistance("lessThanXSeconds", 10, s)
          : l < 20
          ? r.formatDistance("lessThanXSeconds", 20, s)
          : l < 40
          ? r.formatDistance("halfAMinute", null, s)
          : l < 60
          ? r.formatDistance("lessThanXMinutes", 1, s)
          : r.formatDistance("xMinutes", 1, s)
        : f === 0
        ? r.formatDistance("lessThanXMinutes", 1, s)
        : r.formatDistance("xMinutes", f, s);
    if (f < 45) return r.formatDistance("xMinutes", f, s);
    if (f < 90) return r.formatDistance("aboutXHours", 1, s);
    if (f < X) {
      var z = Math.round(f / 60);
      return r.formatDistance("aboutXHours", z, s);
    } else {
      if (f < Te) return r.formatDistance("xDays", 1, s);
      if (f < F) {
        var V = Math.round(f / X);
        return r.formatDistance("xDays", V, s);
      } else if (f < We)
        return (m = Math.round(f / F)), r.formatDistance("aboutXMonths", m, s);
    }
    if (((m = k(u, d)), m < 12)) {
      var U = Math.round(f / F);
      return r.formatDistance("xMonths", U, s);
    } else {
      var _ = m % 12,
        O = Math.floor(m / 12);
      return _ < 3
        ? r.formatDistance("aboutXYears", O, s)
        : _ < 9
        ? r.formatDistance("overXYears", O, s)
        : r.formatDistance("almostXYears", O + 1, s);
    }
  }
  function M(e, t) {
    o(2, arguments);
    var a = j(t);
    return D(e, -a);
  }
  console.log(y(M(new Date(), 3), new Date(), { addSuffix: !0 }));
  console.log("%cDon't read my console ;]", "color:salmon;font-size:40px");
})();
