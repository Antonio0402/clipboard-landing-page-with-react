const NavLink = ({ text }) => {
  return (
    <li className="hover:text-primary-dark">
      <a href="#">{text}</a>
    </li>
  );
};

export default NavLink;
