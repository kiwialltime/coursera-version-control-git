function ShowStrength(n,t,i,r,u,f,e,o,s,h,c,l){PASSWORDSTRENGTH.ShowStrength(n,t,i,r,u,f,e,o,s,h,c,l)}var PASSWORDSTRENGTH=function(){function n(n,t,i,r){var u=null,f=null;try{u=document.getElementById(t);f=document.getElementById(r);u.setAttribute("class",n.cls);u.innerHTML=n.innerHTML;f.setAttribute("class",i.cls)}catch(e){}}function e(n,t){for(var r=0,i=0;i<t;i++)s(n.charAt(i))||r++;return r++}function o(n,t,i,r){var u=n/100,e=t/u,f;return u=i/100,f=r/u,(e+f)/2}function s(n){return r.indexOf(n,0)==-1?!1:!0}var r="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",t={},i=0,u=1,f=2;return{getPassword:function(n){return n!=null?document.getElementById(n):t},setPassword:function(n,i){t.value=n;t.length=i},ShowStrength:function(t,r,s,h,c,l,a,v,y,p,w){var g=v.split(";"),ft=this.getPassword(t),b={},k={},nt="passw-indicator-",rt=ft.value,it=rt.length,tt,ut,d;if(p=="True"?(b.cls=y+"not-acceptable",k.cls=nt+"not-acceptable",n(b,a,k,w)):(b.cls=y+"weak",k.cls=nt+"weak",n(b,a,k,w)),r){if(it==0)return k.cls="",b.innerHTML="",n(b,a,k,w),i;if(it<parseInt(r))return b.innerHTML=g[0],n(b,a,k,w),i}return(tt=0,h&&(tt=e(rt,it),p=="True"&&tt<parseInt(h)))?(b.innerHTML=g[0],n(b,a,k,w),u):l&&(ut=new RegExp(l),!ut.test(rt))?(b.innerHTML=g[0],n(b,a,k,w),f):(d=o(s,it,c,tt),d<25?(b.innerHTML=g[1],b.cls=y+"weak",k.cls=nt+"weak",n(b,a,k,w),d):d>=25&&d<50?(b.innerHTML=g[2],b.cls=y+"acceptable",k.cls=nt+"acceptable",n(b,a,k,w),d):d>=50&&d<75?(b.innerHTML=g[3],b.cls=y+"average",k.cls=nt+"average",n(b,a,k,w),d):d>=75&&d<100?(b.innerHTML=g[4],b.cls=y+"strong",k.cls=nt+"strong",n(b,a,k,w),d):(b.innerHTML=g[5],b.cls=y+"excellent",k.cls=nt+"excellent",n(b,a,k,w),d))}}}()