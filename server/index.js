const app=require('./app.js');
const port=process.env.PORT || 7000;
const swaggerUI=require('swagger-ui-express');
const YAML=require('yamljs');
const swaggerDoc=YAML.load("./swagger/categoryApi.yaml");



const connectDatabase=require('../server/db/conn.js');
const CategoryRoutesMethod=require('../server/db/models/categoriesModels/categoryRoutes');



connectDatabase();

//Routes
CategoryRoutesMethod.categoryRoute();
//swagger route
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDoc));


//API for retreiving all categories
app.get('/api/v1/allcategoryitems',async (req,res)=>
{
    const result=await CategoryRoutesMethod.retriveAllCategoryItems();
    res.status(200).json(result)
    
});

app.listen(port,()=>
{
    console.log(`Port listening to the server ${port}`);
})
