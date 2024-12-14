"use strict";(self.webpackChunkmuilibrary=self.webpackChunkmuilibrary||[]).push([[2513],{"./src/components/Card/Card.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoSlideshowCard:()=>AutoSlideshowCard,Basic:()=>Basic,BlogPost:()=>BlogPost,DynamicLoadingCard:()=>DynamicLoadingCard,GlassCard:()=>GlassCard,GradientCard:()=>GradientCard,ImageGalleryCard:()=>ImageGalleryCard,ImagePositions:()=>ImagePositions,InteractiveCards:()=>InteractiveCards,InteractiveImageCards:()=>InteractiveImageCards,LoadingStates:()=>LoadingStates,ProductCard:()=>ProductCard,SocialCard:()=>SocialCard,WithImage:()=>WithImage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),proxy=__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),ChevronLeftIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ChevronLeftIcon.js"),ChevronRightIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js"),HeartIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/HeartIcon.js"),ShareIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ShareIcon.js"),BookmarkIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/BookmarkIcon.js"),EllipsisHorizontalIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/EllipsisHorizontalIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","variant","padding","shadow","hover","interactive","loading","className","onClick","images","image","imageAlt","imagePosition","title","subtitle","actions","footer","badges","showSocialActions","aspectRatio","blur","overlay","enableImageNavigation","imageInterval"],Card=_ref=>{var _processedImages$curr;let{children,variant="default",padding="medium",shadow="medium",hover=!0,interactive=!1,loading=!1,className,onClick,images=[],image,imageAlt,imagePosition="top",title,subtitle,actions,footer,badges=[],showSocialActions=!1,aspectRatio="16/9",blur=!1,overlay=!1,enableImageNavigation=!0,imageInterval=5e3}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const[currentImageIndex,setCurrentImageIndex]=(0,react.useState)(0),[isHovered,setIsHovered]=(0,react.useState)(!1),processedImages=images.length>0?images.map((img=>"string"==typeof img?{src:img}:img)):image?["string"==typeof image?{src:image}:image]:[],currentImage=(null===(_processedImages$curr=processedImages[currentImageIndex])||void 0===_processedImages$curr?void 0:_processedImages$curr.src)||"";react.useEffect((()=>{if(processedImages.length<=1||!enableImageNavigation||isHovered)return;const interval=setInterval((()=>{setCurrentImageIndex((prev=>(prev+1)%processedImages.length))}),imageInterval);return()=>clearInterval(interval)}),[processedImages.length,enableImageNavigation,imageInterval,isHovered]);const handlePrevImage=e=>{e.stopPropagation(),setCurrentImageIndex((prev=>0===prev?processedImages.length-1:prev-1))},handleNextImage=e=>{e.stopPropagation(),setCurrentImageIndex((prev=>(prev+1)%processedImages.length))},paddings={none:"",small:"p-3",medium:"p-5",large:"p-8"},hoverEffects=hover?{default:"hover:border-gray-300 hover:shadow-lg",outlined:"hover:border-gray-400 hover:shadow-md",elevated:"hover:-translate-y-1 hover:shadow-xl",glass:"hover:bg-white/90 hover:shadow-xl",solid:"hover:bg-gray-800 hover:shadow-xl",gradient:"hover:shadow-xl hover:scale-[1.02]"}:{},classes="\n    ".concat("rounded-xl bg-white overflow-hidden transition-all duration-200","\n    ").concat({default:"border border-gray-200",outlined:"border-2 border-gray-300",elevated:"border border-gray-100",glass:"backdrop-blur-md bg-white/80 border border-white/20",solid:"bg-gray-900 text-white border-none",gradient:"bg-gradient-to-br from-blue-500 to-purple-600 text-white border-none"}[variant],"\n    ").concat("none"===padding||image?"":paddings[padding],"\n    ").concat({none:"",small:"shadow-sm",medium:"shadow-md",large:"shadow-lg",xl:"shadow-xl"}[shadow],"\n    ").concat(hover?hoverEffects[variant]:"","\n    ").concat(interactive?"cursor-pointer":"","\n    ").concat("left"===imagePosition||"right"===imagePosition?"flex":"","\n    ").concat(className||"","\n  "),ImageComponent=()=>{var _processedImages$curr2;return(0,jsx_runtime.jsxs)("div",{className:"\n        relative overflow-hidden\n        ".concat("left"===imagePosition||"right"===imagePosition?"w-1/3":"w-full","\n        ").concat("background"===imagePosition?"absolute inset-0":"","\n      "),style:{aspectRatio},onMouseEnter:()=>setIsHovered(!0),onMouseLeave:()=>setIsHovered(!1),children:[(0,jsx_runtime.jsx)(AnimatePresence.N,{mode:"wait",children:(0,jsx_runtime.jsx)(proxy.P.img,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},src:currentImage,alt:(null===(_processedImages$curr2=processedImages[currentImageIndex])||void 0===_processedImages$curr2?void 0:_processedImages$curr2.alt)||imageAlt,className:"\n            w-full h-full object-cover\n            ".concat(blur?"blur-sm scale-110":"","\n            ").concat(hover?"group-hover:scale-110 transition-transform duration-500":"","\n          ")},currentImage)}),overlay&&(0,jsx_runtime.jsx)("div",{className:"absolute inset-0 bg-black/40"}),badges.length>0&&(0,jsx_runtime.jsx)("div",{className:"absolute top-2 left-2 flex gap-2",children:badges.map(((badge,index)=>(0,jsx_runtime.jsx)("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-black/50 text-white backdrop-blur-sm",children:badge},index)))}),enableImageNavigation&&processedImages.length>1&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"\n            absolute inset-0 flex items-center justify-between\n            opacity-0 group-hover:opacity-100 transition-opacity duration-200\n          ",children:[(0,jsx_runtime.jsx)(proxy.P.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:handlePrevImage,className:"ml-2 p-1 rounded-full bg-black/50 text-white hover:bg-black/70",children:(0,jsx_runtime.jsx)(ChevronLeftIcon.A,{className:"w-5 h-5"})}),(0,jsx_runtime.jsx)(proxy.P.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:handleNextImage,className:"mr-2 p-1 rounded-full bg-black/50 text-white hover:bg-black/70",children:(0,jsx_runtime.jsx)(ChevronRightIcon.A,{className:"w-5 h-5"})})]}),(0,jsx_runtime.jsx)("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1",children:processedImages.map(((_,index)=>(0,jsx_runtime.jsx)(proxy.P.button,{onClick:e=>{e.stopPropagation(),setCurrentImageIndex(index)},className:"\n                  w-2 h-2 rounded-full transition-all duration-200\n                  ".concat(currentImageIndex===index?"bg-white w-4":"bg-white/50 hover:bg-white/75","\n                "),whileHover:{scale:1.2},whileTap:{scale:.8}},index)))})]})]})},SocialActions=()=>(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-4 text-gray-500",children:[(0,jsx_runtime.jsx)(proxy.P.button,{whileHover:{scale:1.1},whileTap:{scale:.95},className:"hover:text-red-500",children:(0,jsx_runtime.jsx)(HeartIcon.A,{className:"w-6 h-6"})}),(0,jsx_runtime.jsx)(proxy.P.button,{whileHover:{scale:1.1},whileTap:{scale:.95},className:"hover:text-blue-500",children:(0,jsx_runtime.jsx)(ShareIcon.A,{className:"w-6 h-6"})}),(0,jsx_runtime.jsx)(proxy.P.button,{whileHover:{scale:1.1},whileTap:{scale:.95},className:"hover:text-yellow-500",children:(0,jsx_runtime.jsx)(BookmarkIcon.A,{className:"w-6 h-6"})}),(0,jsx_runtime.jsx)(proxy.P.button,{whileHover:{scale:1.1},whileTap:{scale:.95},className:"ml-auto hover:text-gray-700",children:(0,jsx_runtime.jsx)(EllipsisHorizontalIcon.A,{className:"w-6 h-6"})})]}),cardContent=(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:loading?(0,jsx_runtime.jsx)("div",{className:"flex items-center justify-center min-h-[200px]",children:(0,jsx_runtime.jsx)(proxy.P.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},className:"w-8 h-8 border-3 border-current border-t-transparent rounded-full"})}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[image&&"background"===imagePosition&&(0,jsx_runtime.jsx)(ImageComponent,{}),(0,jsx_runtime.jsxs)("div",{className:"\n            ".concat("background"===imagePosition?"relative z-10":"","\n            ").concat("left"===imagePosition||"right"===imagePosition?"flex-1":"","\n            ").concat("none"!==padding?paddings[padding]:"","\n          "),children:[image&&"background"!==imagePosition&&(0,jsx_runtime.jsx)(ImageComponent,{}),(title||subtitle)&&(0,jsx_runtime.jsxs)("div",{className:"space-y-1 mb-4",children:[title&&(0,jsx_runtime.jsx)(proxy.P.h3,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-xl font-semibold",children:title}),subtitle&&(0,jsx_runtime.jsx)(proxy.P.p,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.1},className:"text-gray-500 dark:text-gray-400",children:subtitle})]}),children,showSocialActions&&(0,jsx_runtime.jsx)("div",{className:"mt-4 pt-4 border-t",children:(0,jsx_runtime.jsx)(SocialActions,{})}),actions&&(0,jsx_runtime.jsx)("div",{className:"mt-4 flex gap-2 justify-end",children:actions})]}),footer&&(0,jsx_runtime.jsx)("div",{className:"\n              mt-4 pt-4 border-t\n              ".concat("none"!==padding?paddings[padding]:"","\n            "),children:footer})]})}),cardVariants={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.3,ease:"easeOut"}},hover:{scale:interactive?1.02:1,transition:{duration:.2,ease:"easeInOut"}},tap:{scale:interactive?.98:1}};return(0,jsx_runtime.jsx)(proxy.P.div,(0,objectSpread2.A)((0,objectSpread2.A)({className:"".concat(classes," group"),initial:"hidden",animate:"visible",whileHover:"hover",whileTap:"tap",variants:cardVariants,onClick:interactive?onClick:void 0},props),{},{children:cardContent}))},Card_Card=Card;Card.__docgenInfo={description:"A modern, animated card component with rich features and interactive elements",methods:[],displayName:"Card",props:{variant:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'outlined'",computed:!1},{value:"'elevated'",computed:!1},{value:"'glass'",computed:!1},{value:"'solid'",computed:!1},{value:"'gradient'",computed:!1}]},required:!1},padding:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'none'",computed:!1},{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},shadow:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'none'",computed:!1},{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1},{value:"'xl'",computed:!1}]},required:!1},hover:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},interactive:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},images:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"string"},{name:"shape",value:{src:{name:"string",required:!0},alt:{name:"string",required:!1}}}]}},required:!1},imagePosition:{defaultValue:{value:"'top'",computed:!1},description:"",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1},{value:"'right'",computed:!1},{value:"'background'",computed:!1}]},required:!1},badges:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},showSocialActions:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},aspectRatio:{defaultValue:{value:"'16/9'",computed:!1},description:"",type:{name:"string"},required:!1},blur:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},overlay:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},enableImageNavigation:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},imageInterval:{defaultValue:{value:"5000",computed:!1},description:"",type:{name:"number"},required:!1},children:{description:"",type:{name:"node"},required:!1},className:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},image:{description:"",type:{name:"union",value:[{name:"string"},{name:"shape",value:{src:{name:"string",required:!0},alt:{name:"string",required:!1}}}]},required:!1},imageAlt:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"node"},required:!1},subtitle:{description:"",type:{name:"node"},required:!1},actions:{description:"",type:{name:"node"},required:!1},footer:{description:"",type:{name:"node"},required:!1}}};var Button=__webpack_require__("./src/components/Button/Button.jsx");const sampleImage="https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",sampleImages=[{src:"https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",alt:"Modern workspace"},{src:"https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",alt:"Urban architecture"},{src:"https://images.unsplash.com/photo-1682687220063-4742bd7fd538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",alt:"Nature landscape"},{src:"https://images.unsplash.com/photo-1682695796497-31a44224d6d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",alt:"City life"}],Card_stories={title:"Components/Card",component:Card_Card,parameters:{docs:{description:{component:'\n# Card Component\n\nA modern, animated card component with rich features and interactive elements.\n\n## Features\n- Multiple variants (default, outlined, elevated, glass, solid, gradient)\n- Image support with various positions\n- Social actions (like, share, bookmark)\n- Badges\n- Custom actions and footer\n- Loading state\n- Interactive hover effects\n- Blur and overlay effects\n- Responsive design\n- Dark mode support\n\n## Usage\n\n```jsx\nimport { Card } from \'mui-components\';\n\nfunction MyComponent() {\n  return (\n    <Card\n      variant="elevated"\n      image="https://source.unsplash.com/random"\n      imagePosition="top"\n      title="Card Title"\n      subtitle="Card subtitle"\n      badges={[\'New\', \'Featured\']}\n      showSocialActions\n    >\n      Card content goes here...\n    </Card>\n  );\n}\n```\n'}},backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#1a1a1a"},{name:"colored",value:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}]}},tags:["autodocs"],argTypes:{variant:{description:"The visual style of the card",control:"select",options:["default","outlined","elevated","glass","solid","gradient"]},padding:{description:"The padding size of the card",control:"select",options:["none","small","medium","large"]},shadow:{description:"The shadow size of the card",control:"select",options:["none","small","medium","large","xl"]},imagePosition:{description:"Position of the image",control:"select",options:["top","bottom","left","right","background"]},hover:{description:"Enable hover effects",control:"boolean"},interactive:{description:"Make the card interactive",control:"boolean"},showSocialActions:{description:"Show social action buttons",control:"boolean"},blur:{description:"Apply blur effect to image",control:"boolean"},overlay:{description:"Add dark overlay to image",control:"boolean"}}},ExampleContent=()=>(0,jsx_runtime.jsx)("p",{className:"text-gray-600 dark:text-gray-300",children:"This is some example content that goes inside the card. You can put any content you want here."}),Template=args=>(0,jsx_runtime.jsx)("div",{className:"p-8",style:{maxWidth:"400px"},children:(0,jsx_runtime.jsx)(Card_Card,(0,objectSpread2.A)((0,objectSpread2.A)({},args),{},{children:(0,jsx_runtime.jsx)(ExampleContent,{})}))}),Basic=Template.bind({});Basic.args={variant:"default",padding:"medium",shadow:"medium",title:"Card Title",subtitle:"Card Subtitle",hover:!0};const WithImage=Template.bind({});WithImage.args={variant:"elevated",padding:"medium",shadow:"large",image:sampleImage,imageAlt:"Sample image",title:"Card with Image",subtitle:"Beautiful image card",badges:["New","Featured"],hover:!0};const SocialCard=Template.bind({});SocialCard.args={variant:"default",padding:"medium",image:sampleImage,imageAlt:"Social card image",title:"Social Card",subtitle:"With social actions",showSocialActions:!0,badges:["Trending"]};const BlogPost=Template.bind({});BlogPost.args={variant:"elevated",padding:"medium",image:sampleImage,imageAlt:"Blog post image",imagePosition:"top",title:"Blog Post Title",subtitle:"Posted by John Doe • 5 min read",badges:["Technology","Design"],footer:(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-between",children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,jsx_runtime.jsx)("img",{src:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",alt:"Author",className:"w-8 h-8 rounded-full"}),(0,jsx_runtime.jsx)("span",{className:"text-sm font-medium",children:"John Doe"})]}),(0,jsx_runtime.jsx)(Button.A,{variant:"outline",size:"small",children:"Read More"})]})};const ProductCard=Template.bind({});ProductCard.args={variant:"outlined",padding:"medium",images:sampleImages,imageAlt:"Product images",title:"Product Name",subtitle:"$99.99",badges:["Sale","-20%"],enableImageNavigation:!0,actions:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.A,{variant:"outline",size:"small",children:"Add to Cart"}),(0,jsx_runtime.jsx)(Button.A,{variant:"primary",size:"small",children:"Buy Now"})]})};const GlassCard=Template.bind({});GlassCard.args={variant:"glass",padding:"medium",images:[{src:"https://images.unsplash.com/photo-1682695794947-17061dc284dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",alt:"Aerial view"},{src:"https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",alt:"Mountain vista"}],imagePosition:"background",overlay:!0,title:"Glass Card",subtitle:"With background slideshow",imageInterval:3e3},GlassCard.parameters={backgrounds:{default:"colored"}};const GradientCard=Template.bind({});GradientCard.args={variant:"gradient",padding:"large",title:"Gradient Card",subtitle:"With beautiful gradient background",showSocialActions:!0};const ImageGalleryCard=Template.bind({});ImageGalleryCard.args={variant:"elevated",padding:"medium",images:sampleImages,title:"Image Gallery Card",subtitle:"Multiple images with navigation",enableImageNavigation:!0,showSocialActions:!0};const AutoSlideshowCard=Template.bind({});AutoSlideshowCard.args={variant:"default",padding:"medium",images:sampleImages,title:"Auto Slideshow Card",subtitle:"Images change automatically",enableImageNavigation:!0,imageInterval:2e3};const ImagePositions=()=>(0,jsx_runtime.jsx)("div",{className:"p-8 space-y-8",children:["top","bottom","left","right","background"].map((position=>(0,jsx_runtime.jsx)(Card_Card,{images:sampleImages,imagePosition:position,title:"Images ".concat(position),subtitle:"Multiple images with ".concat(position," position"),padding:"medium",enableImageNavigation:!0,children:(0,jsx_runtime.jsx)(ExampleContent,{})},position)))}),InteractiveImageCards=()=>(0,jsx_runtime.jsxs)("div",{className:"p-8 grid grid-cols-1 md:grid-cols-2 gap-8",children:[(0,jsx_runtime.jsx)(Card_Card,{interactive:!0,hover:!0,images:sampleImages,title:"Interactive Gallery Card",subtitle:"Click to interact",padding:"medium",enableImageNavigation:!0,onClick:()=>console.log("Card clicked"),children:(0,jsx_runtime.jsx)(ExampleContent,{})}),(0,jsx_runtime.jsx)(Card_Card,{interactive:!0,hover:!0,variant:"gradient",images:[{src:"https://images.unsplash.com/photo-1682687220063-4742bd7fd538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",alt:"Abstract patterns"},{src:"https://images.unsplash.com/photo-1682695794947-17061dc284dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",alt:"Minimal design"}],title:"Interactive Gradient Gallery",subtitle:"With auto slideshow",padding:"medium",enableImageNavigation:!0,imageInterval:3e3,onClick:()=>console.log("Card clicked"),children:(0,jsx_runtime.jsx)(ExampleContent,{})})]}),DynamicLoadingCard=()=>{const[images,setImages]=react.useState([]),[loading,setLoading]=react.useState(!0);return react.useEffect((()=>{setTimeout((()=>{setImages(sampleImages),setLoading(!1)}),2e3)}),[]),(0,jsx_runtime.jsx)(Card_Card,{variant:"elevated",padding:"medium",title:"Dynamic Loading Card",subtitle:"Images loaded dynamically",loading,images,enableImageNavigation:!0,showSocialActions:!0,children:!loading&&(0,jsx_runtime.jsx)(ExampleContent,{})})},LoadingStates=()=>(0,jsx_runtime.jsxs)("div",{className:"p-8 grid grid-cols-1 md:grid-cols-2 gap-8",children:[(0,jsx_runtime.jsx)(Card_Card,{loading:!0,padding:"medium"}),(0,jsx_runtime.jsx)(Card_Card,{loading:!0,variant:"elevated",padding:"medium"})]}),InteractiveCards=()=>(0,jsx_runtime.jsxs)("div",{className:"p-8 grid grid-cols-1 md:grid-cols-2 gap-8",children:[(0,jsx_runtime.jsx)(Card_Card,{interactive:!0,hover:!0,image:sampleImage,title:"Interactive Card",padding:"medium",onClick:()=>console.log("Card clicked"),children:(0,jsx_runtime.jsx)(ExampleContent,{})}),(0,jsx_runtime.jsx)(Card_Card,{interactive:!0,hover:!0,variant:"gradient",title:"Interactive Gradient",padding:"medium",onClick:()=>console.log("Card clicked"),children:(0,jsx_runtime.jsx)(ExampleContent,{})})]});Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => <div className=\"p-8\" style={{\n  maxWidth: '400px'\n}}>\r\n    <Card {...args}>\r\n      <ExampleContent />\r\n    </Card>\r\n  </div>",...Basic.parameters?.docs?.source}}},WithImage.parameters={...WithImage.parameters,docs:{...WithImage.parameters?.docs,source:{originalSource:"args => <div className=\"p-8\" style={{\n  maxWidth: '400px'\n}}>\r\n    <Card {...args}>\r\n      <ExampleContent />\r\n    </Card>\r\n  </div>",...WithImage.parameters?.docs?.source}}},SocialCard.parameters={...SocialCard.parameters,docs:{...SocialCard.parameters?.docs,source:{originalSource:"args => <div className=\"p-8\" style={{\n  maxWidth: '400px'\n}}>\r\n    <Card {...args}>\r\n      <ExampleContent />\r\n    </Card>\r\n  </div>",...SocialCard.parameters?.docs?.source}}},BlogPost.parameters={...BlogPost.parameters,docs:{...BlogPost.parameters?.docs,source:{originalSource:"args => <div className=\"p-8\" style={{\n  maxWidth: '400px'\n}}>\r\n    <Card {...args}>\r\n      <ExampleContent />\r\n    </Card>\r\n  </div>",...BlogPost.parameters?.docs?.source}}},ProductCard.parameters={...ProductCard.parameters,docs:{...ProductCard.parameters?.docs,source:{originalSource:"args => <div className=\"p-8\" style={{\n  maxWidth: '400px'\n}}>\r\n    <Card {...args}>\r\n      <ExampleContent />\r\n    </Card>\r\n  </div>",...ProductCard.parameters?.docs?.source}}},GlassCard.parameters={...GlassCard.parameters,docs:{...GlassCard.parameters?.docs,source:{originalSource:"args => <div className=\"p-8\" style={{\n  maxWidth: '400px'\n}}>\r\n    <Card {...args}>\r\n      <ExampleContent />\r\n    </Card>\r\n  </div>",...GlassCard.parameters?.docs?.source}}},GradientCard.parameters={...GradientCard.parameters,docs:{...GradientCard.parameters?.docs,source:{originalSource:"args => <div className=\"p-8\" style={{\n  maxWidth: '400px'\n}}>\r\n    <Card {...args}>\r\n      <ExampleContent />\r\n    </Card>\r\n  </div>",...GradientCard.parameters?.docs?.source}}},ImageGalleryCard.parameters={...ImageGalleryCard.parameters,docs:{...ImageGalleryCard.parameters?.docs,source:{originalSource:"args => <div className=\"p-8\" style={{\n  maxWidth: '400px'\n}}>\r\n    <Card {...args}>\r\n      <ExampleContent />\r\n    </Card>\r\n  </div>",...ImageGalleryCard.parameters?.docs?.source}}},AutoSlideshowCard.parameters={...AutoSlideshowCard.parameters,docs:{...AutoSlideshowCard.parameters?.docs,source:{originalSource:"args => <div className=\"p-8\" style={{\n  maxWidth: '400px'\n}}>\r\n    <Card {...args}>\r\n      <ExampleContent />\r\n    </Card>\r\n  </div>",...AutoSlideshowCard.parameters?.docs?.source}}},ImagePositions.parameters={...ImagePositions.parameters,docs:{...ImagePositions.parameters?.docs,source:{originalSource:"() => <div className=\"p-8 space-y-8\">\r\n    {['top', 'bottom', 'left', 'right', 'background'].map(position => <Card key={position} images={sampleImages} imagePosition={position} title={`Images ${position}`} subtitle={`Multiple images with ${position} position`} padding=\"medium\" enableImageNavigation>\r\n        <ExampleContent />\r\n      </Card>)}\r\n  </div>",...ImagePositions.parameters?.docs?.source}}},InteractiveImageCards.parameters={...InteractiveImageCards.parameters,docs:{...InteractiveImageCards.parameters?.docs,source:{originalSource:'() => <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">\r\n    <Card interactive hover images={sampleImages} title="Interactive Gallery Card" subtitle="Click to interact" padding="medium" enableImageNavigation onClick={() => console.log(\'Card clicked\')}>\r\n      <ExampleContent />\r\n    </Card>\r\n    <Card interactive hover variant="gradient" images={[{\n    src: \'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80\',\n    alt: \'Abstract patterns\'\n  }, {\n    src: \'https://images.unsplash.com/photo-1682695794947-17061dc284dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80\',\n    alt: \'Minimal design\'\n  }]} title="Interactive Gradient Gallery" subtitle="With auto slideshow" padding="medium" enableImageNavigation imageInterval={3000} onClick={() => console.log(\'Card clicked\')}>\r\n      <ExampleContent />\r\n    </Card>\r\n  </div>',...InteractiveImageCards.parameters?.docs?.source}}},DynamicLoadingCard.parameters={...DynamicLoadingCard.parameters,docs:{...DynamicLoadingCard.parameters?.docs,source:{originalSource:'() => {\n  const [images, setImages] = React.useState([]);\n  const [loading, setLoading] = React.useState(true);\n  React.useEffect(() => {\n    // Simulate loading images from an API\n    setTimeout(() => {\n      setImages(sampleImages);\n      setLoading(false);\n    }, 2000);\n  }, []);\n  return <Card variant="elevated" padding="medium" title="Dynamic Loading Card" subtitle="Images loaded dynamically" loading={loading} images={images} enableImageNavigation showSocialActions>\r\n      {!loading && <ExampleContent />}\r\n    </Card>;\n}',...DynamicLoadingCard.parameters?.docs?.source}}},LoadingStates.parameters={...LoadingStates.parameters,docs:{...LoadingStates.parameters?.docs,source:{originalSource:'() => <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">\r\n    <Card loading padding="medium" />\r\n    <Card loading variant="elevated" padding="medium" />\r\n  </div>',...LoadingStates.parameters?.docs?.source}}},InteractiveCards.parameters={...InteractiveCards.parameters,docs:{...InteractiveCards.parameters?.docs,source:{originalSource:'() => <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">\r\n    <Card interactive hover image={sampleImage} title="Interactive Card" padding="medium" onClick={() => console.log(\'Card clicked\')}>\r\n      <ExampleContent />\r\n    </Card>\r\n    <Card interactive hover variant="gradient" title="Interactive Gradient" padding="medium" onClick={() => console.log(\'Card clicked\')}>\r\n      <ExampleContent />\r\n    </Card>\r\n  </div>',...InteractiveCards.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","WithImage","SocialCard","BlogPost","ProductCard","GlassCard","GradientCard","ImageGalleryCard","AutoSlideshowCard","ImagePositions","InteractiveImageCards","DynamicLoadingCard","LoadingStates","InteractiveCards"]},"./src/components/Button/Button.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var C_Users_KRATOS_Downloads_Compressed_EventSys_main_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),C_Users_KRATOS_Downloads_Compressed_EventSys_main_mui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),framer_motion__WEBPACK_IMPORTED_MODULE_13__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs")),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ExclamationCircleIcon.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/InformationCircleIcon.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/PlusIcon.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/MinusIcon.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/TrashIcon.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/PencilIcon.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ChevronUpIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","variant","size","icon","loading","iconPosition","iconType","fullWidth","rounded","elevated","animated","ripple","group","groupPosition","active"],Button=_ref=>{let{children,variant="primary",size="medium",icon=!1,loading=!1,iconPosition="right",iconType="arrow",fullWidth=!1,rounded=!1,elevated=!1,animated=!0,ripple=!0,group=!1,groupPosition,active=!1}=_ref,props=(0,C_Users_KRATOS_Downloads_Compressed_EventSys_main_mui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);const baseClasses="\n    inline-flex items-center justify-center\n    font-medium transition-all duration-200\n    focus:outline-none focus:ring-2 focus:ring-offset-2\n    disabled:opacity-60 disabled:cursor-not-allowed\n    ".concat(rounded?"rounded-full":"rounded-lg","\n    ").concat(elevated?"shadow-md hover:shadow-lg":"","\n    ").concat(group?"focus:relative focus:z-10":"","\n    ").concat("left"===groupPosition?"rounded-r-none":"","\n    ").concat("middle"===groupPosition?"rounded-none border-l-0":"","\n    ").concat("right"===groupPosition?"rounded-l-none border-l-0":"","\n  "),getIcon=()=>{const iconClass="tiny"===size||"small"===size?"w-4 h-4":"w-5 h-5";switch(iconType){case"arrow":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.A,{className:iconClass});case"success":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.A,{className:iconClass});case"warning":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.A,{className:iconClass});case"info":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.A,{className:iconClass});case"add":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__.A,{className:iconClass});case"remove":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__.A,{className:iconClass});case"delete":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__.A,{className:iconClass});case"edit":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__.A,{className:iconClass});case"chevron-down":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__.A,{className:iconClass});case"chevron-up":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__.A,{className:iconClass});default:return null}},classes="\n    ".concat(baseClasses,"\n    ").concat({primary:"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",secondary:"bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",outline:"border-2 border-current text-blue-600 hover:bg-blue-50 focus:ring-blue-500",danger:"bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",success:"bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",warning:"bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500",info:"bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-500",dark:"bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-500",light:"bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-500",link:"text-blue-600 hover:text-blue-700 hover:underline focus:ring-blue-500 shadow-none",ghost:"text-gray-600 hover:bg-gray-100 focus:ring-gray-500"}[variant],"\n    ").concat({tiny:"px-2 py-1 text-xs gap-1",small:"px-3 py-1.5 text-sm gap-1.5",medium:"px-4 py-2 text-base gap-2",large:"px-6 py-3 text-lg gap-2.5",xl:"px-8 py-4 text-xl gap-3"}[size],"\n    ").concat(fullWidth?"w-full":"","\n    ").concat(active?"ring-2":"","\n  "),buttonContent=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[icon&&"left"===iconPosition&&getIcon(),loading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.P.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},className:"w-5 h-5 border-2 border-current border-t-transparent rounded-full"}):children,icon&&"right"===iconPosition&&!loading&&getIcon()]}),buttonVariants={hover:{scale:animated?1.02:1,transition:{duration:.2}},tap:{scale:animated?.98:1,transition:{duration:.1}}},RippleEffect=()=>ripple?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"absolute inset-0 overflow-hidden rounded-lg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"absolute inset-0 rounded-lg bg-current opacity-0 pointer-events-none group-hover:animate-ripple"})}):null;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.P.button,(0,C_Users_KRATOS_Downloads_Compressed_EventSys_main_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__.A)((0,C_Users_KRATOS_Downloads_Compressed_EventSys_main_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__.A)({className:"".concat(classes," relative group"),whileHover:"hover",whileTap:"tap",variants:buttonVariants},props),{},{children:[buttonContent,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RippleEffect,{})]}))},__WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"An enhanced button component with rich animations and features",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'primary'",computed:!1},description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'outline'",computed:!1},{value:"'danger'",computed:!1},{value:"'success'",computed:!1},{value:"'warning'",computed:!1},{value:"'info'",computed:!1},{value:"'dark'",computed:!1},{value:"'light'",computed:!1},{value:"'link'",computed:!1},{value:"'ghost'",computed:!1}]},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'tiny'",computed:!1},{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1},{value:"'xl'",computed:!1}]},required:!1},icon:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},iconPosition:{defaultValue:{value:"'right'",computed:!1},description:"",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1},iconType:{defaultValue:{value:"'arrow'",computed:!1},description:"",type:{name:"enum",value:[{value:"'arrow'",computed:!1},{value:"'success'",computed:!1},{value:"'warning'",computed:!1},{value:"'info'",computed:!1},{value:"'add'",computed:!1},{value:"'remove'",computed:!1},{value:"'delete'",computed:!1},{value:"'edit'",computed:!1},{value:"'chevron-down'",computed:!1},{value:"'chevron-up'",computed:!1}]},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},rounded:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},elevated:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},animated:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},ripple:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},group:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},active:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},children:{description:"",type:{name:"node"},required:!0},groupPosition:{description:"",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'middle'",computed:!1},{value:"'right'",computed:!1}]},required:!1}}}}}]);