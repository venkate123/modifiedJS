"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[9174], {
    87831: function(e, t, r) {
        r.d(t, {
            Y: function() {
                return x
            },
            Z: function() {
                return N
            }
        });
        var n = r(85893)
          , o = r(67294)
          , a = r(45697)
          , l = r.n(a)
          , i = r(94184)
          , c = r.n(i)
          , s = r(38538)
          , u = r(91108)
          , p = r(32538)
          , f = r(6375)
          , d = r(83590)
          , _ = r(84009)
          , y = r(52322);
        function m(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))),
                n.forEach(function(t) {
                    var n;
                    n = r[t],
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                })
            }
            return e
        }
        function v(e, t) {
            return t = null != t ? t : {},
            Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r.push.apply(r, n)
                }
                return r
            }
            )(Object(t)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
            }),
            e
        }
        function g(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r, n, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var a = []
                      , l = !0
                      , i = !1;
                    try {
                        for (o = o.call(e); !(l = (r = o.next()).done) && (a.push(r.value),
                        !t || a.length !== t); l = !0)
                            ;
                    } catch (e) {
                        i = !0,
                        n = e
                    } finally {
                        try {
                            l || null == o.return || o.return()
                        } finally {
                            if (i)
                                throw n
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return m(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r)
                        return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return m(e, t)
                }
            }(e, t) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var h = function(e) {
            var t = e.className
              , r = e.tooltipClassName
              , a = e.onClick
              , l = e.children
              , i = e.content
              , s = e.flash
              , u = e.flashTime
              , p = void 0 === u ? 1e3 : u
              , f = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = function(e, t) {
                    if (null == e)
                        return {};
                    var r, n, o = {}, a = Object.keys(e);
                    for (n = 0; n < a.length; n++)
                        r = a[n],
                        t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++)
                        r = a[n],
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                }
                return o
            }(e, ["className", "tooltipClassName", "onClick", "children", "content", "flash", "flashTime"])
              , m = g((0,
            o.useState)(null), 2)
              , h = m[0]
              , j = m[1]
              , O = g((0,
            o.useState)(null), 2)
              , C = O[0]
              , w = O[1]
              , x = g((0,
            o.useState)(null), 2)
              , S = x[0]
              , N = x[1]
              , P = g((0,
            o.useState)(!1), 2)
              , A = P[0]
              , M = P[1];
            (0,
            o.useEffect)(function() {
                if (!s)
                    return function() {
                        return null
                    }
                    ;
                M(!0);
                var e = setTimeout(function() {
                    return M(!1)
                }, p);
                return function() {
                    return window.clearTimeout(e)
                }
            }, [s]);
            var I = (0,
            d.D)(h, C, {
                placement: "top",
                modifiers: [{
                    name: "arrow",
                    options: {
                        element: S
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: [0, 8]
                    }
                }]
            })
              , T = I.styles
              , D = I.attributes;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)("div", v(b({
                    className: t,
                    ref: j,
                    onClick: a
                }, f), {
                    children: l
                })), (0,
                n.jsx)(_.ZP, {
                    show: A,
                    children: (0,
                    n.jsxs)("div", v(b({
                        className: c()(y.Z.popperBase, y.Z.popper, r),
                        ref: w,
                        style: T.popper
                    }, D.popper), {
                        children: [i, (0,
                        n.jsx)("div", {
                            className: c()(y.Z.arrow, y.Z.arrowBlack),
                            ref: N,
                            style: T.arrow
                        })]
                    }))
                })]
            })
        }
          , j = r(20640)
          , O = r.n(j)
          , C = {
            codeSnippet: "CodeSnippet__codeSnippet___E5xS5",
            copyWidget: "CodeSnippet__copyWidget___m2DAX",
            tooltip: "CodeSnippet__tooltip___WC1T0"
        };
        function w(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        s.Z.registerLanguage("xml", u.Z),
        s.Z.registerLanguage("javascript", p.Z);
        var x = function(e) {
            var t, r = e.copyWidgetClassName, a = e.snippet, l = e.trimNewlines, i = e.flashTime, s = function(e) {
                if (Array.isArray(e))
                    return e
            }(t = (0,
            o.useState)()) || function(e, t) {
                var r, n, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var a = []
                      , l = !0
                      , i = !1;
                    try {
                        for (o = o.call(e); !(l = (r = o.next()).done) && (a.push(r.value),
                        !t || a.length !== t); l = !0)
                            ;
                    } catch (e) {
                        i = !0,
                        n = e
                    } finally {
                        try {
                            l || null == o.return || o.return()
                        } finally {
                            if (i)
                                throw n
                        }
                    }
                    return a
                }
            }(t, 2) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return w(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r)
                        return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return w(e, t)
                }
            }(t, 2) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }(), u = s[0], p = s[1];
            return (0,
            n.jsx)(h, {
                className: c()(C.copyWidget, r),
                tooltipClassName: C.tooltip,
                content: "Copied!",
                flash: u,
                flashTime: void 0 === i ? 1e3 : i,
                onClick: function() {
                    var e = l ? a.replace(/\n\s+/g, " ").replace(/\s+/g, " ").replace(/>\s</g, "><").trim() : a;
                    O()(e),
                    p({})
                },
                role: "button",
                tabIndex: "0",
                "aria-label": "Copy",
                children: (0,
                n.jsx)("i", {
                    className: "fa fa-copy"
                })
            })
        }
          , S = function(e) {
            var t = e.className
              , r = e.snippet
              , o = e.language
              , a = e.trimNewlines;
            return (0,
            n.jsxs)("div", {
                className: c()(C.codeSnippet, t),
                children: [(0,
                n.jsx)(s.Z, {
                    language: void 0 === o ? "xml" : o,
                    style: f.Z,
                    customStyle: {
                        padding: "0",
                        margin: "0"
                    },
                    children: r
                }), (0,
                n.jsx)(x, {
                    snippet: r,
                    trimNewlines: void 0 === a || a
                })]
            })
        };
        S.propTypes = {
            snippet: l().string.isRequired,
            className: l().string,
            trimNewlines: l().bool
        };
        var N = S
    },
    21287: function(e, t, r) {
        r.d(t, {
            ZP: function() {
                return _
            }
        });
        var n = r(85893)
          , o = r(67294)
          , a = r(94184)
          , l = r.n(a)
          , i = r(45697)
          , c = r.n(i)
          , s = r(84009)
          , u = {
            fade: "Modal__fade___iT5Mj",
            layout: "Modal__layout___NoR75",
            alignTop: "Modal__alignTop___H0pmf",
            modal: "Modal__modal___Nq03T",
            modalCloseWrapper: "Modal__modalCloseWrapper___v8jlH",
            closeIcon: "Modal__closeIcon___lTiiJ fa fa-times"
        };
        function p(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var f = function(e) {
            var t = e.toggle
              , r = e.allowClickOut
              , o = e.children
              , a = e.alignTop
              , i = void 0 !== a && a;
            return (0,
            n.jsx)("div", {
                className: l()(u.layout, p({}, u.alignTop, i)),
                onClick: t && r ? function(e) {
                    var r, n;
                    (null == e ? void 0 : null === (r = e.target) || void 0 === r ? void 0 : null === (n = r.dataset) || void 0 === n ? void 0 : n.layout) && t()
                }
                : function() {}
                ,
                "data-layout": !0,
                children: o
            })
        }
          , d = function(e) {
            var t, r, a = e.className, i = e.closeIconClassName, c = e.children, d = e.show, _ = e.toggle, y = e.alignTop, m = e.allowClickOut, b = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = function(e, t) {
                    if (null == e)
                        return {};
                    var r, n, o = {}, a = Object.keys(e);
                    for (n = 0; n < a.length; n++)
                        r = a[n],
                        t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++)
                        r = a[n],
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                }
                return o
            }(e, ["className", "closeIconClassName", "children", "show", "toggle", "alignTop", "allowClickOut"]);
            return (0,
            o.useEffect)(function() {
                document.body.style.height = d ? "100%" : "auto",
                document.body.style.overflow = d ? "hidden" : "auto"
            }, [d]),
            (0,
            n.jsx)(s.pT, {
                className: u.fade,
                show: d,
                children: (0,
                n.jsx)(f, {
                    alignTop: y,
                    toggle: _,
                    allowClickOut: void 0 === m || m,
                    children: (0,
                    n.jsxs)("div", (t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {}
                              , n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))),
                            n.forEach(function(t) {
                                p(e, t, r[t])
                            })
                        }
                        return e
                    }({
                        className: "".concat(u.modal, " ").concat(a)
                    }, b),
                    r = r = {
                        children: [_ && (0,
                        n.jsx)("div", {
                            className: u.modalCloseWrapper,
                            role: "close",
                            onClick: function() {
                                return _()
                            },
                            children: (0,
                            n.jsx)("i", {
                                className: l()(u.closeIcon, i)
                            })
                        }), c]
                    },
                    Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            r.push.apply(r, n)
                        }
                        return r
                    }
                    )(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }),
                    t))
                })
            })
        };
        d.propTypes = {
            toggle: c().func.isRequired,
            className: c().string,
            closeIconClassName: c().string
        };
        var _ = d
    },
    59824: function(e, t, r) {
        r.r(t),
        r.d(t, {
            default: function() {
                return v
            }
        });
        var n = r(85893)
          , o = r(67294)
          , a = r(86706)
          , l = r(33591)
          , i = {
            modal: "GenerateCitationModal__modal___h_fXn",
            layout: "GenerateCitationModal__layout___P5UQy",
            exportRow: "GenerateCitationModal__exportRow___uj9Ak",
            modalCloseWrapper: "GenerateCitationModal__modalCloseWrapper___wTahL",
            formatInput: "GenerateCitationModal__formatInput___TAy9D",
            directionInput: "GenerateCitationModal__directionInput___nUZtH",
            selector: "GenerateCitationModal__selector___RlxnD",
            label: "GenerateCitationModal__label___Rrsut",
            closeIcon: "GenerateCitationModal__closeIcon___LuqOB fa fa-times",
            bold: "GenerateCitationModal__bold___R6PnZ",
            italic: "GenerateCitationModal__italic___DdDDl",
            exportBtn: "GenerateCitationModal__exportBtn___DVQXl",
            button: "GenerateCitationModal__button___xidxk",
            headerContainer: "GenerateCitationModal__headerContainer___f8O9K",
            referenceCopySnippet: "GenerateCitationModal__referenceCopySnippet___sPm2s",
            citationCopyWidget: "GenerateCitationModal__citationCopyWidget____JQCN",
            tooltip: "GenerateCitationModal__tooltip___CRi8p"
        }
          , c = r(14504)
          , s = r(21287)
          , u = r(89119)
          , p = r(79239)
          , f = r(87831)
          , d = r(47442);
        function _(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function y(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r, n, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var a = []
                      , l = !0
                      , i = !1;
                    try {
                        for (o = o.call(e); !(l = (r = o.next()).done) && (a.push(r.value),
                        !t || a.length !== t); l = !0)
                            ;
                    } catch (e) {
                        i = !0,
                        n = e
                    } finally {
                        try {
                            l || null == o.return || o.return()
                        } finally {
                            if (i)
                                throw n
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return _(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r)
                        return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return _(e, t)
                }
            }(e, t) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var m = [{
            label: "BibTex",
            value: "bibtex"
        }, {
            label: "APA",
            value: "apa"
        }, {
            label: "MLA",
            value: "mla"
        }, {
            label: "Chicago",
            value: "chicago"
        }, {
            label: "Harvard",
            value: "harvard"
        }, {
            label: "Vancouver",
            value: "vancouver"
        }, {
            label: "IEEE",
            value: "ieee"
        }]
          , b = [{
            label: "ris",
            value: "ris"
        }, {
            label: "bibtex",
            value: "bib"
        }, {
            label: "csv",
            value: "csv"
        }]
          , v = function(e) {

            var t = e.actionCreator
              , r = (0, a.I0)() // 使用了redux的useDispatch
              , C = (0, a.v9)(function(e) {
                    return e.ui.citeGeneratorPaperData
                }) // 从redux store获取citeGeneratorPaperData
              , x = (0, d._$)({ // 假设这是生成引用的函数
                    reference: C,
                    citationStyle: "bibtex" // 直接设置为"bibtex"
                });

            // 使用useEffect在组件加载时执行复制逻辑
            (0, o.useEffect)(function() {
                if (!C) return; // 如果没有引用数据，则不执行

                navigator.clipboard.writeText(x).then(function() {
                    alert("BibTex citation copied successfully");
                }, function(err) {
                    alert("Could not copy text: ", err);
                });

                // 可以在这里添加清理或其他逻辑
            }, [C]); // 依赖于C，当C变化时重新执行

            // 由于不显示任何UI，可以直接返回null
            return null;
        }
    }
}]);
//# sourceMappingURL=client-components-modals-GenerateCitationModal.ae891f0921f959cfd443.js.map
