"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9545], {
    8541: (e, a, t) => {
        t.d(a, {
            Q: () => c
        });
        var l = t(95155)
          , i = t(61258)
          , n = t(77205);
        function c(e) {
            var a;
            let {item: t, currentUserId: c, ...x} = e;
            return (0,
            l.jsx)(i.W, {
                iconFileId: t.iconFileId,
                name: t.name,
                topLeftExtraIcons: (0,
                n.n)(t),
                priceCoins: t.priceCoins,
                addedInLibrary: null != (a = t.inMyLibrary) && a,
                averageRating: t.averageRating,
                isSetRating: t.isSetRating,
                favoriteCount: t.favoriteCount,
                isFavorited: t.isFavorited,
                authorUserLogin: t.authorUserLogin,
                owner: c === t.authorUserId,
                ...x
            })
        }
    }
    ,
    16625: (e, a, t) => {
        t.d(a, {
            t: () => s
        });
        var l = t(95155)
          , i = t(25789)
          , n = t(28278)
          , c = t(96869)
          , x = t(97563)
          , r = t(19735)
          , p = t(73604)
          , d = t(35295);
        let o = {
            xs: 3,
            sm: 5,
            md: 6,
            lg: 7
        };
        function s(e) {
            let {tabs: a, activeTabId: t, onTabClick: x, loading: d} = e
              , s = (0,
            i.default)()
              , h = (0,
            n.A)(s.breakpoints.down("md")) ? 1 : 2;
            return (0,
            l.jsxs)(c.default, {
                direction: "row",
                justifyContent: "end",
                rowGap: 1,
                columnGap: h,
                flexWrap: "wrap",
                children: [d && (0,
                l.jsx)(p.a, {
                    size: r.l.Large
                }), !d && a.map(e => (0,
                l.jsx)(A, {
                    tab: e,
                    isActive: e.id === t,
                    onClick: () => x(e.id),
                    sx: {
                        maxWidth: e => ({
                            xs: "calc((100% - (".concat(e.spacing(h), " * ").concat(Math.min(a.length, o.xs) - 1, ")) / ").concat(Math.min(a.length, o.xs), ")"),
                            sm: "calc((100% - (".concat(e.spacing(h), " * ").concat(Math.min(a.length, o.sm) - 1, ")) / ").concat(Math.min(a.length, o.sm), ")"),
                            md: "calc((100% - (".concat(e.spacing(h), " * ").concat(Math.min(a.length, o.md) - 1, ")) / ").concat(Math.min(a.length, o.md), ")"),
                            lg: "calc((100% - (".concat(e.spacing(h), " * ").concat(Math.min(a.length, o.lg) - 1, ")) / ").concat(Math.min(a.length, o.lg), ")")
                        })
                    }
                }, e.id))]
            })
        }
        function A(e) {
            let {tab: a, isActive: t=!1, onClick: p, sx: o, iconPosition: s="end"} = e
              , A = (0,
            i.default)()
              , h = (0,
            n.A)(A.breakpoints.down("md"))
              , g = h ? r.l.XSmall : r.l.Medium;
            return (0,
            l.jsxs)(c.default, {
                direction: "row",
                flexWrap: "nowrap",
                alignItems: "center",
                gap: {
                    xs: .5,
                    sm: 1
                },
                padding: {
                    xs: .5,
                    sm: 1
                },
                sx: [{
                    backgroundColor: e => {
                        var t;
                        return null != (t = a.color) ? t : e.palette.grey["800"]
                    }
                    ,
                    cursor: "pointer"
                }, ...Array.isArray(o) ? o : [o]],
                onClick: p,
                children: ["start" === s && (0,
                l.jsx)(x.I, {
                    size: g,
                    iconName: t ? r.$.RadioChecked : r.$.RadioUnchecked
                }), (0,
                l.jsx)(d.W, {
                    fontSize: h ? 12 : 16,
                    children: a.name
                }), "end" === s && (0,
                l.jsx)(x.I, {
                    size: g,
                    iconName: t ? r.$.RadioChecked : r.$.RadioUnchecked
                })]
            })
        }
    }
    ,
    21710: (e, a, t) => {
        t.d(a, {
            P: () => j
        });
        var l = t(95155)
          , i = t(49350)
          , n = t(96869)
          , c = t(80317)
          , x = t(36117)
          , r = t.n(x);
        function p(e) {
            let {children: a} = e;
            return (0,
            l.jsx)(l.Fragment, {
                children: r()(a).format("DD.MM.YYYY")
            })
        }
        var d = t(12115)
          , o = t(15239);
        let s = {
            src: "/_next/static/media/download1.92751bfd.png",
            height: 100,
            width: 100,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXGFhoVwcnCKiopXWFdra2hWWFZDSUOZmZn4+PhTVVN7fnyMkY9jZmNkZGPKysplbGjBLxxzAAAAEXRSTlMAWYWQn1ZYCDQLSbB7eLwnl8KCB2cAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA3SURBVHicLcZREoAgDMXAAC2vBRXvf1pHMT8bgAh2R/mn9m3Wjt6Jyz5zmSWge87WTqHhXnzoARlXAQGtitVfAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 8
        }
          , A = {
            src: "/_next/static/media/download2.b4ac41b8.png",
            height: 100,
            width: 100,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEVMaXGbm5uZmZmqqqqQkJBjY2NxcXGfn5+Li4uoqKiZmZlwOgUAAAAAC3RSTlMAWYWOZQYSpksvNfv9RZ4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAwSURBVHicVYhBCgAgDMPazrrp/x8sMjyYQwgBgL3QDMIv/jMzZx/p2oqIkOEiyfIBD38Ag82uHe0AAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 8
        }
          , h = {
            src: "/_next/static/media/download3.b9f54e45.png",
            height: 100,
            width: 100,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEW4uLidnZ26urqXl5e7u7vFxcXg4ODT09PY2NgXvwE2AAAACXRSTlMBVGANho4yYKbM3PVbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nF3HsQ0AMAjEQAd4YP+JI0GquDoDZLJVPZh98G5fSfOhCIXDmbgNbgBpVDCVBwAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8
        }
          , g = {
            src: "/_next/static/media/download4.98d08a78.png",
            height: 100,
            width: 100,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEXqeUX3fjjrVhb+ijz9dC3uSBP0eTP9n0voVBb/nlb/rVzhdm6pAAAAC3RSTlMBjVhbZQ+Bpk01Lz9XGGAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAsSURBVHicdcYxDgAgDMNAJ1Ba+P+DkeiMFx/APnRz/BCZ0ZLeliStgLLt4gIN8gBwdgOPJAAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8
        }
          , u = {
            src: "/_next/static/media/download5.5d8b392b.png",
            height: 100,
            width: 100,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEX/v2T/fQD/sgz/rI//yXD/2bP/UgD/lWb/rJn/v5r/xKX/3bT/xI7/pnb/tGf/qE//pBP/wnH/wX3/yl1HGkE+AAAAFHRSTlMBM2da9jIiCU2AjFxohY/IhcGx+xB4zFMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA4SURBVHicJclJDgAgCATBUVHAffn/X43Yp0oaAGKElbR8uFY/ePRkmETe4A+5NzSvnZUBCSJB+AIfdgEhPoYzLQAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8
        };
        function f(e) {
            let {downloadsCountRange: a} = e
              , t = (0,
            d.useMemo)( () => {
                switch (a) {
                case 0:
                    return s;
                case 1:
                    return A;
                case 2:
                    return h;
                case 3:
                    return g;
                case 4:
                    return u
                }
            }
            , [a]);
            return (0,
            l.jsx)(o.default, {
                src: t.src,
                alt: "downloads-count-badge",
                height: 20,
                width: 20
            })
        }
        function m(e) {
            let {children: a} = e;
            return (0,
            l.jsxs)(l.Fragment, {
                children: [(a / 36e5).toFixed(2), "H"]
            })
        }
        function j(e) {
            var a, t, x, r, d;
            let {profile: o} = e;
            return (0,
            l.jsxs)(n.default, {
                direction: "column",
                gap: 1,
                children: [(0,
                l.jsx)(c.A, {
                    children: (0,
                    l.jsx)(i.x6, {
                        id: "K42JYi"
                    })
                }), (0,
                l.jsxs)(c.A, {
                    children: [(0,
                    l.jsx)(i.x6, {
                        id: "zE3Eft"
                    }), " ", (0,
                    l.jsx)(m, {
                        children: null != (a = null == o ? void 0 : o.playTime) ? a : 0
                    })]
                }), (0,
                l.jsxs)(c.A, {
                    children: [(0,
                    l.jsx)(i.x6, {
                        id: "d/sELs"
                    }), " ", (null == o ? void 0 : o.registeredAt) ? (0,
                    l.jsx)(p, {
                        children: o.registeredAt
                    }) : ""]
                }), (0,
                l.jsxs)(c.A, {
                    children: [(0,
                    l.jsx)(i.x6, {
                        id: "GE3Atf"
                    }), " ", null != (t = null == o ? void 0 : o.receivedAchievementsCount) ? t : 0, "/", null != (x = null == o ? void 0 : o.availableAchievementsCount) ? x : 0]
                }), (0,
                l.jsxs)(c.A, {
                    children: [(0,
                    l.jsx)(i.x6, {
                        id: "5C6qXP"
                    }), " ", (0,
                    l.jsx)(f, {
                        downloadsCountRange: null != (r = null == o ? void 0 : o.downloadsCountRange) ? r : 0
                    })]
                }), (0,
                l.jsxs)(c.A, {
                    children: [(0,
                    l.jsx)(i.x6, {
                        id: "WtI7iO"
                    }), " ", null != (d = null == o ? void 0 : o.starsCount) ? d : 0]
                })]
            })
        }
    }
    ,
    42263: (e, a, t) => {
        t.d(a, {
            I: () => A
        });
        var l = t(95155)
          , i = t(96869)
          , n = t(80357)
          , c = t(12115)
          , x = t(71745)
          , r = t(22428);
        function p(e) {
            let {children: a, ...t} = e
              , [i,n] = (0,
            c.useState)(!1)
              , p = () => {
                n(!1)
            }
            ;
            return (0,
            l.jsx)(x.x, {
                onClickAway: p,
                children: (0,
                l.jsx)(r.A, {
                    onClose: p,
                    open: i,
                    disableFocusListener: !0,
                    disableHoverListener: !0,
                    disableTouchListener: !0,
                    slotProps: {
                        popper: {
                            disablePortal: !0
                        }
                    },
                    ...t,
                    children: (0,
                    l.jsx)(a, {
                        onClick: () => {
                            n(!0)
                        }
                    })
                })
            })
        }
        var d = t(97563)
          , o = t(19735)
          , s = t(69837);
        function A(e) {
            let {awards: a, loading: t} = e;
            return (0,
            l.jsxs)(i.default, {
                direction: "row",
                gap: 1,
                flexWrap: "wrap",
                children: [t && (0,
                l.jsx)(d.I, {
                    iconName: o.$.DefaultBadge,
                    size: o.l.Large
                }), a.map(e => (0,
                l.jsx)(n.default, {
                    children: (0,
                    l.jsx)(p, {
                        title: e.currentLevelName,
                        placement: "bottom",
                        children: a => (0,
                        l.jsx)(n.default, {
                            ...a,
                            style: {
                                height: 40,
                                position: "relative",
                                width: 40
                            },
                            children: (0,
                            l.jsx)(s.S, {
                                fileId: e.currentLevelIconFileId,
                                alt: e.currentLevelName,
                                fill: !0,
                                fileWidth: 256,
                                placeholderIconName: o.$.DefaultBadge
                            })
                        })
                    })
                }, e.id))]
            })
        }
    }
    ,
    45061: (e, a, t) => {
        t.d(a, {
            U: () => B
        });
        var l = t(95155)
          , i = t(12115)
          , n = t(80357)
          , c = t(97179)
          , x = function(e) {
            return e.Works = "works",
            e.Packs = "packs",
            e
        }({});
        let r = {
            pageContainer: e => ({
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
                overflow: e
            }),
            blocksContainer: e => ({
                backgroundColor: e.palette.grey[900],
                height: "100%",
                minHeight: 0
            }),
            contentTitle: {
                maxWidth: "100%",
                wordWrap: "break-word"
            }
        };
        var p = t(49350)
          , d = t(96869)
          , o = t(84389)
          , s = t(80317)
          , A = t(50546)
          , h = t(16625);
        let g = [{
            id: x.Works,
            name: (0,
            l.jsx)(p.x6, {
                id: "nnvJfi"
            })
        }, {
            id: x.Packs,
            name: (0,
            l.jsx)(p.x6, {
                id: "BUDicL"
            })
        }]
          , u = (0,
        A.PA)(e => {
            let {isMobile: a, activeTab: t, onTabChange: i, renderWorks: c, renderPacks: r} = e;
            return (0,
            l.jsx)(n.default, {
                sx: {
                    flex: 1,
                    height: "100%",
                    minHeight: 0,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column"
                },
                children: (0,
                l.jsxs)(d.default, {
                    direction: "column",
                    height: "100%",
                    sx: {
                        minHeight: 0
                    },
                    children: [a && (0,
                    l.jsx)(o.A, {}), (0,
                    l.jsxs)(d.default, {
                        direction: "row",
                        padding: a ? 1 : 2,
                        gap: 2,
                        alignItems: "center",
                        children: [(0,
                        l.jsx)(s.A, {
                            variant: "h5",
                            children: (0,
                            l.jsx)(p.x6, {
                                id: "nnvJfi"
                            })
                        }), (0,
                        l.jsx)(h.t, {
                            tabs: g,
                            activeTabId: t,
                            onTabClick: i
                        })]
                    }), (0,
                    l.jsx)(o.A, {}), (0,
                    l.jsxs)(n.default, {
                        flex: 1,
                        sx: {
                            minHeight: 0,
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden"
                        },
                        children: [t === x.Works && (0,
                        l.jsx)(n.default, {
                            sx: {
                                flex: 1,
                                minHeight: 0,
                                overflow: "hidden"
                            },
                            children: c
                        }), t === x.Packs && (0,
                        l.jsx)(n.default, {
                            sx: {
                                flex: 1,
                                minHeight: 0,
                                overflow: "hidden"
                            },
                            children: r
                        })]
                    })]
                })
            })
        }
        );
        var f = t(49714)
          , m = t(19735)
          , j = t(61490)
          , w = t(42263)
          , b = t(21710)
          , v = t(47767);
        let C = (0,
        i.memo)(function(e) {
            var a;
            let {profile: t, awards: i, loading: c, isMobile: x, defaultAvatarId: p} = e
              , A = null != (a = null == t ? void 0 : t.avatarFileId) ? a : p;
            return (0,
            l.jsxs)(M, {
                sx: {
                    flex: 1,
                    height: "100%"
                },
                children: [(0,
                l.jsxs)(d.default, {
                    direction: "row",
                    gap: 4,
                    padding: x ? 1 : 3,
                    overflow: "hidden",
                    children: [(0,
                    l.jsx)(v.F, {
                        size: m.l.Large,
                        sx: {
                            width: 96,
                            height: 96,
                            position: "relative"
                        },
                        children: A && (0,
                        l.jsx)(j.H, {
                            size: x ? m.l.Giant : m.l.ExtraGiant,
                            avatarId: A
                        })
                    }), (0,
                    l.jsxs)(d.default, {
                        direction: "column",
                        gap: 3,
                        overflow: "hidden",
                        children: [(0,
                        l.jsx)(s.A, {
                            variant: x ? "h1" : "huge",
                            sx: r.contentTitle,
                            children: null == t ? void 0 : t.login
                        }), (0,
                        l.jsx)(w.I, {
                            awards: i,
                            loading: c
                        })]
                    })]
                }), (0,
                l.jsx)(o.A, {}), (0,
                l.jsx)(n.default, {
                    padding: 3,
                    children: (0,
                    l.jsx)(b.P, {
                        profile: t,
                        loading: c
                    })
                })]
            })
        })
          , M = (0,
        f.default)(d.default)(e => {
            let {theme: a} = e;
            return {
                borderRight: "3px solid ".concat(a.palette.divider)
            }
        }
        );
        function B(e) {
            let {profile: a, awards: t, loading: p, isMobile: d, defaultAvatarId: o, renderWorks: s, renderPacks: A, containerOverflow: h="hidden"} = e
              , [g,f] = (0,
            i.useState)(x.Works);
            return (0,
            l.jsx)(n.default, {
                sx: r.pageContainer(h),
                children: (0,
                l.jsxs)(c.A, {
                    container: !0,
                    sx: r.blocksContainer,
                    children: [(0,
                    l.jsx)(c.A, {
                        size: d ? 12 : 6,
                        sx: {
                            minHeight: 0,
                            height: d ? "auto" : "100%"
                        },
                        children: (0,
                        l.jsx)(C, {
                            profile: a,
                            awards: t,
                            loading: p,
                            isMobile: d,
                            defaultAvatarId: o
                        })
                    }), (0,
                    l.jsx)(c.A, {
                        size: d ? 12 : 6,
                        sx: {
                            minHeight: 0,
                            height: "100%",
                            display: "flex"
                        },
                        children: (0,
                        l.jsx)(u, {
                            isMobile: d,
                            activeTab: g,
                            onTabChange: f,
                            renderWorks: s,
                            renderPacks: A
                        })
                    })]
                })
            })
        }
    }
    ,
    46817: (e, a, t) => {
        t.d(a, {
            u: () => o
        });
        var l = t(95155)
          , i = t(12115)
          , n = t(49350)
          , c = t(80357)
          , x = t(96869)
          , r = t(87902)
          , p = t(19735)
          , d = t(73604);
        function o(e) {
            let {hasNextPage: a, loading: t, items: o, onLoadNextPage: s, itemComponent: A} = e
              , h = (0,
            i.useRef)(null)
              , [g,u] = (0,
            r.A)({
                root: h.current,
                rootMargin: "100px",
                threshold: .1
            });
            return (0,
            i.useEffect)( () => {
                g && s()
            }
            , [g, o.length]),
            (0,
            l.jsxs)(c.default, {
                height: "100%",
                overflow: "hidden auto",
                ref: h,
                children: [(0,
                l.jsx)(x.default, {
                    direction: "row",
                    flexWrap: "wrap",
                    gap: 1,
                    width: "100%",
                    children: o.map(e => (0,
                    l.jsx)(A, {
                        item: e
                    }, e.id))
                }), !o.length && !a && (0,
                l.jsx)(x.default, {
                    width: "100%",
                    alignItems: "center",
                    alignContent: "center",
                    children: (0,
                    l.jsx)(n.x6, {
                        id: "ow3fug"
                    })
                }), (0,
                l.jsx)(c.default, {
                    ref: u,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 1,
                    children: a && t && (0,
                    l.jsx)(d.a, {
                        size: p.l.XLarge
                    })
                })]
            })
        }
    }
    ,
    47767: (e, a, t) => {
        t.d(a, {
            F: () => n
        });
        var l = t(49714)
          , i = t(24288);
        let n = (0,
        l.default)(i.A)(e => {
            let {size: a} = e;
            return {
                borderRadius: 0,
                clipPath: "small" === a ? "polygon(0px calc(100% - 4px), 2px calc(100% - 4px), 2px calc(100% - 2px), 4px calc(100% - 2px), 4px 100%, calc(100% - 4px) 100%, calc(100% - 4px) calc(100% - 2px), calc(100% - 2px) calc(100% - 2px), calc(100% - 2px) calc(100% - 4px), 100% calc(100% - 4px), 100% 4px, calc(100% - 2px) 4px, calc(100% - 2px) 2px, calc(100% - 4px) 2px, calc(100% - 4px) 0px, 4px 0px, 4px 2px, 2px 2px, 2px 4px, 0px 4px)" : "polygon(0px calc(100% - 2px), 2px calc(100% - 2px), 2px 100%, calc(100% - 2px) 100%, calc(100% - 2px) calc(100% - 2px), 100% calc(100% - 2px), 100% 2px, calc(100% - 2px) 2px, calc(100% - 2px) 0px, 2px 0px, 2px 2px, 0px 2px)",
                position: "relative",
                width: "fit-content",
                height: "fit-content",
                "&::after": {
                    content: '""',
                    position: "absolute",
                    clipPath: "small" === a ? "polygon(0px calc(100% - 4px), 2px calc(100% - 4px), 2px calc(100% - 2px), 4px calc(100% - 2px), 4px 100%, calc(100% - 4px) 100%, calc(100% - 4px) calc(100% - 2px), calc(100% - 2px) calc(100% - 2px), calc(100% - 2px) calc(100% - 4px), 100% calc(100% - 4px), 100% 4px, calc(100% - 2px) 4px, calc(100% - 2px) 2px, calc(100% - 4px) 2px, calc(100% - 4px) 0px, 4px 0px, 4px 2px, 2px 2px, 2px 4px, 0px 4px, 0px 50%, 2px 50%, 2px 4px, 4px 4px, 4px 2px, calc(100% - 4px) 2px, calc(100% - 4px) 4px, calc(100% - 2px) 4px, calc(100% - 2px) calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) calc(100% - 2px), 4px calc(100% - 2px), 4px calc(100% - 4px), 2px calc(100% - 4px), 2px 50%, 0px 50%)" : "polygon(0px calc(100% - 2px), 2px calc(100% - 2px), 2px 100%, calc(100% - 2px) 100%, calc(100% - 2px) calc(100% - 2px), 100% calc(100% - 2px), 100% 2px, calc(100% - 2px) 2px, calc(100% - 2px) 0px, 2px 0px, 2px 2px, 0px 2px, 0px 50%, 4px 50%, 4px 8px, 4px 6px, 6px 6px, 6px 4px, 8px 4px, calc(100% - 8px) 4px, calc(100% - 6px) 4px, calc(100% - 6px) 6px, calc(100% - 4px) 6px, calc(100% - 4px) 8px, calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 6px), calc(100% - 6px) calc(100% - 6px), calc(100% - 6px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), 8px calc(100% - 4px), 6px calc(100% - 4px), 6px calc(100% - 6px), 4px calc(100% - 6px), 4px calc(100% - 8px), 4px 50%, 0px 50%)",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "white",
                    display: "block",
                    pointerEvents: "none"
                }
            }
        }
        )
    }
    ,
    47933: (e, a, t) => {
        t.d(a, {
            q: () => c
        });
        var l = t(98608)
          , i = t(62518)
          , n = t(70066);
        async function c(e, a, t) {
            let c = new URLSearchParams({
                limit: e.limit.toString(),
                offset: e.offset.toString()
            });
            t && c.set("itemKind", t);
            let x = await (0,
            n.n)("/api/store-item/by-author/".concat(a, "?").concat(c.toString()), {
                method: "GET"
            })
              , r = await x.json();
            return (0,
            l.N)(i.ME)(r),
            r
        }
    }
    ,
    61490: (e, a, t) => {
        t.d(a, {
            H: () => p
        });
        var l = t(95155)
          , i = t(12115)
          , n = t(80357)
          , c = t(69837)
          , x = t(19735);
        let r = new Map([[x.l.Tiny, 16], [x.l.XSmall, 20], [x.l.Small, 24], [x.l.Medium, 32], [x.l.Large, 40], [x.l.XLarge, 48], [x.l.Giant, 56], [x.l.ExtraGiant, 96]]);
        function p(e) {
            let {size: a=x.l.Medium, avatarId: t} = e
              , p = (0,
            i.useMemo)( () => r.get(a), [a]);
            return a === x.l.Fill ? (0,
            l.jsxs)(n.default, {
                sx: {
                    position: "relative",
                    aspectRatio: "1 / 1"
                },
                width: "100%",
                children: [(0,
                l.jsx)(c.S, {
                    fileId: t,
                    alt: "avatar",
                    width: p,
                    fill: !0,
                    fileWidth: 512
                }), ";"]
            }) : (0,
            l.jsx)(c.S, {
                fileId: t,
                alt: "avatar",
                height: p,
                width: p,
                fileWidth: 512
            })
        }
    }
    ,
    73604: (e, a, t) => {
        t.d(a, {
            a: () => x
        });
        var l = t(95155)
          , i = t(80357)
          , n = t(97563)
          , c = t(19735);
        function x(e) {
            let {size: a} = e;
            return (0,
            l.jsx)(i.default, {
                sx: {
                    animation: "spin 2s linear infinite",
                    "@keyframes spin": {
                        "0%": {
                            transform: "rotate(0deg)"
                        },
                        "100%": {
                            transform: "rotate(360deg)"
                        }
                    }
                },
                children: (0,
                l.jsx)(n.I, {
                    iconName: c.$.Melon,
                    size: a
                })
            })
        }
    }
    ,
    94317: (e, a, t) => {
        t.d(a, {
            I: () => c
        });
        var l = t(98608)
          , i = t(17748)
          , n = t(70066);
        async function c(e, a) {
            let t = await (0,
            n.n)("/api/content/by-author/".concat(a, "?limit=").concat(e.limit, "&offset=").concat(e.offset), {
                method: "GET"
            })
              , c = await t.json();
            return (0,
            l.N)(i.p)(c),
            c
        }
    }
}]);
