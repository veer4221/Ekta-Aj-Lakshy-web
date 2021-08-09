import React from 'react'
import AchivemtnsData from './AchivemtnsData'

const AxhivemtnsCaseData=[
    {
        number:12,
        lebel:`YEARS OF EXPEREANCE`
    },
    {
        number:122,
        lebel:`GauRaksh`
    },
    {
        number:123,
        lebel:`Jihad`
    },
    {
        number:212,
        lebel:`Protect Girl`
    }
]
const Achivemtns = () => {
    return (
        <>
    <div className="doctor-message">
          <div className="inner-lay">
            <div className="container">
              <div className="row session-title">
                <h2>Our Achievemtns in Numbers</h2>
                <p>
                  We can talk for a long time about advantages of our Dental
                  clinic before other medical treatment facilities. But you can
                  read the following facts in order to make sure of all pluses
                  of our clinic:
                </p>
              </div>
              <div className="row">
                  {
                      AxhivemtnsCaseData&&
                    AxhivemtnsCaseData.map((data)=>(
                        <AchivemtnsData data={data}/>
                    ))
                  }


              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Achivemtns
