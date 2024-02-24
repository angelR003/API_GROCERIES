import productDAO from '../dao/products.dao.js';


export const getAll = (req,res)=>{
    productDAO.getAll()
    .then(products=>{
        res.render('../src/views/index',{products});
    })
    .catch(err=>{
        res.json({
            status:"servidor no disponible"
        });
    })
};

export const getOne = (req,res)=>{
    productDAO.getOne(req.params.barcode)
    .then(product=>{
       res.render('../src/views/edit', {product})
    })
    .catch(()=>{
        res.json({
            status:"servidor no disponible"
        });
    })
};

export const insertProduct = (req,res)=>{
    productDAO.insertProduct(req.body)
    .then(result=>{
        if(result)
          res.json({
            status: "product saved"
        })
    })
    .catch(err=>{
        res.redirect('api/products/')
    })
}
export const updateProduct=(req,res)=>{
    productDAO.updateProduct(req.params.barcode,req.body)
    .then(result=>{
        if(product)
        res.redirect('api/products/')
        else
            res.json({
                status: "servidor no disponible"
            })
        
    })
    .catch(err=>{
        res.json({
            error: err
        })
    })
}

export const deleteProduct=(req,res)=>{
    productDAO.deleteProduct(req.params.barcode)
    .then(result=>{
        if(result)
        res.redirect('/api/products/')
        else
            res.json({
                status: "servidor no disponible"
            })
        
    })
    .catch(err=>{
        res.json({
            error: err
        })
    })
}



