import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
