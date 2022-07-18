const React = require('react')
const Default = require('./layouts/default')

function Show({bread, index}){
    return(
        <Default>
            <h3>{bread.name}</h3>
            <p>
                and it
                {
                    bread.hasGluten 
                    ? <span> does </span>
                    : <span> does NOT </span>
                }
                have gluten.
            </p>
            <img src = {bread.image} alt ={bread.name}/> 
            <p>Baked by {bread.baker}</p>
            <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
             <form method="POST" action= {`/breads/${bread.id}?_method=DELETE`}>
                <button type="submit" value="DELETE"> Delete </button>
            </form>
            <li><a href = "/breads"> Go Home </a></li>
        </Default>
    )
}
module.exports = Show