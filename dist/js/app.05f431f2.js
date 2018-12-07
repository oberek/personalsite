(function(e){function t(t){for(var s,n,r=t[0],c=t[1],l=t[2],p=0,m=[];p<r.length;p++)n=r[p],o[n]&&m.push(o[n][0]),o[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(s=!1)}s&&(i.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},o={app:0},i=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("64a9"),o=a.n(s);o.a},"3c29":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"navbar"},[a("ul",{staticClass:"main-nav"},[a("li",[a("router-link",{attrs:{to:{name:"Home"}}},[e._v("Home")])],1),a("li",[a("router-link",{attrs:{to:{name:"Portfolio"}}},[e._v("Portfolio")])],1),e._m(0),a("li",[a("router-link",{attrs:{to:{name:"About"}}},[e._v("About")])],1),a("li",[a("router-link",{attrs:{to:{name:"Contact"}}},[e._v("Contact")])],1)])]),a("router-view")],1)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"smallLogo"},[s("img",{attrs:{src:a("cf05"),id:"small-logo"}})])}],n={name:"App"},r=n,c=(a("034f"),a("2877")),l=Object(c["a"])(r,o,i,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,p=a("8c4f"),m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"base"},[s("img",{attrs:{src:a("d3bb"),id:"logo"}}),s("div",{staticClass:"whoami"},[s("h3",[e._v("\n      Full Stack Web Developer\n    ")])])])}],v={name:"Home",data:function(){return{msg:"Hire Me pls"}}},g=v,f=(a("c454"),Object(c["a"])(g,m,d,!1,null,"69c18016",null));f.options.__file="Home.vue";var h=f.exports,_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"base"},[s("div",{staticClass:"left_box"},[s("div",{staticClass:"maciej_pic"},[s("img",{attrs:{src:a("c805"),id:"profile"}})])]),s("div",{staticClass:"right_box"},[s("div",{staticClass:"filler_box"}),s("div",[s("h3",[e._v("About")]),s("p",[e._v("Maciej Smusz, graduate of Neumont College of Computer Science, enjoys coding, dancing, and getting\n                out to enjoy all nature has to offer. He is currently a board member of Razem Utah, a non-profit\n                Polish fraternal organization for the state of Utah. In terms of technology, Maciej is a very\n                versatile programmer, adopting the best technology for the purposes for the client. He is always\n                ready to try something new if it means improving performance, scalability, or ease of access.")]),s("h3",[e._v("Skills")]),s("h5",[e._v("Languages")]),s("p",[e._v("Java • C# • Python • JavaScript • SQL • Ruby")]),s("h5",[e._v("Front End Frameworks")]),s("p",[e._v("AngularJS • React • Vue")]),s("h5",[e._v("Back End Frameworks")]),s("p",[e._v("Spring • MVC • Flask • Express • Sails")]),s("h5",[e._v("Tool Suites")]),s("p",[e._v("Adobe Creative Cloud • Amazon Web Services (S3, Lambda, SQS, SNS, IAM) • Jetbrains")]),s("div",{staticClass:"social_media_box"},[s("a",{attrs:{href:"https://www.linkedin.com/in/maciejsmusz/"}},[s("img",{staticClass:"social_media_picture",attrs:{src:"http://www.republiccapitalaccess.com/wp-content/uploads/2014/07/linkedin-icon.png"}})]),s("a",{attrs:{href:"https://github.com/oberek"}},[s("img",{staticClass:"social_media_picture",attrs:{src:"https://png.icons8.com/metro/1600/github.png"}})])])])])])}],C={name:"about"},w=C,y=(a("a20e"),Object(c["a"])(w,_,b,!1,null,"329af027",null));y.options.__file="About.vue";var j=y.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"base"},[a("h1",[e._v("Project Work")]),a("div",{staticClass:"box colorize"},[a("div",{staticClass:"left_part"},[a("carousel",{attrs:{"per-page":1}},[a("slide",[a("img",{staticClass:"project_image",attrs:{src:"https://image.ibb.co/dx9ADK/Colorize_Interface.png"}})]),a("slide",[a("img",{staticClass:"project_image",attrs:{src:"https://image.ibb.co/nvjxce/Twilight_Zone209bw.png"}})]),a("slide",[a("img",{staticClass:"project_image",attrs:{src:"https://image.ibb.co/esYOHe/Twilight_Zone209.png"}})])],1)],1),e._m(0)]),a("div",{staticClass:"box dogfinder"},[a("div",{staticClass:"left_part"},[a("carousel",{attrs:{"per-page":1}},[a("slide",[a("img",{staticClass:"project_image",attrs:{src:"https://image.ibb.co/jjJsSe/Dog_Finder_Splash.png"}})]),a("slide",[a("img",{staticClass:"project_image",attrs:{src:"https://image.ibb.co/m6780z/Dog_Finder1.png"}})])],1)],1),e._m(1)]),a("div",{staticClass:"box aaft2"},[a("div",{staticClass:"left_part"},[a("carousel",{attrs:{"per-page":1}},[a("slide",[a("img",{staticClass:"project_image",attrs:{src:"https://image.ibb.co/iwUfxe/AAFT2_Splash.png"}})]),a("slide",[a("img",{staticClass:"project_image",attrs:{src:"https://image.ibb.co/dYH0xe/AAFT2_Gameplay.png"}})])],1)],1),e._m(2)]),a("div",{staticClass:"box photoshop-projects"},[a("div",{staticClass:"left_part"},[a("carousel",{attrs:{"per-page":1}},[a("slide",[a("img",{staticClass:"project_image",attrs:{src:"https://i.ibb.co/dr7Bvng/penguin-in-desert.jpg"}})]),a("slide",[a("img",{staticClass:"project_image",attrs:{src:"https://i.ibb.co/wz8R0mQ/surreal-2.jpg"}})])],1)],1),e._m(3)])])},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"right_part"},[a("h2",[e._v("Colorize")]),a("p",[e._v('\n                Colorize is a tool enabling a user to automatically colorize black and white films. The tool was\n                trained using convolutional neural networks and Google\'s Inception ResNet, which enabled it to make\n                a "best guess" as to the colors in a given picture.\n            ')]),a("p",[a("b",[e._v("Technologies Used: ")]),e._v("TensorFlow, VueJS, ElectronJS, OpenCV, Scikit, Python\n            ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"right_part"},[a("h2",[e._v("DogFinder")]),a("p",[e._v('\n                DogFinder is a Tinder-like application which utilizes AngularJS and consumes the PetFinder API to\n                allow\n                users to "swipe left" or "swipe right" on dogs in their area. The user can specify between young,\n                adult,\n                and senior dogs, as well as the area they want to look in.\n            ')]),a("p",[a("b",[e._v("Technologies Used: ")]),e._v(" AngularJS, Express, SCSS")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"right_part"},[a("h2",[e._v("Adolescent Atomic Fighting Tortoises 2")]),a("p",[e._v("\n                Adolescent Atomic Fighting Tortoises 2 was a game created for a Web Game Development course. The\n                game\n                utilizes CreateJS and uses the human voice as its primary mechanic. Screaming into the microphone\n                releases bones, which in turn damage your enemies, the tortoises.\n            ")]),a("p",[a("b",[e._v("Technologies Used: ")]),e._v("CreateJS, Express")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"right_part"},[a("h2",[e._v("Photoshop Projects")]),a("p",[e._v("\n                The surreal pictures seen on the side were created for a Graphic Design course encompassing Adobe PhotoShop, Illustrator, and InDesign.\n            ")]),a("p",[a("b",[e._v("Technologies Used: ")]),e._v("Adobe PhotoShop, Illustrator, InDesign")])])}],A={name:"portfolio",data:function(){return{word:"Go to Top",duration:4e3,mainAudio:"http://tholman.com/elevator.js/music/elevator.mp3",endAudio:"http://tholman.com/elevator.js/music/ding.mp3"}}},k=A,P=(a("a48a"),Object(c["a"])(k,S,x,!1,null,"7251c441",null));P.options.__file="Portfolio.vue";var T=P.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"base"},[a("div",{staticClass:"outer_box"},[a("h1",[e._v("Let's Talk!")]),a("p",[e._v("Although I'm happily employed right now, I'd love to hear from you about your current technology needs")]),a("div",{staticClass:"base"},[a("form",{attrs:{method:"POST",action:"https://formspree.io/maciejsmusz@gmail.com"},on:{submit:e.checkForm}},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email",placeholder:"Your email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.subject,expression:"subject"}],attrs:{type:"text",name:"_subject",placeholder:"Subject"},domProps:{value:e.subject},on:{input:function(t){t.target.composing||(e.subject=t.target.value)}}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{name:"message",placeholder:"Your message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),a("input",{staticStyle:{display:"none"},attrs:{type:"text",name:"_gotcha"}}),a("button",{attrs:{type:"submit"},model:{value:e.submit,callback:function(t){e.submit=t},expression:"submit"}},[e._v("Send")])])])])])},F=[],O={name:"Contact",data:function(){return{msg:"This is the contact page"}},methods:{checkForm:function(e){if(this.email&&this.textBody.value)return!0;e.preventDefault()}}},z=O,J=(a("f2f0"),Object(c["a"])(z,E,F,!1,null,"5767d648",null));J.options.__file="Contact.vue";var $=J.exports;s["a"].use(p["a"]);var D=new p["a"]({mode:"history",routes:[{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:j},{path:"/portfolio",name:"Portfolio",component:T},{path:"/contact",name:"Contact",component:$}]}),I=a("2f62");s["a"].use(I["a"]);var H=new I["a"].Store({state:{},mutations:{},actions:{}}),M=a("7bb1"),N=a("0a63"),U=a.n(N),L=a("c198");s["a"].use(M["a"]),s["a"].use(U.a),s["a"].component("VueElevator",L["VueElevator"]),s["a"].config.productionTip=!1,new s["a"]({router:D,store:H,render:function(e){return e(u)}}).$mount("#app")},"64a9":function(e,t,a){},7815:function(e,t,a){},a20e:function(e,t,a){"use strict";var s=a("f8bc"),o=a.n(s);o.a},a48a:function(e,t,a){"use strict";var s=a("d5d9"),o=a.n(s);o.a},c454:function(e,t,a){"use strict";var s=a("3c29"),o=a.n(s);o.a},c805:function(e,t,a){e.exports=a.p+"img/maciej.78c21dff.jpg"},cf05:function(e,t,a){e.exports=a.p+"img/logo.3e1e2a22.png"},d3bb:function(e,t,a){e.exports=a.p+"img/secondaryLogo.01d4f191.png"},d5d9:function(e,t,a){},f2f0:function(e,t,a){"use strict";var s=a("7815"),o=a.n(s);o.a},f8bc:function(e,t,a){}});
//# sourceMappingURL=app.05f431f2.js.map