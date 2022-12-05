(()=>{"use strict";const t=document.querySelector(".right-side"),e=document.querySelector(".left-side");(()=>{const t=document.querySelector(".left-side"),e=document.querySelector(".right-side"),i=document.createElement("button");i.classList.add("all-btn"),i.innerHTML="All",t.appendChild(i);const n=document.createElement("button");n.innerHTML="<p>New Task</p>",n.classList.add("new-todo-btn"),e.append(n)})();const i=document.querySelector(".new-todo-btn");let n=[];const o=document.createElement("div");o.classList.add("todo-form-container","todo-form-container-hidden"),t.appendChild(o),o.innerHTML='<form class="todo-form"><button type="button" class="close-form-btn">X</button><label for="title">Title:</label><input type="text" id="title" required><label for="description">Description:</label><input type="text" id="description" required><label for="dueDate">Due Date:</label><input type="date" id="duedate" required></label><label for="priority">Priority:</label><select id="priority" class="priority-select"><option id="normal" value="Normal Priority">Normal</option><option id ="high" value="High Priority">High Priority</option></select><input type="submit" class="submit-btn"></form>',i.addEventListener("click",(function(){o.classList.remove("todo-form-container-hidden");let t=document.querySelector(".todo-form");t.addEventListener("submit",(function(e){let i=(o=t.querySelector("#title").value,r=t.querySelector("#description").value,d=t.querySelector("#duedate").value,s=t.querySelector("#priority").value,{title:o,description:r,dueDate:d,priority:s});var o,r,d,s;n.push(i),e.preventDefault(),e.stopImmediatePropagation(),t.reset(),n.forEach(((t,e)=>{t.id=e+1})),function(t){let e=t.at(-1);l.innerHTML+=`<li class="list-item" id=${e.id}><div class='task-info'><h1 class="task-title">${e.title}</h1><p class="task-description">${e.description}</p><p class ="due-date">${e.dueDate}</p><p class="task-priority">${e.priority}</p></div><div class='task-buttons'><button class='done-btn'>Done</button><button class='delete-btn'>Delete</button></div></li>`}(n)})),o.querySelector(".close-form-btn").addEventListener("click",(function(){o.classList.add("todo-form-container-hidden")}))}));let r=document.createElement("div");t.appendChild(r),r.classList.add("main-section"),r.innerHTML='<ul class="main-section-list"></ul>';const l=document.querySelector(".main-section-list");let d=document.createElement("button");d.classList.add("normal-priority-button"),d.innerHTML="Normal Priority",e.appendChild(d),d.addEventListener("click",(function(){let t=n.filter((function(t){if("Normal Priority"===t.priority)return t}));l.innerHTML="",a(t)}));let s=document.createElement("button");function a(t){t.forEach((t=>{let e=document.createElement("li");e.classList.add("list-item"),e.setAttribute("id",`${t.id}`),e.innerHTML=`<div class='task-info'><h1 class="task-title">${t.title}</h1><p class="task-description">${t.description}</p><p class ="due-date">${t.dueDate}</p><p class="task-priority">${t.priority}</p></div><div class='task-buttons'><button class='done-btn'>Done</button><button class='delete-btn'>Delete</button></div>`,l.appendChild(e)}))}s.classList.add("high-priority-button"),s.innerHTML="High Priority",e.appendChild(s),s.addEventListener("click",(function(){let t=n.filter((function(t){if("High Priority"===t.priority)return t}));l.innerHTML="",a(t)})),document.querySelector(".all-btn").addEventListener("click",(function(){l.innerHTML="",a(n)})),document.addEventListener("click",(function(t){if(t.target&&"done-btn"==t.target.classList){let e=t.target.parentNode.parentNode;console.log(t.target.parentNode.parentNode.parentNode);for(let t=n.length-1;t>=0;--t)n[t].id==e.id&&n.splice(t,1);l.innerHTML="",a(n)}})),document.addEventListener("click",(function(t){if(t.target&&"delete-btn"==t.target.classList){let e=t.target.parentNode.parentNode;for(let t=n.length-1;t>=0;--t)n[t].id==e.id&&n.splice(t,1);l.innerHTML="",a(n)}}))})();