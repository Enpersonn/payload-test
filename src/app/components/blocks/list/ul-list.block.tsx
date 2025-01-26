import { cn } from '@/lib/utils'
import type { SerializedListItemNode, SerializedListNode } from '@payloadcms/richtext-lexical'

const UlListBlock = (node: SerializedListNode) => {
  const listItems = node.children.map((child) => child as SerializedListItemNode)
  const isCheckList = listItems[0].checked !== undefined

  return (
    <ul className={cn({ 'list-none': isCheckList, 'list-disc': !isCheckList })}>
      {listItems.map((child) => {
        return (
          <li key={child.value}>
            {isCheckList && <input type="checkbox" defaultChecked={child.checked} disabled />}
            {/* @ts-expect-error TODO: Fix this */}
            {child.children[0].text}
          </li>
        )
      })}
    </ul>
  )
}

export default UlListBlock
