// WARUNG NUSA — edit pengaturan di sini
const STORE={
 name:"Warung Nusa",
 // Nomor WhatsApp PENJUAL, format 628xxxxxxxxxx (tanpa +)
 sellerWhatsApp:"6285782329752",
 payments:{dana:"08XX-XXXX-XXXX",gopay:"08XX-XXXX-XXXX",seabank:"XXXX-XXXX-XX",jago:"XXXX-XXXX-XX"}
};

// Harga & stok 100 menu dikontrol di JavaScript.
// Tidak tersedia panel admin bagi pembeli.
const MENU=[  {id:1,name:"Nasi Goreng Spesial",category:"Makanan",price:13000,stock:6653,desc:"Nasi goreng dengan telur, ayam, dan sayuran."},
  {id:2,name:"Nasi Goreng Ayam",category:"Makanan",price:10000,stock:3435,desc:"Nasi goreng gurih dengan potongan ayam."},
  {id:3,name:"Nasi Goreng Telur",category:"Makanan",price:8000,stock:6442,desc:"Nasi goreng sederhana dengan telur."},
  {id:4,name:"Nasi Goreng Seafood",category:"Makanan",price:12000,stock:543,desc:"Nasi goreng dengan udang dan cumi."},
  {id:5,name:"Nasi Ayam Geprek",category:"Makanan",price:12000,stock:101,desc:"Ayam crispy dengan sambal geprek."},
  {id:6,name:"Nasi Ayam Bakar",category:"Makanan",price:12000,stock:121,desc:"Ayam bakar bumbu kecap dan sambal."},
  {id:7,name:"Nasi Ayam Goreng",category:"Makanan",price:12000,stock:222,desc:"Ayam goreng renyah dengan nasi."},
  {id:8,name:"Nasi Ayam Kremes",category:"Makanan",price:13000,stock:164,desc:"Ayam goreng dengan kremesan gurih."},
  {id:9,name:"Nasi Lele Goreng",category:"Makanan",price:12000,stock:146,desc:"Lele goreng renyah dengan sambal."},
  {id:10,name:"Nasi Lele Bakar",category:"Makanan",price:13000,stock:143,desc:"Lele bakar berbumbu dengan nasi."},
  {id:11,name:"Nasi Telur Balado",category:"Makanan",price:7000,stock:256,desc:"Telur balado pedas manis."},
  {id:12,name:"Nasi Telur Dadar",category:"Makanan",price:7000,stock:122,desc:"Telur dadar tebal dengan nasi."},
  {id:13,name:"Nasi Tongkol Balado",category:"Makanan",price:8000,stock:124,desc:"Tongkol balado dengan nasi hangat."},
  {id:14,name:"Nasi Rendang",category:"Makanan",price:12000,stock:142,desc:"Rendang sapi empuk dengan nasi."},
  {id:15,name:"Nasi Sapi Lada Hitam",category:"Makanan",price:15000,stock:0,desc:"Sapi tumis lada hitam."},
  {id:16,name:"Mie Goreng Jawa",category:"Makanan",price:16000,stock:0,desc:"Mie goreng gaya Jawa."},
  {id:17,name:"Mie Goreng Ayam",category:"Makanan",price:11000,stock:112,desc:"Mie goreng dengan ayam dan telur."},
  {id:18,name:"Mie Goreng Seafood",category:"Makanan",price:12000,stock:54,desc:"Mie goreng dengan seafood."},
  {id:19,name:"Mie Rebus Ayam",category:"Makanan",price:10000,stock:1245,desc:"Mie kuah hangat dengan ayam."},
  {id:20,name:"Mie Rebus Seafood",category:"Makanan",price:12000,stock:34456,desc:"Mie kuah dengan seafood."},
  {id:21,name:"Kwetiau Goreng",category:"Makanan",price:8000,stock:0,desc:"Kwetiau goreng gurih."},
  {id:22,name:"Kwetiau Siram",category:"Makanan",price:10000,stock:0,desc:"Kwetiau dengan kuah kental."},
  {id:23,name:"Bihun Goreng",category:"Makanan",price:16000,stock:5654,desc:"Bihun goreng dengan sayuran."},
  {id:24,name:"Bihun Kuah",category:"Makanan",price:12000,stock:0,desc:"Bihun kuah hangat."},
  {id:25,name:"Bakso Kuah",category:"Makanan",price:8000,stock:6544,desc:"Bakso sapi dengan kuah gurih."},
  {id:26,name:"Bakso Mercon",category:"Makanan",price:10000,stock:0,desc:"Bakso pedas dengan cabai."},
  {id:27,name:"Mie Ayam",category:"Makanan",price:11000,stock:0,desc:"Mie ayam dengan topping ayam."},
  {id:28,name:"Mie Ayam Bakso",category:"Makanan",price:13000,stock:0,desc:"Mie ayam lengkap dengan bakso."},
  {id:29,name:"Soto Ayam",category:"Makanan",price:11000,stock:0,desc:"Soto ayam kuah gurih."},
  {id:30,name:"Soto Betawi",category:"Makanan",price:15000,stock:0,desc:"Soto Betawi creamy dan gurih."},
  {id:31,name:"Rawon",category:"Makanan",price:13000,stock:0,desc:"Rawon daging dengan kuah kluwek."},
  {id:32,name:"Sop Ayam",category:"Makanan",price:8000,stock:0,desc:"Sop ayam dan sayuran."},
  {id:33,name:"Sop Iga",category:"Makanan",price:20000,stock:0,desc:"Sop iga sapi hangat."},
  {id:34,name:"Seblak Original",category:"Makanan",price:15000,stock:15433,desc:"Seblak kerupuk dengan kuah pedas."},
  {id:35,name:"Seblak Ceker",category:"Makanan",price:8000,stock:6543,desc:"Seblak pedas dengan ceker."},
  {id:36,name:"Seblak Komplit",category:"Makanan",price:13000,stock:446,desc:"Seblak dengan topping lengkap."},
  {id:37,name:"Indomie Goreng Telur",category:"Makanan",price:9000,stock:1020,desc:"Indomie goreng dengan telur."},
  {id:38,name:"Indomie Rebus Telur",category:"Makanan",price:9000,stock:1246,desc:"Indomie kuah dengan telur."},
  {id:39,name:"Indomie Goreng Kornet",category:"Makanan",price:10000,stock:1245,desc:"Indomie dengan kornet dan telur."},
  {id:40,name:"Indomie Special ",category:"Makanan",price:10000,stock:1000,desc:"Indomie dengan telur, sosis, dan sayuran."},
  {id:41,name:"Kentang Goreng",category:"Snack",price:5000,stock:2156,desc:"Kentang goreng renyah."},
  {id:42,name:"Sosis Bakar",category:"Snack",price:5000,stock:2145,desc:"Sosis bakar saus pilihan."},
  {id:43,name:"Sosis Goreng",category:"Snack",price:5000,stock:2566,desc:"Sosis goreng gurih."},
  {id:44,name:"Nugget Ayam",category:"Snack",price:5000,stock:2466,desc:"Nugget ayam crispy."},
  {id:45,name:"Cireng Crispy",category:"Snack",price:6000,stock:3553,desc:"Cireng renyah dengan bumbu."},
  {id:46,name:"Cireng Isi Ayam",category:"Snack",price:7000,stock:4563,desc:"Cireng isi ayam pedas."},
  {id:47,name:"Tahu Crispy Seporsi",category:"Snack",price:6000,stock:2466,desc:"Tahu crispy gurih."},
  {id:48,name:"Tempe Mendoan Seporsi",category:"Snack",price:6000,stock:3266,desc:"Tempe mendoan hangat."},
  {id:49,name:"Pisang Goreng Seporsi",category:"Snack",price:6000,stock:88854,desc:"Pisang goreng renyah."},
  {id:50,name:"Pisang Coklat Seporsi",category:"Snack",price:7000,stock:7654,desc:"Pisang goreng isi cokelat."},
  {id:51,name:"Roti Bakar Coklat",category:"Snack",price:14000,stock:6533,desc:"Roti bakar dengan cokelat."},
  {id:52,name:"Roti Bakar Keju",category:"Snack",price:15000,stock:2456,desc:"Roti bakar keju."},
  {id:53,name:"Roti Bakar Coklat Keju",category:"Snack",price:18000,stock:46654,desc:"Roti bakar kombinasi cokelat dan keju."},
  {id:54,name:"Martabak Mini",category:"Snack",price:6000,stock:0,desc:"Martabak mini manis."},
  {id:55,name:"Tahu Walik",category:"Snack",price:10000,stock:0,desc:"Tahu walik crispy."},
  {id:56,name:"Pempek Mini",category:"Snack",price:5000,stock:0,desc:"Pempek mini dengan cuko."},
  {id:57,name:"Lumpia Ayam",category:"Snack",price:6000,stock:6765,desc:"Lumpia renyah isi ayam."},
  {id:58,name:"Dimsum Ayam",category:"Snack",price:8000,stock:0,desc:"Dimsum ayam kukus."},
  {id:59,name:"Dimsum Mentai",category:"Snack",price:1100,stock:0,desc:"Dimsum dengan saus mentai."},
  {id:60,name:"Siomay Bandung",category:"Makanan",price:18000,stock:34665,desc:"Siomay lengkap dengan saus kacang."},
  {id:61,name:"Batagor Seporsi",category:"Makanan",price:5000,stock:1255,desc:"Batagor crispy dengan saus kacang."},
  {id:62,name:"Gado-Gado",category:"Makanan",price:16000,stock:0,desc:"Sayuran dan tahu dengan saus kacang."},
  {id:63,name:"Ketoprak",category:"Makanan",price:16000,stock:0,desc:"Ketoprak dengan saus kacang."},
  {id:64,name:"Nasi Uduk Bakwan",category:"Makanan",price:7000,stock:1245,desc:"Nasi uduk gurih dengan lauk."},
  {id:65,name:"Nasi Kuning Gorengan",category:"Makanan",price:8000,stock:1256,desc:"Nasi kuning dengan lauk."},
  {id:66,name:"Nasi Campur",category:"Makanan",price:10000,stock:0,desc:"Nasi dengan lauk campur."},
  {id:67,name:"Capcay Goreng",category:"Makanan",price:18000,stock:0,desc:"Capcay sayur tumis."},
  {id:68,name:"Capcay Kuah",category:"Makanan",price:18000,stock:0,desc:"Capcay dengan kuah gurih."},
  {id:69,name:"Telur Gulung isi 5",category:"Snack",price:6000,stock:6621,desc:"Telur gulung jajanan klasik."},
  {id:70,name:"Bakwan Sayur",category:"Snack",price:4000,stock:4324,desc:"Bakwan sayur crispy."},
  {id:71,name:"Jamur Crispy",category:"Snack",price:9000,stock:0,desc:"Jamur crispy berbumbu."},
  {id:72,name:"Es Teh Manis",category:"Minuman",price:5000,stock:1244,desc:"Es teh manis segar."},
  {id:73,name:"Teh Manis Hangat",category:"Minuman",price:5000,stock:2456,desc:"Teh manis hangat."},
  {id:74,name:"Es Jeruk",category:"Minuman",price:6000,stock:1254,desc:"Jeruk segar dingin."},
  {id:75,name:"Jeruk Hangat",category:"Minuman",price:6000,stock:1245,desc:"Jeruk hangat."},
  {id:76,name:"Es Milo",category:"Minuman",price:8000,stock:2551,desc:"Milo dingin."},
  {id:77,name:"Milo Hangat",category:"Minuman",price:8000,stock:2066,desc:"Milo hangat."},
  {id:78,name:"Es Coklat",category:"Minuman",price:7000,stock:20654,desc:"Cokelat dingin creamy."},
  {id:79,name:"Coklat Hangat",category:"Minuman",price:7000,stock:2063,desc:"Cokelat hangat."},
  {id:80,name:"Es Kopi Susu",category:"Minuman",price:8000,stock:2022,desc:"Kopi susu dingin."},
  {id:81,name:"Kopi Susu Hangat",category:"Minuman",price:8000,stock:20,desc:"Kopi susu hangat."},
  {id:82,name:"Kopi Hitam",category:"Minuman",price:7000,stock:2524,desc:"Kopi hitam klasik."},
  {id:83,name:"Kopi Gula Aren",category:"Minuman",price:14000,stock:0,desc:"Kopi susu gula aren."},
  {id:84,name:"Es Cappuccino",category:"Minuman",price:7000,stock:45618,desc:"Cappuccino dingin."},
  {id:85,name:"Susu Coklat",category:"Minuman",price:6000,stock:4620,desc:"Susu cokelat dingin."},
  {id:86,name:"Susu Putih",category:"Minuman",price:6000,stock:56620,desc:"Susu putih segar."},
  {id:87,name:"Es Teh Susu",category:"Minuman",price:7000,stock:12458,desc:"Teh susu dingin."},
  {id:88,name:"Es Soda Gembira",category:"Minuman",price:15000,stock:0,desc:"Soda susu dan sirup."},
  {id:89,name:"Es Sirup",category:"Minuman",price:7000,stock:30,desc:"Sirup manis dingin."},
  {id:90,name:"Air Mineral",category:"Minuman",price:5000,stock:24550,desc:"Air mineral botol."},
  {id:91,name:"Air Mineral Cup",category:"Minuman",price:3000,stock:0,desc:"Air mineral cup."},
  {id:92,name:"Es Kelapa Muda",category:"Minuman",price:15000,stock:0,desc:"Kelapa muda segar."},
  {id:93,name:"Jus Alpukat",category:"Minuman",price:11000,stock:15322,desc:"Jus alpukat creamy."},
  {id:94,name:"Jus Mangga",category:"Minuman",price:10000,stock:12452,desc:"Jus mangga segar."},
  {id:95,name:"Jus Jambu",category:"Minuman",price:8000,stock:1222,desc:"Jus jambu segar."},
  {id:96,name:"Jus Melon",category:"Minuman",price:9000,stock:2345,desc:"Jus melon segar."},
  {id:97,name:"Jus Jeruk",category:"Minuman",price:8000,stock:1245,desc:"Jus jeruk segar."},
  {id:98,name:"Thai Tea",category:"Minuman",price:10000,stock:0,desc:"Thai tea creamy."}];


const state={cart:JSON.parse(localStorage.getItem("warungCart")||"{}"),cat:"Semua",q:""};
const $=s=>document.querySelector(s);
const money=n=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
const icon=c=>c==="Minuman"?"🥤":c==="Snack"?"🍟":"🍛";
function save(){localStorage.setItem("warungCart",JSON.stringify(state.cart))}
function total(){return Object.entries(state.cart).reduce((a,[id,q])=>a+(MENU.find(x=>x.id==id)?.price||0)*q,0)}
function count(){return Object.values(state.cart).reduce((a,b)=>a+b,0)}
function filters(){let cs=["Semua",...new Set(MENU.map(x=>x.category))];$("#filters").innerHTML=cs.map(c=>`<button class="filter ${state.cat===c?"active":""}" onclick="setCat('${c}')">${c}</button>`).join("")}
function setCat(c){state.cat=c;filters();menu()}
function menu(){let q=state.q.toLowerCase();let list=MENU.filter(x=>(state.cat==="Semua"||x.category===state.cat)&&(x.name.toLowerCase().includes(q)||x.desc.toLowerCase().includes(q)));
$("#menuGrid").innerHTML=list.map(x=>{let left=x.stock-(state.cart[x.id]||0);return `<article class="card"><div class="food">${icon(x.category)}</div><span class="tag">${x.category.toUpperCase()}</span><h3>${x.name}</h3><p>${x.desc}</p><div class="bottom"><div><div class="price">${money(x.price)}</div><div class="stock ${left<=5?"low":""}">Stok: ${Math.max(0,left)}</div></div><button class="add" onclick="add(${x.id})" ${left<=0?"disabled":""}>+</button></div></article>`}).join("");$("#empty").classList.toggle("hidden",!!list.length)}
function add(id){let x=MENU.find(i=>i.id===id),q=state.cart[id]||0;if(q>=x.stock)return toast("Stok menu ini habis.");state.cart[id]=q+1;save();render();toast(x.name+" masuk keranjang.")}
function qty(id,d){let x=MENU.find(i=>i.id==id),q=(state.cart[id]||0)+d;if(q<=0)delete state.cart[id];else if(q<=x.stock)state.cart[id]=q;save();render()}
function cart(){let es=Object.entries(state.cart);$("#cartCount").textContent=count();$("#cartTotal").textContent=money(total());$("#checkoutTotal").textContent=money(total());$("#cartItems").innerHTML=es.length?es.map(([id,q])=>{let x=MENU.find(i=>i.id==id);return `<div class="cartrow"><div><b>${x.name}</b><small>${money(x.price)} × ${q} = ${money(x.price*q)}</small></div><div class="qty"><button onclick="qty(${id},-1)">−</button><b>${q}</b><button onclick="qty(${id},1)">+</button></div></div>`}).join(""):`<div class="empty">🛒<br><br>Keranjang masih kosong.</div>`}
function render(){filters();menu();cart()}
function toast(m){let t=$("#toast");t.textContent=m;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2100)}
function openCart(){$("#drawer").classList.add("open");$("#overlay").classList.add("show")}
function closeCart(){$("#drawer").classList.remove("open");$("#overlay").classList.remove("show")}
function openModal(){if(!Object.keys(state.cart).length)return toast("Tambahkan menu dulu.");closeCart();$("#modal").classList.add("show")}
$("#cartBtn").onclick=openCart;$("#closeCart").onclick=closeCart;$("#overlay").onclick=closeCart;$("#checkoutBtn").onclick=openModal;$("#closeModal").onclick=()=>$("#modal").classList.remove("show");
$("#search").oninput=e=>{state.q=e.target.value;menu()};
$("#dana").textContent=STORE.payments.dana;$("#gopay").textContent=STORE.payments.gopay;$("#bca").textContent=STORE.payments.bca;$("#bri").textContent=STORE.payments.bri;

$("#checkoutForm").onsubmit=e=>{e.preventDefault();let f=new FormData(e.target);let lines=Object.entries(state.cart).map(([id,q])=>{let x=MENU.find(i=>i.id==id);return `• ${x.name} x${q} = ${money(x.price*q)}`}).join("\n");
let msg=`🍜 *ORDER ${STORE.name.toUpperCase()}*\n\n*DATA PEMBELI*\nNama: ${f.get("name")}\nUmur: ${f.get("age")} tahun\nGmail: ${f.get("email")}\nWhatsApp: ${f.get("phone")}\n\n*PENGANTARAN*\nLokasi: ${f.get("location")}\nRuangan/Meja: ${f.get("room")}\n\n*PESANAN*\n${lines}\n\nTotal: *${money(total())}*\nPembayaran: ${f.get("payment")}\nCatatan: ${f.get("note")||"-"}`;
window.open(`https://wa.me/${STORE.sellerWhatsApp}?text=${encodeURIComponent(msg)}`,"_blank");state.cart={};save();render();$("#modal").classList.remove("show");toast("Pesanan dibuka di WhatsApp penjual.")};
render();