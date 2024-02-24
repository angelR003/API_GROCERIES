import Product from '../models/products.model.js';
const productDAO={};


productDAO.getAll = async()=>{
    const products =await Product.find();
    return products;
}

productDAO.getOne = async(barcode)=>{
    const product=await Product.findOne({barcode:barcode});
    
    return product;
};
productDAO.insertProduct=async(product)=>{
    const productSaved=new Product(product);
    productSaved.save();
    return true;
}

productDAO.updateProduct=async(barcode,product)=>{
    const productUpdated = await Product.findOneAndUpdate({barcode:barcode},product);
    if(productUpdated!=null)
        return true
    else
        return false;
};

productDAO.deleteProduct=async(barcode)=>{
    const productDeleted=await Product.findOneAndDelete({barcode:barcode});
    if(productDeleted!=null)
        return true
    else
        return false;
}
//actualizar empleado
productDAO.updateEmpleado=async(barcode,product)=>{
    const productUpdated = await Product
    .findOneAndUpdate({barcode:barcode},product);
    if(productUpdated!=null)
        return true
    else
        return false;
}
//eliminar empleado 
export default productDAO; 

