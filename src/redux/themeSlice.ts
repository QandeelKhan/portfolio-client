import { createSlice } from "@reduxjs/toolkit";

type ThemeType = {
    pageInitial:
        | {
              translateX: string;
              translateY: string;
              rotate: string;
              scale: number;
              opacity: number;
          }
        | {};
    pageAnimate: {
        translateX: string;
        translateY: string;
        rotate: string | number[];
        scale: number | [];
        opacity: number;
        //
        animate: {
            scale: number[];
            rotate: number[];
            transition: {
                duration: number;
                ease: string;
                loop: number;
                repeatDelay: number;
            };
        };
        variants: {
            hidden: {
                scale: number;
                rotate: number;
                opacity: number;
            };
            visible: {
                scale: number;
                rotate: number;
                opacity: number;
            };
        };
    };
    pageExit:
        | {
              translateX: string;
              translateY: string;
              rotate: string;
              scale: number;
              opacity: number;
          }
        | {};
};

export const myThemeState = {
    themeName: "theme1",
    selectedTheme: {} as {
        theme: ThemeType;
    },
    themes: [
        {
            name: "theme1",
            theme: {
                pageInitial: { translateX: "100%" },
                pageAnimate: { translateX: "0%" },
                pageExit: { translateX: "-100%" },
            },
        },
        {
            name: "theme2",
            theme: {
                pageInitial: { translateX: "-100%" },
                pageAnimate: { translateX: "0%" },
                pageExit: { translateX: "-100%" },
            },
        },
        {
            name: "theme3",
            theme: {
                pageInitial: { translateX: "100%" },
                pageAnimate: { translateX: "0%" },
                pageExit: { translateX: "-100%" },
            },
        },
        {
            name: "theme4",
            theme: {
                pageInitial: { translateX: "100%", rotate: 0 },
                pageAnimate: { translateX: "0%", rotate: 360 },
                pageExit: { translateX: "-100%", rotate: 0 },
            },
        },
        {
            name: "scalingTheme",
            theme: {
                pageInitial: { translateX: "100%", scale: 2 },
                pageAnimate: { translateX: "0%", scale: 1 },
                pageExit: { translateX: "-100%", scale: 2 },
            },
        },
        {
            name: "scalingTheme2",
            theme: {
                pageInitial: { translateX: "100%", scale: 2 },
                pageAnimate: { translateX: "0%", scale: 1 },
                pageExit: { translateX: "-100%", scale: 2 },
            },
        },
        {
            name: "fadingTheme",
            theme: {
                pageInitial: { translateX: "100%", opacity: 0 },
                pageAnimate: { translateX: "0%", opacity: 1 },
                pageExit: { translateX: "-100%", opacity: 0 },
            },
        },
        {
            name: "springTheme",
            theme: {
                pageInitial: { scale: 0 },
                pageAnimate: {
                    scale: 1,
                    transition: { type: "spring", stiffness: 300 },
                },
                pageExit: { scale: 0 },
            },
        },
        {
            name: "springTheme2",
            theme: {
                pageInitial: { scale: 0 },
                pageAnimate: {
                    scale: 1,
                    transition: { type: "spring", stiffness: 400 },
                },
                pageExit: { scale: 0 },
            },
        },
        {
            name: "staggerTheme",
            theme: {
                pageInitial: { opacity: 0 },
                pageAnimate: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 },
                },
                pageExit: { opacity: 0 },
            },
        },
        {
            name: "staggerTheme2",
            theme: {
                pageInitial: { opacity: 0 },
                pageAnimate: {
                    opacity: 1,
                    transition: { staggerChildren: 0.3 },
                },
                pageExit: { opacity: 0 },
            },
        },
        {
            name: "glitchTheme",
            theme: {
                pageInitial: {},
                pageAnimate: {
                    animate: {
                        scale: [1, 1.05, 1],
                        rotate: [0, 0.5, 0],
                        transition: {
                            duration: 0.5,
                            ease: "easeInOut",
                            loop: Infinity,
                            repeatDelay: 1,
                        },
                    },
                    variants: {
                        hidden: {
                            scale: 1.2,
                            rotate: 0.5,
                            opacity: 0,
                        },
                        visible: {
                            scale: 1,
                            rotate: 0,
                            opacity: 1,
                        },
                    },
                },
                pageExit: {},
            },
        },

        {
            name: "blurTheme",
            theme: {
                pageInitial: {},
                pageAnimate: {
                    animate: {
                        filter: ["blur(0px)", "blur(5px)", "blur(0px)"],
                        transition: {
                            duration: 1,
                            ease: "easeInOut",
                            loop: Infinity,
                            repeatDelay: 2,
                        },
                    },
                },
                pageExit: {},
            },
        },
        {
            name: "warpTheme",
            theme: {
                pageInitial: {},
                pageAnimate: {
                    animate: {
                        scale: [1, 1.2, 1],
                        rotate: [0, -15, 0],
                        transition: {
                            duration: 1,
                            ease: "easeInOut",
                            loop: Infinity,
                            repeatDelay: 2,
                        },
                    },
                    variants: {
                        hidden: {
                            scale: 1.2,
                            rotate: -15,
                            opacity: 0,
                        },
                        visible: {
                            scale: 1,
                            rotate: 0,
                            opacity: 1,
                        },
                    },
                },
                pageExit: {},
            },
        },
        {
            name: "crazyTheme",
            theme: {
                pageInitial: {
                    translateX: "100%",
                    translateY: "100%",
                    rotate: "360deg",
                    scale: 2,
                    opacity: 0,
                },
                pageAnimate: {
                    translateX: "0%",
                    translateY: "0%",
                    rotate: "0deg",
                    scale: 1,
                    opacity: 1,
                },
                pageExit: {
                    translateX: "-100%",
                    translateY: "-100%",
                    rotate: "360deg",
                    scale: 2,
                    opacity: 0,
                },
            },
        },
        {
            name: "newTheme",
            theme: {
                pageInitial: {
                    translateX: "50%",
                    translateY: "50%",
                    rotate: "360deg",
                },
                pageAnimate: {
                    translateX: "0%",
                    translateY: "0%",
                    rotate: "0deg",
                },
                pageExit: {
                    translateX: "-100%",
                    translateY: "-100%",
                    rotate: "360deg",
                },
            },
        },
    ],
};

const themeSlice = createSlice({
    name: "themes",
    initialState: myThemeState,
    reducers: {
        setTheme: (state, action) => {
            const { themeName, theme } = action.payload;
            const themeIndex = state.themes.findIndex(
                (t) => t.name === themeName
            );
            state.themes[themeIndex].theme = theme;
        },
        setThemeName: (state, action) => {
            state.themeName = action.payload;
        },
        setSelectedTheme: (state, action) => {
            state.selectedTheme.theme = action.payload;
        },
    },
});

export const { setTheme, setThemeName, setSelectedTheme } = themeSlice.actions;

export default themeSlice.reducer;
