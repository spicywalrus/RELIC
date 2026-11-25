const ICONS=["stag","heron","fox","moth","owl","hare"];
const P=s=>s.trim().split("\n").map(l=>l.split(" — "));
const EMBM=[0,1,3,3,5,5,2,4,2,1,1,4,3,0,1,2,4,0,4,5,3,3,0,4,4,2,2,5,5,3,1,0,4,1,0,1,0,4,3,0,0,4,2,2,3,1,5,1,3,1,2,0];
const TH=P(`The Hour of the Golden Stag — Dignity, renewal, and quiet confidence.
The Moon Beneath the Water — Introspection, dreams, and stillness.
The Feast of Forgotten Things — Nostalgia, rediscovery, and memory.
The Garden After Midnight — Mystery, imagination, and nocturnal beauty.
The Pilgrimage of the White Hare — Curiosity, exploration, and innocence.
The Season of Sleeping Flowers — Rest, restoration, and gentleness.
The Ceremony of the First Flame — Beginnings, courage, and intention.
The Raven’s Testament — Wisdom, observation, and reflection.
The Orchard of Impossible Fruit — Abundance, indulgence, and creativity.
The Blue Hour of the World — Wistfulness, beauty, and contemplation.
The Serpent’s Shedding — Transformation, renewal, and release.
The Constellation of Lost Things — Discovery, forgotten interests, and chance.
The Chapel of Moths — Small wonders, quiet fascination, and delicate beauty.
The Stag at the Threshold — Crossroads, decisions, and new passages.
The Lake of Sleeping Stars — Peace, perspective, and the vastness of things.
The Foxglove Coronation — Confidence, individuality, and strange beauty.
The Bells of the Distant Abbey — Ritual, devotion, and returning to what matters.
The Feast of the Autumn Queen — Sensuality, gratitude, and gathering.
The White Owl’s Vigil — Patience, attention, and thoughtful observation.
The House Beneath the Roots — Home, foundations, and inner life.
The Garden of Unfinished Statues — Imperfection, experimentation, and creative beginnings.
The Pilgrim’s Lantern — Direction, hope, and small acts of courage.
The Thousand-Year Rose — Endurance, tenderness, and timeless things.
The Parliament of Crows — Community, conversation, and shared knowledge.
The Velvet Eclipse — Solitude, mystery, and embracing the unknown.
The Orchard at the End of the World — Presence, abundance, and enjoying what is here.
The Ceremony of the Silver Key — Opportunity, curiosity, and opening doors.
The Winding Path of the Hare — Spontaneity, play, and following a whim.
The Saint of Small Pleasures — Comfort, appreciation, and everyday delight.
The House of Sleeping Bees — Quiet productivity, patience, and slow work.
The Mirror in the Ferns — Self-knowledge, honesty, and seeing clearly.
The Kingdom of the Green Lion — Vitality, ambition, and wild confidence.
The Library of Lost Moons — Learning, imagination, and intellectual wandering.
The Swan’s Last Dance — Beauty, endings, and graceful transitions.
The Feast of the Wild Hunt — Energy, movement, and daring.
The Garden of Glass Birds — Fragility, attention, and protecting what is precious.
The Hour of the Sleeping Giant — Recovery, patience, and gathering strength.
The Witch’s Winter Orchard — Resourcefulness, preservation, and quiet magic.
The Lanterns of the Deep Wood — Exploration, uncertainty, and trusting your instincts.
The Crown of Fallen Leaves — Letting go, acceptance, and change.
The Deer Who Remembers Spring — Hope, memory, and enduring optimism.
The Observatory of Forgotten Gods — Wonder, perspective, and looking beyond the familiar.
The Feast of the Golden Pomegranate — Pleasure, generosity, and creative abundance.
The Fox at the Garden Gate — Cleverness, opportunity, and playful mischief.
The Procession of Paper Stars — Celebration, imagination, and making something of your own.
The Cathedral of Rain — Reflection, melancholy, and finding beauty in quiet days.
The Secret Life of the Meadow — Noticing, slowing down, and appreciating the ordinary.
The Seraph of the Orchard — Grace, generosity, and caring for others.
The Last Firefly — Fleeting beauty, presence, and the preciousness of time.
The Pilgrimage to the Far Shore — Adventure, change, and stepping beyond the familiar.
The Midnight Menagerie — Strange interests, playful curiosity, and embracing the unusual.
The Return of the Sun — Completion, gratitude, and beginning again.`).map((x,i)=>[x[0],x[1],EMBM[i]]);
const PIL=P(`The Grove Beyond the Gate — Visit an unfamiliar garden, forest, or park and wander.
The Chapel of Curiosities — Visit a museum or unusual exhibition.
The Fox’s Crossing — Explore a neighborhood you’ve never properly walked through.
The Forgotten Conservatory — Visit a botanical garden or greenhouse.
The Pilgrim’s Breakfast — Have breakfast somewhere new.
The Raven’s Perch — Find a beautiful place to sit and observe the world.
The Orchard Road — Visit a farm, orchard, or seasonal market.
The House of Old Things — Explore an antique shop.
The Moonlit Path — Take a walk after sunset.
The White Hare’s Trail — Follow a walking path you’ve never taken.
The Library of Dust — Visit a library and browse without a particular book in mind.
The Golden Pavilion — Visit a beautiful building or place of architecture.
The Wishing Well — Find a fountain or body of water and spend a quiet moment there.
The Pilgrimage of Painted Walls — Discover street art, murals, or interesting architecture.
The Nightingale’s Theatre — See a play, dance performance, or live show.
The Feast of Strangers — Try a restaurant serving a cuisine you’ve never explored.
The Silver Compass — Take public transport to an unfamiliar stop and explore.
The House of Glass — Visit an art gallery and spend time with one artwork.
The Fern Cathedral — Find a particularly beautiful natural place and linger.
The Market of Wonders — Visit a farmers’ market or craft market.
The Moth’s Journey — Go somewhere at night that feels different in the dark.
The Cartographer’s Errand — Explore your city with a map, looking for somewhere new.
The Secret Staircase — Find a historic building or public space you’ve never entered.
The River’s Testament — Spend time beside a river, lake, or ocean.
The Pilgrim’s Table — Have a meal outdoors.
The Cabinet of Natural History — Visit a natural history museum or collection.
The Wildflower Expedition — Go on a walk specifically to notice flowers and plants.
The Kingdom of Secondhand Things — Visit a thrift shop and look for something unusual.
The Distant Bells — Visit a church, abbey, temple, or other place of quiet contemplation.
The Golden Ticket — Go to a film screening, cinema, or outdoor movie.
The Serpent’s Garden — Visit a garden with unusual plants or landscaping.
The Lantern Bearer’s Walk — Take a long walk without listening to anything.
The Swan’s Crossing — Visit a bridge, waterfront, or scenic overlook.
The Apothecary’s Shelf — Visit an independent bookshop, herbalist, or curious little shop.
The Feast of Small Wonders — Try three things at a food market you’ve never tasted.
The Clockmaker’s Passage — Visit a historic district and learn a little about its history.
The Starling’s Assembly — Attend a community gathering, workshop, or class.
The Painter’s Window — Go somewhere beautiful and sketch or photograph what you see.
The Hermit’s Picnic — Take yourself on a solo picnic.
The Midnight Observatory — Find a place away from bright lights and look at the stars.
The Hare’s Detour — Take a spontaneous detour on an otherwise ordinary day.
The House of Music — Visit a record shop or attend a live music performance.
The Pilgrimage of Warm Bread — Find a bakery you’ve never visited.
The Keeper of the Keys — Tour a historic house, estate, or old building.
The Garden of Small Beasts — Visit an aquarium, aviary, or wildlife sanctuary.
The Winding Stair — Explore a building or neighborhood on foot, noticing its details.
The Blue Shore — Spend an afternoon by the water.
The Forgotten Festival — Attend a local festival, fair, or seasonal celebration.
The Alchemist’s Workshop — Take a creative class or try a new craft.
The Faraway Village — Take a day trip to a nearby town.
The Pilgrim’s Feast — Plan a special meal with someone you love.
The Edge of the Map — Take a full day to explore somewhere you’ve never been.`);
const ENC=P(`The Chalice of Honey — Have a pastry, a special breakfast, or a little feast.
The Velvet Hour — Spend an uninterrupted hour reading or doing absolutely nothing.
The Golden Bath — Take a long bath or shower with lovely scents and soft lighting.
The Orchard’s Offering — Buy yourself beautiful seasonal fruit.
The Candlelit Chamber — Spend an evening with candles, music, and no unnecessary distractions.
The Featherbed Blessing — Have an early night and make your bed especially inviting.
The Rosewater Elixir — Buy yourself a small luxury you’ve been eyeing.
The Familiar’s Company — Spend quality time with someone whose company comforts you.
The Silver Teapot — Make a special cup of tea or coffee and drink it slowly.
The Sunlit Conservatory — Spend some time reading or relaxing near a window.
The Velvet Ribbon — Wear an outfit that makes you feel especially wonderful.
The Honeyed Afternoon — Take yourself out for a lovely lunch or coffee.
The Sleeping Fox — Give yourself permission to nap.
The Music Box — Listen to an album from beginning to end without multitasking.
The Florist’s Secret — Buy yourself flowers or gather something beautiful from the garden.
The Pomegranate Feast — Cook or order something delicious and a little extravagant.
The Moonlit Walk — Take an evening walk somewhere beautiful.
The Library Key — Buy, borrow, or begin a book you’ve been wanting to read.
The Gilded Afternoon — Take a few hours off without trying to be productive.
The Warm Hearth — Make your home especially cozy for an evening.
The Glasshouse Visit — Visit a greenhouse, botanical garden, or plant shop.
The Moth’s Lantern — Watch a film purely for its atmosphere and beauty.
The Silk Purse — Treat yourself to a small accessory or useful object.
The Wildflower Table — Set the table beautifully for an ordinary meal.
The Sleeping Garden — Have a slow morning with no rushing.
The Silver Spoon — Try a new café, bakery, or restaurant.
The Fox’s Treasure — Visit a secondhand shop or antique store and look for something curious.
The Starlit Bathhouse — Have a little at-home spa evening.
The Painted Wing — Spend time drawing, painting, crafting, or making something.
The Feast of Apricots — Buy a favorite treat and savor it without guilt.
The Quiet Cloister — Spend an afternoon away from screens.
The Moonflower’s Gift — Do something kind for yourself that you’ve been putting off.
The Golden Hour Portrait — Take photographs somewhere beautiful.
The Keeper’s Rest — Delegate, postpone, or remove one unnecessary obligation.
The Secret Garden Gate — Visit a place you love but haven’t been to in a while.
The Nightingale’s Song — Go to a concert, performance, or live music event.
The Porcelain Cup — Buy or use something beautiful in your everyday routine.
The Velvet Curtain — Have a cozy night in with a favorite meal and entertainment.
The Hare’s Holiday — Take an unplanned little outing.
The Honeycomb Hour — Spend time with a hobby simply because you enjoy it.
The Crown of Ivy — Give yourself a little personal grooming or self-care ritual.
The Distant Bells — Visit a museum, gallery, or historical building.
The Queen’s Picnic — Pack a picnic and eat outdoors.
The Amber Elixir — Make a special seasonal drink.
The Familiar’s Feast — Invite someone over for a relaxed meal.
The Wishing Well — Put a little money aside for something you’ve been dreaming about.
The Silver Thread — Repair, mend, or refresh a favorite possession.
The Garden Swing — Spend time outside with no destination or agenda.
The Velvet Paw — Spend a little extra time with an animal you love.
The Star Collector — Stay up a little later to watch the night sky.
The Golden Invitation — Plan something lovely to look forward to.
The Queen’s Sabbath — Give yourself one day or afternoon with no expectations.`);
const MAL=P(`The Dust Wraith — Clean one neglected surface or corner.
The Whispering Drawer — Organize one messy drawer.
The Unanswered Raven — Reply to one message you’ve been avoiding.
The Withered Bouquet — Remove dead flowers, leaves, or clutter.
The Cobwebbed Mirror — Clean a mirror or window.
The Lost Key — Find a proper home for one frequently misplaced item.
The Hungry Hearth — Prepare a proper meal rather than defaulting to convenience.
The Paper Familiar — Sort one small pile of paperwork.
The Wandering Sock — Finish a small laundry task.
The Unwatered Grove — Tend to your plants.
The Crooked Frame — Fix or straighten something in your home.
The Sleeping Bell — Get up when your alarm first rings.
The Forgotten Vessel — Wash and put away all the dishes.
The Hollow Pantry — Check your pantry and make a sensible shopping list.
The Unlit Lantern — Go outside for at least ten minutes.
The Thorn in the Hem — Mend or repair one small thing.
The Wandering Candle — Put away ten things that are out of place.
The Silent Instrument — Spend fifteen minutes on a neglected hobby.
The Empty Birdbath — Refill your water bottle and stay hydrated.
The Tangle of Vines — Untangle one small organizational mess.
The Stale Incense — Change your bedsheets or freshen your bedding.
The House of Dust — Deep-clean one room or particularly neglected area.
The Blackthorn Hedge — Complete a task you’ve been putting off for weeks.
The Raven’s Debt — Review your finances, bills, or outstanding payments.
The Labyrinth of Paper — Sort a substantial amount of paperwork or digital files.
The Winter Cellar — Clear out a cupboard, closet, or storage space.
The Iron Bell — Complete an uncomfortable phone call or appointment.
The Thorned Path — Have a conversation you’ve been avoiding.
The Broken Sundial — Revisit your schedule and make it more realistic.
The Weeping Willow — Spend an hour addressing a source of ongoing stress.
The Serpent’s Knot — Untangle a complicated task by breaking it into smaller steps.
The Empty Nest — Reach out to someone you have been meaning to reconnect with.
The Forgotten Orchard — Complete a neglected personal or household project.
The Glass Mountain — Work for one focused hour on something difficult.
The Drowned Library — Organize a digital space that has become chaotic.
The Unruly Menagerie — Establish a better routine for something that repeatedly gets away from you.
The Locked Chapel — Make a decision you’ve been postponing.
The Crooked Tower — Address one recurring source of disorganization.
The Long Winter — Complete a task that requires several smaller sessions.
The Black Orchard — Complete a major overdue project.
The Cathedral of Stone — Undertake a substantial deep-clean or home reset.
The Nine-Headed Serpent — Resolve a complicated problem you’ve been avoiding.
The Exile of the Golden Stag — Have a difficult but necessary conversation.
The Labyrinth Without Doors — Make meaningful progress on a major life or work decision.
The Winter of the Iron Queen — Complete a demanding administrative or financial undertaking.
The Sunken Kingdom — Sort through a large backlog of unfinished obligations.
The Last Thorn — Finish a project that has been lingering for months.
The Waking Giant — Commit to a substantial healthful or personal routine for the week.
The Ashen Library — Reorganize an entire system that is no longer working.
The Broken Crown — Admit that a commitment is no longer serving you and decide what to do about it.
The Pilgrimage of the Black Swan — Take a meaningful step toward a difficult change.
The Final Winter — Close out a major chapter, project, or lingering responsibility.`);
const QP=["What was the best memory of your week?","What is the funniest thing you heard this week?","What is the most interesting song lyric you came across?","What small thing made you smile?","What did you learn that surprised you?","Who made your week better, and how?","What did you finish that you are proud of?","What did you avoid, and why?","What are you looking forward to?","What would you do differently?","What did you harvest this week?","What was lost?","What will you carry into the next hour?","If this week were weather, what would it be?","If this week had a color, which would it be and why?","What did you notice that you usually miss?","What are you pretending not to know?","What does your future self want you to remember?","What question are you living inside right now?","What would you tell the person you were seven days ago?","Which moment felt most like you?","What ordinary thing felt sacred?"];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const DEF={offset:0,ledger:[{id:1,t:"Tend to the plants",d:0,g:10},{id:2,t:"Finish the taxes",d:0,g:10},{id:3,t:"Plan a special meal",d:0,g:10}],relics:[],refl:{},days:{0:"f",1:"f",2:"h",4:"f"},gold:{total:0,wk:{}},log:[],drawn:{},draws:{}};
let S;try{S=Object.assign({},DEF,JSON.parse(localStorage.getItem("relic-v2")||"{}"))}catch(e){S={...DEF}}
const U0=S._u||0;
const save=()=>{S._u=Date.now();try{localStorage.setItem("relic-v2",JSON.stringify(S))}catch(e){}try{badge()}catch(e){}try{cloudSave()}catch(e){}};
const rng=a=>()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const now=new Date();
const iso=d=>{d=d||new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};const addD=(s,n)=>{const d=new Date(s+"T00:00:00");d.setDate(d.getDate()+n);return iso(d)};
const DG={e:10,m:20,h:30};
const rk=t=>[t.d?1:0,t.s?0:1,t.sk==="r"?0:t.sk==="b"?1:2,-(t.g||0)];const cmpT=(a,b)=>{const x=rk(a),y=rk(b);for(let i=0;i<4;i++)if(x[i]!==y[i])return x[i]-y[i];return 0};
const sunOf=d=>{const x=new Date(d);x.setHours(0,0,0,0);x.setDate(x.getDate()-x.getDay());return iso(x)};
const actual=sunOf(now);
if(!S.cur)S.cur=actual;
if(S.cur<addD(actual,-7))S.cur=addD(actual,-7);
if(S.cur<actual&&(iso()>actual||now.getHours()>=22))S.cur=actual;
const pending=S.cur<actual,mon=new Date(S.cur+"T00:00:00");
const sun=new Date(mon);sun.setDate(mon.getDate()+6);
const fmt=d=>d.toLocaleDateString(undefined,{month:"short",day:"numeric"});
const base=Math.floor(mon.getTime()/6048e5);S.draws=S.draws||{};S.bought=S.bought||{};S.buys=S.buys||[];if(S.offset){S.draws[base]=S.offset;S.offset=0}
const wk=base+(S.draws[base]||0),key=String(base),label=fmt(mon)+" – "+fmt(sun);
const pick=(a,k)=>a[(wk*7+k*3)%a.length];
const today=()=>new Date().toLocaleDateString(undefined,{month:"long",day:"numeric",year:"numeric"});
S.ledger.forEach((x,i)=>{if(!x.id)x.id=Date.now()+i;if(x.g==null)x.g=10;if(!x.cr)x.cr=iso();if(x.sk==null)x.sk="";if(x.df==null)x.df=x.g===10?"e":x.g===20?"m":x.g===30?"h":""});if(!S.hp)S.hp={last:iso(),log:[]};S.mood=S.mood||{};S.songs=S.songs||[];S.hearth=S.hearth||{};S.hadd=S.hadd||{};S.cdone=S.cdone||{};S.prize=S.prize||{};S.goal=S.goal||100;S.seen=S.seen||{};S.wish=S.wish||[];S.skills=S.skills||[];S.ideas=S.ideas||[];S.mnote=S.mnote||{};S.rr=S.rr||{};S.hwho=S.hwho||{};S.goalM=S.goalM||500;S.chores=S.chores||[];S.hhide=S.hhide||{};S.trash=S.trash||[];S.tov=S.tov||{};S.deck=S.deck||{th:[],pil:[],enc:[],mal:[]};S.deck.th.forEach(x=>TH.push(x));S.deck.pil.forEach(x=>PIL.push(x));S.deck.enc.forEach(x=>ENC.push(x));S.deck.mal.forEach(x=>MAL.push(x));
const emb=i=>TH[i]&&TH[i][2]!=null?TH[i][2]:i%6;const DR0=S.drawn[key],OV=(S.tov||{})[key],thI=(OV&&OV.w===wk&&TH[OV.i])?OV.i:(DR0&&DR0.w===wk&&TH[DR0.th])?DR0.th:wk%TH.length;
const Q=(()=>{const r=rng(base*131+7),a=QP.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a.slice(0,5)})();
if(!S.daily)S.daily={items:[{id:1,t:"Yoga and tea"},{id:2,t:"1-on-1"},{id:3,t:"Egg Thief"}],done:{}};
Object.keys(S.drawn).forEach(k=>{if(S.drawn[k].th==null)delete S.drawn[k]});

function banner(){const t=TH[thI];$("#emblem").innerHTML=EMB[emb(thI)]||EMB[0];$("#theme").textContent=t[0].toUpperCase();$("#tag").textContent=t[1];
 const r=rng(wk*977+5);let h="";for(let i=0;i<26;i++){const x=40+r()*620,y=48+r()*120;if(x>280&&x<420&&y>40)continue;h+=`<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${(1+r()*1.6).toFixed(1)}" fill="currentColor" stroke="none"/>`}
 for(let i=0;i<5;i++){const x=70+r()*540,y=70+r()*90;if(x>270&&x<430)continue;h+=`<use href="#star8" x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="16" height="16"/>`}
 $("#stars").innerHTML=h}

function week(){const el=$("#week");el.innerHTML="";
 ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].forEach((n,i)=>{const d=new Date(mon);d.setDate(mon.getDate()+i);const td=d.toDateString()===now.toDateString();
  const b=document.createElement("button");b.className="day"+(td?" today":"");b.setAttribute("aria-label",n+" "+d.getDate()+", tap to mark");
  b.innerHTML=`${n}<b>${d.getDate()}</b>`+(td?`<span class="dot">✦</span>`:`<span class="dot ${S.days[i]||""}"></span>`);
  b.onclick=()=>{const c=S.days[i];S.days[i]=!c?"f":c==="f"?"h":"";save();week()};el.appendChild(b)})}

function toggleDone(it){const G=S.gold;
 if(!it.d){it.d=1;it.dt=today();it.dd=iso();const a=Math.max(0,+it.g||0);S.log.push({id:it.id,t:it.t,g:a,dt:it.dt,k:key,m:iso().slice(0,7)});G.total+=a;G.wk[key]=(G.wk[key]||0)+a}
 else{it.d=0;it.dt="";it.dd="";const i=S.log.map(x=>x.id).lastIndexOf(it.id);if(i>-1){const e=S.log.splice(i,1)[0];G.total=Math.max(0,G.total-e.g);G.wk[e.k]=Math.max(0,(G.wk[e.k]||0)-e.g)}}
 save()}
function ledger(){const ul=$("#ledger");ul.innerHTML="";const st=S.ledger.slice().sort((a,b)=>(a.s?0:1)-(b.s?0:1)||(a.d?1:0)-(b.d?1:0)||cmpT(a,b)).slice(0,3);
 if(!st.length){ul.innerHTML=`<li><span>Open the Ledger to add your first task.</span></li>`;return}
 st.forEach(it=>{const li=document.createElement("li");li.className=it.d?"done":"";li.innerHTML=`<button class="chk" aria-label="Toggle done">${it.d?"✓":""}</button><span>${esc(it.t)}</span>${it.sk?`<span class="sk ${it.sk}">☠</span>`:""}<small class="g">${it.g}g</small>`;
  li.querySelector(".chk").onclick=e=>{e.stopPropagation();toggleDone(it);ledger();bank()};ul.appendChild(li)})}

const D=$("#dlg");
function dlg(h,c){const sc=D.scrollTop;D.className=c||"";D.innerHTML=h;if(!D.open)D.showModal();D.scrollTop=sc;D.querySelectorAll("[data-close]").forEach(b=>b.onclick=()=>D.close())}
D.addEventListener("click",e=>{if(e.target===D)D.close()});

let ntxt="",ndf="e",nsk="",ndue="";
const skLbl={"":"No skull","r":"Urgent: 10 damage if not done by its date","b":"Important: 1 damage for each day on the ledger"};
const skNext=s=>s===""?"r":s==="r"?"b":"";
function folder(msg){const LG=$("#lgBox");
 const rows=S.ledger.map((it,i)=>[it,i]).sort((a,b)=>cmpT(a[0],b[0])).map(([it,i])=>`<div class="frow${it.d?" done":""}"><button class="star${it.s?" on":""}" data-s="${i}" aria-label="Star as important">${it.s?"★":"☆"}</button><button class="chk" data-d="${i}" aria-label="Toggle done">${it.d?"✓":""}</button><input class="t" data-e="${i}" value="${esc(it.t)}" maxlength="80" aria-label="Task"><select class="df" data-f="${i}" aria-label="Difficulty">${it.df?"":`<option value="" selected>Chore ${it.g}g</option>`}<option value="e"${it.df==="e"?" selected":""}>Easy 10g</option><option value="m"${it.df==="m"?" selected":""}>Medium 20g</option><option value="h"${it.df==="h"?" selected":""}>Hard 30g</option></select><button class="sk ${it.sk||"off"}" data-k="${i}" aria-label="Skull" title="${skLbl[it.sk||""]}">☠</button>${it.sk==="r"?`<input class="di" type="date" data-due="${i}" value="${it.due||""}" aria-label="Due date" title="Due date">`:""}<button data-x="${i}" aria-label="Remove" style="background:none;border:0;opacity:.5;cursor:pointer;font-size:18px">×</button></div>`).join("");
 LG.innerHTML=`<p class="fnote">${msg||"Star the three tasks that matter most. Finishing a task earns its gold."}</p><form id="fAdd" style="margin-bottom:8px"><div style="display:flex;gap:8px"><input id="fNew" placeholder="Add a task…" aria-label="New task" maxlength="80" value="${esc(ntxt)}"><select id="fG" aria-label="Difficulty" style="width:112px;flex:none"><option value="e"${ndf==="e"?" selected":""}>Easy 10g</option><option value="m"${ndf==="m"?" selected":""}>Medium 20g</option><option value="h"${ndf==="h"?" selected":""}>Hard 30g</option></select><button class="btn" type="submit">Add</button></div><div style="display:flex;gap:8px;align-items:center;margin-top:6px"><button type="button" class="sk ${nsk||"off"}" id="nSk" aria-label="Skull" title="Skull">☠</button><span class="fnote" style="margin:0;flex:1;font-size:15px">${skLbl[nsk]}</span>${nsk==="r"?`<input class="di" type="date" id="nDue" value="${ndue}" min="${iso()}" aria-label="Due date">`:""}</div></form>${rows||`<p class="fnote">No tasks yet.</p>`}${S.trash.length?`<h3 class="shop">RECENTLY DELETED</h3>`+S.trash.map((t,i)=>`<div class="frow"><span style="flex:1;font-style:italic">${esc(t.t)}</span><button class="link" data-rs="${i}">Restore</button><button data-rx="${i}" aria-label="Delete for good" style="background:none;border:0;opacity:.5;cursor:pointer;font-size:18px">×</button></div>`).join(""):""}<p><button class="link" id="lgBack">← Back to the dashboard</button></p>`;$("#lgBack").onclick=()=>show("home");if($("#v-ledger").hidden)show("ledger");
 LG.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{const it=S.ledger[+b.dataset.s];if(!it.s&&S.ledger.filter(x=>x.s).length>=3){folder("Only three can be starred. Unstar one first.");return}it.s=it.s?0:1;save();ledger();folder()});
 LG.querySelectorAll("[data-d]").forEach(b=>b.onclick=()=>{toggleDone(S.ledger[+b.dataset.d]);ledger();bank();hearth();folder()});
 LG.querySelectorAll("[data-e]").forEach(i=>i.onchange=()=>{const v=i.value.trim(),it=S.ledger[+i.dataset.e];if(v)it.t=v;else i.value=it.t;save();ledger();hearth()});
 LG.querySelectorAll("[data-f]").forEach(i=>i.onchange=()=>{const it=S.ledger[+i.dataset.f];if(i.value){it.df=i.value;it.g=DG[i.value]}save();ledger();folder()});
 LG.querySelectorAll("[data-k]").forEach(b=>b.onclick=()=>{const it=S.ledger[+b.dataset.k];it.sk=skNext(it.sk||"");if(it.sk==="r"&&!it.due)it.due=addD(iso(),7);save();ledger();folder()});
 LG.querySelectorAll("[data-due]").forEach(i=>i.onchange=()=>{S.ledger[+i.dataset.due].due=i.value;save()});
 LG.querySelectorAll("[data-x]").forEach(b=>b.onclick=()=>{const r=S.ledger.splice(+b.dataset.x,1)[0];S.trash.unshift({...r,gone:iso()});S.trash=S.trash.slice(0,30);save();ledger();hearth();folder()});
 LG.querySelectorAll("[data-rs]").forEach(b=>b.onclick=()=>{const t=S.trash.splice(+b.dataset.rs,1)[0];delete t.gone;S.ledger.push(t);save();ledger();hearth();folder()});
 LG.querySelectorAll("[data-rx]").forEach(b=>b.onclick=()=>{S.trash.splice(+b.dataset.rx,1);save();folder()});
 $("#nSk").onclick=()=>{ntxt=$("#fNew").value;ndf=$("#fG").value;if($("#nDue"))ndue=$("#nDue").value;nsk=skNext(nsk);if(nsk==="r"&&!ndue)ndue=addD(iso(),7);folder(msg)};
 $("#fAdd").onsubmit=e=>{e.preventDefault();const v=$("#fNew").value.trim(),gv=$("#fG").value;if(!v)return;S.ledger.push({id:Date.now(),t:v,d:0,s:0,df:gv,g:DG[gv]||10,sk:nsk,due:nsk==="r"?(($("#nDue")&&$("#nDue").value)||addD(iso(),7)):"",cr:iso()});ntxt="";ndf="e";nsk="";ndue="";save();ledger();hearth();folder();$("#fNew").focus()}}
const lp=$("#ledgerPanel");lp.onclick=()=>folder();lp.onkeydown=e=>{if(e.target===lp&&(e.key==="Enter"||e.key===" ")){e.preventDefault();folder()}};

function mReward(v){const i=MAL.indexOf(v);return i<0||i>=52?20:i<21?10:i<39?20:30}
const mTierName=i=>i<21?"Easy":i<39?"Medium":i<52?"Legendary":"Custom";
function pickM(){const r=rng(wk*17+3)(),w=MAL.map((x,i)=>i>=39&&i<52?.4:1),t=w.reduce((a,b)=>a+b,0);let a=r*t;for(let i=0;i<w.length;i++){a-=w[i];if(a<=0)return MAL[i]}return MAL[0]}
function cards(){const A={p:PIL,e:ENC,m:MAL},fnd=(a,n)=>a.find(x=>x[0]===n),sel=DR0&&DR0.w===wk&&DR0.n?DR0.n.map((n,i)=>fnd([PIL,ENC,MAL][i],n)):[];
 const t=[["p",sel[0]||pick(PIL,1)],["e",sel[1]||pick(ENC,2)],["m",sel[2]||pickM()]];
 S.drawn[key]={label,w:wk,th:thI,n:t.map(x=>x[1][0])};
 t.forEach(([k,v])=>{$("#"+k+"Title").textContent=v[0];const ck=wk+":"+k,done=S.cdone[ck],rr=S.rr[key],B=$("#"+k+"Back"),rw=k==="m"?mReward(v):20;
  B.innerHTML=`<span>${esc(v[1])}</span><button class="btn" data-cc="${k}"${done?" disabled":""}>${done?"Completed ✓":"Complete +"+rw+"g"}</button><button class="link" data-rr="${k}"${rr?" disabled":""}>${rr?"Reroll used this week":"Reroll (1 left)"}</button>`;
  const b=$("#"+k+"Pic");b.onclick=()=>b.setAttribute("aria-pressed",b.classList.toggle("on"));b.onkeydown=e=>{if(e.target===b&&(e.key==="Enter"||e.key===" ")){e.preventDefault();b.click()}};
  B.querySelector("[data-cc]").onclick=e=>{e.stopPropagation();if(S.cdone[ck])return;S.cdone[ck]=1;award("c:"+ck,"Card: "+v[0],rw);cards();bank()};
  B.querySelector("[data-rr]").onclick=e=>{e.stopPropagation();if(S.rr[key])return;const alt=A[k].filter(x=>x[0]!==v[0]);if(!alt.length)return;S.drawn[key].n[{p:0,e:1,m:2}[k]]=alt[Math.floor(Math.random()*alt.length)][0];S.rr[key]=1;save();cards()}});
 save()}

function show(v){$$(".view").forEach(s=>s.hidden=s.id!=="v-"+v);$$(".nav").forEach(b=>b.classList.toggle("on",b.dataset.v===(v==="ledger"?"home":v)));if(v==="bank")bank();if(v==="archive")archive();if(v==="life")life();if(v==="hearth")hearth();if(v==="daily")daily();if(v==="mood")mood();if(v==="egg")egg();if(v==="wish")wish();if(v==="deck")deck();if(v==="skill")skills();if(v==="dream")dream();if(v==="reflection"){S.seen[key]=1;save();star()}window.scrollTo(0,0);fit()}
$$(".nav").forEach(b=>b.onclick=()=>show(b.dataset.v));$$("[data-go]").forEach(b=>b.onclick=()=>show(b.dataset.go));

function shrink(f,cb){const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const k=Math.min(1,360/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=im.width*k;c.height=im.height*k;c.getContext("2d").drawImage(im,0,0,c.width,c.height);cb(c.toDataURL("image/jpeg",.7))};im.src=r.result};r.readAsDataURL(f)}
function reliquary(){const G={};S.relics.forEach((r,i)=>{const k=r.k||"0";(G[k]=G[k]||{l:r.l||"Earlier",it:[]}).it.push([r,i])});
 S.buys.forEach(b=>{const k=b.k||"0",g=G[k]=G[k]||{l:b.l||b.dt||"Earlier",it:[]};(g.bs=g.bs||[]).push(b)});
 const ks=Object.keys(G).sort((a,b)=>b-a);
 $("#rList").innerHTML=ks.length?`<div class="rgrid">${ks.map(k=>{const g=G[k],ph=g.it.filter(x=>x[0].img||x[0].imgId).slice(0,4),tx=g.it.find(x=>x[0].text);
  return `<div class="frame rblock"><h3>${k==="0"?"EARLIER":"WEEK OF "+esc(g.l).toUpperCase()}</h3><div class="collage c${ph.length}">${ph.length?ph.map(x=>`<img src="${mu(x[0])}" alt="">`).join(""):`<p>${tx?esc(tx[0].text):"♪"}</p>`}</div>${g.it.map(([r,i])=>`<div class="ri"><span>${esc(r.text||(r.img||r.imgId?"Photo":r.aud?"Audio":"Link"))}</span><button class="link" data-del="${i}" aria-label="Remove">×</button></div>${r.aud?`<audio controls src="${r.aud}" style="width:100%"></audio>`:""}${r.link?`<a class="alink" href="${esc(r.link)}" target="_blank" rel="noopener">Open link</a>`:""}`).join("")}${(g.bs||[]).map(b=>`<div class="ri"><svg class="ic" viewBox="0 0 24 24" style="width:20px;height:20px"><path d="${rwIcon(b.n)}"/></svg><span>${esc(b.n)}</span></div>`).join("")}</div>`}).join("")}</div>`:`<p class="lead">Nothing kept yet. Add a photo or a few words.</p>`;
 $$("[data-del]").forEach(b=>b.onclick=()=>{S.relics.splice(+b.dataset.del,1);save();reliquary()})}
$("#rs").onclick=()=>{const t=$("#rt").value.trim(),f=$("#rf").files[0],au=$("#ra").files[0],lk=$("#rl").value.trim();if(!t&&!f&&!au&&!lk)return;
 if(au&&au.size>1.2e6){dlg(`<h3>TOO LARGE</h3><p>Audio clips must be about 1 MB or smaller. Try a shorter clip, or paste a link instead.</p><div class="btns"><button class="link" data-close>Close</button></div>`);return}
 const fin=(img,aud,iid)=>{S.relics.unshift({text:t,img:iid?"":img||"",imgId:iid||"",aud:aud||"",link:/^https?:\/\//.test(lk)?lk:"",date:today(),k:key,l:label});["#rt","#rf","#ra","#rl"].forEach(s=>$(s).value="");save();reliquary()};
 const step=async img=>{let iid="";if(img&&AS){try{iid=(await AS.upload(d2b(img))).id}catch(e){}}if(au){const r=new FileReader();r.onload=()=>fin(img,r.result,iid);r.readAsDataURL(au)}else fin(img,"",iid)};
 f?shrink(f,step):step("")};
function arm(b,fn){b.onclick=()=>{if(b.dataset.a){fn();return}b.dataset.a=1;const o=b.textContent;b.textContent="Tap again to confirm";setTimeout(()=>{delete b.dataset.a;b.textContent=o},3000)}}
const REW=[["A little treat",25,"M5 11h14l-1.5 8h-11zM6 11a6 6 0 0 1 12 0M12 5V3"],["A new record",40,"M12 3a9 9 0 1 0 .01 0zM12 10a2 2 0 1 0 .01 0z"],["A new book",60,"M5 4h10a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3zM5 17a3 3 0 0 1 3-3h10"],["A favorite coffee out",20,"M5 9h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zM16 10h2a2 2 0 0 1 0 4h-2M8 3v3M12 3v3"],["A movie night",35,"M4 6h16v12H4zM4 10h16M8 6l-2 4M13 6l-2 4M18 6l-2 4"],["A new plant",30,"M12 21v-8M12 13c0-4-3-6-7-6 0 4 2 6 7 6zM12 15c0-3 2-5 6-5 0 3-2 5-6 5zM8 21h8"],["A long bath and a good tea",15,"M4 11h13v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM17 12h1.5a2.5 2.5 0 0 1 0 5H16M8 4c0 2 2 2 2 4M12 4c0 2 2 2 2 4"],["Dinner at a nice place",80,"M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M16 3c-2 2-2 8 0 9v9"],["A small art supply",45,"M12 3a9 9 0 0 0 0 18c2 0 2-2 1-3s0-3 2-3h3a3 3 0 0 0 3-3c0-5-4-9-9-9zM8 11h.01M12 7h.01M16 9h.01"],["A new game",70,"M6 9h12a4 4 0 0 1 4 4v1a3 3 0 0 1-5 2l-1-2H8l-1 2a3 3 0 0 1-5-2v-1a4 4 0 0 1 4-4zM8 12v3M6.5 13.5h3M16 12.5h.01M18 14.5h.01"],["A day trip",100,"M3 17h18M5 17l1.5-6h11L19 17M7 17v2M17 17v2M8 14h.01M16 14h.01"],["Something from the wish list",50,"M4 10h16v10H4zM3 7h18v3H3zM12 7v13"]];
const GIFT="M4 10h16v10H4zM3 7h18v3H3zM12 7v13M12 7c-3 0-4-4-1-4 2 0 1 4 1 4zM12 7c3 0 4-4 1-4-2 0-1 4-1 4z";
const rwIcon=n=>{const r=REW.find(x=>n.startsWith(x[0]));return r?r[2]:GIFT};
function shop(){const r=rng(wk*31+7),pool=REW.slice(),out=[];while(out.length<3)out.push(pool.splice(Math.floor(r()*pool.length),1)[0]);return out}
function bank(){const G=S.gold,w=G.wk[key]||0,L=S.log.filter(x=>!x.c&&!x.q).slice().reverse();
 $("#bankBox").innerHTML=`<div class="coins"><div class="frame coin" id="cw" role="button" tabindex="0" aria-label="Edit this week’s gold"><small>This week</small><b>${w}</b></div><div class="frame coin" id="ct" role="button" tabindex="0" aria-label="Edit total gold"><small>Total</small><b>${G.total}</b></div></div>
 <div class="bk"><div class="bkL"><h3 class="shop">REWARDS SHOP</h3><p class="lead" style="margin:0 0 10px">Three treats this week. Spend your total gold.</p>
 <div class="rew">${shop().map((it,i)=>{const got=S.bought[wk+":"+i],can=G.total>=it[1];return `<div class="frame rw${got?" got":""}"><svg class="ic" viewBox="0 0 24 24"><path d="${it[2]}"/></svg><i>${esc(it[0])}</i><small>${it[1]} gold</small>${got?`<small>Purchased</small>`:`<button class="btn" data-buy="${i}"${can?"":" disabled"}>Buy</button>`}</div>`}).join("")}</div></div><div class="bkR">${gbar(w)}</div></div>
 <p class="btnrow"><button class="btn" id="bClr">Clear completed tasks</button><button class="btn" id="bWk">Clear weekly gold</button><button class="btn" id="bAll">Clear all gold</button></p>
 ${L.length?L.map(x=>`<div class="entry"><div>${esc(x.t)}<small>${esc(x.dt)}</small></div><b style="margin-left:auto">+${x.g}</b></div>`).join(""):`<p class="lead">No completed tasks in the bank.</p>`}`;
 const ed=(id,cur,fn)=>{const el=$(id);el.onkeydown=e=>{if(e.target===el&&e.key==="Enter")el.click()};el.onclick=()=>{const b=el.querySelector("b");if(b.querySelector("input"))return;b.innerHTML=`<input type="number" min="0" value="${cur}" aria-label="Gold amount" style="text-align:center;font:inherit;padding:0">`;const i=b.firstChild;i.focus();i.select();let d=0;const c=()=>{if(d)return;d=1;fn(Math.max(0,Math.round(+i.value||0)));save();bank()};i.onblur=c;i.onkeydown=e=>{if(e.key==="Enter")c();if(e.key==="Escape"){d=1;bank()}}}};
 ed("#cw",w,v=>{G.total=Math.max(0,G.total+v-w);G.wk[key]=v});
 ed("#ct",G.total,v=>{G.total=v});
 $$("[data-buy]").forEach(b=>b.onclick=()=>{const i=+b.dataset.buy,it=shop()[i];if(G.total<it[1])return;G.total-=it[1];S.bought[wk+":"+i]=1;S.buys.push({n:it[0],p:it[1],k:key,l:label,dt:today()});save();bank()});
 $("#bClr").onclick=()=>{S.log.forEach(x=>x.c=1);save();bank()};
 arm($("#bWk"),()=>{G.total=Math.max(0,G.total-w);G.wk[key]=0;save();bank()});
 arm($("#bAll"),()=>{G.total=0;G.wk={};save();bank()});
 if($("#gPrize"))$("#gPrize").onclick=()=>{const m=iso().slice(0,7),pool=S.wish.filter(x=>!x.won),n=pool.length?pool[Math.floor(Math.random()*pool.length)]:null,name=n?n.t:REW[Math.floor(Math.random()*REW.length)][0];if(n)n.won=m;S.prize[m]=name;S.buys.push({n:name+" (mystery prize)",p:0,k:key,l:label,dt:today()});save();bank()};
 $("#gGoal").onchange=e=>{S.goalM=Math.max(50,Math.round(+e.target.value)||500);save();bank()}}

function archive(){const Y=S.ay||now.getFullYear(),s=new Date(Y,0,1);s.setDate(s.getDate()-s.getDay());let h="";
 for(let i=0;i<52;i++){const m=new Date(s);m.setDate(s.getDate()+i*7);const e=new Date(m);e.setDate(m.getDate()+6);const b=Math.floor(m.getTime()/6048e5),d=S.drawn[b];
  h+=`<button class="sq${b===base?" cur":""}${d?" has":""}" data-b="${b}" data-l="${fmt(m)} – ${fmt(e)}" aria-label="Week ${i+1}, ${fmt(m)}">${d?`<svg viewBox="0 0 24 24"><use href="#i-${ICONS[emb(d.th)]}"/></svg>`:""}<small>${i+1}</small></button>`}
 $("#aGrid").innerHTML=h;$("#yNum").textContent=Y;$("#yPrev").onclick=()=>{S.ay=Y-1;save();archive()};$("#yNext").onclick=()=>{S.ay=Y+1;save();archive()};$$(".sq").forEach(b=>b.onclick=()=>snap(b.dataset.b,b.dataset.l))}
function snap(b,lab,extra){const d=S.drawn[b],r=S.refl[b],L=S.log.filter(x=>x.k==b&&!x.q),R=S.relics.filter(x=>x.k==b),g=S.gold.wk[b]||0,B=S.buys.filter(x=>x.k==b),th=d?TH[d.th]:null;
 dlg(`<h3>${th?esc(th[0].toUpperCase()):"WEEK OF "+esc(lab).toUpperCase()}</h3><p class="fnote">Week of ${esc(lab)}${th?"<br>"+esc(th[1]):""}</p>`
 +(d?`<p>${d.n.map((n,i)=>"<b>"+["Pilgrimage","Encounter","Malady"][i]+":</b> "+esc(n)).join("<br>")}</p>`:`<p class="fnote">Nothing was recorded for this week.</p>`)
 +`<p><b>Gold earned:</b> ${g}</p>`+(B.length?`<p><b>Rewards bought:</b> ${B.map(x=>esc(x.n)+" ("+x.p+")").join(", ")}</p>`:"")
 +(L.length?`<p><b>Completed tasks</b></p>`+L.map(x=>`<div class="frow">${esc(x.t)}<span style="margin-left:auto">+${x.g}</span></div>`).join(""):"")
 +(r?(r.qs||Q).map((q,i)=>r.a[i]?`<p><b>${q}</b><br>${esc(r.a[i])}</p>`:"").join(""):"")
 +(r&&r.song&&r.song.t?`<p><b>Song of the week:</b> ${esc(r.song.t)}${r.song.a?" by "+esc(r.song.a):""}</p>`:"")
 +(R.length?`<p><b>Reliquary</b></p>`+R.map(x=>`<div class="entry">${x.img||x.imgId?`<img src="${mu(x)}" alt="" style="width:60px;height:60px">`:""}<div>${esc(x.text||"")}</div></div>`).join(""):"")
 +(extra||`<div class="btns"><button class="link" data-close>Close</button></div>`),"folder");if(extra)$("#nw").onclick=()=>{S.cur=addD(S.cur,7);save();location.reload()}}

function journal(){const ks=Object.keys(S.refl).sort((a,b)=>b-a);$("#jList").innerHTML=ks.length?ks.map(k=>{const r=S.refl[k],s=r.song;return `<div class="entry"><div><small>Week of ${esc(r.label)}</small>${(r.qs||Q).map((q,i)=>r.a[i]?`<p><b>${esc(q)}</b><br>${esc(r.a[i])}</p>`:"").join("")}${s&&s.t?`<p><b>Song of the week:</b> ${esc(s.t)}${s.a?" by "+esc(s.a):""}${/^https?:\/\//.test(s.l)?` <a class="alink" href="${esc(s.l)}" target="_blank" rel="noopener">Listen</a>`:""}</p>`:""}</div></div>`}).join(""):`<p class="lead">Nothing saved yet.</p>`}
function reflection(){const rr=S.refl[key]||{},qs=rr.qs||Q,cur=rr.a||["","","","",""],sg=rr.song||{t:"",a:"",l:""};$("#rLead").textContent="Week of "+label;
 $("#rForm").innerHTML=qs.map((q,i)=>`<label for="q${i}">${esc(q)}</label><textarea id="q${i}" rows="3">${esc(cur[i]||"")}</textarea>`).join("")+`<label for="sgt">Song or album of the week</label><div style="display:flex;gap:8px"><input id="sgt" placeholder="Title" value="${esc(sg.t)}"><input id="sga" placeholder="Artist" value="${esc(sg.a)}"></div><input id="sgl" placeholder="Link (optional)" style="margin-top:6px" value="${esc(sg.l)}"><p><button class="btn" id="qs">Save reflection</button></p>`;
 $("#qs").onclick=()=>{const a=qs.map((_,i)=>$("#q"+i).value),ok=a.filter(x=>x.trim()).length>=3;S.refl[key]={label,a,qs,song:{t:$("#sgt").value,a:$("#sga").value,l:$("#sgl").value},done:ok?1:0};save();journal();star();dlg(`<h3>SAVED</h3><p>${ok?(pending?"Your week is closed out. Begin the new week when you are ready.":"Your reflection is saved."):"Answer at least three questions to close out the week."}</p><div class="btns"><button class="link" data-close>Close</button></div>`)}}

$("#who").onclick=()=>dlg(`<h3>PROFILE</h3><p>${cready?"Your planner is saved to your Claude account and follows you between devices. Photos sync too. Audio clips stay on this device.":"Saving to this device only. Open the published page while signed in to Claude to turn on account saving."}</p><div class="btns"><button class="link" data-close>Close</button></div>`);
$("#drawBtn").onclick=()=>{if(pending){if((S.refl[key]||{}).done)snap(key,label,`<div class="btns"><button class="link" data-close>Not yet</button><button class="btn flash" id="nw">Load the new week →</button></div>`);return}S.draws[base]=(S.draws[base]||0)+1;save();location.reload()};
if(!S.starInit){S.ledger.filter(x=>!x.d).slice(0,3).forEach(x=>x.s=1);S.starInit=1;save()}
const HEART="M50 86C10 56 1 38 1 24 1 10 12 2 25 2c11 0 21 6 25 14C54 8 64 2 75 2c13 0 24 8 24 22 0 14-9 32-49 62z";
const CHORES=[["Wash the linens","Laundry","M8 3l-5 4 3 3 2-1v12h8V9l2 1 3-3-5-4a4 4 0 0 1-8 0z"],["Tend the hearth","Clean the kitchen","M5 11h14v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM3 11h18M9 7V4M15 7V4"],["Sweep the floors","Vacuum and sweep","M14 3l-4 9M6 12l-2 9h14l-2-9zM8 16h8"],["Banish the bins","Take out the trash","M5 7h14M9 7V4h6v3M7 7l1 13h8l1-13M10 11v6M14 11v6"],["Water the garden","Water the plants","M12 21v-9M12 12c0-5-4-7-8-7 0 5 3 7 8 7zM12 15c0-4 3-6 7-6 0 4-3 6-7 6z"],["Restock the pantry","Grocery shopping","M8 3h8M7 6h10v14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zM7 10h10M7 16h10"],["Change the bedding","Fresh sheets","M3 18V6M3 13h18v5M21 18v-5a3 3 0 0 0-3-3h-7v3M6 10.5h.01"],["Scrub the washroom","Clean the bathroom","M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11zM9.5 14a2.5 2.5 0 0 0 2.5 2.5"],["Prepare the feasts","Meal prep for the week","M3 18h18M5 18a7 7 0 0 1 14 0M12 8V6M10 6h4"],["Settle the accounts","Pay bills and check the budget","M12 3a9 9 0 1 0 .01 0zM12 7v10M9 9.5c0-2 6-2 6 0s-6 1.5-6 3.5 6 2 6 0"]];
const newT=(t,g,df)=>({id:Date.now()+Math.random(),t,d:0,s:0,df,g,sk:"",due:"",cr:iso()});
const DAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const ICN=[["Laundry",0],["Kitchen",1],["Floors",2],["Trash",3],["Plants",4],["Groceries",5],["Bed",6],["Bath",7],["Cooking",8],["Money",9]];
const STARP="M12 3l2.6 5.6 6 .7-4.5 4.2 1.2 6L12 16.5 6.7 19.5l1.2-6L3.4 9.3l6-.7z";
function chores(){return CHORES.map((c,i)=>({k:String(i),t:c[0],s:c[1],p:c[2]})).filter(x=>!S.hhide[x.k]).concat(S.chores.map(c=>({k:"c"+c.id,t:c.t,s:c.s||"",p:CHORES[c.ic]?CHORES[c.ic][2]:STARP})))}
function hearth(){const L=chores();$("#hList").innerHTML=L.map(c=>{const k=c.k,on=S.ledger.some(x=>!x.d&&x.t===c.t),ds=S.hearth[k]||[],w=S.hwho[k]||"A",nm=w==="H"?"Helen":"Alex";return `<div class="frame chore"><button class="xdel" data-hx="${k}" aria-label="Remove ${esc(c.t)}" title="Remove">×</button><button class="who2${w==="H"?" h":""}" data-who="${k}" aria-label="Assigned to ${nm}. Tap to switch." title="${nm}">${w}</button><svg viewBox="0 0 24 24" class="ci"><path d="${c.p}"/></svg><i>${esc(c.t)}</i><small>${esc(c.s)}</small><div class="wd">${["S","M","T","W","T","F","S"].map((l,d)=>`<button class="${ds.includes(d)?"on":""}" data-hw="${k}:${d}" aria-label="${DAYS[d]}" aria-pressed="${ds.includes(d)}">${l}</button>`).join("")}</div><button class="btn" data-c="${k}"${on||w==="H"?" disabled":""}>${w==="H"?"Helen’s chore":on?"In the Ledger ✓":"Add to Ledger · 5g"}</button></div>`}).join("")+`<form id="hAdd" class="frame chore hadd"><b style="font-style:italic">Add an activity</b><input id="hn" placeholder="Activity (e.g. Walk the dog)" maxlength="40" aria-label="Activity name"><input id="hs" placeholder="Short note (optional)" maxlength="50" aria-label="Note"><select id="hi" aria-label="Icon">${ICN.map(([n,i])=>`<option value="${i}">${n} icon</option>`).join("")}<option value="-1">Star icon</option></select><button class="btn" type="submit">Add</button>${Object.keys(S.hhide).length?`<button class="link" type="button" id="hRest">Restore removed activities</button>`:""}</form>`;
 $$("[data-hw]").forEach(b=>b.onclick=()=>{const[k,d0]=b.dataset.hw.split(":"),d=+d0,a=S.hearth[k]=S.hearth[k]||[],i=a.indexOf(d);i>-1?a.splice(i,1):a.push(d);save();hearth()});
 $$("[data-who]").forEach(b=>{const k=b.dataset.who;b.onclick=()=>{S.hwho[k]=(S.hwho[k]||"A")==="H"?"A":"H";save();hearth()}});
 $$("[data-hx]").forEach(b=>b.onclick=()=>{const k=b.dataset.hx;if(k[0]==="c")S.chores=S.chores.filter(c=>"c"+c.id!==k);else S.hhide[k]=1;save();hearth()});
 $$("[data-c]").forEach(b=>b.onclick=()=>{const c=chores().find(x=>x.k===b.dataset.c);if(c){S.ledger.push(newT(c.t,5,""));save();ledger();hearth()}});
 $("#hAdd").onsubmit=e=>{e.preventDefault();const t=$("#hn").value.trim();if(!t)return;S.chores.push({id:Date.now(),t,s:$("#hs").value.trim(),ic:+$("#hi").value});save();hearth()};
 if($("#hRest"))$("#hRest").onclick=()=>{S.hhide={};save();hearth()}}
function hearthAuto(){const t=iso(),wd=new Date().getDay();chores().forEach(c=>{if((S.hwho[c.k]||"A")==="A"&&(S.hearth[c.k]||[]).includes(wd)&&!S.hadd[c.k+":"+t]){S.hadd[c.k+":"+t]=1;if(!S.ledger.some(x=>!x.d&&x.t===c.t))S.ledger.push(newT(c.t,5,""))}});save()}
function award(id,t,g,q){const G=S.gold;S.log.push({id,t,g,dt:today(),k:key,q:q||0,m:iso().slice(0,7)});G.total+=g;G.wk[key]=(G.wk[key]||0)+g;save()}
function refund(id){const i=S.log.map(x=>x.id).lastIndexOf(id);if(i>-1){const e=S.log.splice(i,1)[0],G=S.gold;G.total=Math.max(0,G.total-e.g);G.wk[e.k]=Math.max(0,(G.wk[e.k]||0)-e.g)}save()}
function dailyBonus(){const t=iso(),l=S.daily.done[t]||[],all=S.daily.items.length&&S.daily.items.every(y=>l.includes(y.id)),bid="dall"+t;if(all&&!S.log.some(e=>e.id===bid))award(bid,"Daily rituals complete",10,1);if(!all)refund(bid)}
function dailyIcon(){const t=iso(),dn=S.daily.done[t]||[],all=S.daily.items.length&&S.daily.items.every(x=>dn.includes(x.id));$("#dIco").innerHTML=all?`<circle cx="16" cy="16" r="11"/><path d="M10.5 16.5l4 4 7-8"/>`:`<circle cx="16" cy="16" r="11"/>`}
function daily(){const t=iso(),dn=S.daily.done[t]||[];
 $("#dBox").innerHTML=S.daily.items.map(x=>{const on=dn.includes(x.id);return `<div class="frow"><button class="chk" data-dd="${x.id}" aria-label="Toggle">${on?"✓":""}</button><span style="flex:1;font-style:italic;font-size:19px${on?";text-decoration:line-through;opacity:.6":""}">${esc(x.t)}</span><button data-dx="${x.id}" aria-label="Remove" style="background:none;border:0;opacity:.5;cursor:pointer;font-size:18px">×</button></div>`}).join("")+`<form id="dAdd" style="display:flex;gap:8px;margin-top:12px"><input id="dNew" placeholder="Add a daily ritual…" maxlength="60" aria-label="New daily ritual"><button class="btn" type="submit">Add</button></form>`;
 $$("[data-dd]").forEach(b=>b.onclick=()=>{const id=+b.dataset.dd,l=S.daily.done[t]=S.daily.done[t]||[],k=l.indexOf(id);if(k>-1)l.splice(k,1);else l.push(id);dailyBonus();save();daily();bank()});
 $$("[data-dx]").forEach(b=>b.onclick=()=>{S.daily.items=S.daily.items.filter(y=>y.id!==+b.dataset.dx);dailyBonus();save();daily();bank()});
 $("#dAdd").onsubmit=e=>{e.preventDefault();const v=$("#dNew").value.trim();if(v){S.daily.items.push({id:Date.now(),t:v});dailyBonus();save();daily();bank()}};
 dailyIcon()}
const mc=n=>{const t=(n-1)/9,a=[59,111,196],b=[196,59,52];return `rgb(${a.map((v,i)=>Math.round(v+(b[i]-v)*t)).join(",")})`};
let msel=null;
function mood(){const t=iso(),cur=S.mood[t],days=[];for(let i=29;i>=0;i--)days.push(addD(t,-i));
 const W=600,H=210,px=i=>20+i*560/29,py=v=>H-24-(v-1)*(H-60)/9,pts=days.map((d,i)=>S.mood[d]?[i,S.mood[d],d]:null).filter(Boolean);
 const ln=pts.map((p,i)=>(i?"L":"M")+px(p[0]).toFixed(1)+" "+py(p[1]).toFixed(1)).join(""),ar=pts.length?ln+`L${px(pts[pts.length-1][0]).toFixed(1)} ${H-24}L${px(pts[0][0]).toFixed(1)} ${H-24}Z`:"";
 const l7=days.slice(-7).map(d=>S.mood[d]).filter(Boolean),avg=l7.length?(l7.reduce((a,b)=>a+b,0)/l7.length).toFixed(1):"";
 const mo=t.slice(0,7),ent=Object.keys(S.mood).filter(d=>d.slice(0,7)===mo).map(d=>[d,S.mood[d]]),hi=ent.slice().sort((a,b)=>b[1]-a[1]).slice(0,3),lo=ent.slice().sort((a,b)=>a[1]-b[1]).slice(0,3);
 const dd=d=>fmt(new Date(d+"T00:00:00")),pk=a=>a.map(([d,n])=>`<div class="pk"><b style="color:${mc(n)}">${n}</b><span>${esc(dd(d))}: ${S.mnote[d]?esc(S.mnote[d]):"No reason noted."}</span></div>`).join("");
 const pvc=(l,e)=>`<div class="frame pvc"><small>${l}</small><b style="color:${mc(e[1])}">${e[1]}</b><span>${esc(dd(e[0]))}</span><i>${S.mnote[e[0]]?esc(S.mnote[e[0]]):"No reason noted."}</i></div>`;
 const sd=msel&&S.mood[msel]?`<p class="lead">${esc(dd(msel))}, ${S.mood[msel]}: ${S.mnote[msel]?esc(S.mnote[msel]):"No reason noted."}</p>`:"";
 $("#mBox").innerHTML=`<div class="mrow">${[1,2,3,4,5,6,7,8,9,10].map(n=>`<button class="mb${cur===n?" on":""}" data-m="${n}" style="background:${mc(n)}" aria-label="Mood ${n}">${n}</button>`).join("")}</div>${cur?`<div class="mnote"><label for="mn">Why do you feel this way?</label><textarea id="mn" rows="2" placeholder="Optional. What happened?">${esc(S.mnote[t]||"")}</textarea><button class="btn" id="mnS">Save note</button></div>`:""}<div class="frame mchart"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Mood over the last 30 days"><defs><linearGradient id="mg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${mc(10)}"/><stop offset="1" stop-color="${mc(1)}"/></linearGradient></defs><path d="${ar}" fill="url(#mg)" opacity=".5"/><path d="${ln}" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>${pts.map(p=>`<circle data-pt="${p[2]}" style="cursor:pointer" cx="${px(p[0]).toFixed(1)}" cy="${py(p[1]).toFixed(1)}" r="7" fill="${mc(p[1])}" stroke="currentColor" stroke-width="1.2"/>`).join("")}<path d="M20 ${H-24}H580" stroke="currentColor" stroke-width="1"/><text x="20" y="${H-6}" font-size="12" fill="currentColor">${fmt(new Date(days[0]+"T00:00:00"))}</text><text x="580" y="${H-6}" font-size="12" text-anchor="end" fill="currentColor">Today</text></svg></div>${sd}<p class="lead">${pts.length?(avg?"7-day average: "+avg:"Nothing logged in the last 7 days."):"Check in to start your mountain."}</p>${ent.length?`<div class="pv">${pvc("PEAK",hi[0])}${ent.length>1?pvc("VALLEY",lo[0]):""}</div>`:""}`;
 $$("[data-m]").forEach(b=>b.onclick=()=>{S.mood[t]=+b.dataset.m;save();mood();const e=$("#mn");if(e)e.focus()});
 if($("#mnS"))$("#mnS").onclick=()=>{S.mnote[t]=$("#mn").value.trim();save();mood()};
 $$("[data-pt]").forEach(c=>c.onclick=()=>{msel=c.dataset.pt;mood()})}
const STAGES=["Ideation","Demo","Mix","Master","Release"],EGG="M12 2C7.5 2 4 9 4 14a8 8 0 0 0 16 0C20 9 16.5 2 12 2z";
const idb=()=>new Promise((res,rej)=>{const r=indexedDB.open("relic-media",1);r.onupgradeneeded=()=>r.result.createObjectStore("m");r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});
const mput=async(k,b)=>{const d=await idb();return new Promise((res,rej)=>{const t=d.transaction("m","readwrite");t.objectStore("m").put(b,k);t.oncomplete=res;t.onerror=()=>rej(t.error)})};
const mget=async k=>{const d=await idb();return new Promise((res,rej)=>{const q=d.transaction("m").objectStore("m").get(k);q.onsuccess=()=>res(q.result);q.onerror=()=>rej(q.error)})};
const mdel=async k=>{const d=await idb();d.transaction("m","readwrite").objectStore("m").delete(k)};
let eSel=null;
async function attachAudio(i,f){const er=$("#ae"+i);if(!f||!S.songs[i])return;if(f.size>3e7){if(er)er.textContent="That file is over 30 MB. Try a smaller export or paste a link.";return}try{await mput("song"+S.songs[i].id,f);S.songs[i].au=f.name;save();egg()}catch(e){if(er)er.textContent="Could not save that file on this device."}}
const MEGA="M3 10v4h3l9 5V5L6 10H3zM18 9c1.6 1.2 1.6 4.8 0 6";
function egg(){$("#eBox").innerHTML=`<form id="eAdd" style="display:flex;gap:8px;margin-bottom:12px"><input id="eNew" placeholder="Add a new song…" maxlength="60" aria-label="New song"><button class="btn" type="submit">Add</button></form>`+(S.songs.length?S.songs.map((s,i)=>`<div class="frame song" data-si="${i}"><div class="srow"><span style="display:flex;align-items:center;gap:8px"><button class="spl" data-pl="${i}" aria-label="Play the latest version of ${esc(s.t)}" title="Play the latest version"${s.au||/^https?:\/\//.test(s.al||"")?"":" disabled"}><svg class="ic" viewBox="0 0 24 24"><path d="${MEGA}"/></svg></button><b>${esc(s.t)}</b></span><button class="link" data-sx="${i}" aria-label="Remove song">×</button></div><div class="track">${STAGES.map((n,j)=>`<button class="stg${j<=s.p?" past":""}" data-sp="${i}:${j}" aria-label="${n}">${j===s.p?`<svg viewBox="0 0 24 24"><path d="${EGG}" fill="var(--paper)" stroke="currentColor" stroke-width="1.6"/></svg>`:""}<small>${n}</small></button>`).join("")}</div><div class="aud">${s.au?`<audio data-ap="${s.id}" preload="none"></audio><small>Latest version: ${esc(s.au)}</small>`:`<small>No version added yet. Choose a file, or paste or drop one here.</small>`}${/^https?:\/\//.test(s.al||"")?`<a class="alink" href="${esc(s.al)}" target="_blank" rel="noopener">Open latest version link</a>`:""}<div class="arow"><label class="btn up">${s.au?"Replace version":"Add latest version"}<input type="file" accept="audio/*" data-au="${i}" hidden></label><input class="al" placeholder="or paste a link" data-al="${i}" value="${esc(s.al||"")}" aria-label="Link to latest version"></div><small class="aerr" id="ae${i}"></small></div></div>`).join(""):`<p class="lead">No songs yet. Add one above.</p>`);
 $("#eAdd").onsubmit=e=>{e.preventDefault();const v=$("#eNew").value.trim();if(v){S.songs.push({id:Date.now(),t:v,p:0});save();egg()}};
 $$("[data-sp]").forEach(b=>b.onclick=()=>{const[i,j]=b.dataset.sp.split(":").map(Number);S.songs[i].p=j;save();egg()});
 $$("[data-sx]").forEach(b=>b.onclick=()=>{const s=S.songs.splice(+b.dataset.sx,1)[0];try{mdel("song"+s.id).catch(()=>{})}catch(e){}save();egg()});
 $$("[data-ap]").forEach(a=>{try{mget("song"+a.dataset.ap).then(b=>{if(b)a.src=URL.createObjectURL(b);else{a.nextElementSibling.textContent="The latest version is not on this device. Add it again to play it here."}}).catch(()=>{})}catch(e){}});
 $$("[data-pl]").forEach(b=>b.onclick=()=>{const s=S.songs[+b.dataset.pl],a=document.querySelector('[data-ap="'+s.id+'"]');if(a&&a.src){if(a.paused){document.querySelectorAll("audio").forEach(x=>x.pause());$$("[data-pl]").forEach(x=>x.classList.remove("on"));a.play();b.classList.add("on");a.onended=()=>b.classList.remove("on")}else{a.pause();b.classList.remove("on")}}else if(/^https?:\/\//.test(s.al||""))window.open(s.al,"_blank","noopener")});
 $$("[data-au]").forEach(inp=>inp.onchange=()=>attachAudio(+inp.dataset.au,inp.files[0]));
 $$("[data-al]").forEach(inp=>inp.onchange=()=>{S.songs[+inp.dataset.al].al=inp.value.trim();save();egg()});
 $$("#eBox .song").forEach(c=>c.addEventListener("click",()=>{eSel=+c.dataset.si}))}
document.addEventListener("paste",e=>{if($("#v-egg").hidden)return;const f=[...((e.clipboardData&&e.clipboardData.files)||[])].find(x=>x.type.indexOf("audio/")===0);if(!f)return;const i=eSel!=null&&S.songs[eSel]?eSel:(S.songs.length===1?0:-1);if(i<0)return;e.preventDefault();attachAudio(i,f)});
document.addEventListener("dragover",e=>{if(!$("#v-egg").hidden)e.preventDefault()});
document.addEventListener("drop",e=>{if($("#v-egg").hidden)return;const f=[...((e.dataTransfer&&e.dataTransfer.files)||[])].find(x=>x.type.indexOf("audio/")===0);if(!f)return;e.preventDefault();const c=e.target.closest&&e.target.closest(".song"),i=c?+c.dataset.si:(S.songs.length===1?0:-1);if(i>=0)attachAudio(i,f)});
function star(){const n2=new Date(),r=S.refl[key]||{},pulse=pending&&n2.getDay()===0&&n2.getHours()>=5&&!(S.seen||{})[key]&&!r.done,nv=$('[data-v="reflection"]');if(nv)nv.classList.toggle("pulse",pulse);
 const b=$("#drawBtn");if(!b)return;
 if(pending){b.disabled=!r.done;b.textContent=r.done?"Begin the New Week →":"New Week after reflection";b.classList.toggle("flash",!!r.done)}else{b.disabled=false;b.textContent="Draw New Week →";b.classList.remove("flash")}}
function badge(){const b=$("#badge");if(!b)return;b.innerHTML=`<button data-go2="life" aria-label="Health"><svg viewBox="0 0 100 90" width="14" height="13"><path d="${HEART}" fill="var(--skr)"/></svg> ${hpNow()}</button><button data-go2="bank" aria-label="Gold">◉ ${S.gold.total}</button>`;b.querySelectorAll("[data-go2]").forEach(x=>x.onclick=()=>show(x.dataset.go2))}
var cref=null,AS=null,cready=false,ct=null;
const mu=r=>r.imgId?"/_blob/"+r.imgId:r.img;
function d2b(d){const p=d.split(","),m=p[0].match(/:(.*?);/)[1],b=atob(p[1]),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return new Blob([u],{type:m})}
function slim(){const c=JSON.parse(JSON.stringify(S));c.relics.forEach(r=>{if(r.img&&r.img.startsWith("data:"))r.img="";r.aud=""});let s=JSON.stringify(c);if(s.length>240000){c.log=c.log.slice(-300);c.hp.log=c.hp.log.slice(-300);s=JSON.stringify(c)}return s}
async function push(){try{await cref.set({u:S._u,s:slim()})}catch(e){}}
function cloudSave(){if(!cref||!cready)return;clearTimeout(ct);ct=setTimeout(push,1500)}
async function migrate(){if(!AS)return;let ch=0;for(const r of S.relics){if(r.img&&r.img.startsWith("data:")){try{r.imgId=(await AS.upload(d2b(r.img))).id;r.img="";ch=1}catch(e){break}}}if(ch){save();reliquary()}}
async function cloud(){try{
 const [db,user,assets]=await Promise.all([claude.use("db"),claude.use("user"),claude.use("assets")]);
 if(!db||!user)return;const uid=await user.id();if(!uid)return;
 cref=db.collection("data/users/"+uid).doc("relic");AS=assets;
 const sn=await cref.get();
 if(sn.exists){const r=sn.data();if((r.u||0)>U0&&r.s){localStorage.setItem("relic-v2",r.s);location.reload();return}}
 cready=true;await migrate();await push()}catch(e){}}
const STAR=`<path d="M350 40l4 13 13 4-13 4-4 13-4-13-13-4 13-4z" fill="currentColor"/>`;
const tube=(d,w)=>`<path d="${d}" fill="none" stroke="currentColor" stroke-width="${w+4}" stroke-linecap="round"/><path d="${d}" fill="none" stroke="var(--paper)" stroke-width="${w}" stroke-linecap="round"/>`;
const EMB=[
`<path d="M290 270Q300 210 326 186L374 186Q400 210 410 270" fill="var(--paper)"/><path d="M322 176Q312 150 350 128Q388 150 378 176L362 214 338 214Z" fill="var(--paper)"/><path d="M326 150L296 136L318 164zM374 150L404 136L382 164z" fill="var(--paper)"/><path d="M334 138Q300 100 304 60M316 112Q298 104 290 86M308 84Q296 74 298 56M322 124Q306 118 298 108M366 138Q400 100 396 60M384 112Q402 104 410 86M392 84Q404 74 402 56M378 124Q394 118 402 108M304 60Q312 40 300 20M396 60Q388 40 400 20" stroke-width="2.2"/><circle cx="338" cy="160" r="2.2" fill="currentColor"/><circle cx="362" cy="160" r="2.2" fill="currentColor"/><path d="M342 198h16l-8 12z" fill="currentColor"/>`+STAR,
tube("M340 230C300 170 400 160 352 108",16)+`<ellipse cx="338" cy="238" rx="62" ry="34" fill="var(--paper)"/><path d="M300 240C320 220 360 220 380 240"/><circle cx="352" cy="100" r="11" fill="var(--paper)"/><path d="M361 98L412 104L361 106Z" fill="currentColor"/><path d="M348 91C336 80 326 78 316 82M350 90C342 78 334 72 326 72"/><circle cx="352" cy="98" r="2" fill="currentColor"/>`+STAR,
tube("M410 262C470 262 486 206 452 172",18)+`<path d="M286 214L300 124L342 164L350 160L358 164L400 124L414 214Q350 262 286 214Z" fill="var(--paper)"/><path d="M304 150L318 168M396 150L382 168"/><path d="M300 200Q350 248 400 200Q350 214 300 200Z" fill="currentColor" opacity=".18"/><circle cx="326" cy="188" r="3" fill="currentColor"/><circle cx="374" cy="188" r="3" fill="currentColor"/><path d="M342 214h16l-8 10z" fill="currentColor"/>`+STAR,
`<path d="M350 170C300 84 214 108 236 182C248 218 322 214 350 178Z" fill="var(--paper)"/><path d="M350 170C400 84 486 108 464 182C452 218 378 214 350 178Z" fill="var(--paper)"/><path d="M350 186C306 206 262 258 292 270H350Z" fill="var(--paper)"/><path d="M350 186C394 206 438 258 408 270H350Z" fill="var(--paper)"/><circle cx="288" cy="150" r="14"/><circle cx="412" cy="150" r="14"/><circle cx="288" cy="150" r="5" fill="currentColor"/><circle cx="412" cy="150" r="5" fill="currentColor"/><ellipse cx="350" cy="205" rx="9" ry="44" fill="var(--paper)"/><circle cx="350" cy="150" r="9" fill="var(--paper)"/><path d="M346 142C338 120 324 112 314 108M354 142C362 120 376 112 386 108"/>`+STAR,
`<path d="M292 270V176Q292 124 350 124Q408 124 408 176V270Z" fill="var(--paper)"/><path d="M304 140L298 104L334 126M396 140L402 104L366 126" fill="var(--paper)"/><circle cx="324" cy="172" r="22" fill="var(--paper)"/><circle cx="376" cy="172" r="22" fill="var(--paper)"/><circle cx="324" cy="172" r="8" fill="currentColor"/><circle cx="376" cy="172" r="8" fill="currentColor"/><path d="M342 190h16l-8 20z" fill="currentColor"/><path d="M318 232q8 10 16 0M334 232q8 10 16 0M350 232q8 10 16 0M366 232q8 10 16 0M326 250q8 10 16 0M342 250q8 10 16 0M358 250q8 10 16 0"/>`+STAR,
`<path d="M326 156C296 64 330 36 342 62C352 92 346 126 342 156M374 156C404 64 370 36 358 62C348 92 354 126 358 156" fill="var(--paper)"/><path d="M310 206C310 150 390 150 390 206C390 246 310 246 310 206Z" fill="var(--paper)"/><circle cx="332" cy="196" r="3" fill="currentColor"/><circle cx="368" cy="196" r="3" fill="currentColor"/><path d="M344 212h12l-6 8z" fill="currentColor"/><path d="M350 220v8M300 214l30 4M300 226l30-2M400 214l-30 4M400 226l-30-2"/><path d="M290 270C290 240 310 240 310 240M410 270C410 240 390 240 390 240"/>`+STAR];
const ekm=e=>e.m||iso(new Date(+e.k*6048e5+3*864e5)).slice(0,7);
const mGold=()=>{const m=iso().slice(0,7);return S.log.filter(e=>ekm(e)===m).reduce((a,e)=>a+e.g,0)};
function gbar(){const m=iso().slice(0,7),mg=mGold(),goal=S.goalM||500,top=goal*1.25,pct=Math.min(100,mg/top*100),gp=goal/top*100,pz=S.prize[m];
 return `<div class="frame gb"><div class="gtrack" role="img" aria-label="${mg} of ${goal} gold this month"><div class="gfill" style="height:${pct}%"></div><div class="gline" style="bottom:${gp}%"><span class="glab">Goal ${goal}</span></div></div><div class="gtxt"><b>${mg>=goal?"Goal reached ✓":mg+" / "+goal}</b><small>gold this month</small>${pz?`<small>This month’s prize: ${esc(pz)}</small>`:mg>=goal?`<button class="btn flash" id="gPrize">Open the mystery prize</button>`:`<small>Reach the goal for a mystery prize from your Wishlist.</small>`}<label>Monthly goal<input id="gGoal" type="number" min="50" value="${goal}"></label></div></div>`}
function wish(){$("#wBox").innerHTML=`<form id="wAdd" style="display:flex;gap:8px;margin-bottom:12px"><input id="wNew" placeholder="Add something you want…" maxlength="80" aria-label="New wish"><button class="btn" type="submit">Add</button></form>`+(S.wish.length?S.wish.map((x,i)=>`<div class="frow"><svg class="ic" viewBox="0 0 24 24"><path d="${GIFT}"/></svg><span style="flex:1;font-style:italic;font-size:19px">${esc(x.t)}${x.won?` <small>(won ${esc(x.won)})</small>`:""}</span><button data-wx="${i}" aria-label="Remove" style="background:none;border:0;opacity:.5;cursor:pointer;font-size:18px">×</button></div>`).join(""):`<p class="lead">Your wishlist is empty. Add treats, and the monthly mystery prize will pick one.</p>`);
 $("#wAdd").onsubmit=e=>{e.preventDefault();const v=$("#wNew").value.trim();if(v){S.wish.push({id:Date.now(),t:v});save();wish()}};
 $$("[data-wx]").forEach(b=>b.onclick=()=>{S.wish.splice(+b.dataset.wx,1);save();wish()})}
const BASE={th:52,pil:52,enc:52,mal:52},DK=[["th","Themes"],["pil","Pilgrimages"],["enc","Encounters"],["mal","Maladies"]];let dtab="th";
const dlist=k=>k==="th"?TH:k==="pil"?PIL:k==="enc"?ENC:MAL;
function deck(){const L=dlist(dtab),nb=BASE[dtab],th=dtab==="th";
 $("#dkBox").innerHTML=`<div class="tabs">${DK.map(d=>`<button class="tab${d[0]===dtab?" on":""}" data-dt="${d[0]}">${d[1]}</button>`).join("")}</div><div class="dgrid">${L.map((c,i)=>`<div class="frame dcard${th&&i===thI?" cur":""}">${th?`<svg class="ic" viewBox="0 0 24 24"><use href="#i-${ICONS[emb(i)]}"/></svg>`:""}<b>${esc(c[0])}</b><small>${esc(c[1])}</small>${dtab==="mal"?`<small class="tier">${mTierName(i)}, ${mReward(c)} gold</small>`:""}${th?`<button class="link" data-tu="${i}">${i===thI?"This week’s theme":"Use this week"}</button>`:""}${i>=nb?`<button class="link" data-dr="${i-nb}" aria-label="Remove card">×</button>`:""}</div>`).join("")}</div><form id="dkAdd" class="frame dadd"><b style="font-style:italic">Add to the deck</b><input id="dk1" placeholder="${th?"Theme name":"Card title"}" maxlength="60" aria-label="Title"><input id="dk2" placeholder="${th?"Tagline":"What to do"}" maxlength="140" aria-label="Text">${th?`<select id="dk3" aria-label="Emblem">${ICONS.map((n,i)=>`<option value="${i}">${n[0].toUpperCase()+n.slice(1)} emblem</option>`).join("")}</select>`:""}<button class="btn" type="submit">Add</button></form>`;
 $$("[data-dt]").forEach(b=>b.onclick=()=>{dtab=b.dataset.dt;deck()});
 $$("[data-tu]").forEach(b=>b.onclick=()=>{S.tov=S.tov||{};S.tov[key]={w:wk,i:+b.dataset.tu};save();location.reload()});
 $$("[data-dr]").forEach(b=>b.onclick=()=>{const i=+b.dataset.dr;S.deck[dtab].splice(i,1);dlist(dtab).splice(BASE[dtab]+i,1);save();deck()});
 $("#dkAdd").onsubmit=e=>{e.preventDefault();const a=$("#dk1").value.trim(),b=$("#dk2").value.trim();if(!a)return;const it=th?[a,b,+$("#dk3").value]:[a,b];S.deck[dtab].push(it);dlist(dtab).push(it);save();deck()}}
function skills(){const m=iso().slice(0,7);if(S.skills.length&&(!S.focus||S.focus.m!==m||!S.skills.some(x=>x.id===S.focus.id)))S.focus={m,id:S.skills[Math.floor(Math.random()*S.skills.length)].id};
 const f=S.skills.find(x=>S.focus&&x.id===S.focus.id);$("#sFocus").innerHTML=f?`<svg class="ic" viewBox="0 0 24 24"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 .01 0z"/></svg><span>Focus of the month: <b>${esc(f.t)}</b></span>${S.skills.length>1?`<button class="link" id="sRs"${S.focus.rs?" disabled":""}>${S.focus.rs?"Reshuffled":"Reshuffle (1)"}</button>`:""}`:`<span>Add a skill to get a focus of the month.</span>`;
 if($("#sRs"))$("#sRs").onclick=()=>{if(S.focus.rs)return;const o=S.skills.filter(x=>x.id!==S.focus.id);if(!o.length)return;S.focus={m:S.focus.m,id:o[Math.floor(Math.random()*o.length)].id,rs:1};save();skills()};
 $("#sBox").innerHTML=`<form id="sAdd" style="display:flex;gap:8px;margin-bottom:12px"><input id="sNew" placeholder="A skill or hobby to learn…" maxlength="60" aria-label="New skill"><button class="btn" type="submit">Add</button></form>`+(S.skills.length?S.skills.map((s,i)=>`<div class="frame song${S.focus&&s.id===S.focus.id?" foc":""}"><div class="srow"><b>${esc(s.t)}</b><button class="link" data-kx="${i}" aria-label="Remove skill">×</button></div><div class="track">${[1,2,3,4,5].map(n=>`<button class="stg${n<=s.l?" past":""}" data-kl="${i}:${n}" aria-label="Level ${n}"><small>Lv ${n}</small></button>`).join("")}</div></div>`).join(""):`<p class="lead">No skills yet. Add one to start your tree.</p>`);
 $("#sAdd").onsubmit=e=>{e.preventDefault();const v=$("#sNew").value.trim();if(v){S.skills.push({id:Date.now(),t:v,l:0});save();skills()}};
 $$("[data-kl]").forEach(b=>b.onclick=()=>{const[i,n]=b.dataset.kl.split(":").map(Number),s=S.skills[i];s.l=s.l===n?n-1:n;save();skills()});
 $$("[data-kx]").forEach(b=>b.onclick=()=>{S.skills.splice(+b.dataset.kx,1);save();skills()})}
function dream(){const g={};S.ideas.forEach((x,i)=>{const k=x.g||"Loose threads";(g[k]=g[k]||[]).push([x,i])});
 $("#drBox").innerHTML=`<form id="drAdd"><textarea id="drT" rows="2" placeholder="Catch an idea…" aria-label="Idea"></textarea><div style="display:flex;gap:8px;margin-top:6px"><input id="drG" placeholder="Tag (optional)" maxlength="24" aria-label="Tag"><button class="btn" type="submit">Catch it</button></div></form>`+(S.ideas.length?Object.keys(g).map(k=>`<h3 class="shop">${esc(k.toUpperCase())}</h3>`+g[k].map(([x,i])=>`<div class="frow"><span style="flex:1;font-style:italic;font-size:18px">${esc(x.t)}</span><button class="link" data-ig="${i}" title="Send to the Ledger">→ Ledger</button><button data-ix="${i}" aria-label="Remove" style="background:none;border:0;opacity:.5;cursor:pointer;font-size:18px">×</button></div>`).join("")).join(""):`<p class="lead">Nothing caught yet.</p>`);
 $("#drAdd").onsubmit=e=>{e.preventDefault();const v=$("#drT").value.trim();if(v){S.ideas.unshift({id:Date.now(),t:v,g:$("#drG").value.trim()});save();dream()}};
 $$("[data-ig]").forEach(b=>b.onclick=()=>{const i=+b.dataset.ig,x=S.ideas[i];S.ledger.push(newT(x.t.slice(0,80),10,"e"));S.ideas.splice(i,1);save();ledger();dream()});
 $$("[data-ix]").forEach(b=>b.onclick=()=>{S.ideas.splice(+b.dataset.ix,1);save();dream()})}
function hourglass(){const el=$("#hg");if(!el)return;const p=pending?1:Math.max(0,Math.min(1,(Date.now()-mon.getTime())/(7*864e5))),y1=16+49*p,y2=114-49*p;
 el.innerHTML=`<svg viewBox="0 0 100 130" fill="none" stroke="currentColor" stroke-width="1.4" role="img" aria-label="${Math.round(p*100)} percent of the week has passed"><defs><clipPath id="hgc"><path d="M30 16C30 46 50 52 50 65C50 78 30 84 30 114L70 114C70 84 50 78 50 65C50 52 70 46 70 16Z"/></clipPath></defs><path d="M22 8h56M22 122h56M28 8v8M72 8v8M28 122v-8M72 122v-8"/><g clip-path="url(#hgc)" fill="currentColor" opacity=".35" stroke="none"><rect x="28" y="${y1.toFixed(1)}" width="44" height="${(65-y1).toFixed(1)}"/><rect x="28" y="${y2.toFixed(1)}" width="44" height="${(114-y2).toFixed(1)}"/></g><path d="M30 16c0 30 20 36 20 49s-20 19-20 49M70 16c0 30-20 36-20 49s20 19 20 49"/></svg>`;
 if(S.hgk!==key){S.hgk=key;save();el.classList.remove("flip");void el.offsetWidth;el.classList.add("flip")}}
function sideToggle(){const sd=$(".side"),mn=$("main"),bt=$("#sideTgl"),open=sd.classList.contains("closed");
 if(!open){sd.style.height=sd.offsetHeight+"px";void sd.offsetHeight;sd.classList.add("closed");sd.style.height=(bt.offsetHeight+32)+"px"}
 else{sd.classList.remove("closed");sd.style.height=SH+"px"}
 bt.setAttribute("aria-expanded",String(open));S.sideOpen=open;save()}
let HH=0,SH=0;
function fit(){const de=document.documentElement,sd=$(".side"),cl=sd.classList.contains("closed");de.style.zoom="";
 if(!$("#v-home").hidden){if(!cl)sd.style.height="";HH=$(".app").offsetHeight;SH=Math.max(0,HH-20)}
 if(!cl&&SH)sd.style.height=SH+"px";
 if(innerWidth>=700&&innerHeight>innerWidth&&HH){const z=Math.max(.62,Math.min(1,innerHeight/(HH+24)));if(z<1)de.style.zoom=z}}
function sideInit(){const bt=$("#sideTgl");if(S.sideOpen===false){const sd=$(".side");sd.classList.add("closed");sd.style.height=(bt.offsetHeight+32)+"px";bt.setAttribute("aria-expanded","false")}bt.onclick=sideToggle}
function decay(){const t=iso();let d=S.hp.last||t,n=0;
 while(d<t&&n++<400){d=addD(d,1);
  S.ledger.forEach(x=>{
   if(x.sk==="b"&&x.cr<d&&(!x.d||x.dd>d))S.hp.log.push({d,n:1,t:x.t,c:"b"});
   if(x.sk==="r"&&x.due&&addD(x.due,1)===d&&(!x.d||x.dd>x.due))S.hp.log.push({d,n:10,t:x.t,c:"r"})})}
 S.hp.last=t;save()}
const hpNow=()=>{const m=iso().slice(0,7);return Math.max(0,100-S.hp.log.filter(e=>e.d.slice(0,7)===m).reduce((a,e)=>a+e.n,0))};
function life(){const hp=hpNow(),m=iso().slice(0,7),ev=S.hp.log.filter(e=>e.d.slice(0,7)===m).reverse(),y=88*(1-hp/100);
 $("#lifeBox").innerHTML=`<div class="heart"><svg viewBox="0 0 100 90" role="img" aria-label="Health ${hp} of 100"><defs><clipPath id="hc"><rect x="0" y="${y.toFixed(1)}" width="100" height="${(90-y).toFixed(1)}"/></clipPath></defs><path d="${HEART}" fill="var(--skr)" clip-path="url(#hc)"/><path d="${HEART}" fill="none" stroke="currentColor" stroke-width="2"/></svg><div class="hpn"><b>${hp}</b> / 100</div></div>
 <div class="legend"><p>Health refreshes to 100 on the 1st of each month.</p><p><span class="sk r">☠</span> Red skull: urgent. Not done by its date costs 10.</p><p><span class="sk b">☠</span> Blue skull: important. Each day on the ledger costs 1.</p></div>
 <h3 class="shop">THIS MONTH’S WOUNDS</h3>${ev.length?ev.map(e=>`<div class="entry"><span class="sk ${e.c}">☠</span><div>${esc(e.t)}<small>${new Date(e.d+"T00:00:00").toLocaleDateString(undefined,{month:"long",day:"numeric"})}</small></div><b style="margin-left:auto">−${e.n}</b></div>`).join(""):`<p class="lead">No damage yet this month.</p>`}`}
decay();
hearthAuto();banner();week();ledger();cards();reliquary();bank();journal();reflection();hearth();daily();badge();star();hourglass();sideInit();fit();addEventListener("resize",fit);if(document.fonts)document.fonts.ready.then(fit);save();cloud();setInterval(()=>{const n=new Date();if(pending&&n.getDay()===0&&n.getHours()>=22)location.reload();star();hourglass()},60000);
