const NUM="919910340178";
const CATS={kitchen:"Kitchen",ceiling:"False Ceiling",bedroom:"Bedroom",tv:"TV Panel",furniture:"Furniture",home:"Complete Home"};
const ICON={
kitchen:'<path d="M4 20V9h16v11M4 14h16M9 9V5h6v4"/>',
ceiling:'<path d="M3 6h18M6 6v4h12V6M9 10v3h6v-3"/><path d="M3 18h18"/>',
bedroom:'<path d="M3 19V8M3 15h18v4M21 15v-3a3 3 0 0 0-3-3h-7v6"/><circle cx="7" cy="12" r="1.5"/>',
tv:'<rect x="3" y="5" width="18" height="11" rx="1"/><path d="M8 20h8M12 16v4"/>',
office:'<path d="M3 20h18M5 20V9h14v11M9 13h2M13 13h2M9 16h2M13 16h2M9 9V5h6v4"/>',
furniture:'<path d="M4 12a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v5H4zM6 17v3M18 17v3M4 12v-1"/>',
home:'<path d="M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6"/>'};
// To add a real photo: add {cat, title, desc, img:"images/your-photo.jpg"} here. Items with img show the photo.
const PROJECTS=[{"cat": "tv", "title": "LED-lit TV wall unit", "desc": "Floating TV cabinet with LED outlines, fluted panel and open shelves.", "img": "images/project-1.jpg"}, {"cat": "kitchen", "title": "L-shaped modular kitchen", "desc": "Glossy cabinets, under-cabinet lighting and glass-front storage.", "img": "images/project-2.jpg"}, {"cat": "home", "title": "Luxury home interior", "desc": "Double-height living and dining space with staircase and cove lighting.", "img": "images/project-3.jpg"}, {"cat": "bedroom", "title": "Master bedroom with wardrobe", "desc": "Panelled bed back, glass wardrobe, dresser and LED bed lighting.", "img": "images/project-4.jpg"}, {"cat": "home", "title": "Interior planning model", "desc": "3D plan showing layout, furniture and finish for a full apartment.", "img": "images/project-5.jpg"}, {"cat": "ceiling", "title": "Wooden false ceiling with cove lights", "desc": "Layered false ceiling with wood inserts and warm LED cove lighting.", "img": "images/project-6.jpg"}, {"cat": "furniture", "title": "Velvet accent chairs and pouf", "desc": "Scalloped-back chairs with brass detail and matching pouf.", "img": "images/project-7.jpg"}, {"cat": "home", "title": "Terrace seating area", "desc": "Pergola, wall cladding, built-in seating and deck lighting.", "img": "images/project-8.jpg"}];
const SERVICES=[
["Modular Kitchen","kitchen","Functional kitchens with smart storage.","L-shaped modular kitchen"],
["False Ceiling","ceiling","POP, gypsum and LED cove ceilings.","Wooden false ceiling with cove lights"],
["Bedroom Interior","bedroom","Wardrobes, beds and bedroom lighting.","Master bedroom with wardrobe"],
["TV Panel Design","tv","Wall panels and units for your living room.","LED-lit TV wall unit"],
["Custom Furniture","furniture","Furniture made to fit your space.","Velvet accent chairs and pouf"],
["Complete Home Interior","home","One team for the whole home.","Luxury home interior"],
["Turnkey Interior Solutions","home","Planning, work and handover in one project.","Interior planning model"]];
const wa=t=>"https://wa.me/"+NUM+"?text="+encodeURIComponent(t);
const DEF="Hello Arsh Interior Solution, I am interested in your interior design services. Please share the details and quotation.";
document.querySelectorAll("[data-wa]").forEach(a=>{a.href=wa(DEF);a.target="_blank";a.rel="noopener"});
const art=(p,label)=>p.img?`<img src="${p.img}" alt="${p.title} by Arsh Interior Solution, Ghaziabad" loading="lazy" style="width:100%;height:100%;object-fit:cover">`:`<svg viewBox="0 0 24 24" role="img" aria-label="${CATS[p.cat]} icon">${ICON[p.cat]}</svg><i>${label||"Sample category"}</i>`;
const svc=document.getElementById("svc"),fs=document.getElementById("fs");
SERVICES.forEach(([n,c,d,t])=>{
 svc.insertAdjacentHTML("beforeend",`<article class="card"><div class="art">${art({cat:c,title:n,img:(PROJECTS.find(p=>p.title===t)||{}).img},"")}</div><div class="body"><h3>${n}</h3><p>${d}</p><a class="btn sm" target="_blank" rel="noopener" href="${wa("Hello Arsh Interior Solution, I am interested in "+n+". Please share the details and quotation.")}">Get a Quote</a></div></article>`);
 fs.add(new Option(n,n));
});
const fl=document.getElementById("filters"),gal=document.getElementById("gal"),fc=document.getElementById("fcat");
[["all","All Projects"],...Object.entries(CATS)].forEach(([k,v],i)=>{
 const b=document.createElement("button");b.textContent=v;b.dataset.k=k;if(!i)b.className="on";b.setAttribute("aria-pressed",!i);fl.appendChild(b);
 if(i)fc.insertAdjacentHTML("beforeend",`<li><a href="#gallery" data-f="${k}">${v}</a></li>`);
});
function draw(k){
 gal.innerHTML="";
 PROJECTS.map((p,i)=>[p,i]).filter(([p])=>k==="all"||p.cat===k).forEach(([p,i])=>{
  gal.insertAdjacentHTML("beforeend",`<button class="card g" data-i="${i}"><div class="art">${art(p)}<span class="cat">${CATS[p.cat]}</span></div><div class="body"><h3 style="font-size:1.1rem">${p.title}</h3><p style="margin-bottom:0">${p.desc}</p></div></button>`);
 });
 [...fl.children].forEach(b=>{const on=b.dataset.k===k;b.classList.toggle("on",on);b.setAttribute("aria-pressed",on)});
}
fl.onclick=e=>{if(e.target.dataset.k)draw(e.target.dataset.k)};
fc.onclick=e=>{if(e.target.dataset.f)draw(e.target.dataset.f)};
draw("all");
const lb=document.getElementById("lb");
gal.onclick=e=>{const g=e.target.closest(".g");if(!g)return;const p=PROJECTS[g.dataset.i];
 document.getElementById("lba").innerHTML=art(p);lbt.textContent=p.title;lbd.textContent=CATS[p.cat]+": "+p.desc;lb.classList.add("open");lbx.focus()};
const closeLb=()=>lb.classList.remove("open");
lbx.onclick=closeLb;lb.onclick=e=>{if(e.target===lb)closeLb()};
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLb()});
const bg=document.getElementById("burger"),mn=document.getElementById("menu");
bg.onclick=()=>{const o=mn.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
mn.onclick=e=>{if(e.target.closest("a"))mn.classList.remove("open")};
document.getElementById("yr").textContent=new Date().getFullYear();
const f=document.getElementById("f");
f.onsubmit=e=>{
 e.preventDefault();let ok=true;
 const chk=(n,fn,msg)=>{const el=f.elements[n],s=el.nextElementSibling;const bad=!fn(el.value.trim());s.textContent=bad?msg:"";if(bad)ok=false};
 chk("name",v=>v.length>1,"Enter your full name.");
 chk("phone",v=>/^(\+?91)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g,"")),"Enter a valid 10-digit mobile number.");
 chk("email",v=>!v||/^\S+@\S+\.\S+$/.test(v),"Enter a valid email address.");
 chk("loc",v=>v.length>1,"Enter the project location.");
 if(!ok)return;
 const d=Object.fromEntries(new FormData(f));
 const msg=`Hello Arsh Interior Solution, I would like a free consultation.\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email||"Not given"}\nProperty: ${d.ptype}\nService: ${d.service}\nBudget: ${d.budget}\nLocation: ${d.loc}\nDetails: ${d.details||"Not given"}`;
 window.open(wa(msg),"_blank","noopener");
 document.getElementById("fm").textContent="WhatsApp opened with your details. Press send there to finish your request.";
};