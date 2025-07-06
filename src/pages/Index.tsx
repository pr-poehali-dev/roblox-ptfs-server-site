import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-aviation-midnight via-aviation-silver to-aviation-midnight text-white">
      {/* Header */}
      <header className="border-b border-aviation-silver/20 backdrop-blur-sm bg-aviation-midnight/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Plane" size={32} className="text-aviation-red" />
              <h1 className="text-2xl font-orbitron font-bold">PTFS SERVER</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#dashboard"
                className="hover:text-aviation-red transition-colors"
              >
                Главная
              </a>
              <a
                href="#flights"
                className="hover:text-aviation-red transition-colors"
              >
                Полёты
              </a>
              <a
                href="#atis"
                className="hover:text-aviation-red transition-colors"
              >
                АТИС
              </a>
              <a
                href="#exams"
                className="hover:text-aviation-red transition-colors"
              >
                Экзамены
              </a>
              <Button
                variant="outline"
                className="border-aviation-red text-aviation-red hover:bg-aviation-red hover:text-white"
              >
                Войти
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(/img/b4c5b807-d54a-4350-8862-a54180d8d5e6.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-aviation-midnight via-aviation-midnight/80 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-5xl font-orbitron font-bold mb-6 leading-tight">
              Профессиональный авиационный центр управления
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-roboto">
              Система управления полётами, обучения пилотов и диспетчеров с
              интеграцией Discord
            </p>
            <div className="flex gap-4">
              <Button className="bg-aviation-red hover:bg-aviation-red/90 text-white px-8 py-3 text-lg">
                <Icon name="LogIn" className="mr-2" />
                Войти в систему
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-aviation-midnight px-8 py-3 text-lg"
              >
                <Icon name="Users" className="mr-2" />
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ranks Section */}
      <section className="py-16 bg-aviation-midnight/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-orbitron font-bold text-center mb-12">
            Система рангов
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-aviation-silver/20 border-aviation-red/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-aviation-red rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
                <CardTitle className="text-aviation-red font-orbitron">
                  Администратор
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Полные права доступа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge className="bg-aviation-red text-white">
                  Управление сервером
                </Badge>
                <Badge className="bg-aviation-red text-white">
                  Система штрафов
                </Badge>
                <Badge className="bg-aviation-red text-white">
                  Discord интеграция
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-aviation-silver/20 border-aviation-gray/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-aviation-gray rounded-full flex items-center justify-center">
                  <Icon name="Plane" size={32} className="text-white" />
                </div>
                <CardTitle className="text-aviation-gray font-orbitron">
                  Пилот
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Выполнение полётов
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge className="bg-aviation-gray text-white">
                  Планы полётов
                </Badge>
                <Badge className="bg-aviation-gray text-white">
                  Статистика
                </Badge>
                <Badge className="bg-aviation-gray text-white">Экзамены</Badge>
              </CardContent>
            </Card>

            <Card className="bg-aviation-silver/20 border-blue-400/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <Icon name="Radio" size={32} className="text-white" />
                </div>
                <CardTitle className="text-blue-400 font-orbitron">
                  УВД
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Диспетчерская служба
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge className="bg-blue-500 text-white">
                  АТИС управление
                </Badge>
                <Badge className="bg-blue-500 text-white">Координация</Badge>
                <Badge className="bg-blue-500 text-white">Обучение</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="flights" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-aviation-silver/20 backdrop-blur-sm">
              <TabsTrigger value="flights" className="font-orbitron">
                Планы полётов
              </TabsTrigger>
              <TabsTrigger value="atis" className="font-orbitron">
                АТИС
              </TabsTrigger>
              <TabsTrigger value="exams" className="font-orbitron">
                Экзамены
              </TabsTrigger>
              <TabsTrigger value="penalties" className="font-orbitron">
                Штрафы
              </TabsTrigger>
            </TabsList>

            <TabsContent value="flights" className="space-y-6">
              <Card className="bg-aviation-silver/20 border-aviation-gray/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-aviation-gray font-orbitron">
                    Создать план полёта
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Заполните детали вашего полёта
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="callsign">Позывной</Label>
                      <Input
                        id="callsign"
                        placeholder="AFL123"
                        className="bg-aviation-midnight/50 border-aviation-silver/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="aircraft">Тип ВС</Label>
                      <Select>
                        <SelectTrigger className="bg-aviation-midnight/50 border-aviation-silver/30">
                          <SelectValue placeholder="Выберите тип ВС" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="a320">Airbus A320</SelectItem>
                          <SelectItem value="b737">Boeing 737</SelectItem>
                          <SelectItem value="a330">Airbus A330</SelectItem>
                          <SelectItem value="b777">Boeing 777</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="departure">Аэропорт вылета</Label>
                      <Input
                        id="departure"
                        placeholder="UUEE"
                        className="bg-aviation-midnight/50 border-aviation-silver/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="arrival">Аэропорт прилёта</Label>
                      <Input
                        id="arrival"
                        placeholder="UUWW"
                        className="bg-aviation-midnight/50 border-aviation-silver/30"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="route">Маршрут</Label>
                    <Textarea
                      id="route"
                      placeholder="Введите маршрут полёта"
                      className="bg-aviation-midnight/50 border-aviation-silver/30"
                    />
                  </div>
                  <Button className="w-full bg-aviation-red hover:bg-aviation-red/90">
                    <Icon name="Send" className="mr-2" />
                    Подать план полёта
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="atis" className="space-y-6">
              <Card className="bg-aviation-silver/20 border-blue-400/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-400 font-orbitron">
                    АТИС управление
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Информация для диспетчеров
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="airport">Аэропорт</Label>
                      <Input
                        id="airport"
                        placeholder="UUEE"
                        className="bg-aviation-midnight/50 border-aviation-silver/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="runway">Активная ВПП</Label>
                      <Input
                        id="runway"
                        placeholder="07L/25R"
                        className="bg-aviation-midnight/50 border-aviation-silver/30"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weather">Погодные условия</Label>
                    <Textarea
                      id="weather"
                      placeholder="Введите метеоусловия"
                      className="bg-aviation-midnight/50 border-aviation-silver/30"
                    />
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    <Icon name="Radio" className="mr-2" />
                    Обновить АТИС
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="exams" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-aviation-silver/20 border-aviation-gray/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-aviation-gray font-orbitron">
                      Экзамены для пилотов
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Badge className="bg-green-500 text-white">
                        PPL - Частный пилот
                      </Badge>
                      <p className="text-sm text-gray-300">
                        Базовые навыки пилотирования
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Badge className="bg-aviation-gray text-white">
                        CPL - Коммерческий пилот
                      </Badge>
                      <p className="text-sm text-gray-300">
                        Профессиональное пилотирование
                      </p>
                    </div>
                    <Button className="w-full bg-aviation-gray hover:bg-aviation-gray/90">
                      <Icon name="BookOpen" className="mr-2" />
                      Начать экзамен
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-aviation-silver/20 border-blue-400/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-blue-400 font-orbitron">
                      Обучение УВД
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Badge className="bg-blue-500 text-white">
                        TWR - Диспетчер аэродрома
                      </Badge>
                      <p className="text-sm text-gray-300">
                        Управление воздушным движением
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Badge className="bg-purple-500 text-white">
                        APP - Диспетчер подхода
                      </Badge>
                      <p className="text-sm text-gray-300">
                        Контроль захода на посадку
                      </p>
                    </div>
                    <Button className="w-full bg-blue-500 hover:bg-blue-600">
                      <Icon name="Headphones" className="mr-2" />
                      Начать обучение
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="penalties" className="space-y-6">
              <Card className="bg-aviation-silver/20 border-aviation-red/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-aviation-red font-orbitron">
                    Система штрафов
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Управление нарушениями и санкциями
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-aviation-midnight/50 rounded-lg">
                      <div>
                        <p className="font-medium">Превышение скорости</p>
                        <p className="text-sm text-gray-400">
                          Пилот: AFL123 | Дата: 06.07.2025
                        </p>
                      </div>
                      <Badge className="bg-aviation-red text-white">
                        Предупреждение
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-aviation-midnight/50 rounded-lg">
                      <div>
                        <p className="font-medium">Нарушение маршрута</p>
                        <p className="text-sm text-gray-400">
                          Пилот: SBI456 | Дата: 05.07.2025
                        </p>
                      </div>
                      <Badge className="bg-orange-500 text-white">Штраф</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button className="bg-aviation-red hover:bg-aviation-red/90">
                      <Icon name="AlertTriangle" className="mr-2" />
                      Выдать штраф
                    </Button>
                    <Button
                      variant="outline"
                      className="border-aviation-red text-aviation-red hover:bg-aviation-red hover:text-white"
                    >
                      <Icon name="MessageSquare" className="mr-2" />
                      Discord уведомление
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-aviation-midnight/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-orbitron font-bold text-center mb-12">
            Статистика сервера
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-aviation-silver/20 border-aviation-gray/30 backdrop-blur-sm text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-orbitron font-bold text-aviation-red mb-2">
                  247
                </div>
                <p className="text-gray-300">Активных пилотов</p>
              </CardContent>
            </Card>
            <Card className="bg-aviation-silver/20 border-aviation-gray/30 backdrop-blur-sm text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-orbitron font-bold text-blue-400 mb-2">
                  38
                </div>
                <p className="text-gray-300">Диспетчеров УВД</p>
              </CardContent>
            </Card>
            <Card className="bg-aviation-silver/20 border-aviation-gray/30 backdrop-blur-sm text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-orbitron font-bold text-aviation-gray mb-2">
                  1,250
                </div>
                <p className="text-gray-300">Выполненных полётов</p>
              </CardContent>
            </Card>
            <Card className="bg-aviation-silver/20 border-aviation-gray/30 backdrop-blur-sm text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-orbitron font-bold text-green-400 mb-2">
                  24/7
                </div>
                <p className="text-gray-300">Онлайн поддержка</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-aviation-silver/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Icon name="Plane" size={24} className="text-aviation-red" />
              <span className="font-orbitron font-bold">PTFS SERVER</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-aviation-red transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <span className="text-gray-400">Discord интеграция активна</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
