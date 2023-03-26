const languages = {
    fa: {
        title: 'رستوران',
        menu: {
            home: 'خانه',
            aboutUs: 'درباره ما',
            gallery: 'گالری تصایر',
            reserve: 'رزرو میز',
            services: 'سرویس ها',
            contactUs: 'تماس با ما',
        },
        lg: {
            fa: 'فارسی',
            en: 'انگلیسی',
        },
        // Logo
        logo: {
            restaurant: 'رستوران من',
            foods: 'غذاهای لذیذ ما',
        },
        //Header
        header: {
            welcome: 'خوش آمدید',
            foodTest: 'غذاهای ما را امتحان کنید',
            reserveTable: 'رزور میز',
        },
        // About Us
        aboutUs: {
            aboutRestaurant: 'درباره ی رستوران',
            aboutCooking: 'درباره دستپخت محمد اردوخانی',
            description:
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
            moreInf: 'اطلاعات بیشتر',
        },
        // Gallery
        gallery: {
            food1: {
                name: 'نام غذا',
                price: 'قیمت : 500 تومان',
                order: 'سفارش',
            },
            food2: {
                name: 'نام غذا',
                price: 'قیمت : 500 تومان',
                order: 'سفارش',
            },
            food3: {
                name: 'نام غذا',
                price: 'قیمت : 500 تومان',
                order: 'سفارش',
            },
            food4: {
                name: 'نام غذا',
                price: 'قیمت : 500 تومان',
                order: 'سفارش',
            },
            food5: {
                name: 'نام غذا',
                price: 'قیمت : 500 تومان',
                order: 'سفارش',
            },
            food6: {
                name: 'نام غذا',
                price: 'قیمت : 500 تومان',
                order: 'سفارش',
            },
        },
        // Footer
        footer: {
            copyright:
                '&copy; کپی رایت. تمام حقوق این سایت متعلق به مجموعه ی تاپ لرن میباشد',
        },
    },
    en: {
        title: 'Restaurant',
        menu: {
            home: 'Home',
            aboutUs: 'About us',
            gallery: 'Gallery',
            reserve: 'Reserve',
            services: 'Services',
            contactUs: 'Contact us',
        },
        lg: {
            fa: 'Persian',
            en: 'English',
        },
        // Logo
        logo: {
            restaurant: 'My restaurant',
            foods: 'Our delicious food',
        },
        //Header
        header: {
            welcome: 'Welcome',
            foodTest: 'Try our food',
            reserveTable: 'Reserve',
        },
        // About Us
        aboutUs: {
            aboutRestaurant: 'Restaurant',
            aboutCooking: "About Mohammad Ardokhani's cooking",
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rerum quo nulla laboriosam voluptatibus vel, accusantium similique, id unde repudiandae labore ad rem alias vero temporibus libero sequi itaque ut!',
            moreInf: 'More...',
        },
        // Gallery
        gallery: {
            food1: {
                name: 'Food',
                price: 'price: 50$',
                order: 'Order',
            },
            food2: {
                name: 'Food',
                price: 'price: 50$',
                order: 'Order',
            },
            food3: {
                name: 'Food',
                price: 'price: 50$',
                order: 'Order',
            },
            food4: {
                name: 'Food',
                price: 'price: 50$',
                order: 'Order',
            },
            food5: {
                name: 'Food',
                price: 'price: 50$',
                order: 'Order',
            },
            food6: {
                name: 'Food',
                price: 'price: 50$',
                order: 'Order',
            },
        },
        // Footer
        footer: {
            copyright: '&copy; copy right. All rights reserved to Mohammas',
        },
    },
};

function languageActiveItem(lg) {
    if (lg === 'fa') {
        en.classList.remove('active-language');
        fa.classList.add('active-language');
    } else if (lg === 'en') {
        fa.classList.remove('active-language');
        en.classList.add('active-language');
    }
}

const changeLanguage = function (lg) {
    let language = '';

    if (lg === 'fa') {
        languageActiveItem('fa');
        language = languages.fa;
        document.body.style.direction = 'rtl';

        console.log('lg:FA');
    } else if (lg === 'en') {
        languageActiveItem('en');
        language = languages.en;
        document.body.style.direction = 'ltr';

        console.log('lg:EN');
    } else {
        console.error('language');
    }

    //Titles
    document.title = language.title;

    //menu
    home.textContent = language.menu.home;
    aboutUs.textContent = language.menu.aboutUs;
    gallery.textContent = language.menu.gallery;
    reserve.textContent = language.menu.reserve;
    services.textContent = language.menu.services;
    contactUs.textContent = language.menu.contactUs;

    // language
    fa.textContent = language.lg.fa;
    en.textContent = language.lg.en;

    //logo
    hRestaurant.textContent = language.logo.restaurant;
    hFoods.textContent = language.logo.foods;

    // header
    welcome.textContent = language.header.welcome;
    foodTest.textContent = language.header.foodTest;
    reserveTable.textContent = language.header.reserveTable;

    // about us
    aboutRestaurant.textContent = language.aboutUs.aboutRestaurant;
    aboutCooking.textContent = language.aboutUs.aboutCooking;
    description.textContent = language.aboutUs.description;
    moreInf.textContent = language.aboutUs.moreInf;

    // gallery
    foodName1.textContent = language.gallery.food1.name;
    foodPrice1.textContent = language.gallery.food1.price;
    foodOrder1.textContent = language.gallery.food1.order;

    foodName2.textContent = language.gallery.food2.name;
    foodPrice2.textContent = language.gallery.food2.price;
    foodOrder2.textContent = language.gallery.food2.order;

    foodName3.textContent = language.gallery.food3.name;
    foodPrice3.textContent = language.gallery.food3.price;
    foodOrder3.textContent = language.gallery.food3.order;

    foodName4.textContent = language.gallery.food4.name;
    foodPrice4.textContent = language.gallery.food4.price;
    foodOrder4.textContent = language.gallery.food4.order;

    foodName5.textContent = language.gallery.food5.name;
    foodPrice5.textContent = language.gallery.food5.price;
    foodOrder5.textContent = language.gallery.food5.order;

    foodName6.textContent = language.gallery.food6.name;
    foodPrice6.textContent = language.gallery.food6.price;
    foodOrder6.textContent = language.gallery.food6.order;

    // footer
    fRestaurant.textContent = language.logo.restaurant;
    fFoods.textContent = language.logo.foods;
    copyright.textContent = language.footer.copyright;

    // console.log(language);
};

// let hash = window.location.hash;

if (window.location.hash) {
    if (window.location.hash === '#fa') {
        changeLanguage('fa');
    } else if (window.location.hash === '#en') {
        changeLanguage('en');
    }
} else {
    changeLanguage('en');
}

fa.onclick = function () {
    window.location.hash = fa.getAttribute('href');
    window.location.reload();
};

en.onclick = function () {
    window.location.hash = en.getAttribute('href');
    window.location.reload();
};

// home.onclick = function(){
//     var logTitle = document.getElementsByClassName('restaurant');
//     console.log(logTitle.length);

//     for(i = 0; i<= logTitle.length; i++){
//         logTitle[i].style.color = 'red'
//     }
// }
