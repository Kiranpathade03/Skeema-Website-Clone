import React from 'react'
import png1 from '../common/assests/loading.png'
import png2 from '../common/assests/uploads.png'
import png3 from '../common/assests/watsonpage.png'

const Cards = [
    {
        id: 1,
        Srno: '01',
        image: png1,
        Name: 'Reminding & Resumption',
        information: "You're constantly switching between unfinished tasks all day, leaving tabs open so you don't lose where you left off."
    },
    {
        id: 1,
        Srno: '02',
        image: png2,
        Name: 'Resurfacing',
        information: "You're constantly switching between unfinished tasks all day, leaving tabs open so you don't lose where you left off."
    },
    {
        id: 1,
        Srno: '03',
        image: png3,
        Name: 'Refinding',
        information: "You're constantly switching between unfinished tasks all day, leaving tabs open so you don't lose where you left off."
    },
]
function Viewcard() {
    return (


        <div className='grid  ml-3 md:grid-cols-3 w-[90%] gap-3 mt-20'>
            {Cards.map((cardname) => {
                return (
                    <div className=' md:ml-24'>
                        <div className=' w-[100%] ml-1 h-60 shadow bg-white p-3 rounded-2xl'>
                            <div>
                                <div className='flex justify-between mt-2'>
                                    <h3 className=' ml-4'>{cardname.Srno}</h3>
                                    <img src={cardname.image} alt='Image' />
                                </div>
                                <h1 className=' mt-2 font-bold ml-4    text-3xl'>{cardname.Name}</h1>
                                <p className=' mt-3  ml-4 text-gray-500 text-xs' >{cardname.information}</p>
                            </div>

                        </div>
                    </div>
                )
            }

            )}
        </div>


    )
}
export default Viewcard;
