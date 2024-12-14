"use strict";(self.webpackChunkmuilibrary=self.webpackChunkmuilibrary||[]).push([[6901],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2})},"./src/components/Media/VideoPlayer.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Autoplay:()=>Autoplay,Default:()=>Default,InitiallyMuted:()=>InitiallyMuted,Looping:()=>Looping,Playlist:()=>Playlist,ResponsiveSizes:()=>ResponsiveSizes,WithoutControls:()=>WithoutControls,__namedExportsOrder:()=>__namedExportsOrder,default:()=>VideoPlayer_stories});var react=__webpack_require__("./node_modules/react/index.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),use_animation=__webpack_require__("./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs"),proxy=__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["src","poster","className","autoPlay","controls","loop","muted","quality","playbackSpeed","showPlaylist","playlist","onQualityChange","onSpeedChange","onPlaylistItemClick","onShare","onLike","onBookmark","enableFilters","enableScreenshot","enablePiP","enableRepeat","enableShuffle","filters"],VideoPlayer=_ref=>{let{src,poster,className="",autoPlay=!1,controls=!0,loop=!1,muted=!1,quality="auto",playbackSpeed=1,showPlaylist=!1,playlist=[],onQualityChange,onSpeedChange,onPlaylistItemClick,onShare,onLike,onBookmark,enableFilters=!0,enableScreenshot=!0,enablePiP=!0,enableRepeat=!0,enableShuffle=!0,filters=["none","grayscale","sepia","contrast","brightness"]}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const videoRef=(0,react.useRef)(null),progressRef=(0,react.useRef)(null),[isPlaying,setIsPlaying]=(0,react.useState)(!1),[isMuted,setIsMuted]=(0,react.useState)(muted),[volume,setVolume]=(0,react.useState)(1),[currentTime,setCurrentTime]=(0,react.useState)(0),[duration,setDuration]=(0,react.useState)(0),[isFullscreen,setIsFullscreen]=(0,react.useState)(!1),[showControls,setShowControls]=(0,react.useState)(!0),[showSettings,setShowSettings]=(0,react.useState)(!1),[isLiked,setIsLiked]=(0,react.useState)(!1),[isBookmarked,setIsBookmarked]=(0,react.useState)(!1),[showPlaylistPanel,setShowPlaylistPanel]=(0,react.useState)(!1),[buffered,setBuffered]=(0,react.useState)(0),[currentFilter,setCurrentFilter]=(0,react.useState)("none"),[showFilters,setShowFilters]=(0,react.useState)(!1),[isPiP,setIsPiP]=(0,react.useState)(!1),[isRepeating,setIsRepeating]=(0,react.useState)(!1),[isShuffling,setIsShuffling]=(0,react.useState)(!1),[thumbnails,setThumbnails]=(0,react.useState)([]),[previewTime,setPreviewTime]=(0,react.useState)(null),[scale,setScale]=(0,react.useState)(1),[rotation,setRotation]=(0,react.useState)(0),buttonAnimation=((0,use_animation.s)(),{hover:{scale:1.1},tap:{scale:.9}}),panelAnimation={initial:{opacity:0,x:"100%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"100%"}};(0,react.useEffect)((()=>{const video=videoRef.current;if(!video)return;const handleTimeUpdate=()=>setCurrentTime(video.currentTime),handleDurationChange=()=>setDuration(video.duration),handlePlay=()=>setIsPlaying(!0),handlePause=()=>setIsPlaying(!1),handleProgress=()=>{video.buffered.length>0&&setBuffered(video.buffered.end(video.buffered.length-1))};return video.addEventListener("timeupdate",handleTimeUpdate),video.addEventListener("durationchange",handleDurationChange),video.addEventListener("play",handlePlay),video.addEventListener("pause",handlePause),video.addEventListener("progress",handleProgress),()=>{video.removeEventListener("timeupdate",handleTimeUpdate),video.removeEventListener("durationchange",handleDurationChange),video.removeEventListener("play",handlePlay),video.removeEventListener("pause",handlePause),video.removeEventListener("progress",handleProgress)}}),[]);const togglePlay=()=>{videoRef.current.paused?videoRef.current.play():videoRef.current.pause()},toggleMute=()=>{setIsMuted(!isMuted),videoRef.current.muted=!isMuted},adjustVolume=delta=>{const newVolume=Math.max(0,Math.min(1,volume+delta));setVolume(newVolume),videoRef.current.volume=newVolume,setIsMuted(0===newVolume)},toggleFullscreen=()=>{document.fullscreenElement?(document.exitFullscreen(),setIsFullscreen(!1)):(videoRef.current.requestFullscreen(),setIsFullscreen(!0))},skip=seconds=>{videoRef.current.currentTime+=seconds},formatTime=time=>{const hours=Math.floor(time/3600),minutes=Math.floor(time%3600/60),seconds=Math.floor(time%60);return hours>0?"".concat(hours,":").concat(minutes.toString().padStart(2,"0"),":").concat(seconds.toString().padStart(2,"0")):"".concat(minutes,":").concat(seconds.toString().padStart(2,"0"))};return(0,jsx_runtime.jsxs)(proxy.P.div,{className:"relative group ".concat(className),variants:{initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.98}},initial:"initial",animate:"animate",exit:"exit",onMouseEnter:()=>setShowControls(!0),onMouseLeave:()=>setShowControls(!1),onKeyDown:e=>{switch(e.key.toLowerCase()){case" ":case"k":e.preventDefault(),togglePlay();break;case"f":e.preventDefault(),toggleFullscreen();break;case"m":e.preventDefault(),toggleMute();break;case"arrowleft":e.preventDefault(),skip(-10);break;case"arrowright":e.preventDefault(),skip(10);break;case"arrowup":e.preventDefault(),adjustVolume(.1);break;case"arrowdown":e.preventDefault(),adjustVolume(-.1)}},tabIndex:"0",children:[(0,jsx_runtime.jsx)("video",(0,objectSpread2.A)({ref:videoRef,className:"w-full rounded-lg shadow-lg ".concat((()=>{switch(currentFilter){case"grayscale":return"filter grayscale";case"sepia":return"filter sepia";case"contrast":return"filter contrast-125";case"brightness":return"filter brightness-125";default:return""}})()),src,poster,autoPlay,loop,muted,playsInline:!0},props)),controls&&(0,jsx_runtime.jsxs)(proxy.P.div,{variants:{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20}},initial:"initial",animate:showControls?"animate":"exit",className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent",children:[(0,jsx_runtime.jsxs)("div",{className:"absolute bottom-16 left-0 right-0",onMouseMove:e=>{const rect=progressRef.current.getBoundingClientRect(),pos=(e.clientX-rect.left)/rect.width;setPreviewTime(pos*duration)},onMouseLeave:()=>{setPreviewTime(null)},children:[null!==previewTime&&(0,jsx_runtime.jsx)(proxy.P.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"absolute bottom-full mb-2",style:{left:"".concat(previewTime/duration*100,"%")},children:(0,jsx_runtime.jsxs)("div",{className:"bg-black rounded p-1",children:[thumbnails.length>0&&(0,jsx_runtime.jsx)("img",{src:thumbnails[Math.floor(previewTime/duration*thumbnails.length)].url,alt:"Preview",className:"w-40 h-24 rounded"}),(0,jsx_runtime.jsx)("div",{className:"text-white text-xs text-center mt-1",children:formatTime(previewTime)})]})}),(0,jsx_runtime.jsxs)("div",{ref:progressRef,className:"h-1 bg-white/30 cursor-pointer group",onClick:e=>{const rect=progressRef.current.getBoundingClientRect(),time=(e.clientX-rect.left)/rect.width*duration;videoRef.current.currentTime=time},children:[(0,jsx_runtime.jsx)("div",{className:"absolute h-full bg-white/20",style:{width:"".concat(buffered/duration*100,"%")}}),(0,jsx_runtime.jsx)(proxy.P.div,{className:"absolute h-full bg-primary-500",style:{width:"".concat(currentTime/duration*100,"%")},layoutId:"progress",children:(0,jsx_runtime.jsx)(proxy.P.div,{className:"absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary-500 rounded-full",initial:{scale:0},animate:{scale:showControls?1:0}})})]})]}),(0,jsx_runtime.jsxs)("div",{className:"absolute bottom-4 left-4 right-4 flex items-center justify-between",children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-4",children:[(0,jsx_runtime.jsx)(proxy.P.button,{variants:buttonAnimation,whileHover:"hover",whileTap:"tap",className:"text-white p-2 rounded-full bg-white/10 backdrop-blur-sm",onClick:togglePlay,children:(0,jsx_runtime.jsx)(proxy.P.div,{initial:!1,animate:{rotate:isPlaying?0:180},children:isPlaying?(0,jsx_runtime.jsx)(index_esm.GHw,{className:"w-6 h-6"}):(0,jsx_runtime.jsx)(index_esm.aze,{className:"w-6 h-6"})})}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-4",children:[(0,jsx_runtime.jsx)(proxy.P.button,{variants:buttonAnimation,whileHover:"hover",whileTap:"tap",className:"text-white",onClick:()=>skip(-10),children:(0,jsx_runtime.jsx)(index_esm.APV,{className:"w-5 h-5"})}),(0,jsx_runtime.jsx)(proxy.P.button,{variants:buttonAnimation,whileHover:"hover",whileTap:"tap",className:"text-white",onClick:()=>skip(10),children:(0,jsx_runtime.jsx)(index_esm.Oge,{className:"w-5 h-5"})}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-2",children:[(0,jsx_runtime.jsx)(proxy.P.button,{variants:buttonAnimation,whileHover:"hover",whileTap:"tap",className:"text-white",onClick:toggleMute,children:isMuted?(0,jsx_runtime.jsx)(index_esm.cKW,{className:"w-6 h-6"}):(0,jsx_runtime.jsx)(index_esm.o77,{className:"w-6 h-6"})}),(0,jsx_runtime.jsx)("input",{type:"range",min:"0",max:"1",step:"0.1",value:isMuted?0:volume,onChange:e=>{const value=parseFloat(e.target.value);setVolume(value),videoRef.current.volume=value,setIsMuted(0===value)},className:"w-20 accent-primary-500"})]}),(0,jsx_runtime.jsxs)("div",{className:"text-white text-sm",children:[formatTime(currentTime)," / ",formatTime(duration)]})]})]}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-4",children:[enableScreenshot&&(0,jsx_runtime.jsx)(proxy.P.button,{variants:buttonAnimation,whileHover:"hover",whileTap:"tap",className:"text-white",onClick:()=>{const canvas=document.createElement("canvas");canvas.width=videoRef.current.videoWidth,canvas.height=videoRef.current.videoHeight,canvas.getContext("2d").drawImage(videoRef.current,0,0);const link=document.createElement("a");link.href=canvas.toDataURL("image/png"),link.download="screenshot.png",link.click()},children:(0,jsx_runtime.jsx)(index_esm.fZZ,{className:"w-5 h-5"})}),enablePiP&&(0,jsx_runtime.jsx)(proxy.P.button,{variants:buttonAnimation,whileHover:"hover",whileTap:"tap",className:"text-white ".concat(isPiP?"text-primary-500":""),onClick:async()=>{try{document.pictureInPictureElement?(await document.exitPictureInPicture(),setIsPiP(!1)):(await videoRef.current.requestPictureInPicture(),setIsPiP(!0))}catch(error){console.error("PiP failed:",error)}},children:(0,jsx_runtime.jsx)(index_esm.KFS,{className:"w-5 h-5"})}),enableRepeat&&(0,jsx_runtime.jsx)(proxy.P.button,{variants:buttonAnimation,whileHover:"hover",whileTap:"tap",className:"text-white ".concat(isRepeating?"text-primary-500":""),onClick:()=>setIsRepeating(!isRepeating),children:(0,jsx_runtime.jsx)(index_esm.jEl,{className:"w-5 h-5"})}),enableShuffle&&showPlaylist&&(0,jsx_runtime.jsx)(proxy.P.button,{variants:buttonAnimation,whileHover:"hover",whileTap:"tap",className:"text-white ".concat(isShuffling?"text-primary-500":""),onClick:()=>setIsShuffling(!isShuffling),children:(0,jsx_runtime.jsx)(index_esm.de5,{className:"w-5 h-5"})}),(0,jsx_runtime.jsx)(proxy.P.button,{variants:buttonAnimation,whileHover:"hover",whileTap:"tap",className:"text-white ".concat(isLiked?"text-red-500":""),onClick:()=>{setIsLiked(!isLiked),onLike&&onLike(!isLiked)},children:(0,jsx_runtime.jsx)(index_esm.icx,{className:"w-5 h-5"})}),(0,jsx_runtime.jsx)(proxy.P.button,{variants:buttonAnimation,whileHover:"hover",whileTap:"tap",className:"text-white ".concat(isBookmarked?"text-yellow-500":""),onClick:()=>{setIsBookmarked(!isBookmarked),onBookmark&&onBookmark(!isBookmarked)},children:(0,jsx_runtime.jsx)(index_esm.Y19,{className:"w-5 h-5"})}),(0,jsx_runtime.jsx)(proxy.P.button,{variants:buttonAnimation,whileHover:"hover",whileTap:"tap",className:"text-white",onClick:()=>{onShare&&onShare(src)},children:(0,jsx_runtime.jsx)(index_esm.Pum,{className:"w-5 h-5"})}),(0,jsx_runtime.jsxs)(proxy.P.button,{variants:buttonAnimation,whileHover:"hover",whileTap:"tap",className:"text-white relative",onClick:()=>setShowSettings(!showSettings),children:[(0,jsx_runtime.jsx)(index_esm.VSk,{className:"w-5 h-5"}),showSettings&&(0,jsx_runtime.jsx)("div",{className:"absolute bottom-full right-0 mb-2 w-48 bg-black/90 backdrop-blur-lg rounded-lg overflow-hidden",children:(0,jsx_runtime.jsxs)("div",{className:"p-2 space-y-2",children:[(0,jsx_runtime.jsx)("div",{className:"text-sm font-medium px-3 py-1",children:"Quality"}),["auto","1080p","720p","480p"].map((q=>(0,jsx_runtime.jsx)("button",{className:"w-full px-3 py-1 text-left text-sm hover:bg-white/10 ".concat(quality===q?"text-primary-500":"text-white"),onClick:()=>(quality=>{onQualityChange&&onQualityChange(quality),setShowSettings(!1)})(q),children:q},q))),(0,jsx_runtime.jsx)("div",{className:"text-sm font-medium px-3 py-1 border-t border-white/10",children:"Playback Speed"}),[.5,1,1.5,2].map((speed=>(0,jsx_runtime.jsxs)("button",{className:"w-full px-3 py-1 text-left text-sm hover:bg-white/10 ".concat(playbackSpeed===speed?"text-primary-500":"text-white"),onClick:()=>(speed=>{videoRef.current.playbackRate=speed,onSpeedChange&&onSpeedChange(speed),setShowSettings(!1)})(speed),children:[speed,"x"]},speed)))]})})]}),showPlaylist&&(0,jsx_runtime.jsx)(proxy.P.button,{variants:buttonAnimation,whileHover:"hover",whileTap:"tap",className:"text-white",onClick:()=>setShowPlaylistPanel(!showPlaylistPanel),children:(0,jsx_runtime.jsx)(index_esm.Wm,{className:"w-5 h-5"})}),(0,jsx_runtime.jsx)(proxy.P.button,{variants:buttonAnimation,whileHover:"hover",whileTap:"tap",className:"text-white",onClick:toggleFullscreen,children:isFullscreen?(0,jsx_runtime.jsx)(index_esm.SE2,{className:"w-5 h-5"}):(0,jsx_runtime.jsx)(index_esm.KFS,{className:"w-5 h-5"})})]})]})]}),(0,jsx_runtime.jsxs)(AnimatePresence.N,{children:[showFilters&&(0,jsx_runtime.jsxs)(proxy.P.div,{variants:panelAnimation,initial:"initial",animate:"animate",exit:"exit",className:"absolute top-4 right-4 w-64 bg-black/80 backdrop-blur-lg rounded-lg p-4",children:[(0,jsx_runtime.jsx)("h3",{className:"text-white font-semibold mb-4",children:"Video Filters"}),(0,jsx_runtime.jsx)("div",{className:"space-y-2",children:filters.map((filter=>(0,jsx_runtime.jsx)("button",{onClick:()=>(filter=>{setCurrentFilter(filter)})(filter),className:"w-full px-3 py-2 rounded-lg text-left text-white hover:bg-white/10 transition-colors\n                    ".concat(currentFilter===filter?"bg-primary-500":""),children:filter.charAt(0).toUpperCase()+filter.slice(1)},filter)))})]}),showPlaylistPanel&&(0,jsx_runtime.jsx)(proxy.P.div,{variants:panelAnimation,initial:"initial",animate:"animate",exit:"exit",className:"absolute top-0 right-0 bottom-0 w-80 bg-black/70 backdrop-blur-lg",children:(0,jsx_runtime.jsxs)("div",{className:"p-4",children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,jsx_runtime.jsx)("h3",{className:"text-white font-semibold",children:"Playlist"}),(0,jsx_runtime.jsxs)("div",{className:"flex gap-2",children:[enableRepeat&&(0,jsx_runtime.jsx)(proxy.P.button,{variants:buttonAnimation,whileHover:"hover",whileTap:"tap",className:"p-1 rounded ".concat(isRepeating?"text-primary-500":"text-white"),onClick:()=>setIsRepeating(!isRepeating),children:(0,jsx_runtime.jsx)(index_esm.jEl,{className:"w-4 h-4"})}),enableShuffle&&(0,jsx_runtime.jsx)(proxy.P.button,{variants:buttonAnimation,whileHover:"hover",whileTap:"tap",className:"p-1 rounded ".concat(isShuffling?"text-primary-500":"text-white"),onClick:()=>setIsShuffling(!isShuffling),children:(0,jsx_runtime.jsx)(index_esm.de5,{className:"w-4 h-4"})})]})]}),(0,jsx_runtime.jsx)("div",{className:"space-y-2 overflow-auto max-h-[calc(100vh-8rem)]",children:playlist.map(((item,index)=>(0,jsx_runtime.jsxs)(proxy.P.button,{variants:buttonAnimation,whileHover:"hover",className:"w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 text-white text-left",onClick:()=>null==onPlaylistItemClick?void 0:onPlaylistItemClick(item),children:[(0,jsx_runtime.jsxs)("div",{className:"relative w-20 h-12 rounded overflow-hidden",children:[(0,jsx_runtime.jsx)("img",{src:item.thumbnail,alt:item.title,className:"w-full h-full object-cover"}),(0,jsx_runtime.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity",children:(0,jsx_runtime.jsx)(index_esm.aze,{className:"w-6 h-6"})})]}),(0,jsx_runtime.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,jsx_runtime.jsx)("div",{className:"font-medium truncate",children:item.title}),(0,jsx_runtime.jsxs)("div",{className:"text-sm text-gray-400 flex items-center gap-2",children:[(0,jsx_runtime.jsx)(index_esm.Ohp,{className:"w-3 h-3"}),item.duration]})]})]},index)))})]})})]})]})},Media_VideoPlayer=VideoPlayer;VideoPlayer.__docgenInfo={description:"",methods:[],displayName:"VideoPlayer",props:{className:{defaultValue:{value:"''",computed:!1},required:!1},autoPlay:{defaultValue:{value:"false",computed:!1},required:!1},controls:{defaultValue:{value:"true",computed:!1},required:!1},loop:{defaultValue:{value:"false",computed:!1},required:!1},muted:{defaultValue:{value:"false",computed:!1},required:!1},quality:{defaultValue:{value:"'auto'",computed:!1},required:!1},playbackSpeed:{defaultValue:{value:"1",computed:!1},required:!1},showPlaylist:{defaultValue:{value:"false",computed:!1},required:!1},playlist:{defaultValue:{value:"[]",computed:!1},required:!1},enableFilters:{defaultValue:{value:"true",computed:!1},required:!1},enableScreenshot:{defaultValue:{value:"true",computed:!1},required:!1},enablePiP:{defaultValue:{value:"true",computed:!1},required:!1},enableRepeat:{defaultValue:{value:"true",computed:!1},required:!1},enableShuffle:{defaultValue:{value:"true",computed:!1},required:!1},filters:{defaultValue:{value:"['none', 'grayscale', 'sepia', 'contrast', 'brightness']",computed:!1},required:!1}}};const VideoPlayer_stories={title:"Media/VideoPlayer",component:Media_VideoPlayer,parameters:{layout:"centered",docs:{description:{component:"A professional video player component with custom controls and features."}}},argTypes:{autoPlay:{control:"boolean",description:"Auto-play the video"},controls:{control:"boolean",description:"Show video controls"},loop:{control:"boolean",description:"Loop the video"},muted:{control:"boolean",description:"Mute the video"}}},sampleVideo="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4",samplePoster="https://test-videos.co.uk/user/pages/images/big_buck_bunny.jpg",Default={args:{src:sampleVideo,poster:samplePoster,className:"w-[640px]"}},Autoplay={args:{src:sampleVideo,poster:samplePoster,className:"w-[640px]",autoPlay:!0,muted:!0}},WithoutControls={args:{src:sampleVideo,poster:samplePoster,className:"w-[640px]",controls:!1}},Looping={args:{src:sampleVideo,poster:samplePoster,className:"w-[640px]",loop:!0}},InitiallyMuted={args:{src:sampleVideo,poster:samplePoster,className:"w-[640px]",muted:!0}},ResponsiveSizes=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-4",children:[(0,jsx_runtime.jsx)(Media_VideoPlayer,{src:sampleVideo,poster:samplePoster,className:"w-full max-w-sm"}),(0,jsx_runtime.jsx)(Media_VideoPlayer,{src:sampleVideo,poster:samplePoster,className:"w-full max-w-md"}),(0,jsx_runtime.jsx)(Media_VideoPlayer,{src:sampleVideo,poster:samplePoster,className:"w-full max-w-lg"})]}),Playlist=()=>{const[currentVideo,setCurrentVideo]=react.useState(0),videos=[{src:sampleVideo,poster:samplePoster,title:"Video 1"},{src:sampleVideo,poster:samplePoster,title:"Video 2"},{src:sampleVideo,poster:samplePoster,title:"Video 3"}];return(0,jsx_runtime.jsxs)("div",{className:"space-y-4",children:[(0,jsx_runtime.jsx)(Media_VideoPlayer,{src:videos[currentVideo].src,poster:videos[currentVideo].poster,className:"w-[640px]"}),(0,jsx_runtime.jsx)("div",{className:"flex gap-2",children:videos.map(((video,index)=>(0,jsx_runtime.jsx)("button",{onClick:()=>setCurrentVideo(index),className:"px-4 py-2 rounded-lg ".concat(currentVideo===index?"bg-primary-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"),children:video.title},index)))})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: sampleVideo,\n    poster: samplePoster,\n    className: 'w-[640px]'\n  }\n}",...Default.parameters?.docs?.source}}},Autoplay.parameters={...Autoplay.parameters,docs:{...Autoplay.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: sampleVideo,\n    poster: samplePoster,\n    className: 'w-[640px]',\n    autoPlay: true,\n    muted: true // Required for autoplay in most browsers\n  }\n}",...Autoplay.parameters?.docs?.source}}},WithoutControls.parameters={...WithoutControls.parameters,docs:{...WithoutControls.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: sampleVideo,\n    poster: samplePoster,\n    className: 'w-[640px]',\n    controls: false\n  }\n}",...WithoutControls.parameters?.docs?.source}}},Looping.parameters={...Looping.parameters,docs:{...Looping.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: sampleVideo,\n    poster: samplePoster,\n    className: 'w-[640px]',\n    loop: true\n  }\n}",...Looping.parameters?.docs?.source}}},InitiallyMuted.parameters={...InitiallyMuted.parameters,docs:{...InitiallyMuted.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: sampleVideo,\n    poster: samplePoster,\n    className: 'w-[640px]',\n    muted: true\n  }\n}",...InitiallyMuted.parameters?.docs?.source}}},ResponsiveSizes.parameters={...ResponsiveSizes.parameters,docs:{...ResponsiveSizes.parameters?.docs,source:{originalSource:'() => <div className="space-y-4">\r\n    <VideoPlayer src={sampleVideo} poster={samplePoster} className="w-full max-w-sm" />\r\n    <VideoPlayer src={sampleVideo} poster={samplePoster} className="w-full max-w-md" />\r\n    <VideoPlayer src={sampleVideo} poster={samplePoster} className="w-full max-w-lg" />\r\n  </div>',...ResponsiveSizes.parameters?.docs?.source}}},Playlist.parameters={...Playlist.parameters,docs:{...Playlist.parameters?.docs,source:{originalSource:"() => {\n  const [currentVideo, setCurrentVideo] = React.useState(0);\n  const videos = [{\n    src: sampleVideo,\n    poster: samplePoster,\n    title: 'Video 1'\n  }, {\n    src: sampleVideo,\n    poster: samplePoster,\n    title: 'Video 2'\n  }, {\n    src: sampleVideo,\n    poster: samplePoster,\n    title: 'Video 3'\n  }];\n  return <div className=\"space-y-4\">\r\n      <VideoPlayer src={videos[currentVideo].src} poster={videos[currentVideo].poster} className=\"w-[640px]\" />\r\n      <div className=\"flex gap-2\">\r\n        {videos.map((video, index) => <button key={index} onClick={() => setCurrentVideo(index)} className={`px-4 py-2 rounded-lg ${currentVideo === index ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>\r\n            {video.title}\r\n          </button>)}\r\n      </div>\r\n    </div>;\n}",...Playlist.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Autoplay","WithoutControls","Looping","InitiallyMuted","ResponsiveSizes","Playlist"]},"./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useAnimation});var errors=__webpack_require__("./node_modules/motion-utils/dist/es/errors.mjs"),setters=__webpack_require__("./node_modules/framer-motion/dist/es/render/utils/setters.mjs"),visual_element=__webpack_require__("./node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs");function setVariants(visualElement,variantLabels){[...variantLabels].reverse().forEach((key=>{const variant=visualElement.getVariant(key);variant&&(0,setters.U)(visualElement,variant),visualElement.variantChildren&&visualElement.variantChildren.forEach((child=>{setVariants(child,variantLabels)}))}))}function animationControls(){let hasMounted=!1;const subscribers=new Set,controls={subscribe:visualElement=>(subscribers.add(visualElement),()=>{subscribers.delete(visualElement)}),start(definition,transitionOverride){(0,errors.V)(hasMounted,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");const animations=[];return subscribers.forEach((visualElement=>{animations.push((0,visual_element._)(visualElement,definition,{transitionOverride}))})),Promise.all(animations)},set:definition=>((0,errors.V)(hasMounted,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),subscribers.forEach((visualElement=>{!function setValues(visualElement,definition){return Array.isArray(definition)?setVariants(visualElement,definition):"string"==typeof definition?setVariants(visualElement,[definition]):void(0,setters.U)(visualElement,definition)}(visualElement,definition)}))),stop(){subscribers.forEach((visualElement=>{!function stopAnimation(visualElement){visualElement.values.forEach((value=>value.stop()))}(visualElement)}))},mount:()=>(hasMounted=!0,()=>{hasMounted=!1,controls.stop()})};return controls}var use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");const useAnimation=function useAnimationControls(){const controls=(0,use_constant.M)(animationControls);return(0,use_isomorphic_effect.E)(controls.mount,[]),controls}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>AnimatePresence});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs"),MotionConfigContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0}),{nonce}=(0,react.useContext)(MotionConfigContext.Q);return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return nonce&&(style.nonce=nonce),document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),(0,jsx_runtime.jsx)(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size,children:react.cloneElement(children,{ref})})}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.M)(newChildrenMap),id=(0,react.useId)(),memoizedOnExitComplete=(0,react.useCallback)((childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()}),[presenceChildren,onExitComplete]),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:memoizedOnExitComplete,register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?[Math.random(),memoizedOnExitComplete]:[isPresent,memoizedOnExitComplete]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=(0,jsx_runtime.jsx)(PopChild,{isPresent,children})),(0,jsx_runtime.jsx)(PresenceContext.t.Provider,{value:context,children})};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),errors=__webpack_require__("./node_modules/motion-utils/dist/es/errors.mjs");const getChildKey=child=>child.key||"";function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}var use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");const AnimatePresence=({children,exitBeforeEnter,custom,initial=!0,onExitComplete,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.V)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const presentChildren=(0,react.useMemo)((()=>onlyElements(children)),[children]),presentKeys=presentChildren.map(getChildKey),isInitialRender=(0,react.useRef)(!0),pendingPresentChildren=(0,react.useRef)(presentChildren),exitComplete=(0,use_constant.M)((()=>new Map)),[diffedChildren,setDiffedChildren]=(0,react.useState)(presentChildren),[renderedChildren,setRenderedChildren]=(0,react.useState)(presentChildren);(0,use_isomorphic_effect.E)((()=>{isInitialRender.current=!1,pendingPresentChildren.current=presentChildren;for(let i=0;i<renderedChildren.length;i++){const key=getChildKey(renderedChildren[i]);presentKeys.includes(key)?exitComplete.delete(key):!0!==exitComplete.get(key)&&exitComplete.set(key,!1)}}),[renderedChildren,presentKeys.length,presentKeys.join("-")]);const exitingChildren=[];if(presentChildren!==diffedChildren){let nextChildren=[...presentChildren];for(let i=0;i<renderedChildren.length;i++){const child=renderedChildren[i],key=getChildKey(child);presentKeys.includes(key)||(nextChildren.splice(i,0,child),exitingChildren.push(child))}return"wait"===mode&&exitingChildren.length&&(nextChildren=exitingChildren),setRenderedChildren(onlyElements(nextChildren)),void setDiffedChildren(presentChildren)}const{forceRender}=(0,react.useContext)(LayoutGroupContext.L);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:renderedChildren.map((child=>{const key=getChildKey(child),isPresent=presentChildren===renderedChildren||presentKeys.includes(key);return(0,jsx_runtime.jsx)(PresenceChild,{isPresent,initial:!(isInitialRender.current&&!initial)&&void 0,custom:isPresent?void 0:custom,presenceAffectsLayout,mode,onExitComplete:isPresent?void 0:()=>{if(!exitComplete.has(key))return;exitComplete.set(key,!0);let isEveryExitComplete=!0;exitComplete.forEach((isExitComplete=>{isExitComplete||(isEveryExitComplete=!1)})),isEveryExitComplete&&(null==forceRender||forceRender(),setRenderedChildren(pendingPresentChildren.current),onExitComplete&&onExitComplete())},children:child},key)}))})}}}]);