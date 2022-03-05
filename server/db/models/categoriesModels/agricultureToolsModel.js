const mongoose=require('mongoose');

const agriculturalToolSchema= new mongoose.Schema(
    {
        price:
        {
            type:Number,
            required:[true,"Please Enter product price"],
            maxLength:[8,"Price cannot exceed 8 figures"]
        },
        description:
        {
            type:String,
            required:[true,"Please Enter product description"]
        },
        product_details:
        {
            type: String,
            required:[true,"Please Enter product details"]
        },
        images:
        {
            public_id:
            {
                type:String,
                required:true
            },
            url:
            {
                type:String,
                required:true
            }
        },
        category_id:{
            type: Number,
            required: true
        },
        stock:
        {
            type:Number,
            required:[true,"Please Enter Product Stock"],
            maxLength:[4,"Stock cannot exceed 4 characters"],
            default:1
        },

        seller_id:
        {
            type:Number,
            required: true
        },
        createAt:
       {
           type:Date,
           default:Date.now
       }
       
    }
)

module.exports=mongoose.model("agriculturalTools",agriculturalToolSchema);