'use client'

interface FilterTabsProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function FilterTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-5 py-2.5 text-sm uppercase tracking-wider font-medium border transition-all duration-300 ${
            activeCategory === category
              ? 'bg-white text-dark-950 border-white'
              : 'bg-transparent text-dark-400 border-dark-700 hover:border-dark-500 hover:text-dark-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
