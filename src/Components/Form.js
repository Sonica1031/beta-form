import React from 'react';
import { data } from '../data';

function Form(){
    return(
data.map( item =>{
return(
<div>
    <form name={item.group} method="POST" data-netlify="true">
        <h2>{item.name}</h2>
        <input type="radio" group={item.group} name={item.group} value={item.value1}/>
        <label>yes</label>
        
        <input type="radio" group={item.group} name={item.group} value={item.value2}/>
        <label>no</label>
        <input type="radio" group={item.group} name={item.group} value={item.value3}/>
        <label>sometimes</label>
    </form>
</div>
)
})
)}

export default Form;