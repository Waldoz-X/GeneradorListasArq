function _interopDefault(ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var antd = require('antd');
var reactIs = require('react-is');
var reactIs__default = _interopDefault(reactIs);
var Highlighter = _interopDefault(require('react-highlight-words'));

var SplIconoR = function SplIconoR(_ref) {
    var pImagen = _ref.pImagen;
    return /*#__PURE__*/React__default.createElement("img", {
        src: pImagen,
        alt: "Logo",
        style: {
            height: '100%',
            backgroundColor: '#FFFFF',
            padding: 0
        }
    });
};

var SplNombreApplicacionR = function SplNombreApplicacionR(_ref) {
    var pNombre = _ref.pNombre;
    return /*#__PURE__*/React__default.createElement("h2", null, pNombre);
};

var SplBreadCrumbR = function SplBreadCrumbR(_ref) {
    var breadcrumbItems = _ref.breadcrumbItems;
    var oItemsBreadCrumb = breadcrumbItems.map(function (item, index) {
        return {
            title: item.url ? /*#__PURE__*/React__default.createElement("a", {
                href: item.url
            }, item.title) : item.title,
            key: index
        };
    });
    return /*#__PURE__*/React__default.createElement(antd.Breadcrumb, {
        items: oItemsBreadCrumb
    });
};

var IconContext = /*#__PURE__*/React.createContext({});

function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }
        return n;
    }, _extends.apply(null, arguments);
}

function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}

function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e,
            n,
            i,
            u,
            a = [],
            f = !0,
            o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally {
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally {
                if (o) throw n;
            }
        }
        return a;
    }
}

function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
}

function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}

function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}

function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
        if (e.indexOf(n) >= 0) continue;
        t[n] = r[n];
    }
    return t;
}

function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o,
        r,
        i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}

function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
    /*!
        Copyright (c) 2018 Jed Watson.
        Licensed under the MIT License (MIT), see
        http://jedwatson.github.io/classnames
    */
    /* global define */

    (function () {

        var hasOwn = {}.hasOwnProperty;

        function classNames() {
            var classes = '';

            for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (arg) {
                    classes = appendClass(classes, parseValue(arg));
                }
            }

            return classes;
        }

        function parseValue(arg) {
            if (typeof arg === 'string' || typeof arg === 'number') {
                return arg;
            }

            if (typeof arg !== 'object') {
                return '';
            }

            if (Array.isArray(arg)) {
                return classNames.apply(null, arg);
            }

            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
                return arg.toString();
            }

            var classes = '';

            for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes = appendClass(classes, key);
                }
            }

            return classes;
        }

        function appendClass(value, newClass) {
            if (!newClass) {
                return value;
            }

            if (value) {
                return value + ' ' + newClass;
            }

            return value + newClass;
        }

        if (module.exports) {
            classNames.default = classNames;
            module.exports = classNames;
        } else {
            window.classNames = classNames;
        }
    }());
});

/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return "".concat(Number(n) * 100, "%");
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255,
    };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};

/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

var hueStep = 2; // 色相阶梯
var saturationStep = 0.16; // 饱和度阶梯，浅色部分
var saturationStep2 = 0.05; // 饱和度阶梯，深色部分
var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分
var brightnessStep2 = 0.15; // 亮度阶梯，深色部分
var lightColorCount = 5; // 浅色数量，主色上
var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表
var darkColorMap = [{
    index: 7,
    opacity: 0.15
}, {
    index: 6,
    opacity: 0.25
}, {
    index: 5,
    opacity: 0.3
}, {
    index: 5,
    opacity: 0.45
}, {
    index: 5,
    opacity: 0.65
}, {
    index: 5,
    opacity: 0.85
}, {
    index: 4,
    opacity: 0.9
}, {
    index: 3,
    opacity: 0.95
}, {
    index: 2,
    opacity: 0.97
}, {
    index: 1,
    opacity: 0.98
}];
// Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`
function toHsv(_ref) {
    var r = _ref.r,
        g = _ref.g,
        b = _ref.b;
    var hsv = rgbToHsv(r, g, b);
    return {
        h: hsv.h * 360,
        s: hsv.s,
        v: hsv.v
    };
}

// Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`
function toHex(_ref2) {
    var r = _ref2.r,
        g = _ref2.g,
        b = _ref2.b;
    return "#".concat(rgbToHex(r, g, b, false));
}

// Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.
function mix(rgb1, rgb2, amount) {
    var p = amount / 100;
    var rgb = {
        r: (rgb2.r - rgb1.r) * p + rgb1.r,
        g: (rgb2.g - rgb1.g) * p + rgb1.g,
        b: (rgb2.b - rgb1.b) * p + rgb1.b
    };
    return rgb;
}
function getHue(hsv, i, light) {
    var hue;
    // 根据色相不同，色相转向不同
    if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
        hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
    } else {
        hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
    }
    if (hue < 0) {
        hue += 360;
    } else if (hue >= 360) {
        hue -= 360;
    }
    return hue;
}
function getSaturation(hsv, i, light) {
    // grey color don't change saturation
    if (hsv.h === 0 && hsv.s === 0) {
        return hsv.s;
    }
    var saturation;
    if (light) {
        saturation = hsv.s - saturationStep * i;
    } else if (i === darkColorCount) {
        saturation = hsv.s + saturationStep;
    } else {
        saturation = hsv.s + saturationStep2 * i;
    }
    // 边界值修正
    if (saturation > 1) {
        saturation = 1;
    }
    // 第一格的 s 限制在 0.06-0.1 之间
    if (light && i === lightColorCount && saturation > 0.1) {
        saturation = 0.1;
    }
    if (saturation < 0.06) {
        saturation = 0.06;
    }
    return Number(saturation.toFixed(2));
}
function getValue(hsv, i, light) {
    var value;
    if (light) {
        value = hsv.v + brightnessStep1 * i;
    } else {
        value = hsv.v - brightnessStep2 * i;
    }
    if (value > 1) {
        value = 1;
    }
    return Number(value.toFixed(2));
}
function generate(color) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var patterns = [];
    var pColor = inputToRGB(color);
    for (var i = lightColorCount; i > 0; i -= 1) {
        var hsv = toHsv(pColor);
        var colorString = toHex(inputToRGB({
            h: getHue(hsv, i, true),
            s: getSaturation(hsv, i, true),
            v: getValue(hsv, i, true)
        }));
        patterns.push(colorString);
    }
    patterns.push(toHex(pColor));
    for (var _i = 1; _i <= darkColorCount; _i += 1) {
        var _hsv = toHsv(pColor);
        var _colorString = toHex(inputToRGB({
            h: getHue(_hsv, _i),
            s: getSaturation(_hsv, _i),
            v: getValue(_hsv, _i)
        }));
        patterns.push(_colorString);
    }

    // dark theme patterns
    if (opts.theme === 'dark') {
        return darkColorMap.map(function (_ref3) {
            var index = _ref3.index,
                opacity = _ref3.opacity;
            var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || '#141414'), inputToRGB(patterns[index]), opacity * 100));
            return darkColorString;
        });
    }
    return patterns;
}

var presetPrimaryColors = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1677FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666'
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
    presetPalettes[key] = generate(presetPrimaryColors[key]);
    presetPalettes[key].primary = presetPalettes[key][5];

    // dark presetPalettes
    presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
        theme: 'dark',
        backgroundColor: '#141414'
    });
    presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var blue = presetPalettes.blue;

function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}

function canUseDom() {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

function contains(root, n) {
    if (!root) {
        return false;
    }

    // Use native if support
    if (root.contains) {
        return root.contains(n);
    }

    // `document.contains` not support with IE11
    var node = n;
    while (node) {
        if (node === root) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

var APPEND_ORDER = 'data-rc-order';
var APPEND_PRIORITY = 'data-rc-priority';
var MARK_KEY = "rc-util-key";
var containerCache = new Map();
function getMark() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        mark = _ref.mark;
    if (mark) {
        return mark.startsWith('data-') ? mark : "data-".concat(mark);
    }
    return MARK_KEY;
}
function getContainer(option) {
    if (option.attachTo) {
        return option.attachTo;
    }
    var head = document.querySelector('head');
    return head || document.body;
}
function getOrder(prepend) {
    if (prepend === 'queue') {
        return 'prependQueue';
    }
    return prepend ? 'prepend' : 'append';
}

/**
 * Find style which inject by rc-util
 */
function findStyles(container) {
    return Array.from((containerCache.get(container) || container).children).filter(function (node) {
        return node.tagName === 'STYLE';
    });
}
function injectCSS(css) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!canUseDom()) {
        return null;
    }
    var csp = option.csp,
        prepend = option.prepend,
        _option$priority = option.priority,
        priority = _option$priority === void 0 ? 0 : _option$priority;
    var mergedOrder = getOrder(prepend);
    var isPrependQueue = mergedOrder === 'prependQueue';
    var styleNode = document.createElement('style');
    styleNode.setAttribute(APPEND_ORDER, mergedOrder);
    if (isPrependQueue && priority) {
        styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
    }
    if (csp !== null && csp !== void 0 && csp.nonce) {
        styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
    }
    styleNode.innerHTML = css;
    var container = getContainer(option);
    var firstChild = container.firstChild;
    if (prepend) {
        // If is queue `prepend`, it will prepend first style and then append rest style
        if (isPrependQueue) {
            var existStyle = (option.styles || findStyles(container)).filter(function (node) {
                // Ignore style which not injected by rc-util with prepend
                if (!['prepend', 'prependQueue'].includes(node.getAttribute(APPEND_ORDER))) {
                    return false;
                }

                // Ignore style which priority less then new style
                var nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
                return priority >= nodePriority;
            });
            if (existStyle.length) {
                container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
                return styleNode;
            }
        }

        // Use `insertBefore` as `prepend`
        container.insertBefore(styleNode, firstChild);
    } else {
        container.appendChild(styleNode);
    }
    return styleNode;
}
function findExistNode(key) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var container = getContainer(option);
    return (option.styles || findStyles(container)).find(function (node) {
        return node.getAttribute(getMark(option)) === key;
    });
}

/**
 * qiankun will inject `appendChild` to insert into other
 */
function syncRealContainer(container, option) {
    var cachedRealContainer = containerCache.get(container);

    // Find real container when not cached or cached container removed
    if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
        var placeholderStyle = injectCSS('', option);
        var parentNode = placeholderStyle.parentNode;
        containerCache.set(container, parentNode);
        container.removeChild(placeholderStyle);
    }
}
function updateCSS(css, key) {
    var originOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var container = getContainer(originOption);
    var styles = findStyles(container);
    var option = _objectSpread2(_objectSpread2({}, originOption), {}, {
        styles: styles
    });

    // Sync real parent
    syncRealContainer(container, option);
    var existNode = findExistNode(key, option);
    if (existNode) {
        var _option$csp, _option$csp2;
        if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
            var _option$csp3;
            existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
        }
        if (existNode.innerHTML !== css) {
            existNode.innerHTML = css;
        }
        return existNode;
    }
    var newNode = injectCSS(css, option);
    newNode.setAttribute(getMark(option), key);
    return newNode;
}

function getRoot(ele) {
    var _ele$getRootNode;
    return ele === null || ele === void 0 || (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
}

/**
 * Check if is in shadowRoot
 */
function inShadow(ele) {
    return getRoot(ele) instanceof ShadowRoot;
}

/**
 * Return shadowRoot if possible
 */
function getShadowRoot(ele) {
    return inShadow(ele) ? getRoot(ele) : null;
}

/* eslint-disable no-console */
var warned = {};
var preWarningFns = [];

/**
 * Pre warning enable you to parse content before console.error.
 * Modify to null will prevent warning.
 */
var preMessage = function preMessage(fn) {
    preWarningFns.push(fn);
};

/**
 * Warning if condition not match.
 * @param valid Condition
 * @param message Warning message
 * @example
 * ```js
 * warning(false, 'some error'); // print some error
 * warning(true, 'some error'); // print nothing
 * warning(1 === 2, 'some error'); // print some error
 * ```
 */
function warning(valid, message) {
    if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
        var finalMessage = preWarningFns.reduce(function (msg, preMessageFn) {
            return preMessageFn(msg !== null && msg !== void 0 ? msg : '', 'warning');
        }, message);
        if (finalMessage) {
            console.error("Warning: ".concat(finalMessage));
        }
    }
}

/** @see Similar to {@link warning} */
function note(valid, message) {
    if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
        var finalMessage = preWarningFns.reduce(function (msg, preMessageFn) {
            return preMessageFn(msg !== null && msg !== void 0 ? msg : '', 'note');
        }, message);
        if (finalMessage) {
            console.warn("Note: ".concat(finalMessage));
        }
    }
}
function resetWarned() {
    warned = {};
}
function call(method, valid, message) {
    if (!valid && !warned[message]) {
        method(false, message);
        warned[message] = true;
    }
}

/** @see Same as {@link warning}, but only warn once for the same message */
function warningOnce(valid, message) {
    call(warning, valid, message);
}

/** @see Same as {@link warning}, but only warn once for the same message */
function noteOnce(valid, message) {
    call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;

function camelCase(input) {
    return input.replace(/-(.)/g, function (match, g) {
        return g.toUpperCase();
    });
}
function warning$1(valid, message) {
    warningOnce(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
    return _typeof(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (_typeof(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.keys(attrs).reduce(function (acc, key) {
        var val = attrs[key];
        switch (key) {
            case 'class':
                acc.className = val;
                delete acc.class;
                break;
            default:
                delete acc[key];
                acc[camelCase(key)] = val;
        }
        return acc;
    }, {});
}
function generate$1(node, key, rootProps) {
    if (!rootProps) {
        return /*#__PURE__*/React__default.createElement(node.tag, _objectSpread2({
            key: key
        }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
            return generate$1(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
        }));
    }
    return /*#__PURE__*/React__default.createElement(node.tag, _objectSpread2(_objectSpread2({
        key: key
    }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
        return generate$1(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
}
function getSecondaryColor(primaryColor) {
    // choose the second color
    return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
    if (!twoToneColor) {
        return [];
    }
    return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var iconStyles = "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles(eleRef) {
    var _useContext = React.useContext(IconContext),
        csp = _useContext.csp,
        prefixCls = _useContext.prefixCls;
    var mergedStyleStr = iconStyles;
    if (prefixCls) {
        mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
    }
    React.useEffect(function () {
        var ele = eleRef.current;
        var shadowRoot = getShadowRoot(ele);
        updateCSS(mergedStyleStr, '@ant-design-icons', {
            prepend: true,
            csp: csp,
            attachTo: shadowRoot
        });
    }, []);
};

var _excluded = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
var twoToneColorPalette = {
    primaryColor: '#333',
    secondaryColor: '#E6E6E6',
    calculated: false
};
function setTwoToneColors(_ref) {
    var primaryColor = _ref.primaryColor,
        secondaryColor = _ref.secondaryColor;
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
    twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
    return _objectSpread2({}, twoToneColorPalette);
}
var IconBase = function IconBase(props) {
    var icon = props.icon,
        className = props.className,
        onClick = props.onClick,
        style = props.style,
        primaryColor = props.primaryColor,
        secondaryColor = props.secondaryColor,
        restProps = _objectWithoutProperties(props, _excluded);
    var svgRef = React.useRef();
    var colors = twoToneColorPalette;
    if (primaryColor) {
        colors = {
            primaryColor: primaryColor,
            secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
        };
    }
    useInsertStyles(svgRef);
    warning$1(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
    if (!isIconDefinition(icon)) {
        return null;
    }
    var target = icon;
    if (target && typeof target.icon === 'function') {
        target = _objectSpread2(_objectSpread2({}, target), {}, {
            icon: target.icon(colors.primaryColor, colors.secondaryColor)
        });
    }
    return generate$1(target.icon, "svg-".concat(target.name), _objectSpread2(_objectSpread2({
        className: className,
        onClick: onClick,
        style: style,
        'data-icon': target.name,
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        'aria-hidden': 'true'
    }, restProps), {}, {
        ref: svgRef
    }));
};
IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;

function setTwoToneColor(twoToneColor) {
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
        _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
        primaryColor = _normalizeTwoToneColo2[0],
        secondaryColor = _normalizeTwoToneColo2[1];
    return IconBase.setTwoToneColors({
        primaryColor: primaryColor,
        secondaryColor: secondaryColor
    });
}
function getTwoToneColor() {
    var colors = IconBase.getTwoToneColors();
    if (!colors.calculated) {
        return colors.primaryColor;
    }
    return [colors.primaryColor, colors.secondaryColor];
}

var _excluded$1 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
// Initial setting
// should move it to antd main repo?
setTwoToneColor(blue.primary);

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757#issuecomment-488848720

var Icon = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var className = props.className,
        icon = props.icon,
        spin = props.spin,
        rotate = props.rotate,
        tabIndex = props.tabIndex,
        onClick = props.onClick,
        twoToneColor = props.twoToneColor,
        restProps = _objectWithoutProperties(props, _excluded$1);
    var _React$useContext = React.useContext(IconContext),
        _React$useContext$pre = _React$useContext.prefixCls,
        prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre,
        rootClassName = _React$useContext.rootClassName;
    var classString = classnames(rootClassName, prefixCls, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), className);
    var iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
        iconTabIndex = -1;
    }
    var svgStyle = rotate ? {
        msTransform: "rotate(".concat(rotate, "deg)"),
        transform: "rotate(".concat(rotate, "deg)")
    } : undefined;
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
        _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
        primaryColor = _normalizeTwoToneColo2[0],
        secondaryColor = _normalizeTwoToneColo2[1];
    return /*#__PURE__*/React.createElement("span", _extends({
        role: "img",
        "aria-label": icon.name
    }, restProps, {
        ref: ref,
        tabIndex: iconTabIndex,
        onClick: onClick,
        className: classString
    }), /*#__PURE__*/React.createElement(IconBase, {
        icon: icon,
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        style: svgStyle
    }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

// This icon file is generated automatically.
var SearchOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, "name": "search", "theme": "outlined" };

var SearchOutlined$1 = function SearchOutlined$1(props, ref) {
    return /*#__PURE__*/React.createElement(Icon, _extends({}, props, {
        ref: ref,
        icon: SearchOutlined
    }));
};

/**![search](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkwOS42IDg1NC41TDY0OS45IDU5NC44QzY5MC4yIDU0Mi43IDcxMiA0NzkgNzEyIDQxMmMwLTgwLjItMzEuMy0xNTUuNC04Ny45LTIxMi4xLTU2LjYtNTYuNy0xMzItODcuOS0yMTIuMS04Ny45cy0xNTUuNSAzMS4zLTIxMi4xIDg3LjlDMTQzLjIgMjU2LjUgMTEyIDMzMS44IDExMiA0MTJjMCA4MC4xIDMxLjMgMTU1LjUgODcuOSAyMTIuMUMyNTYuNSA2ODAuOCAzMzEuOCA3MTIgNDEyIDcxMmM2NyAwIDEzMC42LTIxLjggMTgyLjctNjJsMjU5LjcgMjU5LjZhOC4yIDguMiAwIDAwMTEuNiAwbDQzLjYtNDMuNWE4LjIgOC4yIDAgMDAwLTExLjZ6TTU3MC40IDU3MC40QzUyOCA2MTIuNyA0NzEuOCA2MzYgNDEyIDYzNnMtMTE2LTIzLjMtMTU4LjQtNjUuNkMyMTEuMyA1MjggMTg4IDQ3MS44IDE4OCA0MTJzMjMuMy0xMTYuMSA2NS42LTE1OC40QzI5NiAyMTEuMyAzNTIuMiAxODggNDEyIDE4OHMxMTYuMSAyMy4yIDE1OC40IDY1LjZTNjM2IDM1Mi4yIDYzNiA0MTJzLTIzLjMgMTE2LjEtNjUuNiAxNTguNHoiIC8+PC9zdmc+) */
var RefIcon = /*#__PURE__*/React.forwardRef(SearchOutlined$1);
if (process.env.NODE_ENV !== 'production') {
    RefIcon.displayName = 'SearchOutlined';
}

// This icon file is generated automatically.
var UserOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" } }] }, "name": "user", "theme": "outlined" };

var UserOutlined$1 = function UserOutlined$1(props, ref) {
    return /*#__PURE__*/React.createElement(Icon, _extends({}, props, {
        ref: ref,
        icon: UserOutlined
    }));
};

/**![user](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1OC41IDc2My42YTM3NCAzNzQgMCAwMC04MC42LTExOS41IDM3NS42MyAzNzUuNjMgMCAwMC0xMTkuNS04MC42Yy0uNC0uMi0uOC0uMy0xLjItLjVDNzE5LjUgNTE4IDc2MCA0NDQuNyA3NjAgMzYyYzAtMTM3LTExMS0yNDgtMjQ4LTI0OFMyNjQgMjI1IDI2NCAzNjJjMCA4Mi43IDQwLjUgMTU2IDEwMi44IDIwMS4xLS40LjItLjguMy0xLjIuNS00NC44IDE4LjktODUgNDYtMTE5LjUgODAuNmEzNzUuNjMgMzc1LjYzIDAgMDAtODAuNiAxMTkuNUEzNzEuNyAzNzEuNyAwIDAwMTM2IDkwMS44YTggOCAwIDAwOCA4LjJoNjBjNC40IDAgNy45LTMuNSA4LTcuOCAyLTc3LjIgMzMtMTQ5LjUgODcuOC0yMDQuMyA1Ni43LTU2LjcgMTMyLTg3LjkgMjEyLjItODcuOXMxNTUuNSAzMS4yIDIxMi4yIDg3LjlDNzc5IDc1Mi43IDgxMCA4MjUgODEyIDkwMi4yYy4xIDQuNCAzLjYgNy44IDggNy44aDYwYTggOCAwIDAwOC04LjJjLTEtNDcuOC0xMC45LTk0LjMtMjkuNS0xMzguMnpNNTEyIDUzNGMtNDUuOSAwLTg5LjEtMTcuOS0xMjEuNi01MC40UzM0MCA0MDcuOSAzNDAgMzYyYzAtNDUuOSAxNy45LTg5LjEgNTAuNC0xMjEuNlM0NjYuMSAxOTAgNTEyIDE5MHM4OS4xIDE3LjkgMTIxLjYgNTAuNFM2ODQgMzE2LjEgNjg0IDM2MmMwIDQ1LjktMTcuOSA4OS4xLTUwLjQgMTIxLjZTNTU3LjkgNTM0IDUxMiA1MzR6IiAvPjwvc3ZnPg==) */
var RefIcon$1 = /*#__PURE__*/React.forwardRef(UserOutlined$1);
if (process.env.NODE_ENV !== 'production') {
    RefIcon$1.displayName = 'UserOutlined';
}

var SplAvatarR = function SplAvatarR(_ref) {
    var pDatosSesion = _ref.pDatosSesion;
    var _useState = React.useState(false),
        open = _useState[0],
        setOpen = _useState[1];
    var handleOpenChange = function handleOpenChange(newOpen) {
        setOpen(newOpen);
    };
    var oContent = /*#__PURE__*/React__default.createElement("ul", {
        className: "popover-list"
    }, pDatosSesion.oOpcionesMenu.map(function (item, index) {
        return /*#__PURE__*/React__default.createElement("li", {
            key: index
        }, /*#__PURE__*/React__default.createElement("a", {
            href: item.clTarget,
            target: "_blank",
            rel: "noopener noreferrer"
        }, item.nbMenu));
    }));
    return /*#__PURE__*/React__default.createElement(antd.Space, {
        size: 24
    }, /*#__PURE__*/React__default.createElement(antd.Popover, {
        content: /*#__PURE__*/React__default.createElement("div", null, oContent),
        title: pDatosSesion.clUsuario,
        trigger: "click",
        open: open,
        onOpenChange: handleOpenChange
    }, /*#__PURE__*/React__default.createElement("a", {
        style: {
            textDecoration: 'none',
            color: 'inherit',
            marginRight: '10px'
        },
        rel: "noopener noreferrer"
    }, " ", pDatosSesion.clUsuario), /*#__PURE__*/React__default.createElement(antd.Badge, {
        count: pDatosSesion.noNotificaciones
    }, /*#__PURE__*/React__default.createElement(antd.Avatar, {
        shape: "circle",
        icon: /*#__PURE__*/React__default.createElement(RefIcon$1, null)
    }))));
};

var Header = antd.Layout.Header;
var SplBannerR = function SplBannerR(_ref) {
    var pNombreSitema = _ref.pNombreSitema,
        pDatosSesion = _ref.pDatosSesion;
    return /*#__PURE__*/React__default.createElement(Header, {
        align: 'middle',
        style: {
            padding: 0,
            backgroundColor: '#006BA3',
            color: '#FFFF',
            paddingLeft: '10px'
        }
    }, /*#__PURE__*/React__default.createElement(antd.Row, {
        justify: 'space-between',
        align: 'middle',
        style: {
            alignContent: 'center',
            height: '100%'
        }
    }, /*#__PURE__*/React__default.createElement(antd.Col, null, /*#__PURE__*/React__default.createElement(SplNombreApplicacionR, {
        pNombre: pNombreSitema
    })), /*#__PURE__*/React__default.createElement(antd.Col, {
        style: {
            marginRight: '25px'
        }
    }, /*#__PURE__*/React__default.createElement(SplAvatarR, {
        pDatosSesion: pDatosSesion
    }))));
};

function _extends$1() {
    return _extends$1 = Object.assign ? Object.assign.bind() : function (n) {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }
        return n;
    }, _extends$1.apply(null, arguments);
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
}

function shouldUseNative() {
    try {
        if (!Object.assign) {
            return false;
        }

        // Detect buggy property enumeration order in older V8 versions.

        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }

        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for (var i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }

        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !==
            'abcdefghijklmnopqrst') {
            return false;
        }

        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;

    for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);

        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }

        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }

    return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function () { };

if (process.env.NODE_ENV !== 'production') {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};
    var has$1 = has;

    printWarning = function (text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) { /**/ }
    };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (process.env.NODE_ENV !== 'production') {
        for (var typeSpecName in typeSpecs) {
            if (has$1(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error(
                            (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                            'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
                            'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                        );
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning(
                        (componentName || 'React class') + ': type specification of ' +
                        location + ' `' + typeSpecName + '` is invalid; the type checker ' +
                        'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
                        'You may have forgotten to pass an argument to the type checker ' +
                        'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                        'shape all require an argument).'
                    );
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;

                    var stack = getStack ? getStack() : '';

                    printWarning(
                        'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
                    );
                }
            }
        }
    }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function () {
    if (process.env.NODE_ENV !== 'production') {
        loggedTypeFailures = {};
    }
};

var checkPropTypes_1 = checkPropTypes;

var printWarning$1 = function () { };

if (process.env.NODE_ENV !== 'production') {
    printWarning$1 = function (text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) { }
    };
}

function emptyFunctionThatReturnsNull() {
    return null;
}

var factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),

        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker,
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
        if (process.env.NODE_ENV !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;

            if (secret !== ReactPropTypesSecret_1) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error(
                        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                        'Use `PropTypes.checkPropTypes()` to call them. ' +
                        'Read more at http://fb.me/use-check-prop-types'
                    );
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (
                        !manualPropTypeCallCache[cacheKey] &&
                        // Avoid spamming the console because they are often not actionable except for lib authors
                        manualPropTypeWarningCount < 3
                    ) {
                        printWarning$1(
                            'You are manually calling a React.PropTypes validation ' +
                            'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
                            'and will throw in the standalone `prop-types` package. ' +
                            'You may be seeing this warning due to a third-party PropTypes ' +
                            'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
                        );
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }

        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);

        return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);

                return new PropTypeError(
                    'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
                    { expectedType: expectedType }
                );
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for (var i = 0; i < propValue.length; i++) {
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!reactIs__default.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if (process.env.NODE_ENV !== 'production') {
                if (arguments.length > 1) {
                    printWarning$1(
                        'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
                        'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                    );
                } else {
                    printWarning$1('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }

        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for (var i = 0; i < expectedValues.length; i++) {
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }

            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for (var key in propValue) {
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
            return emptyFunctionThatReturnsNull;
        }

        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning$1(
                    'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
                    'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
                );
                return emptyFunctionThatReturnsNull;
            }
        }

        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }

    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
            (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
            'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
        );
    }

    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for (var key in shapeTypes) {
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = objectAssign({}, props[propName], shapeTypes);
            for (var key in allKeys) {
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError(
                        'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
                        '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
                        '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
                    );
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
                if (error) {
                    return error;
                }
            }
            return null;
        }

        return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
        switch (typeof propValue) {
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }

                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while (!(step = iterator.next()).done) {
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while (!(step = iterator.next()).done) {
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }

                return true;
            default:
                return false;
        }
    }

    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }

        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }

        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }

        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }

        return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1;
    ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
};

function emptyFunction() { }
function emptyFunctionWithReset() { }
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function () {
    function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret_1) {
            // It is still safe when called from React.
            return;
        }
        var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use PropTypes.checkPropTypes() to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
        );
        err.name = 'Invariant Violation';
        throw err;
    } shim.isRequired = shim;
    function getShim() {
        return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,

        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,

        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    if (process.env.NODE_ENV !== 'production') {
        var ReactIs = reactIs__default;

        // By explicitly using `prop-types` you are opting into new development behavior.
        // http://fb.me/prop-types-in-prod
        var throwOnDirectAccess = true;
        module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
    } else {
        // By explicitly using `prop-types` you are opting into new production behavior.
        // http://fb.me/prop-types-in-prod
        module.exports = factoryWithThrowingShims();
    }
});

var SplTablaR = function SplTablaR(_ref) {
    var pDatosTabla = _ref.pDatosTabla,
        fgHabilitaSeleccion = _ref.fgHabilitaSeleccion,
        pColumnas = _ref.pColumnas,
        pOnSeleccion = _ref.pOnSeleccion;
    var _useState = React.useState(''),
        searchText = _useState[0],
        setSearchText = _useState[1];
    var _useState2 = React.useState(''),
        searchedColumn = _useState2[0],
        setSearchedColumn = _useState2[1];
    var searchInput = React.useRef(null);
    var FBuscar = function FBuscar(selectedKeys, confirm, dataIndex) {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    var FReestablecerBusqueda = function FReestablecerBusqueda(clearFilters) {
        clearFilters();
        setSearchText('');
    };
    var getColumnSearchProps = function getColumnSearchProps(dataIndex) {
        return {
            filterDropdown: function filterDropdown(_ref2) {
                var setSelectedKeys = _ref2.setSelectedKeys,
                    selectedKeys = _ref2.selectedKeys,
                    confirm = _ref2.confirm,
                    clearFilters = _ref2.clearFilters;
                return /*#__PURE__*/React__default.createElement("div", {
                    style: {
                        padding: 8
                    },
                    onKeyDown: function onKeyDown(e) {
                        return e.stopPropagation();
                    }
                }, /*#__PURE__*/React__default.createElement(antd.Input, {
                    ref: searchInput,
                    placeholder: "Buscar " + dataIndex,
                    value: selectedKeys[0],
                    onChange: function onChange(e) {
                        return setSelectedKeys(e.target.value ? [e.target.value] : []);
                    },
                    onPressEnter: function onPressEnter() {
                        return FBuscar(selectedKeys, confirm, dataIndex);
                    },
                    style: {
                        marginBottom: 8,
                        display: 'block'
                    }
                }), /*#__PURE__*/React__default.createElement(antd.Space, null, /*#__PURE__*/React__default.createElement(antd.Button, {
                    type: "primary",
                    onClick: function onClick() {
                        return FBuscar(selectedKeys, confirm, dataIndex);
                    },
                    icon: /*#__PURE__*/React__default.createElement(RefIcon, null),
                    size: "small",
                    style: {
                        width: 90
                    }
                }, "Buscar"), /*#__PURE__*/React__default.createElement(antd.Button, {
                    onClick: function onClick() {
                        clearFilters && FReestablecerBusqueda(clearFilters);
                        confirm({
                            closeDropdown: false
                        });
                        setSearchText(selectedKeys[0]);
                        setSearchedColumn(dataIndex);
                    },
                    size: "small",
                    style: {
                        width: 90
                    }
                }, "Borrar")));
            },
            filterIcon: function filterIcon(filtered) {
                return /*#__PURE__*/React__default.createElement(RefIcon, {
                    style: {
                        color: filtered ? '#1677ff' : undefined
                    }
                });
            },
            onFilter: function onFilter(value, record) {
                return record[dataIndex].toString().toLowerCase().includes(value.toLowerCase());
            },
            onFilterDropdownOpenChange: function onFilterDropdownOpenChange(visible) {
                if (visible) {
                    setTimeout(function () {
                        var _searchInput$current;
                        return (_searchInput$current = searchInput.current) === null || _searchInput$current === void 0 ? void 0 : _searchInput$current.select();
                    }, 100);
                }
            },
            render: function render(text) {
                return searchedColumn === dataIndex ? /*#__PURE__*/React__default.createElement(Highlighter, {
                    highlightStyle: {
                        backgroundColor: '#ffc069',
                        padding: 0
                    },
                    searchWords: [searchText],
                    autoEscape: true,
                    textToHighlight: text ? text.toString() : ''
                }) : text;
            }
        };
    };
    var oColumnas = pColumnas.map(function (item, index) {
        var _item$fgColumnaEstati;
        var oColumna = {
            title: item.dsTitulo,
            dataIndex: item.clIndice,
            showSorterTooltip: {
                target: 'full-header'
            },
            fixed: (_item$fgColumnaEstati = item.fgColumnaEstatica) != null ? _item$fgColumnaEstati : null,
            align: item.fgEsColumnaNumerica ? 'right' : 'left'
        };
        if (item.fgHabilitaFiltroBusqueda) {
            Object.assign(oColumna, getColumnSearchProps(item.clIndice));
        }
        if (item.noAnchoColumna != null && item.noAnchoColumna > 0) oColumna.width = item.noAnchoColumna;
        if (item.fgHabilitaOrdeamiento) {
            oColumna.sorter = function (a, b) {
                if (typeof a[item.clIndice] === 'string') {
                    return a[item.clIndice].length - b[item.clIndice].length;
                }
                return a[item.clIndice] - b[item.clIndice];
            };
        }
        return oColumna;
    });
    var onChange = function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    };
    var oRowSelectionConfig = {
        onChange: function onChange(selectedRowKeys, selectedRows) {
            if (pOnSeleccion) pOnSeleccion(selectedRows);
        },
        getCheckboxProps: function getCheckboxProps(record) {
            return {
                disabled: record.name === 'Disabled User',
                name: record.name
            };
        }
    };
    var oRowSelection = fgHabilitaSeleccion ? _extends$1({
        type: "radio"
    }, oRowSelectionConfig) : null;
    return /*#__PURE__*/React__default.createElement(antd.Table, {
        rowSelection: oRowSelection,
        columns: oColumnas,
        dataSource: pDatosTabla,
        onChange: onChange,
        showSorterTooltip: {
            target: 'sorter-icon'
        }
    });
};
SplTablaR.propTypes = {
    pDatosTabla: propTypes.array.isRequired,
    fgHabilitaSeleccion: propTypes.bool.isRequired,
    pColumnas: propTypes.array.isRequired,
    pOnSeleccion: propTypes.object
};

var SplIcono = function SplIcono(_ref) {
    var pImagen = _ref.pImagen;
    return /*#__PURE__*/React__default.createElement(SplIconoR, {
        pImagen: pImagen
    });
};
var SplNombreApplicacion = function SplNombreApplicacion(_ref2) {
    var pNombreApp = _ref2.pNombreApp;
    return /*#__PURE__*/React__default.createElement(SplNombreApplicacionR, {
        pNombre: pNombreApp,
        pClassName: pClassName
    });
};
var SplBreadCrumb = function SplBreadCrumb(_ref3) {
    var pBreadCrumbItems = _ref3.pBreadCrumbItems;
    return /*#__PURE__*/React__default.createElement(SplBreadCrumbR, {
        breadcrumbItems: pBreadCrumbItems
    });
};
var SplAvatar = function SplAvatar(_ref4) {
    var pTamaño = _ref4.pTamaño,
        pNoNotificaciones = _ref4.pNoNotificaciones,
        pUrlProfile = _ref4.pUrlProfile,
        pNbUsuario = _ref4.pNbUsuario;
    return /*#__PURE__*/React__default.createElement(SplAvatarR, {
        pTamaño: pTamaño,
        pNoNotificaciones: pNoNotificaciones,
        pUrlProfile: pUrlProfile,
        pNbUsuario: pNbUsuario
    });
};
var SplBanner = function SplBanner(_ref5) {
    var pDatosSesion = _ref5.pDatosSesion,
        pNombreSitema = _ref5.pNombreSitema;
    return /*#__PURE__*/React__default.createElement(SplBannerR, {
        pDatosSesion: pDatosSesion,
        pNombreSitema: pNombreSitema
    });
};
var SplTabla = function SplTabla(_ref6) {
    var pDatosTabla = _ref6.pDatosTabla,
        fgHabilitaSeleccion = _ref6.fgHabilitaSeleccion,
        pColumnas = _ref6.pColumnas,
        pOnSeleccion = _ref6.pOnSeleccion;
    return /*#__PURE__*/React__default.createElement(SplTablaR, {
        pDatosTabla: pDatosTabla,
        fgHabilitaSeleccion: fgHabilitaSeleccion,
        pColumnas: pColumnas,
        pOnSeleccion: pOnSeleccion
    });
};

exports.SplAvatar = SplAvatar;
exports.SplBanner = SplBanner;
exports.SplBreadCrumb = SplBreadCrumb;
exports.SplIcono = SplIcono;
exports.SplNombreApplicacion = SplNombreApplicacion;
exports.SplTabla = SplTabla;
//# sourceMappingURL=index.js.map
