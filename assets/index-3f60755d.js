var E=Object.defineProperty;var K=(t,e,i)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var h=(t,e,i)=>(K(t,typeof e!="symbol"?e+"":e,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const g of u.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&a(g)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();var l=(t=>(t[t.wait_images_loading=0]="wait_images_loading",t[t.main_looping=1]="main_looping",t[t.paused=2]="paused",t[t.wait_user_start=3]="wait_user_start",t[t.wait_user_restart=4]="wait_user_restart",t))(l||{});const s={k:"",time:0,state:0,sprites:[]};var y=(t=>(t[t.Center=0]="Center",t[t.Pos=1]="Pos",t))(y||{}),w=(t=>(t[t.KilledEnemy=0]="KilledEnemy",t[t.Time=1]="Time",t))(w||{});const o={auto_start:!1,screen:{w:0,h:0},score_location_type:0,score_location:{x:10,y:10},score_format:"",score_type:0,init:()=>{},on_time_update:()=>{},on_collision:()=>{},on_j:()=>{},on_k:()=>{}},d=document.createElement("canvas"),n=d.getContext("2d");n&&(n.imageSmoothingEnabled=!1);const P=(t,e,i)=>{o.screen.w=e,o.screen.h=i,document.querySelector(t).innerHTML="",document.querySelector(t).appendChild(d),document.addEventListener("keydown",({code:a})=>{s.k=a}),document.addEventListener("keyup",()=>{s.k=""}),d.width=e,d.height=i},b=()=>{if(!n)return!1;n.clearRect(0,0,o.screen.w,o.screen.h),n.fillStyle="#ccc",n.fillRect(0,0,o.screen.w,o.screen.h)},_=(t,e,i)=>{if(!n)return!1;n.font="14px Segoe UI",n.textAlign="left",n.fillStyle="#000";const{x:a,y:c}=i;e&&(n.textAlign="center"),n.fillText(`${t}`,a,c)},O=()=>{b(),s.sprites.forEach(t=>{t.draw()})},m=[],A=t=>m.filter(e=>e.id===t)[0].img,C=(...t)=>{t.forEach(({id:e,src:i})=>{const a=new Image;a.src=i,m.push({id:e,img:a})})},I=()=>{const t=m.length,e=m.filter(({img:i})=>i.width!=0).length;b(),_(`${e}/${t}`,!0,{x:o.screen.w/2,y:o.screen.h/1.7}),console.log("auto",o.auto_start),(e>0&&e-t==0||t===0)&&(o.auto_start?s.state=l.main_looping:s.state=l.wait_user_start)},L=()=>{if(b(),_("Press S to Start",!0,{x:o.screen.w/2,y:o.screen.h/1.7}),s.k==="KeyS")return s.k="",s.state=l.main_looping,!1};class x{constructor(){h(this,"score");h(this,"type");h(this,"location");h(this,"size");h(this,"vector");h(this,"attributes");h(this,"data");this.score=0,this.type="",this.location={x:0,y:0},this.size={w:0,h:0},this.vector={x:0,y:0},this.attributes={name:null,img_id:null,color:"#000",can_outofscreen:!0,can_userctrl:!0,life:1,attack:1},this.data={}}on_update(e){}update(){this.location.x+=this.vector.x,this.location.y+=this.vector.y,this.attributes.can_outofscreen||(this.location.x<=0&&(this.location.x=0,this.vector.x=0),this.location.x+this.size.w>=o.screen.w&&(this.location.x=o.screen.w-this.size.w,this.vector.x=0),this.location.y<=0&&(this.location.y=0,this.vector.y=0),this.location.y+this.size.h>=o.screen.h&&(this.location.y=o.screen.h-this.size.h,this.vector.y=0)),this.on_update(this)}draw(){if(n)if(this.attributes.img_id){const e=A(this.attributes.img_id);n.drawImage(e,this.location.x,this.location.y,this.size.w,this.size.h)}else n.fillStyle=this.attributes.color,n.fillRect(this.location.x,this.location.y,this.size.w,this.size.h)}}class F extends x{constructor(){super(),this.attributes.can_outofscreen=!1,this.type="player"}update(){super.update()}}const r=new F;s.sprites.push(r);const p=t=>r.attributes[t]||r[t],f=(t,e)=>{t==="location"||t==="size"||t==="vector"?r[t]=e:r.attributes[t]=e},M=()=>{const t=s.sprites.filter(i=>i.type==="enemy"),e=s.sprites.filter(i=>i.type==="bullet");t.forEach(i=>{i.location.x<r.location.x+r.size.w*.75&&i.location.x+i.size.w*.75>r.location.x&&i.location.y<r.location.y+r.size.h*.75&&i.location.y+i.size.h*.75>r.location.y&&(r.attributes.life-=i.attributes.attack,i.attributes.life-=r.attributes.attack),e.forEach(a=>{i.location.x<a.location.x+a.size.w*.75&&i.location.x+i.size.w*.75>a.location.x&&i.location.y<a.location.y+a.size.h*.75&&i.location.y+i.size.h*.75>a.location.y&&(a.attributes.life-=i.attributes.attack,i.attributes.life-=a.attributes.attack,r.score+=1)})})},R=()=>{s.time+=1,o.on_time_update(s.time),s.k==="KeyP"&&(s.k="",s.state=l.paused),s.k===""&&r.attributes.can_userctrl&&(r.vector.x=0,r.vector.y=0),s.k==="KeyW"&&r.attributes.can_userctrl&&(r.vector.x=0,r.vector.y=-1),s.k==="KeyS"&&r.attributes.can_userctrl&&(r.vector.x=0,r.vector.y=1),s.k==="KeyA"&&r.attributes.can_userctrl&&(r.vector.x=-1,r.vector.y=0),s.k==="KeyD"&&r.attributes.can_userctrl&&(r.vector.x=1,r.vector.y=0),s.k==="KeyJ"&&(s.k="",o.on_j()),s.k==="KeyK"&&(s.k="",o.on_k()),s.sprites.forEach(e=>{e.update()});const t=o.score_format.replace("{{score}}",o.score_type===w.KilledEnemy?r.score:s.time);switch(o.score_location_type){case y.Center:_(t,!0,{x:o.screen.w/2,y:o.screen.h/1.7});break;case y.Pos:_(t,!1,o.score_location);break}M(),s.sprites.forEach((e,i)=>{if(e.attributes.life<1){if(e.type==="player")return s.state=l.wait_user_restart,!1;s.sprites.splice(i,1)}})},j=()=>{if(_("Paused",!0,{x:o.screen.w/2,y:o.screen.h/1.7}),s.k==="KeyP")return s.k="",s.state=l.main_looping,!1},q=()=>{_("Game Over",!0,{x:o.screen.w/2,y:o.screen.h/1.7}),s.k==="KeyR"&&(s.k="",r.score=0,s.time=0,o.init(),s.sprites.forEach((t,e)=>{t.type!="player"&&s.sprites.splice(e,1)}),s.sprites.forEach((t,e)=>{t.type!="player"&&s.sprites.splice(e,1)}),s.state=l.main_looping)},k=()=>{switch(s.state){case l.wait_images_loading:I();break;case l.main_looping:R();break;case l.wait_user_start:L();break;case l.wait_user_restart:q();break;case l.paused:j();break}requestAnimationFrame(()=>{O(),k()})};class N extends x{constructor(){super(),this.attributes.can_outofscreen=!0,this.type="enemy",this.vector.x=0,this.vector.y=0}update(){super.update()}}class $ extends x{constructor(){super(),this.attributes.can_outofscreen=!0,this.type="bullet",this.vector.x=-1}update(){super.update()}}class U extends x{constructor(){super(),this.attributes.can_outofscreen=!0,this.type="food",this.vector.x=-1,this.attributes.attack=0}update(){super.update()}}const v={make_enemy:()=>{const t=new N;return s.sprites.push(t),t},make_food:()=>{const t=new U;return s.sprites.push(t),t},make_bullet:()=>{const t=new $;return s.sprites.push(t),t}},B=()=>{o.init(),k()};P("#app",300,300);C({id:"player",src:"./images/player.png"},{id:"ufo",src:"./images/ufo.png"});const z=()=>{function t(i,a){return Math.floor(Math.random()*a+i)}const e=v.make_enemy();e.location.x=t(0,300-20),e.location.y=-20,e.size={w:40,h:20},e.vector.y=2,e.on_update=i=>{i.location.y>=300&&(i.attributes.life=0)},e.attributes.img_id="ufo"};o.init=()=>{f("can_userctrl",!0),f("can_outofscreen",!1),f("size",{w:25,h:25}),f("location",{x:150-25/2,y:250}),f("attack",0),f("life",1),f("img_id","player"),z()};o.on_time_update=t=>{t%100==0&&z(),p("location").y<=10&&f("vector",{x:0,y:1}),p("location").y>=50&&f("vector",{x:0,y:0})};o.on_j=()=>{p("location").y>=50&&f("vector",{x:0,y:-1})};o.on_k=()=>{const t=v.make_bullet();t.size.w=2,t.size.h=10,t.location.x=p("location").x+p("size").w/2-1,t.location.y=p("location").y,t.vector.x=0,t.vector.y=-2,t.on_update=e=>{e.location.y<=-10&&(e.attributes.life=0)},t.attributes.attack=1};o.auto_start=!0;o.score_location_type=y.Pos;o.score_location={x:10,y:20};o.score_format="Killed UFO: {{score}}";o.score_type=w.KilledEnemy;B();
