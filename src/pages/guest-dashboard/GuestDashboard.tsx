import {
  useNavigate,
} from "react-router-dom";
const GuestDashboard = () => {
  const navigate=useNavigate()
  return (
    <>
    <div>GuestDashboard</div>
    <button onClick={() => navigate('/profile')} >Go to profile</button>
    <button onClick={() => navigate('/admin/dashboard')} >Go to admin dashboard</button>
    <button onClick={() => navigate('/super-admin/dashboard')} >Go to super admin dashboard</button>
    <button onClick={() => navigate('/')} >Log out</button>
    </>
  )
}

export default GuestDashboard