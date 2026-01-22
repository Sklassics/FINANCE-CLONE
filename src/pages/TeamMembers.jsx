import React, { useState } from "react";

const teamMembers = [
  {
    name: "Mitchell Thompson",
    role: "Partner",
    image: "https://mitchelladam.co.uk/wp-content/uploads/2024/03/processed-33610AC4-B771-483E-8C0E-578E5D06829D-1537x2048.jpeg",
    bio: {
      expertise:
        "All things recruitment. I have lived and breathed this industry for over 10 years, with the mission to improve it for everyone I encounter. It’s this passion that led me to start Mitchell Adam.",
      power:
        "Seeing the best in people. We are all wonderfully different and I always try to understand each person’s strengths, motivations and values to help them become their best version.",
      idol:
        "Paul Gascoigne. A genius on the pitch who made me fall in love with football. Charismatic, funny, flawed, and brilliant. A true Geordie legend.",
    },
  },
  {
    name: "Adam Butler",
    role: "Partner",
    image: "https://mitchelladam.co.uk/wp-content/uploads/2024/03/processed-9AE00528-50FB-4A7F-BC0F-FE1A15157A7B-768x1024.jpeg",
    bio: {
      expertise:
        "Over the (many, many) years I’ve covered all the bases of financial recruitment, from transactional to exec search. There are few problems I haven’t solved.",
      power:
        "Solutions! Whether it’s a tricky mandate or making sure the team are fully supported, I’ll find a way.",
      idol:
        "Frank Skinner – for me Birmingham’s greatest export. He’s witty, charming and intelligent, and I love his mix of working-class humour and well-read insight.",
    },
  },
  {
    name: "Ron Adjei",
    role: "Branch Manager",
    image: "https://mitchelladam.co.uk/wp-content/uploads/2024/03/processed-EAB562E2-80C6-4917-AD08-10E0F5D6C01B-768x1023.jpeg",
    bio: {
      expertise:
        "Property Finance. Having come from a background of accounting and finance, I know exactly what hiring managers and candidates are looking for.",
      power:
        "The art of patience. They say patience is a virtue, and recruitment is full of ups and downs – it’s a skill to be calm under pressure.",
      idol:
        "Roberto Carlos. The only thing we probably share is a birthday – but when I saw that free-kick, I believed anything was possible.",
    },
  },
  {
    name: "Kyran O’Sullivan",
    role: "Senior Consultant",
    image: "https://mitchelladam.co.uk/wp-content/uploads/2024/03/processed-756A9640-101E-4BB7-BCFC-66AF35B61536-768x1024.jpeg",
    bio: {
      expertise:
        "Part Qualified recruitment. I work with both active and passive candidates, helping them secure career-defining roles.",
      power:
        "Always being honest. Candidates and clients come back to me because I don’t waste their time or sell them false promises.",
      idol:
        "Ricky Gervais. A creative genius and someone who’s created brilliant shows while also giving back to charity.",
    },
  },
  {
    name: "Nicola Payne",
    role: "Principal Consultant",
    image: "https://mitchelladam.co.uk/wp-content/uploads/2024/03/processed-C883F691-7BE5-4505-84AE-AAEEAD2DE849-768x1023.jpeg",
    bio: {
      expertise:
        "Executive Search and Leadership roles. I help businesses find the leaders that take them to the next level.",
      power:
        "Attention to detail – I leave no stone unturned when searching for the perfect match.",
      idol:
        "Princess Diana. She had grace, compassion, and a powerful voice for the vulnerable. A real inspiration.",
    },
  },
  {
    name: "Katie Aldridge",
    role: "Consultant",
    image: "https://mitchelladam.co.uk/wp-content/uploads/2024/03/processed-369234DE-B27C-48BC-A35D-C0CA90D482B3-768x1023.jpeg",
    bio: {
      expertise:
        "Recruiting for assistant accountants and transactional finance professionals. I love matching candidates with companies where they’ll thrive.",
      power:
        "Listening. Truly understanding what someone wants is the key to making a great match.",
      idol:
        "My mom – she taught me resilience, hard work and to always stay grounded.",
    },
  },
  {
    name: "Tom Smith",
    role: "Consultant",
    image: "https://mitchelladam.co.uk/wp-content/uploads/2024/03/processed-29BF3ED8-C44E-4B8C-AA4D-B3561CD3CEC3-1537x2048.jpeg",
    bio: {
      expertise:
        "Newly Qualified finance roles. I work closely with candidates making their first move out of practice.",
      power:
        "Building relationships – people trust me with their careers, and I take that seriously.",
      idol:
        "Jonny Wilkinson – a legend in rugby who showed what focus and discipline can achieve.",
    },
  },
  {
    name: "Abbie Hall",
    role: "Consultant",
    image: "https://mitchelladam.co.uk/wp-content/uploads/2024/03/original-716DBE1A-CF35-4FBE-B8F2-4098A2570DF3-768x1023.jpeg",
    bio: {
      expertise:
        "Supporting the recruitment of finance professionals across the Midlands. I make sure the process is smooth for everyone.",
      power:
        "Organisation – whether it’s managing multiple processes or keeping track of client needs, I’ve got it covered.",
      idol:
        "Michelle Obama – she’s intelligent, graceful, and uses her platform to empower others.",
    },
  },
  {
    name: "Philippa Chambers",
    role: "Marketing Manager",
    image: "https://mitchelladam.co.uk/wp-content/uploads/2024/10/Maria-Hames-scaled-e1727947001341-768x832.jpg",
    bio: {
      expertise:
        "All things marketing. From social media to events, I help the Mitchell Adam brand reach the right people.",
      power:
        "Creativity – I love turning ideas into campaigns that connect with people.",
      idol:
        "David Attenborough – a true storyteller who inspires us to care for our planet.",
    },
  },
  {
    name: "David Atkinson",
    role: "Office Manager",
    image: "https://mitchelladam.co.uk/wp-content/uploads/2024/03/processed-7C3A02A1-8DF7-4C21-B117-47AF7EBD7525-1-e1709299985512-768x809.jpeg",
    bio: {
      expertise:
        "Keeping everything running behind the scenes. From facilities to systems, I make sure the team have what they need.",
      power:
        "Problem solving – if something breaks, I fix it. Simple.",
      idol:
        "Steve Jobs – his innovation changed the world and how we work today.",
    },
  },
  {
    name: "Rosie Green",
    role: "Operations Coordinator",
    image: "https://mitchelladam.co.uk/wp-content/uploads/2025/03/Kesia-1-1536x1416.jpg",
    bio: {
      expertise:
        "Making sure operations run smoothly, supporting everything from onboarding to compliance.",
      power:
        "Efficiency – I love a good spreadsheet and making processes better.",
      idol:
        "Serena Williams – powerful, focused and an icon of resilience.",
    },
  },
];

const TeamSection = () => {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-2">
        Meet the Team<span className="text-yellow-400">.</span>
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
        We bring a wealth of skills and experience from a wide range of backgrounds.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl  p-6 text-center"
          >
            {index === 0 && (
              <div className="absolute top-3 left-3 w-12 h-12 bg-yellow-300 rounded-full -z-10"></div>
            )}
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover mx-auto rounded-md mb-4"
            />
            <h3 className="text-lg font-bold">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{member.role}</p>
            <button
              onClick={() => toggle(index)}
              className="text-sm font-bold flex items-center justify-center gap-2 text-black"
            >
              VIEW BIOGRAPHY
              <span className="bg-yellow-400 w-6 h-6 flex items-center justify-center rounded-full text-black">
                {open === index ? "-" : "+"}
              </span>
            </button>

            {open === index && (
              <div className="mt-6 text-left text-sm space-y-4 text-gray-700">
                <div>
                  <strong>My area of expertise is...</strong>
                  <p className="italic">{member.bio.expertise}</p>
                </div>
                <div>
                  <strong>My recruitment special power is...</strong>
                  <p className="italic">{member.bio.power}</p>
                </div>
                <div>
                  <strong>My idol is...</strong>
                  <p className="italic">{member.bio.idol}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
