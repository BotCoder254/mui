"use strict";(self.webpackChunkmuidev=self.webpackChunkmuidev||[]).push([[5887],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2})},"./src/components/DataDisplay/Accordion.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllowMultiple:()=>AllowMultiple,Default:()=>Default,ExpandIcons:()=>ExpandIcons,Interactive:()=>Interactive,RichContent:()=>RichContent,Variants:()=>Variants,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Accordion_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),proxy=__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["title","children","icon","defaultOpen","variant","expandIcon","editable","removable","onEdit","onRemove","disabled","highlighted","locked","onLockToggle","className"],_excluded2=["items","variant","expandIcon","allowMultiple","className"],AccordionItem=_ref=>{let{title,children,icon,defaultOpen=!1,variant="default",expandIcon="chevron",editable=!1,removable=!1,onEdit,onRemove,disabled=!1,highlighted=!1,locked=!1,onLockToggle,className=""}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const[isOpen,setIsOpen]=(0,react.useState)(defaultOpen),[isHovered,setIsHovered]=(0,react.useState)(!1),variants={default:{container:"bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",header:"bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700",content:"bg-white dark:bg-gray-800"},primary:{container:"bg-primary-50 dark:bg-primary-900/10 border border-primary-200 dark:border-primary-700",header:"bg-primary-50 dark:bg-primary-900/10 hover:bg-primary-100 dark:hover:bg-primary-900/20",content:"bg-white dark:bg-gray-800"},ghost:{container:"border-none",header:"hover:bg-gray-100 dark:hover:bg-gray-700",content:"bg-transparent"},info:{container:"bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-700",header:"bg-blue-50 dark:bg-blue-900/10 hover:bg-blue-100 dark:hover:bg-blue-900/20",content:"bg-white dark:bg-gray-800"},success:{container:"bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-700",header:"bg-green-50 dark:bg-green-900/10 hover:bg-green-100 dark:hover:bg-green-900/20",content:"bg-white dark:bg-gray-800"},warning:{container:"bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-700",header:"bg-yellow-50 dark:bg-yellow-900/10 hover:bg-yellow-100 dark:hover:bg-yellow-900/20",content:"bg-white dark:bg-gray-800"}},expandIcons={chevron:isOpen?(0,jsx_runtime.jsx)(index_esm.fK4,{className:"w-5 h-5 transform transition-transform duration-200"}):(0,jsx_runtime.jsx)(index_esm.fOo,{className:"w-5 h-5 transform transition-transform duration-200"}),plusMinus:isOpen?(0,jsx_runtime.jsx)(index_esm.QLg,{className:"w-5 h-5"}):(0,jsx_runtime.jsx)(index_esm.GGD,{className:"w-5 h-5"}),maximize:isOpen?(0,jsx_runtime.jsx)(index_esm.eDi,{className:"w-5 h-5"}):(0,jsx_runtime.jsx)(index_esm.mkN,{className:"w-5 h-5"})},headerAnimation={hover:{backgroundColor:isHovered?"rgba(0, 0, 0, 0.05)":"transparent",transition:{duration:.2}}};return(0,jsx_runtime.jsxs)("div",(0,objectSpread2.A)((0,objectSpread2.A)({className:"\n        overflow-hidden rounded-lg transition-shadow duration-200\n        ".concat(variants[variant].container,"\n        ").concat(isOpen?"shadow-md":"","\n        ").concat(disabled?"opacity-60 cursor-not-allowed":"","\n        ").concat(highlighted?"ring-2 ring-yellow-400 dark:ring-yellow-500":"","\n        ").concat(className,"\n      ")},props),{},{children:[(0,jsx_runtime.jsxs)(proxy.P.button,{onClick:()=>!disabled&&setIsOpen(!isOpen),onHoverStart:()=>setIsHovered(!0),onHoverEnd:()=>setIsHovered(!1),variants:headerAnimation,animate:"hover",className:"\n          w-full px-4 py-3 flex items-center justify-between\n          text-left text-gray-900 dark:text-gray-100\n          ".concat(variants[variant].header,"\n          ").concat(disabled?"cursor-not-allowed":"cursor-pointer","\n        "),children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-3",children:[(()=>{if(locked)return(0,jsx_runtime.jsx)(index_esm.F5$,{className:"w-4 h-4 text-gray-500 dark:text-gray-400"});if(highlighted)return(0,jsx_runtime.jsx)(index_esm.usP,{className:"w-4 h-4 text-yellow-500"});switch(variant){case"info":return(0,jsx_runtime.jsx)(index_esm.S8s,{className:"w-4 h-4 text-blue-500"});case"success":return(0,jsx_runtime.jsx)(index_esm.A3x,{className:"w-4 h-4 text-green-500"});case"warning":return(0,jsx_runtime.jsx)(index_esm.y3G,{className:"w-4 h-4 text-yellow-500"});default:return icon}})(),(0,jsx_runtime.jsx)("span",{className:"font-medium",children:title})]}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-2",children:[editable&&!disabled&&(0,jsx_runtime.jsx)(proxy.P.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:e=>{e.stopPropagation(),null==onEdit||onEdit()},className:"p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600",children:(0,jsx_runtime.jsx)(index_esm.SG1,{className:"w-4 h-4 text-gray-500 dark:text-gray-400"})}),removable&&!disabled&&(0,jsx_runtime.jsx)(proxy.P.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:e=>{e.stopPropagation(),null==onRemove||onRemove()},className:"p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600",children:(0,jsx_runtime.jsx)(index_esm.IXo,{className:"w-4 h-4 text-gray-500 dark:text-gray-400"})}),void 0!==locked&&(0,jsx_runtime.jsx)(proxy.P.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:e=>{e.stopPropagation(),null==onLockToggle||onLockToggle()},className:"p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600",children:locked?(0,jsx_runtime.jsx)(index_esm.F5$,{className:"w-4 h-4 text-gray-500 dark:text-gray-400"}):(0,jsx_runtime.jsx)(index_esm.K4k,{className:"w-4 h-4 text-gray-500 dark:text-gray-400"})}),(0,jsx_runtime.jsx)("span",{className:"text-gray-500 dark:text-gray-400",children:expandIcons[expandIcon]})]})]}),(0,jsx_runtime.jsx)(AnimatePresence.N,{initial:!1,children:isOpen&&(0,jsx_runtime.jsx)(proxy.P.div,{variants:{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1,transition:{height:{duration:.3,ease:"easeOut"},opacity:{duration:.2,ease:"easeOut"}}},exit:{height:0,opacity:0,transition:{height:{duration:.3,ease:"easeIn"},opacity:{duration:.2,ease:"easeIn"}}}},initial:"initial",animate:"animate",exit:"exit",className:"\n              px-4 py-3 border-t border-gray-200 dark:border-gray-700\n              ".concat(variants[variant].content,"\n            "),children})})]}))},Accordion=_ref2=>{let{items=[],variant="default",expandIcon="chevron",allowMultiple=!1,className=""}=_ref2,props=(0,objectWithoutProperties.A)(_ref2,_excluded2);const[openItems,setOpenItems]=(0,react.useState)(items.reduce(((acc,item,index)=>(item.defaultOpen&&acc.add(index),acc)),new Set));return(0,jsx_runtime.jsx)("div",(0,objectSpread2.A)((0,objectSpread2.A)({className:"space-y-2 ".concat(className)},props),{},{children:items.map(((item,index)=>(0,jsx_runtime.jsx)(AccordionItem,(0,objectSpread2.A)((0,objectSpread2.A)({},item),{},{variant:item.variant||variant,expandIcon:item.expandIcon||expandIcon,isOpen:openItems.has(index),onClick:()=>(index=>{setOpenItems((prev=>{const next=new Set(prev);return next.has(index)?next.delete(index):(allowMultiple||next.clear(),next.add(index)),next}))})(index)}),index)))}))},DataDisplay_Accordion=Accordion;Accordion.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{defaultValue:{value:"[]",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},required:!1},expandIcon:{defaultValue:{value:"'chevron'",computed:!1},required:!1},allowMultiple:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const Accordion_stories={title:"Data Display/Accordion",component:DataDisplay_Accordion,parameters:{layout:"padded",docs:{description:{component:"A versatile accordion component with various styles and animations."}}},argTypes:{variant:{control:"select",options:["default","primary","ghost"]},expandIcon:{control:"select",options:["chevron","plusMinus"]},allowMultiple:{control:"boolean"}}},sampleItems=[{title:"Section 1",children:"Content for section 1. This is a simple text content.",defaultOpen:!0},{title:"Section 2",children:"Content for section 2. This section contains more detailed information."},{title:"Section 3",children:"Content for section 3. You can put any content here."}],Default={args:{items:sampleItems}},Variants=()=>(0,jsx_runtime.jsx)("div",{className:"space-y-4 w-full max-w-md",children:(0,jsx_runtime.jsx)(DataDisplay_Accordion,{items:[{title:"Default Variant",children:"Content for default variant",variant:"default"},{title:"Primary Variant",children:"Content for primary variant",variant:"primary"},{title:"Ghost Variant",children:"Content for ghost variant",variant:"ghost"}]})}),WithIcons=()=>(0,jsx_runtime.jsx)("div",{className:"space-y-4 w-full max-w-md",children:(0,jsx_runtime.jsx)(DataDisplay_Accordion,{items:[{title:"Products",children:"Manage your products",icon:(0,jsx_runtime.jsx)(index_esm.X3y,{})},{title:"Settings",children:"Configure your preferences",icon:(0,jsx_runtime.jsx)(index_esm.VSk,{})},{title:"Profile",children:"Update your profile",icon:(0,jsx_runtime.jsx)(index_esm.JXP,{})},{title:"Help",children:"Get help and support",icon:(0,jsx_runtime.jsx)(index_esm.lrG,{})}]})}),ExpandIcons=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-8 w-full max-w-md",children:[(0,jsx_runtime.jsx)(DataDisplay_Accordion,{items:sampleItems,expandIcon:"chevron"}),(0,jsx_runtime.jsx)(DataDisplay_Accordion,{items:sampleItems,expandIcon:"plusMinus"})]}),AllowMultiple=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-4 w-full max-w-md",children:[(0,jsx_runtime.jsx)("h3",{className:"text-lg font-medium mb-2",children:"Multiple sections can be open"}),(0,jsx_runtime.jsx)(DataDisplay_Accordion,{items:sampleItems,allowMultiple:!0})]}),RichContent=()=>(0,jsx_runtime.jsx)("div",{className:"w-full max-w-md",children:(0,jsx_runtime.jsx)(DataDisplay_Accordion,{items:[{title:"Image Gallery",children:(0,jsx_runtime.jsx)("div",{className:"grid grid-cols-3 gap-2",children:Array.from({length:6}).map(((_,i)=>(0,jsx_runtime.jsx)("img",{src:"https://picsum.photos/100/100?random=".concat(i),alt:"Gallery ".concat(i+1),className:"rounded"},i)))})},{title:"Statistics",children:(0,jsx_runtime.jsxs)("div",{className:"space-y-4",children:[(0,jsx_runtime.jsxs)("div",{className:"flex justify-between",children:[(0,jsx_runtime.jsx)("span",{children:"Views"}),(0,jsx_runtime.jsx)("span",{className:"font-medium",children:"1,234"})]}),(0,jsx_runtime.jsxs)("div",{className:"flex justify-between",children:[(0,jsx_runtime.jsx)("span",{children:"Likes"}),(0,jsx_runtime.jsx)("span",{className:"font-medium",children:"567"})]}),(0,jsx_runtime.jsxs)("div",{className:"flex justify-between",children:[(0,jsx_runtime.jsx)("span",{children:"Comments"}),(0,jsx_runtime.jsx)("span",{className:"font-medium",children:"89"})]})]})},{title:"Actions",children:(0,jsx_runtime.jsxs)("div",{className:"flex gap-2",children:[(0,jsx_runtime.jsx)("button",{className:"px-4 py-2 bg-primary-500 text-white rounded-lg",children:"Edit"}),(0,jsx_runtime.jsx)("button",{className:"px-4 py-2 bg-gray-500 text-white rounded-lg",children:"Delete"})]})}]})}),Interactive=()=>{const[sections,setSections]=react.useState([{id:1,title:"Section 1",content:"Content 1"},{id:2,title:"Section 2",content:"Content 2"},{id:3,title:"Section 3",content:"Content 3"}]);return(0,jsx_runtime.jsxs)("div",{className:"space-y-4 w-full max-w-md",children:[(0,jsx_runtime.jsx)(DataDisplay_Accordion,{items:sections.map((section=>({title:section.title,children:section.content,editable:!0,removable:!0,onEdit:()=>(id=>{const newTitle=prompt("Enter new title:");newTitle&&setSections(sections.map((section=>section.id===id?(0,objectSpread2.A)((0,objectSpread2.A)({},section),{},{title:newTitle}):section)))})(section.id),onRemove:()=>{return id=section.id,void setSections(sections.filter((section=>section.id!==id)));var id}}))),allowMultiple:!0}),(0,jsx_runtime.jsx)("button",{onClick:()=>{const id=Math.max(0,...sections.map((s=>s.id)))+1;setSections([...sections,{id,title:"Section ".concat(id),content:"Content ".concat(id)}])},className:"px-4 py-2 bg-primary-500 text-white rounded-lg",children:"Add Section"})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: sampleItems\n  }\n}",...Default.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:"() => <div className=\"space-y-4 w-full max-w-md\">\r\n    <Accordion items={[{\n    title: 'Default Variant',\n    children: 'Content for default variant',\n    variant: 'default'\n  }, {\n    title: 'Primary Variant',\n    children: 'Content for primary variant',\n    variant: 'primary'\n  }, {\n    title: 'Ghost Variant',\n    children: 'Content for ghost variant',\n    variant: 'ghost'\n  }]} />\r\n  </div>",...Variants.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:"() => <div className=\"space-y-4 w-full max-w-md\">\r\n    <Accordion items={[{\n    title: 'Products',\n    children: 'Manage your products',\n    icon: <FiBox />\n  }, {\n    title: 'Settings',\n    children: 'Configure your preferences',\n    icon: <FiSettings />\n  }, {\n    title: 'Profile',\n    children: 'Update your profile',\n    icon: <FiUser />\n  }, {\n    title: 'Help',\n    children: 'Get help and support',\n    icon: <FiHelpCircle />\n  }]} />\r\n  </div>",...WithIcons.parameters?.docs?.source}}},ExpandIcons.parameters={...ExpandIcons.parameters,docs:{...ExpandIcons.parameters?.docs,source:{originalSource:'() => <div className="space-y-8 w-full max-w-md">\r\n    <Accordion items={sampleItems} expandIcon="chevron" />\r\n    <Accordion items={sampleItems} expandIcon="plusMinus" />\r\n  </div>',...ExpandIcons.parameters?.docs?.source}}},AllowMultiple.parameters={...AllowMultiple.parameters,docs:{...AllowMultiple.parameters?.docs,source:{originalSource:'() => <div className="space-y-4 w-full max-w-md">\r\n    <h3 className="text-lg font-medium mb-2">Multiple sections can be open</h3>\r\n    <Accordion items={sampleItems} allowMultiple />\r\n  </div>',...AllowMultiple.parameters?.docs?.source}}},RichContent.parameters={...RichContent.parameters,docs:{...RichContent.parameters?.docs,source:{originalSource:'() => <div className="w-full max-w-md">\r\n    <Accordion items={[{\n    title: \'Image Gallery\',\n    children: <div className="grid grid-cols-3 gap-2">\r\n              {Array.from({\n        length: 6\n      }).map((_, i) => <img key={i} src={`https://picsum.photos/100/100?random=${i}`} alt={`Gallery ${i + 1}`} className="rounded" />)}\r\n            </div>\n  }, {\n    title: \'Statistics\',\n    children: <div className="space-y-4">\r\n              <div className="flex justify-between">\r\n                <span>Views</span>\r\n                <span className="font-medium">1,234</span>\r\n              </div>\r\n              <div className="flex justify-between">\r\n                <span>Likes</span>\r\n                <span className="font-medium">567</span>\r\n              </div>\r\n              <div className="flex justify-between">\r\n                <span>Comments</span>\r\n                <span className="font-medium">89</span>\r\n              </div>\r\n            </div>\n  }, {\n    title: \'Actions\',\n    children: <div className="flex gap-2">\r\n              <button className="px-4 py-2 bg-primary-500 text-white rounded-lg">\r\n                Edit\r\n              </button>\r\n              <button className="px-4 py-2 bg-gray-500 text-white rounded-lg">\r\n                Delete\r\n              </button>\r\n            </div>\n  }]} />\r\n  </div>',...RichContent.parameters?.docs?.source}}},Interactive.parameters={...Interactive.parameters,docs:{...Interactive.parameters?.docs,source:{originalSource:"() => {\n  const [sections, setSections] = React.useState([{\n    id: 1,\n    title: 'Section 1',\n    content: 'Content 1'\n  }, {\n    id: 2,\n    title: 'Section 2',\n    content: 'Content 2'\n  }, {\n    id: 3,\n    title: 'Section 3',\n    content: 'Content 3'\n  }]);\n  const handleEdit = id => {\n    const newTitle = prompt('Enter new title:');\n    if (newTitle) {\n      setSections(sections.map(section => section.id === id ? {\n        ...section,\n        title: newTitle\n      } : section));\n    }\n  };\n  const handleRemove = id => {\n    setSections(sections.filter(section => section.id !== id));\n  };\n  const handleAdd = () => {\n    const id = Math.max(0, ...sections.map(s => s.id)) + 1;\n    setSections([...sections, {\n      id,\n      title: `Section ${id}`,\n      content: `Content ${id}`\n    }]);\n  };\n  return <div className=\"space-y-4 w-full max-w-md\">\r\n      <Accordion items={sections.map(section => ({\n      title: section.title,\n      children: section.content,\n      editable: true,\n      removable: true,\n      onEdit: () => handleEdit(section.id),\n      onRemove: () => handleRemove(section.id)\n    }))} allowMultiple />\r\n      <button onClick={handleAdd} className=\"px-4 py-2 bg-primary-500 text-white rounded-lg\">\r\n        Add Section\r\n      </button>\r\n    </div>;\n}",...Interactive.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Variants","WithIcons","ExpandIcons","AllowMultiple","RichContent","Interactive"]},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>AnimatePresence});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs"),MotionConfigContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0}),{nonce}=(0,react.useContext)(MotionConfigContext.Q);return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return nonce&&(style.nonce=nonce),document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),(0,jsx_runtime.jsx)(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size,children:react.cloneElement(children,{ref})})}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.M)(newChildrenMap),id=(0,react.useId)(),memoizedOnExitComplete=(0,react.useCallback)((childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()}),[presenceChildren,onExitComplete]),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:memoizedOnExitComplete,register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?[Math.random(),memoizedOnExitComplete]:[isPresent,memoizedOnExitComplete]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=(0,jsx_runtime.jsx)(PopChild,{isPresent,children})),(0,jsx_runtime.jsx)(PresenceContext.t.Provider,{value:context,children})};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),errors=__webpack_require__("./node_modules/motion-utils/dist/es/errors.mjs");const getChildKey=child=>child.key||"";function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}var use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");const AnimatePresence=({children,exitBeforeEnter,custom,initial=!0,onExitComplete,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.V)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const presentChildren=(0,react.useMemo)((()=>onlyElements(children)),[children]),presentKeys=presentChildren.map(getChildKey),isInitialRender=(0,react.useRef)(!0),pendingPresentChildren=(0,react.useRef)(presentChildren),exitComplete=(0,use_constant.M)((()=>new Map)),[diffedChildren,setDiffedChildren]=(0,react.useState)(presentChildren),[renderedChildren,setRenderedChildren]=(0,react.useState)(presentChildren);(0,use_isomorphic_effect.E)((()=>{isInitialRender.current=!1,pendingPresentChildren.current=presentChildren;for(let i=0;i<renderedChildren.length;i++){const key=getChildKey(renderedChildren[i]);presentKeys.includes(key)?exitComplete.delete(key):!0!==exitComplete.get(key)&&exitComplete.set(key,!1)}}),[renderedChildren,presentKeys.length,presentKeys.join("-")]);const exitingChildren=[];if(presentChildren!==diffedChildren){let nextChildren=[...presentChildren];for(let i=0;i<renderedChildren.length;i++){const child=renderedChildren[i],key=getChildKey(child);presentKeys.includes(key)||(nextChildren.splice(i,0,child),exitingChildren.push(child))}return"wait"===mode&&exitingChildren.length&&(nextChildren=exitingChildren),setRenderedChildren(onlyElements(nextChildren)),void setDiffedChildren(presentChildren)}const{forceRender}=(0,react.useContext)(LayoutGroupContext.L);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:renderedChildren.map((child=>{const key=getChildKey(child),isPresent=presentChildren===renderedChildren||presentKeys.includes(key);return(0,jsx_runtime.jsx)(PresenceChild,{isPresent,initial:!(isInitialRender.current&&!initial)&&void 0,custom:isPresent?void 0:custom,presenceAffectsLayout,mode,onExitComplete:isPresent?void 0:()=>{if(!exitComplete.has(key))return;exitComplete.set(key,!0);let isEveryExitComplete=!0;exitComplete.forEach((isExitComplete=>{isExitComplete||(isEveryExitComplete=!1)})),isEveryExitComplete&&(null==forceRender||forceRender(),setRenderedChildren(pendingPresentChildren.current),onExitComplete&&onExitComplete())},children:child},key)}))})}}}]);