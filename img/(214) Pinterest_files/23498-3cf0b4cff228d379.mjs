(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[23498,12749],{524138:(e,o,t)=>{t.d(o,{zu:()=>n,Uw:()=>a,AA:()=>r,k7:()=>s,zR:()=>_,dy:()=>i,QR:()=>c,KH:()=>l,E9:()=>u,rT:()=>g,IO:()=>d,EU:()=>E,ZR:()=>p,u9:()=>O});const n="OPEN_UNAUTH",a="openUnauthType",r="_isAfterLogin",s="_lastVisitedPages",_="_lastVisitedPagesBeforeLogin",i="_lastVisitedBoardPages",c="_lastVisitedPagesBeforeNavPage",l="_lastVisitedSessionPages",u="unauthTopicsFollowed",g=["US","CA","NZ","AU"],d=new Set(["GB","IE"]),E=new Set(["AT","BE","CH","DE","DK","ES","FR","IT","NL","NO","PT","SE"]),p=new Set(["BR","MX","AR","CL","CO","PE"]),O="ad_img"},188928:(e,o,t)=>{t.r(o),t.d(o,{exchangeTokenAndSetSession:()=>l,verifyLoggedInStatus:()=>u,registerUser:()=>g,loginUser:()=>d});var n=t(413771),a=t(724207),r=t(632589),s=t(735767),_=t(740049);const i=r.Z.settings.ACCOUNTS_PINTEREST_URL,c=(e,o,t,n)=>{const a=e=>{const o=new Error(e.statusText);throw o.response=e,!o.api_error_code&&o.response&&(o.api_error_code=o.response.code,o.message=o.response.message),o},r={credentials:"include",mode:"cors"};return"POST"===t&&(r.method="POST",r.body=o,r.headers={"Content-type":"application/x-www-form-urlencoded; charset=UTF-8","X-Pinterest-InstallId":n},n||(0,_.My)(`unauth.auth_handshake.cross_domain.no_unauth_id.${t}`)),fetch(e,r).then((e=>200===e.status||401===e.status||409===e.status?e:(a(e),{}))).then((e=>e.json())).then((e=>"success"===e.status?Promise.resolve(e):e.code===s.Zn?(e.api_error_code=e.code,Promise.reject(e)):(a(e),{}))).catch((e=>{throw e}))},l=(e,o=!1)=>a.ZP.create("HandshakeSessionResource",{token:e,isRegistration:o}).callCreate(),u=e=>{c(`${i}/v3/handshake/verify/`,"","GET",e).then((e=>{if(e&&e.data){const o=e.data;l(o).then((e=>{window.location.reload()}),(e=>{}))}}),(e=>{}))},g=(e,{facebookToken:o,inviteCode:t,locale:a,referrer:s,unauthId:_})=>{const i=(e.business_name?"partner/handshake":(e.gplus_code||e.gplus_id_token)&&"gplus/handshake")||e.facebook_id&&"facebook/handshake"||"email/handshake",l={};if(l.email=e.email||"",l.username=e.username||"",l.password=e.password||"",l.first_name=e.first_name||"",l.last_name=e.last_name||"",l.country=e.country||"",l.locale=a,l.referrer=s,e.age){const o=new Date;o.setFullYear(o.getFullYear()-e.age);const t=parseInt(o/1e3,10);l.birthday=t.toString()}if(e.custom_gender&&(l.custom_gender=e.custom_gender),e.gender&&(l.gender=e.gender),e.business_name&&(l.account_type=e.account_type,l.business_name=e.business_name,l.first_name=e.business_name),t&&(l.invite_code=t),e.facebook_id){const t=o||e.facebook_token||"";l.facebook_id=e.facebook_id,l.facebook_token=t,l.social_username=e.social_username||""}else(e.gplus_code||e.gplus_id_token)&&(l.password=e.password||"",l.one_time_code=e.gplus_code,l.id_token=e.gplus_id_token,l.redirect_uri=e.gplus_redirect_uri);return e.recaptchaV3Token&&(l.recaptcha_v3_token=e.recaptchaV3Token),c(`${r.Z.settings.ACCOUNTS_PINTEREST_URL}/v3/register/${i}/`,(0,n.Z)(l),"POST",_)},d=(e,{facebookToken:o,recaptchaV3Token:t,referrer:a,unauthId:s})=>{const _=(e.mfa_token?"mfa/handshake":e.gplus_id_token&&"gplus/handshake")||e.facebook_id&&"facebook/handshake"||"handshake",i={};if(e.username_or_email&&(i.username_or_email=e.username_or_email.trim(),i.password=e.password,i.referrer=a),e.facebook_id){const t=o||e.facebook_token||"";i.facebook_id=e.facebook_id,i.facebook_token=t,i.facebook_autologin=e.facebook_autologin||!1}return e.gplus_id_token&&(i.gplus_id_token=e.gplus_id_token,i.gplus_access_token=e.gplus_access_token,i.gplus_expires_at=e.gplus_expires_at,i.gplus_autologin=e.gplus_autologin||!1),e.mfa_token&&(i.mfa_token=e.mfa_token),t&&(i.token=t),c(`${r.Z.settings.ACCOUNTS_PINTEREST_URL}/v3/login/${_}/`,(0,n.Z)(i),"POST",s)}},23498:(e,o,t)=>{t.d(o,{Z:()=>S});var n=t(186964),a=t(724207),r=t(20814),s=t(632589),_=t(738453),i=t(735767),c=t(518122),l=t(477807),u=t(513435),g=t(504193),d=t(834350),E=t(225628),p=t(402825),O=t(188928),h=t(740049),R=t(256191);const f=function(e,o,t="",n="",a="",r="",s=!1){let i="referrer_unknown";try{const e=document.referrer;i=e?e.indexOf("/t.co/")>-1?"twitter":e.indexOf("google.")>-1?"google":e.indexOf("bing.")>-1?"bing":e.indexOf("facebook.")>-1?"facebook":"other":"direct"}catch(f){}const l=(0,c.eD)(e),u=o===Object(o)?o.container:"container_unknown";(0,h.My)("login.referrer."+i+"."+l),(0,h.My)("login.container."+u+"."+l),(0,h.My)("login.type."+l);const g=(0,c.eD)(e)||"method_unknown",O=o.page||"page_unknown";e.gplus_autologin?s?((0,h.My)("mweb_autologin.google_success"),(0,h.hL)("new_mweb_autologin_google",{page:O,referrer:i,container:u})):((0,h.My)("web_autologin_google"),(0,h.hL)("new_web_autologin_google",{page:O,referrer:i,container:u})):e.facebook_autologin?((0,h.My)("web_autologin_facebook"),(0,h.hL)("new_web_autologin_facebook",{page:O,referrer:i,container:u})):((0,h.My)(`web_login.${g}.success.${O}.${u}.${i}.tier1`),(0,h.hL)(`new_web_login.${g}.success`,{page:O,referrer:i,container:u})),(0,p.c_)({country:t,countryFromHostName:n,countryFromIp:a})&&(0,E.yP)({id:_.bJ,eventCategory:"Logins",eventName:"Desktop"}),(0,p.$r)({country:t,countryFromHostName:n,countryFromIp:a,regionFromIp:r})&&(0,E.jw)({id:"flashtalking-d-login",eventCategory:"Logins",eventName:"Desktop"}),(0,p.NR)(t,r)&&(0,E.EN)({pixelId:d.Rj,eventCategory:"Logins",eventName:"Desktop"}),(0,p.Fc)({country:t,countryFromHostName:n,countryFromIp:a})&&(0,E.Be)({pixelId:d.HO,eventCategory:"Logins",eventName:"Desktop"});const R=e.facebook_autologin||e.gplus_autologin||e.autologin?"autologin":"login";(0,h.De)({action:R,event:"success",type:l})},m=(e,o)=>{(0,h.My)(`web_cross_domain_login.${e}.${(0,c.eD)(o)}`)},A=(e,o,t="other",n=!1)=>{if(e){const a=e.http_status===l.Ej?l.Ej:e.api_error_code;let r=a;i.qF.has(a)&&(r=i.qF.get(a));const{container:s}=o;n?(0,h.My)(`unauth_web_client_cctld_login_api_error.${String(r)}.${s||"unknow_container"}.${t}`):(0,h.My)(`unauth_web_client_login_api_error.${String(r)}.${s||"unknow_container"}.${t}`),(0,h.De)({action:"login",event:"fail",type:t})}},N=function(e,o,t){"autologin"===(e.facebook_autologin||e.gplus_autologin||e.autologin?"autologin":"login")&&(0,h.dy)({event:o,provider:t})},S=function(e,o,t={},_=!1,i,l,d=!1){if(function(e){return!e.mfa_resend&&!!e.username_or_email}(e)){const n=s.Z.settings.CORS_HANDSHAKE_DOMAINS;if(o&&-1!==n.indexOf(o.origin))return function(e,o,t,n){m("attempt",e);const{referrer:a,facebookToken:r,unauthId:s}=n;return(0,O.loginUser)(e,{recaptchaV3Token:o,referrer:a,facebookToken:r,unauthId:s}).then((o=>{if(o&&o.data){m("success_with_token",e);const n=o.data;return(0,O.exchangeTokenAndSetSession)(n).then((o=>(m("success_token_exchanged",e),f(e,t),Promise.resolve())),(o=>{throw m("success_token_not_exchanged",e),o}))}throw m("success_without_token",e),new Error}),(o=>{throw m("failure",e),A(o,t,(0,c.eD)(e),!0),o}))}(e,l,t,o)}const E=e.google_open_id_token?"google":"facebook";N(e,"login_api_call_start",E);const p=_?null:r.ZP.localStorage.getItem("visitedPagesBeforeLogin"),h={...e,get_user:e.get_user||e.switch_account&&_,app_type_from_client:7===o.appType?7:5,visited_pages_before_login:p?JSON.stringify(p):null,recaptchaV2Token:i,recaptchaV3Token:l};return a.ZP.create("UserSessionResource",h).callCreate({showError:!1,async:!0}).then((o=>{const{client_context:a}=o||{},{country:r,country_from_hostname:s,country_from_ip:_,region_from_ip:i}=a||{};return f(e,t,r,s,_,i,d),N(e,"login_api_call_success",E),(0,u.B)(!1),n.zN(R.e7.name),n.zN(R.x3.name),(0,g.D)("login").then((()=>o))}),(o=>(A(o,t,(0,c.eD)(e)),N(e,"login_api_call_failure",E),Promise.reject(o))))}},513435:(e,o,t)=>{t.d(o,{a:()=>a,B:()=>r});var n=t(20814);const a=()=>n.ZP.localStorage.getItem("uoiou")||!1,r=e=>{n.ZP.localStorage.setItem("uoiou",!!e)}},735767:(e,o,t)=>{t.d(o,{pH:()=>n,tz:()=>a,Jw:()=>r,tL:()=>s,bd:()=>_,OW:()=>i,cZ:()=>c,dO:()=>l,aG:()=>u,_K:()=>g,lg:()=>d,hU:()=>E,oP:()=>p,nY:()=>O,iK:()=>h,nf:()=>R,RL:()=>f,V4:()=>m,yV:()=>A,Zn:()=>N,Bb:()=>S,xN:()=>T,E6:()=>I,an:()=>k,rm:()=>w,D4:()=>L,rM:()=>D,iZ:()=>P,$j:()=>C,Pv:()=>y,at:()=>b,Jt:()=>U,H9:()=>M,Cx:()=>G,qF:()=>v,ZP:()=>F});const n=101,a=93,r=117,s=116,_=9,i=8,c=16,l=12,u=3,g=18,d=105,E=79,p=78,O=77,h=76,R=1402,f=85,m=82,A=88,N=1201,S=86,T=30,I=84,k=83,w=2901,L=2904,D=2905,P=95,C=19,y=113,b=91,U=2501,M=3050,G=[i,_],v=new Map([[1,"INVALID_PARAMETERS"],[100,"INVALID_NETWORK_ACCESS_TOKEN"],[d,"FACEBOOK_ACCOUNT_NOT_LINKED"],[l,"API_SERVER_ERROR"],[1202,"LOGIN_MFA_TOKEN_INVALID"],[1203,"MFA_CONNECTION_ERROR"],[13,"API_DOWN"],[181,"GPLUS_CONNECTION_ERROR"],[14,"API_SERVER_SPAM_CONTENT"],[c,"API_REQUEST_TIMEOUT"],[50,"API_ERROR_PIN_NOT_FOUND"],[O,"INVALID_PASSWORD_FB_USER"],[p,"INVALID_PASSWORD_ERROR_CODE"],[E,"INVALID_EMAIL_ERROR_CODE"],[80,"INVALID_EMAIL_OR_PASSWORD"],[m,"LOGIN_DEACTIVATED_USER"],[k,"LOGIN_POLICY_VIOLATION_USER"],[f,"AUTO_PASSWORD_RESET_ERROR_CODE"],[S,"LOGIN_PANICKED_USER"],[87,"LOGIN_SOFT_BANNED_USER"],[a,"API_ERROR_UNDERAGE_REGISTER_ATTEMPT"],[s,"API_ERROR_OVERAGE_REGISTER_ATTEMPT"],[99,"LOGIN_PASSWORD_NOT_CREATED"],[i,"API_LIMIT_EXCEEDED_ERROR"],[_,"API_EVENT_BLOCKED_ERROR"],[C,"USER_IN_SAFE_MODE"],[I,"LOGIN_VOLUNTARILY_DEACTIVATED_USER"],[f,"LOGIN_BAD_PASSWORD_ASK_RESET"],[N,"LOGIN_MFA_REQUIRED"],[T,"LOGIN_USER_NOT_FOUND"],[A,"LOGIN_HARD_BANNED_USER"],[429,"RESPONSE_CODE_TOO_MANY_REQUESTS"],[w,"SAR_DOWNLOAD_LIMIT"],[L,"SAR_EMAIL_UNVERIFIED"],[D,"SAR_EMAIL_MISSING"]]),F=[i,_,C,k,f,A]},518122:(e,o,t)=>{t.d(o,{Ny:()=>d,ZP:()=>p,lp:()=>O,eD:()=>h});var n=t(186964),a=t(285230),r=t(58545),s=t(860952),_=t(724207),i=t(20814),c=t(632589),l=t(256191),u=t(69532),g=t(740049);const d=Object.freeze({SOFT_BANNED:0,RATE_LIMITED:1,LOGIN_ASSISTANCE:2,PASSWORD_RESET_SENT:3,PREVENT_FACEBOOK_REGISTER:4,PREVENT_GOOGLE_REGISTER:5,SUSPENDED:6});class E{static defaultLoginRedirectUrl(){return window.location.pathname===c.Z.settings.PASSWORD_RESET_URL||window.location.pathname===c.Z.settings.LOGIN_URL||window.location.pathname.startsWith(c.Z.settings.ADD_SECONDARY_ACCOUNT_PAGE)?"/":window.location.pathname+window.location.search}static defaultSocialLoginRedirectUrl(){return window.location.pathname.startsWith(c.Z.settings.ADD_SECONDARY_ACCOUNT_PAGE)?"/":window.location.pathname}static isExceedRecaptchaLocalLimit(){const e=i.ZP.localStorage.getItem("urh");if(e&&e.indexOf("|")>-1){const o=e.split("|");return 3===o.length&&(new Date).getTime()/1e3-parseInt(o[0],10)<=3600}return!1}static updateRecaptchaTimeStamp(){const e=i.ZP.localStorage.getItem("urh");let o=[];e&&(o=e.split("|"),3===o.length&&o.shift());const t=((new Date).getTime()/1e3).toString();o.push(t);const n=o.join("|");i.ZP.localStorage.setItem("urh",n)}static isFullyLoggedIn(e,o){return e&&1===o}static handleRedirect(e){if(!e){e="/";const o=(0,r.Z)();if(o){const t=o.next;t&&(e=t,delete o.next),e=(0,a.Z)(e,o)}}(0,s.Z)(e)}static handleRedirectWithFallbackWindowLocation(){this.handleRedirect(this.defaultLoginRedirectUrl())}static handleSignupRedirect(e,o){i.ZP.localStorage.setItem("signupTime",Date.now()),!o&&e&&"/"!==e?E.handleRedirect(e):E.handleRedirect("/")}static storeLoginCredentialsToBrowser(e){if(navigator.credentials&&e.username_or_email)try{const o=new window.PasswordCredential({id:e.username_or_email,password:e.password});navigator.credentials.store(o).then((()=>{(0,g.My)("navigatorCredentials.store.success")}))}catch(o){(0,g.My)("navigatorCredentials.store.error")}}static retrieveLoginCredentialsFromBrowser(){const e=window.navigator.credentials;if(!e)return new Promise(((e,o)=>{o()}));return e.get({password:!0,mediation:"silent"})}static attemptLoginWithBrowserCredentials(e,o,t){if(!e)return new Promise(((e,o)=>{o("No credentials")}));let n,a;e.password?(a="include",n=new FormData,n.append("username",e.id),n.append("password",e.password)):a=e;return fetch("/resource/UserSessionResource/create/",{method:"POST",body:n,credentials:a,headers:{Accept:"application/json, text/javascript, */*","X-CSRFToken":o||"","X-Pinterest-AppState":t,"X-Requested-With":"XMLHttpRequest"}}).then((e=>{if(200!==e.status){const o=new Error(e.statusText);throw o.response=e,o}return(0,g.My)("navigatorCredentials.login.success"),e.json()})).catch((e=>((0,g.My)("navigatorCredentials.login.failure"),Promise.reject(e))))}static fetchRecentlyLoggedOutUser(e){if(e)return Promise.reject();const o=_.ZP.create("UnauthUserDataResource");return new Promise(((e,t)=>{o.callGet().then((o=>{const a=o.resource_response.data,r=!!n.U2(l.x3);return a?(a.connected_to_facebook||a.connected_to_google||a.has_password||(0,g.My)("unauth.personalized_login.no_login_methods_found"),(0,g.My)("unauth.personalized_login.fetch_user_info.info.user_info_found.logged_out_cookie_"+(r?"true":"false")),e(a)):((0,g.My)("unauth.personalized_login.fetch_user_info.info.no_user_info.logged_out_cookie_"+(r?"true":"false")),t({}))})).catch((e=>{if(e.message){const o=e.message.replace(/\s/g,"_").toLowerCase();(0,g.My)(`unauth.personalized_login.fetch_user_info.error.${o}`)}else(0,g.My)("unauth.personalized_login.fetch_user_info.error.unknown");return t(e)}))}))}static handleLoginMfa(e,o,t){(0,g.My)("multi_step_login"),E.storeLoginCredentialsToBrowser(e),t?t(e,o):(0,g.My)("unauth.login.error.CLIENT_ERROR.null_mfa_handler")}}const p=E;function O(e){return e.facebook_id?u.sr.FACEBOOK:e.google_open_id_token?u.sr.GOOGLE_ONE_TAP:e.gplus_id_token?u.sr.GOOGLE:e.line_id_token?u.sr.LINE:e.username_or_email?u.sr.EMAIL:u.sr.OTHER}function h(e){return e.mfa_token?"mfa_token":e.mfa_resend?"mfa_resend":O(e)}},69532:(e,o,t)=>{t.d(o,{sr:()=>r,sR:()=>s,NN:()=>_,r4:()=>i,du:()=>c});var n=t(632589),a=t(524138);const r={FACEBOOK:"facebook",GOOGLE_ONE_TAP:"google_one_tap",GOOGLE:"google",LINE:"line",EMAIL:"email",OTHER:"other"},s=e=>e.facebook_id?r.FACEBOOK:e.google_open_id_token?r.GOOGLE_ONE_TAP:e.gplus_code||e.gplus_id_token?r.GOOGLE:e.line_id_token?r.LINE:e.email?r.EMAIL:r.OTHER,_=(e="")=>e in n.Z.settings.MINIMUM_AGE_BY_EU_COUNTRY,i=e=>n.Z.settings.EN_COUNTRIES_WITH_MANDATORY_AGE.includes(e)||n.Z.settings.LATAM_AGE_COLLECTION.has(e),c=e=>a.rT.includes(e)||a.ZR.has(e)||_(e)},477807:(e,o,t)=>{t.d(o,{AB:()=>n,Ej:()=>a,Sf:()=>r});const n=412,a=429,r=500}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/23498-3cf0b4cff228d379.mjs.map