import {
  PageContent,
  PageFooter,
  PageHeader,
  PageWrapper,
} from '@/app/components/layout/page-wrapper'
import Footer from './footer'
import Menu from './meny'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageWrapper>
      <PageHeader>
        <Menu />
      </PageHeader>
      <PageContent>{children}</PageContent>
      <PageFooter>
        <Footer />
      </PageFooter>
    </PageWrapper>
  )
}

export default PageLayout
