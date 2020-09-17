import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Index = () => (
  <div>
    <Header />
    <h1>Sawatdee Next.js</h1>
    <p>Index</p>
    <Footer/>
  </div>
)

export default Index
// import Layout from '../components/Layout/Layout'
// import Router from 'next/router'

// const handleSubmit = (e) => {
//   e.preventDefault() // หยุดการทำงาน Submit
//   const name = e.target.name.value
//   Router.push({
//     pathname: '/hello',
//     query: { name: name }
//   })
// }

// const Index = () => (
//   <Layout>
//     <h1>Sawatdee Next.js</h1>
//     <form onSubmit={(e) => handleSubmit(e)}>
//       <span>ชื่อ: </span>
//       <input type="text" name="name"/>
//       <button type="submit">Go</button>
//     </form>
//   </Layout>
// )

// export default Index