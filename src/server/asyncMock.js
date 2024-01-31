export const products = [
    {
        id: 1,
        name: "Tableta de chocolate con leche",
        stock: 50,
        price: 4250,
        category: "barras",
        description: "Deliciosa tableta de chocolate con leche.",
        img: "https://cdn.pixabay.com/photo/2018/02/01/20/22/chocolate-bar-3124025_1280.png"
    },
    {
        id: 2,
        name: "Bombones de chocolate blanco",
        stock: 30,
        price: 4000,
        category: "varios",
        description: "Bombones rellenos de chocolate blanco y frutas secas.",
        img: "https://static.wixstatic.com/media/90b3d6_d3d4b199b5744c6d9a9dce5ad81a3c5c~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/90b3d6_d3d4b199b5744c6d9a9dce5ad81a3c5c~mv2.png"
    },
    {
        id: 3,
        name: "Caja de bombones trufados",
        stock: 20,
        price: 3600,
        category: "regaleria",
        description: "Caja de bombones trufados con distintos sabores.",
        img: "data:image/jpeg;base64,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"
    },
    {
        id: 4,
        name: "Tableta de chocolate amargo 70%",
        stock: 40,
        price: 2700,
        category: "barras",
        description: "Tableta de chocolate amargo con 70% de cacao.",
        img: "https://www.mariachocolate.pt/wp-content/uploads/2021/08/Tabletes-tradicionais_-cuba-cacoa-70.png"
    },
    {
        id: 5,
        name: "Huevo de Pascua de chocolate",
        stock: 10,
        price: 8000,
        category: "regaleria",
        description: "Huevo de Pascua de chocolate relleno de sorpresas.",
        img: "data:image/jpeg;base64,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"
    },
    {
        id: 6,
        name: "Almendras cubiertas de chocolate",
        stock: 25,
        price: 3200,
        category: "varios",
        description: "Almendras tostadas y cubiertas de chocolate.",
        img: "https://www.lukerchocolate.com/wp-content/uploads/2022/11/almond-covered-chocolate-snacks.png"
    },
];


export const getProducts = () => {
    return new Promise((resolver) => {
        setTimeout(() => {
            resolver(products);
        }, 500);
    });
}

export const getProductsById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === id));
        }, 500);
    });
}

export const getProductsByCategory = (category) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === category));
        }, 500);
    });
}