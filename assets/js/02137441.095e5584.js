(self.webpackChunkcodeshift_community=self.webpackChunkcodeshift_community||[]).push([[2544],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6809:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return r},toc:function(){return p},default:function(){return c}});var a=n(2122),l=n(9756),i=(n(7294),n(3905)),o={id:"cli",title:"codeshift/cli",slug:"/cli"},r={unversionedId:"api/cli",id:"api/cli",isDocsHomePage:!1,title:"codeshift/cli",description:"To download and run codemods, we provide a CLI tool called @codeshift/cli.",source:"@site/docs/api/codeshift-cli.mdx",sourceDirName:"api",slug:"/cli",permalink:"/docs/cli",editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/main/website/docs/api/codeshift-cli.mdx",version:"current",frontMatter:{id:"cli",title:"codeshift/cli",slug:"/cli"},sidebar:"api",next:{title:"codeshift/utils",permalink:"/docs/utils"}},p=[{value:"Usage/Installation",id:"usageinstallation",children:[]},{value:"Options",id:"options",children:[{value:"--transform, -t",id:"--transform--t",children:[]},{value:"--packages",id:"--packages",children:[]},{value:"--parser, -p",id:"--parser--p",children:[]},{value:"--extensions, -e",id:"--extensions--e",children:[]},{value:"--ignore-pattern",id:"--ignore-pattern",children:[]},{value:"--version, -v",id:"--version--v",children:[]},{value:"--help",id:"--help",children:[]}]},{value:"list",id:"list",children:[]},{value:"init",id:"init",children:[{value:"--package-name",id:"--package-name",children:[]},{value:"--version (optional)",id:"--version-optional",children:[]},{value:"--preset (optional)",id:"--preset-optional",children:[]}]},{value:"validate",id:"validate",children:[]}],s={toc:p};function c(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To download and run codemods, we provide a CLI tool called ",(0,i.kt)("inlineCode",{parentName:"p"},"@codeshift/cli"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@codeshift/cli")," is responsible for running the provided transform against your entire codebase.\nUnder the hood, it is a wrapper of jscodeshift's cli, which provides additional functionality"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ability to run community codemods hosted on npm"),(0,i.kt)("li",{parentName:"ol"},"Runs versioned codemods in sequence"),(0,i.kt)("li",{parentName:"ol"},"Always runs the latest version of a codemod")),(0,i.kt)("p",null,"The cli allows you to run transforms either from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/tree/main/community"},"community folder")," or on your local machine as per the original implementation of jscodeshift"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Codemods will be designed to do the heavy lifting, but they'll often not be perfect so some manual work may still be required in order to successfully migrate."),(0,i.kt)("h2",{id:"usageinstallation"},"Usage/Installation"),(0,i.kt)("p",null,"We recommend running the CLI with ",(0,i.kt)("inlineCode",{parentName:"p"},"$ npx")," to ensure you always have the latest version."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$ npx @codeshift/cli --packages mylib@1.0.0 /project/src")),(0,i.kt)("p",null,"But it can also be installed globally:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$ npm install -g @codeshift/cli")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn global add @codeshift/cli")),(0,i.kt)("p",null,"and run with:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$ codeshift")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"$ codeshift-cli")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--transform--t"},"--transform, -t"),(0,i.kt)("p",null,"Allows you to execute local transform file(s)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can be provided with a comma-separated list (see example below)."),(0,i.kt)("li",{parentName:"ul"},'Transforms can be either a single file or directory containing an "index" file.')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"example:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ codeshift --transform codemods/my-special-mod /project/src/file.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ codeshift --transform codemods/my-special-mod/index.ts /project/src/file.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ codeshift --transform path/to/transform1.ts,path/to/transform2.ts,path/to/transform3.ts /project/src/file.js"))),(0,i.kt)("h3",{id:"--packages"},"--packages"),(0,i.kt)("p",null,"Runs transforms for the specified comma separated list of packages, optionally include a version for each package to run all transforms since that version"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"example:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ codeshift --packages @atlaskit/button /project/src")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ codeshift --packages @atlaskit/button@3.0.0,@atlaskit/range@4.0.0 /project/src"))),(0,i.kt)("h3",{id:"--parser--p"},"--parser, -p"),(0,i.kt)("p",null,"Parser to use for parsing the source files you are code modding."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"options:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"babel (default)"),(0,i.kt)("li",{parentName:"ul"},"babylon"),(0,i.kt)("li",{parentName:"ul"},"flow"),(0,i.kt)("li",{parentName:"ul"},"ts"),(0,i.kt)("li",{parentName:"ul"},"tsx")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"example:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ codeshift --parser tsx /project/src/file.ts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ codeshift -p babel /project/src/file.js"))),(0,i.kt)("h3",{id:"--extensions--e"},"--extensions, -e"),(0,i.kt)("p",null,"Transform files with these file extensions (comma separated list) (default: js)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"example:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ codeshift --extensions ts,tsx /project/src/file.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ codeshift -e js /project/src/file.js"))),(0,i.kt)("h3",{id:"--ignore-pattern"},"--ignore-pattern"),(0,i.kt)("p",null,"Ignore files that match a provided glob expression"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"example:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ codeshift --ignore-pattern node_modules /project/src/file.js"))),(0,i.kt)("h3",{id:"--version--v"},"--version, -v"),(0,i.kt)("p",null,"Get current version number"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"example:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ codeshift --version")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ codeshift -v"))),(0,i.kt)("h3",{id:"--help"},"--help"),(0,i.kt)("p",null,"Print all help text to the command line"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"example:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ codeshift --help"))),(0,i.kt)("h2",{id:"list"},"list"),(0,i.kt)("p",null,"Subcommand that lists available codemods for the provided packages"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"example:")),(0,i.kt)("p",null,"Print a list of available codemods for a single package"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ codeshift list mylib"))),(0,i.kt)("p",null,"Print a list of available codemods for multiple packages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ codeshift list @atlaskit/avatar @emotion/monorepo"))),(0,i.kt)("h2",{id:"init"},"init"),(0,i.kt)("p",null,"Subcommand that generates a new codemod at your desired path"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"example:")),(0,i.kt)("p",null,"Create a new codeshift package called foobar with a transform for version 10\non the Desktop"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'$ codeshift init --package-name="foobar" --version="10.0.0" ~/Desktop'))),(0,i.kt)("p",null,"Create an empty codeshift package called foobar on the Desktop"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'$ codeshift init --package-name="foobar" ~/Desktop'))),(0,i.kt)("p",null,"Create an empty codeshift package called foobar in the current directory"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'$ codeshift init --package-name="foobar"'))),(0,i.kt)("h3",{id:"--package-name"},"--package-name"),(0,i.kt)("p",null,"The name of the package/directory to be created."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"example:")),(0,i.kt)("p",null,"Create an empty codemod package called foobar with a transform."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"--version")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--preset")," flags are omitted no transforms will be generated.\nTo generate tranforms after already generating the directory, simply rerun the command with the necessary flags."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'$ codeshift init --package-name="foobar" ~/Desktop'))),(0,i.kt)("h3",{id:"--version-optional"},"--version (optional)"),(0,i.kt)("p",null,"A semver-compatible string. Will be used to generate mock transform files and configuration."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"example:")),(0,i.kt)("p",null,"Create a codemod package called foobar with a versioned transform."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'$ codeshift init --package-name="foobar" --version="10.0.0" ~/Desktop'))),(0,i.kt)("h3",{id:"--preset-optional"},"--preset (optional)"),(0,i.kt)("p",null,"A kebab-cased string. Will be used to generate mock transform files and configuration."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"example:")),(0,i.kt)("p",null,"Create a codemod package called foobar with a preset."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'$ codeshift init --package-name="foobar" --preset="sort-imports" ~/Desktop'))),(0,i.kt)("h2",{id:"validate"},"validate"),(0,i.kt)("p",null,"Subcommand that validates a codemod package at the desired path."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"example:")),(0,i.kt)("p",null,'Validate a codemod package called "my-codemods".'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ codeshift validate ./codemods/my-codemods"))),(0,i.kt)("p",null,"Validate a codemod package from the current working directory"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ codeshift validate"))))}c.isMDXComponent=!0}}]);