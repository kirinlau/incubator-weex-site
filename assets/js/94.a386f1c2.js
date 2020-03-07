(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{358:function(e,t,i){"use strict";i.r(t);var n=i(0),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),i("div",{staticClass:"danger custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),i("p",[i("a",{attrs:{href:"https://github.com/weexteam/devtool-iOS-for-Apache-Weex",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS Devtools for Apache Weex"),i("OutboundLink")],1),e._v(" is a third party plugin, and is not developed nor maintained by Apache Weex.")])]),i("p",[e._v("iOS Devtools for Apache Weex is a custom devtools for weex that implements Chrome Debugging Protocol inspired by Stetho, it is designed to help you quickly inspect your app and debug your JS bundle source in a Chrome web page. To make it work, at first you must integrate devtool to your App. This page will help you integrate devtool to your iOS App.")]),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),i("p",[e._v("There are two choices to install dependencies:")]),e._m(6),e._m(7),i("p",[e._v("I strongly recommend you use the latest version since both Weex SDK and devtools are developed iteratively and rapidly.")]),e._m(8),e._m(9),e._m(10),e._m(11),e._m(12),e._m(13),i("p",[e._v("You can see the demo here "),i("a",{attrs:{href:"https://github.com/weexteam/weex-devtool-iOS/blob/master/playground/WeexDemo/WXDemoViewController.m",target:"_blank",rel:"noopener noreferrer"}},[e._v("Playground App"),i("OutboundLink")],1),e._v(".")]),e._m(14),e._m(15),e._m(16),i("p",[e._v("You can see the WXDevtool header file as follows:")]),e._m(17),i("p",[e._v("**Note: The inspector API must be called before weex is initialized **")]),e._m(18),e._m(19),e._m(20),i("p",[e._v("eg：")]),e._m(21),e._m(22),i("p",[e._v("Q: Why do we need auto refresh feature?")]),i("p",[e._v("A: As shown in future, when you click the JSDebug button, Javascript runtime environment will change from the phone (JavaScriptCore) to PC (Chrome V8), then Weex need to re-initialize the Weex environment, re-render the page. Page rendering is required for the developer to add on its own page.")]),e._m(23),i("p",[e._v("Q: What kind of scene need to add refresh feature?")]),e._m(24),i("p",[e._v("Q: How to add auto refresh feature?")]),i("p",[e._v("Register events when Weex initialization.")]),e._m(25),e._m(26),e._m(27),i("p",[e._v("For example, First you can destroy the current instance, and then re-create instance:")]),e._m(28),i("p",[e._v("destroy instance，and reCreate new instance，example:")]),e._m(29),i("p",[e._v("You can see the details in this case "),i("a",{attrs:{href:"https://github.com/weexteam/weex-devtool-iOS/blob/master/Devtools/playground/WeexDemo/WXDemoViewController.m",target:"_blank",rel:"noopener noreferrer"}},[e._v("WXDemoViewController.m"),i("OutboundLink")],1)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"integrate-devtool-to-ios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#integrate-devtool-to-ios"}},[this._v("#")]),this._v(" Integrate Devtool to iOS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Integrate Devtool to iOS")]),t("li",[this._v("Integrate Devtool to iOS")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"version-compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version-compatibility"}},[this._v("#")]),this._v(" Version compatibility")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("table",[i("thead",[i("tr",[i("th",[e._v("WeexSDK")]),i("th",[e._v("WXDevtool")])])]),i("tbody",[i("tr",[i("td",[e._v("0.16.0+")]),i("td",[e._v("0.15.3")])]),i("tr",[i("td",[e._v("0.17.0+")]),i("td",[e._v("0.16.0")])]),i("tr",[i("td",[e._v("0.18.0+")]),i("td",[e._v("0.16.3+")])]),i("tr",[i("td",[e._v("0.19.0+")]),i("td",[e._v("0.17.2+")])]),i("tr",[i("td",[e._v("0.20.0+")]),i("td",[e._v("0.20.0+")])]),i("tr",[i("td",[e._v("0.24.0+")]),i("td",[e._v("0.24.0")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"integrate-to-ios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#integrate-to-ios"}},[this._v("#")]),this._v(" Integrate to iOS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"installing-dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-dependencies"}},[this._v("#")]),this._v(" Installing Dependencies")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"from-cocoapods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#from-cocoapods"}},[this._v("#")]),this._v(" From cocoapods")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("source https://github.com/CocoaPods/Specs.git\npod  'WXDevtool', '0.24.0', :configurations => ['Debug']\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"from-source-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#from-source-code"}},[this._v("#")]),this._v(" From source code")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[t("code",[this._v("git clone git@github.com:weexteam/weex-devtool-iOS.git")])]),t("li",[this._v("Copy source folder to your project.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"http://img.alicdn.com/tps/TB1MXjjNXXXXXXlXpXXXXXXXXXX-795-326.png",alt:"drag"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"3"}},[t("li",[this._v("Choose options as the picture shows.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"http://img.alicdn.com/tps/TB1A518NXXXXXbZXFXXXXXXXXXX-642-154.png",alt:"_"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"integrate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#integrate"}},[this._v("#")]),this._v(" Integrate")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"step-1-add-header-file-in-appdelegate-m"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-add-header-file-in-appdelegate-m"}},[this._v("#")]),this._v(" Step 1. Add header file in "),t("code",[this._v("AppDelegate.m")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('//1. From cocoapods\n#import <WXDevtool/WXDevtool.h>\n\n//2. From source code\n#import "WXDevtool.h"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"step-2-initialize-inspector-when-the-app-launched"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-initialize-inspector-when-the-app-launched"}},[this._v("#")]),this._v(" Step 2. Initialize inspector when the APP launched")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-object-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("\n+ (void)setDebug:(BOOL)isDebug;\n\n+ (BOOL)isDebug;\n\n+ (void)launchDevToolDebugWithUrl:(NSString *)url;\n\n@end\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("if your application is a pure weex project, you need to ensure that the initial value of setDebug is "),t("code",[this._v("NO")]),this._v(", otherwise it may be white screen on the first page of the weex page")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("p",[t("code",[this._v("setDebug")])]),t("p",[t("code",[this._v("setDebug")]),this._v(" is used to control the state of debug mode, when its value is "),t("code",[this._v("YES")]),this._v(", open the debug mode, otherwise closed.")])]),t("li",[t("p",[t("code",[this._v("(void)launchDevToolDebugWithUrl:(NSString *)url;")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can fix the link address by command "),t("code",[this._v("weex debug --port 8888 --channelid 1")]),this._v(", and connect debug server like below:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-object-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n \n  [WXDevTool setDebug:NO]; \n  [WXDevTool launchDevToolDebugWithUrl:@"ws://{ip}:{port}/debugProxy/native/{channelid}"]; \n }\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"step-3-auto-refresh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-3-auto-refresh"}},[this._v("#")]),this._v(" Step 3. Auto refresh")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://img.alicdn.com/tfs/TB17AF4JkPoK1RjSZKbXXX1IXXa-1302-390.png",alt:"_debug"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Click debugger button")]),t("li",[this._v("Switch remoteDebug")]),t("li",[this._v("Refresh inspect page")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-object-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('[[NSNotificationCenter defaultCenter] addObserver:self selector:notificationRefreshInstance: name:@"RefreshInstance" object:nil];\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Notes: You must cancel this event in the "),t("code",[this._v("dealloc")]),this._v(" method. For example:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("- (void)dealloc\n{\n    [[NSNotificationCenter defaultCenter] removeObserver:self];\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("- (void)dealloc\n{\n    [[NSNotificationCenter defaultCenter] removeObserver:self];\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('  - (void)render\n  {\n    CGFloat width = self.view.frame.size.width;\n    [_instance destroyInstance];\n    _instance = [[WXSDKInstance alloc] init];\n    _instance.viewController = self;\n    _instance.frame = CGRectMake(self.view.frame.size.width-width, 0, width, _weexHeight);\n\n    __weak typeof(self) weakSelf = self;\n    _instance.onCreate = ^(UIView *view) {\n        [weakSelf.weexView removeFromSuperview];\n        weakSelf.weexView = view;\n        [weakSelf.view addSubview:weakSelf.weexView];\n        UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification,  weakSelf.weexView);\n    };\n    _instance.onFailed = ^(NSError *error) {\n\n    };\n\n    _instance.renderFinish = ^(UIView *view) {\n        [weakSelf updateInstanceState:WeexInstanceAppear];\n    };\n\n    _instance.updateFinish = ^(UIView *view) {\n    };\n    if (!self.url) {\n        return;\n    }\n    NSURL *URL = [self testURL: [self.url absoluteString]];\n    NSString *randomURL = [NSString stringWithFormat:@"%@?random=%d",URL.absoluteString,arc4random()];\n    [_instance renderWithURL:[NSURL URLWithString:randomURL] options:@{@"bundleUrl":URL.absoluteString} data:nil];\n}\n')])])])}],!1,null,null,null);t.default=s.exports}}]);