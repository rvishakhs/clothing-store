import React from 'react'
import logo from "../../../assets/Logo_footer.png"

import   {facebook, instagram, linkedin, twitter}  from "../../../assets";

const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Content",
          link: "https://www.hoobank.com/content/",
        },
        {
          name: "How it Works",
          link: "https://www.hoobank.com/how-it-works/",
        },
        {
          name: "Create",
          link: "https://www.hoobank.com/create/",
        },
        {
          name: "Explore",
          link: "https://www.hoobank.com/explore/",
        },
        {
          name: "Terms & Services",
          link: "https://www.hoobank.com/terms-and-services/",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
          link: "https://www.hoobank.com/help-center/",
        },
        {
          name: "Partners",
          link: "https://www.hoobank.com/partners/",
        },
        {
          name: "Suggestions",
          link: "https://www.hoobank.com/suggestions/",
        },
        {
          name: "Blog",
          link: "https://www.hoobank.com/blog/",
        },
        {
          name: "Newsletters",
          link: "https://www.hoobank.com/newsletters/",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "https://www.hoobank.com/our-partner/",
        },
        {
          name: "Become a Partner",
          link: "https://www.hoobank.com/become-a-partner/",
        },
      ],
    },
  ];
  
  const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
  ];


function Footer() {
    return (
      <section className={`flex items-center justify-center  flex-col md:px-16 px-4 `}>
          <div className={`flex items-start md:flex-row flex-col mb-8 w-full`}>
              <div className='flex-[1] flex-col  justify-start space-y-2 mr-10'>
                  <img 
                      src={logo}
                      alt="logo"
                      className="w-[266px] h-[72px] object-contain "
                  />
                  <p className={` max-w-[350px]`}>A new way to make the payments easy, reliable and secure.</p>
              </div>
              <div className={`flex-[1.5] flex w-full flex-row justify-between flex-wrap md:mt-0 mt-10  `}>
                  {footerLinks.map((footerlink) => (
                      <div key={footerlink.title} className="flex flex-col space-y-3 text-dimWhite">
                          <h2 className={`font-poppins font-medium text-[18px] leading-[27px] text-white`}>{footerlink.title}</h2>
                          {footerlink.links.map((link) => (
                              <li className='list-none cursor-pointer hover:text-blue-300'>{link.name}</li>
                          ))}
                      </div>
                  )) }
              </div>
          </div>
          <div className='flex md:flex-row justify-between'>
              <p className='text-white flex items-center'>Copyright © 2021 HooBank. All Rights Reserved.</p>
                  {socialMedia.map((social) => (
                      <div id={social.id} className='flex flex-row  space-x-3'>
                          <img 
                              src={social.icon}
                              alt={social.id}
                              className="w-[21px] h-[21px]" 
                          />
                      </div>
                  ))}
          </div>
      </section>
    )
  }

  export default Footer