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
        image:'https://sp.yimg.com/ib/th?id=OP.2rHn3hJ13%2fSgHQ474C474&o=5&pid=21.1',
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