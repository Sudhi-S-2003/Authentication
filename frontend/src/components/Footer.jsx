import { Link } from "react-router-dom"
function Footer({links}){
  return (
    
<div className="container-fluid bg-dark-subtle">
  <footer className="py-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
    {
        links.map((link, index) => {
          return <li className="nav-item" key={index}><Link className="nav-link px-3 text-muted" to={
            link.url} >{link.name}</Link></li>
          })
      }    
    </ul>
    <p className="text-center text-muted">Copyright &copy; 2024 </p>
  </footer>
</div>
  )
}

export default Footer