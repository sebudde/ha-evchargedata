var ge=globalThis,_e=ge.ShadowRoot&&(ge.ShadyCSS===void 0||ge.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Le=Symbol(),mt=new WeakMap,se=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Le)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(_e&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=mt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&mt.set(e,t))}return t}toString(){return this.cssText}},gt=n=>new se(typeof n=="string"?n:n+"",void 0,Le),A=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,r,i)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[i+1],n[0]);return new se(e,n,Le)},_t=(n,t)=>{if(_e)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=ge.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,n.appendChild(s)}},Pe=_e?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return gt(e)})(n):n;var{is:gs,defineProperty:_s,getOwnPropertyDescriptor:fs,getOwnPropertyNames:vs,getOwnPropertySymbols:bs,getPrototypeOf:ys}=Object,fe=globalThis,ft=fe.trustedTypes,$s=ft?ft.emptyScript:"",xs=fe.reactiveElementPolyfillSupport,re=(n,t)=>n,De={toAttribute(n,t){switch(t){case Boolean:n=n?$s:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},bt=(n,t)=>!gs(n,t),vt={attribute:!0,type:String,converter:De,reflect:!1,useDefault:!1,hasChanged:bt};Symbol.metadata??=Symbol("metadata"),fe.litPropertyMetadata??=new WeakMap;var O=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=vt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&_s(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:i}=fs(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:r,set(o){let l=r?.call(this);i?.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??vt}static _$Ei(){if(this.hasOwnProperty(re("elementProperties")))return;let t=ys(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(re("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(re("properties"))){let e=this.properties,s=[...vs(e),...bs(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(Pe(r))}else t!==void 0&&e.push(Pe(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _t(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let i=(s.converter?.toAttribute!==void 0?s.converter:De).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let i=s.getPropertyOptions(r),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:De;this._$Em=r;let l=o.fromAttribute(e,i.type);this[r]=l??this._$Ej?.get(r)??l,this._$Em=null}}requestUpdate(t,e,s,r=!1,i){if(t!==void 0){let o=this.constructor;if(r===!1&&(i=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??bt)(i,e)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:i},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,i]of s){let{wrapped:o}=i,l=this[r];o!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,i,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};O.elementStyles=[],O.shadowRootOptions={mode:"open"},O[re("elementProperties")]=new Map,O[re("finalized")]=new Map,xs?.({ReactiveElement:O}),(fe.reactiveElementVersions??=[]).push("2.1.2");var Fe=globalThis,yt=n=>n,ve=Fe.trustedTypes,$t=ve?ve.createPolicy("lit-html",{createHTML:n=>n}):void 0,Et="$lit$",K=`lit$${Math.random().toFixed(9).slice(2)}$`,Ct="?"+K,ks=`<${Ct}>`,W=document,ie=()=>W.createComment(""),oe=n=>n===null||typeof n!="object"&&typeof n!="function",Ke=Array.isArray,ws=n=>Ke(n)||typeof n?.[Symbol.iterator]=="function",Te=`[ 	
\f\r]`,ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xt=/-->/g,kt=/>/g,j=RegExp(`>|${Te}(?:([^\\s"'>=/]+)(${Te}*=${Te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wt=/'/g,St=/"/g,Lt=/^(?:script|style|textarea|title)$/i,Ne=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),c=Ne(1),N=Ne(2),Ys=Ne(3),q=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),At=new WeakMap,B=W.createTreeWalker(W,129);function Pt(n,t){if(!Ke(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return $t!==void 0?$t.createHTML(t):t}var Ss=(n,t)=>{let e=n.length-1,s=[],r,i=t===2?"<svg>":t===3?"<math>":"",o=ne;for(let l=0;l<e;l++){let a=n[l],d,u,g=-1,p=0;for(;p<a.length&&(o.lastIndex=p,u=o.exec(a),u!==null);)p=o.lastIndex,o===ne?u[1]==="!--"?o=xt:u[1]!==void 0?o=kt:u[2]!==void 0?(Lt.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=j):u[3]!==void 0&&(o=j):o===j?u[0]===">"?(o=r??ne,g=-1):u[1]===void 0?g=-2:(g=o.lastIndex-u[2].length,d=u[1],o=u[3]===void 0?j:u[3]==='"'?St:wt):o===St||o===wt?o=j:o===xt||o===kt?o=ne:(o=j,r=void 0);let y=o===j&&n[l+1].startsWith("/>")?" ":"";i+=o===ne?a+ks:g>=0?(s.push(d),a.slice(0,g)+Et+a.slice(g)+K+y):a+K+(g===-2?l:y)}return[Pt(n,i+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},ae=class n{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,o=0,l=t.length-1,a=this.parts,[d,u]=Ss(t,e);if(this.el=n.createElement(d,s),B.currentNode=this.el.content,e===2||e===3){let g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(r=B.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(let g of r.getAttributeNames())if(g.endsWith(Et)){let p=u[o++],y=r.getAttribute(g).split(K),L=/([.?@])?(.*)/.exec(p);a.push({type:1,index:i,name:L[2],strings:y,ctor:L[1]==="."?Me:L[1]==="?"?Re:L[1]==="@"?He:Y}),r.removeAttribute(g)}else g.startsWith(K)&&(a.push({type:6,index:i}),r.removeAttribute(g));if(Lt.test(r.tagName)){let g=r.textContent.split(K),p=g.length-1;if(p>0){r.textContent=ve?ve.emptyScript:"";for(let y=0;y<p;y++)r.append(g[y],ie()),B.nextNode(),a.push({type:2,index:++i});r.append(g[p],ie())}}}else if(r.nodeType===8)if(r.data===Ct)a.push({type:2,index:i});else{let g=-1;for(;(g=r.data.indexOf(K,g+1))!==-1;)a.push({type:7,index:i}),g+=K.length-1}i++}}static createElement(t,e){let s=W.createElement("template");return s.innerHTML=t,s}};function G(n,t,e=n,s){if(t===q)return t;let r=s!==void 0?e._$Co?.[s]:e._$Cl,i=oe(t)?void 0:t._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(n),r._$AT(n,e,s)),s!==void 0?(e._$Co??=[])[s]=r:e._$Cl=r),r!==void 0&&(t=G(n,r._$AS(n,t.values),r,s)),t}var Oe=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??W).importNode(e,!0);B.currentNode=r;let i=B.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new le(i,i.nextSibling,this,t):a.type===1?d=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(d=new ze(i,this,t)),this._$AV.push(d),a=s[++l]}o!==a?.index&&(i=B.nextNode(),o++)}return B.currentNode=W,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},le=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),oe(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==q&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ws(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&oe(this._$AH)?this._$AA.nextSibling.data=t:this.T(W.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=ae.createElement(Pt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{let i=new Oe(r,this),o=i.u(this.options);i.p(e),this.T(o),this._$AH=i}}_$AC(t){let e=At.get(t.strings);return e===void 0&&At.set(t.strings,e=new ae(t)),e}k(t){Ke(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let i of t)r===e.length?e.push(s=new n(this.O(ie()),this.O(ie()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=yt(t).nextSibling;yt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Y=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=m}_$AI(t,e=this,s,r){let i=this.strings,o=!1;if(i===void 0)t=G(this,t,e,0),o=!oe(t)||t!==this._$AH&&t!==q,o&&(this._$AH=t);else{let l=t,a,d;for(t=i[0],a=0;a<i.length-1;a++)d=G(this,l[s+a],e,a),d===q&&(d=this._$AH[a]),o||=!oe(d)||d!==this._$AH[a],d===m?t=m:t!==m&&(t+=(d??"")+i[a+1]),this._$AH[a]=d}o&&!r&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Me=class extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}},Re=class extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}},He=class extends Y{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??m)===q)return;let s=this._$AH,r=t===m&&s!==m||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==m&&(s===m||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ze=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}};var As=Fe.litHtmlPolyfillSupport;As?.(ae,le),(Fe.litHtmlVersions??=[]).push("3.3.3");var Dt=(n,t,e)=>{let s=e?.renderBefore??t,r=s._$litPart$;if(r===void 0){let i=e?.renderBefore??null;s._$litPart$=r=new le(t.insertBefore(ie(),i),i,void 0,e??{})}return r._$AI(n),r};var Ue=globalThis,w=class extends O{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Dt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};w._$litElement$=!0,w.finalized=!0,Ue.litElementHydrateSupport?.({LitElement:w});var Es=Ue.litElementPolyfillSupport;Es?.({LitElement:w});(Ue.litElementVersions??=[]).push("4.2.2");var M=(n,t,e={})=>n.connection.sendMessagePromise({type:`charge_board/${t}`,...e}),U=n=>M(n,"overview"),X=(n,t={})=>M(n,"sessions",{...t}),Tt=(n,t)=>M(n,"session",{session_id:t}),Ot=(n,t,e)=>M(n,"set_vehicle",{session_id:t,vehicle_id:e}),Mt=(n,t)=>M(n,"delete",{session_id:t}),Ve=(n,t,e)=>M(n,"merge",{session_id:t,other_id:e}),Rt=(n,t,e)=>M(n,"split",{session_id:t,at:e}),Ht=(n,t,e)=>M(n,"stats",{year:t,...e&&{vehicle_id:e}}),zt=(n,t)=>M(n,"vehicle",{vehicle_id:t});async function Ft(n,t,e,s){return((await n.connection.sendMessagePromise({type:"recorder/statistics_during_period",start_time:new Date(e*1e3).toISOString(),end_time:new Date(s*1e3).toISOString(),statistic_ids:[t],period:"hour",types:["mean"]}))[t]??[]).filter(i=>i.mean!=null).map(i=>({t:(typeof i.start=="number"?i.start:Date.parse(i.start))/1e3,v:i.mean}))}var Kt=(n,t)=>n.connection.subscribeMessage(t,{type:"charge_board/subscribe"});var Cs={title:"EVChargeData",tab_overview:"Aper\xE7u",tab_sessions:"Sessions",loading:"Chargement\u2026",error:"Impossible de charger les donn\xE9es",not_loaded:"EVChargeData n'est pas charg\xE9",no_chargers:"Aucun chargeur configur\xE9. Ajoutez-en un dans les param\xE8tres de l'int\xE9gration EVChargeData.",charging:"En charge",plugged:"Branch\xE9",free:"Libre",power:"puissance",session:"session",cost:"co\xFBt",end:"fin estim\xE9e",end_short:"fin {time}",plugged_since:"Branch\xE9e depuis {time}",charging_since:"en charge depuis {time}",charge_started:"d\xE9but de charge {time}",off_peak:"{share} heures creuses",last_session:"Derni\xE8re session : {summary}",no_session:"Aucune session enregistr\xE9e",no_vehicle:"aucun v\xE9hicule",menu:"Menu",close:"Fermer",all_vehicles:"Tous les v\xE9hicules",all_chargers:"Tous les chargeurs",month:"Mois",sessions_count:"{n} sessions",off_peak_short:"{share} HC",col_start:"D\xE9but",col_end:"Fin",col_vehicle:"V\xE9hicule",col_battery:"Batterie",col_kwh:"kWh",col_duration:"Dur\xE9e de charge",col_cost:"Co\xFBt",edited:"modifi\xE9e",estimated_note:"* co\xFBt estim\xE9",unpriced_note:"\u2265 : {n} session(s) sans prix",no_sessions:"Aucune session pour ces filtres",back:"Retour",session_of:"Session du {day}",energy:"\xE9nergie",battery:"batterie",average:"moyenne",chart_hint:"Touchez le graphique pour choisir o\xF9 couper la session.",plugged_at:"Branch\xE9e",charge:"Charge",unplugged_at:"D\xE9branch\xE9e",off_peak_slice:"Heures creuses",peak_slice:"Heures pleines",base:"Base",price_slice:"{price} /kWh",unknown_price:"Prix inconnu",charging_time:"Temps de charge",plugged_time:"{time} branch\xE9e",vehicle:"V\xE9hicule",delete:"Supprimer",merge_prev:"Fusionner avec la pr\xE9c\xE9dente",merge_next:"Fusionner avec la suivante",split:"Couper",confirm_delete:"Supprimer d\xE9finitivement cette session ?",confirm_split:"Couper la session \xE0 {time} ?",confirm:"Confirmer",cancel:"Annuler",in_progress_note:"Session en cours : corrections impossibles.",err_invalid:"Correction refus\xE9e : op\xE9ration invalide pour cette session.",err_in_progress:"Correction refus\xE9e : la session est encore en cours.",err_not_found:"Cette session n'existe plus.",tab_vehicles:"V\xE9hicules",tab_stats:"Statistiques",year:"Ann\xE9e",current_month:"{month} (en cours)",vs_prev:"vs mois pr\xE9c\xE9dent",last_30_days:"30 derniers jours",vs_prev_30:"vs 30 jours pr\xE9c\xE9dents",sessions_n:"{n} sessions",off_peak_label:"heures creuses",per_100km:"aux 100 km",km_n:"{km} km",vs_petrol:"vs essence",petrol_ref:"{l100} L/100 \xB7 {price}/L",cost_by_month:"Co\xFBt par mois",col_month:"Mois",col_sessions:"Sessions",col_hc:"HC",col_km:"km",col_per_100:"\u20AC/100 km",col_vs_petrol:"vs essence",col_kwh_100:"kWh/100 km",total_year:"Total {year}",km_note:"* km partiels : le compteur n'est suivi que depuis une partie du mois.",stats_settings_note:"Kilom\xE9trage et consommation essence de r\xE9f\xE9rence dans la fiche du v\xE9hicule ; prix de l'essence et prix de remboursement dans les options de EVChargeData.",no_vehicles:"Aucun v\xE9hicule configur\xE9.",battery_now:"batterie",target_n:"objectif {n} %",consumption_30d:"aux 100 km (30 j)",odometer:"compteur",autonomy:"autonomie estim\xE9e",battery_30d:"Batterie sur 30 jours",recharges:"recharges",consumption_by_month:"Consommation par mois (\xE9nergie recharg\xE9e \xF7 km)",consumption_since:"Depuis la derni\xE8re recharge : {value} kWh/100 km (c\xF4t\xE9 batterie)",configuration:"Configuration",edit:"Modifier",cfg_soc_entity:"Batterie",cfg_target:"Objectif",cfg_odometer_entity:"Kilom\xE9trage",cfg_fuel_price:"Prix de l'essence",cfg_fuel_l100:"Essence de r\xE9f\xE9rence",cfg_capacity:"Capacit\xE9",target_vehicle:"fix\xE9 par le v\xE9hicule",target_home:"maison : EVChargeData coupe la charge",cut_ignored:"Objectif maison sans effet : aucun chargeur n'a \xE0 la fois une entit\xE9 de branchement et un interrupteur.",fixed_value:"valeur fixe",col_reimbursement:"Remboursement",col_export:"Export",export_reimbursement:"PDF employeur",export_cost:"PDF propri\xE9taire",pdf_title_reimbursement:"Remboursement de la recharge",pdf_title_cost:"Relev\xE9 de la recharge",pdf_name:"Nom",pdf_plate:"Immatriculation",pdf_vehicle:"V\xE9hicule",pdf_charger:"Chargeur",pdf_period:"P\xE9riode",pdf_rate:"Taux de remboursement",pdf_rate_value:"{price} par kWh",pdf_created:"\xC9tabli le",col_nr:"N\xB0",col_date:"Date",col_price:"Prix/kWh",col_amount:"Montant",pdf_total:"Total",pdf_note_reimbursement:"Montant par session : \xE9nergie recharg\xE9e \xD7 taux de remboursement. \xC9nergie mesur\xE9e au chargeur, enregistr\xE9e par Home Assistant.",pdf_note_cost:"Co\xFBt selon le prix de l'\xE9lectricit\xE9 enregistr\xE9 dans Home Assistant ; prix/kWh moyen de chaque session.",pdf_unpriced:"{n} session(s) sans prix, non comprise(s) dans le total.",pdf_page:"Page {n} sur {total}",pdf_no_sessions:"Aucune session ce mois-ci.",export_failed:"Impossible de cr\xE9er le PDF."},Ls={title:"EVChargeData",tab_overview:"Overview",tab_sessions:"Sessions",loading:"Loading\u2026",error:"Could not load the data",not_loaded:"EVChargeData is not loaded",no_chargers:"No charger configured. Add one in the EVChargeData integration settings.",charging:"Charging",plugged:"Plugged in",free:"Free",power:"power",session:"session",cost:"cost",end:"estimated end",end_short:"end {time}",plugged_since:"Plugged in since {time}",charging_since:"charging since {time}",charge_started:"charge started {time}",off_peak:"{share} off-peak",last_session:"Last session: {summary}",no_session:"No session recorded",no_vehicle:"no vehicle",menu:"Menu",close:"Close",all_vehicles:"All vehicles",all_chargers:"All chargers",month:"Month",sessions_count:"{n} sessions",off_peak_short:"{share} off-peak",col_start:"Start",col_end:"End",col_vehicle:"Vehicle",col_battery:"Battery",col_kwh:"kWh",col_duration:"Charging time",col_cost:"Cost",edited:"edited",estimated_note:"* estimated cost",unpriced_note:"\u2265: {n} session(s) without a price",no_sessions:"No session for these filters",back:"Back",session_of:"Session of {day}",energy:"energy",battery:"battery",average:"average",chart_hint:"Tap the chart to choose where to split the session.",plugged_at:"Plugged in",charge:"Charge",unplugged_at:"Unplugged",off_peak_slice:"Off-peak",peak_slice:"Peak",base:"Base",price_slice:"{price} /kWh",unknown_price:"Unknown price",charging_time:"Charging time",plugged_time:"{time} plugged in",vehicle:"Vehicle",delete:"Delete",merge_prev:"Merge with previous",merge_next:"Merge with next",split:"Split",confirm_delete:"Delete this session permanently?",confirm_split:"Split the session at {time}?",confirm:"Confirm",cancel:"Cancel",in_progress_note:"Session in progress: no corrections.",err_invalid:"Correction refused: invalid operation for this session.",err_in_progress:"Correction refused: the session is still in progress.",err_not_found:"This session no longer exists.",tab_vehicles:"Vehicles",tab_stats:"Statistics",year:"Year",current_month:"{month} (in progress)",vs_prev:"vs previous month",last_30_days:"Last 30 days",vs_prev_30:"vs previous 30 days",sessions_n:"{n} sessions",off_peak_label:"off-peak",per_100km:"per 100 km",km_n:"{km} km",vs_petrol:"vs petrol",petrol_ref:"{l100} L/100 \xB7 {price}/L",cost_by_month:"Cost per month",col_month:"Month",col_sessions:"Sessions",col_hc:"Off-peak",col_km:"km",col_per_100:"/100 km",col_vs_petrol:"vs petrol",col_kwh_100:"kWh/100 km",total_year:"Total {year}",km_note:"* partial km: the odometer is tracked for part of the month only.",stats_settings_note:"Odometer and reference petrol consumption in the vehicle settings; petrol price and reimbursement price in the EVChargeData options.",no_vehicles:"No vehicle configured.",battery_now:"battery",target_n:"target {n}%",consumption_30d:"per 100 km (30 d)",odometer:"odometer",autonomy:"estimated range",battery_30d:"Battery over 30 days",recharges:"charges",consumption_by_month:"Consumption per month (energy charged \xF7 km)",consumption_since:"Since the last charge: {value} kWh/100 km (battery side)",configuration:"Settings",edit:"Edit",cfg_soc_entity:"Battery",cfg_target:"Target",cfg_odometer_entity:"Odometer",cfg_fuel_price:"Petrol price",cfg_fuel_l100:"Reference petrol car",cfg_capacity:"Capacity",target_vehicle:"set by the vehicle",target_home:"home: EVChargeData stops the charge",cut_ignored:"Home target has no effect: no charger has both a plug entity and a switch.",fixed_value:"fixed value",col_reimbursement:"Reimbursement",col_export:"Export",export_reimbursement:"Employer PDF",export_cost:"Landlord PDF",pdf_title_reimbursement:"Charging reimbursement",pdf_title_cost:"Charging cost statement",pdf_name:"Name",pdf_plate:"License plate",pdf_vehicle:"Vehicle",pdf_charger:"Charger",pdf_period:"Period",pdf_rate:"Reimbursement rate",pdf_rate_value:"{price} per kWh",pdf_created:"Created on",col_nr:"No.",col_date:"Date",col_price:"Price/kWh",col_amount:"Amount",pdf_total:"Total",pdf_note_reimbursement:"Amount per session: energy charged \xD7 reimbursement rate. Energy measured at the charger, recorded by Home Assistant.",pdf_note_cost:"Cost at the electricity price recorded in Home Assistant; price/kWh is each session's average.",pdf_unpriced:"{n} session(s) without a price, not included in the total.",pdf_page:"Page {n} of {total}",pdf_no_sessions:"No sessions this month.",export_failed:"Could not create the PDF."},Ps={title:"EVChargeData",tab_overview:"\xDCbersicht",tab_sessions:"Ladevorg\xE4nge",loading:"Wird geladen\u2026",error:"Daten konnten nicht geladen werden",not_loaded:"EVChargeData ist nicht geladen",no_chargers:"Kein Ladepunkt eingerichtet. F\xFCge einen in den Einstellungen der Integration EVChargeData hinzu.",charging:"L\xE4dt",plugged:"Eingesteckt",free:"Frei",power:"Leistung",session:"Ladevorgang",cost:"Kosten",end:"voraussichtliches Ende",end_short:"Ende {time}",plugged_since:"Eingesteckt seit {time}",charging_since:"l\xE4dt seit {time}",charge_started:"Ladebeginn {time}",off_peak:"{share} Nebenzeit",last_session:"Letzter Ladevorgang: {summary}",no_session:"Kein Ladevorgang aufgezeichnet",no_vehicle:"kein Fahrzeug",menu:"Men\xFC",close:"Schlie\xDFen",all_vehicles:"Alle Fahrzeuge",all_chargers:"Alle Ladepunkte",month:"Monat",sessions_count:"{n} Ladevorg\xE4nge",off_peak_short:"{share} NT",col_start:"Beginn",col_end:"Ende",col_vehicle:"Fahrzeug",col_battery:"Akku",col_kwh:"kWh",col_duration:"Ladedauer",col_cost:"Kosten",edited:"bearbeitet",estimated_note:"* gesch\xE4tzte Kosten",unpriced_note:"\u2265: {n} Ladevorgang/-vorg\xE4nge ohne Preis",no_sessions:"Keine Ladevorg\xE4nge f\xFCr diese Filter",back:"Zur\xFCck",session_of:"Ladevorgang vom {day}",energy:"Energie",battery:"Akku",average:"Durchschnitt",chart_hint:"Tippe in die Grafik, um zu w\xE4hlen, wo der Ladevorgang geteilt wird.",plugged_at:"Eingesteckt",charge:"Laden",unplugged_at:"Ausgesteckt",off_peak_slice:"Nebenzeit",peak_slice:"Hauptzeit",base:"Einheitstarif",price_slice:"{price} /kWh",unknown_price:"Preis unbekannt",charging_time:"Ladedauer",plugged_time:"{time} eingesteckt",vehicle:"Fahrzeug",delete:"L\xF6schen",merge_prev:"Mit vorherigem zusammenf\xFChren",merge_next:"Mit n\xE4chstem zusammenf\xFChren",split:"Teilen",confirm_delete:"Diesen Ladevorgang endg\xFCltig l\xF6schen?",confirm_split:"Ladevorgang um {time} teilen?",confirm:"Best\xE4tigen",cancel:"Abbrechen",in_progress_note:"Ladevorgang l\xE4uft: keine Korrekturen m\xF6glich.",err_invalid:"Korrektur abgelehnt: f\xFCr diesen Ladevorgang nicht m\xF6glich.",err_in_progress:"Korrektur abgelehnt: Der Ladevorgang l\xE4uft noch.",err_not_found:"Diesen Ladevorgang gibt es nicht mehr.",tab_vehicles:"Fahrzeuge",tab_stats:"Statistik",year:"Jahr",current_month:"{month} (laufend)",vs_prev:"gg\xFC. Vormonat",last_30_days:"Letzte 30 Tage",vs_prev_30:"gg\xFC. den 30 Tagen davor",sessions_n:"{n} Ladevorg\xE4nge",off_peak_label:"Nebenzeit",per_100km:"pro 100 km",km_n:"{km} km",vs_petrol:"gg\xFC. Benziner",petrol_ref:"{l100} L/100 \xB7 {price}/L",cost_by_month:"Kosten pro Monat",col_month:"Monat",col_sessions:"Ladevorg\xE4nge",col_hc:"Nebenzeit",col_km:"km",col_per_100:"/100 km",col_vs_petrol:"gg\xFC. Benziner",col_kwh_100:"kWh/100 km",total_year:"Summe {year}",km_note:"* km unvollst\xE4ndig: Der Kilometerstand wird erst seit einem Teil des Monats erfasst.",stats_settings_note:"Kilometerstand und Vergleichsverbrauch in den Fahrzeugeinstellungen; Benzinpreis und Erstattungspreis in den Optionen von EVChargeData.",no_vehicles:"Kein Fahrzeug eingerichtet.",battery_now:"Akku",target_n:"Ziel {n} %",consumption_30d:"pro 100 km (30 T.)",odometer:"Kilometerstand",autonomy:"gesch\xE4tzte Reichweite",battery_30d:"Akku \xFCber 30 Tage",recharges:"Ladevorg\xE4nge",consumption_by_month:"Verbrauch pro Monat (geladene Energie \xF7 km)",consumption_since:"Seit dem letzten Laden: {value} kWh/100 km (akkuseitig)",configuration:"Einstellungen",edit:"Bearbeiten",cfg_soc_entity:"Akku",cfg_target:"Ziel",cfg_odometer_entity:"Kilometerstand",cfg_fuel_price:"Benzinpreis",cfg_fuel_l100:"Vergleichs-Benziner",cfg_capacity:"Kapazit\xE4t",target_vehicle:"vom Fahrzeug festgelegt",target_home:"Zuhause: EVChargeData stoppt das Laden",cut_ignored:"Ziel \u201EZuhause\u201C ohne Wirkung: Kein Ladepunkt hat sowohl eine Stecker-Entit\xE4t als auch einen Schalter.",fixed_value:"fester Wert",col_reimbursement:"Erstattung",col_export:"Export",export_reimbursement:"PDF Arbeitgeber",export_cost:"PDF Vermieter",pdf_title_reimbursement:"Ladestrom-Erstattung",pdf_title_cost:"Ladestrom-Abrechnung",pdf_name:"Name",pdf_plate:"Kennzeichen",pdf_vehicle:"Fahrzeug",pdf_charger:"Ladepunkt",pdf_period:"Zeitraum",pdf_rate:"Erstattungssatz",pdf_rate_value:"{price} pro kWh",pdf_created:"Erstellt am",col_nr:"Nr.",col_date:"Datum",col_price:"Preis/kWh",col_amount:"Betrag",pdf_total:"Summe",pdf_note_reimbursement:"Betrag je Ladevorgang: geladene Energie \xD7 Erstattungssatz. Energie gemessen am Ladepunkt, aufgezeichnet mit Home Assistant.",pdf_note_cost:"Kosten nach dem in Home Assistant erfassten Strompreis; Preis/kWh als Durchschnitt je Ladevorgang.",pdf_unpriced:"{n} Ladevorgang/-vorg\xE4nge ohne Preis, nicht in der Summe enthalten.",pdf_page:"Seite {n} von {total}",pdf_no_sessions:"Keine Ladevorg\xE4nge in diesem Monat.",export_failed:"PDF konnte nicht erstellt werden."},Ds={fr:Cs,en:Ls,de:Ps},E=n=>n.language?.startsWith("fr")?"fr":n.language?.startsWith("de")?"de":"en",x=n=>n.locale?.language??n.language??"en";function C(n,t,e={}){return Ds[n][t].replace(/\{(\w+)\}/g,(s,r)=>e[r]??"")}function T(n){let t=n?.code;return t==="not_loaded"?"not_loaded":t==="invalid"||t==="in_progress"||t==="not_found"?`err_${t}`:"error"}var Ie=n=>n.replace(/[  ]/g," "),Nt=(n,t,e)=>Ie(n.toLocaleString(t,{minimumFractionDigits:e,maximumFractionDigits:e}));function D(n,t){return n==null?"\u2014":`${Nt(n,t,1)} kWh`}function J(n,t){return n==null?"\u2014":`${Nt(n/1e3,t,1)} kW`}function $(n,t,e){return n==null?"\u2014":Ie(new Intl.NumberFormat(e,{style:"currency",currency:t}).format(n))}function ce(n,t){let e=Math.round(n/60),s=Math.floor(e/60),r=e%60;if(s===0)return`${r} min`;let i=String(r).padStart(2,"0");return t==="fr"?`${s} h ${i}`:`${s} h ${i} min`}function Q(n,t){if(n==null&&t==null)return"\u2014";let e=s=>s==null?"\u2014":String(Math.round(s));return`${e(n)} \u2192 ${e(t)} %`}function V(n,t){return Ie(n.toLocaleString(t,{style:"percent",maximumFractionDigits:0}))}var be=(n,t,e,s)=>new Intl.DateTimeFormat(t,{timeZone:e,...s}).format(new Date(n*1e3));function R(n,t,e){return be(n,t,e,{hour:"2-digit",minute:"2-digit"})}function P(n,t,e){return be(n,t,e,{day:"2-digit",month:"2-digit"})}function he(n,t,e,s=Date.now()/1e3){let r=R(n,t,e),i=P(n,t,e);return i===P(s,t,e)?r:`${i} ${r}`}function ye(n,t,e){return`${be(n,t,e,{weekday:"short"})} ${P(n,t,e)} ${R(n,t,e)}`}function de(n,t){return be(n,"en-CA",t,{year:"numeric",month:"2-digit"})}function Ut(n,t){return`${n<0?"\u25BC":"\u25B2"} ${V(Math.abs(n),t)}`}var Vt={charging:"var(--success-color, #43a047)",plugged:"var(--info-color, #039be5)",free:"var(--disabled-text-color, #9e9e9e)"},je=class extends w{constructor(){super(...arguments);this.version=0;this._req=0}static{this.properties={hass:{attribute:!1},version:{type:Number},_data:{state:!0},_error:{state:!0},_open:{state:!0}}}updated(e){e.has("version")&&this.hass&&this._fetch(),e.has("_open")&&this._open&&this.renderRoot.querySelector("dialog")?.showModal()}async _fetch(){let e=++this._req;try{let s=await U(this.hass);if(e!==this._req)return;this._data=s,this._error=void 0}catch(s){e===this._req&&(this._error=T(s))}}_t(e,s){return C(E(this.hass),e,s)}render(){if(this._error)return c`<p class="message">${this._t(this._error)}</p>`;if(!this._data)return c`<p class="message">${this._t("loading")}</p>`;let{chargers:e,style:s}=this._data;if(!e.length)return c`<p class="message">${this._t("no_chargers")}</p>`;if(s!=="compact")return c`<div class="grid">${e.map(i=>this._card(i))}</div>`;let r=e.find(i=>i.id===this._open);return c`
      <div class="grid compact">${e.map(i=>this._tile(i))}</div>
      ${r?c`<dialog @close=${()=>this._open=void 0} @click=${this._backdropClose}>
            <div class="dialog-bar">
              <button aria-label=${this._t("close")} @click=${this._close}>×</button>
            </div>
            ${this._card(r)}
          </dialog>`:m}
    `}_backdropClose(e){e.target===e.currentTarget&&this._close()}_close(){this.renderRoot.querySelector("dialog")?.close()}get _fmt(){let e=x(this.hass),s=this.hass.config.time_zone;return{locale:e,when:r=>he(r,e,s),time:r=>R(r,e,s),day:r=>P(r,e,s),cost:r=>$(r,this._data.currency,e)}}_stateLabel(e){return this._t(e.state)}_idle(e){return e.state==="free"&&!e.session}_card(e){let s=this._fmt,r=e.session,i=e.vehicle?.soc??null,o=r?[r.plugged_at!=null?this._t("plugged_since",{time:s.when(r.plugged_at)}):null,r.charge_start!=null?this._t(e.state==="charging"?"charging_since":"charge_started",{time:s.when(r.charge_start)}):null,r.has_off_peak_source&&r.energy_kwh>0?this._t("off_peak",{share:V(r.off_peak.kwh/r.energy_kwh,s.locale)}):null].filter(Boolean):[];return c`
      <ha-card class="card" style="--state:${Vt[e.state]}">
        <div class="head">
          <span class="name"><ha-icon icon="mdi:ev-station"></ha-icon>${e.name}</span>
          <span class="state">${this._stateLabel(e)}</span>
        </div>
        ${this._idle(e)?c`<div class="muted">${this._lastSession(e)}</div>`:c`
              <div class="vehicle">
                <ha-icon icon="mdi:car-electric"></ha-icon>
                <b>${e.vehicle?.name??"\u2014"}</b> ·
                ${i==null?"\u2014":Q(i,e.vehicle?.target)}
              </div>
              ${i==null?m:c`<div class="bar"><div style="width:${Math.min(100,Math.max(0,i))}%"></div></div>`}
              <div class="stats">
                ${this._stat(J(e.power_w,s.locale),"power")}
                ${this._stat(D(r?.energy_kwh,s.locale),"session")}
                ${this._stat(s.cost(r?.cost),"cost")}
                ${e.estimated_end==null?m:this._stat(s.time(e.estimated_end),"end")}
              </div>
              ${o.length?c`<div class="muted">${o.join(" \xB7 ")}</div>`:m}
            `}
      </ha-card>
    `}_stat(e,s){return c`<div><div class="value">${e}</div><div class="muted">${this._t(s)}</div></div>`}_lastSession(e){let s=e.last_session;if(!s)return this._t("no_session");let r=this._fmt,i=s.charge_start??s.plugged_at,o=[s.vehicle_name??"\u2014",i!=null?r.day(i):null,D(s.energy_kwh,r.locale),r.cost(s.cost)].filter(Boolean);return this._t("last_session",{summary:o.join(" \xB7 ")})}_tile(e){let s=this._fmt,r=this._idle(e)?null:e.vehicle?.soc??null,i=r==null?"0":String(Math.min(100,Math.max(0,r))),o=this._idle(e)?this._t("free").toLowerCase():r==null?"\u2014":`${Math.round(r)} %`,l=[J(e.power_w,s.locale),s.cost(e.session?.cost),e.estimated_end==null?null:this._t("end_short",{time:s.time(e.estimated_end)})].filter(Boolean);return c`
      <ha-card class="tile" style="--state:${Vt[e.state]}">
        <button @click=${()=>this._open=e.id}>
          <div class="gauge" style="--soc:${i}%"><span>${o}</span></div>
          <b>${e.name}</b>
          ${this._idle(e)?c`<div class="muted">${this._t("no_vehicle")}</div>`:c`
                <div>${e.vehicle?.name??"\u2014"} · ${this._stateLabel(e).toLowerCase()}</div>
                <div class="muted">${l.join(" \xB7 ")}</div>
              `}
        </button>
      </ha-card>
    `}static{this.styles=A`
    :host {
      display: block;
      padding: 16px;
    }
    .message {
      color: var(--secondary-text-color);
      text-align: center;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 16px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .grid.compact {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
    @media (max-width: 600px) {
      :host {
        padding: 8px;
      }
      .grid,
      .grid.compact {
        grid-template-columns: 1fr;
        gap: 8px;
      }
    }
    ha-card {
      display: block;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      border-radius: var(--ha-card-border-radius, 12px);
      box-shadow: var(--ha-card-box-shadow, none);
      border: 1px solid var(--divider-color, #e0e0e0);
    }
    .card {
      padding: 16px;
      border-left: 5px solid var(--state);
    }
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      font-weight: 500;
    }
    .name,
    .vehicle {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .state {
      color: var(--state);
      white-space: nowrap;
    }
    .state::before {
      content: "● ";
    }
    .vehicle {
      margin: 12px 0 6px;
    }
    ha-icon {
      --mdc-icon-size: 20px;
      color: var(--secondary-text-color);
    }
    .bar {
      height: 10px;
      border-radius: 5px;
      background: var(--divider-color, #e0e0e0);
      overflow: hidden;
    }
    .bar > div {
      height: 100%;
      background: var(--state);
    }
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
      gap: 8px;
      margin: 12px 0 8px;
      text-align: center;
    }
    .value {
      font-size: 1.15em;
      font-weight: 600;
      white-space: nowrap;
    }
    .muted {
      color: var(--secondary-text-color);
      font-size: 0.9em;
      margin-top: 4px;
    }
    .tile > button {
      all: unset;
      box-sizing: border-box;
      display: block;
      width: 100%;
      padding: 16px;
      text-align: center;
      cursor: pointer;
      border-radius: inherit;
    }
    .tile > button:focus-visible {
      outline: 2px solid var(--primary-color);
    }
    .gauge {
      width: 72px;
      height: 72px;
      margin: 0 auto 8px;
      border-radius: 50%;
      background: conic-gradient(var(--state) var(--soc), var(--divider-color, #e0e0e0) 0);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .gauge span {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: var(--card-background-color, #fff);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
    }
    dialog {
      border: none;
      padding: 0;
      width: min(480px, calc(100vw - 32px));
      background: transparent;
      color: var(--primary-text-color);
    }
    dialog::backdrop {
      background: rgba(0, 0, 0, 0.5);
    }
    .dialog-bar {
      text-align: right;
    }
    .dialog-bar button {
      all: unset;
      cursor: pointer;
      font-size: 28px;
      line-height: 1;
      padding: 4px 8px;
      color: #fff;
    }
  `}};customElements.define("charge-board-overview",je);var Ts={bleu:{hc:"#88c2e3",hp:"#1999e2",rank:0},blanc:{hc:"#8f8f8f",hp:"#e0e0e0",rank:1},rouge:{hc:"#e38888",hp:"#e42323",rank:2}},Os={blue:"bleu",white:"blanc",red:"rouge"},Be=n=>{let t=n.lastIndexOf("|");return{day:n.slice(0,t),part:n.slice(t+1)}},It=n=>Ts[Os[n.toLowerCase()]??n.toLowerCase()];function Ms(n){let t=0;for(let e of n)t=(t*31+e.charCodeAt(0))%360;return t}function We(n){let{day:t,part:e}=Be(n);if(!t)return e==="hc"?"var(--info-color, #3b82f6)":e==="hp"?"var(--warning-color, #f59e0b)":"var(--primary-color, #03a9f4)";let s=It(t);return s?e==="hc"?s.hc:s.hp:`hsl(${Ms(t)} 60% ${e==="hc"?70:42}%)`}function $e(n){let t=e=>{let{day:s,part:r}=Be(e),i=s?It(s):void 0;return[i?i.rank:s?3:4,s,r==="hc"?0:r==="hp"?1:2]};return[...n].sort((e,s)=>{let[r,i,o]=t(e),[l,a,d]=t(s);return r-l||i.localeCompare(a)||o-d})}function jt(n,t){let{day:e,part:s}=Be(n);return e?s?`${e} ${s.toUpperCase()}`:e:t(s==="hc"?"off_peak_slice":s==="hp"?"peak_slice":"base")}function Bt(n,t,e,s){return e+Math.min(Math.max(n,0),t)/t*(s-e)}var Rs=360,Wt=(n,t,e)=>Math.max(Math.min(t+1<n.length?n[t+1].t:e,n[t].t+Rs),n[t].t),I=n=>Math.round(n*10)/10;function qt(n,t,e,s=n[0]?.t??0,r=n[n.length-1]?.t??0){if(!n.length)return"";let i=Math.max(...n.map(u=>u.w),1),o=r-s||1,l=u=>I((u-s)/o*t),a=u=>I(e-Math.max(u,0)/i*e);return n.map((u,g)=>{let p=Wt(n,g,r),y=g+1<n.length?n[g+1].t:r,L=`${g?"L":"M"}${l(u.t)} ${a(u.w)} L${l(p)} ${a(u.w)}`;return p<y?`${L} L${l(p)} ${a(0)} L${l(y)} ${a(0)}`:L}).join(" ")}function Zt(n,t){let e=[];return n.forEach((s,r)=>{if(!s.off_peak)return;let i=Wt(n,r,t),o=e[e.length-1];o&&o.to===s.t?o.to=i:e.push({from:s.t,to:i})}),e}function Gt(n,t){let e=i=>Object.values(i.band_cost).reduce((o,l)=>o+l,0),s=Math.max(...n.map(e),0)||1,r=100/(n.length||1);return n.map((i,o)=>{let l=t,a=$e(Object.keys(i.band_cost).filter(d=>i.band_cost[d]>0)).map(d=>{let u=i.band_cost[d]/s*t;return l-=u,{key:d,y:I(l),h:I(u)}});return{x:I(o*r+r*.15),w:I(r*.7),parts:a}})}function Yt(n,t,e,s,r,i=100){if(!n.length)return"";let o=r-s||1;return n.map((l,a)=>`${a?"L":"M"}${I((l.t-s)/o*t)} ${I(e-l.v/i*e)}`).join(" ")}var xe=600,ue=160,qe=class extends w{constructor(){super(...arguments);this.version=0;this.currency="EUR";this.vehicles=[];this._busy=!1;this._req=0}static{this.properties={hass:{attribute:!1},sessionId:{attribute:!1},version:{type:Number},currency:{attribute:!1},vehicles:{attribute:!1},_s:{state:!0},_prev:{state:!0},_next:{state:!0},_pending:{state:!0},_busy:{state:!0}}}updated(e){e.has("sessionId")&&(this._s=void 0,this._pending=void 0),(e.has("sessionId")||e.has("version"))&&this.hass&&this._fetch()}async _fetch(){let e=++this._req;try{let s=await Tt(this.hass,this.sessionId),{sessions:r}=await X(this.hass,{charger_id:s.charger_id});if(e!==this._req)return;let i=a=>a.charge_start??a.plugged_at??0,o=[...r].sort((a,d)=>i(a)-i(d)),l=o.findIndex(a=>a.id===s.id);this._prev=l>0?o[l-1].id:void 0,this._next=l>=0&&l+1<o.length?o[l+1].id:void 0,this._s=s}catch(s){e===this._req&&this._emit("session-changed",{id:void 0,error:T(s)})}}_emit(e,s){this.dispatchEvent(new CustomEvent(e,{detail:s,bubbles:!0,composed:!0}))}async _run(e){this._pending=void 0,this._busy=!0;try{let{sessions:s}=await e();this._emit("session-changed",{id:s[0]}),s[0]===this.sessionId&&this._fetch()}catch(s){let r=T(s);this._emit("session-changed",{id:r==="err_not_found"?void 0:this.sessionId,error:r}),this._fetch()}finally{this._busy=!1}}_t(e,s){return C(E(this.hass),e,s)}get _range(){let e=this._s,s=e.charge_start??e.curve[0]?.t??0;return{start:s,end:Math.max(e.charge_end??s,s+1)}}_chartClick(e){if(this._s.open)return;let r=e.currentTarget.getBoundingClientRect(),{start:i,end:o}=this._range,l=Math.round(Bt(e.clientX-r.left,r.width,i,o));i<l&&l<o&&(this._pending={kind:"split",at:l})}render(){if(!this._s)return c`<div class="card"><p class="muted">${this._t("loading")}</p></div>`;let e=this._s,s=x(this.hass),r=this.hass.config.time_zone,i=e.charge_start??void 0,o=p=>p==null?"\u2014":he(p,s,r,i),l=p=>$(p,this.currency,s),a=e.charging_s>0?e.energy_kwh*36e5/e.charging_s:null,d=e.plugged_at!=null&&e.unplugged_at!=null?e.unplugged_at-e.plugged_at:null,u=E(this.hass),g=[e.charge_start!=null?this._t("session_of",{day:ye(e.charge_start,s,r)}):null,e.vehicle_name,e.charger_name].filter(Boolean);return c`
      <div class="card">
        <button class="back" @click=${()=>this._emit("back")}>← ${this._t("back")}</button>
        <div class="head">
          <b>${g.join(" \xB7 ")}</b>
          ${e.edited?c`<span class="badge">${this._t("edited")}</span>`:m}
        </div>
        <div class="figures">
          ${this._figure(D(e.energy_kwh,s),"energy")}
          ${this._figure(`${l(e.cost)}${e.estimated?" *":""}`,"cost")}
          ${this._figure(Q(e.soc_start,e.soc_end),"battery")}
          ${this._figure(J(a,s),"average")}
        </div>
        ${this._chart()}
        <table class="facts">
          <tr><td>${this._t("plugged_at")}</td><td>${o(e.plugged_at)}</td></tr>
          <tr><td>${this._t("charge")}</td><td>${o(e.charge_start)} → ${o(e.charge_end)}</td></tr>
          <tr><td>${this._t("unplugged_at")}</td><td>${o(e.unplugged_at)}</td></tr>
          ${this._slices(s).map(([p,y])=>c`<tr><td>${p}</td><td>${D(y.kwh,s)} · ${l(y.cost)}</td></tr>`)}
          <tr>
            <td>${this._t("charging_time")}</td>
            <td>
              ${ce(e.charging_s,u)}
              ${d==null?m:c` / ${this._t("plugged_time",{time:ce(d,u)})}`}
            </td>
          </tr>
        </table>
        ${e.open?c`<p class="muted">${this._t("in_progress_note")}</p>`:this._actions()}
      </div>
    `}_figure(e,s){return c`<div><div class="value">${e}</div><div class="muted">${this._t(s)}</div></div>`}_slices(e){let s=this._s;return s.has_off_peak_source?[[this._t("off_peak_slice"),s.off_peak],[this._t("peak_slice"),s.peak]]:Object.entries(s.by_price).map(([r,i])=>[r==="none"?this._t("unknown_price"):this._t("price_slice",{price:new Intl.NumberFormat(e,{style:"currency",currency:this.currency,maximumFractionDigits:4}).format(Number(r))}),i])}_chart(){let e=this._s,{start:s,end:r}=this._range,i=u=>(u-s)/(r-s)*xe,o=x(this.hass),l=this.hass.config.time_zone,a=Math.max(0,...e.curve.map(u=>u.w)),d=this._pending?.kind==="split"?this._pending.at:void 0;return c`
      <svg
        class="chart ${e.open?"":"clickable"}"
        viewBox="0 0 ${xe} ${ue}"
        preserveAspectRatio="none"
        role="img"
        @click=${this._chartClick}
      >
        ${e.has_off_peak_source?N`<rect class="peak" x="0" y="0" width=${xe} height=${ue}></rect>
              ${Zt(e.curve,r).map(u=>N`<rect class="off-peak" x=${i(u.from)} y="0" width=${i(u.to)-i(u.from)} height=${ue}></rect>`)}`:m}
        <path class="line" d=${qt(e.curve,xe,ue-4,s,r)} transform="translate(0 4)"></path>
        ${d==null?m:N`<line class="cut" x1=${i(d)} x2=${i(d)} y1="0" y2=${ue}></line>`}
      </svg>
      <div class="axis muted">
        <span>${R(s,o,l)}</span>
        <span>${a?`max ${J(a,o)}`:""}</span>
        <span>${R(r,o,l)}</span>
      </div>
      ${e.has_off_peak_source?c`<div class="legend muted">
            <span><i class="off-peak"></i>${this._t("off_peak_slice")}</span>
            <span><i class="peak"></i>${this._t("peak_slice")}</span>
          </div>`:m}
    `}_actions(){let e=this._s,s=e.id,r=this._pending,i=this.hass.config.time_zone,o=(l,a)=>c`
      <div class="confirm">
        <span>${l}</span>
        <button class="primary" ?disabled=${this._busy} @click=${()=>this._run(a)}>${this._t("confirm")}</button>
        <button @click=${()=>this._pending=void 0}>${this._t("cancel")}</button>
      </div>
    `;return c`
      <p class="muted">${this._t("chart_hint")}</p>
      ${r?.kind==="split"?o(this._t("confirm_split",{time:he(r.at,x(this.hass),i,e.charge_start??void 0)}),()=>Rt(this.hass,s,r.at)):m}
      ${r?.kind==="delete"?o(this._t("confirm_delete"),()=>Mt(this.hass,s)):m}
      <div class="actions">
        <label>
          ${this._t("vehicle")}
          <select
            ?disabled=${this._busy}
            @change=${l=>{let a=l.target,d=a.value;a.value=e.vehicle_id??"",d&&d!==e.vehicle_id&&this._run(()=>Ot(this.hass,s,d))}}
          >
            ${e.vehicle_id==null?c`<option value="" selected>${"\u2014"}</option>`:m}
            ${this.vehicles.map(l=>c`<option value=${l.id} .selected=${l.id===e.vehicle_id}>${l.name}</option>`)}
          </select>
        </label>
        <button
          ?disabled=${this._busy||!this._prev}
          @click=${()=>this._run(()=>Ve(this.hass,s,this._prev))}
        >
          ${this._t("merge_prev")}
        </button>
        <button
          ?disabled=${this._busy||!this._next}
          @click=${()=>this._run(()=>Ve(this.hass,s,this._next))}
        >
          ${this._t("merge_next")}
        </button>
        <button class="danger" ?disabled=${this._busy} @click=${()=>this._pending={kind:"delete"}}>
          ${this._t("delete")}
        </button>
      </div>
    `}static{this.styles=A`
    :host {
      display: block;
      --cb-off-peak: rgba(3, 155, 229, 0.15);
      --cb-peak: rgba(255, 166, 0, 0.18);
    }
    .card {
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: var(--ha-card-border-radius, 12px);
      padding: 16px;
    }
    .muted {
      color: var(--secondary-text-color);
      font-size: 0.9em;
    }
    .head {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
    }
    .badge {
      padding: 1px 6px;
      border-radius: 8px;
      font-size: 0.8em;
      background: var(--warning-color, #ffa600);
      color: var(--text-primary-color, #fff);
    }
    .figures {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      text-align: center;
      margin-bottom: 12px;
    }
    .value {
      font-size: 1.1em;
      font-weight: 600;
      white-space: nowrap;
    }
    .chart {
      display: block;
      width: 100%;
      height: 160px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
    }
    .chart.clickable {
      cursor: crosshair;
    }
    .line {
      fill: none;
      stroke: var(--primary-color, #03a9f4);
      stroke-width: 2;
      vector-effect: non-scaling-stroke;
    }
    rect.off-peak,
    i.off-peak {
      fill: var(--cb-off-peak);
      background: var(--cb-off-peak);
    }
    rect.peak,
    i.peak {
      fill: var(--cb-peak);
      background: var(--cb-peak);
    }
    .cut {
      stroke: var(--error-color, #db4437);
      stroke-width: 2;
      stroke-dasharray: 4 3;
      vector-effect: non-scaling-stroke;
    }
    .axis,
    .legend {
      display: flex;
      justify-content: space-between;
      margin-top: 4px;
    }
    .legend {
      justify-content: flex-start;
      gap: 16px;
    }
    .legend i {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 4px;
      vertical-align: middle;
      border: 1px solid var(--divider-color, #e0e0e0);
    }
    .facts {
      width: 100%;
      margin: 12px 0;
      border-collapse: collapse;
    }
    .facts td {
      padding: 4px 0;
    }
    .facts td:first-child {
      color: var(--secondary-text-color);
      padding-right: 12px;
    }
    .actions,
    .confirm {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
    }
    .confirm {
      padding: 8px;
      margin-bottom: 8px;
      border-radius: 8px;
      background: var(--secondary-background-color, #f5f5f5);
    }
    .confirm span {
      flex: 1 1 100%;
    }
    button,
    select {
      font: inherit;
      padding: 6px 12px;
      border-radius: 6px;
      border: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      cursor: pointer;
    }
    select {
      margin-left: 4px;
    }
    button:disabled {
      opacity: 0.5;
      cursor: default;
    }
    button.primary {
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      border-color: transparent;
    }
    button.danger {
      color: var(--error-color, #db4437);
    }
    .back {
      display: none;
      margin-bottom: 8px;
    }
    @media (max-width: 900px) {
      .back {
        display: inline-block;
      }
    }
    @media (max-width: 600px) {
      .figures {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `}};customElements.define("charge-board-session-detail",qe);var Ze=class extends w{constructor(){super(...arguments);this.version=0;this._vehicle="";this._charger="";this._req=0}static{this.properties={hass:{attribute:!1},version:{type:Number},_sessions:{state:!0},_summary:{state:!0},_overview:{state:!0},_error:{state:!0},_message:{state:!0},_vehicle:{state:!0},_charger:{state:!0},_month:{state:!0},_selected:{state:!0}}}willUpdate(){this._month===void 0&&this.hass&&(this._month=de(Date.now()/1e3,this.hass.config.time_zone))}updated(e){["version","_vehicle","_charger","_month"].some(s=>e.has(s))&&this.hass&&this._fetch()}async _fetch(){let e=++this._req,s={...this._vehicle&&{vehicle_id:this._vehicle},...this._charger&&{charger_id:this._charger},...this._month&&{month:this._month}};try{let[r,i]=await Promise.all([X(this.hass,s),U(this.hass)]);if(e!==this._req)return;this._sessions=r.sessions,this._summary=r.summary,this._overview=i,this._error=void 0}catch(r){e===this._req&&(this._error=T(r))}}_t(e,s){return C(E(this.hass),e,s)}_changed(e){this._selected=e.detail.id,this._message=e.detail.error,this._fetch()}render(){if(this._error&&!this._sessions)return c`<p class="message">${this._t(this._error)}</p>`;if(!this._sessions||!this._overview)return c`<p class="message">${this._t("loading")}</p>`;let e=this._overview,s=(r,i,o,l)=>c`<select @change=${a=>l(a.target.value)}>
        <option value="" ?selected=${!r}>${this._t(i)}</option>
        ${o.map(a=>c`<option value=${a.id} ?selected=${a.id===r}>${a.name}</option>`)}
      </select>`;return c`
      <div class="filters">
        ${s(this._vehicle,"all_vehicles",e.vehicles,r=>this._vehicle=r)}
        ${s(this._charger,"all_chargers",e.chargers,r=>this._charger=r)}
        <input
          type="month"
          aria-label=${this._t("month")}
          .value=${this._month??""}
          @change=${r=>this._month=r.target.value}
        />
      </div>
      ${this._error?c`<p class="error">${this._t(this._error)}</p>`:m}
      ${this._message?c`<p class="error">${this._t(this._message)}</p>`:m}
      <div class="layout ${this._selected?"has-detail":""}">
        <div class="list">${this._banner()} ${this._table()}</div>
        ${this._selected?c`<charge-board-session-detail
              .hass=${this.hass}
              .sessionId=${this._selected}
              .version=${this.version}
              .currency=${e.currency}
              .vehicles=${e.vehicles}
              @session-changed=${this._changed}
              @back=${()=>this._selected=void 0}
            ></charge-board-session-detail>`:m}
      </div>
    `}_banner(){let e=this._summary,s=x(this.hass),r=$(e.cost,this._overview.currency,s);e.cost!=null&&e.unpriced_count>0&&(r=`\u2265 ${r}`);let o=[this._month?new Date(`${this._month}-15T12:00:00Z`).toLocaleString(s,{month:"long",year:"numeric",timeZone:"UTC"}):null,this._t("sessions_count",{n:String(e.count)}),D(e.energy_kwh,s),c`<b>${r}</b>`,e.off_peak_share==null?"\u2014":this._t("off_peak_short",{share:V(e.off_peak_share,s)})].filter(l=>l!=null);return c`<div class="banner">${o.map((l,a)=>c`${a?" \xB7 ":""}${l}`)}</div>`}_table(){let e=this._sessions;if(!e.length)return c`<p class="message">${this._t("no_sessions")}</p>`;let s=x(this.hass),r=this.hass.config.time_zone,i=a=>a==null?"\u2014":ye(a,s,r),o=["col_start","col_end","col_vehicle","col_battery","col_kwh","col_duration","col_cost"],l=this._summary.unpriced_count;return c`
      <div class="scroll">
        <table>
          <thead>
            <tr>${o.map(a=>c`<th>${this._t(a)}</th>`)}</tr>
          </thead>
          <tbody>
            ${e.map(a=>c`<tr
                class=${a.id===this._selected?"selected":""}
                tabindex="0"
                @click=${()=>this._selected=a.id}
                @keydown=${d=>d.key==="Enter"&&(this._selected=a.id)}
              >
                <td>${i(a.charge_start)}</td>
                <td>${i(a.charge_end)}</td>
                <td>${a.vehicle_name??"\u2014"}</td>
                <td>${Q(a.soc_start,a.soc_end)}</td>
                <td>${a.energy_kwh.toLocaleString(s,{minimumFractionDigits:1,maximumFractionDigits:1})}</td>
                <td>${ce(a.charging_s,E(this.hass))}</td>
                <td>
                  ${$(a.cost,this._overview.currency,s)}${a.estimated?" *":""}
                  ${a.edited?c`<span class="badge">${this._t("edited")}</span>`:m}
                </td>
              </tr>`)}
          </tbody>
        </table>
      </div>
      <div class="note">
        ${this._t("estimated_note")}${l?c` · ${this._t("unpriced_note",{n:String(l)})}`:m}
      </div>
    `}static{this.styles=A`
    :host {
      display: block;
      padding: 16px;
      max-width: 1400px;
      margin: 0 auto;
    }
    .message,
    .note {
      color: var(--secondary-text-color);
    }
    .message {
      text-align: center;
    }
    .note {
      font-size: 0.85em;
      margin-top: 6px;
    }
    .error {
      color: var(--error-color, #db4437);
    }
    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 12px;
    }
    select,
    input {
      font: inherit;
      padding: 6px 8px;
      border-radius: 6px;
      border: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
    }
    .layout {
      display: grid;
      gap: 16px;
      align-items: start;
    }
    .layout.has-detail {
      grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    }
    .banner,
    .scroll {
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: var(--ha-card-border-radius, 12px);
    }
    .banner {
      padding: 12px;
      margin-bottom: 8px;
    }
    .scroll {
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95em;
    }
    th {
      text-align: left;
      color: var(--secondary-text-color);
      font-weight: 500;
    }
    th,
    td {
      padding: 8px;
      white-space: nowrap;
    }
    tbody tr {
      border-top: 1px solid var(--divider-color, #e0e0e0);
      cursor: pointer;
    }
    tbody tr:hover,
    tbody tr.selected {
      background: var(--secondary-background-color, #f5f5f5);
    }
    tbody tr:focus-visible {
      outline: 2px solid var(--primary-color);
    }
    .badge {
      margin-left: 4px;
      padding: 1px 6px;
      border-radius: 8px;
      font-size: 0.8em;
      background: var(--warning-color, #ffa600);
      color: var(--text-primary-color, #fff);
    }
    /* One column: the detail replaces the list (back button in the detail). */
    @media (max-width: 900px) {
      .layout.has-detail {
        grid-template-columns: 1fr;
      }
      .layout.has-detail .list {
        display: none;
      }
    }
    @media (max-width: 600px) {
      :host {
        padding: 8px;
      }
    }
  `}};customElements.define("charge-board-sessions",Ze);var Hs=[278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584,761,556,0,222,556,333,1e3,556,556,333,1e3,667,333,1e3,0,611,0,0,222,222,333,333,350,556,1e3,333,1e3,500,333,944,0,500,667,278,333,556,556,556,556,260,556,333,737,370,556,584,333,737,333,400,584,333,333,333,556,537,278,333,333,365,556,834,834,834,611,667,667,667,667,667,667,1e3,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,500,556,556,556,556,278,278,278,278,556,556,556,556,556,556,556,584,611,556,556,556,556,500,556,500],zs=[278,333,474,556,556,889,722,238,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,333,333,584,584,584,611,975,722,722,722,722,667,611,778,722,278,556,722,611,833,722,778,667,778,722,667,611,722,667,944,667,667,611,333,278,333,584,556,333,556,611,556,611,556,333,611,611,278,278,556,278,889,611,611,611,611,389,556,333,611,556,778,556,556,500,389,280,389,584,761,556,0,278,556,500,1e3,556,556,333,1e3,667,333,1e3,0,611,0,0,278,278,500,500,350,556,1e3,333,1e3,556,333,944,0,500,667,278,333,556,556,556,556,280,556,333,737,370,556,584,333,737,333,400,584,333,333,333,611,556,278,333,333,365,556,834,834,834,611,722,722,722,722,722,722,1e3,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,556,556,556,556,556,278,278,278,278,611,611,611,611,611,611,611,584,611,611,611,611,611,556,611,556],Fs=[8364,0,8218,402,8222,8230,8224,8225,710,8240,352,8249,338,0,381,0,0,8216,8217,8220,8221,8226,8211,8212,732,8482,353,8250,339,0,382,376],Ks=new Set([9,10,13,8199,8201,8239]),Ns=63;function Us(n){if(n>=32&&n<=126||n>=160&&n<=255)return n;if(Ks.has(n))return 32;let t=Fs.indexOf(n);return n>0&&t>=0?128+t:Ns}function Jt(n){return Array.from(n,t=>Us(t.codePointAt(0)))}function ee(n,t="regular",e=10){let s=t==="bold"?zs:Hs;return Jt(n).reduce((r,i)=>r+s[i-32],0)*e/1e3}function Ge(n,t,e="regular",s=10){if(ee(n,e,s)<=t)return n;let r=n;for(;r&&ee(`${r}\u2026`,e,s)>t;)r=r.slice(0,-1);return`${r.trimEnd()}\u2026`}var Qt=n=>n.map(t=>t.toString(16).padStart(2,"0")).join(""),S=n=>String(Math.round(n*100)/100),Xt=n=>{let t=[254,255];for(let e=0;e<n.length;e++)t.push(n.charCodeAt(e)>>8,n.charCodeAt(e)&255);return`<${Qt(t)}>`},ke=class{constructor(t=""){this.title=t;this.width=595.28;this.height=841.89;this.pages=[]}get pageCount(){return this.pages.length}addPage(){this.pages.push([])}ops(t){return this.pages.length||this.addPage(),this.pages[t??this.pages.length-1]}text(t,e,s,r={},i){let{font:o="regular",size:l=10,align:a="left",gray:d=0}=r,u=a==="right"?t-ee(s,o,l):t,g=o==="bold"?"F2":"F1";this.ops(i).push(`BT ${S(d)} g /${g} ${S(l)} Tf ${S(u)} ${S(this.height-e)} Td <${Qt(Jt(s))}> Tj ET`)}line(t,e,s,r,i=.5,o=.6,l){let a=this.height;this.ops(l).push(`${S(o)} G ${S(i)} w ${S(t)} ${S(a-e)} m ${S(s)} ${S(a-r)} l S`)}box(t,e,s,r,i=.93,o){this.ops(o).push(`${S(i)} g ${S(t)} ${S(this.height-e-r)} ${S(s)} ${S(r)} re f`)}output(){this.pages.length||this.addPage();let t=[],e=a=>t.push(a),s=this.pages.length,r=Array.from({length:s},(a,d)=>`${6+2*d} 0 R`).join(" ");e("<< /Type /Catalog /Pages 2 0 R >>"),e(`<< /Type /Pages /Kids [${r}] /Count ${s} >>`),e("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>"),e("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>"),e(`<< /Producer ${Xt("EVChargeData")} /Title ${Xt(this.title)} >>`),this.pages.forEach((a,d)=>{let u=a.join(`
`);e(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${S(this.width)} ${S(this.height)}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${7+2*d} 0 R >>`),e(`<< /Length ${u.length} >>
stream
${u}
endstream`)});let i=`%PDF-1.4
`,o=t.map((a,d)=>{let u=i.length;return i+=`${d+1} 0 obj
${a}
endobj
`,u}),l=i.length;return i+=`xref
0 ${t.length+1}
0000000000 65535 f 
`,i+=o.map(a=>`${String(a).padStart(10,"0")} 00000 n 
`).join(""),i+=`trailer
<< /Size ${t.length+1} /Root 1 0 R /Info 5 0 R >>
startxref
${l}
%%EOF
`,new TextEncoder().encode(i)}};var Ye=n=>n.charge_start??n.plugged_at;function Vs(n,t,e){let r=t.filter(a=>a.energy_kwh>0).sort((a,d)=>(Ye(a)??0)-(Ye(d)??0)).map(a=>{let d={start:Ye(a),end:a.charge_end??a.unplugged_at,vehicle:a.vehicle_name??null,vehicleId:a.vehicle_id,charger:a.charger_name??null,kwh:a.energy_kwh};return n==="reimbursement"?{...d,price:e,amount:e==null?null:a.energy_kwh*e,estimated:!1}:{...d,price:a.cost==null?null:a.cost/a.energy_kwh,amount:a.cost,estimated:a.cost!=null&&a.estimated}}),i=r.reduce((a,d)=>a+d.kwh,0),o=r.filter(a=>a.amount!=null),l=n==="reimbursement"?e==null?null:i*e:o.length?o.reduce((a,d)=>a+d.amount,0):null;return{lines:r,kwh:i,amount:l,unpriced:r.length-o.length,estimated:r.some(a=>a.estimated)}}var ts={reimbursement:"pdf_title_reimbursement",cost:"pdf_title_cost"};function ss(n,t,e){return`${C(e,ts[n]).replace(/[\s/]+/g,"-")}-${t}.pdf`}var k=50,te=17,H=9.5,es=70;function rs(n){let{kind:t,month:e,lang:s,locale:r,timeZone:i,currency:o}=n,l=(h,f)=>C(s,h,f),a=Vs(t,n.sessions,n.price),d=l(ts[t]),u=new Date(`${e}-15T12:00:00Z`).toLocaleString(r,{month:"long",year:"numeric",timeZone:"UTC"}),g=h=>h.replace(/[  ]/g," "),p=h=>g(h.toLocaleString(r,{minimumFractionDigits:2,maximumFractionDigits:2})),y=h=>$(h,o,r),L=(h,f=t==="cost"?4:2)=>h==null?"\u2014":g(new Intl.NumberFormat(r,{style:"currency",currency:o,minimumFractionDigits:f,maximumFractionDigits:4}).format(h)),Z=(h,f=i)=>new Intl.DateTimeFormat(r,{day:"2-digit",month:"2-digit",year:"numeric",timeZone:f}).format(new Date(h*1e3)),Se=h=>h==null?"\u2014":R(h,r,i),os=h=>h.end==null?"\u2014":h.start!=null&&P(h.start,r,i)===P(h.end,r,i)?Se(h.end):`${P(h.end,r,i)} ${Se(h.end)}`,rt=h=>t==="reimbursement"&&h&&n.plates?.[h]?.trim()||null,as=h=>rt(h.vehicleId)??h.vehicle??"\u2014",Ae=[{label:"col_nr",width:24,align:"right",cell:(h,f)=>String(f+1)},{label:"col_date",width:66,align:"left",cell:h=>h.start==null?"\u2014":Z(h.start)},{label:"col_start",width:42,align:"left",cell:h=>Se(h.start)},{label:"col_end",width:n.vehicle==null?72:0,align:"left",cell:os},...n.vehicle==null?[{label:"col_vehicle",width:0,align:"left",cell:as}]:[],{label:"col_kwh",width:54,align:"right",cell:h=>p(h.kwh)},{label:"col_price",width:64,align:"right",cell:h=>L(h.price)},{label:"col_amount",width:68,align:"right",cell:h=>h.amount==null?"\u2014":`${y(h.amount)}${h.estimated?" *":""}`}],v=new ke(`${d} ${u}`),z=v.width-2*k,ls=Ae.reduce((h,f)=>h+f.width,0),cs=Ae.filter(h=>!h.width).length,nt=k,Ee=Ae.map(h=>{let f=h.width||(z-ls)/cs,F={...h,x:nt,width:f};return nt+=f,F}),pe=h=>h.align==="right"?h.x+h.width-4:h.x+4,hs=(h,f,F="regular")=>h.align==="right"?f:Ge(f,h.width-8,F,H);v.addPage(),v.text(k,72,d,{font:"bold",size:18}),v.text(k,94,u,{size:13,gray:.25});let[it,ot]=e.split("-").map(Number),ds=Date.UTC(it,ot-1,1)/1e3,us=Date.UTC(it,ot,0,12)/1e3,at=[...new Set(a.lines.map(h=>h.charger).filter(h=>!!h))],lt=n.holder?.trim(),ct=n.vehicle==null?null:rt(n.vehicleId),ps=[...lt?[["pdf_name",lt]]:[],["pdf_vehicle",n.vehicle??l("all_vehicles")],...ct?[["pdf_plate",ct]]:[],["pdf_charger",at.length?at.join(", "):"\u2014"],["pdf_period",`${Z(ds,"UTC")} \u2013 ${Z(us,"UTC")}`],...t==="reimbursement"?[["pdf_rate",l("pdf_rate_value",{price:L(n.price)})]]:[],["pdf_created",Z(n.now)]],b=124;for(let[h,f]of ps)v.text(k,b,`${l(h)}:`,{size:10,gray:.4}),v.text(k+110,b,Ge(f,z-110,"regular",10),{size:10}),b+=15;b+=14;let ht=()=>{v.box(k,b,z,te+2,.92);for(let h of Ee)v.text(pe(h),b+12.5,l(h.label),{font:"bold",size:H,align:h.align});b+=te+2};ht(),a.lines.length||(b+=14,v.text(k+4,b,l("pdf_no_sessions"),{size:H,gray:.4})),a.lines.forEach((h,f)=>{b+te>v.height-es&&(v.addPage(),b=60,ht());for(let F of Ee)v.text(pe(F),b+12,hs(F,F.cell(h,f)),{size:H,align:F.align});b+=te,v.line(k,b,k+z,b,.3,.85)}),b+te+60>v.height-es&&(v.addPage(),b=60),v.line(k,b,k+z,b,.8,.2);let dt=h=>Ee.find(f=>f.label===h),me=b+13,ut=l("pdf_total");v.text(k+4,me,ut,{font:"bold",size:H+.5});let ms=k+4+ee(ut,"bold",H+.5)+8;v.text(ms,me,`(${l("sessions_n",{n:String(a.lines.length)})})`,{size:H,gray:.3}),v.text(pe(dt("col_kwh")),me,p(a.kwh),{font:"bold",size:H+.5,align:"right"}),v.text(pe(dt("col_amount")),me,y(a.amount),{font:"bold",size:H+.5,align:"right"}),b+=te+22;let Ce=[l(t==="reimbursement"?"pdf_note_reimbursement":"pdf_note_cost")];a.unpriced&&Ce.push(l("pdf_unpriced",{n:String(a.unpriced)})),a.estimated&&Ce.push(l("estimated_note"));for(let h of Ce)for(let f of Is(h,z,8.5))v.text(k,b,f,{size:8.5,gray:.35}),b+=12;let pt=v.pageCount;for(let h=0;h<pt;h++){let f=v.height-36;v.line(k,f-12,k+z,f-12,.3,.8,h),v.text(k,f,`${d} \xB7 ${u}`,{size:8,gray:.5},h),v.text(k+z,f,l("pdf_page",{n:String(h+1),total:String(pt)}),{size:8,gray:.5,align:"right"},h)}return v.output()}function Is(n,t,e){let s=[],r="";for(let i of n.split(" ")){let o=r?`${r} ${i}`:i;r&&ee(o,"regular",e)>t?(s.push(r),r=i):r=o}return r&&s.push(r),s}var we=A`
  :host {
    display: block;
    padding: 16px;
    max-width: 1100px;
    margin: 0 auto;
  }
  .message,
  .note,
  .label,
  small {
    color: var(--secondary-text-color);
  }
  .message {
    text-align: center;
  }
  .note {
    font-size: 0.85em;
    margin-top: 6px;
  }
  .error {
    color: var(--error-color, #db4437);
  }
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 12px;
  }
  select,
  button.chip {
    font: inherit;
    padding: 6px 10px;
    border-radius: 6px;
    border: 1px solid var(--divider-color, #e0e0e0);
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    cursor: pointer;
  }
  button.chip[aria-pressed="true"] {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
  .card,
  .scroll {
    background: var(--card-background-color, #fff);
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: var(--ha-card-border-radius, 12px);
    margin-bottom: 12px;
  }
  .card {
    padding: 12px;
  }
  .label {
    margin-bottom: 8px;
  }
  .figs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 8px;
    text-align: center;
  }
  .fig b {
    display: block;
    font-size: 1.3em;
  }
  .fig span,
  .fig small {
    display: block;
    font-size: 0.85em;
  }
  .good {
    color: var(--success-color, #16a34a);
  }
  .bad {
    color: var(--error-color, #db4437);
  }
  .scroll {
    overflow-x: auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.95em;
  }
  th {
    text-align: left;
    color: var(--secondary-text-color);
    font-weight: 500;
  }
  th,
  td {
    padding: 8px;
    white-space: nowrap;
  }
  tbody tr {
    border-top: 1px solid var(--divider-color, #e0e0e0);
  }
  @media (max-width: 600px) {
    :host {
      padding: 8px;
    }
  }
`;var Xe=110,Je=class extends w{constructor(){super(...arguments);this.version=0;this._year=new Date().getFullYear();this._req=0;this._exportFailed=!1}static{this.properties={hass:{attribute:!1},version:{type:Number},_stats:{state:!0},_overview:{state:!0},_error:{state:!0},_vehicle:{state:!0},_year:{state:!0},_exporting:{state:!0},_exportFailed:{state:!0}}}updated(e){["version","_vehicle","_year"].some(s=>e.has(s))&&this.hass&&this._fetch()}async _fetch(){let e=++this._req;try{let s=this._overview??await U(this.hass);this._vehicle===void 0&&(this._vehicle=s.vehicles[0]?.id??"");let r=await Ht(this.hass,this._year,this._vehicle||void 0);if(e!==this._req)return;this._overview=s,this._stats=r,this._error=void 0}catch(s){e===this._req&&(this._error=T(s))}}_t(e,s){return C(E(this.hass),e,s)}_monthName(e,s="long"){return new Date(`${e}-15T12:00:00Z`).toLocaleString(x(this.hass),{month:s,...s==="long"&&{year:"numeric"},timeZone:"UTC"})}render(){if(this._error&&!this._stats)return c`<p class="message">${this._t(this._error)}</p>`;if(!this._stats||!this._overview)return c`<p class="message">${this._t("loading")}</p>`;let e=Array.from({length:5},(s,r)=>new Date().getFullYear()-r);return c`
      <div class="filters">
        <select @change=${s=>this._vehicle=s.target.value}>
          ${this._overview.vehicles.map(s=>c`<option value=${s.id} ?selected=${s.id===this._vehicle}>${s.name}</option>`)}
          <option value="" ?selected=${this._vehicle===""}>${this._t("all_vehicles")}</option>
        </select>
        <select
          aria-label=${this._t("year")}
          @change=${s=>this._year=Number(s.target.value)}
        >
          ${e.map(s=>c`<option value=${s} ?selected=${s===this._year}>${s}</option>`)}
        </select>
      </div>
      ${this._error?c`<p class="error">${this._t(this._error)}</p>`:m} ${this._rolling()} ${this._head()} ${this._bars()}
      ${this._table()}
      <div class="note">${this._t("km_note")}<br />${this._t("stats_settings_note")}</div>
    `}_rolling(){let{current:e,previous:s}=this._stats.rolling;return this._figures(this._t("last_30_days"),e,s,"vs_prev_30")}_head(){let{rows:e,total:s}=this._stats,r=de(Date.now()/1e3,this.hass.config.time_zone),i=e.findIndex(l=>l.month===r),o=i>=0?this._t("current_month",{month:this._monthName(r)}):this._t("total_year",{year:String(this._year)});return this._figures(o,i>=0?e[i]:s,i>0?e[i-1]:null,"vs_prev")}_figures(e,s,r,i){let{currency:o}=this._stats,l=x(this.hass),a=r&&r.cost&&s.cost!=null?c`<small class="delta ${s.cost<=r.cost?"good":"bad"}"
          >${Ut(s.cost/r.cost-1,l)} ${this._t(i)}</small
        >`:m,d=(p,y,L=m,Z="")=>c`<div class="fig"><b class=${Z}>${p}</b><span>${y}</span>${L}</div>`,u=s.fuel_l100!=null&&s.fuel_price!=null?c`<small
            >${this._t("petrol_ref",{l100:s.fuel_l100.toLocaleString(l,{maximumFractionDigits:1}),price:$(s.fuel_price,o,l)})}</small
          >`:m,g=s.savings==null?"\u2014":$(-s.savings,o,l);return c`<div class="card">
      <div class="label">${e}</div>
      <div class="figs">
        ${d($(s.cost,o,l),this._t("cost"),a)}
        ${d(D(s.energy_kwh,l),this._t("sessions_n",{n:String(s.sessions)}))}
        ${d(s.off_peak_share==null?"\u2014":V(s.off_peak_share,l),this._t("off_peak_label"))}
        ${d($(s.cost_per_100km,o,l),this._t("per_100km"),s.km==null?m:c`<small>${this._t("km_n",{km:Math.round(s.km).toLocaleString(l)})}</small>`)}
        ${d(g,this._t("vs_petrol"),u,s.savings!=null&&s.savings>0?"good":"")}
      </div>
    </div>`}_bars(){let e=this._stats.rows,s=Gt(e,Xe),r=$e([...new Set(s.flatMap(i=>i.parts.map(o=>o.key)))]);return c`<div class="card">
      <div class="label">
        ${this._t("cost_by_month")}
        <span class="legend">
          ${r.map(i=>c`<span><i style="background:${We(i)}"></i>${jt(i,o=>this._t(o))}</span>`)}
        </span>
      </div>
      <svg viewBox="0 0 100 ${Xe}" preserveAspectRatio="none" class="bars" role="img">
        ${s.map(i=>i.parts.map(o=>N`<rect x=${i.x} width=${i.w} y=${o.y} height=${o.h} style="fill:${We(o.key)}"></rect>`))}
      </svg>
      <div class="months">${e.map(i=>c`<span>${this._monthName(i.month,"short")}</span>`)}</div>
    </div>`}_table(){let{rows:e,total:s,currency:r}=this._stats,i=x(this.hass),o=de(Date.now()/1e3,this.hass.config.time_zone),l=e.filter(p=>p.month<=o&&(p.sessions||p.km!=null)),a=p=>p.toLocaleString(i,{minimumFractionDigits:1,maximumFractionDigits:1}),d=this._stats.reimbursement_price,u=(p,y,L="")=>c`<tr class=${L}>
      <td>${y}</td>
      <td>${p.sessions}</td>
      <td>${a(p.energy_kwh)}</td>
      <td><b>${$(p.cost,r,i)}</b></td>
      ${d==null?m:c`<td>${$(p.reimbursement,r,i)}</td>`}
      <td>${p.off_peak_share==null?"\u2014":V(p.off_peak_share,i)}</td>
      <td>
        ${p.km==null?"\u2014":Math.round(p.km).toLocaleString(i)}${p.km_partial?" *":""}
      </td>
      <td>${p.cost_per_100km==null?"\u2014":$(p.cost_per_100km,r,i)}</td>
      <td class=${p.savings!=null&&p.savings>0?"good":""}>
        ${p.savings==null?"\u2014":$(-p.savings,r,i)}
      </td>
      <td>${p.month&&p.sessions?c`<span class="export">${this._exportButtons(p.month,d!=null)}</span>`:m}</td>
    </tr>`,g=["col_month","col_sessions","col_kwh","col_cost",...d==null?[]:["col_reimbursement"],"col_hc","col_km","col_per_100","col_vs_petrol","col_export"];return c`${this._exportFailed?c`<p class="error">${this._t("export_failed")}</p>`:m}
      <div class="scroll">
      <table>
        <thead>
          <tr>${g.map(p=>c`<th>${this._t(p)}</th>`)}</tr>
        </thead>
        <tbody>
          ${l.reverse().map(p=>u(p,this._monthName(p.month)))}
          ${u(s,this._t("total_year",{year:String(this._year)}),"total")}
        </tbody>
      </table>
    </div>`}_exportButtons(e,s){return[...s?[["reimbursement","export_reimbursement"]]:[],["cost","export_cost"]].map(([i,o])=>c`<button
        class="chip"
        ?disabled=${this._exporting!==void 0}
        aria-busy=${this._exporting===`${e}|${i}`}
        @click=${()=>this._export(e,i)}
      >
        ${this._t(o)}
      </button>`)}async _export(e,s){if(this._exporting===void 0){this._exporting=`${e}|${s}`;try{let r=this._vehicle||void 0,{sessions:i}=await X(this.hass,{month:e,...r&&{vehicle_id:r}}),o=E(this.hass),l=this._overview?.vehicles??[],a=rs({kind:s,month:e,sessions:i,vehicle:r?l.find(d=>d.id===r)?.name??null:null,vehicleId:r??null,plates:Object.fromEntries(l.map(d=>[d.id,d.plate])),holder:this._stats.statement_name,price:this._stats.reimbursement_price,currency:this._stats.currency,lang:o,locale:x(this.hass),timeZone:this.hass.config.time_zone,now:Date.now()/1e3});js(a,ss(s,e,o)),this._exportFailed=!1}catch{this._exportFailed=!0}finally{this._exporting=void 0}}}static{this.styles=[we,A`
      .bars {
        width: 100%;
        height: ${Xe}px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }
      .legend {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 4px 12px;
        margin-left: 8px;
      }
      .legend i {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-right: 4px;
        border-radius: 2px;
        outline: 1px solid var(--divider-color, #e0e0e0);
        vertical-align: -1px;
      }
      .months {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        text-align: center;
        font-size: 0.75em;
        color: var(--secondary-text-color);
      }
      tr.total {
        font-weight: 600;
      }
      .export {
        display: inline-flex;
        gap: 6px;
      }
      .export button.chip {
        font-size: 0.85em;
        padding: 3px 8px;
      }
      button.chip:disabled {
        opacity: 0.6;
        cursor: default;
      }
      button.chip[aria-busy="true"] {
        cursor: progress;
      }
    `]}};function js(n,t){let e=URL.createObjectURL(new Blob([n],{type:"application/pdf"})),s=document.createElement("a");s.href=e,s.download=t,document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(e),1e4)}customElements.define("charge-board-stats",Je);var ns=30,Qe=300,et=80,tt=class extends w{constructor(){super(...arguments);this.version=0;this._soc=[];this._req=0}static{this.properties={hass:{attribute:!1},version:{type:Number},_overview:{state:!0},_card:{state:!0},_soc:{state:!0},_error:{state:!0},_vehicle:{state:!0}}}updated(e){["version","_vehicle"].some(s=>e.has(s))&&this.hass&&this._fetch()}async _fetch(){let e=++this._req;try{let s=await U(this.hass);if(e!==this._req||(this._overview=s,(!this._vehicle||!s.vehicles.some(o=>o.id===this._vehicle))&&(this._vehicle=s.vehicles[0]?.id,!this._vehicle)))return;let r=await zt(this.hass,this._vehicle);if(e!==this._req)return;this._card=r,this._error=void 0;let i=r.config.find(o=>o.key==="soc_entity")?.entity_id;if(i&&this._socFor!==r.id){let o=Date.now()/1e3;this._soc=await Ft(this.hass,i,o-ns*86400,o).catch(()=>[]),this._socFor=r.id}}catch(s){e===this._req&&(this._error=T(s))}}_t(e,s){return C(E(this.hass),e,s)}render(){return this._error&&!this._card?c`<p class="message">${this._t(this._error)}</p>`:this._overview&&!this._overview.vehicles.length?c`<p class="message">${this._t("no_vehicles")}</p>`:!this._card||!this._overview?c`<p class="message">${this._t("loading")}</p>`:c`
      <div class="filters">
        ${this._overview.vehicles.map(e=>c`<button
            class="chip"
            aria-pressed=${e.id===this._vehicle}
            @click=${()=>{e.id!==this._vehicle&&(this._vehicle=e.id,this._soc=[])}}
          >
            ${e.name}
          </button>`)}
      </div>
      ${this._card.cut_ignored&&this._card.target_source==="home"?c`<p class="error">${this._t("cut_ignored")}</p>`:m}
      ${this._figures()} ${this._chart()} ${this._table()} ${this._config()}
    `}_figures(){let e=this._card,s=x(this.hass),r=(o,l=0)=>o==null?"\u2014":o.toLocaleString(s,{maximumFractionDigits:l,minimumFractionDigits:l}),i=(o,l,a)=>c`<div class="fig"><b>${o}</b><span>${l}</span>${a?c`<small>${a}</small>`:m}</div>`;return c`<div class="card">
      <div class="figs">
        ${i(e.soc==null?"\u2014":`${r(e.soc)} %`,this._t("battery_now"),e.target==null?void 0:this._t("target_n",{n:r(e.target)}))}
        ${i(e.consumption_30d==null?"\u2014":`${r(e.consumption_30d,1)} kWh`,this._t("consumption_30d"))}
        ${i(e.odometer==null?"\u2014":`${r(e.odometer)} km`,this._t("odometer"))}
        ${i(e.autonomy_km==null?"\u2014":`\u2248 ${r(e.autonomy_km)} km`,this._t("autonomy"))}
      </div>
      ${e.consumption_since==null?m:c`<div class="note">${this._t("consumption_since",{value:r(e.consumption_since,1)})}</div>`}
    </div>`}_chart(){let e=Date.now()/1e3,s=e-ns*86400,r=this.hass.config.time_zone,i=x(this.hass),o=l=>(Math.max(l,s)-s)/(e-s)*Qe;return c`<div class="card">
      <div class="label">${this._t("battery_30d")} · <span class="band">▮</span> ${this._t("recharges")}</div>
      <svg viewBox="0 0 ${Qe} ${et}" preserveAspectRatio="none" class="line" role="img">
        ${this._card.sessions.map(l=>N`<rect class="band" x=${o(l.start)} y="0" height=${et}
            width=${Math.max(o(l.end??e)-o(l.start),1.5)}></rect>`)}
        <path d=${Yt(this._soc,Qe,et,s,e)}></path>
      </svg>
      <div class="axis">
        <span>${P(s,i,r)}</span><span>${P(e,i,r)}</span>
      </div>
    </div>`}_table(){let e=this._card,s=x(this.hass),r=e.rows.filter(l=>l.sessions||l.km!=null).reverse();if(!r.length)return m;let i=l=>new Date(`${l}-15T12:00:00Z`).toLocaleString(s,{month:"long",year:"numeric",timeZone:"UTC"}),o=["col_month","col_km","col_kwh","col_kwh_100","col_per_100"];return c`<div class="card">
      <div class="label">${this._t("consumption_by_month")}</div>
      <div class="scroll flat">
        <table>
          <thead>
            <tr>${o.map(l=>c`<th>${this._t(l)}</th>`)}</tr>
          </thead>
          <tbody>
            ${r.map(l=>c`<tr>
                <td>${i(l.month)}</td>
                <td>
                  ${l.km==null?"\u2014":Math.round(l.km).toLocaleString(s)}${l.km_partial?" *":""}
                </td>
                <td>${D(l.energy_kwh,s)}</td>
                <td>${l.kwh_100km==null?"\u2014":l.kwh_100km.toLocaleString(s,{maximumFractionDigits:1})}</td>
                <td>${$(l.cost_per_100km,e.currency,s)}</td>
              </tr>`)}
          </tbody>
        </table>
      </div>
    </div>`}_config(){let e=this._card,s=x(this.hass),r=l=>c`<span class=${l.ok?"good":"bad"}>●</span> ${l.value==null?"\u2014":l.value.toLocaleString(s,{maximumFractionDigits:3})}`,i=(l,a,d)=>c`<tr>
      <td>${this._t(l)}</td>
      <td>
        ${a.entity_id??(a.key==="target"||a.key==="fuel_price"?this._t("fixed_value"):"\u2014")}
        ${r(a)}${d?c` <small>${d}</small>`:m}</td>
    </tr>`,o=l=>e.config.find(a=>a.key===l);return c`<div class="card">
      <div class="head">
        <span class="label">${this._t("configuration")}</span>
        <a href="/config/integrations/integration/charge_board">${this._t("edit")} ↗</a>
      </div>
      <table class="cfg">
        <tbody>
          <tr>
            <td>${this._t("cfg_capacity")}</td>
            <td>${e.capacity_kwh==null?"\u2014":`${e.capacity_kwh.toLocaleString(s)} kWh`}</td>
          </tr>
          ${i("cfg_soc_entity",o("soc_entity"))}
          ${i("cfg_target",o("target"),this._t(e.target_source==="home"?"target_home":"target_vehicle"))}
          ${i("cfg_odometer_entity",o("odometer_entity"))} ${i("cfg_fuel_price",o("fuel_price"))}
          <tr>
            <td>${this._t("cfg_fuel_l100")}</td>
            <td>${e.fuel_l100==null?"\u2014":`${e.fuel_l100.toLocaleString(s)} L/100 km`}</td>
          </tr>
        </tbody>
      </table>
    </div>`}static{this.styles=[we,A`
      .line {
        width: 100%;
        height: 90px;
      }
      .line path {
        fill: none;
        stroke: var(--info-color, #3b82f6);
        stroke-width: 2;
        vector-effect: non-scaling-stroke;
      }
      rect.band {
        fill: var(--success-color, #22c55e);
        opacity: 0.25;
      }
      span.band {
        color: var(--success-color, #22c55e);
      }
      .axis,
      .head {
        display: flex;
        justify-content: space-between;
      }
      .axis {
        font-size: 0.75em;
        color: var(--secondary-text-color);
      }
      .head a {
        color: var(--primary-color);
        text-decoration: none;
      }
      .flat {
        border: none;
        margin: 0;
      }
      table.cfg td:first-child {
        color: var(--secondary-text-color);
      }
      table.cfg tr {
        border: none;
      }
    `]}};customElements.define("charge-board-vehicles",tt);var Bs="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",is={overview:"tab_overview",sessions:"tab_sessions",vehicles:"tab_vehicles",stats:"tab_stats"},st=class extends w{constructor(){super(...arguments);this.narrow=!1;this._tab="overview";this._version=0}static{this.properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_tab:{state:!0},_version:{state:!0}}}connectedCallback(){super.connectedCallback(),this._subscribe()}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.then(e=>e()).catch(()=>{}),this._unsub=void 0}updated(e){e.has("hass")&&this._subscribe()}_subscribe(){if(!this.hass||this._unsub)return;let e=Kt(this.hass,()=>this._version++);this._unsub=e,e.then(()=>this._version++).catch(()=>{this._unsub===e&&(this._unsub=void 0)})}_t(e){return C(E(this.hass),e)}_toggleMenu(){this.dispatchEvent(new CustomEvent("hass-toggle-menu",{bubbles:!0,composed:!0}))}render(){return this.hass?c`
      <header>
        <div class="toolbar">
          ${this.narrow?c`<button class="menu" aria-label=${this._t("menu")} @click=${this._toggleMenu}>
                <svg viewBox="0 0 24 24"><path d=${Bs}></path></svg>
              </button>`:c``}
          <div class="title">${this._t("title")}</div>
        </div>
        <nav role="tablist">
          ${Object.keys(is).map(e=>c`<button
              role="tab"
              aria-selected=${this._tab===e}
              @click=${()=>this._tab=e}
            >
              ${this._t(is[e])}
            </button>`)}
        </nav>
      </header>
      <main>
        ${this._content()}
      </main>
    `:c``}_content(){let e={hass:this.hass,version:this._version};switch(this._tab){case"sessions":return c`<charge-board-sessions .hass=${e.hass} .version=${e.version}></charge-board-sessions>`;case"vehicles":return c`<charge-board-vehicles .hass=${e.hass} .version=${e.version}></charge-board-vehicles>`;case"stats":return c`<charge-board-stats .hass=${e.hass} .version=${e.version}></charge-board-stats>`;default:return c`<charge-board-overview .hass=${e.hass} .version=${e.version}></charge-board-overview>`}}static{this.styles=A`
    :host {
      display: block;
      min-height: 100vh;
      background: var(--primary-background-color);
      color: var(--primary-text-color);
      font-family: var(--paper-font-body1_-_font-family, inherit);
    }
    header {
      position: sticky;
      top: 0;
      z-index: 2;
      background: var(--app-header-background-color, var(--primary-color));
      color: var(--app-header-text-color, var(--text-primary-color, #fff));
      border-bottom: var(--app-header-border-bottom, none);
      padding-top: env(safe-area-inset-top);
    }
    .toolbar {
      display: flex;
      align-items: center;
      height: 56px;
      padding: 0 12px;
      gap: 12px;
    }
    .title {
      font-size: 20px;
      font-weight: 400;
      margin-left: 12px;
    }
    .menu + .title {
      margin-left: 0;
    }
    button {
      all: unset;
      cursor: pointer;
    }
    button:focus-visible {
      outline: 2px solid currentColor;
    }
    .menu {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    .menu svg {
      width: 24px;
      height: 24px;
      fill: currentColor;
    }
    nav {
      display: flex;
      padding: 0 12px;
      overflow-x: auto;
    }
    nav button {
      padding: 12px 16px;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 500;
      opacity: 0.7;
      border-bottom: 2px solid transparent;
    }
    nav button[aria-selected="true"] {
      opacity: 1;
      border-bottom-color: currentColor;
    }
  `}};customElements.define("charge-board-panel",st);
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
