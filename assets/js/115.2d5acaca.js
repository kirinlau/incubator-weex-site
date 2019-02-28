(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{479:function(e,t,i){"use strict";i.r(t);var n=i(1),s=Object(n.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11),i("p",[e._v("Debugging requires the use of an integrated Weex debugging tool for code scanning and debugging. For related documents, please refer to:")]),i("p",[e._v("[1] "),i("router-link",{attrs:{to:"./integrate-devtool-to-android.html"}},[e._v("Android Weex Detool Integration Document")]),e._v(".\n"),i("br"),e._v("\n[2] "),i("router-link",{attrs:{to:"./integrate-devtool-to-ios.html"}},[e._v("iOS Weex Detool integration documentation")]),e._v(".")],1),i("p",[e._v("You can also use the Playground App provided by Weex to debug your code. For the download address, see "),i("a",{attrs:{href:"http://weex.apache.org/tools/playground.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Weex Playground"),i("OutboundLink")],1),e._v(".")]),i("p",[e._v("Go back to the debug QR code page and use the scan code function of the application to scan the code to enter the debug console, as shown in the figure:")]),e._m(12),i("p",[e._v("The first time you enter the debugging interface, there will be a prompt interface to guide you to understand the related functions that will be used during debugging. For developers who use the debugging tool for the first time, it is recommended to read all the prompts completely.")]),e._m(13),e._m(14),e._m(15),e._m(16),e._m(17),e._m(18),e._m(19),e._m(20),e._m(21),e._m(22),e._m(23),e._m(24),e._m(25),e._m(26),e._m(27),e._m(28),e._m(29),e._m(30),e._m(31),i("p",[e._v("If you have any problems during the use, you can submit the relevant issue to us on "),i("a",{attrs:{href:"https://github.com/weexteam/weex-toolkit/issues/new?labels=@weex-cli/debug",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1),e._v(", also you can search for the known issues "),i("a",{attrs:{href:"https://github.com/weexteam/weex-toolkit/labels/%40weex-cli%2Fdebug",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1),e._v(".")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"debug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debug","aria-hidden":"true"}},[this._v("#")]),this._v(" Debug")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This document focuses on how to use the debugging tools built into "),t("code",[this._v("weex-toolkit")]),this._v(" for code debugging.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("First you need to install the "),t("code",[this._v("weex-toolkit")]),this._v(" tool via "),t("code",[this._v("npm")]),this._v(" or "),t("code",[this._v("yarn")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ npm i weex-toolkit@beta -g\n$ weex -v // check if the installation is successful\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run","aria-hidden":"true"}},[this._v("#")]),this._v(" Run")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("After the installation is complete, run the "),t("code",[this._v("weex debug")]),this._v(" command to start the debug console. After running, the program will automatically open the following interface:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1ppXZJcfpK1RjSZFOXXa6nFXa-1088-814.png",alt:"Console Interface"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you have a page that needs to be compiled, you can also compile it with the "),t("code",[this._v("weex debug [ folder | file ]")]),this._v(" command. If you run "),t("code",[this._v("weex debug src")]),this._v(", the compiled page will be displayed under the "),t("code",[this._v("page")]),this._v(" tab. Shown as follows:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1b78QJgHqK1RjSZFPXXcwapXa-933-630.png",alt:"Compile page"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"start-debugging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-debugging","aria-hidden":"true"}},[this._v("#")]),this._v(" Start debugging")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),t("p",[this._v("Before debugging, please make sure that the mobile phone with the debugging application is on the same LAN as the PC, and disable the proxy settings such as VPN. Otherwise, the debugging will not be performed normally. At the same time, when using the function, try to ensure that other functions are disabled. If you use the "),t("code",[this._v("JS Debug")]),this._v(" function to turn off the "),t("code",[this._v("Network")]),this._v(" function, you will have a better development experience.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1eUt2JhYaK1RjSZFnXXa80pXa-1914-1001.png",alt:"Debug Console"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"js-debug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-debug","aria-hidden":"true"}},[this._v("#")]),this._v(" JS debug")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Open the "),t("code",[this._v("JS Debug")]),this._v(" function to enter the Weex code debugging mode as shown, you can find the source code on the "),t("code",[this._v("Source")]),this._v(" panel:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1beJLJbPpK1RjSZFFXXa5PpXa-1919-1001.png",alt:"JS Debugging"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"loglevel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loglevel","aria-hidden":"true"}},[this._v("#")]),this._v(" Loglevel")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Filter and filter the logs through the console and "),t("code",[this._v("LogLevel")]),this._v(" options, and keep the log content you are concerned with, as shown in the figure:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1OoVOJhTpK1RjSZR0XXbEwXXa-1919-1000.png",alt:"Log Level"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"network"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network","aria-hidden":"true"}},[this._v("#")]),this._v(" Network")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Open the 'Network' function to view the application's network request information and perform an effective analysis of the page request, as shown in the figure:\n"),t("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1XcJpb_Zmx1VjSZFGXXax2XXa-1916-995.png",alt:"Network Review"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"element"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#element","aria-hidden":"true"}},[this._v("#")]),this._v(" Element")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),t("p",[this._v("In the node review mode, a large amount of page information will be sent. By default, it is enabled. In the case of complicated pages, we generally recommend resetting the station by click this button ![Preview] (https://img.alicdn.com/tfs/TB1S4RVJkvoK1RjSZFwXXciCFXa-30-24.png), otherwise it may affect the speed of JS debugging related functions.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can switch the display of the current view by selecting the "),t("code",[this._v("ElementMode")]),this._v(" option. You can analyze the view level of the page as shown in the figure:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1goxVJgHqK1RjSZFkXXX.WFXa-1913-997.png",alt:"Element"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"extension"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extension","aria-hidden":"true"}},[this._v("#")]),this._v(" Extension")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The following extension functions need to be enabled in the "),t("code",[this._v("JS Debug")]),this._v(" function and are available on the Weex page")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"quick-navigation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-navigation","aria-hidden":"true"}},[this._v("#")]),this._v(" Quick navigation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1h08WJkzoK1RjSZFlXXai4VXa-1918-1078.gif",alt:"Quick navigation"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"file-replacement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-replacement","aria-hidden":"true"}},[this._v("#")]),this._v(" File Replacement")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Click the "),t("code",[this._v("Environment Settings")]),this._v(" menu at the top of the console to modify and replace the dependent files running on the weex page. After the modification is completed, click "),t("code",[this._v("Generate File")]),this._v(" -> "),t("code",[this._v("Change Setting")]),this._v(" to replace the running environment.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://img.alicdn.com/tfs/TB14wdUJgHqK1RjSZFgXXa7JXXa-1918-1078.gif",alt:"Environment Settings"}})])}],!1,null,null,null);t.default=s.exports}}]);