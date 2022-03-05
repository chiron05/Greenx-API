const mongoose=require('mongoose');

const categorySchema= new mongoose.Schema(
    {
        category_id:
        {
            type:Number,
            required:true
        },
        category_name:
        {
            type: String,
            required:true
        },
        image:
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
        number_of_items:
        {
            type: Number,
            required:true
        }
    }
)

module.exports=mongoose.model("CATEGORY",categorySchema);