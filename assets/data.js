
const shoesData = [
    {
        id: "1",
        brand: "Nike",
        name: "Nike Air Max INTRLK",
        image: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/08148074-5636-4ddf-8c5d-486880473946/air-max-intrlk-shoes-clCM4d.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/28b95f9b-71d6-45da-9941-25a207bb92ab/air-max-intrlk-lite-shoes-nfMxNF.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5141c39b-f957-4c68-979d-a464b6c4e711/air-max-intrlk-lite-shoes-nfMxNF.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/388d66ac-1db1-49cd-bb5f-b189cd51ab7f/air-max-intrlk-lite-shoes-nfMxNF.png",
        ],
        details:
            "You've got to feel the sensation to be the sensation. Enter the Nike Air Max INTRLK. Stacked Air cushioning turns the page of comfort with increased responsiveness and the perfect amount of bounce. Lightweight, easy-to-style materials stand up to wear and tear. Finishing it off, the Waffle-inspired outsole adds true Nike zest.",
        price: "₹9,695",
    },
    {
        id: "24",
        brand: "Balenciaga",
        name: "MEN'S X-PANDER TRAINERS IN GREEN/SILVER",
        image: [
            "https://balenciaga.dam.kering.com/m/3ec8336af8576ed9/Large-653871W2RA31212_F.jpg?v=3",
            "https://balenciaga.dam.kering.com/m/3ec8336af8576ed9/Large-653871W2RA31212_F.jpg?v=3",
            "https://balenciaga.dam.kering.com/m/3ec8336af8576ed9/Large-653871W2RA31212_F.jpg?v=3",

        ],
        details:
            "X-Pander Trainers in grey, black and white mesh and nylon",
        price: "₹19,999",
    },
    {
        id: "2",
        brand: "Nike",
        name: "Nike Air Max 2021",
        image: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3cd6ba48-cf35-4439-b0d5-0fe40ca05eb6/air-max-2021-shoes-MljWq1.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3cd6ba48-cf35-4439-b0d5-0fe40ca05eb6/air-max-2021-shoes-MljWq1.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3cd6ba48-cf35-4439-b0d5-0fe40ca05eb6/air-max-2021-shoes-MljWq1.png",

        ],
        details:
            "We could use a lot of superlatives to describe these shoes. We could tell you that the new Air cushioning system delivers the most revolutionary sensation you've ever felt. Or say the cored-out foam midsole gives you an incredible, super-soft feel. But what fun is giving away all the surprises? Lace up and feel the next era of Air for yourself. Made from at least 20% recycled materials by weight.",
        price: "₹14,495",
    },
    {
        id: "42",
        brand: "Puma",
        name: "Softride Enzo NXT Men's Sneakers",
        image: [
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/195234/01/sv01/fnd/IND/fmt/png/Softride-Enzo-NXT-Men's-Sneakers",
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/195234/01/sv01/fnd/IND/fmt/png/Softride-Enzo-NXT-Men's-Sneakers",
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/195234/01/sv01/fnd/IND/fmt/png/Softride-Enzo-NXT-Men's-Sneakers",
        ],

        details:
            "With an iconic design inspired by Japanese bullet trains and water droplets, push your style full speed ahead in the Air Max 97. Full-length Nike Air cushioning lets you ride in first-class comfort.",
        price: "₹5,499",
    },

    {
        id: "4",
        brand: "Nike",
        name: "Nike Air Max 97",
        image: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9d6b66b3-a5f2-4b7a-9007-17ef0bc14392/air-max-97-shoes-Tmhzv0.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9d6b66b3-a5f2-4b7a-9007-17ef0bc14392/air-max-97-shoes-Tmhzv0.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9d6b66b3-a5f2-4b7a-9007-17ef0bc14392/air-max-97-shoes-Tmhzv0.png",

        ],
        details:
            "With an iconic design inspired by Japanese bullet trains and water droplets, push your style full speed ahead in the Air Max 97. Full-length Nike Air cushioning lets you ride in first-class comfort.",
        price: "₹15,995",
    },

    {
        id: "12",
        brand: "Adidas",
        name: "FORUM EXHIBIT LOW SHOES",
        image: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/545c5a209c564aa8b1f4ae3101664fe1_9366/Forum_Exhibit_Low_Shoes_White_GZ0937_01_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/545c5a209c564aa8b1f4ae3101664fe1_9366/Forum_Exhibit_Low_Shoes_White_GZ0937_01_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/545c5a209c564aa8b1f4ae3101664fe1_9366/Forum_Exhibit_Low_Shoes_White_GZ0937_01_standard.jpg",
        ],

        details:
            "Swagger on the hardwood. Swagger on the sidelines. Pro basketball players are all about style. A reworked version of the iconic adidas Forum, these B-ball-inspired shoes show off a layered design that rivals the looks of basketball's best dressed. The sleek leather upper has a double D-ring for double the style.",
        price: "₹8,599.00",
    },
    {
        id: "6",
        brand: "Nike",
        name: "Nike Air Max 1",
        image: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6b2d1092-f1ee-4abc-afcf-bdb11a0f4866/air-max-1-shoes-RX4LKr.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6b2d1092-f1ee-4abc-afcf-bdb11a0f4866/air-max-1-shoes-RX4LKr.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6b2d1092-f1ee-4abc-afcf-bdb11a0f4866/air-max-1-shoes-RX4LKr.png",
        ],

        details:
            "Meet the leader of the pack. First released in 1987, the Nike Air Max 1 was the first shoe in the family to bring Air to the world. With a fast-paced look, tried-and-true cushioning and classic wavy mudguard, it's no wonder it's reigned supreme ever since.",
        price: "₹13,995",
    },
    {
        id: "46",
        brand: "Jordan",
        name: "Air Jordan XXXVI PF",
        image: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8b78b5c1-364e-4764-a63c-52f26746afea/air-jordan-xxxvi-pf-basketball-shoes-fjPfDg.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8b78b5c1-364e-4764-a63c-52f26746afea/air-jordan-xxxvi-pf-basketball-shoes-fjPfDg.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8b78b5c1-364e-4764-a63c-52f26746afea/air-jordan-xxxvi-pf-basketball-shoes-fjPfDg.png",
        ],

        details:
            "The Air Jordan XXXVI isn't just the next shoe up in the iconic franchise; it's an expression of the drive and energy that sparked a basketball revolution.It's one of the lightest Air Jordan game shoes to date, featuring a minimal but durable leno-weave upper reinforced with a TPU ribbon and synthetic overlays.",
        price: "₹16,499",
    },
    {
        id: "7",
        brand: "Nike",
        name: "Nike Air Max Dawn",
        image: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7de8cc00-5e27-46ca-8bfc-3a92b0e94d58/air-max-dawn-shoe-VbDN84.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7de8cc00-5e27-46ca-8bfc-3a92b0e94d58/air-max-dawn-shoe-VbDN84.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7de8cc00-5e27-46ca-8bfc-3a92b0e94d58/air-max-dawn-shoe-VbDN84.png",

        ],
        details:
            "Rooted to sporty athletics DNA, the Nike Air Max Dawn is thoughtfully crafted from at least 20% recycled material by weight. Soft suede and airy textile blend vintage running vibes with modern design. The plush foam in the midsole slants at the heel for added energy while the outsole pattern gives your style traction. Plus, Air cushioning delivers a feel-good forecast for the day.",
        price: "₹10,795",
    },
    {
        id: "8",
        brand: "Nike",
        name: "Nike Air Max 95",
        image: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b0e76f6e-f849-48d5-af37-ab5ae9904304/air-max-95-shoes-fk6w0s.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b0e76f6e-f849-48d5-af37-ab5ae9904304/air-max-95-shoes-fk6w0s.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b0e76f6e-f849-48d5-af37-ab5ae9904304/air-max-95-shoes-fk6w0s.png",

        ],
        details:
            "Taking inspiration from the human body and '90s athletics aesthetics, the Air Max 95 mixes unbelievable comfort with fast-paced style. The wavy side panels add natural flow to any outfit, while visible Nike Air in the heel and forefoot delivers performance comfort.",
        price: "₹14,995",
    },
    {
        id: "9",
        brand: "Nike",
        name: "Nike Air Max 95 By You",
        image: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/eed1bb5a-ebdc-4a82-a030-dff057828b10/custom-nike-air-max-95-by-you.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/eed1bb5a-ebdc-4a82-a030-dff057828b10/custom-nike-air-max-95-by-you.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/eed1bb5a-ebdc-4a82-a030-dff057828b10/custom-nike-air-max-95-by-you.png",
        ],

        details:
            "We could use a lot of superlatives to describe these shoes. We could tell you that the new Air cushioning system delivers the most revolutionary sensation you've ever felt. Or say the cored-out foam midsole gives you an incredible, super-soft feel. But what fun is giving away all the surprises? Lace up and feel the next era of Air for yourself. Made from at least 20% recycled materials by weight.",
        price: "₹16,495",
    },
    {
        id: "10",
        brand: "Adidas",
        name: "DONOVAN MITCHELL D.O.N. ISSUE #3 X BEL-AIR ATHLETICS SHOES",
        image: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/387952ea50a8427dae45ad41002648a9_9366/Donovan_Mitchell_D.O.N._Issue_3_x_Bel-Air_Athletics_Shoes_Blue_H68047_01_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/387952ea50a8427dae45ad41002648a9_9366/Donovan_Mitchell_D.O.N._Issue_3_x_Bel-Air_Athletics_Shoes_Blue_H68047_01_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/387952ea50a8427dae45ad41002648a9_9366/Donovan_Mitchell_D.O.N._Issue_3_x_Bel-Air_Athletics_Shoes_Blue_H68047_01_standard.jpg",
        ],

        details:
            "A limited colourway created in collaboration with Bel-Air Athletics, the D.O.N. Issue #3: Prep School shoes from adidas Basketball pay homage to the iconic paisley print jacket. With Don's own journey from the city to the suburbs, this colourway mixes in hits of neon hues to recreate the opening scenes of the legendary television show.",
        price: "₹6,999.50",
    },
    {
        id: "17",
        brand: "Balenciaga",
        name: "MEN'S TRIPLE S TRAINERS IN BLACK",
        image:
            [
                "https://balenciaga.dam.kering.com/m/3af9cb97f6786d10/Large-533882W09OM1000_F.jpg?v=3",
                "https://balenciaga.dam.kering.com/m/3af9cb97f6786d10/Large-533882W09OM1000_F.jpg?v=3",
                "https://balenciaga.dam.kering.com/m/3af9cb97f6786d10/Large-533882W09OM1000_F.jpg?v=3",
            ],
        details:
            "Triple S Trainers in black double foam and mesh.",
        price: "₹9,999",
    },
    {
        id: "11",
        brand: "Adidas",
        name: "X9000L1 SHOES",
        image: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a73c00910e84215879bacc2011734af_9366/X9000L1_Shoes_Black_H68081_01_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a73c00910e84215879bacc2011734af_9366/X9000L1_Shoes_Black_H68081_01_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a73c00910e84215879bacc2011734af_9366/X9000L1_Shoes_Black_H68081_01_standard.jpg",
        ],

        details:
            "Grab the controls and make your run your own. These sleek adidas X9000L1 running shoes make a statement on city streets. Bounce cushioning is lightweight and flexible for long-lasting comfort.",
        price: "₹5,599.50",
    },
    {
        id: "21",
        brand: "Balenciaga",
        name: "MEN'S TRIPLE S TRAINERS IN BLACK",
        image: [
            "https://balenciaga.dam.kering.com/m/154df30b94fce56b/Large-534217W2CA11000_F.jpg?v=4",
            "https://balenciaga.dam.kering.com/m/154df30b94fce56b/Large-534217W2CA11000_F.jpg?v=4",
            "https://balenciaga.dam.kering.com/m/154df30b94fce56b/Large-534217W2CA11000_F.jpg?v=4",

        ],
        details:
            "Triple S Trainers in black double foam and mesh",
        price: "10,999",
    },
    {
        id: "13",
        brand: "Adidas",
        name: "ULTRABOOST UNCAGED LAB SHOES",
        image: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d76a048353bf4e1789e8ad2500c2f6a6_9366/Ultraboost_Uncaged_LAB_Shoes_White_FZ3981_01_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d76a048353bf4e1789e8ad2500c2f6a6_9366/Ultraboost_Uncaged_LAB_Shoes_White_FZ3981_01_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d76a048353bf4e1789e8ad2500c2f6a6_9366/Ultraboost_Uncaged_LAB_Shoes_White_FZ3981_01_standard.jpg",
        ],

        details:
            "It's next to impossible to run every day and not think about the ground we run on. From city parks to desert trails, nature is the runner's stadium. These Ultraboost Uncaged shoes are made with the planet in mind. The seamless adidas Primeknit upper is made from TENCEL™, with linen laces. The flexible outsole adapts to your footstrike while unleashing the full potential of Boost.",
        price: "₹12,599.50",
    }, {
        id: "14",
        brand: "Adidas",
        name: "SUPERSTAR SHOES",
        image:
            [
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6af3a324ad8f4632b36badf900892d33_9366/Superstar_Shoes_White_GV7610_01_standard.jpg",
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6af3a324ad8f4632b36badf900892d33_9366/Superstar_Shoes_White_GV7610_01_standard.jpg",
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6af3a324ad8f4632b36badf900892d33_9366/Superstar_Shoes_White_GV7610_01_standard.jpg",
            ],
        details:
            "Since its '70s debut, the adidas Superstar trainer has been on a constant journey of change. It hopped off the hardwood to make a name for itself in the music scene and then spread to become a style icon around the world. Now it's evolving to help end plastic waste. The traditional upper is swapped for a synthetic one, and the heel strap and tongue webbing are made with ocean plastic collected from the beach.",
        price: "₹9,999.00",
    }, {
        id: "15",
        brand: "Adidas",
        name: "FORUM LOW SHOES",
        image:
            [
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f88bdbb8f061489a9e8fadfe011d45a2_9366/Forum_Low_Shoes_White_GV7613_01_standard.jpg",
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f88bdbb8f061489a9e8fadfe011d45a2_9366/Forum_Low_Shoes_White_GV7613_01_standard.jpg",
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f88bdbb8f061489a9e8fadfe011d45a2_9366/Forum_Low_Shoes_White_GV7613_01_standard.jpg",
            ],
        details:
            "Change is possible when we work together. That's why the strap on these adidas Forum shoes is a reminder that we all have a part to play in helping end plastic waste. As we move towards the future, the evolution of this icon is rooted in the classic elements you covet: signature ankle strap, X-detail and lots of B-ball-inspired vibes.",
        price: "₹9,999.00",
    }, {
        id: "16",
        brand: "Adidas",
        name: "X9000L2 HEAT.RDY SHOES",
        image: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3d0ad8e118454e9e8a7aae1400ab6d3c_9366/X9000L2_HEAT.RDY_Shoes_Grey_GW2770_01_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3d0ad8e118454e9e8a7aae1400ab6d3c_9366/X9000L2_HEAT.RDY_Shoes_Grey_GW2770_01_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3d0ad8e118454e9e8a7aae1400ab6d3c_9366/X9000L2_HEAT.RDY_Shoes_Grey_GW2770_01_standard.jpg",
        ],

        details:
            "Breeze through short- and middle-distance runs in these adidas shoes built for lightweight comfort. BOOST delivers incredible energy return and instant comfort with each step to keep you going, and lightweight Bounce cushioning provides enhanced comfort and flexibility. A breathable upper welcomes airflow to help you stay cool when the intensity builds.",
        price: "₹15,999",
    },

    {
        id: "18",
        brand: "Balenciaga",
        name: "MEN'S TRACK TRAINERS IN BLACK",
        image: [
            "https://balenciaga.dam.kering.com/m/3ec5c33fb1336f8a/Large-542023W1GB11000_F.jpg?v=3",
            "https://balenciaga.dam.kering.com/m/3ec5c33fb1336f8a/Large-542023W1GB11000_F.jpg?v=3",
            "https://balenciaga.dam.kering.com/m/3ec5c33fb1336f8a/Large-542023W1GB11000_F.jpg?v=3",

        ],
        details:
            "Track Trainers in black mesh and nylon",
        price: "₹35,999",
    },
    {
        id: "19",
        brand: "Balenciaga",
        name: "MEN'S SPEED LACE-UP TRAINERS IN BLACK",
        image:
            [
                "https://balenciaga.dam.kering.com/m/4a855ea5436ceda9/Large-587289W2DB11013_F.jpg?v=3",
                "https://balenciaga.dam.kering.com/m/4a855ea5436ceda9/Large-587289W2DB11013_F.jpg?v=3",
                "https://balenciaga.dam.kering.com/m/4a855ea5436ceda9/Large-587289W2DB11013_F.jpg?v=3",
            ],
        details:
            "Speed Lace-Up in black knit",
        price: "₹19,999",
    },
    {
        id: "20",
        brand: "Balenciaga",
        name: "MEN'S RUNNER TRAINERS IN WHITE",
        image:
            [
                "https://balenciaga.dam.kering.com/m/6c77ef323c1a7f24/Large-656065W3RA19000_F.jpg?v=3",
                "https://balenciaga.dam.kering.com/m/6c77ef323c1a7f24/Large-656065W3RA19000_F.jpg?v=3",
                "https://balenciaga.dam.kering.com/m/6c77ef323c1a7f24/Large-656065W3RA19000_F.jpg?v=3",
            ],
        details:
            "Runner Trainers in white mesh and nylon",
        price: "₹19,200",
    },
    {
        id: "28",
        brand: "Bata",
        name: "WEINBRENNER OLIVE SNEAKER FOR MEN",
        image: [

            "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwa9aab11c/images/large/8397214_1.jpeg?sw=817",

            "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwa9aab11c/images/large/8397214_1.jpeg?sw=817",

            "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwa9aab11c/images/large/8397214_1.jpeg?sw=817",
        ],
        details:
            "Grab the controls and make your run your own. These sleek adidas X9000L1 running shoes make a statement on city streets. Bounce cushioning is lightweight and flexible for long-lasting comfort.",
        price: "₹1,499",
    },

    {
        id: "22",
        brand: "Balenciaga",
        name: "MEN'S SPEED RECYCLED KNIT TRAINERS IN BLACK/WHITE",
        image:
            [
                "https://balenciaga.dam.kering.com/m/1230a710eb8b107b/Large-645056W2DBQ1015_F.jpg?v=4",
                "https://balenciaga.dam.kering.com/m/1230a710eb8b107b/Large-645056W2DBQ1015_F.jpg?v=4",
                "https://balenciaga.dam.kering.com/m/1230a710eb8b107b/Large-645056W2DBQ1015_F.jpg?v=4",
            ],
        details:
            "Speed Recycled Knit Trainers in black knit, white and black sole unit",
        price: "12,999",
    },
    {
        id: "23",
        brand: "Balenciaga",
        name: "MEN'S RUNNER TRAINERS IN BURGUNDY",
        image: [
            "https://balenciaga.dam.kering.com/m/144d4ad89c953d34/Large-677403W3RB39069_F.jpg?v=2",
            "https://balenciaga.dam.kering.com/m/144d4ad89c953d34/Large-677403W3RB39069_F.jpg?v=2",
            "https://balenciaga.dam.kering.com/m/144d4ad89c953d34/Large-677403W3RB39069_F.jpg?v=2",

        ],
        details:
            "Runner Trainers in white, dark red, grey and black mesh and nylon",
        price: "₹20,999",
    },
    {
        id: "5",
        brand: "Nike",
        name: "Nike Air Max 97",
        image: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/aa8f3178-4244-479c-9910-1bfa6e77933f/air-max-97-shoes-VhxM4R.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/aa8f3178-4244-479c-9910-1bfa6e77933f/air-max-97-shoes-VhxM4R.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/aa8f3178-4244-479c-9910-1bfa6e77933f/air-max-97-shoes-VhxM4R.png",

        ],
        details:
            "With the iconic ripple design that was inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full speed ahead.Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh materials, it lets you ride in comfort.",
        price: "₹15,495",
    },

    {
        id: "25",
        brand: "Balenciaga",
        name: "MEN'S RUNNER TRAINERS IN BLACK",
        image: [
            "https://balenciaga.dam.kering.com/m/3470b09e18f8cba4/Large-656065W3RA11000_F.jpg?v=4",
            "https://balenciaga.dam.kering.com/m/3470b09e18f8cba4/Large-656065W3RA11000_F.jpg?v=4",
            "https://balenciaga.dam.kering.com/m/3470b09e18f8cba4/Large-656065W3RA11000_F.jpg?v=4",

        ],
        details:
            "Runner Trainers in black mesh and nylon",
        price: "₹19,999",
    },
    {
        id: "26",
        brand: "Balenciaga",
        name: "MEN'S TRACK TRAINERS IN WHITE",
        image:
            [
                "https://balenciaga.dam.kering.com/m/46c6394fe0296ddb/Large-542023W1GB19059_F.jpg?v=3",
                "https://balenciaga.dam.kering.com/m/46c6394fe0296ddb/Large-542023W1GB19059_F.jpg?v=3",
                "https://balenciaga.dam.kering.com/m/46c6394fe0296ddb/Large-542023W1GB19059_F.jpg?v=3",
            ],
        details:
            "Track Trainers in white and orange mesh and nylon",
        price: "₹23,000",
    },
    {
        id: "27",
        brand: "Balenciaga",
        name: "MEN'S RUNNER TRAINERS IN BLUE",
        image:
            [
                "https://balenciaga.dam.kering.com/m/4106ad4997f9c120/Large-677403W3RB34912_F.jpg?v=3",
                "https://balenciaga.dam.kering.com/m/4106ad4997f9c120/Large-677403W3RB34912_F.jpg?v=3",
                "https://balenciaga.dam.kering.com/m/4106ad4997f9c120/Large-677403W3RB34912_F.jpg?v=3",
            ],
        details:
            "Runner Trainers in blue, white, grey and black mesh and nylon",
        price: "₹11,999",
    },

    {
        id: "3",
        brand: "Nike",
        name: "Nike Air Max Pre-Day",
        image:
            [
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ee6f714a-597d-446a-8e89-a78b960b3a1a/air-max-pre-day-shoes-jMh2rB.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ee6f714a-597d-446a-8e89-a78b960b3a1a/air-max-pre-day-shoes-jMh2rB.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ee6f714a-597d-446a-8e89-a78b960b3a1a/air-max-pre-day-shoes-jMh2rB.png",
            ],
        details:
            "Taking the classic look of heritage Nike Running into a new realm, the Nike Air Max Pre-Day brings you a fast-paced look that's ready for today's world.A true nod to the past with a design made from at least 20% recycled material by weight, it keeps the retro-athletics aesthetic alive.A new Air window energises the look, mixing head-turning style with unbelievably soft cushioning.",
        price: "₹11,495",
    },
    {
        id: "29",
        brand: "Bata",
        name: "WEINBRENNER TURQBLUE SNEAKER",
        image:
            [
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwbaa13ff0/images/large/8299216_1.jpeg?sw=817",
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwbaa13ff0/images/large/8299216_1.jpeg?sw=817",
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwbaa13ff0/images/large/8299216_1.jpeg?sw=817",
            ],
        details:
            "Grab the controls and make your run your own. These sleek adidas X9000L1 running shoes make a statement on city streets. Bounce cushioning is lightweight and flexible for long-lasting comfort.",
        price: "₹1,699",
    },
    {
        id: "30",
        brand: "Bata",
        name: "WEINBRENNER BLACK SNEAKER ",
        image:
            [
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw0fe6b140/images/large/8396132_1.jpeg?sw=817",
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw0fe6b140/images/large/8396132_1.jpeg?sw=817",
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw0fe6b140/images/large/8396132_1.jpeg?sw=817",
            ],
        details:
            "Grab the controls and make your run your own. These sleek adidas X9000L1 running shoes make a statement on city streets. Bounce cushioning is lightweight and flexible for long-lasting comfort.",
        price: "₹1,999",
    },
    {
        id: "31",
        brand: "Bata",
        name: "POWER BLACK SNEAKER FOR MEN",
        image:
            [
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw582ff120/images/large/8396376_1.jpeg?sw=817",
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw582ff120/images/large/8396376_1.jpeg?sw=817",
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw582ff120/images/large/8396376_1.jpeg?sw=817",
            ],
        details:
            "Grab the controls and make your run your own. These sleek adidas X9000L1 running shoes make a statement on city streets. Bounce cushioning is lightweight and flexible for long-lasting comfort.",
        price: "₹1,499",
    },
    {
        id: "32",
        brand: "Bata",
        name: "HUSH PUPPIES BROWN CASUAL SHOES FOR MEN",
        image:
            [
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw52da2288/images/large/8544607_1.jpeg?sw=817",
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw52da2288/images/large/8544607_1.jpeg?sw=817",
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw52da2288/images/large/8544607_1.jpeg?sw=817",
            ],
        details:
            "Grab the controls and make your run your own. These sleek adidas X9000L1 running shoes make a statement on city streets. Bounce cushioning is lightweight and flexible for long-lasting comfort.",
        price: "₹8,499",
    },
    {
        id: "33",
        brand: "Bata",
        name: "POWER BLACK SNEAKER FOR MEN",
        image:
            [
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw62db756d/images/large/8336027_1.jpeg?sw=817",
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw62db756d/images/large/8336027_1.jpeg?sw=817",
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw62db756d/images/large/8336027_1.jpeg?sw=817",
            ],
        details:
            "This pair of black casual sports shoes from Bata will be a wise choice for you, with a style that makes it easy to wear. It is slip-resistant and comfortable, with a top-quality leather upper and a solid TPR sole. This pair of casual sneakers will undoubtedly become a valuable addition to your footwear collection. ",
        price: "₹2,499",
    },
    {
        id: "34",
        brand: "Bata",
        name: "NORTH STAR GREY SNEAKER FOR MEN",
        image:
            [
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw2d4a19e3/images/large/8312436_1.jpeg?sw=817",
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw2d4a19e3/images/large/8312436_1.jpeg?sw=817",
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw2d4a19e3/images/large/8312436_1.jpeg?sw=817",
            ],
        details:
            "Grab the controls and make your run your own. These sleek adidas X9000L1 running shoes make a statement on city streets. Bounce cushioning is lightweight and flexible for long-lasting comfort.",
        price: "₹2,499",
    },
    {
        id: "35",
        brand: "Bata",
        name: "POWER BLUE SNEAKER FOR MEN",
        image:
            [
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw293b7037/images/large/8339197_1.jpeg?sw=817",
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw293b7037/images/large/8339197_1.jpeg?sw=817",
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw293b7037/images/large/8339197_1.jpeg?sw=817",
            ],
        details:
            "Grab the controls and make your run your own. These sleek adidas X9000L1 running shoes make a statement on city streets. Bounce cushioning is lightweight and flexible for long-lasting comfort.",
        price: "₹1,499",
    },
    {
        id: "36",
        brand: "Bata",
        name: "HUSH PUPPIES BLACK CASUAL SHOES FOR MEN",
        image:
            [
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw282bf89d/images/large/8246854_1.jpeg?sw=817",
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw282bf89d/images/large/8246854_1.jpeg?sw=817",
                "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw282bf89d/images/large/8246854_1.jpeg?sw=817",
            ],
        details:
            "Grab the controls and make your run your own. These sleek adidas X9000L1 running shoes make a statement on city streets. Bounce cushioning is lightweight and flexible for long-lasting comfort.",
        price: "₹3,499",
    },
    {
        id: "37",
        brand: "Puma",
        name: "Space Lab The NeverWorn Men's Sneakers",
        image:
            [
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/384054/01/sv01/fnd/IND/fmt/png/Space-Lab-The-NeverWorn-Men's-Sneakers",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/384054/01/sv01/fnd/IND/fmt/png/Space-Lab-The-NeverWorn-Men's-Sneakers",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/384054/01/sv01/fnd/IND/fmt/png/Space-Lab-The-NeverWorn-Men's-Sneakers",
            ],
        details:
            "Straight from our '80s archive, the Space Lab began life as a lightweight running shoe with a cushioning CMEVA midsole. ",
        price: "₹7,499",
    },
    {
        id: "38",
        brand: "Puma",
        name: "X-Ray Lite Millenium Unisex Shoes",
        image:
            [
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/375999/12/sv01/fnd/IND/fmt/png/X-Ray-Lite-Millenium-Unisex-Shoes",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/375999/12/sv01/fnd/IND/fmt/png/X-Ray-Lite-Millenium-Unisex-Shoes",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/375999/12/sv01/fnd/IND/fmt/png/X-Ray-Lite-Millenium-Unisex-Shoes",
            ],
        details:
            "Pure early 2000s style is the name of the game with the X-Ray Millennium. Bold overlay details and flowing design lines create a stand-out look you'll want to wear again.",
        price: "₹6,499",
    },
    {
        id: "39",
        brand: "Puma",
        name: "Softride Premier SlipOn Camo Men's Walking Shoes",
        image:
            [
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/376661/02/sv01/fnd/IND/fmt/png/Softride-Premier-SlipOn-Camo-Men's-Walking-Shoes",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/376661/02/sv01/fnd/IND/fmt/png/Softride-Premier-SlipOn-Camo-Men's-Walking-Shoes",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/376661/02/sv01/fnd/IND/fmt/png/Softride-Premier-SlipOn-Camo-Men's-Walking-Shoes",
            ],
        details:
            "Pick up the pace with the SOFTRIDE Premier Slip-On Camo Walking Shoes from PUMA. Built with our renowned SOFTRIDE comfort foam and injected with our iconic design DNA.",
        price: "₹3,499",
    },
    {
        id: "40",
        brand: "Puma",
        name: "Ralph Sampson Lo Joker Sneakers",
        image:
            [
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/374927/02/sv01/fnd/IND/fmt/png/Ralph-Sampson-Lo-Joker-Sneakers",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/374927/02/sv01/fnd/IND/fmt/png/Ralph-Sampson-Lo-Joker-Sneakers",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/374927/02/sv01/fnd/IND/fmt/png/Ralph-Sampson-Lo-Joker-Sneakers",
            ],
        details:
            "Inspired by and designed after four time All-Star, NBA Rookie of the Year, Houston Rockets alumni and Hall-of-Famer, Ralph Sampson, these clean, classic, court-ready kicks.",
        price: "₹3,499",
    },
    {
        id: "41",
        brand: "Puma",
        name: "one8 Virat Kohli Softride Premier Men's Walking Shoes",
        image:
            [
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/377180/02/sv01/fnd/IND/fmt/png/one8-Virat-Kohli-Softride-Premier-Men's-Walking-Shoes",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/377180/02/sv01/fnd/IND/fmt/png/one8-Virat-Kohli-Softride-Premier-Men's-Walking-Shoes",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/377180/02/sv01/fnd/IND/fmt/png/one8-Virat-Kohli-Softride-Premier-Men's-Walking-Shoes",
            ],
        details:
            "Introducing the lightweight and tech inspired shoes from the latest one8 collection. The one8 Virat Kohli Softride Premier walkingshoe is crafted to offer smooth sprints.",
        price: "₹6,000",
    },

    {
        id: "44",
        brand: "Puma",
        name: "Twitch Runner Men's Running Shoes",
        image:
            [
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/376289/03/sv01/fnd/IND/fmt/png/Twitch-Runner-Men's-Running-Shoes",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/376289/03/sv01/fnd/IND/fmt/png/Twitch-Runner-Men's-Running-Shoes",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/376289/03/sv01/fnd/IND/fmt/png/Twitch-Runner-Men's-Running-Shoes",
            ],
        details:
            "Go hard or go home in the power performance Twitch Runner. Modelled after PUMA’s celebrated Velocity Nitro, the Twitch Runner boasts clean lines and slick design detail.",
        price: "₹5,499",
    },
    {
        id: "45",
        brand: "Puma",
        name: "Twitch Runner Men's Running Shoes",
        image:
            [
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/376289/04/sv01/fnd/IND/fmt/png/Twitch-Runner-Men's-Running-Shoes",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/376289/04/sv01/fnd/IND/fmt/png/Twitch-Runner-Men's-Running-Shoes",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/376289/04/sv01/fnd/IND/fmt/png/Twitch-Runner-Men's-Running-Shoes",
            ],
        details:
            "Go hard or go home in the power performance Twitch Runner. Modelled after PUMA’s celebrated Velocity Nitro, the Twitch Runner boasts clean lines and slick design detail.",
        price: "₹5,499",
    },

    {
        id: "47",
        brand: "Jordan",
        name: "Jordan Why Not .5 PF",
        image:
            [
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1ef3ae1e-7206-4a5b-bbe0-434c5bad97aa/jordan-why-not-5-pf-basketball-shoes-r2JwFc.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1ef3ae1e-7206-4a5b-bbe0-434c5bad97aa/jordan-why-not-5-pf-basketball-shoes-r2JwFc.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1ef3ae1e-7206-4a5b-bbe0-434c5bad97aa/jordan-why-not-5-pf-basketball-shoes-r2JwFc.png",
            ],
        details:
            "Russell Westbrook is fast. The Jordan Why Not .5 helps keep him contained with updated cushioning, data-informed traction and a full-foot fit system that keeps him in control. ",
        price: "₹11,999",
    },
    {
        id: "48",
        brand: "Jordan",
        name: "Jordan .5 'Why Not?'",
        image:
            ["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ad9598d3-d29a-483c-9e70-017d3f84efdd/jordan-5-why-not-basketball-shoes-6V8Hzg.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ad9598d3-d29a-483c-9e70-017d3f84efdd/jordan-5-why-not-basketball-shoes-6V8Hzg.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ad9598d3-d29a-483c-9e70-017d3f84efdd/jordan-5-why-not-basketball-shoes-6V8Hzg.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ad9598d3-d29a-483c-9e70-017d3f84efdd/jordan-5-why-not-basketball-shoes-6V8Hzg.png",],

        details:
            "Russell Westbrook is fast. These shoes match his quickness with updated cushioning, data-informed traction and a full-foot fit system to keep him in control. With a rugged utility look combined with a purposeful clash of colours and materials, this model speaks to the core of Russel's.",
        price: "₹11,499",
    },
    {
        id: "49",
        brand: "Jordan",
        name: "Air Jordan XII Low",
        image:
            ["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2778052b-a87d-427f-b8e1-850f01fabd7a/air-jordan-xii-low-golf-shoes-GpK0Fl.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2778052b-a87d-427f-b8e1-850f01fabd7a/air-jordan-xii-low-golf-shoes-GpK0Fl.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2778052b-a87d-427f-b8e1-850f01fabd7a/air-jordan-xii-low-golf-shoes-GpK0Fl.png",],
        details:
            "Michael Jordan's game-winning classic from the mid-90s returns—and this time it's built for golf. The Air Jordan 12 Low updates the famous, rising sun-inspired stitch lines and quilted-like upper with an incredibly grippy spiked outsole and a springy, full-length Zoom Air unit.",
        price: "₹19,895",
    },
    {
        id: "50",
        brand: "Jordan",
        name: "Jordan Air NFH 'Bayou Boys'",
        image: [

            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3c526174-8f08-41df-bf58-c0a158e74d35/jordan-air-nfh-bayou-shoe-3JqHmN.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3c526174-8f08-41df-bf58-c0a158e74d35/jordan-air-nfh-bayou-shoe-3JqHmN.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3c526174-8f08-41df-bf58-c0a158e74d35/jordan-air-nfh-bayou-shoe-3JqHmN.png",
        ],
        details:
            "The versatile Jordan Air NFH is not for hooping, but its look and feel are a testament to the game's huge influence in sneaker and streetwear culture. Classic basketball details like visible Air cushioning, stitched overlays and herringbone traction contrast with the diverse materials, textures and technical gear vibe.",
        price: "₹9,295",
    },
    {
        id: "51",
        brand: "Jordan",
        name: "Air Jordan 1 Mid SE",
        image: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cfb8dda3-245d-44d8-8e65-3793df07a087/air-jordan-1-mid-se-shoes-hHltxp.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cfb8dda3-245d-44d8-8e65-3793df07a087/air-jordan-1-mid-se-shoes-hHltxp.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cfb8dda3-245d-44d8-8e65-3793df07a087/air-jordan-1-mid-se-shoes-hHltxp.png",

        ],
        details:
            "Inspired by Mictlán, this is a story of family connections. This unique version of the Air Jordan 1 stays true to style with a bright jaguar print and unique details, like a multi-coloured embroidered Swoosh logo with an arrow.",
        price: "₹10,295",
    },
    {
        id: "52",
        brand: "Jordan",
        name: "Jordan Stay Loyal",
        image:
            [
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/15381d96-3288-42ed-8d00-67d32445bd4b/jordan-stay-loyal-shoes-PBnr0N.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/15381d96-3288-42ed-8d00-67d32445bd4b/jordan-stay-loyal-shoes-PBnr0N.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/15381d96-3288-42ed-8d00-67d32445bd4b/jordan-stay-loyal-shoes-PBnr0N.png",
            ],
        details:
            "Straight from our past and into the future.The Jordan Stay Loyal takes cues from the classic Air Jordan 12 to create a shoe that's fresh yet familiar.Inspired by the 12's durability, it features burly leather overlays and rubber herringbone traction that wraps up the toe, sides and heel.",
        price: "₹9,295",
    },
    {
        id: "53",
        brand: "Jordan",
        name: "Jordan Delta 2 SE",
        image: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9ecc3ac3-590b-4afe-bc3a-aff68bb2148c/jordan-delta-2-se-shoes-B1p88z.png",
        ],
        details:
            "The Jordan Delta 2 SE offers a fresh, fearless take on the features you want: durability, comfort and an attitude that's Jordan to the core.We updated design lines and swapped out some components, but the idea is the same as the first Delta.The 2 still has that clashing combination of supportive and space age-like materials, with lots of different textures and heavy stitching to create a look that's both adventurous and iconic.",
        price: "₹9,997",
    },
    {
        id: "54",
        brand: "Jordan",
        name: "Jordan Delta 2",
        image: [

            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2d05772d-f405-4c44-89cf-5f55b6443e2b/jordan-delta-2-shoe-8Z0Rkk.png",
        ],
        details:
            "The Jordan Delta 2 offers a fresh, fearless take on the features you want: durability, comfort and an attitude that's Jordan to the core.We updated design lines and swapped out some components, but the idea is the same as the first Delta.The 2 still has that clashing combination of supportive and space age-like materials, with lots of different textures and heavy stitching to create a look that's both adventurous and iconic.",
        price: "₹9,197",
    },
    {
        id: "55",
        brand: "Jordan",
        name: "Air Jordan 1 Mid SE",
        image: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6da91d9c-038b-4104-9f50-b6c50ade106e/air-jordan-1-mid-se-shoes-bwRXft.png",
        ],
        details:
            "Always fresh and never out of style, the Air Jordan 1 Mid SE is one of the most iconic sneakers of all time. Inspired by the colours and textures of natural landscapes, earthy canvas details add a grounding refresh to a soaring legend.",
        price: "₹11,895",
    },

];
export { shoesData };