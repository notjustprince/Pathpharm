import { Button } from "@/components/ui/button";
import { ClinicalBox } from "@/components/ClinicalBox";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import { useLocation, useRoute } from "wouter";

// TODO: remove mock functionality
import heartImage from "@assets/stock_images/human_heart_circulat_74e00f6b.jpg";

export default function ArticlePage() {
  const [, params] = useRoute("/article/:id");
  const [, setLocation] = useLocation();
  
  const articleId = params?.id || "";

  // TODO: remove mock functionality - this will come from API
  const article = {
    id: articleId,
    title: "The Human Heart: Structure and Function",
    category: "Circulatory System",
    readTime: 8,
    image: heartImage,
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
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => window.history.back()}
          data-testid="button-back"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="mb-8">
          <div className="text-sm font-medium text-primary mb-2">
            {article.category}
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{article.readTime} min read</span>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />

          <ClinicalBox>
            Coronary artery disease occurs when the coronary arteries become narrowed or blocked, 
            reducing blood flow to the heart muscle. This can lead to angina (chest pain) 
            or myocardial infarction (heart attack). Understanding coronary anatomy is 
            crucial for diagnosing and treating cardiovascular conditions. 
            Risk factors include high blood pressure, high cholesterol, smoking, and diabetes.
          </ClinicalBox>
        </div>

        <div className="mt-12 p-6 bg-muted/30 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                Test Your Knowledge
              </h3>
              <p className="text-muted-foreground">
                Take a quiz on this topic to reinforce your learning
              </p>
            </div>
            <Button
              size="lg"
              onClick={() => setLocation("/quiz")}
              data-testid="button-take-quiz"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Take Quiz
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
