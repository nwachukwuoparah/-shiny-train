import React from 'react'
import './areas.css'
import Image from '../../COMPONENT/IMAGE/image'
import img_105310_06007_7951x2785 from '../images/210122-105310-06007-7951x2785.jpg'
import NavCard from '../../COMPONENT/NAVCARD/Nav_card'
import wBDHI2077_3840x2494 from '../images/BDHI2077-3840x2494.jpg'
export default function Areas(props) {



  return (
    <div className='areas'>
      <Image image={img_105310_06007_7951x2785} />
      <div className='areas_bnx1'>
        <p>Below is a list of areas we cover at the Taunton & West Somerset office.</p>
        <ul>
          <li>Bathpool</li>
          <li>Bishops Hull</li>
          <li>Bishops Lydeard</li>
          <li>Blagdon</li>
          <li>Bradford on Tone</li>
          <li>Cheddon Fitzpaine</li>
          <li>Comeytrowe</li>
          <li>Corfe</li>
          <li>Creech St Michael</li>
          <li>Galmington</li>
          <li>Henlade</li>
          <li>Kingston St Mary</li>
          <li>Monkton Heathfield</li>
          <li>Norton Fitzwarren</li>
          <li>Oake</li>
          <li>Pitminster</li>
          <li>Ruishton</li>
          <li>Rumwell</li>
          <li>Staplegrove</li>
          <li>Stoke St Mary</li>
          <li>Taunton</li>
          <li>Trull</li>
          <li>Wellington</li>
          <li>West Buckland</li>
          <li>West Monkton</li>
          <li>If your area is not listed, please call us on 01823 211121 and we will be
            pleased to see if we can provide care to you or pass your details on to another
            Home Instead office.</li>
        </ul>
      </div>
      <div className='areas_bnx2'>
        <NavCard image={wBDHI2077_3840x2494} />
      </div>
    </div>
  )
}
