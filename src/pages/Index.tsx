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
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Zap, BarChart, Award, Star, ShoppingBag, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
      {/* Навигация */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-2 rounded-lg">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">МаркетДизайн</span>
          </div>
          <div className="hidden md:flex gap-8 text-gray-600">
            <a href="#services" className="hover:text-purple-600 transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-purple-600 transition-colors">Работы</a>
            <a href="#pricing" className="hover:text-purple-600 transition-colors">Тарифы</a>
            <a href="#contact" className="hover:text-purple-600 transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md">
            Бесплатная консультация
          </Button>
        </div>
      </nav>

      {/* Герой-секция */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-50 to-purple-50 opacity-50"></div>
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-indigo-300 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="container mx-auto relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <Badge className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 text-sm rounded-full">
                Профессиональный дизайн для WB и OZON
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Превращаем товары в <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">бестселлеры</span> на маркетплейсах
              </h1>
              <p className="text-xl text-gray-700">
                Создаем инфографику и рич-контент, которые выделяют ваш товар среди конкурентов и увеличивают продажи до 80%
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 text-lg shadow-lg shadow-purple-200">
                  Заказать дизайн <ArrowRight className="ml-2" />
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg">
                  Смотреть примеры
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold">
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-bold text-gray-800">Более 750+ довольных клиентов</p>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                    <span className="ml-1 text-sm text-gray-600">4.9/5 рейтинг</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-lg opacity-50"></div>
                <div className="relative bg-white p-6 rounded-xl shadow-xl overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Пример инфографики для маркетплейса" 
                    className="rounded-lg w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-600/90 to-transparent p-6">
                    <div className="text-white">
                      <p className="font-bold">Рост продаж после редизайна</p>
                      <div className="flex items-center gap-2 mt-2">
                        <TrendingUp className="text-green-300" />
                        <span className="text-2xl font-bold">+76%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 px-4 py-1">Наши преимущества</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Почему наш дизайн увеличивает продажи
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Дизайн, который решает бизнес-задачи и выделяет ваш товар на фоне конкурентов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-purple-600" />,
                title: "Рост конверсии до 80%",
                description: "Наша инфографика фокусирует внимание на ключевых преимуществах товара и побуждает к покупке"
              },
              {
                icon: <BarChart className="w-12 h-12 text-indigo-600" />,
                title: "Улучшение ранжирования",
                description: "Качественный контент повышает позиции товара в поисковой выдаче маркетплейсов"
              },
              {
                icon: <Award className="w-12 h-12 text-purple-600" />,
                title: "Экспертное знание площадок",
                description: "Создаем дизайн с учетом всех требований и особенностей Wildberries и OZON"
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="absolute h-1 w-full bg-gradient-to-r from-purple-600 to-indigo-600 top-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <CardHeader>
                  <div className="mb-4 bg-purple-50 p-4 inline-block rounded-xl">{item.icon}</div>
                  <CardTitle className="text-2xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
                <CardFooter>
                  <a href="#" className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
                    Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Портфолио */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-indigo-50" id="portfolio">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 px-4 py-1">Наши работы</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Примеры успешных проектов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Взгляните на рич-контент, который уже приносит прибыль нашим клиентам
            </p>
          </div>

          <Tabs defaultValue="wildberries" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-purple-100 p-1 rounded-full">
              <TabsTrigger 
                value="wildberries" 
                className="text-lg py-3 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
              >
                Wildberries
              </TabsTrigger>
              <TabsTrigger 
                value="ozon" 
                className="text-lg py-3 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
              >
                OZON
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="wildberries" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    category: "Электроника",
                    result: "Рост продаж на 67%",
                    beforeAfter: true
                  },
                  {
                    category: "Товары для дома",
                    result: "Увеличение конверсии на 52%",
                    beforeAfter: false
                  },
                  {
                    category: "Косметика",
                    result: "Рост органических показов на 83%",
                    beforeAfter: false
                  },
                  {
                    category: "Детские товары",
                    result: "Снижение стоимости привлечения на 44%",
                    beforeAfter: true
                  }
                ].map((item, index) => (
                  <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-none group">
                    <div className="relative aspect-[4/3] bg-purple-100">
                      <img 
                        src="/placeholder.svg" 
                        alt={`Пример дизайна для ${item.category} на Wildberries`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.beforeAfter && (
                        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-indigo-600">
                          До/После
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-xl mb-1">{item.category}</h3>
                          <p className="text-purple-800 font-semibold">{item.result}</p>
                        </div>
                        <Button variant="outline" className="border-purple-200 h-8 w-8 p-0 rounded-full">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ozon" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    category: "Спортивные товары",
                    result: "Рост продаж на 58%",
                    beforeAfter: true
                  },
                  {
                    category: "Товары для красоты",
                    result: "Увеличение CTR на 47%",
                    beforeAfter: false
                  },
                  {
                    category: "Техника",
                    result: "Рост конверсии на 72%",
                    beforeAfter: true
                  },
                  {
                    category: "Продукты питания",
                    result: "Увеличение среднего чека на 39%",
                    beforeAfter: false
                  }
                ].map((item, index) => (
                  <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-none group">
                    <div className="relative aspect-[4/3] bg-indigo-100">
                      <img 
                        src="/placeholder.svg" 
                        alt={`Пример дизайна для ${item.category} на OZON`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.beforeAfter && (
                        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-indigo-600">
                          До/После
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-xl mb-1">{item.category}</h3>
                          <p className="text-indigo-800 font-semibold">{item.result}</p>
                        </div>
                        <Button variant="outline" className="border-indigo-200 h-8 w-8 p-0 rounded-full">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-lg px-8 py-6 shadow-lg shadow-purple-200">
              Смотреть все работы
            </Button>
          </div>
        </div>
      </section>

      {/* Тарифы */}
      <section className="py-20 bg-white" id="pricing">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 px-4 py-1">Тарифы</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Пакеты услуг под ваши задачи
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите оптимальный вариант или получите индивидуальное предложение
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Старт",
                price: "4 900 ₽",
                description: "Базовый пакет для входа на маркетплейсы",
                features: [
                  "2 инфографики для карточки",
                  "До 5 слайдов",
                  "Базовое оформление",
                  "Срок: 2-3 дня"
                ],
                highlighted: false,
                cta: "Выбрать пакет"
              },
              {
                title: "Бизнес",
                price: "8 900 ₽",
                description: "Оптимальное решение для большинства товаров",
                features: [
                  "5 инфографик для карточки",
                  "До 12 слайдов",
                  "Продающие тексты",
                  "Оптимизация под алгоритмы WB/OZON",
                  "Срок: 3-5 дней"
                ],
                highlighted: true,
                cta: "Выбрать пакет"
              },
              {
                title: "VIP",
                price: "14 900 ₽",
                description: "Максимальный результат для высокой конкуренции",
                features: [
                  "7+ инфографик для карточки",
                  "До 20 слайдов с анимацией",
                  "Премиум-дизайн",
                  "SEO-оптимизация",
                  "A/B тестирование вариантов",
                  "Срок: 5-7 дней"
                ],
                highlighted: false,
                cta: "Выбрать пакет"
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden ${
                  plan.highlighted 
                    ? "border-0 shadow-xl shadow-purple-200" 
                    : "border border-gray-100 shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 to-indigo-600/5"></div>
                    <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-2 text-sm font-medium">
                      Самый популярный
                    </div>
                  </>
                )}
                <CardHeader className={plan.highlighted ? "pt-12" : ""}>
                  <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">{plan.price}</span>
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
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg shadow-purple-200" 
                        : "bg-gray-800 hover:bg-gray-900"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">Нужно что-то особенное?</h3>
                <p className="text-gray-700">
                  Получите индивидуальное предложение под ваши потребности и бюджет. 
                  Возможна разработка дизайна для всего ассортимента со скидкой.
                </p>
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 shadow-lg shadow-purple-200 whitespace-nowrap">
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Контакт/CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden" id="contact">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Badge className="bg-white/20 text-white px-4 py-1">Начните уже сегодня</Badge>
            <h2 className="text-3xl md:text-5xl font-bold">Готовы увеличить продажи на маркетплейсах?</h2>
            <p className="text-xl opacity-90">
              Первые 10 клиентов в этом месяце получают бесплатный аудит существующих карточек товаров и рекомендации по улучшению
            </p>
            <Button className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-6 text-lg shadow-xl shadow-purple-900/20 hover:shadow-purple-900/30 transition-all">
              Получить бесплатный аудит
            </Button>
            <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-300" />
                <span>Без скрытых платежей</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-300" />
                <span>Гарантия результата</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-300" />
                <span>Поддержка 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-1.5 rounded-lg">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-white">МаркетДизайн</span>
            </div>
            <p className="mt-2">Профессиональное оформление товаров для маркетплейсов Wildberries и OZON</p>
            <div className="flex items-center gap-3 mt-4">
              {["facebook", "instagram", "twitter", "youtube"].map((social) => (
                <a key={social} href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4"></div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Инфографика</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Рич-контент</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Фотосъемка</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Копирайтинг</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Компания</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Портфолио</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Отзывы</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>Email: info@marketdesign.ru</li>
              <li>Телефон: +7 (800) 555-35-35</li>
              <li>Москва, ул. Цифровая, 42</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center">
          <p>© 2023 МаркетДизайн. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
