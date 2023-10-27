import{r as o,u as f,j as n,c as d,h as Ce}from"./index-68470780.js";import{i as _,g as Ee,a as ke,u as L,r as W,F as K,j as Be,o as Ae,k as De}from"./divWithClassName-ab280b7d.js";import{A as Fe,c as Oe,M as Ie,B as He,g as xe}from"./BootstrapModalManager-a1d1eda3.js";function Ue(){return o.useState(null)}var y;function z(e){if((!y&&y!==0||e)&&_){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),y=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return y}const q=o.forwardRef(({className:e,bsPrefix:t,as:s="div",...r},l)=>(t=f(t,"modal-body"),n.jsx(s,{ref:l,className:d(e,t),...r})));q.displayName="ModalBody";const be=q,G=o.forwardRef(({bsPrefix:e,className:t,contentClassName:s,centered:r,size:l,fullscreen:i,children:w,scrollable:R,...v},N)=>{e=f(e,"modal");const m=`${e}-dialog`,c=typeof i=="string"?`${e}-fullscreen-${i}`:`${e}-fullscreen`;return n.jsx("div",{...v,ref:N,className:d(m,t,l&&`${e}-${l}`,r&&`${m}-centered`,R&&`${m}-scrollable`,i&&c),children:n.jsx("div",{className:d(`${e}-content`,s),children:w})})});G.displayName="ModalDialog";const J=G,Q=o.forwardRef(({className:e,bsPrefix:t,as:s="div",...r},l)=>(t=f(t,"modal-footer"),n.jsx(s,{ref:l,className:d(e,t),...r})));Q.displayName="ModalFooter";const Le=Q,V=o.forwardRef(({bsPrefix:e,className:t,closeLabel:s="Close",closeButton:r=!1,...l},i)=>(e=f(e,"modal-header"),n.jsx(Fe,{ref:i,...l,className:d(t,e),closeLabel:s,closeButton:r})));V.displayName="ModalHeader";const We=V,ze=Ee("h4"),X=o.forwardRef(({className:e,bsPrefix:t,as:s=ze,...r},l)=>(t=f(t,"modal-title"),n.jsx(s,{ref:l,className:d(e,t),...r})));X.displayName="ModalTitle";const _e=X;function Ke(e){return n.jsx(K,{...e,timeout:null})}function qe(e){return n.jsx(K,{...e,timeout:null})}const Y=o.forwardRef(({bsPrefix:e,className:t,style:s,dialogClassName:r,contentClassName:l,children:i,dialogAs:w=J,"aria-labelledby":R,"aria-describedby":v,"aria-label":N,show:m=!1,animation:c=!0,backdrop:h=!0,keyboard:Z=!0,onEscapeKeyDown:$,onShow:P,onHide:p,container:ee,autoFocus:ae=!0,enforceFocus:te=!0,restoreFocus:oe=!0,restoreFocusOptions:ne,onEntered:le,onExit:C,onExiting:se,onEnter:E,onEntering:k,onExited:B,backdropClassName:A,manager:D,...re},de)=>{const[ie,ce]=o.useState({}),[ue,F]=o.useState(!1),S=o.useRef(!1),j=o.useRef(!1),g=o.useRef(null),[M,fe]=Ue(),me=ke(de,fe),O=L(p),ge=Ce();e=f(e,"modal");const Me=o.useMemo(()=>({onHide:O}),[O]);function I(){return D||xe({isRTL:ge})}function H(a){if(!_)return;const u=I().getScrollbarWidth()>0,b=a.scrollHeight>Ae(a).documentElement.clientHeight;ce({paddingRight:u&&!b?z():void 0,paddingLeft:!u&&b?z():void 0})}const T=L(()=>{M&&H(M.dialog)});Oe(()=>{W(window,"resize",T),g.current==null||g.current()});const he=()=>{S.current=!0},pe=a=>{S.current&&M&&a.target===M.dialog&&(j.current=!0),S.current=!1},x=()=>{F(!0),g.current=De(M.dialog,()=>{F(!1)})},ye=a=>{a.target===a.currentTarget&&x()},we=a=>{if(h==="static"){ye(a);return}if(j.current||a.target!==a.currentTarget){j.current=!1;return}p==null||p()},Re=a=>{Z?$==null||$(a):(a.preventDefault(),h==="static"&&x())},ve=(a,u)=>{a&&H(a),E==null||E(a,u)},Ne=a=>{g.current==null||g.current(),C==null||C(a)},Se=(a,u)=>{k==null||k(a,u),Be(window,"resize",T)},je=a=>{a&&(a.style.display=""),B==null||B(a),W(window,"resize",T)},Te=o.useCallback(a=>n.jsx("div",{...a,className:d(`${e}-backdrop`,A,!c&&"show")}),[c,A,e]),U={...s,...ie};U.display="block";const $e=a=>n.jsx("div",{role:"dialog",...a,style:U,className:d(t,e,ue&&`${e}-static`,!c&&"show"),onClick:h?we:void 0,onMouseUp:pe,"aria-label":N,"aria-labelledby":R,"aria-describedby":v,children:n.jsx(w,{...re,onMouseDown:he,className:r,contentClassName:l,children:i})});return n.jsx(Ie.Provider,{value:Me,children:n.jsx(He,{show:m,ref:me,backdrop:h,container:ee,keyboard:!0,autoFocus:ae,enforceFocus:te,restoreFocus:oe,restoreFocusOptions:ne,onEscapeKeyDown:Re,onShow:P,onHide:p,onEnter:ve,onEntering:Se,onEntered:le,onExit:Ne,onExiting:se,onExited:je,manager:I(),transition:c?Ke:void 0,backdropTransition:c?qe:void 0,renderBackdrop:Te,renderDialog:$e})})});Y.displayName="Modal";const Ve=Object.assign(Y,{Body:be,Header:We,Title:_e,Footer:Le,Dialog:J,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});export{Ve as M};