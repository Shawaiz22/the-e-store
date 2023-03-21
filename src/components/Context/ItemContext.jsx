import React,{createContext, useState} from 'react';
import { AllItems } from '../../data/items';

const Items = createContext({
    items:null,
    upDateItems:null,
    updateItemQty:()=>{},
    handleQuery:()=>{},
    searchItems:null
});

const ItemContext = (props)=> {

    let [itemstate,updateItemstate]=useState(AllItems);
    let[search,setSearch] = useState([]);

    function updateQty(id,value){
        let newState = itemstate.map((e)=>{
            if(e._id===id){
                return{
                    ...e,
                    quantity:value
                }
            }
            else{
                return e;
            }
        })

        updateItemstate(newState);
    }

    const handleQueryFn = (inp)=>{

            inp = inp.toLowerCase();
        
            let reg = new RegExp(inp);
            // let reg = `/${inp}/`;
        
            let newItems = itemstate.filter((e)=>{
                let prod = e.name.toLowerCase()
                let got = prod.match(reg);

                if(got!=null){
                    return e
                }
            })
        
            setSearch(newItems)
    } 

    return (
        <Items.Provider value={{items:itemstate,upDateItems:updateItemstate,updateItemQty:updateQty,handleQuery:handleQueryFn,searchItems:search}}>
        {props.children}
        </Items.Provider>
    );
}

export default ItemContext;
export {Items};