import { useState } from 'react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LoansSection from '@/components/LoansSection';
import ConditionsSection from '@/components/ConditionsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [loanAmount, setLoanAmount] = useState(30000);
  const [loanTerm, setLoanTerm] = useState(14);
  const [activeSection, setActiveSection] = useState('main');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const calculateTotal = () => {
    return loanAmount;
  };

  const handleQuickApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      toast.success('Заявка одобрена!', {
        description: `Ваша заявка на ${loanAmount}₽ предварительно одобрена. Мы свяжемся с вами в течение 5 минут.`
      });
      setFormData({ name: '', phone: '', email: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        formData={formData}
        setFormData={setFormData}
        handleQuickApply={handleQuickApply}
      />

      {activeSection === 'main' && (
        <HeroSection 
          loanAmount={loanAmount}
          setLoanAmount={setLoanAmount}
          loanTerm={loanTerm}
          setLoanTerm={setLoanTerm}
          calculateTotal={calculateTotal}
          setActiveSection={setActiveSection}
          formData={formData}
          setFormData={setFormData}
          handleQuickApply={handleQuickApply}
        />
      )}

      {activeSection === 'loans' && (
        <LoansSection 
          formData={formData}
          setFormData={setFormData}
          handleQuickApply={handleQuickApply}
        />
      )}

      {activeSection === 'conditions' && (
        <ConditionsSection 
          formData={formData}
          setFormData={setFormData}
          handleQuickApply={handleQuickApply}
        />
      )}

      <Footer />
    </div>
  );
};

export default Index;