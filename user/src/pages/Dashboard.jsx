import Welcome from "../components/Welcome";
import AddAccident from "../components/accident/AddAccident";
import AddCrime from "../components/crimes/AddCrime";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate("/");
  const handleLogout = async () => {
    alert("Are you sure you want to logout");
    navigate("/");
    const token = localStorage.getItem("token");
    await axios.delete(`http://localhost:8080/api/users/logout`, {
      headers: {
        Authorization: `${token}`,
      },
    });
  };

  return (
    <div className="flex h-screen">
      <div className="w-3/4 p-2">
        <Welcome />
        <div className="flex flex-col gap-3 p-5">
          <AddAccident />
          <AddCrime />
        </div>
      </div>
      <div className="w-1/4 p-4 flex items-center justify-center">
      <button
        onClick={handleLogout}
        className="border rounded px-4 py-2 bg-red-500 text-white hover:bg-red-600"
      >
        Logout
      </button>

      </div>
    </div>
  );
  
};

export default Dashboard;
