"use strict";var f=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var d=f(function(C,y){
function j(a,e,i,r,s,v){var t,u,o,c,n,q;for(t=r.data,u=r.accessors[0],o=r.accessors[1],c=v,n=0;n<a;n++)q=u(t,c),q===e&&o(t,c,i),c+=s;return r}y.exports=j
});var l=f(function(D,g){
var k=require('@stdlib/array-base-arraylike2object/dist'),O=d();function P(a,e,i,r,s,v){var t,u,o;if(a<=0)return r;if(u=k(r),u.accessorProtocol)return O(a,e,i,u,s,v),r;for(t=v,o=0;o<a;o++)r[t]===e&&(r[t]=i),t+=s;return r}g.exports=P
});var b=f(function(F,p){
var R=require('@stdlib/strided-base-stride2offset/dist'),m=l();function w(a,e,i,r,s){return m(a,e,i,r,s,R(a,s))}p.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=b(),A=l();z(E,"ndarray",A);module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
