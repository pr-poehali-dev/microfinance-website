import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  formData: {
    name: string;
    phone: string;
    email: string;
  };
  setFormData: (data: { name: string; phone: string; email: string }) => void;
  handleQuickApply: (e: React.FormEvent) => void;
}

const Header = ({ activeSection, setActiveSection, formData, setFormData, handleQuickApply }: HeaderProps) => {
  return (
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
  );
};

export default Header;
