const data = {
  experimentLibrary: [
    {
      id: 1,
      question: "Does napping boost your energy?",
      description: "Can you control whether you nap or not? If so,    let's see if you're more likely to feel sluggish or energized after a nap!",
      cause: "napping",
      effect: "energy level"
    },
    {
      id: 2,
      question: "Does meditation help you focus?",
      description: "You may have heard that meditation helps you focus and be more productive. Does it work for you?"

    },
    {
      id: 3,
      question: "Is sugar affecting your mood?",
      description: "Consuming different amounts of sugar may impact ,your energy levels. "
    },
    {
      id: 4,
      question: "Will taking more steps in a day alleviate chronic pain?",
      description: "Taking at least 10,000 steps a day helps some people reduce chronic pain levels."
    },
    {
      id: 5,
      question: "Is coffee wrecking your sleep?",
      description: "Drinking caffeine during the day can impact the quality of your sleep."
    }
  ],

  completedExperiments: [
    {
      id: 1,

    }
  ],

  currentExperiments: [
    {
      id: 1,
      condition1: "meditate",
      condition2: "don't meditate",
      rating1: '',
      rating2: '',
      rating3: '',
      rating4: '',
      rating5: '',

      data: [
        {
          date: '10-4-20',
          condition: 'meditate',
          metCondition: 'true',
          rating: 3
        },
        {
          date: '10-3-20',
          condition: 'meditate',
          metCondition: 'true',
          rating: 2
        },
        {
          date: '10-2-20',
          condition: "don't meditate",
          metCondition: 'true',
          rating: 1
        },
        {
          date: '10-1-20',
          condition: 'meditate',
          metCondition: 'true',
          rating: 5
        },
        {
          date: '9-30-20',
          condition: "don't meditate",
          metCondition: 'true',
          rating: 4
        },
        {
          date: '9-29-20',
          condition: 'meditate',
          metCondition: 'true',
          rating: 5
        }
      ]
    }
  ]

};


export default data;

