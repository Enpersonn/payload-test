'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './theme-provider'
import PageLayout from '@/app/components/layout/page-layout'

export const queryClient = new QueryClient({})

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        <PageLayout>{children}</PageLayout>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
