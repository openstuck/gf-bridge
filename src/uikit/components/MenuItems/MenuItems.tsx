import React from 'react'
import styled from 'styled-components'
import { Flex } from '../Box'
import isTouchDevice from '../../util/isTouchDevice'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import MenuItem from '../MenuItem/MenuItem'
import IconComponent from '../Svg/IconComponent'
import { MenuItemsProps } from './types'

const MenuItems: React.FC<MenuItemsProps> = ({ items = [], activeItem, activeSubItem, ...props }) => {
  return (
    <Flex {...props}>
      {items.map(({ label, items: menuItems = [], href, icon = '', comingSoon = false }, index) => {
        const statusColor = menuItems?.find((menuItem) => menuItem.status !== undefined)?.status?.color
        const isActive = activeItem === href
        const linkProps = isTouchDevice() && menuItems && menuItems.length > 0 ? {} : { href }

        return (
          <DropdownMenu key={`${label}#${href}#${icon}`} items={menuItems} py={1} activeItem={activeSubItem}>
            <MenuItem {...linkProps} isActive={isActive} statusColor={statusColor} menuIndex={index}>
              {label || <IconComponent iconName={icon} color={isActive ? 'textSubtle' : 'textSubtle'} />}
              {comingSoon && <ComingSoonTag>Coming Soon</ComingSoonTag>}
            </MenuItem>
          </DropdownMenu>
        )
      })}
    </Flex>
  )
}

// Styled component for the "Coming Soon" tag
const ComingSoonTag = styled.span`
  background-color: #496d2a; /* Or any color you prefer */
  color: #fff;
  border-radius: 12px;
  padding: 2px;
  font-size: 8px;
  font-weight: bold;
  margin-left: 8px;
  position: absolute;
  top: 0px;
  right: -9px;
  width: 55px;
  transform: rotate(45deg);
`

export default MenuItems
