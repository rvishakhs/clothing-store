import React from 'react'
import logo from "../../../assets/Logo_footer.png"

// import   {facebook, instagram, linkedin, twitter}  from "../../../assets";
import    instagram  from "../../../assets/instagram.svg";
import    facebook  from "../../../assets/facebook.svg";
import    linkedin  from "../../../assets/linkedin.svg";
import    twitter  from "../../../assets/twitter.svg";
import { SocialIcon } from 'react-social-icons';

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
      <section className={`flex items-center bg-gray-400/20 flex-col md:px-16 px-4 `}>
          <div className={`flex items-start md:flex-row flex-col mt-3 mb-8 w-full`}>
              <div className='flex-[1] flex-col items-center justify-start space-y-2 mr-10'>
                  <img 
                      src={logo}
                      alt="logo"
                      className="w-[266px] h-[72px] object-contain"
                  />
                  <p className={`max-w-[350px] text-justify`}>Upgrade your wardrobe with our stylish and high-quality textiles - shop now at Zalya! Transform your home decor with our beautiful and durable textiles - shop now at Zalya!</p>
              </div>
              <div className={`flex-[1.5] flex w-full flex-row justify-between flex-wrap md:mt-0 mt-10  `}>
                  {footerLinks.map((footerlink) => (
                      <div key={footerlink.title} className="flex flex-col space-y-3 text-dimWhite">
                          <h2 className={`font-poppins font-bold text-[18px] leading-[27px] text-black`}>{footerlink.title}</h2>
                          {footerlink.links.map((link) => (
                              <li className='list-none cursor-pointer hover:text-blue-300'>{link.name}</li>
                          ))}
                      </div>
                  )) }
              </div>
          </div>
          <div className='flex md:flex-row my-3 justify-between'>
              <p className='text-black flex items-center'> Copyright © 2021 Zalya. All Rights Reserved.</p>
                      <div className='flex  ml-2 space-x-3'>
                            <SocialIcon url="https://www.linkedin.com/in/visakh-sr-6766b4142/" />
                            <SocialIcon url="https://www.facebook.com/rvishakhs" />
                            <SocialIcon url="https://www.instagram.com/visakhsr1996/" />
                            <SocialIcon url="https://github.com/rvishakhs" />
                      </div>
          </div>
      </section>
    )
  }

  export default Footer