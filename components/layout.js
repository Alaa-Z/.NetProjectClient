import Header from '@/components/header'
import Footer from '@/components/footer'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-10 pb-10 mx-auto min-h-screen"  >
        {children}
        </main>
      <Footer />
    </>
  )
}

export default Layout;