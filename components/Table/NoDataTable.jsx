import LoaderTable from 'components/Loader/LoaderTable';

import TableHeaderActions from './TableHeaderActions';

const thClassNames =
	'pl-8 pt-4 pb-4 text-zinc-600 bg-gray-100 h-[44px] tracking-wide leading-tight border-b border-gray-200 text-left text-xs font-bold uppercase';

export default function NoDataTable({
	title,
	enableCategoryFilter,
	filterKey,
	children,
	isPremiumPlan,
	categories,
	onFilterChange,
	categoryFilterData,
	onCategoryFilterChange,
}) {
	return (
		<>
			<TableHeaderActions
				title={title}
				isPremiumPlan={isPremiumPlan}
				isLoading={false}
				showFilter={true}
				enableCategoryFilter
				onFilterChange={onFilterChange}
				onCategoryFilterChange={onCategoryFilterChange}
				categoryFilterData={categoryFilterData}
				filterKey={filterKey}
				categories={categories}
			/>

			{children}
		</>
	);
}
