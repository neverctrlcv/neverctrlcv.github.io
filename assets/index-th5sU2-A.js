const _={"base-url":"/music/","music-list":[{id:1,name:"宿-廖静媛",type:"斗破苍穹,动画-漫"},{id:2,name:"蜕-周深",type:"斗破苍穹,动画-漫"},{id:3,name:"如始之末-醉雪",type:"斗破苍穹,动画-漫"},{id:4,name:"遂愿-朱心怡/墨绛",type:"斗破苍穹,动画-漫"},{id:5,name:"重生-周深",type:"斗破苍穹,动画-漫"},{id:6,name:"从别后-流浪的娃娃",type:"斗破苍穹,动画-漫"},{id:7,name:"少年泪-王梓钰",type:"斗破苍穹,动画-漫"},{id:8,name:"问-陈家淇",type:"斗破苍穹,动画-漫"},{id:9,name:"Trap (韩语)-HENRY刘宪华/圭贤/泰民",type:"韩语歌曲"},{id:10,name:"100 Ways-王嘉尔",type:"英文歌曲"},{id:11,name:"Blow-王嘉尔",type:"英文歌曲"},{id:12,name:"Unstoppable-Sia",type:"英文歌曲"},{id:13,name:"梦的光电-王心凌",type:"华语乐坛,动画-漫"},{id:14,name:"TAKE ME HIGHER-V6 (ブイシックス)",type:"日语歌曲,动画-漫"},{id:15,name:"奢香夫人-凤凰传奇",type:"华语乐坛"},{id:16,name:"Ignite-K-391/Alan Walker/Julie Bergan/胜利 (승리)",type:"英文歌曲"},{id:17,name:"The Light-Phoebe Sharp",type:"英文歌曲"},{id:18,name:"爱在此刻停下-弋川/陈奕楠/Døng",type:"华语乐坛"},{id:19,name:"Lone Ranger-Rachel Platten",type:"英文歌曲"},{id:20,name:"战歌-CoCo李玟",type:"华语乐坛,动画-漫"},{id:21,name:"月光-胡彦斌",type:"华语乐坛,动画-漫"},{id:22,name:"良药-许多葵",author:"",type:"斗破苍穹,动画-漫"},{id:23,name:"明天-朱心怡",type:"斗破苍穹,动画-漫"},{id:24,name:"涅槃 (Phoenix)-英雄联盟",type:"英文歌曲,英雄联盟"},{id:25,name:"Legends Never Die-英雄联盟/Against the Current",type:"英文歌曲,英雄联盟"},{id:26,name:"RISE-The Glitch Mob/Mako/The Word Alive",type:"英文歌曲,英雄联盟"},{id:27,name:"Never Gonna Give You Up-Rick Astley",type:"英文歌曲,英雄联盟"},{id:28,name:"La Copa De La Vida-Ricky Martin",type:"英文歌曲,世界杯主题曲"},{id:29,name:"Arhbo-Ozuna/Gims/RedOne/FIFA Sound",type:"英文歌曲,世界杯主题曲"},{id:30,name:"Cry on My Shoulder-Deutschland Sucht Den Superstar",type:"英文歌曲"},{id:31,name:"有形的翅膀-张韶涵",type:"华语乐坛"},{id:32,name:"偏爱-张芸京",type:"华语乐坛"},{id:33,name:"就让这大雨全都落下-容祖儿",type:"华语乐坛,粤语歌曲"},{id:34,name:"千千阕歌-陈慧娴",type:"华语乐坛,粤语歌曲"},{id:35,name:"Numb-Linkin Park",type:"英文歌曲,英雄联盟"},{id:36,name:"此生不换-青鸟飞鱼",type:"华语乐坛"},{id:37,name:"你还要我怎样-薛之谦",type:"华语乐坛"},{id:38,name:"Ignite-Zedd",type:"英文歌曲"}]};function r(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var I=typeof Symbol=="function"&&Symbol.observable||"@@observable",v=I,g=()=>Math.random().toString(36).substring(7).split("").join("."),N={INIT:`@@redux/INIT${g()}`,REPLACE:`@@redux/REPLACE${g()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${g()}`},E=N;function A(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function R(e,t,n){if(typeof e!="function")throw new Error(r(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(r(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(r(1));return n(R)(e,t)}let f=e,y=t,s=new Map,o=s,l=0,u=!1;function m(){o===s&&(o=new Map,s.forEach((i,a)=>{o.set(a,i)}))}function p(){if(u)throw new Error(r(3));return y}function d(i){if(typeof i!="function")throw new Error(r(4));if(u)throw new Error(r(5));let a=!0;m();const c=l++;return o.set(c,i),function(){if(a){if(u)throw new Error(r(6));a=!1,m(),o.delete(c),s=null}}}function h(i){if(!A(i))throw new Error(r(7));if(typeof i.type>"u")throw new Error(r(8));if(typeof i.type!="string")throw new Error(r(17));if(u)throw new Error(r(9));try{u=!0,y=f(y,i)}finally{u=!1}return(s=o).forEach(c=>{c()}),i}function w(i){if(typeof i!="function")throw new Error(r(10));f=i,h({type:E.REPLACE})}function b(){const i=d;return{subscribe(a){if(typeof a!="object"||a===null)throw new Error(r(11));function c(){const O=a;O.next&&O.next(p())}return c(),{unsubscribe:i(c)}},[v](){return this}}}return h({type:E.INIT}),{dispatch:h,subscribe:d,getState:p,replaceReducer:w,[v]:b}}function C(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:E.INIT})>"u")throw new Error(r(12));if(typeof n(void 0,{type:E.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(r(13))})}function P(e){const t=Object.keys(e),n={};for(let s=0;s<t.length;s++){const o=t[s];typeof e[o]=="function"&&(n[o]=e[o])}const f=Object.keys(n);let y;try{C(n)}catch(s){y=s}return function(o={},l){if(y)throw y;let u=!1;const m={};for(let p=0;p<f.length;p++){const d=f[p],h=n[d],w=o[d],b=h(w,l);if(typeof b>"u")throw l&&l.type,new Error(r(14));m[d]=b,u=u||b!==w}return u=u||f.length!==Object.keys(o).length,u?m:o}}const M="set-music-id",T={musicId:1},k=(e=T,t)=>{const{type:n,data:f}=t;return n===M?{...e,...f}:e},x=P({music:k}),j=R(x);export{_ as M,M as S,j as s};