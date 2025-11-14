
import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { theme } from '@/config/theme';

const Transmission = () => {
  const categories = [
    {
      id: 'tire-service',
      title: 'Шиномонтаж',
      description: 'ЦЕНЫ',
      services: ['Шиномонтаж']
    },
    {
      id: 'storage',
      title: 'Хранение',
      description: 'PRICE',
      services: ['Хранение']
    }
  ];

  const tireService = {
      id: 'tire-service',
      title: 'Шиномонтаж',
      description: 'ЦЕНЫ',
      services: ['Шиномонтаж']
    }

   const storage = {
      id: 'storage',
      title: 'Хранение',
      description: 'ЦЕНЫ',
      services: ['']
    }

  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section 
        className="py-16"
        style={{ background: theme.colors.gradients.heroAlt }}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ 
                background: theme.colors.gradients.text,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Шиномонтаж
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.text.secondary }}>
              Технический центр «ГАРАЖ +» предлагает профессиональный и удобный сервис, избавляя вас от лишних затрат времени и усилий на самостоятельное решение вопросов, связанных с шиномонтажом. 
              Качество наших услуг напрямую влияет на безопасность вас и ваших близких. Поэтому так важно выбирать сервис, оснащённый современным оборудованием и инструментами для выполнения полного спектра шиномонтажных работ. 
              В техническом центре «ГАРАЖ +» используется немецкое оборудование от компании HOFMANN, которая давно зарекомендовала себя как символ качества и надёжности. Инновационные технологии и уникальные патенты делают эту компанию лидером в производстве шиномонтажного оборудования. 
              Мы также не экономим на расходных материалах и используем только самое лучшее.  
              При установке колеса на автомобиль все болты затягиваются с помощью динамометрического ключа строго моментом указанным заводом-изготовителем. 
            </p>

          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20" style={{ backgroundColor: theme.colors.background }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/*{categories.map((category) => (
              <Link key={category.id} to={`/services/transmission/${category.id}`}>
                <Card 
                  className="border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl group cursor-pointer"
                  style={{ 
                    backgroundColor: theme.colors.surface,
                    boxShadow: theme.colors.shadows.card
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                    <img 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <p>{tireService.title}</p>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle 
                      className="text-xl group-hover:opacity-90 transition-all duration-300"
                      style={{ color: theme.colors.text.primary }}
                    >
                      {category.title}
                    </CardTitle>
                    <p 
                      className="group-hover:opacity-90 transition-all duration-300"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      {category.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-2 text-sm mb-4" style={{ color: theme.colors.text.secondary }}>
                      {category.services.map((service, index) => (
                        <li key={index} className="group-hover:opacity-90 transition-all duration-300">• {service}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            ))}*/}
            <Card
                  className="border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl group cursor-pointer"
                  style={{ 
                    backgroundColor: theme.colors.surface,
                    boxShadow: theme.colors.shadows.card
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                    {/*<img 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />*/}
            <h3 
              className="text-4xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ 
                background: theme.colors.gradients.text,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Шиномонтаж
            </h3>


<table>
  <tr>
    <th colspan="6">Комплекс шиномонтажных работ для легковых автомобилей</th>
  </tr>
  <tr>
    <td rowspan="2">R</td>
    <td colspan="2">Стандартный профиль, руб.</td>
    <td colspan="2">Усиленный борт / RunFlat, руб.</td>
  </tr>
  <tr>
    <td>1 колесо</td>
    <td>4 колеса</td>
    <td>1 колесо</td>
    <td>4 колеса</td>
  </tr>
  <tr>
    <td>13–15</td><td>920</td><td>3680</td><td>***</td><td>***</td>
  </tr>
  <tr>
    <td>16</td><td>1040</td><td>4160</td><td>1280</td><td>5120</td>
  </tr>
  <tr>
    <td>17</td><td>1200</td><td>4800</td><td>1580</td><td>6320</td>
  </tr>
  <tr>
    <td>18</td><td>1400</td><td>5600</td><td>1830</td><td>7320</td>
  </tr>
  <tr>
    <td>19</td><td>1560</td><td>6240</td><td>2140</td><td>8560</td>
  </tr>
  <tr>
    <td>20</td><td>1760</td><td>7040</td><td>2380</td><td>9520</td>
  </tr>
  <tr>
    <td>21</td><td>2000</td><td>8000</td><td>2640</td><td>10560</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6">Комплекс шиномонтажных работ для пикапов, микроавтобусов, внедорожников и кроссоверов</th>
  </tr>
  <tr>
    <td rowspan="2">R</td>
    <td colspan="2">Стандартный профиль, руб.</td>
    <td colspan="2">Усиленный борт / RunFlat, руб.</td>
  </tr>
  <tr>
    <td>1 колесо</td>
    <td>4 колеса</td>
    <td>1 колесо</td>
    <td>4 колеса</td>
  </tr>
  <tr>
    <td>14–15</td><td>900</td><td>3600</td><td>***</td><td>***</td>
  </tr>
  <tr>
    <td>16</td><td>1100</td><td>4400</td><td>1250</td><td>5000</td>
  </tr>
  <tr>
    <td>17</td><td>1300</td><td>5200</td><td>1530</td><td>6120</td>
  </tr>
  <tr>
    <td>18</td><td>1450</td><td>5800</td><td>1790</td><td>7160</td>
  </tr>
  <tr>
    <td>19</td><td>1590</td><td>6360</td><td>2020</td><td>8080</td>
  </tr>
  <tr>
    <td>20</td><td>1740</td><td>6960</td><td>2300</td><td>9200</td>
  </tr>
  <tr>
    <td>21</td><td>1910</td><td>9520</td><td>2670</td><td>10680</td>
  </tr>
</table>
              


                  </div>
                  
{/*                  <CardHeader className="pb-4">
                    <CardTitle 
                      className="text-xl group-hover:opacity-90 transition-all duration-300"
                      style={{ color: theme.colors.text.primary }}
                    >
                      {tireService.title}
                    </CardTitle>
                    <p 
                      className="group-hover:opacity-90 transition-all duration-300"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      {tireService.description}
                    </p>
                  </CardHeader>*/}
                  
{/*                  <CardContent className="pt-0">
                    <ul className="space-y-2 text-sm mb-4" style={{ color: theme.colors.text.secondary }}>
                      {tireService.services.map((service, index) => (
                        <li key={index} className="group-hover:opacity-90 transition-all duration-300">• {service}</li>
                      ))}
                    </ul>
                  </CardContent>*/}
                </Card>

                <Card 
                  className="border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl group cursor-pointer"
                  style={{ 
                    backgroundColor: theme.colors.surface,
                    boxShadow: theme.colors.shadows.card
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                    {/*<img 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />*/}


             <h3 
              className="text-4xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ 
                background: theme.colors.gradients.text,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Хранение
            </h3> 
            <table>
              <tr>
    <th>
      СТОИМОСТЬ СЕЗОННОГО ХРАНЕНИЯ ШИН/ДИСКОВ/КОЛЁС В СБОРЕ
    </th>
  </tr>

  <tr>
    <td>
      (Стоимость указана за хранение комплекта из 4 или 5 шин/дисков/колёс в сборе)
    </td>
  </tr>



  <tr>
    <th>R (РАДИУС)</th>
    <th>1 МЕСЯЦ, РУБ.</th>
    <th>СЕЗОН (6 МЕСЯЦЕВ), РУБ.</th>
  </tr>



  <tr><td>13 - 15</td><td>1000</td><td>4500</td></tr>
  <tr><td>16</td><td>1100</td><td>5500</td></tr>
  <tr><td>17</td><td>1200</td><td>6000</td></tr>
  <tr><td>18</td><td>1300</td><td>6600</td></tr>
  <tr><td>19</td><td>1400</td><td>7200</td></tr>
  <tr><td>20</td><td>1500</td><td>7900</td></tr>
  <tr><td>21</td><td>1600</td><td>8500</td></tr>
  <tr><td>22</td><td>1700</td><td>8800</td></tr>
  <tr><td>23</td><td>1800</td><td>9100</td></tr>
  <tr><td>24 и более</td><td>2000</td><td>10000</td></tr>



  <tr>
    <td>Актуальные цены уточняйте при оформлении хранения</td>
  </tr>
            </table>

                  </div>
                  
{/*                  <CardHeader className="pb-4">
                    <CardTitle 
                      className="text-xl group-hover:opacity-90 transition-all duration-300"
                      style={{ color: theme.colors.text.primary }}
                    >
                      {storage.title}
                    </CardTitle>
                    <p 
                      className="group-hover:opacity-90 transition-all duration-300"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      {storage.description}
                    </p>
                  </CardHeader>*/}
                  
{/*                  <CardContent className="pt-0">
                    <ul className="space-y-2 text-sm mb-4" style={{ color: theme.colors.text.secondary }}>
                      {storage.services.map((service, index) => (
                        <li key={index} className="group-hover:opacity-90 transition-all duration-300">• {service}</li>
                      ))}
                    </ul>
                  </CardContent>*/}
                </Card>
          </div>
        </div>
      </section>
      <section 
        className="py-16"
        style={{ background: theme.colors.gradients.heroAlt }}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.text.secondary }}>
            ПРИЕЗЖАЯ К НАМ НА УСЛУГИ ШИНОМОНТАЖА 
            И ОСТАВЛЯЯ КОЛЁСА У НАС НА ХРАНЕНИИ - АКЦИЯ !!!  
            <br/>
            <br/>
            ШИНОМОНТАЖ + ХРАНЕНИЕ = ОБЩАЯ СКИДКА 10%
            <br/>
          </p>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default Transmission;
