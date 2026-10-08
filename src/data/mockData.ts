/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MealItem, VenueItem, ActivityRecoveryPlan } from '../types.ts';

export const MEALS_DATA: MealItem[] = [
  {
    id: 'meal-salmon',
    name: 'Sous-vide Miso Salmon & Forbidden Rice',
    category: 'hiit',
    categoryLabel: 'Post-Strength Target',
    compound: 'Anabolic Recovery Compound',
    price: 12.50,
    priceNote: 'or Pass Tier',
    protein: 42,
    calories: 520,
    carbs: 48,
    lipids: 14,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUfDc30p8DYmt8Ct5QZdxN6X1E5HJZLE-IJFIaGOypuh-PGFeYm9jmHnnDBSxkU_Sy3wJHrJAoVHDC9VpeIRSse_j53LrP9-BlYXmKTp-pMfro5dfTY1gG6jJ6238mEK6OAfd3sjSRnlpagerTE02pLHRJrzf_BVpRbzLdaLdkB3LkZA2ZW5WscSjXa1YCTeywMxWi5LpXQWjM7V5g3ORzdNIW_De7-LJwejsOmn4',
    altText: 'Close-up gourmet overhead photography of glazed sous-vide miso salmon resting on nutrient-dense black forbidden rice with charred broccolini and pickled ginger',
    description: 'Atlantic salmon infused with white miso, paired with antioxidant-rich anthocyanin forbidden black rice, bok choy, and cold-pressed sesame amino glaze.',
    locationStock: 'In Stock @ Tampines Hub Kiosk',
    inStock: true,
    kioskId: 'tampines-01',
    nutriGrade: 'A'
  },
  {
    id: 'meal-chicken',
    name: 'Citrus Herb Grilled Chicken & Mash',
    category: 'endurance',
    categoryLabel: 'Endurance Replenishment',
    compound: 'Endurance Replenishment',
    price: 11.80,
    protein: 38,
    calories: 480,
    carbs: 52,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEST94oOXJpmpMDQK_DiG_MyEf208SALgPC6U5NcbzLMackC7dNRUsA-jJCHONxokikC8-K4EwPuze2yIfolUfa3hTYyq6KBS8VJxFJhYrG5C4N_AhF8hAE5QAtawMiaVfjVOSMpvGOtq3gbTsvHJfrVpkl3WNTlnoD7F0VMetdJis_g-UY76dJxiVWNIeqg-obthTeyrZLP3lA6GpIMVIZ8v9ZLpNwpqbFBi-6fA',
    altText: 'Top down photo of citrus rosemary grilled chicken breast thinly sliced over whipped Japanese sweet potato mash with steamed asparagus spears',
    description: 'Free-range chicken breast steeped in citrus herbs, served with slow-release beta-carotene sweet potato mash and blanched asparagus spears.',
    locationStock: 'In Stock @ Clementi Sports Hall',
    inStock: true,
    kioskId: 'clementi-04',
    hpbCertified: true,
    nutriGrade: 'A'
  },
  {
    id: 'meal-quinoa',
    name: 'Tempeh & Edamame Quinoa Bowl',
    category: 'plant',
    categoryLabel: '100% Plant-Based',
    compound: 'Microbiome & Glycemic Control',
    price: 10.90,
    protein: 28,
    calories: 440,
    carbs: 56,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgNH8vF_7FYUpbPtA4j8EMBILZiafffRjDy5LLkortCw3IoQ4pFP0nD7HsudOjjyUPuFtEht8aOMDoDLOoN8ITe37bT1Jq93iv781lRLQG2KgLvCCv56OcPNP-kQuZOf7oYDZArvsrggnuxe4weH7P0suKM99ikQipLugTcO7cN8Amfh_cKn5L2kbZMZ7Ej7AUo6oGUnBErOhVG8rrKrfVapc1bTNytYUWDFyyQ6w',
    altText: 'Overhead food photograph of golden pan-seared organic artisanal tempeh cubes, vibrant green edamame beans, colorful rainbow quinoa, avocado slices and tahini drizzle',
    description: 'Naturally fermented artisanal non-GMO tempeh, young green edamame, tri-color Peruvian quinoa, and prebiotic avocado sesame dressing.',
    locationStock: 'In Stock @ Kallang Sports Hub',
    inStock: true,
    kioskId: 'kallang-02',
    nutriGrade: 'A'
  },
  {
    id: 'meal-congee',
    name: 'Warm Bone Broth & Vitality Congee',
    category: 'senior',
    categoryLabel: 'Active Aging & Collagen Formula',
    compound: 'Gentle Absorption & Joint Health',
    price: 9.80,
    priceNote: 'Pioneer Pass: $8.50',
    protein: 26,
    calories: 360,
    carbs: 42,
    collagen: 12,
    gi: 48,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1QwkN5Y8w2x9H2Zysj8zRzBJYJJ0RnYSDD4yIGBdCcnDni3XMRf5XRow3z5vRCk7aHuDr_J3CXzuPyyPeRoN1cuJhOnn0eXcSTPFistO_42e92Y4Z0zvYYiWQ_n4yQmtXkqFFzRNlPYVzwBVdrZV8RYmzl6yf5SOxkPVAvDFiC80_QQgBThlabjHWh3oz6gG8zQaT6Slmk-CouvvoxIqgi7X0T81hFHpdfmQvQOQ',
    altText: 'Traditional yet modern artisanal Asian nourishing rice congee made from slow simmered collagen bone broth, tender shredded free-range chicken, wolfberries goji, sliced shiitake mushrooms',
    description: '12-hour slow-simmered organic chicken bone broth with pearl grains, high-bioavailability collagen peptide infusion, Ningxia wolfberries, and soft gingered cod flakes.',
    locationStock: 'In Stock @ Bishan Aquatic Centre',
    inStock: true,
    kioskId: 'bishan-01',
    nutriGrade: 'B'
  }
];

export const ACTIVITIES_DATA: Record<string, ActivityRecoveryPlan> = {
  badminton: {
    id: 'badminton',
    name: 'Badminton',
    emoji: '🏸',
    tag: 'Agility & Anaerobic Strain',
    burn: 'Avg. 540 kcal consumed',
    title: 'Sous-Vide Honey Glazed Chicken & Sweet Potato Mash',
    desc: 'High-glycemic unrefined sweet potato carbohydrates replenish liver glycogen quickly, balanced with 34g of lean bioavailable peptide protein for tissue repair.',
    protein: '34g',
    carbs: '48g',
    sodium: '410mg',
    temp: 'Warm 65°',
    kiosk: 'Kallang Sports Hub Pod #02',
    dist: '45m from Tennis & Badminton Hall',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPnW-pjJ0RmmP09sLSCrV1rQ5f6RGA1EB_jOqTVNUwMwYzMJmmNO-TbOY_hV16WmjL7BBX0rfBGrNMny8xhh9bk1Lrz_1SwLQs_w1bReS_jwpWT1B3XEK3JLhM0adikTz0G86KFWWS0EcB7WixfrF-Rb1_XymPovzWxbJpKT77sgQSx0fcjfhRyduhHAMoT2ROAsINVMRdgQvaglRpGrPNGbsqPcQVND8EBOxMT4A'
  },
  running: {
    id: 'running',
    name: 'Running (10K)',
    emoji: '🏃',
    tag: 'Endurance & Electrolyte Depletion',
    burn: 'Avg. 720 kcal consumed',
    title: 'Citrus Electrolyte Hydration + Smoked Tuna Quinoa Bowl',
    desc: 'Rich in bio-active sodium, magnesium, and slow-burning complex quinoa carbs designed to eliminate muscular cramping and rehydrate cellular volume.',
    protein: '38g',
    carbs: '62g',
    sodium: '680mg',
    temp: 'Chilled 4°',
    kiosk: 'Bedok Stadium Track Pod #01',
    dist: 'Adjacent to 400m Track Finish Line',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPnW-pjJ0RmmP09sLSCrV1rQ5f6RGA1EB_jOqTVNUwMwYzMJmmNO-TbOY_hV16WmjL7BBX0rfBGrNMny8xhh9bk1Lrz_1SwLQs_w1bReS_jwpWT1B3XEK3JLhM0adikTz0G86KFWWS0EcB7WixfrF-Rb1_XymPovzWxbJpKT77sgQSx0fcjfhRyduhHAMoT2ROAsINVMRdgQvaglRpGrPNGbsqPcQVND8EBOxMT4A'
  },
  gym: {
    id: 'gym',
    name: 'Heavy Gym Lifting',
    emoji: '🏋️',
    tag: 'Hypertrophy & Myofibrillar Strain',
    burn: 'Avg. 480 kcal consumed',
    title: 'Grass-Fed Beef Sirloin & Roasted Root Medley',
    desc: 'Loaded with naturally occurring creatine, iron, and 45g micro-filtered isolate-equivalent protein to kickstart immediate muscle protein synthesis.',
    protein: '45g',
    carbs: '30g',
    sodium: '320mg',
    temp: 'Warm 65°',
    kiosk: 'Jurong East ActiveSG Gym Hub #03',
    dist: 'Directly outside Free Weight Section',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPnW-pjJ0RmmP09sLSCrV1rQ5f6RGA1EB_jOqTVNUwMwYzMJmmNO-TbOY_hV16WmjL7BBX0rfBGrNMny8xhh9bk1Lrz_1SwLQs_w1bReS_jwpWT1B3XEK3JLhM0adikTz0G86KFWWS0EcB7WixfrF-Rb1_XymPovzWxbJpKT77sgQSx0fcjfhRyduhHAMoT2ROAsINVMRdgQvaglRpGrPNGbsqPcQVND8EBOxMT4A'
  },
  swimming: {
    id: 'swimming',
    name: 'Lap Swimming',
    emoji: '🏊',
    tag: 'Full Body Resistance & High Thermoregulation',
    burn: 'Avg. 610 kcal consumed',
    title: 'Teriyaki Norwegian Salmon & Brown Rice Pod',
    desc: 'Essential Omega-3 EPA/DHA fatty acids mitigate joint inflammation after high-resistance shoulder strokes, paired with sustained GI grains.',
    protein: '39g',
    carbs: '54g',
    sodium: '390mg',
    temp: 'Warm 65°',
    kiosk: 'Bishan Aquatic Centre Pod #01',
    dist: 'Level 1 Concourse Exit Turnstile',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPnW-pjJ0RmmP09sLSCrV1rQ5f6RGA1EB_jOqTVNUwMwYzMJmmNO-TbOY_hV16WmjL7BBX0rfBGrNMny8xhh9bk1Lrz_1SwLQs_w1bReS_jwpWT1B3XEK3JLhM0adikTz0G86KFWWS0EcB7WixfrF-Rb1_XymPovzWxbJpKT77sgQSx0fcjfhRyduhHAMoT2ROAsINVMRdgQvaglRpGrPNGbsqPcQVND8EBOxMT4A'
  }
};

export const VENUES_DATA: VenueItem[] = [
  {
    id: 'venue-clementi',
    name: 'Clementi Sports Complex',
    district: 'ActiveSG West District Hub',
    address: '518 Clementi Ave 3, Singapore 129907',
    mrt: '4 min from Clementi MRT',
    sports: ['Badminton', 'Gym', 'Swimming Pool', 'Table Tennis'],
    slotsLeft: 2,
    timeSlots: [
      { time: '18:00', available: false },
      { time: '19:00', available: false },
      { time: '20:00', available: true },
      { time: '21:00', available: true },
    ],
    dispenser: {
      id: 'dispenser-04',
      name: 'PulseNutri Smart Dispenser #04',
      status: '100% Stocked',
      items: [
        { name: 'Chilled Hypotonic', type: 'chilled', specs: 'Nutri-Grade A', price: 3.20 },
        { name: 'Warm Salmon Bento', type: 'warm', specs: '38g Protein', price: 8.90 }
      ]
    },
    coordinates: { x: 34, y: 46 }
  },
  {
    id: 'venue-bishan',
    name: 'Bishan Sports Hall & Aquatic',
    district: 'ActiveSG Central District Hub',
    address: '5 Bishan St 14, Singapore 579780',
    mrt: '6 min from Bishan MRT',
    sports: ['Badminton', 'Gymnastics', 'Swimming'],
    slotsLeft: 4,
    timeSlots: [
      { time: '18:00', available: false },
      { time: '19:00', available: true },
      { time: '20:00', available: true },
      { time: '21:00', available: false },
    ],
    dispenser: {
      id: 'dispenser-01',
      name: 'PulseNutri Smart Dispenser #01',
      status: '100% Stocked',
      items: [
        { name: 'Cold-Pressed Electrolyte', type: 'chilled', specs: 'Nutri-Grade A', price: 3.50 },
        { name: 'Warm Vitality Congee', type: 'warm', specs: '26g Bio-Protein', price: 9.80 }
      ]
    },
    coordinates: { x: 58, y: 32 }
  },
  {
    id: 'venue-jurong',
    name: 'Jurong East Sports Complex',
    district: 'ActiveSG West District Hub',
    address: '21 Jurong East St 31, Singapore 609517',
    mrt: 'Chinese Garden MRT',
    sports: ['Badminton', 'Gym', 'Wave Pool', 'Fitness Studio'],
    slotsLeft: 1,
    timeSlots: [
      { time: '18:00', available: false },
      { time: '19:00', available: false },
      { time: '20:00', available: false },
      { time: '21:00', available: true },
    ],
    dispenser: {
      id: 'dispenser-03',
      name: 'PulseNutri Smart Dispenser #03',
      status: '100% Stocked',
      items: [
        { name: 'Grass-Fed Sirloin Pod', type: 'warm', specs: '45g Protein', price: 13.50 },
        { name: 'Magnesium Hydration Drink', type: 'chilled', specs: 'Nutri-Grade A', price: 3.00 }
      ]
    },
    coordinates: { x: 22, y: 52 }
  },
  {
    id: 'venue-kallang',
    name: 'Kallang Sports Hub & Tennis Centre',
    district: 'ActiveSG Central East Hub',
    address: '8 Stadium Blvd, Singapore 397799',
    mrt: 'Stadium MRT',
    sports: ['Tennis', 'Badminton', 'Track', 'Squash'],
    slotsLeft: 3,
    timeSlots: [
      { time: '18:00', available: true },
      { time: '19:00', available: false },
      { time: '20:00', available: true },
      { time: '21:00', available: true },
    ],
    dispenser: {
      id: 'dispenser-02',
      name: 'PulseNutri Smart Dispenser #02',
      status: '100% Stocked',
      items: [
        { name: 'Sous-Vide Chicken Mash', type: 'warm', specs: '34g Protein', price: 11.50 },
        { name: 'Isotonic Recovery Spritz', type: 'chilled', specs: 'Nutri-Grade A', price: 3.20 }
      ]
    },
    coordinates: { x: 72, y: 58 }
  }
];
