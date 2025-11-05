import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface ConditionsSectionProps {
  formData: {
    name: string;
    phone: string;
    email: string;
  };
  setFormData: (data: { name: string; phone: string; email: string }) => void;
  handleQuickApply: (e: React.FormEvent) => void;
}

const ConditionsSection = ({ formData, setFormData, handleQuickApply }: ConditionsSectionProps) => {
  const howItWorks = [
    { step: 1, title: 'Заявка', description: 'Заполните простую форму онлайн', icon: 'FileText' },
    { step: 2, title: 'Проверка', description: 'Автоматическое решение за 3 минуты', icon: 'Clock' },
    { step: 3, title: 'Одобрение', description: 'Получите одобрение по SMS', icon: 'CheckCircle' },
    { step: 4, title: 'Деньги', description: 'Средства на карте за 10 минут', icon: 'Wallet' },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
            Как это работает
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold">Получите займ за 4 простых шага</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Весь процесс занимает не более 15 минут
          </p>
        </div>

        <div className="space-y-8 mb-20">
          {howItWorks.map((step, index) => (
            <div key={index} className="flex gap-6 items-start animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-2xl font-bold">
                  {step.step}
                </div>
              </div>
              <Card className="flex-1 p-6 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <Icon name={step.icon as any} className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50">
          <Tabs defaultValue="requirements" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="requirements">Требования</TabsTrigger>
              <TabsTrigger value="documents">Документы</TabsTrigger>
              <TabsTrigger value="faq">Вопросы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="requirements" className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Требования к заёмщику</h3>
              <div className="space-y-3">
                {[
                  'Возраст от 18 до 70 лет',
                  'Гражданство РФ',
                  'Действующий паспорт РФ',
                  'Мобильный телефон',
                  'Банковская карта любого банка'
                ].map((req, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <Icon name="CheckCircle" className="text-green-600" size={20} />
                    <span className="text-lg">{req}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="documents" className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Необходимые документы</h3>
              <div className="space-y-3">
                {[
                  'Паспорт РФ (основной документ)',
                  'СНИЛС (при наличии)',
                  'Банковская карта для получения средств'
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <Icon name="FileText" className="text-primary" size={20} />
                    <span className="text-lg">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <p className="text-sm">
                  <strong>Важно:</strong> Справки о доходах и поручители не требуются!
                </p>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Часто задаваемые вопросы</h3>
              <div className="space-y-4">
                {[
                  { q: 'Как быстро я получу деньги?', a: 'После одобрения заявки деньги поступят на вашу карту в течение 10 минут.' },
                  { q: 'Могу ли я погасить займ досрочно?', a: 'Да, вы можете погасить займ досрочно без штрафов и комиссий.' },
                  { q: 'Что если у меня плохая кредитная история?', a: 'Мы рассматриваем каждую заявку индивидуально. Плохая КИ не является причиной для отказа.' }
                ].map((item, idx) => (
                  <Card key={idx} className="p-4 bg-white">
                    <h4 className="font-bold text-lg mb-2">{item.q}</h4>
                    <p className="text-muted-foreground">{item.a}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        <div className="mt-12 text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-12">
                Подать заявку сейчас
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl">Быстрая заявка</DialogTitle>
                <DialogDescription>
                  Заполните форму и получите предварительное решение за 3 минуты
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleQuickApply} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name-cond">ФИО</Label>
                  <Input 
                    id="name-cond" 
                    placeholder="Иванов Иван Иванович"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone-cond">Телефон</Label>
                  <Input 
                    id="phone-cond" 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-cond">Email (необязательно)</Label>
                  <Input 
                    id="email-cond" 
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Отправить заявку
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
