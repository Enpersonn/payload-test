import type { SerializedListItemNode, SerializedListNode } from '@payloadcms/richtext-lexical'

const OlListBlock = (node: SerializedListNode) => {
  const listItems = node.children.map((child) => child as SerializedListItemNode)

  return (
    <ol>
      {listItems.map((child) => (
        // @ts-expect-error TODO: Fix this
        <li key={child.value}>{child.children[0].text}</li>
      ))}
    </ol>
  )
}

export default OlListBlock
