AOS.init();

Fancybox.bind('[data-fancybox="hlrpay"]')
Fancybox.bind('[data-fancybox="insightAI"]')
Fancybox.bind('[data-fancybox="promptGen"]')
Fancybox.bind('[data-fancybox="groupsPro"]')
Fancybox.bind('[data-fancybox="ultimateTools"]')
Fancybox.bind('[data-fancybox="gameregg"]')
Fancybox.bind('[data-fancybox="chatgpy"]')

let e=(e,a)=>["active",`${e}-0`,`w-[${a||"220px"}]`],r=e=>[`${e}-0`,"w-0"],a=document.querySelectorAll(".drawer");if(a){function t(){window.innerWidth>768&&a.forEach((a=>{let{classList:t}=a,{placement:d,drawerWidth:l}=a.dataset;t.remove(...e(d,l)),t.add(...r(d))}))}window.onresize=t,window.onload=t,a.forEach((t=>{let{placement:d,drawerWidth:l,drawerName:c}=t.dataset;document.querySelectorAll(".drawer-handler").forEach((i=>{let{targetDrawer:o}=i.dataset;i.addEventListener("click",(()=>{if(o===c){let{classList:a}=t;a.contains("active")?(a.remove(...e(d,l)),a.add(...r(d))):(a.remove(...r(d)),a.add(...e(d,l)))}else a.forEach((a=>{let{classList:t}=a,{placement:d,drawerWidth:l,drawerName:c}=a.dataset;o!==c&&(t.remove(...e(d,l)),t.add(...r(d)))}))}))}))}))}