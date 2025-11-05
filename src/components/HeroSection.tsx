import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  loanAmount: number;
  setLoanAmount: (amount: number) => void;
  loanTerm: number;
  setLoanTerm: (term: number) => void;
  calculateTotal: () => number;
  setActiveSection: (section: string) => void;
  formData: {
    name: string;
    phone: string;
    email: string;
  };
  setFormData: (data: { name: string; phone: string; email: string }) => void;
  handleQuickApply: (e: React.FormEvent) => void;
}

const HeroSection = ({ 
  loanAmount, 
  setLoanAmount, 
  loanTerm, 
  setLoanTerm, 
  calculateTotal, 
  setActiveSection,
  formData,
  setFormData,
  handleQuickApply 
}: HeroSectionProps) => {
  return (
    <>
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                Одобрение за 3 минуты
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Быстрые займы{' '}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  онлайн
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Получите деньги на карту за 10 минут. Без справок и поручителей. 
                Первый займ под 0% для новых клиентов.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8">
                      Получить займ
                      <Icon name="ArrowRight" className="ml-2" size={20} />
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
                        <Label htmlFor="name-hero">ФИО</Label>
                        <Input 
                          id="name-hero" 
                          placeholder="Иванов Иван Иванович"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone-hero">Телефон</Label>
                        <Input 
                          id="phone-hero" 
                          type="tel"
                          placeholder="+7 (999) 123-45-67"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email-hero">Email (необязательно)</Label>
                        <Input 
                          id="email-hero" 
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
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8"
                  onClick={() => setActiveSection('conditions')}
                >
                  Узнать условия
                </Button>
              </div>
              <div className="flex gap-8 pt-8">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-primary">99.2%</div>
                  <div className="text-sm text-muted-foreground">Одобрений</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-secondary">10 мин</div>
                  <div className="text-sm text-muted-foreground">Получение денег</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>

            <Card className="p-8 shadow-2xl border-2 animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl">Калькулятор займа</CardTitle>
                <CardDescription>Рассчитайте сумму и срок вашего займа</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label>Сумма займа</Label>
                    <span className="text-2xl font-bold text-primary">{loanAmount.toLocaleString()} ₽</span>
                  </div>
                  <Slider
                    value={[loanAmount]}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    min={5000}
                    max={100000}
                    step={1000}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>5 000 ₽</span>
                    <span>100 000 ₽</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label>Срок займа</Label>
                    <span className="text-2xl font-bold text-secondary">{loanTerm} дней</span>
                  </div>
                  <Slider
                    value={[loanTerm]}
                    onValueChange={(value) => setLoanTerm(value[0])}
                    min={7}
                    max={90}
                    step={1}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>7 дней</span>
                    <span>90 дней</span>
                  </div>
                </div>

                <div className="pt-6 border-t space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Процентная ставка:</span>
                    <span className="font-semibold">0% в день</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Проценты:</span>
                    <span className="font-semibold">0 ₽</span>
                  </div>
                  <div className="flex justify-between text-lg pt-2 border-t">
                    <span className="font-bold">К возврату:</span>
                    <span className="font-bold text-accent text-2xl">{loanAmount.toLocaleString()} ₽</span>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg h-14">
                      Оформить займ
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
                        <Label htmlFor="name-calc">ФИО</Label>
                        <Input 
                          id="name-calc" 
                          placeholder="Иванов Иван Иванович"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone-calc">Телефон</Label>
                        <Input 
                          id="phone-calc" 
                          type="tel"
                          placeholder="+7 (999) 123-45-67"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email-calc">Email (необязательно)</Label>
                        <Input 
                          id="email-calc" 
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
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
              Преимущества
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы делаем процесс получения займа быстрым, простым и прозрачным
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Zap', title: 'Мгновенно', desc: 'Решение за 3 минуты, деньги за 10 минут' },
              { icon: 'Shield', title: 'Безопасно', desc: 'Защита данных по стандартам банков' },
              { icon: 'Percent', title: 'Выгодно', desc: 'Первый займ под 0% для новых клиентов' },
              { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Всегда на связи для решения вопросов' },
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                  <Icon name={item.icon as any} className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;