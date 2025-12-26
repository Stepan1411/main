import { useState } from 'react';
import { Youtube, Send, Package, MessageCircle, FolderCode, Moon, Sun } from 'lucide-react';
import { Switch } from './components/ui/switch';
import logoImage from 'figma:asset/4c9c1b7bb7d6c5c928a6d9fa7a378b017fb36237.png';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  const socialLinks = [
    {
      name: 'YouTube',
      icon: Youtube,
      color: isDark ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600',
      url: '#'
    },
    {
      name: 'Telegram',
      icon: Send,
      color: isDark ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-400 hover:bg-blue-500',
      url: '#'
    },
    {
      name: 'Modrinth',
      icon: Package,
      color: isDark ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600',
      url: '#'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      color: isDark ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-500 hover:bg-indigo-600',
      url: '#'
    },
    {
      name: 'Проекты',
      icon: FolderCode,
      color: isDark ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600',
      url: '#'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100'
    }`}>
      {/* Навбар (плашка сверху) */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${
        isDark ? 'bg-slate-900/80 border-slate-700' : 'bg-white/80 border-slate-200'
      } border-b transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Stepan1411
            </span>
          </div>
          
          {/* Переключатель темы */}
          <div className="flex items-center gap-3">
            <Sun className={`w-5 h-5 ${isDark ? 'text-slate-500' : 'text-yellow-500'}`} />
            <Switch 
              checked={isDark}
              onCheckedChange={setIsDark}
            />
            <Moon className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-slate-400'}`} />
          </div>
        </div>
      </nav>

      {/* Верхняя секция с кнопками */}
      <div className="flex flex-col items-center pt-32 pb-20 px-4">
        {/* Аватар */}
        <div className="mb-6">
          <img 
            src={logoImage} 
            alt="Avatar" 
            className={`w-32 h-32 rounded-full border-4 ${
              isDark ? 'border-slate-700' : 'border-slate-300'
            } shadow-2xl object-cover bg-black p-2`}
          />
        </div>
        
        {/* Имя */}
        <h1 className={`mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Stepan1411
        </h1>
        
        {/* Кнопки социальных сетей */}
        <div className="w-full max-w-xl space-y-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                className={`${social.color} text-white w-full py-5 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 group relative overflow-hidden`}
                onClick={(e) => {
                  if (social.url === '#') {
                    e.preventDefault();
                  }
                }}
              >
                {/* Эффект свечения при наведении */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <Icon className="w-6 h-6 relative z-10" />
                <span className="font-semibold tracking-wide uppercase relative z-10">{social.name}</span>
              </a>
            );
          })}
        </div>
      </div>
      
      {/* Нижняя секция с описанием */}
      <div className={`py-20 px-4 transition-colors duration-300 ${
        isDark ? 'bg-slate-800' : 'bg-white'
      }`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={isDark ? 'text-white mb-8' : 'text-slate-900 mb-8'}>
            Stepan1411
          </h2>
          <p className={`leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            Всем привет! Я Степан, я очень люблю играть в майнкрафт и мне нравится делать моды, 
            датапаки, модпаки, сервера - короче люблю творить!
          </p>
        </div>
      </div>
    </div>
  );
}