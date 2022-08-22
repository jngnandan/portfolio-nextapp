
import { useContext } from "react";
import { MediumContext } from "../../context/MediumContext";
import { useRouter } from 'next/router'

const ProtectedRoute = (props) => {
//   const token = Cookies.get("jwt_token");
const {currentUser} = useContext(MediumContext)
if(currentUser === null){
      return router.push('/login')
    } else if (currentUser){
    //   router.push('/')
      return `{router.push/${props}}`
    }
  }

export default ProtectedRoute;