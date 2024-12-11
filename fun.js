// function ismchiqarsh() {
//   console.log("Diyora");
// }
// ismchiqarsh();

// //--------------//

// function qoshish(a, b, c, d) {
//   console.log(a + b * c + d);
// }
// qoshish(44, 3, 56, 7);

// //-----------//

// function ismf(ism, familiya) {
//   let a = ism.slice(0, 1).toUpperCase() + ism.slice(1, ism.length);
//   let b =
//     familiya.slice(0, 1).toUpperCase() + familiya.slice(1, familiya.length);

//   console.log(a, b);
// }

// ismf("ali", "aliyev");

//------------------//

// function ism(a){
// let b=a.slice(0,1).toUpperCase()+ a.slice(1,a.length-1).toLowerCase() +a.slice(-1).toUpperCase()
// console.log(b);

// }
// ism("Sobirjon")

// let h1 = document.querySelector(".h1");

// function ism(a) {
//   h1.textContent = a;
// }
// ism("Javohir");

// let cont = document.querySelector(".container");

// function html(a, b) {
//   cont.innerHTML += `  <div class="card bg-gray-300 p-4 rounded-lg">
//         <h1 class="text-2xl font-medium text-gray-900">${a}</h1>
//         <p class="text-gray-900 mt-4">${b}</p>
//     </div>`;
// }
// html(
//   "Farangiz",
//   `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, natus quam! Quidem mollitia iure non adipisci earum dolor repellendus fuga sint, atque inventore, laboriosam aut quo nobis optio temporibus nihil.`
// );
// html(
//   "Muslima",
//   `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, natus quam! Quidem mollitia iure non adipisci earum dolor repellendus fuga sint, atque inventore, laboriosam aut quo nobis optio temporibus nihil.`
// );
// html(
//   "Nozila",
//   `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, natus quam! Quidem mollitia iure non adipisci earum dolor repellendus fuga sint, atque inventore, laboriosam aut quo nobis optio temporibus nihil.`
// );
//------------------------------------//

// let cont = document.querySelector(".container");

// function html(img, h1, p, a) {
//   cont.innerHTML += `
//      <div class="card rounded-md flex flex-col overflow-hidden animate-bounce pb-4 bg-white m-4 shadow-xl shadow-red-900">
//         <img class="w-full mb-4" src="${img}" alt="">
//      <article class="px-4 flex flex-col">

//         <h1 class="text-2xl animate-bounce font-medium">${h1}</h1>
//         <p class="mt-4 ">${p}</p>
//         <a class="w-full  rounded-md bg-blue-300 text-center text-blue-500 p-4 mt-4" href="${a}">Visit</a></article>

//     </div> `;
// }
// html(
//   `https://static.tildacdn.com/tild3932-3637-4233-b235-613362306535/4.jpg`,
//   "Sank-piter",
//   `facere dicta, eaque, consectetur animi optio! Saepe, quibusdam assumenda! Accusamus iste doloremque velit laudantium.`,
//   `https://tailwindcss.com/docs/installation/play-cdn`
// );
// html(
//   `https://static.tildacdn.com/tild3932-3637-4233-b235-613362306535/4.jpg`,
//   "Sank-piter",
//   `facere dicta, eaque, consectetur animi optio! Saepe, quibusdam assumenda! Accusamus iste doloremque velit laudantium.`,
//   `https://tailwindcss.com/docs/installation/play-cdn`
// );
// html(
//   `https://static.tildacdn.com/tild3932-3637-4233-b235-613362306535/4.jpg`,
//   "Sank-piter",
//   `facere dicta, eaque, consectetur animi optio! Saepe, quibusdam assumenda! Accusamus iste doloremque velit laudantium.`,
//   `https://tailwindcss.com/docs/installation/play-cdn`
// );

// -------------------------------//

let card = document.querySelector("#card");

let data = [
  {
    img: "https://a.d-cd.net/K5djF8WeF7H_gzk6lr0W_ny21eE-960.jpg",
    title: "Audi R8",
    price: "100.$",
  },
  {
    img: "https://i.pinimg.com/originals/c1/43/85/c143856f4f82164d467975c1f33a3fac.jpg",
    title: "cls 63",
    price: "100.$",
  },
  {
    img: "https://www.mansory.com/sites/default/files/styles/1920x800_fullwidth_car_slider/public/migrated/cars/Cars/lamborghini/carbonado/mansory_lamborghini_aventador_carbonado_03.jpg?h=288a8269&itok=M8OxNTRm",
    title: "Aventador",
    price: "100.$",
  },
  {
    img: "https://avatars.mds.yandex.net/get-autoru-vos/5993563/58c6602c2c6fa4058970da133e33c436/1200x900",
    title: "BMW m5",
    price: "100.$",
  },
  {
    img: "https://images.caricos.com/a/audi/2020_audi_rs_q8/images/1600x1200/2020_audi_rs_q8_148_1600x1200.jpg",
    title: "audi q8",
    price: "100.$",
  },
  {
    img: "https://images.caricos.com/a/audi/2020_audi_rs_q8/images/1600x1200/2020_audi_rs_q8_148_1600x1200.jpg",
    title: "Mercedes CLK",
    price: "100.$",
  },
  {
    img: "https://a.d-cd.net/sZSPE41ZTnv9RVSzHUG1FAIOhik-1920.jpg",
    title: "w-202",
    price: "100.$",
  },
  //
  {
    img: "https://static.tildacdn.com/tild6665-3063-4531-a361-616366363564/1.jpg",
    title: "Porche 918",
    price: "100.$",
  },
  {
    img: "https://i.pinimg.com/736x/b8/6c/9f/b86c9f4e744329ec3d76eac5e486c2f1.jpg",
    title: "Porche 911",
    price: "100.$",
  },
  {
    img: "https://kolesa-uploads.ru/-/bcfc33af-3920-45b2-8459-fa424bea4ba9/624184.jpg",
    title: "Labargini Urus",
    price: "100.$",
  },
  {
    img: "https://i.ytimg.com/vi/pZknEfvdx7c/maxresdefault.jpg",
    title: "gelik",
    price: "100.$",
  },
];
for (let i of data) {
  card.innerHTML += `
     <article class="border rounded-lg bg-white overflow-hidden shadow-xl shadow-black">
            <img class="w-full rounded-md h-44 object-cover" src="${i.img}" alt="">
            <div class="p-2">
                <h1 class="active:bg-gray-200 w-24 rounded-md p-1 text-lg font-medium text-gray-900">${i.title}</h1>
                <h2 class="text-gray-500 active:bg-gray-200 w-24 rounded-md border-1 p-1 font-bold text-xl m-1">${i.price}</h2>
                <button class="bg-gray-900 text-white p-1 w-full rounded-md mt-2 active:scale-95 duration:300">BUY NOW  </button>
            </div>

        </article> `;
}
