const getCategoryFromName = (name) => {
    let category = '';
  
    if (name.toLowerCase().includes('zapatillas')) {
      category = 'zapatillas';
    } else if (name.toLowerCase().includes('indumentaria')) {
      category = 'indumentaria';
    } else if (name.toLowerCase().includes('accesorios')) {
      category = 'accesorios';
    } else {
      category = 'otros'; 
    }
  
    return category;
  };

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

    const sizesString = parts[1]?.replace(/_/g, ',').trim() || ''; 
    const sizes = sizesString.split(',').map(size => size.trim()).filter(size => size) || []; 

    const priceString = parts[2]?.replace(/_/g, '').trim() || '0';
    const price = parseFloat(priceString) || 0;

    if (price === 0 || price < 1000) {
      return null;
    }
    
    const formattedPrice = price.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });


    const category =  getCategoryFromName(parts[3])

    return {
        name,
        sizes,
        price : formattedPrice,
        category,
        url,
    };
};
