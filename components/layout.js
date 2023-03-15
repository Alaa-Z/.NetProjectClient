import Header from '@/components/header'
import Footer from '@/components/footer'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="p-10 max-w-7xl mx-auto"  >
        {children}
        </main>
      <Footer />
    </>
  )
}

export default Layout;