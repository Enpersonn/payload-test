import type { SerializedQuoteNode } from '@payloadcms/richtext-lexical'

const QuoteBlock = (props: SerializedQuoteNode) => {
  //@ts-expect-error TODO: Fix this
  return <div className=" border p-2">{props.children[0].text}</div>
}

export default QuoteBlock
