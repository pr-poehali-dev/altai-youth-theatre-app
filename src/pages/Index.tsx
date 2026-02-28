import { useState } from "react";
import Icon from "@/components/ui/icon";

// ── DATA ──────────────────────────────────────────────────────────────────────

const SHOWS = [
  {
    id: 1,
    title: "Горе от ума",
    genre: "Комедия",
    age: "12+",
    director: "Дмитрий Егоров",
    cast: ["Владимир Кулагин", "Елена Алаева", "Антон Мухин", "Наталья Соколова"],
    date: "15 марта",
    time: "18:00",
    price: "от 400 ₽",
    color: "#AAEE44",
    emoji: "🎭",
    desc: "Бессмертная комедия Грибоедова о Чацком, столкнувшемся с косностью московского общества.",
  },
  {
    id: 2,
    title: "Мастер и Маргарита",
    genre: "Мистика",
    age: "16+",
    director: "Максим Кальсин",
    cast: ["Артём Казаченко", "Ирина Новикова", "Сергей Тетерин", "Анна Жукова"],
    date: "22 марта",
    time: "19:00",
    price: "от 500 ₽",
    color: "#FF6B2B",
    emoji: "🔥",
    desc: "Легендарный роман Булгакова — о любви, свободе и вечном противостоянии добра и зла.",
  },
  {
    id: 3,
    title: "Алиса в Стране чудес",
    genre: "Сказка",
    age: "6+",
    director: "Олег Пермяков",
    cast: ["Мария Фёдорова", "Денис Котов", "Светлана Ильина", "Роман Шевцов"],
    date: "29 марта",
    time: "12:00",
    price: "от 300 ₽",
    color: "#00C4FF",
    emoji: "🐇",
    desc: "Волшебное путешествие Алисы по сказочной стране — спектакль для детей и взрослых.",
  },
  {
    id: 4,
    title: "Ромео и Джульетта",
    genre: "Трагедия",
    age: "12+",
    director: "Дмитрий Егоров",
    cast: ["Антон Мухин", "Мария Фёдорова", "Владимир Кулагин", "Сергей Тетерин"],
    date: "5 апреля",
    time: "18:30",
    price: "от 450 ₽",
    color: "#FF6B2B",
    emoji: "💔",
    desc: "Шекспировская трагедия о любви сильнее ненависти двух враждующих родов.",
  },
  {
    id: 5,
    title: "Вишнёвый сад",
    genre: "Драма",
    age: "12+",
    director: "Максим Кальсин",
    cast: ["Елена Алаева", "Наталья Соколова", "Артём Казаченко", "Анна Жукова"],
    date: "12 апреля",
    time: "19:00",
    price: "от 400 ₽",
    color: "#AAEE44",
    emoji: "🌸",
    desc: "Финальная пьеса Чехова — лирическая история об уходящем времени и невозможности перемен.",
  },
  {
    id: 6,
    title: "Снежная королева",
    genre: "Сказка",
    age: "4+",
    director: "Олег Пермяков",
    cast: ["Светлана Ильина", "Денис Котов", "Ирина Новикова", "Роман Шевцов"],
    date: "19 апреля",
    time: "11:00",
    price: "от 350 ₽",
    color: "#00C4FF",
    emoji: "❄️",
    desc: "Сказка Андерсена о силе настоящей дружбы, которая растапливает любой лёд.",
  },
];

const ACTORS = [
  { id: 1, name: "Елена Алаева", role: "Актриса", title: "Заслуженная артистка Алтайского края", shows: ["Горе от ума", "Вишнёвый сад"], emoji: "⭐", color: "#AAEE44" },
  { id: 2, name: "Владимир Кулагин", role: "Актёр", title: "Заслуженный артист России", shows: ["Горе от ума", "Ромео и Джульетта"], emoji: "🎭", color: "#FF6B2B" },
  { id: 3, name: "Антон Мухин", role: "Актёр", title: "Артист театра", shows: ["Горе от ума", "Ромео и Джульетта"], emoji: "🎬", color: "#00C4FF" },
  { id: 4, name: "Артём Казаченко", role: "Актёр", title: "Артист театра", shows: ["Мастер и Маргарита", "Вишнёвый сад"], emoji: "✨", color: "#AAEE44" },
  { id: 5, name: "Ирина Новикова", role: "Актриса", title: "Артистка театра", shows: ["Мастер и Маргарита", "Снежная королева"], emoji: "🌟", color: "#FF6B2B" },
  { id: 6, name: "Мария Фёдорова", role: "Актриса", title: "Артистка театра", shows: ["Алиса в Стране чудес", "Ромео и Джульетта"], emoji: "💫", color: "#00C4FF" },
  { id: 7, name: "Сергей Тетерин", role: "Актёр", title: "Заслуженный артист Алтайского края", shows: ["Мастер и Маргарита", "Ромео и Джульетта"], emoji: "🎪", color: "#AAEE44" },
  { id: 8, name: "Наталья Соколова", role: "Актриса", title: "Артистка театра", shows: ["Горе от ума", "Вишнёвый сад"], emoji: "🌺", color: "#FF6B2B" },
];

const DIRECTORS = [
  { id: 10, name: "Дмитрий Егоров", role: "Режиссёр", title: "Главный режиссёр", shows: ["Горе от ума", "Ромео и Джульетта"], emoji: "🎬", color: "#AAEE44" },
  { id: 11, name: "Максим Кальсин", role: "Режиссёр", title: "Заслуженный деятель искусств", shows: ["Мастер и Маргарита", "Вишнёвый сад"], emoji: "🎥", color: "#FF6B2B" },
  { id: 12, name: "Олег Пермяков", role: "Режиссёр", title: "Режиссёр-постановщик", shows: ["Алиса в Стране чудес", "Снежная королева"], emoji: "🎞️", color: "#00C4FF" },
];

const FAQ = [
  { q: "Как купить билет?", a: "Билеты можно купить онлайн через Касса.ру в нашем приложении, в кассе театра по адресу просп. Калинина, 2 (ежедневно 10:00–19:00), а также по телефону 7 (3852) 50-35-03." },
  { q: "Каков возраст публики?", a: "У нас есть спектакли для всех возрастов: детские постановки от 4+, семейные — от 6+, и спектакли для взрослой аудитории 12+ и 16+." },
  { q: "Есть ли льготные билеты?", a: "Да. Скидки предоставляются пенсионерам, инвалидам, студентам и многодетным семьям. Льготный билет необходимо подтвердить документом при входе." },
  { q: "Можно ли вернуть билет?", a: "Возврат и обмен билетов возможен не позднее, чем за 3 часа до начала спектакля. Возврат осуществляется через кассу театра или платформу, где был совершён заказ." },
  { q: "Есть ли гардероб?", a: "Да, в театре работает бесплатный гардероб. Верхнюю одежду и большие сумки просим оставлять в гардеробе." },
  { q: "Как добраться до театра?", a: "Мы находимся по адресу: просп. Калинина, 2, Барнаул. Ближайшие остановки: «Театр» (автобусы 18, 22, 35), «Площадь Советов» (маршрутки). Есть парковка." },
  { q: "Есть ли буфет?", a: "Да, в театре работает буфет. В антракте вы можете приобрести напитки и лёгкие закуски." },
  { q: "Можно ли проводить экскурсии?", a: "Да! Мы предлагаем экскурсии по закулисью. Запись по телефону 7 (3852) 50-35-03 или по email mta-barnaul.ru." },
];

// ── TYPES ─────────────────────────────────────────────────────────────────────

type Page = "home" | "afisha" | "tickets" | "diary" | "actors" | "faq" | "contacts" | "profile";

interface DiaryEntry {
  showId: number;
  rating: number;
  review: string;
  date: string;
}

// ── ROOT ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [diary, setDiary] = useState<DiaryEntry[]>([]);
  const [selectedShow, setSelectedShow] = useState<typeof SHOWS[0] | null>(null);
  const [diaryModal, setDiaryModal] = useState<typeof SHOWS[0] | null>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [profileName, setProfileName] = useState("Зритель МТА");
  const [actorTab, setActorTab] = useState<"actors" | "directors">("actors");

  const navigate = (p: Page) => { setPage(p); setSelectedShow(null); };

  const navItems: { id: Page; icon: string; label: string }[] = [
    { id: "home", icon: "House", label: "Главная" },
    { id: "afisha", icon: "CalendarDays", label: "Афиша" },
    { id: "tickets", icon: "Ticket", label: "Билеты" },
    { id: "diary", icon: "BookOpen", label: "Дневник" },
    { id: "actors", icon: "Users", label: "Труппа" },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden max-w-md mx-auto">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #AAEE44, transparent)" }} />
        <div className="absolute top-1/3 right-0 w-48 h-48 rounded-full opacity-8" style={{ background: "radial-gradient(circle, #FF6B2B, transparent)" }} />
        <div className="absolute bottom-1/3 left-0 w-56 h-56 rounded-full opacity-8" style={{ background: "radial-gradient(circle, #00C4FF, transparent)" }} />
      </div>

      <div className="relative z-10">
        {page === "home" && <HomePage setPage={navigate} shows={SHOWS} />}
        {page === "afisha" && !selectedShow && <AfishaPage shows={SHOWS} onSelect={setSelectedShow} setDiaryModal={setDiaryModal} diary={diary} />}
        {page === "afisha" && selectedShow && <ShowDetail show={selectedShow} onBack={() => setSelectedShow(null)} setPage={navigate} diary={diary} setDiaryModal={setDiaryModal} />}
        {page === "tickets" && <TicketsPage shows={SHOWS} />}
        {page === "diary" && <DiaryPage shows={SHOWS} diary={diary} setDiary={setDiary} setDiaryModal={setDiaryModal} />}
        {page === "actors" && <ActorsPage actorTab={actorTab} setActorTab={setActorTab} />}
        {page === "faq" && <FaqPage faqOpen={faqOpen} setFaqOpen={setFaqOpen} setPage={navigate} />}
        {page === "contacts" && <ContactsPage setPage={navigate} />}
        {page === "profile" && <ProfilePage profileName={profileName} setProfileName={setProfileName} diary={diary} shows={SHOWS} setPage={navigate} />}
      </div>

      {diaryModal && (
        <DiaryModal
          show={diaryModal}
          existing={diary.find(d => d.showId === diaryModal.id)}
          onClose={() => setDiaryModal(null)}
          onSave={(entry) => {
            setDiary(prev => [...prev.filter(d => d.showId !== diaryModal.id), entry]);
            setDiaryModal(null);
          }}
        />
      )}

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-background border-t border-border z-50">
        <div className="flex items-center justify-around py-2 px-1">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => navigate(item.id)} className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-all duration-200 ${page === item.id ? "nav-item-active" : "text-muted-foreground"}`}>
              <Icon name={item.icon} size={22} className={page === item.id ? "" : "opacity-60"} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          ))}
          <button onClick={() => navigate("profile")} className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-all duration-200 ${page === "profile" ? "nav-item-active" : "text-muted-foreground"}`}>
            <Icon name="User" size={22} className={page === "profile" ? "" : "opacity-60"} />
            <span className="text-[10px] font-medium">Профиль</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

// ── HOME ──────────────────────────────────────────────────────────────────────

function HomePage({ setPage, shows }: { setPage: (p: Page) => void; shows: typeof SHOWS }) {
  const quickLinks = [
    { label: "Афиша", icon: "CalendarDays", page: "afisha" as Page, color: "#AAEE44" },
    { label: "Билеты", icon: "Ticket", page: "tickets" as Page, color: "#FF6B2B" },
    { label: "Труппа", icon: "Users", page: "actors" as Page, color: "#00C4FF" },
    { label: "ЧаВо", icon: "CircleHelp", page: "faq" as Page, color: "#AAEE44" },
    { label: "Контакты", icon: "MapPin", page: "contacts" as Page, color: "#FF6B2B" },
    { label: "Дневник", icon: "BookOpen", page: "diary" as Page, color: "#00C4FF" },
  ];

  return (
    <div className="pb-nav">
      <div className="relative px-5 pt-12 pb-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(170,238,68,0.12) 0%, rgba(255,107,43,0.08) 50%, rgba(0,196,255,0.1) 100%)" }} />
        <div className="relative flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl overflow-hidden glow-lime">
            <img src="https://cdn.poehali.dev/projects/be8c74c3-4489-4e3f-bc5c-1aa491f1e738/files/e26705e0-b94a-4dd9-a78d-3e4cf2dee47d.jpg" className="w-full h-full object-cover" alt="МТА" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground font-medium tracking-widest uppercase">Барнаул</div>
            <h1 className="font-display text-xl font-bold leading-tight" style={{ fontFamily: "'Oswald', sans-serif", color: "#AAEE44" }}>Молодёжный театр<br />Алтая</h1>
          </div>
        </div>
      </div>

      <div className="px-5 mb-6">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Ближайший спектакль</div>
        <div className="card-dark rounded-2xl p-4 glow-orange" style={{ border: "1px solid rgba(255,107,43,0.3)" }}>
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="text-3xl mb-1">{shows[0].emoji}</div>
              <h2 className="font-display text-2xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: shows[0].color }}>{shows[0].title}</h2>
              <div className="text-sm text-muted-foreground mt-0.5">{shows[0].genre} · {shows[0].age}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold" style={{ color: "#FF6B2B" }}>{shows[0].date}</div>
              <div className="text-xs text-muted-foreground">{shows[0].time}</div>
              <div className="text-sm font-semibold text-foreground mt-1">{shows[0].price}</div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{shows[0].desc}</p>
          <button onClick={() => setPage("tickets")} className="w-full py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95" style={{ background: "#FF6B2B", color: "#fff" }}>
            Купить билет
          </button>
        </div>
      </div>

      <div className="px-5 mb-6">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Разделы</div>
        <div className="grid grid-cols-3 gap-3">
          {quickLinks.map((link, i) => (
            <button key={link.label} onClick={() => setPage(link.page)} className={`card-dark rounded-2xl p-4 flex flex-col items-center gap-2 transition-all active:scale-95 animate-slide-up`} style={{ animationDelay: `${i * 0.05}s`, animationFillMode: "both" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${link.color}20` }}>
                <Icon name={link.icon} size={20} style={{ color: link.color }} />
              </div>
              <span className="text-xs font-medium text-foreground">{link.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mx-5 mb-6 card-dark rounded-2xl p-4">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Контакты</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2.5 text-sm">
            <Icon name="MapPin" size={14} style={{ color: "#AAEE44" }} />
            <span className="text-foreground">просп. Калинина, 2, Барнаул</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm">
            <Icon name="Phone" size={14} style={{ color: "#FF6B2B" }} />
            <a href="tel:+73852503503" className="text-foreground">7 (3852) 50-35-03</a>
          </div>
          <div className="flex items-center gap-2.5 text-sm">
            <Icon name="Globe" size={14} style={{ color: "#00C4FF" }} />
            <a href="https://mta-barnaul.ru" target="_blank" rel="noreferrer" className="text-foreground">mta-barnaul.ru</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── AFISHA ────────────────────────────────────────────────────────────────────

function AfishaPage({ shows, onSelect, setDiaryModal, diary }: { shows: typeof SHOWS; onSelect: (s: typeof SHOWS[0]) => void; setDiaryModal: (s: typeof SHOWS[0]) => void; diary: DiaryEntry[] }) {
  return (
    <div className="pb-nav">
      <div className="px-5 pt-12 pb-4">
        <h1 className="font-display text-3xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: "#AAEE44" }}>Афиша</h1>
        <p className="text-sm text-muted-foreground mt-1">Март — Апрель 2026</p>
      </div>
      <div className="px-5 space-y-4">
        {shows.map((show, i) => {
          const inDiary = diary.find(d => d.showId === show.id);
          return (
            <div key={show.id} className="card-dark rounded-2xl overflow-hidden animate-slide-up" style={{ animationDelay: `${i * 0.05}s`, animationFillMode: "both", border: `1px solid ${show.color}25` }}>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{show.emoji}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: `${show.color}20`, color: show.color }}>{show.age}</span>
                      {inDiary && <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">✓ В дневнике</span>}
                    </div>
                    <h2 className="font-display text-xl font-bold text-foreground" style={{ fontFamily: "'Oswald', sans-serif" }}>{show.title}</h2>
                    <div className="text-xs text-muted-foreground mt-0.5">{show.genre}</div>
                  </div>
                  <div className="text-right ml-3">
                    <div className="text-sm font-bold" style={{ color: show.color }}>{show.date}</div>
                    <div className="text-xs text-muted-foreground">{show.time}</div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Режиссёр:</span> {show.director}
                </div>
                <div className="mt-1 text-xs text-muted-foreground line-clamp-2">{show.desc}</div>
                <div className="flex gap-2 mt-3">
                  <button onClick={() => onSelect(show)} className="flex-1 py-2 rounded-xl text-xs font-semibold border transition-all active:scale-95" style={{ borderColor: show.color, color: show.color }}>
                    Подробнее
                  </button>
                  <button onClick={() => setDiaryModal(show)} className="py-2 px-3 rounded-xl text-xs font-semibold transition-all active:scale-95" style={{ background: show.color, color: "#0D0D1A" }}>
                    + Дневник
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── SHOW DETAIL ───────────────────────────────────────────────────────────────

function ShowDetail({ show, onBack, setPage, diary, setDiaryModal }: { show: typeof SHOWS[0]; onBack: () => void; setPage: (p: Page) => void; diary: DiaryEntry[]; setDiaryModal: (s: typeof SHOWS[0]) => void }) {
  const inDiary = diary.find(d => d.showId === show.id);
  return (
    <div className="pb-nav animate-fade-in">
      <div className="relative px-5 pt-12 pb-6" style={{ background: `linear-gradient(160deg, ${show.color}18, transparent)` }}>
        <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4 active:opacity-60">
          <Icon name="ChevronLeft" size={18} /> Афиша
        </button>
        <div className="text-5xl mb-3">{show.emoji}</div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2.5 py-1 rounded-full font-bold" style={{ background: show.color, color: "#0D0D1A" }}>{show.age}</span>
          <span className="text-xs text-muted-foreground">{show.genre}</span>
        </div>
        <h1 className="font-display text-4xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: show.color }}>{show.title}</h1>
      </div>
      <div className="px-5 space-y-4">
        <div className="card-dark rounded-2xl p-4">
          <div className="grid grid-cols-3 gap-3 text-center">
            {[{ label: "Дата", value: show.date, color: show.color }, { label: "Время", value: show.time, color: "foreground" }, { label: "Цена", value: show.price, color: "foreground" }].map((item) => (
              <div key={item.label}>
                <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                <div className="text-sm font-bold" style={item.color !== "foreground" ? { color: item.color } : {}}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-dark rounded-2xl p-4">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">О спектакле</div>
          <p className="text-sm text-foreground leading-relaxed">{show.desc}</p>
        </div>
        <div className="card-dark rounded-2xl p-4">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Постановщик</div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${show.color}20` }}>
              <Icon name="Video" size={16} style={{ color: show.color }} />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Режиссёр</div>
              <div className="text-sm font-semibold text-foreground">{show.director}</div>
            </div>
          </div>
        </div>
        <div className="card-dark rounded-2xl p-4">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">В ролях</div>
          <div className="space-y-2">
            {show.cast.map((actor) => (
              <div key={actor} className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center text-xs" style={{ background: `${show.color}20`, color: show.color }}>★</div>
                <span className="text-sm text-foreground">{actor}</span>
              </div>
            ))}
          </div>
        </div>
        {inDiary && (
          <div className="card-dark rounded-2xl p-4" style={{ border: `1px solid ${show.color}30` }}>
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Ваша оценка</div>
            <div className="flex items-center gap-1 mb-2">
              {[1,2,3,4,5].map(s => <span key={s} className="text-xl" style={{ color: s <= inDiary.rating ? show.color : "hsl(240 8% 30%)" }}>{s <= inDiary.rating ? "★" : "☆"}</span>)}
            </div>
            {inDiary.review && <p className="text-sm text-muted-foreground italic">"{inDiary.review}"</p>}
          </div>
        )}
        <div className="flex gap-3">
          <button onClick={() => setPage("tickets")} className="flex-1 py-3.5 rounded-2xl text-sm font-bold transition-all active:scale-95" style={{ background: show.color, color: "#0D0D1A" }}>
            Купить билет
          </button>
          <button onClick={() => setDiaryModal(show)} className="py-3.5 px-4 rounded-2xl text-sm font-bold border transition-all active:scale-95" style={{ borderColor: show.color, color: show.color }}>
            <Icon name="BookOpen" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── TICKETS ───────────────────────────────────────────────────────────────────

function TicketsPage({ shows }: { shows: typeof SHOWS }) {
  return (
    <div className="pb-nav">
      <div className="px-5 pt-12 pb-4">
        <h1 className="font-display text-3xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: "#FF6B2B" }}>Билеты</h1>
        <p className="text-sm text-muted-foreground mt-1">Онлайн-покупка через Касса.ру</p>
      </div>
      <div className="mx-5 mb-5 rounded-2xl p-4" style={{ background: "linear-gradient(135deg, rgba(255,107,43,0.2), rgba(255,107,43,0.05))", border: "1px solid rgba(255,107,43,0.3)" }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: "rgba(255,107,43,0.2)" }}>🎟️</div>
          <div className="flex-1">
            <div className="text-sm font-bold text-foreground">Касса.ру</div>
            <div className="text-xs text-muted-foreground">Официальный партнёр МТА</div>
          </div>
          <Icon name="ExternalLink" size={16} style={{ color: "#FF6B2B" }} />
        </div>
      </div>
      <div className="px-5 space-y-3">
        {shows.map((show, i) => (
          <div key={show.id} className="card-dark rounded-2xl p-4 animate-slide-up" style={{ animationDelay: `${i * 0.05}s`, animationFillMode: "both" }}>
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-base">{show.emoji}</span>
                  <h3 className="font-display text-lg font-bold text-foreground" style={{ fontFamily: "'Oswald', sans-serif" }}>{show.title}</h3>
                </div>
                <div className="text-xs text-muted-foreground">{show.date} · {show.time}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold" style={{ color: show.color }}>{show.price}</div>
                <div className="text-xs text-muted-foreground">{show.age}</div>
              </div>
            </div>
            <a href={`https://kassa.ru/show/search?query=${encodeURIComponent("Молодёжный театр Алтая " + show.title)}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95" style={{ background: "#FF6B2B", color: "#fff" }}>
              <Icon name="Ticket" size={16} />
              Купить на Касса.ру
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── DIARY ─────────────────────────────────────────────────────────────────────

function DiaryPage({ shows, diary, setDiary, setDiaryModal }: { shows: typeof SHOWS; diary: DiaryEntry[]; setDiary: React.Dispatch<React.SetStateAction<DiaryEntry[]>>; setDiaryModal: (s: typeof SHOWS[0]) => void }) {
  const watched = diary.map(d => ({ ...d, show: shows.find(s => s.id === d.showId)! })).filter(d => d.show);
  const avgRating = watched.length ? (watched.reduce((sum, d) => sum + d.rating, 0) / watched.length).toFixed(1) : "—";

  return (
    <div className="pb-nav">
      <div className="px-5 pt-12 pb-4">
        <h1 className="font-display text-3xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: "#00C4FF" }}>Театральный дневник</h1>
        <p className="text-sm text-muted-foreground mt-1">Ваши впечатления от спектаклей</p>
      </div>

      {watched.length > 0 && (
        <div className="mx-5 mb-5 grid grid-cols-3 gap-3">
          {[{ label: "Просмотрено", value: watched.length, color: "#00C4FF" }, { label: "Ср. оценка", value: avgRating, color: "#AAEE44" }, { label: "Отзывов", value: watched.filter(d => d.review).length, color: "#FF6B2B" }].map((s) => (
            <div key={s.label} className="card-dark rounded-2xl p-3 text-center">
              <div className="font-display text-2xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: s.color }}>{s.value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {watched.length === 0 && (
        <div className="mx-5 card-dark rounded-2xl p-8 text-center mb-5">
          <div className="text-5xl mb-3">📔</div>
          <div className="text-sm font-semibold text-foreground mb-1">Дневник пуст</div>
          <div className="text-xs text-muted-foreground">Оцените просмотренный спектакль через раздел Афиша</div>
        </div>
      )}

      {watched.length > 0 && (
        <div className="px-5 space-y-4 mb-5">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Просмотренные</div>
          {watched.map((entry) => (
            <div key={entry.showId} className="card-dark rounded-2xl p-4" style={{ border: `1px solid ${entry.show.color}25` }}>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-lg">{entry.show.emoji}</span>
                    <h3 className="font-display text-lg font-bold text-foreground" style={{ fontFamily: "'Oswald', sans-serif" }}>{entry.show.title}</h3>
                  </div>
                  <div className="text-xs text-muted-foreground">{entry.date}</div>
                </div>
                <button onClick={() => setDiary(prev => prev.filter(d => d.showId !== entry.showId))} className="text-muted-foreground active:opacity-50 p-1">
                  <Icon name="X" size={14} />
                </button>
              </div>
              <div className="flex items-center gap-1 mb-2">
                {[1,2,3,4,5].map(s => (
                  <span key={s} className="text-lg" style={{ color: s <= entry.rating ? entry.show.color : "hsl(240 8% 30%)" }}>{s <= entry.rating ? "★" : "☆"}</span>
                ))}
                <span className="text-xs text-muted-foreground ml-1">{entry.rating}/5</span>
              </div>
              {entry.review && <p className="text-sm text-muted-foreground italic">"{entry.review}"</p>}
              <button onClick={() => setDiaryModal(entry.show)} className="mt-2 text-xs font-medium" style={{ color: entry.show.color }}>
                Изменить отзыв
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="px-5 mt-2">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Ещё не смотрели</div>
        <div className="space-y-2">
          {shows.filter(s => !diary.find(d => d.showId === s.id)).map(show => (
            <button key={show.id} onClick={() => setDiaryModal(show)} className="w-full card-dark rounded-xl p-3 flex items-center gap-3 text-left transition-all active:scale-95">
              <span className="text-xl">{show.emoji}</span>
              <div className="flex-1">
                <div className="text-sm font-semibold text-foreground">{show.title}</div>
                <div className="text-xs text-muted-foreground">{show.genre}</div>
              </div>
              <Icon name="Plus" size={16} style={{ color: "#00C4FF" }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── ACTORS ────────────────────────────────────────────────────────────────────

function ActorsPage({ actorTab, setActorTab }: { actorTab: "actors" | "directors"; setActorTab: (t: "actors" | "directors") => void }) {
  const list = actorTab === "actors" ? ACTORS : DIRECTORS;
  return (
    <div className="pb-nav">
      <div className="px-5 pt-12 pb-4">
        <h1 className="font-display text-3xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: "#00C4FF" }}>Труппа</h1>
        <p className="text-sm text-muted-foreground mt-1">Артисты и режиссёры МТА</p>
      </div>
      <div className="mx-5 mb-5 flex p-1 rounded-2xl" style={{ background: "hsl(240 12% 10%)" }}>
        {[{ id: "actors" as const, label: "Актёры" }, { id: "directors" as const, label: "Режиссёры" }].map(tab => (
          <button key={tab.id} onClick={() => setActorTab(tab.id)} className="flex-1 py-2 rounded-xl text-sm font-semibold transition-all" style={{ background: actorTab === tab.id ? "#00C4FF" : "transparent", color: actorTab === tab.id ? "#0D0D1A" : "hsl(240 5% 55%)" }}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="px-5 grid grid-cols-2 gap-3">
        {list.map((person, i) => (
          <div key={person.id} className="card-dark rounded-2xl p-4 animate-slide-up" style={{ animationDelay: `${i * 0.05}s`, animationFillMode: "both", border: `1px solid ${person.color}25` }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-3" style={{ background: `${person.color}20` }}>{person.emoji}</div>
            <div className="font-display text-base font-bold text-foreground leading-tight mb-0.5" style={{ fontFamily: "'Oswald', sans-serif" }}>{person.name}</div>
            <div className="text-xs mb-2" style={{ color: person.color }}>{person.title}</div>
            <div className="space-y-1">
              {person.shows.map(show => (
                <div key={show} className="text-xs text-muted-foreground flex items-center gap-1">
                  <span style={{ color: person.color }}>▸</span> {show}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────

function FaqPage({ faqOpen, setFaqOpen, setPage }: { faqOpen: number | null; setFaqOpen: (n: number | null) => void; setPage: (p: Page) => void }) {
  return (
    <div className="pb-nav">
      <div className="px-5 pt-12 pb-4">
        <h1 className="font-display text-3xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: "#AAEE44" }}>ЧаВо</h1>
        <p className="text-sm text-muted-foreground mt-1">Часто задаваемые вопросы</p>
      </div>
      <div className="px-5 space-y-3">
        {FAQ.map((item, i) => (
          <div key={i} className="card-dark rounded-2xl overflow-hidden transition-all animate-slide-up" style={{ animationDelay: `${i * 0.04}s`, animationFillMode: "both", border: faqOpen === i ? "1px solid rgba(170,238,68,0.3)" : "1px solid transparent" }}>
            <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full p-4 flex items-center justify-between gap-3 text-left">
              <span className="text-sm font-semibold text-foreground">{item.q}</span>
              <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform" style={{ background: "rgba(170,238,68,0.15)", transform: faqOpen === i ? "rotate(180deg)" : "rotate(0deg)" }}>
                <Icon name="ChevronDown" size={14} style={{ color: "#AAEE44" }} />
              </div>
            </button>
            {faqOpen === i && (
              <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed animate-fade-in">{item.a}</div>
            )}
          </div>
        ))}
      </div>
      <div className="mx-5 mt-6 card-dark rounded-2xl p-4 mb-4" style={{ border: "1px solid rgba(170,238,68,0.2)" }}>
        <div className="text-sm font-semibold text-foreground mb-1">Остались вопросы?</div>
        <div className="text-xs text-muted-foreground mb-3">Свяжитесь с нами напрямую</div>
        <button onClick={() => setPage("contacts")} className="w-full py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95" style={{ background: "#AAEE44", color: "#0D0D1A" }}>
          Контакты театра
        </button>
      </div>
    </div>
  );
}

// ── CONTACTS ──────────────────────────────────────────────────────────────────

function ContactsPage({ setPage }: { setPage: (p: Page) => void }) {
  const contacts = [
    { icon: "MapPin", label: "Адрес", value: "просп. Калинина, 2, Барнаул", href: "https://yandex.ru/maps/?text=Барнаул+Калинина+2", color: "#AAEE44" },
    { icon: "Phone", label: "Телефон", value: "7 (3852) 50-35-03", href: "tel:+73852503503", color: "#FF6B2B" },
    { icon: "Globe", label: "Сайт", value: "mta-barnaul.ru", href: "https://mta-barnaul.ru", color: "#00C4FF" },
  ];
  return (
    <div className="pb-nav">
      <div className="px-5 pt-12 pb-4">
        <h1 className="font-display text-3xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: "#AAEE44" }}>Контакты</h1>
        <p className="text-sm text-muted-foreground mt-1">Молодёжный театр Алтая</p>
      </div>
      <div className="px-5 space-y-3">
        {contacts.map((c) => (
          <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="card-dark rounded-2xl p-4 flex items-center gap-4 transition-all active:scale-95 block" style={{ border: `1px solid ${c.color}20` }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${c.color}20` }}>
              <Icon name={c.icon} size={20} style={{ color: c.color }} />
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-0.5">{c.label}</div>
              <div className="text-sm font-semibold text-foreground">{c.value}</div>
            </div>
            <Icon name="ChevronRight" size={16} className="ml-auto text-muted-foreground" />
          </a>
        ))}
        <div className="card-dark rounded-2xl p-4">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Касса театра</div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Ежедневно</span>
              <span className="font-semibold" style={{ color: "#AAEE44" }}>10:00 – 19:00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">В день спектакля</span>
              <span className="font-semibold" style={{ color: "#FF6B2B" }}>До начала показа</span>
            </div>
          </div>
        </div>
        <div className="card-dark rounded-2xl p-4">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Мы в сети</div>
          <div className="grid grid-cols-3 gap-2">
            {[{ name: "ВКонтакте", href: "https://vk.com/mtabarnaul", color: "#00C4FF" }, { name: "Telegram", href: "https://t.me/mtabarnaul", color: "#AAEE44" }, { name: "YouTube", href: "https://youtube.com/@mtabarnaul", color: "#FF6B2B" }].map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="rounded-xl py-2 text-center text-xs font-semibold transition-all active:scale-95" style={{ background: `${s.color}20`, color: s.color }}>
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── PROFILE ───────────────────────────────────────────────────────────────────

function ProfilePage({ profileName, setProfileName, diary, shows, setPage }: { profileName: string; setProfileName: (n: string) => void; diary: DiaryEntry[]; shows: typeof SHOWS; setPage: (p: Page) => void }) {
  const [editing, setEditing] = useState(false);
  const [tmp, setTmp] = useState(profileName);
  const avgRating = diary.length ? (diary.reduce((s, d) => s + d.rating, 0) / diary.length).toFixed(1) : "—";

  const menuItems = [
    { icon: "CalendarDays", label: "Афиша", page: "afisha" as Page, color: "#AAEE44" },
    { icon: "Ticket", label: "Купить билет", page: "tickets" as Page, color: "#FF6B2B" },
    { icon: "CircleHelp", label: "ЧаВо", page: "faq" as Page, color: "#00C4FF" },
    { icon: "MapPin", label: "Контакты", page: "contacts" as Page, color: "#AAEE44" },
  ];

  return (
    <div className="pb-nav">
      <div className="px-5 pt-12 pb-6" style={{ background: "linear-gradient(160deg, rgba(0,196,255,0.12), transparent)" }}>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl glow-blue" style={{ background: "rgba(0,196,255,0.15)" }}>🎭</div>
          <div className="flex-1">
            {editing ? (
              <div className="flex gap-2 items-center">
                <input value={tmp} onChange={e => setTmp(e.target.value)} className="flex-1 bg-transparent border-b text-lg font-bold text-foreground outline-none" style={{ borderColor: "#00C4FF" }} autoFocus />
                <button onClick={() => { setProfileName(tmp); setEditing(false); }} style={{ color: "#00C4FF" }} className="text-lg">✓</button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <h2 className="font-display text-xl font-bold text-foreground" style={{ fontFamily: "'Oswald', sans-serif" }}>{profileName}</h2>
                <button onClick={() => { setTmp(profileName); setEditing(true); }} className="text-muted-foreground">
                  <Icon name="Pencil" size={14} />
                </button>
              </div>
            )}
            <div className="text-sm text-muted-foreground">Зритель МТА</div>
          </div>
        </div>
      </div>
      <div className="px-5 grid grid-cols-2 gap-3 mb-5">
        <div className="card-dark rounded-2xl p-4 text-center">
          <div className="font-display text-3xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: "#00C4FF" }}>{diary.length}</div>
          <div className="text-xs text-muted-foreground mt-0.5">Спектаклей в дневнике</div>
        </div>
        <div className="card-dark rounded-2xl p-4 text-center">
          <div className="font-display text-3xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: "#AAEE44" }}>{avgRating}</div>
          <div className="text-xs text-muted-foreground mt-0.5">Средняя оценка</div>
        </div>
      </div>
      <div className="px-5 space-y-2">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Быстрый доступ</div>
        {menuItems.map((item) => (
          <button key={item.label} onClick={() => setPage(item.page)} className="w-full card-dark rounded-2xl p-4 flex items-center gap-3 text-left transition-all active:scale-95">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${item.color}20` }}>
              <Icon name={item.icon} size={18} style={{ color: item.color }} />
            </div>
            <span className="text-sm font-medium text-foreground flex-1">{item.label}</span>
            <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
          </button>
        ))}
      </div>
    </div>
  );
}

// ── DIARY MODAL ───────────────────────────────────────────────────────────────

function DiaryModal({ show, existing, onClose, onSave }: { show: typeof SHOWS[0]; existing?: DiaryEntry; onClose: () => void; onSave: (e: DiaryEntry) => void }) {
  const [rating, setRating] = useState(existing?.rating ?? 0);
  const [review, setReview] = useState(existing?.review ?? "");

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" style={{ maxWidth: "28rem", margin: "0 auto" }}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full card-dark rounded-t-3xl p-6 animate-slide-up" style={{ border: `1px solid ${show.color}30` }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="font-display text-xl font-bold text-foreground" style={{ fontFamily: "'Oswald', sans-serif" }}>{show.emoji} {show.title}</div>
            <div className="text-xs text-muted-foreground">Добавить в дневник</div>
          </div>
          <button onClick={onClose} className="text-muted-foreground active:opacity-50">
            <Icon name="X" size={20} />
          </button>
        </div>
        <div className="mb-4">
          <div className="text-sm font-semibold text-foreground mb-3">Ваша оценка</div>
          <div className="flex items-center gap-3">
            {[1,2,3,4,5].map(s => (
              <button key={s} onClick={() => setRating(s)} className="text-3xl transition-transform active:scale-110">
                <span style={{ color: s <= rating ? show.color : "hsl(240 8% 25%)" }}>{s <= rating ? "★" : "☆"}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <div className="text-sm font-semibold text-foreground mb-2">Отзыв (необязательно)</div>
          <textarea value={review} onChange={e => setReview(e.target.value)} placeholder="Ваши впечатления о спектакле..." rows={3} className="w-full rounded-xl p-3 text-sm text-foreground placeholder:text-muted-foreground outline-none resize-none" style={{ background: "hsl(240 10% 14%)", border: "1px solid hsl(240 8% 22%)" }} />
        </div>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-3 rounded-2xl text-sm font-semibold text-muted-foreground border border-border transition-all active:scale-95">
            Отмена
          </button>
          <button onClick={() => rating > 0 && onSave({ showId: show.id, rating, review, date: new Date().toLocaleDateString("ru-RU") })} disabled={rating === 0} className="flex-1 py-3 rounded-2xl text-sm font-bold transition-all active:scale-95 disabled:opacity-40" style={{ background: show.color, color: "#0D0D1A" }}>
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
}
