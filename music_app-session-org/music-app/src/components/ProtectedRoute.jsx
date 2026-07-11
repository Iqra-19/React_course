import { Navigate } from "react-router-dom";

export default function ProtectedRoute( {children } ) {
  const currentUser = JSON.parse(
        sessionStorage.getItem("currentUser")
    );

    if (!currentUser) {
        return <Navigate to="/login" replace />;
    }
  
    return children;
}
