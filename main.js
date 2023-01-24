import './style.css'

const products = [
  {
    title: "Vaporware tee",
    price: "40,00",
    image:"https://res.cloudinary.com/dpidlverd/image/upload/v1674491358/replica/1222DayseekerTourReturnsWebMock6-Tee1_360x_x8oajq.webp"
  },
  {
    title: "Tropical tee",
    price: "40,00",
    image:"https://res.cloudinary.com/dpidlverd/image/upload/v1674490615/replica/1222DayseekerTourReturnsWebMock5-Tee1b_360x_uom8dm.png"
  },
  {
    title: "Lily tee",
    price: "40,00",
    image:"https://res.cloudinary.com/dpidlverd/image/upload/v1674490623/replica/1222DayseekerTourReturnsWebMock4-Tee1b_360x_kfxl1d.png"
  },
  {
    title: "Get coffee dye tee",
    price: "45,00",
    image:"https://res.cloudinary.com/dpidlverd/image/upload/v1674490628/replica/1222DayseekerTourReturnsWebMock3-DyeTee1b_360x_vt8ydf.png"
  },
  {
    title: "See the sun forever tee",
    price: "40,00",
    image:"https://res.cloudinary.com/dpidlverd/image/upload/v1674490635/replica/0722DayseekerNewCollection-03BlackTeeB_360x_qe1ix9.png"
  },
  {
    title: "Deconstructed sunset cut off",
    price: "35,00",
    image:"https://res.cloudinary.com/dpidlverd/image/upload/v1674490643/replica/1222DayseekerTourReturnsWebMock2-Tank1b_360x_doduyu.png"
  },
  {
    title: "Dark sun acid wash hoodie",
    price: "65,00",
    image:"https://res.cloudinary.com/dpidlverd/image/upload/v1674491363/replica/1222DayseekerTourReturnsWebMock7-Hoodie1_360x_jyjtag.webp"
  },
  {
    title: "Dark sun vinyl - black variant",
    price: "30,00",
    image:"https://res.cloudinary.com/dpidlverd/image/upload/v1674491367/replica/Dayseeker_VinylVariantMocks_Black_360x_fly6sl.webp"
  }, 
];

const printProducts = (items) => {
  const container = document.querySelector("#app")
  for (const item of items) {
    container.innerHTML += `
    <figure>
    <img src=${item.image} alt=${item.title} />
    <h3>${item.title}</h3>
    <h4>$${item.price}</h4>
    </figure>`;
  }
}
printProducts(products);