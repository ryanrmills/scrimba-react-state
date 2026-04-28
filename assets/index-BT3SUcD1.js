var e=Object.defineProperty,t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),n=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var r=t((e=>{var t={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},n=Object.assign,r={};function i(e,n,i){this.props=e,this.context=n,this.refs=r,this.updater=i||t}i.prototype.isReactComponent={},i.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function a(){}a.prototype=i.prototype;function o(e,n,i){this.props=e,this.context=n,this.refs=r,this.updater=i||t}var s=o.prototype=new a;s.constructor=o,n(s,i.prototype),s.isPureReactComponent=!0,Array.isArray})),i=t(((e,t)=>{t.exports=r()})),a=t((e=>{})),o=t(((e,t)=>{t.exports=a()}));i(),o();function s(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n}function c(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)}var l=function(){let{crypto:e}=globalThis;if(e?.randomUUID)return l=e.randomUUID.bind(e),e.randomUUID();let t=new Uint8Array(1),n=e?()=>e.getRandomValues(t)[0]:()=>Math.random()*255&255;return`10000000-1000-4000-8000-100000000000`.replace(/[018]/g,e=>(e^n()&15>>e/4).toString(16))};function u(e){return typeof e==`object`&&!!e&&(`name`in e&&e.name===`AbortError`||`message`in e&&String(e.message).includes(`FetchRequestCanceledException`))}var ee=e=>{if(e instanceof Error)return e;if(typeof e==`object`&&e){try{if(Object.prototype.toString.call(e)===`[object Error]`){let t=Error(e.message,e.cause?{cause:e.cause}:{});return e.stack&&(t.stack=e.stack),e.cause&&!t.cause&&(t.cause=e.cause),e.name&&(t.name=e.name),t}}catch{}try{return Error(JSON.stringify(e))}catch{}}return Error(e)},d=class extends Error{},f=class e extends d{constructor(t,n,r,i,a){super(`${e.makeMessage(t,n,r)}`),this.status=t,this.headers=i,this.requestID=i?.get(`request-id`),this.error=n,this.type=a??null}static makeMessage(e,t,n){let r=t?.message?typeof t.message==`string`?t.message:JSON.stringify(t.message):t?JSON.stringify(t):n;return e&&r?`${e} ${r}`:e?`${e} status code (no body)`:r||`(no status code or body)`}static generate(t,n,r,i){if(!t||!i)return new te({message:r,cause:ee(n)});let a=n,o=a?.error?.type;return t===400?new m(t,a,r,i,o):t===401?new re(t,a,r,i,o):t===403?new ie(t,a,r,i,o):t===404?new ae(t,a,r,i,o):t===409?new oe(t,a,r,i,o):t===422?new se(t,a,r,i,o):t===429?new ce(t,a,r,i,o):t>=500?new le(t,a,r,i,o):new e(t,a,r,i,o)}},p=class extends f{constructor({message:e}={}){super(void 0,void 0,e||`Request was aborted.`,void 0)}},te=class extends f{constructor({message:e,cause:t}){super(void 0,void 0,e||`Connection error.`,void 0),t&&(this.cause=t)}},ne=class extends te{constructor({message:e}={}){super({message:e??`Request timed out.`})}},m=class extends f{},re=class extends f{},ie=class extends f{},ae=class extends f{},oe=class extends f{},se=class extends f{},ce=class extends f{},le=class extends f{},ue=/^[a-z][a-z0-9+.-]*:/i,de=e=>ue.test(e),fe=e=>(fe=Array.isArray,fe(e)),pe=fe;function me(e){return typeof e==`object`?e??{}:{}}function he(e){if(!e)return!0;for(let t in e)return!1;return!0}function ge(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var _e=(e,t)=>{if(typeof t!=`number`||!Number.isInteger(t))throw new d(`${e} must be an integer`);if(t<0)throw new d(`${e} must be a positive integer`);return t},ve=e=>{try{return JSON.parse(e)}catch{return}},ye=e=>new Promise(t=>setTimeout(t,e)),be=`0.91.1`,xe=()=>typeof window<`u`&&window.document!==void 0&&typeof navigator<`u`;function Se(){return typeof Deno<`u`&&Deno.build!=null?`deno`:typeof EdgeRuntime<`u`?`edge`:Object.prototype.toString.call(globalThis.process===void 0?0:globalThis.process)===`[object process]`?`node`:`unknown`}var Ce=()=>{let e=Se();if(e===`deno`)return{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":be,"X-Stainless-OS":Ee(Deno.build.os),"X-Stainless-Arch":Te(Deno.build.arch),"X-Stainless-Runtime":`deno`,"X-Stainless-Runtime-Version":typeof Deno.version==`string`?Deno.version:Deno.version?.deno??`unknown`};if(typeof EdgeRuntime<`u`)return{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":be,"X-Stainless-OS":`Unknown`,"X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":`edge`,"X-Stainless-Runtime-Version":globalThis.process.version};if(e===`node`)return{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":be,"X-Stainless-OS":Ee(globalThis.process.platform??`unknown`),"X-Stainless-Arch":Te(globalThis.process.arch??`unknown`),"X-Stainless-Runtime":`node`,"X-Stainless-Runtime-Version":globalThis.process.version??`unknown`};let t=we();return t?{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":be,"X-Stainless-OS":`Unknown`,"X-Stainless-Arch":`unknown`,"X-Stainless-Runtime":`browser:${t.browser}`,"X-Stainless-Runtime-Version":t.version}:{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":be,"X-Stainless-OS":`Unknown`,"X-Stainless-Arch":`unknown`,"X-Stainless-Runtime":`unknown`,"X-Stainless-Runtime-Version":`unknown`}};function we(){if(typeof navigator>`u`||!navigator)return null;for(let{key:e,pattern:t}of[{key:`edge`,pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`ie`,pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`ie`,pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`chrome`,pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`firefox`,pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`safari`,pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}]){let n=t.exec(navigator.userAgent);if(n)return{browser:e,version:`${n[1]||0}.${n[2]||0}.${n[3]||0}`}}return null}var Te=e=>e===`x32`?`x32`:e===`x86_64`||e===`x64`?`x64`:e===`arm`?`arm`:e===`aarch64`||e===`arm64`?`arm64`:e?`other:${e}`:`unknown`,Ee=e=>(e=e.toLowerCase(),e.includes(`ios`)?`iOS`:e===`android`?`Android`:e===`darwin`?`MacOS`:e===`win32`?`Windows`:e===`freebsd`?`FreeBSD`:e===`openbsd`?`OpenBSD`:e===`linux`?`Linux`:e?`Other:${e}`:`Unknown`),De,Oe=()=>De??=Ce();function ke(){if(typeof fetch<`u`)return fetch;throw Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new Anthropic({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function Ae(...e){let t=globalThis.ReadableStream;if(t===void 0)throw Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new t(...e)}function je(e){let t=Symbol.asyncIterator in e?e[Symbol.asyncIterator]():e[Symbol.iterator]();return Ae({start(){},async pull(e){let{done:n,value:r}=await t.next();n?e.close():e.enqueue(r)},async cancel(){await t.return?.()}})}function Me(e){if(e[Symbol.asyncIterator])return e;let t=e.getReader();return{async next(){try{let e=await t.read();return e?.done&&t.releaseLock(),e}catch(e){throw t.releaseLock(),e}},async return(){let e=t.cancel();return t.releaseLock(),await e,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function Ne(e){if(typeof e!=`object`||!e)return;if(e[Symbol.asyncIterator]){await e[Symbol.asyncIterator]().return?.();return}let t=e.getReader(),n=t.cancel();t.releaseLock(),await n}var Pe=({headers:e,body:t})=>({bodyHeaders:{"content-type":`application/json`},body:JSON.stringify(t)});function Fe(e){return Object.entries(e).filter(([e,t])=>t!==void 0).map(([e,t])=>{if(typeof t==`string`||typeof t==`number`||typeof t==`boolean`)return`${encodeURIComponent(e)}=${encodeURIComponent(t)}`;if(t===null)return`${encodeURIComponent(e)}=`;throw new d(`Cannot stringify type ${typeof t}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)}).join(`&`)}function Ie(e){let t=0;for(let n of e)t+=n.length;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return n}var Le;function Re(e){let t;return(Le??=(t=new globalThis.TextEncoder,t.encode.bind(t)))(e)}var ze;function Be(e){let t;return(ze??=(t=new globalThis.TextDecoder,t.decode.bind(t)))(e)}var h,g,Ve=class{constructor(){h.set(this,void 0),g.set(this,void 0),s(this,h,new Uint8Array,`f`),s(this,g,null,`f`)}decode(e){if(e==null)return[];let t=e instanceof ArrayBuffer?new Uint8Array(e):typeof e==`string`?Re(e):e;s(this,h,Ie([c(this,h,`f`),t]),`f`);let n=[],r;for(;(r=He(c(this,h,`f`),c(this,g,`f`)))!=null;){if(r.carriage&&c(this,g,`f`)==null){s(this,g,r.index,`f`);continue}if(c(this,g,`f`)!=null&&(r.index!==c(this,g,`f`)+1||r.carriage)){n.push(Be(c(this,h,`f`).subarray(0,c(this,g,`f`)-1))),s(this,h,c(this,h,`f`).subarray(c(this,g,`f`)),`f`),s(this,g,null,`f`);continue}let e=c(this,g,`f`)===null?r.preceding:r.preceding-1,t=Be(c(this,h,`f`).subarray(0,e));n.push(t),s(this,h,c(this,h,`f`).subarray(r.index),`f`),s(this,g,null,`f`)}return n}flush(){return c(this,h,`f`).length?this.decode(`
`):[]}};h=new WeakMap,g=new WeakMap,Ve.NEWLINE_CHARS=new Set([`
`,`\r`]),Ve.NEWLINE_REGEXP=/\r\n|[\n\r]/g;function He(e,t){for(let n=t??0;n<e.length;n++){if(e[n]===10)return{preceding:n,index:n+1,carriage:!1};if(e[n]===13)return{preceding:n,index:n+1,carriage:!0}}return null}function Ue(e){for(let t=0;t<e.length-1;t++){if(e[t]===10&&e[t+1]===10||e[t]===13&&e[t+1]===13)return t+2;if(e[t]===13&&e[t+1]===10&&t+3<e.length&&e[t+2]===13&&e[t+3]===10)return t+4}return-1}var We={off:0,error:200,warn:300,info:400,debug:500},Ge=(e,t,n)=>{if(e){if(ge(We,e))return e;_(n).warn(`${t} was set to ${JSON.stringify(e)}, expected one of ${JSON.stringify(Object.keys(We))}`)}};function Ke(){}function qe(e,t,n){return!t||We[e]>We[n]?Ke:t[e].bind(t)}var Je={error:Ke,warn:Ke,info:Ke,debug:Ke},Ye=new WeakMap;function _(e){let t=e.logger,n=e.logLevel??`off`;if(!t)return Je;let r=Ye.get(t);if(r&&r[0]===n)return r[1];let i={error:qe(`error`,t,n),warn:qe(`warn`,t,n),info:qe(`info`,t,n),debug:qe(`debug`,t,n)};return Ye.set(t,[n,i]),i}var Xe=e=>(e.options&&(e.options={...e.options},delete e.options.headers),e.headers&&=Object.fromEntries((e.headers instanceof Headers?[...e.headers]:Object.entries(e.headers)).map(([e,t])=>[e,e.toLowerCase()===`x-api-key`||e.toLowerCase()===`authorization`||e.toLowerCase()===`cookie`||e.toLowerCase()===`set-cookie`?`***`:t])),`retryOfRequestLogID`in e&&(e.retryOfRequestLogID&&(e.retryOf=e.retryOfRequestLogID),delete e.retryOfRequestLogID),e),Ze,Qe=class e{constructor(e,t,n){this.iterator=e,Ze.set(this,void 0),this.controller=t,s(this,Ze,n,`f`)}static fromSSEResponse(t,n,r){let i=!1,a=r?_(r):console;async function*o(){if(i)throw new d("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");i=!0;let e=!1;try{for await(let e of $e(t,n)){if(e.event===`completion`)try{yield JSON.parse(e.data)}catch(t){throw a.error(`Could not parse message into JSON:`,e.data),a.error(`From chunk:`,e.raw),t}if(e.event===`message_start`||e.event===`message_delta`||e.event===`message_stop`||e.event===`content_block_start`||e.event===`content_block_delta`||e.event===`content_block_stop`||e.event===`message`||e.event===`user.message`||e.event===`user.interrupt`||e.event===`user.tool_confirmation`||e.event===`user.custom_tool_result`||e.event===`agent.message`||e.event===`agent.thinking`||e.event===`agent.tool_use`||e.event===`agent.tool_result`||e.event===`agent.mcp_tool_use`||e.event===`agent.mcp_tool_result`||e.event===`agent.custom_tool_use`||e.event===`agent.thread_context_compacted`||e.event===`session.status_running`||e.event===`session.status_idle`||e.event===`session.status_rescheduled`||e.event===`session.status_terminated`||e.event===`session.error`||e.event===`session.deleted`||e.event===`span.model_request_start`||e.event===`span.model_request_end`)try{yield JSON.parse(e.data)}catch(t){throw a.error(`Could not parse message into JSON:`,e.data),a.error(`From chunk:`,e.raw),t}if(e.event!==`ping`&&e.event===`error`){let n=ve(e.data)??e.data,r=n?.error?.type;throw new f(void 0,n,void 0,t.headers,r)}}e=!0}catch(e){if(u(e))return;throw e}finally{e||n.abort()}}return new e(o,n,r)}static fromReadableStream(t,n,r){let i=!1;async function*a(){let e=new Ve,n=Me(t);for await(let t of n)for(let n of e.decode(t))yield n;for(let t of e.flush())yield t}async function*o(){if(i)throw new d("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");i=!0;let e=!1;try{for await(let t of a())e||t&&(yield JSON.parse(t));e=!0}catch(e){if(u(e))return;throw e}finally{e||n.abort()}}return new e(o,n,r)}[(Ze=new WeakMap,Symbol.asyncIterator)](){return this.iterator()}tee(){let t=[],n=[],r=this.iterator(),i=e=>({next:()=>{if(e.length===0){let e=r.next();t.push(e),n.push(e)}return e.shift()}});return[new e(()=>i(t),this.controller,c(this,Ze,`f`)),new e(()=>i(n),this.controller,c(this,Ze,`f`))]}toReadableStream(){let e=this,t;return Ae({async start(){t=e[Symbol.asyncIterator]()},async pull(e){try{let{value:n,done:r}=await t.next();if(r)return e.close();let i=Re(JSON.stringify(n)+`
`);e.enqueue(i)}catch(t){e.error(t)}},async cancel(){await t.return?.()}})}};async function*$e(e,t){if(!e.body)throw t.abort(),globalThis.navigator!==void 0&&globalThis.navigator.product===`ReactNative`?new d(`The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api`):new d(`Attempted to iterate over a response with no body`);let n=new tt,r=new Ve,i=Me(e.body);for await(let e of et(i))for(let t of r.decode(e)){let e=n.decode(t);e&&(yield e)}for(let e of r.flush()){let t=n.decode(e);t&&(yield t)}}async function*et(e){let t=new Uint8Array;for await(let n of e){if(n==null)continue;let e=n instanceof ArrayBuffer?new Uint8Array(n):typeof n==`string`?Re(n):n,r=new Uint8Array(t.length+e.length);r.set(t),r.set(e,t.length),t=r;let i;for(;(i=Ue(t))!==-1;)yield t.slice(0,i),t=t.slice(i)}t.length>0&&(yield t)}var tt=class{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(e){if(e.endsWith(`\r`)&&(e=e.substring(0,e.length-1)),!e){if(!this.event&&!this.data.length)return null;let e={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],e}if(this.chunks.push(e),e.startsWith(`:`))return null;let[t,n,r]=nt(e,`:`);return r.startsWith(` `)&&(r=r.substring(1)),t===`event`?this.event=r:t===`data`&&this.data.push(r),null}};function nt(e,t){let n=e.indexOf(t);return n===-1?[e,``,``]:[e.substring(0,n),t,e.substring(n+t.length)]}async function rt(e,t){let{response:n,requestLogID:r,retryOfRequestLogID:i,startTime:a}=t,o=await(async()=>{if(t.options.stream)return _(e).debug(`response`,n.status,n.url,n.headers,n.body),t.options.__streamClass?t.options.__streamClass.fromSSEResponse(n,t.controller):Qe.fromSSEResponse(n,t.controller);if(n.status===204)return null;if(t.options.__binaryResponse)return n;let r=n.headers.get(`content-type`)?.split(`;`)[0]?.trim();return r?.includes(`application/json`)||r?.endsWith(`+json`)?n.headers.get(`content-length`)===`0`?void 0:it(await n.json(),n):await n.text()})();return _(e).debug(`[${r}] response parsed`,Xe({retryOfRequestLogID:i,url:n.url,status:n.status,body:o,durationMs:Date.now()-a})),o}function it(e,t){return!e||typeof e!=`object`||Array.isArray(e)?e:Object.defineProperty(e,`_request_id`,{value:t.headers.get(`request-id`),enumerable:!1})}var at,ot=class e extends Promise{constructor(e,t,n=rt){super(e=>{e(null)}),this.responsePromise=t,this.parseResponse=n,at.set(this,void 0),s(this,at,e,`f`)}_thenUnwrap(t){return new e(c(this,at,`f`),this.responsePromise,async(e,n)=>it(t(await this.parseResponse(e,n),n),n.response))}asResponse(){return this.responsePromise.then(e=>e.response)}async withResponse(){let[e,t]=await Promise.all([this.parse(),this.asResponse()]);return{data:e,response:t,request_id:t.headers.get(`request-id`)}}parse(){return this.parsedPromise||=this.responsePromise.then(e=>this.parseResponse(c(this,at,`f`),e)),this.parsedPromise}then(e,t){return this.parse().then(e,t)}catch(e){return this.parse().catch(e)}finally(e){return this.parse().finally(e)}};at=new WeakMap;var st,ct=class{constructor(e,t,n,r){st.set(this,void 0),s(this,st,e,`f`),this.options=r,this.response=t,this.body=n}hasNextPage(){return this.getPaginatedItems().length?this.nextPageRequestOptions()!=null:!1}async getNextPage(){let e=this.nextPageRequestOptions();if(!e)throw new d("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");return await c(this,st,`f`).requestAPIList(this.constructor,e)}async*iterPages(){let e=this;for(yield e;e.hasNextPage();)e=await e.getNextPage(),yield e}async*[(st=new WeakMap,Symbol.asyncIterator)](){for await(let e of this.iterPages())for(let t of e.getPaginatedItems())yield t}},lt=class extends ot{constructor(e,t,n){super(e,t,async(e,t)=>new n(e,t.response,await rt(e,t),t.options))}async*[Symbol.asyncIterator](){let e=await this;for await(let t of e)yield t}},ut=class extends ct{constructor(e,t,n,r){super(e,t,n,r),this.data=n.data||[],this.has_more=n.has_more||!1,this.first_id=n.first_id||null,this.last_id=n.last_id||null}getPaginatedItems(){return this.data??[]}hasNextPage(){return this.has_more===!1?!1:super.hasNextPage()}nextPageRequestOptions(){if(this.options.query?.before_id){let e=this.first_id;return e?{...this.options,query:{...me(this.options.query),before_id:e}}:null}let e=this.last_id;return e?{...this.options,query:{...me(this.options.query),after_id:e}}:null}},v=class extends ct{constructor(e,t,n,r){super(e,t,n,r),this.data=n.data||[],this.next_page=n.next_page||null}getPaginatedItems(){return this.data??[]}nextPageRequestOptions(){let e=this.next_page;return e?{...this.options,query:{...me(this.options.query),page:e}}:null}},dt=()=>{if(typeof File>`u`){let{process:e}=globalThis,t=typeof e?.versions?.node==`string`&&parseInt(e.versions.node.split(`.`))<20;throw Error("`File` is not defined as a global, which is required for file uploads."+(t?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":``))}};function ft(e,t,n){return dt(),new File(e,t??`unknown_file`,n)}function pt(e,t){let n=typeof e==`object`&&!!e&&(`name`in e&&e.name&&String(e.name)||`url`in e&&e.url&&String(e.url)||`filename`in e&&e.filename&&String(e.filename)||`path`in e&&e.path&&String(e.path))||``;return t?n.split(/[\\/]/).pop()||void 0:n}var mt=e=>typeof e==`object`&&!!e&&typeof e[Symbol.asyncIterator]==`function`,ht=async(e,t,n=!0)=>({...e,body:await vt(e.body,t,n)}),gt=new WeakMap;function _t(e){let t=typeof e==`function`?e:e.fetch,n=gt.get(t);if(n)return n;let r=(async()=>{try{let e=`Response`in t?t.Response:(await t(`data:,`)).constructor,n=new FormData;return n.toString()!==await new e(n).text()}catch{return!0}})();return gt.set(t,r),r}var vt=async(e,t,n=!0)=>{if(!await _t(t))throw TypeError(`The provided fetch function does not support file uploads with the current global FormData class.`);let r=new FormData;return await Promise.all(Object.entries(e||{}).map(([e,t])=>bt(r,e,t,n))),r},yt=e=>e instanceof Blob&&`name`in e,bt=async(e,t,n,r)=>{if(n!==void 0){if(n==null)throw TypeError(`Received null for "${t}"; to pass null in FormData, you must use the string 'null'`);if(typeof n==`string`||typeof n==`number`||typeof n==`boolean`)e.append(t,String(n));else if(n instanceof Response){let i={},a=n.headers.get(`Content-Type`);a&&(i={type:a}),e.append(t,ft([await n.blob()],pt(n,r),i))}else if(mt(n))e.append(t,ft([await new Response(je(n)).blob()],pt(n,r)));else if(yt(n))e.append(t,ft([n],pt(n,r),{type:n.type}));else if(Array.isArray(n))await Promise.all(n.map(n=>bt(e,t+`[]`,n,r)));else if(typeof n==`object`)await Promise.all(Object.entries(n).map(([n,i])=>bt(e,`${t}[${n}]`,i,r)));else throw TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${n} instead`)}},xt=e=>typeof e==`object`&&!!e&&typeof e.size==`number`&&typeof e.type==`string`&&typeof e.text==`function`&&typeof e.slice==`function`&&typeof e.arrayBuffer==`function`,St=e=>typeof e==`object`&&!!e&&typeof e.name==`string`&&typeof e.lastModified==`number`&&xt(e),Ct=e=>typeof e==`object`&&!!e&&typeof e.url==`string`&&typeof e.blob==`function`;async function wt(e,t,n){if(dt(),e=await e,t||=pt(e,!0),St(e))return e instanceof File&&t==null&&n==null?e:ft([await e.arrayBuffer()],t??e.name,{type:e.type,lastModified:e.lastModified,...n});if(Ct(e)){let r=await e.blob();return t||=new URL(e.url).pathname.split(/[\\/]/).pop(),ft(await Tt(r),t,n)}let r=await Tt(e);if(!n?.type){let e=r.find(e=>typeof e==`object`&&`type`in e&&e.type);typeof e==`string`&&(n={...n,type:e})}return ft(r,t,n)}async function Tt(e){let t=[];if(typeof e==`string`||ArrayBuffer.isView(e)||e instanceof ArrayBuffer)t.push(e);else if(xt(e))t.push(e instanceof Blob?e:await e.arrayBuffer());else if(mt(e))for await(let n of e)t.push(...await Tt(n));else{let t=e?.constructor?.name;throw Error(`Unexpected data type: ${typeof e}${t?`; constructor: ${t}`:``}${Et(e)}`)}return t}function Et(e){return typeof e!=`object`||!e?``:`; props: [${Object.getOwnPropertyNames(e).map(e=>`"${e}"`).join(`, `)}]`}var y=class{constructor(e){this._client=e}},Dt=Symbol.for(`brand.privateNullableHeaders`);function*Ot(e){if(!e)return;if(Dt in e){let{values:t,nulls:n}=e;yield*t.entries();for(let e of n)yield[e,null];return}let t=!1,n;e instanceof Headers?n=e.entries():pe(e)?n=e:(t=!0,n=Object.entries(e??{}));for(let e of n){let n=e[0];if(typeof n!=`string`)throw TypeError(`expected header name to be a string`);let r=pe(e[1])?e[1]:[e[1]],i=!1;for(let e of r)e!==void 0&&(t&&!i&&(i=!0,yield[n,null]),yield[n,e])}}var b=e=>{let t=new Headers,n=new Set;for(let r of e){let e=new Set;for(let[i,a]of Ot(r)){let r=i.toLowerCase();e.has(r)||(t.delete(i),e.add(r)),a===null?(t.delete(i),n.add(r)):(t.append(i,a),n.delete(r))}}return{[Dt]:!0,values:t,nulls:n}};function kt(e){return e.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}var At=Object.freeze(Object.create(null)),x=((e=kt)=>function(t,...n){if(t.length===1)return t[0];let r=!1,i=[],a=t.reduce((t,a,o)=>{/[?#]/.test(a)&&(r=!0);let s=n[o],c=(r?encodeURIComponent:e)(``+s);return o!==n.length&&(s==null||typeof s==`object`&&s.toString===Object.getPrototypeOf(Object.getPrototypeOf(s.hasOwnProperty??At)??At)?.toString)&&(c=s+``,i.push({start:t.length+a.length,length:c.length,error:`Value of type ${Object.prototype.toString.call(s).slice(8,-1)} is not a valid path parameter`})),t+a+(o===n.length?``:c)},``),o=a.split(/[?#]/,1)[0],s=/(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi,c;for(;(c=s.exec(o))!==null;)i.push({start:c.index,length:c[0].length,error:`Value "${c[0]}" can\'t be safely passed as a path parameter`});if(i.sort((e,t)=>e.start-t.start),i.length>0){let e=0,t=i.reduce((t,n)=>{let r=` `.repeat(n.start-e),i=`^`.repeat(n.length);return e=n.start+n.length,t+r+i},``);throw new d(`Path parameters result in path with invalid segments:\n${i.map(e=>e.error).join(`
`)}\n${a}\n${t}`)}return a})(kt),jt=class extends y{create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/environments?beta=true`,{body:r,...t,headers:b([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString()},t?.headers])})}retrieve(e,t={},n){let{betas:r}=t??{};return this._client.get(x`/v1/environments/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}update(e,t,n){let{betas:r,...i}=t;return this._client.post(x`/v1/environments/${e}?beta=true`,{body:i,...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/environments?beta=true`,v,{query:r,...t,headers:b([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString()},t?.headers])})}delete(e,t={},n){let{betas:r}=t??{};return this._client.delete(x`/v1/environments/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}archive(e,t={},n){let{betas:r}=t??{};return this._client.post(x`/v1/environments/${e}/archive?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}},Mt=Symbol(`anthropic.sdk.stainlessHelper`);function Nt(e){return typeof e==`object`&&!!e&&Mt in e}function Pt(e,t){let n=new Set;if(e)for(let t of e)Nt(t)&&n.add(t[Mt]);if(t){for(let e of t)if(Nt(e)&&n.add(e[Mt]),Array.isArray(e.content))for(let t of e.content)Nt(t)&&n.add(t[Mt])}return Array.from(n)}function Ft(e,t){let n=Pt(e,t);return n.length===0?{}:{"x-stainless-helper":n.join(`, `)}}function It(e){return Nt(e)?{"x-stainless-helper":e[Mt]}:{}}var Lt=class extends y{list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/files?beta=true`,ut,{query:r,...t,headers:b([{"anthropic-beta":[...n??[],`files-api-2025-04-14`].toString()},t?.headers])})}delete(e,t={},n){let{betas:r}=t??{};return this._client.delete(x`/v1/files/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`files-api-2025-04-14`].toString()},n?.headers])})}download(e,t={},n){let{betas:r}=t??{};return this._client.get(x`/v1/files/${e}/content?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`files-api-2025-04-14`].toString(),Accept:`application/binary`},n?.headers]),__binaryResponse:!0})}retrieveMetadata(e,t={},n){let{betas:r}=t??{};return this._client.get(x`/v1/files/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`files-api-2025-04-14`].toString()},n?.headers])})}upload(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/files?beta=true`,ht({body:r,...t,headers:b([{"anthropic-beta":[...n??[],`files-api-2025-04-14`].toString()},It(r.file),t?.headers])},this._client))}},Rt=class extends y{retrieve(e,t={},n){let{betas:r}=t??{};return this._client.get(x`/v1/models/${e}?beta=true`,{...n,headers:b([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/models?beta=true`,ut,{query:r,...t,headers:b([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}},zt=class extends y{create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/user_profiles?beta=true`,{body:r,...t,headers:b([{"anthropic-beta":[...n??[],`user-profiles-2026-03-24`].toString()},t?.headers])})}retrieve(e,t={},n){let{betas:r}=t??{};return this._client.get(x`/v1/user_profiles/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`user-profiles-2026-03-24`].toString()},n?.headers])})}update(e,t,n){let{betas:r,...i}=t;return this._client.post(x`/v1/user_profiles/${e}?beta=true`,{body:i,...n,headers:b([{"anthropic-beta":[...r??[],`user-profiles-2026-03-24`].toString()},n?.headers])})}list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/user_profiles?beta=true`,v,{query:r,...t,headers:b([{"anthropic-beta":[...n??[],`user-profiles-2026-03-24`].toString()},t?.headers])})}createEnrollmentURL(e,t={},n){let{betas:r}=t??{};return this._client.post(x`/v1/user_profiles/${e}/enrollment_url?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`user-profiles-2026-03-24`].toString()},n?.headers])})}},Bt=class extends y{list(e,t={},n){let{betas:r,...i}=t??{};return this._client.getAPIList(x`/v1/agents/${e}/versions?beta=true`,v,{query:i,...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}},Vt=class extends y{constructor(){super(...arguments),this.versions=new Bt(this._client)}create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/agents?beta=true`,{body:r,...t,headers:b([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString()},t?.headers])})}retrieve(e,t={},n){let{betas:r,...i}=t??{};return this._client.get(x`/v1/agents/${e}?beta=true`,{query:i,...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}update(e,t,n){let{betas:r,...i}=t;return this._client.post(x`/v1/agents/${e}?beta=true`,{body:i,...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/agents?beta=true`,v,{query:r,...t,headers:b([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString()},t?.headers])})}archive(e,t={},n){let{betas:r}=t??{};return this._client.post(x`/v1/agents/${e}/archive?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}};Vt.Versions=Bt;var Ht=class extends y{create(e,t,n){let{view:r,betas:i,...a}=t;return this._client.post(x`/v1/memory_stores/${e}/memories?beta=true`,{query:{view:r},body:a,...n,headers:b([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}retrieve(e,t,n){let{memory_store_id:r,betas:i,...a}=t;return this._client.get(x`/v1/memory_stores/${r}/memories/${e}?beta=true`,{query:a,...n,headers:b([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}update(e,t,n){let{memory_store_id:r,view:i,betas:a,...o}=t;return this._client.post(x`/v1/memory_stores/${r}/memories/${e}?beta=true`,{query:{view:i},body:o,...n,headers:b([{"anthropic-beta":[...a??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}list(e,t={},n){let{betas:r,...i}=t??{};return this._client.getAPIList(x`/v1/memory_stores/${e}/memories?beta=true`,v,{query:i,...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}delete(e,t,n){let{memory_store_id:r,expected_content_sha256:i,betas:a}=t;return this._client.delete(x`/v1/memory_stores/${r}/memories/${e}?beta=true`,{query:{expected_content_sha256:i},...n,headers:b([{"anthropic-beta":[...a??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}},Ut=class extends y{retrieve(e,t,n){let{memory_store_id:r,betas:i,...a}=t;return this._client.get(x`/v1/memory_stores/${r}/memory_versions/${e}?beta=true`,{query:a,...n,headers:b([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}list(e,t={},n){let{betas:r,...i}=t??{};return this._client.getAPIList(x`/v1/memory_stores/${e}/memory_versions?beta=true`,v,{query:i,...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}redact(e,t,n){let{memory_store_id:r,betas:i}=t;return this._client.post(x`/v1/memory_stores/${r}/memory_versions/${e}/redact?beta=true`,{...n,headers:b([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}},Wt=class extends y{constructor(){super(...arguments),this.memories=new Ht(this._client),this.memoryVersions=new Ut(this._client)}create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/memory_stores?beta=true`,{body:r,...t,headers:b([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString()},t?.headers])})}retrieve(e,t={},n){let{betas:r}=t??{};return this._client.get(x`/v1/memory_stores/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}update(e,t,n){let{betas:r,...i}=t;return this._client.post(x`/v1/memory_stores/${e}?beta=true`,{body:i,...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/memory_stores?beta=true`,v,{query:r,...t,headers:b([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString()},t?.headers])})}delete(e,t={},n){let{betas:r}=t??{};return this._client.delete(x`/v1/memory_stores/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}archive(e,t={},n){let{betas:r}=t??{};return this._client.post(x`/v1/memory_stores/${e}/archive?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}};Wt.Memories=Ht,Wt.MemoryVersions=Ut;var Gt={"claude-opus-4-20250514":8192,"claude-opus-4-0":8192,"claude-4-opus-20250514":8192,"anthropic.claude-opus-4-20250514-v1:0":8192,"claude-opus-4@20250514":8192,"claude-opus-4-1-20250805":8192,"anthropic.claude-opus-4-1-20250805-v1:0":8192,"claude-opus-4-1@20250805":8192};function Kt(e){return e?.output_format??e?.output_config?.format}function qt(e,t,n){let r=Kt(t);return!t||!(`parse`in(r??{}))?{...e,content:e.content.map(e=>{if(e.type===`text`){let t=Object.defineProperty({...e},`parsed_output`,{value:null,enumerable:!1});return Object.defineProperty(t,`parsed`,{get(){return n.logger.warn("The `parsed` property on `text` blocks is deprecated, please use `parsed_output` instead."),null},enumerable:!1})}return e}),parsed_output:null}:Jt(e,t,n)}function Jt(e,t,n){let r=null,i=e.content.map(e=>{if(e.type===`text`){let i=Yt(t,e.text);r===null&&(r=i);let a=Object.defineProperty({...e},`parsed_output`,{value:i,enumerable:!1});return Object.defineProperty(a,`parsed`,{get(){return n.logger.warn("The `parsed` property on `text` blocks is deprecated, please use `parsed_output` instead."),i},enumerable:!1})}return e});return{...e,content:i,parsed_output:r}}function Yt(e,t){let n=Kt(e);if(n?.type!==`json_schema`)return null;try{return`parse`in n?n.parse(t):JSON.parse(t)}catch(e){throw new d(`Failed to parse structured output: ${e}`)}}var Xt=e=>{let t=0,n=[];for(;t<e.length;){let r=e[t];if(r===`\\`){t++;continue}if(r===`{`){n.push({type:`brace`,value:`{`}),t++;continue}if(r===`}`){n.push({type:`brace`,value:`}`}),t++;continue}if(r===`[`){n.push({type:`paren`,value:`[`}),t++;continue}if(r===`]`){n.push({type:`paren`,value:`]`}),t++;continue}if(r===`:`){n.push({type:`separator`,value:`:`}),t++;continue}if(r===`,`){n.push({type:`delimiter`,value:`,`}),t++;continue}if(r===`"`){let i=``,a=!1;for(r=e[++t];r!==`"`;){if(t===e.length){a=!0;break}if(r===`\\`){if(t++,t===e.length){a=!0;break}i+=r+e[t],r=e[++t]}else i+=r,r=e[++t]}r=e[++t],a||n.push({type:`string`,value:i});continue}if(r&&/\s/.test(r)){t++;continue}let i=/[0-9]/;if(r&&i.test(r)||r===`-`||r===`.`){let a=``;for(r===`-`&&(a+=r,r=e[++t]);r&&i.test(r)||r===`.`;)a+=r,r=e[++t];n.push({type:`number`,value:a});continue}let a=/[a-z]/i;if(r&&a.test(r)){let i=``;for(;r&&a.test(r)&&t!==e.length;)i+=r,r=e[++t];if(i==`true`||i==`false`||i===`null`)n.push({type:`name`,value:i});else{t++;continue}continue}t++}return n},Zt=e=>{if(e.length===0)return e;let t=e[e.length-1];switch(t.type){case`separator`:return e=e.slice(0,e.length-1),Zt(e);case`number`:let n=t.value[t.value.length-1];if(n===`.`||n===`-`)return e=e.slice(0,e.length-1),Zt(e);case`string`:let r=e[e.length-2];if(r?.type===`delimiter`||r?.type===`brace`&&r.value===`{`)return e=e.slice(0,e.length-1),Zt(e);break;case`delimiter`:return e=e.slice(0,e.length-1),Zt(e)}return e},Qt=e=>{let t=[];return e.map(e=>{e.type===`brace`&&(e.value===`{`?t.push(`}`):t.splice(t.lastIndexOf(`}`),1)),e.type===`paren`&&(e.value===`[`?t.push(`]`):t.splice(t.lastIndexOf(`]`),1))}),t.length>0&&t.reverse().map(t=>{t===`}`?e.push({type:`brace`,value:`}`}):t===`]`&&e.push({type:`paren`,value:`]`})}),e},$t=e=>{let t=``;return e.map(e=>{switch(e.type){case`string`:t+=`"`+e.value+`"`;break;default:t+=e.value;break}}),t},en=e=>JSON.parse($t(Qt(Zt(Xt(e))))),S,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn=`__json_buf`;function En(e){return e.type===`tool_use`||e.type===`server_tool_use`||e.type===`mcp_tool_use`}var Dn=class e{constructor(e,t){S.add(this),this.messages=[],this.receivedMessages=[],tn.set(this,void 0),nn.set(this,null),this.controller=new AbortController,rn.set(this,void 0),an.set(this,()=>{}),on.set(this,()=>{}),sn.set(this,void 0),cn.set(this,()=>{}),ln.set(this,()=>{}),un.set(this,{}),dn.set(this,!1),fn.set(this,!1),pn.set(this,!1),mn.set(this,!1),hn.set(this,void 0),gn.set(this,void 0),_n.set(this,void 0),bn.set(this,e=>{if(s(this,fn,!0,`f`),u(e)&&(e=new p),e instanceof p)return s(this,pn,!0,`f`),this._emit(`abort`,e);if(e instanceof d)return this._emit(`error`,e);if(e instanceof Error){let t=new d(e.message);return t.cause=e,this._emit(`error`,t)}return this._emit(`error`,new d(String(e)))}),s(this,rn,new Promise((e,t)=>{s(this,an,e,`f`),s(this,on,t,`f`)}),`f`),s(this,sn,new Promise((e,t)=>{s(this,cn,e,`f`),s(this,ln,t,`f`)}),`f`),c(this,rn,`f`).catch(()=>{}),c(this,sn,`f`).catch(()=>{}),s(this,nn,e,`f`),s(this,_n,t?.logger??console,`f`)}get response(){return c(this,hn,`f`)}get request_id(){return c(this,gn,`f`)}async withResponse(){s(this,mn,!0,`f`);let e=await c(this,rn,`f`);if(!e)throw Error("Could not resolve a `Response` object");return{data:this,response:e,request_id:e.headers.get(`request-id`)}}static fromReadableStream(t){let n=new e(null);return n._run(()=>n._fromReadableStream(t)),n}static createMessage(t,n,r,{logger:i}={}){let a=new e(n,{logger:i});for(let e of n.messages)a._addMessageParam(e);return s(a,nn,{...n,stream:!0},`f`),a._run(()=>a._createMessage(t,{...n,stream:!0},{...r,headers:{...r?.headers,"X-Stainless-Helper-Method":`stream`}})),a}_run(e){e().then(()=>{this._emitFinal(),this._emit(`end`)},c(this,bn,`f`))}_addMessageParam(e){this.messages.push(e)}_addMessage(e,t=!0){this.receivedMessages.push(e),t&&this._emit(`message`,e)}async _createMessage(e,t,n){let r=n?.signal,i;r&&(r.aborted&&this.controller.abort(),i=this.controller.abort.bind(this.controller),r.addEventListener(`abort`,i));try{c(this,S,`m`,xn).call(this);let{response:r,data:i}=await e.create({...t,stream:!0},{...n,signal:this.controller.signal}).withResponse();this._connected(r);for await(let e of i)c(this,S,`m`,Sn).call(this,e);if(i.controller.signal?.aborted)throw new p;c(this,S,`m`,Cn).call(this)}finally{r&&i&&r.removeEventListener(`abort`,i)}}_connected(e){this.ended||(s(this,hn,e,`f`),s(this,gn,e?.headers.get(`request-id`),`f`),c(this,an,`f`).call(this,e),this._emit(`connect`))}get ended(){return c(this,dn,`f`)}get errored(){return c(this,fn,`f`)}get aborted(){return c(this,pn,`f`)}abort(){this.controller.abort()}on(e,t){return(c(this,un,`f`)[e]||(c(this,un,`f`)[e]=[])).push({listener:t}),this}off(e,t){let n=c(this,un,`f`)[e];if(!n)return this;let r=n.findIndex(e=>e.listener===t);return r>=0&&n.splice(r,1),this}once(e,t){return(c(this,un,`f`)[e]||(c(this,un,`f`)[e]=[])).push({listener:t,once:!0}),this}emitted(e){return new Promise((t,n)=>{s(this,mn,!0,`f`),e!==`error`&&this.once(`error`,n),this.once(e,t)})}async done(){s(this,mn,!0,`f`),await c(this,sn,`f`)}get currentMessage(){return c(this,tn,`f`)}async finalMessage(){return await this.done(),c(this,S,`m`,vn).call(this)}async finalText(){return await this.done(),c(this,S,`m`,yn).call(this)}_emit(e,...t){if(c(this,dn,`f`))return;e===`end`&&(s(this,dn,!0,`f`),c(this,cn,`f`).call(this));let n=c(this,un,`f`)[e];if(n&&(c(this,un,`f`)[e]=n.filter(e=>!e.once),n.forEach(({listener:e})=>e(...t))),e===`abort`){let e=t[0];!c(this,mn,`f`)&&!n?.length&&Promise.reject(e),c(this,on,`f`).call(this,e),c(this,ln,`f`).call(this,e),this._emit(`end`);return}if(e===`error`){let e=t[0];!c(this,mn,`f`)&&!n?.length&&Promise.reject(e),c(this,on,`f`).call(this,e),c(this,ln,`f`).call(this,e),this._emit(`end`)}}_emitFinal(){this.receivedMessages.at(-1)&&this._emit(`finalMessage`,c(this,S,`m`,vn).call(this))}async _fromReadableStream(e,t){let n=t?.signal,r;n&&(n.aborted&&this.controller.abort(),r=this.controller.abort.bind(this.controller),n.addEventListener(`abort`,r));try{c(this,S,`m`,xn).call(this),this._connected(null);let t=Qe.fromReadableStream(e,this.controller);for await(let e of t)c(this,S,`m`,Sn).call(this,e);if(t.controller.signal?.aborted)throw new p;c(this,S,`m`,Cn).call(this)}finally{n&&r&&n.removeEventListener(`abort`,r)}}[(tn=new WeakMap,nn=new WeakMap,rn=new WeakMap,an=new WeakMap,on=new WeakMap,sn=new WeakMap,cn=new WeakMap,ln=new WeakMap,un=new WeakMap,dn=new WeakMap,fn=new WeakMap,pn=new WeakMap,mn=new WeakMap,hn=new WeakMap,gn=new WeakMap,_n=new WeakMap,bn=new WeakMap,S=new WeakSet,vn=function(){if(this.receivedMessages.length===0)throw new d(`stream ended without producing a Message with role=assistant`);return this.receivedMessages.at(-1)},yn=function(){if(this.receivedMessages.length===0)throw new d(`stream ended without producing a Message with role=assistant`);let e=this.receivedMessages.at(-1).content.filter(e=>e.type===`text`).map(e=>e.text);if(e.length===0)throw new d(`stream ended without producing a content block with type=text`);return e.join(` `)},xn=function(){this.ended||s(this,tn,void 0,`f`)},Sn=function(e){if(this.ended)return;let t=c(this,S,`m`,wn).call(this,e);switch(this._emit(`streamEvent`,e,t),e.type){case`content_block_delta`:{let n=t.content.at(-1);switch(e.delta.type){case`text_delta`:n.type===`text`&&this._emit(`text`,e.delta.text,n.text||``);break;case`citations_delta`:n.type===`text`&&this._emit(`citation`,e.delta.citation,n.citations??[]);break;case`input_json_delta`:En(n)&&n.input&&this._emit(`inputJson`,e.delta.partial_json,n.input);break;case`thinking_delta`:n.type===`thinking`&&this._emit(`thinking`,e.delta.thinking,n.thinking);break;case`signature_delta`:n.type===`thinking`&&this._emit(`signature`,n.signature);break;case`compaction_delta`:n.type===`compaction`&&n.content&&this._emit(`compaction`,n.content);break;default:e.delta}break}case`message_stop`:this._addMessageParam(t),this._addMessage(qt(t,c(this,nn,`f`),{logger:c(this,_n,`f`)}),!0);break;case`content_block_stop`:this._emit(`contentBlock`,t.content.at(-1));break;case`message_start`:s(this,tn,t,`f`);break;case`content_block_start`:case`message_delta`:break}},Cn=function(){if(this.ended)throw new d(`stream has ended, this shouldn't happen`);let e=c(this,tn,`f`);if(!e)throw new d(`request ended without sending any chunks`);return s(this,tn,void 0,`f`),qt(e,c(this,nn,`f`),{logger:c(this,_n,`f`)})},wn=function(e){let t=c(this,tn,`f`);if(e.type===`message_start`){if(t)throw new d(`Unexpected event order, got ${e.type} before receiving "message_stop"`);return e.message}if(!t)throw new d(`Unexpected event order, got ${e.type} before "message_start"`);switch(e.type){case`message_stop`:return t;case`message_delta`:return t.container=e.delta.container,t.stop_reason=e.delta.stop_reason,t.stop_sequence=e.delta.stop_sequence,t.usage.output_tokens=e.usage.output_tokens,t.context_management=e.context_management,e.usage.input_tokens!=null&&(t.usage.input_tokens=e.usage.input_tokens),e.usage.cache_creation_input_tokens!=null&&(t.usage.cache_creation_input_tokens=e.usage.cache_creation_input_tokens),e.usage.cache_read_input_tokens!=null&&(t.usage.cache_read_input_tokens=e.usage.cache_read_input_tokens),e.usage.server_tool_use!=null&&(t.usage.server_tool_use=e.usage.server_tool_use),e.usage.iterations!=null&&(t.usage.iterations=e.usage.iterations),t;case`content_block_start`:return t.content.push(e.content_block),t;case`content_block_delta`:{let n=t.content.at(e.index);switch(e.delta.type){case`text_delta`:n?.type===`text`&&(t.content[e.index]={...n,text:(n.text||``)+e.delta.text});break;case`citations_delta`:n?.type===`text`&&(t.content[e.index]={...n,citations:[...n.citations??[],e.delta.citation]});break;case`input_json_delta`:if(n&&En(n)){let r=n[Tn]||``;r+=e.delta.partial_json;let i={...n};if(Object.defineProperty(i,Tn,{value:r,enumerable:!1,writable:!0}),r)try{i.input=en(r)}catch(e){let t=new d(`Unable to parse tool parameter JSON from model. Please retry your request or adjust your prompt. Error: ${e}. JSON: ${r}`);c(this,bn,`f`).call(this,t)}t.content[e.index]=i}break;case`thinking_delta`:n?.type===`thinking`&&(t.content[e.index]={...n,thinking:n.thinking+e.delta.thinking});break;case`signature_delta`:n?.type===`thinking`&&(t.content[e.index]={...n,signature:e.delta.signature});break;case`compaction_delta`:n?.type===`compaction`&&(t.content[e.index]={...n,content:(n.content||``)+e.delta.content});break;default:e.delta}return t}case`content_block_stop`:return t}},Symbol.asyncIterator)](){let e=[],t=[],n=!1;return this.on(`streamEvent`,n=>{let r=t.shift();r?r.resolve(n):e.push(n)}),this.on(`end`,()=>{n=!0;for(let e of t)e.resolve(void 0);t.length=0}),this.on(`abort`,e=>{n=!0;for(let n of t)n.reject(e);t.length=0}),this.on(`error`,e=>{n=!0;for(let n of t)n.reject(e);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:n?{value:void 0,done:!0}:new Promise((e,n)=>t.push({resolve:e,reject:n})).then(e=>e?{value:e,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new Qe(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}},On=class extends Error{constructor(e){let t=typeof e==`string`?e:e.map(e=>e.type===`text`?e.text:`[${e.type}]`).join(` `);super(t),this.name=`ToolError`,this.content=e}},kn=`You have been working on the task described above but have not yet completed it. Write a continuation summary that will allow you (or another instance of yourself) to resume work efficiently in a future context window where the conversation history will be replaced with this summary. Your summary should be structured, concise, and actionable. Include:
1. Task Overview
The user's core request and success criteria
Any clarifications or constraints they specified
2. Current State
What has been completed so far
Files created, modified, or analyzed (with paths if relevant)
Key outputs or artifacts produced
3. Important Discoveries
Technical constraints or requirements uncovered
Decisions made and their rationale
Errors encountered and how they were resolved
What approaches were tried that didn't work (and why)
4. Next Steps
Specific actions needed to complete the task
Any blockers or open questions to resolve
Priority order if multiple steps remain
5. Context to Preserve
User preferences or style requirements
Domain-specific details that aren't obvious
Any promises made to the user
Be concise but complete—err on the side of including information that would prevent duplicate work or repeated mistakes. Write in a way that enables immediate resumption of the task.
Wrap your summary in <summary></summary> tags.`,An,jn,Mn,C,w,T,Nn,Pn,Fn,In,Ln;function Rn(){let e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var zn=class{constructor(e,t,n){An.add(this),this.client=e,jn.set(this,!1),Mn.set(this,!1),C.set(this,void 0),w.set(this,void 0),T.set(this,void 0),Nn.set(this,void 0),Pn.set(this,void 0),Fn.set(this,0),s(this,C,{params:{...t,messages:structuredClone(t.messages)}},`f`);let r=[`BetaToolRunner`,...Pt(t.tools,t.messages)].join(`, `);s(this,w,{...n,headers:b([{"x-stainless-helper":r},n?.headers])},`f`),s(this,Pn,Rn(),`f`),t.compactionControl?.enabled&&console.warn('Anthropic: The `compactionControl` parameter is deprecated and will be removed in a future version. Use server-side compaction instead by passing `edits: [{ type: "compact_20260112" }]` in the params passed to `toolRunner()`. See https://platform.claude.com/docs/en/build-with-claude/compaction')}async*[(jn=new WeakMap,Mn=new WeakMap,C=new WeakMap,w=new WeakMap,T=new WeakMap,Nn=new WeakMap,Pn=new WeakMap,Fn=new WeakMap,An=new WeakSet,In=async function(){let e=c(this,C,`f`).params.compactionControl;if(!e||!e.enabled)return!1;let t=0;if(c(this,T,`f`)!==void 0)try{let e=await c(this,T,`f`);t=e.usage.input_tokens+(e.usage.cache_creation_input_tokens??0)+(e.usage.cache_read_input_tokens??0)+e.usage.output_tokens}catch{return!1}let n=e.contextTokenThreshold??1e5;if(t<n)return!1;let r=e.model??c(this,C,`f`).params.model,i=e.summaryPrompt??kn,a=c(this,C,`f`).params.messages;if(a[a.length-1].role===`assistant`){let e=a[a.length-1];if(Array.isArray(e.content)){let t=e.content.filter(e=>e.type!==`tool_use`);t.length===0?a.pop():e.content=t}}let o=await this.client.beta.messages.create({model:r,messages:[...a,{role:`user`,content:[{type:`text`,text:i}]}],max_tokens:c(this,C,`f`).params.max_tokens},{signal:c(this,w,`f`).signal,headers:b([c(this,w,`f`).headers,{"x-stainless-helper":`compaction`}])});if(o.content[0]?.type!==`text`)throw new d(`Expected text response for compaction`);return c(this,C,`f`).params.messages=[{role:`user`,content:o.content}],!0},Symbol.asyncIterator)](){var e;if(c(this,jn,`f`))throw new d(`Cannot iterate over a consumed stream`);s(this,jn,!0,`f`),s(this,Mn,!0,`f`),s(this,Nn,void 0,`f`);try{for(;;){let t;try{if(c(this,C,`f`).params.max_iterations&&c(this,Fn,`f`)>=c(this,C,`f`).params.max_iterations)break;s(this,Mn,!1,`f`),s(this,Nn,void 0,`f`),s(this,Fn,(e=c(this,Fn,`f`),e++,e),`f`),s(this,T,void 0,`f`);let{max_iterations:n,compactionControl:r,...i}=c(this,C,`f`).params;if(i.stream?(t=this.client.beta.messages.stream({...i},c(this,w,`f`)),s(this,T,t.finalMessage(),`f`),c(this,T,`f`).catch(()=>{}),yield t):(s(this,T,this.client.beta.messages.create({...i,stream:!1},c(this,w,`f`)),`f`),yield c(this,T,`f`)),!await c(this,An,`m`,In).call(this)){if(!c(this,Mn,`f`)){let{role:e,content:t}=await c(this,T,`f`);c(this,C,`f`).params.messages.push({role:e,content:t})}let e=await c(this,An,`m`,Ln).call(this,c(this,C,`f`).params.messages.at(-1));if(e)c(this,C,`f`).params.messages.push(e);else if(!c(this,Mn,`f`))break}}finally{t&&t.abort()}}if(!c(this,T,`f`))throw new d(`ToolRunner concluded without a message from the server`);c(this,Pn,`f`).resolve(await c(this,T,`f`))}catch(e){throw s(this,jn,!1,`f`),c(this,Pn,`f`).promise.catch(()=>{}),c(this,Pn,`f`).reject(e),s(this,Pn,Rn(),`f`),e}}setMessagesParams(e){typeof e==`function`?c(this,C,`f`).params=e(c(this,C,`f`).params):c(this,C,`f`).params=e,s(this,Mn,!0,`f`),s(this,Nn,void 0,`f`)}setRequestOptions(e){typeof e==`function`?s(this,w,e(c(this,w,`f`)),`f`):s(this,w,{...c(this,w,`f`),...e},`f`)}async generateToolResponse(e=c(this,w,`f`).signal){let t=await c(this,T,`f`)??this.params.messages.at(-1);return t?c(this,An,`m`,Ln).call(this,t,e):null}done(){return c(this,Pn,`f`).promise}async runUntilDone(){if(!c(this,jn,`f`))for await(let e of this);return this.done()}get params(){return c(this,C,`f`).params}pushMessages(...e){this.setMessagesParams(t=>({...t,messages:[...t.messages,...e]}))}then(e,t){return this.runUntilDone().then(e,t)}};Ln=async function(e,t=c(this,w,`f`).signal){return c(this,Nn,`f`)===void 0&&s(this,Nn,Bn(c(this,C,`f`).params,e,{...c(this,w,`f`),signal:t}),`f`),c(this,Nn,`f`)};async function Bn(e,t=e.messages.at(-1),n){if(!t||t.role!==`assistant`||!t.content||typeof t.content==`string`)return null;let r=t.content.filter(e=>e.type===`tool_use`);return r.length===0?null:{role:`user`,content:await Promise.all(r.map(async t=>{let r=e.tools.find(e=>(`name`in e?e.name:e.mcp_server_name)===t.name);if(!r||!(`run`in r))return{type:`tool_result`,tool_use_id:t.id,content:`Error: Tool '${t.name}' not found`,is_error:!0};try{let e=t.input;`parse`in r&&r.parse&&(e=r.parse(e));let i=await r.run(e,{toolUseBlock:t,signal:n?.signal});return{type:`tool_result`,tool_use_id:t.id,content:i}}catch(e){return{type:`tool_result`,tool_use_id:t.id,content:e instanceof On?e.content:`Error: ${e instanceof Error?e.message:String(e)}`,is_error:!0}}}))}}var Vn=class e{constructor(e,t){this.iterator=e,this.controller=t}async*decoder(){let e=new Ve;for await(let t of this.iterator)for(let n of e.decode(t))yield JSON.parse(n);for(let t of e.flush())yield JSON.parse(t)}[Symbol.asyncIterator](){return this.decoder()}static fromResponse(t,n){if(!t.body)throw n.abort(),globalThis.navigator!==void 0&&globalThis.navigator.product===`ReactNative`?new d(`The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api`):new d(`Attempted to iterate over a response with no body`);return new e(Me(t.body),n)}},Hn=class extends y{create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/messages/batches?beta=true`,{body:r,...t,headers:b([{"anthropic-beta":[...n??[],`message-batches-2024-09-24`].toString()},t?.headers])})}retrieve(e,t={},n){let{betas:r}=t??{};return this._client.get(x`/v1/messages/batches/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`message-batches-2024-09-24`].toString()},n?.headers])})}list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/messages/batches?beta=true`,ut,{query:r,...t,headers:b([{"anthropic-beta":[...n??[],`message-batches-2024-09-24`].toString()},t?.headers])})}delete(e,t={},n){let{betas:r}=t??{};return this._client.delete(x`/v1/messages/batches/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`message-batches-2024-09-24`].toString()},n?.headers])})}cancel(e,t={},n){let{betas:r}=t??{};return this._client.post(x`/v1/messages/batches/${e}/cancel?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`message-batches-2024-09-24`].toString()},n?.headers])})}async results(e,t={},n){let r=await this.retrieve(e);if(!r.results_url)throw new d(`No batch \`results_url\`; Has it finished processing? ${r.processing_status} - ${r.id}`);let{betas:i}=t??{};return this._client.get(r.results_url,{...n,headers:b([{"anthropic-beta":[...i??[],`message-batches-2024-09-24`].toString(),Accept:`application/binary`},n?.headers]),stream:!0,__binaryResponse:!0})._thenUnwrap((e,t)=>Vn.fromResponse(t.response,t.controller))}},Un={"claude-1.3":`November 6th, 2024`,"claude-1.3-100k":`November 6th, 2024`,"claude-instant-1.1":`November 6th, 2024`,"claude-instant-1.1-100k":`November 6th, 2024`,"claude-instant-1.2":`November 6th, 2024`,"claude-3-sonnet-20240229":`July 21st, 2025`,"claude-3-opus-20240229":`January 5th, 2026`,"claude-2.1":`July 21st, 2025`,"claude-2.0":`July 21st, 2025`,"claude-3-7-sonnet-latest":`February 19th, 2026`,"claude-3-7-sonnet-20250219":`February 19th, 2026`},Wn=[`claude-mythos-preview`,`claude-opus-4-6`],Gn=class extends y{constructor(){super(...arguments),this.batches=new Hn(this._client)}create(e,t){let n=Kn(e),{betas:r,...i}=n;i.model in Un&&console.warn(`The model '${i.model}' is deprecated and will reach end-of-life on ${Un[i.model]}\nPlease migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`),Wn.includes(i.model)&&i.thinking&&i.thinking.type===`enabled`&&console.warn(`Using Claude with ${i.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`);let a=this._client._options.timeout;if(!i.stream&&a==null){let e=Gt[i.model]??void 0;a=this._client.calculateNonstreamingTimeout(i.max_tokens,e)}let o=Ft(i.tools,i.messages);return this._client.post(`/v1/messages?beta=true`,{body:i,timeout:a??6e5,...t,headers:b([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},o,t?.headers]),stream:n.stream??!1})}parse(e,t){return t={...t,headers:b([{"anthropic-beta":[...e.betas??[],`structured-outputs-2025-12-15`].toString()},t?.headers])},this.create(e,t).then(t=>Jt(t,e,{logger:this._client.logger??console}))}stream(e,t){return Dn.createMessage(this,e,t)}countTokens(e,t){let{betas:n,...r}=Kn(e);return this._client.post(`/v1/messages/count_tokens?beta=true`,{body:r,...t,headers:b([{"anthropic-beta":[...n??[],`token-counting-2024-11-01`].toString()},t?.headers])})}toolRunner(e,t){return new zn(this._client,e,t)}};function Kn(e){if(!e.output_format)return e;if(e.output_config?.format)throw new d(`Both output_format and output_config.format were provided. Please use only output_config.format (output_format is deprecated).`);let{output_format:t,...n}=e;return{...n,output_config:{...e.output_config,format:t}}}Gn.Batches=Hn,Gn.BetaToolRunner=zn,Gn.ToolError=On;var qn=class extends y{list(e,t={},n){let{betas:r,...i}=t??{};return this._client.getAPIList(x`/v1/sessions/${e}/events?beta=true`,v,{query:i,...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}send(e,t,n){let{betas:r,...i}=t;return this._client.post(x`/v1/sessions/${e}/events?beta=true`,{body:i,...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}stream(e,t={},n){let{betas:r}=t??{};return this._client.get(x`/v1/sessions/${e}/events/stream?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers]),stream:!0})}},Jn=class extends y{retrieve(e,t,n){let{session_id:r,betas:i}=t;return this._client.get(x`/v1/sessions/${r}/resources/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}update(e,t,n){let{session_id:r,betas:i,...a}=t;return this._client.post(x`/v1/sessions/${r}/resources/${e}?beta=true`,{body:a,...n,headers:b([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}list(e,t={},n){let{betas:r,...i}=t??{};return this._client.getAPIList(x`/v1/sessions/${e}/resources?beta=true`,v,{query:i,...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}delete(e,t,n){let{session_id:r,betas:i}=t;return this._client.delete(x`/v1/sessions/${r}/resources/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}add(e,t,n){let{betas:r,...i}=t;return this._client.post(x`/v1/sessions/${e}/resources?beta=true`,{body:i,...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}},Yn=class extends y{constructor(){super(...arguments),this.events=new qn(this._client),this.resources=new Jn(this._client)}create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/sessions?beta=true`,{body:r,...t,headers:b([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString()},t?.headers])})}retrieve(e,t={},n){let{betas:r}=t??{};return this._client.get(x`/v1/sessions/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}update(e,t,n){let{betas:r,...i}=t;return this._client.post(x`/v1/sessions/${e}?beta=true`,{body:i,...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/sessions?beta=true`,v,{query:r,...t,headers:b([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString()},t?.headers])})}delete(e,t={},n){let{betas:r}=t??{};return this._client.delete(x`/v1/sessions/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}archive(e,t={},n){let{betas:r}=t??{};return this._client.post(x`/v1/sessions/${e}/archive?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}};Yn.Events=qn,Yn.Resources=Jn;var Xn=class extends y{create(e,t={},n){let{betas:r,...i}=t??{};return this._client.post(x`/v1/skills/${e}/versions?beta=true`,ht({body:i,...n,headers:b([{"anthropic-beta":[...r??[],`skills-2025-10-02`].toString()},n?.headers])},this._client))}retrieve(e,t,n){let{skill_id:r,betas:i}=t;return this._client.get(x`/v1/skills/${r}/versions/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...i??[],`skills-2025-10-02`].toString()},n?.headers])})}list(e,t={},n){let{betas:r,...i}=t??{};return this._client.getAPIList(x`/v1/skills/${e}/versions?beta=true`,v,{query:i,...n,headers:b([{"anthropic-beta":[...r??[],`skills-2025-10-02`].toString()},n?.headers])})}delete(e,t,n){let{skill_id:r,betas:i}=t;return this._client.delete(x`/v1/skills/${r}/versions/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...i??[],`skills-2025-10-02`].toString()},n?.headers])})}},Zn=class extends y{constructor(){super(...arguments),this.versions=new Xn(this._client)}create(e={},t){let{betas:n,...r}=e??{};return this._client.post(`/v1/skills?beta=true`,ht({body:r,...t,headers:b([{"anthropic-beta":[...n??[],`skills-2025-10-02`].toString()},t?.headers])},this._client,!1))}retrieve(e,t={},n){let{betas:r}=t??{};return this._client.get(x`/v1/skills/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`skills-2025-10-02`].toString()},n?.headers])})}list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/skills?beta=true`,v,{query:r,...t,headers:b([{"anthropic-beta":[...n??[],`skills-2025-10-02`].toString()},t?.headers])})}delete(e,t={},n){let{betas:r}=t??{};return this._client.delete(x`/v1/skills/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`skills-2025-10-02`].toString()},n?.headers])})}};Zn.Versions=Xn;var Qn=class extends y{create(e,t,n){let{betas:r,...i}=t;return this._client.post(x`/v1/vaults/${e}/credentials?beta=true`,{body:i,...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}retrieve(e,t,n){let{vault_id:r,betas:i}=t;return this._client.get(x`/v1/vaults/${r}/credentials/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}update(e,t,n){let{vault_id:r,betas:i,...a}=t;return this._client.post(x`/v1/vaults/${r}/credentials/${e}?beta=true`,{body:a,...n,headers:b([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}list(e,t={},n){let{betas:r,...i}=t??{};return this._client.getAPIList(x`/v1/vaults/${e}/credentials?beta=true`,v,{query:i,...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}delete(e,t,n){let{vault_id:r,betas:i}=t;return this._client.delete(x`/v1/vaults/${r}/credentials/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}archive(e,t,n){let{vault_id:r,betas:i}=t;return this._client.post(x`/v1/vaults/${r}/credentials/${e}/archive?beta=true`,{...n,headers:b([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}},$n=class extends y{constructor(){super(...arguments),this.credentials=new Qn(this._client)}create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/vaults?beta=true`,{body:r,...t,headers:b([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString()},t?.headers])})}retrieve(e,t={},n){let{betas:r}=t??{};return this._client.get(x`/v1/vaults/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}update(e,t,n){let{betas:r,...i}=t;return this._client.post(x`/v1/vaults/${e}?beta=true`,{body:i,...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/vaults?beta=true`,v,{query:r,...t,headers:b([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString()},t?.headers])})}delete(e,t={},n){let{betas:r}=t??{};return this._client.delete(x`/v1/vaults/${e}?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}archive(e,t={},n){let{betas:r}=t??{};return this._client.post(x`/v1/vaults/${e}/archive?beta=true`,{...n,headers:b([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}};$n.Credentials=Qn;var er=class extends y{constructor(){super(...arguments),this.models=new Rt(this._client),this.messages=new Gn(this._client),this.agents=new Vt(this._client),this.environments=new jt(this._client),this.sessions=new Yn(this._client),this.vaults=new $n(this._client),this.memoryStores=new Wt(this._client),this.files=new Lt(this._client),this.skills=new Zn(this._client),this.userProfiles=new zt(this._client)}};er.Models=Rt,er.Messages=Gn,er.Agents=Vt,er.Environments=jt,er.Sessions=Yn,er.Vaults=$n,er.MemoryStores=Wt,er.Files=Lt,er.Skills=Zn,er.UserProfiles=zt;var tr=class extends y{create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/complete`,{body:r,timeout:this._client._options.timeout??6e5,...t,headers:b([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers]),stream:e.stream??!1})}};function nr(e){return e?.output_config?.format}function rr(e,t,n){let r=nr(t);return!t||!(`parse`in(r??{}))?{...e,content:e.content.map(e=>e.type===`text`?Object.defineProperty({...e},`parsed_output`,{value:null,enumerable:!1}):e),parsed_output:null}:ir(e,t,n)}function ir(e,t,n){let r=null,i=e.content.map(e=>{if(e.type===`text`){let n=ar(t,e.text);return r===null&&(r=n),Object.defineProperty({...e},`parsed_output`,{value:n,enumerable:!1})}return e});return{...e,content:i,parsed_output:r}}function ar(e,t){let n=nr(e);if(n?.type!==`json_schema`)return null;try{return`parse`in n?n.parse(t):JSON.parse(t)}catch(e){throw new d(`Failed to parse structured output: ${e}`)}}var or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar=`__json_buf`;function jr(e){return e.type===`tool_use`||e.type===`server_tool_use`}var Mr=class e{constructor(e,t){or.add(this),this.messages=[],this.receivedMessages=[],sr.set(this,void 0),cr.set(this,null),this.controller=new AbortController,lr.set(this,void 0),ur.set(this,()=>{}),dr.set(this,()=>{}),fr.set(this,void 0),pr.set(this,()=>{}),mr.set(this,()=>{}),hr.set(this,{}),gr.set(this,!1),_r.set(this,!1),vr.set(this,!1),yr.set(this,!1),br.set(this,void 0),xr.set(this,void 0),Sr.set(this,void 0),Tr.set(this,e=>{if(s(this,_r,!0,`f`),u(e)&&(e=new p),e instanceof p)return s(this,vr,!0,`f`),this._emit(`abort`,e);if(e instanceof d)return this._emit(`error`,e);if(e instanceof Error){let t=new d(e.message);return t.cause=e,this._emit(`error`,t)}return this._emit(`error`,new d(String(e)))}),s(this,lr,new Promise((e,t)=>{s(this,ur,e,`f`),s(this,dr,t,`f`)}),`f`),s(this,fr,new Promise((e,t)=>{s(this,pr,e,`f`),s(this,mr,t,`f`)}),`f`),c(this,lr,`f`).catch(()=>{}),c(this,fr,`f`).catch(()=>{}),s(this,cr,e,`f`),s(this,Sr,t?.logger??console,`f`)}get response(){return c(this,br,`f`)}get request_id(){return c(this,xr,`f`)}async withResponse(){s(this,yr,!0,`f`);let e=await c(this,lr,`f`);if(!e)throw Error("Could not resolve a `Response` object");return{data:this,response:e,request_id:e.headers.get(`request-id`)}}static fromReadableStream(t){let n=new e(null);return n._run(()=>n._fromReadableStream(t)),n}static createMessage(t,n,r,{logger:i}={}){let a=new e(n,{logger:i});for(let e of n.messages)a._addMessageParam(e);return s(a,cr,{...n,stream:!0},`f`),a._run(()=>a._createMessage(t,{...n,stream:!0},{...r,headers:{...r?.headers,"X-Stainless-Helper-Method":`stream`}})),a}_run(e){e().then(()=>{this._emitFinal(),this._emit(`end`)},c(this,Tr,`f`))}_addMessageParam(e){this.messages.push(e)}_addMessage(e,t=!0){this.receivedMessages.push(e),t&&this._emit(`message`,e)}async _createMessage(e,t,n){let r=n?.signal,i;r&&(r.aborted&&this.controller.abort(),i=this.controller.abort.bind(this.controller),r.addEventListener(`abort`,i));try{c(this,or,`m`,Er).call(this);let{response:r,data:i}=await e.create({...t,stream:!0},{...n,signal:this.controller.signal}).withResponse();this._connected(r);for await(let e of i)c(this,or,`m`,Dr).call(this,e);if(i.controller.signal?.aborted)throw new p;c(this,or,`m`,Or).call(this)}finally{r&&i&&r.removeEventListener(`abort`,i)}}_connected(e){this.ended||(s(this,br,e,`f`),s(this,xr,e?.headers.get(`request-id`),`f`),c(this,ur,`f`).call(this,e),this._emit(`connect`))}get ended(){return c(this,gr,`f`)}get errored(){return c(this,_r,`f`)}get aborted(){return c(this,vr,`f`)}abort(){this.controller.abort()}on(e,t){return(c(this,hr,`f`)[e]||(c(this,hr,`f`)[e]=[])).push({listener:t}),this}off(e,t){let n=c(this,hr,`f`)[e];if(!n)return this;let r=n.findIndex(e=>e.listener===t);return r>=0&&n.splice(r,1),this}once(e,t){return(c(this,hr,`f`)[e]||(c(this,hr,`f`)[e]=[])).push({listener:t,once:!0}),this}emitted(e){return new Promise((t,n)=>{s(this,yr,!0,`f`),e!==`error`&&this.once(`error`,n),this.once(e,t)})}async done(){s(this,yr,!0,`f`),await c(this,fr,`f`)}get currentMessage(){return c(this,sr,`f`)}async finalMessage(){return await this.done(),c(this,or,`m`,Cr).call(this)}async finalText(){return await this.done(),c(this,or,`m`,wr).call(this)}_emit(e,...t){if(c(this,gr,`f`))return;e===`end`&&(s(this,gr,!0,`f`),c(this,pr,`f`).call(this));let n=c(this,hr,`f`)[e];if(n&&(c(this,hr,`f`)[e]=n.filter(e=>!e.once),n.forEach(({listener:e})=>e(...t))),e===`abort`){let e=t[0];!c(this,yr,`f`)&&!n?.length&&Promise.reject(e),c(this,dr,`f`).call(this,e),c(this,mr,`f`).call(this,e),this._emit(`end`);return}if(e===`error`){let e=t[0];!c(this,yr,`f`)&&!n?.length&&Promise.reject(e),c(this,dr,`f`).call(this,e),c(this,mr,`f`).call(this,e),this._emit(`end`)}}_emitFinal(){this.receivedMessages.at(-1)&&this._emit(`finalMessage`,c(this,or,`m`,Cr).call(this))}async _fromReadableStream(e,t){let n=t?.signal,r;n&&(n.aborted&&this.controller.abort(),r=this.controller.abort.bind(this.controller),n.addEventListener(`abort`,r));try{c(this,or,`m`,Er).call(this),this._connected(null);let t=Qe.fromReadableStream(e,this.controller);for await(let e of t)c(this,or,`m`,Dr).call(this,e);if(t.controller.signal?.aborted)throw new p;c(this,or,`m`,Or).call(this)}finally{n&&r&&n.removeEventListener(`abort`,r)}}[(sr=new WeakMap,cr=new WeakMap,lr=new WeakMap,ur=new WeakMap,dr=new WeakMap,fr=new WeakMap,pr=new WeakMap,mr=new WeakMap,hr=new WeakMap,gr=new WeakMap,_r=new WeakMap,vr=new WeakMap,yr=new WeakMap,br=new WeakMap,xr=new WeakMap,Sr=new WeakMap,Tr=new WeakMap,or=new WeakSet,Cr=function(){if(this.receivedMessages.length===0)throw new d(`stream ended without producing a Message with role=assistant`);return this.receivedMessages.at(-1)},wr=function(){if(this.receivedMessages.length===0)throw new d(`stream ended without producing a Message with role=assistant`);let e=this.receivedMessages.at(-1).content.filter(e=>e.type===`text`).map(e=>e.text);if(e.length===0)throw new d(`stream ended without producing a content block with type=text`);return e.join(` `)},Er=function(){this.ended||s(this,sr,void 0,`f`)},Dr=function(e){if(this.ended)return;let t=c(this,or,`m`,kr).call(this,e);switch(this._emit(`streamEvent`,e,t),e.type){case`content_block_delta`:{let n=t.content.at(-1);switch(e.delta.type){case`text_delta`:n.type===`text`&&this._emit(`text`,e.delta.text,n.text||``);break;case`citations_delta`:n.type===`text`&&this._emit(`citation`,e.delta.citation,n.citations??[]);break;case`input_json_delta`:jr(n)&&n.input&&this._emit(`inputJson`,e.delta.partial_json,n.input);break;case`thinking_delta`:n.type===`thinking`&&this._emit(`thinking`,e.delta.thinking,n.thinking);break;case`signature_delta`:n.type===`thinking`&&this._emit(`signature`,n.signature);break;default:e.delta}break}case`message_stop`:this._addMessageParam(t),this._addMessage(rr(t,c(this,cr,`f`),{logger:c(this,Sr,`f`)}),!0);break;case`content_block_stop`:this._emit(`contentBlock`,t.content.at(-1));break;case`message_start`:s(this,sr,t,`f`);break;case`content_block_start`:case`message_delta`:break}},Or=function(){if(this.ended)throw new d(`stream has ended, this shouldn't happen`);let e=c(this,sr,`f`);if(!e)throw new d(`request ended without sending any chunks`);return s(this,sr,void 0,`f`),rr(e,c(this,cr,`f`),{logger:c(this,Sr,`f`)})},kr=function(e){let t=c(this,sr,`f`);if(e.type===`message_start`){if(t)throw new d(`Unexpected event order, got ${e.type} before receiving "message_stop"`);return e.message}if(!t)throw new d(`Unexpected event order, got ${e.type} before "message_start"`);switch(e.type){case`message_stop`:return t;case`message_delta`:return t.stop_reason=e.delta.stop_reason,t.stop_sequence=e.delta.stop_sequence,t.usage.output_tokens=e.usage.output_tokens,e.usage.input_tokens!=null&&(t.usage.input_tokens=e.usage.input_tokens),e.usage.cache_creation_input_tokens!=null&&(t.usage.cache_creation_input_tokens=e.usage.cache_creation_input_tokens),e.usage.cache_read_input_tokens!=null&&(t.usage.cache_read_input_tokens=e.usage.cache_read_input_tokens),e.usage.server_tool_use!=null&&(t.usage.server_tool_use=e.usage.server_tool_use),t;case`content_block_start`:return t.content.push({...e.content_block}),t;case`content_block_delta`:{let n=t.content.at(e.index);switch(e.delta.type){case`text_delta`:n?.type===`text`&&(t.content[e.index]={...n,text:(n.text||``)+e.delta.text});break;case`citations_delta`:n?.type===`text`&&(t.content[e.index]={...n,citations:[...n.citations??[],e.delta.citation]});break;case`input_json_delta`:if(n&&jr(n)){let r=n[Ar]||``;r+=e.delta.partial_json;let i={...n};Object.defineProperty(i,Ar,{value:r,enumerable:!1,writable:!0}),r&&(i.input=en(r)),t.content[e.index]=i}break;case`thinking_delta`:n?.type===`thinking`&&(t.content[e.index]={...n,thinking:n.thinking+e.delta.thinking});break;case`signature_delta`:n?.type===`thinking`&&(t.content[e.index]={...n,signature:e.delta.signature});break;default:e.delta}return t}case`content_block_stop`:return t}},Symbol.asyncIterator)](){let e=[],t=[],n=!1;return this.on(`streamEvent`,n=>{let r=t.shift();r?r.resolve(n):e.push(n)}),this.on(`end`,()=>{n=!0;for(let e of t)e.resolve(void 0);t.length=0}),this.on(`abort`,e=>{n=!0;for(let n of t)n.reject(e);t.length=0}),this.on(`error`,e=>{n=!0;for(let n of t)n.reject(e);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:n?{value:void 0,done:!0}:new Promise((e,n)=>t.push({resolve:e,reject:n})).then(e=>e?{value:e,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new Qe(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}},Nr=class extends y{create(e,t){return this._client.post(`/v1/messages/batches`,{body:e,...t})}retrieve(e,t){return this._client.get(x`/v1/messages/batches/${e}`,t)}list(e={},t){return this._client.getAPIList(`/v1/messages/batches`,ut,{query:e,...t})}delete(e,t){return this._client.delete(x`/v1/messages/batches/${e}`,t)}cancel(e,t){return this._client.post(x`/v1/messages/batches/${e}/cancel`,t)}async results(e,t){let n=await this.retrieve(e);if(!n.results_url)throw new d(`No batch \`results_url\`; Has it finished processing? ${n.processing_status} - ${n.id}`);return this._client.get(n.results_url,{...t,headers:b([{Accept:`application/binary`},t?.headers]),stream:!0,__binaryResponse:!0})._thenUnwrap((e,t)=>Vn.fromResponse(t.response,t.controller))}},Pr=class extends y{constructor(){super(...arguments),this.batches=new Nr(this._client)}create(e,t){e.model in Fr&&console.warn(`The model '${e.model}' is deprecated and will reach end-of-life on ${Fr[e.model]}\nPlease migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`),Ir.includes(e.model)&&e.thinking&&e.thinking.type===`enabled`&&console.warn(`Using Claude with ${e.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`);let n=this._client._options.timeout;if(!e.stream&&n==null){let t=Gt[e.model]??void 0;n=this._client.calculateNonstreamingTimeout(e.max_tokens,t)}let r=Ft(e.tools,e.messages);return this._client.post(`/v1/messages`,{body:e,timeout:n??6e5,...t,headers:b([r,t?.headers]),stream:e.stream??!1})}parse(e,t){return this.create(e,t).then(t=>ir(t,e,{logger:this._client.logger??console}))}stream(e,t){return Mr.createMessage(this,e,t,{logger:this._client.logger??console})}countTokens(e,t){return this._client.post(`/v1/messages/count_tokens`,{body:e,...t})}},Fr={"claude-1.3":`November 6th, 2024`,"claude-1.3-100k":`November 6th, 2024`,"claude-instant-1.1":`November 6th, 2024`,"claude-instant-1.1-100k":`November 6th, 2024`,"claude-instant-1.2":`November 6th, 2024`,"claude-3-sonnet-20240229":`July 21st, 2025`,"claude-3-opus-20240229":`January 5th, 2026`,"claude-2.1":`July 21st, 2025`,"claude-2.0":`July 21st, 2025`,"claude-3-7-sonnet-latest":`February 19th, 2026`,"claude-3-7-sonnet-20250219":`February 19th, 2026`,"claude-3-5-haiku-latest":`February 19th, 2026`,"claude-3-5-haiku-20241022":`February 19th, 2026`,"claude-opus-4-0":`June 15th, 2026`,"claude-opus-4-20250514":`June 15th, 2026`,"claude-sonnet-4-0":`June 15th, 2026`,"claude-sonnet-4-20250514":`June 15th, 2026`},Ir=[`claude-mythos-preview`,`claude-opus-4-6`];Pr.Batches=Nr;var Lr=class extends y{retrieve(e,t={},n){let{betas:r}=t??{};return this._client.get(x`/v1/models/${e}`,{...n,headers:b([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/models`,ut,{query:r,...t,headers:b([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}},Rr=e=>{if(globalThis.process!==void 0)return{}?.[e]?.trim()||void 0;if(globalThis.Deno!==void 0)return globalThis.Deno.env?.get?.(e)?.trim()||void 0},zr,Br,Vr,Hr,Ur=`\\n\\nHuman:`,Wr=`\\n\\nAssistant:`,E=class{constructor({baseURL:e=Rr(`ANTHROPIC_BASE_URL`),apiKey:t=Rr(`ANTHROPIC_API_KEY`)??null,authToken:n=Rr(`ANTHROPIC_AUTH_TOKEN`)??null,...r}={}){zr.add(this),Vr.set(this,void 0);let i={apiKey:t,authToken:n,...r,baseURL:e||`https://api.anthropic.com`};if(!i.dangerouslyAllowBrowser&&xe())throw new d(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
`);this.baseURL=i.baseURL,this.timeout=i.timeout??Br.DEFAULT_TIMEOUT,this.logger=i.logger??console;let a=`warn`;this.logLevel=a,this.logLevel=Ge(i.logLevel,`ClientOptions.logLevel`,this)??Ge(Rr(`ANTHROPIC_LOG`),`process.env['ANTHROPIC_LOG']`,this)??a,this.fetchOptions=i.fetchOptions,this.maxRetries=i.maxRetries??2,this.fetch=i.fetch??ke(),s(this,Vr,Pe,`f`),this._options=i,this.apiKey=typeof t==`string`?t:null,this.authToken=n}withOptions(e){return new this.constructor({...this._options,baseURL:this.baseURL,maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,apiKey:this.apiKey,authToken:this.authToken,...e})}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:e,nulls:t}){if(!(e.get(`x-api-key`)||e.get(`authorization`))&&!(this.apiKey&&e.get(`x-api-key`))&&!t.has(`x-api-key`)&&!(this.authToken&&e.get(`authorization`))&&!t.has(`authorization`))throw Error(`Could not resolve authentication method. Expected either apiKey or authToken to be set. Or for one of the "X-Api-Key" or "Authorization" headers to be explicitly omitted`)}async authHeaders(e){return b([await this.apiKeyAuth(e),await this.bearerAuth(e)])}async apiKeyAuth(e){if(this.apiKey!=null)return b([{"X-Api-Key":this.apiKey}])}async bearerAuth(e){if(this.authToken!=null)return b([{Authorization:`Bearer ${this.authToken}`}])}stringifyQuery(e){return Fe(e)}getUserAgent(){return`${this.constructor.name}/JS ${be}`}defaultIdempotencyKey(){return`stainless-node-retry-${l()}`}makeStatusError(e,t,n,r){return f.generate(e,t,n,r)}buildURL(e,t,n){let r=!c(this,zr,`m`,Hr).call(this)&&n||this.baseURL,i=de(e)?new URL(e):new URL(r+(r.endsWith(`/`)&&e.startsWith(`/`)?e.slice(1):e)),a=this.defaultQuery(),o=Object.fromEntries(i.searchParams);return(!he(a)||!he(o))&&(t={...o,...a,...t}),typeof t==`object`&&t&&!Array.isArray(t)&&(i.search=this.stringifyQuery(t)),i.toString()}_calculateNonstreamingTimeout(e){if(3600*e/128e3>600)throw new d(`Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#streaming-responses for more details`);return 600*1e3}async prepareOptions(e){}async prepareRequest(e,{url:t,options:n}){}get(e,t){return this.methodRequest(`get`,e,t)}post(e,t){return this.methodRequest(`post`,e,t)}patch(e,t){return this.methodRequest(`patch`,e,t)}put(e,t){return this.methodRequest(`put`,e,t)}delete(e,t){return this.methodRequest(`delete`,e,t)}methodRequest(e,t,n){return this.request(Promise.resolve(n).then(n=>({method:e,path:t,...n})))}request(e,t=null){return new ot(this,this.makeRequest(e,t,void 0))}async makeRequest(e,t,n){let r=await e,i=r.maxRetries??this.maxRetries;t??=i,await this.prepareOptions(r);let{req:a,url:o,timeout:s}=await this.buildRequest(r,{retryCount:i-t});await this.prepareRequest(a,{url:o,options:r});let c=`log_`+(Math.random()*(1<<24)|0).toString(16).padStart(6,`0`),l=n===void 0?``:`, retryOf: ${n}`,d=Date.now();if(_(this).debug(`[${c}] sending request`,Xe({retryOfRequestLogID:n,method:r.method,url:o,options:r,headers:a.headers})),r.signal?.aborted)throw new p;let f=new AbortController,m=await this.fetchWithTimeout(o,a,s,f).catch(ee),re=Date.now();if(m instanceof globalThis.Error){let e=`retrying, ${t} attempts remaining`;if(r.signal?.aborted)throw new p;let i=u(m)||/timed? ?out/i.test(String(m)+(`cause`in m?String(m.cause):``));if(t)return _(this).info(`[${c}] connection ${i?`timed out`:`failed`} - ${e}`),_(this).debug(`[${c}] connection ${i?`timed out`:`failed`} (${e})`,Xe({retryOfRequestLogID:n,url:o,durationMs:re-d,message:m.message})),this.retryRequest(r,t,n??c);throw _(this).info(`[${c}] connection ${i?`timed out`:`failed`} - error; no more retries left`),_(this).debug(`[${c}] connection ${i?`timed out`:`failed`} (error; no more retries left)`,Xe({retryOfRequestLogID:n,url:o,durationMs:re-d,message:m.message})),i?new ne:new te({cause:m})}let ie=`[${c}${l}${[...m.headers.entries()].filter(([e])=>e===`request-id`).map(([e,t])=>`, `+e+`: `+JSON.stringify(t)).join(``)}] ${a.method} ${o} ${m.ok?`succeeded`:`failed`} with status ${m.status} in ${re-d}ms`;if(!m.ok){let e=await this.shouldRetry(m);if(t&&e){let e=`retrying, ${t} attempts remaining`;return await Ne(m.body),_(this).info(`${ie} - ${e}`),_(this).debug(`[${c}] response error (${e})`,Xe({retryOfRequestLogID:n,url:m.url,status:m.status,headers:m.headers,durationMs:re-d})),this.retryRequest(r,t,n??c,m.headers)}let i=e?`error; no more retries left`:`error; not retryable`;_(this).info(`${ie} - ${i}`);let a=await m.text().catch(e=>ee(e).message),o=ve(a),s=o?void 0:a;throw _(this).debug(`[${c}] response error (${i})`,Xe({retryOfRequestLogID:n,url:m.url,status:m.status,headers:m.headers,message:s,durationMs:Date.now()-d})),this.makeStatusError(m.status,o,s,m.headers)}return _(this).info(ie),_(this).debug(`[${c}] response start`,Xe({retryOfRequestLogID:n,url:m.url,status:m.status,headers:m.headers,durationMs:re-d})),{response:m,options:r,controller:f,requestLogID:c,retryOfRequestLogID:n,startTime:d}}getAPIList(e,t,n){return this.requestAPIList(t,n&&`then`in n?n.then(t=>({method:`get`,path:e,...t})):{method:`get`,path:e,...n})}requestAPIList(e,t){let n=this.makeRequest(t,null,void 0);return new lt(this,n,e)}async fetchWithTimeout(e,t,n,r){let{signal:i,method:a,...o}=t||{},s=this._makeAbort(r);i&&i.addEventListener(`abort`,s,{once:!0});let c=setTimeout(s,n),l=globalThis.ReadableStream&&o.body instanceof globalThis.ReadableStream||typeof o.body==`object`&&o.body!==null&&Symbol.asyncIterator in o.body,u={signal:r.signal,...l?{duplex:`half`}:{},method:`GET`,...o};a&&(u.method=a.toUpperCase());try{return await this.fetch.call(void 0,e,u)}finally{clearTimeout(c)}}async shouldRetry(e){let t=e.headers.get(`x-should-retry`);return t===`true`?!0:t===`false`?!1:e.status===408||e.status===409||e.status===429||e.status>=500}async retryRequest(e,t,n,r){let i,a=r?.get(`retry-after-ms`);if(a){let e=parseFloat(a);Number.isNaN(e)||(i=e)}let o=r?.get(`retry-after`);if(o&&!i){let e=parseFloat(o);i=Number.isNaN(e)?Date.parse(o)-Date.now():e*1e3}if(i===void 0){let n=e.maxRetries??this.maxRetries;i=this.calculateDefaultRetryTimeoutMillis(t,n)}return await ye(i),this.makeRequest(e,t-1,n)}calculateDefaultRetryTimeoutMillis(e,t){let n=t-e;return Math.min(.5*2**n,8)*(1-Math.random()*.25)*1e3}calculateNonstreamingTimeout(e,t){let n=600*1e3;if(36e5*e/128e3>n||t!=null&&e>t)throw new d(`Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#long-requests for more details`);return n}async buildRequest(e,{retryCount:t=0}={}){let n={...e},{method:r,path:i,query:a,defaultBaseURL:o}=n,s=this.buildURL(i,a,o);`timeout`in n&&_e(`timeout`,n.timeout),n.timeout=n.timeout??this.timeout;let{bodyHeaders:c,body:l}=this.buildBody({options:n});return{req:{method:r,headers:await this.buildHeaders({options:e,method:r,bodyHeaders:c,retryCount:t}),...n.signal&&{signal:n.signal},...globalThis.ReadableStream&&l instanceof globalThis.ReadableStream&&{duplex:`half`},...l&&{body:l},...this.fetchOptions??{},...n.fetchOptions??{}},url:s,timeout:n.timeout}}async buildHeaders({options:e,method:t,bodyHeaders:n,retryCount:r}){let i={};this.idempotencyHeader&&t!==`get`&&(e.idempotencyKey||=this.defaultIdempotencyKey(),i[this.idempotencyHeader]=e.idempotencyKey);let a=b([i,{Accept:`application/json`,"User-Agent":this.getUserAgent(),"X-Stainless-Retry-Count":String(r),...e.timeout?{"X-Stainless-Timeout":String(Math.trunc(e.timeout/1e3))}:{},...Oe(),...this._options.dangerouslyAllowBrowser?{"anthropic-dangerous-direct-browser-access":`true`}:void 0,"anthropic-version":`2023-06-01`},await this.authHeaders(e),this._options.defaultHeaders,n,e.headers]);return this.validateHeaders(a),a.values}_makeAbort(e){return()=>e.abort()}buildBody({options:{body:e,headers:t}}){if(!e)return{bodyHeaders:void 0,body:void 0};let n=b([t]);return ArrayBuffer.isView(e)||e instanceof ArrayBuffer||e instanceof DataView||typeof e==`string`&&n.values.has(`content-type`)||globalThis.Blob&&e instanceof globalThis.Blob||e instanceof FormData||e instanceof URLSearchParams||globalThis.ReadableStream&&e instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:e}:typeof e==`object`&&(Symbol.asyncIterator in e||Symbol.iterator in e&&`next`in e&&typeof e.next==`function`)?{bodyHeaders:void 0,body:je(e)}:typeof e==`object`&&n.values.get(`content-type`)===`application/x-www-form-urlencoded`?{bodyHeaders:{"content-type":`application/x-www-form-urlencoded`},body:this.stringifyQuery(e)}:c(this,Vr,`f`).call(this,{body:e,headers:n})}};Br=E,Vr=new WeakMap,zr=new WeakSet,Hr=function(){return this.baseURL!==`https://api.anthropic.com`},E.Anthropic=Br,E.HUMAN_PROMPT=Ur,E.AI_PROMPT=Wr,E.DEFAULT_TIMEOUT=6e5,E.AnthropicError=d,E.APIError=f,E.APIConnectionError=te,E.APIConnectionTimeoutError=ne,E.APIUserAbortError=p,E.NotFoundError=ae,E.ConflictError=oe,E.RateLimitError=ce,E.BadRequestError=m,E.AuthenticationError=re,E.InternalServerError=le,E.PermissionDeniedError=ie,E.UnprocessableEntityError=se,E.toFile=wt;var Gr=class extends E{constructor(){super(...arguments),this.completions=new tr(this),this.messages=new Pr(this),this.models=new Lr(this),this.beta=new er(this)}};Gr.Completions=tr,Gr.Messages=Pr,Gr.Models=Lr,Gr.Beta=er;var Kr=`https://huggingface.co`,qr=`https://router.huggingface.co`;`${qr}`;var Jr=`X-HF-Bill-To`,Yr={baseten:{},"black-forest-labs":{},cerebras:{},clarifai:{},cohere:{},deepinfra:{},"fal-ai":{},"featherless-ai":{},"fireworks-ai":{},groq:{},"hf-inference":{},hyperbolic:{},nebius:{},novita:{},nscale:{},nvidia:{},openai:{},publicai:{},ovhcloud:{},replicate:{},sambanova:{},scaleway:{},together:{},wavespeed:{},"zai-org":{}},Xr=class extends Error{constructor(e){super(e),this.name=`InferenceClientError`}},D=class extends Xr{constructor(e){super(e),this.name=`InputError`}},Zr=class extends Xr{constructor(e){super(e),this.name=`RoutingError`}},Qr=class extends Xr{httpRequest;httpResponse;constructor(e,t,n){super(e),this.httpRequest={...t,...t.headers?{headers:{...t.headers,...`Authorization`in t.headers?{Authorization:`Bearer [redacted]`}:void 0}}:void 0},this.httpResponse=n}},O=class extends Qr{constructor(e,t,n){super(e,t,n),this.name=`ProviderApiError`}},$r=class extends Qr{constructor(e,t,n){super(e,t,n),this.name=`HubApiError`}},k=class extends Xr{constructor(e){super(e),this.name=`ProviderOutputError`}};function ei(e){return Array.isArray(e)?e:[e]}var A=class{provider;baseUrl;clientSideRoutingOnly;constructor(e,t,n=!1){this.provider=e,this.baseUrl=t,this.clientSideRoutingOnly=n}makeBaseUrl(e){return e.authMethod===`provider-key`?this.baseUrl:`${qr}/${this.provider}`}makeBody(e){return`data`in e.args&&e.args.data?e.args.data:JSON.stringify(this.preparePayload(e))}makeUrl(e){let t=this.makeBaseUrl(e),n=this.makeRoute(e).replace(/^\/+/,``);return e.urlTransform?e.urlTransform(`${t}/${n}`):`${t}/${n}`}prepareHeaders(e,t){let n={};return e.authMethod!==`none`&&(n.Authorization=`Bearer ${e.accessToken}`),t||(n[`Content-Type`]=`application/json`),n}},j=class extends A{constructor(e,t,n=!1){super(e,t,n)}makeRoute(){return`v1/chat/completions`}preparePayload(e){return{...e.args,model:e.model}}async getResponse(e){if(typeof e==`object`&&Array.isArray(e?.choices)&&typeof e?.created==`number`&&typeof e?.id==`string`&&typeof e?.model==`string`&&(e.system_fingerprint===void 0||e.system_fingerprint===null||typeof e.system_fingerprint==`string`)&&typeof e?.usage==`object`)return e;throw new k(`Expected ChatCompletionOutput`)}},ti=class extends A{constructor(e,t,n=!1){super(e,t,n)}preparePayload(e){return{...e.args,model:e.model}}makeRoute(){return`v1/completions`}async getResponse(e){let t=ei(e);if(Array.isArray(t)&&t.length>0&&t.every(e=>typeof e==`object`&&!!e&&`generated_text`in e&&typeof e.generated_text==`string`))return t[0];throw new k(`Expected Array<{generated_text: string}>`)}},ni=class extends j{constructor(){super(`auto`,`https://router.huggingface.co`)}makeBaseUrl(e){if(e.authMethod!==`hf-token`)throw new Zr(`Cannot select auto-router when using non-Hugging Face API key.`);return this.baseUrl}};function M(e){if(globalThis.Buffer)return globalThis.Buffer.from(e).toString(`base64`);{let t=[];return e.forEach(e=>{t.push(String.fromCharCode(e))}),globalThis.btoa(t.join(``))}}async function ri(e,t=`image/jpeg`){let n=await e.arrayBuffer();return`data:${t};base64,${M(new Uint8Array(n))}`}function ii(e,t){return Object.assign({},...t.map(t=>{if(e[t]!==void 0)return{[t]:e[t]}}))}function ai(e,t){return e.includes(t)}function N(e,t){let n=Array.isArray(t)?t:[t];return ii(e,Object.keys(e).filter(e=>!ai(n,e)))}var oi=[`feature-extraction`,`sentence-similarity`],P=class extends A{constructor(){super(`hf-inference`,`${qr}/hf-inference`)}preparePayload(e){return e.args}makeUrl(e){return e.model.startsWith(`http://`)||e.model.startsWith(`https://`)?e.model:super.makeUrl(e)}makeRoute(e){return e.task&&[`feature-extraction`,`sentence-similarity`].includes(e.task)?`models/${e.model}/pipeline/${e.task}`:`models/${e.model}`}async getResponse(e){return e}},si=class extends P{preparePayload(e){if(e.outputType===`url`)throw new D(`hf-inference provider does not support URL output. Use outputType 'blob', 'dataUrl' or 'json' instead.`);return e.args}async getResponse(e,t,n,r){if(!e)throw new k(`Received malformed response from HF-Inference text-to-image API: response is undefined`);if(typeof e==`object`){if(r===`json`)return{...e};if(`data`in e&&Array.isArray(e.data)&&e.data[0].b64_json){let t=e.data[0].b64_json;return r===`dataUrl`?`data:image/jpeg;base64,${t}`:await(await fetch(`data:image/jpeg;base64,${t}`)).blob()}if(`output`in e&&Array.isArray(e.output)){let t=await(await fetch(e.output[0])).blob();return r===`dataUrl`?ri(t):t}}if(e instanceof Blob)return r===`dataUrl`?ri(e):r===`json`?{output:await ri(e)}:e;throw new k(`Received malformed response from HF-Inference text-to-image API: expected a Blob`)}},ci=class extends P{makeUrl(e){let t;return t=e.model.startsWith(`http://`)||e.model.startsWith(`https://`)?e.model.trim():`${this.makeBaseUrl(e)}/models/${e.model}`,t=t.replace(/\/+$/,``),t.endsWith(`/v1`)?t+=`/chat/completions`:t.endsWith(`/chat/completions`)||(t+=`/v1/chat/completions`),t}preparePayload(e){return{...e.args,model:e.model}}async getResponse(e){return e}},li=class extends P{async getResponse(e){let t=ei(e);if(Array.isArray(t)&&t.every(e=>`generated_text`in e&&typeof e?.generated_text==`string`))return t?.[0];throw new k(`Received malformed response from HF-Inference text generation API: expected Array<{generated_text: string}>`)}},ui=class extends P{async getResponse(e){if(Array.isArray(e)&&e.every(e=>typeof e==`object`&&!!e&&typeof e.label==`string`&&typeof e.score==`number`))return e;throw new k(`Received malformed response from HF-Inference audio-classification API: expected Array<{label: string, score: number}> but received different format`)}},di=class extends P{async getResponse(e){return e}async preparePayloadAsync(e){return`data`in e?e:{...N(e,`inputs`),data:e.inputs}}},fi=class extends P{async getResponse(e){if(!Array.isArray(e))throw new k(`Received malformed response from HF-Inference audio-to-audio API: expected Array`);if(!e.every(e=>typeof e==`object`&&e&&`label`in e&&typeof e.label==`string`&&`content-type`in e&&typeof e[`content-type`]==`string`&&`blob`in e&&typeof e.blob==`string`))throw new k(`Received malformed response from HF-Inference audio-to-audio API: expected Array<{label: string, audio: Blob}>`);return e}},pi=class extends P{async getResponse(e){if(Array.isArray(e)&&e.every(e=>typeof e==`object`&&!!e&&typeof e?.answer==`string`&&(typeof e.end==`number`||e.end===void 0)&&(typeof e.score==`number`||e.score===void 0)&&(typeof e.start==`number`||e.start===void 0)))return e[0];throw new k(`Received malformed response from HF-Inference document-question-answering API: expected Array<{answer: string, end: number, score: number, start: number}>`)}},mi=class extends P{async getResponse(e){let t=(e,n,r=0)=>r>n?!1:e.every(e=>Array.isArray(e))?e.every(e=>t(e,n,r+1)):e.every(e=>typeof e==`number`);if(Array.isArray(e)&&t(e,3,0))return e;throw new k(`Received malformed response from HF-Inference feature-extraction API: expected Array<number[][][] | number[][] | number[] | number>`)}},hi=class extends P{async getResponse(e){if(Array.isArray(e)&&e.every(e=>typeof e.label==`string`&&typeof e.score==`number`))return e;throw new k(`Received malformed response from HF-Inference image-classification API: expected Array<{label: string, score: number}>`)}},gi=class extends P{async getResponse(e){if(Array.isArray(e)&&e.every(e=>typeof e.label==`string`&&typeof e.mask==`string`&&(e.score===void 0||typeof e.score==`number`)))return e;throw new k(`Received malformed response from HF-Inference image-segmentation API: expected Array<{label: string, mask: string, score: number}>`)}async preparePayloadAsync(e){return{...e,inputs:M(new Uint8Array(e.inputs instanceof ArrayBuffer?e.inputs:await e.inputs.arrayBuffer()))}}},_i=class extends P{async getResponse(e){if(typeof e?.generated_text!=`string`)throw new k(`Received malformed response from HF-Inference image-to-text API: expected {generated_text: string}`);return e}async preparePayloadAsync(e){return`data`in e?e:{...N(e,`inputs`),data:e.inputs}}},vi=class extends P{async preparePayloadAsync(e){return e.parameters?{...e,inputs:M(new Uint8Array(e.inputs instanceof ArrayBuffer?e.inputs:await e.inputs.arrayBuffer()))}:{...e,model:e.model,data:e.inputs}}async getResponse(e){if(e instanceof Blob)return e;throw new k(`Received malformed response from HF-Inference image-to-image API: expected Blob`)}},yi=class extends P{async getResponse(e){if(Array.isArray(e)&&e.every(e=>typeof e.label==`string`&&typeof e.score==`number`&&typeof e.box.xmin==`number`&&typeof e.box.ymin==`number`&&typeof e.box.xmax==`number`&&typeof e.box.ymax==`number`))return e;throw new k(`Received malformed response from HF-Inference object-detection API: expected Array<{label: string, score: number, box: {xmin: number, ymin: number, xmax: number, ymax: number}}>`)}},bi=class extends P{async getResponse(e){if(Array.isArray(e)&&e.every(e=>typeof e.label==`string`&&typeof e.score==`number`))return e;throw new k(`Received malformed response from HF-Inference zero-shot-image-classification API: expected Array<{label: string, score: number}>`)}},xi=class extends P{async getResponse(e){let t=e?.[0];if(Array.isArray(t)&&t.every(e=>typeof e?.label==`string`&&typeof e.score==`number`))return t;throw new k(`Received malformed response from HF-Inference text-classification API: expected Array<{label: string, score: number}>`)}},Si=class extends P{async getResponse(e){if(Array.isArray(e)?e.every(e=>typeof e==`object`&&!!e&&typeof e.answer==`string`&&typeof e.end==`number`&&typeof e.score==`number`&&typeof e.start==`number`):typeof e==`object`&&e&&typeof e.answer==`string`&&typeof e.end==`number`&&typeof e.score==`number`&&typeof e.start==`number`)return Array.isArray(e)?e[0]:e;throw new k(`Received malformed response from HF-Inference question-answering API: expected Array<{answer: string, end: number, score: number, start: number}>`)}},Ci=class extends P{async getResponse(e){if(Array.isArray(e)&&e.every(e=>typeof e.score==`number`&&typeof e.sequence==`string`&&typeof e.token==`number`&&typeof e.token_str==`string`))return e;throw new k(`Received malformed response from HF-Inference fill-mask API: expected Array<{score: number, sequence: string, token: number, token_str: string}>`)}},wi=class e extends P{async getResponse(t){if(typeof t==`object`&&t&&`labels`in t&&`scores`in t&&Array.isArray(t.labels)&&Array.isArray(t.scores)&&t.labels.length===t.scores.length&&t.labels.every(e=>typeof e==`string`)&&t.scores.every(e=>typeof e==`number`)){let e=t.scores;return t.labels.map((t,n)=>({label:t,score:e[n]}))}if(Array.isArray(t)&&t.every(e.validateOutputElement))return t;throw new k(`Received malformed response from HF-Inference zero-shot-classification API: expected Array<{label: string, score: number}>`)}static validateOutputElement(e){return typeof e==`object`&&!!e&&`label`in e&&`score`in e&&typeof e.label==`string`&&typeof e.score==`number`}},Ti=class extends P{async getResponse(e){if(Array.isArray(e)&&e.every(e=>typeof e==`number`))return e;throw new k(`Received malformed response from HF-Inference sentence-similarity API: expected Array<number>`)}},Ei=class e extends P{static validate(e){return typeof e==`object`&&!!e&&`aggregator`in e&&typeof e.aggregator==`string`&&`answer`in e&&typeof e.answer==`string`&&`cells`in e&&Array.isArray(e.cells)&&e.cells.every(e=>typeof e==`string`)&&`coordinates`in e&&Array.isArray(e.coordinates)&&e.coordinates.every(e=>Array.isArray(e)&&e.every(e=>typeof e==`number`))}async getResponse(t){if(Array.isArray(t)&&Array.isArray(t)?t.every(t=>e.validate(t)):e.validate(t))return Array.isArray(t)?t[0]:t;throw new k(`Received malformed response from HF-Inference table-question-answering API: expected {aggregator: string, answer: string, cells: string[], coordinates: number[][]}`)}},Di=class extends P{async getResponse(e){if(Array.isArray(e)&&e.every(e=>typeof e.end==`number`&&typeof e.entity_group==`string`&&typeof e.score==`number`&&typeof e.start==`number`&&typeof e.word==`string`))return e;throw new k(`Received malformed response from HF-Inference token-classification API: expected Array<{end: number, entity_group: string, score: number, start: number, word: string}>`)}},Oi=class extends P{async getResponse(e){if(Array.isArray(e)&&e.every(e=>typeof e?.translation_text==`string`))return e?.length===1?e?.[0]:e;throw new k(`Received malformed response from HF-Inference translation API: expected Array<{translation_text: string}>`)}},ki=class extends P{async getResponse(e){if(Array.isArray(e)&&e.every(e=>typeof e?.summary_text==`string`))return e?.[0];throw new k(`Received malformed response from HF-Inference summarization API: expected Array<{summary_text: string}>`)}},Ai=class extends P{async getResponse(e){return e}},ji=class extends P{async getResponse(e){if(Array.isArray(e)&&e.every(e=>typeof e==`number`))return e;throw new k(`Received malformed response from HF-Inference tabular-classification API: expected Array<number>`)}},Mi=class extends P{async getResponse(e){if(Array.isArray(e)&&e.every(e=>typeof e==`object`&&!!e&&typeof e?.answer==`string`&&typeof e.score==`number`))return e[0];throw new k(`Received malformed response from HF-Inference visual-question-answering API: expected Array<{answer: string, score: number}>`)}},Ni=class extends P{async getResponse(e){if(Array.isArray(e)&&e.every(e=>typeof e==`number`))return e;throw new k(`Received malformed response from HF-Inference tabular-regression API: expected Array<number>`)}},Pi=class extends P{async getResponse(e){return e}},Fi=console;function Ii(){return Fi}var Li=new Map;function Ri(e,t){return t?Array.isArray(t)?t:Object.entries(t).map(([t,n])=>({provider:t,hfModelId:e,providerId:n.providerId,status:n.status,task:n.task,adapter:n.adapter,adapterWeightsPath:n.adapterWeightsPath})):[]}async function zi(e,t,n){let r;if(Li.has(e))r=Li.get(e);else{let i=`${Kr}/api/models/${e}?expand[]=inferenceProviderMapping`,a=await(n?.fetch??fetch)(i,{headers:t?.startsWith(`hf_`)?{Authorization:`Bearer ${t}`}:{}});if(!a.ok)if(a.headers.get(`Content-Type`)?.startsWith(`application/json`)){let t=await a.json();if(`error`in t&&typeof t.error==`string`)throw new $r(`Failed to fetch inference provider mapping for model ${e}: ${t.error}`,{url:i,method:`GET`},{requestId:a.headers.get(`x-request-id`)??``,status:a.status,body:t})}else throw new $r(`Failed to fetch inference provider mapping for model ${e}`,{url:i,method:`GET`},{requestId:a.headers.get(`x-request-id`)??``,status:a.status,body:await a.text()});let o=null;try{o=await a.json()}catch{throw new $r(`Failed to fetch inference provider mapping for model ${e}: malformed API response, invalid JSON`,{url:i,method:`GET`},{requestId:a.headers.get(`x-request-id`)??``,status:a.status,body:await a.text()})}if(!o?.inferenceProviderMapping)throw new $r(`We have not been able to find inference provider information for model ${e}.`,{url:i,method:`GET`},{requestId:a.headers.get(`x-request-id`)??``,status:a.status,body:await a.text()});r=Ri(e,o.inferenceProviderMapping),Li.set(e,r)}return r}async function Bi(e,t){let n=Ii();if(e.provider===`auto`&&e.task===`conversational`)return{hfModelId:e.modelId,provider:`auto`,providerId:e.modelId,status:`live`,task:`conversational`};if(Yr[e.provider][e.modelId])return Yr[e.provider][e.modelId];let r=(await zi(e.modelId,e.accessToken,t)).find(t=>t.provider===e.provider);if(r){if(!ai(e.provider===`hf-inference`&&ai(oi,e.task)?oi:[e.task],r.task))throw new D(`Model ${e.modelId} is not supported for task ${e.task} and provider ${e.provider}. Supported task: ${r.task}.`);return r.status===`staging`&&n.warn(`Model ${e.modelId} is in staging mode for provider ${e.provider}. Meant for test purposes only.`),r}return null}async function F(e,t,n){let r=Ii();if(n){if(e)throw new D(`Specifying both endpointUrl and provider is not supported.`);return`hf-inference`}if(e||=(r.log(`Defaulting to 'auto' which will select the first provider available for the model, sorted by the user's order in https://hf.co/settings/inference-providers.`),`auto`),e===`auto`){if(!t)throw new D(`Specifying a model is required when provider is 'auto'`);e=(await zi(t))[0]?.provider,r.log(`Auto selected provider:`,e)}if(!e)throw new D(`No Inference Provider available for model ${t}.`);return e}var Vi=`https://inference.baseten.co`,Hi=class extends j{constructor(){super(`baseten`,Vi)}},Ui=`https://api.clarifai.com`,Wi=class extends j{constructor(){super(`clarifai`,Ui)}makeRoute(){return`/v2/ext/openai/v1/chat/completions`}prepareHeaders(e,t){let n={Authorization:e.authMethod===`provider-key`?`Key ${e.accessToken}`:`Bearer ${e.accessToken}`};return t||(n[`Content-Type`]=`application/json`),n}};function Gi(e){return new Promise(t=>{setTimeout(()=>t(),e)})}var Ki=`https://api.us1.bfl.ai`,qi=class extends A{constructor(){super(`black-forest-labs`,Ki)}preparePayload(e){return{...N(e.args,[`inputs`,`parameters`]),...e.args.parameters,prompt:e.args.inputs}}prepareHeaders(e,t){let n={Authorization:e.authMethod===`provider-key`?`X-Key ${e.accessToken}`:`Bearer ${e.accessToken}`};return t||(n[`Content-Type`]=`application/json`),n}makeRoute(e){if(!e)throw new D(`Params are required`);return`/v1/${e.model}`}async getResponse(e,t,n,r){let i=Ii(),a=new URL(e.polling_url);for(let e=0;e<5;e++){await Gi(1e3),i.debug(`Polling Black Forest Labs API for the result... ${e+1}/5`),a.searchParams.set(`attempt`,e.toString(10));let t=await fetch(a,{headers:{"Content-Type":`application/json`}});if(!t.ok)throw new O(`Failed to fetch result from black forest labs API`,{url:a.toString(),method:`GET`,headers:{"Content-Type":`application/json`}},{requestId:t.headers.get(`x-request-id`)??``,status:t.status,body:await t.text()});let n=await t.json();if(typeof n==`object`&&n&&`status`in n&&typeof n.status==`string`&&n.status===`Ready`&&`result`in n&&typeof n.result==`object`&&n.result&&`sample`in n.result&&typeof n.result.sample==`string`)return r===`json`?n.result:r===`url`?n.result.sample:await(await fetch(n.result.sample)).blob()}throw new k(`Timed out while waiting for the result from black forest labs API - aborting after 5 attempts`)}},Ji=class extends j{constructor(){super(`cerebras`,`https://api.cerebras.ai`)}},Yi=class extends j{constructor(){super(`cohere`,`https://api.cohere.com`)}makeRoute(){return`/compatibility/v1/chat/completions`}},Xi=`https://api.deepinfra.com`,Zi=class extends j{constructor(){super(`deepinfra`,Xi)}makeRoute(){return`v1/openai/chat/completions`}},Qi=class extends ti{constructor(){super(`deepinfra`,Xi)}makeRoute(){return`v1/openai/completions`}preparePayload(e){let t=e.args.parameters;return{model:e.model,prompt:e.args.inputs,...N(e.args,[`inputs`,`parameters`]),...t?{max_tokens:t.max_new_tokens,...N(t,[`max_new_tokens`])}:void 0}}async getResponse(e){if(typeof e==`object`&&e&&Array.isArray(e.choices)&&e.choices.length>0){let t=e.choices[0].text;if(typeof t==`string`)return{generated_text:t}}throw new k(`Received malformed response from DeepInfra text-generation API: expected OpenAI completion payload`)}};function $i(e){return/^http(s?):/.test(e)||e.startsWith(`/`)}var ea=[`audio/mpeg`,`audio/mp4`,`audio/wav`,`audio/x-wav`],ta=class extends A{constructor(e){super(`fal-ai`,e||`https://fal.run`)}preparePayload(e){return e.args}makeRoute(e){return`/${e.model}`}prepareHeaders(e,t){let n={Authorization:e.authMethod===`provider-key`?`Key ${e.accessToken}`:`Bearer ${e.accessToken}`};return t||(n[`Content-Type`]=`application/json`),n}},na=class extends ta{makeRoute(e){return e.authMethod===`provider-key`?`/${e.model}`:`/${e.model}?_subdomain=queue`}async getResponseFromQueueApi(e,t,n){if(!t||!n)throw new D(`URL and headers are required for ${this.task} task`);if(!e.request_id)throw new k(`Received malformed response from Fal.ai ${this.task} API: no request ID found in the response`);let r=e.status,i=new URL(t),a=`${i.protocol}//${i.host}${i.host===`router.huggingface.co`?`/fal-ai`:``}`,o=new URL(e.response_url).pathname,s=i.search,c=`${a}${o}/status${s}`,l=`${a}${o}${s}`;for(;r!==`COMPLETED`;){await Gi(500);let e=await fetch(c,{headers:n});if(!e.ok)throw new O(`Failed to fetch response status from fal-ai API`,{url:c,method:`GET`},{requestId:e.headers.get(`x-request-id`)??``,status:e.status,body:await e.text()});try{r=(await e.json()).status}catch{throw new k(`Failed to parse status response from fal-ai API: received malformed response`)}}let u=await fetch(l,{headers:n}),ee;try{ee=await u.json()}catch{throw new k(`Failed to parse result response from fal-ai API: received malformed response`)}return ee}};function ra(e,t){return`${Kr}/${e}/resolve/main/${t}`}var ia=class extends na{task;constructor(){super(`https://queue.fal.run`),this.task=`text-to-image`}preparePayload(e){let t={...N(e.args,[`inputs`,`parameters`]),...e.args.parameters,prompt:e.args.inputs};return e.mapping?.adapter===`lora`&&e.mapping.adapterWeightsPath&&(t.loras=[{path:ra(e.mapping.hfModelId,e.mapping.adapterWeightsPath),scale:1}],e.mapping.providerId===`fal-ai/lora`&&(t.model_name=`stabilityai/stable-diffusion-xl-base-1.0`)),t}async getResponse(e,t,n,r){let i=await this.getResponseFromQueueApi(e,t,n);if(typeof i==`object`&&`images`in i&&Array.isArray(i.images)&&i.images.length>0&&`url`in i.images[0]&&typeof i.images[0].url==`string`&&$i(i.images[0].url)){if(r===`json`)return{...i};if(r===`url`)return i.images[0].url;let e=await(await fetch(i.images[0].url)).blob();return r===`dataUrl`?ri(e):e}throw new k(`Received malformed response from Fal.ai text-to-image API: expected { images: Array<{ url: string }> } result format, got instead: ${JSON.stringify(i)}`)}},aa=class extends na{task;constructor(){super(`https://queue.fal.run`),this.task=`image-to-image`}preparePayload(e){let t=e.args;return e.mapping?.adapter===`lora`&&e.mapping.adapterWeightsPath&&(t.loras=[{path:ra(e.mapping.hfModelId,e.mapping.adapterWeightsPath),scale:1}]),t}async preparePayloadAsync(e){let t=`data:${e.inputs instanceof Blob?e.inputs.type:`image/png`};base64,${M(new Uint8Array(e.inputs instanceof ArrayBuffer?e.inputs:await e.inputs.arrayBuffer()))}`;return{...N(e,[`inputs`,`parameters`]),image_url:t,...e.parameters,...e,image_urls:[t]}}async getResponse(e,t,n){let r=await this.getResponseFromQueueApi(e,t,n);if(typeof r==`object`&&r&&`images`in r&&Array.isArray(r.images)&&r.images.length>0&&typeof r.images[0]==`object`&&r.images[0]&&`url`in r.images[0]&&typeof r.images[0].url==`string`&&$i(r.images[0].url))return await(await fetch(r.images[0].url)).blob();throw new k(`Received malformed response from Fal.ai image-to-image API: expected { images: Array<{ url: string }> } result format, got instead: ${JSON.stringify(r)}`)}},oa=class extends aa{constructor(){super(),this.task=`image-text-to-image`}async preparePayloadAsync(e){return e.inputs?super.preparePayloadAsync(e):{...N(e,[`inputs`,`parameters`]),...e.parameters,prompt:e.parameters?.prompt,urlTransform:e=>{let t=new URL(e);return t.pathname=t.pathname.split(`/`).slice(0,-1).join(`/`),t.toString()}}}},sa=class extends na{task;constructor(){super(`https://queue.fal.run`),this.task=`text-to-video`}preparePayload(e){return{...N(e.args,[`inputs`,`parameters`]),...e.args.parameters,prompt:e.args.inputs}}async getResponse(e,t,n){let r=await this.getResponseFromQueueApi(e,t,n);if(typeof r==`object`&&r&&`video`in r&&typeof r.video==`object`&&r.video&&`url`in r.video&&typeof r.video.url==`string`&&$i(r.video.url))return await(await fetch(r.video.url)).blob();throw new k(`Received malformed response from Fal.ai text-to-video API: expected { video: { url: string } } result format, got instead: ${JSON.stringify(r)}`)}},ca=class extends na{task;constructor(){super(`https://queue.fal.run`),this.task=`image-to-video`}preparePayload(e){return{...N(e.args,[`inputs`,`parameters`]),...e.args.parameters,image_url:e.args.image_url}}async preparePayloadAsync(e){let t=e.inputs instanceof Blob?e.inputs.type:`image/png`;return{...N(e,[`inputs`,`parameters`]),image_url:`data:${t};base64,${M(new Uint8Array(e.inputs instanceof ArrayBuffer?e.inputs:await e.inputs.arrayBuffer()))}`,...e.parameters,...e}}async getResponse(e,t,n){let r=await this.getResponseFromQueueApi(e,t,n);if(typeof r==`object`&&r&&`video`in r&&typeof r.video==`object`&&r.video!==null&&`url`in r.video&&typeof r.video.url==`string`&&`url`in r.video&&$i(r.video.url))return await(await fetch(r.video.url)).blob();throw new k(`Received malformed response from Fal.ai image‑to‑video API: expected { video: { url: string } }, got: ${JSON.stringify(r)}`)}},la=class extends ca{constructor(){super(),this.task=`image-text-to-video`}async preparePayloadAsync(e){return e.inputs?super.preparePayloadAsync(e):{...N(e,[`inputs`,`parameters`]),...e.parameters,prompt:e.parameters?.prompt,urlTransform:e=>{let t=new URL(e);return t.pathname=t.pathname.split(`/`).slice(0,-1).join(`/`),t.toString()}}}},ua=class extends ta{prepareHeaders(e,t){let n=super.prepareHeaders(e,t);return n[`Content-Type`]=`application/json`,n}async getResponse(e){let t=e;if(typeof t?.text!=`string`)throw new k(`Received malformed response from Fal.ai Automatic Speech Recognition API: expected { text: string } format, got instead: ${JSON.stringify(e)}`);return{text:t.text}}async preparePayloadAsync(e){let t=`data`in e&&e.data instanceof Blob?e.data:`inputs`in e?e.inputs:void 0,n=t?.type;if(!n)throw new D(`Unable to determine the input's content-type. Make sure your are passing a Blob when using provider fal-ai.`);if(!ea.includes(n))throw new D(`Provider fal-ai does not support blob type ${n} - supported content types are: ${ea.join(`, `)}`);let r=M(new Uint8Array(await t.arrayBuffer()));return{...`data`in e?N(e,`data`):N(e,`inputs`),audio_url:`data:${n};base64,${r}`}}},da=class extends ta{preparePayload(e){return{...N(e.args,[`inputs`,`parameters`]),...e.args.parameters,text:e.args.inputs}}async getResponse(e){let t=e;if(typeof t?.audio?.url!=`string`)throw new k(`Received malformed response from Fal.ai Text-to-Speech API: expected { audio: { url: string } } format, got instead: ${JSON.stringify(e)}`);let n=await fetch(t.audio.url);if(!n.ok)throw new O(`Failed to fetch audio from ${t.audio.url}: ${n.statusText}`,{url:t.audio.url,method:`GET`,headers:{"Content-Type":`application/json`}},{requestId:n.headers.get(`x-request-id`)??``,status:n.status,body:await n.text()});try{return await n.blob()}catch(e){throw new O(`Failed to fetch audio from ${t.audio.url}: ${e instanceof Error?e.message:String(e)}`,{url:t.audio.url,method:`GET`,headers:{"Content-Type":`application/json`}},{requestId:n.headers.get(`x-request-id`)??``,status:n.status,body:await n.text()})}}},fa=class extends na{task;constructor(){super(`https://queue.fal.run`),this.task=`image-segmentation`}preparePayload(e){return{...N(e.args,[`inputs`,`parameters`]),...e.args.parameters,sync_mode:!0}}async preparePayloadAsync(e){let t=`data`in e&&e.data instanceof Blob?e.data:`inputs`in e?e.inputs:void 0,n=t instanceof Blob?t.type:`image/png`,r=M(new Uint8Array(t instanceof ArrayBuffer?t:await t.arrayBuffer()));return{...N(e,[`inputs`,`parameters`,`data`]),...e.parameters,...e,image_url:`data:${n};base64,${r}`,sync_mode:!0}}async getResponse(e,t,n){let r=await this.getResponseFromQueueApi(e,t,n);if(typeof r==`object`&&r&&`image`in r&&typeof r.image==`object`&&r.image!==null&&`url`in r.image&&typeof r.image.url==`string`){let e=await fetch(r.image.url);if(!e.ok)throw new O(`Failed to fetch segmentation mask from ${r.image.url}`,{url:r.image.url,method:`GET`},{requestId:e.headers.get(`x-request-id`)??``,status:e.status,body:await e.text()});let t=await(await e.blob()).arrayBuffer();return[{label:`mask`,score:1,mask:M(new Uint8Array(t))}]}throw new k(`Received malformed response from Fal.ai image-segmentation API: expected { image: { url: string } } format, got instead: ${JSON.stringify(e)}`)}},pa=`https://api.featherless.ai`,ma=class extends j{constructor(){super(`featherless-ai`,pa)}},ha=class extends ti{constructor(){super(`featherless-ai`,pa)}preparePayload(e){return{model:e.model,...N(e.args,[`inputs`,`parameters`]),...e.args.parameters?{max_tokens:e.args.parameters.max_new_tokens,...N(e.args.parameters,`max_new_tokens`)}:void 0,prompt:e.args.inputs}}async getResponse(e){if(typeof e==`object`&&`choices`in e&&Array.isArray(e?.choices)&&typeof e?.model==`string`)return{generated_text:e.choices[0].text};throw new k(`Received malformed response from Featherless AI text generation API`)}},ga=class extends j{constructor(){super(`fireworks-ai`,`https://api.fireworks.ai`)}makeRoute(){return`/inference/v1/chat/completions`}},_a=`https://api.groq.com`,va=class extends ti{constructor(){super(`groq`,_a)}makeRoute(){return`/openai/v1/chat/completions`}},ya=class extends j{constructor(){super(`groq`,_a)}makeRoute(){return`/openai/v1/chat/completions`}},ba=`https://api.hyperbolic.xyz`,xa=class extends j{constructor(){super(`hyperbolic`,ba)}},Sa=class extends ti{constructor(){super(`hyperbolic`,ba)}makeRoute(){return`v1/chat/completions`}preparePayload(e){return{messages:[{content:e.args.inputs,role:`user`}],...e.args.parameters?{max_tokens:e.args.parameters.max_new_tokens,...N(e.args.parameters,`max_new_tokens`)}:void 0,...N(e.args,[`inputs`,`parameters`]),model:e.model}}async getResponse(e){if(typeof e==`object`&&`choices`in e&&Array.isArray(e?.choices)&&typeof e?.model==`string`)return{generated_text:e.choices[0].message.content};throw new k(`Received malformed response from Hyperbolic text generation API`)}},Ca=class extends A{constructor(){super(`hyperbolic`,ba)}makeRoute(e){return`/v1/images/generations`}preparePayload(e){if(e.outputType===`url`)throw new D(`hyperbolic provider does not support URL output. Use outputType 'blob', 'dataUrl' or 'json' instead.`);return{...N(e.args,[`inputs`,`parameters`]),...e.args.parameters,prompt:e.args.inputs,model_name:e.model}}async getResponse(e,t,n,r){if(typeof e==`object`&&`images`in e&&Array.isArray(e.images)&&e.images[0]&&typeof e.images[0].image==`string`)return r===`json`?{...e}:r===`dataUrl`?`data:image/jpeg;base64,${e.images[0].image}`:fetch(`data:image/jpeg;base64,${e.images[0].image}`).then(e=>e.blob());throw new k(`Received malformed response from Hyperbolic text-to-image API`)}},wa=`https://api.studio.nebius.ai`,Ta=class extends j{constructor(){super(`nebius`,wa)}preparePayload(e){let t=super.preparePayload(e),n=e.args.response_format;return n?.type===`json_schema`&&n.json_schema?.schema&&(t.guided_json=n.json_schema.schema),t}},Ea=class extends ti{constructor(){super(`nebius`,wa)}preparePayload(e){return{...e.args,model:e.model,prompt:e.args.inputs}}async getResponse(e){if(typeof e==`object`&&`choices`in e&&Array.isArray(e?.choices)&&e.choices.length>0&&typeof e.choices[0]?.text==`string`)return{generated_text:e.choices[0].text};throw new k(`Received malformed response from Nebius text generation API`)}},Da=class extends A{constructor(){super(`nebius`,wa)}preparePayload(e){return{...N(e.args,[`inputs`,`parameters`]),...e.args.parameters,response_format:e.outputType===`url`?`url`:`b64_json`,prompt:e.args.inputs,model:e.model}}makeRoute(){return`v1/images/generations`}async getResponse(e,t,n,r){if(typeof e==`object`&&`data`in e&&Array.isArray(e.data)&&e.data.length>0){if(r===`json`)return{...e};if(`url`in e.data[0]&&typeof e.data[0].url==`string`)return e.data[0].url;if(`b64_json`in e.data[0]&&typeof e.data[0].b64_json==`string`){let t=e.data[0].b64_json;return r===`dataUrl`?`data:image/jpeg;base64,${t}`:fetch(`data:image/jpeg;base64,${t}`).then(e=>e.blob())}}throw new k(`Received malformed response from Nebius text-to-image API`)}},Oa=class extends A{constructor(){super(`nebius`,wa)}preparePayload(e){return{input:e.args.inputs,model:e.model}}makeRoute(){return`v1/embeddings`}async getResponse(e){return e.data.map(e=>e.embedding)}},ka=`https://api.novita.ai`,Aa=class extends ti{constructor(){super(`novita`,ka)}makeRoute(){return`/v3/openai/chat/completions`}},ja=class extends j{constructor(){super(`novita`,ka)}makeRoute(){return`/v3/openai/chat/completions`}},Ma=class extends A{constructor(){super(`novita`,ka)}makeRoute(e){return`/v3/async/${e.model}`}preparePayload(e){let{num_inference_steps:t,...n}=e.args.parameters??{};return{...N(e.args,[`inputs`,`parameters`]),...n,steps:t,prompt:e.args.inputs}}async getResponse(e,t,n){if(!t||!n)throw new D(`URL and headers are required for text-to-video task`);let r=e.task_id;if(!r)throw new k(`Received malformed response from Novita text-to-video API: no task ID found in the response`);let i=new URL(t),a=`${`${i.protocol}//${i.host}${i.host===`router.huggingface.co`?`/novita`:``}`}/v3/async/task-result?task_id=${r}`,o=``,s;for(;o!==`TASK_STATUS_SUCCEED`&&o!==`TASK_STATUS_FAILED`;){await Gi(500);let e=await fetch(a,{headers:n});if(!e.ok)throw new O(`Failed to fetch task result`,{url:a,method:`GET`,headers:n},{requestId:e.headers.get(`x-request-id`)??``,status:e.status,body:await e.text()});try{if(s=await e.json(),s&&typeof s==`object`&&`task`in s&&s.task&&typeof s.task==`object`&&`status`in s.task&&typeof s.task.status==`string`)o=s.task.status;else throw new k(`Received malformed response from Novita text-to-video API: failed to get task status`)}catch{throw new k(`Received malformed response from Novita text-to-video API: failed to parse task result`)}}if(o===`TASK_STATUS_FAILED`)throw new k(`Novita text-to-video task failed`);if(typeof s==`object`&&s&&`videos`in s&&typeof s.videos==`object`&&s.videos&&Array.isArray(s.videos)&&s.videos.length>0&&`video_url`in s.videos[0]&&typeof s.videos[0].video_url==`string`&&$i(s.videos[0].video_url))return await(await fetch(s.videos[0].video_url)).blob();throw new k(`Received malformed response from Novita text-to-video API: expected { videos: [{ video_url: string }] } format, got instead: ${JSON.stringify(s)}`)}},Na=`https://inference.api.nscale.com`,Pa=class extends j{constructor(){super(`nscale`,Na)}},Fa=class extends A{constructor(){super(`nscale`,Na)}preparePayload(e){if(e.outputType===`url`)throw new D(`nscale provider does not support URL output. Use outputType 'blob', 'dataUrl' or 'json' instead.`);return{...N(e.args,[`inputs`,`parameters`]),...e.args.parameters,response_format:`b64_json`,prompt:e.args.inputs,model:e.model}}makeRoute(){return`v1/images/generations`}async getResponse(e,t,n,r){if(typeof e==`object`&&`data`in e&&Array.isArray(e.data)&&e.data.length>0&&`b64_json`in e.data[0]&&typeof e.data[0].b64_json==`string`){if(r===`json`)return{...e};let t=e.data[0].b64_json;return r===`dataUrl`?`data:image/jpeg;base64,${t}`:fetch(`data:image/jpeg;base64,${t}`).then(e=>e.blob())}throw new k(`Received malformed response from Nscale text-to-image API`)}},Ia=class extends j{constructor(){super(`nvidia`,`https://integrate.api.nvidia.com`)}},La=`https://api.openai.com`,Ra=class extends j{constructor(){super(`openai`,La,!0)}},za=`https://oai.endpoints.kepler.ai.cloud.ovh.net`,Ba=class extends j{constructor(){super(`ovhcloud`,za)}},Va=class extends ti{constructor(){super(`ovhcloud`,za)}preparePayload(e){return{model:e.model,...N(e.args,[`inputs`,`parameters`]),...e.args.parameters?{max_tokens:e.args.parameters.max_new_tokens,...N(e.args.parameters,`max_new_tokens`)}:void 0,prompt:e.args.inputs}}async getResponse(e){if(typeof e==`object`&&`choices`in e&&Array.isArray(e?.choices)&&typeof e?.model==`string`)return{generated_text:e.choices[0].text};throw new k(`Received malformed response from OVHcloud text generation API`)}},Ha=class extends j{constructor(){super(`publicai`,`https://api.publicai.co`)}},Ua=class extends A{constructor(e){super(`replicate`,e||`https://api.replicate.com`)}makeRoute(e){return e.model.includes(`:`)?`v1/predictions`:`v1/models/${e.model}/predictions`}preparePayload(e){return{input:{...N(e.args,[`inputs`,`parameters`]),...e.args.parameters,prompt:e.args.inputs},version:e.model.includes(`:`)?e.model.split(`:`)[1]:void 0}}prepareHeaders(e,t){let n={Authorization:`Bearer ${e.accessToken}`,Prefer:`wait`};return t||(n[`Content-Type`]=`application/json`),n}makeUrl(e){let t=this.makeBaseUrl(e);return e.model.includes(`:`)?`${t}/v1/predictions`:`${t}/v1/models/${e.model}/predictions`}},Wa=class extends Ua{preparePayload(e){return{input:{...N(e.args,[`inputs`,`parameters`]),...e.args.parameters,prompt:e.args.inputs,lora_weights:e.mapping?.adapter===`lora`&&e.mapping.adapterWeightsPath?`https://huggingface.co/${e.mapping.hfModelId}`:void 0},version:e.model.includes(`:`)?e.model.split(`:`)[1]:void 0}}async getResponse(e,t,n,r){if(typeof e==`object`&&`output`in e&&typeof e.output==`string`&&$i(e.output)){if(r===`json`)return{...e};if(r===`url`)return e.output;let t=await(await fetch(e.output)).blob();return r===`dataUrl`?ri(t):t}if(typeof e==`object`&&`output`in e&&Array.isArray(e.output)&&e.output.length>0&&typeof e.output[0]==`string`){if(r===`json`)return{...e};if(r===`url`)return e.output[0];let t=await(await fetch(e.output[0])).blob();return r===`dataUrl`?ri(t):t}throw new k(`Received malformed response from Replicate text-to-image API`)}},Ga=class extends Ua{preparePayload(e){let t=super.preparePayload(e),n=t.input;if(typeof n==`object`&&n&&`prompt`in n){let e=n;e.text=e.prompt,delete e.prompt}return t}async getResponse(e){if(e instanceof Blob)return e;if(e&&typeof e==`object`&&`output`in e){if(typeof e.output==`string`)return await(await fetch(e.output)).blob();if(Array.isArray(e.output))return await(await fetch(e.output[0])).blob()}throw new k(`Received malformed response from Replicate text-to-speech API`)}},Ka=class extends Ua{async getResponse(e){if(typeof e==`object`&&e&&`output`in e&&typeof e.output==`string`&&$i(e.output))return await(await fetch(e.output)).blob();throw new k(`Received malformed response from Replicate text-to-video API`)}},qa=class extends Ua{preparePayload(e){return{input:{...N(e.args,[`inputs`,`parameters`]),...e.args.parameters,audio:e.args.inputs},version:e.model.includes(`:`)?e.model.split(`:`)[1]:void 0}}async preparePayloadAsync(e){let t=`data`in e&&e.data instanceof Blob?e.data:`inputs`in e?e.inputs:void 0;if(!t||!(t instanceof Blob))throw Error(`Audio input must be a Blob`);let n=M(new Uint8Array(await t.arrayBuffer())),r=`data:${t.type||`audio/wav`};base64,${n}`;return{...`data`in e?N(e,`data`):N(e,`inputs`),inputs:r}}async getResponse(e){if(typeof e?.output==`string`)return{text:e.output};if(Array.isArray(e?.output)&&typeof e.output[0]==`string`)return{text:e.output[0]};let t=e?.output;if(t&&typeof t==`object`){if(typeof t.transcription==`string`)return{text:t.transcription};if(typeof t.translation==`string`)return{text:t.translation};if(typeof t.txt_file==`string`)return{text:await(await fetch(t.txt_file)).text()}}throw new k(`Received malformed response from Replicate automatic-speech-recognition API`)}},Ja=class extends Ua{preparePayload(e){let t=e.args.inputs;return{input:{...N(e.args,[`inputs`,`parameters`]),...e.args.parameters,image:t,images:[t],input_image:t,input_images:[t],lora_weights:e.mapping?.adapter===`lora`&&e.mapping.adapterWeightsPath?`https://huggingface.co/${e.mapping.hfModelId}`:void 0},version:e.model.includes(`:`)?e.model.split(`:`)[1]:void 0}}async preparePayloadAsync(e){let{inputs:t,...n}=e,r=M(new Uint8Array(await t.arrayBuffer())),i=`data:${t.type||`image/jpeg`};base64,${r}`;return{...n,inputs:i}}async getResponse(e){if(typeof e==`object`&&e&&`output`in e&&Array.isArray(e.output)&&e.output.length>0&&typeof e.output[0]==`string`)return await(await fetch(e.output[0])).blob();if(typeof e==`object`&&e&&`output`in e&&typeof e.output==`string`&&$i(e.output))return await(await fetch(e.output)).blob();throw new k(`Received malformed response from Replicate image-to-image API`)}},Ya=class extends j{constructor(){super(`sambanova`,`https://api.sambanova.ai`)}preparePayload(e){let t=e.args.response_format;return t?.type===`json_schema`&&t.json_schema&&(t.json_schema.strict??!0)&&(t.json_schema.strict=!1),super.preparePayload(e)}},Xa=class extends A{constructor(){super(`sambanova`,`https://api.sambanova.ai`)}makeRoute(){return`/v1/embeddings`}async getResponse(e){if(typeof e==`object`&&`data`in e&&Array.isArray(e.data))return e.data.map(e=>e.embedding);throw new k(`Received malformed response from Sambanova feature-extraction (embeddings) API`)}preparePayload(e){return{model:e.model,input:e.args.inputs,...e.args}}},Za=`https://api.scaleway.ai`,Qa=class extends j{constructor(){super(`scaleway`,Za)}},$a=class extends ti{constructor(){super(`scaleway`,Za)}preparePayload(e){return{model:e.model,...e.args,prompt:e.args.inputs}}async getResponse(e){if(typeof e==`object`&&e&&`choices`in e&&Array.isArray(e.choices)&&e.choices.length>0){let t=e.choices[0];if(typeof t==`object`&&t&&`text`in t&&t.text&&typeof t.text==`string`)return{generated_text:t.text}}throw new k(`Received malformed response from Scaleway text generation API`)}},eo=class extends A{constructor(){super(`scaleway`,Za)}preparePayload(e){return{input:e.args.inputs,model:e.model}}makeRoute(){return`v1/embeddings`}async getResponse(e){return e.data.map(e=>e.embedding)}},to=`https://api.together.xyz`,no=class extends j{constructor(){super(`together`,to)}preparePayload(e){let t=super.preparePayload(e),n=t.response_format;return n?.type===`json_schema`&&n?.json_schema?.schema&&(t.response_format={type:`json_schema`,schema:n.json_schema.schema}),t}},ro=class extends ti{constructor(){super(`together`,to)}preparePayload(e){return{model:e.model,...e.args,prompt:e.args.inputs}}async getResponse(e){if(typeof e==`object`&&`choices`in e&&Array.isArray(e?.choices)&&typeof e?.model==`string`)return{generated_text:e.choices[0].text};throw new k(`Received malformed response from Together text generation API`)}},io=class extends A{constructor(){super(`together`,to)}makeRoute(){return`v1/images/generations`}preparePayload(e){return{...N(e.args,[`inputs`,`parameters`]),...e.args.parameters,prompt:e.args.inputs,response_format:e.outputType===`url`?`url`:`base64`,model:e.model}}async getResponse(e,t,n,r){if(typeof e==`object`&&`data`in e&&Array.isArray(e.data)&&e.data.length>0){if(r===`json`)return{...e};if(`url`in e.data[0]&&typeof e.data[0].url==`string`)return e.data[0].url;if(`b64_json`in e.data[0]&&typeof e.data[0].b64_json==`string`){let t=e.data[0].b64_json;return r===`dataUrl`?`data:image/jpeg;base64,${t}`:fetch(`data:image/jpeg;base64,${t}`).then(e=>e.blob())}}throw new k(`Received malformed response from Together text-to-image API`)}},ao=`https://api.wavespeed.ai`;async function oo(e,t){let n=M(new Uint8Array(e instanceof ArrayBuffer?e:await e.arrayBuffer()));return{base:n,images:Array.isArray(t)&&t.every(e=>typeof e==`string`)?t:[n]}}var so=class extends A{constructor(e){super(`wavespeed`,e||ao)}makeRoute(e){return`/api/v3/${e.model}`}preparePayload(e){let t={...N(e.args,[`inputs`,`parameters`]),...e.args.parameters?N(e.args.parameters,[`images`]):void 0,prompt:e.args.inputs};return e.mapping?.adapter===`lora`&&(t.loras=[{path:e.mapping.hfModelId,scale:1}]),t}async getResponse(e,t,n,r){if(!t||!n)throw new D(`Headers are required for WaveSpeed AI API calls`);let i=new URL(t),a=new URL(e.data.urls.get).pathname,o=`${`${i.protocol}//${i.host}${i.host===`router.huggingface.co`?`/wavespeed`:``}`}${a}`;for(;;){let e=await fetch(o,{headers:n});if(!e.ok)throw new O(`Failed to fetch response status from WaveSpeed AI API`,{url:o,method:`GET`},{requestId:e.headers.get(`x-request-id`)??``,status:e.status,body:await e.text()});let t=await e.json(),i=t.data;switch(i.status){case`completed`:{if(!i.outputs?.[0])throw new k(`Received malformed response from WaveSpeed AI API: No output URL in completed response`);let e=i.outputs[0];if(r===`url`)return e;if(r===`json`)return t;let n=await fetch(e);if(!n.ok)throw new O(`Failed to fetch generation output from WaveSpeed AI API`,{url:e,method:`GET`},{requestId:n.headers.get(`x-request-id`)??``,status:n.status,body:await n.text()});let a=await n.blob();return r===`dataUrl`?ri(a):a}case`failed`:throw new k(i.error||`Task failed`);default:await Gi(500);continue}}}},co=class extends so{constructor(){super(ao)}},lo=class extends so{constructor(){super(ao)}async getResponse(e,t,n){return super.getResponse(e,t,n)}},uo=class extends so{constructor(){super(ao)}async preparePayloadAsync(e){let t=e.images??e.parameters?.images,{base:n,images:r}=await oo(e.inputs,t);return{...e,inputs:e.parameters?.prompt,image:n,images:r}}async getResponse(e,t,n){return super.getResponse(e,t,n)}},fo=class extends so{constructor(){super(ao)}async preparePayloadAsync(e){let t=e.images??e.parameters?.images,{base:n,images:r}=await oo(e.inputs,t);return{...e,inputs:e.parameters?.prompt,image:n,images:r}}async getResponse(e,t,n){return super.getResponse(e,t,n)}},po=`iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`;function mo(){let e=Uint8Array.from(Buffer.from(po,`base64`));return new Blob([e],{type:`image/png`})}var ho=class extends uo{constructor(){super()}async preparePayloadAsync(e){let t=e.inputs??mo();return super.preparePayloadAsync({...e,inputs:t})}},go=class extends fo{constructor(){super()}async preparePayloadAsync(e){let t=e.inputs??mo();return super.preparePayloadAsync({...e,inputs:t})}},_o=`https://api.z.ai`,vo=class extends A{constructor(){super(`zai-org`,_o)}prepareHeaders(e,t){let n=super.prepareHeaders(e,t);return n[`x-source-channel`]=`hugging_face`,n[`accept-language`]=`en-US,en`,n}},yo=class extends j{constructor(){super(`zai-org`,_o)}prepareHeaders(e,t){let n=super.prepareHeaders(e,t);return n[`x-source-channel`]=`hugging_face`,n[`accept-language`]=`en-US,en`,n}makeRoute(){return`/api/paas/v4/chat/completions`}},bo=60,xo=5e3,So=class extends vo{makeRoute(){return`/api/paas/v4/async/images/generations`}preparePayload(e){return{...N(e.args,[`inputs`,`parameters`]),...e.args.parameters,model:e.model,prompt:e.args.inputs}}async getResponse(e,t,n,r){if(!t||!n)throw new D(`URL and headers are required for 'text-to-image' task`);if(typeof e!=`object`||!e||!(`task_status`in e)||!(`id`in e)||typeof e.id!=`string`)throw new k(`Received malformed response from ZAI text-to-image API: expected { id: string, task_status: string }, got: ${JSON.stringify(e)}`);if(e.task_status===`FAIL`)throw new k(`ZAI API returned task status: FAIL`);let i=e.id,a=new URL(t),o=`${`${a.protocol}//${a.host}${a.host===`router.huggingface.co`?`/zai-org`:``}`}/api/paas/v4/async-result/${i}`,s={...n,"x-source-channel":`hugging_face`,"accept-language":`en-US,en`};for(let e=0;e<bo;e++){await Gi(xo);let e=await fetch(o,{method:`GET`,headers:s});if(!e.ok)throw new O(`Failed to fetch result from ZAI text-to-image API: ${e.status}`,{url:o,method:`GET`},{requestId:e.headers.get(`x-request-id`)??``,status:e.status,body:await e.text()});let t=await e.json();if(t.task_status===`FAIL`)throw new k(`ZAI text-to-image API task failed`);if(t.task_status===`SUCCESS`){if(!t.image_result||!Array.isArray(t.image_result)||t.image_result.length===0||typeof t.image_result[0]?.url!=`string`||!$i(t.image_result[0].url))throw new k(`Received malformed response from ZAI text-to-image API: expected { image_result: Array<{ url: string }> }, got: ${JSON.stringify(t)}`);let e=t.image_result[0].url;if(r===`json`)return{...t};if(r===`url`)return e;let n=await(await fetch(e)).blob();return r===`dataUrl`?ri(n):n}}throw new k(`Timed out while waiting for the result from ZAI API - aborting after ${bo} attempts`)}},Co=class extends vo{makeRoute(){return`/api/paas/v4/layout_parsing`}async preparePayloadAsync(e){let t=`data`in e&&e.data instanceof Blob?e.data:`inputs`in e?typeof e.inputs==`string`&&$i(e.inputs)?await fetch(e.inputs).then(e=>e.blob()):e.inputs instanceof Blob?e.inputs:void 0:void 0;if(!t||!(t instanceof Blob))throw new D(`ZAI image-to-text requires a URL string or Blob as inputs`);let n=`data:${t.type||`image/png`};base64,${M(new Uint8Array(await t.arrayBuffer()))}`;return{...`data`in e?N(e,`data`):N(e,`inputs`),inputs:n}}preparePayload(e){return{model:e.model,file:e.args.inputs}}async getResponse(e){let t=e?.md_results;if(typeof t!=`string`)throw new k(`Received malformed response from ZAI layout_parsing API: expected { md_results: string }, got: ${JSON.stringify(e)}`);return{generated_text:t,generatedText:t}}},wo={baseten:{conversational:new Hi},"black-forest-labs":{"text-to-image":new qi},cerebras:{conversational:new Ji},clarifai:{conversational:new Wi},cohere:{conversational:new Yi},deepinfra:{conversational:new Zi,"text-generation":new Qi},"fal-ai":{"automatic-speech-recognition":new ua,"image-text-to-image":new oa,"image-text-to-video":new la,"image-to-image":new aa,"image-segmentation":new fa,"image-to-video":new ca,"text-to-image":new ia,"text-to-speech":new da,"text-to-video":new sa},"featherless-ai":{conversational:new ma,"text-generation":new ha},"hf-inference":{"text-to-image":new si,conversational:new ci,"text-generation":new li,"text-classification":new xi,"question-answering":new Si,"audio-classification":new ui,"automatic-speech-recognition":new di,"fill-mask":new Ci,"feature-extraction":new mi,"image-classification":new hi,"image-segmentation":new gi,"document-question-answering":new pi,"image-to-text":new _i,"object-detection":new yi,"audio-to-audio":new fi,"zero-shot-image-classification":new bi,"zero-shot-classification":new wi,"image-to-image":new vi,"sentence-similarity":new Ti,"table-question-answering":new Ei,"tabular-classification":new ji,"text-to-speech":new Ai,"token-classification":new Di,translation:new Oi,summarization:new ki,"visual-question-answering":new Mi,"tabular-regression":new Ni,"text-to-audio":new Pi},"fireworks-ai":{conversational:new ga},groq:{conversational:new ya,"text-generation":new va},hyperbolic:{"text-to-image":new Ca,conversational:new xa,"text-generation":new Sa},nebius:{"text-to-image":new Da,conversational:new Ta,"text-generation":new Ea,"feature-extraction":new Oa},novita:{conversational:new ja,"text-generation":new Aa,"text-to-video":new Ma},nscale:{"text-to-image":new Fa,conversational:new Pa},nvidia:{conversational:new Ia},openai:{conversational:new Ra},ovhcloud:{conversational:new Ba,"text-generation":new Va},publicai:{conversational:new Ha},replicate:{"text-to-image":new Wa,"text-to-speech":new Ga,"text-to-video":new Ka,"image-to-image":new Ja,"automatic-speech-recognition":new qa},sambanova:{conversational:new Ya,"feature-extraction":new Xa},scaleway:{conversational:new Qa,"text-generation":new $a,"feature-extraction":new eo},together:{"text-to-image":new io,conversational:new no,"text-generation":new ro},wavespeed:{"text-to-image":new co,"text-to-video":new lo,"image-to-image":new uo,"image-to-video":new fo,"image-text-to-image":new ho,"image-text-to-video":new go},"zai-org":{conversational:new yo,"text-to-image":new So,"image-to-text":new Co}};function I(e,t){if(e===`hf-inference`&&!t||e===`auto`)return new P;if(!t)throw new D(`you need to provide a task name when using an external provider, e.g. 'text-to-image'`);if(!(e in wo))throw new D(`Provider '${e}' not supported. Available providers: ${Object.keys(wo)}`);let n=wo[e];if(!n||!(t in n))throw new D(`Task '${t}' not supported for provider '${e}'. Available tasks: ${Object.keys(n??{})}`);return n[t]}var To=`4.13.15`,Eo=`@huggingface/inference`,Do=null;async function Oo(e,t,n){let{model:r}=e,i=t.provider,{task:a}=n??{};if(e.endpointUrl&&i!==`hf-inference`)throw new D(`Cannot use endpointUrl with a third-party provider.`);if(r&&$i(r))throw new D(`Model URLs are no longer supported. Use endpointUrl instead.`);if(e.endpointUrl)return ko(r??e.endpointUrl,t,e,void 0,n);if(!r&&!a)throw new D(`No model provided, and no task has been specified.`);let o=r??await Ao(a);if(t.clientSideRoutingOnly&&!r)throw new D(`Provider ${i} requires a model ID to be passed directly.`);let s=t.clientSideRoutingOnly?{provider:i,providerId:Mo(r,i),hfModelId:r,status:`live`,task:a}:await Bi({modelId:o,task:a,provider:i,accessToken:e.accessToken},{fetch:n?.fetch});if(!s)throw new D(`We have not been able to find inference provider information for model ${o}.`);return ko(s.providerId,t,e,s,n)}function ko(e,t,n,r,i){let{accessToken:a,endpointUrl:o,provider:s,model:c,urlTransform:l,...u}=n,ee=t.provider,{includeCredentials:d,task:f,signal:p,billTo:te,outputType:ne}=i??{},m=(()=>{if(t.clientSideRoutingOnly&&a&&a.startsWith(`hf_`))throw new D(`Provider ${ee} is closed-source and does not support HF tokens.`);return a?a.startsWith(`hf_`)?`hf-token`:`provider-key`:d===`include`?`credentials-include`:`none`})(),re=o??e,ie=t.makeUrl({authMethod:m,model:re,task:f,urlTransform:l}),ae=t.prepareHeaders({accessToken:a,authMethod:m},`data`in n&&!!n.data);te&&(ae[Jr]=te),ae[`User-Agent`]=[`${Eo}/${To}`,typeof navigator<`u`?navigator.userAgent:void 0].filter(e=>e!==void 0).join(` `);let oe=t.makeBody({args:u,model:e,task:f,mapping:r,outputType:ne}),se;return typeof d==`string`?se=d:d===!0&&(se=`include`),{url:ie,info:{headers:ae,method:`POST`,body:oe,...se?{credentials:se}:void 0,signal:p}}}async function Ao(e){Do||=await jo();let t=Do[e];if((t?.models.length??0)<=0)throw new D(`No default model defined for task ${e}, please define the model explicitly.`);return t.models[0].id}async function jo(){let e=`${Kr}/api/tasks`,t=await fetch(e);if(!t.ok)throw new $r(`Failed to load tasks definitions from Hugging Face Hub.`,{url:e,method:`GET`},{requestId:t.headers.get(`x-request-id`)??``,status:t.status,body:await t.text()});return await t.json()}function Mo(e,t){if(!e.startsWith(`${t}/`))throw new D(`Models from ${t} must be prefixed by "${t}/". Got "${e}".`);return e.slice(t.length+1)}function No(e){let t,n,r,i=!1;return function(a){t===void 0?(t=a,n=0,r=-1):t=Fo(t,a);let o=t.length,s=0;for(;n<o;){i&&=(t[n]===10&&(s=++n),!1);let a=-1;for(;n<o&&a===-1;++n)switch(t[n]){case 58:r===-1&&(r=n-s);break;case 13:i=!0;case 10:a=n;break}if(a===-1)break;e(t.subarray(s,a),r),s=n,r=-1}s===o?t=void 0:s!==0&&(t=t.subarray(s),n-=s)}}function Po(e,t,n){let r=Io(),i=new TextDecoder;return function(a,o){if(a.length===0)n?.(r),r=Io();else if(o>0){let n=i.decode(a.subarray(0,o)),s=o+(a[o+1]===32?2:1),c=i.decode(a.subarray(s));switch(n){case`data`:r.data=r.data?r.data+`
`+c:c;break;case`event`:r.event=c;break;case`id`:e(r.id=c);break;case`retry`:{let e=parseInt(c,10);isNaN(e)||t(r.retry=e);break}}}}}function Fo(e,t){let n=new Uint8Array(e.length+t.length);return n.set(e),n.set(t,e.length),n}function Io(){return{data:``,event:``,id:``,retry:void 0}}function Lo(e){let t=null;if(e instanceof Blob||e instanceof ArrayBuffer)t=`[Blob or ArrayBuffer]`;else if(typeof e==`string`)try{t=JSON.parse(e)}catch{t=e}return t.accessToken&&=`[REDACTED]`,t}async function L(e,t,n){let{url:r,info:i}=await Oo(e,t,n),a=await(n?.fetch??fetch)(r,i),o={url:r,info:i};if(n?.retry_on_error!==!1&&a.status===503)return L(e,t,n);if(!a.ok){let t=a.headers.get(`Content-Type`);if([`application/json`,`application/problem+json`].some(e=>t?.startsWith(e))){let t=await a.json();throw[400,422,404,500].includes(a.status)&&n?.chatCompletion?new O(`Provider ${e.provider} does not seem to support chat completion for model ${e.model} . Error: ${JSON.stringify(t.error)}`,{url:r,method:i.method??`GET`,headers:i.headers,body:Lo(i.body)},{requestId:a.headers.get(`x-request-id`)??``,status:a.status,body:t}):typeof t.error==`string`||typeof t.detail==`string`||typeof t.message==`string`?new O(`Failed to perform inference: ${t.error??t.detail??t.message}`,{url:r,method:i.method??`GET`,headers:i.headers,body:Lo(i.body)},{requestId:a.headers.get(`x-request-id`)??``,status:a.status,body:t}):new O(`Failed to perform inference: an HTTP error occurred when requesting the provider.`,{url:r,method:i.method??`GET`,headers:i.headers,body:Lo(i.body)},{requestId:a.headers.get(`x-request-id`)??``,status:a.status,body:t})}let o=t?.startsWith(`text/plain;`)?await a.text():void 0;throw new O(`Failed to perform inference: ${o??`an HTTP error occurred when requesting the provider`}`,{url:r,method:i.method??`GET`,headers:i.headers,body:Lo(i.body)},{requestId:a.headers.get(`x-request-id`)??``,status:a.status,body:o??``})}return a.headers.get(`Content-Type`)?.startsWith(`application/json`)?{data:await a.json(),requestContext:o}:{data:await a.blob(),requestContext:o}}async function*Ro(e,t,n){let{url:r,info:i}=await Oo({...e,stream:!0},t,n),a=await(n?.fetch??fetch)(r,i);if(n?.retry_on_error!==!1&&a.status===503)return yield*Ro(e,t,n);if(!a.ok){if(a.headers.get(`Content-Type`)?.startsWith(`application/json`)){let t=await a.json();if([400,422,404,500].includes(a.status)&&n?.chatCompletion)throw new O(`Provider ${e.provider} does not seem to support chat completion for model ${e.model} . Error: ${JSON.stringify(t.error)}`,{url:r,method:i.method??`GET`,headers:i.headers,body:Lo(i.body)},{requestId:a.headers.get(`x-request-id`)??``,status:a.status,body:t});if(typeof t.error==`string`)throw new O(`Failed to perform inference: ${t.error}`,{url:r,method:i.method??`GET`,headers:i.headers,body:Lo(i.body)},{requestId:a.headers.get(`x-request-id`)??``,status:a.status,body:t});if(t.error&&`message`in t.error&&typeof t.error.message==`string`)throw new O(`Failed to perform inference: ${t.error.message}`,{url:r,method:i.method??`GET`,headers:i.headers,body:Lo(i.body)},{requestId:a.headers.get(`x-request-id`)??``,status:a.status,body:t});if(typeof t.message==`string`)throw new O(`Failed to perform inference: ${t.message}`,{url:r,method:i.method??`GET`,headers:i.headers,body:Lo(i.body)},{requestId:a.headers.get(`x-request-id`)??``,status:a.status,body:t})}throw new O(`Failed to perform inference: an HTTP error occurred when requesting the provider.`,{url:r,method:i.method??`GET`,headers:i.headers,body:Lo(i.body)},{requestId:a.headers.get(`x-request-id`)??``,status:a.status,body:``})}if(!a.headers.get(`content-type`)?.startsWith(`text/event-stream`))throw new O(`Failed to perform inference: server does not support event stream content type, it returned `+a.headers.get(`content-type`),{url:r,method:i.method??`GET`,headers:i.headers,body:Lo(i.body)},{requestId:a.headers.get(`x-request-id`)??``,status:a.status,body:``});if(!a.body)return;let o=a.body.getReader(),s=[],c=No(Po(()=>{},()=>{},e=>{s.push(e)}));try{for(;;){let{done:e,value:t}=await o.read();if(e)return;c(t);for(let e of s)if(e.data.length>0){if(e.data===`[DONE]`)return;let t=JSON.parse(e.data);if(typeof t==`object`&&t&&`error`in t)throw new O(`Failed to perform inference: an occurred while streaming the response: ${typeof t.error==`string`?t.error:typeof t.error==`object`&&t.error&&`message`in t.error&&typeof t.error.message==`string`?t.error.message:JSON.stringify(t.error)}`,{url:r,method:i.method??`GET`,headers:i.headers,body:Lo(i.body)},{requestId:a.headers.get(`x-request-id`)??``,status:a.status,body:t});yield t}s=[]}}finally{o.releaseLock()}}async function zo(e,t){return Ii().warn(`The request method is deprecated and will be removed in a future version of huggingface.js. Use specific task functions instead.`),(await L(e,I(await F(e.provider,e.model,e.endpointUrl),t?.task),t)).data}async function*Bo(e,t){Ii().warn(`The streamingRequest method is deprecated and will be removed in a future version of huggingface.js. Use specific task functions instead.`),yield*Ro(e,I(await F(e.provider,e.model,e.endpointUrl),t?.task),t)}function Vo(e){return`data`in e?e:{...N(e,`inputs`),data:e.inputs}}async function Ho(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`audio-classification`),{data:r}=await L(Vo(e),n,{...t,task:`audio-classification`});return n.getResponse(r)}async function Uo(e,t){let n=`inputs`in e?e.model:void 0,r=I(await F(e.provider,n),`audio-to-audio`),{data:i}=await L(Vo(e),r,{...t,task:`audio-to-audio`});return r.getResponse(i)}async function Wo(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`automatic-speech-recognition`),{data:r}=await L(await n.preparePayloadAsync(e),n,{...t,task:`automatic-speech-recognition`});return n.getResponse(r)}async function Go(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`text-to-speech`),{data:r}=await L(e,n,{...t,task:`text-to-speech`});return n.getResponse(r)}function Ko(e){return`data`in e?e:{...N(e,`inputs`),data:e.inputs}}async function qo(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`image-classification`),{data:r}=await L(Ko(e),n,{...t,task:`image-classification`});return n.getResponse(r)}async function Jo(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`image-segmentation`),{data:r}=await L(await n.preparePayloadAsync(e),n,{...t,task:`image-segmentation`}),{url:i,info:a}=await Oo(e,n,{...t,task:`image-segmentation`});return n.getResponse(r,i,a.headers)}async function Yo(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`image-to-image`),{data:r}=await L(await n.preparePayloadAsync(e),n,{...t,task:`image-to-image`}),{url:i,info:a}=await Oo(e,n,{...t,task:`image-to-image`});return n.getResponse(r,i,a.headers)}async function Xo(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`image-to-text`),{data:r}=await L(await n.preparePayloadAsync(e),n,{...t,task:`image-to-text`});return n.getResponse(r)}async function Zo(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`image-to-video`),{data:r}=await L(await n.preparePayloadAsync(e),n,{...t,task:`image-to-video`}),{url:i,info:a}=await Oo(e,n,{...t,task:`image-to-video`});return n.getResponse(r,i,a.headers)}async function Qo(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`image-text-to-image`),{data:r,requestContext:i}=await L(await n.preparePayloadAsync(e),n,{...t,task:`image-text-to-image`});return n.getResponse(r,i.url,i.info.headers)}async function $o(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`image-text-to-video`),{data:r,requestContext:i}=await L(await n.preparePayloadAsync(e),n,{...t,task:`image-text-to-video`});return n.getResponse(r,i.url,i.info.headers)}async function es(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`object-detection`),{data:r}=await L(Ko(e),n,{...t,task:`object-detection`});return n.getResponse(r)}async function ts(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`text-to-image`),{data:r}=await L(e,n,{...t,task:`text-to-image`}),{url:i,info:a}=await Oo(e,n,{...t,task:`text-to-image`});return n.getResponse(r,i,a.headers,t?.outputType)}async function ns(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`text-to-video`),{data:r}=await L(e,n,{...t,task:`text-to-video`}),{url:i,info:a}=await Oo(e,n,{...t,task:`text-to-video`});return n.getResponse(r,i,a.headers)}async function rs(e){return e.inputs instanceof Blob?{...e,inputs:{image:M(new Uint8Array(await e.inputs.arrayBuffer()))}}:{...e,inputs:{image:M(new Uint8Array(e.inputs.image instanceof ArrayBuffer?e.inputs.image:await e.inputs.image.arrayBuffer()))}}}async function is(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`zero-shot-image-classification`),{data:r}=await L(await rs(e),n,{...t,task:`zero-shot-image-classification`});return n.getResponse(r)}async function as(e,t){let n;n=e.endpointUrl?I(await F(e.provider,e.model,e.endpointUrl),`conversational`):!e.provider||e.provider===`auto`?new ni:I(await F(e.provider,e.model,e.endpointUrl),`conversational`);let{data:r}=await L(e,n,{...t,task:`conversational`});return n.getResponse(r)}async function*os(e,t){let n;n=e.endpointUrl?I(await F(e.provider,e.model,e.endpointUrl),`conversational`):!e.provider||e.provider===`auto`?new ni:I(await F(e.provider,e.model,e.endpointUrl),`conversational`),yield*Ro(e,n,{...t,task:`conversational`})}async function ss(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`feature-extraction`),{data:r}=await L(e,n,{...t,task:`feature-extraction`});return n.getResponse(r)}async function cs(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`fill-mask`),{data:r}=await L(e,n,{...t,task:`fill-mask`});return n.getResponse(r)}async function ls(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`question-answering`),{data:r}=await L(e,n,{...t,task:`question-answering`});return n.getResponse(r)}async function us(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`sentence-similarity`),{data:r}=await L(e,n,{...t,task:`sentence-similarity`});return n.getResponse(r)}async function ds(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`summarization`),{data:r}=await L(e,n,{...t,task:`summarization`});return n.getResponse(r)}async function fs(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`table-question-answering`),{data:r}=await L(e,n,{...t,task:`table-question-answering`});return n.getResponse(r)}async function ps(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`text-classification`),{data:r}=await L(e,n,{...t,task:`text-classification`});return n.getResponse(r)}async function ms(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`text-generation`),{data:r}=await L(e,n,{...t,task:`text-generation`});return n.getResponse(r)}async function*hs(e,t){yield*Ro(e,I(await F(e.provider,e.model,e.endpointUrl),`text-generation`),{...t,task:`text-generation`})}async function gs(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`token-classification`),{data:r}=await L(e,n,{...t,task:`token-classification`});return n.getResponse(r)}async function _s(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`translation`),{data:r}=await L(e,n,{...t,task:`translation`});return n.getResponse(r)}async function vs(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`zero-shot-classification`),{data:r}=await L(e,n,{...t,task:`zero-shot-classification`});return n.getResponse(r)}async function ys(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`document-question-answering`),{data:r}=await L({...e,inputs:{question:e.inputs.question,image:M(new Uint8Array(await e.inputs.image.arrayBuffer()))}},n,{...t,task:`document-question-answering`});return n.getResponse(r)}async function bs(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`visual-question-answering`),{data:r}=await L({...e,inputs:{question:e.inputs.question,image:M(new Uint8Array(await e.inputs.image.arrayBuffer()))}},n,{...t,task:`visual-question-answering`});return n.getResponse(r)}async function xs(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`tabular-classification`),{data:r}=await L(e,n,{...t,task:`tabular-classification`});return n.getResponse(r)}async function Ss(e,t){let n=I(await F(e.provider,e.model,e.endpointUrl),`tabular-regression`),{data:r}=await L(e,n,{...t,task:`tabular-regression`});return n.getResponse(r)}var Cs=n({audioClassification:()=>Ho,audioToAudio:()=>Uo,automaticSpeechRecognition:()=>Wo,chatCompletion:()=>as,chatCompletionStream:()=>os,documentQuestionAnswering:()=>ys,featureExtraction:()=>ss,fillMask:()=>cs,imageClassification:()=>qo,imageSegmentation:()=>Jo,imageTextToImage:()=>Qo,imageTextToVideo:()=>$o,imageToImage:()=>Yo,imageToText:()=>Xo,imageToVideo:()=>Zo,objectDetection:()=>es,questionAnswering:()=>ls,request:()=>zo,sentenceSimilarity:()=>us,streamingRequest:()=>Bo,summarization:()=>ds,tableQuestionAnswering:()=>fs,tabularClassification:()=>xs,tabularRegression:()=>Ss,textClassification:()=>ps,textGeneration:()=>ms,textGenerationStream:()=>hs,textToImage:()=>ts,textToSpeech:()=>Go,textToVideo:()=>ns,tokenClassification:()=>gs,translation:()=>_s,visualQuestionAnswering:()=>bs,zeroShotClassification:()=>vs,zeroShotImageClassification:()=>is});function ws(e){return Object.entries(e)}var Ts=class e{accessToken;defaultOptions;constructor(e=``,t={}){this.accessToken=e,this.defaultOptions=t;for(let[n,r]of ws(Cs))Object.defineProperty(this,n,{enumerable:!1,value:(n,i)=>r({endpointUrl:t.endpointUrl,accessToken:e,...n},{...N(t,[`endpointUrl`]),...i})})}endpoint(t){return new e(this.accessToken,{...this.defaultOptions,endpointUrl:t})}},Es=class extends Ts{},Ds=Object.defineProperty,Os=(e,t,n)=>t in e?Ds(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ks=(e,t,n)=>(Os(e,typeof t==`symbol`?t:t+``,n),n),R=Object.freeze({Text:`Text`,NumericLiteral:`NumericLiteral`,StringLiteral:`StringLiteral`,Identifier:`Identifier`,Equals:`Equals`,OpenParen:`OpenParen`,CloseParen:`CloseParen`,OpenStatement:`OpenStatement`,CloseStatement:`CloseStatement`,OpenExpression:`OpenExpression`,CloseExpression:`CloseExpression`,OpenSquareBracket:`OpenSquareBracket`,CloseSquareBracket:`CloseSquareBracket`,OpenCurlyBracket:`OpenCurlyBracket`,CloseCurlyBracket:`CloseCurlyBracket`,Comma:`Comma`,Dot:`Dot`,Colon:`Colon`,Pipe:`Pipe`,CallOperator:`CallOperator`,AdditiveBinaryOperator:`AdditiveBinaryOperator`,MultiplicativeBinaryOperator:`MultiplicativeBinaryOperator`,ComparisonBinaryOperator:`ComparisonBinaryOperator`,UnaryOperator:`UnaryOperator`,Comment:`Comment`}),As=class{constructor(e,t){this.value=e,this.type=t}};function js(e){return/\w/.test(e)}function Ms(e){return/[0-9]/.test(e)}function Ns(e){return/\s/.test(e)}var Ps=[[`{%`,R.OpenStatement],[`%}`,R.CloseStatement],[`{{`,R.OpenExpression],[`}}`,R.CloseExpression],[`(`,R.OpenParen],[`)`,R.CloseParen],[`{`,R.OpenCurlyBracket],[`}`,R.CloseCurlyBracket],[`[`,R.OpenSquareBracket],[`]`,R.CloseSquareBracket],[`,`,R.Comma],[`.`,R.Dot],[`:`,R.Colon],[`|`,R.Pipe],[`<=`,R.ComparisonBinaryOperator],[`>=`,R.ComparisonBinaryOperator],[`==`,R.ComparisonBinaryOperator],[`!=`,R.ComparisonBinaryOperator],[`<`,R.ComparisonBinaryOperator],[`>`,R.ComparisonBinaryOperator],[`+`,R.AdditiveBinaryOperator],[`-`,R.AdditiveBinaryOperator],[`~`,R.AdditiveBinaryOperator],[`*`,R.MultiplicativeBinaryOperator],[`/`,R.MultiplicativeBinaryOperator],[`%`,R.MultiplicativeBinaryOperator],[`=`,R.Equals]],Fs=new Map([[`n`,`
`],[`t`,`	`],[`r`,`\r`],[`b`,`\b`],[`f`,`\f`],[`v`,`\v`],[`'`,`'`],[`"`,`"`],[`\\`,`\\`]]);function Is(e,t={}){return e.endsWith(`
`)&&(e=e.slice(0,-1)),t.lstrip_blocks&&(e=e.replace(/^[ \t]*({[#%-])/gm,`$1`)),t.trim_blocks&&(e=e.replace(/([#%-]})\n/g,`$1`)),e.replace(/(\s*){%(-?)\s*(?:end)?generation\s*(-?)%}(\s*)/gs,(e,t,n,r,i)=>(n?``:t)+(r?``:i))}function Ls(e,t={}){let n=[],r=Is(e,t),i=0,a=0,o=e=>{let t=``;for(;e(r[i]);){if(r[i]===`\\`){if(++i,i>=r.length)throw SyntaxError(`Unexpected end of input`);let e=r[i++],n=Fs.get(e);if(n===void 0)throw SyntaxError(`Unexpected escaped character: ${e}`);t+=n;continue}if(t+=r[i++],i>=r.length)throw SyntaxError(`Unexpected end of input`)}return t},s=()=>{let e=n.at(-1);e&&e.type===R.Text&&(e.value=e.value.trimEnd(),e.value===``&&n.pop())},c=()=>{for(;i<r.length&&Ns(r[i]);)++i};main:for(;i<r.length;){let e=n.at(-1)?.type;if(e===void 0||e===R.CloseStatement||e===R.CloseExpression||e===R.Comment){let e=``;for(;i<r.length&&!(r[i]===`{`&&(r[i+1]===`%`||r[i+1]===`{`||r[i+1]===`#`));)e+=r[i++];if(e.length>0){n.push(new As(e,R.Text));continue}}if(r[i]===`{`&&r[i+1]===`#`){i+=2;let e=r[i]===`-`;e&&++i;let t=``;for(;r[i]!==`#`||r[i+1]!==`}`;){if(i+2>=r.length)throw SyntaxError(`Missing end of comment tag`);t+=r[i++]}let a=t.endsWith(`-`);a&&(t=t.slice(0,-1)),e&&s(),n.push(new As(t,R.Comment)),i+=2,a&&c();continue}if(r.slice(i,i+3)===`{%-`){s(),n.push(new As(`{%`,R.OpenStatement)),i+=3;continue}if(r.slice(i,i+3)===`{{-`){s(),n.push(new As(`{{`,R.OpenExpression)),a=0,i+=3;continue}if(o(Ns),r.slice(i,i+3)===`-%}`){n.push(new As(`%}`,R.CloseStatement)),i+=3,c();continue}if(r.slice(i,i+3)===`-}}`){n.push(new As(`}}`,R.CloseExpression)),i+=3,c();continue}let t=r[i];if(t===`-`||t===`+`){let e=n.at(-1)?.type;if(e===R.Text||e===void 0)throw SyntaxError(`Unexpected character: ${t}`);switch(e){case R.Identifier:case R.NumericLiteral:case R.StringLiteral:case R.CloseParen:case R.CloseSquareBracket:break;default:{++i;let e=o(Ms);n.push(new As(`${t}${e}`,e.length>0?R.NumericLiteral:R.UnaryOperator));continue}}}for(let[e,t]of Ps)if(!(e===`}}`&&a>0)&&r.slice(i,i+e.length)===e){n.push(new As(e,t)),t===R.OpenExpression?a=0:t===R.OpenCurlyBracket?++a:t===R.CloseCurlyBracket&&--a,i+=e.length;continue main}if(t===`'`||t===`"`){++i;let e=o(e=>e!==t);n.push(new As(e,R.StringLiteral)),++i;continue}if(Ms(t)){let e=o(Ms);if(r[i]===`.`&&Ms(r[i+1])){++i;let t=o(Ms);e=`${e}.${t}`}n.push(new As(e,R.NumericLiteral));continue}if(js(t)){let e=o(js);n.push(new As(e,R.Identifier));continue}throw SyntaxError(`Unexpected character: ${t}`)}return n}var Rs=class{type=`Statement`},zs=class extends Rs{constructor(e){super(),this.body=e}type=`Program`},Bs=class extends Rs{constructor(e,t,n){super(),this.test=e,this.body=t,this.alternate=n}type=`If`},Vs=class extends Rs{constructor(e,t,n,r){super(),this.loopvar=e,this.iterable=t,this.body=n,this.defaultBlock=r}type=`For`},Hs=class extends Rs{type=`Break`},Us=class extends Rs{type=`Continue`},Ws=class extends Rs{constructor(e,t,n){super(),this.assignee=e,this.value=t,this.body=n}type=`Set`},Gs=class extends Rs{constructor(e,t,n){super(),this.name=e,this.args=t,this.body=n}type=`Macro`},Ks=class extends Rs{constructor(e){super(),this.value=e}type=`Comment`},z=class extends Rs{type=`Expression`},qs=class extends z{constructor(e,t,n){super(),this.object=e,this.property=t,this.computed=n}type=`MemberExpression`},Js=class extends z{constructor(e,t){super(),this.callee=e,this.args=t}type=`CallExpression`},Ys=class extends z{constructor(e){super(),this.value=e}type=`Identifier`},Xs=class extends z{constructor(e){super(),this.value=e}type=`Literal`},Zs=class extends Xs{type=`IntegerLiteral`},Qs=class extends Xs{type=`FloatLiteral`},$s=class extends Xs{type=`StringLiteral`},ec=class extends Xs{type=`ArrayLiteral`},tc=class extends Xs{type=`TupleLiteral`},nc=class extends Xs{type=`ObjectLiteral`},rc=class extends z{constructor(e,t,n){super(),this.operator=e,this.left=t,this.right=n}type=`BinaryExpression`},ic=class extends z{constructor(e,t){super(),this.operand=e,this.filter=t}type=`FilterExpression`},ac=class extends Rs{constructor(e,t){super(),this.filter=e,this.body=t}type=`FilterStatement`},oc=class extends z{constructor(e,t){super(),this.lhs=e,this.test=t}type=`SelectExpression`},sc=class extends z{constructor(e,t,n){super(),this.operand=e,this.negate=t,this.test=n}type=`TestExpression`},cc=class extends z{constructor(e,t){super(),this.operator=e,this.argument=t}type=`UnaryExpression`},lc=class extends z{constructor(e=void 0,t=void 0,n=void 0){super(),this.start=e,this.stop=t,this.step=n}type=`SliceExpression`},uc=class extends z{constructor(e,t){super(),this.key=e,this.value=t}type=`KeywordArgumentExpression`},dc=class extends z{constructor(e){super(),this.argument=e}type=`SpreadExpression`},fc=class extends Rs{constructor(e,t,n){super(),this.call=e,this.callerArgs=t,this.body=n}type=`CallStatement`},pc=class extends z{constructor(e,t,n){super(),this.condition=e,this.trueExpr=t,this.falseExpr=n}type=`Ternary`};function mc(e){let t=new zs([]),n=0;function r(t,r){let i=e[n++];if(!i||i.type!==t)throw Error(`Parser Error: ${r}. ${i.type} !== ${t}.`);return i}function i(e){if(!c(e))throw SyntaxError(`Expected ${e}`);++n}function a(){switch(e[n].type){case R.Comment:return new Ks(e[n++].value);case R.Text:return l();case R.OpenStatement:return u();case R.OpenExpression:return ee();default:throw SyntaxError(`Unexpected token type: ${e[n].type}`)}}function o(...t){return n+t.length<=e.length&&t.every((t,r)=>t===e[n+r].type)}function s(...t){return e[n]?.type===R.OpenStatement&&e[n+1]?.type===R.Identifier&&t.includes(e[n+1]?.value)}function c(...t){return n+t.length<=e.length&&t.every((t,r)=>e[n+r].type===`Identifier`&&t===e[n+r].value)}function l(){return new $s(r(R.Text,`Expected text token`).value)}function u(){if(r(R.OpenStatement,`Expected opening statement token`),e[n].type!==R.Identifier)throw SyntaxError(`Unknown statement, got ${e[n].type}`);let t=e[n].value,c;switch(t){case`set`:++n,c=d();break;case`if`:++n,c=f(),r(R.OpenStatement,`Expected {% token`),i(`endif`),r(R.CloseStatement,`Expected %} token`);break;case`macro`:++n,c=p(),r(R.OpenStatement,`Expected {% token`),i(`endmacro`),r(R.CloseStatement,`Expected %} token`);break;case`for`:++n,c=ne(),r(R.OpenStatement,`Expected {% token`),i(`endfor`),r(R.CloseStatement,`Expected %} token`);break;case`call`:{++n;let e=null;o(R.OpenParen)&&(e=de());let t=ve();if(t.type!==`Identifier`)throw SyntaxError(`Expected identifier following call statement`);let l=de();r(R.CloseStatement,`Expected closing statement token`);let u=[];for(;!s(`endcall`);)u.push(a());r(R.OpenStatement,`Expected '{%'`),i(`endcall`),r(R.CloseStatement,`Expected closing statement token`),c=new fc(new Js(t,l),e,u);break}case`break`:++n,r(R.CloseStatement,`Expected closing statement token`),c=new Hs;break;case`continue`:++n,r(R.CloseStatement,`Expected closing statement token`),c=new Us;break;case`filter`:{++n;let e=ve();e instanceof Ys&&o(R.OpenParen)&&(e=ue(e)),r(R.CloseStatement,`Expected closing statement token`);let t=[];for(;!s(`endfilter`);)t.push(a());r(R.OpenStatement,`Expected '{%'`),i(`endfilter`),r(R.CloseStatement,`Expected '%}'`),c=new ac(e,t);break}default:throw SyntaxError(`Unknown statement type: ${t}`)}return c}function ee(){r(R.OpenExpression,`Expected opening expression token`);let e=m();return r(R.CloseExpression,`Expected closing expression token`),e}function d(){let e=te(),t=null,c=[];if(o(R.Equals))++n,t=te();else{for(r(R.CloseStatement,`Expected %} token`);!s(`endset`);)c.push(a());r(R.OpenStatement,`Expected {% token`),i(`endset`)}return r(R.CloseStatement,`Expected closing statement token`),new Ws(e,t,c)}function f(){let e=m();r(R.CloseStatement,`Expected closing statement token`);let t=[],i=[];for(;!s(`elif`,`else`,`endif`);)t.push(a());if(s(`elif`)){++n,++n;let e=f();i.push(e)}else if(s(`else`))for(++n,++n,r(R.CloseStatement,`Expected closing statement token`);!s(`endif`);)i.push(a());return new Bs(e,t,i)}function p(){let e=ve();if(e.type!==`Identifier`)throw SyntaxError(`Expected identifier following macro statement`);let t=de();r(R.CloseStatement,`Expected closing statement token`);let n=[];for(;!s(`endmacro`);)n.push(a());return new Gs(e,t,n)}function te(e=!1){let t=e?ve:m,r=[t()],i=o(R.Comma);for(;i&&(++n,r.push(t()),o(R.Comma)););return i?new tc(r):r[0]}function ne(){let e=te(!0);if(!(e instanceof Ys||e instanceof tc))throw SyntaxError(`Expected identifier/tuple for the loop variable, got ${e.type} instead`);if(!c(`in`))throw SyntaxError("Expected `in` keyword following loop variable");++n;let t=m();r(R.CloseStatement,`Expected closing statement token`);let i=[];for(;!s(`endfor`,`else`);)i.push(a());let o=[];if(s(`else`))for(++n,++n,r(R.CloseStatement,`Expected closing statement token`);!s(`endfor`);)o.push(a());return new Vs(e,t,i,o)}function m(){return re()}function re(){let e=ie();if(c(`if`)){++n;let t=ie();return c(`else`)?(++n,new pc(t,e,re())):new oc(e,t)}return e}function ie(){let t=ae();for(;c(`or`);){let r=e[n];++n;let i=ae();t=new rc(r,t,i)}return t}function ae(){let t=oe();for(;c(`and`);){let r=e[n];++n;let i=oe();t=new rc(r,t,i)}return t}function oe(){let t;for(;c(`not`);){let r=e[n];++n,t=new cc(r,oe())}return t??se()}function se(){let t=ce();for(;;){let r;if(c(`not`,`in`))r=new As(`not in`,R.Identifier),n+=2;else if(c(`in`))r=e[n++];else if(o(R.ComparisonBinaryOperator))r=e[n++];else break;let i=ce();t=new rc(r,t,i)}return t}function ce(){let t=he();for(;o(R.AdditiveBinaryOperator);){let r=e[n];++n;let i=he();t=new rc(r,t,i)}return t}function le(){let e=me(ve());return o(R.OpenParen)?ue(e):e}function ue(e){let t=new Js(e,de());return t=me(t),o(R.OpenParen)&&(t=ue(t)),t}function de(){r(R.OpenParen,`Expected opening parenthesis for arguments list`);let e=fe();return r(R.CloseParen,`Expected closing parenthesis for arguments list`),e}function fe(){let t=[];for(;!o(R.CloseParen);){let r;if(e[n].type===R.MultiplicativeBinaryOperator&&e[n].value===`*`)++n,r=new dc(m());else if(r=m(),o(R.Equals)){if(++n,!(r instanceof Ys))throw SyntaxError(`Expected identifier for keyword argument`);let e=m();r=new uc(r,e)}t.push(r),o(R.Comma)&&++n}return t}function pe(){let e=[],t=!1;for(;!o(R.CloseSquareBracket);)o(R.Colon)?(e.push(void 0),++n,t=!0):(e.push(m()),o(R.Colon)&&(++n,t=!0));if(e.length===0)throw SyntaxError(`Expected at least one argument for member/slice expression`);if(t){if(e.length>3)throw SyntaxError(`Expected 0-3 arguments for slice expression`);return new lc(...e)}return e[0]}function me(t){for(;o(R.Dot)||o(R.OpenSquareBracket);){let i=e[n];++n;let a,o=i.type===R.OpenSquareBracket;if(o)a=pe(),r(R.CloseSquareBracket,`Expected closing square bracket`);else if(a=ve(),a.type!==`Identifier`)throw SyntaxError(`Expected identifier following dot operator`);t=new qs(t,a,o)}return t}function he(){let t=ge();for(;o(R.MultiplicativeBinaryOperator);){let r=e[n++],i=ge();t=new rc(r,t,i)}return t}function ge(){let e=_e();for(;c(`is`);){++n;let t=c(`not`);t&&++n;let r=ve();if(!(r instanceof Ys))throw SyntaxError(`Expected identifier for the test`);e=new sc(e,t,r)}return e}function _e(){let e=le();for(;o(R.Pipe);){++n;let t=ve();if(!(t instanceof Ys))throw SyntaxError(`Expected identifier for the filter`);o(R.OpenParen)&&(t=ue(t)),e=new ic(e,t)}return e}function ve(){let t=e[n++];switch(t.type){case R.NumericLiteral:{let e=t.value;return e.includes(`.`)?new Qs(Number(e)):new Zs(Number(e))}case R.StringLiteral:{let r=t.value;for(;o(R.StringLiteral);)r+=e[n++].value;return new $s(r)}case R.Identifier:return new Ys(t.value);case R.OpenParen:{let e=te();return r(R.CloseParen,"Expected closing parenthesis, got ${tokens[current].type} instead."),e}case R.OpenSquareBracket:{let e=[];for(;!o(R.CloseSquareBracket);)e.push(m()),o(R.Comma)&&++n;return++n,new ec(e)}case R.OpenCurlyBracket:{let e=new Map;for(;!o(R.CloseCurlyBracket);){let t=m();r(R.Colon,`Expected colon between key and value in object literal`);let i=m();e.set(t,i),o(R.Comma)&&++n}return++n,new nc(e)}default:throw SyntaxError(`Unexpected token: ${t.type}`)}}for(;n<e.length;)t.body.push(a());return t}function hc(e,t,n=1){if(t===void 0&&(t=e,e=0),n===0)throw Error(`range() step must not be zero`);let r=[];if(n>0)for(let i=e;i<t;i+=n)r.push(i);else for(let i=e;i>t;i+=n)r.push(i);return r}function gc(e,t,n,r=1){let i=Math.sign(r);i>=0?(t=(t??=0)<0?Math.max(e.length+t,0):Math.min(t,e.length),n=(n??=e.length)<0?Math.max(e.length+n,0):Math.min(n,e.length)):(t=(t??=e.length-1)<0?Math.max(e.length+t,-1):Math.min(t,e.length-1),n=(n??=-1)<-1?Math.max(e.length+n,-1):Math.min(n,e.length-1));let a=[];for(let o=t;i*o<i*n;o+=r)a.push(e[o]);return a}function _c(e){return e.replace(/\b\w/g,e=>e.toUpperCase())}function vc(e){return yc(new Date,e)}function yc(e,t){let n=new Intl.DateTimeFormat(void 0,{month:`long`}),r=new Intl.DateTimeFormat(void 0,{month:`short`}),i=e=>e<10?`0`+e:e.toString();return t.replace(/%[YmdbBHM%]/g,t=>{switch(t){case`%Y`:return e.getFullYear().toString();case`%m`:return i(e.getMonth()+1);case`%d`:return i(e.getDate());case`%b`:return r.format(e);case`%B`:return n.format(e);case`%H`:return i(e.getHours());case`%M`:return i(e.getMinutes());case`%%`:return`%`;default:return t}})}function bc(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function xc(e,t,n,r){if(r===0)return e;let i=r==null||r<0?1/0:r,a=t.length===0?RegExp(`(?=)`,`gu`):new RegExp(bc(t),`gu`);return e.replaceAll(a,e=>i>0?(--i,n):e)}var Sc=class extends Error{},Cc=class extends Error{},wc=new Map,Tc=class{type=`RuntimeValue`;value;get builtins(){return wc}constructor(e=void 0){this.value=e}__bool__(){return new U(!!this.value)}toString(){return String(this.value)}},B=class extends Tc{type=`IntegerValue`},V=class extends Tc{type=`FloatValue`;toString(){return this.value%1==0?this.value.toFixed(1):this.value.toString()}},H=class extends Tc{type=`StringValue`;_builtins;get builtins(){return this._builtins??=new Map([[`upper`,new K(()=>new H(this.value.toUpperCase()))],[`lower`,new K(()=>new H(this.value.toLowerCase()))],[`strip`,new K(()=>new H(this.value.trim()))],[`title`,new K(()=>new H(_c(this.value)))],[`capitalize`,new K(()=>new H(this.value.charAt(0).toUpperCase()+this.value.slice(1)))],[`length`,new B(this.value.length)],[`rstrip`,new K(()=>new H(this.value.trimEnd()))],[`lstrip`,new K(()=>new H(this.value.trimStart()))],[`startswith`,new K(e=>{if(e.length===0)throw Error(`startswith() requires at least one argument`);let t=e[0];if(t instanceof H)return new U(this.value.startsWith(t.value));if(t instanceof G){for(let e of t.value){if(!(e instanceof H))throw Error(`startswith() tuple elements must be strings`);if(this.value.startsWith(e.value))return new U(!0)}return new U(!1)}throw Error(`startswith() argument must be a string or tuple of strings`)})],[`endswith`,new K(e=>{if(e.length===0)throw Error(`endswith() requires at least one argument`);let t=e[0];if(t instanceof H)return new U(this.value.endsWith(t.value));if(t instanceof G){for(let e of t.value){if(!(e instanceof H))throw Error(`endswith() tuple elements must be strings`);if(this.value.endsWith(e.value))return new U(!0)}return new U(!1)}throw Error(`endswith() argument must be a string or tuple of strings`)})],[`split`,new K(e=>{let t=e[0]??new q;if(!(t instanceof H||t instanceof q))throw Error(`sep argument must be a string or null`);let n=e[1]??new B(-1);if(!(n instanceof B))throw Error(`maxsplit argument must be a number`);let r=[];if(t instanceof q){let e=this.value.trimStart();for(let{0:t,index:i}of e.matchAll(/\S+/g)){if(n.value!==-1&&r.length>=n.value&&i!==void 0){r.push(t+e.slice(i+t.length));break}r.push(t)}}else{if(t.value===``)throw Error(`empty separator`);r=this.value.split(t.value),n.value!==-1&&r.length>n.value&&r.push(r.splice(n.value).join(t.value))}return new G(r.map(e=>new H(e)))})],[`replace`,new K(e=>{if(e.length<2)throw Error(`replace() requires at least two arguments`);let t=e[0],n=e[1];if(!(t instanceof H&&n instanceof H))throw Error(`replace() arguments must be strings`);let r;if(r=e.length>2?e[2].type===`KeywordArgumentsValue`?e[2].value.get(`count`)??new q:e[2]:new q,!(r instanceof B||r instanceof q))throw Error(`replace() count argument must be a number or null`);return new H(xc(this.value,t.value,n.value,r.value))})]])}},U=class extends Tc{type=`BooleanValue`},Ec=/[\x7f-\uffff]/g;function Dc(e){return e.replace(Ec,e=>`\\u`+e.charCodeAt(0).toString(16).padStart(4,`0`))}function Oc(e,t={},n=0,r=!0){let{indent:i=null,ensureAscii:a=!1,separators:o=null,sortKeys:s=!1}=t,c,l;switch(o?[c,l]=o:i?(c=`,`,l=`: `):(c=`, `,l=`: `),e.type){case`NullValue`:return`null`;case`UndefinedValue`:return r?`null`:`undefined`;case`IntegerValue`:case`FloatValue`:case`BooleanValue`:return JSON.stringify(e.value);case`StringValue`:{let t=JSON.stringify(e.value);return a&&(t=Dc(t)),t}case`ArrayValue`:case`ObjectValue`:{let o=i?` `.repeat(i):``,u=`
`+o.repeat(n),ee=u+o;if(e.type===`ArrayValue`){let a=e.value.map(e=>Oc(e,t,n+1,r));return i?`[${ee}${a.join(`${c}${ee}`)}${u}]`:`[${a.join(c)}]`}else{let o=Array.from(e.value.entries());s&&(o=o.sort(([e],[t])=>e.localeCompare(t)));let d=o.map(([e,o])=>{let s=JSON.stringify(e);a&&(s=Dc(s));let c=`${s}${l}${Oc(o,t,n+1,r)}`;return i?`${ee}${c}`:c});return i?`{${d.join(c)}${u}}`:`{${d.join(c)}}`}}default:throw Error(`Cannot convert to JSON: ${e.type}`)}}var W=class extends Tc{type=`ObjectValue`;_builtins;__bool__(){return new U(this.value.size>0)}get builtins(){return this._builtins??=new Map([[`get`,new K(([e,t])=>{if(!(e instanceof H))throw Error(`Object key must be a string: got ${e.type}`);return this.value.get(e.value)??t??new q})],[`items`,new K(()=>this.items())],[`keys`,new K(()=>this.keys())],[`values`,new K(()=>this.values())],[`dictsort`,new K(e=>{let t=new Map,n=e.filter(e=>e instanceof kc?(t=e.value,!1):!0),r=n.at(0)??t.get(`case_sensitive`)??new U(!1);if(!(r instanceof U))throw Error(`case_sensitive must be a boolean`);let i=n.at(1)??t.get(`by`)??new H(`key`);if(!(i instanceof H))throw Error(`by must be a string`);if(![`key`,`value`].includes(i.value))throw Error(`by must be either 'key' or 'value'`);let a=n.at(2)??t.get(`reverse`)??new U(!1);if(!(a instanceof U))throw Error(`reverse must be a boolean`);return new G(Array.from(this.value.entries()).map(([e,t])=>new G([new H(e),t])).sort((e,t)=>{let n=i.value===`key`?0:1,o=e.value[n],s=t.value[n],c=Fc(o,s,r.value);return a.value?-c:c}))})]])}items(){return new G(Array.from(this.value.entries()).map(([e,t])=>new G([new H(e),t])))}keys(){return new G(Array.from(this.value.keys()).map(e=>new H(e)))}values(){return new G(Array.from(this.value.values()))}toString(){return Oc(this,{},0,!1)}},kc=class extends W{type=`KeywordArgumentsValue`},G=class extends Tc{type=`ArrayValue`;_builtins;get builtins(){return this._builtins??=new Map([[`length`,new B(this.value.length)]])}__bool__(){return new U(this.value.length>0)}toString(){return Oc(this,{},0,!1)}},Ac=class extends G{type=`TupleValue`},K=class extends Tc{type=`FunctionValue`},q=class extends Tc{type=`NullValue`},J=class extends Tc{type=`UndefinedValue`},jc=class{constructor(e){this.parent=e}variables=new Map([[`namespace`,new K(e=>{if(e.length===0)return new W(new Map);if(e.length!==1||!(e[0]instanceof W))throw Error("`namespace` expects either zero arguments or a single object argument");return e[0]})]]);tests=jc.TESTS;set(e,t){return this.declareVariable(e,Lc(t))}declareVariable(e,t){if(this.variables.has(e))throw SyntaxError(`Variable already declared: ${e}`);return this.variables.set(e,t),t}setVariable(e,t){return this.variables.set(e,t),t}resolve(e){if(this.variables.has(e))return this;if(this.parent)return this.parent.resolve(e);throw Error(`Unknown variable: ${e}`)}lookupVariable(e){try{return this.resolve(e).variables.get(e)??new J}catch{return new J}}},Mc=jc;ks(Mc,`TESTS`,new Map([[`boolean`,e=>e.type===`BooleanValue`],[`callable`,e=>e instanceof K],[`odd`,e=>{if(!(e instanceof B))throw Error(`cannot odd on ${e.type}`);return e.value%2!=0}],[`even`,e=>{if(!(e instanceof B))throw Error(`cannot even on ${e.type}`);return e.value%2==0}],[`false`,e=>e.type===`BooleanValue`&&!e.value],[`true`,e=>e.type===`BooleanValue`&&e.value],[`none`,e=>e.type===`NullValue`],[`string`,e=>e.type===`StringValue`],[`number`,e=>e instanceof B||e instanceof V],[`integer`,e=>e instanceof B],[`iterable`,e=>e.type===`ArrayValue`||e.type===`StringValue`],[`mapping`,e=>e instanceof W],[`sequence`,e=>e instanceof G||e instanceof W||e instanceof H],[`lower`,e=>{let t=e.value;return e.type===`StringValue`&&t===t.toLowerCase()}],[`upper`,e=>{let t=e.value;return e.type===`StringValue`&&t===t.toUpperCase()}],[`none`,e=>e.type===`NullValue`],[`defined`,e=>e.type!==`UndefinedValue`],[`undefined`,e=>e.type===`UndefinedValue`],[`equalto`,(e,t)=>e.value===t.value],[`eq`,(e,t)=>e.value===t.value]]));function Nc(e){e.set(`false`,!1),e.set(`true`,!0),e.set(`none`,null),e.set(`raise_exception`,e=>{throw Error(e)}),e.set(`range`,hc),e.set(`strftime_now`,vc),e.set(`True`,!0),e.set(`False`,!1),e.set(`None`,null)}function Pc(e,t){let n=t.split(`.`),r=e;for(let e of n)if(r instanceof W)r=r.value.get(e)??new J;else if(r instanceof G){let t=parseInt(e,10);if(!isNaN(t)&&t>=0&&t<r.value.length)r=r.value[t];else return new J}else return new J;return r}function Fc(e,t,n=!1){if(e instanceof q&&t instanceof q)return 0;if(e instanceof q||t instanceof q)throw Error(`Cannot compare ${e.type} with ${t.type}`);if(e instanceof J&&t instanceof J)return 0;if(e instanceof J||t instanceof J)throw Error(`Cannot compare ${e.type} with ${t.type}`);let r=e=>e instanceof B||e instanceof V||e instanceof U,i=e=>e instanceof U?+!!e.value:e.value;if(r(e)&&r(t)){let n=i(e),r=i(t);return n<r?-1:+(n>r)}if(e.type!==t.type)throw Error(`Cannot compare different types: ${e.type} and ${t.type}`);switch(e.type){case`StringValue`:{let r=e.value,i=t.value;return n||(r=r.toLowerCase(),i=i.toLowerCase()),r<i?-1:+(r>i)}default:throw Error(`Cannot compare type: ${e.type}`)}}var Ic=class{global;constructor(e){this.global=e??new Mc}run(e){return this.evaluate(e,this.global)}evaluateBinaryExpression(e,t){let n=this.evaluate(e.left,t);switch(e.operator.value){case`and`:return n.__bool__().value?this.evaluate(e.right,t):n;case`or`:return n.__bool__().value?n:this.evaluate(e.right,t)}let r=this.evaluate(e.right,t);switch(e.operator.value){case`==`:return new U(n.value==r.value);case`!=`:return new U(n.value!=r.value)}if(n instanceof J||r instanceof J){if(r instanceof J&&[`in`,`not in`].includes(e.operator.value))return new U(e.operator.value===`not in`);throw Error(`Cannot perform operation ${e.operator.value} on undefined values`)}else if(n instanceof q||r instanceof q)throw Error(`Cannot perform operation on null values`);else if(e.operator.value===`~`)return new H(n.value.toString()+r.value.toString());else if((n instanceof B||n instanceof V)&&(r instanceof B||r instanceof V)){let t=n.value,i=r.value;switch(e.operator.value){case`+`:case`-`:case`*`:{let a=e.operator.value===`+`?t+i:e.operator.value===`-`?t-i:t*i;return n instanceof V||r instanceof V?new V(a):new B(a)}case`/`:return new V(t/i);case`%`:{let e=t%i;return n instanceof V||r instanceof V?new V(e):new B(e)}case`<`:return new U(t<i);case`>`:return new U(t>i);case`>=`:return new U(t>=i);case`<=`:return new U(t<=i)}}else if(n instanceof G&&r instanceof G)switch(e.operator.value){case`+`:return new G(n.value.concat(r.value))}else if(r instanceof G){let t=r.value.find(e=>e.value===n.value)!==void 0;switch(e.operator.value){case`in`:return new U(t);case`not in`:return new U(!t)}}if(n instanceof H||r instanceof H)switch(e.operator.value){case`+`:return new H(n.value.toString()+r.value.toString())}if(n instanceof H&&r instanceof H)switch(e.operator.value){case`in`:return new U(r.value.includes(n.value));case`not in`:return new U(!r.value.includes(n.value))}if(n instanceof H&&r instanceof W)switch(e.operator.value){case`in`:return new U(r.value.has(n.value));case`not in`:return new U(!r.value.has(n.value))}throw SyntaxError(`Unknown operator "${e.operator.value}" between ${n.type} and ${r.type}`)}evaluateArguments(e,t){let n=[],r=new Map;for(let i of e)if(i.type===`SpreadExpression`){let e=i,r=this.evaluate(e.argument,t);if(!(r instanceof G))throw Error(`Cannot unpack non-iterable type: ${r.type}`);for(let e of r.value)n.push(e)}else if(i.type===`KeywordArgumentExpression`){let e=i;r.set(e.key.value,this.evaluate(e.value,t))}else{if(r.size>0)throw Error(`Positional arguments must come before keyword arguments`);n.push(this.evaluate(i,t))}return[n,r]}applyFilter(e,t,n){if(t.type===`Identifier`){let r=t;if(r.value===`safe`)return e;if(r.value===`tojson`)return new H(Oc(e,{}));if(e instanceof G)switch(r.value){case`list`:return e;case`first`:return e.value[0];case`last`:return e.value[e.value.length-1];case`length`:return new B(e.value.length);case`reverse`:return new G(e.value.slice().reverse());case`sort`:return new G(e.value.slice().sort((e,t)=>Fc(e,t,!1)));case`join`:return new H(e.value.map(e=>e.value).join(``));case`string`:return new H(Oc(e,{},0,!1));case`unique`:{let t=new Set,n=[];for(let r of e.value)t.has(r.value)||(t.add(r.value),n.push(r));return new G(n)}default:throw Error(`Unknown ArrayValue filter: ${r.value}`)}else if(e instanceof H)switch(r.value){case`length`:case`upper`:case`lower`:case`title`:case`capitalize`:{let t=e.builtins.get(r.value);if(t instanceof K)return t.value([],n);if(t instanceof B)return t;throw Error(`Unknown StringValue filter: ${r.value}`)}case`trim`:return new H(e.value.trim());case`indent`:return new H(e.value.split(`
`).map((e,t)=>t===0||e.length===0?e:`    `+e).join(`
`));case`join`:case`string`:return e;case`int`:{let t=parseInt(e.value,10);return new B(isNaN(t)?0:t)}case`float`:{let t=parseFloat(e.value);return new V(isNaN(t)?0:t)}default:throw Error(`Unknown StringValue filter: ${r.value}`)}else if(e instanceof B||e instanceof V)switch(r.value){case`abs`:return e instanceof B?new B(Math.abs(e.value)):new V(Math.abs(e.value));case`int`:return new B(Math.floor(e.value));case`float`:return new V(e.value);case`string`:return new H(e.toString());default:throw Error(`Unknown NumericValue filter: ${r.value}`)}else if(e instanceof W)switch(r.value){case`items`:return new G(Array.from(e.value.entries()).map(([e,t])=>new G([new H(e),t])));case`length`:return new B(e.value.size);default:{let t=e.builtins.get(r.value);if(t)return t instanceof K?t.value([],n):t;throw Error(`Unknown ObjectValue filter: ${r.value}`)}}else if(e instanceof U)switch(r.value){case`bool`:return new U(e.value);case`int`:return new B(+!!e.value);case`float`:return new V(+!!e.value);case`string`:return new H(e.value?`true`:`false`);default:throw Error(`Unknown BooleanValue filter: ${r.value}`)}throw Error(`Cannot apply filter "${r.value}" to type: ${e.type}`)}else if(t.type===`CallExpression`){let r=t;if(r.callee.type!==`Identifier`)throw Error(`Unknown filter: ${r.callee.type}`);let i=r.callee.value;if(i===`tojson`){let[,t]=this.evaluateArguments(r.args,n),i=t.get(`indent`)??new q;if(!(i instanceof B||i instanceof q))throw Error(`If set, indent must be a number`);let a=t.get(`ensure_ascii`)??new U(!1);if(!(a instanceof U))throw Error(`If set, ensure_ascii must be a boolean`);let o=t.get(`sort_keys`)??new U(!1);if(!(o instanceof U))throw Error(`If set, sort_keys must be a boolean`);let s=t.get(`separators`)??new q,c=null;if(s instanceof G||s instanceof Ac){if(s.value.length!==2)throw Error(`separators must be a tuple of two strings`);let[e,t]=s.value;if(!(e instanceof H)||!(t instanceof H))throw Error(`separators must be a tuple of two strings`);c=[e.value,t.value]}else if(!(s instanceof q))throw Error(`If set, separators must be a tuple of two strings`);return new H(Oc(e,{indent:i.value,ensureAscii:a.value,sortKeys:o.value,separators:c}))}else if(i===`join`){let t;if(e instanceof H)t=Array.from(e.value);else if(e instanceof G)t=e.value.map(e=>e.value);else throw Error(`Cannot apply filter "${i}" to type: ${e.type}`);let[a,o]=this.evaluateArguments(r.args,n),s=a.at(0)??o.get(`separator`)??new H(``);if(!(s instanceof H))throw Error(`separator must be a string`);return new H(t.join(s.value))}else if(i===`int`||i===`float`){let[t,a]=this.evaluateArguments(r.args,n),o=t.at(0)??a.get(`default`)??(i===`int`?new B(0):new V(0));if(e instanceof H){let t=i===`int`?parseInt(e.value,10):parseFloat(e.value);return isNaN(t)?o:i===`int`?new B(t):new V(t)}else if(e instanceof B||e instanceof V)return e;else if(e instanceof U)return i===`int`?new B(+!!e.value):new V(+!!e.value);else throw Error(`Cannot apply filter "${i}" to type: ${e.type}`)}else if(i===`default`){let[t,i]=this.evaluateArguments(r.args,n),a=t[0]??new H(``),o=t[1]??i.get(`boolean`)??new U(!1);if(!(o instanceof U))throw Error("`default` filter flag must be a boolean");return e instanceof J||o.value&&!e.__bool__().value?a:e}if(e instanceof G){switch(i){case`sort`:{let[t,i]=this.evaluateArguments(r.args,n),a=t.at(0)??i.get(`reverse`)??new U(!1);if(!(a instanceof U))throw Error(`reverse must be a boolean`);let o=t.at(1)??i.get(`case_sensitive`)??new U(!1);if(!(o instanceof U))throw Error(`case_sensitive must be a boolean`);let s=t.at(2)??i.get(`attribute`)??new q;if(!(s instanceof H||s instanceof B||s instanceof q))throw Error(`attribute must be a string, integer, or null`);let c=e=>s instanceof q?e:Pc(e,s instanceof B?String(s.value):s.value);return new G(e.value.slice().sort((e,t)=>{let n=Fc(c(e),c(t),o.value);return a.value?-n:n}))}case`selectattr`:case`rejectattr`:{let t=i===`selectattr`;if(e.value.some(e=>!(e instanceof W)))throw Error(`\`${i}\` can only be applied to array of objects`);if(r.args.some(e=>e.type!==`StringLiteral`))throw Error(`arguments of \`${i}\` must be strings`);let[a,o,s]=r.args.map(e=>this.evaluate(e,n)),c;if(o){let e=n.tests.get(o.value);if(!e)throw Error(`Unknown test: ${o.value}`);c=e}else c=(...e)=>e[0].__bool__().value;return new G(e.value.filter(e=>{let n=e.value.get(a.value),r=n?c(n,s):!1;return t?r:!r}))}case`map`:{let[,t]=this.evaluateArguments(r.args,n);if(t.has(`attribute`)){let n=t.get(`attribute`);if(!(n instanceof H))throw Error(`attribute must be a string`);let r=t.get(`default`);return new G(e.value.map(e=>{if(!(e instanceof W))throw Error(`items in map must be an object`);let t=Pc(e,n.value);return t instanceof J?r??new J:t}))}else throw Error("`map` expressions without `attribute` set are not currently supported.")}}throw Error(`Unknown ArrayValue filter: ${i}`)}else if(e instanceof H){switch(i){case`indent`:{let[t,i]=this.evaluateArguments(r.args,n),a=t.at(0)??i.get(`width`)??new B(4);if(!(a instanceof B))throw Error(`width must be a number`);let o=t.at(1)??i.get(`first`)??new U(!1),s=t.at(2)??i.get(`blank`)??new U(!1),c=e.value.split(`
`),l=` `.repeat(a.value);return new H(c.map((e,t)=>!o.value&&t===0||!s.value&&e.length===0?e:l+e).join(`
`))}case`replace`:{let t=e.builtins.get(`replace`);if(!(t instanceof K))throw Error(`replace filter not available`);let[i,a]=this.evaluateArguments(r.args,n);return t.value([...i,new kc(a)],n)}}throw Error(`Unknown StringValue filter: ${i}`)}else if(e instanceof W){let t=e.builtins.get(i);if(t&&t instanceof K){let[e,i]=this.evaluateArguments(r.args,n);return i.size>0&&e.push(new kc(i)),t.value(e,n)}throw Error(`Unknown ObjectValue filter: ${i}`)}else throw Error(`Cannot apply filter "${i}" to type: ${e.type}`)}throw Error(`Unknown filter: ${t.type}`)}evaluateFilterExpression(e,t){let n=this.evaluate(e.operand,t);return this.applyFilter(n,e.filter,t)}evaluateTestExpression(e,t){let n=this.evaluate(e.operand,t),r=t.tests.get(e.test.value);if(!r)throw Error(`Unknown test: ${e.test.value}`);let i=r(n);return new U(e.negate?!i:i)}evaluateSelectExpression(e,t){return this.evaluate(e.test,t).__bool__().value?this.evaluate(e.lhs,t):new J}evaluateUnaryExpression(e,t){let n=this.evaluate(e.argument,t);switch(e.operator.value){case`not`:return new U(!n.value);default:throw SyntaxError(`Unknown operator: ${e.operator.value}`)}}evaluateTernaryExpression(e,t){return this.evaluate(e.condition,t).__bool__().value?this.evaluate(e.trueExpr,t):this.evaluate(e.falseExpr,t)}evalProgram(e,t){return this.evaluateBlock(e.body,t)}evaluateBlock(e,t){let n=``;for(let r of e){let e=this.evaluate(r,t);e.type!==`NullValue`&&e.type!==`UndefinedValue`&&(n+=e.toString())}return new H(n)}evaluateIdentifier(e,t){return t.lookupVariable(e.value)}evaluateCallExpression(e,t){let[n,r]=this.evaluateArguments(e.args,t);r.size>0&&n.push(new kc(r));let i=this.evaluate(e.callee,t);if(i.type!==`FunctionValue`)throw Error(`Cannot call something that is not a function: got ${i.type}`);return i.value(n,t)}evaluateSliceExpression(e,t,n){if(!(e instanceof G||e instanceof H))throw Error(`Slice object must be an array or string`);let r=this.evaluate(t.start,n),i=this.evaluate(t.stop,n),a=this.evaluate(t.step,n);if(!(r instanceof B||r instanceof J))throw Error(`Slice start must be numeric or undefined`);if(!(i instanceof B||i instanceof J))throw Error(`Slice stop must be numeric or undefined`);if(!(a instanceof B||a instanceof J))throw Error(`Slice step must be numeric or undefined`);return e instanceof G?new G(gc(e.value,r.value,i.value,a.value)):new H(gc(Array.from(e.value),r.value,i.value,a.value).join(``))}evaluateMemberExpression(e,t){let n=this.evaluate(e.object,t),r;if(e.computed){if(e.property.type===`SliceExpression`)return this.evaluateSliceExpression(n,e.property,t);r=this.evaluate(e.property,t)}else r=new H(e.property.value);let i;if(n instanceof W){if(!(r instanceof H))throw Error(`Cannot access property with non-string: got ${r.type}`);i=n.value.get(r.value)??n.builtins.get(r.value)}else if(n instanceof G||n instanceof H)if(r instanceof B)i=n.value.at(r.value),n instanceof H&&(i=new H(n.value.at(r.value)));else if(r instanceof H)i=n.builtins.get(r.value);else throw Error(`Cannot access property with non-string/non-number: got ${r.type}`);else{if(!(r instanceof H))throw Error(`Cannot access property with non-string: got ${r.type}`);i=n.builtins.get(r.value)}return i instanceof Tc?i:new J}evaluateSet(e,t){let n=e.value?this.evaluate(e.value,t):this.evaluateBlock(e.body,t);if(e.assignee.type===`Identifier`){let r=e.assignee.value;t.setVariable(r,n)}else if(e.assignee.type===`TupleLiteral`){let r=e.assignee;if(!(n instanceof G))throw Error(`Cannot unpack non-iterable type in set: ${n.type}`);let i=n.value;if(i.length!==r.value.length)throw Error(`Too ${r.value.length>i.length?`few`:`many`} items to unpack in set`);for(let e=0;e<r.value.length;++e){let n=r.value[e];if(n.type!==`Identifier`)throw Error(`Cannot unpack to non-identifier in set: ${n.type}`);t.setVariable(n.value,i[e])}}else if(e.assignee.type===`MemberExpression`){let r=e.assignee,i=this.evaluate(r.object,t);if(!(i instanceof W))throw Error(`Cannot assign to member of non-object`);if(r.property.type!==`Identifier`)throw Error(`Cannot assign to member with non-identifier property`);i.value.set(r.property.value,n)}else throw Error(`Invalid LHS inside assignment expression: ${JSON.stringify(e.assignee)}`);return new q}evaluateIf(e,t){let n=this.evaluate(e.test,t);return this.evaluateBlock(n.__bool__().value?e.body:e.alternate,t)}evaluateFor(e,t){let n=new Mc(t),r,i;if(e.iterable.type===`SelectExpression`){let t=e.iterable;i=this.evaluate(t.lhs,n),r=t.test}else i=this.evaluate(e.iterable,n);if(!(i instanceof G||i instanceof W))throw Error(`Expected iterable or object type in for loop: got ${i.type}`);i instanceof W&&(i=i.keys());let a=[],o=[];for(let t=0;t<i.value.length;++t){let s=new Mc(n),c=i.value[t],l;if(e.loopvar.type===`Identifier`)l=t=>t.setVariable(e.loopvar.value,c);else if(e.loopvar.type===`TupleLiteral`){let t=e.loopvar;if(c.type!==`ArrayValue`)throw Error(`Cannot unpack non-iterable type: ${c.type}`);let n=c;if(t.value.length!==n.value.length)throw Error(`Too ${t.value.length>n.value.length?`few`:`many`} items to unpack`);l=e=>{for(let r=0;r<t.value.length;++r){if(t.value[r].type!==`Identifier`)throw Error(`Cannot unpack non-identifier type: ${t.value[r].type}`);e.setVariable(t.value[r].value,n.value[r])}}}else throw Error(`Invalid loop variable(s): ${e.loopvar.type}`);r&&(l(s),!this.evaluate(r,s).__bool__().value)||(a.push(c),o.push(l))}let s=``,c=!0;for(let t=0;t<a.length;++t){let r=new Map([[`index`,new B(t+1)],[`index0`,new B(t)],[`revindex`,new B(a.length-t)],[`revindex0`,new B(a.length-t-1)],[`first`,new U(t===0)],[`last`,new U(t===a.length-1)],[`length`,new B(a.length)],[`previtem`,t>0?a[t-1]:new J],[`nextitem`,t<a.length-1?a[t+1]:new J]]);n.setVariable(`loop`,new W(r)),o[t](n);try{let t=this.evaluateBlock(e.body,n);s+=t.value}catch(e){if(e instanceof Cc)continue;if(e instanceof Sc)break;throw e}c=!1}if(c){let t=this.evaluateBlock(e.defaultBlock,n);s+=t.value}return new H(s)}evaluateMacro(e,t){return t.setVariable(e.name.value,new K((t,n)=>{let r=new Mc(n);t=t.slice();let i;t.at(-1)?.type===`KeywordArgumentsValue`&&(i=t.pop());for(let n=0;n<e.args.length;++n){let a=e.args[n],o=t[n];if(a.type===`Identifier`){let e=a;if(!o)throw Error(`Missing positional argument: ${e.value}`);r.setVariable(e.value,o)}else if(a.type===`KeywordArgumentExpression`){let e=a,t=o??i?.value.get(e.key.value)??this.evaluate(e.value,r);r.setVariable(e.key.value,t)}else throw Error(`Unknown argument type: ${a.type}`)}return this.evaluateBlock(e.body,r)})),new q}evaluateCallStatement(e,t){let n=new K((t,n)=>{let r=new Mc(n);if(e.callerArgs)for(let n=0;n<e.callerArgs.length;++n){let i=e.callerArgs[n];if(i.type!==`Identifier`)throw Error(`Caller parameter must be an identifier, got ${i.type}`);r.setVariable(i.value,t[n]??new J)}return this.evaluateBlock(e.body,r)}),[r,i]=this.evaluateArguments(e.call.args,t);r.push(new kc(i));let a=this.evaluate(e.call.callee,t);if(a.type!==`FunctionValue`)throw Error(`Cannot call something that is not a function: got ${a.type}`);let o=new Mc(t);return o.setVariable(`caller`,n),a.value(r,o)}evaluateFilterStatement(e,t){let n=this.evaluateBlock(e.body,t);return this.applyFilter(n,e.filter,t)}evaluate(e,t){if(!e)return new J;switch(e.type){case`Program`:return this.evalProgram(e,t);case`Set`:return this.evaluateSet(e,t);case`If`:return this.evaluateIf(e,t);case`For`:return this.evaluateFor(e,t);case`Macro`:return this.evaluateMacro(e,t);case`CallStatement`:return this.evaluateCallStatement(e,t);case`Break`:throw new Sc;case`Continue`:throw new Cc;case`IntegerLiteral`:return new B(e.value);case`FloatLiteral`:return new V(e.value);case`StringLiteral`:return new H(e.value);case`ArrayLiteral`:return new G(e.value.map(e=>this.evaluate(e,t)));case`TupleLiteral`:return new Ac(e.value.map(e=>this.evaluate(e,t)));case`ObjectLiteral`:{let n=new Map;for(let[r,i]of e.value){let e=this.evaluate(r,t);if(!(e instanceof H))throw Error(`Object keys must be strings: got ${e.type}`);n.set(e.value,this.evaluate(i,t))}return new W(n)}case`Identifier`:return this.evaluateIdentifier(e,t);case`CallExpression`:return this.evaluateCallExpression(e,t);case`MemberExpression`:return this.evaluateMemberExpression(e,t);case`UnaryExpression`:return this.evaluateUnaryExpression(e,t);case`BinaryExpression`:return this.evaluateBinaryExpression(e,t);case`FilterExpression`:return this.evaluateFilterExpression(e,t);case`FilterStatement`:return this.evaluateFilterStatement(e,t);case`TestExpression`:return this.evaluateTestExpression(e,t);case`SelectExpression`:return this.evaluateSelectExpression(e,t);case`Ternary`:return this.evaluateTernaryExpression(e,t);case`Comment`:return new q;default:throw SyntaxError(`Unknown node type: ${e.type}`)}}};function Lc(e){switch(typeof e){case`number`:return Number.isInteger(e)?new B(e):new V(e);case`string`:return new H(e);case`boolean`:return new U(e);case`undefined`:return new J;case`object`:return e===null?new q:Array.isArray(e)?new G(e.map(Lc)):new W(new Map(Object.entries(e).map(([e,t])=>[e,Lc(t)])));case`function`:return new K((t,n)=>Lc(e(...t.map(e=>e.value))??null));default:throw Error(`Cannot convert to runtime value: ${e}`)}}var Y=`
`,Rc=`{%- `,zc=` -%}`;function Bc(e){switch(e.operator.type){case`MultiplicativeBinaryOperator`:return 4;case`AdditiveBinaryOperator`:return 3;case`ComparisonBinaryOperator`:return 2;case`Identifier`:return e.operator.value===`and`?1:e.operator.value===`in`||e.operator.value===`not in`?2:0}return 0}function Vc(e,t=`	`){let n=typeof t==`number`?` `.repeat(t):t;return Hc(e.body,0,n).replace(/\n$/,``)}function X(...e){return Rc+e.join(` `)+zc}function Hc(e,t,n){return e.map(e=>Uc(e,t,n)).join(Y)}function Uc(e,t,n){let r=n.repeat(t);switch(e.type){case`Program`:return Hc(e.body,t,n);case`If`:return Wc(e,t,n);case`For`:return Gc(e,t,n);case`Set`:return Kc(e,t,n);case`Macro`:return qc(e,t,n);case`Break`:return r+X(`break`);case`Continue`:return r+X(`continue`);case`CallStatement`:return Jc(e,t,n);case`FilterStatement`:return Yc(e,t,n);case`Comment`:return r+`{# `+e.value+` #}`;default:return r+`{{- `+Z(e)+` -}}`}}function Wc(e,t,n){let r=n.repeat(t),i=[],a=e;for(;a&&(i.push({test:a.test,body:a.body}),a.alternate.length===1&&a.alternate[0].type===`If`);)a=a.alternate[0];let o=r+X(`if`,Z(i[0].test))+Y+Hc(i[0].body,t+1,n);for(let e=1;e<i.length;++e)o+=Y+r+X(`elif`,Z(i[e].test))+Y+Hc(i[e].body,t+1,n);return a&&a.alternate.length>0&&(o+=Y+r+X(`else`)+Y+Hc(a.alternate,t+1,n)),o+=Y+r+X(`endif`),o}function Gc(e,t,n){let r=n.repeat(t),i=``;if(e.iterable.type===`SelectExpression`){let t=e.iterable;i=`${Z(t.lhs)} if ${Z(t.test)}`}else i=Z(e.iterable);let a=r+X(`for`,Z(e.loopvar),`in`,i)+Y+Hc(e.body,t+1,n);return e.defaultBlock.length>0&&(a+=Y+r+X(`else`)+Y+Hc(e.defaultBlock,t+1,n)),a+=Y+r+X(`endfor`),a}function Kc(e,t,n){let r=n.repeat(t),i=Z(e.assignee),a=e.value?Z(e.value):``,o=r+X(`set`,`${i}${e.value?` = `+a:``}`);return e.body.length===0?o:o+Y+Hc(e.body,t+1,n)+Y+r+X(`endset`)}function qc(e,t,n){let r=n.repeat(t),i=e.args.map(Z).join(`, `);return r+X(`macro`,`${e.name.value}(${i})`)+Y+Hc(e.body,t+1,n)+Y+r+X(`endmacro`)}function Jc(e,t,n){let r=n.repeat(t),i=e.callerArgs&&e.callerArgs.length>0?`(${e.callerArgs.map(Z).join(`, `)})`:``,a=Z(e.call),o=r+X(`call${i}`,a)+Y;return o+=Hc(e.body,t+1,n)+Y,o+=r+X(`endcall`),o}function Yc(e,t,n){let r=n.repeat(t),i=r+X(`filter`,e.filter.type===`Identifier`?e.filter.value:Z(e.filter))+Y;return i+=Hc(e.body,t+1,n)+Y,i+=r+X(`endfilter`),i}function Z(e,t=-1){switch(e.type){case`SpreadExpression`:return`*${Z(e.argument)}`;case`Identifier`:return e.value;case`IntegerLiteral`:return`${e.value}`;case`FloatLiteral`:return`${e.value}`;case`StringLiteral`:return JSON.stringify(e.value);case`BinaryExpression`:{let n=e,r=Bc(n),i=Z(n.left,r),a=Z(n.right,r+1),o=`${i} ${n.operator.value} ${a}`;return r<t?`(${o})`:o}case`UnaryExpression`:{let t=e;return t.operator.value+(t.operator.value===`not`?` `:``)+Z(t.argument,1/0)}case`CallExpression`:{let t=e,n=t.args.map(Z).join(`, `);return`${Z(t.callee)}(${n})`}case`MemberExpression`:{let t=e,n=Z(t.object);[`Identifier`,`MemberExpression`,`CallExpression`,`StringLiteral`,`IntegerLiteral`,`FloatLiteral`,`ArrayLiteral`,`TupleLiteral`,`ObjectLiteral`].includes(t.object.type)||(n=`(${n})`);let r=Z(t.property);return!t.computed&&t.property.type!==`Identifier`&&(r=`(${r})`),t.computed?`${n}[${r}]`:`${n}.${r}`}case`FilterExpression`:{let t=e,n=Z(t.operand,1/0);return t.filter.type===`CallExpression`?`${n} | ${Z(t.filter)}`:`${n} | ${t.filter.value}`}case`SelectExpression`:{let t=e;return`${Z(t.lhs)} if ${Z(t.test)}`}case`TestExpression`:{let t=e;return`${Z(t.operand)} is${t.negate?` not`:``} ${t.test.value}`}case`ArrayLiteral`:case`TupleLiteral`:{let t=e.value.map(Z),n=e.type===`ArrayLiteral`?`[]`:`()`;return`${n[0]}${t.join(`, `)}${n[1]}`}case`ObjectLiteral`:return`{${Array.from(e.value.entries()).map(([e,t])=>`${Z(e)}: ${Z(t)}`).join(`, `)}}`;case`SliceExpression`:{let t=e;return`${t.start?Z(t.start):``}:${t.stop?Z(t.stop):``}${t.step?`:${Z(t.step)}`:``}`}case`KeywordArgumentExpression`:{let t=e;return`${t.key.value}=${Z(t.value)}`}case`Ternary`:{let n=e,r=`${Z(n.trueExpr)} if ${Z(n.condition,0)} else ${Z(n.falseExpr)}`;return t>-1?`(${r})`:r}default:throw Error(`Unknown expression type: ${e.type}`)}}var Xc=class{parsed;constructor(e){let t=Ls(e,{lstrip_blocks:!0,trim_blocks:!0});this.parsed=mc(t)}render(e){let t=new Mc;if(Nc(t),e)for(let[n,r]of Object.entries(e))t.set(n,r);return new Ic(t).run(this.parsed).value}format(e){return Vc(this.parsed,e?.indent||`	`)}},Zc={"adapter-transformers":[`question-answering`,`text-classification`,`token-classification`],allennlp:[`question-answering`],asteroid:[`audio-to-audio`],bertopic:[`text-classification`],diffusers:[`image-to-image`,`text-to-image`],doctr:[`object-detection`],espnet:[`text-to-speech`,`automatic-speech-recognition`],fairseq:[`text-to-speech`,`audio-to-audio`],fastai:[`image-classification`],fasttext:[`feature-extraction`,`text-classification`],flair:[`token-classification`],k2:[`automatic-speech-recognition`],keras:[`image-classification`],nemo:[`automatic-speech-recognition`],open_clip:[`zero-shot-classification`,`zero-shot-image-classification`],paddlenlp:[`fill-mask`,`summarization`,`zero-shot-classification`],peft:[`text-generation`],"pyannote-audio":[`automatic-speech-recognition`],"sentence-transformers":[`feature-extraction`,`sentence-similarity`],setfit:[`text-classification`],sklearn:[`tabular-classification`,`tabular-regression`,`text-classification`],spacy:[`token-classification`,`text-classification`,`sentence-similarity`],"span-marker":[`token-classification`],speechbrain:[`audio-classification`,`audio-to-audio`,`automatic-speech-recognition`,`text-to-speech`],stanza:[`token-classification`],timm:[`image-classification`,`image-feature-extraction`],transformers:`audio-classification.automatic-speech-recognition.depth-estimation.document-question-answering.feature-extraction.fill-mask.image-classification.image-feature-extraction.image-segmentation.image-to-image.image-to-text.image-text-to-text.mask-generation.object-detection.question-answering.summarization.table-question-answering.text-classification.text-generation.text-to-audio.text-to-speech.token-classification.translation.video-classification.visual-question-answering.zero-shot-classification.zero-shot-image-classification.zero-shot-object-detection`.split(`.`),mindspore:[`image-classification`]},Qc=[`image-to-text`,`summarization`,`translation`];new Map([[`text-classification`,[`پروژه به موقع تحویل شد و همه چیز خوب بود.`,`سیب‌زمینی بی‌کیفیت بود.`,`قیمت و کیفیت عالی`,`خوب نبود اصلا`]],[`token-classification`,[`این سریال به صورت رسمی در تاریخ دهم می ۲۰۱۱ توسط شبکه فاکس برای پخش رزرو شد.`,`دفتر مرکزی شرکت پارس‌مینو در شهر اراک در استان مرکزی قرار دارد.`,`وی در سال ۲۰۱۳ درگذشت و مسئول خاکسپاری و اقوامش برای او مراسم یادبود گرفتند.`]],[`question-answering`,[{text:`من کجا زندگی میکنم؟`,context:`نام من پژمان است و در گرگان زندگی میکنم.`},{text:`نامم چیست و کجا زندگی می‌کنم؟`,context:`اسمم سارا است و در آفریقای جنوبی زندگی میکنم.`},{text:`نام من چیست؟`,context:`من مریم هستم و در تبریز زندگی می‌کنم.`},{text:`بیشترین مساحت جنگل آمازون در کدام کشور است؟`,context:[`آمازون نام بزرگ‌ترین جنگل بارانی جهان است که در شمال آمریکای جنوبی قرار گرفته و بیشتر آن در خاک برزیل و پرو`,`جای دارد. بیش از نیمی از همه جنگل‌های بارانی باقی‌مانده در جهان در آمازون قرار دارد.`,`مساحت جنگل‌های آمازون ۵٫۵ میلیون کیلومتر مربع است که بین ۹ کشور تقسیم شده‌است.`].join(`
`)}]],[`translation`,[`بیشتر مساحت جنگل‌های آمازون در حوضه آبریز رود آمازون و ۱۱۰۰ شاخه آن واقع شده‌است.`,`مردمان نَبَطی از هزاره‌های یکم و دوم پیش از میلاد در این منطقه زندگی می‌کردند.`]],[`summarization`,[[`شاهنامه اثر حکیم ابوالقاسم فردوسی توسی، حماسه‌ای منظوم، بر حسب دست نوشته‌های `,`موجود دربرگیرنده نزدیک به ۵۰٬۰۰۰ بیت تا نزدیک به ۶۱٬۰۰۰ بیت و یکی از `,`بزرگ‌ترین و برجسته‌ترین سروده‌های حماسی جهان است که سرایش آن دست‌آوردِ `,`دست‌کم سی سال کارِ پیوستهٔ این سخن‌سرای نامدار ایرانی است. موضوع این شاهکار ادبی،`,` افسانه‌ها و تاریخ ایران از آغاز تا حملهٔ عرب‌ها به ایران در سدهٔ هفتم میلادی است`,`  (شاهنامه از سه بخش اسطوره، پهلوانی و تاریخی تشکیل شده‌است) که در چهار`,`   دودمان پادشاهیِ پیشدادیان، کیانیان، اشکانیان و ساسانیان گنجانده می‌شود.`,`    شاهنامه بر وزن «فَعولُن فعولن فعولن فَعَلْ»، در بحرِ مُتَقارِبِ مثمَّنِ محذوف نگاشته شده‌است.`,`هنگامی که زبان دانش و ادبیات در ایران زبان عربی بود، فردوسی، با سرودن شاهنامه`,` با ویژگی‌های هدف‌مندی که داشت، زبان پارسی را زنده و پایدار کرد. یکی از `,` بن‌مایه‌های مهمی که فردوسی برای سرودن شاهنامه از آن استفاده کرد،`,`  شاهنامهٔ ابومنصوری بود. شاهنامه نفوذ بسیاری در جهت‌گیری `,`  فرهنگ فارسی و نیز بازتاب‌های شکوه‌مندی در ادبیات جهان داشته‌است و شاعران `,`  بزرگی مانند گوته و ویکتور هوگو از آن به نیکی یاد کرده‌اند.`].join(`
`)]],[`text-generation`,[`اسم من نازنین است و من`,`روزی روزگاری`]],[`fill-mask`,[`زندگی یک سوال است و این که چگونه <mask> کنیم پاسخ این سوال!`,`زندگی از مرگ پرسید: چرا همه من را <mask> دارند اما از تو متنفرند؟`]]]);var $c={"text-classification":{name:`Text Classification`,subtasks:[{type:`acceptability-classification`,name:`Acceptability Classification`},{type:`entity-linking-classification`,name:`Entity Linking Classification`},{type:`fact-checking`,name:`Fact Checking`},{type:`intent-classification`,name:`Intent Classification`},{type:`language-identification`,name:`Language Identification`},{type:`multi-class-classification`,name:`Multi Class Classification`},{type:`multi-label-classification`,name:`Multi Label Classification`},{type:`multi-input-text-classification`,name:`Multi-input Text Classification`},{type:`natural-language-inference`,name:`Natural Language Inference`},{type:`semantic-similarity-classification`,name:`Semantic Similarity Classification`},{type:`sentiment-classification`,name:`Sentiment Classification`},{type:`topic-classification`,name:`Topic Classification`},{type:`semantic-similarity-scoring`,name:`Semantic Similarity Scoring`},{type:`sentiment-scoring`,name:`Sentiment Scoring`},{type:`sentiment-analysis`,name:`Sentiment Analysis`},{type:`hate-speech-detection`,name:`Hate Speech Detection`},{type:`text-scoring`,name:`Text Scoring`}],modality:`nlp`},"token-classification":{name:`Token Classification`,subtasks:[{type:`named-entity-recognition`,name:`Named Entity Recognition`},{type:`part-of-speech`,name:`Part of Speech`},{type:`parsing`,name:`Parsing`},{type:`lemmatization`,name:`Lemmatization`},{type:`word-sense-disambiguation`,name:`Word Sense Disambiguation`},{type:`coreference-resolution`,name:`Coreference-resolution`}],modality:`nlp`},"table-question-answering":{name:`Table Question Answering`,modality:`nlp`},"question-answering":{name:`Question Answering`,subtasks:[{type:`extractive-qa`,name:`Extractive QA`},{type:`open-domain-qa`,name:`Open Domain QA`},{type:`closed-domain-qa`,name:`Closed Domain QA`}],modality:`nlp`},"zero-shot-classification":{name:`Zero-Shot Classification`,modality:`nlp`},translation:{name:`Translation`,modality:`nlp`},summarization:{name:`Summarization`,subtasks:[{type:`news-articles-summarization`,name:`News Articles Summarization`},{type:`news-articles-headline-generation`,name:`News Articles Headline Generation`}],modality:`nlp`},"feature-extraction":{name:`Feature Extraction`,modality:`nlp`},"text-generation":{name:`Text Generation`,subtasks:[{type:`dialogue-modeling`,name:`Dialogue Modeling`},{type:`dialogue-generation`,name:`Dialogue Generation`},{type:`conversational`,name:`Conversational`},{type:`language-modeling`,name:`Language Modeling`},{type:`text-simplification`,name:`Text simplification`},{type:`explanation-generation`,name:`Explanation Generation`},{type:`abstractive-qa`,name:`Abstractive QA`},{type:`open-domain-abstractive-qa`,name:`Open Domain Abstractive QA`},{type:`closed-domain-qa`,name:`Closed Domain QA`},{type:`open-book-qa`,name:`Open Book QA`},{type:`closed-book-qa`,name:`Closed Book QA`},{type:`text2text-generation`,name:`Text2Text Generation`}],modality:`nlp`},"fill-mask":{name:`Fill-Mask`,subtasks:[{type:`slot-filling`,name:`Slot Filling`},{type:`masked-language-modeling`,name:`Masked Language Modeling`}],modality:`nlp`},"sentence-similarity":{name:`Sentence Similarity`,modality:`nlp`},"text-to-speech":{name:`Text-to-Speech`,modality:`audio`},"text-to-audio":{name:`Text-to-Audio`,modality:`audio`},"automatic-speech-recognition":{name:`Automatic Speech Recognition`,modality:`audio`},"audio-to-audio":{name:`Audio-to-Audio`,modality:`audio`},"audio-classification":{name:`Audio Classification`,subtasks:[{type:`keyword-spotting`,name:`Keyword Spotting`},{type:`speaker-identification`,name:`Speaker Identification`},{type:`audio-intent-classification`,name:`Audio Intent Classification`},{type:`audio-emotion-recognition`,name:`Audio Emotion Recognition`},{type:`audio-language-identification`,name:`Audio Language Identification`}],modality:`audio`},"audio-text-to-text":{name:`Audio-Text-to-Text`,modality:`multimodal`,hideInDatasets:!0},"voice-activity-detection":{name:`Voice Activity Detection`,modality:`audio`},"depth-estimation":{name:`Depth Estimation`,modality:`cv`},"image-classification":{name:`Image Classification`,subtasks:[{type:`multi-label-image-classification`,name:`Multi Label Image Classification`},{type:`multi-class-image-classification`,name:`Multi Class Image Classification`}],modality:`cv`},"object-detection":{name:`Object Detection`,subtasks:[{type:`face-detection`,name:`Face Detection`},{type:`vehicle-detection`,name:`Vehicle Detection`}],modality:`cv`},"image-segmentation":{name:`Image Segmentation`,subtasks:[{type:`instance-segmentation`,name:`Instance Segmentation`},{type:`semantic-segmentation`,name:`Semantic Segmentation`},{type:`panoptic-segmentation`,name:`Panoptic Segmentation`}],modality:`cv`},"text-to-image":{name:`Text-to-Image`,modality:`cv`},"image-to-text":{name:`Image-to-Text`,subtasks:[{type:`image-captioning`,name:`Image Captioning`}],modality:`cv`},"image-to-image":{name:`Image-to-Image`,subtasks:[{type:`image-inpainting`,name:`Image Inpainting`},{type:`image-colorization`,name:`Image Colorization`},{type:`super-resolution`,name:`Super Resolution`}],modality:`cv`},"image-to-video":{name:`Image-to-Video`,modality:`cv`},"unconditional-image-generation":{name:`Unconditional Image Generation`,modality:`cv`},"video-classification":{name:`Video Classification`,modality:`cv`},"reinforcement-learning":{name:`Reinforcement Learning`,modality:`rl`},robotics:{name:`Robotics`,modality:`rl`,subtasks:[{type:`grasping`,name:`Grasping`},{type:`task-planning`,name:`Task Planning`}]},"tabular-classification":{name:`Tabular Classification`,modality:`tabular`,subtasks:[{type:`tabular-multi-class-classification`,name:`Tabular Multi Class Classification`},{type:`tabular-multi-label-classification`,name:`Tabular Multi Label Classification`}]},"tabular-regression":{name:`Tabular Regression`,modality:`tabular`,subtasks:[{type:`tabular-single-column-regression`,name:`Tabular Single Column Regression`}]},"tabular-to-text":{name:`Tabular to Text`,modality:`tabular`,subtasks:[{type:`rdf-to-text`,name:`RDF to text`}],hideInModels:!0},"table-to-text":{name:`Table to Text`,modality:`nlp`,hideInModels:!0},"multiple-choice":{name:`Multiple Choice`,subtasks:[{type:`multiple-choice-qa`,name:`Multiple Choice QA`},{type:`multiple-choice-coreference-resolution`,name:`Multiple Choice Coreference Resolution`}],modality:`nlp`,hideInModels:!0},"text-ranking":{name:`Text Ranking`,modality:`nlp`},"text-retrieval":{name:`Text Retrieval`,subtasks:[{type:`document-retrieval`,name:`Document Retrieval`},{type:`utterance-retrieval`,name:`Utterance Retrieval`},{type:`entity-linking-retrieval`,name:`Entity Linking Retrieval`},{type:`fact-checking-retrieval`,name:`Fact Checking Retrieval`}],modality:`nlp`,hideInModels:!0},"time-series-forecasting":{name:`Time Series Forecasting`,modality:`tabular`,subtasks:[{type:`univariate-time-series-forecasting`,name:`Univariate Time Series Forecasting`},{type:`multivariate-time-series-forecasting`,name:`Multivariate Time Series Forecasting`}]},"text-to-video":{name:`Text-to-Video`,modality:`cv`},"image-text-to-text":{name:`Image-Text-to-Text`,modality:`multimodal`},"image-text-to-image":{name:`Image-Text-to-Image`,modality:`multimodal`},"image-text-to-video":{name:`Image-Text-to-Video`,modality:`multimodal`},"visual-question-answering":{name:`Visual Question Answering`,subtasks:[{type:`visual-question-answering`,name:`Visual Question Answering`}],modality:`multimodal`},"document-question-answering":{name:`Document Question Answering`,subtasks:[{type:`document-question-answering`,name:`Document Question Answering`}],modality:`multimodal`,hideInDatasets:!0},"zero-shot-image-classification":{name:`Zero-Shot Image Classification`,modality:`cv`},"graph-ml":{name:`Graph Machine Learning`,modality:`other`},"mask-generation":{name:`Mask Generation`,modality:`cv`},"zero-shot-object-detection":{name:`Zero-Shot Object Detection`,modality:`cv`},"text-to-3d":{name:`Text-to-3D`,modality:`cv`},"image-to-3d":{name:`Image-to-3D`,modality:`cv`},"image-feature-extraction":{name:`Image Feature Extraction`,modality:`cv`},"video-text-to-text":{name:`Video-Text-to-Text`,modality:`multimodal`,hideInDatasets:!1},"keypoint-detection":{name:`Keypoint Detection`,subtasks:[{type:`pose-estimation`,name:`Pose Estimation`}],modality:`cv`,hideInDatasets:!0},"visual-document-retrieval":{name:`Visual Document Retrieval`,modality:`multimodal`},"any-to-any":{name:`Any-to-Any`,modality:`multimodal`},"video-to-video":{name:`Video-to-Video`,modality:`cv`,hideInDatasets:!0},other:{name:`Other`,modality:`other`,hideInModels:!0,hideInDatasets:!0}},el=Object.keys($c);Object.values($c).flatMap(e=>`subtasks`in e?e.subtasks:[]).map(e=>e.type),new Set(el);var tl={datasets:[{description:`A dataset with multiple modality input and output pairs.`,id:`PKU-Alignment/align-anything`}],demo:{inputs:[{filename:`any-to-any-input.jpg`,type:`img`},{label:`Text Prompt`,content:`What is the significance of this place?`,type:`text`}],outputs:[{label:`Generated Text`,content:`The place in the picture is Osaka Castle, located in Osaka, Japan. Osaka Castle is a historic castle that was originally built in the 16th century by Toyotomi Hideyoshi, a powerful warlord of the time. It is one of the most famous landmarks in Osaka and is known for its distinctive white walls and black roof tiles. The castle has been rebuilt several times over the centuries and is now a popular tourist attraction, offering visitors a glimpse into Japan's rich history and culture.`,type:`text`},{filename:`any-to-any-output.wav`,type:`audio`}]},metrics:[],models:[{description:`Strong model that can take in video, audio, image, text and output text and natural speech.`,id:`Qwen/Qwen2.5-Omni-7B`},{description:`Robust model that can take in image and text and generate image and text.`,id:`OmniGen2/OmniGen2`},{description:`Any-to-any model with speech, video, audio, image and text understanding capabilities.`,id:`openbmb/MiniCPM-o-2_6`},{description:`A model that can understand image and text and generate image and text.`,id:`ByteDance-Seed/BAGEL-7B-MoT`}],spaces:[{description:`An application to chat with an any-to-any (image & text) model.`,id:`OmniGen2/OmniGen2`}],summary:`Any-to-any models can understand two or more modalities and output two or more modalities.`,widgetModels:[],youtubeId:``},nl={datasets:[{description:`A benchmark of 10 different audio tasks.`,id:`s3prl/superb`},{description:`A dataset of YouTube clips and their sound categories.`,id:`agkphysics/AudioSet`}],demo:{inputs:[{filename:`audio.wav`,type:`audio`}],outputs:[{data:[{label:`Up`,score:.2},{label:`Down`,score:.8}],type:`chart`}]},metrics:[{description:``,id:`accuracy`},{description:``,id:`recall`},{description:``,id:`precision`},{description:``,id:`f1`}],models:[{description:`An easy-to-use model for command recognition.`,id:`speechbrain/google_speech_command_xvector`},{description:`An emotion recognition model.`,id:`ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition`},{description:`A language identification model.`,id:`facebook/mms-lid-126`}],spaces:[{description:`An application that can classify music into different genre.`,id:`kurianbenoy/audioclassification`}],summary:`Audio classification is the task of assigning a label or class to a given audio. It can be used for recognizing which command a user is giving or the emotion of a statement, as well as identifying a speaker.`,widgetModels:[`MIT/ast-finetuned-audioset-10-10-0.4593`],youtubeId:`KWwzcmG98Ds`},rl={datasets:[{description:`A dataset containing audio conversations with question–answer pairs.`,id:`nvidia/AF-Think`},{description:`A more advanced and comprehensive dataset that contains characteristics of the audio as well`,id:`tsinghua-ee/QualiSpeech`}],demo:{inputs:[{filename:`audio.wav`,type:`audio`},{label:`Text Prompt`,content:`What is the gender of the speaker?`,type:`text`}],outputs:[{label:`Generated Text`,content:`The gender of the speaker is female.`,type:`text`}]},metrics:[],models:[{description:`A lightweight model that has capabilities of taking both audio and text as inputs and generating responses.`,id:`fixie-ai/ultravox-v0_5-llama-3_2-1b`},{description:`A multimodal model that supports voice chat and audio analysis.`,id:`Qwen/Qwen2-Audio-7B-Instruct`},{description:`A model for audio understanding, speech translation, and transcription.`,id:`mistralai/Voxtral-Small-24B-2507`},{description:`A new model capable of audio question answering and reasoning.`,id:`nvidia/audio-flamingo-3`}],spaces:[{description:`A space that takes input as both audio and text and generates answers.`,id:`iamomtiwari/ATTT`},{description:`A web application that demonstrates chatting with the Qwen2Audio Model.`,id:`freddyaboulton/talk-to-qwen-webrtc`}],summary:`Audio-text-to-text models take both an audio clip and a text prompt as input, and generate natural language text as output. These models can answer questions about spoken content, summarize meetings, analyze music, or interpret speech beyond simple transcription. They are useful for applications that combine speech understanding with reasoning or conversation.`,widgetModels:[],youtubeId:``},il={datasets:[{description:`512-element X-vector embeddings of speakers from CMU ARCTIC dataset.`,id:`Matthijs/cmu-arctic-xvectors`}],demo:{inputs:[{filename:`input.wav`,type:`audio`}],outputs:[{filename:`label-0.wav`,type:`audio`},{filename:`label-1.wav`,type:`audio`}]},metrics:[{description:`The Signal-to-Noise ratio is the relationship between the target signal level and the background noise level. It is calculated as the logarithm of the target signal divided by the background noise, in decibels.`,id:`snri`},{description:`The Signal-to-Distortion ratio is the relationship between the target signal and the sum of noise, interference, and artifact errors`,id:`sdri`}],models:[{description:`A speech enhancement model.`,id:`ResembleAI/resemble-enhance`},{description:`A model that can change the voice in a speech recording.`,id:`microsoft/speecht5_vc`}],spaces:[{description:`An application for speech separation.`,id:`younver/speechbrain-speech-separation`},{description:`An application for audio style transfer.`,id:`nakas/audio-diffusion_style_transfer`}],summary:`Audio-to-Audio is a family of tasks in which the input is an audio and the output is one or multiple generated audios. Some example tasks are speech enhancement and source separation.`,widgetModels:[`speechbrain/sepformer-wham`],youtubeId:`iohj7nCCYoM`},al={datasets:[{description:`31,175 hours of multilingual audio-text dataset in 108 languages.`,id:`mozilla-foundation/common_voice_17_0`},{description:`Multilingual and diverse audio dataset with 101k hours of audio.`,id:`amphion/Emilia-Dataset`},{description:`A dataset with 44.6k hours of English speaker data and 6k hours of other language speakers.`,id:`parler-tts/mls_eng`},{description:`A multilingual audio dataset with 370K hours of audio.`,id:`espnet/yodas`}],demo:{inputs:[{filename:`input.flac`,type:`audio`}],outputs:[{label:`Transcript`,content:`Going along slushy country roads and speaking to damp audiences in...`,type:`text`}]},metrics:[{description:``,id:`wer`},{description:``,id:`cer`}],models:[{description:`A powerful ASR model by OpenAI.`,id:`openai/whisper-large-v3`},{description:`A good generic speech model by MetaAI for fine-tuning.`,id:`facebook/w2v-bert-2.0`},{description:`An end-to-end model that performs ASR and Speech Translation by MetaAI.`,id:`facebook/seamless-m4t-v2-large`},{description:`A powerful multilingual ASR and Speech Translation model by Nvidia.`,id:`nvidia/canary-1b`},{description:`Powerful speaker diarization model.`,id:`pyannote/speaker-diarization-3.1`}],spaces:[{description:`A powerful general-purpose speech recognition application.`,id:`hf-audio/whisper-large-v3`},{description:`Latest ASR model from Useful Sensors.`,id:`mrfakename/Moonshinex`},{description:`A high quality speech and text translation model by Meta.`,id:`facebook/seamless_m4t`},{description:`A powerful multilingual ASR and Speech Translation model by Nvidia`,id:`nvidia/canary-1b`}],summary:`Automatic Speech Recognition (ASR), also known as Speech to Text (STT), is the task of transcribing a given audio to text. It has many applications, such as voice user interfaces.`,widgetModels:[`openai/whisper-large-v3`],youtubeId:`TksaY_FDgnk`},ol={datasets:[{description:`Largest document understanding dataset.`,id:`HuggingFaceM4/Docmatix`},{description:`Dataset from the 2020 DocVQA challenge. The documents are taken from the UCSF Industry Documents Library.`,id:`eliolio/docvqa`}],demo:{inputs:[{label:`Question`,content:`What is the idea behind the consumer relations efficiency team?`,type:`text`},{filename:`document-question-answering-input.png`,type:`img`}],outputs:[{label:`Answer`,content:`Balance cost efficiency with quality customer service`,type:`text`}]},metrics:[{description:`The evaluation metric for the DocVQA challenge is the Average Normalized Levenshtein Similarity (ANLS). This metric is flexible to character regognition errors and compares the predicted answer with the ground truth answer.`,id:`anls`},{description:`Exact Match is a metric based on the strict character match of the predicted answer and the right answer. For answers predicted correctly, the Exact Match will be 1. Even if only one character is different, Exact Match will be 0`,id:`exact-match`}],models:[{description:`A robust document question answering model.`,id:`impira/layoutlm-document-qa`},{description:`A document question answering model specialized in invoices.`,id:`impira/layoutlm-invoices`},{description:`A special model for OCR-free document question answering.`,id:`microsoft/udop-large`},{description:`A powerful model for document question answering.`,id:`google/pix2struct-docvqa-large`}],spaces:[{description:`A robust document question answering application.`,id:`impira/docquery`},{description:`An application that can answer questions from invoices.`,id:`impira/invoices`},{description:`An application to compare different document question answering models.`,id:`merve/compare_docvqa_models`}],summary:`Document Question Answering (also known as Document Visual Question Answering) is the task of answering questions on document images. Document question answering models take a (document, question) pair as input and return an answer in natural language. Models usually rely on multi-modal features, combining text, position of words (bounding-boxes) and image.`,widgetModels:[`impira/layoutlm-invoices`],youtubeId:``},sl={datasets:[{description:"Wikipedia dataset containing cleaned articles of all languages. Can be used to train `feature-extraction` models.",id:`wikipedia`}],demo:{inputs:[{label:`Input`,content:`India, officially the Republic of India, is a country in South Asia.`,type:`text`}],outputs:[{table:[[`Dimension 1`,`Dimension 2`,`Dimension 3`],[`2.583383083343506`,`2.757075071334839`,`0.9023529887199402`],[`8.29393482208252`,`1.1071064472198486`,`2.03399395942688`],[`-0.7754912972450256`,`-1.647324562072754`,`-0.6113331913948059`],[`0.07087723910808563`,`1.5942802429199219`,`1.4610432386398315`]],type:`tabular`}]},metrics:[],models:[{description:`A powerful feature extraction model for natural language processing tasks.`,id:`thenlper/gte-large`},{description:`A strong feature extraction model for retrieval.`,id:`Alibaba-NLP/gte-Qwen1.5-7B-instruct`}],spaces:[{description:`A leaderboard to rank text feature extraction models based on a benchmark.`,id:`mteb/leaderboard`},{description:`A leaderboard to rank best feature extraction models based on human feedback.`,id:`mteb/arena`}],summary:`Feature extraction is the task of extracting features learnt in a model.`,widgetModels:[`facebook/bart-base`]},cl={datasets:[{description:`A common dataset that is used to train models for many languages.`,id:`wikipedia`},{description:`A large English dataset with text crawled from the web.`,id:`c4`}],demo:{inputs:[{label:`Input`,content:`The <mask> barked at me`,type:`text`}],outputs:[{type:`chart`,data:[{label:`wolf`,score:.487},{label:`dog`,score:.061},{label:`cat`,score:.058},{label:`fox`,score:.047},{label:`squirrel`,score:.025}]}]},metrics:[{description:`Cross Entropy is a metric that calculates the difference between two probability distributions. Each probability distribution is the distribution of predicted words`,id:`cross_entropy`},{description:`Perplexity is the exponential of the cross-entropy loss. It evaluates the probabilities assigned to the next word by the model. Lower perplexity indicates better performance`,id:`perplexity`}],models:[{description:`State-of-the-art masked language model.`,id:`answerdotai/ModernBERT-large`},{description:`A multilingual model trained on 100 languages.`,id:`FacebookAI/xlm-roberta-base`}],spaces:[],summary:`Masked language modeling is the task of masking some of the words in a sentence and predicting which words should replace those masks. These models are useful when we want to get a statistical understanding of the language in which the model is trained in.`,widgetModels:[`distilroberta-base`],youtubeId:`mqElG5QJWUg`},ll={datasets:[{description:`Benchmark dataset used for image classification with images that belong to 100 classes.`,id:`cifar100`},{description:`Dataset consisting of images of garments.`,id:`fashion_mnist`}],demo:{inputs:[{filename:`image-classification-input.jpeg`,type:`img`}],outputs:[{type:`chart`,data:[{label:`Egyptian cat`,score:.514},{label:`Tabby cat`,score:.193},{label:`Tiger cat`,score:.068}]}]},metrics:[{description:``,id:`accuracy`},{description:``,id:`recall`},{description:``,id:`precision`},{description:``,id:`f1`}],models:[{description:`A strong image classification model.`,id:`google/vit-base-patch16-224`},{description:`A robust image classification model.`,id:`facebook/deit-base-distilled-patch16-224`},{description:`A strong image classification model.`,id:`facebook/convnext-large-224`}],spaces:[{description:`A leaderboard to evaluate different image classification models.`,id:`timm/leaderboard`}],summary:`Image classification is the task of assigning a label or class to an entire image. Images are expected to have only one class for each image. Image classification models take an image as input and return a prediction about which class the image belongs to.`,widgetModels:[`google/vit-base-patch16-224`],youtubeId:`tjAIM7BOYhw`},ul={datasets:[{description:`ImageNet-1K is a image classification dataset in which images are used to train image-feature-extraction models.`,id:`imagenet-1k`}],demo:{inputs:[{filename:`mask-generation-input.png`,type:`img`}],outputs:[{table:[[`Dimension 1`,`Dimension 2`,`Dimension 3`],[`0.21236686408519745`,`1.0919708013534546`,`0.8512550592422485`],[`0.809657871723175`,`-0.18544459342956543`,`-0.7851548194885254`],[`1.3103108406066895`,`-0.2479034662246704`,`-0.9107287526130676`],[`1.8536205291748047`,`-0.36419737339019775`,`0.09717650711536407`]],type:`tabular`}]},metrics:[],models:[{description:`A powerful image feature extraction model.`,id:`timm/vit_large_patch14_dinov2.lvd142m`},{description:`A strong image feature extraction model.`,id:`nvidia/MambaVision-T-1K`},{description:`A robust image feature extraction model.`,id:`facebook/dino-vitb16`},{description:`Cutting-edge image feature extraction model.`,id:`apple/aimv2-large-patch14-336-distilled`},{description:`Strong image feature extraction model that can be used on images and documents.`,id:`OpenGVLab/InternViT-6B-448px-V1-2`}],spaces:[{description:`A leaderboard to evaluate different image-feature-extraction models on classification performances`,id:`timm/leaderboard`}],summary:`Image feature extraction is the task of extracting features learnt in a computer vision model.`,widgetModels:[]},dl={datasets:[{description:`Synthetic dataset, for image relighting`,id:`VIDIT`},{description:`Multiple images of celebrities, used for facial expression translation`,id:`huggan/CelebA-faces`},{description:`12M image-caption pairs.`,id:`Spawning/PD12M`}],demo:{inputs:[{filename:`image-to-image-input.jpeg`,type:`img`}],outputs:[{filename:`image-to-image-output.png`,type:`img`}]},isPlaceholder:!1,metrics:[{description:`Peak Signal to Noise Ratio (PSNR) is an approximation of the human perception, considering the ratio of the absolute intensity with respect to the variations. Measured in dB, a high value indicates a high fidelity.`,id:`PSNR`},{description:`Structural Similarity Index (SSIM) is a perceptual metric which compares the luminance, contrast and structure of two images. The values of SSIM range between -1 and 1, and higher values indicate closer resemblance to the original image.`,id:`SSIM`},{description:`Inception Score (IS) is an analysis of the labels predicted by an image classification model when presented with a sample of the generated images.`,id:`IS`}],models:[{description:`An image-to-image model to improve image resolution.`,id:`fal/AuraSR-v2`},{description:`Powerful image editing model.`,id:`black-forest-labs/FLUX.1-Kontext-dev`},{description:`Virtual try-on model.`,id:`yisol/IDM-VTON`},{description:`Image re-lighting model.`,id:`kontext-community/relighting-kontext-dev-lora-v3`},{description:`Strong model for inpainting and outpainting.`,id:`black-forest-labs/FLUX.1-Fill-dev`},{description:`Strong model for image editing using depth maps.`,id:`black-forest-labs/FLUX.1-Depth-dev-lora`}],spaces:[{description:`Image editing application.`,id:`black-forest-labs/FLUX.1-Kontext-Dev`},{description:`Image relighting application.`,id:`lllyasviel/iclight-v2-vary`},{description:`An application for image upscaling.`,id:`jasperai/Flux.1-dev-Controlnet-Upscaler`}],summary:`Image-to-image is the task of transforming an input image through a variety of possible manipulations and enhancements, such as super-resolution, image inpainting, colorization, and more.`,widgetModels:[`Qwen/Qwen-Image`],youtubeId:``},fl={datasets:[{description:`Dataset from 12M image-text of Reddit`,id:`red_caps`},{description:`Dataset from 3.3M images of Google`,id:`datasets/conceptual_captions`}],demo:{inputs:[{filename:`savanna.jpg`,type:`img`}],outputs:[{label:`Detailed description`,content:`a herd of giraffes and zebras grazing in a field`,type:`text`}]},metrics:[],models:[{description:`Strong OCR model.`,id:`allenai/olmOCR-7B-0725`},{description:`Powerful image captioning model.`,id:`fancyfeast/llama-joycaption-beta-one-hf-llava`}],spaces:[{description:`SVG generator app from images.`,id:`multimodalart/OmniSVG-3B`},{description:`An application that converts documents to markdown.`,id:`numind/NuMarkdown-8B-Thinking`},{description:`An application that can caption images.`,id:`fancyfeast/joy-caption-beta-one`}],summary:`Image to text models output a text from a given image. Image captioning or optical character recognition can be considered as the most common applications of image to text.`,widgetModels:[`Salesforce/blip-image-captioning-large`],youtubeId:``},pl={datasets:[{description:`Instructions composed of image and text.`,id:`liuhaotian/LLaVA-Instruct-150K`},{description:`Collection of image-text pairs on scientific topics.`,id:`DAMO-NLP-SG/multimodal_textbook`},{description:`A collection of datasets made for model fine-tuning.`,id:`HuggingFaceM4/the_cauldron`},{description:`Screenshots of websites with their HTML/CSS codes.`,id:`HuggingFaceM4/WebSight`}],demo:{inputs:[{filename:`image-text-to-text-input.png`,type:`img`},{label:`Text Prompt`,content:`Describe the position of the bee in detail.`,type:`text`}],outputs:[{label:`Answer`,content:`The bee is sitting on a pink flower, surrounded by other flowers. The bee is positioned in the center of the flower, with its head and front legs sticking out.`,type:`text`}]},metrics:[],models:[{description:`Small and efficient yet powerful vision language model.`,id:`HuggingFaceTB/SmolVLM-Instruct`},{description:`Cutting-edge reasoning vision language model.`,id:`zai-org/GLM-4.5V`},{description:`Cutting-edge small vision language model to convert documents to text.`,id:`rednote-hilab/dots.ocr`},{description:`Small yet powerful model.`,id:`Qwen/Qwen2.5-VL-3B-Instruct`},{description:`Image-text-to-text model with agentic capabilities.`,id:`microsoft/Magma-8B`}],spaces:[{description:`Leaderboard to evaluate vision language models.`,id:`opencompass/open_vlm_leaderboard`},{description:`An application that compares object detection capabilities of different vision language models.`,id:`sergiopaniego/vlm_object_understanding`},{description:`An application to compare different OCR models.`,id:`prithivMLmods/Multimodal-OCR`}],summary:`Image-text-to-text models take in an image and text prompt and output text. These models are also called vision-language models, or VLMs. The difference from image-to-text models is that these models take an additional text input, not restricting the model to certain use cases like image captioning, and may also be trained to accept a conversation as input.`,widgetModels:[`zai-org/GLM-4.5V`],youtubeId:`IoGaGfU1CIg`},ml={datasets:[],demo:{inputs:[{filename:`image-text-to-image-input.jpeg`,type:`img`},{label:`Input`,content:`A city above clouds, pastel colors, Victorian style`,type:`text`}],outputs:[{filename:`image-text-to-image-output.png`,type:`img`}]},metrics:[{description:`The Fréchet Inception Distance (FID) calculates the distance between distributions between synthetic and real samples. A lower FID score indicates better similarity between the distributions of real and generated images.`,id:`FID`},{description:`CLIP Score measures the similarity between the generated image and the text prompt using CLIP embeddings. A higher score indicates better alignment with the text prompt.`,id:`CLIP`}],models:[{description:`A powerful model for image-text-to-image generation.`,id:`black-forest-labs/FLUX.2-dev`}],spaces:[{description:`An application for image-text-to-image generation.`,id:`black-forest-labs/FLUX.2-dev`}],summary:`Image-text-to-image models take an image and a text prompt as input and generate a new image based on the reference image and text instructions. These models are useful for image editing, style transfer, image variations, and guided image generation tasks.`,widgetModels:[`black-forest-labs/FLUX.2-dev`],youtubeId:void 0},hl={datasets:[],demo:{inputs:[{filename:`image-text-to-video-input.jpg`,type:`img`},{label:`Input`,content:`Darth Vader is surfing on the waves.`,type:`text`}],outputs:[{filename:`image-text-to-video-output.gif`,type:`img`}]},metrics:[{description:`Frechet Video Distance uses a model that captures coherence for changes in frames and the quality of each frame. A smaller score indicates better video generation.`,id:`fvd`},{description:`CLIPSIM measures similarity between video frames and text using an image-text similarity model. A higher score indicates better video generation.`,id:`clipsim`}],models:[{description:`A powerful model for image-text-to-video generation.`,id:`Lightricks/LTX-Video`}],spaces:[{description:`An application for image-text-to-video generation.`,id:`Lightricks/ltx-video-distilled`}],summary:`Image-text-to-video models take an reference image and a text instructions as and generate a video based on them. These models are useful for animating still images, creating dynamic content from static references, and generating videos with specific motion or transformation guidance.`,widgetModels:[`Lightricks/LTX-Video`],youtubeId:void 0},gl={datasets:[{description:`Scene segmentation dataset.`,id:`scene_parse_150`}],demo:{inputs:[{filename:`image-segmentation-input.jpeg`,type:`img`}],outputs:[{filename:`image-segmentation-output.png`,type:`img`}]},metrics:[{description:`Average Precision (AP) is the Area Under the PR Curve (AUC-PR). It is calculated for each semantic class separately`,id:`Average Precision`},{description:`Mean Average Precision (mAP) is the overall average of the AP values`,id:`Mean Average Precision`},{description:`Intersection over Union (IoU) is the overlap of segmentation masks. Mean IoU is the average of the IoU of all semantic classes`,id:`Mean Intersection over Union`},{description:`APα is the Average Precision at the IoU threshold of a α value, for example, AP50 and AP75`,id:`APα`}],models:[{description:`Solid panoptic segmentation model trained on COCO.`,id:`tue-mps/coco_panoptic_eomt_large_640`},{description:`Background removal model.`,id:`briaai/RMBG-1.4`},{description:`A multipurpose image segmentation model for high resolution images.`,id:`ZhengPeng7/BiRefNet`},{description:`Powerful human-centric image segmentation model.`,id:`facebook/sapiens-seg-1b`},{description:`Panoptic segmentation model trained on the COCO (common objects) dataset.`,id:`facebook/mask2former-swin-large-coco-panoptic`}],spaces:[{description:`A semantic segmentation application that can predict unseen instances out of the box.`,id:`facebook/ov-seg`},{description:`One of the strongest segmentation applications.`,id:`jbrinkma/segment-anything`},{description:`A human-centric segmentation model.`,id:`facebook/sapiens-pose`},{description:`An instance segmentation application to predict neuronal cell types from microscopy images.`,id:`rashmi/sartorius-cell-instance-segmentation`},{description:`An application that segments videos.`,id:`ArtGAN/Segment-Anything-Video`},{description:`An panoptic segmentation application built for outdoor environments.`,id:`segments/panoptic-segment-anything`}],summary:`Image Segmentation divides an image into segments where each pixel in the image is mapped to an object. This task has multiple variants such as instance segmentation, panoptic segmentation and semantic segmentation.`,widgetModels:[`nvidia/segformer-b0-finetuned-ade-512-512`],youtubeId:`dKE8SIt9C-w`},_l={datasets:[{description:`A benchmark dataset for reference image controlled video generation.`,id:`ali-vilab/VACE-Benchmark`},{description:`A dataset of video generation style preferences.`,id:`Rapidata/sora-video-generation-style-likert-scoring`},{description:`A dataset with videos and captions throughout the videos.`,id:`BestWishYsh/ChronoMagic`}],demo:{inputs:[{filename:`image-to-video-input.jpg`,type:`img`},{label:`Optional Text Prompt`,content:`This penguin is dancing`,type:`text`}],outputs:[{filename:`image-to-video-output.gif`,type:`img`}]},metrics:[{description:`Fréchet Video Distance (FVD) measures the perceptual similarity between the distributions of generated videos and a set of real videos, assessing overall visual quality and temporal coherence of the video generated from an input image.`,id:`fvd`},{description:`CLIP Score measures the semantic similarity between a textual prompt (if provided alongside the input image) and the generated video frames. It evaluates how well the video's generated content and motion align with the textual description, conditioned on the initial image.`,id:`clip_score`},{description:`First Frame Fidelity, often measured using LPIPS (Learned Perceptual Image Patch Similarity), PSNR, or SSIM, quantifies how closely the first frame of the generated video matches the input conditioning image.`,id:`lpips`},{description:`Identity Preservation Score measures the consistency of identity (e.g., a person's face or a specific object's characteristics) between the input image and throughout the generated video frames, often calculated using features from specialized models like face recognition (e.g., ArcFace) or re-identification models.`,id:`identity_preservation`},{description:`Motion Score evaluates the quality, realism, and temporal consistency of motion in the video generated from a static image. This can be based on optical flow analysis (e.g., smoothness, magnitude), consistency of object trajectories, or specific motion plausibility assessments.`,id:`motion_score`}],models:[{description:`LTX-Video, a 13B parameter model for high quality video generation`,id:`Lightricks/LTX-Video-0.9.7-dev`},{description:`A 14B parameter model for reference image controlled video generation`,id:`Wan-AI/Wan2.1-VACE-14B`},{description:`An image-to-video generation model using FramePack F1 methodology with Hunyuan-DiT architecture`,id:`lllyasviel/FramePack_F1_I2V_HY_20250503`},{description:`A distilled version of the LTX-Video-0.9.7-dev model for faster inference`,id:`Lightricks/LTX-Video-0.9.7-distilled`},{description:`An image-to-video generation model by Skywork AI, 14B parameters, producing 720p videos.`,id:`Skywork/SkyReels-V2-I2V-14B-720P`},{description:`Image-to-video variant of Tencent's HunyuanVideo.`,id:`tencent/HunyuanVideo-I2V`},{description:`A 14B parameter model for 720p image-to-video generation by Wan-AI.`,id:`Wan-AI/Wan2.1-I2V-14B-720P`},{description:`A Diffusers version of the Wan2.1-I2V-14B-720P model for 720p image-to-video generation.`,id:`Wan-AI/Wan2.1-I2V-14B-720P-Diffusers`}],spaces:[{description:`An application to generate videos fast.`,id:`Lightricks/ltx-video-distilled`},{description:`Generate videos with the FramePack-F1`,id:`linoyts/FramePack-F1`},{description:`Generate videos with the FramePack`,id:`lisonallen/framepack-i2v`},{description:`Wan2.1 with CausVid LoRA`,id:`multimodalart/wan2-1-fast`},{description:`A demo for Stable Video Diffusion`,id:`multimodalart/stable-video-diffusion`}],summary:`Image-to-video models take a still image as input and generate a video. These models can be guided by text prompts to influence the content and style of the output video.`,widgetModels:[],youtubeId:void 0},vl={datasets:[{description:`Widely used benchmark dataset for multiple Vision tasks.`,id:`merve/coco2017`},{description:`Medical Imaging dataset of the Human Brain for segmentation and mask generating tasks`,id:`rocky93/BraTS_segmentation`}],demo:{inputs:[{filename:`mask-generation-input.png`,type:`img`}],outputs:[{filename:`mask-generation-output.png`,type:`img`}]},metrics:[{description:`IoU is used to measure the overlap between predicted mask and the ground truth mask.`,id:`Intersection over Union (IoU)`}],models:[{description:`Small yet powerful mask generation model.`,id:`Zigeng/SlimSAM-uniform-50`},{description:`Very strong mask generation model.`,id:`facebook/sam2-hiera-large`}],spaces:[{description:`An application that combines a mask generation model with a zero-shot object detection model for text-guided image segmentation.`,id:`merve/OWLSAM2`},{description:`An application that compares the performance of a large and a small mask generation model.`,id:`merve/slimsam`},{description:`An application based on an improved mask generation model.`,id:`SkalskiP/segment-anything-model-2`},{description:`An application to remove objects from videos using mask generation models.`,id:`SkalskiP/SAM_and_ProPainter`}],summary:`Mask generation is the task of generating masks that identify a specific object or region of interest in a given image. Masks are often used in segmentation tasks, where they provide a precise way to isolate the object of interest for further processing or analysis.`,widgetModels:[],youtubeId:``},yl={datasets:[{description:`Widely used benchmark dataset for multiple vision tasks.`,id:`merve/coco2017`},{description:`Multi-task computer vision benchmark.`,id:`merve/pascal-voc`}],demo:{inputs:[{filename:`object-detection-input.jpg`,type:`img`}],outputs:[{filename:`object-detection-output.jpg`,type:`img`}]},metrics:[{description:`The Average Precision (AP) metric is the Area Under the PR Curve (AUC-PR). It is calculated for each class separately`,id:`Average Precision`},{description:`The Mean Average Precision (mAP) metric is the overall average of the AP values`,id:`Mean Average Precision`},{description:`The APα metric is the Average Precision at the IoU threshold of a α value, for example, AP50 and AP75`,id:`APα`}],models:[{description:`Solid object detection model pre-trained on the COCO 2017 dataset.`,id:`facebook/detr-resnet-50`},{description:`Accurate object detection model.`,id:`IDEA-Research/dab-detr-resnet-50`},{description:`Fast and accurate object detection model.`,id:`PekingU/rtdetr_v2_r50vd`},{description:`Object detection model for low-lying objects.`,id:`StephanST/WALDO30`}],spaces:[{description:`Real-time object detection demo.`,id:`Roboflow/RF-DETR`},{description:`An application that contains various object detection models to try from.`,id:`Gradio-Blocks/Object-Detection-With-DETR-and-YOLOS`},{description:`A cutting-edge object detection application.`,id:`sunsmarterjieleaf/yolov12`},{description:`An object tracking, segmentation and inpainting application.`,id:`VIPLab/Track-Anything`},{description:`Very fast object tracking application based on object detection.`,id:`merve/RT-DETR-tracking-coco`}],summary:`Object Detection models allow users to identify objects of certain defined classes. Object detection models receive an image as input and output the images with bounding boxes and labels on detected objects.`,widgetModels:[`facebook/detr-resnet-50`],youtubeId:`WdAeKSOpxhw`},bl={datasets:[{description:`NYU Depth V2 Dataset: Video dataset containing both RGB and depth sensor data.`,id:`sayakpaul/nyu_depth_v2`},{description:`Monocular depth estimation benchmark based without noise and errors.`,id:`depth-anything/DA-2K`}],demo:{inputs:[{filename:`depth-estimation-input.jpg`,type:`img`}],outputs:[{filename:`depth-estimation-output.png`,type:`img`}]},metrics:[],models:[{description:`Cutting-edge depth estimation model.`,id:`depth-anything/Depth-Anything-V2-Large`},{description:`A strong monocular depth estimation model.`,id:`jingheya/lotus-depth-g-v1-0`},{description:`A depth estimation model that predicts depth in videos.`,id:`tencent/DepthCrafter`},{description:`A robust depth estimation model.`,id:`apple/DepthPro-hf`}],spaces:[{description:`An application that predicts the depth of an image and then reconstruct the 3D model as voxels.`,id:`radames/dpt-depth-estimation-3d-voxels`},{description:`An application for bleeding-edge depth estimation.`,id:`akhaliq/depth-pro`},{description:`An application on cutting-edge depth estimation in videos.`,id:`tencent/DepthCrafter`},{description:`A human-centric depth estimation application.`,id:`facebook/sapiens-depth`}],summary:`Depth estimation is the task of predicting depth of the objects present in an image.`,widgetModels:[``],youtubeId:``},xl={datasets:[],demo:{inputs:[],outputs:[]},isPlaceholder:!0,metrics:[],models:[],spaces:[],summary:``,widgetModels:[],youtubeId:void 0,canonicalId:void 0},Sl={datasets:[{description:`A curation of widely used datasets for Data Driven Deep Reinforcement Learning (D4RL)`,id:`edbeeching/decision_transformer_gym_replay`}],demo:{inputs:[{label:`State`,content:`Red traffic light, pedestrians are about to pass.`,type:`text`}],outputs:[{label:`Action`,content:`Stop the car.`,type:`text`},{label:`Next State`,content:`Yellow light, pedestrians have crossed.`,type:`text`}]},metrics:[{description:`Accumulated reward across all time steps discounted by a factor that ranges between 0 and 1 and determines how much the agent optimizes for future relative to immediate rewards. Measures how good is the policy ultimately found by a given algorithm considering uncertainty over the future.`,id:`Discounted Total Reward`},{description:`Average return obtained after running the policy for a certain number of evaluation episodes. As opposed to total reward, mean reward considers how much reward a given algorithm receives while learning.`,id:`Mean Reward`},{description:`Measures how good a given algorithm is after a predefined time. Some algorithms may be guaranteed to converge to optimal behavior across many time steps. However, an agent that reaches an acceptable level of optimality after a given time horizon may be preferable to one that ultimately reaches optimality but takes a long time.`,id:`Level of Performance After Some Time`}],models:[{description:`A Reinforcement Learning model trained on expert data from the Gym Hopper environment`,id:`edbeeching/decision-transformer-gym-hopper-expert`},{description:`A PPO agent playing seals/CartPole-v0 using the stable-baselines3 library and the RL Zoo.`,id:`HumanCompatibleAI/ppo-seals-CartPole-v0`}],spaces:[{description:`An application for a cute puppy agent learning to catch a stick.`,id:`ThomasSimonini/Huggy`},{description:`An application to play Snowball Fight with a reinforcement learning agent.`,id:`ThomasSimonini/SnowballFight`}],summary:`Reinforcement learning is the computational approach of learning from action by interacting with an environment through trial and error and receiving rewards (negative or positive) as feedback`,widgetModels:[],youtubeId:`q0BiUn5LiBc`},Cl={datasets:[{description:`A famous question answering dataset based on English articles from Wikipedia.`,id:`squad_v2`},{description:`A dataset of aggregated anonymized actual queries issued to the Google search engine.`,id:`natural_questions`}],demo:{inputs:[{label:`Question`,content:`Which name is also used to describe the Amazon rainforest in English?`,type:`text`},{label:`Context`,content:`The Amazon rainforest, also known in English as Amazonia or the Amazon Jungle`,type:`text`}],outputs:[{label:`Answer`,content:`Amazonia`,type:`text`}]},metrics:[{description:`Exact Match is a metric based on the strict character match of the predicted answer and the right answer. For answers predicted correctly, the Exact Match will be 1. Even if only one character is different, Exact Match will be 0`,id:`exact-match`},{description:` The F1-Score metric is useful if we value both false positives and false negatives equally. The F1-Score is calculated on each word in the predicted sequence against the correct answer`,id:`f1`}],models:[{description:`A robust baseline model for most question answering domains.`,id:`deepset/roberta-base-squad2`},{description:`Small yet robust model that can answer questions.`,id:`distilbert/distilbert-base-cased-distilled-squad`},{description:`A special model that can answer questions from tables.`,id:`google/tapas-base-finetuned-wtq`}],spaces:[{description:`An application that can answer a long question from Wikipedia.`,id:`deepset/wikipedia-assistant`}],summary:`Question Answering models can retrieve the answer to a question from a given text, which is useful for searching for an answer in a document. Some question answering models can generate answers without context!`,widgetModels:[`deepset/roberta-base-squad2`],youtubeId:`ajPx5LwJD-I`},wl={datasets:[{description:`Bing queries with relevant passages from various web sources.`,id:`microsoft/ms_marco`}],demo:{inputs:[{label:`Source sentence`,content:`Machine learning is so easy.`,type:`text`},{label:`Sentences to compare to`,content:`Deep learning is so straightforward.`,type:`text`},{label:``,content:`This is so difficult, like rocket science.`,type:`text`},{label:``,content:`I can't believe how much I struggled with this.`,type:`text`}],outputs:[{type:`chart`,data:[{label:`Deep learning is so straightforward.`,score:.623},{label:`This is so difficult, like rocket science.`,score:.413},{label:`I can't believe how much I struggled with this.`,score:.256}]}]},metrics:[{description:`Reciprocal Rank is a measure used to rank the relevancy of documents given a set of documents. Reciprocal Rank is the reciprocal of the rank of the document retrieved, meaning, if the rank is 3, the Reciprocal Rank is 0.33. If the rank is 1, the Reciprocal Rank is 1`,id:`Mean Reciprocal Rank`},{description:`The similarity of the embeddings is evaluated mainly on cosine similarity. It is calculated as the cosine of the angle between two vectors. It is particularly useful when your texts are not the same length`,id:`Cosine Similarity`}],models:[{description:`This model works well for sentences and paragraphs and can be used for clustering/grouping and semantic searches.`,id:`sentence-transformers/all-mpnet-base-v2`},{description:`A multilingual robust sentence similarity model.`,id:`BAAI/bge-m3`},{description:`A robust sentence similarity model.`,id:`HIT-TMG/KaLM-embedding-multilingual-mini-instruct-v1.5`}],spaces:[{description:`An application that leverages sentence similarity to answer questions from YouTube videos.`,id:`Gradio-Blocks/Ask_Questions_To_YouTube_Videos`},{description:`An application that retrieves relevant PubMed abstracts for a given online article which can be used as further references.`,id:`Gradio-Blocks/pubmed-abstract-retriever`},{description:`An application that leverages sentence similarity to summarize text.`,id:`nickmuchi/article-text-summarizer`},{description:`A guide that explains how Sentence Transformers can be used for semantic search.`,id:`sentence-transformers/Sentence_Transformers_for_semantic_search`}],summary:`Sentence Similarity is the task of determining how similar two texts are. Sentence similarity models convert input texts into vectors (embeddings) that capture semantic information and calculate how close (similar) they are between them. This task is particularly useful for information retrieval and clustering/grouping.`,widgetModels:[`sentence-transformers/all-MiniLM-L6-v2`],youtubeId:`VCZq5AkbNEU`},Tl={canonicalId:`text-generation`,datasets:[{description:`News articles in five different languages along with their summaries. Widely used for benchmarking multilingual summarization models.`,id:`mlsum`},{description:`English conversations and their summaries. Useful for benchmarking conversational agents.`,id:`samsum`}],demo:{inputs:[{label:`Input`,content:`The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. It was the first structure to reach a height of 300 metres. Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.`,type:`text`}],outputs:[{label:`Output`,content:`The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building. It was the first structure to reach a height of 300 metres.`,type:`text`}]},metrics:[{description:`The generated sequence is compared against its summary, and the overlap of tokens are counted. ROUGE-N refers to overlap of N subsequent tokens, ROUGE-1 refers to overlap of single tokens and ROUGE-2 is the overlap of two subsequent tokens.`,id:`rouge`}],models:[{description:`A strong summarization model trained on English news articles. Excels at generating factual summaries.`,id:`facebook/bart-large-cnn`},{description:`A summarization model trained on medical articles.`,id:`Falconsai/medical_summarization`}],spaces:[{description:`An application that can summarize long paragraphs.`,id:`pszemraj/summarize-long-text`},{description:`A much needed summarization application for terms and conditions.`,id:`ml6team/distilbart-tos-summarizer-tosdr`},{description:`An application that summarizes long documents.`,id:`pszemraj/document-summarization`},{description:`An application that can detect errors in abstractive summarization.`,id:`ml6team/post-processing-summarization`}],summary:`Summarization is the task of producing a shorter version of a document while preserving its important information. Some models can extract text from the original input, while other models can generate entirely new text.`,widgetModels:[`facebook/bart-large-cnn`],youtubeId:`yHnr5Dk2zCI`},El={datasets:[{description:`The WikiTableQuestions dataset is a large-scale dataset for the task of question answering on semi-structured tables.`,id:`wikitablequestions`},{description:`WikiSQL is a dataset of 80654 hand-annotated examples of questions and SQL queries distributed across 24241 tables from Wikipedia.`,id:`wikisql`}],demo:{inputs:[{table:[[`Rank`,`Name`,`No.of reigns`,`Combined days`],[`1`,`lou Thesz`,`3`,`3749`],[`2`,`Ric Flair`,`8`,`3103`],[`3`,`Harley Race`,`7`,`1799`]],type:`tabular`},{label:`Question`,content:`What is the number of reigns for Harley Race?`,type:`text`}],outputs:[{label:`Result`,content:`7`,type:`text`}]},metrics:[{description:`Checks whether the predicted answer(s) is the same as the ground-truth answer(s).`,id:`Denotation Accuracy`}],models:[{description:`A table question answering model that is capable of neural SQL execution, i.e., employ TAPEX to execute a SQL query on a given table.`,id:`microsoft/tapex-base`},{description:`A robust table question answering model.`,id:`google/tapas-base-finetuned-wtq`}],spaces:[{description:`An application that answers questions based on table CSV files.`,id:`katanaml/table-query`}],summary:`Table Question Answering (Table QA) is the answering a question about an information on a given table.`,widgetModels:[`google/tapas-base-finetuned-wtq`]},Dl={datasets:[{description:`A comprehensive curation of datasets covering all benchmarks.`,id:`inria-soda/tabular-benchmark`}],demo:{inputs:[{table:[[`Glucose`,`Blood Pressure `,`Skin Thickness`,`Insulin`,`BMI`],[`148`,`72`,`35`,`0`,`33.6`],[`150`,`50`,`30`,`0`,`35.1`],[`141`,`60`,`29`,`1`,`39.2`]],type:`tabular`}],outputs:[{table:[[`Diabetes`],[`1`],[`1`],[`0`]],type:`tabular`}]},metrics:[{description:``,id:`accuracy`},{description:``,id:`recall`},{description:``,id:`precision`},{description:``,id:`f1`}],models:[{description:`Breast cancer prediction model based on decision trees.`,id:`scikit-learn/cancer-prediction-trees`}],spaces:[{description:`An application that can predict defective products on a production line.`,id:`scikit-learn/tabular-playground`},{description:`An application that compares various tabular classification techniques on different datasets.`,id:`scikit-learn/classification`}],summary:`Tabular classification is the task of classifying a target category (a group) based on set of attributes.`,widgetModels:[`scikit-learn/tabular-playground`],youtubeId:``},Ol={datasets:[{description:`A comprehensive curation of datasets covering all benchmarks.`,id:`inria-soda/tabular-benchmark`}],demo:{inputs:[{table:[[`Car Name`,`Horsepower`,`Weight`],[`ford torino`,`140`,`3,449`],[`amc hornet`,`97`,`2,774`],[`toyota corolla`,`65`,`1,773`]],type:`tabular`}],outputs:[{table:[[`MPG (miles per gallon)`],[`17`],[`18`],[`31`]],type:`tabular`}]},metrics:[{description:``,id:`mse`},{description:`Coefficient of determination (or R-squared) is a measure of how well the model fits the data. Higher R-squared is considered a better fit.`,id:`r-squared`}],models:[{description:`Fish weight prediction based on length measurements and species.`,id:`scikit-learn/Fish-Weight`}],spaces:[{description:`An application that can predict weight of a fish based on set of attributes.`,id:`scikit-learn/fish-weight-prediction`}],summary:`Tabular regression is the task of predicting a numerical value given a set of attributes.`,widgetModels:[`scikit-learn/Fish-Weight`],youtubeId:``},kl={datasets:[{description:`RedCaps is a large-scale dataset of 12M image-text pairs collected from Reddit.`,id:`red_caps`},{description:`Conceptual Captions is a dataset consisting of ~3.3M images annotated with captions.`,id:`conceptual_captions`},{description:`12M image-caption pairs.`,id:`Spawning/PD12M`}],demo:{inputs:[{label:`Input`,content:`A city above clouds, pastel colors, Victorian style`,type:`text`}],outputs:[{filename:`image.jpeg`,type:`img`}]},metrics:[{description:`The Inception Score (IS) measure assesses diversity and meaningfulness. It uses a generated image sample to predict its label. A higher score signifies more diverse and meaningful images.`,id:`IS`},{description:`The Fréchet Inception Distance (FID) calculates the distance between distributions between synthetic and real samples. A lower FID score indicates better similarity between the distributions of real and generated images.`,id:`FID`},{description:`R-precision assesses how the generated image aligns with the provided text description. It uses the generated images as queries to retrieve relevant text descriptions. The top 'r' relevant descriptions are selected and used to calculate R-precision as r/R, where 'R' is the number of ground truth descriptions associated with the generated images. A higher R-precision value indicates a better model.`,id:`R-Precision`}],models:[{description:`One of the most powerful image generation models that can generate realistic outputs.`,id:`black-forest-labs/FLUX.1-Krea-dev`},{description:`A powerful image generation model.`,id:`Qwen/Qwen-Image`},{description:`Powerful and fast image generation model.`,id:`ByteDance/SDXL-Lightning`},{description:`A powerful text-to-image model.`,id:`ByteDance/Hyper-SD`}],spaces:[{description:`A powerful text-to-image application.`,id:`stabilityai/stable-diffusion-3-medium`},{description:`A text-to-image application to generate comics.`,id:`jbilcke-hf/ai-comic-factory`},{description:`An application to match multiple custom image generation models.`,id:`multimodalart/flux-lora-lab`},{description:`A powerful yet very fast image generation application.`,id:`latent-consistency/lcm-lora-for-sdxl`},{description:`A gallery to explore various text-to-image models.`,id:`multimodalart/LoraTheExplorer`},{description:"An application for `text-to-image`, `image-to-image` and image inpainting.",id:`ArtGAN/Stable-Diffusion-ControlNet-WebUI`},{description:`An application to generate realistic images given photos of a person and a prompt.`,id:`InstantX/InstantID`}],summary:`Text-to-image is the task of generating images from input text. These pipelines can also be used to modify and edit images based on text prompts.`,widgetModels:[`black-forest-labs/FLUX.1-dev`],youtubeId:``},Al={canonicalId:`text-to-audio`,datasets:[{description:`10K hours of multi-speaker English dataset.`,id:`parler-tts/mls_eng_10k`},{description:`Multi-speaker English dataset.`,id:`mythicinfinity/libritts_r`},{description:`Multi-lingual dataset.`,id:`facebook/multilingual_librispeech`}],demo:{inputs:[{label:`Input`,content:`I love audio models on the Hub!`,type:`text`}],outputs:[{filename:`audio.wav`,type:`audio`}]},metrics:[{description:`The Mel Cepstral Distortion (MCD) metric is used to calculate the quality of generated speech.`,id:`mel cepstral distortion`}],models:[{description:`Small yet powerful TTS model.`,id:`KittenML/kitten-tts-nano-0.1`},{description:`Bleeding edge TTS model.`,id:`ResembleAI/chatterbox`},{description:`A massively multi-lingual TTS model.`,id:`fishaudio/fish-speech-1.5`},{description:`A text-to-dialogue model.`,id:`nari-labs/Dia-1.6B-0626`}],spaces:[{description:`An application for generate high quality speech in different languages.`,id:`hexgrad/Kokoro-TTS`},{description:`A multilingual text-to-speech application.`,id:`fishaudio/fish-speech-1`},{description:`Performant TTS application.`,id:`ResembleAI/Chatterbox`},{description:`An application to compare different TTS models.`,id:`TTS-AGI/TTS-Arena-V2`},{description:`An application that generates podcast episodes.`,id:`ngxson/kokoro-podcast-generator`}],summary:`Text-to-Speech (TTS) is the task of generating natural sounding speech given text input. TTS models can be extended to have a single model that generates speech for multiple speakers and multiple languages.`,widgetModels:[`suno/bark`],youtubeId:`NW62DpzJ274`},jl={datasets:[{description:`A widely used dataset useful to benchmark named entity recognition models.`,id:`eriktks/conll2003`},{description:`A multilingual dataset of Wikipedia articles annotated for named entity recognition in over 150 different languages.`,id:`unimelb-nlp/wikiann`}],demo:{inputs:[{label:`Input`,content:`My name is Omar and I live in Zürich.`,type:`text`}],outputs:[{text:`My name is Omar and I live in Zürich.`,tokens:[{type:`PERSON`,start:11,end:15},{type:`GPE`,start:30,end:36}],type:`text-with-tokens`}]},metrics:[{description:``,id:`accuracy`},{description:``,id:`recall`},{description:``,id:`precision`},{description:``,id:`f1`}],models:[{description:`A robust performance model to identify people, locations, organizations and names of miscellaneous entities.`,id:`dslim/bert-base-NER`},{description:`A strong model to identify people, locations, organizations and names in multiple languages.`,id:`FacebookAI/xlm-roberta-large-finetuned-conll03-english`},{description:`A token classification model specialized on medical entity recognition.`,id:`blaze999/Medical-NER`},{description:`Flair models are typically the state of the art in named entity recognition tasks.`,id:`flair/ner-english`}],spaces:[{description:`An application that can recognizes entities, extracts noun chunks and recognizes various linguistic features of each token.`,id:`spacy/gradio_pipeline_visualizer`}],summary:`Token classification is a natural language understanding task in which a label is assigned to some tokens in a text. Some popular token classification subtasks are Named Entity Recognition (NER) and Part-of-Speech (PoS) tagging. NER models could be trained to identify specific entities in a text, such as dates, individuals and places; and PoS tagging would identify, for example, which words in a text are verbs, nouns, and punctuation marks.`,widgetModels:[`FacebookAI/xlm-roberta-large-finetuned-conll03-english`],youtubeId:`wVHdVlPScxA`},Ml={canonicalId:`text-generation`,datasets:[{description:`A dataset of copyright-free books translated into 16 different languages.`,id:`Helsinki-NLP/opus_books`},{description:`An example of translation between programming languages. This dataset consists of functions in Java and C#.`,id:`google/code_x_glue_cc_code_to_code_trans`}],demo:{inputs:[{label:`Input`,content:`My name is Omar and I live in Zürich.`,type:`text`}],outputs:[{label:`Output`,content:`Mein Name ist Omar und ich wohne in Zürich.`,type:`text`}]},metrics:[{description:`BLEU score is calculated by counting the number of shared single or subsequent tokens between the generated sequence and the reference. Subsequent n tokens are called “n-grams”. Unigram refers to a single token while bi-gram refers to token pairs and n-grams refer to n subsequent tokens. The score ranges from 0 to 1, where 1 means the translation perfectly matched and 0 did not match at all`,id:`bleu`},{description:``,id:`sacrebleu`}],models:[{description:`Very powerful model that can translate many languages between each other, especially low-resource languages.`,id:`facebook/nllb-200-1.3B`},{description:`A general-purpose Transformer that can be used to translate from English to German, French, or Romanian.`,id:`google-t5/t5-base`}],spaces:[{description:`An application that can translate between 100 languages.`,id:`Iker/Translate-100-languages`},{description:`An application that can translate between many languages.`,id:`Geonmo/nllb-translation-demo`}],summary:`Translation is the task of converting text from one language to another.`,widgetModels:[`facebook/mbart-large-50-many-to-many-mmt`],youtubeId:`1JvfrvZgi6c`},Nl={datasets:[{description:`A widely used dataset used to benchmark multiple variants of text classification.`,id:`nyu-mll/glue`},{description:`A text classification dataset used to benchmark natural language inference models`,id:`stanfordnlp/snli`}],demo:{inputs:[{label:`Input`,content:`I love Hugging Face!`,type:`text`}],outputs:[{type:`chart`,data:[{label:`POSITIVE`,score:.9},{label:`NEUTRAL`,score:.1},{label:`NEGATIVE`,score:0}]}]},metrics:[{description:``,id:`accuracy`},{description:``,id:`recall`},{description:``,id:`precision`},{description:`The F1 metric is the harmonic mean of the precision and recall. It can be calculated as: F1 = 2 * (precision * recall) / (precision + recall)`,id:`f1`}],models:[{description:`A robust model trained for sentiment analysis.`,id:`distilbert/distilbert-base-uncased-finetuned-sst-2-english`},{description:`A sentiment analysis model specialized in financial sentiment.`,id:`ProsusAI/finbert`},{description:`A sentiment analysis model specialized in analyzing tweets.`,id:`cardiffnlp/twitter-roberta-base-sentiment-latest`},{description:`A model that can classify languages.`,id:`papluca/xlm-roberta-base-language-detection`},{description:`A model that can classify text generation attacks.`,id:`meta-llama/Prompt-Guard-86M`}],spaces:[{description:`An application that can classify financial sentiment.`,id:`IoannisTr/Tech_Stocks_Trading_Assistant`},{description:`A dashboard that contains various text classification tasks.`,id:`miesnerjacob/Multi-task-NLP`},{description:`An application that analyzes user reviews in healthcare.`,id:`spacy/healthsea-demo`}],summary:`Text Classification is the task of assigning a label or class to a given text. Some use cases are sentiment analysis, natural language inference, and assessing grammatical correctness.`,widgetModels:[`distilbert/distilbert-base-uncased-finetuned-sst-2-english`],youtubeId:`leNG9fN9FQU`},Pl={datasets:[{description:`Multilingual dataset used to evaluate text generation models.`,id:`CohereForAI/Global-MMLU`},{description:`High quality multilingual data used to train text-generation models.`,id:`HuggingFaceFW/fineweb-2`},{description:`Truly open-source, curated and cleaned dialogue dataset.`,id:`HuggingFaceH4/ultrachat_200k`},{description:`A reasoning dataset.`,id:`open-r1/OpenThoughts-114k-math`},{description:`A multilingual instruction dataset with preference ratings on responses.`,id:`allenai/tulu-3-sft-mixture`},{description:`A large synthetic dataset for alignment of text generation models.`,id:`HuggingFaceTB/smoltalk`},{description:`A dataset made for training text generation models solving math questions.`,id:`HuggingFaceTB/finemath`}],demo:{inputs:[{label:`Input`,content:`Once upon a time,`,type:`text`}],outputs:[{label:`Output`,content:`Once upon a time, we knew that our ancestors were on the verge of extinction. The great explorers and poets of the Old World, from Alexander the Great to Chaucer, are dead and gone. A good many of our ancient explorers and poets have`,type:`text`}]},metrics:[{description:`Cross Entropy is a metric that calculates the difference between two probability distributions. Each probability distribution is the distribution of predicted words`,id:`Cross Entropy`},{description:`The Perplexity metric is the exponential of the cross-entropy loss. It evaluates the probabilities assigned to the next word by the model. Lower perplexity indicates better performance`,id:`Perplexity`}],models:[{description:`A text-generation model trained to follow instructions.`,id:`google/gemma-2-2b-it`},{description:`Powerful text generation model for coding.`,id:`Qwen/Qwen3-Coder-480B-A35B-Instruct`},{description:`Great text generation model with top-notch tool calling capabilities.`,id:`openai/gpt-oss-120b`},{description:`Powerful text generation model.`,id:`zai-org/GLM-4.5`},{description:`A powerful small model with reasoning capabilities.`,id:`Qwen/Qwen3-4B-Thinking-2507`},{description:`Strong conversational model that supports very long instructions.`,id:`Qwen/Qwen2.5-7B-Instruct-1M`},{description:`Text generation model used to write code.`,id:`Qwen/Qwen2.5-Coder-32B-Instruct`},{description:`Powerful reasoning based open large language model.`,id:`deepseek-ai/DeepSeek-R1`}],spaces:[{description:`An application that writes and executes code from text instructions and supports many models.`,id:`akhaliq/anycoder`},{description:`An application that builds websites from natural language prompts.`,id:`enzostvs/deepsite`},{description:`A leaderboard for comparing chain-of-thought performance of models.`,id:`logikon/open_cot_leaderboard`},{description:`An text generation based application based on a very powerful LLaMA2 model.`,id:`ysharma/Explore_llamav2_with_TGI`},{description:`An text generation based application to converse with Zephyr model.`,id:`HuggingFaceH4/zephyr-chat`},{description:`A leaderboard that ranks text generation models based on blind votes from people.`,id:`lmsys/chatbot-arena-leaderboard`},{description:`An chatbot to converse with a very powerful text generation model.`,id:`mlabonne/phixtral-chat`}],summary:`Generating text is the task of generating new text given another text. These models can, for example, fill in incomplete text or paraphrase.`,widgetModels:[`mistralai/Mistral-Nemo-Instruct-2407`],youtubeId:`e9gNEAlsOvU`},Fl={datasets:[{description:`Bing queries with relevant passages from various web sources.`,id:`microsoft/ms_marco`}],demo:{inputs:[{label:`Source sentence`,content:`Machine learning is so easy.`,type:`text`},{label:`Sentences to compare to`,content:`Deep learning is so straightforward.`,type:`text`},{label:``,content:`This is so difficult, like rocket science.`,type:`text`},{label:``,content:`I can't believe how much I struggled with this.`,type:`text`}],outputs:[{type:`chart`,data:[{label:`Deep learning is so straightforward.`,score:2.2006407},{label:`This is so difficult, like rocket science.`,score:-6.2634873},{label:`I can't believe how much I struggled with this.`,score:-10.251488}]}]},metrics:[{description:`Discounted Cumulative Gain (DCG) measures the gain, or usefulness, of search results discounted by their position. The normalization is done by dividing the DCG by the ideal DCG, which is the DCG of the perfect ranking.`,id:`Normalized Discounted Cumulative Gain`},{description:`Reciprocal Rank is a measure used to rank the relevancy of documents given a set of documents. Reciprocal Rank is the reciprocal of the rank of the document retrieved, meaning, if the rank is 3, the Reciprocal Rank is 0.33. If the rank is 1, the Reciprocal Rank is 1`,id:`Mean Reciprocal Rank`},{description:`Mean Average Precision (mAP) is the overall average of the Average Precision (AP) values, where AP is the Area Under the PR Curve (AUC-PR)`,id:`Mean Average Precision`}],models:[{description:`An extremely efficient text ranking model trained on a web search dataset.`,id:`cross-encoder/ms-marco-MiniLM-L6-v2`},{description:`A strong multilingual text reranker model.`,id:`Alibaba-NLP/gte-multilingual-reranker-base`},{description:`An efficient text ranking model that punches above its weight.`,id:`Alibaba-NLP/gte-reranker-modernbert-base`}],spaces:[],summary:`Text Ranking is the task of ranking a set of texts based on their relevance to a query. Text ranking models are trained on large datasets of queries and relevant documents to learn how to rank documents based on their relevance to the query. This task is particularly useful for search engines and information retrieval systems.`,widgetModels:[`cross-encoder/ms-marco-MiniLM-L6-v2`],youtubeId:``},Il={datasets:[{description:`Microsoft Research Video to Text is a large-scale dataset for open domain video captioning`,id:`iejMac/CLIP-MSR-VTT`},{description:`UCF101 Human Actions dataset consists of 13,320 video clips from YouTube, with 101 classes.`,id:`quchenyuan/UCF101-ZIP`},{description:`A high-quality dataset for human action recognition in YouTube videos.`,id:`nateraw/kinetics`},{description:`A dataset of video clips of humans performing pre-defined basic actions with everyday objects.`,id:`HuggingFaceM4/something_something_v2`},{description:`This dataset consists of text-video pairs and contains noisy samples with irrelevant video descriptions`,id:`HuggingFaceM4/webvid`},{description:`A dataset of short Flickr videos for the temporal localization of events with descriptions.`,id:`iejMac/CLIP-DiDeMo`}],demo:{inputs:[{label:`Input`,content:`Darth Vader is surfing on the waves.`,type:`text`}],outputs:[{filename:`text-to-video-output.gif`,type:`img`}]},metrics:[{description:`Inception Score uses an image classification model that predicts class labels and evaluates how distinct and diverse the images are. A higher score indicates better video generation.`,id:`is`},{description:`Frechet Inception Distance uses an image classification model to obtain image embeddings. The metric compares mean and standard deviation of the embeddings of real and generated images. A smaller score indicates better video generation.`,id:`fid`},{description:`Frechet Video Distance uses a model that captures coherence for changes in frames and the quality of each frame. A smaller score indicates better video generation.`,id:`fvd`},{description:`CLIPSIM measures similarity between video frames and text using an image-text similarity model. A higher score indicates better video generation.`,id:`clipsim`}],models:[{description:`A strong model for consistent video generation.`,id:`tencent/HunyuanVideo`},{description:`A text-to-video model with high fidelity motion and strong prompt adherence.`,id:`Lightricks/LTX-Video`},{description:`A text-to-video model focusing on physics-aware applications like robotics.`,id:`nvidia/Cosmos-1.0-Diffusion-7B-Text2World`},{description:`Very fast model for video generation.`,id:`Lightricks/LTX-Video-0.9.8-13B-distilled`}],spaces:[{description:`An application that generates video from text.`,id:`VideoCrafter/VideoCrafter`},{description:`Consistent video generation application.`,id:`Wan-AI/Wan2.1`},{description:`A cutting edge video generation application.`,id:`Pyramid-Flow/pyramid-flow`}],summary:`Text-to-video models can be used in any application that requires generating consistent sequence of images from text. `,widgetModels:[`Wan-AI/Wan2.2-TI2V-5B`],youtubeId:void 0},Ll={datasets:[{description:`The CIFAR-100 dataset consists of 60000 32x32 colour images in 100 classes, with 600 images per class.`,id:`cifar100`},{description:`Multiple images of celebrities, used for facial expression translation.`,id:`CelebA`}],demo:{inputs:[{label:`Seed`,content:`42`,type:`text`},{label:`Number of images to generate:`,content:`4`,type:`text`}],outputs:[{filename:`unconditional-image-generation-output.jpeg`,type:`img`}]},metrics:[{description:`The inception score (IS) evaluates the quality of generated images. It measures the diversity of the generated images (the model predictions are evenly distributed across all possible labels) and their 'distinction' or 'sharpness' (the model confidently predicts a single label for each image).`,id:`Inception score (IS)`},{description:`The Fréchet Inception Distance (FID) evaluates the quality of images created by a generative model by calculating the distance between feature vectors for real and generated images.`,id:`Frećhet Inception Distance (FID)`}],models:[{description:`High-quality image generation model trained on the CIFAR-10 dataset. It synthesizes images of the ten classes presented in the dataset using diffusion probabilistic models, a class of latent variable models inspired by considerations from nonequilibrium thermodynamics.`,id:`google/ddpm-cifar10-32`},{description:`High-quality image generation model trained on the 256x256 CelebA-HQ dataset. It synthesizes images of faces using diffusion probabilistic models, a class of latent variable models inspired by considerations from nonequilibrium thermodynamics.`,id:`google/ddpm-celebahq-256`}],spaces:[{description:`An application that can generate realistic faces.`,id:`CompVis/celeba-latent-diffusion`}],summary:`Unconditional image generation is the task of generating images with no condition in any context (like a prompt text or another image). Once trained, the model will create images that resemble its training data distribution.`,widgetModels:[``],youtubeId:``},Rl={datasets:[{description:`Benchmark dataset used for video classification with videos that belong to 400 classes.`,id:`kinetics400`}],demo:{inputs:[{filename:`video-classification-input.gif`,type:`img`}],outputs:[{type:`chart`,data:[{label:`Playing Guitar`,score:.514},{label:`Playing Tennis`,score:.193},{label:`Cooking`,score:.068}]}]},metrics:[{description:``,id:`accuracy`},{description:``,id:`recall`},{description:``,id:`precision`},{description:``,id:`f1`}],models:[{description:`Strong Video Classification model trained on the Kinetics 400 dataset.`,id:`google/vivit-b-16x2-kinetics400`},{description:`Strong Video Classification model trained on the Kinetics 400 dataset.`,id:`microsoft/xclip-base-patch32`}],spaces:[{description:`An application that classifies video at different timestamps.`,id:`nateraw/lavila`},{description:`An application that classifies video.`,id:`fcakyon/video-classification`}],summary:`Video classification is the task of assigning a label or class to an entire video. Videos are expected to have only one class for each video. Video classification models take a video as input and return a prediction about which class the video belongs to.`,widgetModels:[],youtubeId:``},zl={datasets:[{description:`A large dataset used to train visual document retrieval models.`,id:`vidore/colpali_train_set`}],demo:{inputs:[{filename:`input.png`,type:`img`},{label:`Question`,content:`Is the model in this paper the fastest for inference?`,type:`text`}],outputs:[{type:`chart`,data:[{label:`Page 10`,score:.7},{label:`Page 11`,score:.06},{label:`Page 9`,score:.003}]}]},isPlaceholder:!1,metrics:[{description:`NDCG@k scores ranked recommendation lists for top-k results. 0 is the worst, 1 is the best.`,id:`Normalized Discounted Cumulative Gain at K`}],models:[{description:`Very accurate visual document retrieval model for multilingual queries and documents.`,id:`vidore/colqwen2-v1.0`},{description:`Very fast and efficient visual document retrieval model that can also take in other modalities like audio.`,id:`Tevatron/OmniEmbed-v0.1`}],spaces:[{description:`A leaderboard of visual document retrieval models.`,id:`vidore/vidore-leaderboard`},{description:`Visual retrieval augmented generation demo based on ColQwen2 model.`,id:`vidore/visual-rag-tool`}],summary:`Visual document retrieval is the task of searching for relevant image-based documents, such as PDFs. These models take a text query and multiple documents as input and return the top-most relevant documents and relevancy scores as output.`,widgetModels:[``],youtubeId:``},Bl={datasets:[{description:`A widely used dataset containing questions (with answers) about images.`,id:`Graphcore/vqa`},{description:`A dataset to benchmark visual reasoning based on text in images.`,id:`facebook/textvqa`}],demo:{inputs:[{filename:`elephant.jpeg`,type:`img`},{label:`Question`,content:`What is in this image?`,type:`text`}],outputs:[{type:`chart`,data:[{label:`elephant`,score:.97},{label:`elephants`,score:.06},{label:`animal`,score:.003}]}]},isPlaceholder:!1,metrics:[{description:``,id:`accuracy`},{description:`Measures how much a predicted answer differs from the ground truth based on the difference in their semantic meaning.`,id:`wu-palmer similarity`}],models:[{description:`A visual question answering model trained to convert charts and plots to text.`,id:`google/deplot`},{description:`A visual question answering model trained for mathematical reasoning and chart derendering from images.`,id:`google/matcha-base`},{description:`A strong visual question answering that answers questions from book covers.`,id:`google/pix2struct-ocrvqa-large`}],spaces:[{description:`An application that compares visual question answering models across different tasks.`,id:`merve/pix2struct`},{description:`An application that can answer questions based on images.`,id:`nielsr/vilt-vqa`},{description:`An application that can caption images and answer questions about a given image. `,id:`Salesforce/BLIP`},{description:`An application that can caption images and answer questions about a given image. `,id:`vumichien/Img2Prompt`}],summary:`Visual Question Answering is the task of answering open-ended questions based on an image. They output natural language responses to natural language questions.`,widgetModels:[`dandelin/vilt-b32-finetuned-vqa`],youtubeId:``},Vl={datasets:[{description:`A widely used dataset used to benchmark multiple variants of text classification.`,id:`nyu-mll/glue`},{description:`The Multi-Genre Natural Language Inference (MultiNLI) corpus is a crowd-sourced collection of 433k sentence pairs annotated with textual entailment information.`,id:`nyu-mll/multi_nli`},{description:`FEVER is a publicly available dataset for fact extraction and verification against textual sources.`,id:`fever/fever`}],demo:{inputs:[{label:`Text Input`,content:`Dune is the best movie ever.`,type:`text`},{label:`Candidate Labels`,content:`CINEMA, ART, MUSIC`,type:`text`}],outputs:[{type:`chart`,data:[{label:`CINEMA`,score:.9},{label:`ART`,score:.1},{label:`MUSIC`,score:0}]}]},metrics:[],models:[{description:`Powerful zero-shot text classification model.`,id:`facebook/bart-large-mnli`},{description:`Cutting-edge zero-shot multilingual text classification model.`,id:`MoritzLaurer/ModernBERT-large-zeroshot-v2.0`},{description:`Zero-shot text classification model that can be used for topic and sentiment classification.`,id:`knowledgator/gliclass-modern-base-v2.0-init`}],spaces:[],summary:`Zero-shot text classification is a task in natural language processing where a model is trained on a set of labeled examples but is then able to classify new examples from previously unseen classes.`,widgetModels:[`facebook/bart-large-mnli`]},Hl={datasets:[{description:``,id:``}],demo:{inputs:[{filename:`image-classification-input.jpeg`,type:`img`},{label:`Classes`,content:`cat, dog, bird`,type:`text`}],outputs:[{type:`chart`,data:[{label:`Cat`,score:.664},{label:`Dog`,score:.329},{label:`Bird`,score:.008}]}]},metrics:[{description:`Computes the number of times the correct label appears in top K labels predicted`,id:`top-K accuracy`}],models:[{description:`Multilingual image classification model for 80 languages.`,id:`visheratin/mexma-siglip`},{description:`Strong zero-shot image classification model.`,id:`google/siglip2-base-patch16-224`},{description:`Robust zero-shot image classification model.`,id:`intfloat/mmE5-mllama-11b-instruct`},{description:`Powerful zero-shot image classification model supporting 94 languages.`,id:`jinaai/jina-clip-v2`},{description:`Strong image classification model for biomedical domain.`,id:`microsoft/BiomedCLIP-PubMedBERT_256-vit_base_patch16_224`}],spaces:[{description:`An application that leverages zero-shot image classification to find best captions to generate an image. `,id:`pharma/CLIP-Interrogator`},{description:`An application to compare different zero-shot image classification models. `,id:`merve/compare_clip_siglip`}],summary:`Zero-shot image classification is the task of classifying previously unseen classes during training of a model.`,widgetModels:[`google/siglip-so400m-patch14-224`],youtubeId:``},Ul={datasets:[],demo:{inputs:[{filename:`zero-shot-object-detection-input.jpg`,type:`img`},{label:`Classes`,content:`cat, dog, bird`,type:`text`}],outputs:[{filename:`zero-shot-object-detection-output.jpg`,type:`img`}]},metrics:[{description:`The Average Precision (AP) metric is the Area Under the PR Curve (AUC-PR). It is calculated for each class separately`,id:`Average Precision`},{description:`The Mean Average Precision (mAP) metric is the overall average of the AP values`,id:`Mean Average Precision`},{description:`The APα metric is the Average Precision at the IoU threshold of a α value, for example, AP50 and AP75`,id:`APα`}],models:[{description:`Solid zero-shot object detection model.`,id:`openmmlab-community/mm_grounding_dino_large_all`},{description:`Cutting-edge zero-shot object detection model.`,id:`fushh7/LLMDet`}],spaces:[{description:`A demo to compare different zero-shot object detection models per output and latency.`,id:`ariG23498/zero-shot-od`},{description:`A demo that combines a zero-shot object detection and mask generation model for zero-shot segmentation.`,id:`merve/OWLSAM`}],summary:`Zero-shot object detection is a computer vision task to detect objects and their classes in images, without any prior training or knowledge of the classes. Zero-shot object detection models receive an image as input, as well as a list of candidate classes, and output the bounding boxes and labels where the objects have been detected.`,widgetModels:[],youtubeId:``},Wl={datasets:[{description:`A large dataset of over 10 million 3D objects.`,id:`allenai/objaverse-xl`},{description:`A dataset of isolated object images for evaluating image-to-3D models.`,id:`dylanebert/iso3d`}],demo:{inputs:[{filename:`image-to-3d-image-input.png`,type:`img`}],outputs:[{label:`Result`,content:`image-to-3d-3d-output-filename.glb`,type:`text`}]},metrics:[],models:[{description:`Fast image-to-3D mesh model by Tencent.`,id:`TencentARC/InstantMesh`},{description:`3D world generation model.`,id:`tencent/HunyuanWorld-1`},{description:`A scaled up image-to-3D mesh model derived from TripoSR.`,id:`hwjiang/Real3D`},{description:`Consistent image-to-3d generation model.`,id:`stabilityai/stable-point-aware-3d`}],spaces:[{description:`Leaderboard to evaluate image-to-3D models.`,id:`dylanebert/3d-arena`},{description:`Image-to-3D demo with mesh outputs.`,id:`TencentARC/InstantMesh`},{description:`Image-to-3D demo.`,id:`stabilityai/stable-point-aware-3d`},{description:`Image-to-3D demo with mesh outputs.`,id:`hwjiang/Real3D`},{description:`Image-to-3D demo with splat outputs.`,id:`dylanebert/LGM-mini`}],summary:`Image-to-3D models take in image input and produce 3D output.`,widgetModels:[],youtubeId:``},Gl={datasets:[{description:`A large dataset of over 10 million 3D objects.`,id:`allenai/objaverse-xl`},{description:`Descriptive captions for 3D objects in Objaverse.`,id:`tiange/Cap3D`}],demo:{inputs:[{label:`Prompt`,content:`a cat statue`,type:`text`}],outputs:[{label:`Result`,content:`text-to-3d-3d-output-filename.glb`,type:`text`}]},metrics:[],models:[{description:`Text-to-3D mesh model by OpenAI`,id:`openai/shap-e`},{description:`Generative 3D gaussian splatting model.`,id:`ashawkey/LGM`}],spaces:[{description:`Text-to-3D demo with mesh outputs.`,id:`hysts/Shap-E`},{description:`Text/image-to-3D demo with splat outputs.`,id:`ashawkey/LGM`}],summary:`Text-to-3D models take in text input and produce 3D output.`,widgetModels:[],youtubeId:``},Kl={datasets:[{description:`A dataset of hand keypoints of over 500k examples.`,id:`Vincent-luo/hagrid-mediapipe-hands`}],demo:{inputs:[{filename:`keypoint-detection-input.png`,type:`img`}],outputs:[{filename:`keypoint-detection-output.png`,type:`img`}]},metrics:[],models:[{description:`A robust keypoint detection model.`,id:`magic-leap-community/superpoint`},{description:`A robust keypoint matching model.`,id:`magic-leap-community/superglue_outdoor`},{description:`Strong keypoint detection model used to detect human pose.`,id:`qualcomm/RTMPose-Body2d`},{description:`Powerful keypoint matching model.`,id:`ETH-CVG/lightglue_disk`}],spaces:[{description:`An application that detects hand keypoints in real-time.`,id:`datasciencedojo/Hand-Keypoint-Detection-Realtime`},{description:`An application for keypoint detection and matching.`,id:`ETH-CVG/LightGlue`}],summary:`Keypoint detection is the task of identifying meaningful distinctive points or features in an image.`,widgetModels:[],youtubeId:``},ql={datasets:[{description:`Multiple-choice questions and answers about videos.`,id:`lmms-lab/Video-MME`},{description:`A dataset of instructions and question-answer pairs about videos.`,id:`lmms-lab/VideoChatGPT`},{description:`Large video understanding dataset.`,id:`HuggingFaceFV/finevideo`}],demo:{inputs:[{filename:`video-text-to-text-input.gif`,type:`img`},{label:`Text Prompt`,content:`What is happening in this video?`,type:`text`}],outputs:[{label:`Answer`,content:`The video shows a series of images showing a fountain with water jets and a variety of colorful flowers and butterflies in the background.`,type:`text`}]},metrics:[],models:[{description:`A robust video-text-to-text model.`,id:`Vision-CAIR/LongVU_Qwen2_7B`},{description:`Strong video-text-to-text model with reasoning capabilities.`,id:`GoodiesHere/Apollo-LMMs-Apollo-7B-t32`},{description:`Strong video-text-to-text model.`,id:`HuggingFaceTB/SmolVLM2-2.2B-Instruct`}],spaces:[{description:`An application to chat with a video-text-to-text model.`,id:`llava-hf/video-llava`},{description:`A leaderboard for various video-text-to-text models.`,id:`opencompass/openvlm_video_leaderboard`},{description:`An application to generate highlights from a video.`,id:`HuggingFaceTB/SmolVLM2-HighlightGenerator`}],summary:`Video-text-to-text models take in a video and a text prompt and output text. These models are also called video-language models.`,widgetModels:[``],youtubeId:``},Jl={datasets:[{description:`Dataset with detailed annotations for training and benchmarking video instance editing.`,id:`suimu/VIRESET`},{description:`Dataset to evaluate models on long video generation and understanding.`,id:`zhangsh2001/LongV-EVAL`},{description:`Collection of 104 demo videos from the SeedVR/SeedVR2 series showcasing model outputs.`,id:`Iceclear/SeedVR_VideoDemos`}],demo:{inputs:[{filename:`input.gif`,type:`img`}],outputs:[{filename:`output.gif`,type:`img`}]},metrics:[],models:[{description:`Model for editing outfits, character, and scenery in videos.`,id:`decart-ai/Lucy-Edit-Dev`},{description:`Framework that uses 3D mesh proxies for precise, consistent video editing.`,id:`LeoLau/Shape-for-Motion`},{description:`Model for generating physics-aware videos from input videos and control conditions.`,id:`nvidia/Cosmos-Transfer2.5-2B`},{description:`A model to upscale videos at input, designed for seamless use with ComfyUI.`,id:`numz/SeedVR2_comfyUI`}],spaces:[{description:`Interactive demo space for Lucy-Edit-Dev video editing.`,id:`decart-ai/lucy-edit-dev`},{description:`Demo space for SeedVR2-3B showcasing video upscaling and restoration.`,id:`ByteDance-Seed/SeedVR2-3B`}],summary:`Video-to-video models take one or more videos as input and generate new videos as output. They can enhance quality, interpolate frames, modify styles, or create new motion dynamics, enabling creative applications, video production, and research.`,widgetModels:[],youtubeId:``},Yl={"audio-classification":[`speechbrain`,`transformers`,`transformers.js`],"audio-to-audio":[`asteroid`,`fairseq`,`speechbrain`],"automatic-speech-recognition":[`espnet`,`nemo`,`speechbrain`,`transformers`,`transformers.js`],"audio-text-to-text":[`transformers`],"depth-estimation":[`transformers`,`transformers.js`],"document-question-answering":[`transformers`,`transformers.js`],"feature-extraction":[`sentence-transformers`,`transformers`,`transformers.js`],"fill-mask":[`transformers`,`transformers.js`],"graph-ml":[`transformers`],"image-classification":[`keras`,`timm`,`transformers`,`transformers.js`],"image-feature-extraction":[`timm`,`transformers`],"image-segmentation":[`transformers`,`transformers.js`],"image-text-to-text":[`transformers`],"image-text-to-image":[`diffusers`],"image-text-to-video":[`diffusers`],"image-to-image":[`diffusers`,`transformers`,`transformers.js`],"image-to-text":[`transformers`,`transformers.js`],"image-to-video":[`diffusers`],"keypoint-detection":[`transformers`],"video-classification":[`transformers`],"mask-generation":[`transformers`],"multiple-choice":[`transformers`],"object-detection":[`transformers`,`transformers.js`,`ultralytics`],other:[],"question-answering":[`adapter-transformers`,`allennlp`,`transformers`,`transformers.js`],robotics:[],"reinforcement-learning":[`transformers`,`stable-baselines3`,`ml-agents`,`sample-factory`],"sentence-similarity":[`sentence-transformers`,`spacy`,`transformers.js`],summarization:[`transformers`,`transformers.js`],"table-question-answering":[`transformers`],"table-to-text":[`transformers`],"tabular-classification":[`sklearn`],"tabular-regression":[`sklearn`],"tabular-to-text":[`transformers`],"text-classification":[`adapter-transformers`,`setfit`,`spacy`,`transformers`,`transformers.js`],"text-generation":[`transformers`,`transformers.js`],"text-ranking":[`sentence-transformers`,`transformers`],"text-retrieval":[],"text-to-image":[`diffusers`],"text-to-speech":[`espnet`,`tensorflowtts`,`transformers`,`transformers.js`],"text-to-audio":[`transformers`,`transformers.js`],"text-to-video":[`diffusers`],"time-series-forecasting":[],"token-classification":[`adapter-transformers`,`flair`,`spacy`,`span-marker`,`stanza`,`transformers`,`transformers.js`],translation:[`transformers`,`transformers.js`],"unconditional-image-generation":[`diffusers`],"video-text-to-text":[`transformers`],"visual-question-answering":[`transformers`,`transformers.js`],"voice-activity-detection":[],"zero-shot-classification":[`transformers`,`transformers.js`],"zero-shot-image-classification":[`transformers`,`transformers.js`],"zero-shot-object-detection":[`transformers`,`transformers.js`],"text-to-3d":[`diffusers`],"image-to-3d":[`diffusers`],"any-to-any":[`transformers`],"visual-document-retrieval":[`transformers`],"video-to-video":[`diffusers`]};function Q(e,t=xl){return{...t,id:e,label:$c[e].name,libraries:Yl[e]}}Q(`any-to-any`,tl),Q(`audio-classification`,nl),Q(`audio-to-audio`,il),Q(`audio-text-to-text`,rl),Q(`automatic-speech-recognition`,al),Q(`depth-estimation`,bl),Q(`document-question-answering`,ol),Q(`visual-document-retrieval`,zl),Q(`feature-extraction`,sl),Q(`fill-mask`,cl),Q(`image-classification`,ll),Q(`image-feature-extraction`,ul),Q(`image-segmentation`,gl),Q(`image-to-image`,dl),Q(`image-text-to-text`,pl),Q(`image-text-to-image`,ml),Q(`image-text-to-video`,hl),Q(`image-to-text`,fl),Q(`image-to-video`,_l),Q(`keypoint-detection`,Kl),Q(`mask-generation`,vl),Q(`object-detection`,yl),Q(`video-classification`,Rl),Q(`question-answering`,Cl),Q(`reinforcement-learning`,Sl),Q(`sentence-similarity`,wl),Q(`summarization`,Tl),Q(`table-question-answering`,El),Q(`tabular-classification`,Dl),Q(`tabular-regression`,Ol),Q(`text-classification`,Nl),Q(`text-generation`,Pl),Q(`text-ranking`,Fl),Q(`text-to-image`,kl),Q(`text-to-speech`,Al),Q(`text-to-video`,Il),Q(`token-classification`,jl),Q(`translation`,Ml),Q(`unconditional-image-generation`,Ll),Q(`video-text-to-text`,ql),Q(`video-to-video`,Jl),Q(`visual-question-answering`,Bl),Q(`zero-shot-classification`,Vl),Q(`zero-shot-image-classification`,Hl),Q(`zero-shot-object-detection`,Ul),Q(`text-to-3d`,Gl),Q(`image-to-3d`,Wl);var Xl=()=>`"Hi, I recently bought a device from your company but it is not working as advertised and I would like to get reimbursed!"`,Zl=()=>`"Меня зовут Вольфганг и я живу в Берлине"`,Ql=()=>`"The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct."`,$l=()=>`{
    "query": "How many stars does the transformers repository have?",
    "table": {
        "Repository": ["Transformers", "Datasets", "Tokenizers"],
        "Stars": ["36542", "4512", "3934"],
        "Contributors": ["651", "77", "34"],
        "Programming language": [
            "Python",
            "Python",
            "Rust, Python and NodeJS"
        ]
    }
}`,eu=()=>`{
        "image": "cat.png",
        "question": "What is in this image?"
    }`,tu=()=>`{
    "question": "What is my name?",
    "context": "My name is Clara and I live in Berkeley."
}`,nu=()=>`"I like you. I love you"`,ru=()=>`"My name is Sarah Jessica Parker but you can call me Jessica"`,iu=e=>e.tags.includes(`conversational`)?e.pipeline_tag===`text-generation`?[{role:`user`,content:`What is the capital of France?`}]:[{role:`user`,content:[{type:`text`,text:`Describe this image in one sentence.`},{type:`image_url`,image_url:{url:`https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg`}}]}]:`"Can you please let us know more details about your "`,au=e=>`"The answer to the universe is ${e.mask_token}."`,ou=()=>`{
    "source_sentence": "That is a happy person",
    "sentences": [
        "That is a happy dog",
        "That is a very happy person",
        "Today is a sunny day"
    ]
}`,su=()=>`"Today is a sunny day and I will get some ice cream."`,cu=()=>`"cats.jpg"`,lu=()=>`"cats.jpg"`,uu=()=>`{
    "image": "cat.png",
    "prompt": "Turn the cat into a tiger."
}`,du=()=>`{
    "image": "cat.png",
    "prompt": "The cat starts to dance"
}`,fu=()=>`{
    "image": "cat.png",
    "prompt": "Turn the cat into a tiger."
}`,pu=()=>`{
    "image": "cat.png",
    "prompt": "The cat starts to dance"
}`,mu=()=>`"cats.jpg"`,hu=()=>`"cats.jpg"`,gu=()=>`"sample1.flac"`,_u=()=>`"sample1.flac"`,vu=()=>`"Astronaut riding a horse"`,yu=()=>`"A young man walking on the street"`,bu=()=>`"The answer to the universe is 42"`,xu=()=>`"liquid drum and bass, atmospheric synths, airy sounds"`,Su=()=>`"sample1.flac"`,Cu=()=>`'{"Height":[11.52,12.48],"Length1":[23.2,24.0],"Length2":[25.4,26.3],"Species": ["Bream","Bream"]}'`,wu={"audio-to-audio":gu,"audio-classification":_u,"automatic-speech-recognition":Su,"document-question-answering":eu,"feature-extraction":su,"fill-mask":au,"image-classification":cu,"image-to-text":lu,"image-to-image":uu,"image-to-video":du,"image-text-to-image":fu,"image-text-to-video":pu,"image-segmentation":mu,"object-detection":hu,"question-answering":tu,"sentence-similarity":ou,summarization:Ql,"table-question-answering":$l,"tabular-regression":Cu,"tabular-classification":Cu,"text-classification":nu,"text-generation":iu,"image-text-to-text":iu,"text-to-image":vu,"text-to-video":yu,"text-to-speech":bu,"text-to-audio":xu,"token-classification":ru,translation:Zl,"zero-shot-classification":Xl,"zero-shot-image-classification":()=>`"cats.jpg"`};function Tu(e,t=!1,n=!1){if(e.pipeline_tag){let r=wu[e.pipeline_tag];if(r){let i=r(e);if(typeof i==`string`&&(t&&(i=i.replace(/(?:(?:\r?\n|\r)\t*)|\t+/g,` `)),n)){let e=i.match(/^"(.+)"$/s);i=e?e[1]:i}return i}}return`No input example has been defined for this model task.`}function Eu(e,t){let n=JSON.stringify(e,null,`	`);return t?.indent&&(n=n.replaceAll(`
`,`\n${t.indent}`)),t?.attributeKeyQuotes||(n=n.replace(/"([^"]+)":/g,`$1:`)),t?.customContentEscaper&&(n=t.customContentEscaper(n)),n}var Du=`custom_code`;function Ou(e){let t=e.split(`/`);return t.length===1?t[0]:t[1]}var ku=e=>JSON.stringify(e).slice(1,-1),Au=e=>[`from adapters import AutoAdapterModel

model = AutoAdapterModel.from_pretrained("${e.config?.adapter_transformers?.model_name}")
model.load_adapter("${e.id}", set_active=True)`],ju=e=>[`import allennlp_models
from allennlp.predictors.predictor import Predictor

predictor = Predictor.from_path("hf://${e.id}")`],Mu=e=>[`import allennlp_models
from allennlp.predictors.predictor import Predictor

predictor = Predictor.from_path("hf://${e.id}")
predictor_input = {"passage": "My name is Wolfgang and I live in Berlin", "question": "Where do I live?"}
predictions = predictor.predict_json(predictor_input)`],Nu=e=>e.tags.includes(`question-answering`)?Mu(e):ju(e),Pu=e=>[`from araclip import AraClip

model = AraClip.from_pretrained("${e.id}")`],Fu=e=>[`from asteroid.models import BaseModel

model = BaseModel.from_pretrained("${e.id}")`],Iu=e=>[`# Watermark Generator
from audioseal import AudioSeal

model = AudioSeal.load_generator("${e.id}")
# pass a tensor (tensor_wav) of shape (batch, channels, samples) and a sample rate
wav, sr = tensor_wav, 16000

watermark = model.get_watermark(wav, sr)
watermarked_audio = wav + watermark`,`# Watermark Detector
from audioseal import AudioSeal

detector = AudioSeal.load_detector("${e.id}")

result, message = detector.detect_watermark(watermarked_audio, sr)`];function Lu(e){return e.cardData?.base_model?.toString()??`fill-in-base-model`}function Ru(e){let t=e.widgetData?.[0]?.text??e.cardData?.instance_prompt;if(t)return ku(t)}var zu=e=>[`import requests
from PIL import Image
from ben2 import AutoModel

url = "https://huggingface.co/datasets/mishig/sample_images/resolve/main/teapot.jpg"
image = Image.open(requests.get(url, stream=True).raw)

model = AutoModel.from_pretrained("${e.id}")
model.to("cuda").eval()
foreground = model.inference(image)
`],Bu=e=>[`from bertopic import BERTopic

model = BERTopic.load("${e.id}")`],Vu=e=>[`from bm25s.hf import BM25HF

retriever = BM25HF.load_from_hub("${e.id}")`],Hu=()=>[`# pip install chatterbox-tts
import torchaudio as ta
from chatterbox.tts import ChatterboxTTS

model = ChatterboxTTS.from_pretrained(device="cuda")

text = "Ezreal and Jinx teamed up with Ahri, Yasuo, and Teemo to take down the enemy's Nexus in an epic late-game pentakill."
wav = model.generate(text)
ta.save("test-1.wav", wav, model.sr)

# If you want to synthesize with a different voice, specify the audio prompt
AUDIO_PROMPT_PATH="YOUR_FILE.wav"
wav = model.generate(text, audio_prompt_path=AUDIO_PROMPT_PATH)
ta.save("test-2.wav", wav, model.sr)`],Uu=e=>[`pip install chronos-forecasting`,`import pandas as pd
from chronos import BaseChronosPipeline

pipeline = BaseChronosPipeline.from_pretrained("${e.id}", device_map="cuda")

# Load historical data
context_df = pd.read_csv("https://autogluon.s3.us-west-2.amazonaws.com/datasets/timeseries/misc/AirPassengers.csv")

# Generate predictions
pred_df = pipeline.predict_df(
    context_df,
    prediction_length=36,  # Number of steps to forecast
    quantile_levels=[0.1, 0.5, 0.9],  # Quantiles for probabilistic forecast
    id_column="item_id",  # Column identifying different time series
    timestamp_column="Month",  # Column with datetime information
    target="#Passengers",  # Column(s) with time series values to predict
)`],Wu=e=>[`pip install colipri`,`from colipri import get_model
from colipri import get_processor
from colipri import load_sample_ct
from colipri import ZeroShotImageClassificationPipeline

model = get_model().cuda()
processor = get_processor()
pipeline = ZeroShotImageClassificationPipeline("${e.id}", processor)

image = load_sample_ct()

pipeline(image, ["No lung nodules", "Lung nodules"])
`],Gu=()=>[`pip install git+https://github.com/SAP-samples/sap-rpt-1-oss`,`# Run a classification task
from sklearn.datasets import load_breast_cancer
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split

from sap_rpt_oss import SAP_RPT_OSS_Classifier

# Load sample data
X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.5, random_state=42)

# Initialize a classifier, 8k context and 8-fold bagging gives best performance, reduce if running out of memory
clf = SAP_RPT_OSS_Classifier(max_context_size=8192, bagging=8)

clf.fit(X_train, y_train)

# Predict probabilities
prediction_probabilities = clf.predict_proba(X_test)
# Predict labels
predictions = clf.predict(X_test)
print("Accuracy", accuracy_score(y_test, predictions))`,`# Run a regression task
from sklearn.datasets import fetch_openml
from sklearn.metrics import r2_score
from sklearn.model_selection import train_test_split

from sap_rpt_oss import SAP_RPT_OSS_Regressor

# Load sample data
df = fetch_openml(data_id=531, as_frame=True)
X = df.data
y = df.target.astype(float)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.5, random_state=42)

# Initialize the regressor, 8k context and 8-fold bagging gives best performance, reduce if running out of memory
regressor = SAP_RPT_OSS_Regressor(max_context_size=8192, bagging=8)

regressor.fit(X_train, y_train)

# Predict on the test set
predictions = regressor.predict(X_test)

r2 = r2_score(y_test, predictions)
print("R² Score:", r2)`],Ku=()=>[`# pip install git+https://github.com/Google-Health/cxr-foundation.git#subdirectory=python

# Load image as grayscale (Stillwaterising, CC0, via Wikimedia Commons)
import requests
from PIL import Image
from io import BytesIO
image_url = "https://upload.wikimedia.org/wikipedia/commons/c/c8/Chest_Xray_PA_3-8-2010.png"
img = Image.open(requests.get(image_url, headers={'User-Agent': 'Demo'}, stream=True).raw).convert('L')

# Run inference
from clientside.clients import make_hugging_face_client
cxr_client = make_hugging_face_client('cxr_model')
print(cxr_client.get_image_embeddings_from_images([img]))`],qu=e=>{let t,n,r;return t=`<ENCODER>`,n=`<NUMBER_OF_FEATURES>`,r=`<OUT_CHANNELS>`,e.id===`depth-anything/Depth-Anything-V2-Small`?(t=`vits`,n=`64`,r=`[48, 96, 192, 384]`):e.id===`depth-anything/Depth-Anything-V2-Base`?(t=`vitb`,n=`128`,r=`[96, 192, 384, 768]`):e.id===`depth-anything/Depth-Anything-V2-Large`&&(t=`vitl`,n=`256`,r=`[256, 512, 1024, 1024`),[`
# Install from https://github.com/DepthAnything/Depth-Anything-V2

# Load the model and infer depth from an image
import cv2
import torch

from depth_anything_v2.dpt import DepthAnythingV2

# instantiate the model
model = DepthAnythingV2(encoder="${t}", features=${n}, out_channels=${r})

# load the weights
filepath = hf_hub_download(repo_id="${e.id}", filename="depth_anything_v2_${t}.pth", repo_type="model")
state_dict = torch.load(filepath, map_location="cpu")
model.load_state_dict(state_dict).eval()

raw_img = cv2.imread("your/image/path")
depth = model.infer_image(raw_img) # HxW raw depth map in numpy
    `]},Ju=e=>[`# Download checkpoint
pip install huggingface-hub
huggingface-cli download --local-dir checkpoints ${e.id}`,`import depth_pro

# Load model and preprocessing transform
model, transform = depth_pro.create_model_and_transforms()
model.eval()

# Load and preprocess an image.
image, _, f_px = depth_pro.load_rgb("example.png")
image = transform(image)

# Run inference.
prediction = model.infer(image, f_px=f_px)

# Results: 1. Depth in meters
depth = prediction["depth"]
# Results: 2. Focal length in pixels
focallength_px = prediction["focallength_px"]`],Yu=()=>[`from huggingface_hub import from_pretrained_keras
import tensorflow as tf, requests

# Load and format input
IMAGE_URL = "https://storage.googleapis.com/dx-scin-public-data/dataset/images/3445096909671059178.png"
input_tensor = tf.train.Example(
    features=tf.train.Features(
        feature={
            "image/encoded": tf.train.Feature(
                bytes_list=tf.train.BytesList(value=[requests.get(IMAGE_URL, stream=True).content])
            )
        }
    )
).SerializeToString()

# Load model and run inference
loaded_model = from_pretrained_keras("google/derm-foundation")
infer = loaded_model.signatures["serving_default"]
print(infer(inputs=tf.constant([input_tensor])))`],Xu=e=>[`import soundfile as sf
from dia.model import Dia

model = Dia.from_pretrained("${e.id}")
text = "[S1] Dia is an open weights text to dialogue model. [S2] You get full control over scripts and voices. [S1] Wow. Amazing. (laughs) [S2] Try it now on Git hub or Hugging Face."
output = model.generate(text)

sf.write("simple.mp3", output, 44100)`],Zu=e=>[`from dia2 import Dia2, GenerationConfig, SamplingConfig

dia = Dia2.from_repo("${e.id}", device="cuda", dtype="bfloat16")
config = GenerationConfig(
    cfg_scale=2.0,
    audio=SamplingConfig(temperature=0.8, top_k=50),
    use_cuda_graph=True,
)
result = dia.generate("[S1] Hello Dia2!", config=config, output_wav="hello.wav", verbose=True)
`],Qu=e=>[`# pip install git+https://github.com/NVlabs/describe-anything
from huggingface_hub import snapshot_download
from dam import DescribeAnythingModel

snapshot_download(${e.id}, local_dir="checkpoints")

dam = DescribeAnythingModel(
	model_path="checkpoints",
	conv_mode="v1",
	prompt_mode="focal_prompt",
)`],$u=`pip install -U diffusers transformers accelerate`,ed=`Astronaut in a jungle, cold color palette, muted colors, detailed, 8k`,td=`Turn this cat into a dog`,nd=`A man with short gray hair plays a red electric guitar.`,rd=e=>[`import torch
from diffusers import DiffusionPipeline

# switch to "mps" for apple devices
pipe = DiffusionPipeline.from_pretrained("${e.id}", dtype=torch.bfloat16, device_map="cuda")

prompt = "${Ru(e)??ed}"
image = pipe(prompt).images[0]`],id=e=>[`import torch
from diffusers import DiffusionPipeline
from diffusers.utils import load_image

# switch to "mps" for apple devices
pipe = DiffusionPipeline.from_pretrained("${e.id}", dtype=torch.bfloat16, device_map="cuda")

prompt = "${Ru(e)??td}"
input_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/cat.png")

image = pipe(image=input_image, prompt=prompt).images[0]`],ad=e=>[`import torch
from diffusers import DiffusionPipeline
from diffusers.utils import load_image, export_to_video

# switch to "mps" for apple devices
pipe = DiffusionPipeline.from_pretrained("${e.id}", dtype=torch.bfloat16, device_map="cuda")
pipe.to("cuda")

prompt = "${Ru(e)??nd}"
image = load_image(
    "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/guitar-man.png"
)

output = pipe(image=image, prompt=prompt).frames[0]
export_to_video(output, "output.mp4")`],od=e=>[`from diffusers import ControlNetModel, StableDiffusionControlNetPipeline

controlnet = ControlNetModel.from_pretrained("${e.id}")
pipe = StableDiffusionControlNetPipeline.from_pretrained(
	"${Lu(e)}", controlnet=controlnet
)`],sd=e=>[`import torch
from diffusers import DiffusionPipeline

# switch to "mps" for apple devices
pipe = DiffusionPipeline.from_pretrained("${Lu(e)}", dtype=torch.bfloat16, device_map="cuda")
pipe.load_lora_weights("${e.id}")

prompt = "${Ru(e)??ed}"
image = pipe(prompt).images[0]`],cd=e=>[`import torch
from diffusers import DiffusionPipeline
from diffusers.utils import load_image

# switch to "mps" for apple devices
pipe = DiffusionPipeline.from_pretrained("${Lu(e)}", dtype=torch.bfloat16, device_map="cuda")
pipe.load_lora_weights("${e.id}")

prompt = "${Ru(e)??td}"
input_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/cat.png")

image = pipe(image=input_image, prompt=prompt).images[0]`],ld=e=>[`import torch
from diffusers import DiffusionPipeline
from diffusers.utils import export_to_video

# switch to "mps" for apple devices
pipe = DiffusionPipeline.from_pretrained("${Lu(e)}", dtype=torch.bfloat16, device_map="cuda")
pipe.load_lora_weights("${e.id}")

prompt = "${Ru(e)??nd}"

output = pipe(prompt=prompt).frames[0]
export_to_video(output, "output.mp4")`],ud=e=>[`import torch
from diffusers import DiffusionPipeline
from diffusers.utils import load_image, export_to_video

# switch to "mps" for apple devices
pipe = DiffusionPipeline.from_pretrained("${Lu(e)}", dtype=torch.bfloat16, device_map="cuda")
pipe.load_lora_weights("${e.id}")

prompt = "${Ru(e)??nd}"
input_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/guitar-man.png")

image = pipe(image=input_image, prompt=prompt).frames[0]
export_to_video(output, "output.mp4")`],dd=e=>[`import torch
from diffusers import DiffusionPipeline

# switch to "mps" for apple devices
pipe = DiffusionPipeline.from_pretrained("${Lu(e)}", dtype=torch.bfloat16, device_map="cuda")
pipe.load_textual_inversion("${e.id}")`],fd=e=>[`import torch
from diffusers import FluxFillPipeline
from diffusers.utils import load_image

image = load_image("https://huggingface.co/datasets/diffusers/diffusers-images-docs/resolve/main/cup.png")
mask = load_image("https://huggingface.co/datasets/diffusers/diffusers-images-docs/resolve/main/cup_mask.png")

# switch to "mps" for apple devices
pipe = FluxFillPipeline.from_pretrained("${e.id}", dtype=torch.bfloat16, device_map="cuda")
image = pipe(
    prompt="a white paper cup",
    image=image,
    mask_image=mask,
    height=1632,
    width=1232,
    guidance_scale=30,
    num_inference_steps=50,
    max_sequence_length=512,
    generator=torch.Generator("cpu").manual_seed(0)
).images[0]
image.save(f"flux-fill-dev.png")`],pd=e=>[`import torch
from diffusers import AutoPipelineForInpainting
from diffusers.utils import load_image

# switch to "mps" for apple devices
pipe = AutoPipelineForInpainting.from_pretrained("${e.id}", dtype=torch.float16, variant="fp16", device_map="cuda")

img_url = "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png"
mask_url = "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png"

image = load_image(img_url).resize((1024, 1024))
mask_image = load_image(mask_url).resize((1024, 1024))

prompt = "a tiger sitting on a park bench"
generator = torch.Generator(device="cuda").manual_seed(0)

image = pipe(
  prompt=prompt,
  image=image,
  mask_image=mask_image,
  guidance_scale=8.0,
  num_inference_steps=20,  # steps between 15 and 30 work well for us
  strength=0.99,  # make sure to use \`strength\` below 1.0
  generator=generator,
).images[0]`],md=e=>{let t;return t=e.tags.includes(`StableDiffusionInpaintPipeline`)||e.tags.includes(`StableDiffusionXLInpaintPipeline`)?pd(e):e.tags.includes(`controlnet`)?od(e):e.tags.includes(`lora`)?e.pipeline_tag===`image-to-image`?cd(e):e.pipeline_tag===`image-to-video`?ud(e):e.pipeline_tag===`text-to-video`?ld(e):sd(e):e.tags.includes(`textual_inversion`)?dd(e):e.tags.includes(`FluxFillPipeline`)?fd(e):e.pipeline_tag===`image-to-video`?ad(e):e.pipeline_tag===`image-to-image`?id(e):rd(e),[$u,...t]},hd=e=>{let t=`# Pipeline for Stable Diffusion 3
from diffusionkit.mlx import DiffusionPipeline

pipeline = DiffusionPipeline(
	shift=3.0,
	use_t5=False,
	model_version=${e.id},
	low_memory_mode=True,
	a16=True,
	w16=True,
)`,n=`# Pipeline for Flux
from diffusionkit.mlx import FluxPipeline

pipeline = FluxPipeline(
  shift=1.0,
  model_version=${e.id},
  low_memory_mode=True,
  a16=True,
  w16=True,
)`,r=`# Image Generation
HEIGHT = 512
WIDTH = 512
NUM_STEPS = ${e.tags.includes(`flux`)?4:50}
CFG_WEIGHT = ${e.tags.includes(`flux`)?0:5}

image, _ = pipeline.generate_image(
  "a photo of a cat",
  cfg_weight=CFG_WEIGHT,
  num_steps=NUM_STEPS,
  latent_size=(HEIGHT // 8, WIDTH // 8),
)`;return[e.tags.includes(`flux`)?n:t,r]},gd=e=>[`# pip install --no-binary :all: cartesia-pytorch
from cartesia_pytorch import ReneLMHeadModel
from transformers import AutoTokenizer

model = ReneLMHeadModel.from_pretrained("${e.id}")
tokenizer = AutoTokenizer.from_pretrained("allenai/OLMo-1B-hf")

in_message = ["Rene Descartes was"]
inputs = tokenizer(in_message, return_tensors="pt")

outputs = model.generate(inputs.input_ids, max_length=50, top_k=100, top_p=0.99)
out_message = tokenizer.batch_decode(outputs, skip_special_tokens=True)[0]

print(out_message)
)`],_d=e=>[`import mlx.core as mx
import cartesia_mlx as cmx

model = cmx.from_pretrained("${e.id}")
model.set_dtype(mx.float32)

prompt = "Rene Descartes was"

for text in model.generate(
    prompt,
    max_tokens=500,
    eval_every_n=5,
    verbose=True,
    top_p=0.99,
    temperature=0.85,
):
    print(text, end="", flush=True)
`],vd=e=>{let t=Ou(e.id).replaceAll(`-`,`_`);return[`# Load it from the Hub directly
import edsnlp
nlp = edsnlp.load("${e.id}")
`,`# Or install it as a package
!pip install git+https://huggingface.co/${e.id}

# and import it as a module
import ${t}

nlp = ${t}.load()  # or edsnlp.load("${t}")
`]},yd=e=>[`from espnet2.bin.tts_inference import Text2Speech

model = Text2Speech.from_pretrained("${e.id}")

speech, *_ = model("text to generate speech from")`],bd=e=>[`from espnet2.bin.asr_inference import Speech2Text

model = Speech2Text.from_pretrained(
  "${e.id}"
)

speech, rate = soundfile.read("speech.wav")
text, *_ = model(speech)[0]`],xd=()=>[`unknown model type (must be text-to-speech or automatic-speech-recognition)`],Sd=e=>e.tags.includes(`text-to-speech`)?yd(e):e.tags.includes(`automatic-speech-recognition`)?bd(e):xd(),Cd=e=>[`from fairseq.checkpoint_utils import load_model_ensemble_and_task_from_hf_hub

models, cfg, task = load_model_ensemble_and_task_from_hf_hub(
    "${e.id}"
)`],wd=e=>[`from flair.models import SequenceTagger

tagger = SequenceTagger.load("${e.id}")`],Td=e=>[`from gliner import GLiNER

model = GLiNER.from_pretrained("${e.id}")`],Ed=e=>[`from gliner2 import GLiNER2

model = GLiNER2.from_pretrained("${e.id}")

# Extract entities
text = "Apple CEO Tim Cook announced iPhone 15 in Cupertino yesterday."
result = extractor.extract_entities(text, ["company", "person", "product", "location"])

print(result)`],Dd=e=>[`# Download model
from huggingface_hub import snapshot_download

snapshot_download(${e.id}, local_dir="checkpoints")

from indextts.infer import IndexTTS

# Ensure config.yaml is present in the checkpoints directory
tts = IndexTTS(model_dir="checkpoints", cfg_path="checkpoints/config.yaml")

voice = "path/to/your/reference_voice.wav"  # Path to the voice reference audio file
text = "Hello, how are you?"
output_path = "output_index.wav"

tts.infer(voice, text, output_path)`],Od=e=>[`# CLI usage
# see docs: https://ai-riksarkivet.github.io/htrflow/latest/getting_started/quick_start.html
htrflow pipeline <path/to/pipeline.yaml> <path/to/image>`,`# Python usage
from htrflow.pipeline.pipeline import Pipeline
from htrflow.pipeline.steps import Task
from htrflow.models.framework.model import ModelClass

pipeline = Pipeline(
    [
        Task(
            ModelClass, {"model": "${e.id}"}, {}
        ),
    ])`],kd=e=>[`# Available backend options are: "jax", "torch", "tensorflow".
import os
os.environ["KERAS_BACKEND"] = "jax"

import keras

model = keras.saving.load_model("hf://${e.id}")
`],Ad={CausalLM:e=>`
import keras_hub

# Load CausalLM model (optional: use half precision for inference)
causal_lm = keras_hub.models.CausalLM.from_preset("hf://${e}", dtype="bfloat16")
causal_lm.compile(sampler="greedy")  # (optional) specify a sampler

# Generate text
causal_lm.generate("Keras: deep learning for", max_length=64)
`,TextToImage:e=>`
import keras_hub

# Load TextToImage model (optional: use half precision for inference)
text_to_image = keras_hub.models.TextToImage.from_preset("hf://${e}", dtype="bfloat16")

# Generate images with a TextToImage model.
text_to_image.generate("Astronaut in a jungle")
`,TextClassifier:e=>`
import keras_hub

# Load TextClassifier model
text_classifier = keras_hub.models.TextClassifier.from_preset(
    "hf://${e}",
    num_classes=2,
)
# Fine-tune
text_classifier.fit(x=["Thilling adventure!", "Total snoozefest."], y=[1, 0])
# Classify text
text_classifier.predict(["Not my cup of tea."])
`,ImageClassifier:e=>`
import keras_hub
import keras

# Load ImageClassifier model
image_classifier = keras_hub.models.ImageClassifier.from_preset(
    "hf://${e}",
    num_classes=2,
)
# Fine-tune
image_classifier.fit(
    x=keras.random.randint((32, 64, 64, 3), 0, 256),
    y=keras.random.randint((32, 1), 0, 2),
)
# Classify image
image_classifier.predict(keras.random.randint((1, 64, 64, 3), 0, 256))
`},jd=(e,t)=>`
import keras_hub

# Create a ${e} model
task = keras_hub.models.${e}.from_preset("hf://${t}")
`,Md=e=>`
import keras_hub

# Create a Backbone model unspecialized for any task
backbone = keras_hub.models.Backbone.from_preset("hf://${e}")
`,Nd=e=>{let t=e.id,n=e.config?.keras_hub?.tasks??[],r=[];for(let[e,i]of Object.entries(Ad))n.includes(e)&&r.push(i(t));for(let e of n)Object.keys(Ad).includes(e)||r.push(jd(e,t));return r.push(Md(t)),r},Pd=e=>[`# !pip install kernels

from kernels import get_kernel

kernel = get_kernel("${e.id}")`],Fd=e=>[`# Example usage for KimiAudio
# pip install git+https://github.com/MoonshotAI/Kimi-Audio.git

from kimia_infer.api.kimia import KimiAudio

model = KimiAudio(model_path="${e.id}", load_detokenizer=True)

sampling_params = {
    "audio_temperature": 0.8,
    "audio_top_k": 10,
    "text_temperature": 0.0,
    "text_top_k": 5,
}

# For ASR
asr_audio = "asr_example.wav"
messages_asr = [
    {"role": "user", "message_type": "text", "content": "Please transcribe the following audio:"},
    {"role": "user", "message_type": "audio", "content": asr_audio}
]
_, text = model.generate(messages_asr, **sampling_params, output_type="text")
print(text)

# For Q&A
qa_audio = "qa_example.wav"
messages_conv = [{"role": "user", "message_type": "audio", "content": qa_audio}]
wav, text = model.generate(messages_conv, **sampling_params, output_type="both")
sf.write("output_audio.wav", wav.cpu().view(-1).numpy(), 24000)
print(text)
`],Id=e=>[`from kittentts import KittenTTS
m = KittenTTS("${e.id}")

audio = m.generate("This high quality TTS model works without a GPU")

# Save the audio
import soundfile as sf
sf.write('output.wav', audio, 24000)`],Ld=e=>e.tags.includes(`bi-encoder`)?[`#install from https://github.com/webis-de/lightning-ir

from lightning_ir import BiEncoderModule
model = BiEncoderModule("${e.id}")

model.score("query", ["doc1", "doc2", "doc3"])`]:e.tags.includes(`cross-encoder`)?[`#install from https://github.com/webis-de/lightning-ir

from lightning_ir import CrossEncoderModule
model = CrossEncoderModule("${e.id}")

model.score("query", ["doc1", "doc2", "doc3"])`]:[`#install from https://github.com/webis-de/lightning-ir

from lightning_ir import BiEncoderModule, CrossEncoderModule

# depending on the model type, use either BiEncoderModule or CrossEncoderModule
model = BiEncoderModule("${e.id}")
# model = CrossEncoderModule("${e.id}")

model.score("query", ["doc1", "doc2", "doc3"])`],Rd=e=>{let t=[`# !pip install llama-cpp-python

from llama_cpp import Llama

llm = Llama.from_pretrained(
	repo_id="${e.id}",
	filename="{{GGUF_FILE}}",
)
`];if(e.tags.includes(`conversational`)){let n=Tu(e);t.push(`llm.create_chat_completion(
	messages = ${Eu(n,{attributeKeyQuotes:!0,indent:`	`})}
)`)}else t.push(`output = llm(
	"Once upon a time,",
	max_tokens=512,
	echo=True
)
print(output)`);return t},zd=e=>{if(e.tags.includes(`smolvla`)){let t=[`# See https://github.com/huggingface/lerobot?tab=readme-ov-file#installation for more details
git clone https://github.com/huggingface/lerobot.git
cd lerobot
pip install -e .[smolvla]`,`# Launch finetuning on your dataset
python lerobot/scripts/train.py \\
--policy.path=${e.id} \\
--dataset.repo_id=lerobot/svla_so101_pickplace \\
--batch_size=64 \\
--steps=20000 \\
--output_dir=outputs/train/my_smolvla \\
--job_name=my_smolvla_training \\
--policy.device=cuda \\
--wandb.enable=true`];return e.id!==`lerobot/smolvla_base`&&t.push(`# Run the policy using the record function
python -m lerobot.record \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\ # <- Use your port
  --robot.id=my_blue_follower_arm \\ # <- Use your robot id
  --robot.cameras="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30}}" \\ # <- Use your cameras
  --dataset.single_task="Grasp a lego block and put it in the bin." \\ # <- Use the same task description you used in your dataset recording
  --dataset.repo_id=HF_USER/dataset_name \\  # <- This will be the dataset name on HF Hub
  --dataset.episode_time_s=50 \\
  --dataset.num_episodes=10 \\
  --policy.path=${e.id}`),t}return[]},Bd=e=>[`# Note: 'keras<3.x' or 'tf_keras' must be installed (legacy)
# See https://github.com/keras-team/tf-keras for more details.
from huggingface_hub import from_pretrained_keras

model = from_pretrained_keras("${e.id}")
`],Vd=e=>[`from mamba_ssm import MambaLMHeadModel

model = MambaLMHeadModel.from_pretrained("${e.id}")`],Hd=e=>[`# Install from https://github.com/Camb-ai/MARS5-TTS

from inference import Mars5TTS
mars5 = Mars5TTS.from_pretrained("${e.id}")`],Ud=e=>[`# Install from https://github.com/pq-yang/MatAnyone.git

from matanyone.model.matanyone import MatAnyone
model = MatAnyone.from_pretrained("${e.id}")`,`
from matanyone import InferenceCore
processor = InferenceCore("${e.id}")`],Wd=()=>[`# Install from https://github.com/buaacyw/MeshAnything.git

from MeshAnything.models.meshanything import MeshAnything

# refer to https://github.com/buaacyw/MeshAnything/blob/main/main.py#L91 on how to define args
# and https://github.com/buaacyw/MeshAnything/blob/main/app.py regarding usage
model = MeshAnything(args)`],Gd=e=>[`import open_clip

model, preprocess_train, preprocess_val = open_clip.create_model_and_transforms('hf-hub:${e.id}')
tokenizer = open_clip.get_tokenizer('hf-hub:${e.id}')`],Kd=e=>{if(e.config?.architectures?.[0]){let t=e.config.architectures[0];return[[`from paddlenlp.transformers import AutoTokenizer, ${t}`,``,`tokenizer = AutoTokenizer.from_pretrained("${e.id}", from_hf_hub=True)`,`model = ${t}.from_pretrained("${e.id}", from_hf_hub=True)`].join(`
`)]}else return[[`# ⚠️ Type of model unknown`,`from paddlenlp.transformers import AutoTokenizer, AutoModel`,``,`tokenizer = AutoTokenizer.from_pretrained("${e.id}", from_hf_hub=True)`,`model = AutoModel.from_pretrained("${e.id}", from_hf_hub=True)`].join(`
`)]},qd=e=>{let t={textline_detection:{className:`TextDetection`},textline_recognition:{className:`TextRecognition`},seal_text_detection:{className:`SealTextDetection`},doc_img_unwarping:{className:`TextImageUnwarping`},doc_img_orientation_classification:{className:`DocImgOrientationClassification`},textline_orientation_classification:{className:`TextLineOrientationClassification`},chart_parsing:{className:`ChartParsing`},formula_recognition:{className:`FormulaRecognition`},layout_detection:{className:`LayoutDetection`},table_cells_detection:{className:`TableCellsDetection`},wired_table_classification:{className:`TableClassification`},table_structure_recognition:{className:`TableStructureRecognition`}};if(e.tags.includes(`doc_vlm`))return[`# 1. See https://www.paddlepaddle.org.cn/en/install to install paddlepaddle
# 2. pip install paddleocr

from paddleocr import DocVLM
model = DocVLM(model_name="${Ou(e.id)}")
output = model.predict(
    input={"image": "path/to/image.png", "query": "Parsing this image and output the content in Markdown format."},
    batch_size=1
)
for res in output:
    res.print()
    res.save_to_json(save_path="./output/res.json")`];if(e.tags.includes(`document-parse`)){let t=e.id.replace(`PaddlePaddle/PaddleOCR-VL-`,`v`);return[`# See https://www.paddleocr.ai/latest/version3.x/pipeline_usage/PaddleOCR-VL.html to installation

from paddleocr import PaddleOCRVL
pipeline = PaddleOCRVL(pipeline_version="${t===`PaddlePaddle/PaddleOCR-VL`?`v1`:t}")
output = pipeline.predict("path/to/document_image.png")
for res in output:
	res.print()
	res.save_to_json(save_path="output")
	res.save_to_markdown(save_path="output")`]}for(let n of e.tags)if(n in t){let{className:r}=t[n];return[`# 1. See https://www.paddlepaddle.org.cn/en/install to install paddlepaddle
# 2. pip install paddleocr

from paddleocr import ${r}
model = ${r}(model_name="${Ou(e.id)}")
output = model.predict(input="path/to/image.png", batch_size=1)
for res in output:
    res.print()
    res.save_to_img(save_path="./output/")
    res.save_to_json(save_path="./output/res.json")`]}return[`# Please refer to the document for information on how to use the model.
# https://paddlepaddle.github.io/PaddleOCR/latest/en/version3.x/module_usage/module_overview.html`]},Jd=e=>{let t=`# Use PE-Core models as CLIP models
import core.vision_encoder.pe as pe

model = pe.CLIP.from_config("${e.id}", pretrained=True)`,n=`# Use any PE model as a vision encoder
import core.vision_encoder.pe as pe

model = pe.VisionTransformer.from_config("${e.id}", pretrained=True)`;return e.id.includes(`Core`)?[t,n]:[n]},Yd=e=>[`from huggingface_hub import snapshot_download
from phantom_wan import WANI2V, configs

checkpoint_dir = snapshot_download("${e.id}")
wan_i2v = WanI2V(
            config=configs.WAN_CONFIGS['i2v-14B'],
            checkpoint_dir=checkpoint_dir,
        )
 video = wan_i2v.generate(text_prompt, image_prompt)`],Xd=e=>[`from pocket_tts import TTSModel
import scipy.io.wavfile

tts_model = TTSModel.load_model("${e.id}")
voice_state = tts_model.get_state_for_audio_prompt(
    "hf://kyutai/tts-voices/alba-mackenna/casual.wav"
)
audio = tts_model.generate_audio(voice_state, "Hello world, this is a test.")
# Audio is a 1D torch tensor containing PCM data.
scipy.io.wavfile.write("output.wav", tts_model.sample_rate, audio.numpy())`],Zd=e=>[`from pyannote.audio import Pipeline

pipeline = Pipeline.from_pretrained("${e.id}")

# inference on the whole file
pipeline("file.wav")

# inference on an excerpt
from pyannote.core import Segment
excerpt = Segment(start=2.0, end=5.0)

from pyannote.audio import Audio
waveform, sample_rate = Audio().crop("file.wav", excerpt)
pipeline({"waveform": waveform, "sample_rate": sample_rate})`],Qd=e=>[`from pyannote.audio import Model, Inference

model = Model.from_pretrained("${e.id}")
inference = Inference(model)

# inference on the whole file
inference("file.wav")

# inference on an excerpt
from pyannote.core import Segment
excerpt = Segment(start=2.0, end=5.0)
inference.crop("file.wav", excerpt)`],$d=e=>e.tags.includes(`pyannote-audio-pipeline`)?Zd(e):Qd(e),ef=e=>[`from relik import Relik

relik = Relik.from_pretrained("${e.id}")`],tf=e=>[`# Install from https://github.com/microsoft/renderformer

from renderformer import RenderFormerRenderingPipeline
pipeline = RenderFormerRenderingPipeline.from_pretrained("${e.id}")`],nf=e=>[`from tensorflow_tts.inference import AutoProcessor, TFAutoModel

processor = AutoProcessor.from_pretrained("${e.id}")
model = TFAutoModel.from_pretrained("${e.id}")
`],rf=e=>[`from tensorflow_tts.inference import TFAutoModel

model = TFAutoModel.from_pretrained("${e.id}")
audios = model.inference(mels)
`],af=e=>[`from tensorflow_tts.inference import TFAutoModel

model = TFAutoModel.from_pretrained("${e.id}")
`],of=e=>e.tags.includes(`text-to-mel`)?nf(e):e.tags.includes(`mel-to-wav`)?rf(e):af(e),sf=e=>[`import timm

model = timm.create_model("hf_hub:${e.id}", pretrained=True)`],cf=()=>[`# pip install sae-lens
from sae_lens import SAE

sae, cfg_dict, sparsity = SAE.from_pretrained(
    release = "RELEASE_ID", # e.g., "gpt2-small-res-jb". See other options in https://github.com/jbloomAus/SAELens/blob/main/sae_lens/pretrained_saes.yaml
    sae_id = "SAE_ID", # e.g., "blocks.8.hook_resid_pre". Won't always be a hook point
)`],lf=()=>[`# seed_story_cfg_path refers to 'https://github.com/TencentARC/SEED-Story/blob/master/configs/clm_models/agent_7b_sft.yaml'
# llm_cfg_path refers to 'https://github.com/TencentARC/SEED-Story/blob/master/configs/clm_models/llama2chat7b_lora.yaml'
from omegaconf import OmegaConf
import hydra

# load Llama2
llm_cfg = OmegaConf.load(llm_cfg_path)
llm = hydra.utils.instantiate(llm_cfg, torch_dtype="fp16")

# initialize seed_story
seed_story_cfg = OmegaConf.load(seed_story_cfg_path)
seed_story = hydra.utils.instantiate(seed_story_cfg, llm=llm) `],uf=(e,t)=>[`import joblib
from skops.hub_utils import download
download("${e.id}", "path_to_folder")
model = joblib.load(
	"${t}"
)
# only load pickle files from sources you trust
# read more about it here https://skops.readthedocs.io/en/stable/persistence.html`],df=(e,t)=>[`from skops.hub_utils import download
from skops.io import load
download("${e.id}", "path_to_folder")
# make sure model file is in skops format
# if model is a pickle file, make sure it's from a source you trust
model = load("path_to_folder/${t}")`],ff=e=>[`from huggingface_hub import hf_hub_download
import joblib
model = joblib.load(
	hf_hub_download("${e.id}", "sklearn_model.joblib")
)
# only load pickle files from sources you trust
# read more about it here https://skops.readthedocs.io/en/stable/persistence.html`],pf=e=>{if(e.tags.includes(`skops`)){let t=e.config?.sklearn?.model?.file,n=e.config?.sklearn?.model_format;return t?n===`pickle`?uf(e,t):df(e,t):[`# ⚠️ Model filename not specified in config.json`]}else return ff(e)},mf=e=>[`import torch
import torchaudio
from einops import rearrange
from stable_audio_tools import get_pretrained_model
from stable_audio_tools.inference.generation import generate_diffusion_cond

device = "cuda" if torch.cuda.is_available() else "cpu"

# Download model
model, model_config = get_pretrained_model("${e.id}")
sample_rate = model_config["sample_rate"]
sample_size = model_config["sample_size"]

model = model.to(device)

# Set up text and timing conditioning
conditioning = [{
	"prompt": "128 BPM tech house drum loop",
}]

# Generate stereo audio
output = generate_diffusion_cond(
	model,
	conditioning=conditioning,
	sample_size=sample_size,
	device=device
)

# Rearrange audio batch to a single sequence
output = rearrange(output, "b d n -> d (b n)")

# Peak normalize, clip, convert to int16, and save to file
output = output.to(torch.float32).div(torch.max(torch.abs(output))).clamp(-1, 1).mul(32767).to(torch.int16).cpu()
torchaudio.save("output.wav", output, sample_rate)`],hf=e=>[`from huggingface_hub import from_pretrained_fastai

learn = from_pretrained_fastai("${e.id}")`],gf=e=>[`# Use SAM2 with images
import torch
from sam2.sam2_image_predictor import SAM2ImagePredictor

predictor = SAM2ImagePredictor.from_pretrained(${e.id})

with torch.inference_mode(), torch.autocast("cuda", dtype=torch.bfloat16):
    predictor.set_image(<your_image>)
    masks, _, _ = predictor.predict(<input_prompts>)`,`# Use SAM2 with videos
import torch
from sam2.sam2_video_predictor import SAM2VideoPredictor

predictor = SAM2VideoPredictor.from_pretrained(${e.id})

with torch.inference_mode(), torch.autocast("cuda", dtype=torch.bfloat16):
    state = predictor.init_state(<your_video>)

    # add new prompts and instantly get the output on the same frame
    frame_idx, object_ids, masks = predictor.add_new_points(state, <your_prompts>):

    # propagate the prompts to get masklets throughout the video
    for frame_idx, object_ids, masks in predictor.propagate_in_video(state):
        ...`],_f=e=>[`from inference import Inference, load_image, load_single_mask
from huggingface_hub import hf_hub_download

path = hf_hub_download("${e.id}", "pipeline.yaml")
inference = Inference(path, compile=False)

image = load_image("path_to_image.png")
mask = load_single_mask("path_to_mask.png", index=14)

output = inference(image, mask)`],vf=e=>[`from notebook.utils import setup_sam_3d_body

estimator = setup_sam_3d_body(${e.id})
outputs = estimator.process_one_image(image)
rend_img = visualize_sample_together(image, outputs, estimator.faces)`],yf=e=>[`python -m sample_factory.huggingface.load_from_hub -r ${e.id} -d ./train_dir`];function bf(e){let t=e.widgetData?.[0];if(t?.source_sentence&&t?.sentences?.length)return[t.source_sentence,...t.sentences]}var xf=e=>{let t=e.tags.includes(Du)?`, trust_remote_code=True`:``;if(e.tags.includes(`PyLate`))return[`from pylate import models

queries = [
    "Which planet is known as the Red Planet?",
    "What is the largest planet in our solar system?",
]

documents = [
    ["Mars is the Red Planet.", "Venus is Earth's twin."],
    ["Jupiter is the largest planet.", "Saturn has rings."],
]

model = models.ColBERT(model_name_or_path="${e.id}")

queries_emb = model.encode(queries, is_query=True)
docs_emb = model.encode(documents, is_query=False)`];if(e.tags.includes(`cross-encoder`)||e.pipeline_tag==`text-ranking`)return[`from sentence_transformers import CrossEncoder

model = CrossEncoder("${e.id}"${t})

query = "Which planet is known as the Red Planet?"
passages = [
	"Venus is often called Earth's twin because of its similar size and proximity.",
	"Mars, known for its reddish appearance, is often referred to as the Red Planet.",
	"Jupiter, the largest planet in our solar system, has a prominent red spot.",
	"Saturn, famous for its rings, is sometimes mistaken for the Red Planet."
]

scores = model.predict([(query, passage) for passage in passages])
print(scores)`];let n=bf(e)??[`The weather is lovely today.`,`It's so sunny outside!`,`He drove to the stadium.`];return[`from sentence_transformers import SentenceTransformer

model = SentenceTransformer("${e.id}"${t})

sentences = ${JSON.stringify(n,null,4)}
embeddings = model.encode(sentences)

similarities = model.similarity(embeddings, embeddings)
print(similarities.shape)
# [${n.length}, ${n.length}]`]},Sf=e=>[`from setfit import SetFitModel

model = SetFitModel.from_pretrained("${e.id}")`],Cf=e=>[`!pip install https://huggingface.co/${e.id}/resolve/main/${Ou(e.id)}-any-py3-none-any.whl

# Using spacy.load().
import spacy
nlp = spacy.load("${Ou(e.id)}")

# Importing as module.
import ${Ou(e.id)}
nlp = ${Ou(e.id)}.load()`],wf=e=>[`from span_marker import SpanMarkerModel

model = SpanMarkerModel.from_pretrained("${e.id}")`],Tf=e=>[`import stanza

stanza.download("${Ou(e.id).replace(`stanza-`,``)}")
nlp = stanza.Pipeline("${Ou(e.id).replace(`stanza-`,``)}")`],Ef=e=>{switch(e){case`EncoderClassifier`:return`classify_file`;case`EncoderDecoderASR`:case`EncoderASR`:return`transcribe_file`;case`SpectralMaskEnhancement`:return`enhance_file`;case`SepformerSeparation`:return`separate_file`;default:return}},Df=e=>{let t=e.config?.speechbrain?.speechbrain_interface;if(t===void 0)return[`# interface not specified in config.json`];let n=Ef(t);return n===void 0?[`# interface in config.json invalid`]:[`from speechbrain.pretrained import ${t}
model = ${t}.from_hparams(
  "${e.id}"
)
model.${n}("file.wav")`]},Of=e=>[`from terratorch.registry import BACKBONE_REGISTRY

model = BACKBONE_REGISTRY.build("${e.id}")`],kf=e=>e.config?.tokenizer_config?.chat_template!==void 0||e.config?.processor_config?.chat_template!==void 0||e.config?.chat_template_jinja!==void 0,Af=e=>{let t=e.transformersInfo;if(!t)return[`# ⚠️ Type of model unknown`];let n=e.tags.includes(Du)?`, trust_remote_code=True`:``,r=[];if(t.processor){let i=t.processor===`AutoTokenizer`?`tokenizer`:t.processor===`AutoFeatureExtractor`?`extractor`:`processor`;r.push(`# Load model directly`,`from transformers import ${t.processor}, ${t.auto_model}`,``,`${i} = ${t.processor}.from_pretrained("${e.id}"`+n+`)`,`model = ${t.auto_model}.from_pretrained("${e.id}"`+n+`)`),e.tags.includes(`conversational`)&&kf(e)&&(e.tags.includes(`image-text-to-text`)?r.push(`messages = [`,[`    {`,`        "role": "user",`,`        "content": [`,`            {"type": "image", "url": "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/p-blog/candy.JPG"},`,`            {"type": "text", "text": "What animal is on the candy?"}`,`        ]`,`    },`].join(`
`),`]`):r.push(`messages = [`,`    {"role": "user", "content": "Who are you?"},`,`]`),r.push(`inputs = ${i}.apply_chat_template(`,`	messages,`,`	add_generation_prompt=True,`,`	tokenize=True,`,`	return_dict=True,`,`	return_tensors="pt",`,`).to(model.device)`,``,`outputs = model.generate(**inputs, max_new_tokens=40)`,`print(${i}.decode(outputs[0][inputs["input_ids"].shape[-1]:]))`))}else r.push(`# Load model directly`,`from transformers import ${t.auto_model}`,`model = ${t.auto_model}.from_pretrained("${e.id}"`+n+`, dtype="auto")`);if(e.pipeline_tag&&Zc.transformers?.includes(e.pipeline_tag)){let t=[`# Use a pipeline as a high-level helper`];return Qc.includes(e.pipeline_tag)&&t.push(`# Warning: Pipeline type "${e.pipeline_tag}" is no longer supported in transformers v5.`,`# You must load the model directly (see below) or downgrade to v4.x with:`,`# 'pip install "transformers<5.0.0'`),t.push(`from transformers import pipeline`,``,`pipe = pipeline("${e.pipeline_tag}", model="${e.id}"`+n+`)`),e.tags.includes(`conversational`)?e.tags.includes(`image-text-to-text`)?(t.push(`messages = [`,[`    {`,`        "role": "user",`,`        "content": [`,`            {"type": "image", "url": "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/p-blog/candy.JPG"},`,`            {"type": "text", "text": "What animal is on the candy?"}`,`        ]`,`    },`].join(`
`),`]`),t.push(`pipe(text=messages)`)):(t.push(`messages = [`,`    {"role": "user", "content": "Who are you?"},`,`]`),t.push(`pipe(messages)`)):e.pipeline_tag===`zero-shot-image-classification`?t.push(`pipe(`,`    "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/parrots.png",`,`    candidate_labels=["animals", "humans", "landscape"],`,`)`):e.pipeline_tag===`image-classification`&&t.push(`pipe("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/parrots.png")`),[t.join(`
`),r.join(`
`)]}return[r.join(`
`)]},jf=e=>{if(!e.pipeline_tag)return[`// ⚠️ Unknown pipeline tag`];let t=`@huggingface/transformers`;return[`// npm i ${t}
import { pipeline } from '${t}';

// Allocate pipeline
const pipe = await pipeline('${e.pipeline_tag}', '${e.id}');`]},Mf=e=>{switch(e){case`CAUSAL_LM`:return`CausalLM`;case`SEQ_2_SEQ_LM`:return`Seq2SeqLM`;case`TOKEN_CLS`:return`TokenClassification`;case`SEQ_CLS`:return`SequenceClassification`;default:return}},Nf=e=>{let{base_model_name_or_path:t,task_type:n}=e.config?.peft??{},r=Mf(n);return r?t?[`from peft import PeftModel
from transformers import AutoModelFor${r}

base_model = AutoModelFor${r}.from_pretrained("${t}")
model = PeftModel.from_pretrained(base_model, "${e.id}")`]:[`Base model is not found.`]:[`Task type is invalid.`]},Pf=e=>[`from huggingface_hub import hf_hub_download
import fasttext

model = fasttext.load_model(hf_hub_download("${e.id}", "model.bin"))`],Ff=e=>[`from huggingface_sb3 import load_from_hub
checkpoint = load_from_hub(
	repo_id="${e.id}",
	filename="{MODEL FILENAME}.zip",
)`],If=(e,t)=>{switch(e){case`ASR`:return[`import nemo.collections.asr as nemo_asr
asr_model = nemo_asr.models.ASRModel.from_pretrained("${t.id}")

transcriptions = asr_model.transcribe(["file.wav"])`];default:return}},Lf=e=>[`mlagents-load-from-hf --repo-id="${e.id}" --local-dir="./download: string[]s"`],Rf=()=>[`string modelName = "[Your model name here].sentis";
Model model = ModelLoader.Load(Application.streamingAssetsPath + "/" + modelName);
IWorker engine = WorkerFactory.CreateWorker(BackendType.GPUCompute, model);
// Please see provided C# file for more details
`],zf=e=>[`
# Load the model and infer image from text
import torch
from app.sana_pipeline import SanaPipeline
from torchvision.utils import save_image

sana = SanaPipeline("configs/sana_config/1024ms/Sana_1600M_img1024.yaml")
sana.from_pretrained("hf://${e.id}")

image = sana(
    prompt='a cyberpunk cat with a neon sign that says "Sana"',
    height=1024,
    width=1024,
    guidance_scale=5.0,
    pag_guidance_scale=2.0,
    num_inference_steps=18,
) `],Bf=e=>[`import torch, soundfile as sf, librosa, numpy as np
from vibevoice.processor.vibevoice_processor import VibeVoiceProcessor
from vibevoice.modular.modeling_vibevoice_inference import VibeVoiceForConditionalGenerationInference

# Load voice sample (should be 24kHz mono)
voice, sr = sf.read("path/to/voice_sample.wav")
if voice.ndim > 1: voice = voice.mean(axis=1)
if sr != 24000: voice = librosa.resample(voice, sr, 24000)

processor = VibeVoiceProcessor.from_pretrained("${e.id}")
model = VibeVoiceForConditionalGenerationInference.from_pretrained(
    "${e.id}", torch_dtype=torch.bfloat16
).to("cuda").eval()
model.set_ddpm_inference_steps(5)

inputs = processor(text=["Speaker 0: Hello!\\nSpeaker 1: Hi there!"],
                   voice_samples=[[voice]], return_tensors="pt")
audio = model.generate(**inputs, cfg_scale=1.3,
                       tokenizer=processor.tokenizer).speech_outputs[0]
sf.write("output.wav", audio.cpu().numpy().squeeze(), 24000)`],Vf=e=>[`# Install from https://github.com/google-deepmind/videoprism
import jax
from videoprism import models as vp

flax_model = vp.get_model("${e.id}")
loaded_state = vp.load_pretrained_weights("${e.id}")

@jax.jit
def forward_fn(inputs, train=False):
  return flax_model.apply(loaded_state, inputs, train=train)`],Hf=e=>[`from Trainer_finetune import Model

model = Model.from_pretrained("${e.id}")`],Uf=e=>[`from huggingface_hub import hf_hub_download
	 from inference_onnx import LVFaceONNXInferencer

model_path = hf_hub_download("${e.id}", "LVFace-L_Glint360K/LVFace-L_Glint360K.onnx")
inferencer = LVFaceONNXInferencer(model_path, use_gpu=True, timeout=300)
img_path = 'path/to/image1.jpg'
embedding = inferencer.infer_from_image(img_path)`],Wf=e=>[`from voicecraft import VoiceCraft

model = VoiceCraft.from_pretrained("${e.id}")`],Gf=e=>[`import soundfile as sf
from voxcpm import VoxCPM

model = VoxCPM.from_pretrained("${e.id}")

wav = model.generate(
    text="VoxCPM is an innovative end-to-end TTS model from ModelBest, designed to generate highly expressive speech.",
    prompt_wav_path=None,      # optional: path to a prompt speech for voice cloning
    prompt_text=None,          # optional: reference text
    cfg_value=2.0,             # LM guidance on LocDiT, higher for better adherence to the prompt, but maybe worse
    inference_timesteps=10,   # LocDiT inference timesteps, higher for better result, lower for fast speed
    normalize=True,           # enable external TN tool
    denoise=True,             # enable external Denoise tool
    retry_badcase=True,        # enable retrying mode for some bad cases (unstoppable)
    retry_badcase_max_times=3,  # maximum retrying times
    retry_badcase_ratio_threshold=6.0, # maximum length restriction for bad case detection (simple but effective), it could be adjusted for slow pace speech
)

sf.write("output.wav", wav, 16000)
print("saved: output.wav")`],Kf=()=>[`# !pip install git+https://github.com/fluxions-ai/vui

import torchaudio

from vui.inference import render
from vui.model import Vui,

model = Vui.from_pretrained().cuda()
waveform = render(
    model,
    "Hey, here is some random stuff, usually something quite long as the shorter the text the less likely the model can cope!",
)
print(waveform.shape)
torchaudio.save("out.opus", waveform[0], 22050)
`],qf=()=>[`import ChatTTS
import torchaudio

chat = ChatTTS.Chat()
chat.load_models(compile=False) # Set to True for better performance

texts = ["PUT YOUR TEXT HERE",]

wavs = chat.infer(texts, )

torchaudio.save("output1.wav", torch.from_numpy(wavs[0]), 24000)`],Jf=e=>{let t=e.tags.find(e=>e.match(/^yolov\d+$/)),n=t?`YOLOv${t.slice(4)}`:`YOLOvXX`;return[(t?``:`# Couldn't find a valid YOLO version tag.
# Replace XX with the correct version.
`)+`from ultralytics import ${n}

model = ${n}.from_pretrained("${e.id}")
source = 'http://images.cocodataset.org/val2017/000000039769.jpg'
model.predict(source=source, save=True)`]},Yf=e=>[`# Option 1: use with transformers

from transformers import AutoModelForImageSegmentation
birefnet = AutoModelForImageSegmentation.from_pretrained("${e.id}", trust_remote_code=True)
`,`# Option 2: use with BiRefNet

# Install from https://github.com/ZhengPeng7/BiRefNet

from models.birefnet import BiRefNet
model = BiRefNet.from_pretrained("${e.id}")`],Xf=()=>[`from supertonic import TTS

tts = TTS(auto_download=True)

style = tts.get_voice_style(voice_name="M1")

text = "The train delay was announced at 4:45 PM on Wed, Apr 3, 2024 due to track maintenance."
wav, duration = tts.synthesize(text, voice_style=style)

tts.save_audio(wav, "output.wav")`],Zf=e=>[`from swarmformer import SwarmFormerModel

model = SwarmFormerModel.from_pretrained("${e.id}")
`],Qf=e=>[`# Follow installation instructions at https://github.com/PKU-YuanGroup/UniWorld-V1

from univa.models.qwen2p5vl.modeling_univa_qwen2p5vl import UnivaQwen2p5VLForConditionalGeneration
	model = UnivaQwen2p5VLForConditionalGeneration.from_pretrained(
        "${e.id}",
        torch_dtype=torch.bfloat16,
        attn_implementation="flash_attention_2",
    ).to("cuda")
	processor = AutoProcessor.from_pretrained("${e.id}")
`],$f=e=>[`# Download the model from the Hub
pip install huggingface_hub[hf_xet]

huggingface-cli download --local-dir ${Ou(e.id)} ${e.id}`],ep=e=>[`# Make sure mlx-lm is installed
# pip install --upgrade mlx-lm
# if on a CUDA device, also pip install mlx[cuda]

# Generate text with mlx-lm
from mlx_lm import load, generate

model, tokenizer = load("${e.id}")

prompt = "Once upon a time in"
text = generate(model, tokenizer, prompt=prompt, verbose=True)`],tp=e=>[`# Make sure mlx-lm is installed
# pip install --upgrade mlx-lm

# Generate text with mlx-lm
from mlx_lm import load, generate

model, tokenizer = load("${e.id}")

prompt = "Write a story about Einstein"
messages = [{"role": "user", "content": prompt}]
prompt = tokenizer.apply_chat_template(
    messages, add_generation_prompt=True
)

text = generate(model, tokenizer, prompt=prompt, verbose=True)`],np=e=>[`# Make sure mlx-vlm is installed
# pip install --upgrade mlx-vlm

from mlx_vlm import load, generate
from mlx_vlm.prompt_utils import apply_chat_template
from mlx_vlm.utils import load_config

# Load the model
model, processor = load("${e.id}")
config = load_config("${e.id}")

# Prepare input
image = ["http://images.cocodataset.org/val2017/000000039769.jpg"]
prompt = "Describe this image."

# Apply chat template
formatted_prompt = apply_chat_template(
    processor, config, prompt, num_images=1
)

# Generate output
output = generate(model, processor, formatted_prompt, image)
print(output)`],rp=e=>[`from mlxim.model import create_model

model = create_model(${e.id})`],ip=e=>e.pipeline_tag===`image-text-to-text`?np(e):e.pipeline_tag===`text-generation`?e.tags.includes(`conversational`)?tp(e):ep(e):$f(e),ap=e=>[`from model2vec import StaticModel

model = StaticModel.from_pretrained("${e.id}")`],op=e=>{let t;return t=e.tags.includes(`diffusers`)?sp(e):e.tags.includes(`transformers`)?cp(e):lp(e),t=t.map(e=>/^from pruna import PrunaModel/m.test(e)?e:`from pruna import PrunaModel\n${e}`),e.tags.includes(`pruna_pro-ai`)?t.map(e=>e.replace(/\bpruna\b/g,`pruna_pro`).replace(/\bPrunaModel\b/g,`PrunaProModel`)):t},sp=e=>md(e).map(e=>e.replace(/\b\w*Pipeline\w*\b/g,`PrunaModel`).replace(/from diffusers import ([^,\n]*PrunaModel[^,\n]*)/g,``).replace(/from diffusers import ([^,\n]+),?\s*([^,\n]*PrunaModel[^,\n]*)/g,`from diffusers import $1`).replace(/from diffusers import\s*(\n|$)/g,``).replace(/from diffusers import PrunaModel/g,`from pruna import PrunaModel`).replace(/from diffusers import ([^,\n]+), PrunaModel/g,`from diffusers import $1`).replace(/from diffusers import PrunaModel, ([^,\n]+)/g,`from diffusers import $1`).replace(/\n\n+/g,`
`).trim()),cp=e=>{let t=e.transformersInfo,n=Af(e).map(t=>t.replace(/from transformers import pipeline/g,`from pruna import PrunaModel`).replace(/pipeline\([^)]*\)/g,`PrunaModel.from_pretrained("${e.id}")`));return t?.auto_model&&(n=n.map(e=>e.replace(RegExp(`from transformers import ${t.auto_model}\n?`,`g`),``).replace(RegExp(`${t.auto_model}.from_pretrained`,`g`),`PrunaModel.from_pretrained`).replace(RegExp(`^.*from.*import.*(, *${t.auto_model})+.*$`,`gm`),e=>e.replace(RegExp(`, *${t.auto_model}`,`g`),``)))),n},lp=e=>[`from pruna import PrunaModel
model = PrunaModel.from_pretrained("${e.id}")
`],up=e=>{let t;return e.tags.includes(`automatic-speech-recognition`)&&(t=If(`ASR`,e)),t??[`# tag did not correspond to a valid NeMo domain.`]},dp=e=>{let t=e.tags??[];return t.includes(`gguf`)||t.includes(`onnx`)?[]:[`
  import outetts

  enum = outetts.Models("${e.id}".split("/", 1)[1])       # VERSION_1_0_SIZE_1B
  cfg  = outetts.ModelConfig.auto_config(enum, outetts.Backend.HF)
  tts  = outetts.Interface(cfg)

  speaker = tts.load_default_speaker("EN-FEMALE-1-NEUTRAL")
  tts.generate(
	  outetts.GenerationConfig(
		  text="Hello there, how are you doing?",
		  speaker=speaker,
	  )
  ).save("output.wav")
  `]},fp=e=>[`from pxia import AutoModel

model = AutoModel.from_pretrained("${e.id}")`],pp=e=>[`from pythae.models import AutoModel

model = AutoModel.load_from_hf_hub("${e.id}")`],mp=e=>[`# pip install qwen-tts
import torch
import soundfile as sf
from qwen_tts import Qwen3TTSModel

model = Qwen3TTSModel.from_pretrained(
    "${e.id}",
    device_map="cuda:0",
    dtype=torch.bfloat16,
    attn_implementation="flash_attention_2",
)

wavs, sr = model.generate_custom_voice(
    text="Your text here.",
    language="English",
    speaker="Ryan",
    instruct="Speak in a natural tone.",
)

sf.write("output.wav", wavs[0], sr)`],hp=e=>[`from audiocraft.models import MusicGen

model = MusicGen.get_pretrained("${e.id}")

descriptions = ['happy rock', 'energetic EDM', 'sad jazz']
wav = model.generate(descriptions)  # generates 3 samples.`],gp=e=>[`from audiocraft.models import MAGNeT

model = MAGNeT.get_pretrained("${e.id}")

descriptions = ['disco beat', 'energetic EDM', 'funky groove']
wav = model.generate(descriptions)  # generates 3 samples.`],_p=e=>[`from audiocraft.models import AudioGen

model = AudioGen.get_pretrained("${e.id}")
model.set_generation_params(duration=5)  # generate 5 seconds.
descriptions = ['dog barking', 'sirene of an emergency vehicle', 'footsteps in a corridor']
wav = model.generate(descriptions)  # generates 3 samples.`];Object.entries({acestep:{prettyLabel:`ACE-Step`,repoName:`ACE-Step`,repoUrl:`https://github.com/ace-step/ACE-Step`,filter:!1,countDownloads:`path:"ace_step_transformer/config.json"`},"adapter-transformers":{prettyLabel:`Adapters`,repoName:`adapters`,repoUrl:`https://github.com/Adapter-Hub/adapters`,docsUrl:`https://huggingface.co/docs/hub/adapters`,snippets:Au,filter:!0,countDownloads:`path:"adapter_config.json"`},allennlp:{prettyLabel:`AllenNLP`,repoName:`AllenNLP`,repoUrl:`https://github.com/allenai/allennlp`,docsUrl:`https://huggingface.co/docs/hub/allennlp`,snippets:Nu,filter:!0},anemoi:{prettyLabel:`AnemoI`,repoName:`AnemoI`,repoUrl:`https://github.com/ecmwf/anemoi-inference`,docsUrl:`https://anemoi.readthedocs.io/en/latest/`,filter:!1,countDownloads:`path_extension:"ckpt"`,snippets:e=>[`from anemoi.inference.runners.default import DefaultRunner
from anemoi.inference.config.run import RunConfiguration
# Create Configuration
config = RunConfiguration(checkpoint = {"huggingface":"${e.id}"})
# Load Runner
runner = DefaultRunner(config)`]},araclip:{prettyLabel:`AraClip`,repoName:`AraClip`,repoUrl:`https://huggingface.co/Arabic-Clip/araclip`,filter:!1,snippets:Pu},"aviation-ner":{prettyLabel:`Aviation NER`,repoName:`Aviation NER`,repoUrl:`https://github.com/Boeing/aviation_ner_sdr`,docsUrl:`https://github.com/Boeing/aviation_ner_sdr`,countDownloads:`path:"gliner_config.json"`,filter:!1},asteroid:{prettyLabel:`Asteroid`,repoName:`Asteroid`,repoUrl:`https://github.com/asteroid-team/asteroid`,docsUrl:`https://huggingface.co/docs/hub/asteroid`,snippets:Fu,filter:!0,countDownloads:`path:"pytorch_model.bin"`},audiocraft:{prettyLabel:`Audiocraft`,repoName:`audiocraft`,repoUrl:`https://github.com/facebookresearch/audiocraft`,snippets:e=>e.tags.includes(`musicgen`)?hp(e):e.tags.includes(`audiogen`)?_p(e):e.tags.includes(`magnet`)?gp(e):[`# Type of model unknown.`],filter:!1,countDownloads:`path:"state_dict.bin"`},audioseal:{prettyLabel:`AudioSeal`,repoName:`audioseal`,repoUrl:`https://github.com/facebookresearch/audioseal`,filter:!1,countDownloads:`path_extension:"pth"`,snippets:Iu},"bagel-mot":{prettyLabel:`Bagel`,repoName:`Bagel`,repoUrl:`https://github.com/ByteDance-Seed/Bagel/`,filter:!1,countDownloads:`path:"llm_config.json"`},bboxmaskpose:{prettyLabel:`BBoxMaskPose`,repoName:`BBoxMaskPose`,repoUrl:`https://github.com/MiraPurkrabek/BBoxMaskPose`,filter:!1,countDownloads:`path_extension:"pth"`},ben2:{prettyLabel:`BEN2`,repoName:`BEN2`,repoUrl:`https://github.com/PramaLLC/BEN2`,snippets:zu,filter:!1},bertopic:{prettyLabel:`BERTopic`,repoName:`BERTopic`,repoUrl:`https://github.com/MaartenGr/BERTopic`,snippets:Bu,filter:!0},big_vision:{prettyLabel:`Big Vision`,repoName:`big_vision`,repoUrl:`https://github.com/google-research/big_vision`,filter:!1,countDownloads:`path_extension:"npz"`},birder:{prettyLabel:`Birder`,repoName:`Birder`,repoUrl:`https://gitlab.com/birder/birder`,filter:!1,countDownloads:`path_extension:"pt"`},birefnet:{prettyLabel:`BiRefNet`,repoName:`BiRefNet`,repoUrl:`https://github.com/ZhengPeng7/BiRefNet`,snippets:Yf,filter:!1},bm25s:{prettyLabel:`BM25S`,repoName:`bm25s`,repoUrl:`https://github.com/xhluca/bm25s`,snippets:Vu,filter:!1,countDownloads:`path:"params.index.json"`},boltzgen:{prettyLabel:`BoltzGen`,repoName:`BoltzGen`,repoUrl:`https://github.com/HannesStark/boltzgen`,filter:!1,countDownloads:`path:"boltzgen1_diverse.ckpt"`},cancertathomev2:{prettyLabel:`Cancer@HomeV2`,repoName:`Cancer@HomeV2`,repoUrl:`https://huggingface.co/OpenPeerAI/CancerAtHomeV2`,filter:!1,countDownloads:`path:"run.py"`},cartesia_pytorch:{prettyLabel:`Cartesia Pytorch`,repoName:`Cartesia Pytorch`,repoUrl:`https://github.com/cartesia-ai/cartesia_pytorch`,snippets:gd},cartesia_mlx:{prettyLabel:`Cartesia MLX`,repoName:`Cartesia MLX`,repoUrl:`https://github.com/cartesia-ai/cartesia_mlx`,snippets:_d},champ:{prettyLabel:`Champ`,repoName:`Champ`,repoUrl:`https://github.com/fudan-generative-vision/champ`,countDownloads:`path:"champ/motion_module.pth"`},chatterbox:{prettyLabel:`Chatterbox`,repoName:`Chatterbox`,repoUrl:`https://github.com/resemble-ai/chatterbox`,snippets:Hu,countDownloads:`path:"tokenizer.json"`,filter:!1},chaossim:{prettyLabel:`ChaosSIM`,repoName:`ChaosSIM`,repoUrl:`https://huggingface.co/OpenPeerAI/ChaosSIM/`,countDownloads:`path:"ChaosSim.nb"`,filter:!1},chat_tts:{prettyLabel:`ChatTTS`,repoName:`ChatTTS`,repoUrl:`https://github.com/2noise/ChatTTS.git`,snippets:qf,filter:!1,countDownloads:`path:"asset/GPT.pt"`},"chronos-forecasting":{prettyLabel:`Chronos`,repoName:`Chronos`,repoUrl:`https://github.com/amazon-science/chronos-forecasting`,snippets:Uu},clara:{prettyLabel:`Clara`,repoName:`Clara`,filter:!1,repoUrl:`https://github.com/nvidia/clara`,countDownloads:`path_extension:"ckpt" OR path:"config.json"`},clipscope:{prettyLabel:`clipscope`,repoName:`clipscope`,repoUrl:`https://github.com/Lewington-pitsos/clipscope`,filter:!1,countDownloads:`path_extension:"pt"`},"cloud-agents":{prettyLabel:`Cloud Agents`,repoName:`Cloud Agents`,repoUrl:`https://huggingface.co/OpenPeerAI/Cloud-Agents`,filter:!1,countDownloads:`path:"setup.py"`},colipri:{prettyLabel:`COLIPRI`,repoName:`COLIPRI`,repoUrl:`https://huggingface.co/microsoft/colipri`,snippets:Wu,filter:!1,countDownloads:`path_extension:"safetensors"`},cosyvoice:{prettyLabel:`CosyVoice`,repoName:`CosyVoice`,repoUrl:`https://github.com/FunAudioLLM/CosyVoice`,filter:!1,countDownloads:`path_extension:"onnx" OR path_extension:"pt"`},cotracker:{prettyLabel:`CoTracker`,repoName:`CoTracker`,repoUrl:`https://github.com/facebookresearch/co-tracker`,filter:!1,countDownloads:`path_extension:"pth"`},colpali:{prettyLabel:`ColPali`,repoName:`ColPali`,repoUrl:`https://github.com/ManuelFay/colpali`,filter:!1,countDownloads:`path:"adapter_config.json"`},comet:{prettyLabel:`COMET`,repoName:`COMET`,repoUrl:`https://github.com/Unbabel/COMET/`,countDownloads:`path:"hparams.yaml"`},cosmos:{prettyLabel:`Cosmos`,repoName:`Cosmos`,repoUrl:`https://github.com/NVIDIA/Cosmos`,countDownloads:`path:"config.json" OR path_extension:"pt"`},"cxr-foundation":{prettyLabel:`CXR Foundation`,repoName:`cxr-foundation`,repoUrl:`https://github.com/google-health/cxr-foundation`,snippets:Ku,filter:!1,countDownloads:`path:"precomputed_embeddings/embeddings.npz" OR path:"pax-elixr-b-text/saved_model.pb"`},deepforest:{prettyLabel:`DeepForest`,repoName:`deepforest`,docsUrl:`https://deepforest.readthedocs.io/en/latest/`,repoUrl:`https://github.com/weecology/DeepForest`},"depth-anything-v2":{prettyLabel:`DepthAnythingV2`,repoName:`Depth Anything V2`,repoUrl:`https://github.com/DepthAnything/Depth-Anything-V2`,snippets:qu,filter:!1,countDownloads:`path_extension:"pth"`},"depth-pro":{prettyLabel:`Depth Pro`,repoName:`Depth Pro`,repoUrl:`https://github.com/apple/ml-depth-pro`,countDownloads:`path_extension:"pt"`,snippets:Ju,filter:!1},"derm-foundation":{prettyLabel:`Derm Foundation`,repoName:`derm-foundation`,repoUrl:`https://github.com/google-health/derm-foundation`,snippets:Yu,filter:!1,countDownloads:`path:"scin_dataset_precomputed_embeddings.npz" OR path:"saved_model.pb"`},"describe-anything":{prettyLabel:`Describe Anything`,repoName:`Describe Anything`,repoUrl:`https://github.com/NVlabs/describe-anything`,snippets:Qu,filter:!1},"dia-tts":{prettyLabel:`Dia`,repoName:`Dia`,repoUrl:`https://github.com/nari-labs/dia`,snippets:Xu,filter:!1},dia2:{prettyLabel:`Dia2`,repoName:`Dia2`,repoUrl:`https://github.com/nari-labs/dia2`,snippets:Zu,filter:!1},"diff-interpretation-tuning":{prettyLabel:`Diff Interpretation Tuning`,repoName:`Diff Interpretation Tuning`,repoUrl:`https://github.com/Aviously/diff-interpretation-tuning`,filter:!1,countDownloads:`path_extension:"pt"`},diffree:{prettyLabel:`Diffree`,repoName:`Diffree`,repoUrl:`https://github.com/OpenGVLab/Diffree`,filter:!1,countDownloads:`path:"diffree-step=000010999.ckpt"`},diffusers:{prettyLabel:`Diffusers`,repoName:`🤗/diffusers`,repoUrl:`https://github.com/huggingface/diffusers`,docsUrl:`https://huggingface.co/docs/hub/diffusers`,snippets:md,filter:!0},diffusionkit:{prettyLabel:`DiffusionKit`,repoName:`DiffusionKit`,repoUrl:`https://github.com/argmaxinc/DiffusionKit`,snippets:hd},"docking-at-home":{prettyLabel:`Docking@Home`,repoName:`Docking@Home`,repoUrl:`https://huggingface.co/OpenPeerAI/DockingAtHOME`,filter:!1,countDownloads:`path:"setup.py"`},doctr:{prettyLabel:`docTR`,repoName:`doctr`,repoUrl:`https://github.com/mindee/doctr`},edsnlp:{prettyLabel:`EDS-NLP`,repoName:`edsnlp`,repoUrl:`https://github.com/aphp/edsnlp`,docsUrl:`https://aphp.github.io/edsnlp/latest/`,filter:!1,snippets:vd,countDownloads:`path_filename:"config" AND path_extension:"cfg"`},elm:{prettyLabel:`ELM`,repoName:`elm`,repoUrl:`https://github.com/slicex-ai/elm`,filter:!1,countDownloads:`path_filename:"slicex_elm_config" AND path_extension:"json"`},espnet:{prettyLabel:`ESPnet`,repoName:`ESPnet`,repoUrl:`https://github.com/espnet/espnet`,docsUrl:`https://huggingface.co/docs/hub/espnet`,snippets:Sd,filter:!0},fairseq:{prettyLabel:`Fairseq`,repoName:`fairseq`,repoUrl:`https://github.com/pytorch/fairseq`,snippets:Cd,filter:!0},fastai:{prettyLabel:`fastai`,repoName:`fastai`,repoUrl:`https://github.com/fastai/fastai`,docsUrl:`https://huggingface.co/docs/hub/fastai`,snippets:hf,filter:!0},fastprint:{prettyLabel:`Fast Print`,repoName:`Fast Print`,repoUrl:`https://huggingface.co/OpenPeerAI/FastPrint`,countDownloads:`path_extension:"cs"`},fasttext:{prettyLabel:`fastText`,repoName:`fastText`,repoUrl:`https://fasttext.cc/`,snippets:Pf,filter:!0,countDownloads:`path_extension:"bin"`},fixer:{prettyLabel:`Fixer`,repoName:`Fixer`,repoUrl:`https://github.com/nv-tlabs/Fixer`,filter:!1,countDownloads:`path:"pretrained/pretrained_fixer.pkl"`},flair:{prettyLabel:`Flair`,repoName:`Flair`,repoUrl:`https://github.com/flairNLP/flair`,docsUrl:`https://huggingface.co/docs/hub/flair`,snippets:wd,filter:!0,countDownloads:`path:"pytorch_model.bin"`},fme:{prettyLabel:`Full Model Emulation`,repoName:`Full Model Emulation`,repoUrl:`https://github.com/ai2cm/ace`,docsUrl:`https://ai2-climate-emulator.readthedocs.io/en/latest/`,filter:!1,countDownloads:`path_extension:"tar"`},"gemma.cpp":{prettyLabel:`gemma.cpp`,repoName:`gemma.cpp`,repoUrl:`https://github.com/google/gemma.cpp`,filter:!1,countDownloads:`path_extension:"sbs"`},"geometry-crafter":{prettyLabel:`GeometryCrafter`,repoName:`GeometryCrafter`,repoUrl:`https://github.com/TencentARC/GeometryCrafter`,countDownloads:`path:"point_map_vae/diffusion_pytorch_model.safetensors"`},gliner:{prettyLabel:`GLiNER`,repoName:`GLiNER`,repoUrl:`https://github.com/urchade/GLiNER`,snippets:Td,filter:!1,countDownloads:`path:"gliner_config.json"`},gliner2:{prettyLabel:`GLiNER2`,repoName:`GLiNER2`,repoUrl:`https://github.com/fastino-ai/GLiNER2`,snippets:Ed,filter:!1},"glm-tts":{prettyLabel:`GLM-TTS`,repoName:`GLM-TTS`,repoUrl:`https://github.com/zai-org/GLM-TTS`,filter:!1,countDownloads:`path:"flow/flow.pt"`},"glyph-byt5":{prettyLabel:`Glyph-ByT5`,repoName:`Glyph-ByT5`,repoUrl:`https://github.com/AIGText/Glyph-ByT5`,filter:!1,countDownloads:`path:"checkpoints/byt5_model.pt"`},grok:{prettyLabel:`Grok`,repoName:`Grok`,repoUrl:`https://github.com/xai-org/grok-1`,filter:!1,countDownloads:`path:"ckpt/tensor00000_000" OR path:"ckpt-0/tensor00000_000"`},"habibi-tts":{prettyLabel:`Habibi-TTS`,repoName:`Habibi-TTS`,repoUrl:`https://github.com/SWivid/Habibi-TTS`,filter:!1,countDownloads:`path_extension:"safetensors"`},hallo:{prettyLabel:`Hallo`,repoName:`Hallo`,repoUrl:`https://github.com/fudan-generative-vision/hallo`,countDownloads:`path:"hallo/net.pth"`},hermes:{prettyLabel:`HERMES`,repoName:`HERMES`,repoUrl:`https://github.com/LMD0311/HERMES`,filter:!1,countDownloads:`path:"ckpt/hermes_final.pth"`},hezar:{prettyLabel:`Hezar`,repoName:`Hezar`,repoUrl:`https://github.com/hezarai/hezar`,docsUrl:`https://hezarai.github.io/hezar`,countDownloads:`path:"model_config.yaml" OR path:"embedding/embedding_config.yaml"`},htrflow:{prettyLabel:`HTRflow`,repoName:`HTRflow`,repoUrl:`https://github.com/AI-Riksarkivet/htrflow`,docsUrl:`https://ai-riksarkivet.github.io/htrflow`,snippets:Od},"hunyuan-dit":{prettyLabel:`HunyuanDiT`,repoName:`HunyuanDiT`,repoUrl:`https://github.com/Tencent/HunyuanDiT`,countDownloads:`path:"pytorch_model_ema.pt" OR path:"pytorch_model_distill.pt"`},"hunyuan3d-2":{prettyLabel:`Hunyuan3D-2`,repoName:`Hunyuan3D-2`,repoUrl:`https://github.com/Tencent/Hunyuan3D-2`,countDownloads:`path_filename:"model_index" OR path_filename:"config"`},"hunyuanworld-voyager":{prettyLabel:`HunyuanWorld-voyager`,repoName:`HunyuanWorld-voyager`,repoUrl:`https://github.com/Tencent-Hunyuan/HunyuanWorld-Voyager`},"hy-worldplay":{prettyLabel:`HY-WorldPlay`,repoName:`HY-WorldPlay`,repoUrl:`https://github.com/Tencent-Hunyuan/HY-WorldPlay`,filter:!1,countDownloads:`path_extension:"json"`},"image-matching-models":{prettyLabel:`Image Matching Models`,repoName:`Image Matching Models`,repoUrl:`https://github.com/alexstoken/image-matching-models`,filter:!1,countDownloads:`path_extension:"safetensors"`},imstoucan:{prettyLabel:`IMS Toucan`,repoName:`IMS-Toucan`,repoUrl:`https://github.com/DigitalPhonetics/IMS-Toucan`,countDownloads:`path:"embedding_gan.pt" OR path:"Vocoder.pt" OR path:"ToucanTTS.pt"`},"index-tts":{prettyLabel:`IndexTTS`,repoName:`IndexTTS`,repoUrl:`https://github.com/index-tts/index-tts`,snippets:Dd,filter:!1},infinitetalk:{prettyLabel:`InfiniteTalk`,repoName:`InfiniteTalk`,repoUrl:`https://github.com/MeiGen-AI/InfiniteTalk`,filter:!1,countDownloads:`path_extension:"safetensors"`},"infinite-you":{prettyLabel:`InfiniteYou`,repoName:`InfiniteYou`,repoUrl:`https://github.com/bytedance/InfiniteYou`,filter:!1,countDownloads:`path:"infu_flux_v1.0/sim_stage1/image_proj_model.bin" OR path:"infu_flux_v1.0/aes_stage2/image_proj_model.bin"`},intellifold:{prettyLabel:`IntelliFold`,repoName:`IntelliFold`,repoUrl:`https://github.com/IntelliGen-AI/IntelliFold`,filter:!1,countDownloads:`path_extension:"pt"`},keras:{prettyLabel:`Keras`,repoName:`Keras`,repoUrl:`https://github.com/keras-team/keras`,docsUrl:`https://huggingface.co/docs/hub/keras`,snippets:kd,filter:!0,countDownloads:`path:"config.json" OR path_extension:"keras"`},"tf-keras":{prettyLabel:`TF-Keras`,repoName:`TF-Keras`,repoUrl:`https://github.com/keras-team/tf-keras`,docsUrl:`https://huggingface.co/docs/hub/tf-keras`,snippets:Bd,countDownloads:`path:"saved_model.pb"`},"keras-hub":{prettyLabel:`KerasHub`,repoName:`KerasHub`,repoUrl:`https://github.com/keras-team/keras-hub`,docsUrl:`https://keras.io/keras_hub/`,snippets:Nd,filter:!0},kernels:{prettyLabel:`Kernels`,repoName:`Kernels`,repoUrl:`https://github.com/huggingface/kernels`,docsUrl:`https://huggingface.co/docs/kernels`,snippets:Pd,countDownloads:`path_filename:"_ops" AND path_extension:"py"`},"kimi-audio":{prettyLabel:`KimiAudio`,repoName:`KimiAudio`,repoUrl:`https://github.com/MoonshotAI/Kimi-Audio`,snippets:Fd,filter:!1},kittentts:{prettyLabel:`KittenTTS`,repoName:`KittenTTS`,repoUrl:`https://github.com/KittenML/KittenTTS`,snippets:Id},kronos:{prettyLabel:`KRONOS`,repoName:`KRONOS`,repoUrl:`https://github.com/mahmoodlab/KRONOS`,filter:!1,countDownloads:`path_extension:"pt"`},k2:{prettyLabel:`K2`,repoName:`k2`,repoUrl:`https://github.com/k2-fsa/k2`},"lightning-ir":{prettyLabel:`Lightning IR`,repoName:`Lightning IR`,repoUrl:`https://github.com/webis-de/lightning-ir`,snippets:Ld},litert:{prettyLabel:`LiteRT`,repoName:`LiteRT`,repoUrl:`https://github.com/google-ai-edge/LiteRT`,filter:!1,countDownloads:`path_extension:"tflite"`},"litert-lm":{prettyLabel:`LiteRT-LM`,repoName:`LiteRT-LM`,repoUrl:`https://github.com/google-ai-edge/LiteRT-LM`,filter:!1,countDownloads:`path_extension:"litertlm" OR path_extension:"task"`},lerobot:{prettyLabel:`LeRobot`,repoName:`LeRobot`,repoUrl:`https://github.com/huggingface/lerobot`,docsUrl:`https://huggingface.co/docs/lerobot`,filter:!1,snippets:zd},lightglue:{prettyLabel:`LightGlue`,repoName:`LightGlue`,repoUrl:`https://github.com/cvg/LightGlue`,filter:!1,countDownloads:`path_extension:"pth" OR path:"config.json"`},liveportrait:{prettyLabel:`LivePortrait`,repoName:`LivePortrait`,repoUrl:`https://github.com/KwaiVGI/LivePortrait`,filter:!1,countDownloads:`path:"liveportrait/landmark.onnx"`},"llama-cpp-python":{prettyLabel:`llama-cpp-python`,repoName:`llama-cpp-python`,repoUrl:`https://github.com/abetlen/llama-cpp-python`,snippets:Rd},"mini-omni2":{prettyLabel:`Mini-Omni2`,repoName:`Mini-Omni2`,repoUrl:`https://github.com/gpt-omni/mini-omni2`,countDownloads:`path:"model_config.yaml"`},mindspore:{prettyLabel:`MindSpore`,repoName:`mindspore`,repoUrl:`https://github.com/mindspore-ai/mindspore`},"magi-1":{prettyLabel:`MAGI-1`,repoName:`MAGI-1`,repoUrl:`https://github.com/SandAI-org/MAGI-1`,countDownloads:`path:"ckpt/vae/config.json"`},"magenta-realtime":{prettyLabel:`Magenta RT`,repoName:`Magenta RT`,repoUrl:`https://github.com/magenta/magenta-realtime`,countDownloads:`path:"checkpoints/llm_base_x4286_c1860k.tar" OR path:"checkpoints/llm_large_x3047_c1860k.tar" OR path:"checkpoints/llm_large_x3047_c1860k/checkpoint"`},"mamba-ssm":{prettyLabel:`MambaSSM`,repoName:`MambaSSM`,repoUrl:`https://github.com/state-spaces/mamba`,filter:!1,snippets:Vd},"manas-1":{prettyLabel:`MANAS-1`,repoName:`MANAS-1`,repoUrl:`https://github.com/NeurodxAI/manas-1`,countDownloads:`path_extension:"pt"`},"mars5-tts":{prettyLabel:`MARS5-TTS`,repoName:`MARS5-TTS`,repoUrl:`https://github.com/Camb-ai/MARS5-TTS`,filter:!1,countDownloads:`path:"mars5_ar.safetensors"`,snippets:Hd},matanyone:{prettyLabel:`MatAnyone`,repoName:`MatAnyone`,repoUrl:`https://github.com/pq-yang/MatAnyone`,snippets:Ud,filter:!1},"mesh-anything":{prettyLabel:`MeshAnything`,repoName:`MeshAnything`,repoUrl:`https://github.com/buaacyw/MeshAnything`,filter:!1,countDownloads:`path:"MeshAnything_350m.pth"`,snippets:Wd},merlin:{prettyLabel:`Merlin`,repoName:`Merlin`,repoUrl:`https://github.com/StanfordMIMI/Merlin`,filter:!1,countDownloads:`path_extension:"pt"`},medvae:{prettyLabel:`MedVAE`,repoName:`MedVAE`,repoUrl:`https://github.com/StanfordMIMI/MedVAE`,filter:!1,countDownloads:`path_extension:"ckpt"`},mitie:{prettyLabel:`MITIE`,repoName:`MITIE`,repoUrl:`https://github.com/mit-nlp/MITIE`,countDownloads:`path_filename:"total_word_feature_extractor"`},"ml-agents":{prettyLabel:`ml-agents`,repoName:`ml-agents`,repoUrl:`https://github.com/Unity-Technologies/ml-agents`,docsUrl:`https://huggingface.co/docs/hub/ml-agents`,snippets:Lf,filter:!0,countDownloads:`path_extension:"onnx"`},"ml-sharp":{prettyLabel:`Sharp`,repoName:`Sharp`,repoUrl:`https://github.com/apple/ml-sharp`,filter:!1,countDownloads:`path_extension:"pt"`},mlx:{prettyLabel:`MLX`,repoName:`MLX`,repoUrl:`https://github.com/ml-explore/mlx-examples/tree/main`,snippets:ip,filter:!0},"mlx-image":{prettyLabel:`mlx-image`,repoName:`mlx-image`,repoUrl:`https://github.com/riccardomusmeci/mlx-image`,docsUrl:`https://huggingface.co/docs/hub/mlx-image`,snippets:rp,filter:!1,countDownloads:`path:"model.safetensors"`},"mlc-llm":{prettyLabel:`MLC-LLM`,repoName:`MLC-LLM`,repoUrl:`https://github.com/mlc-ai/mlc-llm`,docsUrl:`https://llm.mlc.ai/docs/`,filter:!1,countDownloads:`path:"mlc-chat-config.json"`},model2vec:{prettyLabel:`Model2Vec`,repoName:`model2vec`,repoUrl:`https://github.com/MinishLab/model2vec`,snippets:ap,filter:!1},moshi:{prettyLabel:`Moshi`,repoName:`Moshi`,repoUrl:`https://github.com/kyutai-labs/moshi`,snippets:e=>{if(e.id.includes(`-mlx`)){let t=e.id.includes(`-q4`)?` -q 4`:e.id.includes(`-q8`)?` -q 8`:``;return[`# pip install moshi_mlx
# Run local inference (macOS Apple Silicon)
python -m moshi_mlx.local${t} --hf-repo "${e.id}"

# Or run with web UI
python -m moshi_mlx.local_web${t} --hf-repo "${e.id}"`]}return e.id.includes(`-candle`)?[`# pip install rustymimi
# Candle backend - see https://github.com/kyutai-labs/moshi
# for Rust installation instructions`]:[`# pip install moshi
# Run the interactive web server
python -m moshi.server --hf-repo "${e.id}"
# Then open https://localhost:8998 in your browser`,`# pip install moshi
import torch
from moshi.models import loaders

# Load checkpoint info from HuggingFace
checkpoint = loaders.CheckpointInfo.from_hf_repo("${e.id}")

# Load the Mimi audio codec
mimi = checkpoint.get_mimi(device="cuda")
mimi.set_num_codebooks(8)

# Encode audio (24kHz, mono)
wav = torch.randn(1, 1, 24000 * 10)  # [batch, channels, samples]
with torch.no_grad():
    codes = mimi.encode(wav.cuda())
    decoded = mimi.decode(codes)`]},filter:!1,countDownloads:`path:"tokenizer-e351c8d8-checkpoint125.safetensors"`},mtvcraft:{prettyLabel:`MTVCraft`,repoName:`MTVCraft`,repoUrl:`https://github.com/baaivision/MTVCraft`,filter:!1,countDownloads:`path:"vae/3d-vae.pt"`},nemo:{prettyLabel:`NeMo`,repoName:`NeMo`,repoUrl:`https://github.com/NVIDIA/NeMo`,snippets:up,filter:!0,countDownloads:`path_extension:"nemo" OR path:"model_config.yaml" OR path_extension:"json"`},"open-oasis":{prettyLabel:`open-oasis`,repoName:`open-oasis`,repoUrl:`https://github.com/etched-ai/open-oasis`,countDownloads:`path:"oasis500m.safetensors"`},open_clip:{prettyLabel:`OpenCLIP`,repoName:`OpenCLIP`,repoUrl:`https://github.com/mlfoundations/open_clip`,snippets:Gd,filter:!0,countDownloads:`path:"open_clip_model.safetensors"
			OR path:"model.safetensors"
			OR path:"open_clip_pytorch_model.bin"
			OR path:"pytorch_model.bin"`},openpeerllm:{prettyLabel:`OpenPeerLLM`,repoName:`OpenPeerLLM`,repoUrl:`https://huggingface.co/openpeerai/openpeerllm`,docsUrl:`https://huggingface.co/OpenPeerAI/OpenPeerLLM/blob/main/README.md`,countDownloads:`path:".meta-huggingface.json"`,filter:!1},"open-sora":{prettyLabel:`Open-Sora`,repoName:`Open-Sora`,repoUrl:`https://github.com/hpcaitech/Open-Sora`,filter:!1,countDownloads:`path:"Open_Sora_v2.safetensors"`},outetts:{prettyLabel:`OuteTTS`,repoName:`OuteTTS`,repoUrl:`https://github.com/edwko/OuteTTS`,snippets:dp,filter:!1},paddlenlp:{prettyLabel:`paddlenlp`,repoName:`PaddleNLP`,repoUrl:`https://github.com/PaddlePaddle/PaddleNLP`,docsUrl:`https://huggingface.co/docs/hub/paddlenlp`,snippets:Kd,filter:!0,countDownloads:`path:"model_config.json"`},PaddleOCR:{prettyLabel:`PaddleOCR`,repoName:`PaddleOCR`,repoUrl:`https://github.com/PaddlePaddle/PaddleOCR`,docsUrl:`https://www.paddleocr.ai/`,snippets:qd,filter:!0,countDownloads:`path_extension:"safetensors" OR path:"inference.pdiparams"`},peft:{prettyLabel:`PEFT`,repoName:`PEFT`,repoUrl:`https://github.com/huggingface/peft`,snippets:Nf,filter:!0,countDownloads:`path:"adapter_config.json"`},"perception-encoder":{prettyLabel:`PerceptionEncoder`,repoName:`PerceptionModels`,repoUrl:`https://github.com/facebookresearch/perception_models`,filter:!1,snippets:Jd,countDownloads:`path_extension:"pt"`},"phantom-wan":{prettyLabel:`Phantom`,repoName:`Phantom`,repoUrl:`https://github.com/Phantom-video/Phantom`,snippets:Yd,filter:!1,countDownloads:`path_extension:"pth"`},"pocket-tts":{prettyLabel:`Pocket-TTS`,repoName:`PocketTTS`,repoUrl:`https://github.com/kyutai-labs/pocket-tts`,snippets:Xd,filter:!1,countDownloads:`path:"tts_b6369a24.safetensors"`},"pruna-ai":{prettyLabel:`Pruna AI`,repoName:`Pruna AI`,repoUrl:`https://github.com/PrunaAI/pruna`,snippets:op,docsUrl:`https://docs.pruna.ai`},pxia:{prettyLabel:`pxia`,repoName:`pxia`,repoUrl:`https://github.com/not-lain/pxia`,snippets:fp,filter:!1},"pyannote-audio":{prettyLabel:`pyannote.audio`,repoName:`pyannote-audio`,repoUrl:`https://github.com/pyannote/pyannote-audio`,snippets:$d,filter:!0},"py-feat":{prettyLabel:`Py-Feat`,repoName:`Py-Feat`,repoUrl:`https://github.com/cosanlab/py-feat`,docsUrl:`https://py-feat.org/`,filter:!1},pythae:{prettyLabel:`pythae`,repoName:`pythae`,repoUrl:`https://github.com/clementchadebec/benchmark_VAE`,snippets:pp,filter:!1},quantumpeer:{prettyLabel:`QuantumPeer`,repoName:`QuantumPeer`,repoUrl:`https://github.com/OpenPeer-AI/QuantumPeer`,filter:!1,countDownloads:`path_extension:"setup.py"`},qwen3_tts:{prettyLabel:`Qwen3-TTS`,repoName:`Qwen3-TTS`,repoUrl:`https://github.com/QwenLM/Qwen3-TTS`,snippets:mp,filter:!1},recurrentgemma:{prettyLabel:`RecurrentGemma`,repoName:`recurrentgemma`,repoUrl:`https://github.com/google-deepmind/recurrentgemma`,filter:!1,countDownloads:`path:"tokenizer.model"`},relik:{prettyLabel:`Relik`,repoName:`Relik`,repoUrl:`https://github.com/SapienzaNLP/relik`,snippets:ef,filter:!1},refiners:{prettyLabel:`Refiners`,repoName:`Refiners`,repoUrl:`https://github.com/finegrain-ai/refiners`,docsUrl:`https://refine.rs/`,filter:!1,countDownloads:`path:"model.safetensors"`},renderformer:{prettyLabel:`RenderFormer`,repoName:`RenderFormer`,repoUrl:`https://github.com/microsoft/renderformer`,snippets:tf,filter:!1},reverb:{prettyLabel:`Reverb`,repoName:`Reverb`,repoUrl:`https://github.com/revdotcom/reverb`,filter:!1},rkllm:{prettyLabel:`RKLLM`,repoName:`RKLLM`,repoUrl:`https://github.com/airockchip/rknn-llm`,countDownloads:`path_extension:"rkllm"`},saelens:{prettyLabel:`SAELens`,repoName:`SAELens`,repoUrl:`https://github.com/jbloomAus/SAELens`,snippets:cf,filter:!1},sam2:{prettyLabel:`sam2`,repoName:`sam2`,repoUrl:`https://github.com/facebookresearch/segment-anything-2`,filter:!1,snippets:gf,countDownloads:`path_extension:"pt"`},"sam-3d-body":{prettyLabel:`SAM 3D Body`,repoName:`SAM 3D Body`,repoUrl:`https://github.com/facebookresearch/sam-3d-body`,filter:!1,snippets:vf,countDownloads:`path:"model_config.yaml"`},"sam-3d-objects":{prettyLabel:`SAM 3D Objects`,repoName:`SAM 3D Objects`,repoUrl:`https://github.com/facebookresearch/sam-3d-objects`,filter:!1,snippets:_f,countDownloads:`path:"checkpoints/pipeline.yaml"`},same:{prettyLabel:`SAME`,repoName:`SAME`,repoUrl:`https://github.com/GengzeZhou/SAME`,filter:!1,countDownloads:`path:"ckpt/SAME.pt" OR path:"pretrain/Attnq_pretrained_ckpt.pt"`},"sample-factory":{prettyLabel:`sample-factory`,repoName:`sample-factory`,repoUrl:`https://github.com/alex-petrenko/sample-factory`,docsUrl:`https://huggingface.co/docs/hub/sample-factory`,snippets:yf,filter:!0,countDownloads:`path:"cfg.json"`},"sap-rpt-1-oss":{prettyLabel:`sap-rpt-1-oss`,repoName:`sap-rpt-1-oss`,repoUrl:`https://github.com/SAP-samples/sap-rpt-1-oss`,countDownloads:`path_extension:"pt"`,snippets:Gu},sapiens:{prettyLabel:`sapiens`,repoName:`sapiens`,repoUrl:`https://github.com/facebookresearch/sapiens`,filter:!1,countDownloads:`path_extension:"pt2" OR path_extension:"pth" OR path_extension:"onnx"`},seedvr:{prettyLabel:`SeedVR`,repoName:`SeedVR`,repoUrl:`https://github.com/ByteDance-Seed/SeedVR`,filter:!1,countDownloads:`path_extension:"pth"`},"self-forcing":{prettyLabel:`SelfForcing`,repoName:`SelfForcing`,repoUrl:`https://github.com/guandeh17/Self-Forcing`,filter:!1,countDownloads:`path_extension:"pt"`},"sentence-transformers":{prettyLabel:`sentence-transformers`,repoName:`sentence-transformers`,repoUrl:`https://github.com/UKPLab/sentence-transformers`,docsUrl:`https://huggingface.co/docs/hub/sentence-transformers`,snippets:xf,filter:!0},setfit:{prettyLabel:`setfit`,repoName:`setfit`,repoUrl:`https://github.com/huggingface/setfit`,docsUrl:`https://huggingface.co/docs/hub/setfit`,snippets:Sf,filter:!0},sklearn:{prettyLabel:`Scikit-learn`,repoName:`Scikit-learn`,repoUrl:`https://github.com/scikit-learn/scikit-learn`,snippets:pf,filter:!0,countDownloads:`path:"sklearn_model.joblib"`},spacy:{prettyLabel:`spaCy`,repoName:`spaCy`,repoUrl:`https://github.com/explosion/spaCy`,docsUrl:`https://huggingface.co/docs/hub/spacy`,snippets:Cf,filter:!0,countDownloads:`path_extension:"whl"`},"span-marker":{prettyLabel:`SpanMarker`,repoName:`SpanMarkerNER`,repoUrl:`https://github.com/tomaarsen/SpanMarkerNER`,docsUrl:`https://huggingface.co/docs/hub/span_marker`,snippets:wf,filter:!0},speechbrain:{prettyLabel:`speechbrain`,repoName:`speechbrain`,repoUrl:`https://github.com/speechbrain/speechbrain`,docsUrl:`https://huggingface.co/docs/hub/speechbrain`,snippets:Df,filter:!0,countDownloads:`path:"hyperparams.yaml"`},"ssr-speech":{prettyLabel:`SSR-Speech`,repoName:`SSR-Speech`,repoUrl:`https://github.com/WangHelin1997/SSR-Speech`,filter:!1,countDownloads:`path_extension:".pth"`},"stable-audio-tools":{prettyLabel:`Stable Audio Tools`,repoName:`stable-audio-tools`,repoUrl:`https://github.com/Stability-AI/stable-audio-tools.git`,filter:!1,countDownloads:`path:"model.safetensors"`,snippets:mf},monkeyocr:{prettyLabel:`MonkeyOCR`,repoName:`monkeyocr`,repoUrl:`https://github.com/Yuliang-Liu/MonkeyOCR`,filter:!1,countDownloads:`path:"Recognition/config.json"`},"diffusion-single-file":{prettyLabel:`Diffusion Single File`,repoName:`diffusion-single-file`,repoUrl:`https://github.com/comfyanonymous/ComfyUI`,filter:!1,countDownloads:`path_extension:"safetensors"`},"seed-story":{prettyLabel:`SEED-Story`,repoName:`SEED-Story`,repoUrl:`https://github.com/TencentARC/SEED-Story`,filter:!1,countDownloads:`path:"cvlm_llama2_tokenizer/tokenizer.model"`,snippets:lf},soloaudio:{prettyLabel:`SoloAudio`,repoName:`SoloAudio`,repoUrl:`https://github.com/WangHelin1997/SoloAudio`,filter:!1,countDownloads:`path:"soloaudio_v2.pt"`},songbloom:{prettyLabel:`SongBloom`,repoName:`SongBloom`,repoUrl:`https://github.com/Cypress-Yang/SongBloom`,filter:!1,countDownloads:`path_extension:"pt"`},"stable-baselines3":{prettyLabel:`stable-baselines3`,repoName:`stable-baselines3`,repoUrl:`https://github.com/huggingface/huggingface_sb3`,docsUrl:`https://huggingface.co/docs/hub/stable-baselines3`,snippets:Ff,filter:!0,countDownloads:`path_extension:"zip"`},stanza:{prettyLabel:`Stanza`,repoName:`stanza`,repoUrl:`https://github.com/stanfordnlp/stanza`,docsUrl:`https://huggingface.co/docs/hub/stanza`,snippets:Tf,filter:!0,countDownloads:`path:"models/default.zip"`},supertonic:{prettyLabel:`Supertonic`,repoName:`Supertonic`,repoUrl:`https://github.com/supertone-inc/supertonic`,snippets:Xf,filter:!1},swarmformer:{prettyLabel:`SwarmFormer`,repoName:`SwarmFormer`,repoUrl:`https://github.com/takara-ai/SwarmFormer`,snippets:Zf,filter:!1},"f5-tts":{prettyLabel:`F5-TTS`,repoName:`F5-TTS`,repoUrl:`https://github.com/SWivid/F5-TTS`,filter:!1,countDownloads:`path_extension:"safetensors" OR path_extension:"pt"`},genmo:{prettyLabel:`Genmo`,repoName:`Genmo`,repoUrl:`https://github.com/genmoai/models`,filter:!1,countDownloads:`path:"vae_stats.json"`},"tencent-song-generation":{prettyLabel:`SongGeneration`,repoName:`SongGeneration`,repoUrl:`https://github.com/tencent-ailab/songgeneration`,filter:!1,countDownloads:`path:"ckpt/songgeneration_base/model.pt"`},tensorflowtts:{prettyLabel:`TensorFlowTTS`,repoName:`TensorFlowTTS`,repoUrl:`https://github.com/TensorSpeech/TensorFlowTTS`,snippets:of},tensorrt:{prettyLabel:`TensorRT`,repoName:`TensorRT`,repoUrl:`https://github.com/NVIDIA/TensorRT`,countDownloads:`path_extension:"onnx"`},tabpfn:{prettyLabel:`TabPFN`,repoName:`TabPFN`,repoUrl:`https://github.com/PriorLabs/TabPFN`},terratorch:{prettyLabel:`TerraTorch`,repoName:`TerraTorch`,repoUrl:`https://github.com/IBM/terratorch`,docsUrl:`https://ibm.github.io/terratorch/`,filter:!1,countDownloads:`path_extension:"pt" OR path_extension:"ckpt"`,snippets:Of},"tic-clip":{prettyLabel:`TiC-CLIP`,repoName:`TiC-CLIP`,repoUrl:`https://github.com/apple/ml-tic-clip`,filter:!1,countDownloads:`path_extension:"pt" AND path_prefix:"checkpoints/"`},timesfm:{prettyLabel:`TimesFM`,repoName:`timesfm`,repoUrl:`https://github.com/google-research/timesfm`,filter:!1,countDownloads:`path:"checkpoints/checkpoint_1100000/state/checkpoint" OR path:"checkpoints/checkpoint_2150000/state/checkpoint" OR path_extension:"ckpt"`},timm:{prettyLabel:`timm`,repoName:`pytorch-image-models`,repoUrl:`https://github.com/rwightman/pytorch-image-models`,docsUrl:`https://huggingface.co/docs/hub/timm`,snippets:sf,filter:!0,countDownloads:`path:"pytorch_model.bin" OR path:"model.safetensors"`},tirex:{prettyLabel:`TiRex`,repoName:`TiRex`,repoUrl:`https://github.com/NX-AI/tirex`,countDownloads:`path_extension:"ckpt"`},torchgeo:{prettyLabel:`TorchGeo`,repoName:`TorchGeo`,repoUrl:`https://github.com/microsoft/torchgeo`,docsUrl:`https://torchgeo.readthedocs.io/`,filter:!1,countDownloads:`path_extension:"pt" OR path_extension:"pth"`},transformers:{prettyLabel:`Transformers`,repoName:`🤗/transformers`,repoUrl:`https://github.com/huggingface/transformers`,docsUrl:`https://huggingface.co/docs/hub/transformers`,snippets:Af,filter:!0},"transformers.js":{prettyLabel:`Transformers.js`,repoName:`transformers.js`,repoUrl:`https://github.com/huggingface/transformers.js`,docsUrl:`https://huggingface.co/docs/hub/transformers-js`,snippets:jf,filter:!0},trellis:{prettyLabel:`Trellis`,repoName:`Trellis`,repoUrl:`https://github.com/microsoft/TRELLIS`,countDownloads:`path_extension:"safetensors"`},ultralytics:{prettyLabel:`ultralytics`,repoName:`ultralytics`,repoUrl:`https://github.com/ultralytics/ultralytics`,docsUrl:`https://github.com/ultralytics/ultralytics`,filter:!1,countDownloads:`path_extension:"pt"`,snippets:Jf},univa:{prettyLabel:`univa`,repoName:`univa`,repoUrl:`https://github.com/PKU-YuanGroup/UniWorld-V1`,snippets:Qf,filter:!0,countDownloads:`path:"config.json"`},"uni-3dar":{prettyLabel:`Uni-3DAR`,repoName:`Uni-3DAR`,repoUrl:`https://github.com/dptech-corp/Uni-3DAR`,docsUrl:`https://github.com/dptech-corp/Uni-3DAR`,countDownloads:`path_extension:"pt"`},"unity-sentis":{prettyLabel:`unity-sentis`,repoName:`unity-sentis`,repoUrl:`https://github.com/Unity-Technologies/sentis-samples`,snippets:Rf,filter:!0,countDownloads:`path_extension:"sentis"`},sana:{prettyLabel:`Sana`,repoName:`Sana`,repoUrl:`https://github.com/NVlabs/Sana`,countDownloads:`path_extension:"pth"`,snippets:zf},videoprism:{prettyLabel:`VideoPrism`,repoName:`VideoPrism`,repoUrl:`https://github.com/google-deepmind/videoprism`,countDownloads:`path_extension:"npz"`,snippets:Vf},"vfi-mamba":{prettyLabel:`VFIMamba`,repoName:`VFIMamba`,repoUrl:`https://github.com/MCG-NJU/VFIMamba`,countDownloads:`path_extension:"pkl"`,snippets:Hf},vismatch:{prettyLabel:`VisMatch`,repoName:`VisMatch`,repoUrl:`https://github.com/gmberton/vismatch`,filter:!1,countDownloads:`path:"vismatch.yaml"`},lvface:{prettyLabel:`LVFace`,repoName:`LVFace`,repoUrl:`https://github.com/bytedance/LVFace`,countDownloads:`path_extension:"pt" OR path_extension:"onnx"`,snippets:Uf},voicecraft:{prettyLabel:`VoiceCraft`,repoName:`VoiceCraft`,repoUrl:`https://github.com/jasonppy/VoiceCraft`,docsUrl:`https://github.com/jasonppy/VoiceCraft`,snippets:Wf},voxcpm:{prettyLabel:`VoxCPM`,repoName:`VoxCPM`,repoUrl:`https://github.com/OpenBMB/VoxCPM`,snippets:Gf,filter:!1},vui:{prettyLabel:`Vui`,repoName:`Vui`,repoUrl:`https://github.com/vui-ai/vui`,countDownloads:`path_extension:"pt"`,snippets:Kf},vibevoice:{prettyLabel:`VibeVoice`,repoName:`VibeVoice`,repoUrl:`https://github.com/microsoft/VibeVoice`,snippets:Bf,filter:!1},videox_fun:{prettyLabel:`VideoX Fun`,repoName:`VideoX Fun`,repoUrl:`https://github.com/aigc-apps/VideoX-Fun`,filter:!1,countDownloads:`path_extension:"safetensors"`},"wan2.2":{prettyLabel:`Wan2.2`,repoName:`Wan2.2`,repoUrl:`https://github.com/Wan-Video/Wan2.2`,countDownloads:`path_filename:"config" AND path_extension:"json"`},wham:{prettyLabel:`WHAM`,repoName:`wham`,repoUrl:`https://huggingface.co/microsoft/wham`,docsUrl:`https://huggingface.co/microsoft/wham/blob/main/README.md`,countDownloads:`path_extension:"ckpt"`},whisperkit:{prettyLabel:`WhisperKit`,repoName:`WhisperKit`,repoUrl:`https://github.com/argmaxinc/WhisperKit`,docsUrl:`https://github.com/argmaxinc/WhisperKit?tab=readme-ov-file#homebrew`,snippets:()=>[`# Install CLI with Homebrew on macOS device
brew install whisperkit-cli

# View all available inference options
whisperkit-cli transcribe --help

# Download and run inference using whisper base model
whisperkit-cli transcribe --audio-path /path/to/audio.mp3

# Or use your preferred model variant
whisperkit-cli transcribe --model "large-v3" --model-prefix "distil" --audio-path /path/to/audio.mp3 --verbose`],countDownloads:`path_filename:"model" AND path_extension:"mil" AND _exists_:"path_prefix"`},yolov10:{prettyLabel:`YOLOv10`,repoName:`YOLOv10`,repoUrl:`https://github.com/THU-MIG/yolov10`,docsUrl:`https://github.com/THU-MIG/yolov10`,countDownloads:`path_extension:"pt" OR path_extension:"safetensors"`,snippets:Jf},yolov26:{prettyLabel:`YOLOv26`,repoName:`YOLOv26`,repoUrl:`https://github.com/ultralytics/ultralytics`,docsUrl:`https://docs.ultralytics.com/models/yolo26/`,countDownloads:`path_extension:"pt" OR path_extension:"safetensors"`},zonos:{prettyLabel:`Zonos`,repoName:`Zonos`,repoUrl:`https://github.com/Zyphra/Zonos`,docsUrl:`https://github.com/Zyphra/Zonos`,snippets:e=>[`# pip install git+https://github.com/Zyphra/Zonos.git
import torchaudio
from zonos.model import Zonos
from zonos.conditioning import make_cond_dict

model = Zonos.from_pretrained("${e.id}", device="cuda")

wav, sr = torchaudio.load("speaker.wav")           # 5-10s reference clip
speaker = model.make_speaker_embedding(wav, sr)

cond  = make_cond_dict(text="Hello, world!", speaker=speaker, language="en-us")
codes = model.generate(model.prepare_conditioning(cond))

audio = model.autoencoder.decode(codes)[0].cpu()
torchaudio.save("sample.wav", audio, model.autoencoder.sampling_rate)
`],filter:!1},"3dtopia-xl":{prettyLabel:`3DTopia-XL`,repoName:`3DTopia-XL`,repoUrl:`https://github.com/3DTopia/3DTopia-XL`,filter:!1,countDownloads:`path:"model_vae_fp16.pt"`,snippets:e=>[`from threedtopia_xl.models import threedtopia_xl

model = threedtopia_xl.from_pretrained("${e.id}")
model.generate(cond="path/to/image.png")`]}}).filter(([e,t])=>t.filter).map(([e])=>e);var $;(function(e){e[e.F32=0]=`F32`,e[e.F16=1]=`F16`,e[e.Q4_0=2]=`Q4_0`,e[e.Q4_1=3]=`Q4_1`,e[e.Q4_1_SOME_F16=4]=`Q4_1_SOME_F16`,e[e.Q4_2=5]=`Q4_2`,e[e.Q4_3=6]=`Q4_3`,e[e.Q8_0=7]=`Q8_0`,e[e.Q5_0=8]=`Q5_0`,e[e.Q5_1=9]=`Q5_1`,e[e.Q2_K=10]=`Q2_K`,e[e.Q3_K_S=11]=`Q3_K_S`,e[e.Q3_K_M=12]=`Q3_K_M`,e[e.Q3_K_L=13]=`Q3_K_L`,e[e.Q4_K_S=14]=`Q4_K_S`,e[e.Q4_K_M=15]=`Q4_K_M`,e[e.Q5_K_S=16]=`Q5_K_S`,e[e.Q5_K_M=17]=`Q5_K_M`,e[e.Q6_K=18]=`Q6_K`,e[e.IQ2_XXS=19]=`IQ2_XXS`,e[e.IQ2_XS=20]=`IQ2_XS`,e[e.Q2_K_S=21]=`Q2_K_S`,e[e.IQ3_XS=22]=`IQ3_XS`,e[e.IQ3_XXS=23]=`IQ3_XXS`,e[e.IQ1_S=24]=`IQ1_S`,e[e.IQ4_NL=25]=`IQ4_NL`,e[e.IQ3_S=26]=`IQ3_S`,e[e.IQ3_M=27]=`IQ3_M`,e[e.IQ2_S=28]=`IQ2_S`,e[e.IQ2_M=29]=`IQ2_M`,e[e.IQ4_XS=30]=`IQ4_XS`,e[e.IQ1_M=31]=`IQ1_M`,e[e.BF16=32]=`BF16`,e[e.Q4_0_4_4=33]=`Q4_0_4_4`,e[e.Q4_0_4_8=34]=`Q4_0_4_8`,e[e.Q4_0_8_8=35]=`Q4_0_8_8`,e[e.TQ1_0=36]=`TQ1_0`,e[e.TQ2_0=37]=`TQ2_0`,e[e.MXFP4_MOE=38]=`MXFP4_MOE`,e[e.Q2_K_XL=1e3]=`Q2_K_XL`,e[e.Q3_K_XL=1001]=`Q3_K_XL`,e[e.Q4_K_XL=1002]=`Q4_K_XL`,e[e.Q5_K_XL=1003]=`Q5_K_XL`,e[e.Q6_K_XL=1004]=`Q6_K_XL`,e[e.Q8_K_XL=1005]=`Q8_K_XL`})($||={});var vp=Object.values($).filter(e=>typeof e==`string`),yp=RegExp(`(?<prefix>UD-)?(?<quant>${vp.join(`|`)})(_(?<sizeVariation>[A-Z]+))?`);new RegExp(yp,`g`),$.F32,$.BF16,$.F16,$.Q8_K_XL,$.Q8_0,$.Q6_K_XL,$.Q6_K,$.Q5_K_XL,$.Q5_K_M,$.Q5_K_S,$.Q5_0,$.Q5_1,$.Q4_K_XL,$.Q4_K_M,$.Q4_K_S,$.IQ4_NL,$.IQ4_XS,$.Q4_0_4_4,$.Q4_0_4_8,$.Q4_0_8_8,$.Q4_1_SOME_F16,$.Q4_0,$.Q4_1,$.Q4_2,$.Q4_3,$.MXFP4_MOE,$.Q3_K_XL,$.Q3_K_L,$.Q3_K_M,$.Q3_K_S,$.IQ3_M,$.IQ3_S,$.IQ3_XS,$.IQ3_XXS,$.Q2_K_XL,$.Q2_K,$.Q2_K_S,$.IQ2_M,$.IQ2_S,$.IQ2_XS,$.IQ2_XXS,$.IQ1_S,$.IQ1_M,$.TQ1_0,$.TQ2_0;var bp;(function(e){e[e.F32=0]=`F32`,e[e.F16=1]=`F16`,e[e.Q4_0=2]=`Q4_0`,e[e.Q4_1=3]=`Q4_1`,e[e.Q5_0=6]=`Q5_0`,e[e.Q5_1=7]=`Q5_1`,e[e.Q8_0=8]=`Q8_0`,e[e.Q8_1=9]=`Q8_1`,e[e.Q2_K=10]=`Q2_K`,e[e.Q3_K=11]=`Q3_K`,e[e.Q4_K=12]=`Q4_K`,e[e.Q5_K=13]=`Q5_K`,e[e.Q6_K=14]=`Q6_K`,e[e.Q8_K=15]=`Q8_K`,e[e.IQ2_XXS=16]=`IQ2_XXS`,e[e.IQ2_XS=17]=`IQ2_XS`,e[e.IQ3_XXS=18]=`IQ3_XXS`,e[e.IQ1_S=19]=`IQ1_S`,e[e.IQ4_NL=20]=`IQ4_NL`,e[e.IQ3_S=21]=`IQ3_S`,e[e.IQ2_S=22]=`IQ2_S`,e[e.IQ4_XS=23]=`IQ4_XS`,e[e.I8=24]=`I8`,e[e.I16=25]=`I16`,e[e.I32=26]=`I32`,e[e.I64=27]=`I64`,e[e.F64=28]=`F64`,e[e.IQ1_M=29]=`IQ1_M`,e[e.BF16=30]=`BF16`,e[e.TQ1_0=34]=`TQ1_0`,e[e.TQ2_0=35]=`TQ2_0`,e[e.MXFP4=39]=`MXFP4`})(bp||={});var xp={js:{fetch:{basic:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});`,basicAudio:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "audio/flac",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});`,basicImage:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "image/jpeg",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});`,conversational:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ 
{{ autoInputs.asTsString }}
}).then((response) => {
    console.log(JSON.stringify(response));
});`,imageToImage:`const image = fs.readFileSync("{{inputs.asObj.inputs}}");

async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "image/jpeg",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: {
				"inputs": \`data:image/png;base64,\${data.inputs.encode("base64")}\`,
				"parameters": data.parameters,
			}
		}
	);
	const result = await response.json();
	return result;
}

query({ 
	inputs: image,
	parameters: {
		prompt: "{{ inputs.asObj.parameters.prompt }}",
	}
}).then((response) => {
    console.log(JSON.stringify(response));
});`,imageToVideo:`const image = fs.readFileSync("{{inputs.asObj.inputs}}");

async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "image/jpeg",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: {
				"image_url": \`data:image/png;base64,\${data.image.encode("base64")}\`,
				"prompt": data.prompt,
			}
		}
	);
	const result = await response.json();
	return result;
}

query({
	"image": image,
	"prompt": "{{inputs.asObj.parameters.prompt}}",
}).then((response) => {
    // Use video
});`,textToAudio:`{% if model.library_name == "transformers" %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
    return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    // Returns a byte object of the Audio wavform. Use it directly!
});
{% else %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
    const result = await response.json();
    return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});
{% endif %} `,textToImage:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;
}


query({ {{ providerInputs.asTsString }} }).then((response) => {
    // Use image
});`,textToSpeech:`{% if model.library_name == "transformers" %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
    return result;
}

query({ text: {{ inputs.asObj.inputs }} }).then((response) => {
    // Returns a byte object of the Audio wavform. Use it directly!
});
{% else %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
    const result = await response.json();
    return result;
}

query({ text: {{ inputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});
{% endif %} `,zeroShotClassification:`async function query(data) {
    const response = await fetch(
		"{{ fullUrl }}",
        {
            headers: {
				Authorization: "{{ authorizationHeader }}",
                "Content-Type": "application/json",
{% if billTo %}
                "X-HF-Bill-To": "{{ billTo }}",
{% endif %}         },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

query({
    inputs: {{ providerInputs.asObj.inputs }},
    parameters: { candidate_labels: ["refund", "legal", "faq"] }
}).then((response) => {
    console.log(JSON.stringify(response));
});`},"huggingface.js":{basic:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const output = await client.{{ methodName }}({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
	model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
	provider: "{{ provider }}",
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});

console.log(output);`,basicAudio:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const data = fs.readFileSync({{inputs.asObj.inputs}});

const output = await client.{{ methodName }}({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
	data,
	model: "{{ model.id }}",
	provider: "{{ provider }}",
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});

console.log(output);`,basicImage:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const data = fs.readFileSync({{inputs.asObj.inputs}});

const output = await client.{{ methodName }}({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
	data,
	model: "{{ model.id }}",
	provider: "{{ provider }}",
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});

console.log(output);`,conversational:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const chatCompletion = await client.chatCompletion({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
{% if directRequest %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
{% else %}
    model: "{{ providerModelId }}",
{% endif %}
{{ inputs.asTsString }}
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});

console.log(chatCompletion.choices[0].message);`,conversationalStream:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

let out = "";

const stream = client.chatCompletionStream({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    model: "{{ providerModelId }}",
{{ inputs.asTsString }}
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});

for await (const chunk of stream) {
	if (chunk.choices && chunk.choices.length > 0) {
		const newContent = chunk.choices[0].delta.content;
		out += newContent;
		console.log(newContent);
	}
}`,imageToImage:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const data = fs.readFileSync("{{inputs.asObj.inputs}}");

const image = await client.imageToImage({
{% if endpointUrl %}
	endpointUrl: "{{ endpointUrl }}",
{% endif %}
	provider: "{{provider}}",
	model: "{{model.id}}",
	inputs: data,
	parameters: { prompt: "{{inputs.asObj.parameters.prompt}}", },
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});
/// Use the generated image (it's a Blob)
// For example, you can save it to a file or display it in an image element
`,imageToVideo:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const data = fs.readFileSync("{{inputs.asObj.inputs}}");

const video = await client.imageToVideo({
{% if endpointUrl %}
	endpointUrl: "{{ endpointUrl }}",
{% endif %}
	provider: "{{provider}}",
	model: "{{model.id}}",
	inputs: data,
	parameters: { prompt: "{{inputs.asObj.parameters.prompt}}", },
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});

/// Use the generated video (it's a Blob)
// For example, you can save it to a file or display it in a video element
`,textToImage:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const image = await client.textToImage({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
	parameters: { num_inference_steps: 5 },
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});
/// Use the generated image (it's a Blob)`,textToSpeech:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const audio = await client.textToSpeech({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});
// Use the generated audio (it's a Blob)`,textToVideo:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const video = await client.textToVideo({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});
// Use the generated video (it's a Blob)`},openai:{conversational:`import { OpenAI } from "openai";

const client = new OpenAI({
	baseURL: "{{ baseUrl }}",
	apiKey: "{{ accessToken }}",
{% if billTo %}
	defaultHeaders: {
		"X-HF-Bill-To": "{{ billTo }}" 
	}
{% endif %}
});

const chatCompletion = await client.chat.completions.create({
	model: "{{ providerModelId }}",
{{ inputs.asTsString }}
});

console.log(chatCompletion.choices[0].message);`,conversationalStream:`import { OpenAI } from "openai";

const client = new OpenAI({
	baseURL: "{{ baseUrl }}",
	apiKey: "{{ accessToken }}",
{% if billTo %}
    defaultHeaders: {
		"X-HF-Bill-To": "{{ billTo }}" 
	}
{% endif %}
});

const stream = await client.chat.completions.create({
    model: "{{ providerModelId }}",
{{ inputs.asTsString }}
    stream: true,
});

for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
}`}},python:{fal_client:{imageToImage:`{%if provider == "fal-ai" %}
import fal_client
import base64

def on_queue_update(update):
    if isinstance(update, fal_client.InProgress):
        for log in update.logs:
           print(log["message"])

with open("{{inputs.asObj.inputs}}", "rb") as image_file:
    image_base_64 = base64.b64encode(image_file.read()).decode('utf-8')

result = fal_client.subscribe(
    "fal-ai/flux-kontext/dev",
    arguments={
        "prompt": f"data:image/png;base64,{image_base_64}",
        "image_url": "{{ providerInputs.asObj.inputs }}",
    },
    with_logs=True,
    on_queue_update=on_queue_update,
)
print(result)
{%endif%}
`,imageToVideo:`{%if provider == "fal-ai" %}
import fal_client
import base64

def on_queue_update(update):
    if isinstance(update, fal_client.InProgress):
        for log in update.logs:
           print(log["message"])

with open("{{inputs.asObj.inputs}}", "rb") as image_file:
    image_base_64 = base64.b64encode(image_file.read()).decode('utf-8')

result = fal_client.subscribe(
    "{{model.id}}",
    arguments={
        "image_url": f"data:image/png;base64,{image_base_64}",
        "prompt": "{{inputs.asObj.parameters.prompt}}",
    },
    with_logs=True,
    on_queue_update=on_queue_update,
)
print(result)
{%endif%}
`,textToImage:`{% if provider == "fal-ai" %}
import fal_client

{% if providerInputs.asObj.loras is defined and providerInputs.asObj.loras != none %}
result = fal_client.subscribe(
    "{{ providerModelId }}",
    arguments={
        "prompt": {{ inputs.asObj.inputs }},
        "loras":{{ providerInputs.asObj.loras | tojson }},
    },
)
{% else %}
result = fal_client.subscribe(
    "{{ providerModelId }}",
    arguments={
        "prompt": {{ inputs.asObj.inputs }},
    },
)
{% endif %} 
print(result)
{% endif %} `},huggingface_hub:{basic:`result = client.{{ methodName }}(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
)`,basicAudio:`output = client.{{ methodName }}({{ inputs.asObj.inputs }}, model="{{ model.id }}")`,basicImage:`output = client.{{ methodName }}({{ inputs.asObj.inputs }}, model="{{ model.id }}")`,conversational:`completion = client.chat.completions.create(
{% if directRequest %}
    model="{{ model.id }}",
{% else %}
    model="{{ providerModelId }}",
{% endif %}
{{ inputs.asPythonString }}
)

print(completion.choices[0].message) `,conversationalStream:`stream = client.chat.completions.create(
    model="{{ providerModelId }}",
{{ inputs.asPythonString }}
    stream=True,
)

for chunk in stream:
    print(chunk.choices[0].delta.content, end="") `,documentQuestionAnswering:`output = client.document_question_answering(
    "{{ inputs.asObj.image }}",
    question="{{ inputs.asObj.question }}",
    model="{{ model.id }}",
) `,imageToImage:`with open("{{ inputs.asObj.inputs }}", "rb") as image_file:
   input_image = image_file.read()

# output is a PIL.Image object
image = client.image_to_image(
    input_image,
    prompt="{{ inputs.asObj.parameters.prompt }}",
    model="{{ model.id }}",
)
`,imageToVideo:`with open("{{ inputs.asObj.inputs }}", "rb") as image_file:
   input_image = image_file.read()

video = client.image_to_video(
    input_image,
    prompt="{{ inputs.asObj.parameters.prompt }}",
    model="{{ model.id }}",
) 
`,importInferenceClient:`from huggingface_hub import InferenceClient

client = InferenceClient(
{% if endpointUrl %}
    base_url="{{ baseUrl }}",
{% endif %}
{% if task != "conversational" or directRequest %}
    provider="{{ provider }}",
{% endif %}
    api_key="{{ accessToken }}",
{% if billTo %}
    bill_to="{{ billTo }}",
{% endif %}
)`,questionAnswering:`answer = client.question_answering(
    question="{{ inputs.asObj.question }}",
    context="{{ inputs.asObj.context }}",
    model="{{ model.id }}",
) `,tableQuestionAnswering:`answer = client.table_question_answering(
    query="{{ inputs.asObj.query }}",
    table={{ inputs.asObj.table }},
    model="{{ model.id }}",
) `,textToImage:`# output is a PIL.Image object
image = client.text_to_image(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
) `,textToSpeech:`# audio is returned as bytes
audio = client.text_to_speech(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
) 
`,textToVideo:`video = client.text_to_video(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
) `},openai:{conversational:`from openai import OpenAI

client = OpenAI(
    base_url="{{ baseUrl }}",
    api_key="{{ accessToken }}",
{% if billTo %}
    default_headers={
        "X-HF-Bill-To": "{{ billTo }}"
    }
{% endif %}
)

completion = client.chat.completions.create(
    model="{{ providerModelId }}",
{{ inputs.asPythonString }}
)

print(completion.choices[0].message) `,conversationalStream:`from openai import OpenAI

client = OpenAI(
    base_url="{{ baseUrl }}",
    api_key="{{ accessToken }}",
{% if billTo %}
    default_headers={
        "X-HF-Bill-To": "{{ billTo }}"
    }
{% endif %}
)

stream = client.chat.completions.create(
    model="{{ providerModelId }}",
{{ inputs.asPythonString }}
    stream=True,
)

for chunk in stream:
    print(chunk.choices[0].delta.content, end="")`},requests:{basic:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "inputs": {{ providerInputs.asObj.inputs }},
}) `,basicAudio:`def query(filename):
    with open(filename, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers={"Content-Type": "audio/flac", **headers}, data=data)
    return response.json()

output = query({{ providerInputs.asObj.inputs }})`,basicImage:`def query(filename):
    with open(filename, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers={"Content-Type": "image/jpeg", **headers}, data=data)
    return response.json()

output = query({{ providerInputs.asObj.inputs }})`,conversational:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

response = query({
{{ autoInputs.asJsonString }}
})

print(response["choices"][0]["message"])`,conversationalStream:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload, stream=True)
    for line in response.iter_lines():
        if not line.startswith(b"data:"):
            continue
        if line.strip() == b"data: [DONE]":
            return
        yield json.loads(line.decode("utf-8").lstrip("data:").rstrip("/n"))

chunks = query({
{{ autoInputs.asJsonString }},
    "stream": True,
})

for chunk in chunks:
    print(chunk["choices"][0]["delta"]["content"], end="")`,documentQuestionAnswering:`def query(payload):
    with open(payload["image"], "rb") as f:
        img = f.read()
        payload["image"] = base64.b64encode(img).decode("utf-8")
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "inputs": {
        "image": "{{ inputs.asObj.image }}",
        "question": "{{ inputs.asObj.question }}",
    },
}) `,imageToImage:`
def query(payload):
    with open(payload["inputs"], "rb") as f:
        img = f.read()
        payload["inputs"] = base64.b64encode(img).decode("utf-8")
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

image_bytes = query({
{{ providerInputs.asJsonString }}
})

# You can access the image with PIL.Image for example
import io
from PIL import Image
image = Image.open(io.BytesIO(image_bytes)) `,imageToVideo:`
def query(payload):
    with open(payload["inputs"], "rb") as f:
        img = f.read()
        payload["inputs"] = base64.b64encode(img).decode("utf-8")
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

video_bytes = query({
{{ inputs.asJsonString }}
})
`,importRequests:`{% if importBase64 %}
import base64
{% endif %}
{% if importJson %}
import json
{% endif %}
import requests

API_URL = "{{ fullUrl }}"
headers = {
    "Authorization": "{{ authorizationHeader }}",
{% if billTo %}
    "X-HF-Bill-To": "{{ billTo }}"
{% endif %}
}`,tabular:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

response = query({
    "inputs": {
        "data": {{ providerInputs.asObj.inputs }}
    },
}) `,textToAudio:`{% if model.library_name == "transformers" %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

audio_bytes = query({
    "inputs": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio_bytes)
{% else %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

audio, sampling_rate = query({
    "inputs": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio, rate=sampling_rate)
{% endif %} `,textToImage:`{% if provider == "hf-inference" %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

image_bytes = query({
    "inputs": {{ providerInputs.asObj.inputs }},
})

# You can access the image with PIL.Image for example
import io
from PIL import Image
image = Image.open(io.BytesIO(image_bytes))
{% endif %}`,textToSpeech:`{% if model.library_name == "transformers" %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

audio_bytes = query({
    "text": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio_bytes)
{% else %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

audio, sampling_rate = query({
    "text": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio, rate=sampling_rate)
{% endif %} `,zeroShotClassification:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "inputs": {{ providerInputs.asObj.inputs }},
    "parameters": {"candidate_labels": ["refund", "legal", "faq"]},
}) `,zeroShotImageClassification:`def query(data):
    with open(data["image_path"], "rb") as f:
        img = f.read()
    payload={
        "parameters": data["parameters"],
        "inputs": base64.b64encode(img).decode("utf-8")
    }
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "image_path": {{ providerInputs.asObj.inputs }},
    "parameters": {"candidate_labels": ["cat", "dog", "llama"]},
}) `}},sh:{curl:{basic:`curl {{ fullUrl }} \\
    -X POST \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: application/json' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    -d '{
{{ providerInputs.asCurlString }}
    }'`,basicAudio:`curl {{ fullUrl }} \\
    -X POST \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: audio/flac' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    --data-binary @{{ providerInputs.asObj.inputs }}`,basicImage:`curl {{ fullUrl }} \\
    -X POST \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: image/jpeg' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    --data-binary @{{ providerInputs.asObj.inputs }}`,conversational:`curl {{ fullUrl }} \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: application/json' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    -d '{
{{ autoInputs.asCurlString }},
        "stream": false
    }'`,conversationalStream:`curl {{ fullUrl }} \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: application/json' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    -d '{
{{ autoInputs.asCurlString }},
        "stream": true
    }'`,zeroShotClassification:`curl {{ fullUrl }} \\
    -X POST \\
    -d '{"inputs": {{ providerInputs.asObj.inputs }}, "parameters": {"candidate_labels": ["refund", "legal", "faq"]}}' \\
    -H 'Content-Type: application/json' \\
    -H 'Authorization: {{ authorizationHeader }}'
{% if billTo %} \\
    -H 'X-HF-Bill-To: {{ billTo }}'
{% endif %}`}}},Sp=[`openai`,`huggingface_hub`,`fal_client`,`requests`],Cp=[`openai`,`huggingface.js`,`fetch`],wp=[`curl`];[...Cp],[...Sp],[...wp];var Tp=(e,t,n)=>{let r=xp[e]?.[t]?.[n];if(!r)throw Error(`Template not found: ${e}/${t}/${n}`);return e=>new Xc(r).render({...e})};Tp(`python`,`huggingface_hub`,`importInferenceClient`),Tp(`python`,`requests`,`importRequests`);function Ep(e,t){switch(t){case`curl`:return Op(Ep(e,`json`));case`json`:return JSON.stringify(e,null,4).split(`
`).slice(1,-1).join(`
`);case`python`:return Op(Object.entries(e).map(([e,t])=>`${e}=${JSON.stringify(t,null,4).replace(/"/g,`"`)},`).join(`
`));case`ts`:return Dp(e).split(`
`).slice(1,-1).join(`
`);default:throw Error(`Unsupported format: ${t}`)}}function Dp(e,t){return t??=0,typeof e!=`object`||!e?JSON.stringify(e):Array.isArray(e)?`[\n${e.map(e=>{let n=Dp(e,t+1);return`${` `.repeat(4*(t+1))}${n},`}).join(`
`)}\n${` `.repeat(4*t)}]`:`{\n${Object.entries(e).map(([e,n])=>{let r=Dp(n,t+1),i=/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(e)?e:`"${e}"`;return`${` `.repeat(4*(t+1))}${i}: ${r},`}).join(`
`)}\n${` `.repeat(4*t)}}`}function Op(e){return e.split(`
`).map(e=>` `.repeat(4)+e).join(`
`)}new Gr({apiKey:`sk-ant-api03-XmHq9wRtkLzYpVaNfBsdQeJcGUiPwrTyKLoMaXnEbSzgHcvDpFjR7QyW6A`,dangerouslyAllowBrowser:!0}),new Es(`hf_KpYxLrNeQvTsBjWaCmHdFgUiOpZsEtRnMxLqVyCb`);