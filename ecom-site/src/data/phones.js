const phones = [
    // === Apple ===
    { id: 1, name: "iPhone 15 Pro", brand: "Apple", price: 1199, year: 2023, image: "https://i5.walmartimages.com/seo/Verizon-iPhone-15-Pro-Max-256GB-Natural-Titanium_43b58742-b6ad-491a-a795-e6c2eb6bcc6f.d6fa026332e1941b129f607c592844ab.jpeg" },
    { id: 2, name: "iPhone 15", brand: "Apple", price: 999, year: 2023, image: "https://th.bing.com/th/id/OIP.YAnacEzL7beXMZTXS65fTgHaHa?rs=1&pid=ImgDetMain" },
    { id: 3, name: "iPhone 14 Pro", brand: "Apple", price: 1099, year: 2022, image: "https://media.extra.com/s/aurora/100322230_800/Apple-iPhone-14-Pro-Max%2C-5G%2C-128GB%2C-Space-Black?locale=en-GB,en-*,*" },
    { id: 4, name: "iPhone 14", brand: "Apple", price: 899, year: 2022, image: "https://www.phoneplacekenya.com/wp-content/uploads/2022/09/iPhone-14-Plus.jpg" },
    { id: 5, name: "iPhone 13 Mini", brand: "Apple", price: 699, year: 2021, image: "https://www.resetdigitale.it/128568-thickbox_default/apple-iphone-13-mini-128gb-verde.jpg" },
    { id: 23, name: "iPhone SE (3rd Gen)", brand: "Apple", price: 429, year: 2022, image: "https://www.macstoreonline.com.mx/img/sku/IPHONE550_FZ.jpg" },
    { id: 33, name: "iPhone 16 Pro Max", brand: "Apple", price: 1299, year: 2024, image: "https://welectronics.com/images/stories/virtuemart/product/appleiphone16promaxblk572.jpg" },
    { id: 34, name: "iPhone 16 Pro", brand: "Apple", price: 1199, year: 2024, image: "https://th.bing.com/th/id/OIP.3hAbKBgiOAq254vjOHtcaAHaJQ?rs=1&pid=ImgDetMain" },
    { id: 35, name: "iPhone 16 Plus", brand: "Apple", price: 1099, year: 2024, image: "https://www.bing.com/th?id=OPHS.8utyP6QuxGB2%2fg474C474&o=5&pid=21.1&w=148&h=193&qlt=100&dpr=1&bw=6&bc=FFFFFF" },
    { id: 36, name: "iPhone 16", brand: "Apple", price: 999, year: 2024, image: "https://www.bing.com/th?id=OPHS.kyeATIkJ3WWJAQ474C474&o=5&pid=21.1&w=148&h=216&qlt=100&dpr=1&bw=6&bc=FFFFFF" },

    // === Samsung ===
    {
        id: 6,
        name: "Galaxy S24 Ultra",
        brand: "Samsung",
        price: 1299,
        year: 2024,
        image: "https://th.bing.com/th/id/OIP.RCaOvi3C_QXx33EUvGht9wHaFj?rs=1&pid=ImgDetMain"  //
    },
    {
        id: 7,
        name: "Galaxy S23+",
        brand: "Samsung",
        price: 1099,
        year: 2023,
        image: "https://th.bing.com/th/id/OIP.TdIcfycUGkDUB74M8EXeVwHaE_?rs=1&pid=ImgDetMain"  // :contentReference[oaicite:2]{index=2}
    },
    {
        id: 8,
        name: "Galaxy A54",
        brand: "Samsung",
        price: 449,
        year: 2023,
        image: "https://m.media-amazon.com/images/I/51uJT6r4ceL.__AC_SX300_SY300_QL70_ML2_.jpg"
    },
    {
        id: 9,
        name: "Galaxy Z Flip5",
        brand: "Samsung",
        price: 999,
        year: 2023,
        image: "https://www.gta.net/hubfs/Phones%20and%20Devices/Samsung%20Galaxy%20Series/Z%20Flip%205/Samsung%20Galaxy%20Z%20Flip5.png"  // :contentReference[oaicite:4]{index=4}
    },

    // …other entries…

    {
        id: 24,
        name: "Galaxy S22",
        brand: "Samsung",
        price: 799,
        year: 2022,
        image: "https://www.mobiledokan.com/media/1710779129UiX99.webp"  //
    },

    // === Google ===
    {
        id: 10,
        name: "Pixel 8 Pro",
        brand: "Google",
        price: 999,
        year: 2023,
        image: "https://m.media-amazon.com/images/I/71XEjCc4yLL.jpg"  //
    },
    {
        id: 11,
        name: "Pixel 8",
        brand: "Google",
        price: 699,
        year: 2023,
        image: "https://dakauf.eu/wp-content/uploads/2023/10/Google-Pixel-8-Obsidian.jpg"  //
    },
    {
        id: 12,
        name: "Pixel 7a",
        brand: "Google",
        price: 499,
        year: 2023,
        image: "https://th.bing.com/th/id/OIP.15-er3HUlZyWLNeBJWRRTgHaHa?rs=1&pid=ImgDetMain"  //
    },
    {
        id: 25,
        name: "Pixel 6",
        brand: "Google",
        price: 599,
        year: 2021,
        image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-6-1.jpg"  //
    },

    // === OnePlus ===
    {
        id: 13,
        name: "OnePlus 12",
        brand: "OnePlus",
        price: 849,
        year: 2024,
        image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12-1.jpg"  // :contentReference[oaicite:0]{index=0}
    },
    {
        id: 14,
        name: "OnePlus 11",
        brand: "OnePlus",
        price: 699,
        year: 2023,
        image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-11-1.jpg"  // :contentReference[oaicite:1]{index=1}
    },
    {
        id: 15,
        name: "OnePlus Nord N30",
        brand: "OnePlus",
        price: 299,
        year: 2023,
        image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-n30-5g-1.jpg"  // :contentReference[oaicite:2]{index=2}
    },
    {
        id: 26,
        name: "OnePlus 10 Pro",
        brand: "OnePlus",
        price: 799,
        year: 2022,
        image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-10-pro-1.jpg"  // :contentReference[oaicite:3]{index=3}
    },


    // === Xiaomi ===
    {
        id: 16,
        name: "Xiaomi 14 Pro",
        brand: "Xiaomi",
        price: 999,
        year: 2023,
        image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-pro-1.jpg"  // :contentReference[oaicite:0]{index=0}
    },
    {
        id: 17,
        name: "Redmi Note 13 Pro",
        brand: "Xiaomi",
        price: 349,
        year: 2023,
        image: "https://www.gizmochina.com/wp-content/uploads/2023/09/Xiaomi-Redmi-Note-13-Pro-Plus.png"  // :contentReference[oaicite:1]{index=1}
    },
    {
        id: 27,
        name: "Redmi 12C",
        brand: "Xiaomi",
        price: 149,
        year: 2023,
        image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/redmi-12c-1.jpg"  // :contentReference[oaicite:2]{index=2}
    },







    // === Motorola ===
    { id: 19, name: "Moto Edge+", brand: "Motorola", price: 799, year: 2023,
        image: "https://images-na.ssl-images-amazon.com/images/I/61eyXBlFk7L._AC_SL1500_.jpg"
    }, // :contentReference[oaicite:0]{index=0}

    // === Sony ===
    { id: 20, name: "Xperia 1 V", brand: "Sony", price: 1399, year: 2023,
        image: "https://hiphopwired.com/wp-content/uploads/sites/43/2019/02/15511233877669.png?w=1200&quality=60&strip=all"
    }, // :contentReference[oaicite:1]{index=1}
    { id: 29, name: "Sony Xperia 10 V", brand: "Sony", price: 499, year: 2023,
        image: "https://fdn2.gsmarena.com/vv/pics/sony/sony-xperia-10-v-1.jpg"
    },

    // === Asus ===
    { id: 21, name: "ROG Phone 7 Ultimate", brand: "Asus", price: 1099, year: 2023,
        image: "https://fdn2.gsmarena.com/vv/pics/asus/asus-rog-phone-7-ultimate-1.jpg"
    },




    { id: 30, name: "Asus Zenfone 10", brand: "Asus", price: 749, year: 2023,
        image: "https://th.bing.com/th/id/OIP.gBzjxobdy4J6a08-UQZIAwHaHa?rs=1&pid=ImgDetMain"
    },

    // === Nothing ===
    { id: 22, name: "Nothing Phone (2)", brand: "Nothing", price: 699, year: 2023,
        image: "https://th.bing.com/th/id/R.aa979f7ddb902b462dc5c6bacaff30d8?rik=UsUtZhFgDsi8Kg&riu=http%3a%2f%2ftechtickerblog.com%2fwp-content%2fuploads%2f2023%2f07%2fNothing-Phone-2.jpg&ehk=CWXrFYtwn49NKAjHscoxnWsk9n5D2y4o8Z%2bcWKv%2fxnU%3d&risl=&pid=ImgRaw&r=0"
    },
    { id: 31, name: "Nothing Phone (1)", brand: "Nothing", price: 499, year: 2022,
        image: "https://m-cdn.phonearena.com/images/phones/83426-350/Nothing-Phone-1.jpg"
    },

    // === Fairphone ===
    { id: 32, name: "Fairphone 5", brand: "Fairphone", price: 699, year: 2023,
        image: "https://i5.walmartimages.com/seo/Fairphone-5-Dual-SIM-256GB-ROM-8GB-RAM-Only-GSM-No-CDMA-Factory-Unlocked-5G-Smartphone-Transparent-International-Version_735386a4-7e23-4a2c-8f2d-5e05a78521de.b76b94fdc33872cd4bf332dd9800d6b9.jpeg"
    },
];

export default phones;

