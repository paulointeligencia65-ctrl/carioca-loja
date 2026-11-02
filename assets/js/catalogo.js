/* =====================================================================
   CATÁLOGO — Carioca
   Loja independente de produtos diversos
   7 categorias, 26 produtos
===================================================================== */

window.CATEGORIAS = [
  { id:"celulares",   nome:"Celulares",              ico:"📱", img:"assets/img/smartphone-a03s.jpg" },
  { id:"capinhas",    nome:"Capinhas e Películas",   ico:"🛡️", img:"assets/img/capinha-a32.jpg" },
  { id:"carregadores",nome:"Carregadores e Cabos",   ico:"🔌", img:"assets/img/cabo-usb.jpg" },
  { id:"audio",       nome:"Fones e Áudio",          ico:"🎧", img:"assets/img/fone-hmaston.jpg" },
  { id:"informatica", nome:"Informática",            ico:"💻", img:"assets/img/pc-c3plus.jpg" },
  { id:"acessorios",  nome:"Acessórios",             ico:"🧰", img:"assets/img/tripe-flexivel.jpg" },
  { id:"papelaria",   nome:"Papelaria e Escritório", ico:"✏️", img:"assets/img/lapis-decorados.jpg" },
  { id:"relogios",    nome:"Relógios e iPhones",     ico:"🕰️", img:"assets/img/relogio.jpg" },
];

window.PRODUTOS = [
  /* ---------- CELULARES ---------- */
  {
    id:"samsung-a01-32",
    nome:"Samsung Galaxy A01 32GB",
    cat:"celulares", tag:"Usado",
    preco:399.00, parcelas:6,
    img:"assets/img/smartphone-a03s.jpg",
    desc:"Aparelho revisado na nossa bancada, bateria testada e funcionando 100%. Acompanha carregador.",
    destaque:true
  },
  {
    id:"samsung-j5-16",
    nome:"Samsung Galaxy J5 16GB",
    cat:"celulares", tag:"Usado",
    preco:459.00, parcelas:5,
    img:"assets/img/samsung-j5-usado.jpg",
    desc:"Tela original, bom estado de conservação. Revisado e com garantia de funcionamento.",
    destaque:true
  },
  {
    id:"celular-a-combinar",
    nome:"Celular novo — consulte modelos disponíveis",
    cat:"celulares", tag:Novo,
    preco:null,
    img:"assets/img/loja-prateleiras.jpg",
    desc:"Trabalhamos com as principais marcas (Samsung, Motorola, Xiaomi). Chame no WhatsApp e veja os modelos em estoque hoje."
  },
  /* ---------- CAPINHAS ---------- */
  {
    id:"notebook-dell-5490",
    nome:"Notebook Dell Latitude 5490 — i5 8ª, 8GB, HD 1TB",
    cat:"informatica", tag:Destaque,
    preco:3899.00, parcelas:10,
    img:"assets/img/notebook-dell-5490.jpg",
    desc:"Intel Core i5 8ª geração, 8GB de RAM e 1TB de HD. Notebook revisado, 10x sem juros.",
  },
  {
    id:"material-escolar",
    nome:"Material escolar e de escritório",
    cat:"papelaria",
    preco:null,
    img:"assets/img/lapis-decorados.jpg",
    desc:"Cadernos, canetas, lápis decorados, calculadoras, pastas e impressão de documentos."
  },
  {
    id:"lapis-decorados",
    nome:"Lápis decorados e material de festa",
    cat:"papelaria",
    preco:null,
    img:"assets/img/lapis-decorados.jpg",
    desc:"Linha fofa de lápis e canetas para lembrancinhas e presentes."
  },
  /* ---------- ÁUDIO ---------- */
  {
    id:"carregadores",
    nome:"Carregadores e Cabos",
    cat:"carregadores",
    img:"assets/img/cabo-usb.jpg",
    ajuste:"cover"
  },
  /* ---------- ACESSÓRIOS ---------- */
  {
    id:"sony-mdr",
    nome:"Sony MDR-ZX110",
    cat:"acessorios", tag:Novo,
    preco:199.99,
    img:"assets/img/fone-hmaston.jpg",
    desc:"Headphones com som grave potente e conforto prolongado."
  },
  {
    id:"jbl-flip",
    nome:"JBL Flip 6",
    cat:"acessorios", tag:Novo,
    preco:599.99,
    img:"assets/img/fone-hmaston.jpg",
    desc:"Caixa de som portátil com até 12h de bateria."
  },
  /* ---------- INFORMÁTICA ---------- */
  {
    id:"pc-c3plus",
    nome:"PC Cobrança C3Plus",
    cat:"informatica", tag:Usado,
    preco:1299.90,
    img:"assets/img/pc-c3plus.jpg",
    desc:"Computador para serviços de cobrança, processador ágil e armazenamento adequado."
  },
  {
    id:"notebook-seminovo",
    nome:"Notebook Seminovo",
    cat:"informatica", tag:Usado,
    preco:899.90,
    img:"assets/img/notebook-seminovo.jpg",
    desc:"Notebook revisado, funciona bem para tarefas do dia a dia.",
    destaque:true
  },
  /* ---------- PAPELARIA ---------- */
  {
    id:"impressora-jato",
    nome:"Impressora Jato de Tinta",
    cat:"papelaria", tag:Usado,
    preco:349.90,
    img:"assets/img/pc-c3plus.jpg",
    desc:"Impressora para impressão de documentos e fotos básicas."
  },
];
/* ==================================================================== */