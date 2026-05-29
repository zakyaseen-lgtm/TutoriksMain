window.TUTORIKS = {
  name: 'Tutoriks',
  whatsapp: '923322201628',
  phone: '+923322201628',
  phoneDisplay: '+92 332 2201628',
  address: 'Office 12, 2nd Floor, Plot 44-C, Khayaban-e-Shamsheer, Phase 5, DHA, Karachi',
  gmbUrl: 'https://g.page/r/tutoriks-placeholder',
  siteUrl: 'https://tutoriks.pk',
  trialSessionPkr: 2500,
  trialIsFree: false,
  showUrgency: false,
  urgencyText: 'Currently accepting O Level Physics students for September 2026',
  waHome:
    "Hi, I'm interested in O/A Level tutoring for my child — home (DHA or Clifton) or online.",

  faq: [
    {
      q: 'Do you teach matric or FSc students?',
      a: 'No. We work exclusively with IGCSE, GCSE and CAIE O/A Level students.'
    },
    {
      q: 'Can we try before committing to a month?',
      a: null // filled by getFaqAnswer in main.js
    },
    {
      q: "What if we're not satisfied with the tutor?",
      a: 'We replace the tutor. No questions, no delay.'
    },
    {
      q: 'Do sessions happen at our home?',
      a: 'Yes. Home visits are available in DHA and Clifton. Online sessions are also available for students anywhere.'
    },
    {
      q: 'What if my child misses a session?',
      a: 'Sessions can be rescheduled with 24 hours notice.'
    }
  ],

  tutors: [
    {
      id: 'hassan',
      name: 'Hassan T.',      qualification: 'BSc Physics, NUST',
      experience: '4 years CAIE — O Level Physics',
      subjects: ['O Level Physics']
    },
    {
      id: 'ahmad',
      name: 'Ahmad R.',      qualification: 'MSc Physics, LUMS',
      experience: '6 years CAIE — O & A Level',
      subjects: ['O Level Physics', 'A Level Physics']
    },
    {
      id: 'zainab',
      name: 'Zainab A.',      qualification: 'MSc Chemistry, KU',
      experience: '3 years CAIE — A Level Chemistry',
      subjects: ['A Level Chemistry']
    },
    {
      id: 'sara',
      name: 'Sara K.',      qualification: 'BSc Chemistry (Hons), KU',
      experience: '5 years CAIE — A Level expert',
      subjects: ['A Level Chemistry', 'O Level Chemistry']
    },
    {
      id: 'omar',
      name: 'Omar H.',      qualification: 'BSc Mathematics, IBA',
      experience: '7 years CAIE — past paper focus',
      subjects: ['O Level Maths', 'A Level Maths']
    },
    {
      id: 'fatima',
      name: 'Fatima M.',      qualification: 'BSc Computer Science, FAST',
      experience: '4 years CAIE — CS & ICT',
      subjects: ['A Level Computer Science', 'O Level ICT']
    }
  ],

  homeTestimonials: [
    {
      name: 'Nadia',
      area: 'DHA Phase 6',
      subject: 'O/A Level Physics',
      quote:
        'Our son went from a D to a strong B in one term. The tutor knew the CAIE mark scheme inside out.'
    },
    {
      name: 'Kamran',
      area: 'Clifton',
      subject: 'O/A Level Chemistry',
      quote:
        'Finally someone who could explain organic mechanisms properly. Past paper practice made the difference.'
    },
    {
      name: 'Ayesha',
      area: 'Clifton',
      subject: 'O/A Level Maths',
      quote:
        'Structured lessons at home, no wasted time. We saw improvement within the first month.'
    },
    {
      name: 'Bilal',
      area: 'DHA Phase 5',
      subject: 'O/A Level CS',
      quote:
        'The tutor aligned with the school scheme of work. Paper 3 programming prep was excellent.'
    },
    {
      name: 'Hina',
      area: 'DHA Phase 8',
      subject: 'O/A Level Physics',
      quote:
        'Professional, punctual, and honest feedback after every session. Highly recommend Tutoriks.'
    }
  ],

  landingPages: {
    'physics': {
      kicker: 'CAIE · IGCSE · GCSE',
      h1: 'O/A Level Physics Tutor',
      subheading:
        'Concept clarity, exam technique, and calm home support for families.',
      area: 'DHA & Clifton',
      subject: 'O/A Level Physics',
      level: 'O Level',
      cta: 'Talk to a Tutor',
      formTitle: 'Match me with a Physics tutor',
      formCta: 'Match',
      bullets: ['CAIE', 'IGCSE', 'GCSE'],
      matchTitle: 'A Physics tutor selected with intent',
      matchCopy:
        'We match by syllabus fit, weak chapters, school pace, and exam timeline, so your child gets a tutor who can diagnose the real reason marks are being lost.',
      signals: [
        'Chapter-level diagnosis before the first plan',
        'Formula use tied to examiner keywords',
        'Timed question practice once concepts settle'
      ],
      methodTitle: 'Turn formulas into marks',
      methodIntro:
        'O Level Physics improves fastest when ideas, calculations, and mark schemes are trained together.',
      method: [
        {
          title: 'Model the concept',
          copy: 'The tutor builds visual intuition first, so students stop memorising formulas blindly.'
        },
        {
          title: 'Translate to CAIE',
          copy: 'Every topic is connected to command words, units, diagrams, and examiner expectations.'
        },
        {
          title: 'Stress-test the paper',
          copy: 'Timed questions expose weak spots early, then lessons loop back with targeted repair.'
        }
      ],
      footerTitle: 'Start with the right Physics tutor',
      footerCopy:
        'Tell us the school, exam session, and weakest topics. We will suggest the right tutor profile.',
      tutorIds: ['ahmad', 'hassan'],
      waPrefill:
        "Hi, I'm looking for an O/A Level Physics tutor in DHA for my child.",
      testimonials: [
        {
          name: 'Nadia',
          area: 'DHA Phase 6',
          subject: 'O/A Level Physics',
          quote:
            'Electricity and waves were weak areas — six weeks of focused past papers and he scored a B.'
        },
        {
          name: 'Hassan',
          area: 'DHA Phase 5',
          subject: 'O/A Level Physics',
          quote:
            'The tutor came to our home twice a week. Clear explanations and real CAIE question practice.'
        },
        {
          name: 'Sana',
          area: 'DHA Phase 8',
          subject: 'O/A Level Physics',
          quote:
            'We tried two agencies before Tutoriks. This was the first tutor who actually knew the syllabus.'
        }
      ]
    },
    'chemistry': {
      kicker: 'CAIE · IGCSE · GCSE',
      h1: 'O/A Level Chemistry Tutor',
      subheading:
        'Organic, physical, and inorganic Chemistry taught with CAIE precision.',
      area: 'DHA & Clifton',
      subject: 'O/A Level Chemistry',
      level: 'A Level',
      cta: 'Talk to a Tutor',
      formTitle: 'Match me with a Chemistry tutor',
      formCta: 'Match',
      bullets: ['CAIE', 'IGCSE', 'GCSE'],
      matchTitle: 'Chemistry needs an expert eye',
      matchCopy:
        'A Level Chemistry is unforgiving. We match students with tutors who can see whether the issue is memory, mechanism logic, calculation setup, or paper timing.',
      signals: [
        'Organic mechanisms drawn until they become fluent',
        'Moles, equilibria and kinetics drilled with structure',
        'Definitions and explanations trained for CAIE wording'
      ],
      methodTitle: 'Make Chemistry feel engineered',
      methodIntro:
        'The strongest students are not guessing. They know what the examiner is rewarding and why.',
      method: [
        {
          title: 'Map the paper',
          copy: 'We identify high-yield weak areas across Paper 1, 2, 4, and practical-style questions.'
        },
        {
          title: 'Build mechanisms',
          copy: 'Organic Chemistry is taught as a logic system, not a set of disconnected reactions.'
        },
        {
          title: 'Mark hard',
          copy: 'Answers are checked against CAIE wording so students learn where marks disappear.'
        }
      ],
      footerTitle: 'Start with the right Chemistry tutor',
      footerCopy:
        'Tell us the syllabus stage, latest grade, and weakest topics. We will match the right expert.',
      tutorIds: ['sara', 'zainab'],
      waPrefill:
        "Hi, I'm looking for an O/A Level Chemistry tutor in DHA for my child.",
      testimonials: [
        {
          name: 'Kamran',
          area: 'DHA Phase 6',
          subject: 'O/A Level Chemistry',
          quote:
            'Organic chemistry went from her weakest paper to her strongest in one term.'
        },
        {
          name: 'Mehwish',
          area: 'DHA Phase 4',
          subject: 'O/A Level Chemistry',
          quote:
            'Past paper marking was strict but fair — exactly what CAIE examiners expect.'
        },
        {
          name: 'Adil',
          area: 'DHA Phase 7',
          subject: 'O/A Level Chemistry',
          quote:
            'Home tutoring saved us hours of travel. Tutor was always on time.'
        }
      ]
    },
    'mathematics': {
      kicker: 'CAIE · IGCSE · GCSE',
      h1: 'O/A Level Maths Tutor',
      subheading:
        'Clear methods, exam practice, and confidence without the panic.',
      area: 'DHA & Clifton',
      subject: 'O/A Level Maths',
      level: 'O Level',
      cta: 'Talk to a Tutor',
      formTitle: 'Match me with a Maths tutor',
      formCta: 'Match',
      bullets: ['CAIE', 'IGCSE', 'GCSE'],
      matchTitle: 'Maths improves when the pattern is visible',
      matchCopy:
        'We identify whether the student struggles with basics, question interpretation, speed, or exam pressure, then match the right tutor.',
      signals: [
        'Topic-by-topic weakness map',
        'Exam-style practice from week one',
        'Clear homework instead of random worksheets'
      ],
      methodTitle: 'Make Maths feel repeatable',
      methodIntro:
        'The aim is a calm method students can reproduce in the exam hall.',
      method: [
        {
          title: 'Repair foundations',
          copy: 'We fix the algebra and number skills that quietly affect every later topic.'
        },
        {
          title: 'Teach patterns',
          copy: 'Students learn how CAIE question types are built, so papers feel familiar.'
        },
        {
          title: 'Build speed',
          copy: 'Timed practice gradually improves accuracy without overwhelming the student.'
        }
      ],
      footerTitle: 'Start with the right Maths tutor',
      footerCopy:
        'Tell us the current grade and hardest topics. We will suggest the right Maths expert.',
      tutorIds: ['omar', 'ahmad'],
      waPrefill:
        "Hi, I'm looking for an O/A Level Maths tutor in DHA or Clifton for my child.",
      testimonials: [
        {
          name: 'Ayesha',
          area: 'Clifton',
          subject: 'O/A Level Maths',
          quote:
            'Algebra and graphs were a struggle — structured weekly practice fixed it.'
        },
        {
          name: 'Danish',
          area: 'DHA',
          subject: 'O/A Level Maths',
          quote:
            'Past paper method from week one. Scored A in May/June series.'
        },
        {
          name: 'Maryam',
          area: 'Clifton',
          subject: 'O/A Level Maths',
          quote:
            'Patient tutor, clear homework, and real exam-style questions every session.'
        }
      ]
    },
    'cs': {
      kicker: 'CAIE · IGCSE · GCSE',
      h1: 'O/A Level Computer Science Tutor',
      subheading:
        '9618 theory, algorithms, and coding support with a clean plan.',
      area: 'DHA & Clifton',
      subject: 'O/A Level Computer Science',
      level: 'A Level',
      cta: 'Talk to a Tutor',
      formTitle: 'Match me with a CS tutor',
      formCta: 'Match',
      bullets: ['CAIE', 'IGCSE', 'GCSE'],
      matchTitle: 'CS needs both teaching and technical judgement',
      matchCopy:
        'We match students with tutors who understand the syllabus and can actually debug the thinking behind weak code or weak theory answers.',
      signals: [
        'Theory answers trained for mark schemes',
        'Pseudocode broken into repeatable patterns',
        'Programming practice tied to Paper 3 expectations'
      ],
      methodTitle: 'Turn CS into a system',
      methodIntro:
        'Computer Science becomes easier when theory, algorithms, and coding practice support each other.',
      method: [
        {
          title: 'Structure theory',
          copy: 'Students learn concise, mark-ready explanations instead of long unfocused notes.'
        },
        {
          title: 'Trace algorithms',
          copy: 'Dry runs, pseudocode patterns, and data structures are practised until they feel predictable.'
        },
        {
          title: 'Code with intent',
          copy: 'Programming sessions focus on readable logic, debugging habits, and exam-style tasks.'
        }
      ],
      footerTitle: 'Start with the right CS tutor',
      footerCopy:
        'Share the paper, language, and weak topics. We will recommend the right tutor profile.',
      tutorIds: ['fatima'],
      waPrefill:
        "Hi, I'm looking for an O/A Level Computer Science tutor in DHA or Clifton for my child.",
      testimonials: [
        {
          name: 'Bilal',
          area: 'DHA Phase 5',
          subject: 'O/A Level CS',
          quote:
            'Paper 3 programming prep was excellent — pseudocode and Python both covered well.'
        },
        {
          name: 'Saima',
          area: 'Clifton',
          subject: 'O/A Level CS',
          quote:
            'Theory topics were broken down clearly. Mock grades went from C to A.'
        },
        {
          name: 'Usman',
          area: 'Clifton',
          subject: 'O/A Level CS',
          quote:
            'Tutor understood the 9618 syllabus updates. Highly recommended for CAIE CS.'
        }
      ]
    }
  }
};
