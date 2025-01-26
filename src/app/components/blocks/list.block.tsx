import type { SerializedListNode } from '@payloadcms/richtext-lexical'
import OlListBlock from './list/ol-list.block'
import UlListBlock from './list/ul-list.block'

const ListBlock = (node: SerializedListNode) => {
  if (node.tag === 'ul') return <UlListBlock {...node} />
  return <OlListBlock {...node} />
}

export default ListBlock
