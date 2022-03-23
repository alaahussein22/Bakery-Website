(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[55106],{937186:(e,i,t)=>{t.d(i,{Z:()=>u});var n=t(667294),o=t(973935),s=t(785893);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}const l=new Map;let a=null;const d=e=>{e.forEach((e=>{const i=l.get(e.target);i&&i(e)}))},u=e=>{class i extends n.Component{constructor(...e){super(...e),r(this,"seen",!1),r(this,"enter",(e=>{const i=e.intersectionRatio>0||e.isIntersecting;this.seen=i,this.seen&&this.props.onVisibilityChanged(!0)})),r(this,"leave",(()=>{const e=this._node;e&&(e=>l.has(e))(e)&&this.seen&&(this.props.onVisibilityChanged(!1),this.seen=!1)})),r(this,"observe",(e=>{try{this._node=o.findDOMNode(this)}catch(n){return}if(!this._node)return;const{inAdsDesktopVideoExperiment:i}=this.props,t=this._node;((e,i="-64px 0px 0px 0px",t)=>{const n={root:"undefined"==typeof document?null:document.querySelector("#mainContainer"),rootMargin:i,threshold:[0,.5,1]};a=a||new window.IntersectionObserver(d,n),l.set(e,t),a.observe(e)})(t,e,(e=>{if(!l.has(t))return;const n=i?e.intersectionRatio>=.5:e.intersectionRatio>0||e.isIntersecting,o=this.props.trackFullVisible?e.intersectionRatio>=1:n,s=this.props.trackFullVisible?0===e.intersectionRatio:!o;!this.seen&&o?this.enter(e):this.seen&&s&&this.leave()}))}))}componentDidMount(){const{rootMargin:e}=this.props;this.observe(e)}componentWillUnmount(){const e=this._node;e&&(this.leave(),(e=>{a.unobserve(e),l.delete(e)})(e))}render(){return(0,s.jsx)(e,{...this.props})}}return r(i,"displayName",`DeprecatedWithVisibilityChanged(${e.displayName||e.name})`),i}},51805:(e,i,t)=>{t.d(i,{xf:()=>n,Lo:()=>o,Us:()=>s,yc:()=>r,ZZ:()=>l,g5:()=>a,V8:()=>d,nW:()=>u,lX:()=>h,P2:()=>c,oX:()=>p,$q:()=>g,KN:()=>x});const n=236,o=2*n/3,s=24,r=2,l=14,a=16,d=e=>e||a,u=12,h=16,c=24,p=16,g=(e=!1,i=!1)=>e?i?h:u:c,x=(e,i,t,n,o=l)=>{const s=e+o;return`\n@media (min-width: ${i*s}px) and (max-width: ${(t+1)*s-1}px) {\n  ${n}\n}\n`}},484200:(e,i,t)=>{t.d(i,{Z:()=>l});var n=t(667294);const o=new Map;let s=null;const r=e=>{e.forEach((e=>{const i=o.get(e.target);i&&i(e)}))};function l({onVisibilityChanged:e,inAdsDesktopVideoExperiment:i,trackFullVisible:t,rootMargin:l}){const a=(0,n.useRef)(null);let d=!1;const u=()=>{var i;a.current instanceof HTMLElement&&(i=a.current,o.has(i))&&(d&&(e(!1),d=!1))},h=(0,n.useCallback)((n=>{a.current instanceof HTMLElement&&((e,i="-64px 0px 0px 0px",t)=>{const n={root:"undefined"==typeof document?null:document.querySelector("#mainContainer"),rootMargin:i,threshold:[0,.5,1]};s=s||new window.IntersectionObserver(r,n),o.set(e,t),s.observe(e)})(a.current,n,(n=>{if(!o.has(a.current))return;const s=i?n.intersectionRatio>=.5:n.intersectionRatio>0||n.isIntersecting,r=t?n.intersectionRatio>=1:s,l=t?0===n.intersectionRatio:!r;!d&&r?(i=>{const t=i.intersectionRatio>0||i.isIntersecting;d=t,d&&e(!0)})(n):d&&l&&u()}))}),[a.current]);return(0,n.useEffect)((()=>(h(l),()=>{var e;a.current instanceof HTMLElement&&(u(),e=a.current,s.unobserve(e),o.delete(e))})),[h]),a}},251890:(e,i,t)=>{t.d(i,{i8:()=>n,DP:()=>o,X9:()=>s});const n=(e,i)=>{const{organicVideosAutoplaying:t,promotedVideosAutoplaying:n}=i,o={...t,...n};return!!o[e]&&!o[e].paused},o=(e,i)=>{const{organicVideosAutoplaying:t,promotedVideosAutoplaying:n}=i,o={...t,...n};for(const s in o){const{paused:i}=o[s];if(s!==e&&!i)return!1}return!0},s=(e,i)=>{const{organicVideosAutoplaying:t,promotedVideosAutoplaying:n}=i,o={...t,...n};return o[e]&&o[e].currentTime}},405529:(e,i,t)=>{t.d(i,{Z:()=>o});var n=t(123686);function o(e,i){const{alt_text:t,auto_alt_text:o}=e;return t?(0,n.nk)(i._("This contains: {{ altText }}","web.altText","Alt text input by a human"),{altText:t}).join(""):o?(0,n.nk)(i._("This may contain: {{ autoAltText }}","web.altText","Alt text generated by a computer"),{autoAltText:o}).join(""):null}},221295:(e,i,t)=>{t.d(i,{M:()=>p,Z:()=>g});var n=t(294184),o=t.n(n),s=t(440504),r=t(405529);const l={debugPinImpressions:999,max:9999,pinActionWrapper:101,saved:102,storyPinImage:-1};var a=t(883119),d=t(785893);function u({onError:e,onLoad:i,pin:t}){var n,o,s,r;const{title:u="",dominant_color:h,images:c={}}=t,p="number"==typeof(null===(n=c["474x"])||void 0===n?void 0:n.width)&&"number"==typeof c["474x"].height&&c["474x"].width>c["474x"].height?c["736x"]:c["474x"];return(0,d.jsx)(a.xu,{position:"relative",dangerouslySetInlineStyle:{__style:{paddingTop:"177.77777777777777%"}},children:(0,d.jsx)(a.xu,{position:"absolute",top:!0,left:!0,width:"100%",height:"100%",dangerouslySetInlineStyle:{__style:{zIndex:l.storyPinImage}},children:(0,d.jsx)(a.Ee,{alt:u,color:h,naturalHeight:null!==(o=null==p?void 0:p.height)&&void 0!==o?o:1,naturalWidth:null!==(s=null==p?void 0:p.width)&&void 0!==s?s:1,onError:e,onLoad:i,src:null!==(r=null==p?void 0:p.url)&&void 0!==r?r:"",fit:"cover"})})})}var h=t(710159),c=t(123686);const p=120,g=({cropHeight:e,cropWidth:i,fallbackColor:t,highResOnly:n,imageFit:l,lowResOnly:g,mediumResOnly:x,onError:m,onLoad:v,pin:y,saved:b=!1,animateGif:w})=>{var f,T,_;const P=(0,h.ZP)(),{carousel_data:C,description:j="",dominant_color:V,grid_title:A,id:E,images:I,title:W}=y,L=(0,c.nk)(P._("This contains an image of: {{ pinTitle }}","web.altText","Alt text input for PinImage by a human"),{pinTitle:W||A}).join(""),M=(0,r.Z)(y,P)||j.trim().length>0&&j||L;if(C)return(0,d.jsx)(s.Z,{onError:m,onLoad:v,highResOnly:n,lowResOnly:g,pinId:E});let R,B="",O=0,S=0;if(I){var H,D,k;let e=I["236x"];var $,F,Z,z,U;if(n?e=I["736x"]||I.orig||I["474x"]||I["236x"]:x&&(e=I["474x"]||I.orig||I["236x"]),O=null===(H=e)||void 0===H?void 0:H.height,S=null===(D=e)||void 0===D?void 0:D.width,B=null===(k=e)||void 0===k?void 0:k.url,g||x||n)R=null!==($=e)&&void 0!==$&&$.url?`${e.url} 1x`:"";else R=[(null===(F=I["236x"])||void 0===F?void 0:F.url)&&`${I["236x"].url} 1x`,(null===(Z=I["474x"])||void 0===Z?void 0:Z.url)&&`${I["474x"].url} 2x`,(null===(z=I["736x"])||void 0===z?void 0:z.url)&&`${I["736x"].url} 3x`,(null===(U=I.orig)||void 0===U?void 0:U.url)&&`${I.orig.url} 4x`].filter(Boolean).join(", ")}if(w){const e=Math.max(y.embed&&y.embed.width||0,236),i=Math.max(y.embed&&y.embed.height||0,236),t=y.embed?y.embed.src:"";t&&(O=i,S=e,B=t,R="")}return(0,d.jsx)(a.kC,{alignItems:"center",justifyContent:"start",minHeight:p,children:(0,d.jsx)(a.xu,{flex:"grow",children:(0,d.jsx)("div",{className:o()({savedGradient:b}),children:y.story_pin_data_id?(0,d.jsx)(u,{pin:y,onError:m,onLoad:v}):(0,d.jsx)(a.xu,{height:i?e:void 0,width:i||void 0,"data-test-id":"non-story-pin-image",children:(0,d.jsx)(a.Ee,{alt:M,color:"dominant"===t?V:t,fit:l,naturalHeight:null!==(f=O)&&void 0!==f?f:1,naturalWidth:null!==(T=S)&&void 0!==T?T:1,onError:m,onLoad:v,src:null!==(_=B)&&void 0!==_?_:"",srcSet:R})})})})})}},955106:(e,i,t)=>{t.d(i,{Z:()=>P});var n=t(667294),o=t(937186),s=t(301985),r=t(727853),l=t(221295),a=t(710159),d=t(883119),u=t(785893);const h={__path:"M12 18.5A6.508 6.508 0 0 1 5.5 12c0-1.706.689-3.307 1.835-4.5H6.5a1 1 0 1 1 0-2h4.185v4.474a1 1 0 0 1-2 0V8.972A4.505 4.505 0 0 0 7.5 12c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5a4.49 4.49 0 0 0-3.112-4.283 1 1 0 1 1 .615-1.902A6.482 6.482 0 0 1 18.5 12c0 3.584-2.916 6.5-6.5 6.5M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0"},c={__path:"M17.496 14.572a1 1 0 0 1-1 1h-.001a1.001 1.001 0 0 1-.999-1.001l.002-4.652-7.29 7.288a.995.995 0 0 1-.707.293.999.999 0 0 1-.707-1.707l7.293-7.29L9.428 8.5a1 1 0 0 1 .001-2h.001l8.071.005-.005 8.067zM12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"},p={overlay:{__style:{backgroundColor:"#000"}}};function g({backgroundImage:e,naturalHeight:i,naturalWidth:t,onRestartVideo:n,pinTitle:o,pin:s}){const r=(0,a.ZP)(),{id:l}=s;return(0,u.jsxs)(d.Ee,{alt:o||r._("pin image","image of a pin","image of a pin"),naturalHeight:i,naturalWidth:t,src:e,children:[(0,u.jsx)(d.xu,{position:"absolute",top:!0,bottom:!0,left:!0,right:!0,opacity:.8,dangerouslySetInlineStyle:p.overlay}),(0,u.jsxs)(d.xu,{justifyContent:"center",direction:"column",display:"flex",position:"absolute",height:"100%",width:"100%","data-test-id":`video-end-card-${l}`,children:[(0,u.jsx)(d.iP,{rounding:2,children:(0,u.jsxs)(d.xu,{display:"flex",justifyContent:"center",padding:2,children:[(0,u.jsx)(d.JO,{accessibilityLabel:r._("Visit site","Button when pressed goes to pin's website","Button when pressed goes to pin's website"),color:"white",dangerouslySetSvgPath:c,size:25}),(0,u.jsx)(d.xu,{margin:1}),(0,u.jsx)(d.xv,{color:"white",lineClamp:1,weight:"bold",children:r._("Visit site","Button when pressed goes to pin's website","Button when pressed goes to pin's website")})]})}),(0,u.jsx)(d.xu,{margin:3}),(0,u.jsx)(d.iP,{onTap:n,rounding:2,children:(0,u.jsxs)(d.xu,{display:"flex",justifyContent:"center",padding:2,children:[(0,u.jsx)(d.JO,{accessibilityLabel:r._("Watch again","Button when pressed restarts the video","Button when pressed restarts the video"),color:"white",dangerouslySetSvgPath:h,size:25}),(0,u.jsx)(d.xu,{margin:1}),(0,u.jsx)(d.xv,{color:"white",lineClamp:1,weight:"bold",children:r._("Watch again","Button when pressed restarts the video","Button when pressed restarts the video")})]})})]})]})}var x=t(484200),m=t(52063),v=t(8720);const y=new Set(["ConversationView","TodayTabFeed"]);function b({inAdsDesktopVideoExperiment:e,isAutoplay:i,cropHeight:t,currentTime:o,lowResOnly:s,highResOnly:h,onLoad:c,onError:p,saved:b,onTimeChange:w,isExperimentalPinRep:f,pin:T,surface:_,playing:P,rootMargin:C,viewType:j,viewParameter:V,onVisibilityChanged:A,trackFullVisible:E,inVisibilityChangedHookExperiment:I}){var W,L;const M=(0,a.ZP)(),[R,B]=(0,n.useState)(!1),[O,S]=(0,n.useState)(!0),H=(0,v.jL)(T),D=H&&!T.is_eligible_for_web_closeup,k=f&&H&&T.is_eligible_for_web_closeup&&!y.has(_),{setCurrentVideo:$}=(0,r.I)(),F=D||!f||!H,Z=(0,x.Z)({onVisibilityChanged:A,inAdsDesktopVideoExperiment:e,trackFullVisible:E,rootMargin:C});let z=!P;e&&(z=O,i&&P&&O&&S(!1));const{url:U}=(null===(W=T.images)||void 0===W?void 0:W["236x"])||{},{id:G,is_promoted:N}=T,X=(0,n.useCallback)((({event:e})=>{e.preventDefault(),e.stopPropagation(),$({pinId:G,isPromoted:Boolean(N),currentTime:0}),B(!1)}),[N,G,$]),q=(0,n.useCallback)((()=>{N&&B(k)}),[k,N]);if(!T.videos||null===(L=T.videos.video_list)||void 0===L||!L.V_HLSV4)return null;const{height:K,thumbnail:J,width:Q,url:Y}=T.videos.video_list.V_HLSV4||{},ee=T.videos.id,ie=[{type:"video/m3u8",src:Y}];return R&&H?(0,u.jsx)(d.xu,{ref:I?Z:null,children:(0,u.jsx)(g,{backgroundImage:null!=U?U:"",naturalHeight:null!=K?K:1,naturalWidth:null!=Q?Q:1,pin:T,onRestartVideo:X})}):z?(0,u.jsx)(d.xu,{ref:I?Z:null,children:(0,u.jsx)(l.Z,{lowResOnly:s,highResOnly:h,onLoad:c,onError:p,pin:T,saved:b})}):(0,u.jsx)(d.xu,{ref:I?Z:null,children:(0,u.jsx)(m.ZP,{isAutoPlay:!!i,cropHeight:t,rootMargin:C,surface:_,inAdsDesktopVideoExperiment:e,contextLogData:{viewParameter:V,component:0,objectId:T.id,video_id:ee,view:j},accessibilityMaximizeLabel:M._("Maximize","Maximize button on video","Maximize button on video"),accessibilityMinimizeLabel:M._("Minimize","Minimize button on video","Minimize button on video"),accessibilityMuteLabel:M._("Mute","Mute button on video","Mute button on video"),accessibilityPauseLabel:M._("Pause","Pause button on video","Pause button on video"),accessibilityPlayLabel:M._("Play","Play button on video","Play button on video"),accessibilityProgressBarLabel:M._("Progress bar","PinVideo.accessibilityProgressBarLabel","Video progress bar accessibility label"),accessibilityUnmuteLabel:M._("Unmute","Unmute button on video","Unmute button on video"),aspectRatio:(null!=Q?Q:1)/(null!=K?K:1),captions:"",hlsConfig:{capLevelToPlayerSize:!0,startPosition:o||-1},loop:F,onTimeChange:w,playing:P,poster:U||J,src:null!=ie?ie:[],videoStartTime:o,volume:0,onEnded:q})})}var w=t(251890);function f(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}const T=(0,o.Z)(b);class _ extends n.Component{constructor(...e){super(...e),f(this,"calculateCurrentVideoTime",(()=>{const{currentTimeFromPinRep:e,pin:i,videosAutoplaying:t}=this.props,{id:n}=i,o=(0,w.X9)(n,t);return this.currentVideoCurrentTime||o||e})),f(this,"handleVisibilityChanged",(e=>{const{currentTimeFromPinRep:i,pin:t,setCurrentVideo:n,pauseAutoplay:o,videosAutoplaying:s}=this.props,{id:r,is_promoted:l}=t,a=(0,w.i8)(r,s),d=(0,w.DP)(r,s);e?l?n({pinId:r,isPromoted:l,currentTime:this.calculateCurrentVideoTime()}):d&&n({pinId:r,isPromoted:Boolean(l),currentTime:this.calculateCurrentVideoTime()}):!e&&a&&o({pinId:r,isPromoted:Boolean(l),currentTime:i||this.currentVideoCurrentTime})})),f(this,"handleVideoTimeChange",(e=>{const{pin:i,onTimeChange:t,videosAutoplaying:n}=this.props,{id:o}=i;(0,w.i8)(o,n)&&(this.currentVideoCurrentTime=e.time),t&&t(e)}))}componentDidMount(){this.props.onLoad&&this.props.onLoad()}componentDidUpdate(e){const{appInFocus:i}=e,{appInFocus:t,currentTimeFromPinRep:n,pauseAutoplay:o,pin:s,setCurrentVideo:r,videosAutoplaying:l}=this.props,{id:a,is_promoted:d}=s,u=(0,w.i8)(a,l);t!==i&&!t&&u?(this.pausedDueToBrowserOutOfFocus=!0,o({pinId:a,isPromoted:Boolean(d),currentTime:n||this.currentVideoCurrentTime})):this.pausedDueToBrowserOutOfFocus&&t&&(this.pausedDueToBrowserOutOfFocus=!1,r({pinId:a,isPromoted:Boolean(d),currentTime:this.calculateCurrentVideoTime()}))}componentWillUnmount(){const{currentTimeFromPinRep:e,pauseAutoplay:i,pin:t,videosAutoplaying:n}=this.props,{id:o,is_promoted:s}=t;(0,w.i8)(o,n)&&i({pinId:o,isPromoted:Boolean(s),currentTime:e||this.currentVideoCurrentTime})}render(){const{cropHeight:e,isAutoplay:i,pin:t,surface:n,videosAutoplaying:o,viewParameter:r,viewType:l,highResOnly:a,lowResOnly:d,onError:h,onLoad:c,saved:p,inAdsDesktopVideoExperiment:g,isExperimentalPinRep:x,rootMargin:m}=this.props,{id:v}=t,y=(0,w.X9)(v,o),f=(0,w.i8)(v,o)&&i,_=s.K.fromGlobalContext(),{anyEnabled:P}=_.experiments.getWithActivation("web_mqtt_finddomnode_deprecation");return P?(0,u.jsx)(b,{cropHeight:e,rootMargin:m,currentTime:y,inAdsDesktopVideoExperiment:g,isAutoplay:i,viewParameter:r,viewType:l,onTimeChange:this.handleVideoTimeChange,onVisibilityChanged:this.handleVisibilityChanged,pin:t,surface:n,playing:f,trackFullVisible:!1,highResOnly:a,lowResOnly:d,onError:h,onLoad:c,saved:p,isExperimentalPinRep:x,inVisibilityChangedHookExperiment:P}):(0,u.jsx)(T,{cropHeight:e,rootMargin:m,currentTime:y,inAdsDesktopVideoExperiment:g,isAutoplay:i,viewParameter:r,viewType:l,onTimeChange:this.handleVideoTimeChange,onVisibilityChanged:this.handleVisibilityChanged,pin:t,surface:n,playing:f,trackFullVisible:!1,highResOnly:a,lowResOnly:d,onError:h,onLoad:c,saved:p,isExperimentalPinRep:x})}}function P(e){const{appUI:{appInFocus:i,isAutoplay:t,videosAutoplaying:n},pauseAutoplay:o,setCurrentVideo:s}=(0,r.I)();return(0,u.jsx)(_,{...e,appInFocus:i,isAutoplay:t,pauseAutoplay:o,setCurrentVideo:s,videosAutoplaying:n})}},440504:(e,i,t)=>{t.d(i,{Z:()=>m});var n=t(667294),o=t(40142),s=t(502493),r=t(850770),l=t(16823),a=t(221295),d=t(710159),u=t(289832),h=t(883119),c=t(51805),p=t(785893);function g(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}class x extends n.Component{constructor(...e){super(...e),g(this,"state",{showBadge:!0}),g(this,"renderBadge",(()=>{const{carouselData:e,isCloseup:i,showCarouselBadge:t}=this.props;if(!e)return null;const{showBadge:n}=this.state,{carousel_slots:o,index:s}=e,r=n?.8:0;return!i&&t?(0,p.jsx)(h.xu,{alignItems:"center",color:"darkGray",display:"flex",height:35,justifyContent:"center",marginEnd:5,marginTop:5,position:"absolute",right:!0,rounding:2,width:35,zIndex:new h.Ry(1),dangerouslySetInlineStyle:{__style:{opacity:r,transition:"opacity .3s"}},children:(0,p.jsx)(h.xv,{color:"white",children:`${(null!=s?s:0)+1}/${(null!=o?o:[]).length}`})}):null}))}componentDidMount(){this.hideBadgeTimeout=setTimeout((()=>this.setState({showBadge:!1})),3e3)}componentDidUpdate(e){const{showBadge:i}=this.state,{carouselData:t}=e,{carouselData:n}=this.props;if(!t||!n)return;const{index:o}=t,{index:s}=n;i&&(this.hideBadgeTimeout&&clearTimeout(this.hideBadgeTimeout),this.hideBadgeTimeout=setTimeout((()=>this.setState({showBadge:!1})),3e3)),o!==s&&(this.hideBadgeTimeout&&clearTimeout(this.hideBadgeTimeout),this.setState({showBadge:!0}))}componentWillUnmount(){this.hideBadgeTimeout&&clearTimeout(this.hideBadgeTimeout)}render(){const{isCloseup:e,carouselIndex:i,closeupHeight:t,closeupWidth:n=0,widthRatio:o=1,cropHeight:r,cropWidth:d,carouselData:g,disableTransition:x,highResOnly:m,lowResOnly:v,onError:y,onLoad:b,pinId:w,isEditMode:f,isDenseView:T}=this.props;if(!g)return null;if(o>1||o<0)throw new Error("widthRatio should be between 0 and 1 inclusive");const{carousel_slots:_=[],index:P=0}=g,C=void 0!==i?i:P,j=!e&&d,{images:V}=_[C];let A;A=e?n:j||(m?474:T?c.Lo:c.xf);const E=Math.floor(A*o),I=(null==V?void 0:V["236x"])||{},W=r||I.height||0,L=d||I.width||236,M=t||W/L*E,R=(e=>{const i=e.reduce(((e,i)=>{var t;const{images:n}=i,{height:o=1,width:s=1}=(null==n?void 0:n["736x"])||(null==n?void 0:n["236x"])||{},r=`${s}x${o}`,l=(null===(t=e[r])||void 0===t?void 0:t.times)||0;return{...e,[r]:{imageHeight:o,imageWidth:s,times:l+1}}}),{}),t=Object.keys(i).reduce(((e,t)=>i[t].times>e.times?i[t]:e),{times:-1,imageHeight:-1,imageWidth:-1});return Object.keys(i).length>1?{imageHeight:t.imageHeight,imageWidth:t.imageWidth}:null})(_);return(0,p.jsxs)(h.xu,{height:M,display:"flex",alignItems:"center",overflow:"hidden","data-test-id":"carousel-pin",minHeight:a.M,children:[!f&&this.renderBadge(),(0,p.jsx)(s.Z,{trackCarousel:!0,impressionType:"Pin",loggingId:w,slotIndex:P,viewParameter:72,viewType:1,children:(0,p.jsx)(h.xu,{position:"absolute",height:M,width:E,overflow:"hidden"})},`carousel-impression-key-${C}`),(0,p.jsx)(h.xu,{width:E*_.length,dangerouslySetInlineStyle:{__style:{transition:x?"":"left .3s",left:(0,u.vF)(_.length,E,A,C)}},left:!0,height:"100%",display:"flex",direction:"row",position:"relative",children:_.map(((i,t)=>{if(e){const e=t===_.length-1;return(({pinId:e,slot:i,slotIndex:t,onError:n,onLoad:o,widthToUse:s,gap:r},a)=>{const{url:d,width:c,height:g}=(0,l.Z)(i)||{},{details:x=""}=i,m=(0,u.GH)(x,a,t);return(0,p.jsx)(h.xu,{"data-test-id":"carousel-slot-container",width:s,height:"100%",marginEnd:r,children:(0,p.jsx)(h.zd,{height:"100%",wash:!0,children:(0,p.jsx)(h.Ee,{alt:m,fit:"contain",naturalHeight:null!=g?g:1,naturalWidth:null!=c?c:1,onError:n,onLoad:o,src:null!=d?d:""})})},`carousel-slot-${e}-${t}`)})({pinId:w,slot:i,slotIndex:t,onError:y,onLoad:b,widthToUse:E,gap:E<A&&!e?1:0},this.props.i18n)}return((e,i,t,n,o,s,r,l,a,d,c,g,x,m,v)=>{var y,b,w;const{images:f,details:T=""}=i;let _,P=236,C=236,j="";var V,A,E,I,W,L,M,R;if(o?(P=474,C=f&&Math.min(P/.8,P/((null!==(V=null===(A=f["564x"])||void 0===A?void 0:A.width)&&void 0!==V?V:1)/(null!==(E=null===(I=f["564x"])||void 0===I?void 0:I.height)&&void 0!==E?E:1))),j=f&&(null===(W=f["564x"])||void 0===W?void 0:W.url)):f&&f["736x"]?(C=f&&f["736x"]&&f["736x"].height,P=f&&f["736x"]&&f["736x"].width,j=f&&f["736x"]&&f["736x"].url):f&&f["236x"]&&(C=f&&f["236x"]&&f["236x"].height,P=f&&f["236x"]&&f["236x"].width,j=f&&f["236x"]&&f["236x"].url),x&&m&&(C=Math.min(x*m,null!==(L=C)&&void 0!==L?L:1)),s)_=`${null!==(M=null==f||null===(R=f["236x"])||void 0===R?void 0:R.url)&&void 0!==M?M:""} 1x`;else if(o){var B,O;_=`${null!==(B=null==f||null===(O=f["564x"])||void 0===O?void 0:O.url)&&void 0!==B?B:""} 1x`}else{var S,H,D;_=[(null==f?void 0:f["474x"])&&`${null!==(S=f["474x"].url)&&void 0!==S?S:""} 2x`,(null==f?void 0:f["736x"])&&`${null!==(H=f["736x"].url)&&void 0!==H?H:""} 3x`,(null==f?void 0:f.orig)&&`${null!==(D=f.orig.url)&&void 0!==D?D:""} 4x`].filter(Boolean).join(", ")}const k=(0,u.GH)(T,e,n),$=g?void 0:C,F=g?void 0:P,Z=!!v,{boxHeight:z,boxWidth:U}=Z?{boxHeight:null==v?void 0:v.imageHeight,boxWidth:null==v?void 0:v.imageWidth}:{boxHeight:$,boxWidth:F};return(0,p.jsx)(h.xu,{"data-test-id":"carousel-slot-container",height:z,width:U,children:(0,p.jsx)(h.xu,{height:g?c:void 0,width:g||void 0,"data-test-id":`carousel-img-${n}`,children:(0,p.jsx)(h.Ee,{alt:k,fit:g?"cover":"none",naturalHeight:null!==(y=C)&&void 0!==y?y:1,naturalWidth:null!==(b=P)&&void 0!==b?b:1,onError:r,onLoad:l,src:null!==(w=j)&&void 0!==w?w:"",srcSet:_})})},`carousel-slot-${t}-${n}`)})(this.props.i18n,i,w,t,m,v,y,b,0,0,r,d,M,E,R)}))})]})}}g(x,"defaultProps",{showCarouselBadge:!0});const m=(0,o.connect)((({pins:e},{pinId:i,pin:t})=>{const n=e[i]||t;return{carouselData:(0,r.Z)({pin:n,shouldUnifyImageSizes:!0})}}),(()=>({})))((function(e){const i=(0,d.ZP)();return(0,p.jsx)(x,{...e,i18n:i})}))},289832:(e,i,t)=>{t.d(i,{vF:()=>n,CU:()=>r,GH:()=>l,gA:()=>a});const n=(e,i,t,n,o=0)=>{if(t===i)return n*i*-1;const s=Math.floor(t-i),r=i+o;return n===e-1?-1*n*r+s:-1*n*r},o=({index:e,slotAndGapWidth:i,containerWidth:t,contentWidth:n})=>{const s=e-1,r=s*i;return n-r>=t?r:o({index:s,slotAndGapWidth:i,containerWidth:t,contentWidth:n})},s=({index:e,gap:i,slotAndGapWidth:t,containerWidth:n,slidesShownPerPosition:s,contentWidth:r})=>o({index:e,slotAndGapWidth:t,containerWidth:n,contentWidth:r})+(({slotAndGapWidth:e,slidesShownPerPosition:i})=>e-(i-parseInt(i,10))*e)({slotAndGapWidth:t,slidesShownPerPosition:s})-i,r=({slotWidth:e,containerWidth:i,gap:t,numberOfSlides:n,index:o})=>{const r=e+t,l=r*n;if(l<=i)return 0;const a=i/r,d=(({numberOfSlides:e,slidesShownPerPosition:i,index:t})=>e-t-Math.floor(i)<1)({slidesShownPerPosition:a,numberOfSlides:n,index:o})?s({index:o,gap:t,contentWidth:l,slotAndGapWidth:r,containerWidth:i,slidesShownPerPosition:a}):o*r;return d?-d:0},l=(e,i,t)=>e||`${i._("carousel image","Alternate text for a carousel image that indicates it is a carousel pin, with carousel index followed","Alternate text for a carousel image that indicates it is a carousel pin, with carousel index followed")} ${t}`,a=({lowResOnly:e,highResOnly:i,slot:t})=>{var n,o,s;const{images:r}=t;var l,a,d,u;return e?`${null!==(l=null==r||null===(a=r["236x"])||void 0===a?void 0:a.url)&&void 0!==l?l:""} 1x`:i?`${null!==(d=null==r||null===(u=r["564x"])||void 0===u?void 0:u.url)&&void 0!==d?d:""} 1x`:[(null==r?void 0:r["474x"])&&`${null!==(n=r["474x"].url)&&void 0!==n?n:""} 2x`,(null==r?void 0:r["736x"])&&`${null!==(o=r["736x"].url)&&void 0!==o?o:""} 3x`,(null==r?void 0:r.orig)&&`${null!==(s=r.orig.url)&&void 0!==s?s:""} 4x`].filter(Boolean).join(", ")}},16823:(e,i,t)=>{function n(e){const{images:i={}}=e;return i["564x"]&&i["564x"].url?i["564x"]:i["736x"]&&i["736x"].url?i["736x"]:i["474x"]&&i["474x"].url?i["474x"]:i["236x"]&&i["236x"].url?i["236x"]:null}t.d(i,{Z:()=>n})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/55106-8c84f1d8e9ea645a.mjs.map