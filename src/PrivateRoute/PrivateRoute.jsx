
import { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';



const PrivateRoute = ({ children }) => {
  const {user, loading} =use(AuthContext)
  
if (loading){
    return <span className="loading loading-dots loading-xl"></span>

}

  if(user && user?.email){
      return children;
  }
  return <Navigate to='/login'></Navigate>


};

export default PrivateRoute;
