"use strict";(self.webpackChunkmuidev=self.webpackChunkmuidev||[]).push([[4607],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2})},"./src/components/Layout/Grid.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FeatureGrid:()=>FeatureGrid,Interactive:()=>Interactive,MediaGrid:()=>MediaGrid,ResponsiveColumns:()=>ResponsiveColumns,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Grid_stories});var react=__webpack_require__("./node_modules/react/index.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),proxy=__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","cols","gap","autoFlow","autoRows","autoCols","alignItems","justifyItems","className","animate","customizable","variant"],Grid=_ref=>{let{children,cols={xs:1,sm:2,md:3,lg:4,xl:5},gap="default",autoFlow="row",autoRows="auto",autoCols="auto",alignItems="stretch",justifyItems="stretch",className="",animate=!0,customizable=!1,variant="default"}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const[isCustomizing,setIsCustomizing]=react.useState(!1),[settings,setSettings]=react.useState({gap,autoFlow,alignItems,justifyItems}),gapClasses={none:"gap-0",small:"gap-2",default:"gap-4",large:"gap-6",xlarge:"gap-8"},autoFlowClasses={row:"grid-flow-row",col:"grid-flow-col",dense:"grid-flow-dense","row-dense":"grid-flow-row-dense","col-dense":"grid-flow-col-dense"},alignItemsClasses={start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch",baseline:"items-baseline"},justifyItemsClasses={start:"justify-items-start",center:"justify-items-center",end:"justify-items-end",stretch:"justify-items-stretch"},itemAnimation={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.3,ease:"easeOut"}}};return(0,jsx_runtime.jsxs)("div",{className:"space-y-4",children:[customizable&&(0,jsx_runtime.jsx)("div",{className:"flex justify-end",children:(0,jsx_runtime.jsx)(proxy.P.button,{variants:{hover:{scale:1.05},tap:{scale:.95}},whileHover:"hover",whileTap:"tap",onClick:()=>setIsCustomizing(!isCustomizing),className:"p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",children:(0,jsx_runtime.jsx)(index_esm.VSk,{className:"w-4 h-4 text-gray-500 dark:text-gray-400"})})}),(0,jsx_runtime.jsx)(AnimatePresence.N,{children:isCustomizing&&(0,jsx_runtime.jsx)(proxy.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg space-y-4",children:(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("label",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Gap"}),(0,jsx_runtime.jsx)("select",{value:settings.gap,onChange:e=>setSettings((0,objectSpread2.A)((0,objectSpread2.A)({},settings),{},{gap:e.target.value})),className:"mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm",children:Object.keys(gapClasses).map((key=>(0,jsx_runtime.jsx)("option",{value:key,children:key.charAt(0).toUpperCase()+key.slice(1)},key)))})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("label",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Auto Flow"}),(0,jsx_runtime.jsx)("select",{value:settings.autoFlow,onChange:e=>setSettings((0,objectSpread2.A)((0,objectSpread2.A)({},settings),{},{autoFlow:e.target.value})),className:"mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm",children:Object.keys(autoFlowClasses).map((key=>(0,jsx_runtime.jsx)("option",{value:key,children:key.charAt(0).toUpperCase()+key.slice(1)},key)))})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("label",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Align Items"}),(0,jsx_runtime.jsx)("select",{value:settings.alignItems,onChange:e=>setSettings((0,objectSpread2.A)((0,objectSpread2.A)({},settings),{},{alignItems:e.target.value})),className:"mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm",children:Object.keys(alignItemsClasses).map((key=>(0,jsx_runtime.jsx)("option",{value:key,children:key.charAt(0).toUpperCase()+key.slice(1)},key)))})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("label",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Justify Items"}),(0,jsx_runtime.jsx)("select",{value:settings.justifyItems,onChange:e=>setSettings((0,objectSpread2.A)((0,objectSpread2.A)({},settings),{},{justifyItems:e.target.value})),className:"mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm",children:Object.keys(justifyItemsClasses).map((key=>(0,jsx_runtime.jsx)("option",{value:key,children:key.charAt(0).toUpperCase()+key.slice(1)},key)))})]})]})})}),(0,jsx_runtime.jsx)(proxy.P.div,(0,objectSpread2.A)((0,objectSpread2.A)({variants:animate?{hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.4,ease:"easeOut",staggerChildren:.1}}}:void 0,initial:"hidden",animate:"visible",className:"\n          grid\n          ".concat((()=>{const breakpoints={xs:"",sm:"sm:",md:"md:",lg:"lg:",xl:"xl:","2xl":"2xl:"};return Object.entries(cols).map((_ref2=>{let[breakpoint,value]=_ref2;return"".concat(breakpoints[breakpoint],"grid-cols-").concat(value)})).join(" ")})(),"\n          ").concat(gapClasses[settings.gap],"\n          ").concat(autoFlowClasses[settings.autoFlow],"\n          ").concat(alignItemsClasses[settings.alignItems],"\n          ").concat(justifyItemsClasses[settings.justifyItems],"\n          ").concat({default:"",bordered:"divide-x divide-y divide-gray-200 dark:divide-gray-700",cells:"[&>*]:border [&>*]:border-gray-200 dark:[&>*]:border-gray-700 [&>*]:rounded-lg [&>*]:p-4",cards:"[&>*]:bg-white dark:[&>*]:bg-gray-800 [&>*]:shadow-lg dark:[&>*]:shadow-gray-900/10 [&>*]:rounded-lg [&>*]:p-4"}[variant],"\n          ").concat(className,"\n        "),style:{gridAutoRows:autoRows,gridAutoColumns:autoCols}},props),{},{children:react.Children.map(children,((child,index)=>react.isValidElement(child)?(0,jsx_runtime.jsx)(proxy.P.div,{variants:animate?itemAnimation:void 0,custom:index,className:"h-full",children:child}):child))}))]})},Layout_Grid=Grid;Grid.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{cols:{defaultValue:{value:"{\r\n  xs: 1,\r\n  sm: 2,\r\n  md: 3,\r\n  lg: 4,\r\n  xl: 5,\r\n}",computed:!1},required:!1},gap:{defaultValue:{value:"'default'",computed:!1},required:!1},autoFlow:{defaultValue:{value:"'row'",computed:!1},required:!1},autoRows:{defaultValue:{value:"'auto'",computed:!1},required:!1},autoCols:{defaultValue:{value:"'auto'",computed:!1},required:!1},alignItems:{defaultValue:{value:"'stretch'",computed:!1},required:!1},justifyItems:{defaultValue:{value:"'stretch'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},animate:{defaultValue:{value:"true",computed:!1},required:!1},customizable:{defaultValue:{value:"false",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},required:!1}}};const Grid_stories={title:"Layout/Grid",component:Layout_Grid,parameters:{layout:"padded",docs:{description:{component:"A responsive grid layout component with customizable columns and styling options. Features modern animations and professional design."}}},argTypes:{gap:{control:"select",options:["none","small","default","large","xlarge"],description:"Space between grid items"},autoFlow:{control:"select",options:["row","col","dense","row-dense","col-dense"],description:"Grid auto flow direction"},alignItems:{control:"select",options:["start","center","end","stretch","baseline"],description:"Vertical alignment of grid items"},justifyItems:{control:"select",options:["start","center","end","stretch"],description:"Horizontal alignment of grid items"},variant:{control:"select",options:["default","bordered","cells","cards"],description:"Visual style variant"},animate:{control:"boolean",description:"Enable animations"},customizable:{control:"boolean",description:"Enable customization"}}},Default={args:{children:[1,2,3,4,5,6].map((item=>(0,jsx_runtime.jsxs)("div",{className:"p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]",children:[(0,jsx_runtime.jsx)("div",{className:"w-12 h-12 mb-4 bg-gradient-to-br from-primary-500/10 to-primary-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",children:(0,jsx_runtime.jsx)(index_esm.FrA,{className:"w-6 h-6 text-primary-500 group-hover:rotate-12 transition-transform duration-300"})}),(0,jsx_runtime.jsxs)("h3",{className:"text-lg font-semibold mb-2 group-hover:text-primary-500 transition-colors",children:["Grid Item ",item]}),(0,jsx_runtime.jsx)("p",{className:"text-gray-600 dark:text-gray-300",children:"Professional grid item with modern animations"})]},item)))}},ResponsiveColumns=()=>(0,jsx_runtime.jsx)(Layout_Grid,{cols:{xs:1,sm:2,md:3,lg:4,xl:5},gap:"large",variant:"cards",children:[1,2,3,4,5,6,7,8,9,10].map((item=>(0,jsx_runtime.jsx)("div",{className:"group relative overflow-hidden",children:(0,jsx_runtime.jsxs)("div",{className:"p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300",children:[(0,jsx_runtime.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"}),(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)("div",{className:"w-12 h-12 mb-4 bg-gradient-to-br from-primary-500/10 to-primary-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",children:(0,jsx_runtime.jsx)(index_esm.Iy6,{className:"w-6 h-6 text-primary-500 group-hover:rotate-12 transition-transform duration-300"})}),(0,jsx_runtime.jsxs)("h3",{className:"text-lg font-semibold mb-2 group-hover:text-primary-500 transition-colors",children:["Responsive Item ",item]}),(0,jsx_runtime.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Adapts to different screen sizes with smooth transitions"})]})]})},item)))}),FeatureGrid=()=>(0,jsx_runtime.jsx)(Layout_Grid,{cols:{xs:1,sm:2,lg:3},gap:"large",variant:"cards",children:[{icon:index_esm.pcC,title:"Advanced Security",description:"Built-in protection and validation",gradient:"from-blue-500 to-indigo-500"},{icon:index_esm.Ojn,title:"Smart Features",description:"Intelligent component behavior",gradient:"from-primary-500 to-primary-600"},{icon:index_esm.ARf,title:"Performance",description:"Optimized for speed and efficiency",gradient:"from-purple-500 to-pink-500"},{icon:index_esm.FrA,title:"Quick Actions",description:"Instant response and feedback",gradient:"from-green-500 to-emerald-500"},{icon:index_esm.VeH,title:"Global Access",description:"Available worldwide with low latency",gradient:"from-orange-500 to-red-500"},{icon:index_esm.s_k,title:"Modern Stack",description:"Built with latest technologies",gradient:"from-pink-500 to-rose-500"}].map(((feature,index)=>(0,jsx_runtime.jsx)("div",{className:"group relative overflow-hidden",children:(0,jsx_runtime.jsxs)("div",{className:"p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500",children:[(0,jsx_runtime.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r ".concat(feature.gradient," opacity-0 group-hover:opacity-10 transition-opacity duration-500")}),(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)("div",{className:"w-16 h-16 mb-6 bg-gradient-to-br from-primary-500/10 to-primary-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500",children:(0,jsx_runtime.jsx)(feature.icon,{className:"w-8 h-8 text-primary-500 transform group-hover:rotate-12 transition-transform duration-500"})}),(0,jsx_runtime.jsx)("h3",{className:"text-xl font-semibold mb-3",children:feature.title}),(0,jsx_runtime.jsx)("p",{className:"text-gray-600 dark:text-gray-300 mb-6",children:feature.description}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-2 text-primary-500 group-hover:translate-x-2 transition-transform duration-300",children:[(0,jsx_runtime.jsx)("span",{className:"font-medium",children:"Learn more"}),(0,jsx_runtime.jsx)(index_esm.dyV,{className:"w-4 h-4"})]})]})]})},index)))}),MediaGrid=()=>(0,jsx_runtime.jsx)(Layout_Grid,{cols:{xs:2,sm:3,md:4,lg:5},gap:"default",variant:"cards",children:[{icon:index_esm.fZZ,label:"Photos",count:"2.4k",color:"text-blue-500",gradient:"from-blue-500 to-indigo-500"},{icon:index_esm.pVQ,label:"Videos",count:"1.2k",color:"text-purple-500",gradient:"from-purple-500 to-pink-500"},{icon:index_esm.$Mw,label:"Music",count:"3.8k",color:"text-pink-500",gradient:"from-pink-500 to-rose-500"},{icon:index_esm.QuH,label:"Documents",count:"892",color:"text-green-500",gradient:"from-green-500 to-emerald-500"},{icon:index_esm.UDU,label:"Projects",count:"156",color:"text-yellow-500",gradient:"from-yellow-500 to-orange-500"}].map(((item,index)=>(0,jsx_runtime.jsx)("div",{className:"group relative overflow-hidden",children:(0,jsx_runtime.jsxs)("div",{className:"p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300",children:[(0,jsx_runtime.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r ".concat(item.gradient," opacity-0 group-hover:opacity-10 transition-opacity duration-300")}),(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)("div",{className:"w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",children:(0,jsx_runtime.jsx)(item.icon,{className:"w-7 h-7 ".concat(item.color," transform group-hover:rotate-12 transition-transform duration-300")})}),(0,jsx_runtime.jsx)("h3",{className:"text-lg font-semibold text-center mb-1 group-hover:text-primary-500 transition-colors",children:item.label}),(0,jsx_runtime.jsxs)("p",{className:"text-sm text-center text-gray-500 dark:text-gray-400",children:[item.count," items"]})]})]})},index)))}),Interactive={args:{customizable:!0,animate:!0,variant:"cards",cols:{xs:1,sm:2,md:3},gap:"large",children:[1,2,3,4,5,6].map((item=>(0,jsx_runtime.jsx)("div",{className:"group relative overflow-hidden",children:(0,jsx_runtime.jsxs)("div",{className:"p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500",children:[(0,jsx_runtime.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"}),(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)("div",{className:"w-16 h-16 mb-6 bg-gradient-to-br from-primary-500/10 to-primary-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500",children:(0,jsx_runtime.jsx)(index_esm.X3y,{className:"w-8 h-8 text-primary-500 transform group-hover:rotate-12 transition-transform duration-500"})}),(0,jsx_runtime.jsxs)("h3",{className:"text-xl font-semibold mb-3 group-hover:text-primary-500 transition-colors",children:["Interactive Item ",item]}),(0,jsx_runtime.jsx)("p",{className:"text-gray-600 dark:text-gray-300 mb-6",children:"Try customizing the grid layout using the controls"}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-2 text-primary-500 group-hover:translate-x-2 transition-transform duration-300",children:[(0,jsx_runtime.jsx)("span",{className:"font-medium",children:"Customize"}),(0,jsx_runtime.jsx)(index_esm.dyV,{className:"w-4 h-4"})]})]})]})},item)))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: [1, 2, 3, 4, 5, 6].map(item => <div key={item} className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">\r\n        <div className="w-12 h-12 mb-4 bg-gradient-to-br from-primary-500/10 to-primary-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">\r\n          <FiZap className="w-6 h-6 text-primary-500 group-hover:rotate-12 transition-transform duration-300" />\r\n        </div>\r\n        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-500 transition-colors">\r\n          Grid Item {item}\r\n        </h3>\r\n        <p className="text-gray-600 dark:text-gray-300">\r\n          Professional grid item with modern animations\r\n        </p>\r\n      </div>)\n  }\n}',...Default.parameters?.docs?.source}}},ResponsiveColumns.parameters={...ResponsiveColumns.parameters,docs:{...ResponsiveColumns.parameters?.docs,source:{originalSource:'() => <Grid cols={{\n  xs: 1,\n  sm: 2,\n  md: 3,\n  lg: 4,\n  xl: 5\n}} gap="large" variant="cards">\r\n    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <div key={item} className="group relative overflow-hidden">\r\n        <div className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">\r\n          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />\r\n          <div className="relative">\r\n            <div className="w-12 h-12 mb-4 bg-gradient-to-br from-primary-500/10 to-primary-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">\r\n              <FiLayout className="w-6 h-6 text-primary-500 group-hover:rotate-12 transition-transform duration-300" />\r\n            </div>\r\n            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-500 transition-colors">\r\n              Responsive Item {item}\r\n            </h3>\r\n            <p className="text-sm text-gray-600 dark:text-gray-300">\r\n              Adapts to different screen sizes with smooth transitions\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>)}\r\n  </Grid>',...ResponsiveColumns.parameters?.docs?.source}}},FeatureGrid.parameters={...FeatureGrid.parameters,docs:{...FeatureGrid.parameters?.docs,source:{originalSource:"() => <Grid cols={{\n  xs: 1,\n  sm: 2,\n  lg: 3\n}} gap=\"large\" variant=\"cards\">\r\n    {[{\n    icon: FiShield,\n    title: 'Advanced Security',\n    description: 'Built-in protection and validation',\n    gradient: 'from-blue-500 to-indigo-500'\n  }, {\n    icon: FiCpu,\n    title: 'Smart Features',\n    description: 'Intelligent component behavior',\n    gradient: 'from-primary-500 to-primary-600'\n  }, {\n    icon: FiTrendingUp,\n    title: 'Performance',\n    description: 'Optimized for speed and efficiency',\n    gradient: 'from-purple-500 to-pink-500'\n  }, {\n    icon: FiZap,\n    title: 'Quick Actions',\n    description: 'Instant response and feedback',\n    gradient: 'from-green-500 to-emerald-500'\n  }, {\n    icon: FiGlobe,\n    title: 'Global Access',\n    description: 'Available worldwide with low latency',\n    gradient: 'from-orange-500 to-red-500'\n  }, {\n    icon: FiLayers,\n    title: 'Modern Stack',\n    description: 'Built with latest technologies',\n    gradient: 'from-pink-500 to-rose-500'\n  }].map((feature, index) => <div key={index} className=\"group relative overflow-hidden\">\r\n        <div className=\"p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500\">\r\n          <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />\r\n          <div className=\"relative\">\r\n            <div className=\"w-16 h-16 mb-6 bg-gradient-to-br from-primary-500/10 to-primary-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500\">\r\n              <feature.icon className=\"w-8 h-8 text-primary-500 transform group-hover:rotate-12 transition-transform duration-500\" />\r\n            </div>\r\n            <h3 className=\"text-xl font-semibold mb-3\">{feature.title}</h3>\r\n            <p className=\"text-gray-600 dark:text-gray-300 mb-6\">\r\n              {feature.description}\r\n            </p>\r\n            <div className=\"flex items-center gap-2 text-primary-500 group-hover:translate-x-2 transition-transform duration-300\">\r\n              <span className=\"font-medium\">Learn more</span>\r\n              <FiArrowRight className=\"w-4 h-4\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>)}\r\n  </Grid>",...FeatureGrid.parameters?.docs?.source}}},MediaGrid.parameters={...MediaGrid.parameters,docs:{...MediaGrid.parameters?.docs,source:{originalSource:"() => <Grid cols={{\n  xs: 2,\n  sm: 3,\n  md: 4,\n  lg: 5\n}} gap=\"default\" variant=\"cards\">\r\n    {[{\n    icon: FiImage,\n    label: 'Photos',\n    count: '2.4k',\n    color: 'text-blue-500',\n    gradient: 'from-blue-500 to-indigo-500'\n  }, {\n    icon: FiVideo,\n    label: 'Videos',\n    count: '1.2k',\n    color: 'text-purple-500',\n    gradient: 'from-purple-500 to-pink-500'\n  }, {\n    icon: FiMusic,\n    label: 'Music',\n    count: '3.8k',\n    color: 'text-pink-500',\n    gradient: 'from-pink-500 to-rose-500'\n  }, {\n    icon: FiFile,\n    label: 'Documents',\n    count: '892',\n    color: 'text-green-500',\n    gradient: 'from-green-500 to-emerald-500'\n  }, {\n    icon: FiFolder,\n    label: 'Projects',\n    count: '156',\n    color: 'text-yellow-500',\n    gradient: 'from-yellow-500 to-orange-500'\n  }].map((item, index) => <div key={index} className=\"group relative overflow-hidden\">\r\n        <div className=\"p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300\">\r\n          <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />\r\n          <div className=\"relative\">\r\n            <div className=\"w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300\">\r\n              <item.icon className={`w-7 h-7 ${item.color} transform group-hover:rotate-12 transition-transform duration-300`} />\r\n            </div>\r\n            <h3 className=\"text-lg font-semibold text-center mb-1 group-hover:text-primary-500 transition-colors\">\r\n              {item.label}\r\n            </h3>\r\n            <p className=\"text-sm text-center text-gray-500 dark:text-gray-400\">\r\n              {item.count} items\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>)}\r\n  </Grid>",...MediaGrid.parameters?.docs?.source}}},Interactive.parameters={...Interactive.parameters,docs:{...Interactive.parameters?.docs,source:{originalSource:'{\n  args: {\n    customizable: true,\n    animate: true,\n    variant: \'cards\',\n    cols: {\n      xs: 1,\n      sm: 2,\n      md: 3\n    },\n    gap: \'large\',\n    children: [1, 2, 3, 4, 5, 6].map(item => <div key={item} className="group relative overflow-hidden">\r\n        <div className="p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">\r\n          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />\r\n          <div className="relative">\r\n            <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary-500/10 to-primary-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">\r\n              <FiBox className="w-8 h-8 text-primary-500 transform group-hover:rotate-12 transition-transform duration-500" />\r\n            </div>\r\n            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-500 transition-colors">\r\n              Interactive Item {item}\r\n            </h3>\r\n            <p className="text-gray-600 dark:text-gray-300 mb-6">\r\n              Try customizing the grid layout using the controls\r\n            </p>\r\n            <div className="flex items-center gap-2 text-primary-500 group-hover:translate-x-2 transition-transform duration-300">\r\n              <span className="font-medium">Customize</span>\r\n              <FiArrowRight className="w-4 h-4" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>)\n  }\n}',...Interactive.parameters?.docs?.source}}};const __namedExportsOrder=["Default","ResponsiveColumns","FeatureGrid","MediaGrid","Interactive"]},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>AnimatePresence});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs"),MotionConfigContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0}),{nonce}=(0,react.useContext)(MotionConfigContext.Q);return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return nonce&&(style.nonce=nonce),document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),(0,jsx_runtime.jsx)(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size,children:react.cloneElement(children,{ref})})}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.M)(newChildrenMap),id=(0,react.useId)(),memoizedOnExitComplete=(0,react.useCallback)((childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()}),[presenceChildren,onExitComplete]),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:memoizedOnExitComplete,register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?[Math.random(),memoizedOnExitComplete]:[isPresent,memoizedOnExitComplete]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=(0,jsx_runtime.jsx)(PopChild,{isPresent,children})),(0,jsx_runtime.jsx)(PresenceContext.t.Provider,{value:context,children})};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),errors=__webpack_require__("./node_modules/motion-utils/dist/es/errors.mjs");const getChildKey=child=>child.key||"";function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}var use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");const AnimatePresence=({children,exitBeforeEnter,custom,initial=!0,onExitComplete,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.V)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const presentChildren=(0,react.useMemo)((()=>onlyElements(children)),[children]),presentKeys=presentChildren.map(getChildKey),isInitialRender=(0,react.useRef)(!0),pendingPresentChildren=(0,react.useRef)(presentChildren),exitComplete=(0,use_constant.M)((()=>new Map)),[diffedChildren,setDiffedChildren]=(0,react.useState)(presentChildren),[renderedChildren,setRenderedChildren]=(0,react.useState)(presentChildren);(0,use_isomorphic_effect.E)((()=>{isInitialRender.current=!1,pendingPresentChildren.current=presentChildren;for(let i=0;i<renderedChildren.length;i++){const key=getChildKey(renderedChildren[i]);presentKeys.includes(key)?exitComplete.delete(key):!0!==exitComplete.get(key)&&exitComplete.set(key,!1)}}),[renderedChildren,presentKeys.length,presentKeys.join("-")]);const exitingChildren=[];if(presentChildren!==diffedChildren){let nextChildren=[...presentChildren];for(let i=0;i<renderedChildren.length;i++){const child=renderedChildren[i],key=getChildKey(child);presentKeys.includes(key)||(nextChildren.splice(i,0,child),exitingChildren.push(child))}return"wait"===mode&&exitingChildren.length&&(nextChildren=exitingChildren),setRenderedChildren(onlyElements(nextChildren)),void setDiffedChildren(presentChildren)}const{forceRender}=(0,react.useContext)(LayoutGroupContext.L);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:renderedChildren.map((child=>{const key=getChildKey(child),isPresent=presentChildren===renderedChildren||presentKeys.includes(key);return(0,jsx_runtime.jsx)(PresenceChild,{isPresent,initial:!(isInitialRender.current&&!initial)&&void 0,custom:isPresent?void 0:custom,presenceAffectsLayout,mode,onExitComplete:isPresent?void 0:()=>{if(!exitComplete.has(key))return;exitComplete.set(key,!0);let isEveryExitComplete=!0;exitComplete.forEach((isExitComplete=>{isExitComplete||(isEveryExitComplete=!1)})),isEveryExitComplete&&(null==forceRender||forceRender(),setRenderedChildren(pendingPresentChildren.current),onExitComplete&&onExitComplete())},children:child},key)}))})}}}]);