export default function TodoList() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Заголовок */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Мои Задачи</h1>
        <p className="text-gray-600">Организуйте свои дела эффективно</p>
      </div>

      {/* Форма добавления задачи */}
      <div className="mb-6">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Добавить новую задачу..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="low">Низкий</option>
            <option value="medium">Средний</option>
            <option value="high">Высокий</option>
          </select>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Добавить
          </button>
        </div>
      </div>

      {/* Фильтры */}
      <div className="flex gap-2 mb-6">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Все
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
          Активные
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
          Выполненные
        </button>
      </div>

      {/* Статистика */}
      <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
        <span>Всего задач: 0</span>
        <span>Выполнено: 0</span>
      </div>

      {/* Список задач */}
      <div className="space-y-3">
        {/* Пример задачи - удалите когда добавите реальные данные */}
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <input type="checkbox" className="w-5 h-5 text-blue-600" />
          <div className="flex-1">
            <p className="text-gray-800 font-medium">Изучить React хуки</p>
          </div>
          <span className="px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">
            Высокий
          </span>
          <button className="text-red-500 hover:text-red-700 p-1">🗑️</button>
        </div>

        {/* Пустое состояние */}
        <div className="text-center py-12 text-gray-500">
          <div className="text-4xl mb-4">📝</div>
          <p className="text-lg">Пока нет задач</p>
          <p className="text-sm">Добавьте первую задачу выше</p>
        </div>
      </div>
    </div>
  );
}
