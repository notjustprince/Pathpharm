import { storage } from "./storage";

export async function seedData() {
  // Check if data already exists
  const existingCategories = await storage.getAllCategories();
  if (existingCategories.length > 0) {
    console.log("Data already seeded, skipping...");
    return;
  }

  console.log("Seeding database...");

  // Create categories
  const nervousSystem = await storage.createCategory({
    title: "Nervous System",
    slug: "nervous-system",
    type: "system",
    icon: "Brain",
    image: "/assets/stock_images/human_brain_nervous__336da88b.jpg",
    articleCount: 0
  });

  const circulatorySystem = await storage.createCategory({
    title: "Circulatory System",
    slug: "circulatory-system",
    type: "system",
    icon: "Heart",
    image: "/assets/stock_images/human_heart_circulat_74e00f6b.jpg",
    articleCount: 0
  });

  const skeletalSystem = await storage.createCategory({
    title: "Skeletal System",
    slug: "skeletal-system",
    type: "system",
    icon: "Bone",
    image: "/assets/stock_images/skeletal_system_bone_db515f41.jpg",
    articleCount: 0
  });

  const muscularSystem = await storage.createCategory({
    title: "Muscular System",
    slug: "muscular-system",
    type: "system",
    icon: "Activity",
    image: "/assets/stock_images/human_muscles_muscul_43c74d8f.jpg",
    articleCount: 0
  });

  const respiratorySystem = await storage.createCategory({
    title: "Respiratory System",
    slug: "respiratory-system",
    type: "system",
    icon: "Wind",
    image: "/assets/stock_images/human_respiratory_sy_52a9cb88.jpg",
    articleCount: 0
  });

  const digestiveSystem = await storage.createCategory({
    title: "Digestive System",
    slug: "digestive-system",
    type: "system",
    icon: "Microscope",
    image: "/assets/stock_images/human_heart_circulat_74e00f6b.jpg",
    articleCount: 0
  });

  const headNeck = await storage.createCategory({
    title: "Head & Neck",
    slug: "head-neck",
    type: "region",
    icon: "User",
    articleCount: 0
  });

  const upperLimb = await storage.createCategory({
    title: "Upper Limb",
    slug: "upper-limb",
    type: "region",
    icon: "HandMetal",
    articleCount: 0
  });

  const lowerLimb = await storage.createCategory({
    title: "Lower Limb",
    slug: "lower-limb",
    type: "region",
    icon: "Layers",
    articleCount: 0
  });

  const torso = await storage.createCategory({
    title: "Torso",
    slug: "torso",
    type: "region",
    icon: "Activity",
    articleCount: 0
  });

  // Create articles
  await storage.createArticle({
    title: "The Human Heart: Structure and Function",
    slug: "human-heart-structure-function",
    excerpt: "Learn about the anatomy of the heart, including its chambers, valves, and the cardiac cycle that keeps blood flowing throughout your body.",
    content: `
      <h2>Introduction</h2>
      <p>
        The human heart is a remarkable organ that serves as the central pump of the circulatory system. 
        Weighing approximately 250-350 grams, this muscular organ beats around 100,000 times per day, 
        pumping approximately 7,500 liters of blood through the body.
      </p>

      <h2>Anatomy of the Heart</h2>
      <p>
        The heart consists of four chambers: two upper chambers called atria and two lower chambers called ventricles. 
        The right side of the heart receives deoxygenated blood from the body and pumps it to the lungs, 
        while the left side receives oxygenated blood from the lungs and pumps it to the rest of the body.
      </p>

      <h3>Heart Chambers</h3>
      <ul>
        <li><strong>Right Atrium:</strong> Receives deoxygenated blood from the superior and inferior vena cava</li>
        <li><strong>Right Ventricle:</strong> Pumps blood to the lungs via the pulmonary artery</li>
        <li><strong>Left Atrium:</strong> Receives oxygenated blood from the pulmonary veins</li>
        <li><strong>Left Ventricle:</strong> Pumps oxygenated blood to the body via the aorta</li>
      </ul>

      <h2>Heart Valves</h2>
      <p>
        The heart contains four valves that ensure unidirectional blood flow:
      </p>
      <ul>
        <li><strong>Tricuspid Valve:</strong> Between right atrium and right ventricle</li>
        <li><strong>Pulmonary Valve:</strong> Between right ventricle and pulmonary artery</li>
        <li><strong>Mitral Valve:</strong> Between left atrium and left ventricle</li>
        <li><strong>Aortic Valve:</strong> Between left ventricle and aorta</li>
      </ul>

      <h2>The Cardiac Cycle</h2>
      <p>
        The cardiac cycle consists of systole (contraction) and diastole (relaxation). 
        During systole, the ventricles contract and pump blood out of the heart. 
        During diastole, the heart relaxes and fills with blood. 
        This rhythmic cycle is coordinated by the heart's electrical conduction system.
      </p>

      <h2>Blood Supply to the Heart</h2>
      <p>
        The coronary arteries supply oxygenated blood to the heart muscle itself. 
        These arteries branch off from the aorta just above the aortic valve. 
        The main coronary arteries include the left coronary artery and the right coronary artery, 
        each supplying different regions of the heart.
      </p>
    `,
    categoryId: circulatorySystem.id,
    image: "/assets/stock_images/human_heart_circulat_74e00f6b.jpg",
    readTime: 8
  });

  await storage.createArticle({
    title: "Brain Anatomy: Regions and Functions",
    slug: "brain-anatomy-regions-functions",
    excerpt: "Explore the different regions of the brain and understand how each area contributes to cognitive function, movement, and sensation.",
    content: `
      <h2>Introduction</h2>
      <p>
        The human brain is the most complex organ in the body, containing approximately 86 billion neurons. 
        It serves as the command center for the nervous system, controlling everything from basic life functions to complex thought processes.
      </p>

      <h2>Major Brain Regions</h2>
      
      <h3>Cerebrum</h3>
      <p>
        The largest part of the brain, divided into two hemispheres. The cerebrum is responsible for:
      </p>
      <ul>
        <li>Conscious thought and reasoning</li>
        <li>Memory formation and retrieval</li>
        <li>Voluntary movement</li>
        <li>Sensory processing</li>
        <li>Language and communication</li>
      </ul>

      <h3>Cerebellum</h3>
      <p>
        Located at the back of the brain, the cerebellum coordinates:
      </p>
      <ul>
        <li>Fine motor control and balance</li>
        <li>Coordination of voluntary movements</li>
        <li>Muscle memory and procedural learning</li>
      </ul>

      <h3>Brainstem</h3>
      <p>
        The brainstem connects the brain to the spinal cord and controls:
      </p>
      <ul>
        <li>Heart rate and breathing</li>
        <li>Sleep-wake cycles</li>
        <li>Blood pressure regulation</li>
        <li>Reflexes and involuntary functions</li>
      </ul>

      <h2>Functional Areas</h2>
      <p>
        The cerebral cortex is divided into four lobes, each with specialized functions:
      </p>
      <ul>
        <li><strong>Frontal Lobe:</strong> Executive functions, decision-making, motor control</li>
        <li><strong>Parietal Lobe:</strong> Sensory processing, spatial awareness</li>
        <li><strong>Temporal Lobe:</strong> Auditory processing, memory, language comprehension</li>
        <li><strong>Occipital Lobe:</strong> Visual processing</li>
      </ul>
    `,
    categoryId: nervousSystem.id,
    image: "/assets/stock_images/human_brain_nervous__336da88b.jpg",
    readTime: 12
  });

  await storage.createArticle({
    title: "Skeletal System Overview",
    slug: "skeletal-system-overview",
    excerpt: "Discover the structure of bones, joints, and how the skeletal system provides support and protection for the human body.",
    content: `
      <h2>Introduction</h2>
      <p>
        The human skeletal system is a complex framework of 206 bones in adults. 
        It provides structural support, protects vital organs, enables movement, stores minerals, and produces blood cells.
      </p>

      <h2>Functions of the Skeletal System</h2>
      <ul>
        <li><strong>Support:</strong> Provides the framework that supports the body and maintains its shape</li>
        <li><strong>Protection:</strong> Shields vital organs from injury (skull protects brain, ribcage protects heart and lungs)</li>
        <li><strong>Movement:</strong> Works with muscles to enable movement through joints</li>
        <li><strong>Mineral Storage:</strong> Stores calcium and phosphorus</li>
        <li><strong>Blood Cell Production:</strong> Red bone marrow produces blood cells</li>
      </ul>

      <h2>Bone Structure</h2>
      <p>
        Bones are composed of two types of tissue:
      </p>
      <ul>
        <li><strong>Compact Bone:</strong> Dense outer layer providing strength</li>
        <li><strong>Spongy Bone:</strong> Porous inner layer containing bone marrow</li>
      </ul>

      <h2>Major Bone Groups</h2>
      <h3>Axial Skeleton (80 bones)</h3>
      <ul>
        <li>Skull (22 bones)</li>
        <li>Vertebral column (26 bones)</li>
        <li>Ribcage (25 bones)</li>
        <li>Sternum</li>
      </ul>

      <h3>Appendicular Skeleton (126 bones)</h3>
      <ul>
        <li>Shoulder girdle and upper limbs (64 bones)</li>
        <li>Pelvic girdle and lower limbs (62 bones)</li>
      </ul>

      <h2>Joint Types</h2>
      <p>
        Joints are classified by their range of motion:
      </p>
      <ul>
        <li><strong>Fibrous Joints:</strong> Immovable (skull sutures)</li>
        <li><strong>Cartilaginous Joints:</strong> Slightly movable (vertebrae)</li>
        <li><strong>Synovial Joints:</strong> Freely movable (knee, elbow, shoulder)</li>
      </ul>
    `,
    categoryId: skeletalSystem.id,
    image: "/assets/stock_images/skeletal_system_bone_db515f41.jpg",
    readTime: 10
  });

  await storage.createArticle({
    title: "Muscular System Fundamentals",
    slug: "muscular-system-fundamentals",
    excerpt: "Understanding muscle types, structure, and how they work together to enable movement and maintain posture.",
    content: `
      <h2>Introduction</h2>
      <p>
        The human muscular system consists of over 600 muscles that work together to enable movement, 
        maintain posture, and perform vital bodily functions. Muscles make up approximately 40% of total body weight.
      </p>

      <h2>Types of Muscle Tissue</h2>
      
      <h3>Skeletal Muscle</h3>
      <p>
        Voluntary muscles attached to bones:
      </p>
      <ul>
        <li>Striated appearance under microscope</li>
        <li>Controlled consciously</li>
        <li>Enables body movement</li>
        <li>Can fatigue with use</li>
      </ul>

      <h3>Cardiac Muscle</h3>
      <p>
        Found only in the heart:
      </p>
      <ul>
        <li>Striated like skeletal muscle</li>
        <li>Involuntary control</li>
        <li>Contracts rhythmically</li>
        <li>Highly resistant to fatigue</li>
      </ul>

      <h3>Smooth Muscle</h3>
      <p>
        Found in internal organs and blood vessels:
      </p>
      <ul>
        <li>Non-striated appearance</li>
        <li>Involuntary control</li>
        <li>Controls organ functions</li>
        <li>Slow, sustained contractions</li>
      </ul>

      <h2>Muscle Structure</h2>
      <p>
        Skeletal muscles are organized hierarchically:
      </p>
      <ul>
        <li><strong>Muscle Fibers:</strong> Individual muscle cells</li>
        <li><strong>Fascicles:</strong> Bundles of muscle fibers</li>
        <li><strong>Muscle:</strong> Multiple fascicles wrapped in connective tissue</li>
        <li><strong>Tendons:</strong> Connective tissue attaching muscle to bone</li>
      </ul>

      <h2>Muscle Contraction</h2>
      <p>
        Muscles contract through the sliding filament theory, where actin and myosin filaments 
        slide past each other, shortening the muscle fiber and producing force.
      </p>
    `,
    categoryId: muscularSystem.id,
    image: "/assets/stock_images/human_muscles_muscul_43c74d8f.jpg",
    readTime: 9
  });

  await storage.createArticle({
    title: "Respiratory System Anatomy",
    slug: "respiratory-system-anatomy",
    excerpt: "Learn about the structures involved in breathing and gas exchange, from the nose to the alveoli in the lungs.",
    content: `
      <h2>Introduction</h2>
      <p>
        The respiratory system is responsible for gas exchange, bringing oxygen into the body and removing carbon dioxide. 
        An adult breathes approximately 12-20 times per minute, moving about 6 liters of air.
      </p>

      <h2>Upper Respiratory Tract</h2>
      
      <h3>Nose and Nasal Cavity</h3>
      <ul>
        <li>Filters, warms, and humidifies incoming air</li>
        <li>Contains olfactory receptors for smell</li>
        <li>Lined with mucous membranes</li>
      </ul>

      <h3>Pharynx</h3>
      <ul>
        <li>Shared pathway for air and food</li>
        <li>Divided into nasopharynx, oropharynx, and laryngopharynx</li>
      </ul>

      <h3>Larynx (Voice Box)</h3>
      <ul>
        <li>Contains vocal cords for speech</li>
        <li>Protects airway during swallowing</li>
        <li>Connects pharynx to trachea</li>
      </ul>

      <h2>Lower Respiratory Tract</h2>
      
      <h3>Trachea (Windpipe)</h3>
      <ul>
        <li>Extends from larynx to bronchi</li>
        <li>Reinforced with C-shaped cartilage rings</li>
        <li>Lined with ciliated epithelium</li>
      </ul>

      <h3>Bronchi and Bronchioles</h3>
      <ul>
        <li>Trachea divides into left and right bronchi</li>
        <li>Bronchi branch into smaller bronchioles</li>
        <li>Lead to alveolar sacs</li>
      </ul>

      <h3>Lungs and Alveoli</h3>
      <ul>
        <li>Two lungs (right has 3 lobes, left has 2)</li>
        <li>Alveoli are tiny air sacs for gas exchange</li>
        <li>Approximately 300 million alveoli in both lungs</li>
        <li>Total surface area about 70 square meters</li>
      </ul>

      <h2>Breathing Mechanism</h2>
      <p>
        Breathing involves the diaphragm and intercostal muscles. 
        During inhalation, the diaphragm contracts and moves down, increasing lung volume. 
        During exhalation, the diaphragm relaxes and moves up, decreasing lung volume.
      </p>
    `,
    categoryId: respiratorySystem.id,
    image: "/assets/stock_images/human_respiratory_sy_52a9cb88.jpg",
    readTime: 11
  });

  await storage.createArticle({
    title: "The Digestive System Journey",
    slug: "digestive-system-journey",
    excerpt: "Follow the path of food through the digestive tract and learn how nutrients are broken down and absorbed.",
    content: `
      <h2>Introduction</h2>
      <p>
        The digestive system is a complex network of organs that work together to break down food, 
        absorb nutrients, and eliminate waste. The journey from mouth to elimination takes 24-72 hours.
      </p>

      <h2>Organs of Digestion</h2>
      
      <h3>Mouth and Salivary Glands</h3>
      <ul>
        <li>Mechanical breakdown through chewing</li>
        <li>Chemical digestion begins with salivary amylase</li>
        <li>Forms food bolus for swallowing</li>
      </ul>

      <h3>Esophagus</h3>
      <ul>
        <li>Muscular tube connecting mouth to stomach</li>
        <li>Peristaltic waves move food downward</li>
        <li>Lower esophageal sphincter prevents reflux</li>
      </ul>

      <h3>Stomach</h3>
      <ul>
        <li>Stores and mixes food with gastric juices</li>
        <li>Produces hydrochloric acid and pepsin</li>
        <li>Creates chyme for small intestine</li>
        <li>Can hold 1-2 liters of material</li>
      </ul>

      <h3>Small Intestine</h3>
      <ul>
        <li>Primary site of nutrient absorption</li>
        <li>Three sections: duodenum, jejunum, ileum</li>
        <li>About 6 meters long</li>
        <li>Lined with villi and microvilli for absorption</li>
      </ul>

      <h3>Large Intestine (Colon)</h3>
      <ul>
        <li>Absorbs water and electrolytes</li>
        <li>Forms and stores feces</li>
        <li>Contains beneficial bacteria</li>
        <li>About 1.5 meters long</li>
      </ul>

      <h2>Accessory Organs</h2>
      
      <h3>Liver</h3>
      <ul>
        <li>Produces bile for fat digestion</li>
        <li>Processes nutrients from blood</li>
        <li>Detoxifies harmful substances</li>
      </ul>

      <h3>Pancreas</h3>
      <ul>
        <li>Produces digestive enzymes</li>
        <li>Secretes bicarbonate to neutralize acid</li>
        <li>Produces insulin and glucagon</li>
      </ul>

      <h3>Gallbladder</h3>
      <ul>
        <li>Stores and concentrates bile</li>
        <li>Releases bile during fat digestion</li>
      </ul>
    `,
    categoryId: digestiveSystem.id,
    image: "/assets/stock_images/human_heart_circulat_74e00f6b.jpg",
    readTime: 13
  });

  // Create quizzes
  await storage.createQuiz({
    question: "Which chamber of the heart receives oxygenated blood from the lungs?",
    options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"],
    correctAnswer: "Left atrium",
    explanation: "The left atrium receives oxygenated blood from the lungs via the pulmonary veins. This blood is then pumped into the left ventricle and distributed to the body.",
    categoryId: circulatorySystem.id
  });

  await storage.createQuiz({
    question: "What is the main function of the mitral valve?",
    options: [
      "Controls blood flow from right atrium to right ventricle",
      "Controls blood flow from left atrium to left ventricle",
      "Controls blood flow from right ventricle to pulmonary artery",
      "Controls blood flow from left ventricle to aorta"
    ],
    correctAnswer: "Controls blood flow from left atrium to left ventricle",
    explanation: "The mitral valve (also called bicuspid valve) controls blood flow between the left atrium and left ventricle, ensuring blood flows in only one direction.",
    categoryId: circulatorySystem.id
  });

  await storage.createQuiz({
    question: "Which artery supplies oxygenated blood to the heart muscle?",
    options: ["Pulmonary artery", "Carotid artery", "Coronary artery", "Aorta"],
    correctAnswer: "Coronary artery",
    explanation: "The coronary arteries branch off from the aorta and supply oxygenated blood to the heart muscle itself. Blockage of these arteries can lead to heart attacks.",
    categoryId: circulatorySystem.id
  });

  await storage.createQuiz({
    question: "Which part of the brain is responsible for balance and coordination?",
    options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"],
    correctAnswer: "Cerebellum",
    explanation: "The cerebellum, located at the back of the brain, is responsible for coordinating voluntary movements, balance, and posture.",
    categoryId: nervousSystem.id
  });

  await storage.createQuiz({
    question: "How many bones are in the adult human body?",
    options: ["186", "196", "206", "216"],
    correctAnswer: "206",
    explanation: "An adult human skeleton contains 206 bones. Babies are born with about 270 bones, but many fuse together as they grow.",
    categoryId: skeletalSystem.id
  });

  await storage.createQuiz({
    question: "Which type of muscle is found in the walls of internal organs?",
    options: ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "Striated muscle"],
    correctAnswer: "Smooth muscle",
    explanation: "Smooth muscle is found in the walls of hollow organs like the stomach, intestines, and blood vessels. It's involuntary and non-striated.",
    categoryId: muscularSystem.id
  });

  await storage.createQuiz({
    question: "What is the primary site of gas exchange in the respiratory system?",
    options: ["Trachea", "Bronchi", "Alveoli", "Bronchioles"],
    correctAnswer: "Alveoli",
    explanation: "Alveoli are tiny air sacs in the lungs where oxygen and carbon dioxide are exchanged between air and blood. There are approximately 300 million alveoli in both lungs.",
    categoryId: respiratorySystem.id
  });

  await storage.createQuiz({
    question: "Which organ produces bile for fat digestion?",
    options: ["Pancreas", "Liver", "Gallbladder", "Stomach"],
    correctAnswer: "Liver",
    explanation: "The liver produces bile, which is stored in the gallbladder and released into the small intestine to help digest fats.",
    categoryId: digestiveSystem.id
  });

  console.log("Database seeded successfully!");
}
