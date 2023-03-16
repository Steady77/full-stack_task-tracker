import { Dispatch, FC, SetStateAction } from 'react';
import { PER_PAGE } from '../../shared/utils/consts';
import Button from '../ui/form-elements/button/button';
import styles from './pagination.module.scss';

interface PaginationProps {
	totalCount: number;
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination: FC<PaginationProps> = ({
	currentPage,
	totalCount,
	setCurrentPage,
}) => {
	const pagesCount = Math.ceil(totalCount / PER_PAGE);

	return (
		<div className={styles.pagination}>
			{totalCount > PER_PAGE && (
				<>
					<p>
						Страница {currentPage} из {pagesCount}
					</p>
					<Button
						onClick={() => setCurrentPage((prev) => prev - 1)}
						disabled={currentPage === 1}
					>
						Назад
					</Button>
					<Button
						onClick={() => setCurrentPage((prev) => prev + 1)}
						disabled={currentPage === pagesCount}
					>
						Вперед
					</Button>
				</>
			)}
		</div>
	);
};

export default Pagination;
