import * as React from 'react'
import { cn } from '@/lib/utils'

const PageWrapper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col min-h-[100vh]', className)} {...props} />
  ),
)

PageWrapper.displayName = 'PageWrapper'

const PageHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn(' border-b h-[80px]', className)} {...props}>
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto h-full">
        <div className="col-span-12 col-start-2 h-full">{children}</div>
      </div>
    </div>
  ),
)

PageHeader.displayName = 'PageHeader'

const PageFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('  border-t h-[380px]', className)} {...props}>
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto">
        <div className="col-span-12 col-start-2">{children}</div>
      </div>
    </div>
  ),
)

PageFooter.displayName = 'PageFooter'

const PageContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'grid grid-cols-12 gap-4 h-[calc(100vh-80px)] w-full max-w-7xl mx-auto',
        className,
      )}
      {...props}
    >
      <div className="col-span-12 col-start-2 w-full">{children}</div>
    </div>
  ),
)

PageContent.displayName = 'PageContent'

export { PageWrapper, PageHeader, PageFooter, PageContent }
