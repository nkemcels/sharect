!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.Sharect = t())
    : (e.Sharect = t())
})(window, function () {
  return (function (e) {
    var t = {}
    function r(n) {
      if (t[n]) return t[n].exports
      var o = (t[n] = { i: n, l: !1, exports: {} })
      return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
      }),
      (r.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var n = Object.create(null)
        if (
          (r.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var o in e)
            r.d(
              n,
              o,
              function (t) {
                return e[t]
              }.bind(null, o)
            )
        return n
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default
              }
            : function () {
                return e
              }
        return r.d(t, 'a', t), t
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (r.p = ''),
      r((r.s = 0))
    )
  })([
    function (e, t, r) {
      'use strict'
      function n() {
        return !!window.getSelection().toString()
      }
      function o(e) {
        var t = (
          window.getSelection().baseNode || window.getSelection().anchorNode
        ).parentNode
        return e.some(function (e) {
          return (function (e, t) {
            if (Element.prototype.closest) return e.closest(t)
            Element.prototype.matches ||
              (Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector)
            var r = e
            do {
              if (r.matches(t)) return r
              r = r.parentNode
            } while (null !== r && r.nodeType === Node.ELEMENT_NODE)
            return null
          })(t, e)
        })
      }
      function c(e) {
        var t = e.iconSize,
          r = e.buttonMargin,
          n = e.arrowSize,
          o = e.icons,
          c = window.getSelection().getRangeAt(0).getBoundingClientRect(),
          i = t + r,
          u =
            window.pageXOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop
        return {
          top: c.top + u - i - n,
          left: c.left + (c.width - i * o.length) / 2
        }
      }
      r.r(t)
      var i = function (e) {
          return (
            'line-height:0;transition:all .2s ease-in-out;background:' + e + ';'
          )
        },
        u = function (e, t) {
          return (
            'position:absolute;border-radius:3px;top:' +
            e +
            'px;left:' +
            t +
            'px;'
          )
        },
        l = function (e) {
          var t = e.arrowSize
          return (
            'position:absolute;border-left:' +
            t +
            'px solid transparent;border-right:' +
            t +
            'px solid transparent;border-top:' +
            t +
            'px solid ' +
            e.backgroundColor +
            ';bottom:-' +
            (t - 1) +
            'px;left:' +
            ((e.buttonSize * e.icons.length) / 2 - t) +
            'px;width:0;height:0;'
          )
        }
      function a(e) {
        var t = e.top,
          r = e.left,
          n = e.iconSize,
          o = e.buttonMargin,
          c = e.backgroundColor,
          a = e.icons,
          s = e.arrowSize,
          p = document.createElement('div'),
          f = n + o
        ;(p.className = 'sharect'),
          (p.style.cssText = i(c)),
          (p.style.cssText += u(t, r)),
          p.appendChild(a.icons)
        var d = (function (e) {
          var t = document.createElement('div')
          return (t.style.cssText = l(e)), t
        })({ arrowSize: s, backgroundColor: c, buttonSize: f, icons: a })
        return p.appendChild(d), p
      }
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function p(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        )
      }
      function f(e) {
        var t = c(e),
          r = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? s(Object(r), !0).forEach(function (t) {
                    p(e, t, r[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : s(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    )
                  })
            }
            return e
          })({}, e, { top: t.top, left: t.left })
        document.body.appendChild(a(r))
      }
      function d(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                h(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function h(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        )
      }
      function m(e) {
        setTimeout(function () {
          if (document.querySelector('.SelectionPopup__NoCollisions')) {
            if (n() && o(e.selectableElements))
              return void (function (e) {
                var t = c(e),
                  r = t.top,
                  n = t.left,
                  o = document.querySelector('.SelectionPopup__NoCollisions')
                ;(o.style.top = ''.concat(r, 'px')),
                  (o.style.left = ''.concat(n, 'px'))
              })(b({}, e))
            document.body.removeChild(
              document.querySelector('.SelectionPopup__NoCollisions')
            )
          }
          n() && o(e.selectableElements) && f(b({}, e))
        }, 10)
      }
      var w =
        'display:inline-block;margin:7px;cursor:pointer;transition:all .2s ease-in-out;'
      function y() {
        this.style.transform = 'scale(1.2)'
      }
      function g() {
        this.style.transform = 'scale(1)'
      }
      function v(e, t, r) {
        return (function (e, t) {
          var r = document.createElement('div')
          return (
            (r.style.cssText = w),
            (r.innerHTML = e),
            (r.onmousedown = t),
            (r.onmouseover = y),
            (r.onmouseout = g),
            r
          )
        })(e, function () {
          var e = (function (e, t) {
            return e
              .replace(/PAGE_URL/, window.location.href)
              .replace(/TEXT_SELECTION/, window.getSelection().toString())
              .replace(/USERNAME/, t)
          })(t, r)
          window.open(e, 'Share', 'width=550, height=280')
        })
      }
      function O(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? O(Object(r), !0).forEach(function (t) {
                S(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : O(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function S(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        )
      }
      var j, P, x, C, T, k, M, _, z
      t.default =
        ((j = {
          twitter: {
            isActive: !0,
            username: '',
            url:
              'https://twitter.com/intent/tweet?text=TEXT_SELECTION&via=USERNAME&url=PAGE_URL',
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.2,20.2c6.5,0,11.7-5.2,11.8-11.6c0-0.1,0-0.1,0-0.2c0-0.2,0-0.4,0-0.5c0.8-0.6,1.5-1.3,2.1-2.2c-0.8,0.3-1.6,0.6-2.4,0.7c0.9-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-1.6-1.7-4.2-1.7-5.9-0.1c-1.1,1-1.5,2.5-1.2,3.9C8.5,8.7,5.4,7.1,3.3,4.6c-1.1,1.9-0.6,4.3,1.3,5.5c-0.7,0-1.3-0.2-1.9-0.5l0,0c0,2,1.4,3.7,3.3,4.1c-0.6,0.2-1.2,0.2-1.9,0.1c0.5,1.7,2.1,2.8,3.9,2.9c-1.7,1.4-3.9,2-6.1,1.7C3.8,19.5,6,20.2,8.2,20.2"/></svg>'
          },
          facebook: {
            isActive: !0,
            url:
              'https://www.facebook.com/sharer/sharer.php?u=PAGE_URL&quote=TEXT_SELECTION',
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24" width="24" height="24" class="sharect__icon"><path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M18.4,7.4H17c-0.9,0-1,0.3-1,1l0,1.3 h2.1L18,12h-1.9v7h-3.2v-7h-1.2V9.6h1.2V8.1c0-2,0.8-3.1,3.1-3.1h2.4V7.4z"/></svg>'
          }
        }),
        (P = {}),
        (x = ['body']),
        (C = []),
        (T = '#333'),
        (k = '#fff'),
        (M = 5),
        (_ = 14),
        (z = 24),
        {
          config: function (e) {
            return (
              void 0 !== e.twitter && (j.twitter.isActive = e.twitter),
              void 0 !== e.facebook && (j.facebook.isActive = e.facebook),
              e.twitterUsername && (j.twitter.username = e.twitterUsername),
              e.backgroundColor && (T = e.backgroundColor),
              e.iconColor && (k = e.iconColor),
              e.selectableElements && (x = e.selectableElements),
              this
            )
          },
          appendCustomShareButtons: function (e) {
            return (C = e), this
          },
          init: function () {
            var e = {
              backgroundColor: T,
              iconColor: k,
              arrowSize: M,
              buttonMargin: _,
              iconSize: z,
              selectableElements: x,
              networks: j,
              customShareButtons: C
            }
            return (
              (function (e) {
                var t = e.iconColor,
                  r = document.createElement('style')
                ;(r.id = 'sharect-style'),
                  (r.innerHTML = '.SelectionPopup__NoCollisions svg{fill:'.concat(
                    t,
                    ';}'
                  )),
                  document.body.appendChild(r)
              })(E({}, e)),
              (P = (function (e) {
                var t = e.networks,
                  r = e.customShareButtons,
                  n = document.createElement('div'),
                  o = 0
                for (var c in t)
                  if (t[c] && t[c].isActive) {
                    var i = t[c],
                      u = i.icon,
                      l = i.url,
                      a = i.username
                    n.appendChild(v(u, l, a)), o++
                  }
                return (
                  r.length > 0 &&
                    r.forEach(function (e) {
                      n.appendChild(v(e.icon, e.url)), o++
                    }),
                  { icons: n, length: o }
                )
              })(E({}, e))),
              (function (e) {
                window.addEventListener(
                  'mouseup',
                  function () {
                    return m(e)
                  },
                  !1
                )
              })(E({}, e, { icons: P })),
              this
            )
          }
        })
    }
  ]).default
})
