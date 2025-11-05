import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

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
    const dailyRate = 0.015;
    const interest = loanAmount * dailyRate * loanTerm;
    return Math.round(loanAmount + interest);
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

  const loanProducts = [
    {
      title: 'Экспресс-займ',
      description: 'Быстрые деньги за 10 минут',
      amount: '5 000 - 30 000 ₽',
      term: 'до 30 дней',
      rate: '1.5% в день',
      features: ['Без справок', 'Мгновенное решение', 'На карту любого банка'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Стандарт',
      description: 'Выгодные условия для всех',
      amount: '10 000 - 50 000 ₽',
      term: 'до 60 дней',
      rate: '1.2% в день',
      features: ['Продление срока', 'Онлайн-оформление', 'Частичное погашение'],
      color: 'from-pink-500 to-orange-500'
    },
    {
      title: 'VIP займ',
      description: 'Для постоянных клиентов',
      amount: '50 000 - 100 000 ₽',
      term: 'до 90 дней',
      rate: '0.9% в день',
      features: ['Пониженная ставка', 'Индивидуальные условия', 'Приоритетное обслуживание'],
      color: 'from-orange-500 to-purple-600'
    },
  ];

  const howItWorks = [
    { step: 1, title: 'Заявка', description: 'Заполните простую форму онлайн', icon: 'FileText' },
    { step: 2, title: 'Проверка', description: 'Автоматическое решение за 3 минуты', icon: 'Clock' },
    { step: 3, title: 'Одобрение', description: 'Получите одобрение по SMS', icon: 'CheckCircle' },
    { step: 4, title: 'Деньги', description: 'Средства на карте за 10 минут', icon: 'Wallet' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <header className="border-b bg-white/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                БыстроФинанс
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => setActiveSection('main')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveSection('loans')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Займы
              </button>
              <button 
                onClick={() => setActiveSection('conditions')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Условия
              </button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Получить займ
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
                      <Label htmlFor="name">ФИО</Label>
                      <Input 
                        id="name" 
                        placeholder="Иванов Иван Иванович"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email (необязательно)</Label>
                      <Input 
                        id="email" 
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
            </nav>
          </div>
        </div>
      </header>

      {activeSection === 'main' && (
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
                        <span className="font-semibold">1.5% в день</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Проценты:</span>
                        <span className="font-semibold">{(calculateTotal() - loanAmount).toLocaleString()} ₽</span>
                      </div>
                      <div className="flex justify-between text-lg pt-2 border-t">
                        <span className="font-bold">К возврату:</span>
                        <span className="font-bold text-accent text-2xl">{calculateTotal().toLocaleString()} ₽</span>
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
      )}

      {activeSection === 'loans' && (
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
      )}

      {activeSection === 'conditions' && (
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
      )}

      <footer className="bg-gradient-to-br from-purple-900 to-pink-900 text-white py-12 px-4 mt-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">БыстроФинанс</span>
              </div>
              <p className="text-white/80 text-sm">
                Быстрые займы онлайн с моментальным одобрением
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>О нас</li>
                <li>Контакты</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>Помощь</li>
                <li>Договор</li>
                <li>Политика</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>8 (800) 555-35-35</li>
                <li>info@bistrofinans.ru</li>
                <li>Работаем 24/7</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/20 text-center text-white/60 text-sm">
            <p>© 2024 БыстроФинанс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
