import InformationForm from "@/components/InformationForm";


export default function Home() {
  return (
    <div 
    style={{
      background: "linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(89, 145, 191, 0.4))"
    }}
    className="h-screen">
      
      <InformationForm />
    </div>
  );
}

