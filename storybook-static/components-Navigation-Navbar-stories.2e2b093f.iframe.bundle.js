"use strict";(self.webpackChunkmuilibrary=self.webpackChunkmuilibrary||[]).push([[1409],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2})},"./src/components/Navigation/Navbar.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Default:()=>Default,Floating:()=>Floating,Minimal:()=>Minimal,MobileMenu:()=>MobileMenu,Positions:()=>Positions,Sizes:()=>Sizes,Transparent:()=>Transparent,WithFeatures:()=>WithFeatures,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Navbar_stories});var react=__webpack_require__("./node_modules/react/index.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),proxy=__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["brand","items","userMenu","notifications","variant","position","color","size","className","onNotificationClick"],Navbar=_ref=>{let{brand,items=[],userMenu,notifications,variant="default",position="fixed",color="light",size="medium",className,onNotificationClick}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const[isOpen,setIsOpen]=(0,react.useState)(!1),[activeDropdown,setActiveDropdown]=(0,react.useState)(null),[isScrolled,setIsScrolled]=(0,react.useState)(!1),dropdownRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{const handleScroll=()=>{setIsScrolled(window.scrollY>0)},handleClickOutside=event=>{dropdownRef.current&&!dropdownRef.current.contains(event.target)&&setActiveDropdown(null)};return window.addEventListener("scroll",handleScroll),document.addEventListener("mousedown",handleClickOutside),()=>{window.removeEventListener("scroll",handleScroll),document.removeEventListener("mousedown",handleClickOutside)}}),[]);const sizes={small:{height:"h-14",padding:"px-4",text:"text-sm",logo:"h-6",icon:"w-4 h-4",avatar:"w-7 h-7"},medium:{height:"h-16",padding:"px-6",text:"text-base",logo:"h-8",icon:"w-5 h-5",avatar:"w-8 h-8"},large:{height:"h-20",padding:"px-8",text:"text-lg",logo:"h-10",icon:"w-6 h-6",avatar:"w-10 h-10"}},colors={light:{nav:"bg-white border-gray-200",text:"text-gray-700",hover:"hover:text-gray-900 hover:bg-gray-50",active:"text-blue-600",dropdown:"bg-white border-gray-200 shadow-lg",button:"text-gray-500 hover:text-gray-700",scroll:"shadow-md"},dark:{nav:"bg-gray-900 border-gray-700",text:"text-gray-300",hover:"hover:text-white hover:bg-gray-800",active:"text-blue-400",dropdown:"bg-gray-800 border-gray-700 shadow-lg",button:"text-gray-400 hover:text-white",scroll:"shadow-md shadow-gray-900/20"},transparent:{nav:"bg-transparent",text:"text-white",hover:"hover:text-gray-200 hover:bg-white/10",active:"text-blue-300",dropdown:"bg-gray-900/90 backdrop-blur-sm border-gray-700 shadow-lg",button:"text-white/90 hover:text-white",scroll:"bg-white/80 backdrop-blur-sm shadow-md"}},variants={default:{nav:"border-b",item:"px-3 py-2 rounded-md",dropdown:"border rounded-lg"},floating:{nav:"mx-4 mt-4 rounded-xl border shadow-lg",item:"px-3 py-2 rounded-md",dropdown:"border rounded-lg"},minimal:{nav:"",item:"px-3 py-2",dropdown:"rounded-lg shadow-lg"}},navClasses="\n    ".concat({fixed:"fixed top-0 left-0 right-0 z-50",sticky:"sticky top-0 z-50",relative:"relative"}[position],"\n    ").concat(sizes[size].height,"\n    ").concat(sizes[size].padding,"\n    ").concat(variants[variant].nav,"\n    ").concat(colors[color].nav,"\n    ").concat(isScrolled&&colors[color].scroll,"\n    transition-all duration-200\n    ").concat(className||"","\n  "),renderDropdownContent=function(items){let parent=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,jsx_runtime.jsx)(proxy.P.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"\n        absolute right-0 mt-2 w-48\n        ".concat(variants[variant].dropdown,"\n        ").concat(colors[color].dropdown,"\n        overflow-hidden\n        ").concat("user"===parent?"right-0":"left-0","\n      "),children:(0,jsx_runtime.jsx)("div",{className:"py-1",children:items.map(((item,index)=>(0,jsx_runtime.jsx)("a",{href:item.href,onClick:e=>{item.onClick&&(e.preventDefault(),item.onClick()),setActiveDropdown(null)},className:"\n              block px-4 py-2\n              ".concat(sizes[size].text,"\n              ").concat(colors[color].text,"\n              ").concat(colors[color].hover,"\n              transition-colors duration-200\n            "),children:(0,jsx_runtime.jsxs)("div",{className:"flex items-center space-x-2",children:[item.icon&&(0,jsx_runtime.jsx)(item.icon,{className:sizes[size].icon}),(0,jsx_runtime.jsx)("span",{children:item.label})]})},index)))})})};return(0,jsx_runtime.jsxs)("nav",(0,objectSpread2.A)((0,objectSpread2.A)({className:navClasses},props),{},{children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-between h-full",children:[(0,jsx_runtime.jsx)("div",{className:"flex-shrink-0",children:(0,jsx_runtime.jsxs)("a",{href:(null==brand?void 0:brand.href)||"/",className:"flex items-center space-x-3",children:[(null==brand?void 0:brand.logo)&&(0,jsx_runtime.jsx)("img",{src:brand.logo,alt:brand.name,className:sizes[size].logo}),(null==brand?void 0:brand.name)&&(0,jsx_runtime.jsx)("span",{className:"font-semibold ".concat(sizes[size].text," ").concat(colors[color].text),children:brand.name})]})}),(0,jsx_runtime.jsxs)("div",{className:"hidden md:flex items-center space-x-1",children:[items.map(((item,index)=>(0,jsx_runtime.jsxs)("div",{className:"relative",ref:dropdownRef,children:[item.items?(0,jsx_runtime.jsxs)("button",{onClick:()=>setActiveDropdown(activeDropdown===index?null:index),className:"\n                    flex items-center space-x-1\n                    ".concat(variants[variant].item,"\n                    ").concat(sizes[size].text,"\n                    ").concat(colors[color].text,"\n                    ").concat(colors[color].hover,"\n                    ").concat(activeDropdown===index?colors[color].active:"","\n                    transition-colors duration-200\n                  "),children:[(0,jsx_runtime.jsx)("span",{children:item.label}),(0,jsx_runtime.jsx)(index_esm.fK4,{className:"\n                    ".concat(sizes[size].icon,"\n                    transform transition-transform duration-200\n                    ").concat(activeDropdown===index?"rotate-180":"","\n                  ")})]}):(0,jsx_runtime.jsx)("a",{href:item.href,className:"\n                    ".concat(variants[variant].item,"\n                    ").concat(sizes[size].text,"\n                    ").concat(colors[color].text,"\n                    ").concat(colors[color].hover,"\n                    transition-colors duration-200\n                  "),children:item.label}),(0,jsx_runtime.jsx)(AnimatePresence.N,{children:item.items&&activeDropdown===index&&renderDropdownContent(item.items)})]},index))),notifications&&(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsxs)("button",{onClick:()=>{setActiveDropdown("notifications"===activeDropdown?null:"notifications"),null==onNotificationClick||onNotificationClick()},className:"\n                  relative p-2 rounded-full\n                  ".concat(colors[color].button,"\n                  transition-colors duration-200\n                "),children:[(0,jsx_runtime.jsx)(index_esm.zd,{className:sizes[size].icon}),notifications.unread>0&&(0,jsx_runtime.jsxs)("span",{className:"absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 flex h-5 w-5",children:[(0,jsx_runtime.jsx)("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"}),(0,jsx_runtime.jsx)("span",{className:"relative inline-flex rounded-full h-5 w-5 bg-red-500 text-white text-xs items-center justify-center",children:notifications.unread})]})]}),(0,jsx_runtime.jsx)(AnimatePresence.N,{children:"notifications"===activeDropdown&&renderDropdownContent(notifications.items,"notifications")})]}),userMenu&&(0,jsx_runtime.jsxs)("div",{className:"relative ml-3",children:[(0,jsx_runtime.jsxs)("button",{onClick:()=>setActiveDropdown("user"===activeDropdown?null:"user"),className:"flex items-center space-x-3",children:[userMenu.avatar?(0,jsx_runtime.jsx)("img",{src:userMenu.avatar,alt:userMenu.name,className:"".concat(sizes[size].avatar," rounded-full object-cover")}):(0,jsx_runtime.jsx)("div",{className:"\n                    ".concat(sizes[size].avatar,"\n                    rounded-full\n                    bg-gray-200\n                    flex items-center justify-center\n                    ").concat(colors[color].text,"\n                  "),children:(0,jsx_runtime.jsx)(index_esm.JXP,{className:sizes[size].icon})}),(0,jsx_runtime.jsxs)("div",{className:"hidden lg:block",children:[(0,jsx_runtime.jsx)("div",{className:"".concat(sizes[size].text," font-medium ").concat(colors[color].text),children:userMenu.name}),userMenu.role&&(0,jsx_runtime.jsx)("div",{className:"text-sm ".concat(colors[color].text," opacity-75"),children:userMenu.role})]}),(0,jsx_runtime.jsx)(index_esm.fK4,{className:"\n                  ".concat(sizes[size].icon,"\n                  ").concat(colors[color].text,"\n                  transform transition-transform duration-200\n                  ").concat("user"===activeDropdown?"rotate-180":"","\n                ")})]}),(0,jsx_runtime.jsx)(AnimatePresence.N,{children:"user"===activeDropdown&&renderDropdownContent(userMenu.items,"user")})]})]}),(0,jsx_runtime.jsx)("button",{onClick:()=>setIsOpen(!isOpen),className:"md:hidden p-2 rounded-md ".concat(colors[color].button),children:isOpen?(0,jsx_runtime.jsx)(index_esm.yGN,{className:sizes[size].icon}):(0,jsx_runtime.jsx)(index_esm.ND1,{className:sizes[size].icon})})]}),(0,jsx_runtime.jsx)(AnimatePresence.N,{children:isOpen&&(0,jsx_runtime.jsx)(proxy.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"md:hidden ".concat(colors[color].nav," border-t ").concat(variants[variant].nav),children:(0,jsx_runtime.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:items.map(((item,index)=>(0,jsx_runtime.jsx)("div",{children:item.items?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("button",{onClick:()=>setActiveDropdown(activeDropdown==="mobile-".concat(index)?null:"mobile-".concat(index)),className:"\n                          w-full flex items-center justify-between\n                          ".concat(variants[variant].item,"\n                          ").concat(sizes[size].text,"\n                          ").concat(colors[color].text,"\n                          ").concat(colors[color].hover,"\n                          ").concat(activeDropdown==="mobile-".concat(index)?colors[color].active:"","\n                        "),children:[(0,jsx_runtime.jsx)("span",{children:item.label}),(0,jsx_runtime.jsx)(index_esm.fK4,{className:"\n                          ".concat(sizes[size].icon,"\n                          transform transition-transform duration-200\n                          ").concat(activeDropdown==="mobile-".concat(index)?"rotate-180":"","\n                        ")})]}),(0,jsx_runtime.jsx)(AnimatePresence.N,{children:activeDropdown==="mobile-".concat(index)&&(0,jsx_runtime.jsx)(proxy.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"pl-4",children:item.items.map(((subItem,subIndex)=>(0,jsx_runtime.jsx)("a",{href:subItem.href,onClick:()=>{subItem.onClick&&subItem.onClick(),setIsOpen(!1)},className:"\n                                  block\n                                  ".concat(variants[variant].item,"\n                                  ").concat(sizes[size].text,"\n                                  ").concat(colors[color].text,"\n                                  ").concat(colors[color].hover,"\n                                "),children:subItem.label},subIndex)))})})]}):(0,jsx_runtime.jsx)("a",{href:item.href,onClick:()=>setIsOpen(!1),className:"\n                        block\n                        ".concat(variants[variant].item,"\n                        ").concat(sizes[size].text,"\n                        ").concat(colors[color].text,"\n                        ").concat(colors[color].hover,"\n                      "),children:item.label})},index)))})})})]}))},Navigation_Navbar=Navbar;Navbar.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{items:{defaultValue:{value:"[]",computed:!1},description:"Navigation items",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",description:"Item label",required:!0},href:{name:"string",description:"Item link URL",required:!1},items:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",description:"Dropdown item label",required:!0},href:{name:"string",description:"Dropdown item link URL",required:!1},onClick:{name:"func",description:"Dropdown item click handler",required:!1},icon:{name:"elementType",description:"Dropdown item icon",required:!1}}},description:"Dropdown items",required:!1}}}},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},description:"Visual style variant",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'floating'",computed:!1},{value:"'minimal'",computed:!1}]},required:!1},position:{defaultValue:{value:"'fixed'",computed:!1},description:"Position style",type:{name:"enum",value:[{value:"'fixed'",computed:!1},{value:"'sticky'",computed:!1},{value:"'relative'",computed:!1}]},required:!1},color:{defaultValue:{value:"'light'",computed:!1},description:"Color theme",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1},{value:"'transparent'",computed:!1}]},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size preset",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},brand:{description:"Brand configuration",type:{name:"shape",value:{logo:{name:"string",description:"Brand logo URL",required:!1},name:{name:"string",description:"Brand name",required:!1},href:{name:"string",description:"Brand link URL",required:!1}}},required:!1},userMenu:{description:"User menu configuration",type:{name:"shape",value:{avatar:{name:"string",description:"User avatar URL",required:!1},name:{name:"string",description:"User name",required:!1},role:{name:"string",description:"User role",required:!1},items:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",description:"Menu item label",required:!0},href:{name:"string",description:"Menu item link URL",required:!1},onClick:{name:"func",description:"Menu item click handler",required:!1},icon:{name:"elementType",description:"Menu item icon",required:!1}}},description:"User menu items",required:!1}}},required:!1},notifications:{description:"Notifications configuration",type:{name:"shape",value:{unread:{name:"number",description:"Number of unread notifications",required:!1},items:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",description:"Notification label",required:!0},href:{name:"string",description:"Notification link URL",required:!1},onClick:{name:"func",description:"Notification click handler",required:!1},icon:{name:"elementType",description:"Notification icon",required:!1}}},description:"Notification items",required:!1}}},required:!1},className:{description:"Additional CSS classes",type:{name:"string"},required:!1},onNotificationClick:{description:"Notification click handler",type:{name:"func"},required:!1}}};const Navbar_stories={title:"Navigation/Navbar",component:Navigation_Navbar,parameters:{layout:"fullscreen",docs:{description:{component:"A versatile navigation bar component with multiple variants, responsive design, and rich features."}}},argTypes:{color:{control:"select",options:["light","dark","transparent"],description:"Color theme of the navbar"},variant:{control:"select",options:["default","floating","minimal"],description:"Visual style variant"},size:{control:"select",options:["small","medium","large"],description:"Size of the navbar"},position:{control:"select",options:["fixed","sticky","relative"],description:"Position style of the navbar"}}},menuItems=[{label:"Home",href:"#",icon:index_esm.V5Y},{label:"Team",href:"#",icon:index_esm.cfS},{label:"Projects",href:"#",icon:index_esm.UDU},{label:"Settings",href:"#",icon:index_esm.VSk},{label:"Help",href:"#",icon:index_esm.lrG}],userMenu={name:"John Doe",role:"Admin",avatar:"https://i.pravatar.cc/300",items:[{label:"Profile",href:"#profile",icon:index_esm.JXP},{label:"Settings",href:"#settings",icon:index_esm.VSk},{label:"Logout",onClick:()=>console.log("Logout clicked")}]},notifications={unread:5,items:[{label:"New message from Jane",href:"#",icon:index_esm.pHD},{label:"Project update",href:"#",icon:index_esm.S8s},{label:"Task completed",href:"#",icon:index_esm.A3x}]},Default=(index_esm.GGD,{args:{brand:{name:"Company",logo:"https://via.placeholder.com/32"},items:menuItems,userMenu,notifications,variant:"default",color:"light"}}),Dark={args:{brand:{name:"Company",logo:"https://via.placeholder.com/32"},items:menuItems,userMenu,notifications,variant:"default",color:"dark"},parameters:{backgrounds:{default:"dark"}}},Transparent={args:{brand:{name:"Company",logo:"https://via.placeholder.com/32"},items:menuItems,userMenu,notifications,variant:"default",color:"transparent"},parameters:{backgrounds:{default:"gradient",values:[{name:"gradient",value:"linear-gradient(to right, #4f46e5, #7c3aed)"}]}}},Floating={args:{brand:{name:"Company",logo:"https://via.placeholder.com/32"},items:menuItems,userMenu,notifications,variant:"floating",color:"light"},parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#f3f4f6"}]}}},Minimal={args:{brand:{name:"Company",logo:"https://via.placeholder.com/32"},items:menuItems,userMenu,notifications,variant:"minimal",color:"light"}},Sizes=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-8",children:[(0,jsx_runtime.jsx)(Navigation_Navbar,{brand:{name:"Small",logo:"https://via.placeholder.com/24"},items:menuItems.slice(0,3),size:"small",color:"light"}),(0,jsx_runtime.jsx)(Navigation_Navbar,{brand:{name:"Medium",logo:"https://via.placeholder.com/32"},items:menuItems.slice(0,3),size:"medium",color:"light"}),(0,jsx_runtime.jsx)(Navigation_Navbar,{brand:{name:"Large",logo:"https://via.placeholder.com/40"},items:menuItems.slice(0,3),size:"large",color:"light"})]}),MobileMenu={args:{brand:{name:"Company",logo:"https://via.placeholder.com/32"},items:menuItems,userMenu,notifications,variant:"default",color:"light"},parameters:{viewport:{defaultViewport:"mobile1"}}},WithFeatures={args:{brand:{name:"Company",logo:"https://via.placeholder.com/32"},items:menuItems,userMenu,notifications,variant:"default",color:"light"}},Positions=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-8 pt-20",children:[(0,jsx_runtime.jsx)(Navigation_Navbar,{brand:{name:"Fixed",logo:"https://via.placeholder.com/32"},items:menuItems,position:"fixed",color:"light"}),(0,jsx_runtime.jsx)(Navigation_Navbar,{brand:{name:"Sticky",logo:"https://via.placeholder.com/32"},items:menuItems,position:"sticky",color:"light"}),(0,jsx_runtime.jsx)(Navigation_Navbar,{brand:{name:"Relative",logo:"https://via.placeholder.com/32"},items:menuItems,position:"relative",color:"light"})]});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    brand: {\n      name: 'Company',\n      logo: 'https://via.placeholder.com/32'\n    },\n    items: menuItems,\n    userMenu,\n    notifications,\n    variant: 'default',\n    color: 'light'\n  }\n}",...Default.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  args: {\n    brand: {\n      name: 'Company',\n      logo: 'https://via.placeholder.com/32'\n    },\n    items: menuItems,\n    userMenu,\n    notifications,\n    variant: 'default',\n    color: 'dark'\n  },\n  parameters: {\n    backgrounds: {\n      default: 'dark'\n    }\n  }\n}",...Dark.parameters?.docs?.source}}},Transparent.parameters={...Transparent.parameters,docs:{...Transparent.parameters?.docs,source:{originalSource:"{\n  args: {\n    brand: {\n      name: 'Company',\n      logo: 'https://via.placeholder.com/32'\n    },\n    items: menuItems,\n    userMenu,\n    notifications,\n    variant: 'default',\n    color: 'transparent'\n  },\n  parameters: {\n    backgrounds: {\n      default: 'gradient',\n      values: [{\n        name: 'gradient',\n        value: 'linear-gradient(to right, #4f46e5, #7c3aed)'\n      }]\n    }\n  }\n}",...Transparent.parameters?.docs?.source}}},Floating.parameters={...Floating.parameters,docs:{...Floating.parameters?.docs,source:{originalSource:"{\n  args: {\n    brand: {\n      name: 'Company',\n      logo: 'https://via.placeholder.com/32'\n    },\n    items: menuItems,\n    userMenu,\n    notifications,\n    variant: 'floating',\n    color: 'light'\n  },\n  parameters: {\n    backgrounds: {\n      default: 'light',\n      values: [{\n        name: 'light',\n        value: '#f3f4f6'\n      }]\n    }\n  }\n}",...Floating.parameters?.docs?.source}}},Minimal.parameters={...Minimal.parameters,docs:{...Minimal.parameters?.docs,source:{originalSource:"{\n  args: {\n    brand: {\n      name: 'Company',\n      logo: 'https://via.placeholder.com/32'\n    },\n    items: menuItems,\n    userMenu,\n    notifications,\n    variant: 'minimal',\n    color: 'light'\n  }\n}",...Minimal.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'() => <div className="space-y-8">\r\n    <Navbar brand={{\n    name: \'Small\',\n    logo: \'https://via.placeholder.com/24\'\n  }} items={menuItems.slice(0, 3)} size="small" color="light" />\r\n    <Navbar brand={{\n    name: \'Medium\',\n    logo: \'https://via.placeholder.com/32\'\n  }} items={menuItems.slice(0, 3)} size="medium" color="light" />\r\n    <Navbar brand={{\n    name: \'Large\',\n    logo: \'https://via.placeholder.com/40\'\n  }} items={menuItems.slice(0, 3)} size="large" color="light" />\r\n  </div>',...Sizes.parameters?.docs?.source}}},MobileMenu.parameters={...MobileMenu.parameters,docs:{...MobileMenu.parameters?.docs,source:{originalSource:"{\n  args: {\n    brand: {\n      name: 'Company',\n      logo: 'https://via.placeholder.com/32'\n    },\n    items: menuItems,\n    userMenu,\n    notifications,\n    variant: 'default',\n    color: 'light'\n  },\n  parameters: {\n    viewport: {\n      defaultViewport: 'mobile1'\n    }\n  }\n}",...MobileMenu.parameters?.docs?.source}}},WithFeatures.parameters={...WithFeatures.parameters,docs:{...WithFeatures.parameters?.docs,source:{originalSource:"{\n  args: {\n    brand: {\n      name: 'Company',\n      logo: 'https://via.placeholder.com/32'\n    },\n    items: menuItems,\n    userMenu,\n    notifications,\n    variant: 'default',\n    color: 'light'\n  }\n}",...WithFeatures.parameters?.docs?.source}}},Positions.parameters={...Positions.parameters,docs:{...Positions.parameters?.docs,source:{originalSource:'() => <div className="space-y-8 pt-20">\r\n    <Navbar brand={{\n    name: \'Fixed\',\n    logo: \'https://via.placeholder.com/32\'\n  }} items={menuItems} position="fixed" color="light" />\r\n    <Navbar brand={{\n    name: \'Sticky\',\n    logo: \'https://via.placeholder.com/32\'\n  }} items={menuItems} position="sticky" color="light" />\r\n    <Navbar brand={{\n    name: \'Relative\',\n    logo: \'https://via.placeholder.com/32\'\n  }} items={menuItems} position="relative" color="light" />\r\n  </div>',...Positions.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Dark","Transparent","Floating","Minimal","Sizes","MobileMenu","WithFeatures","Positions"]},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>AnimatePresence});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs"),MotionConfigContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0}),{nonce}=(0,react.useContext)(MotionConfigContext.Q);return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return nonce&&(style.nonce=nonce),document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),(0,jsx_runtime.jsx)(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size,children:react.cloneElement(children,{ref})})}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.M)(newChildrenMap),id=(0,react.useId)(),memoizedOnExitComplete=(0,react.useCallback)((childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()}),[presenceChildren,onExitComplete]),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:memoizedOnExitComplete,register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?[Math.random(),memoizedOnExitComplete]:[isPresent,memoizedOnExitComplete]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=(0,jsx_runtime.jsx)(PopChild,{isPresent,children})),(0,jsx_runtime.jsx)(PresenceContext.t.Provider,{value:context,children})};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),errors=__webpack_require__("./node_modules/motion-utils/dist/es/errors.mjs");const getChildKey=child=>child.key||"";function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}var use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");const AnimatePresence=({children,exitBeforeEnter,custom,initial=!0,onExitComplete,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.V)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const presentChildren=(0,react.useMemo)((()=>onlyElements(children)),[children]),presentKeys=presentChildren.map(getChildKey),isInitialRender=(0,react.useRef)(!0),pendingPresentChildren=(0,react.useRef)(presentChildren),exitComplete=(0,use_constant.M)((()=>new Map)),[diffedChildren,setDiffedChildren]=(0,react.useState)(presentChildren),[renderedChildren,setRenderedChildren]=(0,react.useState)(presentChildren);(0,use_isomorphic_effect.E)((()=>{isInitialRender.current=!1,pendingPresentChildren.current=presentChildren;for(let i=0;i<renderedChildren.length;i++){const key=getChildKey(renderedChildren[i]);presentKeys.includes(key)?exitComplete.delete(key):!0!==exitComplete.get(key)&&exitComplete.set(key,!1)}}),[renderedChildren,presentKeys.length,presentKeys.join("-")]);const exitingChildren=[];if(presentChildren!==diffedChildren){let nextChildren=[...presentChildren];for(let i=0;i<renderedChildren.length;i++){const child=renderedChildren[i],key=getChildKey(child);presentKeys.includes(key)||(nextChildren.splice(i,0,child),exitingChildren.push(child))}return"wait"===mode&&exitingChildren.length&&(nextChildren=exitingChildren),setRenderedChildren(onlyElements(nextChildren)),void setDiffedChildren(presentChildren)}const{forceRender}=(0,react.useContext)(LayoutGroupContext.L);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:renderedChildren.map((child=>{const key=getChildKey(child),isPresent=presentChildren===renderedChildren||presentKeys.includes(key);return(0,jsx_runtime.jsx)(PresenceChild,{isPresent,initial:!(isInitialRender.current&&!initial)&&void 0,custom:isPresent?void 0:custom,presenceAffectsLayout,mode,onExitComplete:isPresent?void 0:()=>{if(!exitComplete.has(key))return;exitComplete.set(key,!0);let isEveryExitComplete=!0;exitComplete.forEach((isExitComplete=>{isExitComplete||(isEveryExitComplete=!1)})),isEveryExitComplete&&(null==forceRender||forceRender(),setRenderedChildren(pendingPresentChildren.current),onExitComplete&&onExitComplete())},children:child},key)}))})}}}]);