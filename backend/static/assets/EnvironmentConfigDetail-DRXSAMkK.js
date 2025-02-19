import{c as x,u as g,j as e,B as r,L as w,a as n,I as a}from"./index-CvV0Ieqi.js";import{C as i,a as c,b as d,c as t}from"./card-CzJXnd5K.js";import{t as h}from"./test-data-DJtYMeWy.js";import{P as v}from"./plus-Ck6Dohl3.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=x("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=x("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=x("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);function F(){const{systemId:j,nodeId:p,envId:u}=g(),s=h.environments[u||""],o=h.nodes[p||""],N=h.systems.find(l=>l.id===j);return!s||!o||!N?e.jsx("div",{children:"Environment not found"}):e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold tracking-tight",children:"Configure Environment"}),e.jsxs("p",{className:"text-muted-foreground",children:["Configure ",s.name," on ",o.name]})]}),e.jsx("div",{className:"flex gap-2",children:e.jsx(r,{variant:"outline",asChild:!0,children:e.jsxs(w,{to:`/display/systems/${j}/nodes/${p}/environments/${u}`,children:[e.jsx(b,{className:"mr-2 h-4 w-4"}),"View Environment"]})})})]}),e.jsxs(i,{children:[e.jsx(c,{children:e.jsx(d,{children:"Basic Settings"})}),e.jsx(t,{children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{htmlFor:"name",children:"Environment Name"}),e.jsx(a,{id:"name",defaultValue:s.name,placeholder:"Enter environment name"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{htmlFor:"type",children:"Environment Type"}),e.jsx(a,{id:"type",defaultValue:s.type,placeholder:"Enter environment type"})]})]}),e.jsxs(r,{children:[e.jsx(V,{className:"mr-2 h-4 w-4"}),"Save Changes"]})]})})]}),e.jsxs(i,{children:[e.jsx(c,{children:e.jsx(d,{children:"Container Configuration"})}),e.jsx(t,{children:e.jsx("form",{className:"space-y-4",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{htmlFor:"image",children:"Container Image"}),e.jsx(a,{id:"image",defaultValue:s.image,placeholder:"Enter container image"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{children:"Port Mappings"}),e.jsxs("div",{className:"space-y-2",children:[s.ports.map((l,m)=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{defaultValue:l,placeholder:"host:container"}),e.jsx(r,{variant:"outline",size:"icon",children:e.jsx(y,{className:"h-4 w-4"})})]},m)),e.jsxs(r,{variant:"outline",className:"w-full",children:[e.jsx(v,{className:"mr-2 h-4 w-4"}),"Add Port Mapping"]})]})]})]})})})]}),e.jsxs(i,{children:[e.jsx(c,{children:e.jsx(d,{children:"Resource Configuration"})}),e.jsx(t,{children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{className:"grid gap-4 sm:grid-cols-3",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{htmlFor:"cpu",children:"CPU Cores"}),e.jsx(a,{id:"cpu",type:"number",defaultValue:s.resources.cpu,min:1}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Node Available: ",o.resources.cpu.available," cores"]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{htmlFor:"memory",children:"Memory (MB)"}),e.jsx(a,{id:"memory",type:"number",defaultValue:s.resources.memory,min:512,step:512}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Node Available: ",o.resources.memory.available*1024," MB"]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{htmlFor:"storage",children:"Storage (GB)"}),e.jsx(a,{id:"storage",type:"number",defaultValue:s.resources.storage,min:1}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Node Available: ",o.resources.storage.available," GB"]})]})]}),e.jsx(r,{children:"Update Resources"})]})})]}),e.jsxs(i,{children:[e.jsx(c,{children:e.jsx(d,{children:"Environment Variables"})}),e.jsx(t,{children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[Object.entries(s.variables).map(([l,m],f)=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{defaultValue:l,placeholder:"Key",className:"flex-1"}),e.jsx(a,{defaultValue:m,placeholder:"Value",className:"flex-1",type:l.toLowerCase().includes("password")?"password":"text"}),e.jsx(r,{variant:"outline",size:"icon",children:e.jsx(y,{className:"h-4 w-4"})})]},f)),e.jsxs(r,{variant:"outline",className:"w-full",children:[e.jsx(v,{className:"mr-2 h-4 w-4"}),"Add Environment Variable"]})]}),e.jsx(r,{children:"Update Variables"})]})})]}),e.jsxs(i,{children:[e.jsx(c,{children:e.jsx(d,{children:"Advanced Options"})}),e.jsx(t,{children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{htmlFor:"restart",children:"Restart Policy"}),e.jsx(a,{id:"restart",defaultValue:"always",placeholder:"Enter restart policy"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{htmlFor:"network",children:"Network Mode"}),e.jsx(a,{id:"network",defaultValue:s.network,placeholder:"Enter network mode"})]})]}),e.jsx(r,{children:"Update Options"})]})})]}),e.jsxs(i,{className:"border-destructive",children:[e.jsx(c,{children:e.jsx(d,{className:"text-destructive",children:"Danger Zone"})}),e.jsx(t,{children:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Delete Environment"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Permanently delete this environment and all its data"})]}),e.jsx(r,{variant:"destructive",children:"Delete Environment"})]})})})]})]})}export{F as default};
