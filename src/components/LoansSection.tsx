import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface LoansSectionProps {
  formData: {
    name: string;
    phone: string;
    email: string;
  };
  setFormData: (data: { name: string; phone: string; email: string }) => void;
  handleQuickApply: (e: React.FormEvent) => void;
}

const LoansSection = ({ formData, setFormData, handleQuickApply }: LoansSectionProps) => {
  const loanProducts = [
    {
      title: 'Экспресс-займ',
      description: 'Быстрые деньги за 10 минут',
      amount: '5 000 - 30 000 ₽',
      term: 'до 30 дней',
      rate: '0% в день',
      features: ['Без справок', 'Мгновенное решение', 'На карту любого банка'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Стандарт',
      description: 'Выгодные условия для всех',
      amount: '10 000 - 50 000 ₽',
      term: 'до 60 дней',
      rate: '0% в день',
      features: ['Продление срока', 'Онлайн-оформление', 'Частичное погашение'],
      color: 'from-pink-500 to-orange-500'
    },
    {
      title: 'VIP займ',
      description: 'Для постоянных клиентов',
      amount: '50 000 - 100 000 ₽',
      term: 'до 90 дней',
      rate: '0% в день',
      features: ['Пониженная ставка', 'Индивидуальные условия', 'Приоритетное обслуживание'],
      color: 'from-orange-500 to-purple-600'
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
            Наши продукты
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold">Займы для любых целей</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий вариант займа из нашего предложения
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loanProducts.map((product, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 animate-scale-in">
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${product.color}`}></div>
              <CardHeader>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Сумма:</span>
                    <span className="font-bold text-primary">{product.amount}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Срок:</span>
                    <span className="font-bold text-secondary">{product.term}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Ставка:</span>
                    <span className="font-bold text-accent">{product.rate}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-semibold text-muted-foreground">Особенности:</div>
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon name="CheckCircle" className="text-green-600" size={18} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className={`w-full bg-gradient-to-r ${product.color}`}>
                      Оформить
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
                        <Label htmlFor={`name-${index}`}>ФИО</Label>
                        <Input 
                          id={`name-${index}`}
                          placeholder="Иванов Иван Иванович"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`phone-${index}`}>Телефон</Label>
                        <Input 
                          id={`phone-${index}`}
                          type="tel"
                          placeholder="+7 (999) 123-45-67"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`email-${index}`}>Email (необязательно)</Label>
                        <Input 
                          id={`email-${index}`}
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoansSection;