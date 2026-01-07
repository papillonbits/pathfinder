import { Link } from 'react-router-dom'
import { pageContent } from '../../../library/constant'

import { listGnomePagePath, infoGnomePagePath } from '../../../route/path'

export const navigation = {
  ariaAttr: {
    label: pageContent.listGnome.contextNavigationItemText,
    current: 'page',
  },
  items: [
    {
      link: {
        component: Link,
        props: { ...{ to: listGnomePagePath } },
        children: pageContent.listGnome.contextNavigationItemText,
      },
      isSelected: true,
      enabled: true,
      visible: true,
    },
    {
      link: {
        component: Link,
        props: { ...{ to: infoGnomePagePath } },
        children: pageContent.infoGnome.contextNavigationItemText,
      },
      isSelected: false,
      enabled: true,
      visible: true,
    },
  ],
}
