import './App.css'
import Slider  from './Components/Slider';
import Sales from './Components/Sales';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
function App() {
  const images = ['https://img.alicdn.com/imgextra/i2/O1CN01iLz1w21Dxewj3llM9_!!6000000000283-0-tps-1976-688.jpg_1200x1200.jpg', 'https://img.alicdn.com/imgextra/i3/O1CN019lhowD20Q98Ydmb7K_!!6000000006843-0-tps-1976-688.jpg', 'https://img.alicdn.com/imgextra/i2/O1CN01GMpNp91TmEvJ9ZJ6e_!!6000000002424-0-tps-1976-688.jpg', 'https://icms-image.slatic.net/images/ims-web/ce4687f9-6535-404e-8316-4560a797c2ee.jpg'];
  return (
    <>
    <Navbar></Navbar>
    <Slider images={images} />
    <Sales></Sales>
    <Footer></Footer>
    </>
  )
}

export default App
