const khmerCuisines = [
    {
      id: 1,
      name: "Fish Amok",
      description: "Steamed curry fish wrapped in banana leaves, cooked with coconut milk and kroeung paste.",
      price: 6.50,
      image: "https://silkroadrecipes.com/wp-content/uploads/2024/08/Cambodian-Khmer-Fish-Amok-Recipe-square.jpg",
      addToCartBtn: "Add to Cart"
    },
    {
      id: 2,
      name: "Beef Lok Lak",
      description: "Stir-fried marinated beef cubes served with fresh lettuce, cucumbers, tomatoes, and lime-pepper dip.",
      price: 7.00,
      image: "https://images.squarespace-cdn.com/content/v1/60982df9899ff80ac258be5e/1649798535202-E0ES1CQ97EF13UV6QJRZ/IMG_7636.jpg",
      addToCartBtn: "Add to Cart"
    },
    {
      id: 3,
      name: "Nom Banh Chok",
      description: "Khmer noodles topped with a cold fish-based green curry soup and fresh vegetable garnishes.",
      price: 3.50,
      image: "https://www.cambodiaembassyuk.org/wp-content/uploads/2023/11/Num-Banh-Chok-Khmer.jpg",
      addToCartBtn: "Add to Cart"
    },
    {
      id: 4,
      name: "Samlor Korkor",
      description: "Traditional Khmer soup loaded with vegetables, fish, green papaya, and toasted ground rice.",
      price: 5.50,
      image: "https://blog.takemetour.com/wp-content/uploads/2019/03/Somlorkoko.jpg",
      addToCartBtn: "Add to Cart"
    },
    {
      id: 5,
      name: "Kuy Teav",
      description: "Popular noodle soup featuring rice noodles in a rich pork broth, topped with meat, herbs, and garlic oil.",
      price: 4.00,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLZ8XnZb_HtZ1jsgzCdYhGHdluBEjegN1qywpDQZDjzKdslSHm_4_pnrop&s=10",
      addToCartBtn: "Add to Cart"
    },
    {
      id: 6,
      name: "Bai Sach Chrouk",
      description: "Thinly sliced grilled pork marinated in coconut milk and garlic, served over warm white rice.",
      price: 3.00,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALAgdYTBaIkr9Nwd0UNjVsojnwPWGln9tvLkutY15idBKVN8olui9Plc&s=10",
      addToCartBtn: "Add to Cart"
    },
    {
      id: 7,
      name: "Pleah Sach Ko",
      description: "Lime-cured beef salad tossed with fresh herbs, lemongrass, shallots, and crushed peanuts.",
      price: 6.00,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8riIE9N38qBMrxPExoYiCrShMt64Q6Qj_o1HNHNQl9g&s=10",
      addToCartBtn: "Add to Cart"
    },
    {
      id: 8,
      name: "Prahok Ktis",
      description: "A rich dip made from fermented fish paste, minced pork, and coconut milk, served with raw veggies.",
      price: 5.00,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SrWeKsVnRnp8zSYf2Xxg0ggAQXuf3-wWomBh-GIev-J8Dz-4Nr3_hMM&s=10",
      addToCartBtn: "Add to Cart"
    },
    {
      id: 9,
      name: "Khmer Red Curry",
      description: "Mild coconut-based chicken or beef curry cooked with sweet potatoes, eggplant, and green beans.",
      price: 6.50,
      image: "https://i.pinimg.com/736x/50/d8/c8/50d8c8175d1a823c03cde33fd7820d59.jpg",
      addToCartBtn: "Add to Cart"
    },
    {
      id: 10,
      name: "Banh Chao",
      description: "Crispy Cambodian crepes filled with minced pork, bean sprouts, and served with sweet fish sauce.",
      price: 4.50,
      image: "https://images.squarespace-cdn.com/content/v1/60982df9899ff80ac258be5e/1623351603685-477EDJYYCF1O9PYA35V2/pete-eats-recipes-banh-chao-savory-crepe.jpg",
      addToCartBtn: "Add to Cart"
    },
    {
      id: 11,
      name: "Lort Cha",
      description: "Stir-fried short pin noodles cooked with green onions, bean sprouts, beef, and topped with a fried egg.",
      price: 3.50,
      image: "https://images.squarespace-cdn.com/content/v1/60982df9899ff80ac258be5e/2fdcacda-acae-4764-a9dd-2c601df8f371/56A17031-A806-4076-B381-9C25653DD4C0.jpg",
      addToCartBtn: "Add to Cart"
    },
    {
      id: 12,
      name: "Cha Kroeung Sach Ko",
      description: "Stir-fried beef cooked with lemongrass paste (kroeung), holy basil, and chili.",
      price: 6.00,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWtCwoy9DMmEooBVtsUX6KluXubXJJgTvtYg1f1kH78nqUNetateR6u4ZL&s=10",
      addToCartBtn: "Add to Cart"
    },
    {
      id: 13,
      name: "Ngoam Sdao",
      description: "Neem leaf salad with smoked fish, pork, and cucumbers, tossed in a tamarind sauce.",
      price: 5.00,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOmIs2LhppyONBTFlw2jlJFbM2KQG5yUTq2T_QYRYQu-Vd5YOlFHEqXJT&s=10",
      addToCartBtn: "Add to Cart"
    },
    {
      id: 14,
      name: "Mchu Krerng",
      description: "Sour lemongrass soup with khmer spices, morning glory and beef",
      price: 2.00,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPtS8SOS_WNv7KmE8n2Xs7UNwDgRQzOlucfIdRtS6UBDov3QCkr-kCD7se&s=10",
      addToCartBtn: "Add to Cart"
    },
  ];

export { khmerCuisines };