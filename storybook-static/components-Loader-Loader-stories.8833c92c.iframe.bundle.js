"use strict";(self.webpackChunkmuilibrary=self.webpackChunkmuilibrary||[]).push([[8943],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2})},"./src/components/Loader/Loader.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bounce:()=>Bounce,CircularProgress:()=>CircularProgress,ColorVariations:()=>ColorVariations,Dots:()=>Dots,OverlayLoader:()=>OverlayLoader,Progress:()=>Progress,ProgressVariations:()=>ProgressVariations,Pulse:()=>Pulse,SizeVariations:()=>SizeVariations,SpeedVariations:()=>SpeedVariations,Spinner:()=>Spinner,TextPositions:()=>TextPositions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Loader_stories});__webpack_require__("./node_modules/react/index.js");var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),proxy=__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["variant","size","color","text","textPosition","speed","fullWidth","overlay","blur","progress","indeterminate","className"],Loader=_ref=>{let{variant="spinner",size="medium",color="primary",text,textPosition="bottom",speed="normal",fullWidth=!1,overlay=!1,blur=!1,progress=0,indeterminate=!0,className}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const sizes={tiny:{container:"w-4 h-4",text:"text-xs",wrapper:"gap-1",dot:"w-1 h-1",bar:"h-1",border:"border-2"},small:{container:"w-6 h-6",text:"text-sm",wrapper:"gap-2",dot:"w-1.5 h-1.5",bar:"h-1.5",border:"border-2"},medium:{container:"w-8 h-8",text:"text-base",wrapper:"gap-3",dot:"w-2 h-2",bar:"h-2",border:"border-3"},large:{container:"w-12 h-12",text:"text-lg",wrapper:"gap-4",dot:"w-2.5 h-2.5",bar:"h-2.5",border:"border-4"},xl:{container:"w-16 h-16",text:"text-xl",wrapper:"gap-5",dot:"w-3 h-3",bar:"h-3",border:"border-4"}},speeds={slow:2,normal:1.2,fast:.8},SpinnerVariant=()=>(0,jsx_runtime.jsx)(proxy.P.div,{className:"".concat(sizes[size].container," ").concat(sizes[size].border," border-current border-t-transparent rounded-full"),animate:{rotate:360},transition:{duration:speeds[speed],repeat:1/0,ease:"linear"}}),DotsVariant=()=>(0,jsx_runtime.jsx)("div",{className:"flex items-center justify-center space-x-2",children:[0,1,2].map((index=>(0,jsx_runtime.jsx)(proxy.P.div,{className:"".concat(sizes[size].dot," rounded-full bg-current"),initial:{opacity:.3,scale:.8},animate:{opacity:[.3,1,.3],scale:[.8,1,.8]},transition:{duration:speeds[speed],repeat:1/0,delay:.2*index,ease:"easeInOut"}},index)))}),PulseVariant=()=>(0,jsx_runtime.jsxs)("div",{className:"relative ".concat(sizes[size].container),children:[(0,jsx_runtime.jsx)(proxy.P.div,{className:"absolute inset-0 rounded-full bg-current",initial:{opacity:.3,scale:.8},animate:{opacity:[.3,.6,.3],scale:[.8,1.2,.8]},transition:{duration:speeds[speed],repeat:1/0,ease:"easeInOut"}}),(0,jsx_runtime.jsx)("div",{className:"absolute inset-0 rounded-full bg-current opacity-30"})]}),ProgressVariant=()=>(0,jsx_runtime.jsx)("div",{className:"w-full ".concat(sizes[size].bar," bg-gray-200 rounded-full overflow-hidden"),children:indeterminate?(0,jsx_runtime.jsx)(proxy.P.div,{className:"h-full bg-current rounded-full",initial:{x:"-100%"},animate:{x:"100%"},transition:{duration:2*speeds[speed],repeat:1/0,ease:"easeInOut"},style:{width:"30%"}}):(0,jsx_runtime.jsx)(proxy.P.div,{className:"h-full bg-current rounded-full",initial:{width:0},animate:{width:"".concat(progress,"%")},transition:{duration:.5,ease:"easeOut"}})}),BounceVariant=()=>(0,jsx_runtime.jsx)("div",{className:"flex items-center justify-center space-x-2",children:[0,1,2].map((index=>(0,jsx_runtime.jsx)(proxy.P.div,{className:"".concat(sizes[size].dot," rounded-full bg-current"),animate:{y:[0,-12,0]},transition:{duration:speeds[speed],repeat:1/0,delay:.15*index,ease:"easeInOut"}},index)))}),CircularVariant=()=>(0,jsx_runtime.jsxs)("div",{className:"relative ".concat(sizes[size].container),children:[(0,jsx_runtime.jsxs)("svg",{className:"w-full h-full",viewBox:"0 0 50 50",children:[(0,jsx_runtime.jsx)("circle",{cx:"25",cy:"25",r:"20",fill:"none",className:"stroke-current opacity-20",strokeWidth:"5"}),(0,jsx_runtime.jsx)(proxy.P.circle,{cx:"25",cy:"25",r:"20",fill:"none",className:"stroke-current",strokeWidth:"5",strokeLinecap:"round",initial:{pathLength:0,rotate:-90},animate:{pathLength:indeterminate?[0,1,0]:progress/100,rotate:indeterminate?270:-90},transition:indeterminate?{pathLength:{duration:2*speeds[speed],repeat:1/0,ease:"easeInOut"},rotate:{duration:2*speeds[speed],repeat:1/0,ease:"linear"}}:{duration:.5,ease:"easeOut"},style:{transformOrigin:"center"}})]}),!indeterminate&&progress>0&&(0,jsx_runtime.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,jsx_runtime.jsxs)("span",{className:"".concat(sizes[size].text," font-medium"),children:[Math.round(progress),"%"]})})]}),loader=(()=>{switch(variant){case"dots":return(0,jsx_runtime.jsx)(DotsVariant,{});case"pulse":return(0,jsx_runtime.jsx)(PulseVariant,{});case"progress":return(0,jsx_runtime.jsx)(ProgressVariant,{});case"bounce":return(0,jsx_runtime.jsx)(BounceVariant,{});case"circular":return(0,jsx_runtime.jsx)(CircularVariant,{});default:return(0,jsx_runtime.jsx)(SpinnerVariant,{})}})(),containerClasses="\n    inline-flex\n    ".concat("right"===textPosition?"flex-row":"flex-col","\n    items-center\n    justify-center\n    ").concat(sizes[size].wrapper,"\n    ").concat({primary:"text-blue-500",secondary:"text-gray-500",success:"text-green-500",danger:"text-red-500",warning:"text-yellow-500",info:"text-cyan-500",light:"text-gray-200",dark:"text-gray-800",white:"text-white"}[color],"\n    ").concat(fullWidth?"w-full":"","\n    ").concat(className||"","\n  "),content=(0,jsx_runtime.jsxs)("div",(0,objectSpread2.A)((0,objectSpread2.A)({className:containerClasses},props),{},{children:["top"===textPosition&&text&&(0,jsx_runtime.jsx)(proxy.P.span,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"".concat(sizes[size].text," font-medium"),children:text}),loader,"bottom"===textPosition&&text&&(0,jsx_runtime.jsx)(proxy.P.span,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"".concat(sizes[size].text," font-medium"),children:text}),"right"===textPosition&&text&&(0,jsx_runtime.jsx)(proxy.P.span,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},className:"".concat(sizes[size].text," font-medium"),children:text})]}));return overlay?(0,jsx_runtime.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[(0,jsx_runtime.jsx)("div",{className:"absolute inset-0 bg-black/50 ".concat(blur?"backdrop-blur-sm":"")}),(0,jsx_runtime.jsx)("div",{className:"relative",children:content})]}):content},Loader_Loader=Loader;Loader.__docgenInfo={description:"An enhanced loader component with rich animations and styles",methods:[],displayName:"Loader",props:{variant:{defaultValue:{value:"'spinner'",computed:!1},description:"",type:{name:"enum",value:[{value:"'spinner'",computed:!1},{value:"'dots'",computed:!1},{value:"'pulse'",computed:!1},{value:"'progress'",computed:!1},{value:"'bounce'",computed:!1},{value:"'circular'",computed:!1}]},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'tiny'",computed:!1},{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1},{value:"'xl'",computed:!1}]},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'success'",computed:!1},{value:"'danger'",computed:!1},{value:"'warning'",computed:!1},{value:"'info'",computed:!1},{value:"'light'",computed:!1},{value:"'dark'",computed:!1},{value:"'white'",computed:!1}]},required:!1},textPosition:{defaultValue:{value:"'bottom'",computed:!1},description:"",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1},{value:"'right'",computed:!1}]},required:!1},speed:{defaultValue:{value:"'normal'",computed:!1},description:"",type:{name:"enum",value:[{value:"'slow'",computed:!1},{value:"'normal'",computed:!1},{value:"'fast'",computed:!1}]},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},overlay:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},blur:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},progress:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},indeterminate:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},text:{description:"",type:{name:"string"},required:!1},className:{description:"",type:{name:"string"},required:!1}}};const Loader_stories={title:"Components/Loader",component:Loader_Loader,argTypes:{variant:{control:"select",options:["spinner","dots","pulse","progress","bounce","circular"]},size:{control:"select",options:["tiny","small","medium","large","xl"]},color:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark","white"]},textPosition:{control:"select",options:["top","bottom","right"]},speed:{control:"select",options:["slow","normal","fast"]},text:{control:"text"},fullWidth:{control:"boolean"},overlay:{control:"boolean"},blur:{control:"boolean"},progress:{control:{type:"range",min:0,max:100,step:1}},indeterminate:{control:"boolean"}},parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#1a1a1a"}]}},decorators:[Story=>(0,jsx_runtime.jsx)("div",{className:"p-8 flex items-center justify-center min-h-[200px]",children:(0,jsx_runtime.jsx)(Story,{})})]},Spinner={args:{variant:"spinner",size:"medium",color:"primary",text:"Loading..."}},Dots={args:{variant:"dots",size:"medium",color:"primary",text:"Processing...",textPosition:"bottom"}},Pulse={args:{variant:"pulse",size:"large",color:"success",speed:"normal"}},Progress={args:{variant:"progress",size:"medium",color:"primary",progress:75,indeterminate:!1,text:"75% Complete",fullWidth:!0}},Bounce={args:{variant:"bounce",size:"medium",color:"warning",speed:"normal",text:"Please wait..."}},CircularProgress={args:{variant:"circular",size:"large",color:"info",progress:65,indeterminate:!1,text:"Uploading..."}},OverlayLoader={args:{variant:"spinner",size:"xl",color:"white",overlay:!0,blur:!0,text:"Processing your request..."}},SizeVariations=()=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-col items-start gap-8",children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-8",children:[(0,jsx_runtime.jsx)(Loader_Loader,{variant:"spinner",size:"tiny",color:"primary",text:"Tiny",textPosition:"right"}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"spinner",size:"small",color:"primary",text:"Small",textPosition:"right"}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"spinner",size:"medium",color:"primary",text:"Medium",textPosition:"right"}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"spinner",size:"large",color:"primary",text:"Large",textPosition:"right"}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"spinner",size:"xl",color:"primary",text:"XL",textPosition:"right"})]}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-8",children:[(0,jsx_runtime.jsx)(Loader_Loader,{variant:"dots",size:"tiny",color:"info"}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"dots",size:"small",color:"info"}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"dots",size:"medium",color:"info"}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"dots",size:"large",color:"info"}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"dots",size:"xl",color:"info"})]}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-8",children:[(0,jsx_runtime.jsx)(Loader_Loader,{variant:"circular",size:"tiny",color:"success",progress:75}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"circular",size:"small",color:"success",progress:75}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"circular",size:"medium",color:"success",progress:75}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"circular",size:"large",color:"success",progress:75}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"circular",size:"xl",color:"success",progress:75})]})]}),ColorVariations=()=>(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-3 gap-8",children:[(0,jsx_runtime.jsx)(Loader_Loader,{variant:"spinner",color:"primary",text:"Primary"}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"dots",color:"secondary",text:"Secondary"}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"pulse",color:"success",text:"Success"}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"bounce",color:"danger",text:"Danger"}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"circular",color:"warning",text:"Warning",indeterminate:!0}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"spinner",color:"info",text:"Info"}),(0,jsx_runtime.jsx)("div",{className:"p-4 bg-gray-800 rounded",children:(0,jsx_runtime.jsx)(Loader_Loader,{variant:"dots",color:"light",text:"Light"})}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"pulse",color:"dark",text:"Dark"}),(0,jsx_runtime.jsx)("div",{className:"p-4 bg-gray-800 rounded",children:(0,jsx_runtime.jsx)(Loader_Loader,{variant:"bounce",color:"white",text:"White"})})]}),TextPositions=()=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,jsx_runtime.jsx)(Loader_Loader,{variant:"spinner",text:"Top position",textPosition:"top"}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"dots",text:"Bottom position",textPosition:"bottom"}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"circular",text:"Right position",textPosition:"right",progress:60})]}),SpeedVariations=()=>(0,jsx_runtime.jsxs)("div",{className:"flex gap-12",children:[(0,jsx_runtime.jsx)(Loader_Loader,{variant:"spinner",speed:"slow",text:"Slow"}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"dots",speed:"normal",text:"Normal"}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"bounce",speed:"fast",text:"Fast"})]}),ProgressVariations=()=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-8 w-full max-w-md",children:[(0,jsx_runtime.jsx)(Loader_Loader,{variant:"progress",progress:30,color:"primary",text:"Uploading files...",fullWidth:!0}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"circular",progress:65,color:"success",text:"Processing...",size:"large"}),(0,jsx_runtime.jsx)(Loader_Loader,{variant:"progress",indeterminate:!0,color:"info",text:"Please wait...",fullWidth:!0})]});Spinner.parameters={...Spinner.parameters,docs:{...Spinner.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'spinner',\n    size: 'medium',\n    color: 'primary',\n    text: 'Loading...'\n  }\n}",...Spinner.parameters?.docs?.source}}},Dots.parameters={...Dots.parameters,docs:{...Dots.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'dots',\n    size: 'medium',\n    color: 'primary',\n    text: 'Processing...',\n    textPosition: 'bottom'\n  }\n}",...Dots.parameters?.docs?.source}}},Pulse.parameters={...Pulse.parameters,docs:{...Pulse.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'pulse',\n    size: 'large',\n    color: 'success',\n    speed: 'normal'\n  }\n}",...Pulse.parameters?.docs?.source}}},Progress.parameters={...Progress.parameters,docs:{...Progress.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'progress',\n    size: 'medium',\n    color: 'primary',\n    progress: 75,\n    indeterminate: false,\n    text: '75% Complete',\n    fullWidth: true\n  }\n}",...Progress.parameters?.docs?.source}}},Bounce.parameters={...Bounce.parameters,docs:{...Bounce.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'bounce',\n    size: 'medium',\n    color: 'warning',\n    speed: 'normal',\n    text: 'Please wait...'\n  }\n}",...Bounce.parameters?.docs?.source}}},CircularProgress.parameters={...CircularProgress.parameters,docs:{...CircularProgress.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'circular',\n    size: 'large',\n    color: 'info',\n    progress: 65,\n    indeterminate: false,\n    text: 'Uploading...'\n  }\n}",...CircularProgress.parameters?.docs?.source}}},OverlayLoader.parameters={...OverlayLoader.parameters,docs:{...OverlayLoader.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'spinner',\n    size: 'xl',\n    color: 'white',\n    overlay: true,\n    blur: true,\n    text: 'Processing your request...'\n  }\n}",...OverlayLoader.parameters?.docs?.source}}},SizeVariations.parameters={...SizeVariations.parameters,docs:{...SizeVariations.parameters?.docs,source:{originalSource:'() => <div className="flex flex-col items-start gap-8">\r\n    <div className="flex items-center gap-8">\r\n      <Loader variant="spinner" size="tiny" color="primary" text="Tiny" textPosition="right" />\r\n      <Loader variant="spinner" size="small" color="primary" text="Small" textPosition="right" />\r\n      <Loader variant="spinner" size="medium" color="primary" text="Medium" textPosition="right" />\r\n      <Loader variant="spinner" size="large" color="primary" text="Large" textPosition="right" />\r\n      <Loader variant="spinner" size="xl" color="primary" text="XL" textPosition="right" />\r\n    </div>\r\n    <div className="flex items-center gap-8">\r\n      <Loader variant="dots" size="tiny" color="info" />\r\n      <Loader variant="dots" size="small" color="info" />\r\n      <Loader variant="dots" size="medium" color="info" />\r\n      <Loader variant="dots" size="large" color="info" />\r\n      <Loader variant="dots" size="xl" color="info" />\r\n    </div>\r\n    <div className="flex items-center gap-8">\r\n      <Loader variant="circular" size="tiny" color="success" progress={75} />\r\n      <Loader variant="circular" size="small" color="success" progress={75} />\r\n      <Loader variant="circular" size="medium" color="success" progress={75} />\r\n      <Loader variant="circular" size="large" color="success" progress={75} />\r\n      <Loader variant="circular" size="xl" color="success" progress={75} />\r\n    </div>\r\n  </div>',...SizeVariations.parameters?.docs?.source}}},ColorVariations.parameters={...ColorVariations.parameters,docs:{...ColorVariations.parameters?.docs,source:{originalSource:'() => <div className="grid grid-cols-3 gap-8">\r\n    <Loader variant="spinner" color="primary" text="Primary" />\r\n    <Loader variant="dots" color="secondary" text="Secondary" />\r\n    <Loader variant="pulse" color="success" text="Success" />\r\n    <Loader variant="bounce" color="danger" text="Danger" />\r\n    <Loader variant="circular" color="warning" text="Warning" indeterminate />\r\n    <Loader variant="spinner" color="info" text="Info" />\r\n    <div className="p-4 bg-gray-800 rounded">\r\n      <Loader variant="dots" color="light" text="Light" />\r\n    </div>\r\n    <Loader variant="pulse" color="dark" text="Dark" />\r\n    <div className="p-4 bg-gray-800 rounded">\r\n      <Loader variant="bounce" color="white" text="White" />\r\n    </div>\r\n  </div>',...ColorVariations.parameters?.docs?.source}}},TextPositions.parameters={...TextPositions.parameters,docs:{...TextPositions.parameters?.docs,source:{originalSource:'() => <div className="flex flex-col gap-8">\r\n    <Loader variant="spinner" text="Top position" textPosition="top" />\r\n    <Loader variant="dots" text="Bottom position" textPosition="bottom" />\r\n    <Loader variant="circular" text="Right position" textPosition="right" progress={60} />\r\n  </div>',...TextPositions.parameters?.docs?.source}}},SpeedVariations.parameters={...SpeedVariations.parameters,docs:{...SpeedVariations.parameters?.docs,source:{originalSource:'() => <div className="flex gap-12">\r\n    <Loader variant="spinner" speed="slow" text="Slow" />\r\n    <Loader variant="dots" speed="normal" text="Normal" />\r\n    <Loader variant="bounce" speed="fast" text="Fast" />\r\n  </div>',...SpeedVariations.parameters?.docs?.source}}},ProgressVariations.parameters={...ProgressVariations.parameters,docs:{...ProgressVariations.parameters?.docs,source:{originalSource:'() => <div className="flex flex-col gap-8 w-full max-w-md">\r\n    <Loader variant="progress" progress={30} color="primary" text="Uploading files..." fullWidth />\r\n    <Loader variant="circular" progress={65} color="success" text="Processing..." size="large" />\r\n    <Loader variant="progress" indeterminate color="info" text="Please wait..." fullWidth />\r\n  </div>',...ProgressVariations.parameters?.docs?.source}}};const __namedExportsOrder=["Spinner","Dots","Pulse","Progress","Bounce","CircularProgress","OverlayLoader","SizeVariations","ColorVariations","TextPositions","SpeedVariations","ProgressVariations"]}}]);