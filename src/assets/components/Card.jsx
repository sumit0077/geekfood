import React from 'react'

function Card() {
    const cards = [
        {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis."
        },{
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores."
        },{
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt."
        },{
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum."
        },{
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!"
        },{
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima."
        }
    ]
  return (
    <div className='w-[100%] m-auto flex justify-center flex-wrap gap-10 my-20'>
        {
            cards.map((card, index) => {
                return <div key={index} className='w-[300px] md:w-[350px] lg:w-[380px] h-fit'>
                            <div className='bg-[#F3F5F7] p-6 rounded-lg shadow-lg'>
                                {card.desc}
                            </div>
                            <div className='flex mt-4 items-start'>
                                <div className='' >
                                    <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt="" style={{borderRadius:"50%"}} className='w-12 h-12 object-cover'/>
                                </div>
                                <div className='ml-4'>
                                    <h1 className='font-bold'>Gladis Lennon</h1>
                                    <p>Head of SEO</p>
                                </div>
                            </div>
                        </div>
                    })
        }
    </div>
  )
}

export default Card