import express from 'express'
import ProductS from '../Model/ProductS';

const getAllProducts = async (req, res) => {
    const product = await ProductS.find({}).then((data) => {
      return res.status(200).json({
        success: data ? true : false,
        productData: data ? data : "cannot find product",
      });
    });
  };
  const getOne = async ( req,res)=>{
    try {

        const id= req.params ;
        const product =await ProductS.findById(id)
    } catch (error) {
        
    }
   
  };
  