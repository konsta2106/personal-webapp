import React from 'react'
import axios from 'axios'
import { Buffer } from 'buffer'
// import { Link } from 'react-scroll'

const CTA = () => {

  const downloadCv = async () => {
    try {
      const password = prompt('Enter the password')
      const { data } = await axios.post('/api/profile/cv', {
        password: password
      })
  
      // Create a Blob from the PDF Stream
      const file = new Blob([Buffer.from(data, 'base64')], { type: "application/pdf" });
      //Build a URL from the file
      const fileURL = URL.createObjectURL(file);
      // Create download link
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = file;
      alink.setAttribute('download', 'konsta-cv.pdf')
      alink.click();
    } catch (error) {
      alert(error.response.data.message)
      console.log(error.response.data)
    }
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.post('/api/profile/cv')
  //     // console.log(response.data)
  //     // setData(response.data)
  //   }
  //   fetchData()
  // }, [])

  return (
    <div className='cv'>
      <input type="button" value="Download CV" onClick={downloadCv} className='btn centre btn-contact-me' />
      {/* <Link offset={-50} smooth={true} to={"contact"} className="nav-link" href="#">
        Contact Me <span className="sr-only">(current)</span>
      </Link> */}
      {/* <a href='#contact' className='btn centre'>Contact Me</a> */}
    </div>
  )
}

export default CTA