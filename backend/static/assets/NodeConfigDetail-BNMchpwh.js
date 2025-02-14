import{u as p,j as e,B as a,L as x,a as i,I as l,C as g}from"./index-Po2OPHHH.js";import{C as n,a as c,b as o,c as m}from"./card-BvFpHK4-.js";import{T as N}from"./textarea-GdtBdiHI.js";import{t as h}from"./test-data-DJtYMeWy.js";import{P as f}from"./plus-D8PJsL2J.js";function k(){const{systemId:d,nodeId:t}=p(),r=h.nodes[t||""],j=h.systems.find(s=>s.id===d),u=(r==null?void 0:r.environments.map(s=>h.environments[s]))||[];return!r||!j?e.jsx("div",{children:"Node not found"}):e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold tracking-tight",children:"Configure Node"}),e.jsxs("p",{className:"text-muted-foreground",children:["Configure ",r.name," in ",j.name]})]}),e.jsx("div",{className:"flex gap-2",children:e.jsx(a,{variant:"outline",asChild:!0,children:e.jsx(x,{to:`/display/systems/${d}/nodes/${t}`,children:"View Node"})})})]}),e.jsxs(n,{children:[e.jsx(c,{children:e.jsx(o,{children:"Node Settings"})}),e.jsx(m,{children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{htmlFor:"name",children:"Node Name"}),e.jsx(l,{id:"name",defaultValue:r.name,placeholder:"Enter node name"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{htmlFor:"description",children:"Description"}),e.jsx(N,{id:"description",placeholder:"Enter node description"})]})]}),e.jsx(a,{children:"Save Changes"})]})})]}),e.jsxs(n,{children:[e.jsx(c,{children:e.jsx(o,{children:"Resource Configuration"})}),e.jsx(m,{children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{className:"grid gap-4 sm:grid-cols-3",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{htmlFor:"cpu",children:"CPU Cores"}),e.jsx(l,{id:"cpu",type:"number",defaultValue:r.resources.cpu.total,min:1}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Available: ",r.resources.cpu.available," cores"]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{htmlFor:"memory",children:"Memory (GB)"}),e.jsx(l,{id:"memory",type:"number",defaultValue:r.resources.memory.total,min:1}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Available: ",r.resources.memory.available," GB"]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{htmlFor:"storage",children:"Storage (GB)"}),e.jsx(l,{id:"storage",type:"number",defaultValue:r.resources.storage.total,min:1}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Available: ",r.resources.storage.available," GB"]})]})]}),e.jsx(a,{children:"Update Resources"})]})})]}),e.jsxs(n,{children:[e.jsx(c,{children:e.jsx(o,{children:"Network Configuration"})}),e.jsx(m,{children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{htmlFor:"networkMode",children:"Network Mode"}),e.jsx(l,{id:"networkMode",defaultValue:"bridge",placeholder:"Enter network mode"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{htmlFor:"subnet",children:"Subnet"}),e.jsx(l,{id:"subnet",placeholder:"Enter subnet"})]})]}),e.jsx(a,{children:"Update Network"})]})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"text-xl font-semibold tracking-tight",children:"Node Environments"}),e.jsxs(a,{children:[e.jsx(f,{className:"mr-2 h-4 w-4"}),"Add Environment"]})]}),e.jsx("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-3",children:u.map(s=>e.jsxs(n,{children:[e.jsxs(c,{className:"flex flex-row items-center justify-between pb-2",children:[e.jsx(o,{className:"text-lg font-semibold",children:s.name}),e.jsx(g,{className:"h-5 w-5 text-muted-foreground"})]}),e.jsx(m,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Status"}),e.jsx("div",{className:`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${s.status==="running"?"bg-green-500/20 text-green-500":"bg-yellow-500/20 text-yellow-500"}`,children:s.status})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Type"}),e.jsx("p",{className:"text-sm",children:s.type})]})]}),e.jsxs("div",{className:"pt-2",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Resources"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("p",{className:"text-sm",children:["CPU: ",s.resources.cpu," cores"]}),e.jsxs("p",{className:"text-sm",children:["Memory: ",s.resources.memory," MB"]})]})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{asChild:!0,className:"flex-1",children:e.jsx(x,{to:`/config/systems/${d}/nodes/${t}/environments/${s.id}`,children:"Configure"})}),e.jsx(a,{variant:"outline",asChild:!0,children:e.jsx(x,{to:`/display/systems/${d}/nodes/${t}/environments/${s.id}`,children:"View"})})]})]})})]},s.id))})]})]})}export{k as default};
