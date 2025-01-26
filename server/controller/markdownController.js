import { convertMarkdownToHTML } from "../utils/markdownProcessor.js";

export const convertMarkdown=(req,res)=>{
    const{markdown}=req.body
    console.log("coming to controller------------------")
    if(!markdown){
        return res.status(400).json({
            error:'Markdown content is required',
            success:false
        })
    }
    else{
        try{
            const html = convertMarkdownToHTML(markdown);
            console.log("Converted HTML:", html);
            res.json({ html });
        }catch(error){
            res.status(500).json({
                error:`Error processing markdown${error}`
            })
        }
    }
}

