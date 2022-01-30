import { useState } from "react";
import { NavLink } from "remix";
import { AnimateSharedLayout, motion } from "framer-motion";

type MenuItems = {
  children: React.ReactNode,
  selected: boolean,
  onClick: () => void,
}

const MenuItem = ({ children, selected, onClick }: MenuItems) => (
  <motion.div
    onClick={onClick}
    animate={{ opacity: selected ? 1 : 0.5 }}
  >
    {children}
    {selected && (
      <motion.div
        style={{ textDecoration: 'underline'}}
        className="underline"
        layoutId="underline"
      />
    )}
  </motion.div>
)

export const Nav = () => {
  const [selected, setSelected] = useState(0);
  const links = [
    {
      url: '/',
      name: 'Home'
    },
    {
      url: '/about',
      name: 'About',
    },
    {
      url: '/contact',
      name: 'Contact'
    }
  ]
  return (
    <header>
      <nav className="bg-navy h-16">
        <ul className="flex flex-row text-white justify-around list-none h-16 items-center">
          <AnimateSharedLayout>
            {links.map(({ url, name }, index) => (
              <MenuItem
                selected={selected === index}
                onClick={() => setSelected(index)}
              >
                <NavLink
                  className={
                    ({ isActive }) => isActive
                      ? 'text-yellow-100' : 'text-white'}
                  to={url}
                >
                  {name}
                </NavLink>
              </MenuItem>
            ))}
          </AnimateSharedLayout>
        </ul>
      </nav>
    </header>
  )
};
