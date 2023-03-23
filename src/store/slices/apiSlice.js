import { createSlice } from "@reduxjs/toolkit";

const apiSlice=createSlice({
   name: 'api',
   initialState:{
    apidata:[],
    newarr:[],
    singleData:[]
   },
   reducers: {
     fetchData(state,action){
        state.apidata=action.payload; 
               
     },
     
     sortNew(state,action){
     let dat=action.payload;
     let dato=dat.map(cur=>cur.createdate)
     let findo=dat.filter(cur=>{
      // console.log(new Date(cur.createdate).getMonth())
      // console.log("month : "+new Date().getMonth())
      // console.log("New ways : "+new Date(new Date().setDate(new Date(cur.createdate).getDate() - 30)))
      // console.log("Date update: "+new Date(cur.createdate).getFullYear())
      console.log("Date update: "+new Date().getDate())
      if(new Date(cur.createdate).getFullYear()==new Date().getFullYear() && new Date(new Date().setDate(new Date(cur.createdate).getDate() - 30))<=new Date()){
         
         return {
            ...cur
         }
      }
     })
     return {
      ...state,
      newarr:findo
     }

   //   console.log(dato.sort((a,b)=>{
   //    if(new Date(new Date().setDate(new Date(b.createdate).getDate() - 30))<=new Date(a)){
      // console.log(new Date().getDate())
      // var date = new Date();
      // console.log((date.getDate() -2)+"date" )
   //       // return {
   //       //    ...cur
   //       // }
   //    }
   //   }))
     console.log("findo : "+findo)
   //   let sort=dato.sort((a,b)=>{
   //        return new Date(b.createdate)-new Date(a.createdate)
   //   })
   //   console.log(dato)
   //   console.log(sort)
     },
     setDetails(state,action){
         console.log(typeof action.payload)
         let newData=state.apidata.find(cur=>cur.id===action.payload)
         return {
            ...state,
            singleData:newData
         }
     },
   
   add(state,action){
      
      state.singleData.totalquantity++;              
      
   },
   minus(state,action){
      if(state.singleData.totalquantity>1){
         state.singleData.totalquantity--;
      }
   }
}
})

export const {fetchData,sortNew,setDetails,add,minus}=apiSlice.actions;
export default apiSlice.reducer;