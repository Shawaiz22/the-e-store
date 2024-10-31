const AllItems=[
    {
        name:'T shirt',
        details:[
         'Fabric : Cotton',
         'Brand : Gucci',
         'Size : XXL',
        ],
        price:10,
        currency:'$',
        quantity:1,
        category:'menswear',
        image:'https://tse1.mm.bing.net/th?id=OIP.K2B7GFnqftDxOHiSnrnzGQHaHd&pid=Api&P=0',
        _id:0
    },
    {
       name:'Asus Rog Laptop',
       details:[
        'Brand   : Asus',
        'Type    : Laptop',
        'Model   : ROG',
        'Ram     : 8GB',
        'Storage : 512GB (SSD)'
       ],
       price:1000,
       currency:'$',
       quantity:1,
       category:'electronics',
       image:'https://m.media-amazon.com/images/I/81swxjiFF4L._AC_UY327_FMwebp_QL65_.jpg',
       _id:1
    },
    {
        name:'Pen',
        details:[
         'Brand : Cello',
         'Type  : Ball',
         'Color : Blue'
        ],
        price:1,
        currency:'$',
        quantity:1,
        category:'stationary',
        image:'https://m.media-amazon.com/images/I/61OR2e8YXBL._AC_UL480_FMwebp_QL65_.jpg',
        _id:2
    },
    {
        name:'Apple Iphone 11',
        details:[
         'Brand   : Apple',
         'Model   : Iphone 11',
         'Color   : Red',
         'Storage : 128 GB'
        ],
        price:500,
        currency:'$',
        quantity:1,
        category:'electronics',
        image:'https://th.bing.com/th?q=iPhone+11+Red&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247',
        _id:3
    },
    {
        name:'Realme Tab X',
        details:[
         'Brand   : Realme',
         'Type    : Tablet',
         'Color   : Blue',
         'Storage : 1TB (HDD)',
         'Ram     : 3GB'
        ],
        price:200,
        currency:'$',
        quantity:1,
        category:'electronics',
        image:'https://m.media-amazon.com/images/I/61rcKYnx-sL._AC_UY327_FMwebp_QL65_.jpg',
        _id:4
    },
    {
        name:'Jeans',
        details:[
         'Brand : Gucci',
         'Type  : Denim',
         'Color : Blue'
        ],
        price:50,
        currency:'$',
        quantity:1,
        category:'menswear',
        image:'https://m.media-amazon.com/images/I/61OrdDGBQaL._AC_UL480_FMwebp_QL65_.jpg',
        _id:5
    },
    {
        name:'Polo T-Shirt',
        details:[
         'Brand : Farhenheit',
         'Type  : Polo ',
         'Color : Black'
        ],
        price:20,
        currency:'$',
        quantity:1,
        category:'menswear',
        image:'https://m.media-amazon.com/images/I/71w5A8xrRRL._AC_UL480_FMwebp_QL65_.jpg',
        _id:6
    },
    {
        name:'NoteBook',
        details:[
         'Brand : ClassMate',
         'Type  : 4-Line',
         'Pages : 400'
        ],
        price:2,
        currency:'$',
        quantity:1,
        category:'stationary',
        image:'https://m.media-amazon.com/images/I/61fly1Mv7WL._AC_UL480_FMwebp_QL65_.jpg',
        _id:7
    },
    {
        name:'Geometry Box',
        details:[
         'Brand       : ClassMate',
         'Type        : geometry kit',
         'Total-Items : 10'
        ],
        price:4,
        currency:'$',
        quantity:1,
        category:'stationary',
        image:'https://m.media-amazon.com/images/I/714C6dYmEYL._AC_UL480_FMwebp_QL65_.jpg',
        _id:8
    },
    {
        name:'Figaro Olive Oil',
        details:[
         'Brand       : Figaro',
         'Type        : Extra virgin olive oil',
         'Net Qty     : 1 Litre'
        ],
        price:11,
        currency:'$',
        quantity:1,
        category:'grocery',
        image:'https://www.bigbasket.com/media/uploads/p/s/40011505_6-figaro-extra-virgin-olive-oil.jpg',
        _id:9
    },
    {
        name:'Britania Whole Wheat Bread',
        details:[
         'Brand       : Britania',
         'Type        : Whole Wheat Bread',
         'Net Wt      : 450 Gm'
        ],
        price:0.7,
        currency:'$',
        quantity:1,
        category:'grocery',
        image:'https://www.bigbasket.com/media/uploads/p/s/40162924_4-britannia-100-whole-wheat-bread.jpg',
        _id:10
    },
    {
        name:'Kissan Tomato Ketchup',
        details:[
         'Brand       : Kissan',
         'Type        : Tomato Sauce',
         'Net Wt      : 200 Gm'
        ],
        price:0.8,
        currency:'$',
        quantity:1,
        category:'grocery',
        image:'https://www.bigbasket.com/media/uploads/p/s/266545_14-kissan-fresh-tomato-ketchup.jpg',
        _id:11
    },
    {
        name:'Pampers Pants',
        details:[
         'Brand             : Pampers',
         'Type              : Baby Diapers',
         'Total Peices      : 12'
        ],
        price:5,
        currency:'$',
        quantity:1,
        category:'children',
        image:'https://tse3.mm.bing.net/th?id=OIP.UdCDtO47OOVbT3iJfXrJCwHaHa&pid=Api&P=0',
        _id:12
    },
    {
        name:'Baby Sleeping Bed',
        details:[
         'Brand : Davinci',
         'Type  : Sleeping Bed (3 in 1 convertible)',
         'Color : White'
        ],
        price:199,
        currency:'$',
        quantity:1,
        category:'children',
        image:'https://sp.yimg.com/ib/th?id=OP.hYhnCICBeZYSTg474C474&o=5&pid=21.1',
        _id:13
    },
    {
        name:'Pull Back Car Set',
        details:[
         'Brand             : Hot Wheels',
         'Type              : Toy Cars',
         'Total Peices      : 20'
        ],
        price:15,
        currency:'$',
        quantity:1,
        category:'children',
        image:'https://sp.yimg.com/ib/th?id=OP.GRZ%2fHNgwHXjLCA474C474&o=5&pid=21.1',
        _id:14
    },
    {
        name:'Ponds Talc',
        details:[
         'Brand             : Ponds',
         'Type              : Fragrance Talcum Powder',
         'Fragrance Type    : Lily'
        ],
        price:24,
        currency:'$',
        quantity:1,
        category:'cosmetics',
        image:'https://sp.yimg.com/ib/th?id=OP.SFH%2fC7ETbw%2fElQ474C474&o=5&pid=21.1',
        _id:15
    },
    {
        name:'Skin Fruits Body Lotion',
        details:[
         'Brand  : Joy',
         'Type   : Body Lotion',
         'Net Wt : 200ml'
        ],
        price:20,
        currency:'$',
        quantity:1,
        category:'cosmetics',
        image:'https://sp.yimg.com/ib/th?id=OP.QOTyW%2f3RFan4Rg474C474&o=5&pid=21.1',
        _id:16
    },
    {
        name:'Fogg Deodrant',
        details:[
         'Brand             : Fogg',
         'Type              : Marco',
         'Color             : Black',
         'Net Wt            : 150ml'
        ],
        price:15,
        currency:'$',
        quantity:1,
        category:'cosmetics',
        image:'https://sp.yimg.com/ib/th?id=OP.02Qsu9h5f3ElLQ474C474&o=5&pid=21.1',
        _id:17
    },
    {
        name:'Rich Dad poor Dad',
        details:[
         'Author            : Robert Kiyosaki',
         'Edition           : 20th Anniversary Edition',
         'Release Year      : 1997'
        ],
        price:15,
        currency:'$',
        quantity:1,
        category:'books',
        image:'https://sp.yimg.com/ib/th?id=OP.1Z04DfqVyHZm4w474C474&o=5&pid=21.1',
        _id:18
    },
    {
        name:'Atomic Habits',
        details:[
            'Author            : James Clear',
            'Edition           : Latest',
            'Release Year      : 2018'
           ],
           price:13,
           currency:'$',
           quantity:1,
           category:'books',
           image:'https://sp.yimg.com/ib/th?id=OP.R4JBGaUALb0KDw474C474&o=5&pid=21.1',
        _id:19
    },
    {
        name:'Instant Insights',
        details:[
            'Author            : T. Harris',
            'Edition           : Revised',
            'Release Year      : 2020'
           ],
           price:20,
           currency:'$',
           quantity:1,
           category:'books',
           image:'https://tse4.mm.bing.net/th?id=OIP.Huan_rI6UjEIS7NtDnV0wQAAAA&pid=Api&P=0',
           _id:20
    },
    {
        name:'First Aid Kit',
        details:[
         'Brand        : M2 Basics',
         'Type         : Emergency Kit',
         'Total Peices : 350'
        ],
        price:0.7,
        currency:'$',
        quantity:1,
        category:'healthcare',
        image:'https://sp.yimg.com/ib/th?id=OP.TUXwxn7hdYG9sw474C474&o=5&pid=21.1',
        _id:21
    },
    {
        name:'BP Checker',
        details:[
         'Brand       : Advocate',
         'Type        : Wrist Bp Checker',
         'Model Name  : kd-7902'
        ],
        price:22,
        currency:'$',
        quantity:1,
        category:'healthcare',
        image:'https://sp.yimg.com/ib/th?id=OP.6Lqu6lnSlHxhgQ474C474&o=5&pid=21.1',
        _id:22
    },
    {
        name:'ORS Drink',
        details:[
         'Brand       : Prolyte',
         'Type        : Drink Powder',
         'Net Wt      : 21 gm'
        ],
        price:10,
        currency:'$',
        quantity:1,
        category:'healthcare',
        image:'https://sp.yimg.com/ib/th?id=OP.bpe9vmgLim2g8g474C474&o=5&pid=21.1',
        _id:23
    },
    {
        name:'Cricket Kit',
        details:[
         'Brand       : SG Sports',
         'Type        : Cricket Kit',
         'Total Items : 11'
        ],
        price:289,
        currency:'$',
        quantity:1,
        category:'sports',
        image:'data:image/jpeg;base64,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',
        _id:24
    },
    {
        name:'Badminton + VolleyBall Set',
        details:[
         'Brand       : Dunlop',
         'Type        : Combo of Badminton and VolleyBall Set'
        ],
        price:87,
        currency:'$',
        quantity:1,
        category:'sports',
        image:'https://sp.yimg.com/ib/th?id=OP.mgWhgwp2P8dEmA474C474&o=5&pid=21.1',
        _id:25
    },
    {
        name:'FootBall',
        details:[
         'Brand       : Wilson',
         'Type        : Super Grip Composite Foot Ball',
         'Sport       : Rugby'
        ],
        price:31,
        currency:'$',
        quantity:1,
        category:'sports',
        image:'https://sp.yimg.com/ib/th?id=OP.3jt15Xbz4dP%2bHQ474C474&o=5&pid=21.1',
        _id:26
    }

    

]

export {AllItems};
