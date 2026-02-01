'use client'

interface Category {
  name: string
  slug: string
  count?: number
}

interface CategoryFilterProps {
  categories: Category[]
  activeCategory: string
  onChange: (slug: string) => void
}

export function CategoryFilter({ categories, activeCategory, onChange }: CategoryFilterProps) {
  const allCategories = [{ name: 'All', slug: 'all' }, ...categories]

  return (
    <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
      {allCategories.map((category) => (
        <button
          key={category.slug}
          onClick={() => onChange(category.slug)}
          className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all duration-200 ${
            activeCategory === category.slug
              ? 'bg-primary-500 text-white border-primary-500'
              : 'border-cream-300 text-primary-800/70 hover:border-primary-200 hover:bg-cream-100'
          }`}
        >
          {category.name}
          {category.count !== undefined && (
            <span className="ml-1 opacity-70">({category.count})</span>
          )}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
