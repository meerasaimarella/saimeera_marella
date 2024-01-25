export const List=()=>{
    const details={
        name:"pawankalyan",
        imageURL:"https://upload.wikimedia.org/wikipedia/commons/3/32/Pawan2.jpg",
        imageALT :"pawankalyan",
        listItems: ["Konidela Pawan Kalyan","Jana Sena Party", "Indian actor", "politician"," filmmaker", "martial artist"]

    }

const{name,imageURL,imageALT,listItems}=details
return(
    <div>
        <h1>{name}</h1>
        <img src={imageURL} alt={imageALT}/>
        
        
        
    
        <ul>
            <li>{listItems[0]}</li>
            <li>{listItems[1]}</li>
            <li>{listItems[2]}</li>
            <li>{listItems[3]}</li>
            <li>{listItems[4]}</li>
        </ul>
    </div>
)
}

