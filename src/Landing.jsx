import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

const menuItems = [
  {
    id: 1,
    name: 'Home',
    link: '/home',
  },
  {
    id: 2,
    name: 'About Us',
    link: '/about',
  },
  {
    id: 3,
    name: 'Support',
    link: '/support',
  },
  {
    id: 4,
    name: 'Products',
    link: '/products',
  },
]

const actions = [
  {
    id: 'search1',
    image: '/search.svg',
  },
  {
    id: 'heart2',
    image: '/heart.svg',
  },
  {
    id: 'shopping3',
    image: '/shopping.svg',
  },
]

const Landing = () => {
  const navigate = useNavigate()
  return (
    <Fragment>
      {/* Header */}
      <div className="p-5 grid lg:grid-cols-3 grid-cols-2 justify-between items-center lg:border-b border-black">
        <div>
          <img className="cursor-pointer" src="/cartx.svg" alt="cartx_logo" />
        </div>

        <div className="lg:flex hidden items-center lg:gap-10 gap-5 justify-center">
          {menuItems.map((item) => (
            <p
              onClick={() => navigate(item.link)}
              className="capitalize text-base font-sans text-black hover:underline cursor-pointer"
            >
              {item.name}
            </p>
          ))}
        </div>

        <div className="flex items-center lg:gap-10 gap-5 justify-center">
          {actions.map((item) => (
            <img
              className="w-[18px] h-[18px] object-contain cursor-pointer"
              src={item.image}
              alt={item.key}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}

      <div className="lg:w-[1290px] m-auto  lg:border-b lg:border-x border-black">
        <div className="flex lg:flex-row flex-col-reverse lg:justify-between items-center">
          <div className="lg:w-[521px] flex flex-col justify-start items-start gap-4 relative pl-10 lg:py-0 p-5">
            <p className="font-bold uppercase lg:text-7xl md:text-5xl text-3xl">
              next gen
            </p>
            <p className="font-bold uppercase lg:text-7xl md:text-5xl text-3xl">
              smart watch
            </p>

            <p className="text-base font-light">
              Everyone looks your watch and it represents <br /> who you are
              your values and your personal style.
            </p>

            <p className="font-medium text-lg font-sans">$550.00</p>

            <button className="px-5 p-2 bg-[#FE682F] border border-black w-44 text-base">
              Shop Now
            </button>
            <img
              src="star.svg"
              alt="star"
              className="lg:absolute hidden -top-10 right-0"
            />
            <img
              src="spring.svg"
              alt="spring"
              className="lg:absolute hidden -bottom-10 -right-20"
            />
            <img
              src="arrow.svg"
              alt="arrow"
              className="lg:absolute hidden -bottom-20 right-20"
            />
          </div>

          <div className="bg-[#FE682F] lg:border-l border-black lg:p-0 p-5">
            <img src="/watch.png" alt="watch" className="rounded-full" />
          </div>
        </div>

        <div className="lg:border-t border-black flex lg:flex-row flex-col">
          <img
            src="/watch2.png"
            alt="watch2"
            className="lg:border-r border-black"
          />

          <div className="lg:w-[461px] m-auto relative">
            <p className="uppercase leading-loose font-medium text-base font-sans lg:p-0 p-5">
              Everyone looks at your watch and it represents who you are, your
              values and your personal style.
            </p>
          </div>

          <div className="bg-[#FFEE01] lg:w-[411px] lg:border-l border-black flex flex-col justify-center items-center">
            <div className="">
              <p className="uppercase font-bold lg:text-4xl text-2xl">
                Whats <br /> trending?
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Landing
