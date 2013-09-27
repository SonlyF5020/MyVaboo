/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
try {
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
} catch(err){
}function hrefRegex(onlineshopDomain, telstraDomain) {
	var isUrlAllowed = false;
	try {
		// extra filter to decide whether to start the chat invite process
		var href = window.location.href;
		// pattern below allows the following sites to initiate the chat invite process
		var pattern=new RegExp('^(' +
			// (http(s)://)onlineshop.telstra.com.au
			'(' + onlineshopDomain + ')(' +
				// (http(s)://)onlineshop.telstra.com.au/
				'/' + '|' +
				// (http(s)://)onlineshop.telstra.com.au?*
				'\\?.*' + '|' + 
				// (http(s)://)onlineshop.telstra.com.au/?*
				'/\\?.*' + '|' +
				// (http(s)://)onlineshop.telstra.com.au/mobile-phones*
				'/mobile-phones.*' + '|' +
				// (http(s)://)onlineshop.telstra.com.au/mobileshop*
				'/mobileshop.*' +
			')?' +
			'|' + 
			// (http(s)://)(www.)telstra.com.au/mobile-phones
			'(' + telstraDomain + '\/mobile-phones)(' +
				// (http(s)://)(www.)telstra.com.au/mobile-phones/
				'/' + '|' +
				// (http(s)://)(www.)telstra.com.au/mobile-phones/index.htm
				'/index.htm' + '|' +
				// (http(s)://)(www.)telstra.com.au/mobile-phones/plans-rates*
				'/plans-rates.*' + '|' +
				// (http(s)://)(www.)telstra.com.au/mobile-phones/mobile-phones*
				'/mobile-phones.*' +
			')?' +
		')$','i');
		isUrlAllowed = pattern.test(href);
	} catch(err){
	}
	return isUrlAllowed;
}/**
 *
 * User: dliger
 * Date: 11/6/12
 * Time: 7:08 PM
 * Copyright (c) 2012 Genesyslab Inc. All Rights Reserved.
 */

// Namespaces for the Genesys Tracker implementation
window.com = window.com || {};
com.genesyslab = com.genesyslab || {};
com.genesyslab.wme = com.genesyslab.wme || {};

var onlineshopDomain = '(http(s)?://)?onlineshop.telstra.com.au';
var telstraDomain = '(http(s)?://)?(www.)?telstra.com.au';
var isUrlAllowed = hrefRegex(onlineshopDomain, telstraDomain);
var isMobile = true;
try {
	if(typeof(jQuery.browser.mobile)=="boolean") {
		isMobile = jQuery.browser.mobile;
	}
} catch(err){
}
if(!isMobile && isUrlAllowed) {
if(com.genesyslab.wme.tracker)
    throw "double tracker injection";

com.genesyslab.wme.tracker = (function (document, window, $) {
var genesysTrackerConfiguration = {

    // Size in pixels
    engagementPage: {
        pageWidth: 450,
        pageHeight: 600,
        pageTop: 150,
        pageLeft: 150
    },

    inviteWidget: {
        alignment: {
            horizontal: 'right',    /* right, center, left */
            vertical: 'bottom'    /* top, center, bottom */
        },
        position: 'fixed'       /* fixed, absolute */
    }
};


(function (document, undefined) {
    'use strict';	
    var Cookies = function (key, value, options) {
        return arguments.length === 1 ?
            Cookies.get(key) : Cookies.set(key, value, options);
    };

    Cookies.get = function (key) {
        if (document.cookie !== Cookies._cacheString) {
            Cookies._populateCache();
        }

        return Cookies._cache[key];
    };

    Cookies.defaults = {
        path: '/'
    };

    Cookies.set = function (key, value, options) {
        var options = {
            path: options && options.path || Cookies.defaults.path,
            domain: options && options.domain || Cookies.defaults.domain,
            expires: options && options.expires || Cookies.defaults.expires,
            secure: options && options.secure !== undefined ? options.secure : Cookies.defaults.secure
        };

        if (value === undefined) {
            options.expires = -1;
        }

        switch (typeof options.expires) {
            // If a number is passed in, make it work like 'max-age'
            case 'number': options.expires = new Date(new Date().getTime() + options.expires * 1000); break;
            // Allow multiple string formats for dates
            case 'string': options.expires = new Date(options.expires); break;
        }

        // Escape only the characters that should be escaped as defined by RFC6265
        var cookieString = encodeURIComponent(key) + '=' + (value + '').replace(/[^!#-+\--:<-\[\]-~]/g, encodeURIComponent);
        cookieString += options.path ? ';path=' + options.path : '';
        cookieString += options.domain ? ';domain=' + options.domain : '';
        cookieString += options.expires ? ';expires=' + options.expires.toGMTString() : '';
        cookieString += options.secure ? ';secure' : '';

        document.cookie = cookieString;

        return Cookies;
    };

    Cookies.expire = function (key, options) {
        return Cookies.set(key, undefined, options);
    };

    Cookies._populateCache = function () {
        Cookies._cache = {};
        Cookies._cacheString = document.cookie;

        var cookiesArray = Cookies._cacheString.split('; ');
        for (var i = 0; i < cookiesArray.length; i++) {
            // The cookie value can contain a '=', so cannot use 'split'
            var separatorIndex = cookiesArray[i].indexOf('=');
            var key = decodeURIComponent(cookiesArray[i].substr(0, separatorIndex));
            var value = decodeURIComponent(cookiesArray[i].substr(separatorIndex + 1));

            // The first instance of a key in the document.cookie string
            // is the most locally scoped cookie with the specified key.
            // The value of this key will be sent to the web server, so we'll
            // just ignore any other instances of the key.
            if (Cookies._cache[key] === undefined) {
                Cookies._cache[key] = value;
            }
        }
    };

    Cookies.enabled = (function () {
        var isEnabled = Cookies.set('cookies.js', '1').get('cookies.js') === '1';
        Cookies.expire('cookies.js');
        return isEnabled;
    })();

    // AMD support
    if (typeof define === 'function' && define.amd) {
        define(function () { return Cookies; });
        // CommonJS and Node.js module support.
    } else if (typeof exports !== 'undefined') {
        // Support Node.js specific `module.exports` (which can be a function)
        if (typeof module != 'undefined' && module.exports) {
            exports = module.exports = Cookies;
        }
        // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
        exports.Cookies = Cookies;
    } else {
        window.Cookies = Cookies;
    }

})(document);
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(searchElement /*, fromIndex */ )
    {
        'use strict';
        if (!this) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 0) {
            n = Number(arguments[1]);
            if (n != n) {
                n = 0;
            } else if (n !== 0 && n != Infinity && n != -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}

/*
    json2.js
    2012-10-08

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
/**
 * Dual licensed under the Apache License 2.0 and the MIT license.
 * $Revision$ $Date: 2009-11-27 11:36:03 +0100 (Fri, 27 Nov 2009) $
 */

// Dojo loader support
if (typeof dojo !== 'undefined')
{
    dojo.provide('org.cometd');
}
else
{
    // Namespaces for the cometd implementation
    this.org = this.org || {};
    org.cometd = {};
}

// Abstract APIs
org.cometd.JSON = {};
org.cometd.JSON.toJSON = org.cometd.JSON.fromJSON = function(object)
{
    throw 'Abstract';
};


/**
 * A registry for transports used by the Cometd object.
 */
org.cometd.TransportRegistry = function()
{
    var _types = [];
    var _transports = {};

    this.getTransportTypes = function()
    {
        return _types.slice(0);
    };

    this.findTransportTypes = function(version, crossDomain)
    {
        var result = [];
        for (var i = 0; i < _types.length; ++i)
        {
            var type = _types[i];
            if (_transports[type].accept(version, crossDomain))
            {
                result.push(type);
            }
        }
        return result;
    };

    this.negotiateTransport = function(types, version, crossDomain)
    {
        for (var i = 0; i < _types.length; ++i)
        {
            var type = _types[i];
            for (var j = 0; j < types.length; ++j)
            {
                if (type == types[j])
                {
                    var transport = _transports[type];
                    if (transport.accept(version, crossDomain) === true)
                    {
                        return transport;
                    }
                }
            }
        }
        return null;
    };

    this.add = function(type, transport, index)
    {
        var existing = false;
        for (var i = 0; i < _types.length; ++i)
        {
            if (_types[i] == type)
            {
                existing = true;
                break;
            }
        }

        if (!existing)
        {
            if (typeof index !== 'number')
            {
                _types.push(type);
            }
            else
            {
                _types.splice(index, 0, type);
            }
            _transports[type] = transport;
        }

        return !existing;
    };

    this.remove = function(type)
    {
        for (var i = 0; i < _types.length; ++i)
        {
            if (_types[i] == type)
            {
                _types.splice(i, 1);
                var transport = _transports[type];
                delete _transports[type];
                return transport;
            }
        }
        return null;
    };

    this.reset = function()
    {
        for (var i = 0; i < _types.length; ++i)
        {
            _transports[_types[i]].reset();
        }
    };
};


/**
 * The constructor for a Cometd object, identified by an optional name.
 * The default name is the string 'default'.
 * In the rare case a page needs more than one Bayeux conversation,
 * a new instance can be created via:
 * <pre>
 * var bayeuxUrl2 = ...;
 * var cometd2 = new $.Cometd();
 * cometd2.init({url: bayeuxUrl2});
 * </pre>
 * @param name the optional name of this cometd object
 */
// IMPLEMENTATION NOTES:
// Be very careful in not changing the function order and pass this file every time through JSLint (http://jslint.com)
// The only implied globals must be "dojo", "org" and "window", and check that there are no "unused" warnings
// Failing to pass JSLint may result in shrinkers/minifiers to create an unusable file.
org.cometd.Cometd = function(name)
{
    var _name = name || 'default';
    var _logLevel; // 'warn','info','debug'
    var _url;
    var _maxConnections;
    var _backoffIncrement;
    var _maxBackoff;
    var _reverseIncomingExtensions;
    var _maxNetworkDelay;
    var _requestHeaders;
    var _crossDomain = false;
    var _transports = new org.cometd.TransportRegistry();
    var _transport;
    var _status = 'disconnected';
    var _messageId = 0;
    var _clientId = null;
    var _batch = 0;
    var _messageQueue = [];
    var _internalBatch = false;
    var _listeners = {};
    var _backoff = 0;
    var _scheduledSend = null;
    var _extensions = [];
    var _advice = {};
    var _handshakeProps;
    var _reestablish = false;

    /**
     * Mixes in the given objects into the target object by copying the properties.
     * @param deep if the copy must be deep
     * @param target the target object
     * @param objects the objects whose properties are copied into the target
     */
    function _mixin(deep, target, objects)
    {
        var result = target || {};

        // Skip first 2 parameters (deep and target), and loop over the others
        for (var i = 2; i < arguments.length; ++i)
        {
            var object = arguments[i];

            if (object === undefined || object === null)
            {
                continue;
            }

            for (var propName in object)
            {
                var prop = object[propName];

                // Avoid infinite loops
                if (prop === target)
                {
                    continue;
                }
                // Do not mixin undefined values
                if (prop === undefined)
                {
                    continue;
                }

                if (deep && typeof prop === "object" && prop !== null)
                {
                    if (prop instanceof Array)
                    {
                        result[propName] = _mixin(deep, [], prop);
                    }
                    else
                    {
                        result[propName] = _mixin(deep, {}, prop);
                    }
                }
                else
                {
                    result[propName] = prop;
                }
            }
        }

        return result;
    }

    /**
     * Returns whether the given element is contained into the given array.
     * @param element the element to check presence for
     * @param array the array to check for the element presence
     * @return the index of the element, if present, or a negative index if the element is not present
     */
    function _inArray(element, array)
    {
        for (var i = 0; i < array.length; ++i)
        {
            if (element == array[i])
            {
                return i;
            }
        }
        return -1;
    }

    function _isString(value)
    {
        if (value === undefined || value === null)
        {
            return false;
        }
        return typeof value === 'string' ||  value instanceof String;
    }

    function _isArray(value)
    {
        if (value === undefined || value === null)
        {
            return false;
        }
        return value instanceof Array;
    }

    function _isFunction(value)
    {
        if (value === undefined || value === null)
        {
            return false;
        }
        return typeof value === 'function';
    }

    function _log(level, args)
    {
        if (window.console)
        {
            var logger = window.console[level];
            if (_isFunction(logger))
            {
                logger.apply(window.console, args);
            }
        }
    }

    function _warn()
    {
        _log('warn', arguments);
    }
    this._warn = _warn;

    function _info()
    {
        if (_logLevel != 'warn')
        {
            _log('info', arguments);
        }
    }
    this._info = _info;

    function _debug()
    {
        if (_logLevel == 'debug')
        {
            _log('debug', arguments);
        }
    }
    this._debug = _debug;

    function _configure(configuration)
    {
        _debug('Configuring cometd object with', configuration);
        // Support old style param, where only the Bayeux server URL was passed
        if (_isString(configuration))
        {
            configuration = { url: configuration };
        }
        if (!configuration)
        {
            configuration = {};
        }

        _url = configuration.url;
        if (!_url)
        {
            throw 'Missing required configuration parameter \'url\' specifying the Bayeux server URL';
        }
        _maxConnections = configuration.maxConnections || 2;
        _backoffIncrement = configuration.backoffIncrement || 1000;
        _maxBackoff = configuration.maxBackoff || 60000;
        _logLevel = configuration.logLevel || 'info';
        _reverseIncomingExtensions = configuration.reverseIncomingExtensions !== false;
        _maxNetworkDelay = configuration.maxNetworkDelay || 600000;
        _requestHeaders = configuration.requestHeaders || {};

        // Check if we're cross domain
        var urlParts = /(^https?:)?(\/\/(([^:\/\?#]+)(:(\d+))?))?([^\?#]*)/.exec(_url);
        _crossDomain = urlParts[3] && urlParts[3] != window.location.host;
    }

    function _clearSubscriptions()
    {
        for (var channel in _listeners)
        {
            var subscriptions = _listeners[channel];
            for (var i = 0; i < subscriptions.length; ++i)
            {
                var subscription = subscriptions[i];
                if (subscription && subscription.subscription)
                {
                    delete subscriptions[i];
                    _debug('Removed subscription', subscription, 'for channel', channel);
                }
            }
        }
    }

    function _setStatus(newStatus)
    {
        _debug('Status', _status, '->', newStatus);
        _status = newStatus;
    }

    function _isDisconnected()
    {
        return _status == 'disconnecting' || _status == 'disconnected';
    }

    function _nextMessageId()
    {
        return ++_messageId;
    }

    function _applyExtension(name, callback, message)
    {
        try
        {
            return callback(message);
        }
        catch (x)
        {
            _debug('Exception during execution of extension', name, x);
            return message;
        }
    }

    function _applyIncomingExtensions(message)
    {
        for (var i = 0; i < _extensions.length; ++i)
        {
            if (message === undefined || message === null)
            {
                break;
            }

            var index = _reverseIncomingExtensions ? _extensions.length - 1 - i : i;
            var extension = _extensions[index];
            var callback = extension.extension.incoming;
            if (_isFunction(callback))
            {
                var result = _applyExtension(extension.name, callback, message);
                message = result === undefined ? message : result;
            }
        }
        return message;
    }

    function _applyOutgoingExtensions(message)
    {
        for (var i = 0; i < _extensions.length; ++i)
        {
            if (message === undefined || message === null)
            {
                break;
            }

            var extension = _extensions[i];
            var callback = extension.extension.outgoing;
            if (_isFunction(callback))
            {
                var result = _applyExtension(extension.name, callback, message);
                message = result === undefined ? message : result;
            }
        }
        return message;
    }

    /**
     * Converts the given response into an array of bayeux messages
     * @param response the response to convert
     * @return an array of bayeux messages obtained by converting the response
     */
    function _convertToMessages(response)
    {
        if (_isString(response))
        {
            try
            {
                return org.cometd.JSON.fromJSON(response);
            }
            catch(x)
            {
                _debug('Could not convert to JSON the following string', '"' + response + '"');
                throw x;
            }
        }
        if (_isArray(response))
        {
            return response;
        }
        if (response === undefined || response === null)
        {
            return [];
        }
        if (response instanceof Object)
        {
            return [response];
        }
        throw 'Conversion Error ' + response + ', typeof ' + (typeof response);
    }

    function _notify(channel, message)
    {
        var subscriptions = _listeners[channel];
        if (subscriptions && subscriptions.length > 0)
        {
            for (var i = 0; i < subscriptions.length; ++i)
            {
                var subscription = subscriptions[i];
                // Subscriptions may come and go, so the array may have 'holes'
                if (subscription)
                {
                    try
                    {
                        subscription.callback.call(subscription.scope, message);
                    }
                    catch (x)
                    {
                        _warn('Exception during notification', subscription, message, x);
                    }
                }
            }
        }
    }

    function _notifyListeners(channel, message)
    {
        // Notify direct listeners
        _notify(channel, message);

        // Notify the globbing listeners
        var channelParts = channel.split("/");
        var last = channelParts.length - 1;
        for (var i = last; i > 0; --i)
        {
            var channelPart = channelParts.slice(0, i).join('/') + '/*';
            // We don't want to notify /foo/* if the channel is /foo/bar/baz,
            // so we stop at the first non recursive globbing
            if (i == last)
            {
                _notify(channelPart, message);
            }
            // Add the recursive globber and notify
            channelPart += '*';
            _notify(channelPart, message);
        }
    }

    function _setTimeout(funktion, delay)
    {
        return setTimeout(function()
        {
            try
            {
                funktion();
            }
            catch (x)
            {
                _debug('Exception invoking timed function', funktion, x);
            }
        }, delay);
    }

    function _cancelDelayedSend()
    {
        if (_scheduledSend !== null)
        {
            clearTimeout(_scheduledSend);
        }
        _scheduledSend = null;
    }

    function _delayedSend(operation)
    {
        _cancelDelayedSend();
        var delay = _backoff;
        if (_advice.interval && _advice.interval > 0)
        {
            delay += _advice.interval;
        }
        _scheduledSend = _setTimeout(operation, delay);
    }

    // Needed to break cyclic dependencies between function definitions
    var _handleResponse;
    var _handleFailure;

    /**
     * Delivers the messages to the Cometd server
     * @param messages the array of messages to send
     * @param longpoll true if this send is a long poll
     */
    function _send(messages, longpoll, extraPath)
    {
        // We must be sure that the messages have a clientId.
        // This is not guaranteed since the handshake may take time to return
        // (and hence the clientId is not known yet) and the application
        // may create other messages.
        for (var i = 0; i < messages.length; ++i)
        {
            var message = messages[i];
            message.id = _nextMessageId();
            if (_clientId)
            {
                message.clientId = _clientId;
            }
            message = _applyOutgoingExtensions(message);
            if (message !== undefined && message !== null)
            {
                messages[i] = message;
            }
            else
            {
                messages.splice(i--, 1);
            }
        }
        if (messages.length === 0)
        {
            return;
        }

        // Prepare the URL to send the message to
        var url = _url;
        if (!url.match(/\/$/)) // url.endsWith('/') ?
        {
            url = url + '/';
        }
        if (extraPath)
        {
            url = url + extraPath;
        }

        var self = this;
        var envelope = {
            url: url,
            messages: messages,
            onSuccess: function(request, response)
            {
                try
                {
                    _handleResponse.call(self, request, response, longpoll);
                }
                catch (x)
                {
                    _debug('Exception during handling of response', x);
                }
            },
            onFailure: function(request, reason, exception)
            {
                try
                {
                    _handleFailure.call(self, request, messages, reason, exception, longpoll);
                }
                catch (x)
                {
                    _debug('Exception during handling of failure', x);
                }
            }
        };
        _debug('Send', envelope);
        _transport.send(envelope, longpoll);
    }

    function _queueSend(message)
    {
        if (_batch > 0 || _internalBatch === true)
        {
            _messageQueue.push(message);
        }
        else
        {
            _send([message], false);
        }
    }

    /**
     * Sends a complete bayeux message.
     * This method is exposed as a public so that extensions may use it
     * to send bayeux message directly, for example in case of re-sending
     * messages that have already been sent but that for some reason must
     * be resent.
     */
    this.send = _queueSend;

    function _resetBackoff()
    {
        _backoff = 0;
    }

    function _increaseBackoff()
    {
        if (_backoff < _maxBackoff)
        {
            _backoff += _backoffIncrement;
        }
    }

    /**
     * Starts a the batch of messages to be sent in a single request.
     * @see #_endBatch(sendMessages)
     */
    function _startBatch()
    {
        ++_batch;
    }

    function _flushBatch()
    {
        var messages = _messageQueue;
        _messageQueue = [];
        if (messages.length > 0)
        {
            _send(messages, false);
        }
    }

    /**
     * Ends the batch of messages to be sent in a single request,
     * optionally sending messages present in the message queue depending
     * on the given argument.
     * @see #_startBatch()
     */
    function _endBatch()
    {
        --_batch;
        if (_batch < 0)
        {
            throw 'Calls to startBatch() and endBatch() are not paired';
        }

        if (_batch === 0 && !_isDisconnected() && !_internalBatch)
        {
            _flushBatch();
        }
    }

    /**
     * Sends the connect message
     */
    function _connect()
    {
        var message = {
            channel: '/meta/connect',
            connectionType: _transport.getType()
        };
        _setStatus('connecting');
        _debug('Connect sent', message);
        _send([message], true, 'connect');
        _setStatus('connected');
    }

    function _delayedConnect()
    {
        _setStatus('connecting');
        _delayedSend(function()
        {
            _connect();
        });
    }

    /**
     * Sends the initial handshake message
     */
    function _handshake(handshakeProps)
    {
        _clientId = null;

        _clearSubscriptions();

        // Reset the transports if we're not retrying the handshake
        if (_isDisconnected())
        {
            _transports.reset();
        }

        _batch = 0;

        // Mark the start of an internal batch.
        // This is needed because handshake and connect are async.
        // It may happen that the application calls init() then subscribe()
        // and the subscribe message is sent before the connect message, if
        // the subscribe message is not held until the connect message is sent.
        // So here we start a batch to hold temporarly any message until
        // the connection is fully established.
        _internalBatch = true;

        // Save the properties provided by the user, so that
        // we can reuse them during automatic re-handshake
        _handshakeProps = handshakeProps;

        var version = '1.0';

        // Figure out the transports to send to the server
        var transportTypes = _transports.findTransportTypes(version, _crossDomain);

        var bayeuxMessage = {
            version: version,
            minimumVersion: '0.9',
            channel: '/meta/handshake',
            supportedConnectionTypes: transportTypes
        };
        // Do not allow the user to mess with the required properties,
        // so merge first the user properties and *then* the bayeux message
        var message = _mixin(false, {}, _handshakeProps, bayeuxMessage);

        // Pick up the first available transport as initial transport
        // since we don't know if the server supports it
        _transport = _transports.negotiateTransport(transportTypes, version, _crossDomain);
        _debug('Initial transport is', _transport);

        // We started a batch to hold the application messages,
        // so here we must bypass it and send immediately.
        _setStatus('handshaking');
        _debug('Handshake sent', message);
        _send([message], false, 'handshake');
    }

    function _delayedHandshake()
    {
        _setStatus('handshaking');

        // We will call _handshake() which will reset _clientId, but we want to avoid
        // that between the end of this method and the call to _handshake() someone may
        // call publish() (or other methods that call _queueSend()).
        _internalBatch = true;

        _delayedSend(function()
        {
            _handshake(_handshakeProps);
        });
    }

    function _handshakeResponse(message)
    {
        if (message.successful)
        {
            // Save clientId, figure out transport, then follow the advice to connect
            _clientId = message.clientId;

            var newTransport = _transports.negotiateTransport(message.supportedConnectionTypes, message.version, _crossDomain);
            if (newTransport === null)
            {
                throw 'Could not negotiate transport with server; client ' +
                      _transports.findTransportTypes(message.version, _crossDomain) +
                      ", server " +
                      message.supportedConnectionTypes;
            }
            else
            {
                _debug('Transport', _transport, '->', newTransport);
                _transport = newTransport;
            }

            // Notify the listeners
            // Here the new transport is in place, as well as the clientId, so
            // the listener can perform a publish() if it wants, and the listeners
            // are notified before the connect below.
            message.reestablish = _reestablish;
            _reestablish = true;
            _notifyListeners('/meta/handshake', message);

            var action = _advice.reconnect ? _advice.reconnect : 'retry';
            switch (action)
            {
                case 'retry':
                    _delayedConnect();
                    break;
                default:
                    break;
            }
        }
        else
        {
            var retry = !_isDisconnected() && _advice.reconnect != 'none';
            if (!retry)
            {
                _setStatus('disconnected');
            }

            _notifyListeners('/meta/handshake', message);
            _notifyListeners('/meta/unsuccessful', message);

            // Only try again if we haven't been disconnected and
            // the advice permits us to retry the handshake
            if (retry)
            {
                _increaseBackoff();
                _delayedHandshake();
            }
        }
    }

    function _handshakeFailure(xhr, message)
    {
        // Notify listeners
        var failureMessage = {
            successful: false,
            failure: true,
            channel: '/meta/handshake',
            request: message,
            xhr: xhr,
            advice: {
                action: 'retry',
                interval: _backoff
            }
        };

        var retry = !_isDisconnected() && _advice.reconnect != 'none';
        if (!retry)
        {
            _setStatus('disconnected');
        }

        _notifyListeners('/meta/handshake', failureMessage);
        _notifyListeners('/meta/unsuccessful', failureMessage);

        // Only try again if we haven't been disconnected and the
        // advice permits us to try again
        if (retry)
        {
            _increaseBackoff();
            _delayedHandshake();
        }
    }

    function _connectResponse(message)
    {
        var action = _isDisconnected() ? 'none' : (_advice.reconnect ? _advice.reconnect : 'retry');
        if (!_isDisconnected())
        {
            _setStatus(action == 'retry' ? 'connecting' : 'disconnecting');
        }

        if (message.successful)
        {
            // End the internal batch and allow held messages from the application
            // to go to the server (see _handshake() where we start the internal batch).
            // The internal batch is ended before notifying the listeners, so that
            // listeners can batch other cometd operations
            _internalBatch = false;
            _flushBatch();

            // Notify the listeners after the status change but before the next connect
            _notifyListeners('/meta/connect', message);

            // Connect was successful.
            // Normally, the advice will say "reconnect: 'retry', interval: 0"
            // and the server will hold the request, so when a response returns
            // we immediately call the server again (long polling)
            switch (action)
            {
                case 'retry':
                    _resetBackoff();
                    _delayedConnect();
                    break;
                default:
                    _resetBackoff();
                    _setStatus('disconnected');
                    break;
            }
        }
        else
        {
            // Notify the listeners after the status change but before the next action
            _notifyListeners('/meta/connect', message);
            _notifyListeners('/meta/unsuccessful', message);

            // Connect was not successful.
            // This may happen when the server crashed, the current clientId
            // will be invalid, and the server will ask to handshake again
            switch (action)
            {
                case 'retry':
                    _increaseBackoff();
                    _delayedConnect();
                    break;
                case 'handshake':
                    _resetBackoff();
                    _delayedHandshake();
                    break;
                case 'none':
                    _resetBackoff();
                    _setStatus('disconnected');
                    break;
            }
        }
    }

    function _connectFailure(xhr, message)
    {
        // Notify listeners
        var failureMessage = {
            successful: false,
            failure: true,
            channel: '/meta/connect',
            request: message,
            xhr: xhr,
            advice: {
                action: 'retry',
                interval: _backoff
            }
        };
        _notifyListeners('/meta/connect', failureMessage);
        _notifyListeners('/meta/unsuccessful', failureMessage);

        if (!_isDisconnected())
        {
            var action = _advice.reconnect ? _advice.reconnect : 'retry';
            switch (action)
            {
                case 'retry':
                    _increaseBackoff();
                    _delayedConnect();
                    break;
                case 'handshake':
                    _resetBackoff();
                    _delayedHandshake();
                    break;
                case 'none':
                    _resetBackoff();
                    break;
                default:
                    _debug('Unrecognized action', action);
                    break;
            }
        }
    }

    function _disconnect(abort)
    {
        _cancelDelayedSend();
        if (abort)
        {
            _transport.abort();
        }
        _clientId = null;
        _setStatus('disconnected');
        _batch = 0;
        _messageQueue = [];
        _resetBackoff();
    }

    function _disconnectResponse(message)
    {
        if (message.successful)
        {
            _disconnect(false);
            _notifyListeners('/meta/disconnect', message);
        }
        else
        {
            _disconnect(true);
            _notifyListeners('/meta/disconnect', message);
            _notifyListeners('/meta/unsuccessful', message);
        }
    }

    function _disconnectFailure(xhr, message)
    {
        _disconnect(true);

        var failureMessage = {
            successful: false,
            failure: true,
            channel: '/meta/disconnect',
            request: message,
            xhr: xhr,
            advice: {
                action: 'none',
                interval: 0
            }
        };
        _notifyListeners('/meta/disconnect', failureMessage);
        _notifyListeners('/meta/unsuccessful', failureMessage);
    }

    function _subscribeResponse(message)
    {
        if (message.successful)
        {
            _notifyListeners('/meta/subscribe', message);
        }
        else
        {
            _notifyListeners('/meta/subscribe', message);
            _notifyListeners('/meta/unsuccessful', message);
        }
    }

    function _subscribeFailure(xhr, message)
    {
        var failureMessage = {
            successful: false,
            failure: true,
            channel: '/meta/subscribe',
            request: message,
            xhr: xhr,
            advice: {
                action: 'none',
                interval: 0
            }
        };
        _notifyListeners('/meta/subscribe', failureMessage);
        _notifyListeners('/meta/unsuccessful', failureMessage);
    }

    function _unsubscribeResponse(message)
    {
        if (message.successful)
        {
            _notifyListeners('/meta/unsubscribe', message);
        }
        else
        {
            _notifyListeners('/meta/unsubscribe', message);
            _notifyListeners('/meta/unsuccessful', message);
        }
    }

    function _unsubscribeFailure(xhr, message)
    {
        var failureMessage = {
            successful: false,
            failure: true,
            channel: '/meta/unsubscribe',
            request: message,
            xhr: xhr,
            advice: {
                action: 'none',
                interval: 0
            }
        };
        _notifyListeners('/meta/unsubscribe', failureMessage);
        _notifyListeners('/meta/unsuccessful', failureMessage);
    }

    function _messageResponse(message)
    {
        if (message.successful === undefined)
        {
            if (message.data)
            {
                // It is a plain message, and not a bayeux meta message
                _notifyListeners(message.channel, message);
            }
            else
            {
                _debug('Unknown message', message);
            }
        }
        else
        {
            if (message.successful)
            {
                _notifyListeners('/meta/publish', message);
            }
            else
            {
                _notifyListeners('/meta/publish', message);
                _notifyListeners('/meta/unsuccessful', message);
            }
        }
    }

    function _messageFailure(xhr, message)
    {
        var failureMessage = {
            successful: false,
            failure: true,
            channel: message.channel,
            request: message,
            xhr: xhr,
            advice: {
                action: 'none',
                interval: 0
            }
        };
        _notifyListeners('/meta/publish', failureMessage);
        _notifyListeners('/meta/unsuccessful', failureMessage);
    }

    function _receive(message)
    {
        if (message.advice)
        {
            _advice = message.advice;
        }

        var channel = message.channel;
        switch (channel)
        {
            case '/meta/handshake':
                _handshakeResponse(message);
                break;
            case '/meta/connect':
                _connectResponse(message);
                break;
            case '/meta/disconnect':
                _disconnectResponse(message);
                break;
            case '/meta/subscribe':
                _subscribeResponse(message);
                break;
            case '/meta/unsubscribe':
                _unsubscribeResponse(message);
                break;
            default:
                _messageResponse(message);
                break;
        }
    }

    /**
     * Receives a message.
     * This method is exposed as a public so that extensions may inject
     * messages simulating that they had been received.
     */
    this.receive = _receive;

    _handleResponse = function _handleResponse(request, response, longpoll)
    {
        var messages = _convertToMessages(response);
        _debug('Received', messages);

        // Signal the transport it can send other queued requests
        _transport.complete(request, true, longpoll);

        for (var i = 0; i < messages.length; ++i)
        {
            var message = messages[i];
            message = _applyIncomingExtensions(message);
            if (message === undefined || message === null)
            {
                continue;
            }

            _receive(message);
        }
    };

    _handleFailure = function _handleFailure(request, messages, reason, exception, longpoll)
    {
        var xhr = request.xhr;

        _debug('Failed', messages);

        // Signal the transport it can send other queued requests
        _transport.complete(request, false, longpoll);

        for (var i = 0; i < messages.length; ++i)
        {
            var message = messages[i];
            var channel = message.channel;
            switch (channel)
            {
                case '/meta/handshake':
                    _handshakeFailure(xhr, message);
                    break;
                case '/meta/connect':
                    _connectFailure(xhr, message);
                    break;
                case '/meta/disconnect':
                    _disconnectFailure(xhr, message);
                    break;
                case '/meta/subscribe':
                    _subscribeFailure(xhr, message);
                    break;
                case '/meta/unsubscribe':
                    _unsubscribeFailure(xhr, message);
                    break;
                default:
                    _messageFailure(xhr, message);
                    break;
            }
        }
    };

    function _hasSubscriptions(channel)
    {
        var subscriptions = _listeners[channel];
        if (subscriptions)
        {
            for (var i = 0; i < subscriptions.length; ++i)
            {
                if (subscriptions[i])
                {
                    return true;
                }
            }
        }
        return false;
    }

    function _resolveScopedCallback(scope, callback)
    {
        var delegate = {
            scope: scope,
            method: callback
        };
        if (_isFunction(scope))
        {
            delegate.scope = undefined;
            delegate.method = scope;
        }
        else
        {
            if (_isString(callback))
            {
                if (!scope)
                {
                    throw 'Invalid scope ' + scope;
                }
                delegate.method = scope[callback];
                if (!_isFunction(delegate.method))
                {
                    throw 'Invalid callback ' + callback + ' for scope ' + scope;
                }
            }
            else if (!_isFunction(callback))
            {
                throw 'Invalid callback ' + callback;
            }
        }
        return delegate;
    }

    function _addListener(channel, scope, callback, isSubscription)
    {
        // The data structure is a map<channel, subscription[]>, where each subscription
        // holds the callback to be called and its scope.

        var delegate = _resolveScopedCallback(scope, callback);
        _debug('Listener scope', delegate.scope, 'and callback', delegate.method);

        var subscription = {
            scope: delegate.scope,
            callback: delegate.method,
            subscription: isSubscription === true
        };

        var subscriptions = _listeners[channel];
        if (!subscriptions)
        {
            subscriptions = [];
            _listeners[channel] = subscriptions;
        }
        // Pushing onto an array appends at the end and returns the id associated with the element increased by 1.
        // Note that if:
        // a.push('a'); var hb=a.push('b'); delete a[hb-1]; var hc=a.push('c');
        // then:
        // hc==3, a.join()=='a',,'c', a.length==3
        var subscriptionID = subscriptions.push(subscription) - 1;

        _debug('Added listener', subscription, 'for channel', channel, 'having id =', subscriptionID);

        // The subscription to allow removal of the listener is made of the channel and the index
        return [channel, subscriptionID];
    }

    function _removeListener(subscription)
    {
        var subscriptions = _listeners[subscription[0]];
        if (subscriptions)
        {
            delete subscriptions[subscription[1]];
            _debug('Removed listener', subscription);
        }
    }

    //
    // PUBLIC API
    //

    /**
     * Registers the given transport under the given transport type.
     * The optional index parameter specifies the "priority" at which the
     * transport is registered (where 0 is the max priority).
     * If a transport with the same type is already registered, this function
     * does nothing and returns false.
     * @param type the transport type
     * @param transport the transport object
     * @param index the index at which this transport is to be registered
     * @return true if the transport has been registered, false otherwise
     * @see #unregisterTransport(type)
     */
    this.registerTransport = function(type, transport, index)
    {
        var result = _transports.add(type, transport, index);
        if (result)
        {
            _debug('Registered transport', type);

            if (_isFunction(transport.registered))
            {
                transport.registered(type, this);
            }
        }
        return result;
    };

    /**
     * @return an array of all registered transport types
     */
    this.getTransportTypes = function()
    {
        return _transports.getTransportTypes();
    };

    /**
     * Unregisters the transport with the given transport type.
     * @param type the transport type to unregister
     * @return the transport that has been unregistered,
     * or null if no transport was previously registered under the given transport type
     */
    this.unregisterTransport = function(type)
    {
        var transport = _transports.remove(type);
        if (transport !== null)
        {
            _debug('Unregistered transport', type);

            if (_isFunction(transport.unregistered))
            {
                transport.unregistered();
            }
        }
        return transport;
    };

    /**
     * Configures the initial Bayeux communication with the Bayeux server.
     * Configuration is passed via an object that must contain a mandatory field <code>url</code>
     * of type string containing the URL of the Bayeux server.
     * @param configuration the configuration object
     */
    this.configure = function(configuration)
    {
        _configure.call(this, configuration);
    };

    /**
     * Configures and establishes the Bayeux communication with the Bayeux server
     * via a handshake and a subsequent connect.
     * @param configuration the configuration object
     * @param handshakeProps an object to be merged with the handshake message
     * @see #configure(configuration)
     * @see #handshake(handshakeProps)
     */
    this.init = function(configuration, handshakeProps)
    {
        this.configure(configuration);
        this.handshake(handshakeProps);
    };

    /**
     * Establishes the Bayeux communication with the Bayeux server
     * via a handshake and a subsequent connect.
     * @param handshakeProps an object to be merged with the handshake message
     */
    this.handshake = function(handshakeProps)
    {
        _setStatus('disconnected');
        _reestablish = false;
        _handshake(handshakeProps);
    };

    /**
     * Disconnects from the Bayeux server.
     * @param disconnectProps an object to be merged with the disconnect message
     */
    this.disconnect = function(disconnectProps)
    {
        if (_isDisconnected())
        {
            return;
        }
        var bayeuxMessage = {
            channel: '/meta/disconnect'
        };
        var message = _mixin(false, {}, disconnectProps, bayeuxMessage);
        _setStatus('disconnecting');
        _send([message], false, 'disconnect');
    };

    /**
     * Marks the start of a batch of application messages to be sent to the server
     * in a single request, obtaining a single response containing (possibly) many
     * application reply messages.
     * Messages are held in a queue and not sent until {@link #endBatch()} is called.
     * If startBatch() is called multiple times, then an equal number of endBatch()
     * calls must be made to close and send the batch of messages.
     * @see #endBatch()
     */
    this.startBatch = function()
    {
        _startBatch();
    };

    /**
     * Marks the end of a batch of application messages to be sent to the server
     * in a single request.
     * @see #startBatch()
     */
    this.endBatch = function()
    {
        _endBatch();
    };

    /**
     * Executes the given callback in the given scope, surrounded by a {@link #startBatch()}
     * and {@link #endBatch()} calls.
     * @param scope the scope of the callback, may be omitted
     * @param callback the callback to be executed within {@link #startBatch()} and {@link #endBatch()} calls
     */
    this.batch = function(scope, callback)
    {
        var delegate = _resolveScopedCallback(scope, callback);
        this.startBatch();
        try
        {
            delegate.method.call(delegate.scope);
            this.endBatch();
        }
        catch (x)
        {
            _debug('Exception during execution of batch', x);
            this.endBatch();
            throw x;
        }
    };

    /**
     * Adds a listener for bayeux messages, performing the given callback in the given scope
     * when a message for the given channel arrives.
     * @param channel the channel the listener is interested to
     * @param scope the scope of the callback, may be omitted
     * @param callback the callback to call when a message is sent to the channel
     * @returns the subscription handle to be passed to {@link #removeListener(object)}
     * @see #removeListener(subscription)
     */
    this.addListener = function(channel, scope, callback)
    {
        if (arguments.length < 2)
            throw 'Illegal arguments number: required 2, got ' + arguments.length;
        if (!_isString(channel))
            throw 'Illegal argument type: channel must be a string';

        return _addListener(channel, scope, callback, false);
    };

    /**
     * Removes the subscription obtained with a call to {@link #addListener(string, object, function)}.
     * @param subscription the subscription to unsubscribe.
     * @see #addListener(channel, scope, callback)
     */
    this.removeListener = function(subscription)
    {
        if (!_isArray(subscription))
            throw 'Invalid argument: expected subscription, not ' + subscription;

        _removeListener(subscription);
    };

    /**
     * Removes all listeners registered with {@link #addListener(channel, scope, callback)} or
     * {@link #subscribe(channel, scope, callback)}.
     */
    this.clearListeners = function()
    {
        _listeners = {};
    };

    /**
     * Subscribes to the given channel, performing the given callback in the given scope
     * when a message for the channel arrives.
     * @param channel the channel to subscribe to
     * @param scope the scope of the callback, may be omitted
     * @param callback the callback to call when a message is sent to the channel
     * @param subscribeProps an object to be merged with the subscribe message
     * @return the subscription handle to be passed to {@link #unsubscribe(object)}
     */
    this.subscribe = function(channel, scope, callback, subscribeProps)
    {
        if (arguments.length < 2)
            throw 'Illegal arguments number: required 2, got ' + arguments.length;
        if (!_isString(channel))
            throw 'Illegal argument type: channel must be a string';

        // Normalize arguments
        if (_isFunction(scope))
        {
            subscribeProps = callback;
            callback = scope;
            scope = undefined;
        }

        // Only send the message to the server if this clientId has not yet subscribed to the channel
        var send = !_hasSubscriptions(channel);

        var subscription = _addListener(channel, scope, callback, true);

        if (send)
        {
            // Send the subscription message after the subscription registration to avoid
            // races where the server would send a message to the subscribers, but here
            // on the client the subscription has not been added yet to the data structures
            var bayeuxMessage = {
                channel: '/meta/subscribe',
                subscription: channel
            };
            var message = _mixin(false, {}, subscribeProps, bayeuxMessage);
            _queueSend(message);
        }

        return subscription;
    };

    /**
     * Unsubscribes the subscription obtained with a call to {@link #subscribe(string, object, function)}.
     * @param subscription the subscription to unsubscribe.
     */
    this.unsubscribe = function(subscription, unsubscribeProps)
    {
        // Remove the local listener before sending the message
        // This ensures that if the server fails, this client does not get notifications
        this.removeListener(subscription);

        var channel = subscription[0];
        // Only send the message to the server if this clientId unsubscribes the last subscription
        if (!_hasSubscriptions(channel))
        {
            var bayeuxMessage = {
                channel: '/meta/unsubscribe',
                subscription: channel
            };
            var message = _mixin(false, {}, unsubscribeProps, bayeuxMessage);
            _queueSend(message);
        }
    };

    /**
     * Removes all subscriptions added via {@link #subscribe(channel, scope, callback, subscribeProps)},
     * but does not remove the listeners added via {@link addListener(channel, scope, callback)}.
     */
    this.clearSubscriptions = function()
    {
        _clearSubscriptions();
    };

    /**
     * Publishes a message on the given channel, containing the given content.
     * @param channel the channel to publish the message to
     * @param content the content of the message
     * @param publishProps an object to be merged with the publish message
     */
    this.publish = function(channel, content, publishProps)
    {
        if (arguments.length < 1)
            throw 'Illegal arguments number: required 1, got ' + arguments.length;
        if (!_isString(channel))
            throw 'Illegal argument type: channel must be a string';

        var bayeuxMessage = {
            channel: channel,
            data: content
        };
        var message = _mixin(false, {}, publishProps, bayeuxMessage);
        _queueSend(message);
    };

    /**
     * Returns a string representing the status of the bayeux communication with the Bayeux server.
     */
    this.getStatus = function()
    {
        return _status;
    };

    /**
     * Sets the backoff period used to increase the backoff time when retrying an unsuccessful or failed message.
     * Default value is 1 second, which means if there is a persistent failure the retries will happen
     * after 1 second, then after 2 seconds, then after 3 seconds, etc. So for example with 15 seconds of
     * elapsed time, there will be 5 retries (at 1, 3, 6, 10 and 15 seconds elapsed).
     * @param period the backoff period to set
     * @see #getBackoffIncrement()
     */
    this.setBackoffIncrement = function(period)
    {
        _backoffIncrement = period;
    };

    /**
     * Returns the backoff period used to increase the backoff time when retrying an unsuccessful or failed message.
     * @see #setBackoffIncrement(period)
     */
    this.getBackoffIncrement = function()
    {
        return _backoffIncrement;
    };

    /**
     * Returns the backoff period to wait before retrying an unsuccessful or failed message.
     */
    this.getBackoffPeriod = function()
    {
        return _backoff;
    };

    /**
     * Sets the log level for console logging.
     * Valid values are the strings 'error', 'warn', 'info' and 'debug', from
     * less verbose to more verbose.
     * @param level the log level string
     */
    this.setLogLevel = function(level)
    {
        _logLevel = level;
    };

    /**
     * Registers an extension whose callbacks are called for every incoming message
     * (that comes from the server to this client implementation) and for every
     * outgoing message (that originates from this client implementation for the
     * server).
     * The format of the extension object is the following:
     * <pre>
     * {
     *     incoming: function(message) { ... },
     *     outgoing: function(message) { ... }
     * }
     * </pre>
     * Both properties are optional, but if they are present they will be called
     * respectively for each incoming message and for each outgoing message.
     * @param name the name of the extension
     * @param extension the extension to register
     * @return true if the extension was registered, false otherwise
     * @see #unregisterExtension(name)
     */
    this.registerExtension = function(name, extension)
    {
        if (arguments.length < 2)
            throw 'Illegal arguments number: required 2, got ' + arguments.length;
        if (!_isString(name))
            throw 'Illegal argument type: extension name must be a string';

        var existing = false;
        for (var i = 0; i < _extensions.length; ++i)
        {
            var existingExtension = _extensions[i];
            if (existingExtension.name == name)
            {
                existing = true;
                break;
            }
        }
        if (!existing)
        {
            _extensions.push({
                name: name,
                extension: extension
            });
            _debug('Registered extension', name);

            // Callback for extensions
            if (_isFunction(extension.registered))
            {
                extension.registered(name, this);
            }

            return true;
        }
        else
        {
            _info('Could not register extension with name', name, 'since another extension with the same name already exists');
            return false;
        }
    };

    /**
     * Unregister an extension previously registered with
     * {@link #registerExtension(name, extension)}.
     * @param name the name of the extension to unregister.
     * @return true if the extension was unregistered, false otherwise
     */
    this.unregisterExtension = function(name)
    {
        if (!_isString(name))
            throw 'Illegal argument type: extension name must be a string';

        var unregistered = false;
        for (var i = 0; i < _extensions.length; ++i)
        {
            var extension = _extensions[i];
            if (extension.name == name)
            {
                _extensions.splice(i, 1);
                unregistered = true;
                _debug('Unregistered extension', name);

                // Callback for extensions
                var ext = extension.extension;
                if (_isFunction(ext.unregistered))
                {
                    ext.unregistered();
                }

                break;
            }
        }
        return unregistered;
    };

    /**
     * Find the extension registered with the given name.
     * @param name the name of the extension to find
     * @return the extension found or null if no extension with the given name has been registered
     */
    this.getExtension = function(name)
    {
        for (var i = 0; i < _extensions.length; ++i)
        {
            var extension = _extensions[i];
            if (extension.name == name)
            {
                return extension.extension;
            }
        }
        return null;
    };

    /**
     * Returns the name assigned to this Cometd object, or the string 'default'
     * if no name has been explicitely passed as parameter to the constructor.
     */
    this.getName = function()
    {
        return _name;
    };

    /**
     * Returns the clientId assigned by the Bayeux server during handshake.
     */
    this.getClientId = function()
    {
        return _clientId;
    };

    /**
     * Returns the URL of the Bayeux server.
     */
    this.getURL = function()
    {
        return _url;
    };

    this.getTransport = function()
    {
        return _transport;
    };

    /**
     * Base object with the common functionality for transports.
     * The key responsibility is to allow at most 2 outstanding requests to the server,
     * to avoid that requests are sent behind a long poll.
     * To achieve this, we have one reserved request for the long poll, and all other
     * requests are serialized one after the other.
     */
    org.cometd.Transport = function()
    {
        var _type;
        var _requestIds = 0;
        var _longpollRequest = null;
        var _requests = [];
        var _envelopes = [];

        /**
         * Function invoked just after a transport has been successfully registered.
         * @param type the type of transport (for example 'long-polling')
         * @param cometd the cometd object this transport has been registered to
         * @see #unregistered()
         */
        this.registered = function(type, cometd)
        {
            _type = type;
        };

        /**
         * Function invoked just after a transport has been successfully unregistered.
         * @see #registered(type, cometd)
         */
        this.unregistered = function()
        {
            _type = null;
        };

        /**
         * Returns whether this transport can work for the given version and cross domain communication case.
         * @param version a string indicating the transport version
         * @param crossDomain a boolean indicating whether the communication is cross domain
         * @return true if this transport can work for the given version and cross domain communication case,
         * false otherwise
         */
        this.accept = function(version, crossDomain)
        {
            throw 'Abstract';
        };

        /**
         * Performs the actual send depending on the transport type details.
         * @param envelope the envelope to send
         * @param request the request information
         */
        this.transportSend = function(envelope, request)
        {
            throw 'Abstract';
        };

        this.transportSuccess = function(envelope, request, response)
        {
            if (!request.expired)
            {
                clearTimeout(request.timeout);
                envelope.onSuccess(request, response);
            }
        };

        this.transportFailure = function(envelope, request, reason, exception)
        {
            if (!request.expired)
            {
                clearTimeout(request.timeout);
                envelope.onFailure(request, reason, exception);
            }
        };

        function _transportSend(envelope, request)
        {
            var self = this;

            this.transportSend(envelope, request);

            request.expired = false;

            var delay = _maxNetworkDelay;
            if (request.longpoll === true)
            {
                delay +=_advice && typeof _advice.timeout === 'number' ? _advice.timeout : 0;
            }
            request.timeout = _setTimeout(function()
            {
                request.expired = true;
                if (request.xhr)
                {
                    request.xhr.abort();
                }
                var errorMessage = 'Transport ' + self.getType() + ' exceeded ' + delay + ' ms max network delay';
                _debug(errorMessage);
                envelope.onFailure(request, 'timeout', errorMessage);
            }, delay);
        }

        function _longpollSend(envelope)
        {
            if (_longpollRequest !== null)
            {
                throw 'Concurrent longpoll requests not allowed, request ' + _longpollRequest.id + ' not yet completed';
            }

            var requestId = ++_requestIds;
            var request = {
                id: requestId,
                longpoll: true
            };
            _transportSend.call(this, envelope, request);
            _longpollRequest = request;
        }

        function _queueSend(envelope)
        {
            var requestId = ++_requestIds;
            var request = {
                id: requestId,
                longpoll: false
            };
            // Consider the longpoll requests which should always be present
            if (_requests.length < _maxConnections - 1)
            {
                _transportSend.call(this, envelope, request);
                _requests.push(request);
            }
            else
            {
                _envelopes.push([envelope, request]);
            }
        }

        function _longpollComplete(request)
        {
            var requestId = request.id;
            if (_longpollRequest !== null && _longpollRequest !== request)
            {
                throw 'Longpoll request mismatch, completing request ' + requestId;
            }

            // Reset longpoll request
            _longpollRequest = null;
        }

        function _complete(request, success)
        {
            var index = _inArray(request, _requests);
            // The index can be negative the request has been aborted
            if (index >= 0)
            {
                _requests.splice(index, 1);
            }

            if (_envelopes.length > 0)
            {
                var envelope = _envelopes.shift();
                if (success)
                {
                    _queueSend.call(this, envelope[0]);
                }
                else
                {
                    // Keep the semantic of calling response callbacks asynchronously after the request
                    setTimeout(function() { envelope[0].onFailure(envelope[1], 'error'); }, 0);
                }
            }
        }

        /**
         * Returns the type of this transport.
         * @see #registered(type, cometd)
         */
        this.getType = function()
        {
            return _type;
        };

        this.send = function(envelope, longpoll)
        {
            if (longpoll)
            {
                _longpollSend.call(this, envelope);
            }
            else
            {
                _queueSend.call(this, envelope);
            }
        };

        this.complete = function(request, success, longpoll)
        {
            if (longpoll)
            {
                _longpollComplete.call(this, request);
            }
            else
            {
                _complete.call(this, request, success);
            }
        };

        this.abort = function()
        {
            for (var i = 0; i < _requests.length; ++i)
            {
                var request = _requests[i];
                _debug('Aborting request', request);
                if (request.xhr)
                {
                    request.xhr.abort();
                }
            }
            if (_longpollRequest)
            {
                _debug('Aborting longpoll request', _longpollRequest);
                if (_longpollRequest.xhr)
                {
                    _longpollRequest.xhr.abort();
                }
            }
            this.reset();
        };

        this.reset = function()
        {
            _longpollRequest = null;
            _requests = [];
            _envelopes = [];
        };
    };

    org.cometd.LongPollingTransport = function()
    {
        // By default, support cross domain
        var _supportsCrossDomain = true;

        this.accept = function(version, crossDomain)
        {
            return _supportsCrossDomain || !crossDomain;
        };

        this.xhrSend = function(packet)
        {
            throw 'Abstract';
        };

        this.transportSend = function(envelope, request)
        {
            var self = this;
            try
            {
                request.xhr = this.xhrSend({
                    transport: this,
                    url: envelope.url,
                    headers: _requestHeaders,
                    body: org.cometd.JSON.toJSON(envelope.messages),
                    onSuccess: function(response)
                    {
                        self.transportSuccess(envelope, request, response);
                    },
                    onError: function(reason, exception)
                    {
                        _supportsCrossDomain = false;
                        self.transportFailure(envelope, request, reason, exception);
                    }
                });
            }
            catch (x)
            {
                _supportsCrossDomain = false;
                // Keep the semantic of calling response callbacks asynchronously after the request
                _setTimeout(function()
                {
                    self.transportFailure(envelope, request, 'error', x);
                }, 0);
            }
        };

        this.reset = function()
        {
            org.cometd.LongPollingTransport.prototype.reset();
            _supportsCrossDomain = true;
        };
    };
    org.cometd.LongPollingTransport.prototype = new org.cometd.Transport();
    org.cometd.LongPollingTransport.prototype.constructor = org.cometd.LongPollingTransport;

    org.cometd.CallbackPollingTransport = function()
    {
        var _maxLength = 2000;

        this.accept = function(version, crossDomain)
        {
            return crossDomain;
        };

        this.jsonpSend = function(packet)
        {
            throw 'Abstract';
        };

        this.transportSend = function(envelope, request)
        {
            var self = this;

            // Microsoft Internet Explorer has a 2083 URL max length
            // We must ensure that we stay within that length
            var messages = org.cometd.JSON.toJSON(envelope.messages);
            // Encode the messages because all brackets, quotes, commas, colons, etc
            // present in the JSON will be URL encoded, taking many more characters
            var urlLength = envelope.url.length + encodeURI(messages).length;

            // Let's stay on the safe side and use 2000 instead of 2083
            // also because we did not count few characters among which
            // the parameter name 'message' and the parameter 'jsonp',
            // which sum up to about 50 chars
            if (urlLength > _maxLength)
            {
                var x = envelope.messages.length > 1 ?
                        'Too many bayeux messages in the same batch resulting in message too big ' +
                        '(' + urlLength + ' bytes, max is ' + _maxLength + ') for transport ' + this.getType() :
                        'Bayeux message too big (' + urlLength + ' bytes, max is ' + _maxLength + ') ' +
                        'for transport ' + this.getType();
                // Keep the semantic of calling response callbacks asynchronously after the request
                _setTimeout(function()
                {
                    self.transportFailure(envelope, request, 'error', x);
                }, 0);
            }
            else
            {
                try
                {
                    this.jsonpSend({
                        transport: this,
                        url: envelope.url,
                        headers: _requestHeaders,
                        body: messages,
                        onSuccess: function(response)
                        {
                            self.transportSuccess(envelope, request, response);
                        },
                        onError: function(reason, exception)
                        {
                            self.transportFailure(envelope, request, reason, exception);
                        }
                    });
                }
                catch (xx)
                {
                    // Keep the semantic of calling response callbacks asynchronously after the request
                    _setTimeout(function()
                    {
                        self.transportFailure(envelope, request, 'error', xx);
                    }, 0);
                }
            }
        };
    };
    org.cometd.CallbackPollingTransport.prototype = new org.cometd.Transport();
    org.cometd.CallbackPollingTransport.prototype.constructor = org.cometd.CallbackPollingTransport;
};
genesys = {};
genesys.cometd = new org.cometd.Cometd();

// This construction for avoid JSON compatibility problem
// with prototype 1.6.0.3 and early
if (typeof Array.prototype.toJSON === 'function') {
    var originStringify = JSON.stringify;

    JSON.stringify = function (value) {
        if (_utility.isArray(value)) {
            if (typeof value.toJSON === 'function')
                return value.toJSON();
        }
        else {
            return originStringify(value);
        }
    }
}

org.cometd.JSON.toJSON = JSON.stringify;
org.cometd.JSON.fromJSON = JSON.parse;

function _setHeaders(xmlhttp, headers) {
    if (headers) {
        for (var headerName in headers) {
            if (headers.hasOwnProperty(headerName)){
                if (headerName.toLowerCase() === 'content-type')
                    continue;

                xmlhttp.setRequestHeader(headerName, headers[headerName]);
            }
        }
    }
}

genesys.cometd.LongPollingTransport = function() {

    this.xhrSend = function(packet) {

        var xmlhttp;
        try {
            xmlhttp = new ActiveXObject('Msxml2.XMLHTTP');
        }
        catch (e) {
            try {
                xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch (E) {
                xmlhttp = false;
            }
        }

        try {
            if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
                xmlhttp = new XMLHttpRequest();
                /*
                    CORS is supported in the following browsers:
                    Chrome 3+
                    Firefox 3.5+
                    Opera 12+
                    Safari 4+
                    Internet Explorer 8+
                 */
                if ('withCredentials' in xmlhttp) {
                    // Check if the XMLHttpRequest object has a "withCredentials" property.
                    // "withCredentials" only exists on XMLHTTPRequest2 objects.
                    xmlhttp.open('POST', packet.url, packet.sync !== true);
                    if (genesys && genesys.cometd && genesys.cometd.withCredentials)
                        xmlhttp.withCredentials = true;

                } else if (typeof XDomainRequest != 'undefined') {
                    // Otherwise, check if XDomainRequest.
                    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
                    xmlhttp = new XDomainRequest();
                    xmlhttp.open('POST', packet.url);
                }
                else {
                    xmlhttp.open('POST', packet.url, packet.sync !== true);
                }
            }

            xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            _setHeaders(xmlhttp, packet.headers);
        }
        catch (ex) {
            packet.onError('Open connection error: ' + JSON.stringify(ex), 'error');
        }


        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState != 4) return;

            if (xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status === 304) {
                packet.onSuccess(xmlhttp.responseText);
            }
            else {
                if (xmlhttp.status === 0) {
                    packet.onError('Request was cancelled', 'error');
                }
                else {
                    if (!xmlhttp.statusText) {
                        packet.onError(xmlhttp.statusText, 'error');
                    }
                    else {
                        packet.onError('' + xmlhttp.status, 'error');
                    }
                }
            }
        };

        xmlhttp.send(packet.body);
    };
};

genesys.cometd.LongPollingTransport.prototype = new org.cometd.LongPollingTransport();
genesys.cometd.LongPollingTransport.prototype.constructor = genesys.cometd.LongPollingTransport;

genesys.cometd.CallbackPollingTransport = function() {

    this.jsonpSend = function(packet) {

        var head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
        var script = document.createElement('script');

        var callback = '__jsonp_' + (Math.random() * 10000000000000000000);
        window[callback] = function(response) {
            packet.onSuccess(response);
        };

        var url = packet.url + (/\?/.test(packet.url) ? '&' : '?') + 'jsonp=' + callback + '&message=' + encodeURIComponent(packet.body);
        script.src = url;

        script.onload = script.onreadystatechange = function() {
            if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                script.onload = script.onreadystatechange = null;

                if (head && script.parentNode) {
                    head.removeChild(script);
                }

                script = undefined;
            }
        };

        head.insertBefore(script, head.firstChild);
        return undefined;
    };
};

genesys.cometd.CallbackPollingTransport.prototype = new org.cometd.CallbackPollingTransport();
genesys.cometd.CallbackPollingTransport.prototype.constructor = genesys.cometd.CallbackPollingTransport;

genesys.cometd.registerTransport('long-polling', new genesys.cometd.LongPollingTransport());
genesys.cometd.registerTransport('callback-polling', new genesys.cometd.CallbackPollingTransport());





/**
 * Init jQuery dependent component WEDialog
 * @param {Object} jQuery jQuery.
 */
function initWedialog(jQuery) {

    //Drag and drop plugin
    (function ($) {
        $.fn.wedrag = function (obj) {
            var o = $.extend({
                handler: '.dialog-titlebar',
                start: function() {},
                stop: function() {}
            }, obj);

            return $(this).each(function() {
                var handler = $(this).find(o.handler);

                handler.mousedown(function(e) {
                    var parentDiv = $(handler).parent();
                    parentDiv.css('position', 'fixed');
                    $(document).unbind('mouseup');
                    o.start(parentDiv);
                    var f = parentDiv.offset(),
                            x = e.pageX - f.left,
                            y = e.pageY - f.top;

                    $(document).mousemove(function(a) {
                        parentDiv.css({'top': a.pageY - y + 'px', 'left': a.pageX - x + 'px'});
                    });

                    $(document).mouseup(function() {
                        $(document).unbind('mousemove');
                        o.stop(parentDiv);
                    });

                    return false;
                });
            });
        };
    })(jQuery);

    (function($) {

        var $that = null;
        var methods = {
            init: function(options) {

                // Create some defaults, extending them with any options that were provided
                var settings = $.extend({
                    title: 'Temp title',
                    message: 'Temp content',
                    'zIndex' : 4294967295,
                    fade: true,
                    alignment: {
                        horizontal: 'right',
                        vertical: 'bottom'
                    },
                    position: 'fixed',
                    buttons: []
                }, options);

                // Main object
                if ($that !== null){
                        $that.wedialog('close');
                }

                $that = $(this);
                var content = '';

                // Clean content
                $that.empty().
                    css({
                        'display': 'block',
                        'z-index': settings.zIndex,
                        'position': settings.position,
                        'float': 'left',
                        'width': '370px',
                        'height': '260px'
                    }).addClass('wedialog');

				content='<div class="dialog-titlebar">'+
							'<span class="webengage-tlogo"></span>'+
							'<span class="webengage-caption">Telstra 24x7 Chat</span>'+
							'<span title="close" class="webengage-close"></span>'+
						'</div>'+
						'<div class="dialog-content">'+
							'<div class="webengage-banner"></div>'+
						'</div>'+
						'<div class="dialog-buttonpane">'+
							'<div class="dialog-buttonset"></div>'+
						'</div>';

				if (settings.fade) {
                    $that.hide();
                    $that.append(content);
                } else
                    $that.append(content);

                // Add buttons
                $.each(settings.buttons, function(i, item) {
                    var $button = $(document.createElement('div'));
					$button.attr('class', item.ccsClass);
					$button.attr('title', item.text);

                    if ($.isFunction(item.click)){
                        $button.click(item.click);
                    }

                    $that.find('.dialog-buttonset').append($button);
                });

                $that.find('.webengage-close').click(function() {
                    $that.wedialog('close');
					_system.sendInviteResult(_settings.INVITE_RESULT.CANCEL);
                });

                //Alignment
                if (settings.alignment) {
                    var left, top;
                    switch (settings.alignment.horizontal) {
                        case 'left':
                            left = 30;
                            break;
                        case 'center':
                            left = getPageWidth() / 2 - $that.width() / 2;
                            break;
                        case 'right':
                            left = getPageWidth() - $that.width() - 30;
                            break;
                    }

                    switch (settings.alignment.vertical) {
                        case 'top':
                            top = 30;
                            break;
                        case 'center':
                            top = getPageHeight() / 2 - $that.height() / 2;
                            break;
                        case 'bottom':
                            top = getPageHeight() - $that.height() - 30;
                            break;
                    }

                    $that.wedialog('setPosition', {'top': top, 'left': left});
                }



                //Add draggable
                //$that.wedrag();
                
                if (settings.fade) {
                	$that.show();
                	$that.animate({"left": "+=" + $(window).width() + "px"}, 5000);
                	/*try {
                		if(ltVersion(jQuery.fn.jquery, '1.8')){
    						$that.show("slide", {direction:"down"}, 5000);
    					} else {
    						$that.fadeIn();
    					}
                	} catch(err){
                		$that.fadeIn();
                	} */
                }
            },
            setPosition: function(content) {
                // console.log('setPosition: ' + JSON.stringify(content));

                /*if (content.top && content.left) {
                    $that.css({
                        'top' : content.top,
                        'left' : content.left
                    });
                }*/
            	// hardcode positioning for now
            	if($(window).height() > 520) {
            		$that.css({
                        'bottom' : ($(window).height() / 2),
                        'left' : -420
                    });
            	} else {
            		$that.css({
                        'top' : 50,
                        'left' : -420
                    });
            	}
            },
            update: function(content) {
                // console.log('update method');
            },
            close: function() {

                if ($that) {
                    $that.empty();
                    $that.css({'display': 'none'});
    //                console.log('close dialog function');
                    $that = null;
                }
            }
        };
        
        function cmpVersion(a, b) {
			var i, cmp, len, re = /(\.0)+[^\.]*$/;
			a = (a + '').replace(re, '').split('.');
			b = (b + '').replace(re, '').split('.');
			len = Math.min(a.length, b.length);
			for( i = 0; i < len; i++ ) {
				cmp = parseInt(a[i], 10) - parseInt(b[i], 10);
				if( cmp !== 0 ) {
					return cmp;
				}
			}
			return a.length - b.length;
		}
		
		function gteVersion(a, b) {
			return cmpVersion(a, b) >= 0;
		}
		
		function ltVersion(a, b) {
			return cmpVersion(a, b) < 0;
		}

        // calculate the current window width
        function getPageWidth() {
            return window.innerWidth ? window.innerWidth :
                document.documentElement && document.documentElement.clientWidth ?
                document.documentElement.clientWidth : document.body ?
                document.body.clientWidth : null;
        }

        // calculate the current window height //
        function getPageHeight() {
            return window.innerHeight ? window.innerHeight :
                document.documentElement && document.documentElement.clientHeight ?
                document.documentElement.clientHeight : document.body ?
                document.body.clientHeight : null;
        }

        // calculate the current window vertical offset //
        function getTopPosition() {
            return window.pageYOffset ? window.pageYOffset :
                document.documentElement && document.documentElement.scrollTop ?
                document.documentElement.scrollTop : document.body.scrollTop ?
                document.body.scrollTop : 0;
        }

        // calculate the position starting at the left of the window //
        function getLeftPosition() {
            return window.pageXOffset ? window.pageXOffset :
                document.documentElement && document.documentElement.scrollLeft ?
                document.documentElement.scrollLeft : document.body.scrollLeft ?
                document.body.scrollLeft : 0;
        }

        $.fn.wedialog = function(method) {

            // Method calling logic
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || ! method) {
                return methods.init.apply(this, arguments);
            } else {
                $.error('Method ' + method + ' does not exist on jQuery.wedialog');
            }
        };
    })(jQuery);

}
var _tracker = this;

// Constants and internal variables
var _settings = {
    EVENT_SYSTEM: 'SYSTEM',
    EVENT_BUSINESS: 'BUSINESS',

    EVENT_USER_INFO: 'UserInfo',
    EVENT_SIGN_IN: 'SignIn',
    EVENT_SIGN_OUT: 'SignOut',
    EVENT_PAGE_ENTER: 'PageEntered',
    EVENT_PAGE_EXIT: 'PageExited',
    EVENT_VISIT_START: 'VisitStarted',
    EVENT_VISIT_END: 'VisitEnded',

    TRANSPORT_AJAX: 'ajax',
    TRANSPORT_IMG: 'img',

    COOKIE_GLOBAL_VISIT_ID: 'globalVisitId',
    COOKIE_VISIT_ID: 'visitId',
    COOKIE_SESSION_ID: 'sessionId',
    COOKIE_IS_USER_AUTHORIZED: 'isUserAuthorized',
    COOKIE_TRANSPORT: 'transport',
    COOKIE_ALIAS: 'serverAlias',

    STORAGE_DSL: 'com.genesyslab.wme.tracker.dsl',
    INTOOLS_NAMESPACE: 'com.genesyslab.wme.intools',
    GLOBAL_TRACKER_OBJECT: 'com.genesyslab.wme.tracker',

    urlFrontendServer: '',
    urlUserDataServer: '',
    urlInviteResultUrl: '',
    urlCometdURL: '',
    urlDslPath: '',
    urlTrackerServer: '',
    urljQuery: '',
    urlNotificationCss: '',

    isInviteDialogOpen: false,
    isTrackerReady: false,

    INVITE_RESULT: {
        ACCEPT_CHAT: 'acceptChat',
        ACCEPT_CALLBACK: 'acceptCallback',
        TIMEOUT: 'timeout',
        PAGE_EXIT: 'pageExit',
        CANCEL: 'cancel'
    },

    IXN_TYPE: {
        PROACTIVE_CHAT: 'proactiveChat',
        PROACTIVE_CALLBACK: 'proactiveCallback'
    }
};

// Variables coming  from outside
var _config = {
    // Required fields
    name: '',
    domainName: window.location.hostname,
    dslResource: '',
    secureDslResource: '',
    httpEndpoint: '',
    httpsEndpoint: '',

    // Optional fields
    transport: [],
    jQueryAutoDetect: true,
    // jQueryPath: 'ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js',
    jQueryPath: 'chat.telstra.com/frontend/resources/js/build/jquery.min.js',
    languageCode: 'en-US',
    mobile: false,
    debug: false,
    debugComet: false,
    useSecureUserDataSend: true,
    preventIframeMonitoring: false
};

function show(msg) {
    if (window.console) {
        console.log('GT ' + msg);
    }
}

function log(msg) {
    if (_config.debug) {
        show('LOG: ' + msg);
    }
}

function error(msg) {
    show('ERROR: ' + msg);
}



var isHasBeenInit = false;
/**
 * Main entry point for sync initialization
 * @param {object} options init options.
 */
function initSync(options) {
    isHasBeenInit = true;

    // Variables coming  from outside
    _utility.expend(_config, options);

    log('InitSync()');
    init();
}

function initAsync(options) {
    isHasBeenInit = true;

    for (var i = 0; i < options.length; i++)
        if (options && options[i] && options[i][0] && options[i][1])
            pushHandler(options[i]);

    log('initAsync(): ' + JSON.stringify(_config));
    init();
}

function init() {
    if (typeof genesysTrackerConfiguration != 'undefined')
        _utility.expend(_config, genesysTrackerConfiguration);

    log('start(): ' + JSON.stringify(_config));

    if (window.external && window.external.isGenesysTrackerDisable) {
        log('Monitoring Agent has been disable');
        return;
    }

    if(_config.preventIframeMonitoring && window.top != window){
        log('Prevent iFrame Monitoring: iFrame detected');
        return;
    }

    if ($ === undefined) {
        log('There is no jQuery on website');
        if (_config.jQueryAutoDetect) {
            _config.jQueryPath = document.location.protocol + '//' + _config.jQueryPath;
            log('Loading jQuery from resource: ' + _config.jQueryPath);
            _utility.loadJSCallback(_config.jQueryPath, function (){
                log('jQuery has been loaded');
                $ = window.jQuery.noConflict();

                onjQueryReady();
            });
        }
    }
    else
        onjQueryReady();
}

function pushHandler(item) {
    if (!item || !item[0])
        return;

    if (item[0] == 'config') {
        if (item[1]) {
            if (!isHasBeenInit)
                initSync(item[1]);
            else
                handlePushItemExpendConfig(item[1]);
        }
    }
     else
        _api.sendEventAsync(item);

}

/**
 * Get interface for public methods of monitoring agent
 * @return {Object} Object for monitoring agent functions.
 */
this.getInterface = function() {
    return {
        push: pushHandler,
        api: _api,
        isLoaded: true
    };
};

var _isDSLHasBeenLoaded = false;
var _isCategorizationHasBeenLoaded = false;
this.setDSL = function(dslString) {
    log('Tracker set DSL');
    _business.init(dslString);

    if (!_isDSLHasBeenLoaded) {
        _isDSLHasBeenLoaded = true;
        checkTrackerReadyEvent();
    }
};

this.setCategory = function(categoriesString) {
    log('Tracker set category');

    var categoriesXML = _utility.parseXML(categoriesString);
    _categorization.init(categoriesXML);
    _core.setVisitIds(categoriesXML);

    if (!_isCategorizationHasBeenLoaded) {
        _isCategorizationHasBeenLoaded = true;
        checkTrackerReadyEvent();
    }
};

this.notificationCallback = function(message) {
    log('Tracker notification callback');
    _notification.onMessageReceive(message);
};

function checkTrackerReadyEvent() {
    if (_isDSLHasBeenLoaded && _isCategorizationHasBeenLoaded)
        if (!_settings.isTrackerReady) {
            _core.onTrackerReady();
            _settings.isTrackerReady = true;
        }
}

function handlePushItemExpendConfig(item) {
    log('handlePushItemExpendConfig: ' + JSON.stringify(item));

    _utility.expend(_config, item);
}



function onjQueryReady() {
    log('On jQuery ready');

    _core.init();

    if (typeof initWedialog != 'undefined')
        initWedialog($);
}

var _core = new TrackerCore();
var _system = new TrackerSystem();
var _utility = new Utility();
var _persistence = new TrackerPersistence();
var _business = new TrackerBusiness();
var _categorization = new TrackerCategorization();
var _integration = new IntegrationAgent();

var _notification;
var _dialog;
if (typeof NotificationAgent != 'undefined') {
    _notification = new NotificationAgent();
    _dialog = new DialogAgent();
}

var _api = new TrackerAPI();

// If global variable has been defined we know that this is async method
// otherwise it's sync and init should be called straight a way
if (window._gt && !window._gt.isLoaded)
    initAsync(window._gt);


function TrackerCore() {

    function getFrontendServerPath(secure) {
        if (secure) {
            return _config.httpsEndpoint + '/frontend/';        }

        return _config.httpEndpoint + '/frontend/';
    }

    this.getUrlRegistrationPage = function (secure) {
        return getFrontendServerPath(secure) + 'resources/registration.html';
    }

    this.getUrlCallbackPage = function (secure){
        return getFrontendServerPath(secure) + 'resources/callback.html';
    }

    this.getUrlChatPage = function(secure){
        if (_config.mobile)
            return getFrontendServerPath(secure) + 'resources/chat_mobile.html';
        else
            return getFrontendServerPath(secure) + 'resources/chat.html';
    }

    function initSettings() {
        // If secure
        if ('https:' === document.location.protocol) {
            _settings.urlFrontendServer = getFrontendServerPath(true);
            _settings.dslResource = _config.secureDslResource;
        }
        else {
            _settings.urlFrontendServer = getFrontendServerPath(false);
            _settings.dslResource = _config.dslResource;
        }

        _settings.urlTrackerServer = _settings.urlFrontendServer + 'data/wm/event/';
        _settings.urlCometdURL = _settings.urlFrontendServer + 'cometd';
        _settings.urlNotificationCss = _settings.urlFrontendServer + 'resources/css/notification.css';

        _settings.urlInviteResultUrl = _settings.urlFrontendServer + 'invites';

        if (_config.useSecureUserDataSend)
            _settings.urlUserDataServer = _config.httpsEndpoint + '/frontend/data/wm/event/';
        else
            _settings.urlUserDataServer = _settings.urlTrackerServer;

        setTransportMethod();
    }

    function setTransportMethod() {
        if (_config.transport.length === 0)
            return;

        log('setTransportMethod: ' + JSON.stringify(_config.transport));
        for (var i = 0; i < _config.transport.length; i++) {
            var pair = _config.transport[i];
            var expr = new RegExp(pair.regex, 'gi');
            if (expr.test(navigator.userAgent)) {
                _persistence.setVar(_settings.COOKIE_TRANSPORT, pair.method);
                log('setTransportMethod transport = ' + pair.method);
                break;
            }
        }
    }

    function documentSubscribe() {
        window.onunload = function onPageExit() {
            _system.pageExit();
        };

        window.onbeforeunload = function onPageExit() {
            _system.pageExit();
        };
    }

    function loadCategories() {
        var url = _settings.urlFrontendServer + 'data/category/info';

        if (_persistence.getVar(_settings.COOKIE_GLOBAL_VISIT_ID)) {
            url += '/' + _persistence.getVar(_settings.COOKIE_GLOBAL_VISIT_ID);

            if (_persistence.getVar(_settings.COOKIE_VISIT_ID))
                url += '/' + _persistence.getVar(_settings.COOKIE_VISIT_ID);
        }

        url += '?obj=' + _settings.GLOBAL_TRACKER_OBJECT + '&callback=setCategory' + '&rid=' + _utility.getRandom();
        var alias = _persistence.getVar(_settings.COOKIE_ALIAS);
        if (alias)
            url += '&alias=' + alias;

        log('TrackerCore load categories: ' + url);
        _utility.loadJS(url);
    }

    function loadDSL() {
        if (window.localStorage && localStorage[_settings.STORAGE_DSL])
            //_business.init(localStorage[_settings.STORAGE_DSL]);
            _tracker.setDSL(localStorage[_settings.STORAGE_DSL]);
        else {
            var url = _settings.dslResource + '?obj=' + _settings.GLOBAL_TRACKER_OBJECT + '&callback=setDSL';
            log('TrackerCore load DSL from url: ' + url);
            _utility.loadJS(url);
        }
    }

    function saveVisitIds(globalVisitID, visitID) {
        if (globalVisitID) {
            log('Global Visit ID = ' + globalVisitID);
            _persistence.setVar(_settings.COOKIE_GLOBAL_VISIT_ID, globalVisitID, true);
        }

        if (visitID) {
            log('Visit ID = ' + visitID);
            _persistence.setVar(_settings.COOKIE_VISIT_ID, visitID, false);

            _system.VisitStart();
        }
    }

    function showInitParams() {
        log('INITIALIZATION PARAMETERS:');
        log('NODE ALIAS = ' + _persistence.getVar(_settings.COOKIE_ALIAS));
        log('GLOBAL VISIT ID = ' + _persistence.getVar(_settings.COOKIE_GLOBAL_VISIT_ID));
        log('VISIT ID = ' + _persistence.getVar(_settings.COOKIE_VISIT_ID));
        log('SESSION ID = ' + _persistence.getVar(_settings.COOKIE_SESSION_ID));
        log('PAGE ID = ' + _system.getPageID());
        log('TRANSPORT = ' + _persistence.getVar(_settings.COOKIE_TRANSPORT));
    }

    function checkConfigRequiredFields() {
        var result = true;

        if (!_config.name) {
            error('config "name" field is required');
            result = false;
        }

        if (!_config.domainName) {
            error('config "domainName" field is required');
            result = false;
        }

        if (!_config.dslResource) {
            error('config "dslResource" field is required');
            result = false;
        }

        if (!_config.secureDslResource) {
            error('config "secureDslResource" field is required');
            result = false;
        }

        if (!_config.httpEndpoint) {
            error('config "httpEndpoint" field is required');
            result = false;
        }

        if (!_config.httpsEndpoint) {
            error('config "httpsEndpoint" field is required');
            result = false;
        }

        return result;
    }

    function onTrackerReadyInit() {
        log('TrackerCore onTrackerReadyInit()');

        showInitParams();

        _integration.init();

        _system.pageEnter();

        if (_notification)
            _notification.init();

        if (_dialog)
            _dialog.init();

        _api.sendQueueEvents();

        log('COMETD TRANSPORT = ' + genesys.cometd.getTransport().getType());
    }

    this.init = function() {
        log('TrackerCore init()');
        // TODO before initialization need to check all required params

        if (!checkConfigRequiredFields())
            return;

        initSettings();
        documentSubscribe();
        loadCategories();
        loadDSL();
    };

    //  This function fired when tracker has been loaded and visits are ready
    this.onTrackerReady = function() {
        // In Opera script could be loaded before document.body ready
        if (document.body)
            onTrackerReadyInit();
        else {
            log('wait document ready');
            $(document).ready(function() {
                onTrackerReadyInit();
            });
        }

    };

    this.setVisitIds = function(xml) {
        var alias = $(xml).find('alias');
        if (alias)
            _persistence.setVar(_settings.COOKIE_ALIAS, alias.text(), false);

        var ids = $(xml).find('ids');
        if (ids.length === 0)
            return;

        saveVisitIds(ids.attr('globalVisitID'), ids.attr('visitID'));
    };

}// TrackerCore


function TrackerSystem() {
    var _pageID;

    function generateRequestUrl(event, isIncludeEventData) {
        var url = _settings.urlTrackerServer;

        if (event.globalVisitID)
            url += event.globalVisitID + '/';

        if (event.visitID)
            url += event.visitID;

        url += '?rid=' + _utility.getRandom() + '&alias=' + _persistence.getVar(_settings.COOKIE_ALIAS);

        if (isIncludeEventData)
            url += '&event=' + encodeURIComponent(JSON.stringify(event));

        return url;
    }

    function generateRequestUrlForUserData(event) {
        var url = _settings.urlUserDataServer;

        if (event.globalVisitID)
            url += event.globalVisitID + '/';

        if (event.visitID)
            url += event.visitID;

        url += '?rid=' + _utility.getRandom() + '&alias=' + _persistence.getVar(_settings.COOKIE_ALIAS);

        return url;
    }

    function checkTransport(url) {
        log('Send event checkTransport url: ' + url);

        try {
            $.ajax({
                type: 'GET',
                crossDomain: true,
                async: false,
                error: function(jqXHR, textStatus, errorThrown) {
                    if (jqXHR.status >= 200 && jqXHR.status < 300 ||
                         jqXHR.status === 304) {
                        _persistence.setVar(_settings.COOKIE_TRANSPORT, _settings.TRANSPORT_AJAX);
                    }
                    else {
                        _utility.sendUsingIMG(url);
                        _persistence.setVar(_settings.COOKIE_TRANSPORT, _settings.TRANSPORT_IMG);
                    }
                },
                success: function(data, textStatus, jqXHR) {
                    _persistence.setVar(_settings.COOKIE_TRANSPORT, _settings.TRANSPORT_AJAX);
                },
                url: url
            });
        } catch (ex) {
            _utility.sendUsingIMG(url);
            _persistence.setVar(_settings.COOKIE_TRANSPORT, _settings.TRANSPORT_IMG);
        }
    }

    function windowPostMessage(event) {
        try {
            if (window.postMessage)
                window.postMessage({ type: _settings.GLOBAL_TRACKER_OBJECT,
                                        cmd: 'sendEvent',
                                        event: event}, '*');
        }
        catch (ex) {
            log('System windowPostMessage: ' + ex);
        }
    }

    this.pageEnter = function() {

        var currentDate = new Date();
        var event = _system.createEvent(_settings.EVENT_SYSTEM, _settings.EVENT_PAGE_ENTER);
        event.data.urlReferrer = document.referrer;

        event.data.localTime = currentDate.toString();
        event.data.title = document.title;

        _system.sendEvent(event);
    };

    var _isPageExitSend = false;
    this.pageExit = function() {
        if (_isPageExitSend)
            return;

        if (_settings.isInviteDialogOpen)
            _system.sendInviteResult(_settings.INVITE_RESULT.PAGE_EXIT);

        _isPageExitSend = true;
        var event = _system.createEvent(_settings.EVENT_SYSTEM, _settings.EVENT_PAGE_EXIT);
        _system.sendEvent(event);
        _utility.sleep(600);
    };

    this.VisitStart = function() {
        var event = _system.createEvent(_settings.EVENT_SYSTEM, _settings.EVENT_VISIT_START);

        event.data.userAgent = window.navigator.userAgent;
        event.data.screenResolution = screen.width + 'x' + screen.height;
        event.data.browserLanguage = window.navigator.browserLanguage;
        event.data.systemLanguage = window.navigator.systemLanguage;
        event.data.cpuClass = window.navigator.cpuClass;
        event.data.timezoneOffset = (new Date()).getTimezoneOffset() * 60 * 1000;

        _system.sendEvent(event);
    };

    this.VisitEnd = function() {
        var event = _system.createEvent(_settings.EVENT_SYSTEM, _settings.EVENT_VISIT_END);
        _system.sendEvent(event);
    };

    this.getPageID = function() {
        if (!_pageID)
            _pageID = _utility.generateUUID();

        return _pageID;
    };

    this.createEvent = function(eventType, eventName) {
        /*  How session ID works:
            When SIGN_IN has been send on the server we adding sessionID
            param for each event, util SIGN_OUT or browsers has been closed (session cookie)
         */
        if (eventName == _settings.EVENT_SIGN_IN) {
            var sessionId = _persistence.getVar(_settings.COOKIE_SESSION_ID);

            if (sessionId)
                sessionId = parseInt(sessionId, 10) + 1;
            else
                sessionId = 1;

            _persistence.setVar(_settings.COOKIE_IS_USER_AUTHORIZED, true, false);
            _persistence.setVar(_settings.COOKIE_SESSION_ID, sessionId, false);
        }

        // Common arguments
        var now = new Date();
        var event = {
            eventType: eventType,
            eventName: eventName,
            eventID: _utility.generateUUID(),
            pageID: this.getPageID(),
            timestamp: now.getTime(),
            category: '',
            url: document.URL
        };

        if (_persistence.getVar(_settings.COOKIE_GLOBAL_VISIT_ID))
            event.globalVisitID = _persistence.getVar(_settings.COOKIE_GLOBAL_VISIT_ID);

        if (_persistence.getVar(_settings.COOKIE_VISIT_ID))
            event.visitID = _persistence.getVar(_settings.COOKIE_VISIT_ID);

        if (_persistence.getVar(_settings.COOKIE_IS_USER_AUTHORIZED) == 'true' &&
            _persistence.getVar(_settings.COOKIE_SESSION_ID))
            event.sessionID = _persistence.getVar(_settings.COOKIE_SESSION_ID);

        // Cleaning cookie happen here because SIGN_OUT event should have sessionID
        if (eventName == _settings.EVENT_SIGN_OUT) {
            _persistence.setVar(_settings.COOKIE_IS_USER_AUTHORIZED, false);
        }

        event.data = {};
        return event;
    };

    this.sendEvent = function(event) {
        log('Send event: ' + event.eventName);

        _categorization.categorize(event);

        var transport = _persistence.getVar(_settings.COOKIE_TRANSPORT);

        log('Send event: transport = ' + transport);
        log('Send event: ' + JSON.stringify(event));

        var url = generateRequestUrl(event, true);
        log('Send event url: ' + url);

        if (event.eventName == _settings.EVENT_SIGN_IN ||
             event.eventName == _settings.EVENT_SIGN_OUT ||
             event.eventName == _settings.EVENT_USER_INFO) {

            url = generateRequestUrlForUserData(event);
            log('Send event url: ' + url);
            _utility.sendEventPost(event, url);
        } else if ('ajax' == transport) {
            _utility.sendUsingAjax(url);
        } else if ('img' == transport) {
            _utility.sendUsingIMG(url);
        } else {
            checkTransport(url);
        }

        windowPostMessage(event);
    };

    this.sendInviteResult = function(code) {
        log('Send invite result: ' + code);

        var url = _settings.urlInviteResultUrl;

        url += '?result=' + code;
        url += '&pageId=' + _system.getPageID();
        url += '&visitId=' + _persistence.getVar(_settings.COOKIE_VISIT_ID);
        url += '&alias=' + _persistence.getVar(_settings.COOKIE_ALIAS);

        _utility.sendUsingIMG(url);
    };

}// TrackerSystem


function Utility() {

    function getBrowserInfo() {
        var tem;
        var nav = navigator.appName;
        var ua = navigator.userAgent;

        var m = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (m && (tem = ua.match(/version\/([\.\d]+)/i)))
            m[2] = tem[1];

        return m ? {'name' : m[1],
                    'family' : parseInt(m[2].substring(0, m[2].indexOf('.')), 10),
                    'version' : m[2]} : {'name' : nav, 'family' : '?', 'version' : navigator.appVersion};
    }

    this.getRandom = function() {
        return Math.random() * 100000000000000000;
    };

    /**
     * Sleep function
     * @param {int} time - time in milliseconds.
     */
    this.sleep = function(time) {
        var date = new Date();
        var currentDate = new Date();
        while (currentDate - date < time) {
            currentDate = new Date();
        }
    };

    this.generateUUID = function() {
        //http://www.ietf.org/rfc/rfc4122.txt
        var s = [];
        var hexDigits = '0123456789ABCDEF';
        for (var i = 0; i < 32; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[12] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
        s[16] = hexDigits.substr((s[16] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        return s.join('');
    };

    this.parseXML = function(data) {
        var xml, tmp;
        if (!data || typeof data !== 'string') {
            return null;
        }
        try {
            if (window.DOMParser) { // Standard
                tmp = new DOMParser();
                xml = tmp.parseFromString(data, 'text/xml');
            } else { // IE
                xml = new ActiveXObject('Microsoft.XMLDOM');
                xml.async = 'false';
                xml.loadXML(data);
            }
        } catch (e) {
            xml = undefined;
        }
        if (!xml || !xml.documentElement || xml.getElementsByTagName('parsererror').length) {
            log('Invalid XML: ' + data);
        }
        return xml;
    };

    this.sendEventPost = function(event, url) {
        var iframe;
        var frameName = '__frameSend__' + this.getRandom();

        var browser = getBrowserInfo();
        if (browser.name.toLowerCase() == 'msie' && browser.family < 9) {
            iframe = document.createElement('<iframe name="' + frameName + '"/>');
        } else {
            iframe = document.createElement('iframe');
            iframe.setAttribute('name', frameName);
        }

        iframe.style.display = 'none';

        var form = document.createElement('form');
        form.setAttribute('method', 'POST');
        form.setAttribute('target', frameName);
        form.setAttribute('action', url);
        form.setAttribute('accept-charset', 'utf-8');

        var hiddenField = document.createElement('input');
        hiddenField.setAttribute('type', 'hidden');
        hiddenField.setAttribute('name', 'event');
        hiddenField.setAttribute('value', JSON.stringify(event));
        form.appendChild(hiddenField);

        var submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('onClick', 'this.form.submit()');
        submit.style.display = 'none';
        form.appendChild(submit);

        document.body.appendChild(form);
        document.body.appendChild(iframe);
        submit.click();
    };

    this.sendUsingAjax = function(url) {
        $.ajax({
            type: 'GET',
            crossDomain: true,
            async: false,
            url: url
        });
    };

    // used for JSONP requests
    this.loadJS = function(url) { // TODO old implementation
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.async = false;

        script.onload = function() {
            script.onload = null;
        };

        var heads = document.getElementsByTagName('head');

        if (heads.length > 0)
            heads[0].appendChild(script);
        else
            document.body.appendChild(script);
    };

    this.loadJSCallback = function(url, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;

        if (script.readyState) { //IE
            script.onreadystatechange = function() {
                if (script.readyState == 'loaded' || script.readyState == 'complete') {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function() {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    };

    this.loadCSS = function(url) {
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;

        var heads = document.getElementsByTagName('head');

        if (heads.length > 0)
            heads[0].appendChild(link);
        else
            document.body.appendChild(link);
    };



    this.sendUsingIMG = function(url) {
        var h = new Image();
        h.src = url;
        h.style.display = "none";
        h.onload = function() {
            h.onload = null;
        };

        try {
            document.body.appendChild(h);
        }
        catch (ex) {
            error('Error sendUsingIMG: ' + JSON.stringify(ex));
        }
    };

    /**
     * Expend function could be apply only for simple objects
     * If possible better to use $.expend()
     * @param {Object} destination description.
     * @param {Object} source source.
     * @return {Object} result.
     */
    this.expend = function(destination, source) {
        for (var property in source) {
            if (source.hasOwnProperty(property)){
                destination[property] = source[property];
            }
        }
        return destination;
    };

    /**
     * Get var from url
     * @param {String} name variable name.
     * @return {String} variable value or undefined.
     */
    this.getUrlVars = function(name) {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }

        return vars[name];
    };

    this.getBrowserInfo = function() {
        var tem;
        var nav = navigator.appName;
        var ua = navigator.userAgent;

        var m = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (m && (tem = ua.match(/version\/([\.\d]+)/i)))
            m[2] = tem[1];

        return m ? {'name' : m[1],
            'family' : parseInt(m[2].substring(0, m[2].indexOf('.')), 10),
            'version' : m[2]} : {'name' : nav, 'family' : '?', 'version' : navigator.appVersion};
    };


    this.bind = function(selector, eventType, handler, eventData){
        if($.prototype.on){
            /* for jQuery 1.7.0 ->  */
            $(document).on(eventType, selector, eventData, handler);
        }
        else if($.prototype.delegate){
            /* for jQuery 1.4.2 -> 1.7.0*/
            $(document).delegate(selector, eventType, eventData, handler);
        }
        else if($.prototype.bind){
            /* for jQuery 1.0.0 -> 1.4.2*/
            $(selector).bind(eventType, eventData, handler);
        }
    }

    this.isArray = function(value){
        return Object.prototype.toString.apply(value) === '[object Array]';
    }

    this.isSecure = function(url){
        if(url && url.toLowerCase().indexOf('https') === 0 )
            return true;

        return false;
    }
}// Utility


function TrackerPersistence() {

    // private collection
    var _collection = {};

    function getRealVariableName(varName) {
        return _settings.GLOBAL_TRACKER_OBJECT + '.' + varName;
    }

    /**
     * Return value by key
     * @param {string} varName variable name.
     * @return {string} undefined if key not defined or result.
     */
    this.getVar = function(varName) {

        var realVarName = getRealVariableName(varName);

        var result;
        if (navigator.cookieEnabled)
            result = Cookies.get(realVarName);

        if (!result && !_collection[realVarName])
            result = _collection[realVarName];

        return result;
    };

    this.setVar = function(varName, value, isPersistence) {

        var realVarName = getRealVariableName(varName);

        if (navigator.cookieEnabled) {
            if (isPersistence)
                Cookies.set(realVarName, value, { expires: 3 * 365 * 24 * 60 * 60, domain: _config.domainName });
            else
                Cookies.set(realVarName, value, { domain: _config.domainName });
        }

        _collection[realVarName] = value;

        return value;
    };

    this.removeVar = function(varName) {
        var realVarName = + getRealVariableName(varName);

        if (navigator.cookieEnabled)
            Cookies.expire(varName);

        delete _collection[realVarName];
    };

}// TrackerPersistence


function TrackerBusiness() {
    // List of events
    var _events = {};
    var _dslString;
    var _isDebug = false;

    function setEvents(xml) {
        $(xml).find('event').each(function() {
            var event = {};
            event.id = $(this).attr('id');
            event.name = $(this).attr('name');
            event.condition = $(this).attr('condition');
            event.triggers = {};

            event.params = [];
            var paramXML = $(this).find('val');
            for (var i = 0; i < paramXML.length; i++) {
                var $currentItem = $(paramXML[i]);
                var temp = {
                    name: $currentItem.attr('name'),
                    value: $currentItem.attr('value')
                };

                event.params.push(temp);
            }

            $(this).find('trigger').each(function() {
                var $this = $(this);
                var trigger = {
                    element: $this.attr('element'),
                    action: $this.attr('action'),
                    url: $this.attr('url'),
                    name: $this.attr('name'),
                    count: $this.attr('count'),
                    counter: 0, // counter every time initially set in 0
                    persistence: $this.attr('persistence'),
                    type: $this.attr('type')
                };


                if (trigger.persistence == 'true' && _persistence.getVar(event.id + '_' + trigger.name))
                    trigger.counter = parseInt(_persistence.getVar(event.id + '_' + trigger.name), 10);

                if (!trigger.count)
                    trigger.count = 1;

                trigger.params = [];
                // Loading triggers parameters
                var paramXML = $this.find('val');
                for (var i = 0; i < paramXML.length; i++) {
                    var $currentItem = $(paramXML[i]);
                    var temp = {
                        name: $currentItem.attr('name'),
                        value: $currentItem.attr('value')
                    };

                    // Loading global trigger parameter from cookie
                    var cookieName = event.id + '_' + trigger.name + '_' + temp.name;
                    if (trigger.persistence == 'true' && _persistence.getVar(cookieName))
                        temp.result = _persistence.getVar(cookieName);

                    trigger.params.push(temp);
                }

                if (document.URL.toLowerCase().match(trigger.url.toLowerCase())) {
                    // Add trigger to the event
                    event.triggers[trigger.name] = trigger;

                    // Handling "timer" event
                    if (trigger.action.indexOf('timer') != -1)
                        createTimerEvent(trigger.action, trigger.type, event.id, trigger.name);
                    else {
                        if (trigger.action.indexOf('enterpress') != -1) {
                            createOnPressEnterEvent(trigger, event.id);
                        }
                        else {
                            // Adding event listner for the element
                            var eventHandler = function(event) {
                                //alert(trigger.element + ": " + trigger.action);
                                var eventId = event.data.ev[0];
                                var triggerName = event.data.ev[1];
                                triggerHandler(eventId, triggerName, event);
                            };

                            _utility.bind(trigger.element,
                                trigger.action,
                                eventHandler,
                                {ev: [event.id, trigger.name]});
                        }
                    }
                }
            });

            if (event.id)
                _events[event.id] = event;
        });
    }

    function createOnPressEnterEvent(trigger, en) {
        var keyPressEventHandler = function(event) {
                var code = (event.keyCode ? event.keyCode : event.which);
                if (code == 10 || code == 13) {
                    var eventId = event.data.ev[0];
                    var triggerName = event.data.ev[1];
                    triggerHandler(eventId, triggerName, event);
            }
        };

        _utility.bind(trigger.element,
            'keypress',
            keyPressEventHandler,
            {ev: [en, trigger.name]});
    }

    function createTimerEvent(action, type, eventId, triggerName) {
        var temp = action.split(':');
        var time = temp[1];
        var timeout;

        if (type == 'timeout')
            timeout = setTimeout(function() {
                triggerHandler(eventId, triggerName, null);
            }, time);
        else if (type == 'nomove') {
            // To start from begining
            timeout = setTimeout(function() {
                triggerHandler(eventId, triggerName, null);
            }, time);
            document.onmousemove = function() {
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    triggerHandler(eventId, triggerName, null);
                    document.onmousemove = null;
                }, time);
            };
        }
    }

    /**
     * Handling events/triggers
     * @param {string} eventId event Id.
     * @param {string} triggerName trigger name.
     */
    function triggerHandler(eventId, triggerName) {
        log('Trigger: ' + triggerName);
        var currentTrigger = _events[eventId].triggers[triggerName];
        currentTrigger.counter++;
        // Handling parameters
        for (var i = 0; i < currentTrigger.params.length; i++) {
            // Handling expressions
            if (currentTrigger.params[i].value) {
                currentTrigger.params[i].result = eval(currentTrigger.params[i].value);
                var cookieName = eventId + '_' + currentTrigger.name + '_' + currentTrigger.params[i].name;
                _persistence.setVar(cookieName, currentTrigger.params[i].result, false);
            }
        }// close for
        if (_events[eventId].triggers[triggerName].persistence == 'true')
            _persistence.setVar(eventId + '_' + triggerName, _events[eventId].triggers[triggerName].counter, false);
        if (isBusinessEvent(eventId)) {
            cleanEvent(eventId);
            businessEventHandler(eventId);
        }
    }

    /**
     * Return true if all triggers are handled and condition is true
     * @param {string} eventId event id.
     * @return {Boolean} flag is business event.
     */
    function isBusinessEvent(eventId)	{
        var condition = _events[eventId].condition;

        if (condition)
            if (!eval(condition))
                return false;

        for (var i in _events[eventId].triggers)
            if (_events[eventId].triggers[i].count > _events[eventId].triggers[i].counter)
                return false;

        return true;
    }

    /**
     * Set counter to nil for each event  (after this business event could be repeated on the page)
     * @param {string} eventId event id.
     */
    function cleanEvent(eventId) {
        for (var i = 0; i < _events[eventId].triggers.length; i++) {
            _events[eventId].triggers[i].counter = 0;
            _persistence.removeVar(eventId + '_' + _events[eventId].triggers[i].name);
        }

        // Clear Triggers Params
        for (i = 0; i < _events[eventId].triggers.length; i++) {
            if (_events[eventId].triggers[i].params)
                for (var j = 0; j < _events[eventId].triggers[i].params.length; j++) {
                    var cookieName = eventId + '_' +
                                    _events[eventId].triggers[i].name + '_' +
                                    _events[eventId].triggers[i].params[j].name;
                    _persistence.removeVar(cookieName);
                }
        }
    }

    function businessEventHandler(eventId) {
        var resultEvent = _system.createEvent(_settings.EVENT_BUSINESS, _events[eventId].name);
        // Add Business event attributes
        for (var i = 0; i < _events[eventId].params.length; i++) {
            // Handling expressions
            if (_events[eventId].params[i].value) {
                var expressionValue = _events[eventId].params[i].value;
                resultEvent.data[_events[eventId].params[i].name] = eval(expressionValue);
            }
        }// close for
        // Add Triggers Params
        for (i = 0; _events[eventId].triggers.length; i++) {
            if (_events[eventId].triggers[i].params)
                for (var j = 0; j < _events[eventId].triggers[i].params.length; j++) {
                    resultEvent.data[_events[eventId].triggers[i].params[j].name] =
                        _events[eventId].triggers[i].params[j].result;
                }
        }

        _system.sendEvent(resultEvent);
    }

    this.init = function(dslString) {
        _dslString = dslString;
        _events = {};

        var xml = _utility.parseXML(dslString);
        _isDebug = $(xml).filter('properties').attr('debug') == 'true';
        setEvents(xml);

        if (Object.keys)
            log('TrackerBusiness has been started: business events count = ' + Object.keys(_events).length);
        else
            log('TrackerBusiness has been started');
    };

    this.getDSL = function() {
        return _dslString;
    };

}// TrackerBusiness

function TrackerCategorization() {
    var _categories = [];
    var _exclude_fields = [];

    function checkRegExObject(obj, regexp) {
        var result = false;
        for (var fieldName in obj) {
            if (obj.hasOwnProperty(fieldName)){

                var excl = !_exclude_fields ? -1 : _exclude_fields.indexOf(fieldName);
                if (typeof obj[fieldName] === 'string' && excl < 0 && regexp.test(obj[fieldName]))
                    return true;
                else {
                    if (typeof obj === 'object')
                        result = checkRegExObject(obj[fieldName], regexp);
                }

            }
        }
        return result;
    }

    function checkSubstringObject(obj, expr, caseSens) {
        var result = false;
        var subs = caseSens ? expr : expr.toLowerCase();
        for (var fieldName in obj) {
            if (obj.hasOwnProperty(fieldName)) {
                var excl = !_exclude_fields ? -1 : _exclude_fields.indexOf(fieldName);
                if (typeof obj[fieldName] === 'string') {
                    var str = caseSens ? obj[fieldName] : obj[fieldName].toLowerCase();
                    if (excl < 0 && str.indexOf(subs) >= 0)
                        return true;
                }
                else {
                    if (typeof obj === 'object') {
                        result = checkSubstringObject(obj[fieldName], expr, caseSens);
                    }
                }
            }
        }
        return result;
    }

    function setCategories(xml) {
        $(xml).find('categories').find('category').each(function() {
            var category = {};
            category.name = $(this).attr('name');
            category.tags = [];

            $(this).find('tag').each(function() {
                if (_config.languageCode == $(this).attr('locale')) {
                    var tag = {};
                    tag.expr = $(this).attr('expr');
                    tag.type = $(this).attr('type');
                    tag['case-sensitive'] = $(this).attr('case-sensitive');
                    category.tags.push(tag);
                }
            });
            _categories.push(category);
        });
        $(xml).find('exclude').find('field').each(function() {
            _exclude_fields.push($(this).attr('name'));
        });
    }

    this.init = function(xml) {
        // Clear current categorization
        _categories = [];
        setCategories(xml);
        log('TrackerCategorization has been started: categories count = ' + _categories.length);
    };

    this.categorize = function(event) {
        var result = '';

        var delim = '';
        for (var i = 0; i < _categories.length; i++) {
            for (var j = 0; j < _categories[i].tags.length; j++) {
                var flags = '';
                var caseSens = _categories[i].tags[j]['case-sensitive'].toLowerCase() == "true";
                if (!caseSens)
                    flags += 'i';

                var res;
                var expr;
                if (_categories[i].tags[j].type.toLowerCase() == 'regex') {
                    expr = new RegExp(_categories[i].tags[j].expr, flags);
                    res = checkRegExObject(event, expr);
                }
                else {
                    expr = _categories[i].tags[j].expr;
                    res = checkSubstringObject(event, expr, caseSens);
                }
                if (res) {
                    result += (delim + _categories[i].name);
                    delim = ',';
                    break;
                }
            }
        }

        event.category = result;
        return event;
    };

}// TrackerCategorization

function IntegrationAgent() {

    function getDSL() {
        log(_settings.INTOOLS_NAMESPACE + ' - getDsl');

        var dslString = _business.getDSL();

        try {
            if (window.postMessage)
                window.postMessage({ type: _settings.GLOBAL_TRACKER_OBJECT,
                    cmd: 'getDslResult',
                    dsl: dslString}, '*');
        }
        catch (ex) {
            log('IntegrationAgent getDSL: ' + ex);
        }
    }

    function setDSL(event) {
        log(_settings.INTOOLS_NAMESPACE + ' - setDsl: ' + event.data.dsl);

        if (window.localStorage) {
            if(!event.data.dsl || event.data.dsl == 'undefined')
                localStorage.removeItem(_settings.STORAGE_DSL);
            else
                localStorage[_settings.STORAGE_DSL] = event.data.dsl;

            window.location.reload();
        }
    }

    function windowSubscribe() {

        if (window.addEventListener) {
            window.addEventListener('message', function(event) {
                if (!event.data || !event.data.type)
                    return;

                if (event.data.type == _settings.INTOOLS_NAMESPACE && event.data.cmd) {
                    switch (event.data.cmd) {
                        case 'setDsl':
                            setDSL(event);
                            break;
                        case 'getDsl':
                            getDSL();
                            break;
                    }
                }

            }, false);
        }
    }

    this.init = function() {
        log('Integration Agent started');

        windowSubscribe();
    };
} // TrackerIntegration


function TrackerAPI() {

    var _eventsQueue = [];

    function sendEventItemAsync(item) {

        if (!item || !item[0])
            return;

        switch (item[0]) {

            case 'sendSignIn':
                if (item[1])
                    _api.sendSignIn(item[1].userID, item[1]);

                break;

            case 'sendSignOut':
                if (item[1])
                    _api.sendSignOut(item[1].userID, item[1]);
                else
                    _api.sendSignOut();

                break;

            case 'sendUserInfo':
                if (item[1])
                    _api.sendUserInfo(item[1].userID, item[1]);

                break;

            case 'event':
                if (item[1] && item[1].eventName) {
                    var eventName = item[1].eventName;
                    var data = item[1];
                    delete data.eventName;
                    _api.sendEvent(eventName, data);
                }

                break;

            default:
                error('Can not identify command: ' + item[0]);
        }
    }

    this.sendEventAsync = function(item) {

        if (_settings.isTrackerReady)
            sendEventItemAsync(item);
        else {
            _eventsQueue.push(item);
            log('API add event to queue: ' + item[0] + ' queue size = ' + _eventsQueue.length);
        }
    };


    this.sendQueueEvents = function() {
        log('API send events from queue: ' + _eventsQueue.length);

        for (var i = 0; i < _eventsQueue.length; i++) {
            sendEventItemAsync(_eventsQueue[i]);
        }

        _eventsQueue = [];
    };

    this.sendSignIn = function(userId, params) {
        if (!userId) {
            error('event sendSignIn field "userID" is required');
            return;
        }

        log('API sendSignIn: userId = ' + userId + ' params = ' + JSON.stringify(params));

        var event = _system.createEvent(_settings.EVENT_SYSTEM, _settings.EVENT_SIGN_IN);

        if (params)
            event.data = params;

        event.data.userID = userId;
        _system.sendEvent(event);
    };

    this.sendSignOut = function(userId, params) {
        log('API sendSignOut: userId = ' + userId + ' params = ' + JSON.stringify(params));

        var event = _system.createEvent(_settings.EVENT_SYSTEM, _settings.EVENT_SIGN_OUT);

        if (params)
            event.data = params;

        if (userId)
            event.data.userID = userId;

        _system.sendEvent(event);
    };

    this.sendUserInfo = function(userId, params) {
        if (!userId) {
            error('event sendUserInfo field "userID" is required');
            return;
        }

        log('API sendUserInfo: userId = ' + userId + ' params = ' + JSON.stringify(params));

        var event = _system.createEvent(_settings.EVENT_SYSTEM, _settings.EVENT_USER_INFO);

        if (params)
            event.data = params;

        event.data.userID = userId;
        _system.sendEvent(event);
    };

    this.sendEvent = function(name, data) {
        if (!name) {
            error('sendEvent event field "name" is required');
            return;
        }

        log('API sendEvent: name = ' + name + ' data = ' + JSON.stringify(data));

        var event = _system.createEvent(_settings.EVENT_BUSINESS, name);
        event.data = data;

        _system.sendEvent(event);
    };
}// TrackerAPI

function NotificationAgent() {

    var _cometd = genesys.cometd;
    var _connected = false;

    var _disconnecting;
    var _notificationSubscription;

    function metaHandshake(message) {
        if (message.successful) {
            connectionInitialized();
        }
    }

    function metaConnect(message) {
        if (_disconnecting) {
            _connected = false;
            connectionClosed();
        }
        else {
            var wasConnected = _connected;
            _connected = message.successful === true;
            if (!wasConnected && _connected) {
                connectionEstablished();
            }
            else if (wasConnected && !_connected) {
                connectionBroken();
            }
        }
    }

    function connectionClosed() {
        log('NotificationAgent Connection to Server Closed');
    }

    function connectionEstablished() {
        log('NotificationAgent Connection to Server Established');
    }

    function connectionBroken() {
        log('NotificationAgent Connection to Server Broken');
    }

    function subscribe() {
        var notificationUrl = '/notification/' + _persistence.getVar(_settings.COOKIE_VISIT_ID);
        log('Notification Agent subscribe to url: ' + notificationUrl);

        _notificationSubscription = _cometd.subscribe(notificationUrl,
            _tracker.notificationCallback);
    }

    function connectionInitialized() {
        // first time connection for this client, so subscribe tell everybody.
        subscribe();
    }

    this.onMessageReceive = function(message) {
        if (_system.getPageID() != message.data.pageId) {
            log('Page ID not correct - current Page ID = ' + _system.getPageID());
            return;
        }

        _dialog.displayInvite(message.data);
    };


    this.init = function() {
        log('Notification Agent start');

        var logLevel = 'info';

        if (_config.debugComet)
            logLevel = 'debug';

        _cometd.configure({ url: _settings.urlCometdURL +
                                 '?alias=' + _persistence.getVar(_settings.COOKIE_ALIAS) + '&split=1',
                            logLevel: logLevel});
        _cometd.withCredentials = false;

        _cometd.addListener('/meta/handshake', metaHandshake);
        _cometd.addListener('/meta/connect', metaConnect);

        _cometd.handshake();

        $(window).unload(function() {
            _cometd.disconnect();
        });
    };

}// NotificationAgent
backendProxyUrl = 'https://chats.telstra.com/backend'

function DialogAgent() {
    var _childWindow;

    function createInvite(data) {

        var dialogHtml = '<div id="dialog-confirm"><p>' +
                         '<span></span>' + data.message + '</p></div>';

        $('body').append(dialogHtml);

        var buttonTitle;
        if (data.ixnType == _settings.IXN_TYPE.PROACTIVE_CHAT)
            buttonTitle = 'Chat';
        else
            buttonTitle = 'Call Me';

        $('#dialog-confirm').wedialog({
            title: data.subject,
            message: data.message,
            alignment: _config.inviteWidget.alignment,
            position: _config.inviteWidget.position,
            buttons: [
                {
                    text: buttonTitle,
                    ccsClass: 'webengage-accept',
                    click: function() {
                        log('Dialog has been clicked: ' + buttonTitle);
                        closeInviteDialogWindow();

                        if (data.ixnType == _settings.IXN_TYPE.PROACTIVE_CHAT) {
                            if (data.needRegistration)
                                displayRegistrationWindow(data);
                            else
                                displayChatWindow(data);

                            _system.sendInviteResult(_settings.INVITE_RESULT.ACCEPT_CHAT);
                        }
                        else if (data.ixnType == _settings.IXN_TYPE.PROACTIVE_CALLBACK) {
                            displayCallbackWindow(data);
                            _system.sendInviteResult(_settings.INVITE_RESULT.ACCEPT_CALLBACK);
                        }

                    }
                }/*,
                {
                    text: 'No Thanks',
                    click: function() {
                        log('Dialog has been clicked: No Thanks');
                        closeInviteDialogWindow();
                        _system.sendInviteResult(_settings.INVITE_RESULT.CANCEL);
                    }
                }*/
            ]
        });

        _utility.loadCSS(_settings.urlNotificationCss);
    }

    function displayRegistrationWindow(data) {
        var secure = _utility.isSecure(backendProxyUrl);
        var registrationPage = _core.getUrlRegistrationPage(secure);

        _childWindow = window.open(registrationPage +
            '?visit_id=' + encodeURIComponent(_persistence.getVar(_settings.COOKIE_VISIT_ID)) +
            '&pageID=' + encodeURIComponent(_system.getPageID()) +
            '&backendUrl=' + encodeURIComponent(backendProxyUrl) +
            '&locale=' + encodeURIComponent(_config.languageCode),
            'Registration',
            'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no' +
            ',width=' + _config.engagementPage.pageWidth + ',height=' + _config.engagementPage.pageHeight +
            ',top=' + _config.engagementPage.pageTop + ',left=' + _config.engagementPage.pageLeft
        );

        _childWindow.focus();
    }

    function displayCallbackWindow(data) {
        var secure = _utility.isSecure(backendProxyUrl);
        var callbackPage = _core.getUrlCallbackPage(secure);

        _childWindow = window.open(callbackPage +
            '?visitID=' + encodeURIComponent(_persistence.getVar(_settings.COOKIE_VISIT_ID)) +
            '&backendUrl=' + encodeURIComponent(backendProxyUrl) +
            '&pageID=' + encodeURIComponent(_system.getPageID()) +
            '&locale=' + encodeURIComponent(_config.languageCode),
            'hello',
            'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no' +
            ',width=' + _config.engagementPage.pageWidth + ',height=' + _config.engagementPage.pageHeight +
            ',top=' + _config.engagementPage.pageTop + ',left=' + _config.engagementPage.pageLeft
        );

        _childWindow.focus();
    }

    function displayChatWindow(data) { // TODO fix passing params
        var secure = _utility.isSecure(backendProxyUrl);
        var chatPage = _core.getUrlChatPage(secure);

        _childWindow = window.open(chatPage +
            '?visit_id=' + encodeURIComponent(_persistence.getVar(_settings.COOKIE_VISIT_ID)) +
            '&backendUrl=' + encodeURIComponent(backendProxyUrl) +
            '&alias=' + _persistence.getVar(_settings.COOKIE_ALIAS) +
            '&name=' + encodeURIComponent(data.firstName) +
            '&lastName=' + encodeURIComponent(data.lastName) +
            '&email=' + encodeURIComponent(data.email) +
            '&locale=' + encodeURIComponent(_config.languageCode) +
            '&pageID=' + encodeURIComponent(_system.getPageID()) +
            '&regFormWasShowed=' + data.regFormWasShowed, // TODO why we passing this param?
            'Chat',
            'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no' +
            ',width=' + _config.engagementPage.pageWidth + ',height=' + _config.engagementPage.pageHeight +
            ',top=' + _config.engagementPage.pageTop + ',left=' + _config.engagementPage.pageLeft
        );

        _childWindow.focus();

        if (_config.mobile)
            displayBackToChatDialog();
    }

    function displayBackToChatDialog() {  // TODO   dialog have to be change to wedialog
        var dialogHtml = '<div id="dialog-backtochat" title="Genesys Chat"><p>' +
                         '<span></span>Please use buttons below to get back to chat session.</p></div>';

        $('body').append(dialogHtml);

        $('#dialog-backtochat').dialog({
            resizable: false,
            modal: false,
            position: ['right', 'bottom'],
            buttons: {
                'Back To Chat': function() {
                    if (_childWindow)
                        _childWindow.focus();
                },
                'Close Chat': function() {
                    if (_childWindow)
                        _childWindow.close();

                    $(this).wedialog('close');
                }
            }
        });

        //Check Chat Window if it closed
        checkChatWindow();
    }

    function checkChatWindow() {
        if (!_childWindow || chatWindow.closed === true) {
            var $dialog = $('#dialog-backtochat');
            $dialog.wedialog('close');
            $dialog.remove();
        }
        else {
            setTimeout(checkChatWindow(), 500);
        }
    }

    function closeInviteDialogWindowTimeOut() {
        if (_settings.isInviteDialogOpen) {
            closeInviteDialogWindow();
            _system.sendInviteResult(_settings.INVITE_RESULT.TIMEOUT);
        }
    }

    function closeInviteDialogWindow() {
        var $dialog = $('#dialog-confirm');

        if ($dialog)
            $dialog.wedialog('close');

        $dialog.remove();

		_settings.isInviteDialogOpen = false;
    }

    // This function could be fired from chat window
    function registerChatWindowEvent(event) {
        if (event.data == 'registerChatWindow' && !_childWindow) {
            _childWindow = event.source;
            displayBackToChatDialog();
        }
    }

    this.displayInvite = function(data) {
        log('Dialog Agent display invite');

        if (_settings.isInviteDialogOpen || _childWindow) {
            log('Invite or Dialog already exist');
            return;
        }

        setTimeout(function() {
            closeInviteDialogWindowTimeOut();
        }, data.inviteTimeout * 1000);

        _settings.isInviteDialogOpen = true;

        createInvite(data);
    };

    this.init = function() {

        // If window was closed and chat windows still exist in mobile browser
        try { // To handle not supported browsers
            window.addEventListener('message', registerChatWindowEvent, false);
        }
        catch (ex) {
            log('Dialog: ' + ex);
        }
    };
}

    // Return to public
    return _tracker;
})(document, window, window.jQuery);

_gt = com.genesyslab.wme.tracker.getInterface();
}
