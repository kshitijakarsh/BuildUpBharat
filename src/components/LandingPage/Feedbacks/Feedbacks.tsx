import React, { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeader from '../../common/SectionHeader'
import FeedbackCard from './FeedbackCard'
import type { TestimonialItem } from './FeedbackCard'

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'Riya Das',
    role: 'Learner Member',
    image: 'https://picsum.photos/100/100?random=1',
    rating: 4,
    title: 'Helped me build confidence and clarity',
    quote:
      'The guidance, community discussions, and learning environment helped me become more confident and develop a positive mindset...',
  },
  {
    id: 2,
    name: 'Aarav Sharma',
    role: 'Student',
    image: 'https://picsum.photos/100/100?random=2',
    rating: 5,
    title: 'It was a very good experience',
    quote:
      'Being part of Build Up Bharat helped me gain confidence, improve my communication skills...',
  },
  {
    id: 3,
    name: 'Kunal Verma',
    role: 'Aspiring Entrepreneur',
    image: 'https://picsum.photos/100/100?random=3',
    rating: 4,
    title: 'A platform that inspires growth',
    quote:
      'Build Up Bharat encouraged me to think creatively, learn from others...',
  },
  {
    id: 4,
    name: 'Sneha Patel',
    role: 'Design Student',
    image: 'https://picsum.photos/100/100?random=4',
    rating: 5,
    title: 'Great community support',
    quote:
      'The mentorship and peer support system here is incredible...',
  },
]

const swiperConfig = {
  modules: [Navigation, Pagination, Autoplay],
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
    el: '.custom-pagination',
    bulletClass:
      'w-3 h-3 bg-gray-300 rounded-full mx-1 cursor-pointer transition-colors inline-block',
    bulletActiveClass: '!bg-gray-600',
  },
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
}

const Feedbacks: React.FC = () => {
  const slides = useMemo(
    () =>
      TESTIMONIALS.map((item) => (
        <SwiperSlide key={item.id} className="pt-10 pb-10">
          {({ isActive }) => (
            <div
              className={`transition-all duration-500 ease-out transform ${isActive
                ? 'md:scale-110 opacity-100 z-10'
                : 'md:scale-90 opacity-70 md:opacity-60 md:grayscale-50'
                }`}
            >
              <FeedbackCard item={item} isActive={isActive} />
            </div>
          )}
        </SwiperSlide>
      )),
    []
  )

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader bgText="Success Stories">
          <span className="text-brand-navy">
            Student <span className="text-brand-navy"> Feedback </span> &
            <span className="text-brand-orange"> Success Stories</span>
          </span>
        </SectionHeader>

        <div className="relative mt-16 px-4 md:px-0">
          <Swiper
            {...swiperConfig}
            slidesPerView={1}
            spaceBetween={0}
            className="pb-20 overflow-visible!"
          >
            {slides}
          </Swiper>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <button className="custom-prev p-2 rounded-full text-gray-400 hover:text-brand-blue transition-colors">
              <ChevronLeft size={32} />
            </button>

            <div className="custom-pagination text-center" />

            <button className="custom-next p-2 rounded-full text-gray-400 hover:text-brand-blue transition-colors">
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedbacks
