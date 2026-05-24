(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5062], {
    15300: (e, t, s) => {
        "use strict";
        s.d(t, {
            GameContainer: () => tw
        });
        var a = s(95155)
          , o = s(80357)
          , i = s(50546)
          , n = s(60452)
          , r = s(23955)
          , c = s(66718);
        s(68294);
        var l = s(84104);
        s(47991);
        var d = s(84754)
          , h = s(89753)
          , u = s(61017)
          , m = s(46252)
          , g = s(64466)
          , v = s(2311)
          , y = s(19195)
          , p = s(96395)
          , A = s(14869)
          , b = s(55580)
          , C = s(84658)
          , M = s(37401)
          , w = s(18390)
          , S = s(39271);
        s(35672),
        s(72467);
        var D = s(44782)
          , f = s(35270)
          , E = s(11252)
          , x = s(83773);
        s(46260);
        var I = s(12115)
          , _ = s(28278)
          , G = s(96869)
          , k = s(83436);
        let j = () => (0,
        I.useContext)(k.AdvBannerManagerContext);
        var T = s(92513);
        function U(e) {
            let {advType: t} = e
              , [s,i] = (0,
            I.useState)()
              , n = (0,
            I.useId)()
              , r = j();
            return (0,
            I.useEffect)( () => {
                r && (r.waitInitialization().then( () => r.renderBanner(t, n)).then(i).catch(console.error),
                s && s())
            }
            , [r]),
            (0,
            a.jsx)(o.default, {
                id: n,
                sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    overflow: "hidden"
                }
            })
        }
        function R(e) {
            let {advType: t, height: s, width: i, proportions: n} = e;
            return (0,
            a.jsx)(o.default, {
                height: s,
                width: i,
                maxHeight: "100%",
                maxWidth: "100%",
                sx: n && {
                    aspectRatio: "".concat(n.width, " / ").concat(n.height)
                },
                children: (0,
                a.jsx)(U, {
                    advType: t
                })
            })
        }
        let L = {
            container: (e, t) => e ? {
                height: "100%",
                width: "100%",
                overflow: "hidden"
            } : {
                height: "calc(100vh - ".concat(t, "px - 8px)"),
                overflow: "hidden"
            }
        }
          , J = (0,
        i.PA)(e => {
            var t;
            let {children: s} = e
              , i = (0,
            n.Pj)("Screen")
              , r = (0,
            n.Pj)("Game")
              , c = j()
              , [l,d] = (0,
            I.useState)()
              , [h,u] = (0,
            I.useState)()
              , m = (0,
            _.A)("@media (min-width: 1280px)") && !i.isFullscreen && r.isGameReady
              , g = (0,
            _.A)("@media (min-width: 1080px) and (max-width: 1279px)") && !i.isFullscreen && r.isGameReady;
            return (0,
            I.useEffect)( () => {
                if (c)
                    return m && !l ? c.renderBanner(T.K.VerticalLarge, "desktop-adv-side-panel").then(d).catch(console.error) : l && (l(),
                    d(void 0)),
                    () => {
                        l && (l(),
                        d(void 0))
                    }
            }
            , [m]),
            (0,
            I.useEffect)( () => {
                if (c)
                    return g && !h ? c.waitInitialization().then( () => c.renderBanner(T.K.VerticalSmall, "desktop-adv-side-panel")).then(u).catch(console.error) : h && (h(),
                    u(void 0)),
                    () => {
                        h && (h(),
                        u(void 0))
                    }
            }
            , [g]),
            (0,
            a.jsxs)(G.default, {
                direction: "column",
                sx: L.container(i.isFullscreen, null != (t = i.layoutHeaderHeight) ? t : 48),
                children: [(0,
                a.jsx)(o.default, {
                    height: "100%",
                    children: s
                }), !i.isFullscreen && r.isGameReady && (0,
                a.jsx)(o.default, {
                    width: "100%",
                    maxWidth: "100%",
                    height: 100,
                    overflow: "hidden",
                    flexShrink: 0,
                    children: (0,
                    a.jsx)(R, {
                        height: "100%",
                        width: "100%",
                        advType: T.K.Horizontal
                    })
                })]
            })
        }
        )
          , q = (0,
        i.PA)(e => {
            let {children: t} = e
              , s = (0,
            r.B7)()
              , i = (0,
            n.Pj)("Screen")
              , c = (0,
            n.Pj)("Game")
              , l = i.isFullscreen && c.isGameReady;
            return (0,
            a.jsxs)(G.default, {
                width: "100%",
                height: "100%",
                direction: s ? "row" : "column",
                sx: {
                    overflow: "hidden"
                },
                children: [(0,
                a.jsx)(o.default, {
                    flexGrow: +!!s,
                    height: "100%",
                    maxWidth: "100%",
                    children: t
                }), !i.isFullscreen && !c.isGameReady && (0,
                a.jsx)(o.default, {
                    width: s ? 160 : "100%",
                    height: s ? void 0 : 100,
                    overflow: "hidden",
                    sx: {
                        textAlign: "center"
                    },
                    children: (0,
                    a.jsx)("img", {
                        src: "/game-screenshot.png",
                        alt: "Game preview screenshot",
                        height: s ? void 0 : "100%",
                        width: s ? "100%" : void 0
                    })
                }), !l && s && c.isGameReady && (0,
                a.jsx)(o.default, {
                    width: 160,
                    height: "auto",
                    overflow: "hidden",
                    children: (0,
                    a.jsx)(R, {
                        height: "100%",
                        width: "100%",
                        advType: T.K.Vertical
                    })
                }), !l && !s && c.isGameReady && (0,
                a.jsx)(o.default, {
                    width: "100%",
                    height: 100,
                    overflow: "hidden",
                    children: (0,
                    a.jsx)(R, {
                        height: "100%",
                        width: "100%",
                        advType: T.K.HorizontalLarge
                    })
                })]
            })
        }
        )
          , F = (0,
        i.PA)(e => {
            let {ssrUserAgent: t, children: s} = e;
            return (0,
            c.a)(t) ? (0,
            a.jsx)(q, {
                children: s
            }) : (0,
            a.jsx)(J, {
                children: s
            })
        }
        );
        var P = s(94413)
          , H = s(35648)
          , N = s(73224)
          , z = s(66370)
          , O = s(27855)
          , V = s(55720)
          , W = s(84604);
        function B(e) {
            return (0,
            a.jsx)(O.A, {
                children: (0,
                a.jsxs)(o.default, {
                    position: "relative",
                    children: [(0,
                    a.jsx)(o.default, {
                        sx: {
                            opacity: 0,
                            height: 35
                        },
                        children: (0,
                        a.jsx)(W.j, {
                            ...e,
                            type: "icon",
                            theme: "outline",
                            shape: "circle"
                        })
                    }), (0,
                    a.jsx)(o.default, {
                        position: "absolute",
                        top: 0,
                        zIndex: 1,
                        sx: {
                            pointerEvents: "none"
                        },
                        children: "OK"
                    })]
                })
            })
        }
        let $ = (0,
        i.PA)( () => {
            let e = (0,
            V.aA)()
              , t = (0,
            I.useCallback)(t => {
                t.credential && e.onLoginSuccess(t.credential)
            }
            , [e.onLoginSuccess])
              , s = (0,
            I.useCallback)( () => {
                e.onLoginError(Error("Something went wrong!"))
            }
            , [e.onLoginError])
              , o = (0,
            I.useCallback)( () => {
                e.onLoginError(Error("User closed modal!"))
            }
            , [e.onLoginError]);
            return (0,
            a.jsxs)(P.A, {
                open: e.isShowModal,
                onClose: o,
                "aria-describedby": "continue-with-google-dialog-description",
                children: [(0,
                a.jsx)(H.A, {
                    children: (0,
                    a.jsx)(N.A, {
                        id: "continue-with-google-dialog-description",
                        children: "Continue with Google?"
                    })
                }), (0,
                a.jsxs)(z.A, {
                    children: [(0,
                    a.jsx)(O.A, {
                        onClick: o,
                        children: "Cancel"
                    }), (0,
                    a.jsx)(B, {
                        onSuccess: t,
                        onError: s
                    })]
                })]
            })
        }
        )
          , K = {
            gameToolbarContainer: {
                backgroundColor: e => e.palette.background.default
            },
            mobileGameContainer: (e, t, s) => e ? t ? {
                maxHeight: "calc(100% - 34px)",
                height: "100%",
                width: "100%",
                " > *": {
                    height: "100%",
                    width: "100%"
                },
                iframe: {
                    height: "100%",
                    width: "100%"
                }
            } : {
                height: "calc(100dvh - 34px - ".concat(s, "px - 4px)")
            } : {},
            desktopGameContainer: e => ({
                height: "calc(100% - 64px)",
                [e.breakpoints.down("sm")]: {
                    height: "calc(100% - 34px)"
                }
            }),
            gameFrameContainer: {
                maxWidth: "100%",
                maxHeight: "100%",
                width: "100%",
                height: "100%",
                position: "relative",
                display: "flex",
                iframe: {
                    borderWidth: 0
                }
            },
            gameFrameError: {
                height: "100%",
                width: "100%",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
            },
            rotateBanner: {
                position: "absolute",
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                backgroundColor: e => e.palette.background.paper
            }
        };
        var X = s(25789)
          , Q = s(37440)
          , Y = s(24288)
          , Z = s(97563)
          , ee = s(19735);
        let et = e => {
            let {ssrUserAgent: t, toggleFullscreenMode: s, isNextCloseFullscreen: i} = e
              , n = (0,
            X.default)()
              , r = (0,
            c.a)(t)
              , l = (0,
            _.A)(n.breakpoints.down("sm")) || r;
            return (0,
            a.jsx)(o.default, {
                sx: K.gameToolbarContainer,
                children: (0,
                a.jsxs)(G.default, {
                    direction: "row",
                    justifyContent: "space-between",
                    children: [(0,
                    a.jsxs)(G.default, {
                        direction: "row",
                        justifyContent: "start",
                        children: [(0,
                        a.jsx)(Q.A, {
                            href: "https://discord.gg/melonplayground",
                            target: "_blank",
                            children: (0,
                            a.jsx)(Y.A, {
                                size: l ? ee.l.Small : ee.l.Medium,
                                children: (0,
                                a.jsx)(Z.I, {
                                    size: l ? ee.l.Small : ee.l.XLarge,
                                    iconName: ee.$.Discord
                                })
                            })
                        }), (0,
                        a.jsx)(Q.A, {
                            href: "https://t.me/Melon_Playground_Official",
                            target: "_blank",
                            children: (0,
                            a.jsx)(Y.A, {
                                size: l ? ee.l.Small : ee.l.Medium,
                                children: (0,
                                a.jsx)(Z.I, {
                                    size: l ? ee.l.Small : ee.l.XLarge,
                                    iconName: ee.$.Telegram
                                })
                            })
                        })]
                    }), (0,
                    a.jsx)(o.default, {
                        children: (0,
                        a.jsx)(Y.A, {
                            size: l ? ee.l.Small : ee.l.Medium,
                            onClick: s,
                            children: (0,
                            a.jsx)(Z.I, {
                                size: l ? ee.l.Small : ee.l.XLarge,
                                iconName: i ? ee.$.MinimizeScreen : ee.$.MaximizeScreen
                            })
                        })
                    })]
                })
            })
        }
        ;
        var es = s(80317)
          , ea = s(87922)
          , eo = s(82932)
          , ei = s(56636);
        class en {
            initialize() {
                window.addEventListener("message", this.messageListener)
            }
            destroy() {
                window.removeEventListener("message", this.messageListener)
            }
            postMessage(e) {
                var t;
                if (!(null == (t = this.ref.current) ? void 0 : t.contentWindow))
                    return void this.logMessage(["Can not post message: window object is not found"], console.info);
                this.logMessage(["postMessage", {
                    ...e,
                    source: ei.W$.MelonWebApp
                }], console.info),
                this.ref.current.contentWindow.postMessage({
                    ...e,
                    source: ei.W$.MelonWebApp
                }, this.origin)
            }
            onReceiveMessage(e) {
                this.origin.includes(e.origin) && e.data.source === ei.W$.MelonWebGameApp && (this.logMessage(["Received message", e.data], console.info),
                this.parseMessage(e.data))
            }
            logMessage(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : console.log;
                t("%cMELON web app", eo.i8, ...e)
            }
            constructor(e, t, s) {
                (0,
                ea._)(this, "ref", void 0),
                (0,
                ea._)(this, "parseMessage", void 0),
                (0,
                ea._)(this, "origin", void 0),
                (0,
                ea._)(this, "messageListener", void 0),
                this.ref = e,
                this.parseMessage = t,
                this.origin = new URL(s).origin,
                this.messageListener = this.onReceiveMessage.bind(this)
            }
        }
        var er = function(e) {
            return e.RequestInitialData = "request-initial-data",
            e.ShowRewardedVideo = "show-rewarded-video",
            e.ShowFullscreenAdv = "show-fullscreen-adv",
            e
        }({})
          , ec = function(e) {
            return e.StateData = "state-data",
            e.ShowRewardedVideo = "show-rewarded-video",
            e.ShowFullscreenAdv = "show-fullscreen-adv",
            e
        }({})
          , el = function(e) {
            return e.Error = "error",
            e.Closed = "closed",
            e
        }({});
        class ed extends ei.Jl {
            onError(e) {
                this.communicator.postMessage({
                    module: ei.tJ.Adv,
                    event: ec.ShowFullscreenAdv,
                    type: el.Error,
                    data: {
                        id: this.id,
                        data: e
                    }
                }),
                this.handleDestroy()
            }
            onClosed() {
                this.communicator.postMessage({
                    module: ei.tJ.Adv,
                    event: ec.ShowFullscreenAdv,
                    type: el.Closed,
                    data: {
                        id: this.id
                    }
                }),
                this.handleDestroy()
            }
        }
        class eh {
            addNew(e) {
                let t = () => this.handleDestroyCycle(e)
                  , s = new ed(e,this.communicator,t,eo.aS);
                return this.fullscreenAdvCycles.set(e, s),
                s
            }
            handleDestroyCycle(e) {
                this.fullscreenAdvCycles.delete(e)
            }
            constructor(e) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "fullscreenAdvCycles", void 0),
                this.communicator = e,
                this.fullscreenAdvCycles = new Map
            }
        }
        class eu extends ei.Jl {
            onError(e) {
                this.communicator.postMessage({
                    module: ei.tJ.Adv,
                    event: ec.ShowRewardedVideo,
                    type: el.Error,
                    data: {
                        id: this.id,
                        data: e
                    }
                }),
                this.handleDestroy()
            }
            onClosed(e) {
                this.communicator.postMessage({
                    module: ei.tJ.Adv,
                    event: ec.ShowRewardedVideo,
                    type: el.Closed,
                    data: {
                        id: this.id,
                        data: e
                    }
                }),
                this.handleDestroy()
            }
        }
        class em {
            addNew(e) {
                let t = () => this.handleDestroyCycle(e)
                  , s = new eu(e,this.communicator,t,eo.aS);
                return this.rewardedVideoCycles.set(e, s),
                s
            }
            handleDestroyCycle(e) {
                this.rewardedVideoCycles.delete(e)
            }
            constructor(e) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "rewardedVideoCycles", void 0),
                this.communicator = e,
                this.rewardedVideoCycles = new Map
            }
        }
        class eg {
            setIsAvailable(e) {
                this.isAvailable = e
            }
            sentStateData(e) {
                this.communicator.postMessage({
                    module: ei.tJ.Adv,
                    event: ec.StateData,
                    data: {
                        id: e,
                        result: this.stateData
                    }
                })
            }
            get stateData() {
                return {
                    isAvailable: this.isAvailable
                }
            }
            constructor(e) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "isAvailable", void 0),
                this.communicator = e,
                this.isAvailable = !1
            }
        }
        var ev = s(37424);
        let ey = ev.Ay.object({
            module: ev.Ay.enum([ei.tJ.Adv]),
            event: ev.Ay.nativeEnum(er),
            data: ev.Ay.object({
                id: ev.Ay.number()
            })
        });
        class ep {
            setIsAvailable(e) {
                this.stateDataManager.setIsAvailable(e)
            }
            setupActions(e) {
                this.actions = e
            }
            sentStateData(e) {
                this.stateDataManager.sentStateData(null != e ? e : Date.now())
            }
            parseMessage(e) {
                try {
                    ey.parse(e)
                } catch (t) {
                    this.logMessage(["Invalid message format", t, e], console.error);
                    return
                }
                switch (e.event) {
                case er.RequestInitialData:
                    this.sentStateData(e.data.id);
                    break;
                case er.ShowRewardedVideo:
                    {
                        let t = this.rewardedVideoManager.addNew(e.data.id);
                        this.actions.showRewarded({
                            onError: t.onError.bind(t),
                            onClose: t.onClosed.bind(t)
                        })
                    }
                    break;
                case er.ShowFullscreenAdv:
                    {
                        let t = this.fullscreenAdvManager.addNew(e.data.id);
                        this.actions.showFullscreen({
                            onError: t.onError.bind(t),
                            onClose: t.onClosed.bind(t)
                        })
                    }
                    break;
                default:
                    this.logMessage(["Unknown event", e.event], console.error)
                }
            }
            logMessage(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : console.log;
                t("%cAdv Module", eo.i8, ...e)
            }
            constructor(e, t) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "actions", void 0),
                (0,
                ea._)(this, "rewardedVideoManager", void 0),
                (0,
                ea._)(this, "fullscreenAdvManager", void 0),
                (0,
                ea._)(this, "stateDataManager", void 0),
                this.communicator = e,
                this.actions = t,
                this.rewardedVideoManager = new em(this.communicator),
                this.fullscreenAdvManager = new eh(this.communicator),
                this.stateDataManager = new eg(this.communicator)
            }
        }
        var eA = function(e) {
            return e.RequestInitialData = "request-initial-data",
            e.RequestGoogleToken = "request-google-token",
            e.GetAuthData = "get-auth-data",
            e
        }({})
          , eb = function(e) {
            return e.StateData = "state-data",
            e.RequestGoogleToken = "request-google-token",
            e.GetAuthData = "get-auth-data",
            e.AuthListeners = "auth-listeners",
            e
        }({})
          , eC = function(e) {
            return e.Success = "success",
            e.Error = "error",
            e
        }({})
          , eM = function(e) {
            return e.Success = "success",
            e.Error = "error",
            e
        }({})
          , ew = function(e) {
            return e.AuthChangeStarted = "auth-change-started",
            e.AuthChangeCompleted = "auth-change-completed",
            e.AuthChangeFailed = "auth-change-failed",
            e
        }({});
        class eS {
            sentOnAuthChangeStarted(e) {
                this.communicator.postMessage({
                    module: ei.tJ.Auth,
                    event: eb.AuthListeners,
                    type: ew.AuthChangeStarted,
                    data: {
                        id: e
                    }
                })
            }
            sentOnAuthChangeCompleted(e, t) {
                this.communicator.postMessage({
                    module: ei.tJ.Auth,
                    event: eb.AuthListeners,
                    type: ew.AuthChangeCompleted,
                    data: {
                        id: e,
                        ...t
                    }
                })
            }
            sentOnAuthChangeFailed(e, t) {
                this.communicator.postMessage({
                    module: ei.tJ.Auth,
                    event: eb.AuthListeners,
                    type: ew.AuthChangeFailed,
                    data: {
                        id: e,
                        error: t
                    }
                })
            }
            constructor(e) {
                (0,
                ea._)(this, "communicator", void 0),
                this.communicator = e
            }
        }
        class eD extends ei.Jl {
            onSuccess(e) {
                this.communicator.postMessage({
                    module: ei.tJ.Auth,
                    event: eb.GetAuthData,
                    type: eC.Success,
                    data: {
                        id: this.id,
                        ...e
                    }
                }),
                this.handleDestroy()
            }
            onError(e) {
                this.communicator.postMessage({
                    module: ei.tJ.Auth,
                    event: eb.GetAuthData,
                    type: eC.Error,
                    data: {
                        id: this.id,
                        error: e
                    }
                }),
                this.handleDestroy()
            }
        }
        class ef {
            addNew(e) {
                let t = () => this.handleDestroyCycle(e)
                  , s = new eD(e,this.communicator,t);
                return this.cycles.set(e, s),
                s
            }
            handleDestroyCycle(e) {
                this.cycles.delete(e)
            }
            constructor(e) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "cycles", void 0),
                this.communicator = e,
                this.cycles = new Map
            }
        }
        class eE extends ei.Jl {
            onSuccess(e) {
                this.communicator.postMessage({
                    module: ei.tJ.Auth,
                    event: eb.RequestGoogleToken,
                    type: eM.Success,
                    data: {
                        id: this.id,
                        token: e
                    }
                }),
                this.handleDestroy()
            }
            onError(e) {
                this.communicator.postMessage({
                    module: ei.tJ.Auth,
                    event: eb.RequestGoogleToken,
                    type: eM.Error,
                    data: {
                        id: this.id,
                        error: e
                    }
                }),
                this.handleDestroy()
            }
        }
        class ex {
            addNew(e) {
                let t = () => this.handleDestroyCycle(e)
                  , s = new eE(e,this.communicator,t);
                return this.cycles.set(e, s),
                s
            }
            handleDestroyCycle(e) {
                this.cycles.delete(e)
            }
            constructor(e) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "cycles", void 0),
                this.communicator = e,
                this.cycles = new Map
            }
        }
        class eI {
            setDeviceId(e) {
                this.deviceId = e
            }
            setIsGoogleAvailable(e) {
                this.isGoogleAvailable = e
            }
            sentStateData(e) {
                this.communicator.postMessage({
                    module: ei.tJ.Auth,
                    event: eb.StateData,
                    data: {
                        id: e,
                        result: this.stateData
                    }
                })
            }
            get stateData() {
                return {
                    isGoogleAvailable: this.isGoogleAvailable,
                    deviceId: this.deviceId
                }
            }
            constructor(e) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "deviceId", void 0),
                (0,
                ea._)(this, "isGoogleAvailable", void 0),
                this.communicator = e,
                this.isGoogleAvailable = !1
            }
        }
        let e_ = ev.Ay.object({
            module: ev.Ay.enum([ei.tJ.Auth]),
            event: ev.Ay.nativeEnum(eA),
            data: ev.Ay.object({
                id: ev.Ay.number()
            })
        });
        class eG {
            setDeviceId(e) {
                this.stateDataManager.setDeviceId(e)
            }
            setIsGoogleAvailable(e) {
                this.stateDataManager.setIsGoogleAvailable(e)
            }
            setupActions(e) {
                this.actions = e
            }
            sentStateData(e) {
                this.stateDataManager.sentStateData(null != e ? e : Date.now())
            }
            sentOnAuthChangeStarted() {
                this.authListenersManager.sentOnAuthChangeStarted(Date.now())
            }
            sentOnAuthChangeCompleted(e) {
                this.authListenersManager.sentOnAuthChangeCompleted(Date.now(), e)
            }
            sentOnAuthChangeFailed(e) {
                this.authListenersManager.sentOnAuthChangeFailed(Date.now(), e)
            }
            parseMessage(e) {
                try {
                    e_.parse(e)
                } catch (t) {
                    this.logMessage(["Invalid message format", t, e], console.error);
                    return
                }
                switch (e.event) {
                case eA.RequestInitialData:
                    this.sentStateData(e.data.id);
                    break;
                case eA.RequestGoogleToken:
                    this.handleRequestGoogleToken(e);
                    break;
                case eA.GetAuthData:
                    this.handleGetAuthData(e)
                }
            }
            handleRequestGoogleToken(e) {
                let t = this.requestGoogleTokenManager.addNew(e.data.id);
                this.actions.requestGoogleToken({
                    onSuccess: t.onSuccess.bind(t),
                    onError: t.onError.bind(t)
                })
            }
            handleGetAuthData(e) {
                let t = this.getTokenManager.addNew(e.data.id);
                this.actions.getAuthData({
                    onSuccess: t.onSuccess.bind(t),
                    onError: t.onError.bind(t)
                })
            }
            logMessage(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : console.log;
                t("%cAuth Module", eo.i8, ...e)
            }
            constructor(e, t) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "actions", void 0),
                (0,
                ea._)(this, "requestGoogleTokenManager", void 0),
                (0,
                ea._)(this, "getTokenManager", void 0),
                (0,
                ea._)(this, "stateDataManager", void 0),
                (0,
                ea._)(this, "authListenersManager", void 0),
                this.communicator = e,
                this.actions = t,
                this.requestGoogleTokenManager = new ex(this.communicator),
                this.getTokenManager = new ef(this.communicator),
                this.stateDataManager = new eI(this.communicator),
                this.authListenersManager = new eS(this.communicator)
            }
        }
        var ek = function(e) {
            return e.AppsFlyer = "apps-flyer",
            e.GoogleTag = "google-tag",
            e
        }({})
          , ej = function(e) {
            return e.RequestInitialData = "request-initial-data",
            e.SetCustomerUserId = "set-customer-user-id",
            e.SetEvent = "set-event",
            e
        }({})
          , eT = function(e) {
            return e.StateData = "state-data",
            e.SetCustomerUserId = "set-customer-user-id",
            e.SetEvent = "set-event",
            e
        }({})
          , eU = function(e) {
            return e.Success = "success",
            e.Error = "error",
            e
        }({})
          , eR = function(e) {
            return e.Success = "success",
            e.Error = "error",
            e
        }({});
        class eL extends ei.Jl {
            onSuccess() {
                this.communicator.postMessage({
                    module: ei.tJ.EventTracker,
                    submodule: ek.AppsFlyer,
                    event: eT.SetCustomerUserId,
                    type: eU.Success,
                    data: {
                        id: this.id
                    }
                }),
                this.handleDestroy()
            }
            onError(e) {
                this.communicator.postMessage({
                    module: ei.tJ.EventTracker,
                    submodule: ek.AppsFlyer,
                    event: eT.SetCustomerUserId,
                    type: eU.Error,
                    data: {
                        id: this.id,
                        error: e
                    }
                }),
                this.handleDestroy()
            }
        }
        class eJ {
            addNew(e) {
                let t = () => this.handleDestroyCycle(e)
                  , s = new eL(e,this.communicator,t);
                return this.cycles.set(e, s),
                s
            }
            handleDestroyCycle(e) {
                this.cycles.delete(e)
            }
            constructor(e) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "cycles", void 0),
                this.communicator = e,
                this.cycles = new Map
            }
        }
        class eq extends ei.Jl {
            onSuccess() {
                this.communicator.postMessage({
                    module: ei.tJ.EventTracker,
                    submodule: ek.AppsFlyer,
                    event: eT.SetEvent,
                    type: eR.Success,
                    data: {
                        id: this.id
                    }
                }),
                this.handleDestroy()
            }
            onError(e) {
                this.communicator.postMessage({
                    module: ei.tJ.EventTracker,
                    submodule: ek.AppsFlyer,
                    event: eT.SetEvent,
                    type: eR.Error,
                    data: {
                        id: this.id,
                        error: e
                    }
                }),
                this.handleDestroy()
            }
        }
        class eF {
            addNew(e) {
                let t = () => this.handleDestroyCycle(e)
                  , s = new eq(e,this.communicator,t);
                return this.cycles.set(e, s),
                s
            }
            handleDestroyCycle(e) {
                this.cycles.delete(e)
            }
            constructor(e) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "cycles", void 0),
                this.communicator = e,
                this.cycles = new Map
            }
        }
        class eP {
            setIsAvailable(e) {
                this.isAvailable = e
            }
            sentStateData(e) {
                this.communicator.postMessage({
                    module: ei.tJ.EventTracker,
                    submodule: ek.AppsFlyer,
                    event: eT.StateData,
                    data: {
                        id: e,
                        result: this.stateData
                    }
                })
            }
            get stateData() {
                return {
                    isAvailable: this.isAvailable
                }
            }
            constructor(e) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "isAvailable", void 0),
                this.communicator = e,
                this.isAvailable = !1
            }
        }
        let eH = ev.Ay.object({
            module: ev.Ay.enum([ei.tJ.EventTracker]),
            submodule: ev.Ay.enum([ek.AppsFlyer]),
            event: ev.Ay.nativeEnum(ej),
            data: ev.Ay.object({
                id: ev.Ay.number()
            })
        });
        class eN {
            setIsAvailable(e) {
                this.stateDataManager.setIsAvailable(e)
            }
            setupActions(e) {
                this.actions = e
            }
            sentStateData(e) {
                this.stateDataManager.sentStateData(null != e ? e : Date.now())
            }
            parseMessage(e) {
                try {
                    eH.parse(e)
                } catch (t) {
                    this.logMessage(["Invalid message format", t, e], console.error);
                    return
                }
                switch (e.event) {
                case ej.RequestInitialData:
                    this.sentStateData(e.data.id);
                    break;
                case ej.SetCustomerUserId:
                    try {
                        let t;
                        t = e.data,
                        ev.Ay.object({
                            id: ev.Ay.number(),
                            userId: ev.Ay.string()
                        }).parse(t)
                    } catch (t) {
                        this.logMessage(["Invalid message data format", t, e.data], console.error);
                        return
                    }
                    this.handleSetCustomerUserId(e);
                    break;
                case ej.SetEvent:
                    try {
                        let t;
                        t = e.data,
                        ev.Ay.object({
                            id: ev.Ay.number(),
                            data: ev.Ay.object({
                                eventName: ev.Ay.string(),
                                eventValue: ev.Ay.any().optional(),
                                eventKey: ev.Ay.string().optional()
                            })
                        }).parse(t)
                    } catch (t) {
                        this.logMessage(["Invalid message data format", t, e.data], console.error);
                        return
                    }
                    this.handleSetEvent(e)
                }
            }
            handleSetCustomerUserId(e) {
                let t = this.setCustomerUserIdManager.addNew(e.data.id);
                this.actions.setCustomerUserId(e.data.userId, {
                    onSuccess: t.onSuccess.bind(t),
                    onError: t.onError.bind(t)
                })
            }
            handleSetEvent(e) {
                let t = this.setEventManager.addNew(e.data.id);
                this.actions.setEvent(e.data.data, {
                    onSuccess: t.onSuccess.bind(t),
                    onError: t.onError.bind(t)
                })
            }
            logMessage(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : console.log;
                t("%cAppsFlyer Submodule", eo.i8, ...e)
            }
            constructor(e, t) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "actions", void 0),
                (0,
                ea._)(this, "setCustomerUserIdManager", void 0),
                (0,
                ea._)(this, "setEventManager", void 0),
                (0,
                ea._)(this, "stateDataManager", void 0),
                this.communicator = e,
                this.actions = t,
                this.setCustomerUserIdManager = new eJ(this.communicator),
                this.setEventManager = new eF(this.communicator),
                this.stateDataManager = new eP(this.communicator)
            }
        }
        var ez = function(e) {
            return e.RequestInitialData = "request-initial-data",
            e.SetCustomerUserId = "set-customer-user-id",
            e.SetEvent = "set-event",
            e
        }({})
          , eO = function(e) {
            return e.StateData = "state-data",
            e.SetCustomerUserId = "set-customer-user-id",
            e.SetEvent = "set-event",
            e
        }({})
          , eV = function(e) {
            return e.Success = "success",
            e.Error = "error",
            e
        }({})
          , eW = function(e) {
            return e.Success = "success",
            e.Error = "error",
            e
        }({});
        class eB extends ei.Jl {
            onSuccess() {
                this.communicator.postMessage({
                    module: ei.tJ.EventTracker,
                    submodule: ek.GoogleTag,
                    event: eO.SetCustomerUserId,
                    type: eV.Success,
                    data: {
                        id: this.id
                    }
                }),
                this.handleDestroy()
            }
            onError(e) {
                this.communicator.postMessage({
                    module: ei.tJ.EventTracker,
                    submodule: ek.GoogleTag,
                    event: eO.SetCustomerUserId,
                    type: eV.Error,
                    data: {
                        id: this.id,
                        error: e
                    }
                }),
                this.handleDestroy()
            }
        }
        class e$ {
            addNew(e) {
                let t = () => this.handleDestroyCycle(e)
                  , s = new eB(e,this.communicator,t);
                return this.cycles.set(e, s),
                s
            }
            handleDestroyCycle(e) {
                this.cycles.delete(e)
            }
            constructor(e) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "cycles", void 0),
                this.communicator = e,
                this.cycles = new Map
            }
        }
        class eK extends ei.Jl {
            onSuccess() {
                this.communicator.postMessage({
                    module: ei.tJ.EventTracker,
                    submodule: ek.GoogleTag,
                    event: eO.SetEvent,
                    type: eW.Success,
                    data: {
                        id: this.id
                    }
                }),
                this.handleDestroy()
            }
            onError(e) {
                this.communicator.postMessage({
                    module: ei.tJ.EventTracker,
                    submodule: ek.GoogleTag,
                    event: eO.SetEvent,
                    type: eW.Error,
                    data: {
                        id: this.id,
                        error: e
                    }
                }),
                this.handleDestroy()
            }
        }
        class eX {
            addNew(e) {
                let t = () => this.handleDestroyCycle(e)
                  , s = new eK(e,this.communicator,t);
                return this.cycles.set(e, s),
                s
            }
            handleDestroyCycle(e) {
                this.cycles.delete(e)
            }
            constructor(e) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "cycles", void 0),
                this.communicator = e,
                this.cycles = new Map
            }
        }
        class eQ {
            setIsAvailable(e) {
                this.isAvailable = e
            }
            sentStateData(e) {
                this.communicator.postMessage({
                    module: ei.tJ.EventTracker,
                    submodule: ek.GoogleTag,
                    event: eO.StateData,
                    data: {
                        id: e,
                        result: this.stateData
                    }
                })
            }
            get stateData() {
                return {
                    isAvailable: this.isAvailable
                }
            }
            constructor(e) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "isAvailable", void 0),
                this.communicator = e,
                this.isAvailable = !1
            }
        }
        let eY = ev.Ay.object({
            module: ev.Ay.enum([ei.tJ.EventTracker]),
            submodule: ev.Ay.enum([ek.GoogleTag]),
            event: ev.Ay.nativeEnum(ez),
            data: ev.Ay.object({
                id: ev.Ay.number()
            })
        });
        class eZ {
            setIsAvailable(e) {
                this.stateDataManager.setIsAvailable(e)
            }
            setupActions(e) {
                this.actions = e
            }
            sentStateData(e) {
                this.stateDataManager.sentStateData(null != e ? e : Date.now())
            }
            parseMessage(e) {
                try {
                    eY.parse(e)
                } catch (t) {
                    this.logMessage(["Invalid message format", t, e], console.error);
                    return
                }
                switch (e.event) {
                case ez.RequestInitialData:
                    this.sentStateData(e.data.id);
                    break;
                case ez.SetCustomerUserId:
                    try {
                        let t;
                        t = e.data,
                        ev.Ay.object({
                            id: ev.Ay.number(),
                            userId: ev.Ay.string()
                        }).parse(t)
                    } catch (t) {
                        this.logMessage(["Invalid message data format", t, e.data], console.error);
                        return
                    }
                    this.handleSetCustomerUserId(e);
                    break;
                case ez.SetEvent:
                    try {
                        let t;
                        t = e.data,
                        ev.Ay.object({
                            id: ev.Ay.number(),
                            eventParameters: ev.Ay.any()
                        }).parse(t)
                    } catch (t) {
                        this.logMessage(["Invalid message data format", t, e.data], console.error);
                        return
                    }
                    this.handleSetEvent(e)
                }
            }
            handleSetCustomerUserId(e) {
                let t = this.setCustomerUserIdManager.addNew(e.data.id);
                this.actions.setCustomerUserId(e.data.userId, {
                    onSuccess: t.onSuccess.bind(t),
                    onError: t.onError.bind(t)
                })
            }
            handleSetEvent(e) {
                let t = this.setEventManager.addNew(e.data.id);
                this.actions.setEvent(e.data.eventParameters, {
                    onSuccess: t.onSuccess.bind(t),
                    onError: t.onError.bind(t)
                })
            }
            logMessage(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : console.log;
                t("%cGoogleTag Submodule", eo.i8, ...e)
            }
            constructor(e, t) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "actions", void 0),
                (0,
                ea._)(this, "setCustomerUserIdManager", void 0),
                (0,
                ea._)(this, "setEventManager", void 0),
                (0,
                ea._)(this, "stateDataManager", void 0),
                this.communicator = e,
                this.actions = t,
                this.setCustomerUserIdManager = new e$(this.communicator),
                this.setEventManager = new eX(this.communicator),
                this.stateDataManager = new eQ(this.communicator)
            }
        }
        let e0 = ev.Ay.object({
            module: ev.Ay.enum([ei.tJ.EventTracker]),
            submodule: ev.Ay.nativeEnum(ek),
            data: ev.Ay.object({
                id: ev.Ay.number()
            })
        });
        class e1 {
            parseMessage(e) {
                try {
                    e0.parse(e)
                } catch (t) {
                    this.logMessage(["Invalid message format", t, e], console.error);
                    return
                }
                switch (e.submodule) {
                case ek.AppsFlyer:
                    this.appsFlyer.parseMessage(e);
                    break;
                case ek.GoogleTag:
                    this.googleTag.parseMessage(e)
                }
            }
            logMessage(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : console.log;
                t("%cEvent Tracker Module", eo.i8, ...e)
            }
            constructor(e, t) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "appsFlyer", void 0),
                (0,
                ea._)(this, "googleTag", void 0),
                this.communicator = e,
                this.appsFlyer = new eN(this.communicator,t.appsFlyer),
                this.googleTag = new eZ(this.communicator,t.googleTag)
            }
        }
        var e8 = s(67668)
          , e6 = function(e) {
            return e.Hello = "hello",
            e
        }({})
          , e4 = function(e) {
            return e.Start = "start",
            e.Success = "success",
            e
        }({})
          , e5 = function(e) {
            return e.Hello = "hello",
            e.ModulesInitialized = "modules-initialized",
            e
        }({})
          , e3 = function(e) {
            return e.Start = "start",
            e.Success = "success",
            e
        }({});
        class e2 {
            parseMessage(e) {
                e.type === e4.Success && this.data.onSuccess(),
                this.handleDestroy()
            }
            constructor(e, t) {
                (0,
                ea._)(this, "data", void 0),
                (0,
                ea._)(this, "handleDestroy", void 0),
                this.data = e,
                this.handleDestroy = t
            }
        }
        class e7 {
            start(e) {
                let t = Date.now();
                return this.cycle = new e2(e, () => this.handleDestroyCycle()),
                this.intervalId = setInterval( () => {
                    this.sentHelloMessage(t)
                }
                , 1e3),
                this.timeoutId = setTimeout( () => {
                    e.onTimeout(),
                    this.handleDestroyCycle()
                }
                , 36e5),
                t
            }
            destroy() {
                this.handleDestroyCycle()
            }
            parseMessage(e) {
                switch (e.type) {
                case e4.Start:
                    this.handleReceiveStart(e);
                    break;
                case e4.Success:
                    this.cycle && this.cycle.parseMessage(e)
                }
            }
            handleReceiveStart(e) {
                this.communicator.postMessage({
                    module: ei.tJ.Global,
                    event: e5.Hello,
                    type: e3.Success,
                    data: {
                        id: e.data.id
                    }
                })
            }
            sentHelloMessage(e) {
                this.communicator.postMessage({
                    module: ei.tJ.Global,
                    event: e5.Hello,
                    type: e3.Start,
                    data: {
                        id: e
                    }
                })
            }
            handleDestroyCycle() {
                delete this.cycle,
                this.intervalId && clearInterval(this.intervalId),
                this.timeoutId && clearTimeout(this.timeoutId)
            }
            constructor(e) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "cycle", void 0),
                (0,
                ea._)(this, "intervalId", void 0),
                (0,
                ea._)(this, "timeoutId", void 0),
                this.communicator = e
            }
        }
        let e9 = ev.Ay.object({
            module: ev.Ay.enum([ei.tJ.Global]),
            event: ev.Ay.nativeEnum(e6),
            type: ev.Ay.nativeEnum(e4),
            data: ev.Ay.object({
                id: ev.Ay.number()
            })
        });
        class te {
            initialize() {
                this.isConnectedToGame = this.createConnectionToGame(),
                this.helloManager.start({
                    onSuccess: this.setIsConnectedToGame.bind(this),
                    onTimeout: this.setIsConnectedToGameFailed.bind(this)
                })
            }
            destroy() {
                this.helloManager.destroy(),
                this.setIsConnectedToGameFailed()
            }
            parseMessage(e) {
                try {
                    e9.parse(e)
                } catch (t) {
                    this.logMessage(["Invalid message format", t, e], console.error);
                    return
                }
                e.event === e6.Hello && this.helloManager.parseMessage(e)
            }
            sentModulesInitializedMessage(e) {
                this.communicator.postMessage({
                    module: ei.tJ.Global,
                    event: e5.ModulesInitialized,
                    data: {
                        id: Date.now(),
                        ...e
                    }
                })
            }
            createConnectionToGame() {
                return this.setIsConnectedToGameFailed && this.setIsConnectedToGameFailed(),
                new Promise( (e, t) => {
                    this.setIsConnectedToGame = e,
                    this.setIsConnectedToGameFailed = t
                }
                )
            }
            logMessage(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : console.log;
                t("%cGlobal Module", eo.i8, ...e)
            }
            constructor(e) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "helloManager", void 0),
                (0,
                ea._)(this, "isConnectedToGame", void 0),
                (0,
                ea._)(this, "setIsConnectedToGame", void 0),
                (0,
                ea._)(this, "setIsConnectedToGameFailed", void 0),
                this.communicator = e,
                this.isConnectedToGame = this.createConnectionToGame(),
                this.setIsConnectedToGame = () => {}
                ,
                this.setIsConnectedToGameFailed = () => {}
                ,
                this.helloManager = new e7(this.communicator)
            }
        }
        var tt = function(e) {
            return e.RequestInitialData = "request-initial-data",
            e.RequestChangeHost = "request-change-host",
            e
        }({})
          , ts = function(e) {
            return e.StateData = "state-data",
            e
        }({});
        class ta {
            setStateData(e) {
                this.stateData = e
            }
            sentStateData(e) {
                this.communicator.postMessage({
                    module: ei.tJ.Host,
                    event: ts.StateData,
                    data: {
                        id: e,
                        result: this.stateData
                    }
                })
            }
            constructor(e) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "stateData", void 0),
                this.communicator = e
            }
        }
        let to = ev.Ay.object({
            module: ev.Ay.enum([ei.tJ.Host]),
            event: ev.Ay.enum([tt.RequestChangeHost]),
            data: ev.Ay.object({
                id: ev.Ay.number(),
                host: ev.Ay.string()
            })
        })
          , ti = ev.Ay.object({
            module: ev.Ay.enum([ei.tJ.Host]),
            event: ev.Ay.nativeEnum(tt),
            data: ev.Ay.object({
                id: ev.Ay.number()
            })
        });
        class tn {
            setupActions(e) {
                this.actions = e
            }
            setStateData(e) {
                this.stateDataManager.setStateData(e)
            }
            sentStateData(e) {
                this.stateDataManager.sentStateData(null != e ? e : Date.now())
            }
            parseMessage(e) {
                try {
                    ti.parse(e)
                } catch (t) {
                    this.logMessage(["Invalid message format", t, e], console.error);
                    return
                }
                switch (e.event) {
                case tt.RequestInitialData:
                    this.sentStateData(e.data.id);
                    break;
                case tt.RequestChangeHost:
                    this.handleRequestChangeHost(e)
                }
            }
            handleRequestChangeHost(e) {
                try {
                    to.parse(e)
                } catch (t) {
                    this.logMessage(["Invalid message format", t, e], console.error);
                    return
                }
                this.actions.requestChangeHost(e.data.host)
            }
            logMessage(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : console.log;
                t("%cHost Module", eo.i8, ...e)
            }
            constructor(e, t) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "actions", void 0),
                (0,
                ea._)(this, "stateDataManager", void 0),
                this.communicator = e,
                this.actions = t,
                this.stateDataManager = new ta(this.communicator)
            }
        }
        var tr = function(e) {
            return e.RequestInitialData = "request-initial-data",
            e.RequestChangeLanguage = "request-change-language",
            e
        }({})
          , tc = function(e) {
            return e.StateData = "state-data",
            e.RequestChangeLanguage = "request-change-language",
            e.LanguageChanged = "language-changed",
            e
        }({})
          , tl = function(e) {
            return e.Success = "success",
            e.Error = "error",
            e
        }({});
        class td {
            sentLanguageChanged(e, t) {
                this.communicator.postMessage({
                    module: ei.tJ.Settings,
                    event: tc.LanguageChanged,
                    data: {
                        id: e,
                        language: t
                    }
                })
            }
            constructor(e) {
                (0,
                ea._)(this, "communicator", void 0),
                this.communicator = e
            }
        }
        class th extends ei.Jl {
            onSuccess(e) {
                this.communicator.postMessage({
                    module: ei.tJ.Settings,
                    event: tc.RequestChangeLanguage,
                    type: tl.Success,
                    data: {
                        id: this.id,
                        language: e
                    }
                }),
                this.handleDestroy()
            }
            onError() {
                this.communicator.postMessage({
                    module: ei.tJ.Auth,
                    event: tc.RequestChangeLanguage,
                    type: tl.Error,
                    data: {
                        id: this.id
                    }
                }),
                this.handleDestroy()
            }
        }
        class tu {
            addNew(e) {
                let t = () => this.handleDestroyCycle(e)
                  , s = new th(e,this.communicator,t);
                return this.cycles.set(e, s),
                s
            }
            handleDestroyCycle(e) {
                this.cycles.delete(e)
            }
            constructor(e) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "cycles", void 0),
                this.communicator = e,
                this.cycles = new Map
            }
        }
        class tm {
            setLanguage(e) {
                this.language = e
            }
            sentStateData(e) {
                this.communicator.postMessage({
                    module: ei.tJ.Settings,
                    event: tc.StateData,
                    data: {
                        id: e,
                        result: this.stateData
                    }
                })
            }
            get stateData() {
                return {
                    language: this.language
                }
            }
            constructor(e) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "language", void 0),
                this.communicator = e
            }
        }
        var tg = s(36216);
        let tv = ev.Ay.object({
            module: ev.Ay.enum([ei.tJ.Settings]),
            event: ev.Ay.enum([tr.RequestChangeLanguage]),
            data: ev.Ay.object({
                id: ev.Ay.number(),
                language: ev.Ay.nativeEnum(tg.M)
            })
        })
          , ty = ev.Ay.object({
            module: ev.Ay.enum([ei.tJ.Settings]),
            event: ev.Ay.nativeEnum(tr),
            data: ev.Ay.object({
                id: ev.Ay.number()
            })
        });
        class tp {
            setLanguage(e) {
                this.stateDataManager.setLanguage(e)
            }
            setupActions(e) {
                this.actions = e
            }
            sentStateData(e) {
                this.stateDataManager.sentStateData(null != e ? e : Date.now())
            }
            sentLanguageChanged(e) {
                this.settingsListenersManager.sentLanguageChanged(Date.now(), e)
            }
            parseMessage(e) {
                try {
                    ty.parse(e)
                } catch (t) {
                    this.logMessage(["Invalid message format", t, e], console.error);
                    return
                }
                switch (e.event) {
                case tr.RequestInitialData:
                    this.sentStateData(e.data.id);
                    break;
                case tr.RequestChangeLanguage:
                    this.handleRequestChangeLanguage(e)
                }
            }
            handleRequestChangeLanguage(e) {
                try {
                    tv.parse(e)
                } catch (t) {
                    this.logMessage(["Invalid message format", t, e], console.error);
                    return
                }
                let t = this.requestChangeLanguageManager.addNew(e.data.id);
                this.actions.requestChangeLanguage(e.data.language, {
                    onSuccess: t.onSuccess.bind(t),
                    onError: t.onError.bind(t)
                })
            }
            logMessage(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : console.log;
                t("%cSettings Module", eo.i8, ...e)
            }
            constructor(e, t) {
                (0,
                ea._)(this, "communicator", void 0),
                (0,
                ea._)(this, "actions", void 0),
                (0,
                ea._)(this, "requestChangeLanguageManager", void 0),
                (0,
                ea._)(this, "stateDataManager", void 0),
                (0,
                ea._)(this, "settingsListenersManager", void 0),
                this.communicator = e,
                this.actions = t,
                this.stateDataManager = new tm(this.communicator),
                this.requestChangeLanguageManager = new tu(this.communicator),
                this.settingsListenersManager = new td(this.communicator)
            }
        }
        var tA = s(95867);
        let tb = ev.Ay.object({
            module: ev.Ay.nativeEnum(ei.tJ),
            source: ev.Ay.enum([ei.W$.MelonWebGameApp])
        });
        class tC {
            startCommunication() {
                this.communicator.initialize(),
                this.global.initialize()
            }
            stopCommunication() {
                this.communicator.destroy(),
                this.global.destroy()
            }
            async initialize() {
                await this.global.isConnectedToGame.then( () => {
                    this.global.sentModulesInitializedMessage({
                        hostModuleCreated: !!this.host
                    })
                }
                ).catch( () => {}
                )
            }
            destroy() {
                this.stopCommunication()
            }
            parseMessage(e) {
                try {
                    tb.parse(e)
                } catch (t) {
                    this.logMessage(["Invalid message format", t, e], console.error);
                    return
                }
                switch (e.module) {
                case ei.tJ.Adv:
                    this.adv.parseMessage(e);
                    break;
                case ei.tJ.Global:
                    this.global.parseMessage(e);
                    break;
                case ei.tJ.EventTracker:
                    this.eventTracker.parseMessage(e);
                    break;
                case ei.tJ.Auth:
                    this.auth.parseMessage(e);
                    break;
                case ei.tJ.GameEvents:
                    this.gameEvents.parseMessage(e);
                    break;
                case ei.tJ.Settings:
                    this.settings.parseMessage(e);
                    break;
                case ei.tJ.Store:
                    this.store.parseMessage(e);
                    break;
                case ei.tJ.Host:
                    this.host ? this.host.parseMessage(e) : this.logMessage(["Host module is not available"], console.error)
                }
            }
            logMessage(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : console.log;
                t("%cGame Bridge", eo.i8, ...e)
            }
            constructor(e, t, s) {
                (0,
                ea._)(this, "ref", void 0),
                (0,
                ea._)(this, "frameLink", void 0),
                (0,
                ea._)(this, "adv", void 0),
                (0,
                ea._)(this, "eventTracker", void 0),
                (0,
                ea._)(this, "auth", void 0),
                (0,
                ea._)(this, "gameEvents", void 0),
                (0,
                ea._)(this, "settings", void 0),
                (0,
                ea._)(this, "store", void 0),
                (0,
                ea._)(this, "host", void 0),
                (0,
                ea._)(this, "global", void 0),
                (0,
                ea._)(this, "communicator", void 0),
                this.ref = e,
                this.frameLink = t,
                this.communicator = new en(this.ref,this.parseMessage.bind(this),this.frameLink),
                this.global = new te(this.communicator),
                this.adv = new ep(this.communicator,eo.UU.adv),
                this.eventTracker = new e1(this.communicator,eo.UU.eventTracker),
                this.auth = new eG(this.communicator,eo.UU.auth),
                this.gameEvents = new e8.yl(this.communicator,eo.UU.gameEvents),
                this.settings = new tp(this.communicator,eo.UU.settings),
                this.store = new tA.md(this.communicator,eo.UU.store),
                s && (this.host = new tn(this.communicator,eo.UU.host))
            }
        }
        let tM = (0,
        i.PA)(function(e) {
            let t = (0,
            I.useRef)(null)
              , [s] = (0,
            I.useState)(new tC(t,e.gameLink,{
                host: !!e.hostConfig
            }))
              , i = (0,
            w.useInitializeGameBridgeUseCase)(s);
            return (0,
            S.useSaveGameOnPageUseCase)(),
            (0,
            E.useUpdateAuthStateDataUseCase)(s),
            (0,
            D.useUpdateAdvStateDataAfterScriptLoadedUseCase)(s),
            (0,
            f.useUpdateAppsFlyerStateDataAfterScriptLoadedUseCase)(s),
            (0,
            x.useUpdateGoogleTagStateDataAfterScriptLoadedUseCase)(s),
            (0,
            I.useEffect)( () => {
                i(e.hostConfig)
            }
            , []),
            (0,
            h.useConnectGameToAdvCallbacksUseCase)(s),
            (0,
            g.useConnectGameToAuthChangeEventsUseCase)(s),
            (0,
            u.useConnectGameToAppsFlyerCallbacksUseCase)(s),
            (0,
            C.useConnectGameToTagManagerCallbacksUseCase)(s),
            (0,
            m.useConnectGameToAuthCallbacksUseCase)(s),
            (0,
            M.useConnectGameToTrackGameStepsUseCase)(s),
            (0,
            p.useConnectGameToSettingsCallbacksUseCase)(s),
            (0,
            y.useConnectGameToInGameActionsUseCase)(s),
            (0,
            A.useConnectGameToStoreCallbacksUseCase)(s),
            (0,
            b.useConnectGameToStoreWalletCoinsChangeUseCase)(s),
            (0,
            v.useConnectGameToHostActionsUseCase)(s),
            (0,
            a.jsxs)(o.default, {
                sx: K.gameFrameContainer,
                children: [(0,
                a.jsx)("iframe", {
                    width: "100%",
                    height: "100%",
                    rel: "nofollow",
                    "referrer-policy": "no-referrer",
                    allow: "accelerometer; gyroscope; clipboard-read; clipboard-write;",
                    src: e.gameLink,
                    ref: t
                }), e.isShowRotateBanner && (0,
                a.jsx)(o.default, {
                    sx: K.rotateBanner,
                    children: (0,
                    a.jsxs)(G.default, {
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        gap: 2,
                        children: [(0,
                        a.jsx)(es.A, {
                            variant: "h3",
                            children: "Rotate your device"
                        }), (0,
                        a.jsx)(es.A, {
                            variant: "h6",
                            color: "textSecondary",
                            align: "center",
                            children: "The game only works in horizontal orientation."
                        }), e.isRotateAvailable && (0,
                        a.jsx)(O.A, {
                            variant: "contained",
                            color: "success",
                            onClick: e.onClickPlay,
                            children: "Play"
                        })]
                    })
                })]
            })
        })
          , tw = (0,
        i.PA)(e => {
            var t, s, i;
            let h = (0,
            n.Pj)("Screen")
              , u = (0,
            c.a)(e.ssrUserAgent)
              , m = (0,
            r.hu)(e.ssrUserAgent)
              , g = (0,
            d.useAutorotateUseCase)(e.ssrUserAgent);
            return (0,
            l.useDisableFullscreenAfterLeavingGameUseCase)(),
            (0,
            a.jsxs)(o.default, {
                sx: h.isFullscreen ? {
                    position: "fixed",
                    top: "".concat(null != (t = h.layoutHeaderHeight) ? t : 48, "px"),
                    left: 0,
                    right: 0,
                    bottom: 0
                } : {
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                },
                children: [(0,
                a.jsxs)(F, {
                    ssrUserAgent: e.ssrUserAgent,
                    children: [(0,
                    a.jsx)(o.default, {
                        sx: u ? K.mobileGameContainer(null != m && m, null != (s = h.isFullscreen) && s, null != (i = h.layoutHeaderHeight) ? i : 48) : K.desktopGameContainer,
                        children: e.gameLink ? (0,
                        a.jsx)(tM, {
                            gameLink: e.gameLink,
                            isShowRotateBanner: g.isShowRotateBanner,
                            isRotateAvailable: g.isRotateAvailable,
                            onClickPlay: g.openFullscreenAndRotate,
                            hostConfig: e.hostConfig
                        }) : (0,
                        a.jsx)(o.default, {
                            sx: K.gameFrameContainer,
                            children: (0,
                            a.jsxs)(o.default, {
                                sx: K.gameFrameError,
                                children: ["GAME ERROR", (0,
                                a.jsx)("br", {}), "Please contact support team"]
                            })
                        })
                    }), (0,
                    a.jsx)(et, {
                        ssrUserAgent: e.ssrUserAgent,
                        isNextCloseFullscreen: g.isNextCloseFullscreen,
                        toggleFullscreenMode: g.toggleFullscreenMode
                    })]
                }), (0,
                a.jsx)($, {})]
            })
        }
        )
    }
    ,
    96373: (e, t, s) => {
        Promise.resolve().then(s.bind(s, 8149)),
        Promise.resolve().then(s.bind(s, 15300)),
        Promise.resolve().then(s.bind(s, 68294)),
        Promise.resolve().then(s.bind(s, 84104)),
        Promise.resolve().then(s.bind(s, 47991)),
        Promise.resolve().then(s.bind(s, 84754)),
        Promise.resolve().then(s.bind(s, 89753)),
        Promise.resolve().then(s.bind(s, 61017)),
        Promise.resolve().then(s.bind(s, 46252)),
        Promise.resolve().then(s.bind(s, 64466)),
        Promise.resolve().then(s.bind(s, 2311)),
        Promise.resolve().then(s.bind(s, 19195)),
        Promise.resolve().then(s.bind(s, 96395)),
        Promise.resolve().then(s.bind(s, 14869)),
        Promise.resolve().then(s.bind(s, 55580)),
        Promise.resolve().then(s.bind(s, 84658)),
        Promise.resolve().then(s.bind(s, 37401)),
        Promise.resolve().then(s.bind(s, 18390)),
        Promise.resolve().then(s.bind(s, 39271)),
        Promise.resolve().then(s.bind(s, 35672)),
        Promise.resolve().then(s.bind(s, 72467)),
        Promise.resolve().then(s.bind(s, 44782)),
        Promise.resolve().then(s.bind(s, 35270)),
        Promise.resolve().then(s.bind(s, 11252)),
        Promise.resolve().then(s.bind(s, 83773)),
        Promise.resolve().then(s.bind(s, 46260))
    }
}, e => {
    e.O(0, [866, 3129, 1894, 7451, 2166, 827, 509, 7968, 9094, 3368, 6798, 8441, 1255, 7358], () => e(e.s = 96373)),
    _N_E = e.O()
}
]);
