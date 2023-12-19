export default function Services(){
    // List the services you offer with detailed descriptions.
    const services = ['Website Development','Product Design','Wireframes','Courses','blogging']
    return (
         <div className="cards">
            {services && services.map(item=>{
                return <div>{item.toLocaleUpperCase()}</div>
            })}
         </div>
    )

}