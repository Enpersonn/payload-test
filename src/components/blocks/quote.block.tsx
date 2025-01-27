import type { SerializedQuoteNode } from '@payloadcms/richtext-lexical'

const QuoteBlock = (props: SerializedQuoteNode) => {
  //@ts-expect-error TODO: Fix this
  return <div className=" border-l-2 border-foreground p-2 italic">{props.children[0].text}</div>
}

export default QuoteBlock
