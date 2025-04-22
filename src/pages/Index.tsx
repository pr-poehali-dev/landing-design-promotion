import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, ArrowRight, Zap, BarChart, Layers, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Навигация */}
      <nav className="container mx-auto py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-purple-600 text-white p-2 rounded-lg">
            <Layers className="w-6 h-6" />
          </div>
          <span className="font-bold text-xl text-purple-900">РичДизайн</span>
        </div>
        <div className="hidden md:flex gap-8 text-gray-600">
          <a href="#services" className="hover:text-purple-600 transition-colors">Услуги</a>
          <a href="#portfolio" className="hover:text-purple-600 transition-colors">Портфолио</a>
          <a href="#pricing" className="hover:text-purple-600 transition-colors">Тарифы</a>
          <a href="#contact" className="hover:text-purple-600 transition-colors">Контакты</a>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          Связаться
        </Button>
      </nav>

      {/* Герой-секция */}
      <section className="container mx-auto py-12 md:py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
            Профессиональный дизайн для маркетплейсов
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Превращаем товар в <span className="text-purple-600">бестселлер</span>
          </h1>
          <p className="text-xl text-gray-600">
            Создаем убедительный рич-контент и инфографику, которые выделят ваш товар на Wildberries и OZON и увеличат продажи.
          </p>
          <div className="flex gap-4 pt-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6">
              Получить предложение <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" className="text-purple-600 border-purple-600 px-8 py-6">
              Посмотреть работы
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur-lg opacity-75"></div>
            <div className="relative bg-white p-6 rounded-xl shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="Пример инфографики для маркетплейса" 
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="bg-white py-16" id="services">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Почему наш рич-контент работает</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы знаем, как удержать внимание покупателя и превратить просмотр в покупку
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-10 h-10 text-purple-600" />,
                title: "Повышение конверсии",
                description: "В среднем наш рич-контент увеличивает конверсию на 30-45% благодаря качественной подаче преимуществ товара"
              },
              {
                icon: <BarChart className="w-10 h-10 text-purple-600" />,
                title: "Рост органических продаж",
                description: "Хорошо оформленные карточки получают больше просмотров и повышают ранжирование товара в каталоге"
              },
              {
                icon: <Award className="w-10 h-10 text-purple-600" />,
                title: "Профессиональная подача",
                description: "Мы знаем правила маркетплейсов и создаем дизайн, соответствующий требованиям WB и OZON"
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4">{item.icon}</div>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Портфолио */}
      <section className="py-16 bg-gray-50" id="portfolio">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши работы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Взгляните на примеры инфографики и рич-контента, которые уже приносят прибыль нашим клиентам
            </p>
          </div>

          <Tabs defaultValue="wildberries" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="wildberries" className="text-lg py-3">Wildberries</TabsTrigger>
              <TabsTrigger value="ozon" className="text-lg py-3">OZON</TabsTrigger>
            </TabsList>
            <TabsContent value="wildberries" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                    <div className="relative aspect-[4/3] bg-purple-100">
                      <img 
                        src="/placeholder.svg" 
                        alt={`Пример дизайна для Wildberries ${item}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg">Дизайн для категории "Электроника"</h3>
                      <p className="text-gray-600 mt-1">Конверсия выросла на 37%</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="ozon" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                    <div className="relative aspect-[4/3] bg-blue-100">
                      <img 
                        src="/placeholder.svg" 
                        alt={`Пример дизайна для OZON ${item}`}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg">Дизайн для категории "Товары для дома"</h3>
                      <p className="text-gray-600 mt-1">Органические показы +52%</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Тарифы */}
      <section className="py-16 bg-white" id="pricing">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Тарифы и услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите подходящий пакет под ваши задачи или заказажите индивидуальное предложение
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Базовый",
                price: "3 900 ₽",
                description: "Для новичков на маркетплейсах",
                features: [
                  "1 инфографика для карточки",
                  "До 5 слайдов",
                  "Базовое оформление",
                  "Срок: 3 дня"
                ],
                highlighted: false
              },
              {
                title: "Оптимальный",
                price: "7 900 ₽",
                description: "Популярное решение для товаров",
                features: [
                  "3 инфографики для карточки",
                  "До 10 слайдов",
                  "Продающие тексты",
                  "Оптимизация фото",
                  "Срок: a дня"
                ],
                highlighted: true
              },
              {
                title: "Премиум",
                price: "12 900 ₽",
                description: "Полное оформление карточки",
                features: [
                  "5 инфографик для карточки",
                  "До 15 слайдов с анимацией",
                  "SEO-оптимизация",
                  "Копирайтинг под ключ",
                  "Обработка всех фото",
                  "Срок: 5 дней"
                ],
                highlighted: false
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden ${
                  plan.highlighted 
                    ? "border-2 border-purple-500 shadow-xl" 
                    : "border border-gray-200 shadow-md"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 inset-x-0 bg-purple-600 text-white text-center py-1 text-sm font-medium">
                    Популярный выбор
                  </div>
                )}
                <CardHeader className={plan.highlighted ? "pt-8" : ""}>
                  <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500">/товар</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full py-6 ${
                      plan.highlighted 
                        ? "bg-purple-600 hover:bg-purple-700" 
                        : "bg-gray-800 hover:bg-gray-900"
                    }`}
                  >
                    Выбрать тариф
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Контакт/CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white" id="contact">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Готовы увеличить продажи на маркетплейсах?</h2>
            <p className="text-xl opacity-90">
              Заполните форму, и мы свяжемся с вами в течение 2 часов для обсуждения вашего проекта
            </p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg mt-4">
              Получить бесплатную консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-purple-600 text-white p-1.5 rounded-lg">
                <Layers className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-white">РичДизайн</span>
            </div>
            <p className="mt-2">Профессиональное оформление карточек товаров для маркетплейсов</p>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Инфографика</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Рич-контент</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Фотосъемка</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Копирайтинг</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Портфолио</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>Email: info@richdizain.ru</li>
              <li>Телефон: +7 (999) 123-45-67</li>
              <li>Москва, ул. Примерная, 123</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center">
          <p>© 2023 РичДизайн. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
