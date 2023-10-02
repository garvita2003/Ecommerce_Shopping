 import { products } from "./constants/data.js";
import Product from "./model/productSchema.js";

 const defaultData = async() => {
    try {
        await Product.insertMany(products);
        console.log('Data imported successfully');
    } catch (error) {
        console.log('Error while inserting deafult data',error.message);
    }
 }

 export default defaultData;
 