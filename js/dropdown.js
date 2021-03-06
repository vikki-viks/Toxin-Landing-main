!(function (t, n) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = n())
    : 'function' == typeof define && define.amd
    ? define('item-quantity-dropdown', [], n)
    : 'object' == typeof exports
    ? (exports['item-quantity-dropdown'] = n())
    : (t['item-quantity-dropdown'] = n());
})(window, function () {
  return (function (t) {
    var n = {};
    function e(o) {
      if (n[o]) return n[o].exports;
      var r = (n[o] = { i: o, l: !1, exports: {} });
      return t[o].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
    }
    return (
      (e.m = t),
      (e.c = n),
      (e.d = function (t, n, o) {
        e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: o });
      }),
      (e.r = function (t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (e.t = function (t, n) {
        if ((1 & n && (t = e(t)), 8 & n)) return t;
        if (4 & n && 'object' == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (
          (e.r(o),
          Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
          2 & n && 'string' != typeof t)
        )
          for (var r in t)
            e.d(
              o,
              r,
              function (n) {
                return t[n];
              }.bind(null, r)
            );
        return o;
      }),
      (e.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(n, 'a', n), n;
      }),
      (e.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (e.p = ''),
      e((e.s = 0))
    );
  })([
    function (t, n, e) {
      'use strict';
      e.r(n);
      e(1);
      !(function (t) {
        var n = {
          maxItems: 1 / 0,
          minItems: 0,
          selectionText: 'item',
          textPlural: 'items',
          controls: {
            position: 'right',
            displayCls: 'iqdropdown-content',
            controlsCls: 'iqdropdown-item-controls',
            counterCls: 'counter',
          },
          items: {},
          onChange: function () {},
          beforeDecrement: function () {
            return !0;
          },
          beforeIncrement: function () {
            return !0;
          },
          setSelectionText: function (t, n) {
            var e =
              1 !== n && this.textPlural.length > 0
                ? this.textPlural
                : this.selectionText;
            return ''.concat(n, ' ').concat(e);
          },
        };
        t.fn.iqDropdown = function (e) {
          return (
            this.each(function () {
              var o = t(this),
                r = o.find('p.iqdropdown-selection').last(),
                i = o
                  .find('div.iqdropdown-menu')
                  .find('div.iqdropdown-menu-option'),
                u = {
                  selectionText: r.data('selection-text'),
                  textPlural: r.data('text-plural'),
                },
                c = t.extend(!0, {}, n, u, e),
                a = {},
                l = 0;
              function s() {
                r.html(c.setSelectionText(a, l));
              }
              o.click(function () {
                o.toggleClass('menu-open');
              }),
                i.each(function () {
                  var n = t(this),
                    e = n.data('id'),
                    o = Number(n.data('defaultcount') || '0');
                  (a[e] = o),
                    (l += o),
                    (function (t, n) {
                      var e = Number(n.data('mincount')),
                        o = Number(n.data('maxcount'));
                      c.items[t] = {
                        minCount: Number.isNaN(Number(e)) ? 0 : e,
                        maxCount: Number.isNaN(Number(o)) ? 1 / 0 : o,
                      };
                    })(e, n),
                    (function (n, e) {
                      var o = t('<div />').addClass(c.controls.controlsCls),
                        r = t(
                          '\n          <button class="button-decrement">\n            <i class="icon-decrement"></i>\n          </button>\n        '
                        ),
                        i = t(
                          '\n          <button class="button-increment">\n            <i class="icon-decrement icon-increment"></i>\n          </button>\n        '
                        ),
                        u = t('<span>'.concat(a[n], '</span>')).addClass(
                          c.controls.counterCls
                        );
                      e.children('div').addClass(c.controls.displayCls),
                        o.append(r, u, i),
                        'right' === c.controls.position
                          ? e.append(o)
                          : e.prepend(o),
                        r.click(function (t) {
                          var e = c.items,
                            o = c.minItems,
                            r = c.beforeDecrement,
                            i = c.onChange;
                          r(n, a) &&
                            l > o &&
                            a[n] > e[n].minCount &&
                            ((a[n] -= 1),
                            (l -= 1),
                            u.html(a[n]),
                            s(),
                            i(n, a[n], l)),
                            t.preventDefault();
                        }),
                        i.click(function (t) {
                          var e = c.items,
                            o = c.maxItems,
                            r = c.beforeIncrement,
                            i = c.onChange;
                          r(n, a) &&
                            l < o &&
                            a[n] < e[n].maxCount &&
                            ((a[n] += 1),
                            (l += 1),
                            u.html(a[n]),
                            s(),
                            i(n, a[n], l)),
                            t.preventDefault();
                        }),
                        e.click(function (t) {
                          return t.stopPropagation();
                        });
                    })(e, n);
                }),
                s();
            }),
            this
          );
        };
      })(jQuery);
    },
    function (t, n, e) {},
  ]);
});
