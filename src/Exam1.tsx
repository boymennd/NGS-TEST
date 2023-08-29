import { useState } from 'react'
import { menu } from "./data"

interface Menu {
  id: number,
  title: string,
  parentId: null | number,
  url: string,
}

interface MenuItemProps {
  item: Menu,
  paddingStyle: number
}


function Arrow({ transform }: { transform: string }) {
  return (
    <svg style={{ transform: transform }} xmlns="http://www.w3.org/2000/svg" fill="#fff" width="16" height="16" viewBox="0 0 24 24"><path d="M6.028 0v6.425l5.549 5.575-5.549 5.575v6.425l11.944-12z" /></svg>
  )
}

function MenuItem({ item, paddingStyle }: MenuItemProps) {
  const hasChildren = menu.some((menuItem: Menu) => menuItem.parentId === item.id);
  const [open, setOpen] = useState<boolean>(false)
  const paddingControl = paddingStyle + 20

  const handleOpen = () => {
    setOpen(prev => !prev)
  }

  return (
    <>
      <div onClick={handleOpen} className={`menuItem`} style={{ paddingLeft: `${paddingControl}px` }}>
        <span>{item.title}</span>
        {hasChildren && <Arrow transform={open ? 'rotate(90deg)' : 'none'} />}
      </div>
      {hasChildren && open && (
        <div>
          {menu
            .filter((menuItem: Menu) => menuItem.parentId === item.id)
            .map((menuItem: Menu) => (
              <MenuItem paddingStyle={paddingControl} key={menuItem.id} item={menuItem} />
            ))}
        </div>
      )}
    </>
  );
}

export default function Exam1() {
  const listDataParent = menu.filter((item: Menu) => item.parentId === null);

  return (
    <div className="exam1">
      {listDataParent.map((item: Menu) => (
        <MenuItem paddingStyle={0} key={item.id} item={item} />
      ))}
    </div>
  );
}