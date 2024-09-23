// Data untuk skill
const skills = [
  {
    imgSrc: "/assets/images/map.jpg",
    title: "Dasar Manajemen Sistem",
    duration: "12 Jam",
    link: "#",
  },
  {
    imgSrc: "/assets/images/map.jpg",
    title: "Dasar Microsoft Office",
    duration: "8 Jam",
    link: "#",
  },
  {
    imgSrc: "/assets/images/map.jpg",
    title: "Manajemen Bisnis",
    duration: "20 Jam",
    link: "#",
  },
  {
    imgSrc: "/assets/images/map.jpg",
    title: "Pengelolaan Keuangan",
    duration: "9 Jam",
    link: "#",
  },
  {
    imgSrc: "/assets/images/map.jpg",
    title: "Manajemen Proyek",
    duration: "16 Jam",
    link: "#",
  },
  {
    imgSrc: "/assets/images/map.jpg",
    title: "Dasar Desain Web",
    duration: "9 Jam",
    link: "#",
  },
  {
    imgSrc: "/assets/images/map.jpg",
    title: "Manajemen Waktu",
    duration: "16 Jam",
    link: "#",
  },
  {
    imgSrc: "/assets/images/map.jpg",
    title: "Etika Kerja",
    duration: "9 Jam",
    link: "#",
  },
  {
    imgSrc: "/assets/images/map.jpg",
    title: "Dasar Pemrograman",
    duration: "14 Jam",
    link: "#",
  },
  {
    imgSrc: "/assets/images/map.jpg",
    title: "Pemasaran Digital",
    duration: "10 Jam",
    link: "#",
  },
  {
    imgSrc: "/assets/images/map.jpg",
    title: "Public Speaking",
    duration: "7 Jam",
    link: "#",
  },
  {
    imgSrc: "/assets/images/map.jpg",
    title: "Analisis Data",
    duration: "15 Jam",
    link: "#",
  },
];

const itemList = document.getElementById("itemList");

skills.forEach((skill) => {
  const li = document.createElement("li");
  const article = document.createElement("article");
  article.classList.add("item-card");

  const img = document.createElement("img");
  img.classList.add("card-img");
  img.src = skill.imgSrc;
  img.alt = skill.title;

  const title = document.createElement("p");
  title.classList.add("card-title");
  title.textContent = skill.title;

  const duration = document.createElement("p");
  duration.classList.add("card-duration");
  duration.textContent = skill.duration;

  const link = document.createElement("a");
  link.classList.add("card-link");
  link.href = skill.link;
  link.textContent = "Lihat Selengkapnya";

  // Menambahkan elemen ke artikel
  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(duration);
  article.appendChild(link);

  // Menambahkan artikel ke li
  li.appendChild(article);

  // Menambahkan li ke daftar
  itemList.appendChild(li);
});
