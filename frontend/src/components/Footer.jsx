import { Link } from "react-router-dom"
function Footer({links}){
  return (
    
<div class="container-fluid bg-dark-subtle">
  <footer class="py-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
    {
        links.map((link, index) => {
          return <li class="nav-item"><Link class="nav-link px-3 text-muted" to={
            link.url}>{link.name}</Link></li>
          })
      }    
    </ul>
    <p class="text-center text-muted">Copyright &copy; 2024 </p>
  </footer>
</div>
  )
}

export default Footer