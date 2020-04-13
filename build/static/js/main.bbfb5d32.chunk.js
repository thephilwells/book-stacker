(this["webpackJsonpbook-stacker"]=this["webpackJsonpbook-stacker"]||[]).push([[0],{10:function(e,n,t){e.exports=t(18)},15:function(e,n,t){},17:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var r,i,o,a,l=t(0),d=t.n(l),s=t(5),c=t.n(s),u=(t(15),t(2)),f=t(3),h=t(8),b=t(6),w=t(9),v=t(7),y=t(1),g=t.n(y),p=function(){function e(n){Object(u.a)(this,e),this.noOfVertices=n,this.AdjList=new Map,this.verticesInGraph=new Set}return Object(f.a)(e,[{key:"addVertex",value:function(e){e=parseInt(e),this.AdjList.set(e,[])}},{key:"addEdge",value:function(e,n){e=parseInt(e),n=parseInt(n),this.AdjList.get(e)?this.AdjList.get(e).push(n):this.AdjList.set(e,[n]),this.AdjList.get(n)?this.AdjList.get(n).push(e):this.AdjList.set(n,[e])}},{key:"getGraph",value:function(){return this.AdjList}},{key:"dfs",value:function(e){for(var n=[],t=0;t<this.noOfVertices;t++)n[t]=!1;return this.DFSUtil(e,n),this.verticesInGraph}},{key:"DFSUtil",value:function(e,n){n[e]=!0,this.verticesInGraph.add(e);var t=this.AdjList.get(e);for(var r in t){var i=t[r];n[i]||this.DFSUtil(i,n)}}}]),e}(),m=g.a.Bodies,k=["#F5CC3D","#D1AA6E","#FD7442","#85B4FA","#232831"],A=function(e){var n,t,l=window.devicePixelRatio/4;switch(e){case"small":r=60,i=70,o=150,a=40;break;case"large":r=80,i=70,o=240,a=60;break;case"medium":default:r=60,i=70,o=240,a=20}n=o+Math.floor(.5+Math.random()*i)*l,t=r+Math.floor(.5+Math.random()*a)*l;var d=m.rectangle(190,100,t,n,{chamfer:{radius:3*l},render:{strokeStyle:"black"}});return E(d)},E=function(e){e.render.fillStyle=k.shift(),k.push(e.render.fillStyle);I(e.render.fillStyle);return e.render.sprite={texture:"./assets/book/black-label-rest.png"},e},I=function(e){switch(e){case"#F5CC3D":return"yellow";case"#D1AA6E":return"brown";case"#FD7442":return"red";case"#85B4FA":return"blue";case"#232831":return"black"}},S={},C=(document.getElementById("help-button"),function(e,n){return e.render.fillStyle===n.render.fillStyle}),j=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(h.a)(this,Object(b.a)(n).call(this,e))).state={},t}return Object(w.a)(n,e),Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=g.a.Engine,n=g.a.Render,t=g.a.Runner,r=g.a.World,i=g.a.Bodies,o=g.a.Body,a=g.a.Mouse,l=g.a.Events,d=g.a.MouseConstraint,s=50*(window.devicePixelRatio/4),c=e.create({}),u=n.create({element:this.refs.scene,engine:c,options:{width:window.innerWidth,height:window.innerHeight-99,wireframes:!1,background:"#F6F3EC"}}),f=[];r.add(c.world,[i.rectangle(window.innerWidth/2,window.innerHeight-1e4,window.innerWidth,s,{isStatic:!0,label:"wall",render:{fillStyle:"#D5D2CC"}}),i.rectangle(window.innerWidth/2,window.innerHeight-(99+s/2),window.innerWidth,s,{isStatic:!0,label:"wall",render:{fillStyle:"#D5D2CC"}}),i.rectangle(window.innerWidth-s/2,window.innerHeight/2,s,window.innerHeight+5e3,{isStatic:!0,label:"wall",render:{fillStyle:"#D5D2CC"}}),i.rectangle(s/2,window.innerHeight/2,s,window.innerHeight+5e3,{isStatic:!0,label:"wall",render:{fillStyle:"#D5D2CC"}})]);for(var h=0;h<15;h++)f.push(A("medium"));for(var b=0;b<5;b++)f.push(A("large"));for(var w=0;w<5;w++)f.push(A("small"));f.forEach((function(e){void 0===S[e.render.color]?S[e.render.color]={amountOfBooksInColor:1,booksInAffinity:new Set,pairs:new Set}:S[e.render.color].amountOfBooksInColor+=1}));for(var y=f.sort((function(){return Math.random()-.5})),m=function(e){setTimeout((function(){r.add(c.world,y[e])}),45*e)},k=0;k<25;k++)m(k);var E=a.create(u.canvas),I=d.create(c,{mouse:E,constraint:{stiffness:.2,render:{visible:!1}}});l.on(c,"collisionActive",(function(e){for(var n,t,r=e.pairs,i=0;i<r.length;i++){var o=r[i];C(o.bodyA,o.bodyB)&&(n=o.bodyA,t=o.bodyB,n.render.lineWidth=6,t.render.lineWidth=6,S[n.render.color].pairs.add("".concat(n.id,"-").concat(t.id)),S[n.render.color].booksInAffinity.add(n.id),S[t.render.color].booksInAffinity.add(t.id))}})),l.on(c,"collisionEnd",(function(e){for(var n,t,r=e.pairs,i=0;i<r.length;i++){var o=r[i];C(o.bodyA,o.bodyB)&&(n=o.bodyA,t=o.bodyB,n.render.lineWidth=0,t.render.lineWidth=0,S[n.render.color].pairs.delete("".concat(n.id,"-").concat(t.id)),S[n.render.color].booksInAffinity.delete(n.id),S[t.render.color].booksInAffinity.delete(t.id))}})),l.on(I,"startdrag",(function(e){"wall"!==e.body.label&&e.body.render.color,e.body.render.color})),l.on(I,"enddrag",(function(e){e.body.collisionFilter.category=1,console.log(c.world),c.world.bodies.forEach((function(n){"wall"!==n.label&&n!==e.body&&o.setStatic(n,!1)}))})),r.add(c.world,I),e.run(c),n.run(u),t.create(),setInterval((function(){e.update(c,1e3/60),function(){var e,n=[];for(var t in S)S[t]&&n.push(S[t].amountOfBooksInColor===S[t].booksInAffinity.size);for(var r in S)S[r].booksInAffinity.values().next().value&&n.every((function(e){return!0===e}))&&function(){var n=new p(S[r].booksInAffinity.size);S[r].booksInAffinity.forEach((function(e){n.addVertex(e)})),S[r].pairs.forEach((function(e){var t=e.split("-"),r=Object(v.a)(t,2),i=r[0],o=r[1];n.addEdge(i,o)}));n.getGraph();e=n.dfs(S[r].booksInAffinity.values().next().value).size===S[r].booksInAffinity.size}();return e}()&&function(){var e=document.querySelector("#scene-area > canvas").getContext("2d");e.font="30px Arial",e.fillText("Victory!",200,50),console.log("VICTORY!")}()}),1e3/60),console.log(S)}},{key:"render",value:function(){return d.a.createElement("div",{id:"scene-area",ref:"scene"})}}]),n}(d.a.Component),D=(t(17),function(e){var n=e.text,t=e.action;return d.a.createElement("button",{id:"".concat(t,"-button"),onClick:function(){return B(t)}},n)}),B=function(e){switch(e){case"help":document.getElementById("help-modal").style.display="flex",document.querySelector("main").classList.toggle("obscured");break;case"reset":window.location.reload();break;default:console.log("QUACK")}};var x=function(){return d.a.createElement("div",{id:"scene-container"},d.a.createElement("header",null,d.a.createElement("h1",null,"Books"),d.a.createElement("div",{className:"buttons"},d.a.createElement(D,{text:"?",action:"help"}),d.a.createElement(D,{text:"\u267b",action:"reset"}))),d.a.createElement(j,null))};c.a.render(d.a.createElement(x,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.bbfb5d32.chunk.js.map