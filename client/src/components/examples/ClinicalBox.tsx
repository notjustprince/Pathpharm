import { ClinicalBox } from "../ClinicalBox";

export default function ClinicalBoxExample() {
  return (
    <div className="p-6 max-w-4xl">
      <p className="mb-4">
        The coronary arteries supply oxygenated blood to the heart muscle itself.
        These arteries branch off from the aorta just above the aortic valve.
      </p>
      
      <ClinicalBox>
        Coronary artery disease occurs when these arteries become narrowed or blocked,
        reducing blood flow to the heart muscle. This can lead to angina (chest pain)
        or myocardial infarction (heart attack). Understanding coronary anatomy is
        crucial for diagnosing and treating cardiovascular conditions.
      </ClinicalBox>
      
      <p className="mt-4">
        The main coronary arteries include the left coronary artery and the right
        coronary artery, each supplying different regions of the heart.
      </p>
    </div>
  );
}
