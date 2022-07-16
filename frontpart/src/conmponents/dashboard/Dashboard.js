import Sidebar from '../sidebar/Sidebar';
import './dashboard.css';
import Cart from '../cart/Cart'
import Products from '../products/Products'
function Dashboard() {
  return (
    <div className='bars'>
      <Sidebar></Sidebar>
      <Products></Products>
      <Cart></Cart>
    </div>
  );
}

export default Dashboard;
