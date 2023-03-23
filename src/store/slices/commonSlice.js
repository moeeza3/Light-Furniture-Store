import { createSlice } from "@reduxjs/toolkit";


const commonSlice=createSlice({
    name:"common",
    initialState:{
        activatemenu:"hidemenu",
        layout:"grid",
        cartstatus:"hidecart",
        showfilter:"hidefilter"
    },
    reducers:{
        opencloseMenu(state){
            if(state.activatemenu==="hidemenu"){
                state.activatemenu="showmenu"
            }else{
                state.activatemenu="hidemenu"
            }
        },
        opencloseCart(state){
            if(state.cartstatus==="hidecart"){
                state.cartstatus="showcart"
            }else{
                state.cartstatus="hidecart"
            }
        },
        openclosefilter(state,action){
            if(state.showfilter==="hidefilter"){
                state.showfilter="showfilter"
            }else{
                state.showfilter="hidefilter"
            }
        }
    }
})


export const {opencloseMenu,opencloseCart,openclosefilter}=commonSlice.actions


export default commonSlice.reducer