'use strict';
const foregroundColor = '#ece9e6';
const backgroundColor = '#262a33';
const black = '#262a33';
const red = '#c81b00';
const green = '#64a900';
const yellow = '#d38600';
const blue = '#0063eb';
const magenta = '#b03074';
const cyan = '#17bf6f';
const white = '#ece9e6';
const lightBlack = '#495159';
const lightRed = '#f12303';
const lightGreen = '#8ac800';
const lightYellow = '#efa900';
const lightBlue = '#0086fe';
const lightMagenta = '#cc5491';
const lightCyan = '#00e175';
const lightWhite = '#f6f1f3';

exports.decorateConfig = config => Object.assign({}, config, {
  backgroundColor,
  foregroundColor,
  borderColor: magenta,
  cursorColor: magenta,
  cursorAccentColor: backgroundColor,
  selectionColor: 'rgba(151, 151, 155, 0.2)',
  colors: {
    black,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white,
    lightBlack,
    lightRed,
    lightGreen,
    lightYellow,
    lightBlue,
    lightMagenta,
    lightCyan,
    lightWhite,
  },
  css: `
    /* Hide title when only one tab */
    .tabs_title {
      display: none !important;
    }
    /* Add a highlight line below the active tab */
    .tab_tab::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: rgba(255, 106, 193, 0.4);
      transform: scaleX(0);
      will-change: transform;
    }
    .tab_tab.tab_active::before {
      transform: scaleX(1);
      transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
    }
    /* Fade the title of inactive tabs and the content of inactive panes */
    .tab_text,
    .term_term {
      opacity: 0.6;
      will-change: opacity;
    }
    .tab_active .tab_text,
    .term_active .term_term {
      opacity: 1;
      transition: opacity 0.12s ease-in-out;
    }
    /* Allow custom css / overrides */
    ${config.css}
  `
});
