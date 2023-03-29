import React from 'react'
import './vacancies.css'
import { data } from './vacation'

export default function Vacancies(props) {


  return (
    <div className='vacancies'>
      <div className='Vacancies_wrap'>
        {data?.map((i) => (
          <div className='vacancies_card'>
            <div className='vacancies_card_top'>
              <h2>{i.h2}</h2>
              <h3>{i.h3}</h3>
              <div className='vacancies_card_top_span'>
                <span><p>{i.p1}</p></span>
                <p>{i.p2}</p>
                <p>{i.p3}</p>
                <p>{i.p4}</p>
              </div>
            </div>

            <div className='vacancies_card_middle'>
              {i.p5 && <p>{i.p5} </p>}
              {i?.ul?.map((i) => (
                <span className='vacancies_card_middle_ul'>
                  {i.p && <p>{i.p}</p>}
                  <ul>
                    <li>{i.li1}</li>
                    <li>{i.li2}</li>
                    <li>{i.li3}</li>
                    {i.li4 && <li>{i.li4}</li>}
                    {i.li5 && <li>{i.li5}</li>}
                    {i.li6 && <li>{i.li6}</li>}
                    {i.li7 && <li>{i.li7}</li>}
                    {i.li8 && <li>{i.li8}</li>}
                    {i.li9 && <li>{i.li9}</li>}
                    {i.li10 && <li>{i.li10}</li>}
                    {i.li11 && <li>{i.li11}</li>}
                    {i.li12 && <li>{i.li12}</li>}
                    {i.li13 && <li>{i.li13}</li>}
                    {i.li14 && <li>{i.li14}</li>}
                    {i.li15 && <li>{i.li15}</li>}

                  </ul>
                </span>
              ))}
              {i.p6 && <p>{i.p6}</p>}
              {i.p7 && <p>{i.p7}</p>}
              {i.p8 && <p>{i.p8}</p>}
              {i.p9 && <p>{i.p9}</p>}
              {i.p10 && <p>{i.p10}</p>}
              {i.p11 && <p>{i.p11}</p>}
              <strong><p>{i.p8}</p></strong>
            </div>
            <div className='vacancies_card_bottom'>
              <p>Apply online now and we’ll be in touch for a chat.</p>
              <button>I'm interested</button>
            </div>
          </div>
        ))
        }

      </div>
    </div>
  )
}
