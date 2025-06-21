import { Link } from "react-router-dom";
import { navItems } from "../constants";
import { Button } from "./ui/button";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <section>Icons Image with Name</section>

      <div className="flex flex-col gap-5 mt-12 text-base ">
        {navItems.map(({ name, icon, url }) => (
          <Link to={url} key={name} className="bg-gray-300 p-2 rounded-md">
            {name}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
