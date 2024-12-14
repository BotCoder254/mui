"use strict";(self.webpackChunkmuidev=self.webpackChunkmuidev||[]).push([[7475],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2})},"./src/components/Forms/FileUpload.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Colors:()=>Colors,ComplexExample:()=>ComplexExample,Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,Multiple:()=>Multiple,Sizes:()=>Sizes,Success:()=>Success,Variants:()=>Variants,WithImagePreview:()=>WithImagePreview,WithValidation:()=>WithValidation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FileUpload_stories});var react=__webpack_require__("./node_modules/react/index.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),proxy=__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["accept","multiple","maxSize","maxFiles","preview","previewMaxHeight","variant","size","color","disabled","error","success","helperText","onChange","onError","onDelete","onPreview","className"],FileUpload=_ref=>{let{accept,multiple=!1,maxSize=5242880,maxFiles=5,preview=!0,previewMaxHeight=200,variant="default",size="medium",color="primary",disabled=!1,error,success,helperText,onChange,onError,onDelete,onPreview,className}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const[isDragging,setIsDragging]=(0,react.useState)(!1),[files,setFiles]=(0,react.useState)([]),[errors,setErrors]=(0,react.useState)([]),[previewFile,setPreviewFile]=(0,react.useState)(null),fileInputRef=(0,react.useRef)(null),sizes={small:{text:"text-sm",icon:"w-8 h-8",padding:"p-4",preview:"h-24",button:"h-8 px-3 text-sm"},medium:{text:"text-base",icon:"w-12 h-12",padding:"p-6",preview:"h-32",button:"h-10 px-4"},large:{text:"text-lg",icon:"w-16 h-16",padding:"p-8",preview:"h-40",button:"h-12 px-5 text-lg"}},colors={primary:{base:"border-gray-300 bg-white",hover:"hover:border-blue-500",active:"border-blue-500",text:"text-gray-600",accent:"text-blue-500",error:"border-red-500 text-red-500",success:"border-green-500 text-green-500",button:"bg-blue-500 hover:bg-blue-600 text-white",buttonOutline:"border-blue-500 text-blue-500 hover:bg-blue-50"},secondary:{base:"border-gray-300 bg-white",hover:"hover:border-gray-400",active:"border-gray-400",text:"text-gray-600",accent:"text-gray-500",error:"border-red-500 text-red-500",success:"border-green-500 text-green-500",button:"bg-gray-500 hover:bg-gray-600 text-white",buttonOutline:"border-gray-500 text-gray-500 hover:bg-gray-50"},white:{base:"border-gray-600 bg-gray-800",hover:"hover:border-gray-500",active:"border-gray-500",text:"text-gray-300",accent:"text-white",error:"border-red-400 text-red-400",success:"border-green-400 text-green-400",button:"bg-white hover:bg-gray-100 text-gray-900",buttonOutline:"border-white text-white hover:bg-white/10"}},variants={default:{container:"border-2 border-dashed rounded-lg",preview:"rounded-lg",button:"rounded-md"},filled:{container:"border-2 border-dashed rounded-lg bg-gray-50",preview:"rounded-lg",button:"rounded-md"},outlined:{container:"border-2 rounded-lg",preview:"rounded-lg",button:"rounded-md"}},processFiles=fileList=>{const newFiles=[],newErrors=[];if(Array.from(fileList).forEach((file=>{if(!multiple&&files.length+newFiles.length>=1)return void newErrors.push("Only one file can be uploaded");if(files.length+newFiles.length>=maxFiles)return void newErrors.push("Maximum number of files (".concat(maxFiles,") exceeded"));const fileErrors=(file=>{const errors=[];if(maxSize&&file.size>maxSize&&errors.push('File "'.concat(file.name,'" exceeds maximum size of ').concat(maxSize/1024/1024,"MB")),accept){const acceptedTypes=accept.split(",").map((type=>type.trim())),fileType=file.type||"",fileExtension=".".concat(file.name.split(".").pop());acceptedTypes.some((type=>{if(type.startsWith("."))return fileExtension.toLowerCase()===type.toLowerCase();if(type.includes("/*")){const[mainType]=type.split("/");return fileType.startsWith("".concat(mainType,"/"))}return fileType===type}))||errors.push('File "'.concat(file.name,'" has an unsupported format'))}return errors})(file);fileErrors.length>0?newErrors.push(...fileErrors):newFiles.push(file)})),newFiles.length>0){const updatedFiles=[...files,...newFiles];setFiles(updatedFiles),null==onChange||onChange(multiple?updatedFiles:updatedFiles[0])}newErrors.length>0&&(setErrors(newErrors),null==onError||onError(newErrors))},handleRemoveFile=index=>{const newFiles=files.filter(((_,i)=>i!==index));setFiles(newFiles),null==onChange||onChange(multiple?newFiles:newFiles[0]),null==onDelete||onDelete(files[index],index)},renderPreview=(file,index)=>{const FileIcon=(file=>{const type=file.type||"";return type.startsWith("image/")?index_esm.fZZ:type.startsWith("video/")?index_esm.pVQ:type.startsWith("audio/")?index_esm.$Mw:type.startsWith("text/")?index_esm.jH2:type.startsWith("application/pdf")?index_esm.QuH:type.startsWith("application/msword")||type.includes("document")?index_esm.jH2:type.startsWith("application/zip")||type.includes("compressed")?index_esm.OZ2:type.includes("code")||type.includes("javascript")||type.includes("json")?index_esm.PjK:index_esm.QuH})(file);return(0,jsx_runtime.jsx)(proxy.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.2,delay:.1*index},className:"\n          relative\n          group\n          ".concat(variants[variant].preview,"\n          border\n          ").concat(colors[color].base,"\n          overflow-hidden\n          bg-white\n        "),children:file.type.startsWith("image/")&&preview?(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)("img",{src:URL.createObjectURL(file),alt:file.name,className:"\n                object-cover\n                w-full\n                ".concat(sizes[size].preview,"\n              "),style:{maxHeight:previewMaxHeight}}),(0,jsx_runtime.jsxs)("div",{className:"\r absolute\r inset-0\r bg-black/40\r opacity-0\r group-hover:opacity-100\r transition-opacity\r duration-200\r flex\r items-center\r justify-center\r gap-2\r ",children:[(0,jsx_runtime.jsx)(proxy.P.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>(file=>{setPreviewFile(file),null==onPreview||onPreview(file)})(file),className:"p-2 rounded-full bg-white/20 hover:bg-white/30 text-white",children:(0,jsx_runtime.jsx)(index_esm.Vap,{className:"w-5 h-5"})}),(0,jsx_runtime.jsx)(proxy.P.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>handleRemoveFile(index),className:"p-2 rounded-full bg-white/20 hover:bg-white/30 text-white",children:(0,jsx_runtime.jsx)(index_esm.IXo,{className:"w-5 h-5"})})]})]}):(0,jsx_runtime.jsxs)("div",{className:"\n            flex\n            items-center\n            gap-3\n            p-3\n            ".concat(colors[color].text,"\n            group-hover:bg-gray-50\n            transition-colors\n            duration-200\n          "),children:[(0,jsx_runtime.jsx)(FileIcon,{className:sizes[size].icon}),(0,jsx_runtime.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,jsx_runtime.jsx)("div",{className:"truncate font-medium",children:file.name}),(0,jsx_runtime.jsxs)("div",{className:"text-sm opacity-75",children:[(file.size/1024).toFixed(1),"KB"]})]}),(0,jsx_runtime.jsx)("div",{className:"flex items-center gap-2",children:(0,jsx_runtime.jsx)(proxy.P.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>handleRemoveFile(index),className:"\n                  p-1.5\n                  rounded-full\n                  ".concat(colors[color].text,"\n                  hover:").concat(colors[color].accent,"\n                  transition-colors\n                  duration-200\n                "),children:(0,jsx_runtime.jsx)(index_esm.IXo,{className:"w-5 h-5"})})})]})},index)},containerClasses="\n    ".concat(variants[variant].container,"\n    ").concat(sizes[size].padding,"\n    ").concat(colors[color].base,"\n    ").concat(!disabled&&!isDragging&&colors[color].hover,"\n    ").concat(isDragging&&colors[color].active,"\n    ").concat(error&&colors[color].error,"\n    ").concat(success&&colors[color].success,"\n    ").concat(disabled?"opacity-50 cursor-not-allowed":"cursor-pointer","\n    transition-all\n    duration-200\n    ").concat(className||"","\n  ");return(0,jsx_runtime.jsxs)("div",{className:"space-y-4",children:[(0,jsx_runtime.jsxs)(proxy.P.div,(0,objectSpread2.A)((0,objectSpread2.A)({initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:containerClasses,onDragEnter:e=>{e.preventDefault(),e.stopPropagation(),disabled||setIsDragging(!0)},onDragOver:e=>{e.preventDefault(),e.stopPropagation()},onDragLeave:e=>{e.preventDefault(),e.stopPropagation(),setIsDragging(!1)},onDrop:e=>{if(e.preventDefault(),e.stopPropagation(),setIsDragging(!1),disabled)return;const{files:droppedFiles}=e.dataTransfer;processFiles(droppedFiles)},onClick:()=>{var _fileInputRef$current;return null===(_fileInputRef$current=fileInputRef.current)||void 0===_fileInputRef$current?void 0:_fileInputRef$current.click()}},props),{},{children:[(0,jsx_runtime.jsx)("input",{ref:fileInputRef,type:"file",accept,multiple,onChange:e=>{disabled||(processFiles(e.target.files),e.target.value=null)},className:"hidden",disabled}),(0,jsx_runtime.jsxs)(proxy.P.div,{animate:{scale:isDragging?1.05:1,opacity:isDragging?.7:1},transition:{type:"spring",stiffness:300,damping:20},className:"\n            flex\n            flex-col\n            items-center\n            justify-center\n            gap-4\n            ".concat(colors[color].text,"\n            ").concat(sizes[size].text,"\n          "),children:[(0,jsx_runtime.jsx)(proxy.P.div,{animate:{y:isDragging?-10:0,scale:isDragging?1.1:1},transition:{type:"spring",stiffness:300,damping:20},children:(0,jsx_runtime.jsx)(index_esm.YoE,{className:"\n              ".concat(sizes[size].icon,"\n              ").concat(colors[color].accent,"\n            ")})}),(0,jsx_runtime.jsxs)("div",{className:"text-center",children:[(0,jsx_runtime.jsx)(proxy.P.p,{animate:{scale:isDragging?1.05:1},className:"font-medium",children:isDragging?"Drop files here":"Drag and drop files here"}),(0,jsx_runtime.jsxs)("p",{className:"mt-1 opacity-75",children:["or ",(0,jsx_runtime.jsx)("span",{className:colors[color].accent,children:"browse"})," to choose files"]})]}),accept&&(0,jsx_runtime.jsxs)("p",{className:"text-sm opacity-75",children:["Accepted formats: ",accept]}),maxSize&&(0,jsx_runtime.jsxs)("p",{className:"text-sm opacity-75",children:["Maximum file size: ",maxSize/1024/1024,"MB"]})]})]})),files.length>0&&(0,jsx_runtime.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:(0,jsx_runtime.jsx)(AnimatePresence.N,{mode:"popLayout",children:files.map(((file,index)=>renderPreview(file,index)))})}),errors.length>0&&(0,jsx_runtime.jsxs)(proxy.P.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"flex items-center gap-2 ".concat(colors[color].error),children:[(0,jsx_runtime.jsx)(index_esm.y3G,{className:"w-4 h-4 flex-shrink-0"}),(0,jsx_runtime.jsx)("ul",{className:"text-sm list-disc list-inside",children:errors.map(((error,index)=>(0,jsx_runtime.jsx)(proxy.P.li,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.1*index},children:error},index)))})]}),helperText&&!errors.length&&(0,jsx_runtime.jsx)(proxy.P.p,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"text-sm ".concat(colors[color].text),children:helperText}),(0,jsx_runtime.jsx)(AnimatePresence.N,{children:previewFile&&previewFile.type.startsWith("image/")&&(0,jsx_runtime.jsx)(proxy.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",onClick:()=>setPreviewFile(null),children:(0,jsx_runtime.jsxs)(proxy.P.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"relative max-w-4xl w-full bg-white rounded-lg overflow-hidden",onClick:e=>e.stopPropagation(),children:[(0,jsx_runtime.jsx)("div",{className:"absolute top-4 right-4 z-10",children:(0,jsx_runtime.jsx)(proxy.P.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>setPreviewFile(null),className:"p-2 rounded-full bg-black/20 hover:bg-black/30 text-white",children:(0,jsx_runtime.jsx)(index_esm.yGN,{className:"w-5 h-5"})})}),(0,jsx_runtime.jsx)("img",{src:URL.createObjectURL(previewFile),alt:previewFile.name,className:"w-full h-auto"})]})})})]})},Forms_FileUpload=FileUpload;FileUpload.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{multiple:{defaultValue:{value:"false",computed:!1},description:"Whether multiple files can be uploaded",type:{name:"bool"},required:!1},maxSize:{defaultValue:{value:"5242880",computed:!1},description:"Maximum file size in bytes",type:{name:"number"},required:!1},maxFiles:{defaultValue:{value:"5",computed:!1},description:"Maximum number of files",type:{name:"number"},required:!1},preview:{defaultValue:{value:"true",computed:!1},description:"Whether to show image previews",type:{name:"bool"},required:!1},previewMaxHeight:{defaultValue:{value:"200",computed:!1},description:"Maximum preview height in pixels",type:{name:"number"},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},description:"Visual style variant",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'filled'",computed:!1},{value:"'outlined'",computed:!1}]},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size preset",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},description:"Color theme",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'white'",computed:!1}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the upload is disabled",type:{name:"bool"},required:!1},accept:{description:"Accepted file types",type:{name:"string"},required:!1},error:{description:"Error message",type:{name:"string"},required:!1},success:{description:"Success message",type:{name:"string"},required:!1},helperText:{description:"Helper text",type:{name:"string"},required:!1},onChange:{description:"Change handler",type:{name:"func"},required:!1},onError:{description:"Error handler",type:{name:"func"},required:!1},onDelete:{description:"Delete handler",type:{name:"func"},required:!1},onPreview:{description:"Preview handler",type:{name:"func"},required:!1},className:{description:"Additional CSS classes",type:{name:"string"},required:!1}}};const FileUpload_stories={title:"Forms/FileUpload",component:Forms_FileUpload,parameters:{layout:"centered",docs:{description:{component:"A versatile file upload component with drag and drop support, preview, and rich features."}}},argTypes:{variant:{control:"select",options:["default","filled","outlined"],description:"Visual style variant"},size:{control:"select",options:["small","medium","large"],description:"Size preset"},color:{control:"select",options:["primary","secondary","white"],description:"Color theme"}}},Default={args:{accept:"image/*",helperText:"Upload your files here",onChange:files=>console.log("Files changed:",files),onError:errors=>console.log("Upload errors:",errors)}},Multiple={args:{accept:"image/*,application/pdf",multiple:!0,maxFiles:5,helperText:"Upload up to 5 files",onChange:files=>console.log("Files changed:",files),onError:errors=>console.log("Upload errors:",errors)}},WithValidation={args:{accept:".pdf,.doc,.docx",maxSize:5242880,helperText:"Maximum file size: 5MB",error:"Please upload a valid document",onChange:files=>console.log("Files changed:",files),onError:errors=>console.log("Upload errors:",errors)}},Variants=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-8",children:[(0,jsx_runtime.jsx)(Forms_FileUpload,{variant:"default",accept:"image/*",helperText:"Default variant"}),(0,jsx_runtime.jsx)(Forms_FileUpload,{variant:"filled",accept:"image/*",helperText:"Filled variant"}),(0,jsx_runtime.jsx)(Forms_FileUpload,{variant:"outlined",accept:"image/*",helperText:"Outlined variant"})]}),Sizes=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-8",children:[(0,jsx_runtime.jsx)(Forms_FileUpload,{size:"small",accept:"image/*",helperText:"Small size"}),(0,jsx_runtime.jsx)(Forms_FileUpload,{size:"medium",accept:"image/*",helperText:"Medium size"}),(0,jsx_runtime.jsx)(Forms_FileUpload,{size:"large",accept:"image/*",helperText:"Large size"})]}),Colors=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-8",children:[(0,jsx_runtime.jsx)(Forms_FileUpload,{color:"primary",accept:"image/*",helperText:"Primary color"}),(0,jsx_runtime.jsx)(Forms_FileUpload,{color:"secondary",accept:"image/*",helperText:"Secondary color"}),(0,jsx_runtime.jsx)("div",{className:"p-8 bg-gray-800 rounded-lg",children:(0,jsx_runtime.jsx)(Forms_FileUpload,{color:"white",accept:"image/*",helperText:"White color"})})]}),WithImagePreview={args:{accept:"image/*",preview:!0,previewMaxHeight:200,helperText:"Upload images to see previews",onChange:files=>console.log("Files changed:",files)}},Disabled={args:{accept:"image/*",disabled:!0,helperText:"Upload is disabled"}},Success={args:{accept:"image/*",success:"Files uploaded successfully",helperText:"All files have been processed"}},Error={args:{accept:"image/*",error:"Error uploading files",helperText:"Please try again"}},ComplexExample=()=>{const[files,setFiles]=react.useState([]),[loading,setLoading]=react.useState(!1),[error,setError]=react.useState(null),[success,setSuccess]=react.useState(null);return(0,jsx_runtime.jsxs)("div",{className:"space-y-4",children:[(0,jsx_runtime.jsx)(Forms_FileUpload,{accept:"image/*,application/pdf",multiple:!0,maxSize:10485760,maxFiles:5,variant:"outlined",color:"primary",onChange:newFiles=>{setFiles(Array.isArray(newFiles)?newFiles:[newFiles]),setError(null),setSuccess(null)},onError:errors=>{setError(errors[0]),setSuccess(null)},error,success,disabled:loading,helperText:loading?"Uploading files...":"Upload up to 5 files (max 10MB each)"}),files.length>0&&(0,jsx_runtime.jsx)("button",{onClick:()=>{0!==files.length?(setLoading(!0),setError(null),setSuccess(null),setTimeout((()=>{setLoading(!1),setSuccess("Files uploaded successfully"),console.log("Uploaded files:",files)}),2e3)):setError("Please select files to upload")},disabled:loading,className:"\n            w-full px-4 py-2 rounded-lg\n            ".concat(loading?"bg-gray-300 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600","\n            text-white font-medium\n            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2\n            transition-colors duration-200\n          "),children:loading?"Uploading...":"Upload Files"})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    accept: 'image/*',\n    helperText: 'Upload your files here',\n    onChange: files => console.log('Files changed:', files),\n    onError: errors => console.log('Upload errors:', errors)\n  }\n}",...Default.parameters?.docs?.source}}},Multiple.parameters={...Multiple.parameters,docs:{...Multiple.parameters?.docs,source:{originalSource:"{\n  args: {\n    accept: 'image/*,application/pdf',\n    multiple: true,\n    maxFiles: 5,\n    helperText: 'Upload up to 5 files',\n    onChange: files => console.log('Files changed:', files),\n    onError: errors => console.log('Upload errors:', errors)\n  }\n}",...Multiple.parameters?.docs?.source}}},WithValidation.parameters={...WithValidation.parameters,docs:{...WithValidation.parameters?.docs,source:{originalSource:"{\n  args: {\n    accept: '.pdf,.doc,.docx',\n    maxSize: 5242880,\n    // 5MB\n    helperText: 'Maximum file size: 5MB',\n    error: 'Please upload a valid document',\n    onChange: files => console.log('Files changed:', files),\n    onError: errors => console.log('Upload errors:', errors)\n  }\n}",...WithValidation.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'() => <div className="space-y-8">\r\n    <FileUpload variant="default" accept="image/*" helperText="Default variant" />\r\n    <FileUpload variant="filled" accept="image/*" helperText="Filled variant" />\r\n    <FileUpload variant="outlined" accept="image/*" helperText="Outlined variant" />\r\n  </div>',...Variants.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'() => <div className="space-y-8">\r\n    <FileUpload size="small" accept="image/*" helperText="Small size" />\r\n    <FileUpload size="medium" accept="image/*" helperText="Medium size" />\r\n    <FileUpload size="large" accept="image/*" helperText="Large size" />\r\n  </div>',...Sizes.parameters?.docs?.source}}},Colors.parameters={...Colors.parameters,docs:{...Colors.parameters?.docs,source:{originalSource:'() => <div className="space-y-8">\r\n    <FileUpload color="primary" accept="image/*" helperText="Primary color" />\r\n    <FileUpload color="secondary" accept="image/*" helperText="Secondary color" />\r\n    <div className="p-8 bg-gray-800 rounded-lg">\r\n      <FileUpload color="white" accept="image/*" helperText="White color" />\r\n    </div>\r\n  </div>',...Colors.parameters?.docs?.source}}},WithImagePreview.parameters={...WithImagePreview.parameters,docs:{...WithImagePreview.parameters?.docs,source:{originalSource:"{\n  args: {\n    accept: 'image/*',\n    preview: true,\n    previewMaxHeight: 200,\n    helperText: 'Upload images to see previews',\n    onChange: files => console.log('Files changed:', files)\n  }\n}",...WithImagePreview.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    accept: 'image/*',\n    disabled: true,\n    helperText: 'Upload is disabled'\n  }\n}",...Disabled.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  args: {\n    accept: 'image/*',\n    success: 'Files uploaded successfully',\n    helperText: 'All files have been processed'\n  }\n}",...Success.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    accept: 'image/*',\n    error: 'Error uploading files',\n    helperText: 'Please try again'\n  }\n}",...Error.parameters?.docs?.source}}},ComplexExample.parameters={...ComplexExample.parameters,docs:{...ComplexExample.parameters?.docs,source:{originalSource:"() => {\n  const [files, setFiles] = React.useState([]);\n  const [loading, setLoading] = React.useState(false);\n  const [error, setError] = React.useState(null);\n  const [success, setSuccess] = React.useState(null);\n  const handleChange = newFiles => {\n    setFiles(Array.isArray(newFiles) ? newFiles : [newFiles]);\n    setError(null);\n    setSuccess(null);\n  };\n  const handleError = errors => {\n    setError(errors[0]);\n    setSuccess(null);\n  };\n  const handleUpload = () => {\n    if (files.length === 0) {\n      setError('Please select files to upload');\n      return;\n    }\n    setLoading(true);\n    setError(null);\n    setSuccess(null);\n\n    // Simulate upload\n    setTimeout(() => {\n      setLoading(false);\n      setSuccess('Files uploaded successfully');\n      console.log('Uploaded files:', files);\n    }, 2000);\n  };\n  return <div className=\"space-y-4\">\r\n      <FileUpload accept=\"image/*,application/pdf\" multiple maxSize={10485760} // 10MB\n    maxFiles={5} variant=\"outlined\" color=\"primary\" onChange={handleChange} onError={handleError} error={error} success={success} disabled={loading} helperText={loading ? 'Uploading files...' : 'Upload up to 5 files (max 10MB each)'} />\r\n      {files.length > 0 && <button onClick={handleUpload} disabled={loading} className={`\n            w-full px-4 py-2 rounded-lg\n            ${loading ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}\n            text-white font-medium\n            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2\n            transition-colors duration-200\n          `}>\r\n          {loading ? 'Uploading...' : 'Upload Files'}\r\n        </button>}\r\n    </div>;\n}",...ComplexExample.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Multiple","WithValidation","Variants","Sizes","Colors","WithImagePreview","Disabled","Success","Error","ComplexExample"]},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>AnimatePresence});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs"),MotionConfigContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0}),{nonce}=(0,react.useContext)(MotionConfigContext.Q);return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return nonce&&(style.nonce=nonce),document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),(0,jsx_runtime.jsx)(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size,children:react.cloneElement(children,{ref})})}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.M)(newChildrenMap),id=(0,react.useId)(),memoizedOnExitComplete=(0,react.useCallback)((childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()}),[presenceChildren,onExitComplete]),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:memoizedOnExitComplete,register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?[Math.random(),memoizedOnExitComplete]:[isPresent,memoizedOnExitComplete]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=(0,jsx_runtime.jsx)(PopChild,{isPresent,children})),(0,jsx_runtime.jsx)(PresenceContext.t.Provider,{value:context,children})};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),errors=__webpack_require__("./node_modules/motion-utils/dist/es/errors.mjs");const getChildKey=child=>child.key||"";function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}var use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");const AnimatePresence=({children,exitBeforeEnter,custom,initial=!0,onExitComplete,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.V)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const presentChildren=(0,react.useMemo)((()=>onlyElements(children)),[children]),presentKeys=presentChildren.map(getChildKey),isInitialRender=(0,react.useRef)(!0),pendingPresentChildren=(0,react.useRef)(presentChildren),exitComplete=(0,use_constant.M)((()=>new Map)),[diffedChildren,setDiffedChildren]=(0,react.useState)(presentChildren),[renderedChildren,setRenderedChildren]=(0,react.useState)(presentChildren);(0,use_isomorphic_effect.E)((()=>{isInitialRender.current=!1,pendingPresentChildren.current=presentChildren;for(let i=0;i<renderedChildren.length;i++){const key=getChildKey(renderedChildren[i]);presentKeys.includes(key)?exitComplete.delete(key):!0!==exitComplete.get(key)&&exitComplete.set(key,!1)}}),[renderedChildren,presentKeys.length,presentKeys.join("-")]);const exitingChildren=[];if(presentChildren!==diffedChildren){let nextChildren=[...presentChildren];for(let i=0;i<renderedChildren.length;i++){const child=renderedChildren[i],key=getChildKey(child);presentKeys.includes(key)||(nextChildren.splice(i,0,child),exitingChildren.push(child))}return"wait"===mode&&exitingChildren.length&&(nextChildren=exitingChildren),setRenderedChildren(onlyElements(nextChildren)),void setDiffedChildren(presentChildren)}const{forceRender}=(0,react.useContext)(LayoutGroupContext.L);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:renderedChildren.map((child=>{const key=getChildKey(child),isPresent=presentChildren===renderedChildren||presentKeys.includes(key);return(0,jsx_runtime.jsx)(PresenceChild,{isPresent,initial:!(isInitialRender.current&&!initial)&&void 0,custom:isPresent?void 0:custom,presenceAffectsLayout,mode,onExitComplete:isPresent?void 0:()=>{if(!exitComplete.has(key))return;exitComplete.set(key,!0);let isEveryExitComplete=!0;exitComplete.forEach((isExitComplete=>{isExitComplete||(isEveryExitComplete=!1)})),isEveryExitComplete&&(null==forceRender||forceRender(),setRenderedChildren(pendingPresentChildren.current),onExitComplete&&onExitComplete())},children:child},key)}))})}}}]);