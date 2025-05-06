# Welcome to react-easy-scrollbar 👋
A modern scrollbar style decoration tool that is fully compatible with UI

[Homepage](https://github.com/little-thing/react-easy-scrollbar) ｜ [Issues](https://github.com/little-thing/react-easy-scrollbar/issues) 

This is a very easy to integrate reac scrollbar. 
Just one line of code is needed to modify your scrollbar to an elegant modern style, completely free of UI element pollution,
preserving the original layout.
It uses ref to inject elements and does not hinder your event handling of the elements

[![Version](https://img.shields.io/npm/v/react-easy-scrollbar.svg)](https://www.npmjs.com/package/react-easy-scrollbar)
[![NPM downloads](http://img.shields.io/npm/dm/react-easy-scrollbar.svg?style=flat)](https://npmjs.com/package/react-easy-scrollbar)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> Completely pollution-free UI, perfect scrollbar implemented through CSS

### ✨ [Demo](https://codesandbox.io/p/github/little-thing/react-easy-scrollbar-example/main?embed=1&file=%2Fpackage.json&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clylq1qui00063b6su46ergxx%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clylq1qui00023b6sdmvlog5w%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clylq1qui00043b6sck1izxk6%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clylq1qui00053b6sc9s7iklv%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clylq1qui00023b6sdmvlog5w%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clylq1qui00013b6sa0njiqx1%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clylt9uhz00023b6sw4ijca78%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A8%252C%2522startColumn%2522%253A5%252C%2522endLineNumber%2522%253A8%252C%2522endColumn%2522%253A5%257D%255D%252C%2522filepath%2522%253A%2522%252Fpackage.json%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clylq1qui00023b6sdmvlog5w%2522%252C%2522activeTabId%2522%253A%2522clylt9uhz00023b6sw4ijca78%2522%257D%252C%2522clylq1qui00053b6sc9s7iklv%2522%253A%257B%2522id%2522%253A%2522clylq1qui00053b6sc9s7iklv%2522%252C%2522activeTabId%2522%253A%2522clyltldri00bi3b6sh7uc5fw3%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522port%2522%253A5173%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clyltldri00bi3b6sh7uc5fw3%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clylq1qui00043b6sck1izxk6%2522%253A%257B%2522id%2522%253A%2522clylq1qui00043b6sck1izxk6%2522%252C%2522activeTabId%2522%253A%2522clyltl3y1007u3b6shdcwxf9i%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clylq1qui00033b6szoamiisg%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clylq1rlg000xdahvhfr270xp%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clyltl3y1007u3b6shdcwxf9i%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

## Install

```sh
npm install
```

## Run tests

```sh
npm run test
```

## Author

👤 **little-thing**

* Github: [@little-thing](https://github.com/little-thing)

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
