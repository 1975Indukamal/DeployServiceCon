
"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";

// const team = [
//   {
//     name: "Alexander Chen",
//     role: "CEO & Founder",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Alex",
//     linkedin: "https://linkedin.com/in/alex",
//     instagram: "https://instagram.com/alex"
//   },
//   {
//     name: "Sarah Mitchell",
//     role: "Creative Director",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sarah",
//     linkedin: "https://linkedin.com/in/sarah",
//     instagram: "https://instagram.com/sarah"
//   },
//   {
//     name: "Marcus Johnson",
//     role: "Lead Developer",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Marcus",
//     linkedin: "https://linkedin.com/in/marcus",
//     instagram: "https://instagram.com/marcus"
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "UX Designer",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Emily",
//     linkedin: "https://linkedin.com/in/emily",
//     instagram: "https://instagram.com/emily"
//   },
//   {
//     name: "David Kim",
//     role: "Product Manager",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=David",
//     linkedin: "https://linkedin.com/in/david",
//     instagram: "https://instagram.com/david"
//   },
//   {
//     name: "Priya Sharma",
//     role: "UI Engineer",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Priya",
//     linkedin: "https://linkedin.com/in/priya",
//     instagram: "https://instagram.com/priya"
//   },
//   {
//     name: "Mohammed Ali",
//     role: "Backend Architect",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Mohammed",
//     linkedin: "https://linkedin.com/in/mohammed",
//     instagram: "https://instagram.com/mohammed"
//   },
//   {
//     name: "Julia Thompson",
//     role: "Content Strategist",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Julia",
//     linkedin: "https://linkedin.com/in/julia",
//     instagram: "https://instagram.com/julia"
//   },
//   {
//     name: "Carlos Rivera",
//     role: "Motion Designer",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Carlos",
//     linkedin: "https://linkedin.com/in/carlos",
//     instagram: "https://instagram.com/carlos"
//   },
//   {
//     name: "Anika Patel",
//     role: "QA Analyst",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Anika",
//     linkedin: "https://linkedin.com/in/anika",
//     instagram: "https://instagram.com/anika"
//   },
//   {
//     name: "Liam Baker",
//     role: "Marketing Lead",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Liam",
//     linkedin: "https://linkedin.com/in/liam",
//     instagram: "https://instagram.com/liam"
//   },
//   {
//     name: "Chen Wei",
//     role: "Data Analyst",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Chen",
//     linkedin: "https://linkedin.com/in/chen",
//     instagram: "https://instagram.com/chen"
//   },
// ];


const team = [
  {
    name: "Punam Zagade",
    role: "CEO & Founder",
        image: "https://api.dicebear.com/7.x/adventurer/svg?seed=PriyaS&mood=fun",
    linkedin: "#",
    instagram: "#"
  },
  {
    name: "Abhishek Pandey",
    role: "Creative Director",
       image: "https://api.dicebear.com/7.x/adventurer/svg?seed=JuliaT&mood=happy",
    linkedin: "#",
    instagram: "#"
  },
  {
    name: "Anubhav Shrivastava",
    role: "DevOps Lead Engineer",
image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ava&mood=happy",
    linkedin: "#",
    instagram: "#"
  },
  {
    name: "Kushal singh",
    role: "UI/UX Designer",
        image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Jacob&mood=happy",

    linkedin: "#",
    instagram: "#"
  },
      {
    name: "Ajay Prajapati",
    role: "Wordpress Developer",
 image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Zara&mood=happy",
    linkedin: "https://linkedin.com/in/isabella-rivera",
    instagram: "https://instagram.com/isabella.codes"
  },
  {
    name: "Akshar Rastogi",
    role: "Python Developer",
        image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Hannah&gender=female&mood=happy",

    linkedin: "#",
    instagram: "#"
  },

      {
    name: "Riya Shrivastava",
    role: "Laravel Developer",
        image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Isabella&mood=happy&gender=female",
        
    linkedin: "#",
    instagram: "#"
  },
    {
    name: "Anand Thakur",
    role: "MERN Developer",
        image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Noah&mood=happy",
   
    linkedin: "#",
    instagram: "#"
  },

  {
    name: "Naveen Kumar",
    role: "Flutter Developer",
        image: "https://api.dicebear.com/7.x/adventurer/svg?seed=EmilyR&mood=happy",
 
    linkedin: "#",
    instagram: "#"
  },

  

  {
    name: "Abhishek Kumar",
    role: "React-native Developer",

     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=MohammedA&mood=happy",
    linkedin: "#",
    instagram: "#"
  },


//   {
//     name: "Sophia Bennett",
//     role: "UX Designer",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sophia&mood=happy&gender=female",
//     linkedin: "https://linkedin.com/in/sophia-bennett",
//     instagram: "https://instagram.com/sophia.designs"
//   },
//   {
//     name: "Amelia Hughes",
//     role: "Product Manager",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Amelia&mood=happy&gender=female",
//     linkedin: "https://linkedin.com/in/amelia-hughes",
//     instagram: "https://instagram.com/amelia.pm"
//   },
//   {
//     name: "Harper Collins",
//     role: "Content Creator",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Harper&mood=happy&gender=female",
//     linkedin: "https://linkedin.com/in/harper-collins",
//     instagram: "https://instagram.com/harper.creates"
//   },
//   {
//     name: "Maya Thompson",
//     role: "Social Media Lead",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Maya&mood=happy&gender=female",
//     linkedin: "https://linkedin.com/in/maya-thompson",
//     instagram: "https://instagram.com/maya.social"
//   },
//   {
//     name: "Chloe Parker",
//     role: "Illustrator",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Chloe&mood=happy&gender=female",
//     linkedin: "https://linkedin.com/in/chloe-parker",
//     instagram: "https://instagram.com/chloe.illustrates"
//   },
//   {
//     name: "Lily Morgan",
//     role: "Marketing Specialist",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Lily&mood=happy&gender=female",
//     linkedin: "https://linkedin.com/in/lily-morgan",
//     instagram: "https://instagram.com/lily.markets"
//   },
//   {
//     name: "Ella Foster",
//     role: "QA Analyst",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ella&mood=happy&gender=female",
//     linkedin: "https://linkedin.com/in/ella-foster",
//     instagram: "https://instagram.com/ella.qa"
//   },
//   {
//     name: "Aria Brooks",
//     role: "Motion Designer",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Aria&mood=happy&gender=female",
//     linkedin: "https://linkedin.com/in/aria-brooks",
//     instagram: "https://instagram.com/aria.motion"
//   },
//   {
//     name: "Grace Edwards",
//     role: "Data Analyst",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Grace&mood=happy&gender=female",
//     linkedin: "https://linkedin.com/in/grace-edwards",
//     instagram: "https://instagram.com/grace.data"
//   },
//   {
//     name: "Anika Patel",
//     role: "QA Analyst",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=AnikaP&mood=serious",
//     linkedin: "#",
//     instagram: "#"
//   },
//   {
//     name: "Liam Baker",
//     role: "Marketing Lead",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=LiamB&mood=happy",
//     linkedin: "#",
//     instagram: "#"
//   },
//   {
//     name: "Chen Wei",
//     role: "Data Analyst",
//     image: "https://api.dicebear.com/7.x/adventurer/svg?seed=ChenW&mood=fun",
//     linkedin: "#",
//     instagram: "#"
//   },

  // {
  //   name: "Liam Carter",
  //   role: "AI Researcher",
  //   image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Liam&mood=happy",
  //   linkedin: "https://linkedin.com/in/liam-carter",
  //   instagram: "https://instagram.com/liam.ai"
  // },
  // {
  //   name: "Ava Thompson",
  //   role: "Brand Strategist",
  //   image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ava&mood=happy",
  //   linkedin: "https://linkedin.com/in/ava-strategy",
  //   instagram: "https://instagram.com/ava.designs"
  // },
  // {
  //   name: "Noah Williams",
  //   role: "Mobile App Engineer",
  //   image: "https://api.dicebear.com/7.x/adventurer/svg?seed=MarcusJ&mood=fun",
  //   linkedin: "https://linkedin.com/in/noah-williams",
  //   instagram: "https://instagram.com/noah.codes"
  // },
  // {
  //   name: "Sofia Martinez",
  //   role: "Social Media Lead",
  //   image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sofia&mood=happy",
  //   linkedin: "https://linkedin.com/in/sofia-marketing",
  //   instagram: "https://instagram.com/sofia.media"
  // },
  // {
  //   name: "David Kim",
  //   role: "VR/AR Specialist",
  //   image: "https://api.dicebear.com/7.x/adventurer/svg?seed=David&gender=male&mood=happy",
  //   linkedin: "https://linkedin.com/in/david-kim",
  //   instagram: "https://instagram.com/david.xr"
  // },
  // {
  //   name: "Hannah Lee",
  //   role: "Illustrator",
  //        image: "https://api.dicebear.com/7.x/adventurer/svg?seed=SarahM&mood=laughing",
  //   linkedin: "https://linkedin.com/in/hannah-lee",
  //   instagram: "https://instagram.com/hannah.draws"
  // },
  // {
  //   name: "Ethan Brooks",
  //   role: "UX Researcher",
  //   image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ethan&mood=happy",
  //   linkedin: "https://linkedin.com/in/ethan-brooks",
  //   instagram: "https://instagram.com/ethan.ux"
  // },
  // {
  //   name: "Chloe Adams",
  //   role: "Product Owner",
  //   image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Chloe&mood=happy",
  //   linkedin: "https://linkedin.com/in/chloe-adams",
  //   instagram: "https://instagram.com/chloe.po"
  // },
  // {
  //   name: "Olivia Park",
  //   role: "Frontend Developer",
  //   image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Olivia&mood=happy",
  //   linkedin: "https://linkedin.com/in/olivia-park",
  //   instagram: "https://instagram.com/olivia.codes"
  // },
  // {
  //   name: "Jacob Rivera",
  //   role: "Backend Architect",
  //  image: "https://api.dicebear.com/7.x/adventurer/svg?seed=DavidK&mood=happy",
  //   linkedin: "https://linkedin.com/in/jacob-rivera",
  //   instagram: "https://instagram.com/jacob.backend"
  // },
  // {
  //   name: "Mia Patel",
  //   role: "Marketing Strategist",
  //   image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Mia&mood=happy",
  //   linkedin: "https://linkedin.com/in/mia-patel",
  //   instagram: "https://instagram.com/mia.markets"
  // },
  // {
  //   name: "Connor Hughes",
  //   role: "DevOps Engineer",
  //   image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Connor&mood=happy",
  //   linkedin: "https://linkedin.com/in/connor-hughes",
  //   instagram: "https://instagram.com/connor.ops"
  // },
  // {
  //   name: "Zara Knight",
  //   role: "Content Producer",
  //  image: "https://api.dicebear.com/7.x/adventurer/svg?seed=CarlosR&mood=happy",
  //   linkedin: "https://linkedin.com/in/zara-knight",
  //   instagram: "https://instagram.com/zara.creates"
  // },
  // {
  //   name: "Ryan Torres",
  //   role: "Product Researcher",
  //   image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ryan&mood=happy",
  //   linkedin: "https://linkedin.com/in/ryan-torres",
  //   instagram: "https://instagram.com/ryan.research"
  // },
  // {
  //   name: "Natalie Reed",
  //   role: "Motion Designer",
  //   image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Natalie&mood=happy",
  //   linkedin: "https://linkedin.com/in/natalie-reed",
  //   instagram: "https://instagram.com/natalie.motion"
  // },
  // {
  //   name: "Leo Fischer",
  //   role: "Data Analyst",
  //   image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Leo&mood=happy",
  //   linkedin: "https://linkedin.com/in/leo-fischer",
  //   instagram: "https://instagram.com/leo.data"
  // }
];






export const TeamSection = () => {
  return (
    <section className="section-padding bg-card py-16">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Team</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-3 text-body">
            Meet the <span className="gradient-text text-primary">Experts</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Passionate professionals turning ideas into reality.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 custom-scrollbar"
          style={{ scrollbarWidth: "thin" }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[260px] bg-card border rounded-xl shadow-sm p-5 flex flex-col items-center justify-center"
            >
              <div className="w-full h-56 flex items-center justify-center bg-secondary/20 rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full object-contain"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-body">{member.name}</h3>
                <p className="text-primary text-sm font-medium">{member.role}</p>

                {/* <div className="flex gap-3 justify-center mt-3">
                  <a href={member.linkedin} target="_blank">
                    <Linkedin className="w-5 h-5 opacity-80 hover:opacity-100 transition" />
                  </a>
                  <a href={member.instagram} target="_blank">
                    <Instagram className="w-5 h-5 opacity-80 hover:opacity-100 transition" />
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
