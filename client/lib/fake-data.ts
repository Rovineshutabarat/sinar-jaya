import type {Order, Product, Ticket, UserWithPassword} from "./types"

export const dummyUsers: UserWithPassword[] = [
    {
        id: 1,
        username: "admin",
        password: "admin123",
        name: "Alexandra Widjaja",
        role: "admin",
        createdAt: new Date("2023-12-28")
    },
    {
        id: 2,
        username: "michael_tan",
        password: "user881",
        name: "Michael Tan",
        role: "admin",
        createdAt: new Date("2024-01-12")
    },
    {
        id: 3,
        username: "sarah_lim",
        password: "sarah412",
        name: "Sarah Lim",
        role: "admin",
        createdAt: new Date("2024-02-08")
    },
    {
        id: 4,
        username: "david_pratama",
        password: "david998",
        name: "David Pratama",
        role: "admin",
        createdAt: new Date("2024-03-19")
    },
    {
        id: 5,
        username: "natalie_chan",
        password: "nat223",
        name: "Natalie Chan",
        role: "admin",
        createdAt: new Date("2024-04-01")
    },

    {
        id: 6,
        username: "andi_setiawan",
        password: "andi345",
        name: "Andi Setiawan",
        role: "user",
        createdAt: new Date("2024-01-04")
    },
    {
        id: 7,
        username: "budi_gunawan",
        password: "budi877",
        name: "Budi Gunawan",
        role: "user",
        createdAt: new Date("2024-01-08")
    },
    {
        id: 8,
        username: "charles_lie",
        password: "charles299",
        name: "Charles Lie",
        role: "user",
        createdAt: new Date("2024-01-10")
    },
    {
        id: 9,
        username: "dina_putri",
        password: "dina221",
        name: "Dina Putri",
        role: "user",
        createdAt: new Date("2024-01-12")
    },
    {
        id: 10,
        username: "eko_saputra",
        password: "eko663",
        name: "Eko Saputra",
        role: "user",
        createdAt: new Date("2024-01-14")
    },

    {
        id: 11,
        username: "fitri_rahma",
        password: "fitri998",
        name: "Fitri Rahma",
        role: "user",
        createdAt: new Date("2024-01-18")
    },
    {
        id: 12,
        username: "gilang_wijaya",
        password: "gilang442",
        name: "Gilang Wijaya",
        role: "user",
        createdAt: new Date("2024-01-19")
    },
    {
        id: 13,
        username: "hani_susilo",
        password: "hani822",
        name: "Hani Susilo",
        role: "user",
        createdAt: new Date("2024-01-20")
    },
    {
        id: 14,
        username: "ivan_lesmana",
        password: "ivan551",
        name: "Ivan Lesmana",
        role: "user",
        createdAt: new Date("2024-01-21")
    },
    {
        id: 15,
        username: "jessica_halim",
        password: "jessica701",
        name: "Jessica Halim",
        role: "user",
        createdAt: new Date("2024-01-22")
    },

    {
        id: 16,
        username: "kevin_santoso",
        password: "kevin722",
        name: "Kevin Santoso",
        role: "user",
        createdAt: new Date("2024-01-23")
    },
    {
        id: 17,
        username: "linda_setiadi",
        password: "linda332",
        name: "Linda Setiadi",
        role: "user",
        createdAt: new Date("2024-01-24")
    },
    {
        id: 18,
        username: "melisa_tan",
        password: "melisa120",
        name: "Melisa Tan",
        role: "user",
        createdAt: new Date("2024-01-25")
    },
    {
        id: 19,
        username: "niko_hartono",
        password: "niko567",
        name: "Niko Hartono",
        role: "user",
        createdAt: new Date("2024-01-26")
    },
    {
        id: 20,
        username: "olive_martha",
        password: "olive445",
        name: "Olive Martha",
        role: "user",
        createdAt: new Date("2024-01-27")
    }
]

export const dummyProducts: Product[] = [
    {
        id: 1,
        name: "Lenovo ThinkPad X1 Carbon",
        category: "Electronics",
        price: 1899.99,
        stock: 12,
        createdAt: new Date("2024-01-05")
    },
    {
        id: 2,
        name: "Logitech MX Master 3S",
        category: "Accessories",
        price: 119.99,
        stock: 5,
        createdAt: new Date("2024-01-07")
    },
    {
        id: 3,
        name: "Anker USB-C to USB-C 60W Cable",
        category: "Cables",
        price: 14.99,
        stock: 42,
        createdAt: new Date("2024-01-10")
    },
    {
        id: 4,
        name: "Samsung 27\" 2K IPS Monitor",
        category: "Electronics",
        price: 249.99,
        stock: 8,
        createdAt: new Date("2024-01-12")
    },
    {
        id: 5,
        name: "Kingston NV2 1TB NVMe SSD",
        category: "Storage",
        price: 79.99,
        stock: 20,
        createdAt: new Date("2024-01-13")
    },
    {
        id: 6,
        name: "Sony WH-1000XM5 Headphones",
        category: "Audio",
        price: 349.99,
        stock: 6,
        createdAt: new Date("2024-01-14")
    },
    {
        id: 7,
        name: "JBL Go 4 Portable Speaker",
        category: "Audio",
        price: 39.99,
        stock: 18,
        createdAt: new Date("2024-01-15")
    },
    {
        id: 8,
        name: "Sandisk Ultra 64GB Flash Drive",
        category: "Storage",
        price: 12.49,
        stock: 55,
        createdAt: new Date("2024-01-18")
    },
    {
        id: 9,
        name: "Apple Magic Keyboard",
        category: "Accessories",
        price: 99.99,
        stock: 7,
        createdAt: new Date("2024-01-20")
    },
    {
        id: 10,
        name: "Razer BlackWidow V3 Keyboard",
        category: "Accessories",
        price: 129.99,
        stock: 4,
        createdAt: new Date("2024-01-22")
    },
    {
        id: 11,
        name: "SteelSeries Rival 600 Mouse",
        category: "Accessories",
        price: 69.99,
        stock: 10,
        createdAt: new Date("2024-01-25")
    },
    {
        id: 12,
        name: "Philips 24\" LED Monitor",
        category: "Electronics",
        price: 149.99,
        stock: 9,
        createdAt: new Date("2024-01-27")
    },
    {
        id: 13,
        name: "Baseus Fast Charging Cable 100W",
        category: "Cables",
        price: 11.99,
        stock: 60,
        createdAt: new Date("2024-01-28")
    },
    {id: 14, name: "WD Blue 2TB HDD", category: "Storage", price: 54.99, stock: 25, createdAt: new Date("2024-01-30")},
    {
        id: 15,
        name: "HP OfficeJet 3830 Printer",
        category: "Office",
        price: 89.99,
        stock: 6,
        createdAt: new Date("2024-02-01")
    },
    {
        id: 16,
        name: "Dell Inspiron 14 Laptop",
        category: "Electronics",
        price: 749.99,
        stock: 11,
        createdAt: new Date("2024-02-03")
    },
    {
        id: 17,
        name: "Google Nest Mini",
        category: "Home Appliances",
        price: 49.99,
        stock: 14,
        createdAt: new Date("2024-02-05")
    },
    {
        id: 18,
        name: "TP-Link Archer AX55 Router",
        category: "Electronics",
        price: 129.99,
        stock: 8,
        createdAt: new Date("2024-02-07")
    },
    {
        id: 19,
        name: "Xiaomi Mi Desk Lamp Pro",
        category: "Office",
        price: 59.99,
        stock: 22,
        createdAt: new Date("2024-02-10")
    },
    {
        id: 20,
        name: "Amazon Echo Dot 5",
        category: "Home Appliances",
        price: 49.99,
        stock: 19,
        createdAt: new Date("2024-02-12")
    },
    {
        id: 21,
        name: "Logitech C920 HD Webcam",
        category: "Electronics",
        price: 69.99,
        stock: 7,
        createdAt: new Date("2024-02-14")
    },
    {
        id: 22,
        name: "Edifier R1280T Speakers",
        category: "Audio",
        price: 99.99,
        stock: 4,
        createdAt: new Date("2024-02-16")
    },
    {
        id: 23,
        name: "Samsung 970 EVO 500GB NVMe",
        category: "Storage",
        price: 59.99,
        stock: 17,
        createdAt: new Date("2024-02-18")
    },
    {
        id: 24,
        name: "Brother HL-L2350DW Laser Printer",
        category: "Office",
        price: 119.99,
        stock: 6,
        createdAt: new Date("2024-02-20")
    },
    {
        id: 25,
        name: "LG 32\" UltraWide Monitor",
        category: "Electronics",
        price: 299.99,
        stock: 5,
        createdAt: new Date("2024-02-22")
    },
    {
        id: 26,
        name: "HyperX Cloud II Gaming Headset",
        category: "Audio",
        price: 89.99,
        stock: 13,
        createdAt: new Date("2024-02-24")
    },
    {
        id: 27,
        name: "Ugreen HDMI 4K Cable 1.5m",
        category: "Cables",
        price: 8.99,
        stock: 70,
        createdAt: new Date("2024-02-26")
    },
    {
        id: 28,
        name: "Sandisk Extreme Pro SD 128GB",
        category: "Storage",
        price: 39.99,
        stock: 27,
        createdAt: new Date("2024-02-28")
    },
    {
        id: 29,
        name: "Asus Vivobook 15",
        category: "Electronics",
        price: 599.99,
        stock: 9,
        createdAt: new Date("2024-03-01")
    },
    {
        id: 30,
        name: "Canon Pixma G3020 Printer",
        category: "Office",
        price: 199.99,
        stock: 3,
        createdAt: new Date("2024-03-03")
    },
    {
        id: 31,
        name: "Bose QuietComfort 45",
        category: "Audio",
        price: 329.99,
        stock: 5,
        createdAt: new Date("2024-03-05")
    },
    {
        id: 32,
        name: "IKEA Marcus Office Chair",
        category: "Furniture",
        price: 249.99,
        stock: 4,
        createdAt: new Date("2024-03-06")
    },
    {
        id: 33,
        name: "IKEA Bekant Standing Desk",
        category: "Furniture",
        price: 499.99,
        stock: 2,
        createdAt: new Date("2024-03-07")
    },
    {
        id: 34,
        name: "Baseus GaN3 65W Charger",
        category: "Electronics",
        price: 29.99,
        stock: 34,
        createdAt: new Date("2024-03-09")
    },
    {
        id: 35,
        name: "Rexus Mechanical Keyboard DAXA",
        category: "Accessories",
        price: 69.99,
        stock: 10,
        createdAt: new Date("2024-03-11")
    },
    {
        id: 36,
        name: "AOC 24G2 Gaming Monitor",
        category: "Electronics",
        price: 199.99,
        stock: 4,
        createdAt: new Date("2024-03-12")
    },
    {
        id: 37,
        name: "Epson EcoTank L3250 Printer",
        category: "Office",
        price: 229.99,
        stock: 3,
        createdAt: new Date("2024-03-13")
    },
    {
        id: 38,
        name: "Panasonic Cordless Phone KX-TGD",
        category: "Office",
        price: 39.99,
        stock: 9,
        createdAt: new Date("2024-03-14")
    },
    {
        id: 39,
        name: "JBL Tune 510BT Headphones",
        category: "Audio",
        price: 49.99,
        stock: 16,
        createdAt: new Date("2024-03-15")
    },
    {
        id: 40,
        name: "Samsung Portable SSD T7 1TB",
        category: "Storage",
        price: 109.99,
        stock: 12,
        createdAt: new Date("2024-03-17")
    },
    {id: 41, name: "LG Soundbar SN4", category: "Audio", price: 149.99, stock: 5, createdAt: new Date("2024-03-18")},
    {
        id: 42,
        name: "Brother DCP-T420W Printer",
        category: "Office",
        price: 169.99,
        stock: 4,
        createdAt: new Date("2024-03-19")
    },
    {
        id: 43,
        name: "Ugreen USB Hub 4-Port",
        category: "Accessories",
        price: 14.99,
        stock: 30,
        createdAt: new Date("2024-03-20")
    },
    {
        id: 44,
        name: "IKEA Alex Drawer Unit",
        category: "Furniture",
        price: 129.99,
        stock: 6,
        createdAt: new Date("2024-03-21")
    },
    {
        id: 45,
        name: "Philips Air Fryer HD9200",
        category: "Home Appliances",
        price: 139.99,
        stock: 7,
        createdAt: new Date("2024-03-22")
    },
    {
        id: 46,
        name: "Xiaomi Smart Camera C200",
        category: "Home Appliances",
        price: 29.99,
        stock: 18,
        createdAt: new Date("2024-03-23")
    },
    {
        id: 47,
        name: "Asus RT-AX53U Router",
        category: "Electronics",
        price: 79.99,
        stock: 10,
        createdAt: new Date("2024-03-24")
    },
    {
        id: 48,
        name: "Razer DeathAdder V2",
        category: "Accessories",
        price: 49.99,
        stock: 9,
        createdAt: new Date("2024-03-25")
    },
    {
        id: 49,
        name: "Philips Hue Smart Bulb E27",
        category: "Home Appliances",
        price: 24.99,
        stock: 25,
        createdAt: new Date("2024-03-26")
    },
    {
        id: 50,
        name: "HyperX Fury 16GB DDR4 RAM",
        category: "Storage",
        price: 59.99,
        stock: 14,
        createdAt: new Date("2024-03-27")
    },
];


export const dummyOrders: Order[] = [
    {
        id: 1,
        orderNumber: "ORD-1001",
        userId: 2,
        status: "pending",
        total: 259.97,
        createdAt: new Date("2024-03-01"),
        items: [
            {productId: 1, quantity: 1, price: 149.99},
            {productId: 2, quantity: 1, price: 109.98},
        ],
    },
    {
        id: 2,
        orderNumber: "ORD-1002",
        userId: 3,
        status: "processing",
        total: 399.98,
        createdAt: new Date("2024-03-02"),
        items: [
            {productId: 3, quantity: 2, price: 199.99},
        ],
    },
    {
        id: 3,
        orderNumber: "ORD-1003",
        userId: 4,
        status: "shipped",
        total: 89.97,
        createdAt: new Date("2024-03-05"),
        items: [
            {productId: 4, quantity: 3, price: 29.99},
        ],
    },
    {
        id: 4,
        orderNumber: "ORD-1004",
        userId: 5,
        status: "delivered",
        total: 159.96,
        createdAt: new Date("2024-03-06"),
        items: [
            {productId: 5, quantity: 2, price: 79.98},
        ],
    },
    {
        id: 5,
        orderNumber: "ORD-1005",
        userId: 6,
        status: "cancelled",
        total: 49.99,
        createdAt: new Date("2024-03-07"),
        items: [
            {productId: 6, quantity: 1, price: 49.99},
        ],
    },
    {
        id: 6,
        orderNumber: "ORD-1006",
        userId: 7,
        status: "pending",
        total: 329.97,
        createdAt: new Date("2024-03-08"),
        items: [
            {productId: 7, quantity: 3, price: 109.99},
        ],
    },
    {
        id: 7,
        orderNumber: "ORD-1007",
        userId: 8,
        status: "processing",
        total: 209.98,
        createdAt: new Date("2024-03-09"),
        items: [
            {productId: 8, quantity: 2, price: 104.99},
        ],
    },
    {
        id: 8,
        orderNumber: "ORD-1008",
        userId: 9,
        status: "shipped",
        total: 499.95,
        createdAt: new Date("2024-03-10"),
        items: [
            {productId: 9, quantity: 5, price: 99.99},
        ],
    },
    {
        id: 9,
        orderNumber: "ORD-1009",
        userId: 10,
        status: "delivered",
        total: 179.97,
        createdAt: new Date("2024-03-11"),
        items: [
            {productId: 10, quantity: 3, price: 59.99},
        ],
    },
    {
        id: 10,
        orderNumber: "ORD-1010",
        userId: 11,
        status: "pending",
        total: 299.97,
        createdAt: new Date("2024-03-12"),
        items: [
            {productId: 1, quantity: 1, price: 149.99},
            {productId: 2, quantity: 1, price: 109.98},
            {productId: 3, quantity: 1, price: 39.99},
        ],
    },
];


export const dummyTickets: Ticket[] = [
    {
        id: 1,
        ticketNumber: "TICKET-001",
        userId: 2,
        subject: "Cannot login to account",
        description: "I'm unable to login with my credentials",
        status: "open" as const,
        priority: "high" as const,
        createdAt: new Date("2024-03-15"),
    },
    {
        id: 2,
        ticketNumber: "TICKET-002",
        userId: 3,
        subject: "Product quality issue",
        description: "The laptop I received has a defective screen",
        status: "in-progress" as const,
        priority: "high" as const,
        createdAt: new Date("2024-03-10"),
    },
    {
        id: 3,
        ticketNumber: "TICKET-003",
        userId: 2,
        subject: "Refund request",
        description: "I would like to return my order",
        status: "resolved" as const,
        priority: "medium" as const,
        createdAt: new Date("2024-03-05"),
    },
]
