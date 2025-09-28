express=require('express')
app=express()
PORT=8383


let data={
    name:"james"
}
app.get('/',(req,res)=>{
    res.send("<h1>Homepage</h1>")
})

app.get('/api/data',(req,res)=>{
    console.log("This is for data")
    res.send(data)
})

app.listen(PORT,()=>console.log(`server is running on: ${PORT}`))