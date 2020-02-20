import Customers from './components/Customers.vue'
import About from './components/About.vue'
import Add from './components/Add.vue'
import CustomerDetails from './components/CustomerDetails.vue'
import Edit from './components/Edit.vue'



export default [
    { path:"/" ,component:Customers },
    { path:"/about" ,component:About },
    { path:"/add" ,component:Add },
    { path:"/details/:id" ,component:CustomerDetails },
    { path:"/edit/:id" ,component:Edit }
]