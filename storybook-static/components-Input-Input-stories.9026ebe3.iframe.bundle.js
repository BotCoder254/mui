"use strict";(self.webpackChunkmuidev=self.webpackChunkmuidev||[]).push([[6115],{"./src/components/Input/Input.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Animated:()=>Animated,Default:()=>Default,Features:()=>Features,Password:()=>Password,Sizes:()=>Sizes,States:()=>States,Styles:()=>Styles,Variants:()=>Variants,WithIcons:()=>WithIcons,WithPrefixSuffix:()=>WithPrefixSuffix,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),proxy=__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),MagnifyingGlassIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js"),EnvelopeIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/EnvelopeIcon.js"),UserIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/UserIcon.js"),LockClosedIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/LockClosedIcon.js"),CreditCardIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/CreditCardIcon.js"),PhoneIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/PhoneIcon.js"),CalendarIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/CalendarIcon.js"),LinkIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/LinkIcon.js"),GlobeAltIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/GlobeAltIcon.js"),HashtagIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/HashtagIcon.js"),ChatBubbleLeftIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftIcon.js"),ExclamationCircleIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ExclamationCircleIcon.js"),CheckCircleIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js"),EyeSlashIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/EyeSlashIcon.js"),EyeIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["type","placeholder","value","onChange","variant","size","error","success","disabled","label","helperText","startIcon","endIcon","clearable","copyable","animated","rounded","fullWidth","required","maxLength","pattern","prefix","suffix","loading","className"],Input=_ref=>{let{type="text",placeholder,value,onChange,variant="default",size="medium",error,success,disabled,label,helperText,startIcon,endIcon,clearable=!1,copyable=!1,animated=!0,rounded=!1,fullWidth=!0,required=!1,maxLength,pattern,prefix,suffix,loading=!1,className}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const[showPassword,setShowPassword]=(0,react.useState)(!1),[isFocused,setIsFocused]=(0,react.useState)(!1),[isCopied,setIsCopied]=(0,react.useState)(!1),baseClasses="\n    w-full transition-all duration-200\n    focus:outline-none focus:ring-2 focus:ring-offset-2\n    disabled:opacity-60 disabled:cursor-not-allowed\n    ".concat(rounded?"rounded-full":"rounded-lg","\n  "),getInputIcon=iconType=>{switch(iconType){case"search":return(0,jsx_runtime.jsx)(MagnifyingGlassIcon.A,{className:"w-5 h-5"});case"email":return(0,jsx_runtime.jsx)(EnvelopeIcon.A,{className:"w-5 h-5"});case"user":return(0,jsx_runtime.jsx)(UserIcon.A,{className:"w-5 h-5"});case"password":return(0,jsx_runtime.jsx)(LockClosedIcon.A,{className:"w-5 h-5"});case"card":return(0,jsx_runtime.jsx)(CreditCardIcon.A,{className:"w-5 h-5"});case"phone":return(0,jsx_runtime.jsx)(PhoneIcon.A,{className:"w-5 h-5"});case"calendar":return(0,jsx_runtime.jsx)(CalendarIcon.A,{className:"w-5 h-5"});case"link":return(0,jsx_runtime.jsx)(LinkIcon.A,{className:"w-5 h-5"});case"globe":return(0,jsx_runtime.jsx)(GlobeAltIcon.A,{className:"w-5 h-5"});case"hash":return(0,jsx_runtime.jsx)(HashtagIcon.A,{className:"w-5 h-5"});case"chat":return(0,jsx_runtime.jsx)(ChatBubbleLeftIcon.A,{className:"w-5 h-5"});default:return null}},classes="\n    ".concat(baseClasses,"\n    ").concat({default:"border border-gray-300 focus:border-blue-500 focus:ring-blue-500",filled:"border-0 bg-gray-100 focus:bg-white focus:ring-blue-500",outlined:"border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500",underlined:"border-0 border-b-2 border-gray-300 rounded-none focus:border-blue-500 focus:ring-0",error:"border-red-500 focus:border-red-500 focus:ring-red-500",success:"border-green-500 focus:border-green-500 focus:ring-green-500"}[error?"error":success?"success":variant],"\n    ").concat({small:"px-3 py-1.5 text-sm",medium:"px-4 py-2 text-base",large:"px-6 py-3 text-lg"}[size],"\n    ").concat(disabled?"bg-gray-50":"bg-white","\n    ").concat(startIcon||prefix?"pl-10":"","\n    ").concat(endIcon||"password"===type||clearable||copyable||suffix?"pr-10":"","\n    ").concat(className||"","\n  "),inputType="password"===type?showPassword?"text":"password":type,inputVariants={focus:{scale:animated?1.01:1},blur:{scale:1}};return(0,jsx_runtime.jsxs)("div",{className:"relative ".concat(fullWidth?"w-full":"inline-block"),children:[label&&(0,jsx_runtime.jsxs)(proxy.P.label,{initial:"blur",animate:isFocused?"focus":"blur",variants:{focus:{y:-4,scale:.95,color:"#3B82F6"},blur:{y:0,scale:1,color:"#6B7280"}},className:"block font-medium text-gray-700 ".concat({small:"text-xs mb-1",medium:"text-sm mb-1.5",large:"text-base mb-2"}[size]),children:[label,required&&(0,jsx_runtime.jsx)("span",{className:"text-red-500 ml-1",children:"*"})]}),(0,jsx_runtime.jsxs)("div",{className:"relative",children:[startIcon&&(0,jsx_runtime.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400",children:getInputIcon(startIcon)}),prefix&&(0,jsx_runtime.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500",children:prefix}),(0,jsx_runtime.jsx)(proxy.P.input,(0,objectSpread2.A)({type:inputType,className:classes,placeholder,value,onChange,disabled:disabled||loading,onFocus:()=>setIsFocused(!0),onBlur:()=>setIsFocused(!1),variants:inputVariants,animate:isFocused?"focus":"blur",maxLength,pattern,required},props)),(0,jsx_runtime.jsx)(AnimatePresence.N,{children:(error||success||"password"===type||clearable||copyable||endIcon||suffix||loading)&&(0,jsx_runtime.jsxs)("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center gap-2",children:[loading&&(0,jsx_runtime.jsx)(proxy.P.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},className:"w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full"}),error&&(0,jsx_runtime.jsx)(ExclamationCircleIcon.A,{className:"w-5 h-5 text-red-500"}),success&&(0,jsx_runtime.jsx)(CheckCircleIcon.A,{className:"w-5 h-5 text-green-500"}),suffix&&(0,jsx_runtime.jsx)("span",{className:"text-gray-500",children:suffix}),"password"===type&&!error&&!success&&(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>setShowPassword(!showPassword),className:"text-gray-400 hover:text-gray-500 focus:outline-none",children:showPassword?(0,jsx_runtime.jsx)(EyeSlashIcon.A,{className:"w-5 h-5"}):(0,jsx_runtime.jsx)(EyeIcon.A,{className:"w-5 h-5"})}),clearable&&value&&!error&&!success&&!loading&&(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>{onChange&&onChange({target:{value:""}})},className:"text-gray-400 hover:text-gray-500 focus:outline-none",children:(0,jsx_runtime.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),copyable&&!error&&!success&&!loading&&(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>{value&&(navigator.clipboard.writeText(value),setIsCopied(!0),setTimeout((()=>setIsCopied(!1)),2e3))},className:"focus:outline-none transition-colors ".concat(isCopied?"text-green-500":"text-gray-400 hover:text-gray-500"),children:isCopied?(0,jsx_runtime.jsx)(CheckCircleIcon.A,{className:"w-5 h-5"}):(0,jsx_runtime.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})})}),endIcon&&!error&&!success&&!loading&&getInputIcon(endIcon)]})})]}),(0,jsx_runtime.jsx)(AnimatePresence.N,{children:(error||helperText)&&(0,jsx_runtime.jsx)(proxy.P.p,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"mt-1 text-sm ".concat(error?"text-red-500":"text-gray-500"),children:error||helperText})}),maxLength&&(0,jsx_runtime.jsxs)("div",{className:"absolute right-0 -bottom-6 text-xs text-gray-500",children:[(null==value?void 0:value.length)||0,"/",maxLength]})]})},Input_Input=Input;Input.__docgenInfo={description:"An enhanced input component with rich features and animations",methods:[],displayName:"Input",props:{type:{defaultValue:{value:"'text'",computed:!1},description:"",type:{name:"string"},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'filled'",computed:!1},{value:"'outlined'",computed:!1},{value:"'underlined'",computed:!1}]},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},clearable:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},copyable:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},animated:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},rounded:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},fullWidth:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},placeholder:{description:"",type:{name:"string"},required:!1},value:{description:"",type:{name:"string"},required:!1},onChange:{description:"",type:{name:"func"},required:!1},error:{description:"",type:{name:"string"},required:!1},success:{description:"",type:{name:"bool"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},label:{description:"",type:{name:"string"},required:!1},helperText:{description:"",type:{name:"string"},required:!1},startIcon:{description:"",type:{name:"enum",value:[{value:"'search'",computed:!1},{value:"'email'",computed:!1},{value:"'user'",computed:!1},{value:"'password'",computed:!1},{value:"'card'",computed:!1},{value:"'phone'",computed:!1},{value:"'calendar'",computed:!1},{value:"'link'",computed:!1},{value:"'globe'",computed:!1},{value:"'hash'",computed:!1},{value:"'chat'",computed:!1}]},required:!1},endIcon:{description:"",type:{name:"enum",value:[{value:"'search'",computed:!1},{value:"'email'",computed:!1},{value:"'user'",computed:!1},{value:"'password'",computed:!1},{value:"'card'",computed:!1},{value:"'phone'",computed:!1},{value:"'calendar'",computed:!1},{value:"'link'",computed:!1},{value:"'globe'",computed:!1},{value:"'hash'",computed:!1},{value:"'chat'",computed:!1}]},required:!1},maxLength:{description:"",type:{name:"number"},required:!1},pattern:{description:"",type:{name:"string"},required:!1},prefix:{description:"",type:{name:"node"},required:!1},suffix:{description:"",type:{name:"node"},required:!1},className:{description:"",type:{name:"string"},required:!1}}};const Input_stories={title:"Components/Input",component:Input_Input,parameters:{docs:{description:{component:"\n# Input Component\n\nAn enhanced input component with rich features and animations.\n\n## Features\n- Multiple variants (default, filled, outlined, underlined)\n- Different sizes and styles\n- Icon support with multiple types\n- Prefix and suffix support\n- Loading state\n- Copy to clipboard\n- Clear button\n- Character counter\n- Password visibility toggle\n- Required field indicator\n- Smooth animations and transitions\n- Dark mode support\n"}},backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#1a1a1a"}]}},tags:["autodocs"],argTypes:{variant:{description:"The visual style of the input",control:"select",options:["default","filled","outlined","underlined"]},size:{description:"The size of the input",control:"select",options:["small","medium","large"]},type:{description:"The type of input",control:"select",options:["text","password","email","number","tel","url","search"]},startIcon:{description:"Icon at the start of the input",control:"select",options:[null,"search","email","user","password","card","phone","calendar","link","globe","hash","chat"]},endIcon:{description:"Icon at the end of the input",control:"select",options:[null,"search","email","user","password","card","phone","calendar","link","globe","hash","chat"]},label:{description:"Label text",control:"text"},helperText:{description:"Helper text below the input",control:"text"},error:{description:"Error message",control:"text"},success:{description:"Success state",control:"boolean"},disabled:{description:"Disabled state",control:"boolean"},required:{description:"Required field",control:"boolean"},loading:{description:"Loading state",control:"boolean"},clearable:{description:"Show clear button",control:"boolean"},copyable:{description:"Show copy button",control:"boolean"},rounded:{description:"Use rounded style",control:"boolean"},animated:{description:"Enable animations",control:"boolean"}}},Default=(args=>{const[value,setValue]=(0,react.useState)("");return(0,jsx_runtime.jsx)("div",{className:"p-8 max-w-md",children:(0,jsx_runtime.jsx)(Input_Input,(0,objectSpread2.A)((0,objectSpread2.A)({},args),{},{value,onChange:e=>setValue(e.target.value)}))})}).bind({});Default.args={label:"Label",placeholder:"Enter text...",helperText:"This is a helper text"};const Variants=()=>(0,jsx_runtime.jsxs)("div",{className:"p-8 space-y-4 max-w-md",children:[(0,jsx_runtime.jsx)(Input_Input,{label:"Default",placeholder:"Default variant"}),(0,jsx_runtime.jsx)(Input_Input,{label:"Filled",variant:"filled",placeholder:"Filled variant"}),(0,jsx_runtime.jsx)(Input_Input,{label:"Outlined",variant:"outlined",placeholder:"Outlined variant"}),(0,jsx_runtime.jsx)(Input_Input,{label:"Underlined",variant:"underlined",placeholder:"Underlined variant"})]}),WithIcons=()=>(0,jsx_runtime.jsxs)("div",{className:"p-8 space-y-4 max-w-md",children:[(0,jsx_runtime.jsx)(Input_Input,{startIcon:"search",placeholder:"Search..."}),(0,jsx_runtime.jsx)(Input_Input,{startIcon:"email",placeholder:"Enter email"}),(0,jsx_runtime.jsx)(Input_Input,{startIcon:"user",placeholder:"Username"}),(0,jsx_runtime.jsx)(Input_Input,{type:"password",startIcon:"password",placeholder:"Password"}),(0,jsx_runtime.jsx)(Input_Input,{startIcon:"card",placeholder:"Card number"}),(0,jsx_runtime.jsx)(Input_Input,{startIcon:"phone",placeholder:"Phone number"}),(0,jsx_runtime.jsx)(Input_Input,{startIcon:"calendar",placeholder:"Select date"}),(0,jsx_runtime.jsx)(Input_Input,{startIcon:"link",placeholder:"Enter URL"}),(0,jsx_runtime.jsx)(Input_Input,{startIcon:"globe",placeholder:"Website"}),(0,jsx_runtime.jsx)(Input_Input,{startIcon:"hash",placeholder:"Enter tag"}),(0,jsx_runtime.jsx)(Input_Input,{startIcon:"chat",placeholder:"Message"})]}),WithPrefixSuffix=()=>(0,jsx_runtime.jsxs)("div",{className:"p-8 space-y-4 max-w-md",children:[(0,jsx_runtime.jsx)(Input_Input,{prefix:"$",placeholder:"Enter amount"}),(0,jsx_runtime.jsx)(Input_Input,{suffix:".com",placeholder:"Enter domain"}),(0,jsx_runtime.jsx)(Input_Input,{prefix:"+",suffix:"px",placeholder:"Enter size"}),(0,jsx_runtime.jsx)(Input_Input,{prefix:(0,jsx_runtime.jsx)("span",{className:"text-gray-500",children:"https://"}),suffix:(0,jsx_runtime.jsx)("span",{className:"text-gray-500",children:".com"}),placeholder:"Enter domain"})]}),Sizes=()=>(0,jsx_runtime.jsxs)("div",{className:"p-8 space-y-4 max-w-md",children:[(0,jsx_runtime.jsx)(Input_Input,{size:"small",label:"Small",placeholder:"Small input"}),(0,jsx_runtime.jsx)(Input_Input,{size:"medium",label:"Medium",placeholder:"Medium input"}),(0,jsx_runtime.jsx)(Input_Input,{size:"large",label:"Large",placeholder:"Large input"})]}),States=()=>(0,jsx_runtime.jsxs)("div",{className:"p-8 space-y-4 max-w-md",children:[(0,jsx_runtime.jsx)(Input_Input,{label:"Normal",placeholder:"Normal state"}),(0,jsx_runtime.jsx)(Input_Input,{label:"Disabled",placeholder:"Disabled state",disabled:!0}),(0,jsx_runtime.jsx)(Input_Input,{label:"Loading",placeholder:"Loading state",loading:!0}),(0,jsx_runtime.jsx)(Input_Input,{label:"With Error",placeholder:"Error state",error:"This field is required"}),(0,jsx_runtime.jsx)(Input_Input,{label:"Success",placeholder:"Success state",success:!0,value:"Valid input"})]}),Features=()=>(0,jsx_runtime.jsxs)("div",{className:"p-8 space-y-4 max-w-md",children:[(0,jsx_runtime.jsx)(Input_Input,{label:"Clearable",placeholder:"Type something...",clearable:!0,value:"Clear me!"}),(0,jsx_runtime.jsx)(Input_Input,{label:"Copyable",placeholder:"Type to copy...",copyable:!0,value:"Copy this text!"}),(0,jsx_runtime.jsx)(Input_Input,{label:"With Counter",placeholder:"Limited input...",maxLength:50}),(0,jsx_runtime.jsx)(Input_Input,{label:"Required Field",placeholder:"This field is required",required:!0})]}),Styles=()=>(0,jsx_runtime.jsxs)("div",{className:"p-8 space-y-4 max-w-md",children:[(0,jsx_runtime.jsx)(Input_Input,{placeholder:"Default style"}),(0,jsx_runtime.jsx)(Input_Input,{placeholder:"Rounded style",rounded:!0}),(0,jsx_runtime.jsx)(Input_Input,{placeholder:"Custom style",className:"border-purple-500 focus:border-purple-600 focus:ring-purple-500"})]}),Password=()=>(0,jsx_runtime.jsxs)("div",{className:"p-8 space-y-4 max-w-md",children:[(0,jsx_runtime.jsx)(Input_Input,{type:"password",label:"Password",placeholder:"Enter password",startIcon:"password"}),(0,jsx_runtime.jsx)(Input_Input,{type:"password",label:"Password with Requirements",placeholder:"Enter password",pattern:"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",helperText:"Minimum 8 characters, at least one letter and one number"})]}),Animated=()=>(0,jsx_runtime.jsxs)("div",{className:"p-8 space-y-4 max-w-md",children:[(0,jsx_runtime.jsx)(Input_Input,{label:"Animated Input",placeholder:"Focus me!",animated:!0,startIcon:"star"}),(0,jsx_runtime.jsx)(Input_Input,{label:"Non-animated Input",placeholder:"Focus me!",animated:!1,startIcon:"star"})]});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState('');\n  return <div className=\"p-8 max-w-md\">\r\n      <Input {...args} value={value} onChange={e => setValue(e.target.value)} />\r\n    </div>;\n}",...Default.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'() => <div className="p-8 space-y-4 max-w-md">\r\n    <Input label="Default" placeholder="Default variant" />\r\n    <Input label="Filled" variant="filled" placeholder="Filled variant" />\r\n    <Input label="Outlined" variant="outlined" placeholder="Outlined variant" />\r\n    <Input label="Underlined" variant="underlined" placeholder="Underlined variant" />\r\n  </div>',...Variants.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:'() => <div className="p-8 space-y-4 max-w-md">\r\n    <Input startIcon="search" placeholder="Search..." />\r\n    <Input startIcon="email" placeholder="Enter email" />\r\n    <Input startIcon="user" placeholder="Username" />\r\n    <Input type="password" startIcon="password" placeholder="Password" />\r\n    <Input startIcon="card" placeholder="Card number" />\r\n    <Input startIcon="phone" placeholder="Phone number" />\r\n    <Input startIcon="calendar" placeholder="Select date" />\r\n    <Input startIcon="link" placeholder="Enter URL" />\r\n    <Input startIcon="globe" placeholder="Website" />\r\n    <Input startIcon="hash" placeholder="Enter tag" />\r\n    <Input startIcon="chat" placeholder="Message" />\r\n  </div>',...WithIcons.parameters?.docs?.source}}},WithPrefixSuffix.parameters={...WithPrefixSuffix.parameters,docs:{...WithPrefixSuffix.parameters?.docs,source:{originalSource:'() => <div className="p-8 space-y-4 max-w-md">\r\n    <Input prefix="$" placeholder="Enter amount" />\r\n    <Input suffix=".com" placeholder="Enter domain" />\r\n    <Input prefix="+" suffix="px" placeholder="Enter size" />\r\n    <Input prefix={<span className="text-gray-500">https://</span>} suffix={<span className="text-gray-500">.com</span>} placeholder="Enter domain" />\r\n  </div>',...WithPrefixSuffix.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'() => <div className="p-8 space-y-4 max-w-md">\r\n    <Input size="small" label="Small" placeholder="Small input" />\r\n    <Input size="medium" label="Medium" placeholder="Medium input" />\r\n    <Input size="large" label="Large" placeholder="Large input" />\r\n  </div>',...Sizes.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'() => <div className="p-8 space-y-4 max-w-md">\r\n    <Input label="Normal" placeholder="Normal state" />\r\n    <Input label="Disabled" placeholder="Disabled state" disabled />\r\n    <Input label="Loading" placeholder="Loading state" loading />\r\n    <Input label="With Error" placeholder="Error state" error="This field is required" />\r\n    <Input label="Success" placeholder="Success state" success value="Valid input" />\r\n  </div>',...States.parameters?.docs?.source}}},Features.parameters={...Features.parameters,docs:{...Features.parameters?.docs,source:{originalSource:'() => <div className="p-8 space-y-4 max-w-md">\r\n    <Input label="Clearable" placeholder="Type something..." clearable value="Clear me!" />\r\n    <Input label="Copyable" placeholder="Type to copy..." copyable value="Copy this text!" />\r\n    <Input label="With Counter" placeholder="Limited input..." maxLength={50} />\r\n    <Input label="Required Field" placeholder="This field is required" required />\r\n  </div>',...Features.parameters?.docs?.source}}},Styles.parameters={...Styles.parameters,docs:{...Styles.parameters?.docs,source:{originalSource:'() => <div className="p-8 space-y-4 max-w-md">\r\n    <Input placeholder="Default style" />\r\n    <Input placeholder="Rounded style" rounded />\r\n    <Input placeholder="Custom style" className="border-purple-500 focus:border-purple-600 focus:ring-purple-500" />\r\n  </div>',...Styles.parameters?.docs?.source}}},Password.parameters={...Password.parameters,docs:{...Password.parameters?.docs,source:{originalSource:'() => <div className="p-8 space-y-4 max-w-md">\r\n    <Input type="password" label="Password" placeholder="Enter password" startIcon="password" />\r\n    <Input type="password" label="Password with Requirements" placeholder="Enter password" pattern="^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$" helperText="Minimum 8 characters, at least one letter and one number" />\r\n  </div>',...Password.parameters?.docs?.source}}},Animated.parameters={...Animated.parameters,docs:{...Animated.parameters?.docs,source:{originalSource:'() => <div className="p-8 space-y-4 max-w-md">\r\n    <Input label="Animated Input" placeholder="Focus me!" animated startIcon="star" />\r\n    <Input label="Non-animated Input" placeholder="Focus me!" animated={false} startIcon="star" />\r\n  </div>',...Animated.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Variants","WithIcons","WithPrefixSuffix","Sizes","States","Features","Styles","Password","Animated"]}}]);