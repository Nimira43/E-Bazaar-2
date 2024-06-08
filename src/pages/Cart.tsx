import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
function Cart() {
  return (
    <div>
      <h1 className='text-4xl'>Cart Page</h1>
      <Link to='/' className='text-7xl text-[#ff4500]'>
        back home
      </Link>
      <Button asChild size='lg'>
        <Link to='/'>home button</Link>
      </Button>
    </div>
  );
}
export default Cart;