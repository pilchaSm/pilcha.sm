export const parseProductInfo = (productString,url) => {
    if (!productString || typeof productString !== 'string') {
        return {
            name: '',
            sizes: [],
            price: 0,
            category: '',
            url: '',
        };
    }

    const parts = productString.split("-");

    if (parts.length < 4) {
        console.error("Formato incorrecto:", productString);
        return {
            name: '',
            sizes: [],
            price: 0,
            category: '',
            url: '',
        };
    }

    const name = parts[0]?.replace(/_/g, ' ').trim() || '';

    // Procesar los talles, eliminando guiones y convirtiendo en array
    const sizesString = parts[1]?.replace(/_/g, ',').trim() || ''; // Cambia los guiones bajos a comas
    const sizes = sizesString.split(',').map(size => size.trim()).filter(size => size) || []; // Crear array de talles

    // Quitar guiones del precio y convertir a número
    const priceString = parts[2]?.replace(/_/g, '').trim() || '0';
    const price = parseFloat(priceString) || 0;

    // Quitar guiones de la categoría
    const category = parts[3]?.replace(/_/g, '').trim() || '';

    return {
        name,
        sizes,
        price,
        category,
        url,
    };
};
